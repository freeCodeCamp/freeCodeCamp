import { getProfileName, parseKnownFiles } from "@smithy/shared-ini-file-loader";
import { resolveProfileData } from "./resolveProfileData";
export const fromIni = (init = {}) => async () => {
    init.logger?.debug("@aws-sdk/credential-provider-ini", "fromIni");
    const profiles = await parseKnownFiles(init);
    return resolveProfileData(getProfileName(init), profiles, init);
};
