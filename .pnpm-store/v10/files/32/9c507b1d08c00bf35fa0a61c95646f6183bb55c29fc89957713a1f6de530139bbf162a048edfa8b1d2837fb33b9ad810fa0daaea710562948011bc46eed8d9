import packageInfo from "../package.json";
import { defaultProvider as credentialDefaultProvider } from "./credentialDefaultProvider";
import { emitWarningIfUnsupportedVersion as awsCheckVersion } from "@aws-sdk/core";
import { defaultUserAgent } from "@aws-sdk/util-user-agent-node";
import { NODE_REGION_CONFIG_FILE_OPTIONS, NODE_REGION_CONFIG_OPTIONS, NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS, NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS, } from "@smithy/config-resolver";
import { Hash } from "@smithy/hash-node";
import { NODE_MAX_ATTEMPT_CONFIG_OPTIONS, NODE_RETRY_MODE_CONFIG_OPTIONS } from "@smithy/middleware-retry";
import { loadConfig as loadNodeConfig } from "@smithy/node-config-provider";
import { NodeHttpHandler as RequestHandler, streamCollector } from "@smithy/node-http-handler";
import { calculateBodyLength } from "@smithy/util-body-length-node";
import { DEFAULT_RETRY_MODE } from "@smithy/util-retry";
import { getRuntimeConfig as getSharedRuntimeConfig } from "./runtimeConfig.shared";
import { loadConfigsForDefaultMode } from "@smithy/smithy-client";
import { resolveDefaultsModeConfig } from "@smithy/util-defaults-mode-node";
import { emitWarningIfUnsupportedVersion } from "@smithy/smithy-client";
export const getRuntimeConfig = (config) => {
    emitWarningIfUnsupportedVersion(process.version);
    const defaultsMode = resolveDefaultsModeConfig(config);
    const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
    const clientSharedValues = getSharedRuntimeConfig(config);
    awsCheckVersion(process.version);
    return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
        credentialDefaultProvider: config?.credentialDefaultProvider ?? credentialDefaultProvider,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ??
            defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: packageInfo.version }),
        maxAttempts: config?.maxAttempts ?? loadNodeConfig(NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
        region: config?.region ?? loadNodeConfig(NODE_REGION_CONFIG_OPTIONS, NODE_REGION_CONFIG_FILE_OPTIONS),
        requestHandler: RequestHandler.create(config?.requestHandler ?? defaultConfigProvider),
        retryMode: config?.retryMode ??
            loadNodeConfig({
                ...NODE_RETRY_MODE_CONFIG_OPTIONS,
                default: async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE,
            }),
        sha256: config?.sha256 ?? Hash.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? loadNodeConfig(NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
        useFipsEndpoint: config?.useFipsEndpoint ?? loadNodeConfig(NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS),
    };
};
