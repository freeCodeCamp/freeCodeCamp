import { getConfigData } from "./getConfigData";
import { getConfigFilepath } from "./getConfigFilepath";
import { getCredentialsFilepath } from "./getCredentialsFilepath";
import { parseIni } from "./parseIni";
import { slurpFile } from "./slurpFile";
const swallowError = () => ({});
export const CONFIG_PREFIX_SEPARATOR = ".";
export const loadSharedConfigFiles = async (init = {}) => {
    const { filepath = getCredentialsFilepath(), configFilepath = getConfigFilepath() } = init;
    const parsedFiles = await Promise.all([
        slurpFile(configFilepath, {
            ignoreCache: init.ignoreCache,
        })
            .then(parseIni)
            .then(getConfigData)
            .catch(swallowError),
        slurpFile(filepath, {
            ignoreCache: init.ignoreCache,
        })
            .then(parseIni)
            .catch(swallowError),
    ]);
    return {
        configFile: parsedFiles[0],
        credentialsFile: parsedFiles[1],
    };
};
