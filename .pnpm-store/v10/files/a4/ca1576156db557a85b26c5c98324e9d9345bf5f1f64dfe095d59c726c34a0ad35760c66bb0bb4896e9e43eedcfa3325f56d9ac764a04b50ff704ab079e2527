/**
 * Span creation and management functions for MCP server instrumentation
 *
 * Provides unified span creation following OpenTelemetry MCP semantic conventions and our opinitionated take on MCP.
 * Handles both request and notification spans with attribute extraction.
 */
import type { ExtraHandlerData, JsonRpcNotification, JsonRpcRequest, MCPTransport, ResolvedMcpOptions } from './types';
/**
 * Creates a span for incoming MCP notifications
 * @param jsonRpcMessage - Notification message
 * @param transport - MCP transport instance
 * @param extra - Extra handler data
 * @param options - Resolved MCP options
 * @param callback - Span execution callback
 * @returns Span execution result
 */
export declare function createMcpNotificationSpan(jsonRpcMessage: JsonRpcNotification, transport: MCPTransport, extra: ExtraHandlerData, options: ResolvedMcpOptions, callback: () => unknown): unknown;
/**
 * Creates a span for outgoing MCP notifications
 * @param jsonRpcMessage - Notification message
 * @param transport - MCP transport instance
 * @param options - Resolved MCP options
 * @param callback - Span execution callback
 * @returns Span execution result
 */
export declare function createMcpOutgoingNotificationSpan(jsonRpcMessage: JsonRpcNotification, transport: MCPTransport, options: ResolvedMcpOptions, callback: () => unknown): unknown;
/**
 * Builds span configuration for MCP server requests
 * @param jsonRpcMessage - Request message
 * @param transport - MCP transport instance
 * @param extra - Optional extra handler data
 * @param options - Resolved MCP options
 * @returns Span configuration object
 */
export declare function buildMcpServerSpanConfig(jsonRpcMessage: JsonRpcRequest, transport: MCPTransport, extra?: ExtraHandlerData, options?: ResolvedMcpOptions): {
    name: string;
    op: string;
    forceTransaction: boolean;
    attributes: Record<string, string | number>;
};
//# sourceMappingURL=spans.d.ts.map