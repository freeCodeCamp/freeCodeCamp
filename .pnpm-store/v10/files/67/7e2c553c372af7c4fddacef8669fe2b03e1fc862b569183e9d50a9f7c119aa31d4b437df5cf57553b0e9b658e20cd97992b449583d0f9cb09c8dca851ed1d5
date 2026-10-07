Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const semanticConventions = require('@opentelemetry/semantic-conventions');
const semconv = require('./semconv.js');
const internalTypes = require('./internal-types.js');
const AttributeNames = require('./enums/AttributeNames.js');
const instrumentation = require('@opentelemetry/instrumentation');

function getPluginName(plugin) {
  if (plugin.name) {
    return plugin.name;
  } else {
    return plugin.pkg.name;
  }
}
const isLifecycleExtType = (variableToCheck) => {
  return typeof variableToCheck === "string" && internalTypes.HapiLifecycleMethodNames.has(variableToCheck);
};
const isLifecycleExtEventObj = (variableToCheck) => {
  const event = variableToCheck?.type;
  return event !== void 0 && isLifecycleExtType(event);
};
const isDirectExtInput = (variableToCheck) => {
  return Array.isArray(variableToCheck) && variableToCheck.length <= 3 && isLifecycleExtType(variableToCheck[0]) && typeof variableToCheck[1] === "function";
};
const isPatchableExtMethod = (variableToCheck) => {
  return !Array.isArray(variableToCheck);
};
const getRouteMetadata = (route, semconvStability, pluginName) => {
  const attributes = {
    [semanticConventions.ATTR_HTTP_ROUTE]: route.path
  };
  if (semconvStability & instrumentation.SemconvStability.OLD) {
    attributes[semconv.ATTR_HTTP_METHOD] = route.method;
  }
  if (semconvStability & instrumentation.SemconvStability.STABLE) {
    attributes[semanticConventions.ATTR_HTTP_REQUEST_METHOD] = route.method;
  }
  let name;
  if (pluginName) {
    attributes[AttributeNames.AttributeNames.HAPI_TYPE] = internalTypes.HapiLayerType.PLUGIN;
    attributes[AttributeNames.AttributeNames.PLUGIN_NAME] = pluginName;
    name = `${pluginName}: route - ${route.path}`;
  } else {
    attributes[AttributeNames.AttributeNames.HAPI_TYPE] = internalTypes.HapiLayerType.ROUTER;
    name = `route - ${route.path}`;
  }
  return { attributes, name };
};
const getExtMetadata = (extPoint, pluginName, methodName) => {
  let baseName = `ext - ${extPoint}`;
  if (methodName && methodName !== "method") {
    baseName = `ext - ${extPoint} - ${methodName}`;
  }
  if (pluginName) {
    return {
      attributes: {
        [AttributeNames.AttributeNames.EXT_TYPE]: extPoint,
        [AttributeNames.AttributeNames.HAPI_TYPE]: internalTypes.HapiLayerType.EXT,
        [AttributeNames.AttributeNames.PLUGIN_NAME]: pluginName
      },
      name: `${pluginName}: ${baseName}`
    };
  }
  return {
    attributes: {
      [AttributeNames.AttributeNames.EXT_TYPE]: extPoint,
      [AttributeNames.AttributeNames.HAPI_TYPE]: internalTypes.HapiLayerType.EXT
    },
    name: baseName
  };
};
const getPluginFromInput = (pluginObj) => {
  if ("plugin" in pluginObj) {
    if ("plugin" in pluginObj.plugin) {
      return pluginObj.plugin.plugin;
    }
    return pluginObj.plugin;
  }
  return pluginObj;
};

exports.getExtMetadata = getExtMetadata;
exports.getPluginFromInput = getPluginFromInput;
exports.getPluginName = getPluginName;
exports.getRouteMetadata = getRouteMetadata;
exports.isDirectExtInput = isDirectExtInput;
exports.isLifecycleExtEventObj = isLifecycleExtEventObj;
exports.isLifecycleExtType = isLifecycleExtType;
exports.isPatchableExtMethod = isPatchableExtMethod;
//# sourceMappingURL=utils.js.map
