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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParsedConfigFile = getParsedConfigFile;
const fs = __importStar(require("node:fs"));
const path = __importStar(require("node:path"));
const compilerOptions_1 = require("./compilerOptions");
/**
 * Parses a TSConfig file using the same logic as tsserver.
 *
 * @param configFile the path to the tsconfig.json file, relative to `projectDirectory`
 * @param projectDirectory the project directory to use as the CWD, defaults to `process.cwd()`
 */
function getParsedConfigFile(tsserver, configFile, projectDirectory) {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, @typescript-eslint/internal/eqeq-nullish
    if (tsserver.sys === undefined) {
        throw new Error('`getParsedConfigFile` is only supported in a Node-like environment.');
    }
    const parsed = tsserver.getParsedCommandLineOfConfigFile(configFile, compilerOptions_1.CORE_COMPILER_OPTIONS, {
        fileExists: fs.existsSync,
        getCurrentDirectory,
        onUnRecoverableConfigFileDiagnostic: diag => {
            throw new Error(formatDiagnostics([diag])); // ensures that `parsed` is defined.
        },
        readDirectory: tsserver.sys.readDirectory,
        readFile: file => fs.readFileSync(path.isAbsolute(file) ? file : path.join(getCurrentDirectory(), file), 'utf-8'),
        useCaseSensitiveFileNames: tsserver.sys.useCaseSensitiveFileNames,
    });
    if (parsed?.errors.length) {
        throw new Error([
            "Unable to parse the specified 'tsconfig' file. Ensure it's correct and has valid syntax.",
            formatDiagnostics(parsed.errors),
        ].join('\n\n'));
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return parsed;
    function getCurrentDirectory() {
        return projectDirectory ? path.resolve(projectDirectory) : process.cwd();
    }
    function formatDiagnostics(diagnostics) {
        return tsserver.formatDiagnostics(diagnostics, {
            getCanonicalFileName: f => f,
            getCurrentDirectory,
            getNewLine: () => '\n',
        });
    }
}
