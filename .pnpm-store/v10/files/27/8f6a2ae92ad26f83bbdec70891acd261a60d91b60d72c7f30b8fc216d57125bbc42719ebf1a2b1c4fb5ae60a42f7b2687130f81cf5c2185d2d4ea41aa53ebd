"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEndpointFromConfig = void 0;
const node_config_provider_1 = require("@smithy/node-config-provider");
const getEndpointUrlConfig_1 = require("./getEndpointUrlConfig");
const getEndpointFromConfig = async (serviceId) => (0, node_config_provider_1.loadConfig)((0, getEndpointUrlConfig_1.getEndpointUrlConfig)(serviceId))();
exports.getEndpointFromConfig = getEndpointFromConfig;
