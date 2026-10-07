"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParsedConfigFileFromTSServer = getParsedConfigFileFromTSServer;
const tsconfig_utils_1 = require("@typescript-eslint/tsconfig-utils");
function getParsedConfigFileFromTSServer(tsserver, defaultProject, throwOnFailure, tsconfigRootDir) {
    try {
        return (0, tsconfig_utils_1.getParsedConfigFile)(tsserver, defaultProject, tsconfigRootDir);
    }
    catch (error) {
        if (throwOnFailure) {
            throw new Error(`Could not read Project Service default project '${defaultProject}': ${error.message}`);
        }
    }
    return undefined;
}
