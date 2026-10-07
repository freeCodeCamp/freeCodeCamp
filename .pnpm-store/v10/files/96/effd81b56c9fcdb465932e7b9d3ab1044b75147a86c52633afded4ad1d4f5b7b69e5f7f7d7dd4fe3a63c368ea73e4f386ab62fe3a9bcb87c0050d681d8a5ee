/**
 * Safe error capture utilities for MCP server instrumentation
 *
 * Ensures error reporting never interferes with MCP server operation.
 * All capture operations are wrapped in try-catch to prevent side effects.
 */
import { McpErrorType } from './types';
/**
 * Captures an error without affecting MCP server operation.
 *
 * The active span already contains all MCP context (method, tool, arguments, etc.)
 * @param error - Error to capture
 * @param errorType - Classification of error type for filtering
 * @param extraData - Additional context data to include
 */
export declare function captureError(error: Error, errorType?: McpErrorType, extraData?: Record<string, unknown>): void;
//# sourceMappingURL=errorCapture.d.ts.map
