import { defineIntegration } from '../integration.js';
import { stripMetadataFromStackFrames, addMetadataToStackFrames } from '../metadata.js';
import { forEachEnvelopeItem } from '../utils/envelope.js';

const moduleMetadataIntegration = defineIntegration(() => {
  return {
    name: "ModuleMetadata",
    setup(client) {
      client.on("beforeEnvelope", (envelope) => {
        forEachEnvelopeItem(envelope, (item, type) => {
          if (type === "event") {
            const event = Array.isArray(item) ? item[1] : void 0;
            if (event) {
              stripMetadataFromStackFrames(event);
              item[1] = event;
            }
          }
        });
      });
      client.on("applyFrameMetadata", (event) => {
        if (event.type) {
          return;
        }
        const stackParser = client.getOptions().stackParser;
        addMetadataToStackFrames(stackParser, event);
      });
    }
  };
});

export { moduleMetadataIntegration };
//# sourceMappingURL=moduleMetadata.js.map
