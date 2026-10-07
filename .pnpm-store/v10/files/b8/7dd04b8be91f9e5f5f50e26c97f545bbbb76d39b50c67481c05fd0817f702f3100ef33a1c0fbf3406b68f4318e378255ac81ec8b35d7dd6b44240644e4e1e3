"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjectConfigFiles = getProjectConfigFiles;
const debug_1 = __importDefault(require("debug"));
const fs = __importStar(require("node:fs"));
const path = __importStar(require("node:path"));
const log = (0, debug_1.default)('typescript-eslint:typescript-estree:parseSettings:getProjectConfigFiles');
/**
 * Checks for a matching TSConfig to a file including its parent directories,
 * permanently caching results under each directory it checks.
 *
 * @remarks
 * We don't (yet!) have a way to attach file watchers on disk, but still need to
 * cache file checks for rapid subsequent calls to fs.existsSync. See discussion
 * in https://github.com/typescript-eslint/typescript-eslint/issues/101.
 */
function getProjectConfigFiles(parseSettings, project) {
    if (project !== true) {
        if (project == null || project === false) {
            return null;
        }
        if (Array.isArray(project)) {
            return project;
        }
        return [project];
    }
    log('Looking for tsconfig.json at or above file: %s', parseSettings.filePath);
    let directory = path.dirname(parseSettings.filePath);
    const checkedDirectories = [directory];
    do {
        log('Checking tsconfig.json path: %s', directory);
        const tsconfigPath = path.join(directory, 'tsconfig.json');
        const cached = parseSettings.tsconfigMatchCache.get(directory) ??
            (fs.existsSync(tsconfigPath) && tsconfigPath);
        if (cached) {
            for (const directory of checkedDirectories) {
                parseSettings.tsconfigMatchCache.set(directory, cached);
            }
            return [cached];
        }
        directory = path.dirname(directory);
        checkedDirectories.push(directory);
    } while (directory.length > 1 &&
        directory.length >= parseSettings.tsconfigRootDir.length);
    throw new Error(`project was set to \`true\` but couldn't find any tsconfig.json relative to '${parseSettings.filePath}' within '${parseSettings.tsconfigRootDir}'.`);
}
//# sourceMappingURL=getProjectConfigFiles.js.map