import packageInfo from "../package.json";
import { Sha256 } from "@aws-crypto/sha256-browser";
import { defaultUserAgent } from "@aws-sdk/util-user-agent-browser";
import { DEFAULT_USE_DUALSTACK_ENDPOINT, DEFAULT_USE_FIPS_ENDPOINT } from "@smithy/config-resolver";
import { FetchHttpHandler as RequestHandler, streamCollector } from "@smithy/fetch-http-handler";
import { invalidProvider } from "@smithy/invalid-dependency";
import { calculateBodyLength } from "@smithy/util-body-length-browser";
import { DEFAULT_MAX_ATTEMPTS, DEFAULT_RETRY_MODE } from "@smithy/util-retry";
import { getRuntimeConfig as getSharedRuntimeConfig } from "./runtimeConfig.shared";
import { loadConfigsForDefaultMode } from "@smithy/smithy-client";
import { resolveDefaultsModeConfig } from "@smithy/util-defaults-mode-browser";
export const getRuntimeConfig = (config) => {
    const defaultsMode = resolveDefaultsModeConfig(config);
    const defaultConfigProvider = () => defaultsMode().then(loadConfigsForDefaultMode);
    const clientSharedValues = getSharedRuntimeConfig(config);
    return {
        ...clientSharedValues,
        ...config,
        runtime: "browser",
        defaultsMode,
        bodyLengthChecker: config?.bodyLengthChecker ?? calculateBodyLength,
        credentialDefaultProvider: config?.credentialDefaultProvider ?? ((_) => () => Promise.reject(new Error("Credential is missing"))),
        defaultUserAgentProvider: config?.defaultUserAgentProvider ??
            defaultUserAgent({ serviceId: clientSharedValues.serviceId, clientVersion: packageInfo.version }),
        maxAttempts: config?.maxAttempts ?? DEFAULT_MAX_ATTEMPTS,
        region: config?.region ?? invalidProvider("Region is missing"),
        requestHandler: RequestHandler.create(config?.requestHandler ?? defaultConfigProvider),
        retryMode: config?.retryMode ?? (async () => (await defaultConfigProvider()).retryMode || DEFAULT_RETRY_MODE),
        sha256: config?.sha256 ?? Sha256,
        streamCollector: config?.streamCollector ?? streamCollector,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? (() => Promise.resolve(DEFAULT_USE_DUALSTACK_ENDPOINT)),
        useFipsEndpoint: config?.useFipsEndpoint ?? (() => Promise.resolve(DEFAULT_USE_FIPS_ENDPOINT)),
    };
};
