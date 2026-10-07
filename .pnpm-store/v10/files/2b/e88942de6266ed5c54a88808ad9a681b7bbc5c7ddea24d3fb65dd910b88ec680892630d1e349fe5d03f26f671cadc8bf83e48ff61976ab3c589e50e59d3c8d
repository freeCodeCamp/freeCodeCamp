import { captureException } from '../../exports.js';
import { SEMANTIC_ATTRIBUTE_SENTRY_OP, SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN } from '../../semanticAttributes.js';
import { SPAN_STATUS_ERROR } from '../spanstatus.js';
import { startSpanManual } from '../trace.js';
import { GEN_AI_TOOL_OUTPUT_ATTRIBUTE, GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE, GEN_AI_REQUEST_MODEL_ATTRIBUTE, GEN_AI_OPERATION_NAME_ATTRIBUTE, GEN_AI_TOOL_NAME_ATTRIBUTE, GEN_AI_TOOL_INPUT_ATTRIBUTE } from '../ai/gen-ai-attributes.js';
import { resolveAIRecordingOptions, shouldEnableTruncation } from '../ai/utils.js';
import { LANGCHAIN_ORIGIN } from './constants.js';
import { getAgentNameFromMetadata, extractLlmResponseAttributes, getInvocationParams, extractChatModelRequestAttributes, extractToolDefinitions, extractLLMRequestAttributes } from './utils.js';

function createLangChainCallbackHandler(options = {}) {
  const { recordInputs, recordOutputs } = resolveAIRecordingOptions(options);
  const enableTruncation = shouldEnableTruncation(options.enableTruncation);
  const spanMap = /* @__PURE__ */ new Map();
  const exitSpan = (runId) => {
    const span = spanMap.get(runId);
    if (span?.isRecording()) {
      span.end();
      spanMap.delete(runId);
    }
  };
  const handler = {
    // Required LangChain BaseCallbackHandler properties
    lc_serializable: false,
    lc_namespace: ["langchain_core", "callbacks", "sentry"],
    lc_secrets: void 0,
    lc_attributes: void 0,
    lc_aliases: void 0,
    lc_serializable_keys: void 0,
    lc_id: ["langchain_core", "callbacks", "sentry"],
    lc_kwargs: {},
    name: "SentryCallbackHandler",
    // BaseCallbackHandlerInput boolean flags
    ignoreLLM: false,
    ignoreChain: false,
    ignoreAgent: false,
    ignoreRetriever: false,
    ignoreCustomEvent: false,
    raiseError: false,
    awaitHandlers: true,
    handleLLMStart(llm, prompts, runId, _parentRunId, _extraParams, tags, metadata, _runName) {
      const invocationParams = getInvocationParams(tags);
      const attributes = extractLLMRequestAttributes(
        llm,
        prompts,
        recordInputs,
        enableTruncation,
        invocationParams,
        metadata
      );
      const modelName = attributes[GEN_AI_REQUEST_MODEL_ATTRIBUTE];
      const operationName = attributes[GEN_AI_OPERATION_NAME_ATTRIBUTE];
      startSpanManual(
        {
          name: `${operationName} ${modelName}`,
          op: "gen_ai.chat",
          attributes: {
            ...getAgentNameFromMetadata(metadata),
            ...attributes,
            [SEMANTIC_ATTRIBUTE_SENTRY_OP]: "gen_ai.chat"
          }
        },
        (span) => {
          spanMap.set(runId, span);
          return span;
        }
      );
    },
    // Chat Model Start Handler
    handleChatModelStart(llm, messages, runId, _parentRunId, extraParams, tags, metadata, _runName) {
      const invocationParams = getInvocationParams(tags);
      const attributes = extractChatModelRequestAttributes(
        llm,
        messages,
        recordInputs,
        enableTruncation,
        invocationParams,
        metadata
      );
      const toolDefsJson = extractToolDefinitions(extraParams);
      if (toolDefsJson) {
        attributes[GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE] = toolDefsJson;
      }
      const modelName = attributes[GEN_AI_REQUEST_MODEL_ATTRIBUTE];
      const operationName = attributes[GEN_AI_OPERATION_NAME_ATTRIBUTE];
      startSpanManual(
        {
          name: `${operationName} ${modelName}`,
          op: "gen_ai.chat",
          attributes: {
            ...getAgentNameFromMetadata(metadata),
            ...attributes,
            [SEMANTIC_ATTRIBUTE_SENTRY_OP]: "gen_ai.chat"
          }
        },
        (span) => {
          spanMap.set(runId, span);
          return span;
        }
      );
    },
    // LLM End Handler - note: handleLLMEnd with capital LLM (used by both LLMs and chat models!)
    handleLLMEnd(output, runId, _parentRunId, _tags, _extraParams) {
      const span = spanMap.get(runId);
      if (span?.isRecording()) {
        const attributes = extractLlmResponseAttributes(output, recordOutputs);
        if (attributes) {
          span.setAttributes(attributes);
        }
        exitSpan(runId);
      }
    },
    // LLM Error Handler - note: handleLLMError with capital LLM
    handleLLMError(error, runId) {
      const span = spanMap.get(runId);
      if (span?.isRecording()) {
        span.setStatus({ code: SPAN_STATUS_ERROR, message: "internal_error" });
        exitSpan(runId);
      }
      captureException(error, {
        mechanism: {
          handled: false,
          type: `${LANGCHAIN_ORIGIN}.llm_error_handler`
        }
      });
    },
    // Chain Start Handler
    handleChainStart(chain, inputs, runId, _parentRunId, _tags, metadata, _runType, runName) {
      if (metadata?.__sentry_langgraph__) {
        return;
      }
      const chainName = runName || chain.name || "unknown_chain";
      const attributes = {
        [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ai.langchain",
        "langchain.chain.name": chainName
      };
      if (recordInputs) {
        attributes["langchain.chain.inputs"] = JSON.stringify(inputs);
      }
      startSpanManual(
        {
          name: `chain ${chainName}`,
          op: "gen_ai.invoke_agent",
          attributes: {
            ...attributes,
            [SEMANTIC_ATTRIBUTE_SENTRY_OP]: "gen_ai.invoke_agent"
          }
        },
        (span) => {
          spanMap.set(runId, span);
          return span;
        }
      );
    },
    // Chain End Handler
    handleChainEnd(outputs, runId) {
      const span = spanMap.get(runId);
      if (span?.isRecording()) {
        if (recordOutputs) {
          span.setAttributes({
            "langchain.chain.outputs": JSON.stringify(outputs)
          });
        }
        exitSpan(runId);
      }
    },
    // Chain Error Handler
    handleChainError(error, runId) {
      const span = spanMap.get(runId);
      if (span?.isRecording()) {
        span.setStatus({ code: SPAN_STATUS_ERROR, message: "internal_error" });
        exitSpan(runId);
      }
      captureException(error, {
        mechanism: {
          handled: false,
          type: `${LANGCHAIN_ORIGIN}.chain_error_handler`
        }
      });
    },
    // Tool Start Handler
    handleToolStart(tool, input, runId, _parentRunId, _tags, metadata, runName) {
      if (metadata?.__sentry_langgraph__) {
        return;
      }
      const toolName = runName || tool.name || "unknown_tool";
      const attributes = {
        ...getAgentNameFromMetadata(metadata),
        [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: LANGCHAIN_ORIGIN,
        [GEN_AI_OPERATION_NAME_ATTRIBUTE]: "execute_tool",
        [GEN_AI_TOOL_NAME_ATTRIBUTE]: toolName
      };
      if (recordInputs) {
        attributes[GEN_AI_TOOL_INPUT_ATTRIBUTE] = input;
      }
      startSpanManual(
        {
          name: `execute_tool ${toolName}`,
          op: "gen_ai.execute_tool",
          attributes: {
            ...attributes,
            [SEMANTIC_ATTRIBUTE_SENTRY_OP]: "gen_ai.execute_tool"
          }
        },
        (span) => {
          spanMap.set(runId, span);
          return span;
        }
      );
    },
    // Tool End Handler
    handleToolEnd(output, runId) {
      const span = spanMap.get(runId);
      if (span?.isRecording()) {
        if (recordOutputs) {
          const outputObj = output;
          const content = outputObj && typeof outputObj === "object" && "content" in outputObj ? outputObj.content : output;
          span.setAttributes({
            [GEN_AI_TOOL_OUTPUT_ATTRIBUTE]: typeof content === "string" ? content : JSON.stringify(content)
          });
        }
        exitSpan(runId);
      }
    },
    // Tool Error Handler
    handleToolError(error, runId) {
      const span = spanMap.get(runId);
      if (span?.isRecording()) {
        span.setStatus({ code: SPAN_STATUS_ERROR, message: "internal_error" });
        exitSpan(runId);
      }
      captureException(error, {
        mechanism: {
          handled: false,
          type: `${LANGCHAIN_ORIGIN}.tool_error_handler`
        }
      });
    },
    // LangChain BaseCallbackHandler required methods
    copy() {
      return handler;
    },
    toJSON() {
      return {
        lc: 1,
        type: "not_implemented",
        id: handler.lc_id
      };
    },
    toJSONNotImplemented() {
      return {
        lc: 1,
        type: "not_implemented",
        id: handler.lc_id
      };
    }
  };
  return handler;
}

export { createLangChainCallbackHandler };
//# sourceMappingURL=index.js.map
