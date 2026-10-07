Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const exports$1 = require('../../exports.js');
const semanticAttributes = require('../../semanticAttributes.js');
const spanstatus = require('../spanstatus.js');
const trace = require('../trace.js');
const genAiAttributes = require('../ai/gen-ai-attributes.js');
const utils = require('../ai/utils.js');
const index = require('../langchain/index.js');
const utils$2 = require('../langchain/utils.js');
const constants = require('./constants.js');
const utils$1 = require('./utils.js');

let _insideCreateReactAgent = false;
const SENTRY_PATCHED = "__sentry_patched__";
function instrumentStateGraphCompile(originalCompile, options) {
  if (Object.prototype.hasOwnProperty.call(originalCompile, SENTRY_PATCHED)) {
    return originalCompile;
  }
  const sentryHandler = index.createLangChainCallbackHandler(options);
  const wrapped = new Proxy(originalCompile, {
    apply(target, thisArg, args) {
      if (_insideCreateReactAgent) {
        return Reflect.apply(target, thisArg, args);
      }
      return trace.startSpan(
        {
          op: "gen_ai.create_agent",
          name: "create_agent",
          attributes: {
            [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: constants.LANGGRAPH_ORIGIN,
            [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_OP]: "gen_ai.create_agent",
            [genAiAttributes.GEN_AI_OPERATION_NAME_ATTRIBUTE]: "create_agent"
          }
        },
        (span) => {
          try {
            const compiledGraph = Reflect.apply(target, thisArg, args);
            const compileOptions = args.length > 0 ? args[0] : {};
            if (compileOptions?.name && typeof compileOptions.name === "string") {
              span.setAttribute(genAiAttributes.GEN_AI_AGENT_NAME_ATTRIBUTE, compileOptions.name);
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
            span.setStatus({ code: spanstatus.SPAN_STATUS_ERROR, message: "internal_error" });
            exports$1.captureException(error, {
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
      return trace.startSpan(
        {
          op: "gen_ai.invoke_agent",
          name: "invoke_agent",
          attributes: {
            [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: constants.LANGGRAPH_ORIGIN,
            [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_OP]: genAiAttributes.GEN_AI_INVOKE_AGENT_OPERATION_ATTRIBUTE,
            [genAiAttributes.GEN_AI_OPERATION_NAME_ATTRIBUTE]: "invoke_agent"
          }
        },
        async (span) => {
          try {
            const graphName = compileOptions?.name;
            if (graphName && typeof graphName === "string") {
              span.setAttribute(genAiAttributes.GEN_AI_PIPELINE_NAME_ATTRIBUTE, graphName);
              span.setAttribute(genAiAttributes.GEN_AI_AGENT_NAME_ATTRIBUTE, graphName);
              span.updateName(`invoke_agent ${graphName}`);
            }
            if (modelName) {
              span.setAttribute(genAiAttributes.GEN_AI_REQUEST_MODEL_ATTRIBUTE, modelName);
            }
            const config = args.length > 1 ? args[1] : void 0;
            const configurable = config?.configurable;
            const threadId = configurable?.thread_id;
            if (threadId && typeof threadId === "string") {
              span.setAttribute(genAiAttributes.GEN_AI_CONVERSATION_ID_ATTRIBUTE, threadId);
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
              invokeConfig.callbacks = utils$2._INTERNAL_mergeLangChainCallbackHandler(
                invokeConfig.callbacks,
                sentryCallbackHandler
              );
            }
            const tools = utils$1.extractToolsFromCompiledGraph(graphInstance);
            if (tools) {
              span.setAttribute(genAiAttributes.GEN_AI_REQUEST_AVAILABLE_TOOLS_ATTRIBUTE, JSON.stringify(tools));
            }
            const recordInputs = options.recordInputs;
            const recordOutputs = options.recordOutputs;
            const inputMessages = args.length > 0 ? args[0]?.messages ?? [] : [];
            if (inputMessages && recordInputs) {
              const normalizedMessages = utils$2.normalizeLangChainMessages(inputMessages);
              const { systemInstructions, filteredMessages } = utils.extractSystemInstructions(normalizedMessages);
              if (systemInstructions) {
                span.setAttribute(genAiAttributes.GEN_AI_SYSTEM_INSTRUCTIONS_ATTRIBUTE, systemInstructions);
              }
              const enableTruncation = utils.shouldEnableTruncation(options.enableTruncation);
              const filteredLength = Array.isArray(filteredMessages) ? filteredMessages.length : 0;
              span.setAttributes({
                [genAiAttributes.GEN_AI_INPUT_MESSAGES_ATTRIBUTE]: enableTruncation ? utils.getTruncatedJsonString(filteredMessages) : utils.getJsonString(filteredMessages),
                [genAiAttributes.GEN_AI_INPUT_MESSAGES_ORIGINAL_LENGTH_ATTRIBUTE]: filteredLength
              });
            }
            const result = await Reflect.apply(target, thisArg, args);
            if (recordOutputs) {
              utils$1.setResponseAttributes(span, inputMessages ?? null, result);
            }
            return result;
          } catch (error) {
            span.setStatus({ code: spanstatus.SPAN_STATUS_ERROR, message: "internal_error" });
            exports$1.captureException(error, {
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
  const resolvedOptions = utils.resolveAIRecordingOptions(options);
  const sentryHandler = index.createLangChainCallbackHandler(resolvedOptions);
  const wrapped = new Proxy(originalCreateReactAgent, {
    apply(target, thisArg, args) {
      const llm = utils$1.extractLLMFromParams(args);
      const agentName = utils$1.extractAgentNameFromParams(args);
      const params = args[0];
      if (params && Array.isArray(params.tools) && params.tools.length > 0) {
        utils$1.wrapToolsWithSpans(params.tools, resolvedOptions, agentName ?? void 0);
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
  stateGraph.compile = instrumentStateGraphCompile(stateGraph.compile, utils.resolveAIRecordingOptions(options));
  return stateGraph;
}

exports.instrumentCreateReactAgent = instrumentCreateReactAgent;
exports.instrumentLangGraph = instrumentLangGraph;
exports.instrumentStateGraphCompile = instrumentStateGraphCompile;
//# sourceMappingURL=index.js.map
