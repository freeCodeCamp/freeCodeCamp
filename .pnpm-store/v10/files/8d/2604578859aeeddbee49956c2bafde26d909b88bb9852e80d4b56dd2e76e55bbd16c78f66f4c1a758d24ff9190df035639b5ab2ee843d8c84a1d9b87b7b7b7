import { loadSharedConfigFiles } from "./loadSharedConfigFiles";
import { mergeConfigFiles } from "./mergeConfigFiles";
export const parseKnownFiles = async (init) => {
    const parsedFiles = await loadSharedConfigFiles(init);
    return mergeConfigFiles(parsedFiles.configFile, parsedFiles.credentialsFile);
};
