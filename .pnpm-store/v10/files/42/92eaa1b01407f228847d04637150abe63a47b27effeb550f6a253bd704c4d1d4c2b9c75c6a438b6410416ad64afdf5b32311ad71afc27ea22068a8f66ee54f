import { ATTR_HTTP_ROUTE, ATTR_HTTP_REQUEST_METHOD } from '@opentelemetry/semantic-conventions';
import { ATTR_HTTP_METHOD } from './semconv.js';
import { HapiLifecycleMethodNames, HapiLayerType } from './internal-types.js';
import { AttributeNames } from './enums/AttributeNames.js';
import { SemconvStability } from '@opentelemetry/instrumentation';

function getPluginName(plugin) {
  if (plugin.name) {
    return plugin.name;
  } else {
    return plugin.pkg.name;
  }
}
const isLifecycleExtType = (variableToCheck) => {
  return typeof variableToCheck === "string" && HapiLifecycleMethodNames.has(variableToCheck);
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
    [ATTR_HTTP_ROUTE]: route.path
  };
  if (semconvStability & SemconvStability.OLD) {
    attributes[ATTR_HTTP_METHOD] = route.method;
  }
  if (semconvStability & SemconvStability.STABLE) {
    attributes[ATTR_HTTP_REQUEST_METHOD] = route.method;
  }
  let name;
  if (pluginName) {
    attributes[AttributeNames.HAPI_TYPE] = HapiLayerType.PLUGIN;
    attributes[AttributeNames.PLUGIN_NAME] = pluginName;
    name = `${pluginName}: route - ${route.path}`;
  } else {
    attributes[AttributeNames.HAPI_TYPE] = HapiLayerType.ROUTER;
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
        [AttributeNames.EXT_TYPE]: extPoint,
        [AttributeNames.HAPI_TYPE]: HapiLayerType.EXT,
        [AttributeNames.PLUGIN_NAME]: pluginName
      },
      name: `${pluginName}: ${baseName}`
    };
  }
  return {
    attributes: {
      [AttributeNames.EXT_TYPE]: extPoint,
      [AttributeNames.HAPI_TYPE]: HapiLayerType.EXT
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

export { getExtMetadata, getPluginFromInput, getPluginName, getRouteMetadata, isDirectExtInput, isLifecycleExtEventObj, isLifecycleExtType, isPatchableExtMethod };
//# sourceMappingURL=utils.js.map
