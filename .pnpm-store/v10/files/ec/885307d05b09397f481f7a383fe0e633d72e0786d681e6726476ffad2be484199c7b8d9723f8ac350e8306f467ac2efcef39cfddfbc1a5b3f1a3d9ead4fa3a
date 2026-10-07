Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const exports$1 = require('../../exports.js');
const semanticAttributes = require('../../semanticAttributes.js');
const spanstatus = require('../spanstatus.js');
const trace = require('../trace.js');
const genAiAttributes = require('../ai/gen-ai-attributes.js');
const utils = require('../ai/utils.js');
const constants = require('./constants.js');
const utils$1 = require('./utils.js');

function createLangChainCallbackHandler(options = {}) {
  const { recordInputs, recordOutputs } = utils.resolveAIRecordingOptions(options);
  const enableTruncation = utils.shouldEnableTruncation(options.enableTruncation);
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
      const invocationParams = utils$1.getInvocationParams(tags);
      const attributes = utils$1.extractLLMRequestAttributes(
        llm,
        prompts,
        recordInputs,
        enableTruncation,
        invocationParams,
        metadata
      );
      const modelName = attributes[genAiAttributes.GEN_AI_REQUEST_MODEL_ATTRIBUTE];
      const operationName = attributes[genAiAttributes.GEN_AI_OPERATION_NAME_ATTRIBUTE];
      trace.startSpanManual(
        {
          name: `${operationName} ${modelName}`,
          op: "gen_ai.chat",
          attributes: {
            ...utils$1.getAgentNameFromMetadata(metadata),
            ...attributes,
            [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "gen_ai.chat"
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
      const invocationParams = utils$1.getInvocationParams(tags);
      const attributes = utils$1.extractChatModelRequestAttributes(
        llm,
        messages,
        recordInputs,
        enableTruncation,
        invocationParams,
        metadata
      );
      const toolDefsJson = utils$1.extractToolDefinitions(extraParams);
      if (toolDefsJson) {
        attributes[genAiAttributes.GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE] = toolDefsJson;
      }
      const modelName = attributes[genAiAttributes.GEN_AI_REQUEST_MODEL_ATTRIBUTE];
      const operationName = attributes[genAiAttributes.GEN_AI_OPERATION_NAME_ATTRIBUTE];
      trace.startSpanManual(
        {
          name: `${operationName} ${modelName}`,
          op: "gen_ai.chat",
          attributes: {
            ...utils$1.getAgentNameFromMetadata(metadata),
            ...attributes,
            [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "gen_ai.chat"
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
        const attributes = utils$1.extractLlmResponseAttributes(output, recordOutputs);
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
        span.setStatus({ code: spanstatus.SPAN_STATUS_ERROR, message: "internal_error" });
        exitSpan(runId);
      }
      exports$1.captureException(error, {
        mechanism: {
          handled: false,
          type: `${constants.LANGCHAIN_ORIGIN}.llm_error_handler`
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
        [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.ai.langchain",
        "langchain.chain.name": chainName
      };
      if (recordInputs) {
        attributes["langchain.chain.inputs"] = JSON.stringify(inputs);
      }
      trace.startSpanManual(
        {
          name: `chain ${chainName}`,
          op: "gen_ai.invoke_agent",
          attributes: {
            ...attributes,
            [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "gen_ai.invoke_agent"
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
        span.setStatus({ code: spanstatus.SPAN_STATUS_ERROR, message: "internal_error" });
        exitSpan(runId);
      }
      exports$1.captureException(error, {
        mechanism: {
          handled: false,
          type: `${constants.LANGCHAIN_ORIGIN}.chain_error_handler`
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
        ...utils$1.getAgentNameFromMetadata(metadata),
        [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: constants.LANGCHAIN_ORIGIN,
        [genAiAttributes.GEN_AI_OPERATION_NAME_ATTRIBUTE]: "execute_tool",
        [genAiAttributes.GEN_AI_TOOL_NAME_ATTRIBUTE]: toolName
      };
      if (recordInputs) {
        attributes[genAiAttributes.GEN_AI_TOOL_INPUT_ATTRIBUTE] = input;
      }
      trace.startSpanManual(
        {
          name: `execute_tool ${toolName}`,
          op: "gen_ai.execute_tool",
          attributes: {
            ...attributes,
            [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "gen_ai.execute_tool"
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
            [genAiAttributes.GEN_AI_TOOL_OUTPUT_ATTRIBUTE]: typeof content === "string" ? content : JSON.stringify(content)
          });
        }
        exitSpan(runId);
      }
    },
    // Tool Error Handler
    handleToolError(error, runId) {
      const span = spanMap.get(runId);
      if (span?.isRecording()) {
        span.setStatus({ code: spanstatus.SPAN_STATUS_ERROR, message: "internal_error" });
        exitSpan(runId);
      }
      exports$1.captureException(error, {
        mechanism: {
          handled: false,
          type: `${constants.LANGCHAIN_ORIGIN}.tool_error_handler`
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

exports.createLangChainCallbackHandler = createLangChainCallbackHandler;
//# sourceMappingURL=index.js.map
