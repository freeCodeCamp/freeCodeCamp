/**
 * Session and party info extraction functions for MCP server instrumentation
 *
 * Handles extraction of client/server info and session data from MCP messages.
 */
import type { ExtraHandlerData, JsonRpcRequest, MCPTransport, PartyInfo, SessionData } from './types';
/**
 * Extracts session data from "initialize" requests
 * @param request - JSON-RPC "initialize" request containing client info and protocol version
 * @returns Session data extracted from request parameters including protocol version and client info
 */
export declare function extractSessionDataFromInitializeRequest(request: JsonRpcRequest): SessionData;
/**
 * Extracts session data from "initialize" response
 * @param result - "initialize" response result containing server info and protocol version
 * @returns Partial session data extracted from response including protocol version and server info
 */
export declare function extractSessionDataFromInitializeResponse(result: unknown): Partial<SessionData>;
/**
 * Build client attributes from stored client info
 * @param transport - MCP transport instance
 * @returns Client attributes for span instrumentation
 */
export declare function getClientAttributes(transport: MCPTransport): Record<string, string>;
/**
 * Build client attributes from PartyInfo directly
 * @param clientInfo - Client party info
 * @returns Client attributes for span instrumentation
 */
export declare function buildClientAttributesFromInfo(clientInfo?: PartyInfo): Record<string, string>;
/**
 * Build server attributes from stored server info
 * @param transport - MCP transport instance
 * @returns Server attributes for span instrumentation
 */
export declare function getServerAttributes(transport: MCPTransport): Record<string, string>;
/**
 * Build server attributes from PartyInfo directly
 * @param serverInfo - Server party info
 * @returns Server attributes for span instrumentation
 */
export declare function buildServerAttributesFromInfo(serverInfo?: PartyInfo): Record<string, string>;
/**
 * Extracts client connection info from extra handler data
 * @param extra - Extra handler data containing connection info
 * @returns Client address and port information
 */
export declare function extractClientInfo(extra: ExtraHandlerData): {
    address?: string;
    port?: number;
};
/**
 * Extracts transport types based on transport constructor name
 * @param transport - MCP transport instance
 * @returns Transport type mapping for span attributes
 */
export declare function getTransportTypes(transport: MCPTransport): {
    mcpTransport: string;
    networkTransport: string;
};
/**
 * Build transport and network attributes
 * @param transport - MCP transport instance
 * @param extra - Optional extra handler data
 * @returns Transport attributes for span instrumentation
 * @note sessionId may be undefined during initial setup - session should be established by client during initialize flow
 */
export declare function buildTransportAttributes(transport: MCPTransport, extra?: ExtraHandlerData): Record<string, string | number>;
//# sourceMappingURL=sessionExtraction.d.ts.map