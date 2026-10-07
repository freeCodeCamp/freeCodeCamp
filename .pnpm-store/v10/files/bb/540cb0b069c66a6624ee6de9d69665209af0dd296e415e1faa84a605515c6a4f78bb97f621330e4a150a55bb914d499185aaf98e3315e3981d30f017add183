Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const integration = require('../integration.js');
const metadata = require('../metadata.js');
const envelope = require('../utils/envelope.js');

const moduleMetadataIntegration = integration.defineIntegration(() => {
  return {
    name: "ModuleMetadata",
    setup(client) {
      client.on("beforeEnvelope", (envelope$1) => {
        envelope.forEachEnvelopeItem(envelope$1, (item, type) => {
          if (type === "event") {
            const event = Array.isArray(item) ? item[1] : void 0;
            if (event) {
              metadata.stripMetadataFromStackFrames(event);
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
        metadata.addMetadataToStackFrames(stackParser, event);
      });
    }
  };
});

exports.moduleMetadataIntegration = moduleMetadataIntegration;
//# sourceMappingURL=moduleMetadata.js.map
