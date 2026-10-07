import { getCurrentScope, getIsolationScope } from '../currentScopes.js';
import { defineIntegration } from '../integration.js';
import { GEN_AI_CONVERSATION_ID_ATTRIBUTE } from '../semanticAttributes.js';
import { spanToJSON } from '../utils/spanUtils.js';

const INTEGRATION_NAME = "ConversationId";
const _conversationIdIntegration = (() => {
  return {
    name: INTEGRATION_NAME,
    setup(client) {
      client.on("spanStart", (span) => {
        const scopeData = getCurrentScope().getScopeData();
        const isolationScopeData = getIsolationScope().getScopeData();
        const conversationId = scopeData.conversationId || isolationScopeData.conversationId;
        if (conversationId) {
          const { op, data: attributes, description: name } = spanToJSON(span);
          if (!op?.startsWith("gen_ai.") && !attributes["ai.operationId"] && !name?.startsWith("ai.")) {
            return;
          }
          span.setAttribute(GEN_AI_CONVERSATION_ID_ATTRIBUTE, conversationId);
        }
      });
    }
  };
});
const conversationIdIntegration = defineIntegration(_conversationIdIntegration);

export { conversationIdIntegration };
//# sourceMappingURL=conversationId.js.map
