export interface LangGraphOptions {
    /**
     * Enable or disable input recording.
     */
    recordInputs?: boolean;
    /**
     * Enable or disable output recording.
     */
    recordOutputs?: boolean;
    /**
     * Enable or disable truncation of recorded input messages.
     * Defaults to `true`.
     */
    enableTruncation?: boolean;
}
/**
 * LangGraph Tool definition from lc_kwargs
 */
export interface LangGraphToolDefinition {
    name?: string;
    description?: string;
    schema?: unknown;
    func?: (...args: unknown[]) => unknown;
}
/**
 * LangGraph Tool object (DynamicTool, DynamicStructuredTool, etc.)
 */
export interface LangGraphTool {
    [key: string]: unknown;
    lc_kwargs?: LangGraphToolDefinition;
    name?: string;
    description?: string;
}
/**
 * LangGraph ToolNode with tools array
 */
export interface ToolNode {
    [key: string]: unknown;
    tools?: LangGraphTool[];
}
/**
 * LangGraph PregelNode containing a ToolNode
 */
export interface PregelNode {
    [key: string]: unknown;
    runnable?: ToolNode;
}
/**
 * LangGraph StateGraph builder nodes
 */
export interface StateGraphNodes {
    [key: string]: unknown;
    tools?: PregelNode;
}
/**
 * LangGraph StateGraph builder
 */
export interface StateGraphBuilder {
    [key: string]: unknown;
    nodes?: StateGraphNodes;
}
/**
 * Basic interface for compiled graph
 */
export interface CompiledGraph {
    [key: string]: unknown;
    invoke?: (...args: unknown[]) => Promise<unknown>;
    name?: string;
    graph_name?: string;
    lc_kwargs?: {
        [key: string]: unknown;
        name?: string;
    };
    builder?: StateGraphBuilder;
}
/**
 * LangGraph Integration interface for type safety
 */
export interface LangGraphIntegration {
    name: string;
    options: LangGraphOptions;
}
//# sourceMappingURL=types.d.ts.map
