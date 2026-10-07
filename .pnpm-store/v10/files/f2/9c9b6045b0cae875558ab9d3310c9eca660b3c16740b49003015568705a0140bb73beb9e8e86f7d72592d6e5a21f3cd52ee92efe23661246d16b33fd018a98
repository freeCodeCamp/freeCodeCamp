Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const debugBuild = require('../../debug-build.js');
const debugLogger = require('../../utils/debug-logger.js');
const object = require('../../utils/object.js');
const errorCapture = require('./errorCapture.js');

function wrapMethodHandler(serverInstance, methodName) {
  object.fill(serverInstance, methodName, (originalMethod) => {
    return function(name, ...args) {
      const handler = args[args.length - 1];
      if (typeof handler !== "function") {
        return originalMethod.call(this, name, ...args);
      }
      const wrappedHandler = createWrappedHandler(handler, methodName, name);
      return originalMethod.call(this, name, ...args.slice(0, -1), wrappedHandler);
    };
  });
}
function createWrappedHandler(originalHandler, methodName, handlerName) {
  return function(...handlerArgs) {
    try {
      return createErrorCapturingHandler.call(this, originalHandler, methodName, handlerName, handlerArgs);
    } catch (error) {
      debugBuild.DEBUG_BUILD && debugLogger.debug.warn("MCP handler wrapping failed:", error);
      return originalHandler.apply(this, handlerArgs);
    }
  };
}
function createErrorCapturingHandler(originalHandler, methodName, handlerName, handlerArgs) {
  try {
    const result = originalHandler.apply(this, handlerArgs);
    if (result && typeof result === "object" && typeof result.then === "function") {
      return Promise.resolve(result).catch((error) => {
        captureHandlerError(error, methodName, handlerName);
        throw error;
      });
    }
    return result;
  } catch (error) {
    captureHandlerError(error, methodName, handlerName);
    throw error;
  }
}
function captureHandlerError(error, methodName, handlerName) {
  try {
    const extraData = {};
    if (methodName === "tool" || methodName === "registerTool") {
      extraData.tool_name = handlerName;
      if (error.name === "ProtocolValidationError" || error.message.includes("validation") || error.message.includes("protocol")) {
        errorCapture.captureError(error, "validation", extraData);
      } else if (error.name === "ServerTimeoutError" || error.message.includes("timed out") || error.message.includes("timeout")) {
        errorCapture.captureError(error, "timeout", extraData);
      } else {
        errorCapture.captureError(error, "tool_execution", extraData);
      }
    } else if (methodName === "resource" || methodName === "registerResource") {
      extraData.resource_uri = handlerName;
      errorCapture.captureError(error, "resource_execution", extraData);
    } else if (methodName === "prompt" || methodName === "registerPrompt") {
      extraData.prompt_name = handlerName;
      errorCapture.captureError(error, "prompt_execution", extraData);
    }
  } catch (_captureErr) {
  }
}
function wrapToolHandlers(serverInstance) {
  if (typeof serverInstance.tool === "function") wrapMethodHandler(serverInstance, "tool");
  if (typeof serverInstance.registerTool === "function") wrapMethodHandler(serverInstance, "registerTool");
}
function wrapResourceHandlers(serverInstance) {
  if (typeof serverInstance.resource === "function") wrapMethodHandler(serverInstance, "resource");
  if (typeof serverInstance.registerResource === "function") wrapMethodHandler(serverInstance, "registerResource");
}
function wrapPromptHandlers(serverInstance) {
  if (typeof serverInstance.prompt === "function") wrapMethodHandler(serverInstance, "prompt");
  if (typeof serverInstance.registerPrompt === "function") wrapMethodHandler(serverInstance, "registerPrompt");
}
function wrapAllMCPHandlers(serverInstance) {
  wrapToolHandlers(serverInstance);
  wrapResourceHandlers(serverInstance);
  wrapPromptHandlers(serverInstance);
}
function wrapExistingHandlers(serverInstance) {
  const server = serverInstance;
  const registeredTools = server["_registeredTools"];
  if (registeredTools && typeof registeredTools === "object") {
    for (const [name, tool] of Object.entries(registeredTools)) {
      if (typeof tool["executor"] === "function") {
        tool["executor"] = createWrappedHandler(tool["executor"], "registerTool", name);
      }
    }
  }
  const registeredResources = server["_registeredResources"];
  if (registeredResources && typeof registeredResources === "object") {
    for (const [name, resource] of Object.entries(registeredResources)) {
      if (typeof resource["readCallback"] === "function") {
        resource["readCallback"] = createWrappedHandler(
          resource["readCallback"],
          "registerResource",
          name
        );
      }
    }
  }
  const registeredResourceTemplates = server["_registeredResourceTemplates"];
  if (registeredResourceTemplates && typeof registeredResourceTemplates === "object") {
    for (const [name, template] of Object.entries(
      registeredResourceTemplates
    )) {
      if (typeof template["readCallback"] === "function") {
        template["readCallback"] = createWrappedHandler(
          template["readCallback"],
          "registerResource",
          name
        );
      }
    }
  }
  const registeredPrompts = server["_registeredPrompts"];
  if (registeredPrompts && typeof registeredPrompts === "object") {
    for (const [name, prompt] of Object.entries(registeredPrompts)) {
      if (typeof prompt["handler"] === "function") {
        prompt["handler"] = createWrappedHandler(prompt["handler"], "registerPrompt", name);
      }
    }
  }
}

exports.wrapAllMCPHandlers = wrapAllMCPHandlers;
exports.wrapExistingHandlers = wrapExistingHandlers;
exports.wrapPromptHandlers = wrapPromptHandlers;
exports.wrapResourceHandlers = wrapResourceHandlers;
exports.wrapToolHandlers = wrapToolHandlers;
//# sourceMappingURL=handlers.js.map
