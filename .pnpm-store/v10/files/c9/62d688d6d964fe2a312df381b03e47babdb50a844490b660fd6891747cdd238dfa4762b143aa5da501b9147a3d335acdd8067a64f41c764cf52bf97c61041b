interface LoggedRequest {
    url: URL;
    method: string;
    headers: Record<string, string>;
    body: string;
}
/**
 * Formats a mocked request for introspection in browser's console.
 */
declare function serializeRequest(request: Request): Promise<LoggedRequest>;

export { type LoggedRequest, serializeRequest };
