import { format } from 'node:util';
import { _INTERNAL_captureLog } from '@sentry/core';

function captureLog(level, ...args) {
  const [messageOrMessageTemplate, paramsOrAttributes, maybeAttributesOrMetadata, maybeMetadata] = args;
  if (Array.isArray(paramsOrAttributes)) {
    const attributes = { ...maybeAttributesOrMetadata };
    attributes["sentry.message.template"] = messageOrMessageTemplate;
    paramsOrAttributes.forEach((param, index) => {
      attributes[`sentry.message.parameter.${index}`] = param;
    });
    const message = format(messageOrMessageTemplate, ...paramsOrAttributes);
    _INTERNAL_captureLog({ level, message, attributes }, maybeMetadata?.scope);
  } else {
    _INTERNAL_captureLog(
      { level, message: messageOrMessageTemplate, attributes: paramsOrAttributes },
      // type-casting here because from the type definitions we know that `maybeAttributesOrMetadata` is a metadata object (or undefined)
      maybeAttributesOrMetadata?.scope ?? maybeMetadata?.scope
    );
  }
}

export { captureLog };
//# sourceMappingURL=capture.js.map
