Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const util = require('node:util');
const core = require('@sentry/core');

function captureLog(level, ...args) {
  const [messageOrMessageTemplate, paramsOrAttributes, maybeAttributesOrMetadata, maybeMetadata] = args;
  if (Array.isArray(paramsOrAttributes)) {
    const attributes = { ...maybeAttributesOrMetadata };
    attributes["sentry.message.template"] = messageOrMessageTemplate;
    paramsOrAttributes.forEach((param, index) => {
      attributes[`sentry.message.parameter.${index}`] = param;
    });
    const message = util.format(messageOrMessageTemplate, ...paramsOrAttributes);
    core._INTERNAL_captureLog({ level, message, attributes }, maybeMetadata?.scope);
  } else {
    core._INTERNAL_captureLog(
      { level, message: messageOrMessageTemplate, attributes: paramsOrAttributes },
      // type-casting here because from the type definitions we know that `maybeAttributesOrMetadata` is a metadata object (or undefined)
      maybeAttributesOrMetadata?.scope ?? maybeMetadata?.scope
    );
  }
}

exports.captureLog = captureLog;
//# sourceMappingURL=capture.js.map
