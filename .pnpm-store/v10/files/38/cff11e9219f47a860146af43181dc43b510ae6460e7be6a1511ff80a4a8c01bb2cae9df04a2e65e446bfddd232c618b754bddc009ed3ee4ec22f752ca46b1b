/**
 * Core attribute extraction and building functions for MCP server instrumentation
 */
import { JsonRpcNotification, JsonRpcRequest, McpSpanType } from './types';
/**
 * Extracts additional attributes for specific notification types
 * @param method - Notification method name
 * @param params - Notification parameters
 * @param recordInputs - Whether to include actual content or just metadata
 * @returns Method-specific attributes for span instrumentation
 */
export declare function getNotificationAttributes(method: string, params: Record<string, unknown>, recordInputs?: boolean): Record<string, string | number>;
/**
 * Build type-specific attributes based on message type
 * @param type - Span type (request or notification)
 * @param message - JSON-RPC message
 * @param params - Optional parameters for attribute extraction
 * @param recordInputs - Whether to capture input arguments in spans
 * @returns Type-specific attributes for span instrumentation
 */
export declare function buildTypeSpecificAttributes(type: McpSpanType, message: JsonRpcRequest | JsonRpcNotification, params?: Record<string, unknown>, recordInputs?: boolean): Record<string, string | number>;
export { buildTransportAttributes } from './sessionExtraction';
//# sourceMappingURL=attributeExtraction.d.ts.map
