import { captureException } from '../../exports.js';
import { SEMANTIC_ATTRIBUTE_SENTRY_OP, SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN } from '../../semanticAttributes.js';
import { SPAN_STATUS_ERROR } from '../spanstatus.js';
import { startSpan } from '../trace.js';
import { GEN_AI_EXECUTE_TOOL_OPERATION_ATTRIBUTE, GEN_AI_TOOL_INPUT_ATTRIBUTE, GEN_AI_TOOL_OUTPUT_ATTRIBUTE, GEN_AI_TOOL_TYPE_ATTRIBUTE, GEN_AI_TOOL_NAME_ATTRIBUTE, GEN_AI_OPERATION_NAME_ATTRIBUTE, GEN_AI_AGENT_NAME_ATTRIBUTE, GEN_AI_TOOL_DESCRIPTION_ATTRIBUTE, GEN_AI_TOOL_CALL_ID_ATTRIBUTE, GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE, GEN_AI_RESPONSE_TEXT_ATTRIBUTE, GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE, GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE, GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE, GEN_AI_RESPONSE_MODEL_ATTRIBUTE, GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE } from '../ai/gen-ai-attributes.js';
import { normalizeLangChainMessages } from '../langchain/utils.js';
import { LANGGRAPH_ORIGIN } from './constants.js';

function extractLLMFromParams(args) {
  const arg = args[0];
  if (typeof arg !== "object" || !arg || !("llm" in arg) || !arg.llm || typeof arg.llm !== "object") {
    return null;
  }
  const llm = arg.llm;
  if (typeof llm.modelName !== "string" && typeof llm.model !== "string") {
    return null;
  }
  return llm;
}
function extractAgentNameFromParams(args) {
  const arg = args[0];
  if (typeof arg === "object" && !!arg && "name" in arg && typeof arg.name === "string") {
    return arg.name;
  }
  return null;
}
function wrapToolsWithSpans(tools, options, agentName) {
  const SENTRY_WRAPPED = "__sentry_tool_wrapped__";
  for (const tool of tools) {
    if (!tool || typeof tool !== "object") {
      continue;
    }
    const t = tool;
    const originalInvoke = t.invoke;
    if (typeof originalInvoke !== "function" || Object.prototype.hasOwnProperty.call(t, SENTRY_WRAPPED)) {
      continue;
    }
    const toolName = typeof t.name === "string" ? t.name : "unknown_tool";
    const toolDescription = typeof t.description === "string" ? t.description : void 0;
    const wrappedInvoke = new Proxy(originalInvoke, {
      apply(target, thisArg, args) {
        const spanAttributes = {
          [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: LANGGRAPH_ORIGIN,
          [SEMANTIC_ATTRIBUTE_SENTRY_OP]: GEN_AI_EXECUTE_TOOL_OPERATION_ATTRIBUTE,
          [GEN_AI_OPERATION_NAME_ATTRIBUTE]: "execute_tool",
          [GEN_AI_TOOL_NAME_ATTRIBUTE]: toolName,
          [GEN_AI_TOOL_TYPE_ATTRIBUTE]: "function"
        };
        const callConfig = args[1];
        const callAgentName = callConfig?.metadata?.lc_agent_name ?? agentName;
        if (typeof callAgentName === "string") {
          spanAttributes[GEN_AI_AGENT_NAME_ATTRIBUTE] = callAgentName;
        }
        if (toolDescription) {
          spanAttributes[GEN_AI_TOOL_DESCRIPTION_ATTRIBUTE] = toolDescription;
        }
        const input = args[0];
        if (typeof input === "object" && !!input) {
          if ("id" in input && typeof input.id === "string") {
            spanAttributes[GEN_AI_TOOL_CALL_ID_ATTRIBUTE] = input.id;
          }
          if (options.recordInputs) {
            const toolArgs = "args" in input && typeof input.args === "object" ? input.args : input;
            try {
              spanAttributes[GEN_AI_TOOL_INPUT_ATTRIBUTE] = JSON.stringify(toolArgs);
            } catch {
            }
          }
        }
        return startSpan(
          {
            op: GEN_AI_EXECUTE_TOOL_OPERATION_ATTRIBUTE,
            name: `execute_tool ${toolName}`,
            attributes: spanAttributes
          },
          async (span) => {
            try {
              const result = await Reflect.apply(target, thisArg, args);
              if (options.recordOutputs) {
                try {
                  const resultObj = result;
                  const content = resultObj && typeof resultObj === "object" && "content" in resultObj ? resultObj.content : result;
                  span.setAttribute(
                    GEN_AI_TOOL_OUTPUT_ATTRIBUTE,
                    typeof content === "string" ? content : JSON.stringify(content)
                  );
                } catch {
                }
              }
              return result;
            } catch (error) {
              span.setStatus({ code: SPAN_STATUS_ERROR, message: "internal_error" });
              captureException(error, {
                mechanism: {
                  handled: false,
                  type: "auto.ai.langgraph.error"
                }
              });
              throw error;
            }
          }
        );
      }
    });
    t.invoke = wrappedInvoke;
    Object.defineProperty(t, SENTRY_WRAPPED, { value: true, enumerable: false });
  }
  return tools;
}
function extractToolCalls(messages) {
  if (!messages || messages.length === 0) {
    return null;
  }
  const toolCalls = [];
  for (const message of messages) {
    if (message && typeof message === "object") {
      const msgToolCalls = message.tool_calls;
      if (msgToolCalls && Array.isArray(msgToolCalls)) {
        toolCalls.push(...msgToolCalls);
      }
    }
  }
  return toolCalls.length > 0 ? toolCalls : null;
}
function extractTokenUsageFromMessage(message) {
  const msg = message;
  let inputTokens = 0;
  let outputTokens = 0;
  let totalTokens = 0;
  if (msg.usage_metadata && typeof msg.usage_metadata === "object") {
    const usage = msg.usage_metadata;
    if (typeof usage.input_tokens === "number") {
      inputTokens = usage.input_tokens;
    }
    if (typeof usage.output_tokens === "number") {
      outputTokens = usage.output_tokens;
    }
    if (typeof usage.total_tokens === "number") {
      totalTokens = usage.total_tokens;
    }
    return { inputTokens, outputTokens, totalTokens };
  }
  if (msg.response_metadata && typeof msg.response_metadata === "object") {
    const metadata = msg.response_metadata;
    if (metadata.tokenUsage && typeof metadata.tokenUsage === "object") {
      const tokenUsage = metadata.tokenUsage;
      if (typeof tokenUsage.promptTokens === "number") {
        inputTokens = tokenUsage.promptTokens;
      }
      if (typeof tokenUsage.completionTokens === "number") {
        outputTokens = tokenUsage.completionTokens;
      }
      if (typeof tokenUsage.totalTokens === "number") {
        totalTokens = tokenUsage.totalTokens;
      }
    }
  }
  return { inputTokens, outputTokens, totalTokens };
}
function extractModelMetadata(span, message) {
  const msg = message;
  if (msg.response_metadata && typeof msg.response_metadata === "object") {
    const metadata = msg.response_metadata;
    if (metadata.model_name && typeof metadata.model_name === "string") {
      span.setAttribute(GEN_AI_RESPONSE_MODEL_ATTRIBUTE, metadata.model_name);
    }
    if (metadata.finish_reason && typeof metadata.finish_reason === "string") {
      span.setAttribute(GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE, [metadata.finish_reason]);
    }
  }
}
function extractToolsFromCompiledGraph(compiledGraph) {
  if (!compiledGraph.builder?.nodes?.tools?.runnable?.tools) {
    return null;
  }
  const tools = compiledGraph.builder?.nodes?.tools?.runnable?.tools;
  if (!tools || !Array.isArray(tools) || tools.length === 0) {
    return null;
  }
  return tools.map((tool) => ({
    name: tool.lc_kwargs?.name,
    description: tool.lc_kwargs?.description,
    schema: tool.lc_kwargs?.schema
  }));
}
function setResponseAttributes(span, inputMessages, result) {
  const resultObj = result;
  const outputMessages = resultObj?.messages;
  if (!outputMessages || !Array.isArray(outputMessages)) {
    return;
  }
  const inputCount = inputMessages?.length ?? 0;
  const newMessages = outputMessages.length > inputCount ? outputMessages.slice(inputCount) : [];
  if (newMessages.length === 0) {
    return;
  }
  const toolCalls = extractToolCalls(newMessages);
  if (toolCalls) {
    span.setAttribute(GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE, JSON.stringify(toolCalls));
  }
  const normalizedNewMessages = normalizeLangChainMessages(newMessages);
  span.setAttribute(GEN_AI_RESPONSE_TEXT_ATTRIBUTE, JSON.stringify(normalizedNewMessages));
  let totalInputTokens = 0;
  let totalOutputTokens = 0;
  let totalTokens = 0;
  for (const message of newMessages) {
    const tokens = extractTokenUsageFromMessage(message);
    totalInputTokens += tokens.inputTokens;
    totalOutputTokens += tokens.outputTokens;
    totalTokens += tokens.totalTokens;
    extractModelMetadata(span, message);
  }
  if (totalInputTokens > 0) {
    span.setAttribute(GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE, totalInputTokens);
  }
  if (totalOutputTokens > 0) {
    span.setAttribute(GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE, totalOutputTokens);
  }
  if (totalTokens > 0) {
    span.setAttribute(GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE, totalTokens);
  }
}

export { extractAgentNameFromParams, extractLLMFromParams, extractModelMetadata, extractTokenUsageFromMessage, extractToolCalls, extractToolsFromCompiledGraph, setResponseAttributes, wrapToolsWithSpans };
//# sourceMappingURL=utils.js.map
