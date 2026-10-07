/**
 * Transport layer instrumentation for MCP server
 *
 * Handles message interception and response correlation.
 * @see https://modelcontextprotocol.io/specification/2025-06-18/basic/transports
 */
import { MCPTransport, ResolvedMcpOptions } from './types';
/**
 * Wraps transport.onmessage to create spans for incoming messages.
 * For "initialize" requests, extracts and stores client info and protocol version
 * in the session data for the transport.
 * @param transport - MCP transport instance to wrap
 * @param options - Resolved MCP options
 */
export declare function wrapTransportOnMessage(transport: MCPTransport, options: ResolvedMcpOptions): void;
/**
 * Wraps transport.send to handle outgoing messages and response correlation.
 * For "initialize" responses, extracts and stores protocol version and server info
 * in the session data for the transport.
 * @param transport - MCP transport instance to wrap
 * @param options - Resolved MCP options
 */
export declare function wrapTransportSend(transport: MCPTransport, options: ResolvedMcpOptions): void;
/**
 * Wraps transport.onclose to clean up pending spans for this transport only
 * @param transport - MCP transport instance to wrap
 */
export declare function wrapTransportOnClose(transport: MCPTransport): void;
/**
 * Wraps transport error handlers to capture connection errors
 * @param transport - MCP transport instance to wrap
 */
export declare function wrapTransportError(transport: MCPTransport): void;
//# sourceMappingURL=transport.d.ts.map
