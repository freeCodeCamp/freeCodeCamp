import { GLOBAL_OBJ } from './utils/worldwide.js';

const filenameMetadataMap = /* @__PURE__ */ new Map();
const parsedStacks = /* @__PURE__ */ new Set();
function getFilenameToMetadataMap(parser) {
  if (!GLOBAL_OBJ._sentryModuleMetadata) {
    return {};
  }
  const filenameMap = {};
  for (const stack of Object.keys(GLOBAL_OBJ._sentryModuleMetadata)) {
    const metadata = GLOBAL_OBJ._sentryModuleMetadata[stack];
    const frames = parser(stack);
    for (const frame of frames.reverse()) {
      if (frame.filename) {
        filenameMap[frame.filename] = metadata;
        break;
      }
    }
  }
  return filenameMap;
}
function ensureMetadataStacksAreParsed(parser) {
  if (!GLOBAL_OBJ._sentryModuleMetadata) {
    return;
  }
  for (const stack of Object.keys(GLOBAL_OBJ._sentryModuleMetadata)) {
    const metadata = GLOBAL_OBJ._sentryModuleMetadata[stack];
    if (parsedStacks.has(stack)) {
      continue;
    }
    parsedStacks.add(stack);
    const frames = parser(stack);
    for (const frame of frames.reverse()) {
      if (frame.filename) {
        filenameMetadataMap.set(frame.filename, metadata);
        break;
      }
    }
  }
}
function getMetadataForUrl(parser, filename) {
  ensureMetadataStacksAreParsed(parser);
  return filenameMetadataMap.get(filename);
}
function addMetadataToStackFrames(parser, event) {
  event.exception?.values?.forEach((exception) => {
    exception.stacktrace?.frames?.forEach((frame) => {
      if (!frame.filename || frame.module_metadata) {
        return;
      }
      const metadata = getMetadataForUrl(parser, frame.filename);
      if (metadata) {
        frame.module_metadata = metadata;
      }
    });
  });
}
function stripMetadataFromStackFrames(event) {
  event.exception?.values?.forEach((exception) => {
    exception.stacktrace?.frames?.forEach((frame) => {
      delete frame.module_metadata;
    });
  });
}

export { addMetadataToStackFrames, getFilenameToMetadataMap, getMetadataForUrl, stripMetadataFromStackFrames };
//# sourceMappingURL=metadata.js.map
