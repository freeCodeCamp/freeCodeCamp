/**
 * Message validation functions for MCP server instrumentation
 *
 * Provides JSON-RPC 2.0 message type validation and MCP server instance validation.
 */
import { JsonRpcNotification, JsonRpcRequest, JsonRpcResponse } from './types';
/**
 * Validates if a message is a JSON-RPC request
 * @param message - Message to validate
 * @returns True if message is a JSON-RPC request
 */
export declare function isJsonRpcRequest(message: unknown): message is JsonRpcRequest;
/**
 * Validates if a message is a JSON-RPC notification
 * @param message - Message to validate
 * @returns True if message is a JSON-RPC notification
 */
export declare function isJsonRpcNotification(message: unknown): message is JsonRpcNotification;
/**
 * Validates if a message is a JSON-RPC response
 * @param message - Message to validate
 * @returns True if message is a JSON-RPC response
 */
export declare function isJsonRpcResponse(message: unknown): message is JsonRpcResponse;
/**
 * Validates MCP server instance with type checking.
 * Accepts both the legacy API (`tool`, `resource`, `prompt`) used in SDK 1.x
 * and the newer API (`registerTool`, `registerResource`, `registerPrompt`) introduced
 * alongside the legacy API in SDK 1.x and made the only option in SDK 2.x.
 * @param instance - Object to validate as MCP server instance
 * @returns True if instance has required MCP server methods
 */
export declare function validateMcpServerInstance(instance: unknown): boolean;
/**
 * Check if the item is a valid content item
 * @param item - The item to check
 * @returns True if the item is a valid content item, false otherwise
 */
export declare function isValidContentItem(item: unknown): item is Record<string, unknown>;
//# sourceMappingURL=validation.d.ts.map
