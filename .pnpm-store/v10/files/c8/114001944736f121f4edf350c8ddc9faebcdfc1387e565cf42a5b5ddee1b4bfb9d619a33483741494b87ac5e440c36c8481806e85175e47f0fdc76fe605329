"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultEndpointResolver = void 0;
const util_endpoints_1 = require("@smithy/util-endpoints");
const ruleset_1 = require("./ruleset");
const defaultEndpointResolver = (endpointParams, context = {}) => {
    return (0, util_endpoints_1.resolveEndpoint)(ruleset_1.ruleSet, {
        endpointParams: endpointParams,
        logger: context.logger,
    });
};
exports.defaultEndpointResolver = defaultEndpointResolver;
