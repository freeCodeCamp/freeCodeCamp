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
exports.createParseSettings = createParseSettings;
exports.clearTSConfigMatchCache = clearTSConfigMatchCache;
exports.clearTSServerProjectService = clearTSServerProjectService;
const project_service_1 = require("@typescript-eslint/project-service");
const debug_1 = __importDefault(require("debug"));
const node_path_1 = __importDefault(require("node:path"));
const ts = __importStar(require("typescript"));
const shared_1 = require("../create-program/shared");
const validateDefaultProjectForFilesGlob_1 = require("../create-program/validateDefaultProjectForFilesGlob");
const source_files_1 = require("../source-files");
const candidateTSConfigRootDirs_1 = require("./candidateTSConfigRootDirs");
const ExpiringCache_1 = require("./ExpiringCache");
const getProjectConfigFiles_1 = require("./getProjectConfigFiles");
const inferSingleRun_1 = require("./inferSingleRun");
const resolveProjectList_1 = require("./resolveProjectList");
const warnAboutTSVersion_1 = require("./warnAboutTSVersion");
const log = (0, debug_1.default)('typescript-eslint:typescript-estree:parseSettings:createParseSettings');
let TSCONFIG_MATCH_CACHE;
let TSSERVER_PROJECT_SERVICE = null;
// NOTE - we intentionally use "unnecessary" `?.` here because in TS<5.3 this enum doesn't exist
// This object exists so we can centralize these for tracking and so we don't proliferate these across the file
// https://github.com/microsoft/TypeScript/issues/56579
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
const JSDocParsingMode = {
    ParseAll: ts.JSDocParsingMode?.ParseAll,
    ParseForTypeErrors: ts.JSDocParsingMode?.ParseForTypeErrors,
    ParseForTypeInfo: ts.JSDocParsingMode?.ParseForTypeInfo,
    ParseNone: ts.JSDocParsingMode?.ParseNone,
};
/* eslint-enable @typescript-eslint/no-unnecessary-condition */
function createParseSettings(code, tsestreeOptions = {}) {
    const codeFullText = enforceCodeString(code);
    const singleRun = (0, inferSingleRun_1.inferSingleRun)(tsestreeOptions);
    const tsconfigRootDir = (() => {
        if (tsestreeOptions.tsconfigRootDir == null) {
            const inferredTsconfigRootDir = (0, candidateTSConfigRootDirs_1.getInferredTSConfigRootDir)();
            if (node_path_1.default.resolve(inferredTsconfigRootDir) !== inferredTsconfigRootDir) {
                throw new Error(`inferred tsconfigRootDir should be a resolved absolute path, but received: ${JSON.stringify(inferredTsconfigRootDir)}. This is a bug in typescript-eslint! Please report it to us at https://github.com/typescript-eslint/typescript-eslint/issues/new/choose.`);
            }
            return inferredTsconfigRootDir;
        }
        if (typeof tsestreeOptions.tsconfigRootDir === 'string') {
            const userProvidedTsconfigRootDir = tsestreeOptions.tsconfigRootDir;
            if (!node_path_1.default.isAbsolute(userProvidedTsconfigRootDir) ||
                // Ensure it's fully absolute with a drive letter if windows
                (process.platform === 'win32' &&
                    !/^[a-zA-Z]:/.test(userProvidedTsconfigRootDir))) {
                throw new Error(`parserOptions.tsconfigRootDir must be an absolute path, but received: ${JSON.stringify(userProvidedTsconfigRootDir)}. This is a bug in your configuration; please supply an absolute path.`);
            }
            // Deal with any funny business around trailing path separators (a/b/) or relative path segments (/a/b/../c)
            // Since we already know it's absolute, we can safely use path.resolve here.
            return node_path_1.default.resolve(userProvidedTsconfigRootDir);
        }
        throw new Error(`If provided, parserOptions.tsconfigRootDir must be a string, but received a value of type "${typeof tsestreeOptions.tsconfigRootDir}"`);
    })();
    const passedLoggerFn = typeof tsestreeOptions.loggerFn === 'function';
    const filePath = (0, shared_1.ensureAbsolutePath)(typeof tsestreeOptions.filePath === 'string' &&
        tsestreeOptions.filePath !== '<input>'
        ? tsestreeOptions.filePath
        : getFileName(tsestreeOptions.jsx), tsconfigRootDir);
    const extension = node_path_1.default.extname(filePath).toLowerCase();
    const jsDocParsingMode = (() => {
        switch (tsestreeOptions.jsDocParsingMode) {
            case 'all':
                return JSDocParsingMode.ParseAll;
            case 'none':
                return JSDocParsingMode.ParseNone;
            case 'type-info':
                return JSDocParsingMode.ParseForTypeInfo;
            default:
                return JSDocParsingMode.ParseAll;
        }
    })();
    const parseSettings = {
        loc: tsestreeOptions.loc === true,
        range: tsestreeOptions.range === true,
        allowInvalidAST: tsestreeOptions.allowInvalidAST === true,
        code,
        codeFullText,
        comment: tsestreeOptions.comment === true,
        comments: [],
        debugLevel: tsestreeOptions.debugLevel === true
            ? new Set(['typescript-eslint'])
            : Array.isArray(tsestreeOptions.debugLevel)
                ? new Set(tsestreeOptions.debugLevel)
                : new Set(),
        errorOnTypeScriptSyntacticAndSemanticIssues: false,
        errorOnUnknownASTType: tsestreeOptions.errorOnUnknownASTType === true,
        extraFileExtensions: Array.isArray(tsestreeOptions.extraFileExtensions) &&
            tsestreeOptions.extraFileExtensions.every(ext => typeof ext === 'string')
            ? tsestreeOptions.extraFileExtensions
            : [],
        filePath,
        jsDocParsingMode,
        jsx: tsestreeOptions.jsx === true,
        log: typeof tsestreeOptions.loggerFn === 'function'
            ? tsestreeOptions.loggerFn
            : tsestreeOptions.loggerFn === false
                ? () => { } // eslint-disable-line @typescript-eslint/no-empty-function
                : console.log, // eslint-disable-line no-console
        preserveNodeMaps: tsestreeOptions.preserveNodeMaps !== false,
        programs: Array.isArray(tsestreeOptions.programs)
            ? tsestreeOptions.programs
            : null,
        projects: new Map(),
        projectService: tsestreeOptions.projectService ||
            (tsestreeOptions.project &&
                tsestreeOptions.projectService !== false &&
                process.env.TYPESCRIPT_ESLINT_PROJECT_SERVICE === 'true')
            ? populateProjectService(tsestreeOptions.projectService, {
                jsDocParsingMode,
                tsconfigRootDir,
            })
            : undefined,
        setExternalModuleIndicator: tsestreeOptions.sourceType === 'module' ||
            (tsestreeOptions.sourceType == null && extension === ts.Extension.Mjs) ||
            (tsestreeOptions.sourceType == null && extension === ts.Extension.Mts)
            ? (file) => {
                file.externalModuleIndicator = true;
            }
            : undefined,
        singleRun,
        suppressDeprecatedPropertyWarnings: tsestreeOptions.suppressDeprecatedPropertyWarnings ??
            process.env.NODE_ENV !== 'test',
        tokens: tsestreeOptions.tokens === true ? [] : null,
        tsconfigMatchCache: (TSCONFIG_MATCH_CACHE ??= new ExpiringCache_1.ExpiringCache(singleRun
            ? 'Infinity'
            : (tsestreeOptions.cacheLifetime?.glob ??
                ExpiringCache_1.DEFAULT_TSCONFIG_CACHE_DURATION_SECONDS))),
        tsconfigRootDir,
    };
    // TODO: Eventually, parse settings will be validated more thoroughly.
    // https://github.com/typescript-eslint/typescript-eslint/issues/6403
    if (parseSettings.projectService &&
        tsestreeOptions.project &&
        process.env.TYPESCRIPT_ESLINT_IGNORE_PROJECT_AND_PROJECT_SERVICE_ERROR !==
            'true') {
        throw new Error('Enabling "project" does nothing when "projectService" is enabled. You can remove the "project" setting.');
    }
    // debug doesn't support multiple `enable` calls, so have to do it all at once
    if (parseSettings.debugLevel.size > 0) {
        const namespaces = [];
        if (parseSettings.debugLevel.has('typescript-eslint')) {
            namespaces.push('typescript-eslint:*');
        }
        if (parseSettings.debugLevel.has('eslint') ||
            // make sure we don't turn off the eslint debug if it was enabled via --debug
            debug_1.default.enabled('eslint:*,-eslint:code-path')) {
            // https://github.com/eslint/eslint/blob/9dfc8501fb1956c90dc11e6377b4cb38a6bea65d/bin/eslint.js#L25
            namespaces.push('eslint:*,-eslint:code-path');
        }
        debug_1.default.enable(namespaces.join(','));
    }
    if (Array.isArray(tsestreeOptions.programs)) {
        if (!tsestreeOptions.programs.length) {
            throw new Error(`You have set parserOptions.programs to an empty array. This will cause all files to not be found in existing programs. Either provide one or more existing TypeScript Program instances in the array, or remove the parserOptions.programs setting.`);
        }
        log('parserOptions.programs was provided, so parserOptions.project will be ignored.');
    }
    // Providing a program or project service overrides project resolution
    if (!parseSettings.programs && !parseSettings.projectService) {
        parseSettings.projects = (0, resolveProjectList_1.resolveProjectList)({
            cacheLifetime: tsestreeOptions.cacheLifetime,
            project: (0, getProjectConfigFiles_1.getProjectConfigFiles)(parseSettings, tsestreeOptions.project),
            projectFolderIgnoreList: tsestreeOptions.projectFolderIgnoreList,
            singleRun: parseSettings.singleRun,
            tsconfigRootDir,
        });
    }
    // No type-aware linting which means that cross-file (or even same-file) JSDoc is useless
    // So in this specific case we default to 'none' if no value was provided
    if (tsestreeOptions.jsDocParsingMode == null &&
        parseSettings.projects.size === 0 &&
        parseSettings.programs == null &&
        parseSettings.projectService == null) {
        parseSettings.jsDocParsingMode = JSDocParsingMode.ParseNone;
    }
    (0, warnAboutTSVersion_1.warnAboutTSVersion)(parseSettings, passedLoggerFn);
    return parseSettings;
}
function clearTSConfigMatchCache() {
    TSCONFIG_MATCH_CACHE?.clear();
}
function clearTSServerProjectService() {
    TSSERVER_PROJECT_SERVICE = null;
}
/**
 * Ensures source code is a string.
 */
function enforceCodeString(code) {
    return (0, source_files_1.isSourceFile)(code)
        ? code.getFullText(code)
        : typeof code === 'string'
            ? code
            : String(code);
}
/**
 * Compute the filename based on the parser options.
 *
 * Even if jsx option is set in typescript compiler, filename still has to
 * contain .tsx file extension.
 */
function getFileName(jsx) {
    return jsx ? 'estree.tsx' : 'estree.ts';
}
function populateProjectService(optionsRaw, settings) {
    const options = typeof optionsRaw === 'object' ? optionsRaw : {};
    (0, validateDefaultProjectForFilesGlob_1.validateDefaultProjectForFilesGlob)(options.allowDefaultProject);
    TSSERVER_PROJECT_SERVICE ??= (0, project_service_1.createProjectService)({
        options,
        ...settings,
    });
    return TSSERVER_PROJECT_SERVICE;
}
