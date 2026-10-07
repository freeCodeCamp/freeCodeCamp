import { CompiledGraph, LangGraphOptions } from './types';
/**
 * Instruments StateGraph's compile method to create spans for agent creation and invocation
 *
 * Wraps the compile() method to:
 * - Create a `gen_ai.create_agent` span when compile() is called
 * - Automatically wrap the invoke() method on the returned compiled graph with a `gen_ai.invoke_agent` span
 *
 */
export declare function instrumentStateGraphCompile(originalCompile: (...args: unknown[]) => CompiledGraph, options: LangGraphOptions): (...args: unknown[]) => CompiledGraph;
/**
 * Instruments createReactAgent to create invoke_agent and execute_tool spans.
 */
export declare function instrumentCreateReactAgent(originalCreateReactAgent: (...args: unknown[]) => CompiledGraph, options?: LangGraphOptions): (...args: unknown[]) => CompiledGraph;
/**
 * Directly instruments a StateGraph instance to add tracing spans
 *
 * This function can be used to manually instrument LangGraph StateGraph instances
 * in environments where automatic instrumentation is not available or desired.
 *
 * @param stateGraph - The StateGraph instance to instrument
 * @param options - Optional configuration for recording inputs/outputs
 *
 * @example
 * ```typescript
 * import { instrumentLangGraph } from '@sentry/cloudflare';
 * import { StateGraph } from '@langchain/langgraph';
 *
 * const graph = new StateGraph(MessagesAnnotation)
 *   .addNode('agent', mockLlm)
 *   .addEdge(START, 'agent')
 *   .addEdge('agent', END);
 *
 * instrumentLangGraph(graph, { recordInputs: true, recordOutputs: true });
 * const compiled = graph.compile({ name: 'my_agent' });
 * ```
 */
export declare function instrumentLangGraph<T extends {
    compile: (...args: any[]) => any;
}>(stateGraph: T, options?: LangGraphOptions): T;
//# sourceMappingURL=index.d.ts.map
