/**
 * Handler method wrapping for MCP server instrumentation
 *
 * Provides automatic error capture and span correlation for tool, resource,
 * and prompt handlers.
 */
import { MCPServerInstance } from './types';
/**
 * Wraps tool handlers to associate them with request spans.
 * Instruments both `tool` (legacy API) and `registerTool` (new API) if present.
 * @param serverInstance - MCP server instance
 */
export declare function wrapToolHandlers(serverInstance: MCPServerInstance): void;
/**
 * Wraps resource handlers to associate them with request spans.
 * Instruments both `resource` (legacy API) and `registerResource` (new API) if present.
 * @param serverInstance - MCP server instance
 */
export declare function wrapResourceHandlers(serverInstance: MCPServerInstance): void;
/**
 * Wraps prompt handlers to associate them with request spans.
 * Instruments both `prompt` (legacy API) and `registerPrompt` (new API) if present.
 * @param serverInstance - MCP server instance
 */
export declare function wrapPromptHandlers(serverInstance: MCPServerInstance): void;
/**
 * Wraps all MCP handler types for span correlation.
 * Supports both the legacy API (`tool`, `resource`, `prompt`) and the newer API
 * (`registerTool`, `registerResource`, `registerPrompt`), instrumenting whichever methods are present.
 * @param serverInstance - MCP server instance
 */
export declare function wrapAllMCPHandlers(serverInstance: MCPServerInstance): void;
/**
 * Retroactively wraps handlers on tools, resources, and prompts that were registered
 * before `wrapMcpServerWithSentry` was called.
 *
 * The MCP SDK stores registered entries in private maps and invokes them via the entry's
 * own property at call time — `executor` for tools, `readCallback` for resources, and
 * `handler` for prompts. Replacing those properties
 * in-place is therefore equivalent to having wrapped the original registration call.
 *
 * NOTE: This intentionally accesses private MCP SDK internals (`_registeredTools` etc.).
 * The properties and their shapes are verified against @modelcontextprotocol/sdk source:
 * https://github.com/modelcontextprotocol/typescript-sdk/blob/2c0c481cb9dbfd15c8613f765c940a5f5bace94d/packages/server/src/server/mcp.ts#L304
 * When upgrading the MCP SDK, re-verify that these internal maps and their callable
 * properties still exist and are invoked directly (not captured by closure at registration).
 * All access is defensive — if a property is absent or not a function we skip silently.
 * @internal
 */
export declare function wrapExistingHandlers(serverInstance: MCPServerInstance): void;
//# sourceMappingURL=handlers.d.ts.map
