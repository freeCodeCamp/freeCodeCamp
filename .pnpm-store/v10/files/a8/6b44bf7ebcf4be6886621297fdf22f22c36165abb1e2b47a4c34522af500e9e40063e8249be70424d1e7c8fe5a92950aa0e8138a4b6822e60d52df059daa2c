Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const exports$1 = require('../../exports.js');
const semanticAttributes = require('../../semanticAttributes.js');
const trace = require('../trace.js');
const genAiAttributes = require('../ai/gen-ai-attributes.js');
const utils = require('../ai/utils.js');
const constants = require('./constants.js');

function inferSystemFromInstance(instance) {
  const name = instance.constructor?.name ?? "";
  if (name.includes("OpenAI")) return "openai";
  if (name.includes("Google")) return "google_genai";
  if (name.includes("Mistral")) return "mistralai";
  if (name.includes("Vertex")) return "google_vertexai";
  if (name.includes("Bedrock")) return "aws_bedrock";
  if (name.includes("Ollama")) return "ollama";
  if (name.includes("Cloudflare")) return "cloudflare";
  if (name.includes("Cohere")) return "cohere";
  return "langchain";
}
function extractEmbeddingAttributes(instance) {
  const embeddingsInstance = instance ?? {};
  const attributes = {
    [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: constants.LANGCHAIN_ORIGIN,
    [semanticAttributes.SEMANTIC_ATTRIBUTE_SENTRY_OP]: genAiAttributes.GEN_AI_EMBEDDINGS_OPERATION_ATTRIBUTE,
    [genAiAttributes.GEN_AI_OPERATION_NAME_ATTRIBUTE]: "embeddings",
    [genAiAttributes.GEN_AI_REQUEST_MODEL_ATTRIBUTE]: embeddingsInstance.model ?? "unknown"
  };
  attributes[genAiAttributes.GEN_AI_SYSTEM_ATTRIBUTE] = inferSystemFromInstance(embeddingsInstance);
  if ("dimensions" in embeddingsInstance) {
    attributes[genAiAttributes.GEN_AI_REQUEST_DIMENSIONS_ATTRIBUTE] = embeddingsInstance.dimensions;
  }
  if ("encodingFormat" in embeddingsInstance) {
    attributes[genAiAttributes.GEN_AI_REQUEST_ENCODING_FORMAT_ATTRIBUTE] = embeddingsInstance.encodingFormat;
  }
  return attributes;
}
function instrumentEmbeddingMethod(originalMethod, options = {}) {
  const { recordInputs } = utils.resolveAIRecordingOptions(options);
  return new Proxy(originalMethod, {
    apply(target, thisArg, args) {
      const attributes = extractEmbeddingAttributes(thisArg);
      const modelName = attributes[genAiAttributes.GEN_AI_REQUEST_MODEL_ATTRIBUTE] || "unknown";
      if (recordInputs) {
        const input = args[0];
        if (input != null) {
          attributes[genAiAttributes.GEN_AI_EMBEDDINGS_INPUT_ATTRIBUTE] = typeof input === "string" ? input : JSON.stringify(input);
        }
      }
      return trace.startSpan(
        {
          name: `embeddings ${modelName}`,
          op: genAiAttributes.GEN_AI_EMBEDDINGS_OPERATION_ATTRIBUTE,
          attributes
        },
        () => {
          return Reflect.apply(target, thisArg, args).then(void 0, (error) => {
            exports$1.captureException(error, {
              mechanism: { handled: false, type: "auto.ai.langchain" }
            });
            throw error;
          });
        }
      );
    }
  });
}
function instrumentLangChainEmbeddings(instance, options) {
  const embeddingsInstance = instance;
  if (typeof embeddingsInstance.embedQuery === "function") {
    embeddingsInstance.embedQuery = instrumentEmbeddingMethod(
      embeddingsInstance.embedQuery,
      options
    );
  }
  if (typeof embeddingsInstance.embedDocuments === "function") {
    embeddingsInstance.embedDocuments = instrumentEmbeddingMethod(
      embeddingsInstance.embedDocuments,
      options
    );
  }
  return instance;
}

exports.instrumentEmbeddingMethod = instrumentEmbeddingMethod;
exports.instrumentLangChainEmbeddings = instrumentLangChainEmbeddings;
//# sourceMappingURL=embeddings.js.map
