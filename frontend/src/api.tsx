import { fetchWithTimeout } from './utils';

const headers = {'Accept': 'application/json', 'Content-Type': 'application/json'};

type JSONRPCResponse<T> = { result?: T} | { error?: string };

interface RPCResponse<TResult> {
    result?: TResult;
    error?: string;
}

async function fromResponse<T>(response: Response): Promise<RPCResponse<T>> {
    try {
        // Here the JSON is already in JSON-RPC format so return as-is
        return await response.json();
    } catch {
        return {error: (!response.ok && response.statusText) || (response.status == 401 && "User unauthorized") || "Internal error: failed to parse returned JSON"};
    }
}

export interface Details {
    client_id: number,
    name: string,
}

function apiBaseURL() {
    const base = process.env.BASE_URL;
    if (base) {
        return `${base}/api`;
    }
    return "/api";
}

export async function getDetails(): Promise<RPCResponse<Details>> {
    return fromResponse(await fetchWithTimeout(apiBaseURL(), {
        method: 'GET',
        headers: headers
    }));
}

export interface UserDetails {
    id: string,
    instances: Map<String, String>,
}

// See https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#pod-phase
type Phase = "Pending" | "Running" | "Succeeded" | "Failed" | "Unknown";

export async function getInstanceDetails(instanceUUID: string): Promise<JSONRPCResponse<Phase>> {
    return fromResponse(await fetchWithTimeout(`${apiBaseURL()}/${instanceUUID}`, {
        method: 'GET',
        headers: headers
    }));
}

export async function deployInstance(template: string) {
    return fromResponse(await fetchWithTimeout(`${apiBaseURL()}/?template=${template}`, {
        method: 'POST',
        headers: headers
    }));
}

export async function stopInstance(instanceUUID: string) {
    return fromResponse(await fetchWithTimeout(`${apiBaseURL()}/${instanceUUID}`, {
        method: 'DELETE',
        headers: headers
    }));
}

export function githubAuthorizationURL(): string {
    return "/api/login/github";
}

export async function logout() {
    return fromResponse(await fetchWithTimeout(`${apiBaseURL()}/logout`, {
        method: 'GET',
        headers: headers
    }));
}