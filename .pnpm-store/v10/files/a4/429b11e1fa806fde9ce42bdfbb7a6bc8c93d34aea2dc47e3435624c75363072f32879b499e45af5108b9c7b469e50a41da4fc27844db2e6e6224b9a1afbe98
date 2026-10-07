import { Span } from '../../types/span';
import { BaseChatModel, LangChainMessage } from '../langchain/types';
import { CompiledGraph, LangGraphOptions } from './types';
/**
 * Extract LLM model object from createReactAgent params
 */
export declare function extractLLMFromParams(args: unknown[]): BaseChatModel | null;
/**
 * Extract agent name from createReactAgent params
 */
export declare function extractAgentNameFromParams(args: unknown[]): string | null;
/**
 * Wraps an array of LangChain tools so each invocation creates a gen_ai.execute_tool span.
 *
 * Wraps each tool's invoke() method in place. A marker prevents double-wrapping.
 */
export declare function wrapToolsWithSpans(tools: unknown[], options: LangGraphOptions, agentName?: string): unknown[];
/**
 * Extract tool calls from messages
 */
export declare function extractToolCalls(messages: Array<Record<string, unknown>> | null): unknown[] | null;
/**
 * Extract token usage from a message's usage_metadata or response_metadata
 * Returns token counts without setting span attributes
 */
export declare function extractTokenUsageFromMessage(message: LangChainMessage): {
    inputTokens: number;
    outputTokens: number;
    totalTokens: number;
};
/**
 * Extract model and finish reason from a message's response_metadata
 */
export declare function extractModelMetadata(span: Span, message: LangChainMessage): void;
/**
 * Extract tools from compiled graph structure
 *
 * Tools are stored in: compiledGraph.builder.nodes.tools.runnable.tools
 */
export declare function extractToolsFromCompiledGraph(compiledGraph: CompiledGraph): unknown[] | null;
/**
 * Set response attributes on the span
 */
export declare function setResponseAttributes(span: Span, inputMessages: LangChainMessage[] | null, result: unknown): void;
//# sourceMappingURL=utils.d.ts.map
