import { loadConfig } from "@smithy/node-config-provider";
import { platform, release } from "os";
import { env, versions } from "process";
import { isCrtAvailable } from "./is-crt-available";
export { crtAvailability } from "./crt-availability";
export const UA_APP_ID_ENV_NAME = "AWS_SDK_UA_APP_ID";
export const UA_APP_ID_INI_NAME = "sdk-ua-app-id";
export const defaultUserAgent = ({ serviceId, clientVersion }) => {
    const sections = [
        ["aws-sdk-js", clientVersion],
        ["ua", "2.0"],
        [`os/${platform()}`, release()],
        ["lang/js"],
        ["md/nodejs", `${versions.node}`],
    ];
    const crtAvailable = isCrtAvailable();
    if (crtAvailable) {
        sections.push(crtAvailable);
    }
    if (serviceId) {
        sections.push([`api/${serviceId}`, clientVersion]);
    }
    if (env.AWS_EXECUTION_ENV) {
        sections.push([`exec-env/${env.AWS_EXECUTION_ENV}`]);
    }
    const appIdPromise = loadConfig({
        environmentVariableSelector: (env) => env[UA_APP_ID_ENV_NAME],
        configFileSelector: (profile) => profile[UA_APP_ID_INI_NAME],
        default: undefined,
    })();
    let resolvedUserAgent = undefined;
    return async () => {
        if (!resolvedUserAgent) {
            const appId = await appIdPromise;
            resolvedUserAgent = appId ? [...sections, [`app/${appId}`]] : [...sections];
        }
        return resolvedUserAgent;
    };
};
