import { captureException } from '../../exports.js';
import { SEMANTIC_ATTRIBUTE_SENTRY_OP, SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN } from '../../semanticAttributes.js';
import { SPAN_STATUS_ERROR } from '../spanstatus.js';
import { startSpan } from '../trace.js';
import { GEN_AI_PIPELINE_NAME_ATTRIBUTE, GEN_AI_AGENT_NAME_ATTRIBUTE, GEN_AI_REQUEST_MODEL_ATTRIBUTE, GEN_AI_CONVERSATION_ID_ATTRIBUTE, GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE, GEN_AI_SYSTEM_INSTRUCTIONS_ATTRIBUTE, GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE, GEN_AI_INPUT_MESSAGES_ATTRIBUTE, GEN_AI_INVOKE_AGENT_OPERATION_ATTRIBUTE, GEN_AI_OPERATION_NAME_ATTRIBUTE } from '../ai/gen-ai-attributes.js';
import { resolveAIRecordingOptions, extractSystemInstructions, shouldEnableTruncation, getTruncatedJsonString, getJsonString } from '../ai/utils.js';
import { createLangChainCallbackHandler } from '../langchain/index.js';
import { _INTERNAL_mergeLangChainCallbackHandler, normalizeLangChainMessages } from '../langchain/utils.js';
import { LANGGRAPH_ORIGIN } from './constants.js';
import { extractLLMFromParams, extractAgentNameFromParams, wrapToolsWithSpans, extractToolsFromCompiledGraph, setResponseAttributes } from './utils.js';

let _insideCreateReactAgent = false;
const SENTRY_PATCHED = "__sentry_patched__";
function instrumentStateGraphCompile(originalCompile, options) {
  if (Object.prototype.hasOwnProperty.call(originalCompile, SENTRY_PATCHED)) {
    return originalCompile;
  }
  const sentryHandler = createLangChainCallbackHandler(options);
  const wrapped = new Proxy(originalCompile, {
    apply(target, thisArg, args) {
      if (_insideCreateReactAgent) {
        return Reflect.apply(target, thisArg, args);
      }
      return startSpan(
        {
          op: "gen_ai.create_agent",
          name: "create_agent",
          attributes: {
            [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: LANGGRAPH_ORIGIN,
            [SEMANTIC_ATTRIBUTE_SENTRY_OP]: "gen_ai.create_agent",
            [GEN_AI_OPERATION_NAME_ATTRIBUTE]: "create_agent"
          }
        },
        (span) => {
          try {
            const compiledGraph = Reflect.apply(target, thisArg, args);
            const compileOptions = args.length > 0 ? args[0] : {};
            if (compileOptions?.name && typeof compileOptions.name === "string") {
              span.setAttribute(GEN_AI_AGENT_NAME_ATTRIBUTE, compileOptions.name);
              span.updateName(`create_agent ${compileOptions.name}`);
            }
            const originalInvoke = compiledGraph.invoke;
            if (originalInvoke && typeof originalInvoke === "function") {
              compiledGraph.invoke = instrumentCompiledGraphInvoke(
                originalInvoke.bind(compiledGraph),
                compiledGraph,
                compileOptions,
                options,
                void 0,
                sentryHandler
              );
            }
            return compiledGraph;
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
  Object.defineProperty(wrapped, SENTRY_PATCHED, { value: true, enumerable: false });
  return wrapped;
}
function instrumentCompiledGraphInvoke(originalInvoke, graphInstance, compileOptions, options, llm, sentryCallbackHandler) {
  return new Proxy(originalInvoke, {
    apply(target, thisArg, args) {
      const modelName = llm?.modelName ?? llm?.model;
      return startSpan(
        {
          op: "gen_ai.invoke_agent",
          name: "invoke_agent",
          attributes: {
            [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: LANGGRAPH_ORIGIN,
            [SEMANTIC_ATTRIBUTE_SENTRY_OP]: GEN_AI_INVOKE_AGENT_OPERATION_ATTRIBUTE,
            [GEN_AI_OPERATION_NAME_ATTRIBUTE]: "invoke_agent"
          }
        },
        async (span) => {
          try {
            const graphName = compileOptions?.name;
            if (graphName && typeof graphName === "string") {
              span.setAttribute(GEN_AI_PIPELINE_NAME_ATTRIBUTE, graphName);
              span.setAttribute(GEN_AI_AGENT_NAME_ATTRIBUTE, graphName);
              span.updateName(`invoke_agent ${graphName}`);
            }
            if (modelName) {
              span.setAttribute(GEN_AI_REQUEST_MODEL_ATTRIBUTE, modelName);
            }
            const config = args.length > 1 ? args[1] : void 0;
            const configurable = config?.configurable;
            const threadId = configurable?.thread_id;
            if (threadId && typeof threadId === "string") {
              span.setAttribute(GEN_AI_CONVERSATION_ID_ATTRIBUTE, threadId);
            }
            if (sentryCallbackHandler) {
              const invokeConfig = args[1] ?? {};
              args[1] = invokeConfig;
              const existingMetadata = invokeConfig.metadata ?? {};
              invokeConfig.metadata = {
                ...existingMetadata,
                __sentry_langgraph__: true,
                ...typeof graphName === "string" ? { lc_agent_name: graphName } : {}
              };
              invokeConfig.callbacks = _INTERNAL_mergeLangChainCallbackHandler(
                invokeConfig.callbacks,
                sentryCallbackHandler
              );
            }
            const tools = extractToolsFromCompiledGraph(graphInstance);
            if (tools) {
              span.setAttribute(GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE, JSON.stringify(tools));
            }
            const recordInputs = options.recordInputs;
            const recordOutputs = options.recordOutputs;
            const inputMessages = args.length > 0 ? args[0]?.messages ?? [] : [];
            if (inputMessages && recordInputs) {
              const normalizedMessages = normalizeLangChainMessages(inputMessages);
              const { systemInstructions, filteredMessages } = extractSystemInstructions(normalizedMessages);
              if (systemInstructions) {
                span.setAttribute(GEN_AI_SYSTEM_INSTRUCTIONS_ATTRIBUTE, systemInstructions);
              }
              const enableTruncation = shouldEnableTruncation(options.enableTruncation);
              const filteredLength = Array.isArray(filteredMessages) ? filteredMessages.length : 0;
              span.setAttributes({
                [GEN_AI_INPUT_MESSAGES_ATTRIBUTE]: enableTruncation ? getTruncatedJsonString(filteredMessages) : getJsonString(filteredMessages),
                [GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE]: filteredLength
              });
            }
            const result = await Reflect.apply(target, thisArg, args);
            if (recordOutputs) {
              setResponseAttributes(span, inputMessages ?? null, result);
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
}
function instrumentCreateReactAgent(originalCreateReactAgent, options) {
  if (Object.prototype.hasOwnProperty.call(originalCreateReactAgent, SENTRY_PATCHED)) {
    return originalCreateReactAgent;
  }
  const resolvedOptions = resolveAIRecordingOptions(options);
  const sentryHandler = createLangChainCallbackHandler(resolvedOptions);
  const wrapped = new Proxy(originalCreateReactAgent, {
    apply(target, thisArg, args) {
      const llm = extractLLMFromParams(args);
      const agentName = extractAgentNameFromParams(args);
      const params = args[0];
      if (params && Array.isArray(params.tools) && params.tools.length > 0) {
        wrapToolsWithSpans(params.tools, resolvedOptions, agentName ?? void 0);
      }
      _insideCreateReactAgent = true;
      let compiledGraph;
      try {
        compiledGraph = Reflect.apply(target, thisArg, args);
      } finally {
        _insideCreateReactAgent = false;
      }
      const originalInvoke = compiledGraph.invoke;
      if (originalInvoke && typeof originalInvoke === "function") {
        const compileOptions = {};
        if (agentName) {
          compileOptions.name = agentName;
        }
        compiledGraph.invoke = instrumentCompiledGraphInvoke(
          originalInvoke.bind(compiledGraph),
          compiledGraph,
          compileOptions,
          resolvedOptions,
          llm,
          sentryHandler
        );
      }
      return compiledGraph;
    }
  });
  Object.defineProperty(wrapped, SENTRY_PATCHED, { value: true, enumerable: false });
  return wrapped;
}
function instrumentLangGraph(stateGraph, options) {
  stateGraph.compile = instrumentStateGraphCompile(stateGraph.compile, resolveAIRecordingOptions(options));
  return stateGraph;
}

export { instrumentCreateReactAgent, instrumentLangGraph, instrumentStateGraphCompile };
//# sourceMappingURL=index.js.map
