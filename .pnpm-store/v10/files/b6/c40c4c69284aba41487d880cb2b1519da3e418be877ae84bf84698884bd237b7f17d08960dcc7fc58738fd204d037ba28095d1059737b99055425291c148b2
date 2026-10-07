import { captureException } from '../../exports.js';
import { SEMANTIC_ATTRIBUTE_SENTRY_OP, SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN } from '../../semanticAttributes.js';
import { startSpan } from '../trace.js';
import { GEN_AI_EMBEDDINGS_INPUT_ATTRIBUTE, GEN_AI_EMBEDDINGS_OPERATION_ATTRIBUTE, GEN_AI_REQUEST_MODEL_ATTRIBUTE, GEN_AI_SYSTEM_ATTRIBUTE, GEN_AI_REQUEST_DIMENSIONS_ATTRIBUTE, GEN_AI_REQUEST_ENCODING_FORMAT_ATTRIBUTE, GEN_AI_OPERATION_NAME_ATTRIBUTE } from '../ai/gen-ai-attributes.js';
import { resolveAIRecordingOptions } from '../ai/utils.js';
import { LANGCHAIN_ORIGIN } from './constants.js';

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
    [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: LANGCHAIN_ORIGIN,
    [SEMANTIC_ATTRIBUTE_SENTRY_OP]: GEN_AI_EMBEDDINGS_OPERATION_ATTRIBUTE,
    [GEN_AI_OPERATION_NAME_ATTRIBUTE]: "embeddings",
    [GEN_AI_REQUEST_MODEL_ATTRIBUTE]: embeddingsInstance.model ?? "unknown"
  };
  attributes[GEN_AI_SYSTEM_ATTRIBUTE] = inferSystemFromInstance(embeddingsInstance);
  if ("dimensions" in embeddingsInstance) {
    attributes[GEN_AI_REQUEST_DIMENSIONS_ATTRIBUTE] = embeddingsInstance.dimensions;
  }
  if ("encodingFormat" in embeddingsInstance) {
    attributes[GEN_AI_REQUEST_ENCODING_FORMAT_ATTRIBUTE] = embeddingsInstance.encodingFormat;
  }
  return attributes;
}
function instrumentEmbeddingMethod(originalMethod, options = {}) {
  const { recordInputs } = resolveAIRecordingOptions(options);
  return new Proxy(originalMethod, {
    apply(target, thisArg, args) {
      const attributes = extractEmbeddingAttributes(thisArg);
      const modelName = attributes[GEN_AI_REQUEST_MODEL_ATTRIBUTE] || "unknown";
      if (recordInputs) {
        const input = args[0];
        if (input != null) {
          attributes[GEN_AI_EMBEDDINGS_INPUT_ATTRIBUTE] = typeof input === "string" ? input : JSON.stringify(input);
        }
      }
      return startSpan(
        {
          name: `embeddings ${modelName}`,
          op: GEN_AI_EMBEDDINGS_OPERATION_ATTRIBUTE,
          attributes
        },
        () => {
          return Reflect.apply(target, thisArg, args).then(void 0, (error) => {
            captureException(error, {
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

export { instrumentEmbeddingMethod, instrumentLangChainEmbeddings };
//# sourceMappingURL=embeddings.js.map
