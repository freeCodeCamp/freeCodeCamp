/**
 * Request-span correlation system for MCP server instrumentation
 *
 * Handles mapping requestId to span data for correlation with handler execution.
 *
 * Uses sessionId as the primary key for stateful transports. This handles the wrapper
 * transport pattern (e.g., NodeStreamableHTTPServerTransport wrapping WebStandardStreamableHTTPServerTransport)
 * where onmessage and send may receive different `this` values but share the same sessionId.
 *
 * Falls back to WeakMap by transport instance for stateless transports (no sessionId).
 */
import { Span } from '../../types/span';
import { MCPTransport, RequestId, ResolvedMcpOptions } from './types';
/**
 * Stores span context for later correlation with handler execution
 * @param transport - MCP transport instance
 * @param requestId - Request identifier
 * @param span - Active span to correlate
 * @param method - MCP method name
 */
export declare function storeSpanForRequest(transport: MCPTransport, requestId: RequestId, span: Span, method: string): void;
/**
 * Completes span with results and cleans up correlation
 * @param transport - MCP transport instance
 * @param requestId - Request identifier
 * @param result - Execution result for attribute extraction
 * @param options - Resolved MCP options
 * @param hasError - Whether the JSON-RPC response contained an error
 */
export declare function completeSpanWithResults(transport: MCPTransport, requestId: RequestId, result: unknown, options: ResolvedMcpOptions, hasError?: boolean): void;
/**
 * Cleans up pending spans for a specific transport (when that transport closes)
 * @param transport - MCP transport instance
 */
export declare function cleanupPendingSpansForTransport(transport: MCPTransport): void;
//# sourceMappingURL=correlation.d.ts.map
