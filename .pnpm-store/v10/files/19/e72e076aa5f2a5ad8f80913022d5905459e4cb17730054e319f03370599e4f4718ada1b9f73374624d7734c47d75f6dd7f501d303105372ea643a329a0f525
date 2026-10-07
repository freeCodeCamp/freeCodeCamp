Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const currentScopes = require('../currentScopes.js');
const integration = require('../integration.js');
const semanticAttributes = require('../semanticAttributes.js');
const spanUtils = require('../utils/spanUtils.js');

const INTEGRATION_NAME = "ConversationId";
const _conversationIdIntegration = (() => {
  return {
    name: INTEGRATION_NAME,
    setup(client) {
      client.on("spanStart", (span) => {
        const scopeData = currentScopes.getCurrentScope().getScopeData();
        const isolationScopeData = currentScopes.getIsolationScope().getScopeData();
        const conversationId = scopeData.conversationId || isolationScopeData.conversationId;
        if (conversationId) {
          const { op, data: attributes, description: name } = spanUtils.spanToJSON(span);
          if (!op?.startsWith("gen_ai.") && !attributes["ai.operationId"] && !name?.startsWith("ai.")) {
            return;
          }
          span.setAttribute(semanticAttributes.GEN_AI_CONVERSATION_ID_ATTRIBUTE, conversationId);
        }
      });
    }
  };
});
const conversationIdIntegration = integration.defineIntegration(_conversationIdIntegration);

exports.conversationIdIntegration = conversationIdIntegration;
//# sourceMappingURL=conversationId.js.map
