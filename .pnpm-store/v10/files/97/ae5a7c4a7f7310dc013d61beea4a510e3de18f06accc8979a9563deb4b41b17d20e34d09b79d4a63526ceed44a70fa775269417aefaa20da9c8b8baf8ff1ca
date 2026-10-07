"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRuntimeConfig = void 0;
const tslib_1 = require("tslib");
const package_json_1 = tslib_1.__importDefault(require("../package.json"));
const core_1 = require("@aws-sdk/core");
const credential_provider_node_1 = require("@aws-sdk/credential-provider-node");
const util_user_agent_node_1 = require("@aws-sdk/util-user-agent-node");
const config_resolver_1 = require("@smithy/config-resolver");
const hash_node_1 = require("@smithy/hash-node");
const middleware_retry_1 = require("@smithy/middleware-retry");
const node_config_provider_1 = require("@smithy/node-config-provider");
const node_http_handler_1 = require("@smithy/node-http-handler");
const util_body_length_node_1 = require("@smithy/util-body-length-node");
const util_retry_1 = require("@smithy/util-retry");
const runtimeConfig_shared_1 = require("./runtimeConfig.shared");
const smithy_client_1 = require("@smithy/smithy-client");
const util_defaults_mode_node_1 = require("@smithy/util-defaults-mode-node");
const smithy_client_2 = require("@smithy/smithy-client");
const getRuntimeConfig = (config) => {
    (0, smithy_client_2.emitWarningIfUnsupportedVersion)(process.version);
    const defaultsMode = (0, util_defaults_mode_node_1.resolveDefaultsModeConfig)(config);
    const defaultConfigProvider = () => defaultsMode().then(smithy_client_1.loadConfigsForDefaultMode);
    const clientSharedValues = (0, runtimeConfig_shared_1.getRuntimeConfig)(config);
    (0, core_1.emitWarningIfUnsupportedVersion)(process.version);
    return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        bodyLengthChecker: config?.bodyLengthChecker ?? util_body_length_node_1.calculateBodyLength,
        credentialDefaultProvider: config?.credentialDefaultProvider ?? credential_provider_node_1.defaultProvider,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ??
            (0, util_user_agent_node_1.defaultUserAgent)({ serviceId: clientSharedValues.serviceId, clientVersion: package_json_1.default.version }),
        maxAttempts: config?.maxAttempts ?? (0, node_config_provider_1.loadConfig)(middleware_retry_1.NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: config?.region ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_REGION_CONFIG_OPTIONS, config_resolver_1.NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: node_http_handler_1.NodeHttpHandler.create(config?.requestHandler ?? defaultConfigProvider),
        retryMode: config?.retryMode ??
            (0, node_config_provider_1.loadConfig)({
                ...middleware_retry_1.NODE_RETRY_MODE_CONFIG_OPTIONS,
                default: async () => (await defaultConfigProvider()).retryMode || util_retry_1.DEFAULT_RETRY_MODE,
            }),
        sha256: config?.sha256 ?? hash_node_1.Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? node_http_handler_1.streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: config?.useFipsEndpoint ?? (0, node_config_provider_1.loadConfig)(config_resolver_1.NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS),
    };
};
exports.getRuntimeConfig = getRuntimeConfig;
