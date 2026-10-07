import { debugId, toDebugString } from "./debug";
import { EndpointError } from "./types";
import { evaluateRules } from "./utils";
export const resolveEndpoint = (ruleSetObject, options) => {
    const { endpointParams, logger } = options;
    const { parameters, rules } = ruleSetObject;
    options.logger?.debug?.(`${debugId} Initial EndpointParams: ${toDebugString(endpointParams)}`);
    const paramsWithDefault = Object.entries(parameters)
        .filter(([, v]) => v.default != null)
        .map(([k, v]) => [k, v.default]);
    if (paramsWithDefault.length > 0) {
        for (const [paramKey, paramDefaultValue] of paramsWithDefault) {
            endpointParams[paramKey] = endpointParams[paramKey] ?? paramDefaultValue;
        }
    }
    const requiredParams = Object.entries(parameters)
        .filter(([, v]) => v.required)
        .map(([k]) => k);
    for (const requiredParam of requiredParams) {
        if (endpointParams[requiredParam] == null) {
            throw new EndpointError(`Missing required parameter: '${requiredParam}'`);
        }
    }
    const endpoint = evaluateRules(rules, { endpointParams, logger, referenceRecord: {} });
    if (options.endpointParams?.Endpoint) {
        try {
            const givenEndpoint = new URL(options.endpointParams.Endpoint);
            const { protocol, port } = givenEndpoint;
            endpoint.url.protocol = protocol;
            endpoint.url.port = port;
        }
        catch (e) {
        }
    }
    options.logger?.debug?.(`${debugId} Resolved endpoint: ${toDebugString(endpoint)}`);
    return endpoint;
};
