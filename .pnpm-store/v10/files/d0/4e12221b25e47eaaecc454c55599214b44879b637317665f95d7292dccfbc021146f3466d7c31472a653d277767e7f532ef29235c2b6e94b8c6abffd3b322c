/*
  @license
	Rollup.js v4.60.2
	Sat, 18 Apr 2026 13:58:01 GMT - commit a6be82b8abd747458afdc7484319f7b5deb92535

	https://github.com/rollup/rollup

	Released under the MIT License.
*/
'use strict';

const parseAst_js = require('./parseAst.js');
const process$1 = require('node:process');
const path = require('node:path');
const require$$0 = require('path');
const native_js = require('../native.js');
const node_perf_hooks = require('node:perf_hooks');
const promises = require('node:fs/promises');

function _interopNamespaceDefault(e) {
  const n = Object.create(null, { [Symbol.toStringTag]: { value: 'Module' } });
  if (e) {
    for (const k in e) {
      n[k] = e[k];
    }
  }
  n.default = e;
  return n;
}

function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== 'string' && !Array.isArray(e)) { for (const k in e) {
      if (k !== 'default' && !(k in n)) {
        n[k] = e[k];
      }
    } }
  }
  return Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' });
}

const promises__namespace = /*#__PURE__*/_interopNamespaceDefault(promises);

var version = "4.60.2";

function ensureArray$1(items) {
    if (Array.isArray(items)) {
        return items.filter(Boolean);
    }
    if (items) {
        return [items];
    }
    return [];
}

var BuildPhase;
(function (BuildPhase) {
    BuildPhase[BuildPhase["LOAD_AND_PARSE"] = 0] = "LOAD_AND_PARSE";
    BuildPhase[BuildPhase["ANALYSE"] = 1] = "ANALYSE";
    BuildPhase[BuildPhase["GENERATE"] = 2] = "GENERATE";
})(BuildPhase || (BuildPhase = {}));

let textEncoder;
const getHash64 = input => native_js.xxhashBase64Url(ensureBuffer(input));
const getHash36 = input => native_js.xxhashBase36(ensureBuffer(input));
const getHash16 = input => native_js.xxhashBase16(ensureBuffer(input));
const hasherByType = {
    base36: getHash36,
    base64: getHash64,
    hex: getHash16
};
function ensureBuffer(input) {
    if (typeof input === 'string') {
        if (typeof Buffer === 'undefined') {
            textEncoder ??= new TextEncoder();
            return textEncoder.encode(input);
        }
        return Buffer.from(input);
    }
    return input;
}

function getOrCreate(map, key, init) {
    const existing = map.get(key);
    if (existing !== undefined) {
        return existing;
    }
    const value = init();
    map.set(key, value);
    return value;
}
function getNewSet() {
    return new Set();
}
function getNewArray() {
    return [];
}

const chars$1 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$';
const base = 64;
function toBase64(value) {
    let outString = '';
    do {
        const currentDigit = value % base;
        value = (value / base) | 0;
        outString = chars$1[currentDigit] + outString;
    } while (value !== 0);
    return outString;
}

// Four random characters from the private use area to minimize risk of
// conflicts
const hashPlaceholderLeft = '!~{';
const hashPlaceholderRight = '}~';
const hashPlaceholderOverhead = hashPlaceholderLeft.length + hashPlaceholderRight.length;
// This is the size of a 128-bits xxhash with base64url encoding
const MAX_HASH_SIZE = 21;
const DEFAULT_HASH_SIZE = 8;
const getHashPlaceholderGenerator = () => {
    let nextIndex = 0;
    return (optionName, hashSize) => {
        if (hashSize > MAX_HASH_SIZE) {
            return parseAst_js.error(parseAst_js.logFailedValidation(`Hashes cannot be longer than ${MAX_HASH_SIZE} characters, received ${hashSize}. Check the "${optionName}" option.`));
        }
        const placeholder = `${hashPlaceholderLeft}${toBase64(++nextIndex).padStart(hashSize - hashPlaceholderOverhead, '0')}${hashPlaceholderRight}`;
        if (placeholder.length > hashSize) {
            return parseAst_js.error(parseAst_js.logFailedValidation(`To generate hashes for this number of chunks (currently ${nextIndex}), you need a minimum hash size of ${placeholder.length}, received ${hashSize}. Check the "${optionName}" option.`));
        }
        return placeholder;
    };
};
const REPLACER_REGEX = new RegExp(`${hashPlaceholderLeft}[0-9a-zA-Z_$]{1,${MAX_HASH_SIZE - hashPlaceholderOverhead}}${hashPlaceholderRight}`, 'g');
const replacePlaceholders = (code, hashesByPlaceholder) => code.replace(REPLACER_REGEX, placeholder => hashesByPlaceholder.get(placeholder) || placeholder);
const replaceSinglePlaceholder = (code, placeholder, value) => code.replace(REPLACER_REGEX, match => (match === placeholder ? value : match));
const replacePlaceholdersWithDefaultAndGetContainedPlaceholders = (code, placeholders) => {
    const containedPlaceholders = new Set();
    const transformedCode = code.replace(REPLACER_REGEX, placeholder => {
        if (placeholders.has(placeholder)) {
            containedPlaceholders.add(placeholder);
            return `${hashPlaceholderLeft}${'0'.repeat(placeholder.length - hashPlaceholderOverhead)}${hashPlaceholderRight}`;
        }
        return placeholder;
    });
    return { containedPlaceholders, transformedCode };
};

const lowercaseBundleKeys = Symbol('bundleKeys');
const FILE_PLACEHOLDER = {
    type: 'placeholder'
};
const getOutputBundle = (outputBundleBase) => {
    const reservedLowercaseBundleKeys = new Set();
    return new Proxy(outputBundleBase, {
        deleteProperty(target, key) {
            if (typeof key === 'string') {
                reservedLowercaseBundleKeys.delete(key.toLowerCase());
            }
            return Reflect.deleteProperty(target, key);
        },
        get(target, key) {
            if (key === lowercaseBundleKeys) {
                return reservedLowercaseBundleKeys;
            }
            return Reflect.get(target, key);
        },
        set(target, key, value) {
            if (typeof key === 'string') {
                reservedLowercaseBundleKeys.add(key.toLowerCase());
            }
            return Reflect.set(target, key, value);
        }
    });
};
const removeUnreferencedAssets = (outputBundle) => {
    const unreferencedAssets = new Set();
    const bundleEntries = Object.values(outputBundle);
    for (const asset of bundleEntries) {
        if (asset.type === 'asset' && asset.needsCodeReference) {
            unreferencedAssets.add(asset.fileName);
        }
    }
    for (const chunk of bundleEntries) {
        if (chunk.type === 'chunk') {
            for (const referencedFile of chunk.referencedFiles) {
                if (unreferencedAssets.has(referencedFile)) {
                    unreferencedAssets.delete(referencedFile);
                }
            }
        }
    }
    for (const file of unreferencedAssets) {
        delete outputBundle[file];
    }
};

function renderNamePattern(pattern, patternName, replacements) {
    if (parseAst_js.isPathFragment(pattern))
        return parseAst_js.error(parseAst_js.logFailedValidation(`Invalid pattern "${pattern}" for "${patternName}", patterns can be neither absolute nor relative paths. If you want your files to be stored in a subdirectory, write its name without a leading slash like this: subdirectory/pattern.`));
    return pattern.replace(/\[(\w+)(:\d+)?]/g, (_match, type, size) => {
        if (!replacements.hasOwnProperty(type) || (size && type !== 'hash')) {
            return parseAst_js.error(parseAst_js.logFailedValidation(`"[${type}${size || ''}]" is not a valid placeholder in the "${patternName}" pattern.`));
        }
        const replacement = replacements[type](size && Number.parseInt(size.slice(1)));
        if (parseAst_js.isPathFragment(replacement))
            return parseAst_js.error(parseAst_js.logFailedValidation(`Invalid substitution "${replacement}" for placeholder "[${type}]" in "${patternName}" pattern, can be neither absolute nor relative path.`));
        return replacement;
    });
}
function makeUnique(name, { [lowercaseBundleKeys]: reservedLowercaseBundleKeys }) {
    if (!reservedLowercaseBundleKeys.has(name.toLowerCase()))
        return name;
    const extension = path.extname(name);
    name = name.slice(0, Math.max(0, name.length - extension.length));
    let uniqueName, uniqueIndex = 1;
    while (reservedLowercaseBundleKeys.has((uniqueName = name + ++uniqueIndex + extension).toLowerCase()))
        ;
    return uniqueName;
}

function generateAssetFileName(name, names, source, originalFileName, originalFileNames, sourceHash, outputOptions, bundle, inputOptions) {
    const emittedName = outputOptions.sanitizeFileName(name || 'asset');
    return makeUnique(renderNamePattern(typeof outputOptions.assetFileNames === 'function'
        ? outputOptions.assetFileNames({
            // Additionally, this should be non-enumerable in the next major
            get name() {
                parseAst_js.warnDeprecation('Accessing the "name" property of emitted assets when generating the file name is deprecated. Use the "names" property instead.', parseAst_js.URL_GENERATEBUNDLE, false, inputOptions);
                return name;
            },
            names,
            // Additionally, this should be non-enumerable in the next major
            get originalFileName() {
                parseAst_js.warnDeprecation('Accessing the "originalFileName" property of emitted assets when generating the file name is deprecated. Use the "originalFileNames" property instead.', parseAst_js.URL_GENERATEBUNDLE, false, inputOptions);
                return originalFileName;
            },
            originalFileNames,
            source,
            type: 'asset'
        })
        : outputOptions.assetFileNames, 'output.assetFileNames', {
        ext: () => path.extname(emittedName).slice(1),
        extname: () => path.extname(emittedName),
        hash: size => sourceHash.slice(0, Math.min(Math.max(0, size || DEFAULT_HASH_SIZE), MAX_HASH_SIZE)),
        name: () => emittedName.slice(0, Math.max(0, emittedName.length - path.extname(emittedName).length))
    }), bundle);
}
function reserveFileNameInBundle(fileName, { bundle }, log) {
    if (bundle[lowercaseBundleKeys].has(fileName.toLowerCase())) {
        log(parseAst_js.LOGLEVEL_WARN, parseAst_js.logFileNameConflict(fileName));
    }
    else {
        bundle[fileName] = FILE_PLACEHOLDER;
    }
}
const emittedFileTypes = new Set(['chunk', 'asset', 'prebuilt-chunk']);
function hasValidType(emittedFile) {
    return Boolean(emittedFile &&
        emittedFileTypes.has(emittedFile.type));
}
function hasValidName(emittedFile) {
    const validatedName = emittedFile.fileName || emittedFile.name;
    return !validatedName || (typeof validatedName === 'string' && !parseAst_js.isPathFragment(validatedName));
}
function getValidSource(source, emittedFile, fileReferenceId) {
    if (!(typeof source === 'string' || source instanceof Uint8Array)) {
        const assetName = emittedFile.fileName || emittedFile.name || fileReferenceId;
        return parseAst_js.error(parseAst_js.logFailedValidation(`Could not set source for ${typeof assetName === 'string' ? `asset "${assetName}"` : 'unnamed asset'}, asset source needs to be a string, Uint8Array or Buffer.`));
    }
    return source;
}
function getAssetFileName(file, referenceId) {
    if (typeof file.fileName !== 'string') {
        return parseAst_js.error(parseAst_js.logAssetNotFinalisedForFileName(file.name || referenceId));
    }
    return file.fileName;
}
function getChunkFileName(file, facadeChunkByModule) {
    if (file.fileName) {
        return file.fileName;
    }
    if (facadeChunkByModule) {
        return facadeChunkByModule.get(file.module).getFileName();
    }
    return parseAst_js.error(parseAst_js.logChunkNotGeneratedForFileName(file.fileName || file.name));
}
class FileEmitter {
    constructor(graph, options, baseFileEmitter) {
        this.graph = graph;
        this.options = options;
        this.facadeChunkByModule = null;
        this.nextIdBase = 1;
        this.output = null;
        this.outputFileEmitters = [];
        this.emitFile = (emittedFile) => {
            if (!hasValidType(emittedFile)) {
                return parseAst_js.error(parseAst_js.logFailedValidation(`Emitted files must be of type "asset", "chunk" or "prebuilt-chunk", received "${emittedFile && emittedFile.type}".`));
            }
            if (emittedFile.type === 'prebuilt-chunk') {
                return this.emitPrebuiltChunk(emittedFile);
            }
            if (!hasValidName(emittedFile)) {
                return parseAst_js.error(parseAst_js.logFailedValidation(`The "fileName" or "name" properties of emitted chunks and assets must be strings that are neither absolute nor relative paths, received "${emittedFile.fileName || emittedFile.name}".`));
            }
            if (emittedFile.type === 'chunk') {
                return this.emitChunk(emittedFile);
            }
            return this.emitAsset(emittedFile);
        };
        this.finaliseAssets = () => {
            for (const [referenceId, emittedFile] of this.filesByReferenceId) {
                if (emittedFile.type === 'asset' && typeof emittedFile.fileName !== 'string')
                    return parseAst_js.error(parseAst_js.logNoAssetSourceSet(emittedFile.name || referenceId));
            }
        };
        this.getFileName = (fileReferenceId) => {
            const emittedFile = this.filesByReferenceId.get(fileReferenceId);
            if (!emittedFile)
                return parseAst_js.error(parseAst_js.logFileReferenceIdNotFoundForFilename(fileReferenceId));
            if (emittedFile.type === 'chunk') {
                return getChunkFileName(emittedFile, this.facadeChunkByModule);
            }
            if (emittedFile.type === 'prebuilt-chunk') {
                return emittedFile.fileName;
            }
            return getAssetFileName(emittedFile, fileReferenceId);
        };
        this.setAssetSource = (referenceId, requestedSource) => {
            const consumedFile = this.filesByReferenceId.get(referenceId);
            if (!consumedFile)
                return parseAst_js.error(parseAst_js.logAssetReferenceIdNotFoundForSetSource(referenceId));
            if (consumedFile.type !== 'asset') {
                return parseAst_js.error(parseAst_js.logFailedValidation(`Asset sources can only be set for emitted assets but "${referenceId}" is an emitted chunk.`));
            }
            if (consumedFile.source !== undefined) {
                return parseAst_js.error(parseAst_js.logAssetSourceAlreadySet(consumedFile.name || referenceId));
            }
            const source = getValidSource(requestedSource, consumedFile, referenceId);
            if (this.output) {
                this.finalizeAdditionalAsset(consumedFile, source, this.output);
            }
            else {
                consumedFile.source = source;
                for (const emitter of this.outputFileEmitters) {
                    emitter.finalizeAdditionalAsset(consumedFile, source, emitter.output);
                }
            }
        };
        this.setChunkInformation = (facadeChunkByModule) => {
            this.facadeChunkByModule = facadeChunkByModule;
        };
        this.setOutputBundle = (bundle, outputOptions) => {
            const getHash = hasherByType[outputOptions.hashCharacters];
            const output = (this.output = {
                bundle,
                fileNamesBySourceHash: new Map(),
                getHash,
                outputOptions
            });
            for (const emittedFile of this.filesByReferenceId.values()) {
                if (emittedFile.fileName) {
                    reserveFileNameInBundle(emittedFile.fileName, output, this.options.onLog);
                }
            }
            const consumedAssetsByHash = new Map();
            for (const consumedFile of this.filesByReferenceId.values()) {
                if (consumedFile.type === 'asset' && consumedFile.source !== undefined) {
                    if (consumedFile.fileName) {
                        this.finalizeAdditionalAsset(consumedFile, consumedFile.source, output);
                    }
                    else {
                        const sourceHash = getHash(consumedFile.source);
                        getOrCreate(consumedAssetsByHash, sourceHash, getNewArray).push(consumedFile);
                    }
                }
                else if (consumedFile.type === 'prebuilt-chunk') {
                    this.output.bundle[consumedFile.fileName] = this.createPrebuiltChunk(consumedFile);
                }
            }
            for (const [sourceHash, consumedFiles] of consumedAssetsByHash) {
                this.finalizeAssetsWithSameSource(consumedFiles, sourceHash, output);
            }
        };
        this.filesByReferenceId = baseFileEmitter
            ? new Map(baseFileEmitter.filesByReferenceId)
            : new Map();
        baseFileEmitter?.addOutputFileEmitter(this);
    }
    addOutputFileEmitter(outputFileEmitter) {
        this.outputFileEmitters.push(outputFileEmitter);
    }
    assignReferenceId(file, idBase) {
        let referenceId = idBase;
        do {
            referenceId = getHash64(referenceId).slice(0, 8).replaceAll('-', '$');
        } while (this.filesByReferenceId.has(referenceId) ||
            this.outputFileEmitters.some(({ filesByReferenceId }) => filesByReferenceId.has(referenceId)));
        file.referenceId = referenceId;
        this.filesByReferenceId.set(referenceId, file);
        for (const { filesByReferenceId } of this.outputFileEmitters) {
            filesByReferenceId.set(referenceId, file);
        }
        return referenceId;
    }
    createPrebuiltChunk(prebuiltChunk) {
        return {
            code: prebuiltChunk.code,
            dynamicImports: [],
            exports: prebuiltChunk.exports || [],
            facadeModuleId: null,
            fileName: prebuiltChunk.fileName,
            implicitlyLoadedBefore: [],
            importedBindings: {},
            imports: [],
            isDynamicEntry: false,
            isEntry: false,
            isImplicitEntry: false,
            map: prebuiltChunk.map || null,
            moduleIds: [],
            modules: {},
            name: prebuiltChunk.fileName,
            preliminaryFileName: prebuiltChunk.fileName,
            referencedFiles: [],
            sourcemapFileName: prebuiltChunk.sourcemapFileName || null,
            type: 'chunk'
        };
    }
    emitAsset(emittedAsset) {
        const source = emittedAsset.source === undefined
            ? undefined
            : getValidSource(emittedAsset.source, emittedAsset, null);
        const originalFileName = emittedAsset.originalFileName || null;
        if (typeof originalFileName === 'string') {
            this.graph.watchFiles[originalFileName] = true;
        }
        const consumedAsset = {
            fileName: emittedAsset.fileName,
            name: emittedAsset.name,
            needsCodeReference: !!emittedAsset.needsCodeReference,
            originalFileName,
            referenceId: '',
            source,
            type: 'asset'
        };
        const referenceId = this.assignReferenceId(consumedAsset, emittedAsset.fileName || emittedAsset.name || String(this.nextIdBase++));
        if (this.output) {
            this.emitAssetWithReferenceId(consumedAsset, this.output);
        }
        else {
            for (const fileEmitter of this.outputFileEmitters) {
                fileEmitter.emitAssetWithReferenceId(consumedAsset, fileEmitter.output);
            }
        }
        return referenceId;
    }
    emitAssetWithReferenceId(consumedAsset, output) {
        const { fileName, source } = consumedAsset;
        if (fileName) {
            reserveFileNameInBundle(fileName, output, this.options.onLog);
        }
        if (source !== undefined) {
            this.finalizeAdditionalAsset(consumedAsset, source, output);
        }
    }
    emitChunk(emittedChunk) {
        if (this.graph.phase > BuildPhase.LOAD_AND_PARSE) {
            return parseAst_js.error(parseAst_js.logInvalidRollupPhaseForChunkEmission());
        }
        if (typeof emittedChunk.id !== 'string') {
            return parseAst_js.error(parseAst_js.logFailedValidation(`Emitted chunks need to have a valid string id, received "${emittedChunk.id}"`));
        }
        const consumedChunk = {
            fileName: emittedChunk.fileName,
            module: null,
            name: emittedChunk.name || emittedChunk.id,
            referenceId: '',
            type: 'chunk'
        };
        this.graph.moduleLoader
            .emitChunk(emittedChunk)
            .then(module => (consumedChunk.module = module))
            .catch(() => {
            // Avoid unhandled Promise rejection as the error will be thrown later
            // once module loading has finished
        });
        return this.assignReferenceId(consumedChunk, emittedChunk.id);
    }
    emitPrebuiltChunk(emitPrebuiltChunk) {
        if (typeof emitPrebuiltChunk.code !== 'string') {
            return parseAst_js.error(parseAst_js.logFailedValidation(`Emitted prebuilt chunks need to have a valid string code, received "${emitPrebuiltChunk.code}".`));
        }
        if (typeof emitPrebuiltChunk.fileName !== 'string' ||
            parseAst_js.isPathFragment(emitPrebuiltChunk.fileName)) {
            return parseAst_js.error(parseAst_js.logFailedValidation(`The "fileName" property of emitted prebuilt chunks must be strings that are neither absolute nor relative paths, received "${emitPrebuiltChunk.fileName}".`));
        }
        const consumedPrebuiltChunk = {
            code: emitPrebuiltChunk.code,
            exports: emitPrebuiltChunk.exports,
            fileName: emitPrebuiltChunk.fileName,
            map: emitPrebuiltChunk.map,
            referenceId: '',
            type: 'prebuilt-chunk'
        };
        const referenceId = this.assignReferenceId(consumedPrebuiltChunk, consumedPrebuiltChunk.fileName);
        if (this.output) {
            this.output.bundle[consumedPrebuiltChunk.fileName] =
                this.createPrebuiltChunk(consumedPrebuiltChunk);
        }
        return referenceId;
    }
    finalizeAdditionalAsset(consumedFile, source, { bundle, fileNamesBySourceHash, getHash, outputOptions }) {
        let { fileName, name, needsCodeReference, originalFileName, referenceId } = consumedFile;
        // Deduplicate assets if an explicit fileName is not provided
        if (!fileName) {
            const sourceHash = getHash(source);
            fileName = fileNamesBySourceHash.get(sourceHash);
            if (!fileName) {
                fileName = generateAssetFileName(name, name ? [name] : [], source, originalFileName, originalFileName ? [originalFileName] : [], sourceHash, outputOptions, bundle, this.options);
                fileNamesBySourceHash.set(sourceHash, fileName);
            }
        }
        // We must not modify the original assets to avoid interaction between outputs
        const assetWithFileName = { ...consumedFile, fileName, source };
        this.filesByReferenceId.set(referenceId, assetWithFileName);
        const existingAsset = bundle[fileName];
        if (existingAsset?.type === 'asset') {
            existingAsset.needsCodeReference &&= needsCodeReference;
            if (name) {
                existingAsset.names.push(name);
            }
            if (originalFileName) {
                existingAsset.originalFileNames.push(originalFileName);
            }
        }
        else {
            const { options } = this;
            bundle[fileName] = {
                fileName,
                get name() {
                    // Additionally, this should be non-enumerable in the next major
                    parseAst_js.warnDeprecation('Accessing the "name" property of emitted assets in the bundle is deprecated. Use the "names" property instead.', parseAst_js.URL_GENERATEBUNDLE, false, options);
                    return name;
                },
                names: name ? [name] : [],
                needsCodeReference,
                get originalFileName() {
                    // Additionally, this should be non-enumerable in the next major
                    parseAst_js.warnDeprecation('Accessing the "originalFileName" property of emitted assets in the bundle is deprecated. Use the "originalFileNames" property instead.', parseAst_js.URL_GENERATEBUNDLE, false, options);
                    return originalFileName;
                },
                originalFileNames: originalFileName ? [originalFileName] : [],
                source,
                type: 'asset'
            };
        }
    }
    finalizeAssetsWithSameSource(consumedFiles, sourceHash, { bundle, fileNamesBySourceHash, outputOptions }) {
        const { names, originalFileNames } = getNamesFromAssets(consumedFiles);
        let fileName = '';
        let usedConsumedFile;
        let needsCodeReference = true;
        for (const consumedFile of consumedFiles) {
            needsCodeReference &&= consumedFile.needsCodeReference;
            const assetFileName = generateAssetFileName(consumedFile.name, names, consumedFile.source, consumedFile.originalFileName, originalFileNames, sourceHash, outputOptions, bundle, this.options);
            if (!fileName ||
                assetFileName.length < fileName.length ||
                (assetFileName.length === fileName.length && assetFileName < fileName)) {
                fileName = assetFileName;
                usedConsumedFile = consumedFile;
            }
        }
        fileNamesBySourceHash.set(sourceHash, fileName);
        for (const consumedFile of consumedFiles) {
            // We must not modify the original assets to avoid interaction between outputs
            const assetWithFileName = { ...consumedFile, fileName };
            this.filesByReferenceId.set(consumedFile.referenceId, assetWithFileName);
        }
        const { options } = this;
        bundle[fileName] = {
            fileName,
            get name() {
                // Additionally, this should be non-enumerable in the next major
                parseAst_js.warnDeprecation('Accessing the "name" property of emitted assets in the bundle is deprecated. Use the "names" property instead.', parseAst_js.URL_GENERATEBUNDLE, false, options);
                return usedConsumedFile.name;
            },
            names,
            needsCodeReference,
            get originalFileName() {
                // Additionally, this should be non-enumerable in the next major
                parseAst_js.warnDeprecation('Accessing the "originalFileName" property of emitted assets in the bundle is deprecated. Use the "originalFileNames" property instead.', parseAst_js.URL_GENERATEBUNDLE, false, options);
                return usedConsumedFile.originalFileName;
            },
            originalFileNames,
            source: usedConsumedFile.source,
            type: 'asset'
        };
    }
}
function getNamesFromAssets(consumedFiles) {
    const names = [];
    const originalFileNames = [];
    for (const { name, originalFileName } of consumedFiles) {
        if (typeof name === 'string') {
            names.push(name);
        }
        if (originalFileName) {
            originalFileNames.push(originalFileName);
        }
    }
    originalFileNames.sort();
    // Sort by length first and then alphabetically so that the order is stable
    // and the shortest names come first
    names.sort((a, b) => a.length - b.length || (a > b ? 1 : a === b ? 0 : -1));
    return { names, originalFileNames };
}

const doNothing = () => { };

async function asyncFlatten(array) {
    do {
        array = (await Promise.all(array)).flat(Infinity);
    } while (array.some((v) => v?.then));
    return array;
}

const getOnLog = (config, logLevel, printLog = defaultPrintLog) => {
    const { onwarn, onLog } = config;
    const defaultOnLog = getDefaultOnLog(printLog, onwarn);
    if (onLog) {
        const minimalPriority = parseAst_js.logLevelPriority[logLevel];
        return (level, log) => onLog(level, addLogToString(log), (level, handledLog) => {
            if (level === parseAst_js.LOGLEVEL_ERROR) {
                return parseAst_js.error(normalizeLog(handledLog));
            }
            if (parseAst_js.logLevelPriority[level] >= minimalPriority) {
                defaultOnLog(level, normalizeLog(handledLog));
            }
        });
    }
    return defaultOnLog;
};
const getDefaultOnLog = (printLog, onwarn) => onwarn
    ? (level, log) => {
        if (level === parseAst_js.LOGLEVEL_WARN) {
            onwarn(addLogToString(log), warning => printLog(parseAst_js.LOGLEVEL_WARN, normalizeLog(warning)));
        }
        else {
            printLog(level, log);
        }
    }
    : printLog;
const addLogToString = (log) => {
    Object.defineProperty(log, 'toString', {
        value: () => log.message,
        writable: true
    });
    return log;
};
const normalizeLog = (log) => typeof log === 'string'
    ? { message: log }
    : typeof log === 'function'
        ? normalizeLog(log())
        : log;
const defaultPrintLog = (level, { message }) => {
    switch (level) {
        case parseAst_js.LOGLEVEL_WARN: {
            return console.warn(message);
        }
        case parseAst_js.LOGLEVEL_DEBUG: {
            return console.debug(message);
        }
        default: {
            return console.info(message);
        }
    }
};
function warnUnknownOptions(passedOptions, validOptions, optionType, log, ignoredKeys = /$./) {
    const validOptionSet = new Set(validOptions);
    const unknownOptions = Object.keys(passedOptions).filter(key => !(validOptionSet.has(key) || ignoredKeys.test(key)));
    if (unknownOptions.length > 0) {
        log(parseAst_js.LOGLEVEL_WARN, parseAst_js.logUnknownOption(optionType, unknownOptions, [...validOptionSet].sort()));
    }
}
const treeshakePresets = {
    recommended: {
        annotations: true,
        correctVarValueBeforeDeclaration: false,
        manualPureFunctions: parseAst_js.EMPTY_ARRAY,
        moduleSideEffects: () => true,
        propertyReadSideEffects: true,
        tryCatchDeoptimization: true,
        unknownGlobalSideEffects: false
    },
    safest: {
        annotations: true,
        correctVarValueBeforeDeclaration: true,
        manualPureFunctions: parseAst_js.EMPTY_ARRAY,
        moduleSideEffects: () => true,
        propertyReadSideEffects: true,
        tryCatchDeoptimization: true,
        unknownGlobalSideEffects: true
    },
    smallest: {
        annotations: true,
        correctVarValueBeforeDeclaration: false,
        manualPureFunctions: parseAst_js.EMPTY_ARRAY,
        moduleSideEffects: () => false,
        propertyReadSideEffects: false,
        tryCatchDeoptimization: false,
        unknownGlobalSideEffects: false
    }
};
const jsxPresets = {
    preserve: {
        factory: null,
        fragment: null,
        importSource: null,
        mode: 'preserve'
    },
    'preserve-react': {
        factory: 'React.createElement',
        fragment: 'React.Fragment',
        importSource: 'react',
        mode: 'preserve'
    },
    react: {
        factory: 'React.createElement',
        fragment: 'React.Fragment',
        importSource: 'react',
        mode: 'classic'
    },
    'react-jsx': {
        factory: 'React.createElement',
        importSource: 'react',
        jsxImportSource: 'react/jsx-runtime',
        mode: 'automatic'
    }
};
const generatedCodePresets = {
    es2015: {
        arrowFunctions: true,
        constBindings: true,
        objectShorthand: true,
        reservedNamesAsProps: true,
        symbols: true
    },
    es5: {
        arrowFunctions: false,
        constBindings: false,
        objectShorthand: false,
        reservedNamesAsProps: true,
        symbols: false
    }
};
const objectifyOption = (value) => value && typeof value === 'object' ? value : {};
const objectifyOptionWithPresets = (presets, optionName, urlSnippet, additionalValues) => (value) => {
    if (typeof value === 'string') {
        const preset = presets[value];
        if (preset) {
            return preset;
        }
        parseAst_js.error(parseAst_js.logInvalidOption(optionName, urlSnippet, `valid values are ${additionalValues}${parseAst_js.printQuotedStringList(Object.keys(presets))}. You can also supply an object for more fine-grained control`, value));
    }
    return objectifyOption(value);
};
const getOptionWithPreset = (value, presets, optionName, urlSnippet, additionalValues) => {
    const presetName = value?.preset;
    if (presetName) {
        const preset = presets[presetName];
        if (preset) {
            return { ...preset, ...value };
        }
        else {
            parseAst_js.error(parseAst_js.logInvalidOption(`${optionName}.preset`, urlSnippet, `valid values are ${parseAst_js.printQuotedStringList(Object.keys(presets))}`, presetName));
        }
    }
    return objectifyOptionWithPresets(presets, optionName, urlSnippet, additionalValues)(value);
};
const normalizePluginOption = async (plugins) => (await asyncFlatten([plugins])).filter(Boolean);

function getLogHandler(level, code, logger, pluginName, logLevel) {
    if (parseAst_js.logLevelPriority[level] < parseAst_js.logLevelPriority[logLevel]) {
        return doNothing;
    }
    return (log, pos) => {
        if (pos != null) {
            logger(parseAst_js.LOGLEVEL_WARN, parseAst_js.logInvalidLogPosition(pluginName));
        }
        log = normalizeLog(log);
        if (log.code && !log.pluginCode) {
            log.pluginCode = log.code;
        }
        log.code = code;
        log.plugin = pluginName;
        logger(level, log);
    };
}

const ANONYMOUS_PLUGIN_PREFIX = 'at position ';
const ANONYMOUS_OUTPUT_PLUGIN_PREFIX = 'at output position ';

function createPluginCache(cache) {
    return {
        delete(id) {
            return delete cache[id];
        },
        get(id) {
            const item = cache[id];
            if (!item)
                return;
            item[0] = 0;
            return item[1];
        },
        has(id) {
            const item = cache[id];
            if (!item)
                return false;
            item[0] = 0;
            return true;
        },
        set(id, value) {
            cache[id] = [0, value];
        }
    };
}
function getTrackedPluginCache(pluginCache, onUse) {
    return {
        delete(id) {
            onUse();
            return pluginCache.delete(id);
        },
        get(id) {
            onUse();
            return pluginCache.get(id);
        },
        has(id) {
            onUse();
            return pluginCache.has(id);
        },
        set(id, value) {
            onUse();
            return pluginCache.set(id, value);
        }
    };
}
const NO_CACHE = {
    delete() {
        return false;
    },
    get() {
        return undefined;
    },
    has() {
        return false;
    },
    set() { }
};
function uncacheablePluginError(pluginName) {
    if (pluginName.startsWith(ANONYMOUS_PLUGIN_PREFIX) ||
        pluginName.startsWith(ANONYMOUS_OUTPUT_PLUGIN_PREFIX)) {
        return parseAst_js.error(parseAst_js.logAnonymousPluginCache());
    }
    return parseAst_js.error(parseAst_js.logDuplicatePluginName(pluginName));
}
function getCacheForUncacheablePlugin(pluginName) {
    return {
        delete() {
            return uncacheablePluginError(pluginName);
        },
        get() {
            return uncacheablePluginError(pluginName);
        },
        has() {
            return uncacheablePluginError(pluginName);
        },
        set() {
            return uncacheablePluginError(pluginName);
        }
    };
}

function getPluginContext(plugin, pluginCache, graph, options, fileEmitter, existingPluginNames) {
    const { logLevel, onLog } = options;
    let cacheable = true;
    if (typeof plugin.cacheKey !== 'string') {
        if (plugin.name.startsWith(ANONYMOUS_PLUGIN_PREFIX) ||
            plugin.name.startsWith(ANONYMOUS_OUTPUT_PLUGIN_PREFIX) ||
            existingPluginNames.has(plugin.name)) {
            cacheable = false;
        }
        else {
            existingPluginNames.add(plugin.name);
        }
    }
    let cacheInstance;
    if (!pluginCache) {
        cacheInstance = NO_CACHE;
    }
    else if (cacheable) {
        const cacheKey = plugin.cacheKey || plugin.name;
        cacheInstance = createPluginCache(pluginCache[cacheKey] || (pluginCache[cacheKey] = Object.create(null)));
    }
    else {
        cacheInstance = getCacheForUncacheablePlugin(plugin.name);
    }
    return {
        addWatchFile(id) {
            graph.watchFiles[id] = true;
        },
        cache: cacheInstance,
        debug: getLogHandler(parseAst_js.LOGLEVEL_DEBUG, 'PLUGIN_LOG', onLog, plugin.name, logLevel),
        emitFile: fileEmitter.emitFile.bind(fileEmitter),
        error(error_) {
            return parseAst_js.error(parseAst_js.logPluginError(normalizeLog(error_), plugin.name));
        },
        fs: options.fs,
        getFileName: fileEmitter.getFileName,
        getModuleIds: () => graph.modulesById.keys(),
        getModuleInfo: graph.getModuleInfo,
        getWatchFiles: () => Object.keys(graph.watchFiles),
        info: getLogHandler(parseAst_js.LOGLEVEL_INFO, 'PLUGIN_LOG', onLog, plugin.name, logLevel),
        load(resolvedId) {
            return graph.moduleLoader.preloadModule(resolvedId);
        },
        meta: {
            rollupVersion: version,
            watchMode: graph.watchMode
        },
        parse: parseAst_js.parseAst,
        resolve(source, importer, { attributes, custom, isEntry, skipSelf, importerAttributes } = parseAst_js.BLANK) {
            skipSelf ??= true;
            return graph.moduleLoader.resolveId(source, importer, custom, isEntry, attributes || parseAst_js.EMPTY_OBJECT, importerAttributes, skipSelf ? [{ importer, plugin, source }] : null);
        },
        setAssetSource: fileEmitter.setAssetSource,
        warn: getLogHandler(parseAst_js.LOGLEVEL_WARN, 'PLUGIN_WARNING', onLog, plugin.name, logLevel)
    };
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getAugmentedNamespace(n) {
  if (Object.prototype.hasOwnProperty.call(n, '__esModule')) return n;
  var f = n.default;
	if (typeof f == "function") {
		var a = function a () {
			var isInstance = false;
      try {
        isInstance = this instanceof a;
      } catch {}
			if (isInstance) {
        return Reflect.construct(f, arguments, this.constructor);
			}
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var utils = {};

var constants;
var hasRequiredConstants;

function requireConstants () {
	if (hasRequiredConstants) return constants;
	hasRequiredConstants = 1;

	const WIN_SLASH = '\\\\/';
	const WIN_NO_SLASH = `[^${WIN_SLASH}]`;

	const DEFAULT_MAX_EXTGLOB_RECURSION = 0;

	/**
	 * Posix glob regex
	 */

	const DOT_LITERAL = '\\.';
	const PLUS_LITERAL = '\\+';
	const QMARK_LITERAL = '\\?';
	const SLASH_LITERAL = '\\/';
	const ONE_CHAR = '(?=.)';
	const QMARK = '[^/]';
	const END_ANCHOR = `(?:${SLASH_LITERAL}|$)`;
	const START_ANCHOR = `(?:^|${SLASH_LITERAL})`;
	const DOTS_SLASH = `${DOT_LITERAL}{1,2}${END_ANCHOR}`;
	const NO_DOT = `(?!${DOT_LITERAL})`;
	const NO_DOTS = `(?!${START_ANCHOR}${DOTS_SLASH})`;
	const NO_DOT_SLASH = `(?!${DOT_LITERAL}{0,1}${END_ANCHOR})`;
	const NO_DOTS_SLASH = `(?!${DOTS_SLASH})`;
	const QMARK_NO_DOT = `[^.${SLASH_LITERAL}]`;
	const STAR = `${QMARK}*?`;
	const SEP = '/';

	const POSIX_CHARS = {
	  DOT_LITERAL,
	  PLUS_LITERAL,
	  QMARK_LITERAL,
	  SLASH_LITERAL,
	  ONE_CHAR,
	  QMARK,
	  END_ANCHOR,
	  DOTS_SLASH,
	  NO_DOT,
	  NO_DOTS,
	  NO_DOT_SLASH,
	  NO_DOTS_SLASH,
	  QMARK_NO_DOT,
	  STAR,
	  START_ANCHOR,
	  SEP
	};

	/**
	 * Windows glob regex
	 */

	const WINDOWS_CHARS = {
	  ...POSIX_CHARS,

	  SLASH_LITERAL: `[${WIN_SLASH}]`,
	  QMARK: WIN_NO_SLASH,
	  STAR: `${WIN_NO_SLASH}*?`,
	  DOTS_SLASH: `${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$)`,
	  NO_DOT: `(?!${DOT_LITERAL})`,
	  NO_DOTS: `(?!(?:^|[${WIN_SLASH}])${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
	  NO_DOT_SLASH: `(?!${DOT_LITERAL}{0,1}(?:[${WIN_SLASH}]|$))`,
	  NO_DOTS_SLASH: `(?!${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
	  QMARK_NO_DOT: `[^.${WIN_SLASH}]`,
	  START_ANCHOR: `(?:^|[${WIN_SLASH}])`,
	  END_ANCHOR: `(?:[${WIN_SLASH}]|$)`,
	  SEP: '\\'
	};

	/**
	 * POSIX Bracket Regex
	 */

	const POSIX_REGEX_SOURCE = {
	  __proto__: null,
	  alnum: 'a-zA-Z0-9',
	  alpha: 'a-zA-Z',
	  ascii: '\\x00-\\x7F',
	  blank: ' \\t',
	  cntrl: '\\x00-\\x1F\\x7F',
	  digit: '0-9',
	  graph: '\\x21-\\x7E',
	  lower: 'a-z',
	  print: '\\x20-\\x7E ',
	  punct: '\\-!"#$%&\'()\\*+,./:;<=>?@[\\]^_`{|}~',
	  space: ' \\t\\r\\n\\v\\f',
	  upper: 'A-Z',
	  word: 'A-Za-z0-9_',
	  xdigit: 'A-Fa-f0-9'
	};

	constants = {
	  DEFAULT_MAX_EXTGLOB_RECURSION,
	  MAX_LENGTH: 1024 * 64,
	  POSIX_REGEX_SOURCE,

	  // regular expressions
	  REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
	  REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
	  REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
	  REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
	  REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
	  REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,

	  // Replace globs with equivalent patterns to reduce parsing time.
	  REPLACEMENTS: {
	    __proto__: null,
	    '***': '*',
	    '**/**': '**',
	    '**/**/**': '**'
	  },

	  // Digits
	  CHAR_0: 48, /* 0 */
	  CHAR_9: 57, /* 9 */

	  // Alphabet chars.
	  CHAR_UPPERCASE_A: 65, /* A */
	  CHAR_LOWERCASE_A: 97, /* a */
	  CHAR_UPPERCASE_Z: 90, /* Z */
	  CHAR_LOWERCASE_Z: 122, /* z */

	  CHAR_LEFT_PARENTHESES: 40, /* ( */
	  CHAR_RIGHT_PARENTHESES: 41, /* ) */

	  CHAR_ASTERISK: 42, /* * */

	  // Non-alphabetic chars.
	  CHAR_AMPERSAND: 38, /* & */
	  CHAR_AT: 64, /* @ */
	  CHAR_BACKWARD_SLASH: 92, /* \ */
	  CHAR_CARRIAGE_RETURN: 13, /* \r */
	  CHAR_CIRCUMFLEX_ACCENT: 94, /* ^ */
	  CHAR_COLON: 58, /* : */
	  CHAR_COMMA: 44, /* , */
	  CHAR_DOT: 46, /* . */
	  CHAR_DOUBLE_QUOTE: 34, /* " */
	  CHAR_EQUAL: 61, /* = */
	  CHAR_EXCLAMATION_MARK: 33, /* ! */
	  CHAR_FORM_FEED: 12, /* \f */
	  CHAR_FORWARD_SLASH: 47, /* / */
	  CHAR_GRAVE_ACCENT: 96, /* ` */
	  CHAR_HASH: 35, /* # */
	  CHAR_HYPHEN_MINUS: 45, /* - */
	  CHAR_LEFT_ANGLE_BRACKET: 60, /* < */
	  CHAR_LEFT_CURLY_BRACE: 123, /* { */
	  CHAR_LEFT_SQUARE_BRACKET: 91, /* [ */
	  CHAR_LINE_FEED: 10, /* \n */
	  CHAR_NO_BREAK_SPACE: 160, /* \u00A0 */
	  CHAR_PERCENT: 37, /* % */
	  CHAR_PLUS: 43, /* + */
	  CHAR_QUESTION_MARK: 63, /* ? */
	  CHAR_RIGHT_ANGLE_BRACKET: 62, /* > */
	  CHAR_RIGHT_CURLY_BRACE: 125, /* } */
	  CHAR_RIGHT_SQUARE_BRACKET: 93, /* ] */
	  CHAR_SEMICOLON: 59, /* ; */
	  CHAR_SINGLE_QUOTE: 39, /* ' */
	  CHAR_SPACE: 32, /*   */
	  CHAR_TAB: 9, /* \t */
	  CHAR_UNDERSCORE: 95, /* _ */
	  CHAR_VERTICAL_LINE: 124, /* | */
	  CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279, /* \uFEFF */

	  /**
	   * Create EXTGLOB_CHARS
	   */

	  extglobChars(chars) {
	    return {
	      '!': { type: 'negate', open: '(?:(?!(?:', close: `))${chars.STAR})` },
	      '?': { type: 'qmark', open: '(?:', close: ')?' },
	      '+': { type: 'plus', open: '(?:', close: ')+' },
	      '*': { type: 'star', open: '(?:', close: ')*' },
	      '@': { type: 'at', open: '(?:', close: ')' }
	    };
	  },

	  /**
	   * Create GLOB_CHARS
	   */

	  globChars(win32) {
	    return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
	  }
	};
	return constants;
}

/*global navigator*/

var hasRequiredUtils;

function requireUtils () {
	if (hasRequiredUtils) return utils;
	hasRequiredUtils = 1;
	(function (exports$1) {

		const {
		  REGEX_BACKSLASH,
		  REGEX_REMOVE_BACKSLASH,
		  REGEX_SPECIAL_CHARS,
		  REGEX_SPECIAL_CHARS_GLOBAL
		} = /*@__PURE__*/ requireConstants();

		exports$1.isObject = val => val !== null && typeof val === 'object' && !Array.isArray(val);
		exports$1.hasRegexChars = str => REGEX_SPECIAL_CHARS.test(str);
		exports$1.isRegexChar = str => str.length === 1 && exports$1.hasRegexChars(str);
		exports$1.escapeRegex = str => str.replace(REGEX_SPECIAL_CHARS_GLOBAL, '\\$1');
		exports$1.toPosixSlashes = str => str.replace(REGEX_BACKSLASH, '/');

		exports$1.isWindows = () => {
		  if (typeof navigator !== 'undefined' && navigator.platform) {
		    const platform = navigator.platform.toLowerCase();
		    return platform === 'win32' || platform === 'windows';
		  }

		  if (typeof process !== 'undefined' && process.platform) {
		    return process.platform === 'win32';
		  }

		  return false;
		};

		exports$1.removeBackslashes = str => {
		  return str.replace(REGEX_REMOVE_BACKSLASH, match => {
		    return match === '\\' ? '' : match;
		  });
		};

		exports$1.escapeLast = (input, char, lastIdx) => {
		  const idx = input.lastIndexOf(char, lastIdx);
		  if (idx === -1) return input;
		  if (input[idx - 1] === '\\') return exports$1.escapeLast(input, char, idx - 1);
		  return `${input.slice(0, idx)}\\${input.slice(idx)}`;
		};

		exports$1.removePrefix = (input, state = {}) => {
		  let output = input;
		  if (output.startsWith('./')) {
		    output = output.slice(2);
		    state.prefix = './';
		  }
		  return output;
		};

		exports$1.wrapOutput = (input, state = {}, options = {}) => {
		  const prepend = options.contains ? '' : '^';
		  const append = options.contains ? '' : '$';

		  let output = `${prepend}(?:${input})${append}`;
		  if (state.negated === true) {
		    output = `(?:^(?!${output}).*$)`;
		  }
		  return output;
		};

		exports$1.basename = (path, { windows } = {}) => {
		  const segs = path.split(windows ? /[\\/]/ : '/');
		  const last = segs[segs.length - 1];

		  if (last === '') {
		    return segs[segs.length - 2];
		  }

		  return last;
		}; 
	} (utils));
	return utils;
}

var scan_1;
var hasRequiredScan;

function requireScan () {
	if (hasRequiredScan) return scan_1;
	hasRequiredScan = 1;

	const utils = /*@__PURE__*/ requireUtils();
	const {
	  CHAR_ASTERISK,             /* * */
	  CHAR_AT,                   /* @ */
	  CHAR_BACKWARD_SLASH,       /* \ */
	  CHAR_COMMA,                /* , */
	  CHAR_DOT,                  /* . */
	  CHAR_EXCLAMATION_MARK,     /* ! */
	  CHAR_FORWARD_SLASH,        /* / */
	  CHAR_LEFT_CURLY_BRACE,     /* { */
	  CHAR_LEFT_PARENTHESES,     /* ( */
	  CHAR_LEFT_SQUARE_BRACKET,  /* [ */
	  CHAR_PLUS,                 /* + */
	  CHAR_QUESTION_MARK,        /* ? */
	  CHAR_RIGHT_CURLY_BRACE,    /* } */
	  CHAR_RIGHT_PARENTHESES,    /* ) */
	  CHAR_RIGHT_SQUARE_BRACKET  /* ] */
	} = /*@__PURE__*/ requireConstants();

	const isPathSeparator = code => {
	  return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
	};

	const depth = token => {
	  if (token.isPrefix !== true) {
	    token.depth = token.isGlobstar ? Infinity : 1;
	  }
	};

	/**
	 * Quickly scans a glob pattern and returns an object with a handful of
	 * useful properties, like `isGlob`, `path` (the leading non-glob, if it exists),
	 * `glob` (the actual pattern), `negated` (true if the path starts with `!` but not
	 * with `!(`) and `negatedExtglob` (true if the path starts with `!(`).
	 *
	 * ```js
	 * const pm = require('picomatch');
	 * console.log(pm.scan('foo/bar/*.js'));
	 * { isGlob: true, input: 'foo/bar/*.js', base: 'foo/bar', glob: '*.js' }
	 * ```
	 * @param {String} `str`
	 * @param {Object} `options`
	 * @return {Object} Returns an object with tokens and regex source string.
	 * @api public
	 */

	const scan = (input, options) => {
	  const opts = options || {};

	  const length = input.length - 1;
	  const scanToEnd = opts.parts === true || opts.scanToEnd === true;
	  const slashes = [];
	  const tokens = [];
	  const parts = [];

	  let str = input;
	  let index = -1;
	  let start = 0;
	  let lastIndex = 0;
	  let isBrace = false;
	  let isBracket = false;
	  let isGlob = false;
	  let isExtglob = false;
	  let isGlobstar = false;
	  let braceEscaped = false;
	  let backslashes = false;
	  let negated = false;
	  let negatedExtglob = false;
	  let finished = false;
	  let braces = 0;
	  let prev;
	  let code;
	  let token = { value: '', depth: 0, isGlob: false };

	  const eos = () => index >= length;
	  const peek = () => str.charCodeAt(index + 1);
	  const advance = () => {
	    prev = code;
	    return str.charCodeAt(++index);
	  };

	  while (index < length) {
	    code = advance();
	    let next;

	    if (code === CHAR_BACKWARD_SLASH) {
	      backslashes = token.backslashes = true;
	      code = advance();

	      if (code === CHAR_LEFT_CURLY_BRACE) {
	        braceEscaped = true;
	      }
	      continue;
	    }

	    if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE) {
	      braces++;

	      while (eos() !== true && (code = advance())) {
	        if (code === CHAR_BACKWARD_SLASH) {
	          backslashes = token.backslashes = true;
	          advance();
	          continue;
	        }

	        if (code === CHAR_LEFT_CURLY_BRACE) {
	          braces++;
	          continue;
	        }

	        if (braceEscaped !== true && code === CHAR_DOT && (code = advance()) === CHAR_DOT) {
	          isBrace = token.isBrace = true;
	          isGlob = token.isGlob = true;
	          finished = true;

	          if (scanToEnd === true) {
	            continue;
	          }

	          break;
	        }

	        if (braceEscaped !== true && code === CHAR_COMMA) {
	          isBrace = token.isBrace = true;
	          isGlob = token.isGlob = true;
	          finished = true;

	          if (scanToEnd === true) {
	            continue;
	          }

	          break;
	        }

	        if (code === CHAR_RIGHT_CURLY_BRACE) {
	          braces--;

	          if (braces === 0) {
	            braceEscaped = false;
	            isBrace = token.isBrace = true;
	            finished = true;
	            break;
	          }
	        }
	      }

	      if (scanToEnd === true) {
	        continue;
	      }

	      break;
	    }

	    if (code === CHAR_FORWARD_SLASH) {
	      slashes.push(index);
	      tokens.push(token);
	      token = { value: '', depth: 0, isGlob: false };

	      if (finished === true) continue;
	      if (prev === CHAR_DOT && index === (start + 1)) {
	        start += 2;
	        continue;
	      }

	      lastIndex = index + 1;
	      continue;
	    }

	    if (opts.noext !== true) {
	      const isExtglobChar = code === CHAR_PLUS
	        || code === CHAR_AT
	        || code === CHAR_ASTERISK
	        || code === CHAR_QUESTION_MARK
	        || code === CHAR_EXCLAMATION_MARK;

	      if (isExtglobChar === true && peek() === CHAR_LEFT_PARENTHESES) {
	        isGlob = token.isGlob = true;
	        isExtglob = token.isExtglob = true;
	        finished = true;
	        if (code === CHAR_EXCLAMATION_MARK && index === start) {
	          negatedExtglob = true;
	        }

	        if (scanToEnd === true) {
	          while (eos() !== true && (code = advance())) {
	            if (code === CHAR_BACKWARD_SLASH) {
	              backslashes = token.backslashes = true;
	              code = advance();
	              continue;
	            }

	            if (code === CHAR_RIGHT_PARENTHESES) {
	              isGlob = token.isGlob = true;
	              finished = true;
	              break;
	            }
	          }
	          continue;
	        }
	        break;
	      }
	    }

	    if (code === CHAR_ASTERISK) {
	      if (prev === CHAR_ASTERISK) isGlobstar = token.isGlobstar = true;
	      isGlob = token.isGlob = true;
	      finished = true;

	      if (scanToEnd === true) {
	        continue;
	      }
	      break;
	    }

	    if (code === CHAR_QUESTION_MARK) {
	      isGlob = token.isGlob = true;
	      finished = true;

	      if (scanToEnd === true) {
	        continue;
	      }
	      break;
	    }

	    if (code === CHAR_LEFT_SQUARE_BRACKET) {
	      while (eos() !== true && (next = advance())) {
	        if (next === CHAR_BACKWARD_SLASH) {
	          backslashes = token.backslashes = true;
	          advance();
	          continue;
	        }

	        if (next === CHAR_RIGHT_SQUARE_BRACKET) {
	          isBracket = token.isBracket = true;
	          isGlob = token.isGlob = true;
	          finished = true;
	          break;
	        }
	      }

	      if (scanToEnd === true) {
	        continue;
	      }

	      break;
	    }

	    if (opts.nonegate !== true && code === CHAR_EXCLAMATION_MARK && index === start) {
	      negated = token.negated = true;
	      start++;
	      continue;
	    }

	    if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
	      isGlob = token.isGlob = true;

	      if (scanToEnd === true) {
	        while (eos() !== true && (code = advance())) {
	          if (code === CHAR_LEFT_PARENTHESES) {
	            backslashes = token.backslashes = true;
	            code = advance();
	            continue;
	          }

	          if (code === CHAR_RIGHT_PARENTHESES) {
	            finished = true;
	            break;
	          }
	        }
	        continue;
	      }
	      break;
	    }

	    if (isGlob === true) {
	      finished = true;

	      if (scanToEnd === true) {
	        continue;
	      }

	      break;
	    }
	  }

	  if (opts.noext === true) {
	    isExtglob = false;
	    isGlob = false;
	  }

	  let base = str;
	  let prefix = '';
	  let glob = '';

	  if (start > 0) {
	    prefix = str.slice(0, start);
	    str = str.slice(start);
	    lastIndex -= start;
	  }

	  if (base && isGlob === true && lastIndex > 0) {
	    base = str.slice(0, lastIndex);
	    glob = str.slice(lastIndex);
	  } else if (isGlob === true) {
	    base = '';
	    glob = str;
	  } else {
	    base = str;
	  }

	  if (base && base !== '' && base !== '/' && base !== str) {
	    if (isPathSeparator(base.charCodeAt(base.length - 1))) {
	      base = base.slice(0, -1);
	    }
	  }

	  if (opts.unescape === true) {
	    if (glob) glob = utils.removeBackslashes(glob);

	    if (base && backslashes === true) {
	      base = utils.removeBackslashes(base);
	    }
	  }

	  const state = {
	    prefix,
	    input,
	    start,
	    base,
	    glob,
	    isBrace,
	    isBracket,
	    isGlob,
	    isExtglob,
	    isGlobstar,
	    negated,
	    negatedExtglob
	  };

	  if (opts.tokens === true) {
	    state.maxDepth = 0;
	    if (!isPathSeparator(code)) {
	      tokens.push(token);
	    }
	    state.tokens = tokens;
	  }

	  if (opts.parts === true || opts.tokens === true) {
	    let prevIndex;

	    for (let idx = 0; idx < slashes.length; idx++) {
	      const n = prevIndex ? prevIndex + 1 : start;
	      const i = slashes[idx];
	      const value = input.slice(n, i);
	      if (opts.tokens) {
	        if (idx === 0 && start !== 0) {
	          tokens[idx].isPrefix = true;
	          tokens[idx].value = prefix;
	        } else {
	          tokens[idx].value = value;
	        }
	        depth(tokens[idx]);
	        state.maxDepth += tokens[idx].depth;
	      }
	      if (idx !== 0 || value !== '') {
	        parts.push(value);
	      }
	      prevIndex = i;
	    }

	    if (prevIndex && prevIndex + 1 < input.length) {
	      const value = input.slice(prevIndex + 1);
	      parts.push(value);

	      if (opts.tokens) {
	        tokens[tokens.length - 1].value = value;
	        depth(tokens[tokens.length - 1]);
	        state.maxDepth += tokens[tokens.length - 1].depth;
	      }
	    }

	    state.slashes = slashes;
	    state.parts = parts;
	  }

	  return state;
	};

	scan_1 = scan;
	return scan_1;
}

var parse_1;
var hasRequiredParse;

function requireParse () {
	if (hasRequiredParse) return parse_1;
	hasRequiredParse = 1;

	const constants = /*@__PURE__*/ requireConstants();
	const utils = /*@__PURE__*/ requireUtils();

	/**
	 * Constants
	 */

	const {
	  MAX_LENGTH,
	  POSIX_REGEX_SOURCE,
	  REGEX_NON_SPECIAL_CHARS,
	  REGEX_SPECIAL_CHARS_BACKREF,
	  REPLACEMENTS
	} = constants;

	/**
	 * Helpers
	 */

	const expandRange = (args, options) => {
	  if (typeof options.expandRange === 'function') {
	    return options.expandRange(...args, options);
	  }

	  args.sort();
	  const value = `[${args.join('-')}]`;

	  return value;
	};

	/**
	 * Create the message for a syntax error
	 */

	const syntaxError = (type, char) => {
	  return `Missing ${type}: "${char}" - use "\\\\${char}" to match literal characters`;
	};

	const splitTopLevel = input => {
	  const parts = [];
	  let bracket = 0;
	  let paren = 0;
	  let quote = 0;
	  let value = '';
	  let escaped = false;

	  for (const ch of input) {
	    if (escaped === true) {
	      value += ch;
	      escaped = false;
	      continue;
	    }

	    if (ch === '\\') {
	      value += ch;
	      escaped = true;
	      continue;
	    }

	    if (ch === '"') {
	      quote = quote === 1 ? 0 : 1;
	      value += ch;
	      continue;
	    }

	    if (quote === 0) {
	      if (ch === '[') {
	        bracket++;
	      } else if (ch === ']' && bracket > 0) {
	        bracket--;
	      } else if (bracket === 0) {
	        if (ch === '(') {
	          paren++;
	        } else if (ch === ')' && paren > 0) {
	          paren--;
	        } else if (ch === '|' && paren === 0) {
	          parts.push(value);
	          value = '';
	          continue;
	        }
	      }
	    }

	    value += ch;
	  }

	  parts.push(value);
	  return parts;
	};

	const isPlainBranch = branch => {
	  let escaped = false;

	  for (const ch of branch) {
	    if (escaped === true) {
	      escaped = false;
	      continue;
	    }

	    if (ch === '\\') {
	      escaped = true;
	      continue;
	    }

	    if (/[?*+@!()[\]{}]/.test(ch)) {
	      return false;
	    }
	  }

	  return true;
	};

	const normalizeSimpleBranch = branch => {
	  let value = branch.trim();
	  let changed = true;

	  while (changed === true) {
	    changed = false;

	    if (/^@\([^\\()[\]{}|]+\)$/.test(value)) {
	      value = value.slice(2, -1);
	      changed = true;
	    }
	  }

	  if (!isPlainBranch(value)) {
	    return;
	  }

	  return value.replace(/\\(.)/g, '$1');
	};

	const hasRepeatedCharPrefixOverlap = branches => {
	  const values = branches.map(normalizeSimpleBranch).filter(Boolean);

	  for (let i = 0; i < values.length; i++) {
	    for (let j = i + 1; j < values.length; j++) {
	      const a = values[i];
	      const b = values[j];
	      const char = a[0];

	      if (!char || a !== char.repeat(a.length) || b !== char.repeat(b.length)) {
	        continue;
	      }

	      if (a === b || a.startsWith(b) || b.startsWith(a)) {
	        return true;
	      }
	    }
	  }

	  return false;
	};

	const parseRepeatedExtglob = (pattern, requireEnd = true) => {
	  if ((pattern[0] !== '+' && pattern[0] !== '*') || pattern[1] !== '(') {
	    return;
	  }

	  let bracket = 0;
	  let paren = 0;
	  let quote = 0;
	  let escaped = false;

	  for (let i = 1; i < pattern.length; i++) {
	    const ch = pattern[i];

	    if (escaped === true) {
	      escaped = false;
	      continue;
	    }

	    if (ch === '\\') {
	      escaped = true;
	      continue;
	    }

	    if (ch === '"') {
	      quote = quote === 1 ? 0 : 1;
	      continue;
	    }

	    if (quote === 1) {
	      continue;
	    }

	    if (ch === '[') {
	      bracket++;
	      continue;
	    }

	    if (ch === ']' && bracket > 0) {
	      bracket--;
	      continue;
	    }

	    if (bracket > 0) {
	      continue;
	    }

	    if (ch === '(') {
	      paren++;
	      continue;
	    }

	    if (ch === ')') {
	      paren--;

	      if (paren === 0) {
	        if (requireEnd === true && i !== pattern.length - 1) {
	          return;
	        }

	        return {
	          type: pattern[0],
	          body: pattern.slice(2, i),
	          end: i
	        };
	      }
	    }
	  }
	};

	const getStarExtglobSequenceOutput = pattern => {
	  let index = 0;
	  const chars = [];

	  while (index < pattern.length) {
	    const match = parseRepeatedExtglob(pattern.slice(index), false);

	    if (!match || match.type !== '*') {
	      return;
	    }

	    const branches = splitTopLevel(match.body).map(branch => branch.trim());
	    if (branches.length !== 1) {
	      return;
	    }

	    const branch = normalizeSimpleBranch(branches[0]);
	    if (!branch || branch.length !== 1) {
	      return;
	    }

	    chars.push(branch);
	    index += match.end + 1;
	  }

	  if (chars.length < 1) {
	    return;
	  }

	  const source = chars.length === 1
	    ? utils.escapeRegex(chars[0])
	    : `[${chars.map(ch => utils.escapeRegex(ch)).join('')}]`;

	  return `${source}*`;
	};

	const repeatedExtglobRecursion = pattern => {
	  let depth = 0;
	  let value = pattern.trim();
	  let match = parseRepeatedExtglob(value);

	  while (match) {
	    depth++;
	    value = match.body.trim();
	    match = parseRepeatedExtglob(value);
	  }

	  return depth;
	};

	const analyzeRepeatedExtglob = (body, options) => {
	  if (options.maxExtglobRecursion === false) {
	    return { risky: false };
	  }

	  const max =
	    typeof options.maxExtglobRecursion === 'number'
	      ? options.maxExtglobRecursion
	      : constants.DEFAULT_MAX_EXTGLOB_RECURSION;

	  const branches = splitTopLevel(body).map(branch => branch.trim());

	  if (branches.length > 1) {
	    if (
	      branches.some(branch => branch === '') ||
	      branches.some(branch => /^[*?]+$/.test(branch)) ||
	      hasRepeatedCharPrefixOverlap(branches)
	    ) {
	      return { risky: true };
	    }
	  }

	  for (const branch of branches) {
	    const safeOutput = getStarExtglobSequenceOutput(branch);
	    if (safeOutput) {
	      return { risky: true, safeOutput };
	    }

	    if (repeatedExtglobRecursion(branch) > max) {
	      return { risky: true };
	    }
	  }

	  return { risky: false };
	};

	/**
	 * Parse the given input string.
	 * @param {String} input
	 * @param {Object} options
	 * @return {Object}
	 */

	const parse = (input, options) => {
	  if (typeof input !== 'string') {
	    throw new TypeError('Expected a string');
	  }

	  input = REPLACEMENTS[input] || input;

	  const opts = { ...options };
	  const max = typeof opts.maxLength === 'number' ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;

	  let len = input.length;
	  if (len > max) {
	    throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
	  }

	  const bos = { type: 'bos', value: '', output: opts.prepend || '' };
	  const tokens = [bos];

	  const capture = opts.capture ? '' : '?:';

	  // create constants based on platform, for windows or posix
	  const PLATFORM_CHARS = constants.globChars(opts.windows);
	  const EXTGLOB_CHARS = constants.extglobChars(PLATFORM_CHARS);

	  const {
	    DOT_LITERAL,
	    PLUS_LITERAL,
	    SLASH_LITERAL,
	    ONE_CHAR,
	    DOTS_SLASH,
	    NO_DOT,
	    NO_DOT_SLASH,
	    NO_DOTS_SLASH,
	    QMARK,
	    QMARK_NO_DOT,
	    STAR,
	    START_ANCHOR
	  } = PLATFORM_CHARS;

	  const globstar = opts => {
	    return `(${capture}(?:(?!${START_ANCHOR}${opts.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
	  };

	  const nodot = opts.dot ? '' : NO_DOT;
	  const qmarkNoDot = opts.dot ? QMARK : QMARK_NO_DOT;
	  let star = opts.bash === true ? globstar(opts) : STAR;

	  if (opts.capture) {
	    star = `(${star})`;
	  }

	  // minimatch options support
	  if (typeof opts.noext === 'boolean') {
	    opts.noextglob = opts.noext;
	  }

	  const state = {
	    input,
	    index: -1,
	    start: 0,
	    dot: opts.dot === true,
	    consumed: '',
	    output: '',
	    prefix: '',
	    backtrack: false,
	    negated: false,
	    brackets: 0,
	    braces: 0,
	    parens: 0,
	    quotes: 0,
	    globstar: false,
	    tokens
	  };

	  input = utils.removePrefix(input, state);
	  len = input.length;

	  const extglobs = [];
	  const braces = [];
	  const stack = [];
	  let prev = bos;
	  let value;

	  /**
	   * Tokenizing helpers
	   */

	  const eos = () => state.index === len - 1;
	  const peek = state.peek = (n = 1) => input[state.index + n];
	  const advance = state.advance = () => input[++state.index] || '';
	  const remaining = () => input.slice(state.index + 1);
	  const consume = (value = '', num = 0) => {
	    state.consumed += value;
	    state.index += num;
	  };

	  const append = token => {
	    state.output += token.output != null ? token.output : token.value;
	    consume(token.value);
	  };

	  const negate = () => {
	    let count = 1;

	    while (peek() === '!' && (peek(2) !== '(' || peek(3) === '?')) {
	      advance();
	      state.start++;
	      count++;
	    }

	    if (count % 2 === 0) {
	      return false;
	    }

	    state.negated = true;
	    state.start++;
	    return true;
	  };

	  const increment = type => {
	    state[type]++;
	    stack.push(type);
	  };

	  const decrement = type => {
	    state[type]--;
	    stack.pop();
	  };

	  /**
	   * Push tokens onto the tokens array. This helper speeds up
	   * tokenizing by 1) helping us avoid backtracking as much as possible,
	   * and 2) helping us avoid creating extra tokens when consecutive
	   * characters are plain text. This improves performance and simplifies
	   * lookbehinds.
	   */

	  const push = tok => {
	    if (prev.type === 'globstar') {
	      const isBrace = state.braces > 0 && (tok.type === 'comma' || tok.type === 'brace');
	      const isExtglob = tok.extglob === true || (extglobs.length && (tok.type === 'pipe' || tok.type === 'paren'));

	      if (tok.type !== 'slash' && tok.type !== 'paren' && !isBrace && !isExtglob) {
	        state.output = state.output.slice(0, -prev.output.length);
	        prev.type = 'star';
	        prev.value = '*';
	        prev.output = star;
	        state.output += prev.output;
	      }
	    }

	    if (extglobs.length && tok.type !== 'paren') {
	      extglobs[extglobs.length - 1].inner += tok.value;
	    }

	    if (tok.value || tok.output) append(tok);
	    if (prev && prev.type === 'text' && tok.type === 'text') {
	      prev.output = (prev.output || prev.value) + tok.value;
	      prev.value += tok.value;
	      return;
	    }

	    tok.prev = prev;
	    tokens.push(tok);
	    prev = tok;
	  };

	  const extglobOpen = (type, value) => {
	    const token = { ...EXTGLOB_CHARS[value], conditions: 1, inner: '' };

	    token.prev = prev;
	    token.parens = state.parens;
	    token.output = state.output;
	    token.startIndex = state.index;
	    token.tokensIndex = tokens.length;
	    const output = (opts.capture ? '(' : '') + token.open;

	    increment('parens');
	    push({ type, value, output: state.output ? '' : ONE_CHAR });
	    push({ type: 'paren', extglob: true, value: advance(), output });
	    extglobs.push(token);
	  };

	  const extglobClose = token => {
	    const literal = input.slice(token.startIndex, state.index + 1);
	    const body = input.slice(token.startIndex + 2, state.index);
	    const analysis = analyzeRepeatedExtglob(body, opts);

	    if ((token.type === 'plus' || token.type === 'star') && analysis.risky) {
	      const safeOutput = analysis.safeOutput
	        ? (token.output ? '' : ONE_CHAR) + (opts.capture ? `(${analysis.safeOutput})` : analysis.safeOutput)
	        : undefined;
	      const open = tokens[token.tokensIndex];

	      open.type = 'text';
	      open.value = literal;
	      open.output = safeOutput || utils.escapeRegex(literal);

	      for (let i = token.tokensIndex + 1; i < tokens.length; i++) {
	        tokens[i].value = '';
	        tokens[i].output = '';
	        delete tokens[i].suffix;
	      }

	      state.output = token.output + open.output;
	      state.backtrack = true;

	      push({ type: 'paren', extglob: true, value, output: '' });
	      decrement('parens');
	      return;
	    }

	    let output = token.close + (opts.capture ? ')' : '');
	    let rest;

	    if (token.type === 'negate') {
	      let extglobStar = star;

	      if (token.inner && token.inner.length > 1 && token.inner.includes('/')) {
	        extglobStar = globstar(opts);
	      }

	      if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) {
	        output = token.close = `)$))${extglobStar}`;
	      }

	      if (token.inner.includes('*') && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) {
	        // Any non-magical string (`.ts`) or even nested expression (`.{ts,tsx}`) can follow after the closing parenthesis.
	        // In this case, we need to parse the string and use it in the output of the original pattern.
	        // Suitable patterns: `/!(*.d).ts`, `/!(*.d).{ts,tsx}`, `**/!(*-dbg).@(js)`.
	        //
	        // Disabling the `fastpaths` option due to a problem with parsing strings as `.ts` in the pattern like `**/!(*.d).ts`.
	        const expression = parse(rest, { ...options, fastpaths: false }).output;

	        output = token.close = `)${expression})${extglobStar})`;
	      }

	      if (token.prev.type === 'bos') {
	        state.negatedExtglob = true;
	      }
	    }

	    push({ type: 'paren', extglob: true, value, output });
	    decrement('parens');
	  };

	  /**
	   * Fast paths
	   */

	  if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
	    let backslashes = false;

	    let output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, (m, esc, chars, first, rest, index) => {
	      if (first === '\\') {
	        backslashes = true;
	        return m;
	      }

	      if (first === '?') {
	        if (esc) {
	          return esc + first + (rest ? QMARK.repeat(rest.length) : '');
	        }
	        if (index === 0) {
	          return qmarkNoDot + (rest ? QMARK.repeat(rest.length) : '');
	        }
	        return QMARK.repeat(chars.length);
	      }

	      if (first === '.') {
	        return DOT_LITERAL.repeat(chars.length);
	      }

	      if (first === '*') {
	        if (esc) {
	          return esc + first + (rest ? star : '');
	        }
	        return star;
	      }
	      return esc ? m : `\\${m}`;
	    });

	    if (backslashes === true) {
	      if (opts.unescape === true) {
	        output = output.replace(/\\/g, '');
	      } else {
	        output = output.replace(/\\+/g, m => {
	          return m.length % 2 === 0 ? '\\\\' : (m ? '\\' : '');
	        });
	      }
	    }

	    if (output === input && opts.contains === true) {
	      state.output = input;
	      return state;
	    }

	    state.output = utils.wrapOutput(output, state, options);
	    return state;
	  }

	  /**
	   * Tokenize input until we reach end-of-string
	   */

	  while (!eos()) {
	    value = advance();

	    if (value === '\u0000') {
	      continue;
	    }

	    /**
	     * Escaped characters
	     */

	    if (value === '\\') {
	      const next = peek();

	      if (next === '/' && opts.bash !== true) {
	        continue;
	      }

	      if (next === '.' || next === ';') {
	        continue;
	      }

	      if (!next) {
	        value += '\\';
	        push({ type: 'text', value });
	        continue;
	      }

	      // collapse slashes to reduce potential for exploits
	      const match = /^\\+/.exec(remaining());
	      let slashes = 0;

	      if (match && match[0].length > 2) {
	        slashes = match[0].length;
	        state.index += slashes;
	        if (slashes % 2 !== 0) {
	          value += '\\';
	        }
	      }

	      if (opts.unescape === true) {
	        value = advance();
	      } else {
	        value += advance();
	      }

	      if (state.brackets === 0) {
	        push({ type: 'text', value });
	        continue;
	      }
	    }

	    /**
	     * If we're inside a regex character class, continue
	     * until we reach the closing bracket.
	     */

	    if (state.brackets > 0 && (value !== ']' || prev.value === '[' || prev.value === '[^')) {
	      if (opts.posix !== false && value === ':') {
	        const inner = prev.value.slice(1);
	        if (inner.includes('[')) {
	          prev.posix = true;

	          if (inner.includes(':')) {
	            const idx = prev.value.lastIndexOf('[');
	            const pre = prev.value.slice(0, idx);
	            const rest = prev.value.slice(idx + 2);
	            const posix = POSIX_REGEX_SOURCE[rest];
	            if (posix) {
	              prev.value = pre + posix;
	              state.backtrack = true;
	              advance();

	              if (!bos.output && tokens.indexOf(prev) === 1) {
	                bos.output = ONE_CHAR;
	              }
	              continue;
	            }
	          }
	        }
	      }

	      if ((value === '[' && peek() !== ':') || (value === '-' && peek() === ']')) {
	        value = `\\${value}`;
	      }

	      if (value === ']' && (prev.value === '[' || prev.value === '[^')) {
	        value = `\\${value}`;
	      }

	      if (opts.posix === true && value === '!' && prev.value === '[') {
	        value = '^';
	      }

	      prev.value += value;
	      append({ value });
	      continue;
	    }

	    /**
	     * If we're inside a quoted string, continue
	     * until we reach the closing double quote.
	     */

	    if (state.quotes === 1 && value !== '"') {
	      value = utils.escapeRegex(value);
	      prev.value += value;
	      append({ value });
	      continue;
	    }

	    /**
	     * Double quotes
	     */

	    if (value === '"') {
	      state.quotes = state.quotes === 1 ? 0 : 1;
	      if (opts.keepQuotes === true) {
	        push({ type: 'text', value });
	      }
	      continue;
	    }

	    /**
	     * Parentheses
	     */

	    if (value === '(') {
	      increment('parens');
	      push({ type: 'paren', value });
	      continue;
	    }

	    if (value === ')') {
	      if (state.parens === 0 && opts.strictBrackets === true) {
	        throw new SyntaxError(syntaxError('opening', '('));
	      }

	      const extglob = extglobs[extglobs.length - 1];
	      if (extglob && state.parens === extglob.parens + 1) {
	        extglobClose(extglobs.pop());
	        continue;
	      }

	      push({ type: 'paren', value, output: state.parens ? ')' : '\\)' });
	      decrement('parens');
	      continue;
	    }

	    /**
	     * Square brackets
	     */

	    if (value === '[') {
	      if (opts.nobracket === true || !remaining().includes(']')) {
	        if (opts.nobracket !== true && opts.strictBrackets === true) {
	          throw new SyntaxError(syntaxError('closing', ']'));
	        }

	        value = `\\${value}`;
	      } else {
	        increment('brackets');
	      }

	      push({ type: 'bracket', value });
	      continue;
	    }

	    if (value === ']') {
	      if (opts.nobracket === true || (prev && prev.type === 'bracket' && prev.value.length === 1)) {
	        push({ type: 'text', value, output: `\\${value}` });
	        continue;
	      }

	      if (state.brackets === 0) {
	        if (opts.strictBrackets === true) {
	          throw new SyntaxError(syntaxError('opening', '['));
	        }

	        push({ type: 'text', value, output: `\\${value}` });
	        continue;
	      }

	      decrement('brackets');

	      const prevValue = prev.value.slice(1);
	      if (prev.posix !== true && prevValue[0] === '^' && !prevValue.includes('/')) {
	        value = `/${value}`;
	      }

	      prev.value += value;
	      append({ value });

	      // when literal brackets are explicitly disabled
	      // assume we should match with a regex character class
	      if (opts.literalBrackets === false || utils.hasRegexChars(prevValue)) {
	        continue;
	      }

	      const escaped = utils.escapeRegex(prev.value);
	      state.output = state.output.slice(0, -prev.value.length);

	      // when literal brackets are explicitly enabled
	      // assume we should escape the brackets to match literal characters
	      if (opts.literalBrackets === true) {
	        state.output += escaped;
	        prev.value = escaped;
	        continue;
	      }

	      // when the user specifies nothing, try to match both
	      prev.value = `(${capture}${escaped}|${prev.value})`;
	      state.output += prev.value;
	      continue;
	    }

	    /**
	     * Braces
	     */

	    if (value === '{' && opts.nobrace !== true) {
	      increment('braces');

	      const open = {
	        type: 'brace',
	        value,
	        output: '(',
	        outputIndex: state.output.length,
	        tokensIndex: state.tokens.length
	      };

	      braces.push(open);
	      push(open);
	      continue;
	    }

	    if (value === '}') {
	      const brace = braces[braces.length - 1];

	      if (opts.nobrace === true || !brace) {
	        push({ type: 'text', value, output: value });
	        continue;
	      }

	      let output = ')';

	      if (brace.dots === true) {
	        const arr = tokens.slice();
	        const range = [];

	        for (let i = arr.length - 1; i >= 0; i--) {
	          tokens.pop();
	          if (arr[i].type === 'brace') {
	            break;
	          }
	          if (arr[i].type !== 'dots') {
	            range.unshift(arr[i].value);
	          }
	        }

	        output = expandRange(range, opts);
	        state.backtrack = true;
	      }

	      if (brace.comma !== true && brace.dots !== true) {
	        const out = state.output.slice(0, brace.outputIndex);
	        const toks = state.tokens.slice(brace.tokensIndex);
	        brace.value = brace.output = '\\{';
	        value = output = '\\}';
	        state.output = out;
	        for (const t of toks) {
	          state.output += (t.output || t.value);
	        }
	      }

	      push({ type: 'brace', value, output });
	      decrement('braces');
	      braces.pop();
	      continue;
	    }

	    /**
	     * Pipes
	     */

	    if (value === '|') {
	      if (extglobs.length > 0) {
	        extglobs[extglobs.length - 1].conditions++;
	      }
	      push({ type: 'text', value });
	      continue;
	    }

	    /**
	     * Commas
	     */

	    if (value === ',') {
	      let output = value;

	      const brace = braces[braces.length - 1];
	      if (brace && stack[stack.length - 1] === 'braces') {
	        brace.comma = true;
	        output = '|';
	      }

	      push({ type: 'comma', value, output });
	      continue;
	    }

	    /**
	     * Slashes
	     */

	    if (value === '/') {
	      // if the beginning of the glob is "./", advance the start
	      // to the current index, and don't add the "./" characters
	      // to the state. This greatly simplifies lookbehinds when
	      // checking for BOS characters like "!" and "." (not "./")
	      if (prev.type === 'dot' && state.index === state.start + 1) {
	        state.start = state.index + 1;
	        state.consumed = '';
	        state.output = '';
	        tokens.pop();
	        prev = bos; // reset "prev" to the first token
	        continue;
	      }

	      push({ type: 'slash', value, output: SLASH_LITERAL });
	      continue;
	    }

	    /**
	     * Dots
	     */

	    if (value === '.') {
	      if (state.braces > 0 && prev.type === 'dot') {
	        if (prev.value === '.') prev.output = DOT_LITERAL;
	        const brace = braces[braces.length - 1];
	        prev.type = 'dots';
	        prev.output += value;
	        prev.value += value;
	        brace.dots = true;
	        continue;
	      }

	      if ((state.braces + state.parens) === 0 && prev.type !== 'bos' && prev.type !== 'slash') {
	        push({ type: 'text', value, output: DOT_LITERAL });
	        continue;
	      }

	      push({ type: 'dot', value, output: DOT_LITERAL });
	      continue;
	    }

	    /**
	     * Question marks
	     */

	    if (value === '?') {
	      const isGroup = prev && prev.value === '(';
	      if (!isGroup && opts.noextglob !== true && peek() === '(' && peek(2) !== '?') {
	        extglobOpen('qmark', value);
	        continue;
	      }

	      if (prev && prev.type === 'paren') {
	        const next = peek();
	        let output = value;

	        if ((prev.value === '(' && !/[!=<:]/.test(next)) || (next === '<' && !/<([!=]|\w+>)/.test(remaining()))) {
	          output = `\\${value}`;
	        }

	        push({ type: 'text', value, output });
	        continue;
	      }

	      if (opts.dot !== true && (prev.type === 'slash' || prev.type === 'bos')) {
	        push({ type: 'qmark', value, output: QMARK_NO_DOT });
	        continue;
	      }

	      push({ type: 'qmark', value, output: QMARK });
	      continue;
	    }

	    /**
	     * Exclamation
	     */

	    if (value === '!') {
	      if (opts.noextglob !== true && peek() === '(') {
	        if (peek(2) !== '?' || !/[!=<:]/.test(peek(3))) {
	          extglobOpen('negate', value);
	          continue;
	        }
	      }

	      if (opts.nonegate !== true && state.index === 0) {
	        negate();
	        continue;
	      }
	    }

	    /**
	     * Plus
	     */

	    if (value === '+') {
	      if (opts.noextglob !== true && peek() === '(' && peek(2) !== '?') {
	        extglobOpen('plus', value);
	        continue;
	      }

	      if ((prev && prev.value === '(') || opts.regex === false) {
	        push({ type: 'plus', value, output: PLUS_LITERAL });
	        continue;
	      }

	      if ((prev && (prev.type === 'bracket' || prev.type === 'paren' || prev.type === 'brace')) || state.parens > 0) {
	        push({ type: 'plus', value });
	        continue;
	      }

	      push({ type: 'plus', value: PLUS_LITERAL });
	      continue;
	    }

	    /**
	     * Plain text
	     */

	    if (value === '@') {
	      if (opts.noextglob !== true && peek() === '(' && peek(2) !== '?') {
	        push({ type: 'at', extglob: true, value, output: '' });
	        continue;
	      }

	      push({ type: 'text', value });
	      continue;
	    }

	    /**
	     * Plain text
	     */

	    if (value !== '*') {
	      if (value === '$' || value === '^') {
	        value = `\\${value}`;
	      }

	      const match = REGEX_NON_SPECIAL_CHARS.exec(remaining());
	      if (match) {
	        value += match[0];
	        state.index += match[0].length;
	      }

	      push({ type: 'text', value });
	      continue;
	    }

	    /**
	     * Stars
	     */

	    if (prev && (prev.type === 'globstar' || prev.star === true)) {
	      prev.type = 'star';
	      prev.star = true;
	      prev.value += value;
	      prev.output = star;
	      state.backtrack = true;
	      state.globstar = true;
	      consume(value);
	      continue;
	    }

	    let rest = remaining();
	    if (opts.noextglob !== true && /^\([^?]/.test(rest)) {
	      extglobOpen('star', value);
	      continue;
	    }

	    if (prev.type === 'star') {
	      if (opts.noglobstar === true) {
	        consume(value);
	        continue;
	      }

	      const prior = prev.prev;
	      const before = prior.prev;
	      const isStart = prior.type === 'slash' || prior.type === 'bos';
	      const afterStar = before && (before.type === 'star' || before.type === 'globstar');

	      if (opts.bash === true && (!isStart || (rest[0] && rest[0] !== '/'))) {
	        push({ type: 'star', value, output: '' });
	        continue;
	      }

	      const isBrace = state.braces > 0 && (prior.type === 'comma' || prior.type === 'brace');
	      const isExtglob = extglobs.length && (prior.type === 'pipe' || prior.type === 'paren');
	      if (!isStart && prior.type !== 'paren' && !isBrace && !isExtglob) {
	        push({ type: 'star', value, output: '' });
	        continue;
	      }

	      // strip consecutive `/**/`
	      while (rest.slice(0, 3) === '/**') {
	        const after = input[state.index + 4];
	        if (after && after !== '/') {
	          break;
	        }
	        rest = rest.slice(3);
	        consume('/**', 3);
	      }

	      if (prior.type === 'bos' && eos()) {
	        prev.type = 'globstar';
	        prev.value += value;
	        prev.output = globstar(opts);
	        state.output = prev.output;
	        state.globstar = true;
	        consume(value);
	        continue;
	      }

	      if (prior.type === 'slash' && prior.prev.type !== 'bos' && !afterStar && eos()) {
	        state.output = state.output.slice(0, -(prior.output + prev.output).length);
	        prior.output = `(?:${prior.output}`;

	        prev.type = 'globstar';
	        prev.output = globstar(opts) + (opts.strictSlashes ? ')' : '|$)');
	        prev.value += value;
	        state.globstar = true;
	        state.output += prior.output + prev.output;
	        consume(value);
	        continue;
	      }

	      if (prior.type === 'slash' && prior.prev.type !== 'bos' && rest[0] === '/') {
	        const end = rest[1] !== void 0 ? '|$' : '';

	        state.output = state.output.slice(0, -(prior.output + prev.output).length);
	        prior.output = `(?:${prior.output}`;

	        prev.type = 'globstar';
	        prev.output = `${globstar(opts)}${SLASH_LITERAL}|${SLASH_LITERAL}${end})`;
	        prev.value += value;

	        state.output += prior.output + prev.output;
	        state.globstar = true;

	        consume(value + advance());

	        push({ type: 'slash', value: '/', output: '' });
	        continue;
	      }

	      if (prior.type === 'bos' && rest[0] === '/') {
	        prev.type = 'globstar';
	        prev.value += value;
	        prev.output = `(?:^|${SLASH_LITERAL}|${globstar(opts)}${SLASH_LITERAL})`;
	        state.output = prev.output;
	        state.globstar = true;
	        consume(value + advance());
	        push({ type: 'slash', value: '/', output: '' });
	        continue;
	      }

	      // remove single star from output
	      state.output = state.output.slice(0, -prev.output.length);

	      // reset previous token to globstar
	      prev.type = 'globstar';
	      prev.output = globstar(opts);
	      prev.value += value;

	      // reset output with globstar
	      state.output += prev.output;
	      state.globstar = true;
	      consume(value);
	      continue;
	    }

	    const token = { type: 'star', value, output: star };

	    if (opts.bash === true) {
	      token.output = '.*?';
	      if (prev.type === 'bos' || prev.type === 'slash') {
	        token.output = nodot + token.output;
	      }
	      push(token);
	      continue;
	    }

	    if (prev && (prev.type === 'bracket' || prev.type === 'paren') && opts.regex === true) {
	      token.output = value;
	      push(token);
	      continue;
	    }

	    if (state.index === state.start || prev.type === 'slash' || prev.type === 'dot') {
	      if (prev.type === 'dot') {
	        state.output += NO_DOT_SLASH;
	        prev.output += NO_DOT_SLASH;

	      } else if (opts.dot === true) {
	        state.output += NO_DOTS_SLASH;
	        prev.output += NO_DOTS_SLASH;

	      } else {
	        state.output += nodot;
	        prev.output += nodot;
	      }

	      if (peek() !== '*') {
	        state.output += ONE_CHAR;
	        prev.output += ONE_CHAR;
	      }
	    }

	    push(token);
	  }

	  while (state.brackets > 0) {
	    if (opts.strictBrackets === true) throw new SyntaxError(syntaxError('closing', ']'));
	    state.output = utils.escapeLast(state.output, '[');
	    decrement('brackets');
	  }

	  while (state.parens > 0) {
	    if (opts.strictBrackets === true) throw new SyntaxError(syntaxError('closing', ')'));
	    state.output = utils.escapeLast(state.output, '(');
	    decrement('parens');
	  }

	  while (state.braces > 0) {
	    if (opts.strictBrackets === true) throw new SyntaxError(syntaxError('closing', '}'));
	    state.output = utils.escapeLast(state.output, '{');
	    decrement('braces');
	  }

	  if (opts.strictSlashes !== true && (prev.type === 'star' || prev.type === 'bracket')) {
	    push({ type: 'maybe_slash', value: '', output: `${SLASH_LITERAL}?` });
	  }

	  // rebuild the output if we had to backtrack at any point
	  if (state.backtrack === true) {
	    state.output = '';

	    for (const token of state.tokens) {
	      state.output += token.output != null ? token.output : token.value;

	      if (token.suffix) {
	        state.output += token.suffix;
	      }
	    }
	  }

	  return state;
	};

	/**
	 * Fast paths for creating regular expressions for common glob patterns.
	 * This can significantly speed up processing and has very little downside
	 * impact when none of the fast paths match.
	 */

	parse.fastpaths = (input, options) => {
	  const opts = { ...options };
	  const max = typeof opts.maxLength === 'number' ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
	  const len = input.length;
	  if (len > max) {
	    throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
	  }

	  input = REPLACEMENTS[input] || input;

	  // create constants based on platform, for windows or posix
	  const {
	    DOT_LITERAL,
	    SLASH_LITERAL,
	    ONE_CHAR,
	    DOTS_SLASH,
	    NO_DOT,
	    NO_DOTS,
	    NO_DOTS_SLASH,
	    STAR,
	    START_ANCHOR
	  } = constants.globChars(opts.windows);

	  const nodot = opts.dot ? NO_DOTS : NO_DOT;
	  const slashDot = opts.dot ? NO_DOTS_SLASH : NO_DOT;
	  const capture = opts.capture ? '' : '?:';
	  const state = { negated: false, prefix: '' };
	  let star = opts.bash === true ? '.*?' : STAR;

	  if (opts.capture) {
	    star = `(${star})`;
	  }

	  const globstar = opts => {
	    if (opts.noglobstar === true) return star;
	    return `(${capture}(?:(?!${START_ANCHOR}${opts.dot ? DOTS_SLASH : DOT_LITERAL}).)*?)`;
	  };

	  const create = str => {
	    switch (str) {
	      case '*':
	        return `${nodot}${ONE_CHAR}${star}`;

	      case '.*':
	        return `${DOT_LITERAL}${ONE_CHAR}${star}`;

	      case '*.*':
	        return `${nodot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;

	      case '*/*':
	        return `${nodot}${star}${SLASH_LITERAL}${ONE_CHAR}${slashDot}${star}`;

	      case '**':
	        return nodot + globstar(opts);

	      case '**/*':
	        return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${ONE_CHAR}${star}`;

	      case '**/*.*':
	        return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${slashDot}${star}${DOT_LITERAL}${ONE_CHAR}${star}`;

	      case '**/.*':
	        return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL})?${DOT_LITERAL}${ONE_CHAR}${star}`;

	      default: {
	        const match = /^(.*?)\.(\w+)$/.exec(str);
	        if (!match) return;

	        const source = create(match[1]);
	        if (!source) return;

	        return source + DOT_LITERAL + match[2];
	      }
	    }
	  };

	  const output = utils.removePrefix(input, state);
	  let source = create(output);

	  if (source && opts.strictSlashes !== true) {
	    source += `${SLASH_LITERAL}?`;
	  }

	  return source;
	};

	parse_1 = parse;
	return parse_1;
}

var picomatch_1$1;
var hasRequiredPicomatch$1;

function requirePicomatch$1 () {
	if (hasRequiredPicomatch$1) return picomatch_1$1;
	hasRequiredPicomatch$1 = 1;

	const scan = /*@__PURE__*/ requireScan();
	const parse = /*@__PURE__*/ requireParse();
	const utils = /*@__PURE__*/ requireUtils();
	const constants = /*@__PURE__*/ requireConstants();
	const isObject = val => val && typeof val === 'object' && !Array.isArray(val);

	/**
	 * Creates a matcher function from one or more glob patterns. The
	 * returned function takes a string to match as its first argument,
	 * and returns true if the string is a match. The returned matcher
	 * function also takes a boolean as the second argument that, when true,
	 * returns an object with additional information.
	 *
	 * ```js
	 * const picomatch = require('picomatch');
	 * // picomatch(glob[, options]);
	 *
	 * const isMatch = picomatch('*.!(*a)');
	 * console.log(isMatch('a.a')); //=> false
	 * console.log(isMatch('a.b')); //=> true
	 * ```
	 * @name picomatch
	 * @param {String|Array} `globs` One or more glob patterns.
	 * @param {Object=} `options`
	 * @return {Function=} Returns a matcher function.
	 * @api public
	 */

	const picomatch = (glob, options, returnState = false) => {
	  if (Array.isArray(glob)) {
	    const fns = glob.map(input => picomatch(input, options, returnState));
	    const arrayMatcher = str => {
	      for (const isMatch of fns) {
	        const state = isMatch(str);
	        if (state) return state;
	      }
	      return false;
	    };
	    return arrayMatcher;
	  }

	  const isState = isObject(glob) && glob.tokens && glob.input;

	  if (glob === '' || (typeof glob !== 'string' && !isState)) {
	    throw new TypeError('Expected pattern to be a non-empty string');
	  }

	  const opts = options || {};
	  const posix = opts.windows;
	  const regex = isState
	    ? picomatch.compileRe(glob, options)
	    : picomatch.makeRe(glob, options, false, true);

	  const state = regex.state;
	  delete regex.state;

	  let isIgnored = () => false;
	  if (opts.ignore) {
	    const ignoreOpts = { ...options, ignore: null, onMatch: null, onResult: null };
	    isIgnored = picomatch(opts.ignore, ignoreOpts, returnState);
	  }

	  const matcher = (input, returnObject = false) => {
	    const { isMatch, match, output } = picomatch.test(input, regex, options, { glob, posix });
	    const result = { glob, state, regex, posix, input, output, match, isMatch };

	    if (typeof opts.onResult === 'function') {
	      opts.onResult(result);
	    }

	    if (isMatch === false) {
	      result.isMatch = false;
	      return returnObject ? result : false;
	    }

	    if (isIgnored(input)) {
	      if (typeof opts.onIgnore === 'function') {
	        opts.onIgnore(result);
	      }
	      result.isMatch = false;
	      return returnObject ? result : false;
	    }

	    if (typeof opts.onMatch === 'function') {
	      opts.onMatch(result);
	    }
	    return returnObject ? result : true;
	  };

	  if (returnState) {
	    matcher.state = state;
	  }

	  return matcher;
	};

	/**
	 * Test `input` with the given `regex`. This is used by the main
	 * `picomatch()` function to test the input string.
	 *
	 * ```js
	 * const picomatch = require('picomatch');
	 * // picomatch.test(input, regex[, options]);
	 *
	 * console.log(picomatch.test('foo/bar', /^(?:([^/]*?)\/([^/]*?))$/));
	 * // { isMatch: true, match: [ 'foo/', 'foo', 'bar' ], output: 'foo/bar' }
	 * ```
	 * @param {String} `input` String to test.
	 * @param {RegExp} `regex`
	 * @return {Object} Returns an object with matching info.
	 * @api public
	 */

	picomatch.test = (input, regex, options, { glob, posix } = {}) => {
	  if (typeof input !== 'string') {
	    throw new TypeError('Expected input to be a string');
	  }

	  if (input === '') {
	    return { isMatch: false, output: '' };
	  }

	  const opts = options || {};
	  const format = opts.format || (posix ? utils.toPosixSlashes : null);
	  let match = input === glob;
	  let output = (match && format) ? format(input) : input;

	  if (match === false) {
	    output = format ? format(input) : input;
	    match = output === glob;
	  }

	  if (match === false || opts.capture === true) {
	    if (opts.matchBase === true || opts.basename === true) {
	      match = picomatch.matchBase(input, regex, options, posix);
	    } else {
	      match = regex.exec(output);
	    }
	  }

	  return { isMatch: Boolean(match), match, output };
	};

	/**
	 * Match the basename of a filepath.
	 *
	 * ```js
	 * const picomatch = require('picomatch');
	 * // picomatch.matchBase(input, glob[, options]);
	 * console.log(picomatch.matchBase('foo/bar.js', '*.js'); // true
	 * ```
	 * @param {String} `input` String to test.
	 * @param {RegExp|String} `glob` Glob pattern or regex created by [.makeRe](#makeRe).
	 * @return {Boolean}
	 * @api public
	 */

	picomatch.matchBase = (input, glob, options) => {
	  const regex = glob instanceof RegExp ? glob : picomatch.makeRe(glob, options);
	  return regex.test(utils.basename(input));
	};

	/**
	 * Returns true if **any** of the given glob `patterns` match the specified `string`.
	 *
	 * ```js
	 * const picomatch = require('picomatch');
	 * // picomatch.isMatch(string, patterns[, options]);
	 *
	 * console.log(picomatch.isMatch('a.a', ['b.*', '*.a'])); //=> true
	 * console.log(picomatch.isMatch('a.a', 'b.*')); //=> false
	 * ```
	 * @param {String|Array} str The string to test.
	 * @param {String|Array} patterns One or more glob patterns to use for matching.
	 * @param {Object} [options] See available [options](#options).
	 * @return {Boolean} Returns true if any patterns match `str`
	 * @api public
	 */

	picomatch.isMatch = (str, patterns, options) => picomatch(patterns, options)(str);

	/**
	 * Parse a glob pattern to create the source string for a regular
	 * expression.
	 *
	 * ```js
	 * const picomatch = require('picomatch');
	 * const result = picomatch.parse(pattern[, options]);
	 * ```
	 * @param {String} `pattern`
	 * @param {Object} `options`
	 * @return {Object} Returns an object with useful properties and output to be used as a regex source string.
	 * @api public
	 */

	picomatch.parse = (pattern, options) => {
	  if (Array.isArray(pattern)) return pattern.map(p => picomatch.parse(p, options));
	  return parse(pattern, { ...options, fastpaths: false });
	};

	/**
	 * Scan a glob pattern to separate the pattern into segments.
	 *
	 * ```js
	 * const picomatch = require('picomatch');
	 * // picomatch.scan(input[, options]);
	 *
	 * const result = picomatch.scan('!./foo/*.js');
	 * console.log(result);
	 * { prefix: '!./',
	 *   input: '!./foo/*.js',
	 *   start: 3,
	 *   base: 'foo',
	 *   glob: '*.js',
	 *   isBrace: false,
	 *   isBracket: false,
	 *   isGlob: true,
	 *   isExtglob: false,
	 *   isGlobstar: false,
	 *   negated: true }
	 * ```
	 * @param {String} `input` Glob pattern to scan.
	 * @param {Object} `options`
	 * @return {Object} Returns an object with
	 * @api public
	 */

	picomatch.scan = (input, options) => scan(input, options);

	/**
	 * Compile a regular expression from the `state` object returned by the
	 * [parse()](#parse) method.
	 *
	 * ```js
	 * const picomatch = require('picomatch');
	 * const state = picomatch.parse('*.js');
	 * // picomatch.compileRe(state[, options]);
	 *
	 * console.log(picomatch.compileRe(state));
	 * //=> /^(?:(?!\.)(?=.)[^/]*?\.js)$/
	 * ```
	 * @param {Object} `state`
	 * @param {Object} `options`
	 * @param {Boolean} `returnOutput` Intended for implementors, this argument allows you to return the raw output from the parser.
	 * @param {Boolean} `returnState` Adds the state to a `state` property on the returned regex. Useful for implementors and debugging.
	 * @return {RegExp}
	 * @api public
	 */

	picomatch.compileRe = (state, options, returnOutput = false, returnState = false) => {
	  if (returnOutput === true) {
	    return state.output;
	  }

	  const opts = options || {};
	  const prepend = opts.contains ? '' : '^';
	  const append = opts.contains ? '' : '$';

	  let source = `${prepend}(?:${state.output})${append}`;
	  if (state && state.negated === true) {
	    source = `^(?!${source}).*$`;
	  }

	  const regex = picomatch.toRegex(source, options);
	  if (returnState === true) {
	    regex.state = state;
	  }

	  return regex;
	};

	/**
	 * Create a regular expression from a parsed glob pattern.
	 *
	 * ```js
	 * const picomatch = require('picomatch');
	 * // picomatch.makeRe(state[, options]);
	 *
	 * const result = picomatch.makeRe('*.js');
	 * console.log(result);
	 * //=> /^(?:(?!\.)(?=.)[^/]*?\.js)$/
	 * ```
	 * @param {String} `state` The object returned from the `.parse` method.
	 * @param {Object} `options`
	 * @param {Boolean} `returnOutput` Implementors may use this argument to return the compiled output, instead of a regular expression. This is not exposed on the options to prevent end-users from mutating the result.
	 * @param {Boolean} `returnState` Implementors may use this argument to return the state from the parsed glob with the returned regular expression.
	 * @return {RegExp} Returns a regex created from the given pattern.
	 * @api public
	 */

	picomatch.makeRe = (input, options = {}, returnOutput = false, returnState = false) => {
	  if (!input || typeof input !== 'string') {
	    throw new TypeError('Expected a non-empty string');
	  }

	  let parsed = { negated: false, fastpaths: true };

	  if (options.fastpaths !== false && (input[0] === '.' || input[0] === '*')) {
	    parsed.output = parse.fastpaths(input, options);
	  }

	  if (!parsed.output) {
	    parsed = parse(input, options);
	  }

	  return picomatch.compileRe(parsed, options, returnOutput, returnState);
	};

	/**
	 * Create a regular expression from the given regex source string.
	 *
	 * ```js
	 * const picomatch = require('picomatch');
	 * // picomatch.toRegex(source[, options]);
	 *
	 * const { output } = picomatch.parse('*.js');
	 * console.log(picomatch.toRegex(output));
	 * //=> /^(?:(?!\.)(?=.)[^/]*?\.js)$/
	 * ```
	 * @param {String} `source` Regular expression source string.
	 * @param {Object} `options`
	 * @return {RegExp}
	 * @api public
	 */

	picomatch.toRegex = (source, options) => {
	  try {
	    const opts = options || {};
	    return new RegExp(source, opts.flags || (opts.nocase ? 'i' : ''));
	  } catch (err) {
	    if (options && options.debug === true) throw err;
	    return /$^/;
	  }
	};

	/**
	 * Picomatch constants.
	 * @return {Object}
	 */

	picomatch.constants = constants;

	/**
	 * Expose "picomatch"
	 */

	picomatch_1$1 = picomatch;
	return picomatch_1$1;
}

var picomatch_1;
var hasRequiredPicomatch;

function requirePicomatch () {
	if (hasRequiredPicomatch) return picomatch_1;
	hasRequiredPicomatch = 1;

	const pico = /*@__PURE__*/ requirePicomatch$1();
	const utils = /*@__PURE__*/ requireUtils();

	function picomatch(glob, options, returnState = false) {
	  // default to os.platform()
	  if (options && (options.windows === null || options.windows === undefined)) {
	    // don't mutate the original options object
	    options = { ...options, windows: utils.isWindows() };
	  }

	  return pico(glob, options, returnState);
	}

	Object.assign(picomatch, pico);
	picomatch_1 = picomatch;
	return picomatch_1;
}

var picomatchExports = /*@__PURE__*/ requirePicomatch();
const pm = /*@__PURE__*/getDefaultExportFromCjs(picomatchExports);

function getMatcherString$1(glob, cwd) {
    if (glob.startsWith('**') || parseAst_js.isAbsolute(glob)) {
        return parseAst_js.normalize(glob);
    }
    const resolved = path.resolve(cwd, glob);
    return parseAst_js.normalize(resolved);
}
function patternToIdFilter(pattern) {
    if (pattern instanceof RegExp) {
        return (id) => {
            const normalizedId = parseAst_js.normalize(id);
            const result = pattern.test(normalizedId);
            pattern.lastIndex = 0;
            return result;
        };
    }
    const cwd = process.cwd();
    const glob = getMatcherString$1(pattern, cwd);
    const matcher = pm(glob, { dot: true });
    return (id) => {
        const normalizedId = parseAst_js.normalize(id);
        return matcher(normalizedId);
    };
}
function patternToCodeFilter(pattern) {
    if (pattern instanceof RegExp) {
        return (code) => {
            const result = pattern.test(code);
            pattern.lastIndex = 0;
            return result;
        };
    }
    return (code) => code.includes(pattern);
}
function createFilter$1(exclude, include) {
    if (!exclude && !include) {
        return;
    }
    return input => {
        if (exclude?.some(filter => filter(input))) {
            return false;
        }
        if (include?.some(filter => filter(input))) {
            return true;
        }
        return !(include && include.length > 0);
    };
}
function normalizeFilter(filter) {
    if (typeof filter === 'string' || filter instanceof RegExp) {
        return {
            include: [filter]
        };
    }
    if (Array.isArray(filter)) {
        return {
            include: filter
        };
    }
    return {
        exclude: filter.exclude ? ensureArray$1(filter.exclude) : undefined,
        include: filter.include ? ensureArray$1(filter.include) : undefined
    };
}
function createIdFilter(filter) {
    if (!filter)
        return;
    const { exclude, include } = normalizeFilter(filter);
    const excludeFilter = exclude?.map(patternToIdFilter);
    const includeFilter = include?.map(patternToIdFilter);
    return createFilter$1(excludeFilter, includeFilter);
}
function createCodeFilter(filter) {
    if (!filter)
        return;
    const { exclude, include } = normalizeFilter(filter);
    const excludeFilter = exclude?.map(patternToCodeFilter);
    const includeFilter = include?.map(patternToCodeFilter);
    return createFilter$1(excludeFilter, includeFilter);
}
function createFilterForId(filter) {
    const filterFunction = createIdFilter(filter);
    return filterFunction ? id => !!filterFunction(id) : undefined;
}
function createFilterForTransform(idFilter, codeFilter) {
    if (!idFilter && !codeFilter)
        return;
    const idFilterFunction = createIdFilter(idFilter);
    const codeFilterFunction = createCodeFilter(codeFilter);
    return (id, code) => {
        let fallback = true;
        if (idFilterFunction) {
            fallback &&= idFilterFunction(id);
        }
        if (!fallback) {
            return false;
        }
        if (codeFilterFunction) {
            fallback &&= codeFilterFunction(code);
        }
        return fallback;
    };
}

// This will make sure no input hook is omitted
const inputHookNames = {
    buildEnd: 1,
    buildStart: 1,
    closeBundle: 1,
    closeWatcher: 1,
    load: 1,
    moduleParsed: 1,
    onLog: 1,
    options: 1,
    resolveDynamicImport: 1,
    resolveId: 1,
    shouldTransformCachedModule: 1,
    transform: 1,
    watchChange: 1
};
const inputHooks = Object.keys(inputHookNames);
class PluginDriver {
    constructor(graph, options, userPlugins, pluginCache, basePluginDriver) {
        this.graph = graph;
        this.options = options;
        this.pluginCache = pluginCache;
        this.sortedPlugins = new Map();
        this.unfulfilledActions = new Set();
        this.compiledPluginFilters = {
            idOnlyFilter: new WeakMap(),
            transformFilter: new WeakMap()
        };
        this.fileEmitter = new FileEmitter(graph, options, basePluginDriver && basePluginDriver.fileEmitter);
        this.emitFile = this.fileEmitter.emitFile.bind(this.fileEmitter);
        this.getFileName = this.fileEmitter.getFileName.bind(this.fileEmitter);
        this.finaliseAssets = this.fileEmitter.finaliseAssets.bind(this.fileEmitter);
        this.setChunkInformation = this.fileEmitter.setChunkInformation.bind(this.fileEmitter);
        this.setOutputBundle = this.fileEmitter.setOutputBundle.bind(this.fileEmitter);
        this.plugins = [...(basePluginDriver ? basePluginDriver.plugins : []), ...userPlugins];
        const existingPluginNames = new Set();
        this.pluginContexts = new Map(this.plugins.map(plugin => [
            plugin,
            getPluginContext(plugin, pluginCache, graph, options, this.fileEmitter, existingPluginNames)
        ]));
        if (basePluginDriver) {
            for (const plugin of userPlugins) {
                for (const hook of inputHooks) {
                    if (hook in plugin) {
                        options.onLog(parseAst_js.LOGLEVEL_WARN, parseAst_js.logInputHookInOutputPlugin(plugin.name, hook));
                    }
                }
            }
        }
    }
    createOutputPluginDriver(plugins) {
        return new PluginDriver(this.graph, this.options, plugins, this.pluginCache, this);
    }
    getUnfulfilledHookActions() {
        return this.unfulfilledActions;
    }
    // chains, first non-null result stops and returns
    hookFirst(hookName, parameters, replaceContext, skipped) {
        return this.hookFirstAndGetPlugin(hookName, parameters, replaceContext, skipped).then(result => result && result[0]);
    }
    // chains, first non-null result stops and returns result and last plugin
    async hookFirstAndGetPlugin(hookName, parameters, replaceContext, skipped) {
        for (const plugin of this.getSortedPlugins(hookName)) {
            if (skipped?.has(plugin))
                continue;
            const result = await this.runHook(hookName, parameters, plugin, replaceContext);
            if (result != null)
                return [result, plugin];
        }
        return null;
    }
    // chains synchronously, first non-null result stops and returns
    hookFirstSync(hookName, parameters, replaceContext) {
        for (const plugin of this.getSortedPlugins(hookName)) {
            const result = this.runHookSync(hookName, parameters, plugin, replaceContext);
            if (result != null)
                return result;
        }
        return null;
    }
    // parallel, ignores returns
    async hookParallel(hookName, parameters, replaceContext) {
        const parallelPromises = [];
        for (const plugin of this.getSortedPlugins(hookName)) {
            if (plugin[hookName].sequential) {
                await Promise.all(parallelPromises);
                parallelPromises.length = 0;
                await this.runHook(hookName, parameters, plugin, replaceContext);
            }
            else {
                parallelPromises.push(this.runHook(hookName, parameters, plugin, replaceContext));
            }
        }
        await Promise.all(parallelPromises);
    }
    // chains, reduces returned value, handling the reduced value as the first hook argument
    hookReduceArg0(hookName, [argument0, ...rest], reduce, replaceContext) {
        let promise = Promise.resolve(argument0);
        for (const plugin of this.getSortedPlugins(hookName)) {
            promise = promise.then(argument0 => this.runHook(hookName, [argument0, ...rest], plugin, replaceContext).then(result => reduce.call(this.pluginContexts.get(plugin), argument0, result, plugin)));
        }
        return promise;
    }
    // chains synchronously, reduces returned value, handling the reduced value as the first hook argument
    hookReduceArg0Sync(hookName, [argument0, ...rest], reduce, replaceContext) {
        for (const plugin of this.getSortedPlugins(hookName)) {
            const parameters = [argument0, ...rest];
            const result = this.runHookSync(hookName, parameters, plugin, replaceContext);
            argument0 = reduce.call(this.pluginContexts.get(plugin), argument0, result, plugin);
        }
        return argument0;
    }
    // chains, reduces returned value to type string, handling the reduced value separately. permits hooks as values.
    async hookReduceValue(hookName, initialValue, parameters, reducer) {
        const results = [];
        const parallelResults = [];
        for (const plugin of this.getSortedPlugins(hookName, validateAddonPluginHandler)) {
            if (plugin[hookName].sequential) {
                results.push(...(await Promise.all(parallelResults)));
                parallelResults.length = 0;
                results.push(await this.runHook(hookName, parameters, plugin));
            }
            else {
                parallelResults.push(this.runHook(hookName, parameters, plugin));
            }
        }
        results.push(...(await Promise.all(parallelResults)));
        return results.reduce(reducer, await initialValue);
    }
    // chains synchronously, reduces returned value to type T, handling the reduced value separately. permits hooks as values.
    hookReduceValueSync(hookName, initialValue, parameters, reduce, replaceContext) {
        let accumulator = initialValue;
        for (const plugin of this.getSortedPlugins(hookName)) {
            const result = this.runHookSync(hookName, parameters, plugin, replaceContext);
            accumulator = reduce.call(this.pluginContexts.get(plugin), accumulator, result, plugin);
        }
        return accumulator;
    }
    // chains, ignores returns
    hookSeq(hookName, parameters, replaceContext) {
        let promise = Promise.resolve();
        for (const plugin of this.getSortedPlugins(hookName)) {
            promise = promise.then(() => this.runHook(hookName, parameters, plugin, replaceContext));
        }
        return promise.then(noReturn);
    }
    getSortedPlugins(hookName, validateHandler) {
        return getOrCreate(this.sortedPlugins, hookName, () => getSortedValidatedPlugins(hookName, this.plugins, validateHandler));
    }
    // Implementation signature
    runHook(hookName, parameters, plugin, replaceContext) {
        // We always filter for plugins that support the hook before running it
        const hook = plugin[hookName];
        const handler = typeof hook === 'object' ? hook.handler : hook;
        if (typeof hook === 'object' && 'filter' in hook && hook.filter) {
            if (hookName === 'transform') {
                const filter = hook.filter;
                const hookParameters = parameters;
                const compiledFilter = getOrCreate(this.compiledPluginFilters.transformFilter, filter, () => createFilterForTransform(filter.id, filter.code));
                if (compiledFilter && !compiledFilter(hookParameters[1], hookParameters[0])) {
                    return Promise.resolve();
                }
            }
            else if (hookName === 'resolveId' || hookName === 'load') {
                const filter = hook.filter;
                const hookParameters = parameters;
                const compiledFilter = getOrCreate(this.compiledPluginFilters.idOnlyFilter, filter, () => createFilterForId(filter.id));
                if (compiledFilter && !compiledFilter(hookParameters[0])) {
                    return Promise.resolve();
                }
            }
        }
        let context = this.pluginContexts.get(plugin);
        if (replaceContext) {
            context = replaceContext(context, plugin);
        }
        let action = null;
        return Promise.resolve()
            .then(() => {
            if (typeof handler !== 'function') {
                return handler;
            }
            // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
            const hookResult = handler.apply(context, parameters);
            if (!hookResult?.then) {
                // short circuit for non-thenables and non-Promises
                return hookResult;
            }
            // Track pending hook actions to properly error out when
            // unfulfilled promises cause rollup to abruptly and confusingly
            // exit with a successful 0 return code but without producing any
            // output, errors or warnings.
            action = [plugin.name, hookName, parameters];
            this.unfulfilledActions.add(action);
            // Although it would be more elegant to just return hookResult here
            // and put the .then() handler just above the .catch() handler below,
            // doing so would subtly change the defacto async event dispatch order
            // which at least one test and some plugins in the wild may depend on.
            return Promise.resolve(hookResult).then(result => {
                // action was fulfilled
                this.unfulfilledActions.delete(action);
                return result;
            });
        })
            .catch(error_ => {
            if (action !== null) {
                // action considered to be fulfilled since error being handled
                this.unfulfilledActions.delete(action);
            }
            return parseAst_js.error(parseAst_js.logPluginError(error_, plugin.name, { hook: hookName }));
        });
    }
    /**
     * Run a sync plugin hook and return the result.
     * @param hookName Name of the plugin hook. Must be in `PluginHooks`.
     * @param args Arguments passed to the plugin hook.
     * @param plugin The actual plugin
     * @param replaceContext When passed, the plugin context can be overridden.
     */
    runHookSync(hookName, parameters, plugin, replaceContext) {
        const hook = plugin[hookName];
        const handler = typeof hook === 'object' ? hook.handler : hook;
        let context = this.pluginContexts.get(plugin);
        if (replaceContext) {
            context = replaceContext(context, plugin);
        }
        try {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
            return handler.apply(context, parameters);
        }
        catch (error_) {
            return parseAst_js.error(parseAst_js.logPluginError(error_, plugin.name, { hook: hookName }));
        }
    }
}
function getSortedValidatedPlugins(hookName, plugins, validateHandler = validateFunctionPluginHandler) {
    const pre = [];
    const normal = [];
    const post = [];
    for (const plugin of plugins) {
        const hook = plugin[hookName];
        if (hook) {
            if (typeof hook === 'object') {
                validateHandler(hook.handler, hookName, plugin);
                if (hook.order === 'pre') {
                    pre.push(plugin);
                    continue;
                }
                if (hook.order === 'post') {
                    post.push(plugin);
                    continue;
                }
            }
            else {
                validateHandler(hook, hookName, plugin);
            }
            normal.push(plugin);
        }
    }
    return [...pre, ...normal, ...post];
}
function validateFunctionPluginHandler(handler, hookName, plugin) {
    if (typeof handler !== 'function') {
        parseAst_js.error(parseAst_js.logInvalidFunctionPluginHook(hookName, plugin.name));
    }
}
function validateAddonPluginHandler(handler, hookName, plugin) {
    if (typeof handler !== 'string' && typeof handler !== 'function') {
        return parseAst_js.error(parseAst_js.logInvalidAddonPluginHook(hookName, plugin.name));
    }
}
function noReturn() { }

function getLogger(plugins, onLog, watchMode, logLevel) {
    plugins = getSortedValidatedPlugins('onLog', plugins);
    const minimalPriority = parseAst_js.logLevelPriority[logLevel];
    const logger = (level, log, skipped = parseAst_js.EMPTY_SET) => {
        parseAst_js.augmentLogMessage(log);
        const logPriority = parseAst_js.logLevelPriority[level];
        if (logPriority < minimalPriority) {
            return;
        }
        for (const plugin of plugins) {
            if (skipped.has(plugin))
                continue;
            const { onLog: pluginOnLog } = plugin;
            const getLogHandler = (level) => {
                if (parseAst_js.logLevelPriority[level] < minimalPriority) {
                    return doNothing;
                }
                return log => logger(level, normalizeLog(log), new Set(skipped).add(plugin));
            };
            const handler = 'handler' in pluginOnLog ? pluginOnLog.handler : pluginOnLog;
            if (handler.call({
                debug: getLogHandler(parseAst_js.LOGLEVEL_DEBUG),
                error: (log) => parseAst_js.error(normalizeLog(log)),
                info: getLogHandler(parseAst_js.LOGLEVEL_INFO),
                meta: { rollupVersion: version, watchMode },
                warn: getLogHandler(parseAst_js.LOGLEVEL_WARN)
            }, level, log) === false) {
                return;
            }
        }
        onLog(level, log);
    };
    return logger;
}

const commandAliases = {
    c: 'config',
    d: 'dir',
    e: 'external',
    f: 'format',
    g: 'globals',
    h: 'help',
    i: 'input',
    m: 'sourcemap',
    n: 'name',
    o: 'file',
    p: 'plugin',
    v: 'version',
    w: 'watch'
};
const EMPTY_COMMAND_OPTIONS = { external: [], globals: undefined };
async function mergeOptions(config, watchMode, rawCommandOptions = EMPTY_COMMAND_OPTIONS, printLog) {
    const command = getCommandOptions(rawCommandOptions);
    const plugins = await normalizePluginOption(config.plugins);
    const logLevel = config.logLevel || parseAst_js.LOGLEVEL_INFO;
    const onLog = getOnLog(config, logLevel, printLog);
    const log = getLogger(plugins, onLog, watchMode, logLevel);
    const inputOptions = mergeInputOptions(config, command, plugins, log, onLog);
    if (command.output) {
        Object.assign(command, command.output);
    }
    const outputOptionsArray = ensureArray$1(config.output);
    if (outputOptionsArray.length === 0)
        outputOptionsArray.push({});
    const outputOptions = await Promise.all(outputOptionsArray.map(singleOutputOptions => mergeOutputOptions(singleOutputOptions, command, log)));
    warnUnknownOptions(command, [
        ...Object.keys(inputOptions).filter(option => option !== 'fs'),
        ...Object.keys(outputOptions[0]).filter(option => option !== 'sourcemapIgnoreList' && option !== 'sourcemapPathTransform'),
        ...Object.keys(commandAliases),
        'bundleConfigAsCjs',
        'config',
        'configImportAttributesKey',
        'configPlugin',
        'environment',
        'failAfterWarnings',
        'filterLogs',
        'forceExit',
        'plugin',
        'silent',
        'stdin',
        'waitForBundleInput'
    ], 'CLI flags', log, /^_$|output$|config/);
    inputOptions.output = outputOptions;
    return inputOptions;
}
function getCommandOptions(rawCommandOptions) {
    const external = rawCommandOptions.external && typeof rawCommandOptions.external === 'string'
        ? rawCommandOptions.external.split(',')
        : [];
    return {
        ...rawCommandOptions,
        external,
        globals: typeof rawCommandOptions.globals === 'string'
            ? rawCommandOptions.globals.split(',').reduce((globals, globalDefinition) => {
                const [id, variableName] = globalDefinition.split(':');
                globals[id] = variableName;
                if (!external.includes(id)) {
                    external.push(id);
                }
                return globals;
            }, Object.create(null))
            : undefined
    };
}
function mergeInputOptions(config, overrides, plugins, log, onLog) {
    const getOption = (name) => overrides[name] ?? config[name];
    const inputOptions = {
        cache: config.cache,
        context: getOption('context'),
        experimentalCacheExpiry: getOption('experimentalCacheExpiry'),
        experimentalLogSideEffects: getOption('experimentalLogSideEffects'),
        external: getExternal(config, overrides),
        fs: getOption('fs'),
        input: getOption('input') || [],
        jsx: getObjectOption(config, overrides, 'jsx', objectifyOptionWithPresets(jsxPresets, 'jsx', parseAst_js.URL_JSX, 'false, ')),
        logLevel: getOption('logLevel'),
        makeAbsoluteExternalsRelative: getOption('makeAbsoluteExternalsRelative'),
        maxParallelFileOps: getOption('maxParallelFileOps'),
        moduleContext: getOption('moduleContext'),
        onLog,
        onwarn: undefined,
        perf: getOption('perf'),
        plugins,
        preserveEntrySignatures: getOption('preserveEntrySignatures'),
        preserveSymlinks: getOption('preserveSymlinks'),
        shimMissingExports: getOption('shimMissingExports'),
        strictDeprecations: getOption('strictDeprecations'),
        treeshake: getObjectOption(config, overrides, 'treeshake', objectifyOptionWithPresets(treeshakePresets, 'treeshake', parseAst_js.URL_TREESHAKE, 'false, true, ')),
        watch: getWatch(config, overrides)
    };
    warnUnknownOptions(config, Object.keys(inputOptions), 'input options', log, /^output$/);
    return inputOptions;
}
const getExternal = (config, overrides) => {
    const configExternal = config.external;
    return typeof configExternal === 'function'
        ? (source, importer, isResolved) => configExternal(source, importer, isResolved) || overrides.external.includes(source)
        : [...ensureArray$1(configExternal), ...overrides.external];
};
const getObjectOption = (config, overrides, name, objectifyValue = objectifyOption) => {
    const commandOption = normalizeObjectOptionValue(overrides[name], objectifyValue);
    const configOption = normalizeObjectOptionValue(config[name], objectifyValue);
    if (commandOption !== undefined) {
        return commandOption && { ...configOption, ...commandOption };
    }
    return configOption;
};
const getWatch = (config, overrides) => config.watch !== false && getObjectOption(config, overrides, 'watch');
const isWatchEnabled = (optionValue) => {
    if (Array.isArray(optionValue)) {
        return optionValue.reduce((result, value) => (typeof value === 'boolean' ? value : result), false);
    }
    return optionValue === true;
};
const normalizeObjectOptionValue = (optionValue, objectifyValue) => {
    if (!optionValue) {
        return optionValue;
    }
    if (Array.isArray(optionValue)) {
        return optionValue.reduce((result, value) => value && result && { ...result, ...objectifyValue(value) }, {});
    }
    return objectifyValue(optionValue);
};
async function mergeOutputOptions(config, overrides, log) {
    const getOption = (name) => overrides[name] ?? config[name];
    const outputOptions = {
        amd: getObjectOption(config, overrides, 'amd'),
        assetFileNames: getOption('assetFileNames'),
        banner: getOption('banner'),
        chunkFileNames: getOption('chunkFileNames'),
        compact: getOption('compact'),
        dir: getOption('dir'),
        dynamicImportInCjs: getOption('dynamicImportInCjs'),
        entryFileNames: getOption('entryFileNames'),
        esModule: getOption('esModule'),
        experimentalMinChunkSize: getOption('experimentalMinChunkSize'),
        exports: getOption('exports'),
        extend: getOption('extend'),
        externalImportAssertions: getOption('externalImportAssertions'),
        externalImportAttributes: getOption('externalImportAttributes'),
        externalLiveBindings: getOption('externalLiveBindings'),
        file: getOption('file'),
        footer: getOption('footer'),
        format: getOption('format'),
        freeze: getOption('freeze'),
        generatedCode: getObjectOption(config, overrides, 'generatedCode', objectifyOptionWithPresets(generatedCodePresets, 'output.generatedCode', parseAst_js.URL_OUTPUT_GENERATEDCODE, '')),
        globals: getOption('globals'),
        hashCharacters: getOption('hashCharacters'),
        hoistTransitiveImports: getOption('hoistTransitiveImports'),
        importAttributesKey: getOption('importAttributesKey'),
        indent: getOption('indent'),
        inlineDynamicImports: getOption('inlineDynamicImports'),
        interop: getOption('interop'),
        intro: getOption('intro'),
        manualChunks: getOption('manualChunks'),
        minifyInternalExports: getOption('minifyInternalExports'),
        name: getOption('name'),
        noConflict: getOption('noConflict'),
        onlyExplicitManualChunks: getOption('onlyExplicitManualChunks'),
        outro: getOption('outro'),
        paths: getOption('paths'),
        plugins: await normalizePluginOption(config.plugins),
        preserveModules: getOption('preserveModules'),
        preserveModulesRoot: getOption('preserveModulesRoot'),
        reexportProtoFromExternal: getOption('reexportProtoFromExternal'),
        sanitizeFileName: getOption('sanitizeFileName'),
        sourcemap: getOption('sourcemap'),
        sourcemapBaseUrl: getOption('sourcemapBaseUrl'),
        sourcemapDebugIds: getOption('sourcemapDebugIds'),
        sourcemapExcludeSources: getOption('sourcemapExcludeSources'),
        sourcemapFile: getOption('sourcemapFile'),
        sourcemapFileNames: getOption('sourcemapFileNames'),
        sourcemapIgnoreList: getOption('sourcemapIgnoreList'),
        sourcemapPathTransform: getOption('sourcemapPathTransform'),
        strict: getOption('strict'),
        systemNullSetters: getOption('systemNullSetters'),
        validate: getOption('validate'),
        virtualDirname: getOption('virtualDirname')
    };
    warnUnknownOptions(config, Object.keys(outputOptions), 'output options', log);
    return outputOptions;
}

var picocolors = {exports: {}};

var hasRequiredPicocolors;

function requirePicocolors () {
	if (hasRequiredPicocolors) return picocolors.exports;
	hasRequiredPicocolors = 1;
	let p = process || {}, argv = p.argv || [], env = p.env || {};
	let isColorSupported =
		!(!!env.NO_COLOR || argv.includes("--no-color")) &&
		(!!env.FORCE_COLOR || argv.includes("--color") || p.platform === "win32" || ((p.stdout || {}).isTTY && env.TERM !== "dumb") || !!env.CI);

	let formatter = (open, close, replace = open) =>
		input => {
			let string = "" + input, index = string.indexOf(close, open.length);
			return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close
		};

	let replaceClose = (string, close, replace, index) => {
		let result = "", cursor = 0;
		do {
			result += string.substring(cursor, index) + replace;
			cursor = index + close.length;
			index = string.indexOf(close, cursor);
		} while (~index)
		return result + string.substring(cursor)
	};

	let createColors = (enabled = isColorSupported) => {
		let f = enabled ? formatter : () => String;
		return {
			isColorSupported: enabled,
			reset: f("\x1b[0m", "\x1b[0m"),
			bold: f("\x1b[1m", "\x1b[22m", "\x1b[22m\x1b[1m"),
			dim: f("\x1b[2m", "\x1b[22m", "\x1b[22m\x1b[2m"),
			italic: f("\x1b[3m", "\x1b[23m"),
			underline: f("\x1b[4m", "\x1b[24m"),
			inverse: f("\x1b[7m", "\x1b[27m"),
			hidden: f("\x1b[8m", "\x1b[28m"),
			strikethrough: f("\x1b[9m", "\x1b[29m"),

			black: f("\x1b[30m", "\x1b[39m"),
			red: f("\x1b[31m", "\x1b[39m"),
			green: f("\x1b[32m", "\x1b[39m"),
			yellow: f("\x1b[33m", "\x1b[39m"),
			blue: f("\x1b[34m", "\x1b[39m"),
			magenta: f("\x1b[35m", "\x1b[39m"),
			cyan: f("\x1b[36m", "\x1b[39m"),
			white: f("\x1b[37m", "\x1b[39m"),
			gray: f("\x1b[90m", "\x1b[39m"),

			bgBlack: f("\x1b[40m", "\x1b[49m"),
			bgRed: f("\x1b[41m", "\x1b[49m"),
			bgGreen: f("\x1b[42m", "\x1b[49m"),
			bgYellow: f("\x1b[43m", "\x1b[49m"),
			bgBlue: f("\x1b[44m", "\x1b[49m"),
			bgMagenta: f("\x1b[45m", "\x1b[49m"),
			bgCyan: f("\x1b[46m", "\x1b[49m"),
			bgWhite: f("\x1b[47m", "\x1b[49m"),

			blackBright: f("\x1b[90m", "\x1b[39m"),
			redBright: f("\x1b[91m", "\x1b[39m"),
			greenBright: f("\x1b[92m", "\x1b[39m"),
			yellowBright: f("\x1b[93m", "\x1b[39m"),
			blueBright: f("\x1b[94m", "\x1b[39m"),
			magentaBright: f("\x1b[95m", "\x1b[39m"),
			cyanBright: f("\x1b[96m", "\x1b[39m"),
			whiteBright: f("\x1b[97m", "\x1b[39m"),

			bgBlackBright: f("\x1b[100m", "\x1b[49m"),
			bgRedBright: f("\x1b[101m", "\x1b[49m"),
			bgGreenBright: f("\x1b[102m", "\x1b[49m"),
			bgYellowBright: f("\x1b[103m", "\x1b[49m"),
			bgBlueBright: f("\x1b[104m", "\x1b[49m"),
			bgMagentaBright: f("\x1b[105m", "\x1b[49m"),
			bgCyanBright: f("\x1b[106m", "\x1b[49m"),
			bgWhiteBright: f("\x1b[107m", "\x1b[49m"),
		}
	};

	picocolors.exports = createColors();
	picocolors.exports.createColors = createColors;
	return picocolors.exports;
}

var picocolorsExports = /*@__PURE__*/ requirePicocolors();
const pc = /*@__PURE__*/getDefaultExportFromCjs(picocolorsExports);

// @see https://no-color.org
// @see https://www.npmjs.com/package/chalk
const { bold, cyan, dim, gray, green, red, underline, yellow } = pc.createColors(process$1.env.FORCE_COLOR !== '0' && !process$1.env.NO_COLOR);

// log to stderr to keep `rollup main.js > bundle.js` from breaking
const stderr = (...parameters) => process$1.stderr.write(`${parameters.join('')}\n`);
function handleError(error, recover = false) {
    const name = error.name || error.cause?.name;
    const nameSection = name ? `${name}: ` : '';
    const pluginSection = error.plugin ? `(plugin ${error.plugin}) ` : '';
    const message = `${pluginSection}${nameSection}${error.message}`;
    const outputLines = [bold(red(`[!] ${bold(message.toString())}`))];
    if (error.url) {
        outputLines.push(cyan(error.url));
    }
    if (error.loc) {
        outputLines.push(`${parseAst_js.relativeId((error.loc.file || error.id))} (${error.loc.line}:${error.loc.column})`);
    }
    else if (error.id) {
        outputLines.push(parseAst_js.relativeId(error.id));
    }
    if (error.frame) {
        outputLines.push(dim(error.frame));
    }
    if (error.stack) {
        outputLines.push(dim(error.stack?.replace(`${nameSection}${error.message}\n`, '')));
    }
    // ES2022: Error.prototype.cause is optional
    if (error.cause) {
        let cause = error.cause;
        const causeErrorLines = [];
        let indent = '';
        while (cause) {
            indent += '  ';
            const message = cause.stack || cause;
            causeErrorLines.push(...`[cause] ${message}`.split('\n').map(line => indent + line));
            cause = cause.cause;
        }
        outputLines.push(dim(causeErrorLines.join('\n')));
    }
    outputLines.push('', '');
    stderr(outputLines.join('\n'));
    if (!recover)
        process$1.exit(1);
}

// src/vlq.ts
var comma = ",".charCodeAt(0);
var semicolon = ";".charCodeAt(0);
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var intToChar = new Uint8Array(64);
var charToInt = new Uint8Array(128);
for (let i = 0; i < chars.length; i++) {
  const c = chars.charCodeAt(i);
  intToChar[i] = c;
  charToInt[c] = i;
}
function decodeInteger(reader, relative) {
  let value = 0;
  let shift = 0;
  let integer = 0;
  do {
    const c = reader.next();
    integer = charToInt[c];
    value |= (integer & 31) << shift;
    shift += 5;
  } while (integer & 32);
  const shouldNegate = value & 1;
  value >>>= 1;
  if (shouldNegate) {
    value = -2147483648 | -value;
  }
  return relative + value;
}
function encodeInteger(builder, num, relative) {
  let delta = num - relative;
  delta = delta < 0 ? -delta << 1 | 1 : delta << 1;
  do {
    let clamped = delta & 31;
    delta >>>= 5;
    if (delta > 0) clamped |= 32;
    builder.write(intToChar[clamped]);
  } while (delta > 0);
  return num;
}
function hasMoreVlq(reader, max) {
  if (reader.pos >= max) return false;
  return reader.peek() !== comma;
}

// src/strings.ts
var bufLength = 1024 * 16;
var td = typeof TextDecoder !== "undefined" ? /* @__PURE__ */ new TextDecoder() : typeof Buffer !== "undefined" ? {
  decode(buf) {
    const out = Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength);
    return out.toString();
  }
} : {
  decode(buf) {
    let out = "";
    for (let i = 0; i < buf.length; i++) {
      out += String.fromCharCode(buf[i]);
    }
    return out;
  }
};
var StringWriter = class {
  constructor() {
    this.pos = 0;
    this.out = "";
    this.buffer = new Uint8Array(bufLength);
  }
  write(v) {
    const { buffer } = this;
    buffer[this.pos++] = v;
    if (this.pos === bufLength) {
      this.out += td.decode(buffer);
      this.pos = 0;
    }
  }
  flush() {
    const { buffer, out, pos } = this;
    return pos > 0 ? out + td.decode(buffer.subarray(0, pos)) : out;
  }
};
var StringReader = class {
  constructor(buffer) {
    this.pos = 0;
    this.buffer = buffer;
  }
  next() {
    return this.buffer.charCodeAt(this.pos++);
  }
  peek() {
    return this.buffer.charCodeAt(this.pos);
  }
  indexOf(char) {
    const { buffer, pos } = this;
    const idx = buffer.indexOf(char, pos);
    return idx === -1 ? buffer.length : idx;
  }
};

// src/sourcemap-codec.ts
function decode(mappings) {
  const { length } = mappings;
  const reader = new StringReader(mappings);
  const decoded = [];
  let genColumn = 0;
  let sourcesIndex = 0;
  let sourceLine = 0;
  let sourceColumn = 0;
  let namesIndex = 0;
  do {
    const semi = reader.indexOf(";");
    const line = [];
    let sorted = true;
    let lastCol = 0;
    genColumn = 0;
    while (reader.pos < semi) {
      let seg;
      genColumn = decodeInteger(reader, genColumn);
      if (genColumn < lastCol) sorted = false;
      lastCol = genColumn;
      if (hasMoreVlq(reader, semi)) {
        sourcesIndex = decodeInteger(reader, sourcesIndex);
        sourceLine = decodeInteger(reader, sourceLine);
        sourceColumn = decodeInteger(reader, sourceColumn);
        if (hasMoreVlq(reader, semi)) {
          namesIndex = decodeInteger(reader, namesIndex);
          seg = [genColumn, sourcesIndex, sourceLine, sourceColumn, namesIndex];
        } else {
          seg = [genColumn, sourcesIndex, sourceLine, sourceColumn];
        }
      } else {
        seg = [genColumn];
      }
      line.push(seg);
      reader.pos++;
    }
    if (!sorted) sort(line);
    decoded.push(line);
    reader.pos = semi + 1;
  } while (reader.pos <= length);
  return decoded;
}
function sort(line) {
  line.sort(sortComparator);
}
function sortComparator(a, b) {
  return a[0] - b[0];
}
function encode(decoded) {
  const writer = new StringWriter();
  let sourcesIndex = 0;
  let sourceLine = 0;
  let sourceColumn = 0;
  let namesIndex = 0;
  for (let i = 0; i < decoded.length; i++) {
    const line = decoded[i];
    if (i > 0) writer.write(semicolon);
    if (line.length === 0) continue;
    let genColumn = 0;
    for (let j = 0; j < line.length; j++) {
      const segment = line[j];
      if (j > 0) writer.write(comma);
      genColumn = encodeInteger(writer, segment[0], genColumn);
      if (segment.length === 1) continue;
      sourcesIndex = encodeInteger(writer, segment[1], sourcesIndex);
      sourceLine = encodeInteger(writer, segment[2], sourceLine);
      sourceColumn = encodeInteger(writer, segment[3], sourceColumn);
      if (segment.length === 4) continue;
      namesIndex = encodeInteger(writer, segment[4], namesIndex);
    }
  }
  return writer.flush();
}

class BitSet {
	constructor(arg) {
		this.bits = arg instanceof BitSet ? arg.bits.slice() : [];
	}

	add(n) {
		this.bits[n >> 5] |= 1 << (n & 31);
	}

	has(n) {
		return !!(this.bits[n >> 5] & (1 << (n & 31)));
	}
}

let Chunk$1 = class Chunk {
	constructor(start, end, content) {
		this.start = start;
		this.end = end;
		this.original = content;

		this.intro = '';
		this.outro = '';

		this.content = content;
		this.storeName = false;
		this.edited = false;

		{
			this.previous = null;
			this.next = null;
		}
	}

	appendLeft(content) {
		this.outro += content;
	}

	appendRight(content) {
		this.intro = this.intro + content;
	}

	clone() {
		const chunk = new Chunk(this.start, this.end, this.original);

		chunk.intro = this.intro;
		chunk.outro = this.outro;
		chunk.content = this.content;
		chunk.storeName = this.storeName;
		chunk.edited = this.edited;

		return chunk;
	}

	contains(index) {
		return this.start < index && index < this.end;
	}

	eachNext(fn) {
		let chunk = this;
		while (chunk) {
			fn(chunk);
			chunk = chunk.next;
		}
	}

	eachPrevious(fn) {
		let chunk = this;
		while (chunk) {
			fn(chunk);
			chunk = chunk.previous;
		}
	}

	edit(content, storeName, contentOnly) {
		this.content = content;
		if (!contentOnly) {
			this.intro = '';
			this.outro = '';
		}
		this.storeName = storeName;

		this.edited = true;

		return this;
	}

	prependLeft(content) {
		this.outro = content + this.outro;
	}

	prependRight(content) {
		this.intro = content + this.intro;
	}

	reset() {
		this.intro = '';
		this.outro = '';
		if (this.edited) {
			this.content = this.original;
			this.storeName = false;
			this.edited = false;
		}
	}

	split(index) {
		const sliceIndex = index - this.start;

		const originalBefore = this.original.slice(0, sliceIndex);
		const originalAfter = this.original.slice(sliceIndex);

		this.original = originalBefore;

		const newChunk = new Chunk(index, this.end, originalAfter);
		newChunk.outro = this.outro;
		this.outro = '';

		this.end = index;

		if (this.edited) {
			// after split we should save the edit content record into the correct chunk
			// to make sure sourcemap correct
			// For example:
			// '  test'.trim()
			//     split   -> '  ' + 'test'
			//   ✔️ edit    -> '' + 'test'
			//   ✖️ edit    -> 'test' + ''
			// TODO is this block necessary?...
			newChunk.edit('', false);
			this.content = '';
		} else {
			this.content = originalBefore;
		}

		newChunk.next = this.next;
		if (newChunk.next) newChunk.next.previous = newChunk;
		newChunk.previous = this;
		this.next = newChunk;

		return newChunk;
	}

	toString() {
		return this.intro + this.content + this.outro;
	}

	trimEnd(rx) {
		this.outro = this.outro.replace(rx, '');
		if (this.outro.length) return true;

		const trimmed = this.content.replace(rx, '');

		if (trimmed.length) {
			if (trimmed !== this.content) {
				this.split(this.start + trimmed.length).edit('', undefined, true);
				if (this.edited) {
					// save the change, if it has been edited
					this.edit(trimmed, this.storeName, true);
				}
			}
			return true;
		} else {
			this.edit('', undefined, true);

			this.intro = this.intro.replace(rx, '');
			if (this.intro.length) return true;
		}
	}

	trimStart(rx) {
		this.intro = this.intro.replace(rx, '');
		if (this.intro.length) return true;

		const trimmed = this.content.replace(rx, '');

		if (trimmed.length) {
			if (trimmed !== this.content) {
				const newChunk = this.split(this.end - trimmed.length);
				if (this.edited) {
					// save the change, if it has been edited
					newChunk.edit(trimmed, this.storeName, true);
				}
				this.edit('', undefined, true);
			}
			return true;
		} else {
			this.edit('', undefined, true);

			this.outro = this.outro.replace(rx, '');
			if (this.outro.length) return true;
		}
	}
};

function getBtoa() {
	if (typeof globalThis !== 'undefined' && typeof globalThis.btoa === 'function') {
		return (str) => globalThis.btoa(unescape(encodeURIComponent(str)));
	} else if (typeof Buffer === 'function') {
		return (str) => Buffer.from(str, 'utf-8').toString('base64');
	} else {
		return () => {
			throw new Error('Unsupported environment: `window.btoa` or `Buffer` should be supported.');
		};
	}
}

const btoa = /*#__PURE__*/ getBtoa();

class SourceMap {
	constructor(properties) {
		this.version = 3;
		this.file = properties.file;
		this.sources = properties.sources;
		this.sourcesContent = properties.sourcesContent;
		this.names = properties.names;
		this.mappings = encode(properties.mappings);
		if (typeof properties.x_google_ignoreList !== 'undefined') {
			this.x_google_ignoreList = properties.x_google_ignoreList;
		}
		if (typeof properties.debugId !== 'undefined') {
			this.debugId = properties.debugId;
		}
	}

	toString() {
		return JSON.stringify(this);
	}

	toUrl() {
		return 'data:application/json;charset=utf-8;base64,' + btoa(this.toString());
	}
}

function guessIndent(code) {
	const lines = code.split('\n');

	const tabbed = lines.filter((line) => /^\t+/.test(line));
	const spaced = lines.filter((line) => /^ {2,}/.test(line));

	if (tabbed.length === 0 && spaced.length === 0) {
		return null;
	}

	// More lines tabbed than spaced? Assume tabs, and
	// default to tabs in the case of a tie (or nothing
	// to go on)
	if (tabbed.length >= spaced.length) {
		return '\t';
	}

	// Otherwise, we need to guess the multiple
	const min = spaced.reduce((previous, current) => {
		const numSpaces = /^ +/.exec(current)[0].length;
		return Math.min(numSpaces, previous);
	}, Infinity);

	return new Array(min + 1).join(' ');
}

function getRelativePath(from, to) {
	const fromParts = from.split(/[/\\]/);
	const toParts = to.split(/[/\\]/);

	fromParts.pop(); // get dirname

	while (fromParts[0] === toParts[0]) {
		fromParts.shift();
		toParts.shift();
	}

	if (fromParts.length) {
		let i = fromParts.length;
		while (i--) fromParts[i] = '..';
	}

	return fromParts.concat(toParts).join('/');
}

const toString = Object.prototype.toString;

function isObject(thing) {
	return toString.call(thing) === '[object Object]';
}

function getLocator(source) {
	const originalLines = source.split('\n');
	const lineOffsets = [];

	for (let i = 0, pos = 0; i < originalLines.length; i++) {
		lineOffsets.push(pos);
		pos += originalLines[i].length + 1;
	}

	return function locate(index) {
		let i = 0;
		let j = lineOffsets.length;
		while (i < j) {
			const m = (i + j) >> 1;
			if (index < lineOffsets[m]) {
				j = m;
			} else {
				i = m + 1;
			}
		}
		const line = i - 1;
		const column = index - lineOffsets[line];
		return { line, column };
	};
}

const wordRegex = /\w/;

class Mappings {
	constructor(hires) {
		this.hires = hires;
		this.generatedCodeLine = 0;
		this.generatedCodeColumn = 0;
		this.raw = [];
		this.rawSegments = this.raw[this.generatedCodeLine] = [];
		this.pending = null;
	}

	addEdit(sourceIndex, content, loc, nameIndex) {
		if (content.length) {
			const contentLengthMinusOne = content.length - 1;
			let contentLineEnd = content.indexOf('\n', 0);
			let previousContentLineEnd = -1;
			// Loop through each line in the content and add a segment, but stop if the last line is empty,
			// else code afterwards would fill one line too many
			while (contentLineEnd >= 0 && contentLengthMinusOne > contentLineEnd) {
				const segment = [this.generatedCodeColumn, sourceIndex, loc.line, loc.column];
				if (nameIndex >= 0) {
					segment.push(nameIndex);
				}
				this.rawSegments.push(segment);

				this.generatedCodeLine += 1;
				this.raw[this.generatedCodeLine] = this.rawSegments = [];
				this.generatedCodeColumn = 0;

				previousContentLineEnd = contentLineEnd;
				contentLineEnd = content.indexOf('\n', contentLineEnd + 1);
			}

			const segment = [this.generatedCodeColumn, sourceIndex, loc.line, loc.column];
			if (nameIndex >= 0) {
				segment.push(nameIndex);
			}
			this.rawSegments.push(segment);

			this.advance(content.slice(previousContentLineEnd + 1));
		} else if (this.pending) {
			this.rawSegments.push(this.pending);
			this.advance(content);
		}

		this.pending = null;
	}

	addUneditedChunk(sourceIndex, chunk, original, loc, sourcemapLocations) {
		let originalCharIndex = chunk.start;
		let first = true;
		// when iterating each char, check if it's in a word boundary
		let charInHiresBoundary = false;

		while (originalCharIndex < chunk.end) {
			if (original[originalCharIndex] === '\n') {
				loc.line += 1;
				loc.column = 0;
				this.generatedCodeLine += 1;
				this.raw[this.generatedCodeLine] = this.rawSegments = [];
				this.generatedCodeColumn = 0;
				first = true;
				charInHiresBoundary = false;
			} else {
				if (this.hires || first || sourcemapLocations.has(originalCharIndex)) {
					const segment = [this.generatedCodeColumn, sourceIndex, loc.line, loc.column];

					if (this.hires === 'boundary') {
						// in hires "boundary", group segments per word boundary than per char
						if (wordRegex.test(original[originalCharIndex])) {
							// for first char in the boundary found, start the boundary by pushing a segment
							if (!charInHiresBoundary) {
								this.rawSegments.push(segment);
								charInHiresBoundary = true;
							}
						} else {
							// for non-word char, end the boundary by pushing a segment
							this.rawSegments.push(segment);
							charInHiresBoundary = false;
						}
					} else {
						this.rawSegments.push(segment);
					}
				}

				loc.column += 1;
				this.generatedCodeColumn += 1;
				first = false;
			}

			originalCharIndex += 1;
		}

		this.pending = null;
	}

	advance(str) {
		if (!str) return;

		const lines = str.split('\n');

		if (lines.length > 1) {
			for (let i = 0; i < lines.length - 1; i++) {
				this.generatedCodeLine++;
				this.raw[this.generatedCodeLine] = this.rawSegments = [];
			}
			this.generatedCodeColumn = 0;
		}

		this.generatedCodeColumn += lines[lines.length - 1].length;
	}
}

const n = '\n';

const warned = {
	insertLeft: false,
	insertRight: false,
	storeName: false,
};

class MagicString {
	constructor(string, options = {}) {
		const chunk = new Chunk$1(0, string.length, string);

		Object.defineProperties(this, {
			original: { writable: true, value: string },
			outro: { writable: true, value: '' },
			intro: { writable: true, value: '' },
			firstChunk: { writable: true, value: chunk },
			lastChunk: { writable: true, value: chunk },
			lastSearchedChunk: { writable: true, value: chunk },
			byStart: { writable: true, value: {} },
			byEnd: { writable: true, value: {} },
			filename: { writable: true, value: options.filename },
			indentExclusionRanges: { writable: true, value: options.indentExclusionRanges },
			sourcemapLocations: { writable: true, value: new BitSet() },
			storedNames: { writable: true, value: {} },
			indentStr: { writable: true, value: undefined },
			ignoreList: { writable: true, value: options.ignoreList },
			offset: { writable: true, value: options.offset || 0 },
		});

		this.byStart[0] = chunk;
		this.byEnd[string.length] = chunk;
	}

	addSourcemapLocation(char) {
		this.sourcemapLocations.add(char);
	}

	append(content) {
		if (typeof content !== 'string') throw new TypeError('outro content must be a string');

		this.outro += content;
		return this;
	}

	appendLeft(index, content) {
		index = index + this.offset;

		if (typeof content !== 'string') throw new TypeError('inserted content must be a string');

		this._split(index);

		const chunk = this.byEnd[index];

		if (chunk) {
			chunk.appendLeft(content);
		} else {
			this.intro += content;
		}
		return this;
	}

	appendRight(index, content) {
		index = index + this.offset;

		if (typeof content !== 'string') throw new TypeError('inserted content must be a string');

		this._split(index);

		const chunk = this.byStart[index];

		if (chunk) {
			chunk.appendRight(content);
		} else {
			this.outro += content;
		}
		return this;
	}

	clone() {
		const cloned = new MagicString(this.original, { filename: this.filename, offset: this.offset });

		let originalChunk = this.firstChunk;
		let clonedChunk = (cloned.firstChunk = cloned.lastSearchedChunk = originalChunk.clone());

		while (originalChunk) {
			cloned.byStart[clonedChunk.start] = clonedChunk;
			cloned.byEnd[clonedChunk.end] = clonedChunk;

			const nextOriginalChunk = originalChunk.next;
			const nextClonedChunk = nextOriginalChunk && nextOriginalChunk.clone();

			if (nextClonedChunk) {
				clonedChunk.next = nextClonedChunk;
				nextClonedChunk.previous = clonedChunk;

				clonedChunk = nextClonedChunk;
			}

			originalChunk = nextOriginalChunk;
		}

		cloned.lastChunk = clonedChunk;

		if (this.indentExclusionRanges) {
			cloned.indentExclusionRanges = this.indentExclusionRanges.slice();
		}

		cloned.sourcemapLocations = new BitSet(this.sourcemapLocations);

		cloned.intro = this.intro;
		cloned.outro = this.outro;

		return cloned;
	}

	generateDecodedMap(options) {
		options = options || {};

		const sourceIndex = 0;
		const names = Object.keys(this.storedNames);
		const mappings = new Mappings(options.hires);

		const locate = getLocator(this.original);

		if (this.intro) {
			mappings.advance(this.intro);
		}

		this.firstChunk.eachNext((chunk) => {
			const loc = locate(chunk.start);

			if (chunk.intro.length) mappings.advance(chunk.intro);

			if (chunk.edited) {
				mappings.addEdit(
					sourceIndex,
					chunk.content,
					loc,
					chunk.storeName ? names.indexOf(chunk.original) : -1,
				);
			} else {
				mappings.addUneditedChunk(sourceIndex, chunk, this.original, loc, this.sourcemapLocations);
			}

			if (chunk.outro.length) mappings.advance(chunk.outro);
		});

		if (this.outro) {
			mappings.advance(this.outro);
		}

		return {
			file: options.file ? options.file.split(/[/\\]/).pop() : undefined,
			sources: [
				options.source ? getRelativePath(options.file || '', options.source) : options.file || '',
			],
			sourcesContent: options.includeContent ? [this.original] : undefined,
			names,
			mappings: mappings.raw,
			x_google_ignoreList: this.ignoreList ? [sourceIndex] : undefined,
		};
	}

	generateMap(options) {
		return new SourceMap(this.generateDecodedMap(options));
	}

	_ensureindentStr() {
		if (this.indentStr === undefined) {
			this.indentStr = guessIndent(this.original);
		}
	}

	_getRawIndentString() {
		this._ensureindentStr();
		return this.indentStr;
	}

	getIndentString() {
		this._ensureindentStr();
		return this.indentStr === null ? '\t' : this.indentStr;
	}

	indent(indentStr, options) {
		const pattern = /^[^\r\n]/gm;

		if (isObject(indentStr)) {
			options = indentStr;
			indentStr = undefined;
		}

		if (indentStr === undefined) {
			this._ensureindentStr();
			indentStr = this.indentStr || '\t';
		}

		if (indentStr === '') return this; // noop

		options = options || {};

		// Process exclusion ranges
		const isExcluded = {};

		if (options.exclude) {
			const exclusions =
				typeof options.exclude[0] === 'number' ? [options.exclude] : options.exclude;
			exclusions.forEach((exclusion) => {
				for (let i = exclusion[0]; i < exclusion[1]; i += 1) {
					isExcluded[i] = true;
				}
			});
		}

		let shouldIndentNextCharacter = options.indentStart !== false;
		const replacer = (match) => {
			if (shouldIndentNextCharacter) return `${indentStr}${match}`;
			shouldIndentNextCharacter = true;
			return match;
		};

		this.intro = this.intro.replace(pattern, replacer);

		let charIndex = 0;
		let chunk = this.firstChunk;

		while (chunk) {
			const end = chunk.end;

			if (chunk.edited) {
				if (!isExcluded[charIndex]) {
					chunk.content = chunk.content.replace(pattern, replacer);

					if (chunk.content.length) {
						shouldIndentNextCharacter = chunk.content[chunk.content.length - 1] === '\n';
					}
				}
			} else {
				charIndex = chunk.start;

				while (charIndex < end) {
					if (!isExcluded[charIndex]) {
						const char = this.original[charIndex];

						if (char === '\n') {
							shouldIndentNextCharacter = true;
						} else if (char !== '\r' && shouldIndentNextCharacter) {
							shouldIndentNextCharacter = false;

							if (charIndex === chunk.start) {
								chunk.prependRight(indentStr);
							} else {
								this._splitChunk(chunk, charIndex);
								chunk = chunk.next;
								chunk.prependRight(indentStr);
							}
						}
					}

					charIndex += 1;
				}
			}

			charIndex = chunk.end;
			chunk = chunk.next;
		}

		this.outro = this.outro.replace(pattern, replacer);

		return this;
	}

	insert() {
		throw new Error(
			'magicString.insert(...) is deprecated. Use prependRight(...) or appendLeft(...)',
		);
	}

	insertLeft(index, content) {
		if (!warned.insertLeft) {
			console.warn(
				'magicString.insertLeft(...) is deprecated. Use magicString.appendLeft(...) instead',
			);
			warned.insertLeft = true;
		}

		return this.appendLeft(index, content);
	}

	insertRight(index, content) {
		if (!warned.insertRight) {
			console.warn(
				'magicString.insertRight(...) is deprecated. Use magicString.prependRight(...) instead',
			);
			warned.insertRight = true;
		}

		return this.prependRight(index, content);
	}

	move(start, end, index) {
		start = start + this.offset;
		end = end + this.offset;
		index = index + this.offset;

		if (index >= start && index <= end) throw new Error('Cannot move a selection inside itself');

		this._split(start);
		this._split(end);
		this._split(index);

		const first = this.byStart[start];
		const last = this.byEnd[end];

		const oldLeft = first.previous;
		const oldRight = last.next;

		const newRight = this.byStart[index];
		if (!newRight && last === this.lastChunk) return this;
		const newLeft = newRight ? newRight.previous : this.lastChunk;

		if (oldLeft) oldLeft.next = oldRight;
		if (oldRight) oldRight.previous = oldLeft;

		if (newLeft) newLeft.next = first;
		if (newRight) newRight.previous = last;

		if (!first.previous) this.firstChunk = last.next;
		if (!last.next) {
			this.lastChunk = first.previous;
			this.lastChunk.next = null;
		}

		first.previous = newLeft;
		last.next = newRight || null;

		if (!newLeft) this.firstChunk = first;
		if (!newRight) this.lastChunk = last;
		return this;
	}

	overwrite(start, end, content, options) {
		options = options || {};
		return this.update(start, end, content, { ...options, overwrite: !options.contentOnly });
	}

	update(start, end, content, options) {
		start = start + this.offset;
		end = end + this.offset;

		if (typeof content !== 'string') throw new TypeError('replacement content must be a string');

		if (this.original.length !== 0) {
			while (start < 0) start += this.original.length;
			while (end < 0) end += this.original.length;
		}

		if (end > this.original.length) throw new Error('end is out of bounds');
		if (start === end)
			throw new Error(
				'Cannot overwrite a zero-length range – use appendLeft or prependRight instead',
			);

		this._split(start);
		this._split(end);

		if (options === true) {
			if (!warned.storeName) {
				console.warn(
					'The final argument to magicString.overwrite(...) should be an options object. See https://github.com/rich-harris/magic-string',
				);
				warned.storeName = true;
			}

			options = { storeName: true };
		}
		const storeName = options !== undefined ? options.storeName : false;
		const overwrite = options !== undefined ? options.overwrite : false;

		if (storeName) {
			const original = this.original.slice(start, end);
			Object.defineProperty(this.storedNames, original, {
				writable: true,
				value: true,
				enumerable: true,
			});
		}

		const first = this.byStart[start];
		const last = this.byEnd[end];

		if (first) {
			let chunk = first;
			while (chunk !== last) {
				if (chunk.next !== this.byStart[chunk.end]) {
					throw new Error('Cannot overwrite across a split point');
				}
				chunk = chunk.next;
				chunk.edit('', false);
			}

			first.edit(content, storeName, !overwrite);
		} else {
			// must be inserting at the end
			const newChunk = new Chunk$1(start, end, '').edit(content, storeName);

			// TODO last chunk in the array may not be the last chunk, if it's moved...
			last.next = newChunk;
			newChunk.previous = last;
		}
		return this;
	}

	prepend(content) {
		if (typeof content !== 'string') throw new TypeError('outro content must be a string');

		this.intro = content + this.intro;
		return this;
	}

	prependLeft(index, content) {
		index = index + this.offset;

		if (typeof content !== 'string') throw new TypeError('inserted content must be a string');

		this._split(index);

		const chunk = this.byEnd[index];

		if (chunk) {
			chunk.prependLeft(content);
		} else {
			this.intro = content + this.intro;
		}
		return this;
	}

	prependRight(index, content) {
		index = index + this.offset;

		if (typeof content !== 'string') throw new TypeError('inserted content must be a string');

		this._split(index);

		const chunk = this.byStart[index];

		if (chunk) {
			chunk.prependRight(content);
		} else {
			this.outro = content + this.outro;
		}
		return this;
	}

	remove(start, end) {
		start = start + this.offset;
		end = end + this.offset;

		if (this.original.length !== 0) {
			while (start < 0) start += this.original.length;
			while (end < 0) end += this.original.length;
		}

		if (start === end) return this;

		if (start < 0 || end > this.original.length) throw new Error('Character is out of bounds');
		if (start > end) throw new Error('end must be greater than start');

		this._split(start);
		this._split(end);

		let chunk = this.byStart[start];

		while (chunk) {
			chunk.intro = '';
			chunk.outro = '';
			chunk.edit('');

			chunk = end > chunk.end ? this.byStart[chunk.end] : null;
		}
		return this;
	}

	reset(start, end) {
		start = start + this.offset;
		end = end + this.offset;

		if (this.original.length !== 0) {
			while (start < 0) start += this.original.length;
			while (end < 0) end += this.original.length;
		}

		if (start === end) return this;

		if (start < 0 || end > this.original.length) throw new Error('Character is out of bounds');
		if (start > end) throw new Error('end must be greater than start');

		this._split(start);
		this._split(end);

		let chunk = this.byStart[start];

		while (chunk) {
			chunk.reset();

			chunk = end > chunk.end ? this.byStart[chunk.end] : null;
		}
		return this;
	}

	lastChar() {
		if (this.outro.length) return this.outro[this.outro.length - 1];
		let chunk = this.lastChunk;
		do {
			if (chunk.outro.length) return chunk.outro[chunk.outro.length - 1];
			if (chunk.content.length) return chunk.content[chunk.content.length - 1];
			if (chunk.intro.length) return chunk.intro[chunk.intro.length - 1];
		} while ((chunk = chunk.previous));
		if (this.intro.length) return this.intro[this.intro.length - 1];
		return '';
	}

	lastLine() {
		let lineIndex = this.outro.lastIndexOf(n);
		if (lineIndex !== -1) return this.outro.substr(lineIndex + 1);
		let lineStr = this.outro;
		let chunk = this.lastChunk;
		do {
			if (chunk.outro.length > 0) {
				lineIndex = chunk.outro.lastIndexOf(n);
				if (lineIndex !== -1) return chunk.outro.substr(lineIndex + 1) + lineStr;
				lineStr = chunk.outro + lineStr;
			}

			if (chunk.content.length > 0) {
				lineIndex = chunk.content.lastIndexOf(n);
				if (lineIndex !== -1) return chunk.content.substr(lineIndex + 1) + lineStr;
				lineStr = chunk.content + lineStr;
			}

			if (chunk.intro.length > 0) {
				lineIndex = chunk.intro.lastIndexOf(n);
				if (lineIndex !== -1) return chunk.intro.substr(lineIndex + 1) + lineStr;
				lineStr = chunk.intro + lineStr;
			}
		} while ((chunk = chunk.previous));
		lineIndex = this.intro.lastIndexOf(n);
		if (lineIndex !== -1) return this.intro.substr(lineIndex + 1) + lineStr;
		return this.intro + lineStr;
	}

	slice(start = 0, end = this.original.length - this.offset) {
		start = start + this.offset;
		end = end + this.offset;

		if (this.original.length !== 0) {
			while (start < 0) start += this.original.length;
			while (end < 0) end += this.original.length;
		}

		let result = '';

		// find start chunk
		let chunk = this.firstChunk;
		while (chunk && (chunk.start > start || chunk.end <= start)) {
			// found end chunk before start
			if (chunk.start < end && chunk.end >= end) {
				return result;
			}

			chunk = chunk.next;
		}

		if (chunk && chunk.edited && chunk.start !== start)
			throw new Error(`Cannot use replaced character ${start} as slice start anchor.`);

		const startChunk = chunk;
		while (chunk) {
			if (chunk.intro && (startChunk !== chunk || chunk.start === start)) {
				result += chunk.intro;
			}

			const containsEnd = chunk.start < end && chunk.end >= end;
			if (containsEnd && chunk.edited && chunk.end !== end)
				throw new Error(`Cannot use replaced character ${end} as slice end anchor.`);

			const sliceStart = startChunk === chunk ? start - chunk.start : 0;
			const sliceEnd = containsEnd ? chunk.content.length + end - chunk.end : chunk.content.length;

			result += chunk.content.slice(sliceStart, sliceEnd);

			if (chunk.outro && (!containsEnd || chunk.end === end)) {
				result += chunk.outro;
			}

			if (containsEnd) {
				break;
			}

			chunk = chunk.next;
		}

		return result;
	}

	// TODO deprecate this? not really very useful
	snip(start, end) {
		const clone = this.clone();
		clone.remove(0, start);
		clone.remove(end, clone.original.length);

		return clone;
	}

	_split(index) {
		if (this.byStart[index] || this.byEnd[index]) return;

		let chunk = this.lastSearchedChunk;
		let previousChunk = chunk;
		const searchForward = index > chunk.end;

		while (chunk) {
			if (chunk.contains(index)) return this._splitChunk(chunk, index);

			chunk = searchForward ? this.byStart[chunk.end] : this.byEnd[chunk.start];

			// Prevent infinite loop (e.g. via empty chunks, where start === end)
			if (chunk === previousChunk) return;

			previousChunk = chunk;
		}
	}

	_splitChunk(chunk, index) {
		if (chunk.edited && chunk.content.length) {
			// zero-length edited chunks are a special case (overlapping replacements)
			const loc = getLocator(this.original)(index);
			throw new Error(
				`Cannot split a chunk that has already been edited (${loc.line}:${loc.column} – "${chunk.original}")`,
			);
		}

		const newChunk = chunk.split(index);

		this.byEnd[index] = chunk;
		this.byStart[index] = newChunk;
		this.byEnd[newChunk.end] = newChunk;

		if (chunk === this.lastChunk) this.lastChunk = newChunk;

		this.lastSearchedChunk = chunk;
		return true;
	}

	toString() {
		let str = this.intro;

		let chunk = this.firstChunk;
		while (chunk) {
			str += chunk.toString();
			chunk = chunk.next;
		}

		return str + this.outro;
	}

	isEmpty() {
		let chunk = this.firstChunk;
		do {
			if (
				(chunk.intro.length && chunk.intro.trim()) ||
				(chunk.content.length && chunk.content.trim()) ||
				(chunk.outro.length && chunk.outro.trim())
			)
				return false;
		} while ((chunk = chunk.next));
		return true;
	}

	length() {
		let chunk = this.firstChunk;
		let length = 0;
		do {
			length += chunk.intro.length + chunk.content.length + chunk.outro.length;
		} while ((chunk = chunk.next));
		return length;
	}

	trimLines() {
		return this.trim('[\\r\\n]');
	}

	trim(charType) {
		return this.trimStart(charType).trimEnd(charType);
	}

	trimEndAborted(charType) {
		const rx = new RegExp((charType || '\\s') + '+$');

		this.outro = this.outro.replace(rx, '');
		if (this.outro.length) return true;

		let chunk = this.lastChunk;

		do {
			const end = chunk.end;
			const aborted = chunk.trimEnd(rx);

			// if chunk was trimmed, we have a new lastChunk
			if (chunk.end !== end) {
				if (this.lastChunk === chunk) {
					this.lastChunk = chunk.next;
				}

				this.byEnd[chunk.end] = chunk;
				this.byStart[chunk.next.start] = chunk.next;
				this.byEnd[chunk.next.end] = chunk.next;
			}

			if (aborted) return true;
			chunk = chunk.previous;
		} while (chunk);

		return false;
	}

	trimEnd(charType) {
		this.trimEndAborted(charType);
		return this;
	}
	trimStartAborted(charType) {
		const rx = new RegExp('^' + (charType || '\\s') + '+');

		this.intro = this.intro.replace(rx, '');
		if (this.intro.length) return true;

		let chunk = this.firstChunk;

		do {
			const end = chunk.end;
			const aborted = chunk.trimStart(rx);

			if (chunk.end !== end) {
				// special case...
				if (chunk === this.lastChunk) this.lastChunk = chunk.next;

				this.byEnd[chunk.end] = chunk;
				this.byStart[chunk.next.start] = chunk.next;
				this.byEnd[chunk.next.end] = chunk.next;
			}

			if (aborted) return true;
			chunk = chunk.next;
		} while (chunk);

		return false;
	}

	trimStart(charType) {
		this.trimStartAborted(charType);
		return this;
	}

	hasChanged() {
		return this.original !== this.toString();
	}

	_replaceRegexp(searchValue, replacement) {
		function getReplacement(match, str) {
			if (typeof replacement === 'string') {
				return replacement.replace(/\$(\$|&|\d+)/g, (_, i) => {
					// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_string_as_a_parameter
					if (i === '$') return '$';
					if (i === '&') return match[0];
					const num = +i;
					if (num < match.length) return match[+i];
					return `$${i}`;
				});
			} else {
				return replacement(...match, match.index, str, match.groups);
			}
		}
		function matchAll(re, str) {
			let match;
			const matches = [];
			while ((match = re.exec(str))) {
				matches.push(match);
			}
			return matches;
		}
		if (searchValue.global) {
			const matches = matchAll(searchValue, this.original);
			matches.forEach((match) => {
				if (match.index != null) {
					const replacement = getReplacement(match, this.original);
					if (replacement !== match[0]) {
						this.overwrite(match.index, match.index + match[0].length, replacement);
					}
				}
			});
		} else {
			const match = this.original.match(searchValue);
			if (match && match.index != null) {
				const replacement = getReplacement(match, this.original);
				if (replacement !== match[0]) {
					this.overwrite(match.index, match.index + match[0].length, replacement);
				}
			}
		}
		return this;
	}

	_replaceString(string, replacement) {
		const { original } = this;
		const index = original.indexOf(string);

		if (index !== -1) {
			if (typeof replacement === 'function') {
				replacement = replacement(string, index, original);
			}
			if (string !== replacement) {
				this.overwrite(index, index + string.length, replacement);
			}
		}

		return this;
	}

	replace(searchValue, replacement) {
		if (typeof searchValue === 'string') {
			return this._replaceString(searchValue, replacement);
		}

		return this._replaceRegexp(searchValue, replacement);
	}

	_replaceAllString(string, replacement) {
		const { original } = this;
		const stringLength = string.length;
		for (
			let index = original.indexOf(string);
			index !== -1;
			index = original.indexOf(string, index + stringLength)
		) {
			const previous = original.slice(index, index + stringLength);
			let _replacement = replacement;
			if (typeof replacement === 'function') {
				_replacement = replacement(previous, index, original);
			}
			if (previous !== _replacement) this.overwrite(index, index + stringLength, _replacement);
		}

		return this;
	}

	replaceAll(searchValue, replacement) {
		if (typeof searchValue === 'string') {
			return this._replaceAllString(searchValue, replacement);
		}

		if (!searchValue.global) {
			throw new TypeError(
				'MagicString.prototype.replaceAll called with a non-global RegExp argument',
			);
		}

		return this._replaceRegexp(searchValue, replacement);
	}
}

const hasOwnProp = Object.prototype.hasOwnProperty;

let Bundle$1 = class Bundle {
	constructor(options = {}) {
		this.intro = options.intro || '';
		this.separator = options.separator !== undefined ? options.separator : '\n';
		this.sources = [];
		this.uniqueSources = [];
		this.uniqueSourceIndexByFilename = {};
	}

	addSource(source) {
		if (source instanceof MagicString) {
			return this.addSource({
				content: source,
				filename: source.filename,
				separator: this.separator,
			});
		}

		if (!isObject(source) || !source.content) {
			throw new Error(
				'bundle.addSource() takes an object with a `content` property, which should be an instance of MagicString, and an optional `filename`',
			);
		}

		['filename', 'ignoreList', 'indentExclusionRanges', 'separator'].forEach((option) => {
			if (!hasOwnProp.call(source, option)) source[option] = source.content[option];
		});

		if (source.separator === undefined) {
			// TODO there's a bunch of this sort of thing, needs cleaning up
			source.separator = this.separator;
		}

		if (source.filename) {
			if (!hasOwnProp.call(this.uniqueSourceIndexByFilename, source.filename)) {
				this.uniqueSourceIndexByFilename[source.filename] = this.uniqueSources.length;
				this.uniqueSources.push({ filename: source.filename, content: source.content.original });
			} else {
				const uniqueSource = this.uniqueSources[this.uniqueSourceIndexByFilename[source.filename]];
				if (source.content.original !== uniqueSource.content) {
					throw new Error(`Illegal source: same filename (${source.filename}), different contents`);
				}
			}
		}

		this.sources.push(source);
		return this;
	}

	append(str, options) {
		this.addSource({
			content: new MagicString(str),
			separator: (options && options.separator) || '',
		});

		return this;
	}

	clone() {
		const bundle = new Bundle({
			intro: this.intro,
			separator: this.separator,
		});

		this.sources.forEach((source) => {
			bundle.addSource({
				filename: source.filename,
				content: source.content.clone(),
				separator: source.separator,
			});
		});

		return bundle;
	}

	generateDecodedMap(options = {}) {
		const names = [];
		let x_google_ignoreList = undefined;
		this.sources.forEach((source) => {
			Object.keys(source.content.storedNames).forEach((name) => {
				if (!~names.indexOf(name)) names.push(name);
			});
		});

		const mappings = new Mappings(options.hires);

		if (this.intro) {
			mappings.advance(this.intro);
		}

		this.sources.forEach((source, i) => {
			if (i > 0) {
				mappings.advance(this.separator);
			}

			const sourceIndex = source.filename ? this.uniqueSourceIndexByFilename[source.filename] : -1;
			const magicString = source.content;
			const locate = getLocator(magicString.original);

			if (magicString.intro) {
				mappings.advance(magicString.intro);
			}

			magicString.firstChunk.eachNext((chunk) => {
				const loc = locate(chunk.start);

				if (chunk.intro.length) mappings.advance(chunk.intro);

				if (source.filename) {
					if (chunk.edited) {
						mappings.addEdit(
							sourceIndex,
							chunk.content,
							loc,
							chunk.storeName ? names.indexOf(chunk.original) : -1,
						);
					} else {
						mappings.addUneditedChunk(
							sourceIndex,
							chunk,
							magicString.original,
							loc,
							magicString.sourcemapLocations,
						);
					}
				} else {
					mappings.advance(chunk.content);
				}

				if (chunk.outro.length) mappings.advance(chunk.outro);
			});

			if (magicString.outro) {
				mappings.advance(magicString.outro);
			}

			if (source.ignoreList && sourceIndex !== -1) {
				if (x_google_ignoreList === undefined) {
					x_google_ignoreList = [];
				}
				x_google_ignoreList.push(sourceIndex);
			}
		});

		return {
			file: options.file ? options.file.split(/[/\\]/).pop() : undefined,
			sources: this.uniqueSources.map((source) => {
				return options.file ? getRelativePath(options.file, source.filename) : source.filename;
			}),
			sourcesContent: this.uniqueSources.map((source) => {
				return options.includeContent ? source.content : null;
			}),
			names,
			mappings: mappings.raw,
			x_google_ignoreList,
		};
	}

	generateMap(options) {
		return new SourceMap(this.generateDecodedMap(options));
	}

	getIndentString() {
		const indentStringCounts = {};

		this.sources.forEach((source) => {
			const indentStr = source.content._getRawIndentString();

			if (indentStr === null) return;

			if (!indentStringCounts[indentStr]) indentStringCounts[indentStr] = 0;
			indentStringCounts[indentStr] += 1;
		});

		return (
			Object.keys(indentStringCounts).sort((a, b) => {
				return indentStringCounts[a] - indentStringCounts[b];
			})[0] || '\t'
		);
	}

	indent(indentStr) {
		if (!arguments.length) {
			indentStr = this.getIndentString();
		}

		if (indentStr === '') return this; // noop

		let trailingNewline = !this.intro || this.intro.slice(-1) === '\n';

		this.sources.forEach((source, i) => {
			const separator = source.separator !== undefined ? source.separator : this.separator;
			const indentStart = trailingNewline || (i > 0 && /\r?\n$/.test(separator));

			source.content.indent(indentStr, {
				exclude: source.indentExclusionRanges,
				indentStart, //: trailingNewline || /\r?\n$/.test( separator )  //true///\r?\n/.test( separator )
			});

			trailingNewline = source.content.lastChar() === '\n';
		});

		if (this.intro) {
			this.intro =
				indentStr +
				this.intro.replace(/^[^\n]/gm, (match, index) => {
					return index > 0 ? indentStr + match : match;
				});
		}

		return this;
	}

	prepend(str) {
		this.intro = str + this.intro;
		return this;
	}

	toString() {
		const body = this.sources
			.map((source, i) => {
				const separator = source.separator !== undefined ? source.separator : this.separator;
				const str = (i > 0 ? separator : '') + source.content.toString();

				return str;
			})
			.join('');

		return this.intro + body;
	}

	isEmpty() {
		if (this.intro.length && this.intro.trim()) return false;
		if (this.sources.some((source) => !source.content.isEmpty())) return false;
		return true;
	}

	length() {
		return this.sources.reduce(
			(length, source) => length + source.content.length(),
			this.intro.length,
		);
	}

	trimLines() {
		return this.trim('[\\r\\n]');
	}

	trim(charType) {
		return this.trimStart(charType).trimEnd(charType);
	}

	trimStart(charType) {
		const rx = new RegExp('^' + (charType || '\\s') + '+');
		this.intro = this.intro.replace(rx, '');

		if (!this.intro) {
			let source;
			let i = 0;

			do {
				source = this.sources[i++];
				if (!source) {
					break;
				}
			} while (!source.content.trimStartAborted(charType));
		}

		return this;
	}

	trimEnd(charType) {
		const rx = new RegExp((charType || '\\s') + '+$');

		let source;
		let i = this.sources.length - 1;

		do {
			source = this.sources[i--];
			if (!source) {
				this.intro = this.intro.replace(rx, '');
				break;
			}
		} while (!source.content.trimEndAborted(charType));

		return this;
	}
};

function treeshakeNode(node, code, start, end) {
    code.remove(start, end);
    node.removeAnnotations(code);
}

const NO_SEMICOLON = { isNoStatement: true };
// This assumes there are only white-space and comments between start and the string we are looking for
function findFirstOccurrenceOutsideComment(code, searchString, start = 0) {
    let searchPos, charCodeAfterSlash;
    searchPos = code.indexOf(searchString, start);
    while (true) {
        start = code.indexOf('/', start);
        if (start === -1 || start >= searchPos)
            return searchPos;
        charCodeAfterSlash = code.charCodeAt(++start);
        ++start;
        // With our assumption, '/' always starts a comment. Determine comment type:
        start =
            charCodeAfterSlash === 47 /*"/"*/
                ? code.indexOf('\n', start) + 1
                : code.indexOf('*/', start) + 2;
        if (start > searchPos) {
            searchPos = code.indexOf(searchString, start);
        }
    }
}
const NON_WHITESPACE = /\S/g;
function findNonWhiteSpace(code, index) {
    NON_WHITESPACE.lastIndex = index;
    const result = NON_WHITESPACE.exec(code);
    return result.index;
}
const WHITESPACE = /\s/;
function findLastWhiteSpaceReverse(code, start, end) {
    while (true) {
        if (start >= end) {
            return end;
        }
        if (WHITESPACE.test(code[end - 1])) {
            end--;
        }
        else {
            return end;
        }
    }
}
// This assumes "code" only contains white-space and comments
// Returns position of line-comment if applicable
function findFirstLineBreakOutsideComment(code) {
    let lineBreakPos, charCodeAfterSlash, start = 0;
    lineBreakPos = code.indexOf('\n', start);
    while (true) {
        start = code.indexOf('/', start);
        if (start === -1 || start > lineBreakPos)
            return [lineBreakPos, lineBreakPos + 1];
        // With our assumption, '/' always starts a comment. Determine comment type:
        charCodeAfterSlash = code.charCodeAt(start + 1);
        if (charCodeAfterSlash === 47 /*"/"*/)
            return [start, lineBreakPos + 1];
        start = code.indexOf('*/', start + 2) + 2;
        if (start > lineBreakPos) {
            lineBreakPos = code.indexOf('\n', start);
        }
    }
}
function renderStatementList(statements, code, start, end, options) {
    let currentNode, currentNodeStart, currentNodeNeedsBoundaries, nextNodeStart;
    let nextNode = statements[0];
    let nextNodeNeedsBoundaries = !nextNode.included || nextNode.needsBoundaries;
    if (nextNodeNeedsBoundaries) {
        nextNodeStart =
            start + findFirstLineBreakOutsideComment(code.original.slice(start, nextNode.start))[1];
    }
    for (let nextIndex = 1; nextIndex <= statements.length; nextIndex++) {
        currentNode = nextNode;
        currentNodeStart = nextNodeStart;
        currentNodeNeedsBoundaries = nextNodeNeedsBoundaries;
        nextNode = statements[nextIndex];
        nextNodeNeedsBoundaries =
            nextNode === undefined ? false : !nextNode.included || nextNode.needsBoundaries;
        if (currentNodeNeedsBoundaries || nextNodeNeedsBoundaries) {
            nextNodeStart =
                currentNode.end +
                    findFirstLineBreakOutsideComment(code.original.slice(currentNode.end, nextNode === undefined ? end : nextNode.start))[1];
            if (currentNode.included) {
                if (currentNodeNeedsBoundaries) {
                    currentNode.render(code, options, {
                        end: nextNodeStart,
                        start: currentNodeStart
                    });
                }
                else {
                    currentNode.render(code, options);
                }
            }
            else {
                treeshakeNode(currentNode, code, currentNodeStart, nextNodeStart);
            }
        }
        else {
            currentNode.render(code, options);
        }
    }
}
// This assumes that the first character is not part of the first node
function getCommaSeparatedNodesWithBoundaries(nodes, code, start, end) {
    const splitUpNodes = [];
    let node, nextNodeStart, contentEnd, char;
    let separator = start - 1;
    for (const nextNode of nodes) {
        if (node !== undefined) {
            separator =
                node.end +
                    findFirstOccurrenceOutsideComment(code.original.slice(node.end, nextNode.start), ',');
        }
        nextNodeStart = contentEnd =
            separator +
                1 +
                findFirstLineBreakOutsideComment(code.original.slice(separator + 1, nextNode.start))[1];
        while (((char = code.original.charCodeAt(nextNodeStart)),
            char === 32 /*" "*/ || char === 9 /*"\t"*/ || char === 10 /*"\n"*/ || char === 13) /*"\r"*/)
            nextNodeStart++;
        if (node !== undefined) {
            splitUpNodes.push({
                contentEnd,
                end: nextNodeStart,
                node,
                separator,
                start
            });
        }
        node = nextNode;
        start = nextNodeStart;
    }
    splitUpNodes.push({
        contentEnd: end,
        end,
        node: node,
        separator: null,
        start
    });
    return splitUpNodes;
}
// This assumes there are only white-space and comments between start and end
function removeLineBreaks(code, start, end) {
    while (true) {
        const [removeStart, removeEnd] = findFirstLineBreakOutsideComment(code.original.slice(start, end));
        if (removeStart === -1) {
            break;
        }
        code.remove(start + removeStart, (start += removeEnd));
    }
}

function getSystemExportStatement(exportedVariables, { exportNamesByVariable, snippets: { _, getObject, getPropertyAccess } }, modifier = '') {
    if (exportedVariables.length === 1 &&
        exportNamesByVariable.get(exportedVariables[0]).length === 1) {
        const variable = exportedVariables[0];
        return `exports(${JSON.stringify(exportNamesByVariable.get(variable)[0])},${_}${variable.getName(getPropertyAccess)}${modifier})`;
    }
    else {
        const fields = [];
        for (const variable of exportedVariables) {
            for (const exportName of exportNamesByVariable.get(variable)) {
                fields.push([exportName, variable.getName(getPropertyAccess) + modifier]);
            }
        }
        return `exports(${getObject(fields, { lineBreakIndent: null })})`;
    }
}
// This is only invoked if there is exactly one export name
function renderSystemExportExpression(exportedVariable, expressionStart, expressionEnd, code, { exportNamesByVariable, snippets: { _ } }) {
    code.prependRight(expressionStart, `exports(${JSON.stringify(exportNamesByVariable.get(exportedVariable)[0])},${_}`);
    code.appendLeft(expressionEnd, ')');
}
function renderSystemExportFunction(exportedVariables, expressionStart, expressionEnd, needsParens, code, options) {
    const { _, getDirectReturnIifeLeft } = options.snippets;
    code.prependRight(expressionStart, getDirectReturnIifeLeft(['v'], `${getSystemExportStatement(exportedVariables, options)},${_}v`, { needsArrowReturnParens: true, needsWrappedFunction: needsParens }));
    code.appendLeft(expressionEnd, ')');
}
function renderSystemExportSequenceAfterExpression(exportedVariable, expressionStart, expressionEnd, needsParens, code, options) {
    const { _, getPropertyAccess } = options.snippets;
    code.appendLeft(expressionEnd, `,${_}${getSystemExportStatement([exportedVariable], options)},${_}${exportedVariable.getName(getPropertyAccess)}`);
    if (needsParens) {
        code.prependRight(expressionStart, '(');
        code.appendLeft(expressionEnd, ')');
    }
}
function renderSystemExportSequenceBeforeExpression(exportedVariable, expressionStart, expressionEnd, needsParens, code, options, modifier) {
    const { _ } = options.snippets;
    code.prependRight(expressionStart, `${getSystemExportStatement([exportedVariable], options, modifier)},${_}`);
    if (needsParens) {
        code.prependRight(expressionStart, '(');
        code.appendLeft(expressionEnd, ')');
    }
}

const UnknownKey = Symbol('Unknown Key');
const UnknownNonAccessorKey = Symbol('Unknown Non-Accessor Key');
const UnknownInteger = Symbol('Unknown Integer');
const UnknownWellKnown = Symbol('Unknown Well-Known');
const SymbolToStringTag = Symbol('Symbol.toStringTag');
const SymbolDispose = Symbol('Symbol.asyncDispose');
const SymbolAsyncDispose = Symbol('Symbol.dispose');
const SymbolHasInstance = Symbol('Symbol.hasInstance');
const WELL_KNOWN_SYMBOLS_LIST = [
    SymbolToStringTag,
    SymbolDispose,
    SymbolAsyncDispose,
    SymbolHasInstance
];
const WELL_KNOWN_SYMBOLS = new Set(WELL_KNOWN_SYMBOLS_LIST);
const isAnyWellKnown = (v) => WELL_KNOWN_SYMBOLS.has(v) || v === UnknownWellKnown;
const TREE_SHAKEABLE_SYMBOLS_LIST = [SymbolHasInstance, SymbolDispose, SymbolAsyncDispose];
const TREE_SHAKEABLE_SYMBOLS = new Set(TREE_SHAKEABLE_SYMBOLS_LIST);
const isConcreteKey = (v) => typeof v === 'string' || WELL_KNOWN_SYMBOLS.has(v);
const EMPTY_PATH = [];
const UNKNOWN_PATH = [UnknownKey];
// For deoptimizations, this means we are modifying an unknown property but did
// not lose track of the object or are creating a setter/getter;
// For assignment effects it means we do not check for setter/getter effects
// but only if something is mutated that is included, which is relevant for
// Object.defineProperty
const UNKNOWN_NON_ACCESSOR_PATH = [UnknownNonAccessorKey];
const UNKNOWN_INTEGER_PATH = [UnknownInteger];
const INSTANCEOF_PATH = [SymbolHasInstance];
const EntitiesKey = Symbol('Entities');
class EntityPathTracker {
    constructor() {
        this.entityPaths = Object.create(null, {
            [EntitiesKey]: { value: new Set() }
        });
    }
    trackEntityAtPathAndGetIfTracked(path, entity) {
        const trackedEntities = this.getEntities(path);
        if (trackedEntities.has(entity))
            return true;
        trackedEntities.add(entity);
        return false;
    }
    withTrackedEntityAtPath(path, entity, onUntracked, returnIfTracked) {
        const trackedEntities = this.getEntities(path);
        if (trackedEntities.has(entity))
            return returnIfTracked;
        trackedEntities.add(entity);
        const result = onUntracked();
        trackedEntities.delete(entity);
        return result;
    }
    getEntities(path) {
        let currentPaths = this.entityPaths;
        for (const pathSegment of path) {
            currentPaths = currentPaths[pathSegment] ||= Object.create(null, {
                [EntitiesKey]: { value: new Set() }
            });
        }
        return currentPaths[EntitiesKey];
    }
}
const SHARED_RECURSION_TRACKER = new EntityPathTracker();
class DiscriminatedPathTracker {
    constructor() {
        this.entityPaths = Object.create(null, {
            [EntitiesKey]: { value: new Map() }
        });
    }
    trackEntityAtPathAndGetIfTracked(path, discriminator, entity) {
        let currentPaths = this.entityPaths;
        for (const pathSegment of path) {
            currentPaths = currentPaths[pathSegment] ||= Object.create(null, {
                [EntitiesKey]: { value: new Map() }
            });
        }
        const trackedEntities = getOrCreate(currentPaths[EntitiesKey], discriminator, (getNewSet));
        if (trackedEntities.has(entity))
            return true;
        trackedEntities.add(entity);
        return false;
    }
}
const UNKNOWN_INCLUDED_PATH = Object.freeze({ [UnknownKey]: parseAst_js.EMPTY_OBJECT });
class IncludedFullPathTracker {
    constructor() {
        this.includedPaths = null;
    }
    includePathAndGetIfIncluded(path) {
        let included = true;
        let parent = this;
        let parentSegment = 'includedPaths';
        let currentPaths = (this.includedPaths ||=
            ((included = false), Object.create(null)));
        for (const pathSegment of path) {
            // This means from here, all paths are included
            if (currentPaths[UnknownKey]) {
                return true;
            }
            // Including UnknownKey automatically includes all nested paths.
            // From above, we know that UnknownKey is not included yet.
            if (!isConcreteKey(pathSegment)) {
                // Hopefully, this saves some memory over just setting
                // currentPaths[UnknownKey] = EMPTY_OBJECT
                parent[parentSegment] = UNKNOWN_INCLUDED_PATH;
                return false;
            }
            parent = currentPaths;
            parentSegment = pathSegment;
            currentPaths = currentPaths[pathSegment] ||= ((included = false), Object.create(null));
        }
        return included;
    }
}
const UNKNOWN_INCLUDED_TOP_LEVEL_PATH = Object.freeze({
    [UnknownKey]: true
});
class IncludedTopLevelPathTracker {
    constructor() {
        this.includedPaths = null;
    }
    includePathAndGetIfIncluded(path) {
        let included = true;
        const includedPaths = (this.includedPaths ||=
            ((included = false), Object.create(null)));
        if (includedPaths[UnknownKey]) {
            return true;
        }
        const [firstPathSegment, secondPathSegment] = path;
        if (!firstPathSegment) {
            return included;
        }
        if (!isConcreteKey(firstPathSegment)) {
            this.includedPaths = UNKNOWN_INCLUDED_TOP_LEVEL_PATH;
            return false;
        }
        if (secondPathSegment) {
            if (includedPaths[firstPathSegment] === UnknownKey) {
                return true;
            }
            includedPaths[firstPathSegment] = UnknownKey;
            return false;
        }
        if (includedPaths[firstPathSegment]) {
            return true;
        }
        includedPaths[firstPathSegment] = true;
        return false;
    }
    includeAllPaths(entity, context, basePath) {
        const { includedPaths } = this;
        if (includedPaths) {
            if (includedPaths[UnknownKey]) {
                entity.includePath([...basePath, UnknownKey], context);
            }
            else {
                const inclusionEntries = Object.entries(includedPaths);
                if (inclusionEntries.length === 0) {
                    entity.includePath(basePath, context);
                }
                else {
                    for (const [key, value] of inclusionEntries) {
                        entity.includePath(value === UnknownKey ? [...basePath, key, UnknownKey] : [...basePath, key], context);
                    }
                }
            }
        }
    }
}

/** @import { Node } from 'estree' */

/**
 * @param {Node} node
 * @param {Node} parent
 * @returns {boolean}
 */
function is_reference(node, parent) {
	if (node.type === 'MemberExpression') {
		return !node.computed && is_reference(node.object, node);
	}

	if (node.type !== 'Identifier') return false;

	switch (parent?.type) {
		// disregard `bar` in `foo.bar`
		case 'MemberExpression':
			return parent.computed || node === parent.object;

		// disregard the `foo` in `class {foo(){}}` but keep it in `class {[foo](){}}`
		case 'MethodDefinition':
			return parent.computed;

		// disregard the `meta` in `import.meta`
		case 'MetaProperty':
			return parent.meta === node;

		// disregard the `foo` in `class {foo=bar}` but keep it in `class {[foo]=bar}` and `class {bar=foo}`
		case 'PropertyDefinition':
			return parent.computed || node === parent.value;

		// disregard the `bar` in `{ bar: foo }`, but keep it in `{ [bar]: foo }`
		case 'Property':
			return parent.computed || node === parent.value;

		// disregard the `bar` in `export { foo as bar }` or
		// the foo in `import { foo as bar }`
		case 'ExportSpecifier':
		case 'ImportSpecifier':
			return node === parent.local;

		// disregard the `foo` in `foo: while (...) { ... break foo; ... continue foo;}`
		case 'LabeledStatement':
		case 'BreakStatement':
		case 'ContinueStatement':
			return false;

		default:
			return true;
	}
}

function createInclusionContext() {
    return {
        brokenFlow: false,
        hasBreak: false,
        hasContinue: false,
        includedCallArguments: new Set(),
        includedLabels: new Set()
    };
}
function createHasEffectsContext() {
    return {
        accessed: new EntityPathTracker(),
        assigned: new EntityPathTracker(),
        brokenFlow: false,
        called: new DiscriminatedPathTracker(),
        hasBreak: false,
        hasContinue: false,
        ignore: {
            breaks: false,
            continues: false,
            labels: new Set(),
            returnYield: false,
            this: false
        },
        includedLabels: new Set(),
        instantiated: new DiscriminatedPathTracker(),
        replacedVariableInits: new Map()
    };
}

function isFlagSet(flags, flag) {
    return (flags & flag) !== 0;
}
function setFlag(flags, flag, value) {
    return (flags & ~flag) | (-value & flag);
}

const UnknownValue = Symbol('Unknown Value');
const UnknownTruthyValue = Symbol('Unknown Truthy Value');
const UnknownFalsyValue = Symbol('Unknown Falsy Value');
class ExpressionEntity {
    constructor() {
        this.flags = 0;
    }
    get included() {
        return isFlagSet(this.flags, 1 /* Flag.included */);
    }
    set included(value) {
        this.flags = setFlag(this.flags, 1 /* Flag.included */, value);
    }
    deoptimizeArgumentsOnInteractionAtPath(interaction, _path, _recursionTracker) {
        deoptimizeInteraction(interaction);
    }
    deoptimizePath(_path) { }
    /**
     * If possible it returns a stringifyable literal value for this node that
     * can be used for inlining or comparing values. Otherwise, it should return
     * UnknownValue.
     */
    getLiteralValueAtPath(_path, _recursionTracker, _origin) {
        return UnknownValue;
    }
    getReturnExpressionWhenCalledAtPath(_path, _interaction, _recursionTracker, _origin) {
        return UNKNOWN_RETURN_EXPRESSION;
    }
    hasEffectsOnInteractionAtPath(_path, _interaction, _context) {
        return true;
    }
    include(context, _includeChildrenRecursively, _options) {
        if (!this.included)
            this.includeNode(context);
    }
    includeNode(_context) {
        this.included = true;
    }
    includePath(_path, context) {
        if (!this.included)
            this.includeNode(context);
    }
    /* We are both including and including an unknown path here as the former
     * ensures that nested nodes are included while the latter ensures that all
     * paths of the expression are included.
     * */
    includeCallArguments(interaction, context) {
        includeInteraction(interaction, context);
    }
    shouldBeIncluded(_context) {
        return true;
    }
}
const UNKNOWN_EXPRESSION = new (class UnknownExpression extends ExpressionEntity {
})();
const UNKNOWN_RETURN_EXPRESSION = [
    UNKNOWN_EXPRESSION,
    false
];
const deoptimizeInteraction = (interaction) => {
    for (const argument of interaction.args) {
        argument?.deoptimizePath(UNKNOWN_PATH);
    }
};
const includeInteraction = (interaction, context) => {
    // We do not re-include the "this" argument as we expect this is already
    // re-included at the call site
    interaction.args[0]?.includePath(UNKNOWN_PATH, context);
    includeInteractionWithoutThis(interaction, context);
};
const includeInteractionWithoutThis = ({ args }, context) => {
    for (let argumentIndex = 1; argumentIndex < args.length; argumentIndex++) {
        const argument = args[argumentIndex];
        if (argument) {
            argument.includePath(UNKNOWN_PATH, context);
            argument.include(context, false);
        }
    }
};

const INTERACTION_ACCESSED = 0;
const INTERACTION_ASSIGNED = 1;
const INTERACTION_CALLED = 2;
const NODE_INTERACTION_UNKNOWN_ACCESS = {
    args: [null],
    type: INTERACTION_ACCESSED
};
const NODE_INTERACTION_UNKNOWN_ASSIGNMENT = {
    args: [null, UNKNOWN_EXPRESSION],
    type: INTERACTION_ASSIGNED
};
// While this is technically a call without arguments, we can compare against
// this reference in places where precise values or this argument would make a
// difference
const NODE_INTERACTION_UNKNOWN_CALL = {
    args: [null],
    type: INTERACTION_CALLED,
    withNew: false
};

const PureFunctionKey = Symbol('PureFunction');
const getPureFunctions = ({ treeshake }) => {
    const pureFunctions = Object.create(null);
    for (const functionName of treeshake ? treeshake.manualPureFunctions : []) {
        let currentFunctions = pureFunctions;
        for (const pathSegment of functionName.split('.')) {
            currentFunctions = currentFunctions[pathSegment] ||= Object.create(null);
        }
        currentFunctions[PureFunctionKey] = true;
    }
    return pureFunctions;
};

class Variable extends ExpressionEntity {
    markReassigned() {
        this.isReassigned = true;
    }
    constructor(name) {
        super();
        this.name = name;
        this.alwaysRendered = false;
        this.forbiddenNames = null;
        this.globalName = null;
        this.initReached = false;
        this.isId = false;
        this.kind = null;
        this.renderBaseName = null;
        this.renderName = null;
        this.isReassigned = false;
        this.onlyFunctionCallUsed = true;
    }
    /**
     * Binds identifiers that reference this variable to this variable.
     * Necessary to be able to change variable names.
     */
    addReference(_identifier) { }
    /**
     * Check if the identifier variable is only used as function call
     * @returns true if the variable is only used as function call
     */
    getOnlyFunctionCallUsed() {
        return this.onlyFunctionCallUsed;
    }
    /**
     * Collect the places where the identifier variable is used
     * @param usedPlace Where the variable is used
     */
    addUsedPlace(usedPlace) {
        const isFunctionCall = usedPlace.parent.type === parseAst_js.CallExpression &&
            usedPlace.parent.callee === usedPlace;
        if (!isFunctionCall && usedPlace.parent.type !== parseAst_js.ExportDefaultDeclaration) {
            this.onlyFunctionCallUsed = false;
        }
    }
    /**
     * Prevent this variable from being renamed to this name to avoid name
     * collisions
     */
    forbidName(name) {
        (this.forbiddenNames ||= new Set()).add(name);
    }
    getBaseVariableName() {
        return (this.renderedLikeHoisted?.getBaseVariableName() ||
            this.renderBaseName ||
            this.renderName ||
            this.name);
    }
    getName(getPropertyAccess, useOriginalName) {
        if (this.globalName) {
            return this.globalName;
        }
        if (useOriginalName?.(this)) {
            return this.name;
        }
        if (this.renderedLikeHoisted) {
            return this.renderedLikeHoisted.getName(getPropertyAccess, useOriginalName);
        }
        const name = this.renderName || this.name;
        return this.renderBaseName ? `${this.renderBaseName}${getPropertyAccess(name)}` : name;
    }
    hasEffectsOnInteractionAtPath(path, { type }, _context) {
        return type !== INTERACTION_ACCESSED || path.length > 0;
    }
    /**
     * Marks this variable as being part of the bundle, which is usually the case
     * when one of its identifiers becomes part of the bundle. Returns true if it
     * has not been included previously. Once a variable is included, it should
     * take care all its declarations are included.
     */
    includePath(path, context) {
        this.included = true;
        this.renderedLikeHoisted?.includePath(path, context);
    }
    /**
     * Links the rendered name of this variable to another variable and includes
     * this variable if the other variable is included.
     */
    renderLikeHoisted(variable) {
        this.renderedLikeHoisted = variable;
    }
    markCalledFromTryStatement() { }
    setRenderNames(baseName, name) {
        this.renderBaseName = baseName;
        this.renderName = name;
    }
}

/** Synthetic import name for source phase imports, similar to '*' for namespaces */
const SOURCE_PHASE_IMPORT = '*source';
class ExternalVariable extends Variable {
    constructor(module, name) {
        super(name);
        this.referenced = false;
        this.module = module;
        this.isNamespace = name === '*';
        this.isSourcePhase = name === SOURCE_PHASE_IMPORT;
    }
    addReference(identifier) {
        this.referenced = true;
        if (this.name === 'default' || this.name === '*') {
            this.module.suggestName(identifier.name);
        }
    }
    hasEffectsOnInteractionAtPath(path, { type }) {
        return type !== INTERACTION_ACCESSED || path.length > (this.isNamespace ? 1 : 0);
    }
    includePath(path, context) {
        super.includePath(path, context);
        this.module.used = true;
    }
}

function cacheObjectGetters(object, getterProperties) {
    for (const property of getterProperties) {
        const propertyGetter = Object.getOwnPropertyDescriptor(object, property).get;
        Object.defineProperty(object, property, {
            get() {
                const value = propertyGetter.call(object);
                // This replaces the getter with a fixed value for subsequent calls
                Object.defineProperty(object, property, { value });
                return value;
            }
        });
    }
}

const RESERVED_NAMES = new Set([
    'await',
    'break',
    'case',
    'catch',
    'class',
    'const',
    'continue',
    'debugger',
    'default',
    'delete',
    'do',
    'else',
    'enum',
    'eval',
    'export',
    'exports',
    'extends',
    'false',
    'finally',
    'for',
    'function',
    'if',
    'implements',
    'import',
    'in',
    'instanceof',
    'interface',
    'let',
    'NaN',
    'new',
    'null',
    'package',
    'private',
    'protected',
    'public',
    'return',
    'static',
    'super',
    'switch',
    'this',
    'throw',
    'true',
    'try',
    'typeof',
    'undefined',
    'var',
    'void',
    'while',
    'with',
    'yield'
]);

const illegalCharacters = /[^\w$]/g;
const startsWithDigit = (value) => /\d/.test(value[0]);
const needsEscape = (value) => startsWithDigit(value) || RESERVED_NAMES.has(value) || value === 'arguments';
function isLegal(value) {
    if (needsEscape(value)) {
        return false;
    }
    return !illegalCharacters.test(value);
}
function makeLegal(value) {
    value = value
        .replace(/-(\w)/g, (_, letter) => letter.toUpperCase())
        .replace(illegalCharacters, '_');
    if (needsEscape(value))
        value = `_${value}`;
    return value || '_';
}
const VALID_IDENTIFIER_REGEXP = /^[$_\p{ID_Start}][$\u200C\u200D\p{ID_Continue}]*$/u;
const NUMBER_REGEXP = /^(?:0|[1-9]\d*)$/;
function stringifyObjectKeyIfNeeded(key) {
    if (VALID_IDENTIFIER_REGEXP.test(key)) {
        return key === '__proto__' ? '["__proto__"]' : key;
    }
    if (NUMBER_REGEXP.test(key) && +key <= Number.MAX_SAFE_INTEGER) {
        return key;
    }
    return JSON.stringify(key);
}
function stringifyIdentifierIfNeeded(key) {
    if (VALID_IDENTIFIER_REGEXP.test(key)) {
        return key;
    }
    return JSON.stringify(key);
}

class ExternalModule {
    constructor(options, id, moduleSideEffects, meta, renormalizeRenderPath, attributes) {
        this.options = options;
        this.id = id;
        this.renormalizeRenderPath = renormalizeRenderPath;
        this.dynamicImporters = [];
        this.execIndex = Infinity;
        this.exportedVariables = new Map();
        this.importers = [];
        this.reexported = false;
        this.used = false;
        this.declarations = new Map();
        this.importersByExportedName = new Map();
        this.mostCommonSuggestion = 0;
        this.nameSuggestions = new Map();
        this.suggestedVariableName = makeLegal(id.split(/[/\\]/).pop());
        const { importers, dynamicImporters } = this;
        this.info = {
            ast: null,
            attributes,
            code: null,
            dynamicallyImportedIdResolutions: parseAst_js.EMPTY_ARRAY,
            dynamicallyImportedIds: parseAst_js.EMPTY_ARRAY,
            get dynamicImporters() {
                return dynamicImporters.sort();
            },
            exportedBindings: null,
            exports: null,
            hasDefaultExport: null,
            id,
            implicitlyLoadedAfterOneOf: parseAst_js.EMPTY_ARRAY,
            implicitlyLoadedBefore: parseAst_js.EMPTY_ARRAY,
            importedIdResolutions: parseAst_js.EMPTY_ARRAY,
            importedIds: parseAst_js.EMPTY_ARRAY,
            get importers() {
                return importers.sort();
            },
            isEntry: false,
            isExternal: true,
            isIncluded: null,
            meta,
            moduleSideEffects,
            safeVariableNames: null,
            syntheticNamedExports: false
        };
    }
    cacheInfoGetters() {
        cacheObjectGetters(this.info, ['dynamicImporters', 'importers']);
    }
    getVariableForExportName(name, { importChain }) {
        const declaration = this.declarations.get(name);
        for (const module of importChain) {
            getOrCreate(this.importersByExportedName, name, getNewSet).add(module);
        }
        if (declaration)
            return [declaration];
        const externalVariable = new ExternalVariable(this, name);
        this.declarations.set(name, externalVariable);
        this.exportedVariables.set(externalVariable, name);
        return [externalVariable];
    }
    suggestName(name) {
        const value = (this.nameSuggestions.get(name) ?? 0) + 1;
        this.nameSuggestions.set(name, value);
        if (value > this.mostCommonSuggestion) {
            this.mostCommonSuggestion = value;
            this.suggestedVariableName = name;
        }
    }
    warnUnusedImports() {
        const unused = [...this.declarations]
            .filter(([name, declaration]) => name !== '*' && !declaration.included && !this.reexported && !declaration.referenced)
            .map(([name]) => name);
        if (unused.length === 0)
            return;
        const importersSet = new Set();
        for (const name of unused) {
            const importersOfName = this.importersByExportedName.get(name);
            for (const importer of this.importers) {
                if (!importersOfName?.has(importer))
                    continue;
                importersSet.add(importer);
            }
        }
        const importersArray = [...importersSet];
        this.options.onLog(parseAst_js.LOGLEVEL_WARN, parseAst_js.logUnusedExternalImports(this.id, unused, importersArray));
    }
}

function markModuleAndImpureDependenciesAsExecuted(baseModule) {
    baseModule.isExecuted = true;
    const modules = [baseModule];
    const visitedModules = new Set();
    for (const module of modules) {
        for (const dependency of [...module.dependencies, ...module.implicitlyLoadedBefore]) {
            if (!(dependency instanceof ExternalModule) &&
                !dependency.isExecuted &&
                (dependency.info.moduleSideEffects || module.implicitlyLoadedBefore.has(dependency)) &&
                !visitedModules.has(dependency.id)) {
                dependency.isExecuted = true;
                visitedModules.add(dependency.id);
                modules.push(dependency);
            }
        }
    }
}

// This file is generated by scripts/generate-child-node-keys.js.
// Do not edit this file directly.
const childNodeKeys = {
    ArrayExpression: ['elements'],
    ArrayPattern: ['elements'],
    ArrowFunctionExpression: ['params', 'body'],
    AssignmentExpression: ['left', 'right'],
    AssignmentPattern: ['left', 'right'],
    AwaitExpression: ['argument'],
    BinaryExpression: ['left', 'right'],
    BlockStatement: ['body'],
    BreakStatement: ['label'],
    CallExpression: ['callee', 'arguments'],
    CatchClause: ['param', 'body'],
    ChainExpression: ['expression'],
    ClassBody: ['body'],
    ClassDeclaration: ['decorators', 'id', 'superClass', 'body'],
    ClassExpression: ['decorators', 'id', 'superClass', 'body'],
    ConditionalExpression: ['test', 'consequent', 'alternate'],
    ContinueStatement: ['label'],
    DebuggerStatement: [],
    Decorator: ['expression'],
    DoWhileStatement: ['body', 'test'],
    EmptyStatement: [],
    ExportAllDeclaration: ['exported', 'source', 'attributes'],
    ExportDefaultDeclaration: ['declaration'],
    ExportNamedDeclaration: ['specifiers', 'source', 'attributes', 'declaration'],
    ExportSpecifier: ['local', 'exported'],
    ExpressionStatement: ['expression'],
    ForInStatement: ['left', 'right', 'body'],
    ForOfStatement: ['left', 'right', 'body'],
    ForStatement: ['init', 'test', 'update', 'body'],
    FunctionDeclaration: ['id', 'params', 'body'],
    FunctionExpression: ['id', 'params', 'body'],
    Identifier: [],
    IfStatement: ['test', 'consequent', 'alternate'],
    ImportAttribute: ['key', 'value'],
    ImportDeclaration: ['specifiers', 'source', 'attributes'],
    ImportDefaultSpecifier: ['local'],
    ImportExpression: ['source', 'options'],
    ImportNamespaceSpecifier: ['local'],
    ImportSpecifier: ['imported', 'local'],
    JSXAttribute: ['name', 'value'],
    JSXClosingElement: ['name'],
    JSXClosingFragment: [],
    JSXElement: ['openingElement', 'children', 'closingElement'],
    JSXEmptyExpression: [],
    JSXExpressionContainer: ['expression'],
    JSXFragment: ['openingFragment', 'children', 'closingFragment'],
    JSXIdentifier: [],
    JSXMemberExpression: ['object', 'property'],
    JSXNamespacedName: ['namespace', 'name'],
    JSXOpeningElement: ['name', 'attributes'],
    JSXOpeningFragment: [],
    JSXSpreadAttribute: ['argument'],
    JSXSpreadChild: ['expression'],
    JSXText: [],
    LabeledStatement: ['label', 'body'],
    Literal: [],
    LogicalExpression: ['left', 'right'],
    MemberExpression: ['object', 'property'],
    MetaProperty: ['meta', 'property'],
    MethodDefinition: ['decorators', 'key', 'value'],
    NewExpression: ['callee', 'arguments'],
    ObjectExpression: ['properties'],
    ObjectPattern: ['properties'],
    PanicError: [],
    ParseError: [],
    PrivateIdentifier: [],
    Program: ['body'],
    Property: ['key', 'value'],
    PropertyDefinition: ['decorators', 'key', 'value'],
    RestElement: ['argument'],
    ReturnStatement: ['argument'],
    SequenceExpression: ['expressions'],
    SpreadElement: ['argument'],
    StaticBlock: ['body'],
    Super: [],
    SwitchCase: ['test', 'consequent'],
    SwitchStatement: ['discriminant', 'cases'],
    TaggedTemplateExpression: ['tag', 'quasi'],
    TemplateElement: [],
    TemplateLiteral: ['quasis', 'expressions'],
    ThisExpression: [],
    ThrowStatement: ['argument'],
    TryStatement: ['block', 'handler', 'finalizer'],
    UnaryExpression: ['argument'],
    UpdateExpression: ['argument'],
    VariableDeclaration: ['declarations'],
    VariableDeclarator: ['id', 'init'],
    WhileStatement: ['test', 'body'],
    YieldExpression: ['argument']
};

const INCLUDE_PARAMETERS = 'variables';
const IS_SKIPPED_CHAIN = Symbol('IS_SKIPPED_CHAIN');
class NodeBase extends ExpressionEntity {
    /**
     * Nodes can apply custom deoptimizations once they become part of the
     * executed code. To do this, they must initialize this as false, implement
     * applyDeoptimizations and call this from include and hasEffects if they have
     * custom handlers
     */
    get deoptimized() {
        return isFlagSet(this.flags, 2 /* Flag.deoptimized */);
    }
    set deoptimized(value) {
        this.flags = setFlag(this.flags, 2 /* Flag.deoptimized */, value);
    }
    constructor(parent, parentScope) {
        super();
        this.parent = parent;
        this.scope = parentScope;
        this.createScope(parentScope);
    }
    addExportedVariables(_variables, _exportNamesByVariable) { }
    /**
     * Override this to bind assignments to variables and do any initialisations
     * that require the scopes to be populated with variables.
     */
    bind() {
        for (const key of childNodeKeys[this.type]) {
            const value = this[key];
            if (Array.isArray(value)) {
                for (const child of value) {
                    child?.bind();
                }
            }
            else if (value) {
                value.bind();
            }
        }
    }
    /**
     * Override if this node should receive a different scope than the parent
     * scope.
     */
    createScope(parentScope) {
        this.scope = parentScope;
    }
    hasEffects(context) {
        if (!this.deoptimized)
            this.applyDeoptimizations();
        for (const key of childNodeKeys[this.type]) {
            const value = this[key];
            if (value === null)
                continue;
            if (Array.isArray(value)) {
                for (const child of value) {
                    if (child?.hasEffects(context))
                        return true;
                }
            }
            else if (value.hasEffects(context))
                return true;
        }
        return false;
    }
    hasEffectsAsAssignmentTarget(context, _checkAccess) {
        return (this.hasEffects(context) ||
            this.hasEffectsOnInteractionAtPath(EMPTY_PATH, this.assignmentInteraction, context));
    }
    include(context, includeChildrenRecursively, _options) {
        if (!this.included)
            this.includeNode(context);
        for (const key of childNodeKeys[this.type]) {
            const value = this[key];
            if (value === null)
                continue;
            if (Array.isArray(value)) {
                for (const child of value) {
                    child?.include(context, includeChildrenRecursively);
                }
            }
            else {
                value.include(context, includeChildrenRecursively);
            }
        }
    }
    includeNode(context) {
        this.included = true;
        if (!this.deoptimized)
            this.applyDeoptimizations();
        for (const key of childNodeKeys[this.type]) {
            const value = this[key];
            if (value === null)
                continue;
            if (Array.isArray(value)) {
                for (const child of value) {
                    child?.includePath(UNKNOWN_PATH, context);
                }
            }
            else {
                value.includePath(UNKNOWN_PATH, context);
            }
        }
    }
    includeAsAssignmentTarget(context, includeChildrenRecursively, _deoptimizeAccess) {
        this.include(context, includeChildrenRecursively);
    }
    /**
     * Override to perform special initialisation steps after the scope is
     * initialised
     */
    initialise() {
        this.scope.context.magicString.addSourcemapLocation(this.start);
        this.scope.context.magicString.addSourcemapLocation(this.end);
    }
    parseNode(esTreeNode) {
        for (const [key, value] of Object.entries(esTreeNode)) {
            // Skip properties defined on the class already.
            // This way, we can override this function to add custom initialisation and then call super.parseNode
            // Note: this doesn't skip properties with defined getters/setters which we use to pack wrap booleans
            // in bitfields. Those are still assigned from the value in the esTreeNode.
            if (this.hasOwnProperty(key))
                continue;
            if (key.charCodeAt(0) === 95 /* _ */) {
                if (key === parseAst_js.ANNOTATION_KEY) {
                    this.annotations = value;
                }
                else if (key === parseAst_js.INVALID_ANNOTATION_KEY) {
                    this.invalidAnnotations = value;
                }
            }
            else if (typeof value !== 'object' || value === null) {
                this[key] = value;
            }
            else if (Array.isArray(value)) {
                this[key] = new Array(value.length);
                let index = 0;
                for (const child of value) {
                    this[key][index++] =
                        child === null
                            ? null
                            : new (this.scope.context.getNodeConstructor(child.type))(this, this.scope).parseNode(child);
                }
            }
            else {
                this[key] = new (this.scope.context.getNodeConstructor(value.type))(this, this.scope).parseNode(value);
            }
        }
        // extend child keys for unknown node types
        childNodeKeys[esTreeNode.type] ||= createChildNodeKeysForNode(esTreeNode);
        this.initialise();
        return this;
    }
    removeAnnotations(code) {
        if (this.annotations) {
            for (const annotation of this.annotations) {
                code.remove(annotation.start, annotation.end);
            }
        }
    }
    render(code, options) {
        for (const key of childNodeKeys[this.type]) {
            const value = this[key];
            if (value === null)
                continue;
            if (Array.isArray(value)) {
                for (const child of value) {
                    child?.render(code, options);
                }
            }
            else {
                value.render(code, options);
            }
        }
    }
    setAssignedValue(value) {
        this.assignmentInteraction = { args: [null, value], type: INTERACTION_ASSIGNED };
    }
    shouldBeIncluded(context) {
        return this.included || (!context.brokenFlow && this.hasEffects(createHasEffectsContext()));
    }
    /**
     * Just deoptimize everything by default so that when e.g. we do not track
     * something properly, it is deoptimized.
     * @protected
     */
    applyDeoptimizations() {
        this.deoptimized = true;
        for (const key of childNodeKeys[this.type]) {
            const value = this[key];
            if (value === null)
                continue;
            if (Array.isArray(value)) {
                for (const child of value) {
                    child?.deoptimizePath(UNKNOWN_PATH);
                }
            }
            else {
                value.deoptimizePath(UNKNOWN_PATH);
            }
        }
        this.scope.context.requestTreeshakingPass();
    }
}
function createChildNodeKeysForNode(esTreeNode) {
    return Object.keys(esTreeNode).filter(key => typeof esTreeNode[key] === 'object' && key.charCodeAt(0) !== 95 /* _ */);
}
function onlyIncludeSelf() {
    this.included = true;
    if (!this.deoptimized)
        this.applyDeoptimizations();
}
function onlyIncludeSelfNoDeoptimize() {
    this.included = true;
}
function doNotDeoptimize() {
    this.deoptimized = true;
}

function isObjectExpressionNode(node) {
    return node instanceof NodeBase && node.type === parseAst_js.ObjectExpression;
}
function isPropertyNode(node) {
    return node instanceof NodeBase && node.type === parseAst_js.Property;
}
function isArrowFunctionExpressionNode(node) {
    return node instanceof NodeBase && node.type === parseAst_js.ArrowFunctionExpression;
}
function isFunctionExpressionNode(node) {
    return node instanceof NodeBase && node.type === parseAst_js.FunctionExpression;
}
function isCallExpressionNode(node) {
    return node instanceof NodeBase && node.type === parseAst_js.CallExpression;
}
function isMemberExpressionNode(node) {
    return node instanceof NodeBase && node.type === parseAst_js.MemberExpression;
}
function isAwaitExpressionNode(node) {
    return node instanceof NodeBase && node.type === parseAst_js.AwaitExpression;
}
function isIdentifierNode(node) {
    return node instanceof NodeBase && node.type === parseAst_js.Identifier;
}
function isExpressionStatementNode(node) {
    return node instanceof NodeBase && node.type === parseAst_js.ExpressionStatement;
}

function assembleMemberDescriptions(memberDescriptions, inheritedDescriptions = null) {
    return Object.create(inheritedDescriptions, memberDescriptions);
}
const UNDEFINED_EXPRESSION = new (class UndefinedExpression extends ExpressionEntity {
    getLiteralValueAtPath(path) {
        return path.length > 0 ? UnknownValue : undefined;
    }
})();
const returnsUnknown = {
    value: {
        hasEffectsWhenCalled: null,
        returns: UNKNOWN_EXPRESSION
    }
};
const UNKNOWN_LITERAL_BOOLEAN = new (class UnknownBoolean extends ExpressionEntity {
    getReturnExpressionWhenCalledAtPath(path) {
        if (path.length === 1) {
            return getMemberReturnExpressionWhenCalled(literalBooleanMembers, path[0]);
        }
        return UNKNOWN_RETURN_EXPRESSION;
    }
    hasEffectsOnInteractionAtPath(path, interaction, context) {
        if (interaction.type === INTERACTION_ACCESSED) {
            return path.length > 1;
        }
        if (interaction.type === INTERACTION_CALLED && path.length === 1) {
            return hasMemberEffectWhenCalled(literalBooleanMembers, path[0], interaction, context);
        }
        return true;
    }
})();
const returnsBoolean = {
    value: {
        hasEffectsWhenCalled: null,
        returns: UNKNOWN_LITERAL_BOOLEAN
    }
};
const UNKNOWN_LITERAL_NUMBER = new (class UnknownNumber extends ExpressionEntity {
    getReturnExpressionWhenCalledAtPath(path) {
        if (path.length === 1) {
            return getMemberReturnExpressionWhenCalled(literalNumberMembers, path[0]);
        }
        return UNKNOWN_RETURN_EXPRESSION;
    }
    hasEffectsOnInteractionAtPath(path, interaction, context) {
        if (interaction.type === INTERACTION_ACCESSED) {
            return path.length > 1;
        }
        if (interaction.type === INTERACTION_CALLED && path.length === 1) {
            return hasMemberEffectWhenCalled(literalNumberMembers, path[0], interaction, context);
        }
        return true;
    }
})();
const returnsNumber = {
    value: {
        hasEffectsWhenCalled: null,
        returns: UNKNOWN_LITERAL_NUMBER
    }
};
const UNKNOWN_LITERAL_STRING = new (class UnknownString extends ExpressionEntity {
    getReturnExpressionWhenCalledAtPath(path) {
        if (path.length === 1) {
            return getMemberReturnExpressionWhenCalled(literalStringMembers, path[0]);
        }
        return UNKNOWN_RETURN_EXPRESSION;
    }
    hasEffectsOnInteractionAtPath(path, interaction, context) {
        if (interaction.type === INTERACTION_ACCESSED) {
            return path.length > 1;
        }
        if (interaction.type === INTERACTION_CALLED && path.length === 1) {
            return hasMemberEffectWhenCalled(literalStringMembers, path[0], interaction, context);
        }
        return true;
    }
})();
const returnsString = {
    value: {
        hasEffectsWhenCalled: null,
        returns: UNKNOWN_LITERAL_STRING
    }
};
const stringReplace = {
    value: {
        hasEffectsWhenCalled({ args }, context) {
            const argument1 = args[2];
            return (args.length < 3 ||
                (typeof argument1.getLiteralValueAtPath(EMPTY_PATH, SHARED_RECURSION_TRACKER, {
                    deoptimizeCache() { }
                }) === 'symbol' &&
                    argument1.hasEffectsOnInteractionAtPath(EMPTY_PATH, NODE_INTERACTION_UNKNOWN_CALL, context)));
        },
        returns: UNKNOWN_LITERAL_STRING
    }
};
const objectMembers = assembleMemberDescriptions({
    hasOwnProperty: returnsBoolean,
    isPrototypeOf: returnsBoolean,
    propertyIsEnumerable: returnsBoolean,
    toLocaleString: returnsString,
    toString: returnsString,
    valueOf: returnsUnknown
});
const literalBooleanMembers = assembleMemberDescriptions({
    valueOf: returnsBoolean
}, objectMembers);
const literalNumberMembers = assembleMemberDescriptions({
    toExponential: returnsString,
    toFixed: returnsString,
    toLocaleString: returnsString,
    toPrecision: returnsString,
    valueOf: returnsNumber
}, objectMembers);
/**
 * RegExp are stateful when they have the global or sticky flags set.
 * But if we actually don't use them, the side effect does not matter.
 * the check logic in `hasEffectsOnInteractionAtPath`.
 */
const literalRegExpMembers = assembleMemberDescriptions({
    exec: returnsUnknown,
    test: returnsBoolean
}, objectMembers);
const literalStringMembers = assembleMemberDescriptions({
    anchor: returnsString,
    at: returnsUnknown,
    big: returnsString,
    blink: returnsString,
    bold: returnsString,
    charAt: returnsString,
    charCodeAt: returnsNumber,
    codePointAt: returnsUnknown,
    concat: returnsString,
    endsWith: returnsBoolean,
    fixed: returnsString,
    fontcolor: returnsString,
    fontsize: returnsString,
    includes: returnsBoolean,
    indexOf: returnsNumber,
    italics: returnsString,
    lastIndexOf: returnsNumber,
    link: returnsString,
    localeCompare: returnsNumber,
    match: returnsUnknown,
    matchAll: returnsUnknown,
    normalize: returnsString,
    padEnd: returnsString,
    padStart: returnsString,
    repeat: returnsString,
    replace: stringReplace,
    replaceAll: stringReplace,
    search: returnsNumber,
    slice: returnsString,
    small: returnsString,
    split: returnsUnknown,
    startsWith: returnsBoolean,
    strike: returnsString,
    sub: returnsString,
    substr: returnsString,
    substring: returnsString,
    sup: returnsString,
    toLocaleLowerCase: returnsString,
    toLocaleUpperCase: returnsString,
    toLowerCase: returnsString,
    toString: returnsString, // overrides the toString() method of the Object object; it does not inherit Object.prototype.toString()
    toUpperCase: returnsString,
    trim: returnsString,
    trimEnd: returnsString,
    trimLeft: returnsString,
    trimRight: returnsString,
    trimStart: returnsString,
    valueOf: returnsString
}, objectMembers);
function getLiteralMembersForValue(value) {
    if (value instanceof RegExp) {
        return literalRegExpMembers;
    }
    switch (typeof value) {
        case 'boolean': {
            return literalBooleanMembers;
        }
        case 'number': {
            return literalNumberMembers;
        }
        case 'string': {
            return literalStringMembers;
        }
    }
    return Object.create(null);
}
function hasMemberEffectWhenCalled(members, memberName, interaction, context) {
    if (typeof memberName !== 'string' || !members[memberName]) {
        return true;
    }
    return members[memberName].hasEffectsWhenCalled?.(interaction, context) || false;
}
function getMemberReturnExpressionWhenCalled(members, memberName) {
    if (typeof memberName !== 'string' || !members[memberName])
        return UNKNOWN_RETURN_EXPRESSION;
    return [members[memberName].returns, false];
}

class Method extends ExpressionEntity {
    constructor(description) {
        super();
        this.description = description;
    }
    deoptimizeArgumentsOnInteractionAtPath({ args, type }, path) {
        if (type === INTERACTION_CALLED && path.length === 0) {
            if (this.description.mutatesSelfAsArray) {
                args[0]?.deoptimizePath(UNKNOWN_INTEGER_PATH);
            }
            if (this.description.mutatesArgs) {
                for (let index = 1; index < args.length; index++) {
                    args[index].deoptimizePath(UNKNOWN_PATH);
                }
            }
        }
    }
    getReturnExpressionWhenCalledAtPath(path, { args }) {
        if (path.length > 0) {
            return UNKNOWN_RETURN_EXPRESSION;
        }
        return [
            this.description.returnsPrimitive ||
                (this.description.returns === 'self'
                    ? args[0] || UNKNOWN_EXPRESSION
                    : this.description.returns()),
            false
        ];
    }
    hasEffectsOnInteractionAtPath(path, { args, type }, context) {
        if (path.length > (type === INTERACTION_ACCESSED ? 1 : 0)) {
            return true;
        }
        if (type === INTERACTION_CALLED) {
            if (this.description.mutatesSelfAsArray === true &&
                args[0]?.hasEffectsOnInteractionAtPath(UNKNOWN_INTEGER_PATH, NODE_INTERACTION_UNKNOWN_ASSIGNMENT, context)) {
                return true;
            }
            if (this.description.callsArgs) {
                for (const argumentIndex of this.description.callsArgs) {
                    if (args[argumentIndex + 1]?.hasEffectsOnInteractionAtPath(EMPTY_PATH, NODE_INTERACTION_UNKNOWN_CALL, context)) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
}
const METHOD_RETURNS_BOOLEAN = [
    new Method({
        callsArgs: null,
        mutatesArgs: false,
        mutatesSelfAsArray: false,
        returns: null,
        returnsPrimitive: UNKNOWN_LITERAL_BOOLEAN
    })
];
const METHOD_RETURNS_STRING = [
    new Method({
        callsArgs: null,
        mutatesArgs: false,
        mutatesSelfAsArray: false,
        returns: null,
        returnsPrimitive: UNKNOWN_LITERAL_STRING
    })
];
const METHOD_RETURNS_NUMBER = [
    new Method({
        callsArgs: null,
        mutatesArgs: false,
        mutatesSelfAsArray: false,
        returns: null,
        returnsPrimitive: UNKNOWN_LITERAL_NUMBER
    })
];
const METHOD_RETURNS_UNKNOWN = [
    new Method({
        callsArgs: null,
        mutatesArgs: false,
        mutatesSelfAsArray: false,
        returns: null,
        returnsPrimitive: UNKNOWN_EXPRESSION
    })
];

const INTEGER_REG_EXP = /^\d+$/;
class ObjectEntity extends ExpressionEntity {
    get hasLostTrack() {
        return isFlagSet(this.flags, 2048 /* Flag.hasLostTrack */);
    }
    set hasLostTrack(value) {
        this.flags = setFlag(this.flags, 2048 /* Flag.hasLostTrack */, value);
    }
    get hasUnknownDeoptimizedInteger() {
        return isFlagSet(this.flags, 4096 /* Flag.hasUnknownDeoptimizedInteger */);
    }
    set hasUnknownDeoptimizedInteger(value) {
        this.flags = setFlag(this.flags, 4096 /* Flag.hasUnknownDeoptimizedInteger */, value);
    }
    get hasUnknownDeoptimizedProperty() {
        return isFlagSet(this.flags, 8192 /* Flag.hasUnknownDeoptimizedProperty */);
    }
    set hasUnknownDeoptimizedProperty(value) {
        this.flags = setFlag(this.flags, 8192 /* Flag.hasUnknownDeoptimizedProperty */, value);
    }
    // If a PropertyMap is used, this will be taken as propertiesAndGettersByKey
    // and we assume there are no setters or getters
    constructor(properties, prototypeExpression, immutable = false) {
        super();
        this.prototypeExpression = prototypeExpression;
        this.immutable = immutable;
        this.additionalExpressionsToBeDeoptimized = new Set();
        this.allProperties = [];
        this.alwaysIncludedProperties = new Set();
        this.deoptimizedPaths = new Map();
        this.expressionsToBeDeoptimizedByKey = new Map();
        this.gettersByKey = new Map();
        this.propertiesAndGettersByKey = new Map();
        this.propertiesAndSettersByKey = new Map();
        this.settersByKey = new Map();
        this.unknownIntegerProps = [];
        this.unmatchableGetters = [];
        this.unmatchablePropertiesAndGetters = [];
        this.unmatchablePropertiesAndSetters = [];
        this.unmatchableSetters = [];
        if (Array.isArray(properties)) {
            this.buildPropertyMaps(properties);
        }
        else {
            this.propertiesAndGettersByKey = this.propertiesAndSettersByKey = properties;
            for (const propertiesForKey of properties.values()) {
                this.allProperties.push(...propertiesForKey);
            }
        }
    }
    deoptimizeAllProperties(noAccessors) {
        const isDeoptimized = this.hasLostTrack || this.hasUnknownDeoptimizedProperty;
        if (noAccessors) {
            this.hasUnknownDeoptimizedProperty = true;
        }
        else {
            this.hasLostTrack = true;
        }
        if (isDeoptimized) {
            return;
        }
        for (const properties of [
            ...this.propertiesAndGettersByKey.values(),
            ...this.settersByKey.values()
        ]) {
            for (const property of properties) {
                property.deoptimizePath(UNKNOWN_PATH);
            }
        }
        // While the prototype itself cannot be mutated, each property can
        this.prototypeExpression?.deoptimizePath([UnknownKey, UnknownKey]);
        this.deoptimizeCachedEntities();
    }
    deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker) {
        const [key, ...subPath] = path;
        const { args, type } = interaction;
        if (this.hasLostTrack ||
            // single paths that are deoptimized will not become getters or setters
            ((type === INTERACTION_CALLED || path.length > 1) &&
                (this.hasUnknownDeoptimizedProperty ||
                    (isConcreteKey(key) && this.deoptimizedPaths.get(key))))) {
            deoptimizeInteraction(interaction);
            return;
        }
        const [propertiesForExactMatchByKey, relevantPropertiesByKey, relevantUnmatchableProperties] = type === INTERACTION_CALLED || path.length > 1
            ? [
                this.propertiesAndGettersByKey,
                this.propertiesAndGettersByKey,
                this.unmatchablePropertiesAndGetters
            ]
            : type === INTERACTION_ACCESSED
                ? [this.propertiesAndGettersByKey, this.gettersByKey, this.unmatchableGetters]
                : [this.propertiesAndSettersByKey, this.settersByKey, this.unmatchableSetters];
        if (isConcreteKey(key)) {
            if (propertiesForExactMatchByKey.get(key)) {
                const properties = relevantPropertiesByKey.get(key);
                if (properties) {
                    for (const property of properties) {
                        property.deoptimizeArgumentsOnInteractionAtPath(interaction, subPath, recursionTracker);
                    }
                }
                if (!this.immutable) {
                    for (const argument of args) {
                        if (argument) {
                            this.additionalExpressionsToBeDeoptimized.add(argument);
                        }
                    }
                }
                return;
            }
            for (const property of relevantUnmatchableProperties) {
                property.deoptimizeArgumentsOnInteractionAtPath(interaction, subPath, recursionTracker);
            }
            if (typeof key === 'string' && INTEGER_REG_EXP.test(key)) {
                for (const property of this.unknownIntegerProps) {
                    property.deoptimizeArgumentsOnInteractionAtPath(interaction, subPath, recursionTracker);
                }
            }
        }
        else {
            for (const properties of [
                ...relevantPropertiesByKey.values(),
                relevantUnmatchableProperties
            ]) {
                for (const property of properties) {
                    property.deoptimizeArgumentsOnInteractionAtPath(interaction, subPath, recursionTracker);
                }
            }
            for (const property of this.unknownIntegerProps) {
                property.deoptimizeArgumentsOnInteractionAtPath(interaction, subPath, recursionTracker);
            }
        }
        if (!this.immutable) {
            for (const argument of args) {
                if (argument) {
                    this.additionalExpressionsToBeDeoptimized.add(argument);
                }
            }
        }
        this.prototypeExpression?.deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker);
    }
    deoptimizeIntegerProperties() {
        if (this.hasLostTrack ||
            this.hasUnknownDeoptimizedProperty ||
            this.hasUnknownDeoptimizedInteger) {
            return;
        }
        this.hasUnknownDeoptimizedInteger = true;
        // Omits symbol keys but that's unimportant here
        for (const [key, propertiesAndGetters] of this.propertiesAndGettersByKey.entries()) {
            if (typeof key === 'string' && INTEGER_REG_EXP.test(key)) {
                for (const property of propertiesAndGetters) {
                    property.deoptimizePath(UNKNOWN_PATH);
                }
            }
        }
        this.deoptimizeCachedIntegerEntities();
    }
    // Assumption: If only a specific path is deoptimized, no accessors are created
    deoptimizePath(path) {
        if (this.hasLostTrack || this.immutable) {
            return;
        }
        const key = path[0];
        if (path.length === 1) {
            if (key === UnknownInteger) {
                return this.deoptimizeIntegerProperties();
            }
            else if (!isConcreteKey(key)) {
                return this.deoptimizeAllProperties(key === UnknownNonAccessorKey);
            }
            if (!this.deoptimizedPaths.get(key)) {
                this.deoptimizedPaths.set(key, true);
                // we only deoptimizeCache exact matches as in all other cases,
                // we do not return a literal value or return expression
                const expressionsToBeDeoptimized = this.expressionsToBeDeoptimizedByKey.get(key);
                if (expressionsToBeDeoptimized) {
                    for (const expression of expressionsToBeDeoptimized) {
                        expression.deoptimizeCache();
                    }
                }
            }
        }
        const subPath = path.length === 1 ? UNKNOWN_PATH : path.slice(1);
        for (const property of isConcreteKey(key)
            ? [
                ...(this.propertiesAndGettersByKey.get(key) || this.unmatchablePropertiesAndGetters),
                ...(this.settersByKey.get(key) || this.unmatchableSetters)
            ]
            : this.allProperties) {
            property.deoptimizePath(subPath);
        }
        this.prototypeExpression?.deoptimizePath(path.length === 1 ? [path[0], UnknownKey] : path);
    }
    getLiteralValueAtPath(path, recursionTracker, origin) {
        if (path.length === 0) {
            // This should actually be "UnknownTruthyValue". However, this currently
            // causes an issue with TypeScript enums in files with moduleSideEffects:
            // false because we cannot properly track whether a "var" has been
            // initialized. This should be reverted once we can properly track this.
            // return UnknownTruthyValue;
            return UnknownValue;
        }
        const key = path[0];
        const expressionAtPath = this.getMemberExpressionAndTrackDeopt(key, origin);
        if (expressionAtPath) {
            return expressionAtPath.getLiteralValueAtPath(path.slice(1), recursionTracker, origin);
        }
        if (this.prototypeExpression) {
            return this.prototypeExpression.getLiteralValueAtPath(path, recursionTracker, origin);
        }
        if (path.length === 1) {
            return undefined;
        }
        return UnknownValue;
    }
    getReturnExpressionWhenCalledAtPath(path, interaction, recursionTracker, origin) {
        if (path.length === 0) {
            return UNKNOWN_RETURN_EXPRESSION;
        }
        const [key, ...subPath] = path;
        const expressionAtPath = this.getMemberExpressionAndTrackDeopt(key, origin);
        if (expressionAtPath) {
            return expressionAtPath.getReturnExpressionWhenCalledAtPath(subPath, interaction, recursionTracker, origin);
        }
        if (this.prototypeExpression) {
            return this.prototypeExpression.getReturnExpressionWhenCalledAtPath(path, interaction, recursionTracker, origin);
        }
        return UNKNOWN_RETURN_EXPRESSION;
    }
    hasEffectsOnInteractionAtPath(path, interaction, context) {
        const [key, ...subPath] = path;
        if (subPath.length > 0 || interaction.type === INTERACTION_CALLED) {
            const expressionAtPath = this.getMemberExpression(key);
            if (expressionAtPath) {
                return expressionAtPath.hasEffectsOnInteractionAtPath(subPath, interaction, context);
            }
            if (this.prototypeExpression) {
                return this.prototypeExpression.hasEffectsOnInteractionAtPath(path, interaction, context);
            }
            return true;
        }
        if (key === UnknownNonAccessorKey)
            return false;
        if (this.hasLostTrack)
            return true;
        const [propertiesAndAccessorsByKey, accessorsByKey, unmatchableAccessors] = interaction.type === INTERACTION_ACCESSED
            ? [this.propertiesAndGettersByKey, this.gettersByKey, this.unmatchableGetters]
            : [this.propertiesAndSettersByKey, this.settersByKey, this.unmatchableSetters];
        if (isConcreteKey(key)) {
            if (propertiesAndAccessorsByKey.get(key)) {
                const accessors = accessorsByKey.get(key);
                if (accessors) {
                    for (const accessor of accessors) {
                        if (accessor.hasEffectsOnInteractionAtPath(subPath, interaction, context))
                            return true;
                    }
                }
                return false;
            }
            for (const accessor of unmatchableAccessors) {
                if (accessor.hasEffectsOnInteractionAtPath(subPath, interaction, context)) {
                    return true;
                }
            }
        }
        else {
            for (const accessors of [...accessorsByKey.values(), unmatchableAccessors]) {
                for (const accessor of accessors) {
                    if (accessor.hasEffectsOnInteractionAtPath(subPath, interaction, context))
                        return true;
                }
            }
        }
        if (this.prototypeExpression) {
            return this.prototypeExpression.hasEffectsOnInteractionAtPath(path, interaction, context);
        }
        return false;
    }
    include(context, includeChildrenRecursively) {
        this.included = true;
        for (const property of this.allProperties) {
            if (includeChildrenRecursively ||
                property.shouldBeIncluded(context) ||
                this.alwaysIncludedProperties.has(property)) {
                property.include(context, includeChildrenRecursively);
            }
        }
        this.prototypeExpression?.include(context, includeChildrenRecursively);
    }
    includePath(path, context) {
        this.included = true;
        for (const property of this.alwaysIncludedProperties) {
            property.includePath(UNKNOWN_PATH, context);
        }
        if (path.length === 0)
            return;
        const [key, ...subPath] = path;
        const [includedMembers, includedPath] = isConcreteKey(key)
            ? [
                new Set([
                    ...(this.propertiesAndGettersByKey.get(key) || this.unmatchablePropertiesAndGetters),
                    ...(this.propertiesAndSettersByKey.get(key) || this.unmatchablePropertiesAndSetters)
                ]),
                subPath
            ]
            : [this.allProperties, UNKNOWN_PATH];
        for (const property of includedMembers) {
            property.includePath(includedPath, context);
        }
        this.prototypeExpression?.includePath(path, context);
    }
    buildPropertyMaps(properties) {
        const { allProperties, alwaysIncludedProperties, propertiesAndGettersByKey, propertiesAndSettersByKey, settersByKey, gettersByKey, unknownIntegerProps, unmatchablePropertiesAndGetters, unmatchablePropertiesAndSetters, unmatchableGetters, unmatchableSetters } = this;
        for (let index = properties.length - 1; index >= 0; index--) {
            const { key, kind, property } = properties[index];
            allProperties.push(property);
            if (isAnyWellKnown(key) && !TREE_SHAKEABLE_SYMBOLS.has(key)) {
                // Never treeshake well-known symbols (unless Rollup can optimize them)
                // They are most likely called implicitly by language semantics, don't get rid of them
                alwaysIncludedProperties.add(property);
                if (key === UnknownWellKnown)
                    continue;
            }
            if (isConcreteKey(key)) {
                if (kind === 'set') {
                    if (!propertiesAndSettersByKey.has(key)) {
                        propertiesAndSettersByKey.set(key, [property, ...unmatchablePropertiesAndSetters]);
                        settersByKey.set(key, [property, ...unmatchableSetters]);
                    }
                }
                else if (kind === 'get') {
                    if (!propertiesAndGettersByKey.has(key)) {
                        propertiesAndGettersByKey.set(key, [property, ...unmatchablePropertiesAndGetters]);
                        gettersByKey.set(key, [property, ...unmatchableGetters]);
                    }
                }
                else {
                    if (!propertiesAndSettersByKey.has(key)) {
                        propertiesAndSettersByKey.set(key, [property, ...unmatchablePropertiesAndSetters]);
                    }
                    if (!propertiesAndGettersByKey.has(key)) {
                        propertiesAndGettersByKey.set(key, [property, ...unmatchablePropertiesAndGetters]);
                    }
                }
            }
            else {
                if (key === UnknownInteger) {
                    unknownIntegerProps.push(property);
                    continue;
                }
                if (kind === 'set')
                    unmatchableSetters.push(property);
                if (kind === 'get')
                    unmatchableGetters.push(property);
                if (kind !== 'get')
                    unmatchablePropertiesAndSetters.push(property);
                if (kind !== 'set')
                    unmatchablePropertiesAndGetters.push(property);
            }
        }
    }
    deoptimizeCachedEntities() {
        for (const expressionsToBeDeoptimized of this.expressionsToBeDeoptimizedByKey.values()) {
            for (const expression of expressionsToBeDeoptimized) {
                expression.deoptimizeCache();
            }
        }
        for (const expression of this.additionalExpressionsToBeDeoptimized) {
            expression.deoptimizePath(UNKNOWN_PATH);
        }
    }
    deoptimizeCachedIntegerEntities() {
        for (const [key, expressionsToBeDeoptimized] of this.expressionsToBeDeoptimizedByKey.entries()) {
            if (typeof key === 'string' && INTEGER_REG_EXP.test(key)) {
                for (const expression of expressionsToBeDeoptimized) {
                    expression.deoptimizeCache();
                }
            }
        }
        for (const expression of this.additionalExpressionsToBeDeoptimized) {
            expression.deoptimizePath(UNKNOWN_INTEGER_PATH);
        }
    }
    getMemberExpression(key) {
        if (this.hasLostTrack ||
            this.hasUnknownDeoptimizedProperty ||
            !isConcreteKey(key) ||
            (this.hasUnknownDeoptimizedInteger && typeof key === 'string' && INTEGER_REG_EXP.test(key)) ||
            this.deoptimizedPaths.get(key)) {
            return UNKNOWN_EXPRESSION;
        }
        const properties = this.propertiesAndGettersByKey.get(key);
        if (properties?.length === 1) {
            return properties[0];
        }
        if (properties ||
            this.unmatchablePropertiesAndGetters.length > 0 ||
            (this.unknownIntegerProps.length > 0 && typeof key === 'string' && INTEGER_REG_EXP.test(key))) {
            return UNKNOWN_EXPRESSION;
        }
        return null;
    }
    getMemberExpressionAndTrackDeopt(key, origin) {
        if (!isConcreteKey(key)) {
            return UNKNOWN_EXPRESSION;
        }
        const expression = this.getMemberExpression(key);
        if (!(expression === UNKNOWN_EXPRESSION || this.immutable)) {
            let expressionsToBeDeoptimized = this.expressionsToBeDeoptimizedByKey.get(key);
            if (!expressionsToBeDeoptimized) {
                this.expressionsToBeDeoptimizedByKey.set(key, (expressionsToBeDeoptimized = []));
            }
            expressionsToBeDeoptimized.push(origin);
        }
        return expression;
    }
}

const isInteger = (property) => typeof property === 'string' && /^\d+$/.test(property);
// This makes sure unknown properties are not handled as "undefined" but as
// "unknown" but without access side effects. An exception is done for numeric
// properties as we do not expect new builtin properties to be numbers, this
// will improve tree-shaking for out-of-bounds array properties
const OBJECT_PROTOTYPE_FALLBACK = new (class ObjectPrototypeFallbackExpression extends ExpressionEntity {
    deoptimizeArgumentsOnInteractionAtPath(interaction, path) {
        if (interaction.type === INTERACTION_CALLED && path.length === 1 && !isInteger(path[0])) {
            deoptimizeInteraction(interaction);
        }
    }
    getLiteralValueAtPath(path) {
        // We ignore number properties as we do not expect new properties to be
        // numbers and also want to keep handling out-of-bound array elements as
        // "undefined"
        return path.length === 1 && isInteger(path[0]) ? undefined : UnknownValue;
    }
    hasEffectsOnInteractionAtPath(path, { type }) {
        return path.length > 1 || type === INTERACTION_CALLED;
    }
})();
const OBJECT_PROTOTYPE = new ObjectEntity(new Map([
    ['hasOwnProperty', METHOD_RETURNS_BOOLEAN],
    ['isPrototypeOf', METHOD_RETURNS_BOOLEAN],
    ['propertyIsEnumerable', METHOD_RETURNS_BOOLEAN],
    ['toLocaleString', METHOD_RETURNS_STRING],
    ['toString', METHOD_RETURNS_STRING],
    ['valueOf', METHOD_RETURNS_UNKNOWN]
]), OBJECT_PROTOTYPE_FALLBACK, true);

const NEW_ARRAY_PROPERTIES = [
    { key: UnknownInteger, kind: 'init', property: UNKNOWN_EXPRESSION },
    { key: 'length', kind: 'init', property: UNKNOWN_LITERAL_NUMBER }
];
const METHOD_CALLS_ARG_DEOPTS_SELF_RETURNS_BOOLEAN = [
    new Method({
        callsArgs: [0],
        mutatesArgs: false,
        mutatesSelfAsArray: 'deopt-only',
        returns: null,
        returnsPrimitive: UNKNOWN_LITERAL_BOOLEAN
    })
];
const METHOD_CALLS_ARG_DEOPTS_SELF_RETURNS_NUMBER = [
    new Method({
        callsArgs: [0],
        mutatesArgs: false,
        mutatesSelfAsArray: 'deopt-only',
        returns: null,
        returnsPrimitive: UNKNOWN_LITERAL_NUMBER
    })
];
const METHOD_MUTATES_SELF_RETURNS_NEW_ARRAY = [
    new Method({
        callsArgs: null,
        mutatesArgs: false,
        mutatesSelfAsArray: true,
        returns: () => new ObjectEntity(NEW_ARRAY_PROPERTIES, ARRAY_PROTOTYPE),
        returnsPrimitive: null
    })
];
const METHOD_DEOPTS_SELF_RETURNS_NEW_ARRAY = [
    new Method({
        callsArgs: null,
        mutatesArgs: false,
        mutatesSelfAsArray: 'deopt-only',
        returns: () => new ObjectEntity(NEW_ARRAY_PROPERTIES, ARRAY_PROTOTYPE),
        returnsPrimitive: null
    })
];
const METHOD_CALLS_ARG_DEOPTS_SELF_RETURNS_NEW_ARRAY = [
    new Method({
        callsArgs: [0],
        mutatesArgs: false,
        mutatesSelfAsArray: 'deopt-only',
        returns: () => new ObjectEntity(NEW_ARRAY_PROPERTIES, ARRAY_PROTOTYPE),
        returnsPrimitive: null
    })
];
const METHOD_MUTATES_SELF_AND_ARGS_RETURNS_NUMBER = [
    new Method({
        callsArgs: null,
        mutatesArgs: true,
        mutatesSelfAsArray: true,
        returns: null,
        returnsPrimitive: UNKNOWN_LITERAL_NUMBER
    })
];
const METHOD_MUTATES_SELF_RETURNS_UNKNOWN = [
    new Method({
        callsArgs: null,
        mutatesArgs: false,
        mutatesSelfAsArray: true,
        returns: null,
        returnsPrimitive: UNKNOWN_EXPRESSION
    })
];
const METHOD_DEOPTS_SELF_RETURNS_UNKNOWN = [
    new Method({
        callsArgs: null,
        mutatesArgs: false,
        mutatesSelfAsArray: 'deopt-only',
        returns: null,
        returnsPrimitive: UNKNOWN_EXPRESSION
    })
];
const METHOD_CALLS_ARG_DEOPTS_SELF_RETURNS_UNKNOWN = [
    new Method({
        callsArgs: [0],
        mutatesArgs: false,
        mutatesSelfAsArray: 'deopt-only',
        returns: null,
        returnsPrimitive: UNKNOWN_EXPRESSION
    })
];
const METHOD_MUTATES_SELF_RETURNS_SELF = [
    new Method({
        callsArgs: null,
        mutatesArgs: false,
        mutatesSelfAsArray: true,
        returns: 'self',
        returnsPrimitive: null
    })
];
const METHOD_CALLS_ARG_MUTATES_SELF_RETURNS_SELF = [
    new Method({
        callsArgs: [0],
        mutatesArgs: false,
        mutatesSelfAsArray: true,
        returns: 'self',
        returnsPrimitive: null
    })
];
const ARRAY_PROTOTYPE = new ObjectEntity(new Map([
    // We assume that accessors have effects as we do not track the accessed value afterwards
    ['at', METHOD_DEOPTS_SELF_RETURNS_UNKNOWN],
    ['concat', METHOD_DEOPTS_SELF_RETURNS_NEW_ARRAY],
    ['copyWithin', METHOD_MUTATES_SELF_RETURNS_SELF],
    ['entries', METHOD_DEOPTS_SELF_RETURNS_NEW_ARRAY],
    ['every', METHOD_CALLS_ARG_DEOPTS_SELF_RETURNS_BOOLEAN],
    ['fill', METHOD_MUTATES_SELF_RETURNS_SELF],
    ['filter', METHOD_CALLS_ARG_DEOPTS_SELF_RETURNS_NEW_ARRAY],
    ['find', METHOD_CALLS_ARG_DEOPTS_SELF_RETURNS_UNKNOWN],
    ['findIndex', METHOD_CALLS_ARG_DEOPTS_SELF_RETURNS_NUMBER],
    ['findLast', METHOD_CALLS_ARG_DEOPTS_SELF_RETURNS_UNKNOWN],
    ['findLastIndex', METHOD_CALLS_ARG_DEOPTS_SELF_RETURNS_NUMBER],
    ['flat', METHOD_DEOPTS_SELF_RETURNS_NEW_ARRAY],
    ['flatMap', METHOD_CALLS_ARG_DEOPTS_SELF_RETURNS_NEW_ARRAY],
    ['forEach', METHOD_CALLS_ARG_DEOPTS_SELF_RETURNS_UNKNOWN],
    ['includes', METHOD_RETURNS_BOOLEAN],
    ['indexOf', METHOD_RETURNS_NUMBER],
    ['join', METHOD_RETURNS_STRING],
    ['keys', METHOD_RETURNS_UNKNOWN],
    ['lastIndexOf', METHOD_RETURNS_NUMBER],
    ['map', METHOD_CALLS_ARG_DEOPTS_SELF_RETURNS_NEW_ARRAY],
    ['pop', METHOD_MUTATES_SELF_RETURNS_UNKNOWN],
    ['push', METHOD_MUTATES_SELF_AND_ARGS_RETURNS_NUMBER],
    ['reduce', METHOD_CALLS_ARG_DEOPTS_SELF_RETURNS_UNKNOWN],
    ['reduceRight', METHOD_CALLS_ARG_DEOPTS_SELF_RETURNS_UNKNOWN],
    ['reverse', METHOD_MUTATES_SELF_RETURNS_SELF],
    ['shift', METHOD_MUTATES_SELF_RETURNS_UNKNOWN],
    ['slice', METHOD_DEOPTS_SELF_RETURNS_NEW_ARRAY],
    ['some', METHOD_CALLS_ARG_DEOPTS_SELF_RETURNS_BOOLEAN],
    ['sort', METHOD_CALLS_ARG_MUTATES_SELF_RETURNS_SELF],
    ['splice', METHOD_MUTATES_SELF_RETURNS_NEW_ARRAY],
    ['toLocaleString', METHOD_RETURNS_STRING],
    ['toString', METHOD_RETURNS_STRING],
    ['unshift', METHOD_MUTATES_SELF_AND_ARGS_RETURNS_NUMBER],
    ['values', METHOD_DEOPTS_SELF_RETURNS_UNKNOWN]
]), OBJECT_PROTOTYPE, true);

class SpreadElement extends NodeBase {
    deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker) {
        if (path.length > 0) {
            this.argument.deoptimizeArgumentsOnInteractionAtPath(interaction, UNKNOWN_PATH, recursionTracker);
        }
    }
    hasEffects(context) {
        if (!this.deoptimized)
            this.applyDeoptimizations();
        const { propertyReadSideEffects } = this.scope.context.options
            .treeshake;
        return (this.argument.hasEffects(context) ||
            (propertyReadSideEffects &&
                (propertyReadSideEffects === 'always' ||
                    this.argument.hasEffectsOnInteractionAtPath(UNKNOWN_PATH, NODE_INTERACTION_UNKNOWN_ACCESS, context))));
    }
    includeNode(context) {
        this.included = true;
        if (!this.deoptimized)
            this.applyDeoptimizations();
        this.argument.includePath(UNKNOWN_PATH, context);
    }
    applyDeoptimizations() {
        this.deoptimized = true;
        // Only properties of properties of the argument could become subject to reassignment
        // This will also reassign the return values of iterators
        this.argument.deoptimizePath([UnknownKey, UnknownKey]);
        this.scope.context.requestTreeshakingPass();
    }
}

class ArrayExpression extends NodeBase {
    constructor() {
        super(...arguments);
        this.objectEntity = null;
    }
    deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker) {
        this.getObjectEntity().deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker);
    }
    deoptimizePath(path) {
        this.getObjectEntity().deoptimizePath(path);
    }
    getLiteralValueAtPath(path, recursionTracker, origin) {
        return this.getObjectEntity().getLiteralValueAtPath(path, recursionTracker, origin);
    }
    getReturnExpressionWhenCalledAtPath(path, interaction, recursionTracker, origin) {
        return this.getObjectEntity().getReturnExpressionWhenCalledAtPath(path, interaction, recursionTracker, origin);
    }
    hasEffectsOnInteractionAtPath(path, interaction, context) {
        return this.getObjectEntity().hasEffectsOnInteractionAtPath(path, interaction, context);
    }
    includeNode(context) {
        this.included = true;
        if (!this.deoptimized)
            this.applyDeoptimizations();
        for (const element of this.elements) {
            if (element) {
                element?.includePath(UNKNOWN_PATH, context);
            }
        }
    }
    applyDeoptimizations() {
        this.deoptimized = true;
        let hasSpread = false;
        for (let index = 0; index < this.elements.length; index++) {
            const element = this.elements[index];
            if (element && (hasSpread || element instanceof SpreadElement)) {
                hasSpread = true;
                element.deoptimizePath(UNKNOWN_PATH);
            }
        }
        this.scope.context.requestTreeshakingPass();
    }
    getObjectEntity() {
        if (this.objectEntity !== null) {
            return this.objectEntity;
        }
        const properties = [
            { key: 'length', kind: 'init', property: UNKNOWN_LITERAL_NUMBER }
        ];
        let hasSpread = false;
        for (let index = 0; index < this.elements.length; index++) {
            const element = this.elements[index];
            if (hasSpread || element instanceof SpreadElement) {
                if (element) {
                    hasSpread = true;
                    properties.unshift({ key: UnknownInteger, kind: 'init', property: element });
                }
            }
            else if (element) {
                properties.push({ key: String(index), kind: 'init', property: element });
            }
            else {
                properties.push({ key: String(index), kind: 'init', property: UNDEFINED_EXPRESSION });
            }
        }
        return (this.objectEntity = new ObjectEntity(properties, ARRAY_PROTOTYPE));
    }
}

/* eslint sort-keys: "off" */
const ValueProperties = Symbol('Value Properties');
const getUnknownValue = () => UnknownValue;
const returnFalse = () => false;
const returnTrue = () => true;
const getWellKnownSymbol = (symbol) => ({
    __proto__: null,
    [ValueProperties]: {
        deoptimizeArgumentsOnCall: doNothing,
        getLiteralValue: () => symbol,
        hasEffectsWhenCalled: returnTrue
    }
});
const PURE = {
    deoptimizeArgumentsOnCall: doNothing,
    getLiteralValue: getUnknownValue,
    hasEffectsWhenCalled: returnFalse
};
const IMPURE = {
    deoptimizeArgumentsOnCall: doNothing,
    getLiteralValue: getUnknownValue,
    hasEffectsWhenCalled: returnTrue
};
const PURE_WITH_ARRAY = {
    deoptimizeArgumentsOnCall: doNothing,
    getLiteralValue: getUnknownValue,
    hasEffectsWhenCalled({ args }) {
        return args.length > 1 && !(args[1] instanceof ArrayExpression);
    }
};
const GETTER_ACCESS = {
    deoptimizeArgumentsOnCall: doNothing,
    getLiteralValue: getUnknownValue,
    hasEffectsWhenCalled({ args }, context) {
        const [_thisArgument, firstArgument] = args;
        return (!(firstArgument instanceof ExpressionEntity) ||
            firstArgument.hasEffectsOnInteractionAtPath(UNKNOWN_PATH, NODE_INTERACTION_UNKNOWN_ACCESS, context));
    }
};
// We use shortened variables to reduce file size here
/* OBJECT */
const O = {
    __proto__: null,
    [ValueProperties]: IMPURE
};
/* PURE FUNCTION */
const PF = {
    __proto__: null,
    [ValueProperties]: PURE
};
/* PURE FUNCTION IF FIRST ARG DOES NOT CONTAIN A GETTER */
const PF_NO_GETTER = {
    __proto__: null,
    [ValueProperties]: GETTER_ACCESS
};
/* FUNCTION THAT MUTATES FIRST ARG WITHOUT TRIGGERING ACCESSORS */
const MUTATES_ARG_WITHOUT_ACCESSOR = {
    __proto__: null,
    [ValueProperties]: {
        deoptimizeArgumentsOnCall({ args: [, firstArgument] }) {
            firstArgument?.deoptimizePath(UNKNOWN_PATH);
        },
        getLiteralValue: getUnknownValue,
        hasEffectsWhenCalled({ args }, context) {
            return (args.length <= 1 ||
                args[1].hasEffectsOnInteractionAtPath(UNKNOWN_NON_ACCESSOR_PATH, NODE_INTERACTION_UNKNOWN_ASSIGNMENT, context));
        }
    }
};
/* CONSTRUCTOR */
const C = {
    __proto__: null,
    [ValueProperties]: IMPURE,
    prototype: O
};
/* PURE CONSTRUCTOR */
const PC = {
    __proto__: null,
    [ValueProperties]: PURE,
    prototype: O
};
const PC_WITH_ARRAY = {
    __proto__: null,
    [ValueProperties]: PURE_WITH_ARRAY,
    prototype: O
};
const ARRAY_TYPE = {
    __proto__: null,
    [ValueProperties]: PURE,
    from: O,
    of: PF,
    prototype: O
};
const INTL_MEMBER = {
    __proto__: null,
    [ValueProperties]: PURE,
    supportedLocalesOf: PC
};
const UNKNOWN_WELL_KNOWN = {
    deoptimizeArgumentsOnCall: doNothing,
    getLiteralValue: () => UnknownWellKnown,
    hasEffectsWhenCalled: returnTrue
};
const knownGlobals = {
    // Placeholders for global objects to avoid shape mutations
    global: O,
    globalThis: O,
    self: O,
    window: O,
    // Common globals
    __proto__: null,
    [ValueProperties]: IMPURE,
    Array: {
        __proto__: null,
        [ValueProperties]: IMPURE,
        from: O,
        isArray: PF,
        of: PF,
        prototype: O
    },
    ArrayBuffer: {
        __proto__: null,
        [ValueProperties]: PURE,
        isView: PF,
        prototype: O
    },
    AggregateError: PC_WITH_ARRAY,
    Atomics: O,
    BigInt: C,
    BigInt64Array: C,
    BigUint64Array: C,
    Boolean: PC,
    constructor: C,
    DataView: PC,
    Date: {
        __proto__: null,
        [ValueProperties]: PURE,
        now: PF,
        parse: PF,
        prototype: O,
        UTC: PF
    },
    decodeURI: PF,
    decodeURIComponent: PF,
    encodeURI: PF,
    encodeURIComponent: PF,
    Error: PC,
    escape: PF,
    eval: O,
    EvalError: PC,
    FinalizationRegistry: C,
    Float32Array: ARRAY_TYPE,
    Float64Array: ARRAY_TYPE,
    Function: C,
    hasOwnProperty: O,
    Infinity: O,
    Int16Array: ARRAY_TYPE,
    Int32Array: ARRAY_TYPE,
    Int8Array: ARRAY_TYPE,
    isFinite: PF,
    isNaN: PF,
    isPrototypeOf: O,
    JSON: O,
    Map: PC_WITH_ARRAY,
    Math: {
        __proto__: null,
        [ValueProperties]: IMPURE,
        abs: PF,
        acos: PF,
        acosh: PF,
        asin: PF,
        asinh: PF,
        atan: PF,
        atan2: PF,
        atanh: PF,
        cbrt: PF,
        ceil: PF,
        clz32: PF,
        cos: PF,
        cosh: PF,
        exp: PF,
        expm1: PF,
        floor: PF,
        fround: PF,
        hypot: PF,
        imul: PF,
        log: PF,
        log10: PF,
        log1p: PF,
        log2: PF,
        max: PF,
        min: PF,
        pow: PF,
        random: PF,
        round: PF,
        sign: PF,
        sin: PF,
        sinh: PF,
        sqrt: PF,
        tan: PF,
        tanh: PF,
        trunc: PF
    },
    NaN: O,
    Number: {
        __proto__: null,
        [ValueProperties]: PURE,
        isFinite: PF,
        isInteger: PF,
        isNaN: PF,
        isSafeInteger: PF,
        parseFloat: PF,
        parseInt: PF,
        prototype: O
    },
    Object: {
        __proto__: null,
        [ValueProperties]: PURE,
        create: PF,
        // Technically those can throw in certain situations, but we ignore this as
        // code that relies on this will hopefully wrap this in a try-catch, which
        // deoptimizes everything anyway
        defineProperty: MUTATES_ARG_WITHOUT_ACCESSOR,
        defineProperties: MUTATES_ARG_WITHOUT_ACCESSOR,
        freeze: MUTATES_ARG_WITHOUT_ACCESSOR,
        getOwnPropertyDescriptor: PF,
        getOwnPropertyDescriptors: PF,
        getOwnPropertyNames: PF,
        getOwnPropertySymbols: PF,
        getPrototypeOf: PF,
        hasOwn: PF,
        is: PF,
        isExtensible: PF,
        isFrozen: PF,
        isSealed: PF,
        keys: PF,
        fromEntries: O,
        entries: PF_NO_GETTER,
        values: PF_NO_GETTER,
        prototype: O
    },
    parseFloat: PF,
    parseInt: PF,
    Promise: {
        __proto__: null,
        [ValueProperties]: IMPURE,
        all: O,
        allSettled: O,
        any: O,
        prototype: O,
        race: O,
        reject: O,
        resolve: O
    },
    propertyIsEnumerable: O,
    Proxy: {
        __proto__: null,
        [ValueProperties]: {
            deoptimizeArgumentsOnCall: ({ args: [, target, parameter] }) => {
                if (isObjectExpressionNode(parameter)) {
                    const hasSpreadElement = parameter.properties.some(property => !isPropertyNode(property));
                    if (!hasSpreadElement) {
                        for (const property of parameter.properties) {
                            property.deoptimizeArgumentsOnInteractionAtPath({
                                args: [null, target],
                                type: INTERACTION_CALLED,
                                withNew: false
                            }, EMPTY_PATH, SHARED_RECURSION_TRACKER);
                        }
                        return;
                    }
                }
                target.deoptimizePath(UNKNOWN_PATH);
            },
            getLiteralValue: getUnknownValue,
            hasEffectsWhenCalled: returnTrue
        }
    },
    RangeError: PC,
    ReferenceError: PC,
    Reflect: O,
    RegExp: PC,
    Set: PC_WITH_ARRAY,
    SharedArrayBuffer: C,
    String: {
        __proto__: null,
        [ValueProperties]: PURE,
        fromCharCode: PF,
        fromCodePoint: PF,
        prototype: O,
        raw: PF
    },
    Symbol: {
        __proto__: null,
        [ValueProperties]: PURE,
        for: PF,
        keyFor: PF,
        prototype: O,
        asyncDispose: getWellKnownSymbol(SymbolAsyncDispose),
        dispose: getWellKnownSymbol(SymbolDispose),
        hasInstance: getWellKnownSymbol(SymbolHasInstance),
        toStringTag: getWellKnownSymbol(SymbolToStringTag)
    },
    SyntaxError: PC,
    toLocaleString: O,
    toString: O,
    TypeError: PC,
    Uint16Array: ARRAY_TYPE,
    Uint32Array: ARRAY_TYPE,
    Uint8Array: ARRAY_TYPE,
    Uint8ClampedArray: ARRAY_TYPE,
    // Technically, this is a global, but it needs special handling
    // undefined: ?,
    unescape: PF,
    URIError: PC,
    valueOf: O,
    WeakMap: PC_WITH_ARRAY,
    WeakRef: C,
    WeakSet: PC_WITH_ARRAY,
    // Additional globals shared by Node and Browser that are not strictly part of the language
    clearInterval: C,
    clearTimeout: C,
    console: {
        __proto__: null,
        [ValueProperties]: IMPURE,
        assert: C,
        clear: C,
        count: C,
        countReset: C,
        debug: C,
        dir: C,
        dirxml: C,
        error: C,
        exception: C,
        group: C,
        groupCollapsed: C,
        groupEnd: C,
        info: C,
        log: C,
        table: C,
        time: C,
        timeEnd: C,
        timeLog: C,
        trace: C,
        warn: C
    },
    Intl: {
        __proto__: null,
        [ValueProperties]: IMPURE,
        Collator: INTL_MEMBER,
        DateTimeFormat: INTL_MEMBER,
        DisplayNames: INTL_MEMBER,
        ListFormat: INTL_MEMBER,
        Locale: INTL_MEMBER,
        NumberFormat: INTL_MEMBER,
        PluralRules: INTL_MEMBER,
        RelativeTimeFormat: INTL_MEMBER,
        Segmenter: INTL_MEMBER
    },
    setInterval: C,
    setTimeout: C,
    TextDecoder: C,
    TextEncoder: C,
    URL: {
        __proto__: null,
        [ValueProperties]: IMPURE,
        prototype: O,
        canParse: PF
    },
    URLSearchParams: C,
    // Browser specific globals
    AbortController: C,
    AbortSignal: C,
    addEventListener: O,
    alert: O,
    AnalyserNode: C,
    Animation: C,
    AnimationEvent: C,
    applicationCache: O,
    ApplicationCache: C,
    ApplicationCacheErrorEvent: C,
    atob: O,
    Attr: C,
    Audio: C,
    AudioBuffer: C,
    AudioBufferSourceNode: C,
    AudioContext: C,
    AudioDestinationNode: C,
    AudioListener: C,
    AudioNode: C,
    AudioParam: C,
    AudioProcessingEvent: C,
    AudioScheduledSourceNode: C,
    AudioWorkletNode: C,
    BarProp: C,
    BaseAudioContext: C,
    BatteryManager: C,
    BeforeUnloadEvent: C,
    BiquadFilterNode: C,
    Blob: C,
    BlobEvent: C,
    blur: O,
    BroadcastChannel: C,
    btoa: O,
    ByteLengthQueuingStrategy: C,
    Cache: C,
    caches: O,
    CacheStorage: C,
    cancelAnimationFrame: O,
    cancelIdleCallback: O,
    CanvasCaptureMediaStreamTrack: C,
    CanvasGradient: C,
    CanvasPattern: C,
    CanvasRenderingContext2D: C,
    ChannelMergerNode: C,
    ChannelSplitterNode: C,
    CharacterData: C,
    clientInformation: O,
    ClipboardEvent: C,
    close: O,
    closed: O,
    CloseEvent: C,
    Comment: C,
    CompositionEvent: C,
    confirm: O,
    ConstantSourceNode: C,
    ConvolverNode: C,
    CountQueuingStrategy: C,
    createImageBitmap: O,
    Credential: C,
    CredentialsContainer: C,
    crypto: O,
    Crypto: C,
    CryptoKey: C,
    CSS: C,
    CSSConditionRule: C,
    CSSFontFaceRule: C,
    CSSGroupingRule: C,
    CSSImportRule: C,
    CSSKeyframeRule: C,
    CSSKeyframesRule: C,
    CSSMediaRule: C,
    CSSNamespaceRule: C,
    CSSPageRule: C,
    CSSRule: C,
    CSSRuleList: C,
    CSSStyleDeclaration: C,
    CSSStyleRule: C,
    CSSStyleSheet: C,
    CSSSupportsRule: C,
    CustomElementRegistry: C,
    customElements: O,
    CustomEvent: {
        __proto__: null,
        [ValueProperties]: {
            deoptimizeArgumentsOnCall({ args }) {
                args[2]?.deoptimizePath(['detail']);
            },
            getLiteralValue: getUnknownValue,
            hasEffectsWhenCalled: returnFalse
        },
        prototype: O
    },
    DataTransfer: C,
    DataTransferItem: C,
    DataTransferItemList: C,
    defaultstatus: O,
    defaultStatus: O,
    DelayNode: C,
    DeviceMotionEvent: C,
    DeviceOrientationEvent: C,
    devicePixelRatio: O,
    dispatchEvent: O,
    document: O,
    Document: C,
    DocumentFragment: C,
    DocumentType: C,
    DOMError: C,
    DOMException: C,
    DOMImplementation: C,
    DOMMatrix: C,
    DOMMatrixReadOnly: C,
    DOMParser: C,
    DOMPoint: C,
    DOMPointReadOnly: C,
    DOMQuad: C,
    DOMRect: C,
    DOMRectReadOnly: C,
    DOMStringList: C,
    DOMStringMap: C,
    DOMTokenList: C,
    DragEvent: C,
    DynamicsCompressorNode: C,
    Element: C,
    ErrorEvent: C,
    Event: C,
    EventSource: C,
    EventTarget: C,
    external: O,
    fetch: O,
    File: C,
    FileList: C,
    FileReader: C,
    find: O,
    focus: O,
    FocusEvent: C,
    FontFace: C,
    FontFaceSetLoadEvent: C,
    FormData: C,
    frames: O,
    GainNode: C,
    Gamepad: C,
    GamepadButton: C,
    GamepadEvent: C,
    getComputedStyle: O,
    getSelection: O,
    HashChangeEvent: C,
    Headers: C,
    history: O,
    History: C,
    HTMLAllCollection: C,
    HTMLAnchorElement: C,
    HTMLAreaElement: C,
    HTMLAudioElement: C,
    HTMLBaseElement: C,
    HTMLBodyElement: C,
    HTMLBRElement: C,
    HTMLButtonElement: C,
    HTMLCanvasElement: C,
    HTMLCollection: C,
    HTMLContentElement: C,
    HTMLDataElement: C,
    HTMLDataListElement: C,
    HTMLDetailsElement: C,
    HTMLDialogElement: C,
    HTMLDirectoryElement: C,
    HTMLDivElement: C,
    HTMLDListElement: C,
    HTMLDocument: C,
    HTMLElement: C,
    HTMLEmbedElement: C,
    HTMLFieldSetElement: C,
    HTMLFontElement: C,
    HTMLFormControlsCollection: C,
    HTMLFormElement: C,
    HTMLFrameElement: C,
    HTMLFrameSetElement: C,
    HTMLHeadElement: C,
    HTMLHeadingElement: C,
    HTMLHRElement: C,
    HTMLHtmlElement: C,
    HTMLIFrameElement: C,
    HTMLImageElement: C,
    HTMLInputElement: C,
    HTMLLabelElement: C,
    HTMLLegendElement: C,
    HTMLLIElement: C,
    HTMLLinkElement: C,
    HTMLMapElement: C,
    HTMLMarqueeElement: C,
    HTMLMediaElement: C,
    HTMLMenuElement: C,
    HTMLMetaElement: C,
    HTMLMeterElement: C,
    HTMLModElement: C,
    HTMLObjectElement: C,
    HTMLOListElement: C,
    HTMLOptGroupElement: C,
    HTMLOptionElement: C,
    HTMLOptionsCollection: C,
    HTMLOutputElement: C,
    HTMLParagraphElement: C,
    HTMLParamElement: C,
    HTMLPictureElement: C,
    HTMLPreElement: C,
    HTMLProgressElement: C,
    HTMLQuoteElement: C,
    HTMLScriptElement: C,
    HTMLSelectElement: C,
    HTMLShadowElement: C,
    HTMLSlotElement: C,
    HTMLSourceElement: C,
    HTMLSpanElement: C,
    HTMLStyleElement: C,
    HTMLTableCaptionElement: C,
    HTMLTableCellElement: C,
    HTMLTableColElement: C,
    HTMLTableElement: C,
    HTMLTableRowElement: C,
    HTMLTableSectionElement: C,
    HTMLTemplateElement: C,
    HTMLTextAreaElement: C,
    HTMLTimeElement: C,
    HTMLTitleElement: C,
    HTMLTrackElement: C,
    HTMLUListElement: C,
    HTMLUnknownElement: C,
    HTMLVideoElement: C,
    IDBCursor: C,
    IDBCursorWithValue: C,
    IDBDatabase: C,
    IDBFactory: C,
    IDBIndex: C,
    IDBKeyRange: C,
    IDBObjectStore: C,
    IDBOpenDBRequest: C,
    IDBRequest: C,
    IDBTransaction: C,
    IDBVersionChangeEvent: C,
    IdleDeadline: C,
    IIRFilterNode: C,
    Image: C,
    ImageBitmap: C,
    ImageBitmapRenderingContext: C,
    ImageCapture: C,
    ImageData: C,
    indexedDB: O,
    innerHeight: O,
    innerWidth: O,
    InputEvent: C,
    IntersectionObserver: C,
    IntersectionObserverEntry: C,
    isSecureContext: O,
    KeyboardEvent: C,
    KeyframeEffect: C,
    length: O,
    localStorage: O,
    location: O,
    Location: C,
    locationbar: O,
    matchMedia: O,
    MediaDeviceInfo: C,
    MediaDevices: C,
    MediaElementAudioSourceNode: C,
    MediaEncryptedEvent: C,
    MediaError: C,
    MediaKeyMessageEvent: C,
    MediaKeySession: C,
    MediaKeyStatusMap: C,
    MediaKeySystemAccess: C,
    MediaList: C,
    MediaQueryList: C,
    MediaQueryListEvent: C,
    MediaRecorder: C,
    MediaSettingsRange: C,
    MediaSource: C,
    MediaStream: C,
    MediaStreamAudioDestinationNode: C,
    MediaStreamAudioSourceNode: C,
    MediaStreamEvent: C,
    MediaStreamTrack: C,
    MediaStreamTrackEvent: C,
    menubar: O,
    MessageChannel: C,
    MessageEvent: C,
    MessagePort: C,
    MIDIAccess: C,
    MIDIConnectionEvent: C,
    MIDIInput: C,
    MIDIInputMap: C,
    MIDIMessageEvent: C,
    MIDIOutput: C,
    MIDIOutputMap: C,
    MIDIPort: C,
    MimeType: C,
    MimeTypeArray: C,
    MouseEvent: C,
    moveBy: O,
    moveTo: O,
    MutationEvent: C,
    MutationObserver: C,
    MutationRecord: C,
    name: O,
    NamedNodeMap: C,
    NavigationPreloadManager: C,
    navigator: O,
    Navigator: C,
    NetworkInformation: C,
    Node: C,
    NodeFilter: O,
    NodeIterator: C,
    NodeList: C,
    Notification: C,
    OfflineAudioCompletionEvent: C,
    OfflineAudioContext: C,
    offscreenBuffering: O,
    OffscreenCanvas: C,
    open: O,
    openDatabase: O,
    Option: C,
    origin: O,
    OscillatorNode: C,
    outerHeight: O,
    outerWidth: O,
    PageTransitionEvent: C,
    pageXOffset: O,
    pageYOffset: O,
    PannerNode: C,
    parent: O,
    Path2D: C,
    PaymentAddress: C,
    PaymentRequest: C,
    PaymentRequestUpdateEvent: C,
    PaymentResponse: C,
    performance: O,
    Performance: C,
    PerformanceEntry: C,
    PerformanceLongTaskTiming: C,
    PerformanceMark: C,
    PerformanceMeasure: C,
    PerformanceNavigation: C,
    PerformanceNavigationTiming: C,
    PerformanceObserver: C,
    PerformanceObserverEntryList: C,
    PerformancePaintTiming: C,
    PerformanceResourceTiming: C,
    PerformanceTiming: C,
    PeriodicWave: C,
    Permissions: C,
    PermissionStatus: C,
    personalbar: O,
    PhotoCapabilities: C,
    Plugin: C,
    PluginArray: C,
    PointerEvent: C,
    PopStateEvent: C,
    postMessage: O,
    Presentation: C,
    PresentationAvailability: C,
    PresentationConnection: C,
    PresentationConnectionAvailableEvent: C,
    PresentationConnectionCloseEvent: C,
    PresentationConnectionList: C,
    PresentationReceiver: C,
    PresentationRequest: C,
    print: O,
    ProcessingInstruction: C,
    ProgressEvent: C,
    PromiseRejectionEvent: C,
    prompt: O,
    PushManager: C,
    PushSubscription: C,
    PushSubscriptionOptions: C,
    queueMicrotask: O,
    RadioNodeList: C,
    Range: C,
    ReadableStream: C,
    RemotePlayback: C,
    removeEventListener: O,
    Request: C,
    requestAnimationFrame: O,
    requestIdleCallback: O,
    resizeBy: O,
    ResizeObserver: C,
    ResizeObserverEntry: C,
    resizeTo: O,
    Response: C,
    RTCCertificate: C,
    RTCDataChannel: C,
    RTCDataChannelEvent: C,
    RTCDtlsTransport: C,
    RTCIceCandidate: C,
    RTCIceTransport: C,
    RTCPeerConnection: C,
    RTCPeerConnectionIceEvent: C,
    RTCRtpReceiver: C,
    RTCRtpSender: C,
    RTCSctpTransport: C,
    RTCSessionDescription: C,
    RTCStatsReport: C,
    RTCTrackEvent: C,
    screen: O,
    Screen: C,
    screenLeft: O,
    ScreenOrientation: C,
    screenTop: O,
    screenX: O,
    screenY: O,
    ScriptProcessorNode: C,
    scroll: O,
    scrollbars: O,
    scrollBy: O,
    scrollTo: O,
    scrollX: O,
    scrollY: O,
    SecurityPolicyViolationEvent: C,
    Selection: C,
    ServiceWorker: C,
    ServiceWorkerContainer: C,
    ServiceWorkerRegistration: C,
    sessionStorage: O,
    ShadowRoot: C,
    SharedWorker: C,
    SourceBuffer: C,
    SourceBufferList: C,
    speechSynthesis: O,
    SpeechSynthesisEvent: C,
    SpeechSynthesisUtterance: C,
    StaticRange: C,
    status: O,
    statusbar: O,
    StereoPannerNode: C,
    stop: O,
    Storage: C,
    StorageEvent: C,
    StorageManager: C,
    styleMedia: O,
    StyleSheet: C,
    StyleSheetList: C,
    SubtleCrypto: C,
    SVGAElement: C,
    SVGAngle: C,
    SVGAnimatedAngle: C,
    SVGAnimatedBoolean: C,
    SVGAnimatedEnumeration: C,
    SVGAnimatedInteger: C,
    SVGAnimatedLength: C,
    SVGAnimatedLengthList: C,
    SVGAnimatedNumber: C,
    SVGAnimatedNumberList: C,
    SVGAnimatedPreserveAspectRatio: C,
    SVGAnimatedRect: C,
    SVGAnimatedString: C,
    SVGAnimatedTransformList: C,
    SVGAnimateElement: C,
    SVGAnimateMotionElement: C,
    SVGAnimateTransformElement: C,
    SVGAnimationElement: C,
    SVGCircleElement: C,
    SVGClipPathElement: C,
    SVGComponentTransferFunctionElement: C,
    SVGDefsElement: C,
    SVGDescElement: C,
    SVGDiscardElement: C,
    SVGElement: C,
    SVGEllipseElement: C,
    SVGFEBlendElement: C,
    SVGFEColorMatrixElement: C,
    SVGFEComponentTransferElement: C,
    SVGFECompositeElement: C,
    SVGFEConvolveMatrixElement: C,
    SVGFEDiffuseLightingElement: C,
    SVGFEDisplacementMapElement: C,
    SVGFEDistantLightElement: C,
    SVGFEDropShadowElement: C,
    SVGFEFloodElement: C,
    SVGFEFuncAElement: C,
    SVGFEFuncBElement: C,
    SVGFEFuncGElement: C,
    SVGFEFuncRElement: C,
    SVGFEGaussianBlurElement: C,
    SVGFEImageElement: C,
    SVGFEMergeElement: C,
    SVGFEMergeNodeElement: C,
    SVGFEMorphologyElement: C,
    SVGFEOffsetElement: C,
    SVGFEPointLightElement: C,
    SVGFESpecularLightingElement: C,
    SVGFESpotLightElement: C,
    SVGFETileElement: C,
    SVGFETurbulenceElement: C,
    SVGFilterElement: C,
    SVGForeignObjectElement: C,
    SVGGElement: C,
    SVGGeometryElement: C,
    SVGGradientElement: C,
    SVGGraphicsElement: C,
    SVGImageElement: C,
    SVGLength: C,
    SVGLengthList: C,
    SVGLinearGradientElement: C,
    SVGLineElement: C,
    SVGMarkerElement: C,
    SVGMaskElement: C,
    SVGMatrix: C,
    SVGMetadataElement: C,
    SVGMPathElement: C,
    SVGNumber: C,
    SVGNumberList: C,
    SVGPathElement: C,
    SVGPatternElement: C,
    SVGPoint: C,
    SVGPointList: C,
    SVGPolygonElement: C,
    SVGPolylineElement: C,
    SVGPreserveAspectRatio: C,
    SVGRadialGradientElement: C,
    SVGRect: C,
    SVGRectElement: C,
    SVGScriptElement: C,
    SVGSetElement: C,
    SVGStopElement: C,
    SVGStringList: C,
    SVGStyleElement: C,
    SVGSVGElement: C,
    SVGSwitchElement: C,
    SVGSymbolElement: C,
    SVGTextContentElement: C,
    SVGTextElement: C,
    SVGTextPathElement: C,
    SVGTextPositioningElement: C,
    SVGTitleElement: C,
    SVGTransform: C,
    SVGTransformList: C,
    SVGTSpanElement: C,
    SVGUnitTypes: C,
    SVGUseElement: C,
    SVGViewElement: C,
    TaskAttributionTiming: C,
    Text: C,
    TextEvent: C,
    TextMetrics: C,
    TextTrack: C,
    TextTrackCue: C,
    TextTrackCueList: C,
    TextTrackList: C,
    TimeRanges: C,
    toolbar: O,
    top: O,
    Touch: C,
    TouchEvent: C,
    TouchList: C,
    TrackEvent: C,
    TransitionEvent: C,
    TreeWalker: C,
    UIEvent: C,
    ValidityState: C,
    visualViewport: O,
    VisualViewport: C,
    VTTCue: C,
    WaveShaperNode: C,
    WebAssembly: O,
    WebGL2RenderingContext: C,
    WebGLActiveInfo: C,
    WebGLBuffer: C,
    WebGLContextEvent: C,
    WebGLFramebuffer: C,
    WebGLProgram: C,
    WebGLQuery: C,
    WebGLRenderbuffer: C,
    WebGLRenderingContext: C,
    WebGLSampler: C,
    WebGLShader: C,
    WebGLShaderPrecisionFormat: C,
    WebGLSync: C,
    WebGLTexture: C,
    WebGLTransformFeedback: C,
    WebGLUniformLocation: C,
    WebGLVertexArrayObject: C,
    WebSocket: C,
    WheelEvent: C,
    Window: C,
    Worker: C,
    WritableStream: C,
    XMLDocument: C,
    XMLHttpRequest: C,
    XMLHttpRequestEventTarget: C,
    XMLHttpRequestUpload: C,
    XMLSerializer: C,
    XPathEvaluator: C,
    XPathExpression: C,
    XPathResult: C,
    XSLTProcessor: C
};
for (const global of ['window', 'global', 'self', 'globalThis']) {
    knownGlobals[global] = knownGlobals;
}
function getGlobalAtPath(path) {
    let currentGlobal = knownGlobals;
    for (const pathSegment of path) {
        if (typeof pathSegment !== 'string') {
            return null;
        }
        currentGlobal = currentGlobal[pathSegment];
        if (!currentGlobal) {
            // Well-known symbols very often have a complex meaning and are invoked implicitly by the language.
            // Resolve them to a special value so they can be distinguished and excluded from treeshaking.
            return path[0] === 'Symbol' && path.length === 2 ? UNKNOWN_WELL_KNOWN : null;
        }
    }
    return currentGlobal[ValueProperties];
}

class GlobalVariable extends Variable {
    constructor(name) {
        super(name);
        // Ensure we use live-bindings for globals as we do not know if they have
        // been reassigned
        this.markReassigned();
    }
    deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker) {
        switch (interaction.type) {
            // While there is no point in testing these cases as at the moment, they
            // are also covered via other means, we keep them for completeness
            case INTERACTION_ACCESSED:
            case INTERACTION_ASSIGNED: {
                if (!getGlobalAtPath([this.name, ...path].slice(0, -1))) {
                    super.deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker);
                }
                return;
            }
            case INTERACTION_CALLED: {
                const globalAtPath = getGlobalAtPath([this.name, ...path]);
                if (globalAtPath) {
                    globalAtPath.deoptimizeArgumentsOnCall(interaction);
                }
                else {
                    super.deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker);
                }
                return;
            }
        }
    }
    getLiteralValueAtPath(path, _recursionTracker, _origin) {
        const globalAtPath = getGlobalAtPath([this.name, ...path]);
        return globalAtPath ? globalAtPath.getLiteralValue() : UnknownValue;
    }
    hasEffectsOnInteractionAtPath(path, interaction, context) {
        switch (interaction.type) {
            case INTERACTION_ACCESSED: {
                if (path.length === 0) {
                    // Technically, "undefined" is a global variable of sorts
                    return this.name !== 'undefined' && !getGlobalAtPath([this.name]);
                }
                return !getGlobalAtPath([this.name, ...path].slice(0, -1));
            }
            case INTERACTION_ASSIGNED: {
                return true;
            }
            case INTERACTION_CALLED: {
                const globalAtPath = getGlobalAtPath([this.name, ...path]);
                return !globalAtPath || globalAtPath.hasEffectsWhenCalled(interaction, context);
            }
        }
    }
}

// To avoid infinite recursions
const MAX_PATH_DEPTH = 6;
// If a path is longer than MAX_PATH_DEPTH, it is truncated so that it is at
// most MAX_PATH_DEPTH long. The last element is always UnknownKey
const limitConcatenatedPathDepth = (path1, path2) => {
    const { length: length1 } = path1;
    const { length: length2 } = path2;
    return length1 === 0
        ? path2
        : length2 === 0
            ? path1
            : length1 + length2 > MAX_PATH_DEPTH
                ? [...path1, ...path2.slice(0, MAX_PATH_DEPTH - 1 - path1.length), 'UnknownKey']
                : [...path1, ...path2];
};

class LocalVariable extends Variable {
    constructor(name, declarator, init, 
    /** if this is non-empty, the actual init is this path of this.init */
    initPath, context, kind) {
        super(name);
        this.init = init;
        this.initPath = initPath;
        this.kind = kind;
        this.calledFromTryStatement = false;
        this.additionalInitializers = null;
        this.includedPathTracker = new IncludedFullPathTracker();
        this.expressionsToBeDeoptimized = [];
        this.declarations = declarator ? [declarator] : [];
        this.deoptimizationTracker = context.deoptimizationTracker;
        this.module = context.module;
    }
    addDeclaration(identifier, init) {
        this.declarations.push(identifier);
        this.markInitializersForDeoptimization().push(init);
    }
    consolidateInitializers() {
        if (this.additionalInitializers) {
            for (const initializer of this.additionalInitializers) {
                initializer.deoptimizePath(UNKNOWN_PATH);
            }
        }
    }
    deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker) {
        if (this.isReassigned || path.length + this.initPath.length > MAX_PATH_DEPTH) {
            deoptimizeInteraction(interaction);
            return;
        }
        recursionTracker.withTrackedEntityAtPath(path, this.init, () => {
            this.init.deoptimizeArgumentsOnInteractionAtPath(interaction, [...this.initPath, ...path], recursionTracker);
        }, undefined);
    }
    deoptimizePath(path) {
        if (this.isReassigned ||
            this.deoptimizationTracker.trackEntityAtPathAndGetIfTracked(path, this)) {
            return;
        }
        if (path.length === 0) {
            this.markReassigned();
            const expressionsToBeDeoptimized = this.expressionsToBeDeoptimized;
            this.expressionsToBeDeoptimized = parseAst_js.EMPTY_ARRAY;
            for (const expression of expressionsToBeDeoptimized) {
                expression.deoptimizeCache();
            }
            this.init.deoptimizePath([...this.initPath, UnknownKey]);
        }
        else {
            this.init.deoptimizePath(limitConcatenatedPathDepth(this.initPath, path));
        }
    }
    getLiteralValueAtPath(path, recursionTracker, origin) {
        if (this.isReassigned || path.length + this.initPath.length > MAX_PATH_DEPTH) {
            return UnknownValue;
        }
        return recursionTracker.withTrackedEntityAtPath(path, this.init, () => {
            this.expressionsToBeDeoptimized.push(origin);
            return this.init.getLiteralValueAtPath([...this.initPath, ...path], recursionTracker, origin);
        }, UnknownValue);
    }
    getReturnExpressionWhenCalledAtPath(path, interaction, recursionTracker, origin) {
        if (this.isReassigned || path.length + this.initPath.length > MAX_PATH_DEPTH) {
            return UNKNOWN_RETURN_EXPRESSION;
        }
        return recursionTracker.withTrackedEntityAtPath(path, this.init, () => {
            this.expressionsToBeDeoptimized.push(origin);
            return this.init.getReturnExpressionWhenCalledAtPath([...this.initPath, ...path], interaction, recursionTracker, origin);
        }, UNKNOWN_RETURN_EXPRESSION);
    }
    hasEffectsOnInteractionAtPath(path, interaction, context) {
        if (path.length + this.initPath.length > MAX_PATH_DEPTH) {
            return true;
        }
        switch (interaction.type) {
            case INTERACTION_ACCESSED: {
                if (this.isReassigned)
                    return true;
                return (!context.accessed.trackEntityAtPathAndGetIfTracked(path, this) &&
                    this.init.hasEffectsOnInteractionAtPath([...this.initPath, ...path], interaction, context));
            }
            case INTERACTION_ASSIGNED: {
                if (this.included)
                    return true;
                if (path.length === 0)
                    return false;
                // if (this.isReassigned || this.init.included) return true;
                if (this.isReassigned)
                    return true;
                return (!context.assigned.trackEntityAtPathAndGetIfTracked(path, this) &&
                    this.init.hasEffectsOnInteractionAtPath([...this.initPath, ...path], interaction, context));
            }
            case INTERACTION_CALLED: {
                if (this.isReassigned)
                    return true;
                return (!(interaction.withNew ? context.instantiated : context.called).trackEntityAtPathAndGetIfTracked(path, interaction.args, this) &&
                    this.init.hasEffectsOnInteractionAtPath([...this.initPath, ...path], interaction, context));
            }
        }
    }
    includePath(path, context) {
        if (!this.includedPathTracker.includePathAndGetIfIncluded(path)) {
            this.module.scope.context.requestTreeshakingPass();
            if (!this.included) {
                // This will reduce the number of tree-shaking passes by eagerly
                // including inits. By pushing this here instead of directly including
                // we avoid deep call stacks.
                this.module.scope.context.newlyIncludedVariableInits.add(this.init);
            }
            super.includePath(path, context);
            for (const declaration of this.declarations) {
                // If node is a default export, it can save a tree-shaking run to include the full declaration now
                if (!declaration.included)
                    declaration.include(context, false);
                let node = declaration.parent;
                while (!node.included) {
                    // We do not want to properly include parents in case they are part of a dead branch
                    // in which case .include() might pull in more dead code
                    node.includeNode(context);
                    if (node.type === parseAst_js.Program)
                        break;
                    node = node.parent;
                }
            }
            // We need to make sure we include the correct path of the init
            if (path.length > 0) {
                this.init.includePath(limitConcatenatedPathDepth(this.initPath, path), context);
                this.additionalInitializers?.forEach(initializer => initializer.includePath(UNKNOWN_PATH, context));
            }
        }
    }
    includeCallArguments(interaction, context) {
        if (this.isReassigned ||
            context.includedCallArguments.has(this.init) ||
            // This can be removed again once we can include arguments when called at
            // a specific path
            this.initPath.length > 0) {
            includeInteraction(interaction, context);
        }
        else {
            context.includedCallArguments.add(this.init);
            this.init.includeCallArguments(interaction, context);
            context.includedCallArguments.delete(this.init);
        }
    }
    markCalledFromTryStatement() {
        this.calledFromTryStatement = true;
    }
    markInitializersForDeoptimization() {
        if (this.additionalInitializers === null) {
            this.additionalInitializers = [this.init];
            this.init = UNKNOWN_EXPRESSION;
            this.markReassigned();
        }
        return this.additionalInitializers;
    }
}

const tdzVariableKinds = new Set(['class', 'const', 'let', 'var', 'using', 'await using']);
class IdentifierBase extends NodeBase {
    constructor() {
        super(...arguments);
        this.variable = null;
        this.isVariableReference = false;
    }
    get isTDZAccess() {
        if (!isFlagSet(this.flags, 4 /* Flag.tdzAccessDefined */)) {
            return null;
        }
        return isFlagSet(this.flags, 8 /* Flag.tdzAccess */);
    }
    set isTDZAccess(value) {
        this.flags = setFlag(this.flags, 4 /* Flag.tdzAccessDefined */, true);
        this.flags = setFlag(this.flags, 8 /* Flag.tdzAccess */, value);
    }
    deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker) {
        this.variable.deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker);
    }
    deoptimizePath(path) {
        if (path.length === 0 && !this.scope.contains(this.name)) {
            this.disallowImportReassignment();
        }
        // We keep conditional chaining because an unknown Node could have an
        // Identifier as property that might be deoptimized by default
        this.variable?.deoptimizePath(path);
    }
    getLiteralValueAtPath(path, recursionTracker, origin) {
        return this.getVariableRespectingTDZ().getLiteralValueAtPath(path, recursionTracker, origin);
    }
    getReturnExpressionWhenCalledAtPath(path, interaction, recursionTracker, origin) {
        const [expression, isPure] = this.getVariableRespectingTDZ().getReturnExpressionWhenCalledAtPath(path, interaction, recursionTracker, origin);
        return [expression, isPure || this.isPureFunction(path)];
    }
    hasEffects(context) {
        if (!this.deoptimized)
            this.applyDeoptimizations();
        if (this.isPossibleTDZ() && this.variable.kind !== 'var') {
            return true;
        }
        return (this.scope.context.options.treeshake
            .unknownGlobalSideEffects &&
            this.variable instanceof GlobalVariable &&
            !this.isPureFunction(EMPTY_PATH) &&
            this.variable.hasEffectsOnInteractionAtPath(EMPTY_PATH, NODE_INTERACTION_UNKNOWN_ACCESS, context));
    }
    hasEffectsOnInteractionAtPath(path, interaction, context) {
        switch (interaction.type) {
            case INTERACTION_ACCESSED: {
                return (this.variable !== null &&
                    !this.isPureFunction(path) &&
                    this.getVariableRespectingTDZ().hasEffectsOnInteractionAtPath(path, interaction, context));
            }
            case INTERACTION_ASSIGNED: {
                return (path.length > 0 ? this.getVariableRespectingTDZ() : this.variable).hasEffectsOnInteractionAtPath(path, interaction, context);
            }
            case INTERACTION_CALLED: {
                return (!this.isPureFunction(path) &&
                    this.getVariableRespectingTDZ().hasEffectsOnInteractionAtPath(path, interaction, context));
            }
        }
    }
    include(context, includeChildrenRecursively) {
        if (!this.included)
            this.includeNode(context);
        if (includeChildrenRecursively) {
            this.variable?.includePath(UNKNOWN_PATH, context);
        }
    }
    includeNode(context) {
        this.included = true;
        if (!this.deoptimized)
            this.applyDeoptimizations();
        if (this.variable !== null) {
            this.scope.context.includeVariableInModule(this.variable, EMPTY_PATH, context);
        }
    }
    includePath(path, context) {
        if (!this.included) {
            this.included = true;
            if (!this.deoptimized)
                this.applyDeoptimizations();
            if (this.variable !== null) {
                this.scope.context.includeVariableInModule(this.variable, path, context);
            }
        }
        else if (path.length > 0) {
            this.variable?.includePath(path, context);
        }
    }
    includeCallArguments(interaction, context) {
        this.variable.includeCallArguments(interaction, context);
    }
    isPossibleTDZ() {
        // return cached value to avoid issues with the next tree-shaking pass
        const cachedTdzAccess = this.isTDZAccess;
        if (cachedTdzAccess !== null)
            return cachedTdzAccess;
        if (!(this.variable instanceof LocalVariable &&
            this.variable.kind &&
            tdzVariableKinds.has(this.variable.kind) &&
            // We ignore modules that did not receive a treeshaking pass yet as that
            // causes many false positives due to circular dependencies or disabled
            // moduleSideEffects.
            this.variable.module.hasTreeShakingPassStarted)) {
            return (this.isTDZAccess = false);
        }
        let decl_id;
        if (this.variable.declarations &&
            this.variable.declarations.length === 1 &&
            (decl_id = this.variable.declarations[0]) &&
            this.start < decl_id.start &&
            closestParentFunctionOrProgram(this) === closestParentFunctionOrProgram(decl_id)) {
            // a variable accessed before its declaration
            // in the same function or at top level of module
            return (this.isTDZAccess = true);
        }
        if (!this.variable.initReached) {
            // Either a const/let TDZ violation or
            // var use before declaration was encountered.
            return (this.isTDZAccess = true);
        }
        return (this.isTDZAccess = false);
    }
    applyDeoptimizations() {
        this.deoptimized = true;
        if (this.variable instanceof LocalVariable) {
            // When accessing a variable from a module without side effects, this
            // means we use an export of that module and therefore need to potentially
            // include it in the bundle.
            if (!this.variable.module.isExecuted) {
                markModuleAndImpureDependenciesAsExecuted(this.variable.module);
            }
            this.variable.consolidateInitializers();
            this.scope.context.requestTreeshakingPass();
        }
        if (this.isVariableReference) {
            this.variable.addUsedPlace(this);
            this.scope.context.requestTreeshakingPass();
        }
    }
    disallowImportReassignment() {
        return this.scope.context.error(parseAst_js.logIllegalImportReassignment(this.name, this.scope.context.module.id), this.start);
    }
    getVariableRespectingTDZ() {
        if (this.isPossibleTDZ()) {
            return UNKNOWN_EXPRESSION;
        }
        return this.variable;
    }
    isPureFunction(path) {
        let currentPureFunction = this.scope.context.manualPureFunctions[this.name];
        for (const segment of path) {
            if (currentPureFunction) {
                if (currentPureFunction[PureFunctionKey]) {
                    return true;
                }
                currentPureFunction = currentPureFunction[segment];
            }
            else {
                return false;
            }
        }
        return currentPureFunction?.[PureFunctionKey];
    }
}
function closestParentFunctionOrProgram(node) {
    while (node && !/^Program|Function/.test(node.type)) {
        node = node.parent;
    }
    // one of: ArrowFunctionExpression, FunctionDeclaration, FunctionExpression or Program
    return node;
}

class ObjectMember extends ExpressionEntity {
    constructor(object, path) {
        super();
        this.object = object;
        this.path = path;
    }
    deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker) {
        this.object.deoptimizeArgumentsOnInteractionAtPath(interaction, [...this.path, ...path], recursionTracker);
    }
    deoptimizePath(path) {
        this.object.deoptimizePath([...this.path, ...path]);
    }
    getLiteralValueAtPath(path, recursionTracker, origin) {
        return this.object.getLiteralValueAtPath([...this.path, ...path], recursionTracker, origin);
    }
    getReturnExpressionWhenCalledAtPath(path, interaction, recursionTracker, origin) {
        return this.object.getReturnExpressionWhenCalledAtPath([...this.path, ...path], interaction, recursionTracker, origin);
    }
    hasEffectsOnInteractionAtPath(path, interaction, context) {
        return this.object.hasEffectsOnInteractionAtPath([...this.path, ...path], interaction, context);
    }
}

class Identifier extends IdentifierBase {
    constructor() {
        super(...arguments);
        this.variable = null;
    }
    get isDestructuringDeoptimized() {
        return isFlagSet(this.flags, 16777216 /* Flag.destructuringDeoptimized */);
    }
    set isDestructuringDeoptimized(value) {
        this.flags = setFlag(this.flags, 16777216 /* Flag.destructuringDeoptimized */, value);
    }
    addExportedVariables(variables, exportNamesByVariable) {
        if (exportNamesByVariable.has(this.variable)) {
            variables.push(this.variable);
        }
    }
    bind() {
        if (!this.variable && is_reference(this, this.parent)) {
            this.variable = this.scope.findVariable(this.name);
            this.variable.addReference(this);
            this.isVariableReference = true;
        }
    }
    declare(kind, destructuredInitPath, init) {
        let variable;
        const { treeshake } = this.scope.context.options;
        if (kind === 'parameter') {
            variable = this.scope.addParameterDeclaration(this, destructuredInitPath);
        }
        else {
            variable = this.scope.addDeclaration(this, this.scope.context, init, destructuredInitPath, kind);
            if (kind === 'var' && treeshake && treeshake.correctVarValueBeforeDeclaration) {
                // Necessary to make sure the init is deoptimized. We cannot call deoptimizePath here.
                variable.markInitializersForDeoptimization();
            }
        }
        return [(this.variable = variable)];
    }
    deoptimizeAssignment(destructuredInitPath, init) {
        this.deoptimizePath(EMPTY_PATH);
        init.deoptimizePath([...destructuredInitPath, UnknownKey]);
    }
    hasEffectsWhenDestructuring(context, destructuredInitPath, init) {
        return (destructuredInitPath.length > 0 &&
            init.hasEffectsOnInteractionAtPath(destructuredInitPath, NODE_INTERACTION_UNKNOWN_ACCESS, context));
    }
    includeDestructuredIfNecessary(context, destructuredInitPath, init) {
        if (destructuredInitPath.length > 0 && !this.isDestructuringDeoptimized) {
            this.isDestructuringDeoptimized = true;
            init.deoptimizeArgumentsOnInteractionAtPath({
                args: [new ObjectMember(init, destructuredInitPath.slice(0, -1))],
                type: INTERACTION_ACCESSED
            }, destructuredInitPath, SHARED_RECURSION_TRACKER);
        }
        const { propertyReadSideEffects } = this.scope.context.options
            .treeshake;
        let included = this.included;
        if ((included ||=
            destructuredInitPath.length > 0 &&
                !context.brokenFlow &&
                propertyReadSideEffects &&
                (propertyReadSideEffects === 'always' ||
                    init.hasEffectsOnInteractionAtPath(destructuredInitPath, NODE_INTERACTION_UNKNOWN_ACCESS, createHasEffectsContext())))) {
            if (this.variable && !this.variable.included) {
                this.scope.context.includeVariableInModule(this.variable, EMPTY_PATH, context);
            }
            init.includePath(destructuredInitPath, context);
        }
        if (!this.included && included) {
            this.includeNode(context);
        }
        return this.included;
    }
    markDeclarationReached() {
        this.variable.initReached = true;
    }
    render(code, { snippets: { getPropertyAccess }, useOriginalName }, { renderedParentType, isCalleeOfRenderedParent, isShorthandProperty } = parseAst_js.BLANK) {
        if (this.variable) {
            const name = this.variable.getName(getPropertyAccess, useOriginalName);
            if (name !== this.name) {
                code.overwrite(this.start, this.end, name, {
                    contentOnly: true,
                    storeName: true
                });
                if (isShorthandProperty) {
                    code.prependRight(this.start, `${this.name}: `);
                }
            }
            // In strict mode, any variable named "eval" must be the actual "eval" function
            if (name === 'eval' &&
                renderedParentType === parseAst_js.CallExpression &&
                isCalleeOfRenderedParent) {
                code.appendRight(this.start, '0, ');
            }
        }
    }
}

function getSafeName(baseName, usedNames, forbiddenNames) {
    let safeName = baseName;
    let count = 1;
    while (usedNames.has(safeName) || RESERVED_NAMES.has(safeName) || forbiddenNames?.has(safeName)) {
        safeName = `${baseName}$${toBase64(count++)}`;
    }
    usedNames.add(safeName);
    return safeName;
}

class Scope {
    constructor() {
        this.children = [];
        this.variables = new Map();
    }
    /*
    Redeclaration rules:
    - var can redeclare var
    - in function scopes, function and var can redeclare function and var
    - var is hoisted across scopes, function remains in the scope it is declared
    - var and function can redeclare function parameters, but parameters cannot redeclare parameters
    - function cannot redeclare catch scope parameters
    - var can redeclare catch scope parameters in a way
        - if the parameter is an identifier and not a pattern
        - then the variable is still declared in the hoisted outer scope, but the initializer is assigned to the parameter
    - const, let, class, and function except in the cases above cannot redeclare anything
     */
    addDeclaration(identifier, context, init, destructuredInitPath, kind) {
        const name = identifier.name;
        const existingVariable = this.hoistedVariables?.get(name) || this.variables.get(name);
        if (existingVariable) {
            if (kind === 'var' && existingVariable.kind === 'var') {
                existingVariable.addDeclaration(identifier, init);
                return existingVariable;
            }
            context.error(parseAst_js.logRedeclarationError(name), identifier.start);
        }
        const newVariable = new LocalVariable(identifier.name, identifier, init, destructuredInitPath, context, kind);
        this.variables.set(name, newVariable);
        return newVariable;
    }
    addHoistedVariable(name, variable) {
        (this.hoistedVariables ||= new Map()).set(name, variable);
    }
    contains(name) {
        return this.variables.has(name);
    }
    findVariable(_name) {
        /* istanbul ignore next */
        throw new Error('Internal Error: findVariable needs to be implemented by a subclass');
    }
}

class ChildScope extends Scope {
    constructor(parent, context) {
        super();
        this.parent = parent;
        this.context = context;
        this.accessedOutsideVariables = new Map();
        parent.children.push(this);
    }
    addAccessedDynamicImport(importExpression) {
        (this.accessedDynamicImports || (this.accessedDynamicImports = new Set())).add(importExpression);
        if (this.parent instanceof ChildScope) {
            this.parent.addAccessedDynamicImport(importExpression);
        }
    }
    addAccessedGlobals(globals, accessedGlobalsByScope) {
        const accessedGlobals = accessedGlobalsByScope.get(this) || new Set();
        for (const name of globals) {
            accessedGlobals.add(name);
        }
        accessedGlobalsByScope.set(this, accessedGlobals);
        if (this.parent instanceof ChildScope) {
            this.parent.addAccessedGlobals(globals, accessedGlobalsByScope);
        }
    }
    addNamespaceMemberAccess(name, variable) {
        this.accessedOutsideVariables.set(name, variable);
        this.parent.addNamespaceMemberAccess(name, variable);
    }
    addReturnExpression(expression) {
        if (this.parent instanceof ChildScope) {
            this.parent.addReturnExpression(expression);
        }
    }
    addUsedOutsideNames(usedNames, accessedGlobalsByScope) {
        for (const variable of this.accessedOutsideVariables.values()) {
            if (variable.included) {
                usedNames.add(variable.getBaseVariableName());
            }
        }
        const accessedGlobals = accessedGlobalsByScope.get(this);
        if (accessedGlobals) {
            for (const name of accessedGlobals) {
                usedNames.add(name);
            }
        }
    }
    contains(name) {
        return this.variables.has(name) || this.parent.contains(name);
    }
    deconflict(format, exportNamesByVariable, accessedGlobalsByScope) {
        const usedNames = new Set();
        this.addUsedOutsideNames(usedNames, accessedGlobalsByScope);
        if (this.accessedDynamicImports) {
            for (const importExpression of this.accessedDynamicImports) {
                if (importExpression.inlineNamespace) {
                    usedNames.add(importExpression.inlineNamespace.getBaseVariableName());
                }
            }
        }
        for (const [name, variable] of this.variables) {
            if (variable.included || variable.alwaysRendered) {
                variable.setRenderNames(null, getSafeName(name, usedNames, variable.forbiddenNames));
            }
        }
        for (const scope of this.children) {
            scope.deconflict(format, exportNamesByVariable, accessedGlobalsByScope);
        }
    }
    findLexicalBoundary() {
        return this.parent.findLexicalBoundary();
    }
    findGlobal(name) {
        const variable = this.parent.findVariable(name);
        this.accessedOutsideVariables.set(name, variable);
        return variable;
    }
    findVariable(name) {
        const knownVariable = this.variables.get(name) || this.accessedOutsideVariables.get(name);
        if (knownVariable) {
            return knownVariable;
        }
        const variable = this.parent.findVariable(name);
        this.accessedOutsideVariables.set(name, variable);
        return variable;
    }
}

function checkEffectForNodes(nodes, context) {
    for (const node of nodes) {
        if (node.hasEffects(context)) {
            return true;
        }
    }
    return false;
}

class MethodBase extends NodeBase {
    constructor() {
        super(...arguments);
        this.accessedValue = null;
    }
    get computed() {
        return isFlagSet(this.flags, 1024 /* Flag.computed */);
    }
    set computed(value) {
        this.flags = setFlag(this.flags, 1024 /* Flag.computed */, value);
    }
    deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker) {
        if (interaction.type === INTERACTION_ACCESSED && this.kind === 'get' && path.length === 0) {
            return this.value.deoptimizeArgumentsOnInteractionAtPath({
                args: interaction.args,
                type: INTERACTION_CALLED,
                withNew: false
            }, EMPTY_PATH, recursionTracker);
        }
        if (interaction.type === INTERACTION_ASSIGNED && this.kind === 'set' && path.length === 0) {
            return this.value.deoptimizeArgumentsOnInteractionAtPath({
                args: interaction.args,
                type: INTERACTION_CALLED,
                withNew: false
            }, EMPTY_PATH, recursionTracker);
        }
        this.getAccessedValue()[0].deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker);
    }
    // As getter properties directly receive their values from fixed function
    // expressions, there is no known situation where a getter is deoptimized.
    deoptimizeCache() { }
    deoptimizePath(path) {
        this.getAccessedValue()[0].deoptimizePath(path);
    }
    getLiteralValueAtPath(path, recursionTracker, origin) {
        return this.getAccessedValue()[0].getLiteralValueAtPath(path, recursionTracker, origin);
    }
    getReturnExpressionWhenCalledAtPath(path, interaction, recursionTracker, origin) {
        return this.getAccessedValue()[0].getReturnExpressionWhenCalledAtPath(path, interaction, recursionTracker, origin);
    }
    hasEffects(context) {
        return this.key.hasEffects(context);
    }
    hasEffectsOnInteractionAtPath(path, interaction, context) {
        if (this.kind === 'get' && interaction.type === INTERACTION_ACCESSED && path.length === 0) {
            return this.value.hasEffectsOnInteractionAtPath(EMPTY_PATH, {
                args: interaction.args,
                type: INTERACTION_CALLED,
                withNew: false
            }, context);
        }
        // setters are only called for empty paths
        if (this.kind === 'set' && interaction.type === INTERACTION_ASSIGNED) {
            return this.value.hasEffectsOnInteractionAtPath(EMPTY_PATH, {
                args: interaction.args,
                type: INTERACTION_CALLED,
                withNew: false
            }, context);
        }
        return this.getAccessedValue()[0].hasEffectsOnInteractionAtPath(path, interaction, context);
    }
    getAccessedValue() {
        if (this.accessedValue === null) {
            if (this.kind === 'get') {
                this.accessedValue = UNKNOWN_RETURN_EXPRESSION;
                return (this.accessedValue = this.value.getReturnExpressionWhenCalledAtPath(EMPTY_PATH, NODE_INTERACTION_UNKNOWN_CALL, SHARED_RECURSION_TRACKER, this));
            }
            else {
                return (this.accessedValue = [this.value, false]);
            }
        }
        return this.accessedValue;
    }
}
MethodBase.prototype.includeNode = onlyIncludeSelfNoDeoptimize;
MethodBase.prototype.applyDeoptimizations = doNotDeoptimize;

class MethodDefinition extends MethodBase {
    hasEffects(context) {
        return super.hasEffects(context) || checkEffectForNodes(this.decorators, context);
    }
}

class BlockScope extends ChildScope {
    constructor(parent) {
        super(parent, parent.context);
    }
    addDeclaration(identifier, context, init, destructuredInitPath, kind) {
        if (kind === 'var') {
            const name = identifier.name;
            const existingVariable = this.hoistedVariables?.get(name) || this.variables.get(name);
            if (existingVariable) {
                if (existingVariable.kind === 'var' ||
                    (kind === 'var' && existingVariable.kind === 'parameter')) {
                    existingVariable.addDeclaration(identifier, init);
                    return existingVariable;
                }
                return context.error(parseAst_js.logRedeclarationError(name), identifier.start);
            }
            const declaredVariable = this.parent.addDeclaration(identifier, context, init, destructuredInitPath, kind);
            // Necessary to make sure the init is deoptimized for conditional declarations.
            // We cannot call deoptimizePath here.
            declaredVariable.markInitializersForDeoptimization();
            // We add the variable to this and all parent scopes to reliably detect conflicts
            this.addHoistedVariable(name, declaredVariable);
            return declaredVariable;
        }
        return super.addDeclaration(identifier, context, init, destructuredInitPath, kind);
    }
}

class StaticBlock extends NodeBase {
    createScope(parentScope) {
        this.scope = new BlockScope(parentScope);
    }
    hasEffects(context) {
        for (const node of this.body) {
            if (node.hasEffects(context))
                return true;
        }
        return false;
    }
    include(context, includeChildrenRecursively) {
        this.included = true;
        for (const node of this.body) {
            if (includeChildrenRecursively || node.shouldBeIncluded(context))
                node.include(context, includeChildrenRecursively);
        }
    }
    render(code, options) {
        if (this.body.length > 0) {
            const bodyStartPos = findFirstOccurrenceOutsideComment(code.original.slice(this.start, this.end), '{') + 1;
            renderStatementList(this.body, code, this.start + bodyStartPos, this.end - 1, options);
        }
        else {
            super.render(code, options);
        }
    }
}
StaticBlock.prototype.includeNode = onlyIncludeSelfNoDeoptimize;
StaticBlock.prototype.applyDeoptimizations = doNotDeoptimize;
function isStaticBlock(statement) {
    return statement.type === parseAst_js.StaticBlock;
}

class ClassNode extends NodeBase {
    constructor() {
        super(...arguments);
        this.objectEntity = null;
    }
    createScope(parentScope) {
        this.scope = new ChildScope(parentScope, parentScope.context);
    }
    deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker) {
        this.getObjectEntity().deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker);
    }
    deoptimizeCache() {
        this.getObjectEntity().deoptimizeAllProperties();
    }
    deoptimizePath(path) {
        this.getObjectEntity().deoptimizePath(path);
    }
    getLiteralValueAtPath(path, recursionTracker, origin) {
        return this.getObjectEntity().getLiteralValueAtPath(path, recursionTracker, origin);
    }
    getReturnExpressionWhenCalledAtPath(path, interaction, recursionTracker, origin) {
        return this.getObjectEntity().getReturnExpressionWhenCalledAtPath(path, interaction, recursionTracker, origin);
    }
    hasEffects(context) {
        if (!this.deoptimized)
            this.applyDeoptimizations();
        const initEffect = this.superClass?.hasEffects(context) || this.body.hasEffects(context);
        this.id?.markDeclarationReached();
        return initEffect || super.hasEffects(context) || checkEffectForNodes(this.decorators, context);
    }
    hasEffectsOnInteractionAtPath(path, interaction, context) {
        return interaction.type === INTERACTION_CALLED && path.length === 0
            ? !interaction.withNew ||
                (this.classConstructor === null
                    ? this.superClass?.hasEffectsOnInteractionAtPath(path, interaction, context)
                    : this.classConstructor.hasEffectsOnInteractionAtPath(path, interaction, context)) ||
                false
            : this.getObjectEntity().hasEffectsOnInteractionAtPath(path, interaction, context);
    }
    include(context, includeChildrenRecursively) {
        if (!this.included)
            this.includeNode(context);
        this.superClass?.include(context, includeChildrenRecursively);
        this.body.include(context, includeChildrenRecursively);
        for (const decorator of this.decorators)
            decorator.include(context, includeChildrenRecursively);
        if (this.id) {
            this.id.markDeclarationReached();
            this.id.include(context, includeChildrenRecursively);
        }
    }
    initialise() {
        super.initialise();
        this.id?.declare('class', EMPTY_PATH, this);
        for (const method of this.body.body) {
            if (method instanceof MethodDefinition && method.kind === 'constructor') {
                this.classConstructor = method;
                return;
            }
        }
        this.classConstructor = null;
    }
    applyDeoptimizations() {
        this.deoptimized = true;
        for (const definition of this.body.body) {
            if (!isStaticBlock(definition) &&
                !(definition.static ||
                    (definition instanceof MethodDefinition && definition.kind === 'constructor'))) {
                // Calls to methods are not tracked, ensure that the return value is deoptimized
                definition.deoptimizePath(UNKNOWN_PATH);
            }
        }
        this.scope.context.requestTreeshakingPass();
    }
    getObjectEntity() {
        if (this.objectEntity !== null) {
            return this.objectEntity;
        }
        const staticProperties = [];
        const dynamicMethods = [];
        for (const definition of this.body.body) {
            if (isStaticBlock(definition))
                continue;
            const properties = definition.static ? staticProperties : dynamicMethods;
            const definitionKind = definition.kind;
            // Note that class fields do not end up on the prototype
            if (properties === dynamicMethods && !definitionKind)
                continue;
            const kind = definitionKind === 'set' || definitionKind === 'get' ? definitionKind : 'init';
            let key;
            if (definition.computed) {
                const keyValue = definition.key.getLiteralValueAtPath(EMPTY_PATH, SHARED_RECURSION_TRACKER, this);
                if (typeof keyValue === 'symbol') {
                    properties.push({
                        key: isAnyWellKnown(keyValue) ? keyValue : UnknownKey,
                        kind,
                        property: definition
                    });
                    continue;
                }
                else {
                    key = String(keyValue);
                }
            }
            else {
                key =
                    definition.key instanceof Identifier
                        ? definition.key.name
                        : String(definition.key.value);
            }
            properties.push({ key, kind, property: definition });
        }
        staticProperties.unshift({
            key: 'prototype',
            kind: 'init',
            property: new ObjectEntity(dynamicMethods, this.superClass ? new ObjectMember(this.superClass, ['prototype']) : OBJECT_PROTOTYPE)
        });
        return (this.objectEntity = new ObjectEntity(staticProperties, this.superClass || OBJECT_PROTOTYPE));
    }
}
ClassNode.prototype.includeNode = onlyIncludeSelf;

class ClassDeclaration extends ClassNode {
    initialise() {
        super.initialise();
        if (this.id !== null) {
            this.id.variable.isId = true;
        }
    }
    parseNode(esTreeNode) {
        if (esTreeNode.id !== null) {
            this.id = new Identifier(this, this.scope.parent).parseNode(esTreeNode.id);
        }
        return super.parseNode(esTreeNode);
    }
    render(code, options) {
        const { exportNamesByVariable, format, snippets: { _, getPropertyAccess } } = options;
        if (this.id) {
            const { variable, name } = this.id;
            if (format === 'system' && exportNamesByVariable.has(variable)) {
                code.appendLeft(this.end, `${_}${getSystemExportStatement([variable], options)};`);
            }
            const renderedVariable = variable.getName(getPropertyAccess);
            if (renderedVariable !== name) {
                this.decorators.map(decorator => decorator.render(code, options));
                this.superClass?.render(code, options);
                this.body.render(code, {
                    ...options,
                    useOriginalName: (_variable) => _variable === variable
                });
                code.prependRight(this.start, `let ${renderedVariable}${_}=${_}`);
                code.prependLeft(this.end, ';');
                return;
            }
        }
        super.render(code, options);
    }
    applyDeoptimizations() {
        super.applyDeoptimizations();
        const { id, scope } = this;
        if (id) {
            const { name, variable } = id;
            for (const accessedVariable of scope.accessedOutsideVariables.values()) {
                if (accessedVariable !== variable) {
                    accessedVariable.forbidName(name);
                }
            }
        }
    }
}

class ArgumentsVariable extends LocalVariable {
    constructor(context) {
        super('arguments', null, UNKNOWN_EXPRESSION, EMPTY_PATH, context, 'other');
    }
    addArgumentToBeDeoptimized(_argument) { }
    // Only If there is at least one reference, then we need to track all
    // arguments in order to be able to deoptimize them.
    addReference() {
        this.deoptimizedArguments = [];
        this.addArgumentToBeDeoptimized = addArgumentToBeDeoptimized;
    }
    hasEffectsOnInteractionAtPath(path, { type }) {
        return type !== INTERACTION_ACCESSED || path.length > 1;
    }
    includePath(path, context) {
        super.includePath(path, context);
        for (const argument of this.deoptimizedArguments) {
            argument.deoptimizePath(UNKNOWN_PATH);
        }
        this.deoptimizedArguments.length = 0;
    }
}
function addArgumentToBeDeoptimized(argument) {
    if (this.included) {
        argument.deoptimizePath(UNKNOWN_PATH);
    }
    else {
        this.deoptimizedArguments?.push(argument);
    }
}

const MAX_TRACKED_INTERACTIONS = 20;
const NO_INTERACTIONS = parseAst_js.EMPTY_ARRAY;
const UNKNOWN_DEOPTIMIZED_FIELD = new Set([UnknownKey]);
const EMPTY_PATH_TRACKER = new EntityPathTracker();
const UNKNOWN_DEOPTIMIZED_ENTITY = new Set([UNKNOWN_EXPRESSION]);
class ParameterVariable extends LocalVariable {
    constructor(name, declarator, argumentPath, context) {
        super(name, declarator, UNKNOWN_EXPRESSION, argumentPath, context, 'parameter');
        this.includedPathTracker = new IncludedTopLevelPathTracker();
        this.argumentsToBeDeoptimized = new Set();
        this.deoptimizationInteractions = [];
        this.deoptimizations = new EntityPathTracker();
        this.deoptimizedFields = new Set();
        this.expressionsDependingOnKnownValue = [];
        this.knownValue = null;
        this.knownValueLiteral = UnknownValue;
    }
    addArgumentForDeoptimization(entity) {
        this.updateKnownValue(entity);
        if (entity === UNKNOWN_EXPRESSION) {
            // As unknown expressions fully deoptimize all interactions, we can clear
            // the interaction cache at this point provided we keep this optimization
            // in mind when adding new interactions
            if (!this.argumentsToBeDeoptimized.has(UNKNOWN_EXPRESSION)) {
                this.argumentsToBeDeoptimized.add(UNKNOWN_EXPRESSION);
                for (const { interaction } of this.deoptimizationInteractions) {
                    deoptimizeInteraction(interaction);
                }
                this.deoptimizationInteractions = NO_INTERACTIONS;
            }
        }
        else if (this.deoptimizedFields.has(UnknownKey)) {
            // This means that we already deoptimized all interactions and no longer
            // track them
            entity.deoptimizePath([...this.initPath, UnknownKey]);
        }
        else if (!this.argumentsToBeDeoptimized.has(entity)) {
            this.argumentsToBeDeoptimized.add(entity);
            for (const field of this.deoptimizedFields) {
                entity.deoptimizePath([...this.initPath, field]);
            }
            for (const { interaction, path } of this.deoptimizationInteractions) {
                entity.deoptimizeArgumentsOnInteractionAtPath(interaction, [...this.initPath, ...path], SHARED_RECURSION_TRACKER);
            }
        }
    }
    /** This says we should not make assumptions about the value of the parameter.
     *  This is different from deoptimization that will also cause argument values
     *  to be deoptimized. */
    markReassigned() {
        if (this.isReassigned) {
            return;
        }
        super.markReassigned();
        for (const expression of this.expressionsDependingOnKnownValue) {
            expression.deoptimizeCache();
        }
        this.expressionsDependingOnKnownValue = parseAst_js.EMPTY_ARRAY;
    }
    deoptimizeCache() {
        this.markReassigned();
    }
    /**
     * Update the known value of the parameter variable.
     * Must be called for every function call, so it can track all the arguments,
     * and deoptimizeCache itself to mark reassigned if the argument is changed.
     * @param argument The argument of the function call
     */
    updateKnownValue(argument) {
        if (this.isReassigned) {
            return;
        }
        if (this.knownValue === null) {
            this.knownValue = argument;
            this.knownValueLiteral = argument.getLiteralValueAtPath(this.initPath, SHARED_RECURSION_TRACKER, this);
            return;
        }
        // the same literal or identifier, do nothing
        if (this.knownValue === argument ||
            (this.knownValue instanceof Identifier &&
                argument instanceof Identifier &&
                this.knownValue.variable === argument.variable)) {
            return;
        }
        const { knownValueLiteral } = this;
        if (typeof knownValueLiteral === 'symbol' ||
            argument.getLiteralValueAtPath(this.initPath, SHARED_RECURSION_TRACKER, this) !==
                knownValueLiteral) {
            this.markReassigned();
        }
    }
    /**
     * This function freezes the known value of the parameter variable,
     * so the optimization starts with a certain ExpressionEntity.
     * The optimization can be undone by calling `markReassigned`.
     * @returns the frozen value
     */
    getKnownValue() {
        return this.knownValue || UNKNOWN_EXPRESSION;
    }
    getLiteralValueAtPath(path, recursionTracker, origin) {
        if (this.isReassigned || path.length + this.initPath.length > MAX_PATH_DEPTH) {
            return UnknownValue;
        }
        const knownValue = this.getKnownValue();
        this.expressionsDependingOnKnownValue.push(origin);
        return recursionTracker.withTrackedEntityAtPath(path, knownValue, () => knownValue.getLiteralValueAtPath([...this.initPath, ...path], recursionTracker, origin), UnknownValue);
    }
    hasEffectsOnInteractionAtPath(path, interaction, context) {
        const { type } = interaction;
        if (this.isReassigned ||
            type === INTERACTION_ASSIGNED ||
            path.length + this.initPath.length > MAX_PATH_DEPTH) {
            return super.hasEffectsOnInteractionAtPath(path, interaction, context);
        }
        return (!(type === INTERACTION_CALLED
            ? (interaction.withNew
                ? context.instantiated
                : context.called).trackEntityAtPathAndGetIfTracked(path, interaction.args, this)
            : context.accessed.trackEntityAtPathAndGetIfTracked(path, this)) &&
            this.getKnownValue().hasEffectsOnInteractionAtPath([...this.initPath, ...path], interaction, context));
    }
    deoptimizeArgumentsOnInteractionAtPath(interaction, path) {
        // For performance reasons, we fully deoptimize all deeper interactions
        if (path.length >= 2 ||
            this.argumentsToBeDeoptimized.has(UNKNOWN_EXPRESSION) ||
            this.deoptimizationInteractions.length >= MAX_TRACKED_INTERACTIONS ||
            (path.length === 1 &&
                (this.deoptimizedFields.has(UnknownKey) ||
                    (interaction.type === INTERACTION_CALLED && this.deoptimizedFields.has(path[0])))) ||
            this.initPath.length + path.length > MAX_PATH_DEPTH) {
            deoptimizeInteraction(interaction);
            return;
        }
        if (!this.deoptimizations.trackEntityAtPathAndGetIfTracked(path, interaction.args)) {
            for (const entity of this.argumentsToBeDeoptimized) {
                entity.deoptimizeArgumentsOnInteractionAtPath(interaction, [...this.initPath, ...path], SHARED_RECURSION_TRACKER);
            }
            if (!this.argumentsToBeDeoptimized.has(UNKNOWN_EXPRESSION)) {
                this.deoptimizationInteractions.push({
                    interaction,
                    path
                });
            }
        }
    }
    deoptimizePath(path) {
        if (path.length === 0) {
            this.markReassigned();
            return;
        }
        if (this.deoptimizedFields.has(UnknownKey)) {
            return;
        }
        const key = path[0];
        if (this.deoptimizedFields.has(key)) {
            return;
        }
        this.deoptimizedFields.add(key);
        for (const entity of this.argumentsToBeDeoptimized) {
            // We do not need a recursion tracker here as we already track whether
            // this field is deoptimized
            entity.deoptimizePath([...this.initPath, key]);
        }
        if (key === UnknownKey) {
            // save some memory
            this.deoptimizationInteractions = NO_INTERACTIONS;
            this.deoptimizations = EMPTY_PATH_TRACKER;
            this.deoptimizedFields = UNKNOWN_DEOPTIMIZED_FIELD;
            this.argumentsToBeDeoptimized = UNKNOWN_DEOPTIMIZED_ENTITY;
        }
    }
    getReturnExpressionWhenCalledAtPath(path) {
        // We deoptimize everything that is called as that will trivially deoptimize
        // the corresponding return expressions as well and avoid badly performing
        // and complicated alternatives
        if (path.length === 0) {
            this.deoptimizePath(UNKNOWN_PATH);
        }
        else if (!this.deoptimizedFields.has(path[0])) {
            this.deoptimizePath([path[0]]);
        }
        return UNKNOWN_RETURN_EXPRESSION;
    }
    includeArgumentPaths(entity, context) {
        this.includedPathTracker.includeAllPaths(entity, context, this.initPath);
    }
}

class ThisVariable extends ParameterVariable {
    constructor(context) {
        super('this', null, EMPTY_PATH, context);
    }
    hasEffectsOnInteractionAtPath(path, interaction, context) {
        return (context.replacedVariableInits.get(this) || UNKNOWN_EXPRESSION).hasEffectsOnInteractionAtPath(path, interaction, context);
    }
}

class CatchBodyScope extends ChildScope {
    constructor(parent) {
        super(parent, parent.context);
        this.parent = parent;
    }
    addDeclaration(identifier, context, init, destructuredInitPath, kind) {
        if (kind === 'var') {
            const name = identifier.name;
            const existingVariable = this.hoistedVariables?.get(name) || this.variables.get(name);
            if (existingVariable) {
                const existingKind = existingVariable.kind;
                if (existingKind === 'parameter' &&
                    // If this is a destructured parameter, it is forbidden to redeclare
                    existingVariable.declarations[0].parent.type === parseAst_js.CatchClause) {
                    // If this is a var with the same name as the catch scope parameter,
                    // the assignment actually goes to the parameter and the var is
                    // hoisted without assignment. Locally, it is shadowed by the
                    // parameter
                    const declaredVariable = this.parent.parent.addDeclaration(identifier, context, UNDEFINED_EXPRESSION, destructuredInitPath, kind);
                    // To avoid the need to rewrite the declaration, we link the variable
                    // names. If we ever implement a logic that splits initialization and
                    // assignment for hoisted vars, the "renderLikeHoisted" logic can be
                    // removed again.
                    // We do not need to check whether there already is a linked
                    // variable because then declaredVariable would be that linked
                    // variable.
                    existingVariable.renderLikeHoisted(declaredVariable);
                    this.addHoistedVariable(name, declaredVariable);
                    return declaredVariable;
                }
                if (existingKind === 'var') {
                    existingVariable.addDeclaration(identifier, init);
                    return existingVariable;
                }
                return context.error(parseAst_js.logRedeclarationError(name), identifier.start);
            }
            // We only add parameters to parameter scopes
            const declaredVariable = this.parent.parent.addDeclaration(identifier, context, init, destructuredInitPath, kind);
            // Necessary to make sure the init is deoptimized for conditional declarations.
            // We cannot call deoptimizePath here.
            declaredVariable.markInitializersForDeoptimization();
            // We add the variable to this and all parent scopes to reliably detect conflicts
            this.addHoistedVariable(name, declaredVariable);
            return declaredVariable;
        }
        return super.addDeclaration(identifier, context, init, destructuredInitPath, kind);
    }
}

class FunctionBodyScope extends ChildScope {
    constructor(parent) {
        super(parent, parent.context);
    }
    // There is stuff that is only allowed in function scopes, i.e. functions can
    // be redeclared, functions and var can redeclare each other
    addDeclaration(identifier, context, init, destructuredInitPath, kind) {
        const name = identifier.name;
        const existingVariable = this.hoistedVariables?.get(name) || this.variables.get(name);
        if (existingVariable) {
            const existingKind = existingVariable.kind;
            if ((kind === 'var' || kind === 'function') &&
                (existingKind === 'var' || existingKind === 'function' || existingKind === 'parameter')) {
                existingVariable.addDeclaration(identifier, init);
                return existingVariable;
            }
            context.error(parseAst_js.logRedeclarationError(name), identifier.start);
        }
        const newVariable = new LocalVariable(identifier.name, identifier, init, destructuredInitPath, context, kind);
        this.variables.set(name, newVariable);
        return newVariable;
    }
}

class ParameterScope extends ChildScope {
    constructor(parent, isCatchScope) {
        super(parent, parent.context);
        this.hasRest = false;
        this.parameters = [];
        this.bodyScope = isCatchScope ? new CatchBodyScope(this) : new FunctionBodyScope(this);
    }
    /**
     * Adds a parameter to this scope. Parameters must be added in the correct
     * order, i.e. from left to right.
     */
    addParameterDeclaration(identifier, argumentPath) {
        const { name, start } = identifier;
        const existingParameter = this.variables.get(name);
        if (existingParameter) {
            return this.context.error(parseAst_js.logDuplicateArgumentNameError(name), start);
        }
        const variable = new ParameterVariable(name, identifier, argumentPath, this.context);
        this.variables.set(name, variable);
        // We also add it to the body scope to detect name conflicts with local
        // variables. We still need the intermediate scope, though, as parameter
        // defaults are NOT taken from the body scope but from the parameters or
        // outside scope.
        this.bodyScope.addHoistedVariable(name, variable);
        return variable;
    }
    addParameterVariables(parameters, hasRest) {
        this.parameters = parameters;
        for (const parameterList of parameters) {
            for (const parameter of parameterList) {
                parameter.alwaysRendered = true;
            }
        }
        this.hasRest = hasRest;
    }
    includeCallArguments({ args }, context) {
        let calledFromTryStatement = false;
        let argumentIncluded = false;
        const restParameter = this.hasRest && this.parameters[this.parameters.length - 1];
        let lastExplicitlyIncludedIndex = args.length - 1;
        // If there is a SpreadElement, we need to include all arguments after it
        // because we no longer know which argument corresponds to which parameter.
        for (let argumentIndex = 1; argumentIndex < args.length; argumentIndex++) {
            const argument = args[argumentIndex];
            if (argument instanceof SpreadElement && !argumentIncluded) {
                argumentIncluded = true;
                lastExplicitlyIncludedIndex = argumentIndex - 1;
            }
            if (argumentIncluded) {
                argument.includePath(UNKNOWN_PATH, context);
                argument.include(context, false);
            }
        }
        // Now we go backwards either starting from the last argument or before the
        // first SpreadElement to ensure all arguments before are included as needed
        for (let index = lastExplicitlyIncludedIndex; index >= 1; index--) {
            const parameterVariables = this.parameters[index - 1] || restParameter;
            const argument = args[index];
            if (parameterVariables) {
                calledFromTryStatement = false;
                if (parameterVariables.length === 0) {
                    // handle empty destructuring to avoid destructuring undefined
                    argumentIncluded = true;
                }
                else {
                    for (const parameterVariable of parameterVariables) {
                        if (parameterVariable.calledFromTryStatement) {
                            calledFromTryStatement = true;
                        }
                        if (parameterVariable.included) {
                            argumentIncluded = true;
                            if (calledFromTryStatement) {
                                argument.include(context, true);
                            }
                            else {
                                parameterVariable.includeArgumentPaths(argument, context);
                                argument.include(context, false);
                            }
                        }
                    }
                }
            }
            if (argumentIncluded || argument.shouldBeIncluded(context)) {
                argumentIncluded = true;
                argument.include(context, calledFromTryStatement);
            }
        }
    }
}

class ReturnValueScope extends ParameterScope {
    constructor() {
        super(...arguments);
        this.returnExpression = null;
        this.returnExpressions = [];
    }
    addReturnExpression(expression) {
        this.returnExpressions.push(expression);
    }
    deoptimizeArgumentsOnCall({ args }) {
        const { parameters } = this;
        let position = 0;
        for (; position < args.length - 1; position++) {
            // Only the "this" argument arg[0] can be null
            const argument = args[position + 1];
            if (argument instanceof SpreadElement) {
                // This deoptimizes the current and remaining parameters and arguments
                for (; position < parameters.length; position++) {
                    args[position + 1]?.deoptimizePath(UNKNOWN_PATH);
                    for (const variable of parameters[position]) {
                        variable.markReassigned();
                    }
                }
                break;
            }
            if (this.hasRest && position >= parameters.length - 1) {
                argument.deoptimizePath(UNKNOWN_PATH);
            }
            else {
                const variables = parameters[position];
                if (variables) {
                    for (const variable of variables) {
                        variable.addArgumentForDeoptimization(argument);
                    }
                }
                this.addArgumentToBeDeoptimized(argument);
            }
        }
        const nonRestParameterLength = this.hasRest ? parameters.length - 1 : parameters.length;
        for (; position < nonRestParameterLength; position++) {
            for (const variable of parameters[position]) {
                variable.addArgumentForDeoptimization(UNDEFINED_EXPRESSION);
            }
        }
    }
    getReturnExpression() {
        if (this.returnExpression === null)
            this.updateReturnExpression();
        return this.returnExpression;
    }
    deoptimizeAllParameters() {
        for (const parameter of this.parameters) {
            for (const variable of parameter) {
                variable.deoptimizePath(UNKNOWN_PATH);
                variable.markReassigned();
            }
        }
    }
    reassignAllParameters() {
        for (const parameter of this.parameters) {
            for (const variable of parameter) {
                variable.markReassigned();
            }
        }
    }
    addArgumentToBeDeoptimized(_argument) { }
    updateReturnExpression() {
        if (this.returnExpressions.length === 1) {
            this.returnExpression = this.returnExpressions[0];
        }
        else {
            this.returnExpression = UNKNOWN_EXPRESSION;
            for (const expression of this.returnExpressions) {
                expression.deoptimizePath(UNKNOWN_PATH);
            }
        }
    }
}

class FunctionScope extends ReturnValueScope {
    constructor(parent, functionNode) {
        super(parent, false);
        this.functionNode = functionNode;
        const { context } = parent;
        this.variables.set('arguments', (this.argumentsVariable = new ArgumentsVariable(context)));
        this.variables.set('this', (this.thisVariable = new ThisVariable(context)));
    }
    findLexicalBoundary() {
        return this;
    }
    includeCallArguments(interaction, context) {
        super.includeCallArguments(interaction, context);
        if (this.argumentsVariable.included) {
            const { args } = interaction;
            for (let argumentIndex = 1; argumentIndex < args.length; argumentIndex++) {
                const argument = args[argumentIndex];
                if (argument) {
                    argument.includePath(UNKNOWN_PATH, context);
                    argument.include(context, false);
                }
            }
        }
    }
    addArgumentToBeDeoptimized(argument) {
        this.argumentsVariable.addArgumentToBeDeoptimized(argument);
    }
}

class ExpressionStatement extends NodeBase {
    initialise() {
        super.initialise();
        if (this.directive &&
            this.directive !== 'use strict' &&
            this.parent.type === parseAst_js.Program) {
            this.scope.context.log(parseAst_js.LOGLEVEL_WARN, 
            // This is necessary, because either way (deleting or not) can lead to errors.
            parseAst_js.logModuleLevelDirective(this.directive, this.scope.context.module.id), this.start);
        }
    }
    removeAnnotations(code) {
        this.expression.removeAnnotations(code);
    }
    render(code, options) {
        super.render(code, options);
        if (code.original[this.end - 1] !== ';') {
            code.appendLeft(this.end, ';');
        }
    }
    shouldBeIncluded(context) {
        if (this.directive && this.directive !== 'use strict')
            return this.parent.type !== parseAst_js.Program;
        return super.shouldBeIncluded(context);
    }
}
ExpressionStatement.prototype.includeNode = onlyIncludeSelfNoDeoptimize;
ExpressionStatement.prototype.applyDeoptimizations = doNotDeoptimize;

class BlockStatement extends NodeBase {
    get deoptimizeBody() {
        return isFlagSet(this.flags, 32768 /* Flag.deoptimizeBody */);
    }
    set deoptimizeBody(value) {
        this.flags = setFlag(this.flags, 32768 /* Flag.deoptimizeBody */, value);
    }
    get directlyIncluded() {
        return isFlagSet(this.flags, 16384 /* Flag.directlyIncluded */);
    }
    set directlyIncluded(value) {
        this.flags = setFlag(this.flags, 16384 /* Flag.directlyIncluded */, value);
    }
    addImplicitReturnExpressionToScope() {
        const lastStatement = this.body[this.body.length - 1];
        if (!lastStatement || lastStatement.type !== parseAst_js.ReturnStatement) {
            this.scope.addReturnExpression(UNKNOWN_EXPRESSION);
        }
    }
    createScope(parentScope) {
        this.scope = this.parent.preventChildBlockScope
            ? parentScope
            : new BlockScope(parentScope);
    }
    hasEffects(context) {
        if (this.deoptimizeBody)
            return true;
        for (const node of this.body) {
            if (context.brokenFlow)
                break;
            if (node.hasEffects(context))
                return true;
        }
        return false;
    }
    include(context, includeChildrenRecursively) {
        if (!(this.deoptimizeBody && this.directlyIncluded)) {
            this.included = true;
            this.directlyIncluded = true;
            if (this.deoptimizeBody)
                includeChildrenRecursively = true;
            for (const node of this.body) {
                if (includeChildrenRecursively || node.shouldBeIncluded(context))
                    node.include(context, includeChildrenRecursively);
            }
        }
    }
    initialise() {
        super.initialise();
        this.scope.context.magicString.addSourcemapLocation(this.end - 1);
        const firstBodyStatement = this.body[0];
        this.deoptimizeBody =
            firstBodyStatement instanceof ExpressionStatement &&
                firstBodyStatement.directive === 'use asm';
    }
    render(code, options) {
        if (this.body.length > 0) {
            renderStatementList(this.body, code, this.start + 1, this.end - 1, options);
        }
        else {
            super.render(code, options);
        }
    }
}
BlockStatement.prototype.includeNode = onlyIncludeSelfNoDeoptimize;
BlockStatement.prototype.applyDeoptimizations = doNotDeoptimize;

class RestElement extends NodeBase {
    constructor() {
        super(...arguments);
        this.declarationInit = null;
    }
    addExportedVariables(variables, exportNamesByVariable) {
        this.argument.addExportedVariables(variables, exportNamesByVariable);
    }
    declare(kind, destructuredInitPath, init) {
        this.declarationInit = init;
        return this.argument.declare(kind, getIncludedPatternPath$1(destructuredInitPath), init);
    }
    deoptimizeAssignment(destructuredInitPath, init) {
        this.argument.deoptimizeAssignment(getIncludedPatternPath$1(destructuredInitPath), init);
    }
    deoptimizePath(path) {
        if (path.length === 0) {
            this.argument.deoptimizePath(EMPTY_PATH);
        }
    }
    hasEffectsOnInteractionAtPath(path, interaction, context) {
        return (path.length > 0 ||
            this.argument.hasEffectsOnInteractionAtPath(EMPTY_PATH, interaction, context));
    }
    hasEffectsWhenDestructuring(context, destructuredInitPath, init) {
        return this.argument.hasEffectsWhenDestructuring(context, getIncludedPatternPath$1(destructuredInitPath), init);
    }
    includeDestructuredIfNecessary(context, destructuredInitPath, init) {
        const included = this.argument.includeDestructuredIfNecessary(context, getIncludedPatternPath$1(destructuredInitPath), init);
        if (!this.included && included) {
            this.includeNode(context);
        }
        return this.included;
    }
    include(context, includeChildrenRecursively) {
        if (!this.included)
            this.includeNode(context);
        // This should just include the identifier, its properties should be
        // included where the variable is used.
        this.argument.include(context, includeChildrenRecursively);
    }
    markDeclarationReached() {
        this.argument.markDeclarationReached();
    }
    applyDeoptimizations() {
        this.deoptimized = true;
        if (this.declarationInit !== null) {
            this.declarationInit.deoptimizePath([UnknownKey, UnknownKey]);
            this.scope.context.requestTreeshakingPass();
        }
    }
}
RestElement.prototype.includeNode = onlyIncludeSelf;
const getIncludedPatternPath$1 = (destructuredInitPath) => destructuredInitPath.at(-1) === UnknownKey
    ? destructuredInitPath
    : [...destructuredInitPath, UnknownKey];

class FunctionBase extends NodeBase {
    constructor() {
        super(...arguments);
        this.parameterVariableValuesDeoptimized = false;
        this.includeCallArguments = this.scope.includeCallArguments.bind(this.scope);
    }
    get async() {
        return isFlagSet(this.flags, 256 /* Flag.async */);
    }
    set async(value) {
        this.flags = setFlag(this.flags, 256 /* Flag.async */, value);
    }
    get deoptimizedReturn() {
        return isFlagSet(this.flags, 512 /* Flag.deoptimizedReturn */);
    }
    set deoptimizedReturn(value) {
        this.flags = setFlag(this.flags, 512 /* Flag.deoptimizedReturn */, value);
    }
    get generator() {
        return isFlagSet(this.flags, 4194304 /* Flag.generator */);
    }
    set generator(value) {
        this.flags = setFlag(this.flags, 4194304 /* Flag.generator */, value);
    }
    get hasCachedEffects() {
        return isFlagSet(this.flags, 67108864 /* Flag.hasEffects */);
    }
    set hasCachedEffects(value) {
        this.flags = setFlag(this.flags, 67108864 /* Flag.hasEffects */, value);
    }
    deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker) {
        if (interaction.type === INTERACTION_CALLED && path.length === 0) {
            this.scope.deoptimizeArgumentsOnCall(interaction);
        }
        else {
            this.getObjectEntity().deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker);
        }
    }
    deoptimizePath(path) {
        this.getObjectEntity().deoptimizePath(path);
        if (path.length === 1 && path[0] === UnknownKey) {
            // A reassignment of UNKNOWN_PATH is considered equivalent to having lost track
            // which means the return expression and parameters need to be reassigned
            this.scope.getReturnExpression().deoptimizePath(UNKNOWN_PATH);
            this.scope.deoptimizeAllParameters();
        }
    }
    getLiteralValueAtPath(path, recursionTracker, origin) {
        return this.getObjectEntity().getLiteralValueAtPath(path, recursionTracker, origin);
    }
    getReturnExpressionWhenCalledAtPath(path, interaction, recursionTracker, origin) {
        if (path.length > 0) {
            return this.getObjectEntity().getReturnExpressionWhenCalledAtPath(path, interaction, recursionTracker, origin);
        }
        if (this.async) {
            if (!this.deoptimizedReturn) {
                this.deoptimizedReturn = true;
                this.scope.getReturnExpression().deoptimizePath(UNKNOWN_PATH);
                this.scope.context.requestTreeshakingPass();
            }
            return UNKNOWN_RETURN_EXPRESSION;
        }
        return [this.scope.getReturnExpression(), false];
    }
    hasEffectsOnInteractionAtPath(path, interaction, context) {
        if (path.length > 0 || interaction.type !== INTERACTION_CALLED) {
            return this.getObjectEntity().hasEffectsOnInteractionAtPath(path, interaction, context);
        }
        if (this.hasCachedEffects) {
            return true;
        }
        if (this.async) {
            const { propertyReadSideEffects } = this.scope.context.options
                .treeshake;
            const returnExpression = this.scope.getReturnExpression();
            if (returnExpression.hasEffectsOnInteractionAtPath(['then'], NODE_INTERACTION_UNKNOWN_CALL, context) ||
                (propertyReadSideEffects &&
                    (propertyReadSideEffects === 'always' ||
                        returnExpression.hasEffectsOnInteractionAtPath(['then'], NODE_INTERACTION_UNKNOWN_ACCESS, context)))) {
                this.hasCachedEffects = true;
                return true;
            }
        }
        const { propertyReadSideEffects } = this.scope.context.options
            .treeshake;
        for (let index = 0; index < this.params.length; index++) {
            const parameter = this.params[index];
            if (parameter.hasEffects(context) ||
                (propertyReadSideEffects &&
                    parameter.hasEffectsWhenDestructuring(context, EMPTY_PATH, interaction.args[index + 1] || UNDEFINED_EXPRESSION))) {
                this.hasCachedEffects = true;
                return true;
            }
        }
        return false;
    }
    /**
     * If the function (expression or declaration) is only used as function calls
     */
    onlyFunctionCallUsed() {
        let variable = null;
        if (this.parent.type === parseAst_js.VariableDeclarator) {
            variable = this.parent.id.variable ?? null;
        }
        if (this.parent.type === parseAst_js.ExportDefaultDeclaration) {
            variable = this.parent.variable;
        }
        return variable?.getOnlyFunctionCallUsed() ?? false;
    }
    include(context, includeChildrenRecursively) {
        if (!this.included)
            this.includeNode(context);
        if (!(this.parameterVariableValuesDeoptimized || this.onlyFunctionCallUsed())) {
            this.parameterVariableValuesDeoptimized = true;
            this.scope.reassignAllParameters();
        }
        const { brokenFlow } = context;
        context.brokenFlow = false;
        this.body.include(context, includeChildrenRecursively);
        context.brokenFlow = brokenFlow;
    }
    initialise() {
        super.initialise();
        if (this.body instanceof BlockStatement) {
            this.body.addImplicitReturnExpressionToScope();
        }
        else {
            this.scope.addReturnExpression(this.body);
        }
        if (this.annotations &&
            this.scope.context.options.treeshake.annotations) {
            this.annotationNoSideEffects = this.annotations.some(comment => comment.type === 'noSideEffects');
        }
    }
    parseNode(esTreeNode) {
        const { body, params } = esTreeNode;
        const { scope } = this;
        const { bodyScope, context } = scope;
        // We need to ensure that parameters are declared before the body is parsed
        // so that the scope already knows all parameters and can detect conflicts
        // when parsing the body.
        const parameters = (this.params = params.map((parameter) => new (context.getNodeConstructor(parameter.type))(this, scope).parseNode(parameter)));
        scope.addParameterVariables(parameters.map(parameter => parameter.declare('parameter', EMPTY_PATH, UNKNOWN_EXPRESSION)), parameters[parameters.length - 1] instanceof RestElement);
        this.body = new (context.getNodeConstructor(body.type))(this, bodyScope).parseNode(body);
        return super.parseNode(esTreeNode);
    }
}
FunctionBase.prototype.preventChildBlockScope = true;
FunctionBase.prototype.includeNode = onlyIncludeSelfNoDeoptimize;
FunctionBase.prototype.applyDeoptimizations = doNotDeoptimize;

class FunctionNode extends FunctionBase {
    constructor() {
        super(...arguments);
        this.objectEntity = null;
    }
    createScope(parentScope) {
        this.scope = new FunctionScope(parentScope, this);
        this.constructedEntity = new ObjectEntity(new Map(), OBJECT_PROTOTYPE);
        // This makes sure that all deoptimizations of "this" are applied to the
        // constructed entity.
        this.scope.thisVariable.addArgumentForDeoptimization(this.constructedEntity);
    }
    deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker) {
        super.deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker);
        if (interaction.type === INTERACTION_CALLED && path.length === 0 && interaction.args[0]) {
            // args[0] is the "this" argument
            this.scope.thisVariable.addArgumentForDeoptimization(interaction.args[0]);
        }
    }
    hasEffects(context) {
        if (this.annotationNoSideEffects) {
            return false;
        }
        return !!this.id?.hasEffects(context);
    }
    hasEffectsOnInteractionAtPath(path, interaction, context) {
        if (this.annotationNoSideEffects &&
            path.length === 0 &&
            interaction.type === INTERACTION_CALLED) {
            return false;
        }
        if (super.hasEffectsOnInteractionAtPath(path, interaction, context)) {
            return true;
        }
        if (path.length === 0 && interaction.type === INTERACTION_CALLED) {
            const thisInit = context.replacedVariableInits.get(this.scope.thisVariable);
            context.replacedVariableInits.set(this.scope.thisVariable, interaction.withNew ? this.constructedEntity : UNKNOWN_EXPRESSION);
            const { brokenFlow, ignore, replacedVariableInits } = context;
            context.ignore = {
                breaks: false,
                continues: false,
                labels: new Set(),
                returnYield: true,
                this: interaction.withNew
            };
            if (this.body.hasEffects(context)) {
                this.hasCachedEffects = true;
                return true;
            }
            context.brokenFlow = brokenFlow;
            if (thisInit) {
                replacedVariableInits.set(this.scope.thisVariable, thisInit);
            }
            else {
                replacedVariableInits.delete(this.scope.thisVariable);
            }
            context.ignore = ignore;
        }
        return false;
    }
    include(context, includeChildrenRecursively) {
        super.include(context, includeChildrenRecursively);
        this.id?.include(context, includeChildrenRecursively);
        const hasArguments = this.scope.argumentsVariable.included;
        for (const parameter of this.params) {
            if (!(parameter instanceof Identifier) || hasArguments) {
                parameter.include(context, includeChildrenRecursively);
            }
        }
    }
    includeNode(context) {
        this.included = true;
        const hasArguments = this.scope.argumentsVariable.included;
        for (const parameter of this.params) {
            if (!(parameter instanceof Identifier) || hasArguments) {
                parameter.includePath(UNKNOWN_PATH, context);
            }
        }
    }
    initialise() {
        super.initialise();
        this.id?.declare('function', EMPTY_PATH, this);
    }
    getObjectEntity() {
        if (this.objectEntity !== null) {
            return this.objectEntity;
        }
        return (this.objectEntity = new ObjectEntity([
            {
                key: 'prototype',
                kind: 'init',
                property: new ObjectEntity([], OBJECT_PROTOTYPE)
            }
        ], OBJECT_PROTOTYPE));
    }
}

class FunctionDeclaration extends FunctionNode {
    initialise() {
        super.initialise();
        if (this.id !== null) {
            this.id.variable.isId = true;
        }
    }
    onlyFunctionCallUsed() {
        // call super.onlyFunctionCallUsed for export default anonymous function
        return this.id?.variable.getOnlyFunctionCallUsed() ?? super.onlyFunctionCallUsed();
    }
    parseNode(esTreeNode) {
        if (esTreeNode.id !== null) {
            this.id = new Identifier(this, this.scope.parent).parseNode(esTreeNode.id);
        }
        return super.parseNode(esTreeNode);
    }
}

// The header ends at the first non-white-space after "default"
function getDeclarationStart(code, start) {
    return findNonWhiteSpace(code, findFirstOccurrenceOutsideComment(code, 'default', start) + 7);
}
function getFunctionIdInsertPosition(code, start) {
    const declarationEnd = findFirstOccurrenceOutsideComment(code, 'function', start) + 'function'.length;
    code = code.slice(declarationEnd, findFirstOccurrenceOutsideComment(code, '(', declarationEnd));
    const generatorStarPos = findFirstOccurrenceOutsideComment(code, '*');
    if (generatorStarPos === -1) {
        return declarationEnd;
    }
    return declarationEnd + generatorStarPos + 1;
}
class ExportDefaultDeclaration extends NodeBase {
    bind() {
        super.bind();
        const name = this.declarationName || this.scope.context.getModuleName();
        // Check if there's already a variable with the same name in the scope. This
        // can cause inconsistencies when using the cache.
        this.variable.name = this.scope.variables.get(name) ? `${name}_default` : name;
    }
    include(context, includeChildrenRecursively) {
        this.included = true;
        this.declaration.include(context, includeChildrenRecursively);
        if (includeChildrenRecursively) {
            this.scope.context.includeVariableInModule(this.variable, UNKNOWN_PATH, context);
        }
    }
    includePath(path, context) {
        this.included = true;
        this.declaration.includePath(path, context);
    }
    initialise() {
        super.initialise();
        const declaration = this.declaration;
        this.declarationName =
            (declaration.id && declaration.id.name) || this.declaration.name;
        this.variable = this.scope.addExportDefaultDeclaration(this, this.scope.context);
        this.scope.context.addExport(this);
    }
    removeAnnotations(code) {
        this.declaration.removeAnnotations(code);
    }
    render(code, options, nodeRenderOptions) {
        const { start, end } = nodeRenderOptions;
        const declarationStart = getDeclarationStart(code.original, this.start);
        if (this.declaration instanceof FunctionDeclaration) {
            this.renderNamedDeclaration(code, declarationStart, this.declaration.id === null
                ? getFunctionIdInsertPosition(code.original, declarationStart)
                : null, options);
        }
        else if (this.declaration instanceof ClassDeclaration) {
            this.renderNamedDeclaration(code, declarationStart, this.declaration.id === null
                ? findFirstOccurrenceOutsideComment(code.original, 'class', start) + 'class'.length
                : null, options);
        }
        else if (this.variable.getOriginalVariable() !== this.variable) {
            // Remove altogether to prevent redeclaring the same variable
            treeshakeNode(this, code, start, end);
            return;
        }
        else if (this.variable.included) {
            this.renderVariableDeclaration(code, declarationStart, options);
        }
        else {
            code.remove(this.start, declarationStart);
            this.declaration.render(code, options, {
                renderedSurroundingElement: parseAst_js.ExpressionStatement
            });
            if (code.original[this.end - 1] !== ';') {
                code.appendLeft(this.end, ';');
            }
            return;
        }
        this.declaration.render(code, options);
    }
    renderNamedDeclaration(code, declarationStart, idInsertPosition, options) {
        const { exportNamesByVariable, format, snippets: { getPropertyAccess } } = options;
        const name = this.variable.getName(getPropertyAccess);
        // Remove `export default`
        code.remove(this.start, declarationStart);
        if (idInsertPosition !== null) {
            code.appendLeft(idInsertPosition, ` ${name}`);
        }
        if (format === 'system' &&
            this.declaration instanceof ClassDeclaration &&
            exportNamesByVariable.has(this.variable)) {
            code.appendLeft(this.end, ` ${getSystemExportStatement([this.variable], options)};`);
        }
    }
    renderVariableDeclaration(code, declarationStart, { format, exportNamesByVariable, snippets: { cnst, getPropertyAccess } }) {
        const hasTrailingSemicolon = code.original.charCodeAt(this.end - 1) === 59; /*";"*/
        const systemExportNames = format === 'system' && exportNamesByVariable.get(this.variable);
        if (systemExportNames) {
            code.overwrite(this.start, declarationStart, `${cnst} ${this.variable.getName(getPropertyAccess)} = exports(${JSON.stringify(systemExportNames[0])}, `);
            code.appendRight(hasTrailingSemicolon ? this.end - 1 : this.end, ')' + (hasTrailingSemicolon ? '' : ';'));
        }
        else {
            code.overwrite(this.start, declarationStart, `${cnst} ${this.variable.getName(getPropertyAccess)} = `);
            if (!hasTrailingSemicolon) {
                code.appendLeft(this.end, ';');
            }
        }
    }
}
ExportDefaultDeclaration.prototype.needsBoundaries = true;
ExportDefaultDeclaration.prototype.includeNode = onlyIncludeSelfNoDeoptimize;
ExportDefaultDeclaration.prototype.applyDeoptimizations = doNotDeoptimize;

const needsEscapeRegEx = /[\n\r'\\\u2028\u2029]/;
const quoteNewlineRegEx = /([\n\r'\u2028\u2029])/g;
const backSlashRegEx = /\\/g;
function escapeId(id) {
    if (!needsEscapeRegEx.test(id))
        return id;
    return id.replace(backSlashRegEx, '\\\\').replace(quoteNewlineRegEx, '\\$1');
}

const INTEROP_DEFAULT_VARIABLE = '_interopDefault';
const INTEROP_DEFAULT_COMPAT_VARIABLE = '_interopDefaultCompat';
const INTEROP_NAMESPACE_VARIABLE = '_interopNamespace';
const INTEROP_NAMESPACE_COMPAT_VARIABLE = '_interopNamespaceCompat';
const INTEROP_NAMESPACE_DEFAULT_VARIABLE = '_interopNamespaceDefault';
const INTEROP_NAMESPACE_DEFAULT_ONLY_VARIABLE = '_interopNamespaceDefaultOnly';
const MERGE_NAMESPACES_VARIABLE = '_mergeNamespaces';
const DOCUMENT_CURRENT_SCRIPT = '_documentCurrentScript';
const defaultInteropHelpersByInteropType = {
    auto: INTEROP_DEFAULT_VARIABLE,
    compat: INTEROP_DEFAULT_COMPAT_VARIABLE,
    default: null,
    defaultOnly: null,
    esModule: null
};
const isDefaultAProperty = (interopType, externalLiveBindings) => interopType === 'esModule' ||
    (externalLiveBindings && (interopType === 'auto' || interopType === 'compat'));
const namespaceInteropHelpersByInteropType = {
    auto: INTEROP_NAMESPACE_VARIABLE,
    compat: INTEROP_NAMESPACE_COMPAT_VARIABLE,
    default: INTEROP_NAMESPACE_DEFAULT_VARIABLE,
    defaultOnly: INTEROP_NAMESPACE_DEFAULT_ONLY_VARIABLE,
    esModule: null
};
const canDefaultBeTakenFromNamespace = (interopType, externalLiveBindings) => interopType !== 'esModule' && isDefaultAProperty(interopType, externalLiveBindings);
const getHelpersBlock = (additionalHelpers, accessedGlobals, indent, snippets, liveBindings, freeze, symbols) => {
    const usedHelpers = new Set(additionalHelpers);
    for (const variable of HELPER_NAMES) {
        if (accessedGlobals.has(variable)) {
            usedHelpers.add(variable);
        }
    }
    return HELPER_NAMES.map(variable => usedHelpers.has(variable)
        ? HELPER_GENERATORS[variable](indent, snippets, liveBindings, freeze, symbols, usedHelpers)
        : '').join('');
};
const HELPER_GENERATORS = {
    [DOCUMENT_CURRENT_SCRIPT](_t, { _, n }) {
        return `var ${DOCUMENT_CURRENT_SCRIPT}${_}=${_}typeof document${_}!==${_}'undefined'${_}?${_}document.currentScript${_}:${_}null;${n}`;
    },
    [INTEROP_DEFAULT_COMPAT_VARIABLE](_t, snippets, liveBindings) {
        const { _, getDirectReturnFunction, n } = snippets;
        const [left, right] = getDirectReturnFunction(['e'], {
            functionReturn: true,
            lineBreakIndent: null,
            name: INTEROP_DEFAULT_COMPAT_VARIABLE
        });
        return (`${left}${getIsCompatNamespace(snippets)}${_}?${_}` +
            `${liveBindings ? getDefaultLiveBinding(snippets) : getDefaultStatic(snippets)}${right}${n}${n}`);
    },
    [INTEROP_DEFAULT_VARIABLE](_t, snippets, liveBindings) {
        const { _, getDirectReturnFunction, n } = snippets;
        const [left, right] = getDirectReturnFunction(['e'], {
            functionReturn: true,
            lineBreakIndent: null,
            name: INTEROP_DEFAULT_VARIABLE
        });
        return (`${left}e${_}&&${_}e.__esModule${_}?${_}` +
            `${liveBindings ? getDefaultLiveBinding(snippets) : getDefaultStatic(snippets)}${right}${n}${n}`);
    },
    [INTEROP_NAMESPACE_COMPAT_VARIABLE](t, snippets, liveBindings, freeze, symbols, usedHelpers) {
        const { _, getDirectReturnFunction, n } = snippets;
        if (usedHelpers.has(INTEROP_NAMESPACE_DEFAULT_VARIABLE)) {
            const [left, right] = getDirectReturnFunction(['e'], {
                functionReturn: true,
                lineBreakIndent: null,
                name: INTEROP_NAMESPACE_COMPAT_VARIABLE
            });
            return `${left}${getIsCompatNamespace(snippets)}${_}?${_}e${_}:${_}${INTEROP_NAMESPACE_DEFAULT_VARIABLE}(e)${right}${n}${n}`;
        }
        return (`function ${INTEROP_NAMESPACE_COMPAT_VARIABLE}(e)${_}{${n}` +
            `${t}if${_}(${getIsCompatNamespace(snippets)})${_}return e;${n}` +
            createNamespaceObject(t, t, snippets, liveBindings, freeze, symbols) +
            `}${n}${n}`);
    },
    [INTEROP_NAMESPACE_DEFAULT_ONLY_VARIABLE](_t, snippets, _liveBindings, freeze, symbols) {
        const { getDirectReturnFunction, getObject, n, _ } = snippets;
        const [left, right] = getDirectReturnFunction(['e'], {
            functionReturn: true,
            lineBreakIndent: null,
            name: INTEROP_NAMESPACE_DEFAULT_ONLY_VARIABLE
        });
        return `${left}${getFrozen(freeze, getWithToStringTag(symbols, getObject([
            [null, `__proto__:${_}null`],
            ['default', 'e']
        ], { lineBreakIndent: null }), snippets))}${right}${n}${n}`;
    },
    [INTEROP_NAMESPACE_DEFAULT_VARIABLE](t, snippets, liveBindings, freeze, symbols) {
        const { _, n } = snippets;
        return (`function ${INTEROP_NAMESPACE_DEFAULT_VARIABLE}(e)${_}{${n}` +
            createNamespaceObject(t, t, snippets, liveBindings, freeze, symbols) +
            `}${n}${n}`);
    },
    [INTEROP_NAMESPACE_VARIABLE](t, snippets, liveBindings, freeze, symbols, usedHelpers) {
        const { _, getDirectReturnFunction, n } = snippets;
        if (usedHelpers.has(INTEROP_NAMESPACE_DEFAULT_VARIABLE)) {
            const [left, right] = getDirectReturnFunction(['e'], {
                functionReturn: true,
                lineBreakIndent: null,
                name: INTEROP_NAMESPACE_VARIABLE
            });
            return `${left}e${_}&&${_}e.__esModule${_}?${_}e${_}:${_}${INTEROP_NAMESPACE_DEFAULT_VARIABLE}(e)${right}${n}${n}`;
        }
        return (`function ${INTEROP_NAMESPACE_VARIABLE}(e)${_}{${n}` +
            `${t}if${_}(e${_}&&${_}e.__esModule)${_}return e;${n}` +
            createNamespaceObject(t, t, snippets, liveBindings, freeze, symbols) +
            `}${n}${n}`);
    },
    [MERGE_NAMESPACES_VARIABLE](t, snippets, liveBindings, freeze, symbols) {
        const { _, cnst, n } = snippets;
        const useForEach = cnst === 'var' && liveBindings;
        return (`function ${MERGE_NAMESPACES_VARIABLE}(n, m)${_}{${n}` +
            `${t}${loopOverNamespaces(`{${n}` +
                `${t}${t}${t}if${_}(k${_}!==${_}'default'${_}&&${_}!(k in n))${_}{${n}` +
                (liveBindings
                    ? useForEach
                        ? copyOwnPropertyLiveBinding
                        : copyPropertyLiveBinding
                    : copyPropertyStatic)(t, t + t + t + t, snippets) +
                `${t}${t}${t}}${n}` +
                `${t}${t}}`, useForEach, t, snippets)}${n}` +
            `${t}return ${getFrozen(freeze, getWithToStringTag(symbols, 'n', snippets))};${n}` +
            `}${n}${n}`);
    }
};
const getDefaultLiveBinding = ({ _, getObject }) => `e${_}:${_}${getObject([['default', 'e']], { lineBreakIndent: null })}`;
const getDefaultStatic = ({ _, getPropertyAccess }) => `e${getPropertyAccess('default')}${_}:${_}e`;
const getIsCompatNamespace = ({ _ }) => `e${_}&&${_}typeof e${_}===${_}'object'${_}&&${_}'default'${_}in e`;
const createNamespaceObject = (t, index, snippets, liveBindings, freeze, symbols) => {
    const { _, cnst, getObject, getPropertyAccess, n, s } = snippets;
    const copyProperty = `{${n}` +
        (liveBindings ? copyNonDefaultOwnPropertyLiveBinding : copyPropertyStatic)(t, index + t + t, snippets) +
        `${index}${t}}`;
    return (`${index}${cnst} n${_}=${_}Object.create(null${symbols ? `,${_}{${_}[Symbol.toStringTag]:${_}${getToStringTagValue(getObject)}${_}}` : ''});${n}` +
        `${index}if${_}(e)${_}{${n}` +
        `${index}${t}${loopOverKeys(copyProperty, !liveBindings, snippets)}${n}` +
        `${index}}${n}` +
        `${index}n${getPropertyAccess('default')}${_}=${_}e;${n}` +
        `${index}return ${getFrozen(freeze, 'n')}${s}${n}`);
};
const loopOverKeys = (body, allowVariableLoopVariable, { _, cnst, getFunctionIntro, s }) => cnst !== 'var' || allowVariableLoopVariable
    ? `for${_}(${cnst} k in e)${_}${body}`
    : `Object.keys(e).forEach(${getFunctionIntro(['k'], {
        isAsync: false,
        name: null
    })}${body})${s}`;
const loopOverNamespaces = (body, useForEach, t, { _, cnst, getDirectReturnFunction, getFunctionIntro, n }) => {
    if (useForEach) {
        const [left, right] = getDirectReturnFunction(['e'], {
            functionReturn: false,
            lineBreakIndent: { base: t, t },
            name: null
        });
        return (`m.forEach(${left}` +
            `e${_}&&${_}typeof e${_}!==${_}'string'${_}&&${_}!Array.isArray(e)${_}&&${_}Object.keys(e).forEach(${getFunctionIntro(['k'], {
                isAsync: false,
                name: null
            })}${body})${right});`);
    }
    return (`for${_}(var i${_}=${_}0;${_}i${_}<${_}m.length;${_}i++)${_}{${n}` +
        `${t}${t}${cnst} e${_}=${_}m[i];${n}` +
        `${t}${t}if${_}(typeof e${_}!==${_}'string'${_}&&${_}!Array.isArray(e))${_}{${_}for${_}(${cnst} k in e)${_}${body}${_}}${n}${t}}`);
};
const copyNonDefaultOwnPropertyLiveBinding = (t, index, snippets) => {
    const { _, n } = snippets;
    return (`${index}if${_}(k${_}!==${_}'default')${_}{${n}` +
        copyOwnPropertyLiveBinding(t, index + t, snippets) +
        `${index}}${n}`);
};
const copyOwnPropertyLiveBinding = (t, index, { _, cnst, getDirectReturnFunction, n }) => {
    const [left, right] = getDirectReturnFunction([], {
        functionReturn: true,
        lineBreakIndent: null,
        name: null
    });
    return (`${index}${cnst} d${_}=${_}Object.getOwnPropertyDescriptor(e,${_}k);${n}` +
        `${index}Object.defineProperty(n,${_}k,${_}d.get${_}?${_}d${_}:${_}{${n}` +
        `${index}${t}enumerable:${_}true,${n}` +
        `${index}${t}get:${_}${left}e[k]${right}${n}` +
        `${index}});${n}`);
};
const copyPropertyLiveBinding = (t, index, { _, cnst, getDirectReturnFunction, n }) => {
    const [left, right] = getDirectReturnFunction([], {
        functionReturn: true,
        lineBreakIndent: null,
        name: null
    });
    return (`${index}${cnst} d${_}=${_}Object.getOwnPropertyDescriptor(e,${_}k);${n}` +
        `${index}if${_}(d)${_}{${n}` +
        `${index}${t}Object.defineProperty(n,${_}k,${_}d.get${_}?${_}d${_}:${_}{${n}` +
        `${index}${t}${t}enumerable:${_}true,${n}` +
        `${index}${t}${t}get:${_}${left}e[k]${right}${n}` +
        `${index}${t}});${n}` +
        `${index}}${n}`);
};
const copyPropertyStatic = (_t, index, { _, n }) => `${index}n[k]${_}=${_}e[k];${n}`;
const getFrozen = (freeze, fragment) => freeze ? `Object.freeze(${fragment})` : fragment;
const getWithToStringTag = (symbols, fragment, { _, getObject }) => symbols
    ? `Object.defineProperty(${fragment},${_}Symbol.toStringTag,${_}${getToStringTagValue(getObject)})`
    : fragment;
const HELPER_NAMES = Object.keys(HELPER_GENERATORS);
function getToStringTagValue(getObject) {
    return getObject([['value', "'Module'"]], {
        lineBreakIndent: null
    });
}

class Literal extends NodeBase {
    deoptimizeArgumentsOnInteractionAtPath() { }
    getLiteralValueAtPath(path) {
        if (path.length > 0 ||
            // unknown literals can also be null but do not start with an "n"
            (this.value === null && this.scope.context.code.charCodeAt(this.start) !== 110) ||
            typeof this.value === 'bigint' ||
            // to support shims for regular expressions
            this.scope.context.code.charCodeAt(this.start) === 47) {
            return UnknownValue;
        }
        return this.value;
    }
    getReturnExpressionWhenCalledAtPath(path) {
        if (path.length !== 1)
            return UNKNOWN_RETURN_EXPRESSION;
        return getMemberReturnExpressionWhenCalled(this.members, path[0]);
    }
    hasEffectsOnInteractionAtPath(path, interaction, context) {
        switch (interaction.type) {
            case INTERACTION_ACCESSED: {
                return path.length > (this.value === null ? 0 : 1);
            }
            case INTERACTION_ASSIGNED: {
                return true;
            }
            case INTERACTION_CALLED: {
                if (this.included &&
                    this.value instanceof RegExp &&
                    (this.value.global || this.value.sticky)) {
                    return true;
                }
                return (path.length !== 1 ||
                    hasMemberEffectWhenCalled(this.members, path[0], interaction, context));
            }
        }
    }
    initialise() {
        super.initialise();
        this.members = getLiteralMembersForValue(this.value);
    }
    parseNode(esTreeNode) {
        this.value = esTreeNode.value;
        this.regex = esTreeNode.regex;
        return super.parseNode(esTreeNode);
    }
    render(code) {
        if (typeof this.value === 'string') {
            code.indentExclusionRanges.push([this.start + 1, this.end - 1]);
        }
    }
}
Literal.prototype.includeNode = onlyIncludeSelf;

function getChainElementLiteralValueAtPath(element, object, path, recursionTracker, origin) {
    if ('getLiteralValueAtPathAsChainElement' in object) {
        const calleeValue = object.getLiteralValueAtPathAsChainElement(EMPTY_PATH, SHARED_RECURSION_TRACKER, origin);
        if (calleeValue === IS_SKIPPED_CHAIN || (element.optional && calleeValue == null)) {
            return IS_SKIPPED_CHAIN;
        }
    }
    else if (element.optional &&
        object.getLiteralValueAtPath(EMPTY_PATH, SHARED_RECURSION_TRACKER, origin) == null) {
        return IS_SKIPPED_CHAIN;
    }
    return element.getLiteralValueAtPath(path, recursionTracker, origin);
}

function getResolvablePropertyKey(memberExpression) {
    return memberExpression.computed
        ? getResolvableComputedPropertyKey(memberExpression.property)
        : memberExpression.property.name;
}
function getResolvableComputedPropertyKey(propertyKey) {
    if (propertyKey instanceof Literal) {
        return String(propertyKey.value);
    }
    return null;
}
function getPathIfNotComputed(memberExpression) {
    const nextPathKey = memberExpression.propertyKey;
    const object = memberExpression.object;
    if (typeof nextPathKey === 'string') {
        if (object instanceof Identifier) {
            return [
                { key: object.name, pos: object.start },
                { key: nextPathKey, pos: memberExpression.property.start }
            ];
        }
        if (object instanceof MemberExpression) {
            const parentPath = getPathIfNotComputed(object);
            return (parentPath && [...parentPath, { key: nextPathKey, pos: memberExpression.property.start }]);
        }
    }
    return null;
}
function getStringFromPath(path) {
    let pathString = path[0].key;
    for (let index = 1; index < path.length; index++) {
        pathString += '.' + path[index].key;
    }
    return pathString;
}
class MemberExpression extends NodeBase {
    constructor() {
        super(...arguments);
        this.promiseHandler = null;
        this.variable = null;
        this.expressionsToBeDeoptimized = [];
    }
    get computed() {
        return isFlagSet(this.flags, 1024 /* Flag.computed */);
    }
    set computed(value) {
        this.flags = setFlag(this.flags, 1024 /* Flag.computed */, value);
    }
    get optional() {
        return isFlagSet(this.flags, 128 /* Flag.optional */);
    }
    set optional(value) {
        this.flags = setFlag(this.flags, 128 /* Flag.optional */, value);
    }
    get assignmentDeoptimized() {
        return isFlagSet(this.flags, 16 /* Flag.assignmentDeoptimized */);
    }
    set assignmentDeoptimized(value) {
        this.flags = setFlag(this.flags, 16 /* Flag.assignmentDeoptimized */, value);
    }
    get bound() {
        return isFlagSet(this.flags, 32 /* Flag.bound */);
    }
    set bound(value) {
        this.flags = setFlag(this.flags, 32 /* Flag.bound */, value);
    }
    get isUndefined() {
        return isFlagSet(this.flags, 64 /* Flag.isUndefined */);
    }
    set isUndefined(value) {
        this.flags = setFlag(this.flags, 64 /* Flag.isUndefined */, value);
    }
    bind() {
        this.bound = true;
        const path = getPathIfNotComputed(this);
        const baseVariable = path && this.scope.findVariable(path[0].key);
        if (baseVariable?.isNamespace) {
            const resolvedVariable = resolveNamespaceVariables(baseVariable, path.slice(1), this.scope.context);
            if (!resolvedVariable) {
                super.bind();
            }
            else if (resolvedVariable === 'undefined') {
                this.isUndefined = true;
            }
            else {
                this.variable = resolvedVariable;
                this.scope.addNamespaceMemberAccess(getStringFromPath(path), resolvedVariable);
            }
        }
        else {
            super.bind();
        }
    }
    deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker) {
        if (this.promiseHandler) {
            this.promiseHandler.deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker);
        }
        else if (this.variable) {
            this.variable.deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker);
        }
        else if (!this.isUndefined) {
            if (path.length < MAX_PATH_DEPTH) {
                this.object.deoptimizeArgumentsOnInteractionAtPath(interaction, this.propertyKey === UnknownKey ? UNKNOWN_PATH : [this.propertyKey, ...path], recursionTracker);
            }
            else {
                deoptimizeInteraction(interaction);
            }
        }
    }
    deoptimizeAssignment(destructuredInitPath, init) {
        this.deoptimizePath(EMPTY_PATH);
        init.deoptimizePath([...destructuredInitPath, UnknownKey]);
    }
    deoptimizeCache() {
        if (this.propertyKey === this.dynamicPropertyKey)
            return;
        const { expressionsToBeDeoptimized, object } = this;
        this.expressionsToBeDeoptimized = parseAst_js.EMPTY_ARRAY;
        this.dynamicPropertyKey = this.propertyKey;
        object.deoptimizePath(UNKNOWN_PATH);
        if (this.included) {
            object.includePath(UNKNOWN_PATH, createInclusionContext());
        }
        for (const expression of expressionsToBeDeoptimized) {
            expression.deoptimizeCache();
        }
    }
    deoptimizePath(path) {
        if (path.length === 0)
            this.disallowNamespaceReassignment();
        if (this.variable) {
            this.variable.deoptimizePath(path);
        }
        else if (!this.isUndefined) {
            const { propertyKey } = this;
            this.object.deoptimizePath([
                propertyKey === UnknownKey ? UnknownNonAccessorKey : propertyKey,
                ...(path.length < MAX_PATH_DEPTH
                    ? path
                    : [...path.slice(0, MAX_PATH_DEPTH), UnknownKey])
            ]);
        }
    }
    getLiteralValueAtPath(path, recursionTracker, origin) {
        if (this.variable) {
            return this.variable.getLiteralValueAtPath(path, recursionTracker, origin);
        }
        if (this.isUndefined) {
            return undefined;
        }
        const propertyKey = this.getDynamicPropertyKey();
        if (propertyKey !== UnknownKey && path.length < MAX_PATH_DEPTH) {
            if (propertyKey !== this.propertyKey)
                this.expressionsToBeDeoptimized.push(origin);
            return this.object.getLiteralValueAtPath([propertyKey, ...path], recursionTracker, origin);
        }
        return UnknownValue;
    }
    getLiteralValueAtPathAsChainElement(path, recursionTracker, origin) {
        if (this.variable) {
            return this.variable.getLiteralValueAtPath(path, recursionTracker, origin);
        }
        if (this.isUndefined) {
            return undefined;
        }
        return getChainElementLiteralValueAtPath(this, this.object, path, recursionTracker, origin);
    }
    getReturnExpressionWhenCalledAtPath(path, interaction, recursionTracker, origin) {
        if (this.variable) {
            return this.variable.getReturnExpressionWhenCalledAtPath(path, interaction, recursionTracker, origin);
        }
        if (this.isUndefined) {
            return [UNDEFINED_EXPRESSION, false];
        }
        const propertyKey = this.getDynamicPropertyKey();
        if (propertyKey !== UnknownKey && path.length < MAX_PATH_DEPTH) {
            if (propertyKey !== this.propertyKey)
                this.expressionsToBeDeoptimized.push(origin);
            return this.object.getReturnExpressionWhenCalledAtPath([propertyKey, ...path], interaction, recursionTracker, origin);
        }
        return UNKNOWN_RETURN_EXPRESSION;
    }
    hasEffects(context) {
        if (!this.deoptimized)
            this.applyDeoptimizations();
        return (this.property.hasEffects(context) ||
            this.object.hasEffects(context) ||
            this.hasAccessEffect(context));
    }
    hasEffectsAsChainElement(context) {
        if (this.variable || this.isUndefined)
            return this.hasEffects(context);
        const objectHasEffects = 'hasEffectsAsChainElement' in this.object
            ? this.object.hasEffectsAsChainElement(context)
            : this.object.hasEffects(context);
        if (objectHasEffects === IS_SKIPPED_CHAIN)
            return IS_SKIPPED_CHAIN;
        if (this.optional &&
            this.object.getLiteralValueAtPath(EMPTY_PATH, SHARED_RECURSION_TRACKER, this) == null) {
            return objectHasEffects || IS_SKIPPED_CHAIN;
        }
        // We only apply deoptimizations lazily once we know we are not skipping
        if (!this.deoptimized)
            this.applyDeoptimizations();
        return objectHasEffects || this.property.hasEffects(context) || this.hasAccessEffect(context);
    }
    hasEffectsAsAssignmentTarget(context, checkAccess) {
        if (checkAccess && !this.deoptimized)
            this.applyDeoptimizations();
        if (!this.assignmentDeoptimized)
            this.applyAssignmentDeoptimization();
        return (this.property.hasEffects(context) ||
            this.object.hasEffects(context) ||
            (checkAccess && this.hasAccessEffect(context)) ||
            this.hasEffectsOnInteractionAtPath(EMPTY_PATH, this.assignmentInteraction, context));
    }
    hasEffectsOnInteractionAtPath(path, interaction, context) {
        if (this.variable) {
            return this.variable.hasEffectsOnInteractionAtPath(path, interaction, context);
        }
        if (this.isUndefined) {
            return true;
        }
        if (path.length < MAX_PATH_DEPTH) {
            return this.object.hasEffectsOnInteractionAtPath([this.getDynamicPropertyKey(), ...path], interaction, context);
        }
        return true;
    }
    hasEffectsWhenDestructuring(context, destructuredInitPath, init) {
        return (destructuredInitPath.length > 0 &&
            init.hasEffectsOnInteractionAtPath(destructuredInitPath, NODE_INTERACTION_UNKNOWN_ACCESS, context));
    }
    include(context, includeChildrenRecursively) {
        if (!this.included)
            this.includeNode(context);
        this.object.include(context, includeChildrenRecursively);
        this.property.include(context, includeChildrenRecursively);
        if (includeChildrenRecursively) {
            this.variable?.includePath(UNKNOWN_PATH, context);
        }
    }
    includeNode(context) {
        this.included = true;
        if (!this.deoptimized)
            this.applyDeoptimizations();
        if (this.variable) {
            this.scope.context.includeVariableInModule(this.variable, EMPTY_PATH, context);
        }
        else if (!this.isUndefined) {
            this.object.includePath([this.propertyKey], context);
        }
    }
    includeNodeAsAssignmentTarget(context) {
        this.included = true;
        if (!this.assignmentDeoptimized)
            this.applyAssignmentDeoptimization();
        if (this.variable) {
            this.scope.context.includeVariableInModule(this.variable, EMPTY_PATH, context);
        }
        else if (!this.isUndefined) {
            this.object.includePath([this.propertyKey], context);
        }
    }
    includePath(path, context) {
        if (!this.included)
            this.includeNode(context);
        if (this.variable) {
            this.variable?.includePath(path, context);
        }
        else if (!this.isUndefined) {
            this.object.includePath([
                this.propertyKey,
                ...(path.length < MAX_PATH_DEPTH
                    ? path
                    : [...path.slice(0, MAX_PATH_DEPTH), UnknownKey])
            ], context);
        }
    }
    includeAsAssignmentTarget(context, includeChildrenRecursively, deoptimizeAccess) {
        if (!this.included)
            this.includeNodeAsAssignmentTarget(context);
        if (deoptimizeAccess && !this.deoptimized)
            this.applyDeoptimizations();
        this.object.include(context, includeChildrenRecursively);
        this.property.include(context, includeChildrenRecursively);
    }
    includeCallArguments(interaction, context) {
        if (this.promiseHandler) {
            this.promiseHandler.includeCallArguments(interaction, context);
        }
        else if (this.variable) {
            this.variable.includeCallArguments(interaction, context);
        }
        else {
            includeInteraction(interaction, context);
        }
    }
    includeDestructuredIfNecessary() {
        /* istanbul ignore next */
        this.scope.context.error({
            message: 'includeDestructuredIfNecessary is currently not supported for MemberExpressions'
        }, this.start);
    }
    initialise() {
        super.initialise();
        this.dynamicPropertyKey = getResolvablePropertyKey(this);
        this.propertyKey = this.dynamicPropertyKey === null ? UnknownKey : this.dynamicPropertyKey;
        this.accessInteraction = { args: [this.object], type: INTERACTION_ACCESSED };
    }
    render(code, options, { renderedParentType, isCalleeOfRenderedParent, renderedSurroundingElement } = parseAst_js.BLANK) {
        if (this.variable || this.isUndefined) {
            const { snippets: { getPropertyAccess } } = options;
            let replacement = this.variable ? this.variable.getName(getPropertyAccess) : 'undefined';
            if (renderedParentType && isCalleeOfRenderedParent)
                replacement = '0, ' + replacement;
            code.overwrite(this.start, this.end, replacement, {
                contentOnly: true,
                storeName: true
            });
        }
        else {
            if (renderedParentType && isCalleeOfRenderedParent) {
                code.appendRight(this.start, '0, ');
            }
            this.object.render(code, options, { renderedSurroundingElement });
            this.property.render(code, options);
        }
    }
    setAssignedValue(value) {
        this.assignmentInteraction = {
            args: [this.object, value],
            type: INTERACTION_ASSIGNED
        };
    }
    applyDeoptimizations() {
        this.deoptimized = true;
        const { propertyReadSideEffects } = this.scope.context.options
            .treeshake;
        if (
        // Namespaces are not bound and should not be deoptimized
        this.bound &&
            propertyReadSideEffects &&
            !(this.variable || this.isUndefined || this.promiseHandler)) {
            this.object.deoptimizeArgumentsOnInteractionAtPath(this.accessInteraction, [this.propertyKey], SHARED_RECURSION_TRACKER);
            this.scope.context.requestTreeshakingPass();
        }
        if (this.variable) {
            this.variable.addUsedPlace(this);
            this.scope.context.requestTreeshakingPass();
        }
    }
    applyAssignmentDeoptimization() {
        this.assignmentDeoptimized = true;
        const { propertyReadSideEffects } = this.scope.context.options
            .treeshake;
        if (
        // Namespaces are not bound and should not be deoptimized
        this.bound &&
            propertyReadSideEffects &&
            !(this.variable || this.isUndefined)) {
            this.object.deoptimizeArgumentsOnInteractionAtPath(this.assignmentInteraction, [this.propertyKey], SHARED_RECURSION_TRACKER);
            this.scope.context.requestTreeshakingPass();
        }
    }
    disallowNamespaceReassignment() {
        if (this.object instanceof Identifier) {
            const variable = this.scope.findVariable(this.object.name);
            if (variable.isNamespace) {
                if (this.variable) {
                    this.scope.context.includeVariableInModule(this.variable, UNKNOWN_PATH, createInclusionContext());
                }
                this.scope.context.log(parseAst_js.LOGLEVEL_WARN, parseAst_js.logIllegalImportReassignment(this.object.name, this.scope.context.module.id), this.start);
            }
        }
    }
    getDynamicPropertyKey() {
        if (this.dynamicPropertyKey === null) {
            this.dynamicPropertyKey = this.propertyKey;
            const value = this.property.getLiteralValueAtPath(EMPTY_PATH, SHARED_RECURSION_TRACKER, this);
            return (this.dynamicPropertyKey =
                typeof value === 'symbol'
                    ? WELL_KNOWN_SYMBOLS.has(value)
                        ? value
                        : UnknownKey
                    : String(value));
        }
        return this.dynamicPropertyKey;
    }
    hasAccessEffect(context) {
        const { propertyReadSideEffects } = this.scope.context.options
            .treeshake;
        return (!(this.variable || this.isUndefined) &&
            propertyReadSideEffects &&
            (propertyReadSideEffects === 'always' ||
                this.object.hasEffectsOnInteractionAtPath([this.getDynamicPropertyKey()], this.accessInteraction, context)));
    }
}
function resolveNamespaceVariables(baseVariable, path, astContext) {
    if (path.length === 0)
        return baseVariable;
    if (!baseVariable.isNamespace || baseVariable instanceof ExternalVariable)
        return null;
    const exportName = path[0].key;
    const [variable, options] = baseVariable.context.traceExport(exportName);
    if (!variable) {
        if (path.length === 1) {
            const fileName = baseVariable.context.fileName;
            astContext.log(parseAst_js.LOGLEVEL_WARN, parseAst_js.logMissingExport(exportName, astContext.module.id, fileName, !!options?.missingButExportExists), path[0].pos);
            return 'undefined';
        }
        return null;
    }
    return resolveNamespaceVariables(variable, path.slice(1), astContext);
}

const FILE_PREFIX = 'ROLLUP_FILE_URL_';
const FILE_OBJ_PREFIX = 'ROLLUP_FILE_URL_OBJ_';
const IMPORT = 'import';
class MetaProperty extends NodeBase {
    constructor() {
        super(...arguments);
        this.metaProperty = null;
        this.preliminaryChunkId = null;
        this.referenceId = null;
    }
    getReferencedFileName(outputPluginDriver) {
        const { meta: { name }, metaProperty } = this;
        if (name === IMPORT) {
            if (metaProperty?.startsWith(FILE_OBJ_PREFIX)) {
                return outputPluginDriver.getFileName(metaProperty.slice(FILE_OBJ_PREFIX.length));
            }
            else if (metaProperty?.startsWith(FILE_PREFIX)) {
                return outputPluginDriver.getFileName(metaProperty.slice(FILE_PREFIX.length));
            }
        }
        return null;
    }
    hasEffects() {
        return false;
    }
    hasEffectsOnInteractionAtPath(path, { type }) {
        return path.length > 1 || type !== INTERACTION_ACCESSED;
    }
    include() {
        if (!this.included)
            this.includeNode();
    }
    includeNode() {
        this.included = true;
        if (this.meta.name === IMPORT) {
            this.scope.context.addImportMeta(this);
            const parent = this.parent;
            const metaProperty = (this.metaProperty =
                parent instanceof MemberExpression && typeof parent.propertyKey === 'string'
                    ? parent.propertyKey
                    : null);
            if (metaProperty?.startsWith(FILE_OBJ_PREFIX)) {
                this.referenceId = metaProperty.slice(FILE_OBJ_PREFIX.length);
            }
            else if (metaProperty?.startsWith(FILE_PREFIX)) {
                this.referenceId = metaProperty.slice(FILE_PREFIX.length);
            }
        }
    }
    render(code, renderOptions) {
        const { format, pluginDriver, snippets } = renderOptions;
        const { scope: { context: { module } }, meta: { name }, metaProperty, parent, preliminaryChunkId, referenceId, start, end } = this;
        const { id: moduleId, info: { attributes } } = module;
        if (name !== IMPORT)
            return;
        const chunkId = preliminaryChunkId;
        if (referenceId) {
            const fileName = pluginDriver.getFileName(referenceId);
            const relativePath = parseAst_js.normalize(path.relative(path.dirname(chunkId), fileName));
            const isUrlObject = !!metaProperty?.startsWith(FILE_OBJ_PREFIX);
            const replacement = pluginDriver.hookFirstSync('resolveFileUrl', [
                { attributes, chunkId, fileName, format, moduleId, referenceId, relativePath }
            ]) || relativeUrlMechanisms[format](relativePath, isUrlObject);
            code.overwrite(parent.start, parent.end, replacement, { contentOnly: true });
            return;
        }
        let replacement = pluginDriver.hookFirstSync('resolveImportMeta', [
            metaProperty,
            { attributes, chunkId, format, moduleId }
        ]);
        if (!replacement) {
            replacement = importMetaMechanisms[format]?.(metaProperty, { chunkId, snippets });
            renderOptions.accessedDocumentCurrentScript ||=
                formatsMaybeAccessDocumentCurrentScript.includes(format) && replacement !== 'undefined';
        }
        if (typeof replacement === 'string') {
            if (parent instanceof MemberExpression) {
                code.overwrite(parent.start, parent.end, replacement, { contentOnly: true });
            }
            else {
                code.overwrite(start, end, replacement, { contentOnly: true });
            }
        }
    }
    setResolution(format, accessedGlobalsByScope, preliminaryChunkId) {
        this.preliminaryChunkId = preliminaryChunkId;
        const accessedGlobals = (this.metaProperty?.startsWith(FILE_PREFIX) || this.metaProperty?.startsWith(FILE_OBJ_PREFIX)
            ? accessedFileUrlGlobals
            : accessedMetaUrlGlobals)[format];
        if (accessedGlobals.length > 0) {
            this.scope.addAccessedGlobals(accessedGlobals, accessedGlobalsByScope);
        }
    }
}
const formatsMaybeAccessDocumentCurrentScript = ['cjs', 'iife', 'umd'];
const accessedMetaUrlGlobals = {
    amd: ['document', 'module', 'URL'],
    cjs: ['document', 'require', 'URL', DOCUMENT_CURRENT_SCRIPT],
    es: [],
    iife: ['document', 'URL', DOCUMENT_CURRENT_SCRIPT],
    system: ['module'],
    umd: ['document', 'require', 'URL', DOCUMENT_CURRENT_SCRIPT]
};
const accessedFileUrlGlobals = {
    amd: ['document', 'require', 'URL'],
    cjs: ['document', 'require', 'URL'],
    es: [],
    iife: ['document', 'URL'],
    system: ['module', 'URL'],
    umd: ['document', 'require', 'URL']
};
const getResolveUrl = (path, asObject, URL = 'URL') => `new ${URL}(${path})${asObject ? '' : '.href'}`;
const getRelativeUrlFromDocument = (relativePath, asObject, umd = false) => getResolveUrl(`'${escapeId(relativePath)}', ${umd ? `typeof document === 'undefined' ? location.href : ` : ''}document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT' && document.currentScript.src || document.baseURI`, asObject);
const getGenericImportMetaMechanism = (getUrl) => (property, { chunkId }) => {
    const urlMechanism = getUrl(chunkId);
    return property === null
        ? `({ url: ${urlMechanism} })`
        : property === 'url'
            ? urlMechanism
            : 'undefined';
};
const getFileUrlFromFullPath = (path, asObject) => `require('u' + 'rl').pathToFileURL(${path})${asObject ? '' : '.href'}`;
const getFileUrlFromRelativePath = (path, asObject) => getFileUrlFromFullPath(`__dirname + '/${escapeId(path)}'`, asObject);
const getUrlFromDocument = (chunkId, umd = false) => `${umd ? `typeof document === 'undefined' ? location.href : ` : ''}(${DOCUMENT_CURRENT_SCRIPT} && ${DOCUMENT_CURRENT_SCRIPT}.tagName.toUpperCase() === 'SCRIPT' && ${DOCUMENT_CURRENT_SCRIPT}.src || new URL('${escapeId(chunkId)}', document.baseURI).href)`;
const relativeUrlMechanisms = {
    amd: (relativePath, asObject) => {
        if (relativePath[0] !== '.')
            relativePath = './' + relativePath;
        return getResolveUrl(`require.toUrl('${escapeId(relativePath)}'), document.baseURI`, asObject);
    },
    cjs: (relativePath, asObject) => `(typeof document === 'undefined' ? ${getFileUrlFromRelativePath(relativePath, asObject)} : ${getRelativeUrlFromDocument(relativePath, asObject)})`,
    es: (relativePath, asObject) => getResolveUrl(`'${escapeId(relativePath)}', import.meta.url`, asObject),
    iife: (relativePath, asObject) => getRelativeUrlFromDocument(relativePath, asObject),
    system: (relativePath, asObject) => getResolveUrl(`'${escapeId(relativePath)}', module.meta.url`, asObject),
    umd: (relativePath, asObject) => `(typeof document === 'undefined' && typeof location === 'undefined' ? ${getFileUrlFromRelativePath(relativePath, asObject)} : ${getRelativeUrlFromDocument(relativePath, asObject, true)})`
};
const importMetaMechanisms = {
    amd: getGenericImportMetaMechanism(() => getResolveUrl(`module.uri, document.baseURI`, false)),
    cjs: getGenericImportMetaMechanism(chunkId => `(typeof document === 'undefined' ? ${getFileUrlFromFullPath('__filename', false)} : ${getUrlFromDocument(chunkId)})`),
    iife: getGenericImportMetaMechanism(chunkId => getUrlFromDocument(chunkId)),
    system: (property, { snippets: { getPropertyAccess } }) => property === null ? `module.meta` : `module.meta${getPropertyAccess(property)}`,
    umd: getGenericImportMetaMechanism(chunkId => `(typeof document === 'undefined' && typeof location === 'undefined' ? ${getFileUrlFromFullPath('__filename', false)} : ${getUrlFromDocument(chunkId, true)})`)
};

class UndefinedVariable extends Variable {
    constructor() {
        super('undefined');
    }
    getLiteralValueAtPath() {
        return undefined;
    }
}

class ExportDefaultVariable extends LocalVariable {
    constructor(exportDefaultDeclaration, context) {
        super('default', exportDefaultDeclaration, exportDefaultDeclaration.declaration, EMPTY_PATH, context, 'other');
        this.hasId = false;
        this.originalId = null;
        this.originalVariable = null;
        const declaration = exportDefaultDeclaration.declaration;
        if ((declaration instanceof FunctionDeclaration || declaration instanceof ClassDeclaration) &&
            declaration.id) {
            this.hasId = true;
            this.originalId = declaration.id;
        }
        else if (declaration instanceof Identifier) {
            this.originalId = declaration;
        }
    }
    addReference(identifier) {
        if (!this.hasId) {
            this.name = identifier.name;
        }
    }
    addUsedPlace(usedPlace) {
        const original = this.getOriginalVariable();
        if (original === this) {
            super.addUsedPlace(usedPlace);
        }
        else {
            original.addUsedPlace(usedPlace);
        }
    }
    forbidName(name) {
        const original = this.getOriginalVariable();
        if (original === this) {
            super.forbidName(name);
        }
        else {
            original.forbidName(name);
        }
    }
    getAssignedVariableName() {
        return (this.originalId && this.originalId.name) || null;
    }
    getBaseVariableName() {
        const original = this.getOriginalVariable();
        return original === this ? super.getBaseVariableName() : original.getBaseVariableName();
    }
    getDirectOriginalVariable() {
        return this.originalId &&
            (this.hasId ||
                !(this.originalId.isPossibleTDZ() ||
                    this.originalId.variable.isReassigned ||
                    this.originalId.variable instanceof UndefinedVariable ||
                    // this avoids a circular dependency
                    'syntheticNamespace' in this.originalId.variable))
            ? this.originalId.variable
            : null;
    }
    getName(getPropertyAccess) {
        const original = this.getOriginalVariable();
        return original === this
            ? super.getName(getPropertyAccess)
            : original.getName(getPropertyAccess);
    }
    getOriginalVariable() {
        if (this.originalVariable)
            return this.originalVariable;
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let original = this;
        let currentVariable;
        const checkedVariables = new Set();
        do {
            checkedVariables.add(original);
            currentVariable = original;
            original = currentVariable.getDirectOriginalVariable();
        } while (original instanceof ExportDefaultVariable && !checkedVariables.has(original));
        return (this.originalVariable = original || currentVariable);
    }
}

class NamespaceVariable extends Variable {
    constructor(context) {
        super(context.getModuleName());
        this.areAllMembersDeoptimized = false;
        this.mergedNamespaces = [];
        this.nonExplicitNamespacesIncluded = false;
        this.referencedEarly = false;
        this.references = [];
        this.context = context;
        this.module = context.module;
    }
    addReference(identifier) {
        this.references.push(identifier);
        this.name = identifier.name;
    }
    deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker) {
        if (path.length > 1 || (path.length === 1 && interaction.type === INTERACTION_CALLED)) {
            const key = path[0];
            if (typeof key === 'string') {
                this.module
                    .getExportedVariablesByName()
                    .get(key)
                    ?.deoptimizeArgumentsOnInteractionAtPath(interaction, path.slice(1), recursionTracker);
            }
            else {
                deoptimizeInteraction(interaction);
            }
        }
    }
    deoptimizePath(path) {
        if (path.length > 1) {
            const key = path[0];
            if (typeof key === 'string') {
                this.module.getExportedVariablesByName().get(key)?.deoptimizePath(path.slice(1));
            }
            else if (!this.areAllMembersDeoptimized) {
                this.areAllMembersDeoptimized = true;
                for (const variable of this.module.getExportedVariablesByName().values()) {
                    variable.deoptimizePath(UNKNOWN_PATH);
                }
            }
        }
    }
    getLiteralValueAtPath(path) {
        if (path[0] === SymbolToStringTag) {
            return 'Module';
        }
        return UnknownValue;
    }
    hasEffectsOnInteractionAtPath(path, interaction, context) {
        const { type } = interaction;
        if (path.length === 0) {
            // This can only be a call anyway
            return true;
        }
        if (path.length === 1 && type !== INTERACTION_CALLED) {
            return type === INTERACTION_ASSIGNED;
        }
        const key = path[0];
        if (typeof key !== 'string') {
            return true;
        }
        const memberVariable = this.module.getExportedVariablesByName().get(key);
        return (!memberVariable ||
            memberVariable.hasEffectsOnInteractionAtPath(path.slice(1), interaction, context));
    }
    includePath(path, context) {
        super.includePath(path, context);
        this.includeMemberPath(path, context);
    }
    includeMemberPath(path, context) {
        if (path.length > 0) {
            const [name, ...remainingPath] = path;
            if (typeof name === 'string') {
                const variable = this.module.getExportedVariablesByName().get(name);
                if (variable) {
                    this.context.includeVariableInModule(variable, remainingPath, context);
                }
                else {
                    this.includeNonExplicitNamespaces();
                }
            }
            else if (name) {
                this.module.includeAllExports();
                this.includeNonExplicitNamespaces();
            }
        }
    }
    prepare(accessedGlobalsByScope) {
        if (this.mergedNamespaces.length > 0) {
            this.module.scope.addAccessedGlobals([MERGE_NAMESPACES_VARIABLE], accessedGlobalsByScope);
        }
    }
    renderBlock(options) {
        const { exportNamesByVariable, format, freeze, indent: t, symbols, snippets: { _, cnst, getObject, getPropertyAccess, n, s } } = options;
        const memberVariables = this.module.getExportedVariablesByName();
        const members = [...memberVariables.entries()]
            .filter(([name, variable]) => !name.startsWith('*') && variable.included)
            .map(([name, variable]) => {
            if (this.referencedEarly || variable.isReassigned || variable === this) {
                return [
                    null,
                    `get ${stringifyObjectKeyIfNeeded(name)}${_}()${_}{${_}return ${variable.getName(getPropertyAccess)}${s}${_}}`
                ];
            }
            return [name, variable.getName(getPropertyAccess)];
        });
        members.unshift([null, `__proto__:${_}null`]);
        let output = getObject(members, { lineBreakIndent: { base: '', t } });
        if (this.mergedNamespaces.length > 0) {
            const assignmentArguments = this.mergedNamespaces.map(variable => variable.getName(getPropertyAccess));
            output = `/*#__PURE__*/${MERGE_NAMESPACES_VARIABLE}(${output},${_}[${assignmentArguments.join(`,${_}`)}])`;
        }
        else {
            // The helper to merge namespaces will also take care of freezing and toStringTag
            if (symbols) {
                output = `/*#__PURE__*/Object.defineProperty(${output},${_}Symbol.toStringTag,${_}${getToStringTagValue(getObject)})`;
            }
            if (freeze) {
                output = `/*#__PURE__*/Object.freeze(${output})`;
            }
        }
        const name = this.getName(getPropertyAccess);
        output = `${cnst} ${name}${_}=${_}${output};`;
        if (format === 'system' && exportNamesByVariable.has(this)) {
            output += `${n}${getSystemExportStatement([this], options)};`;
        }
        return output;
    }
    renderFirst() {
        return this.referencedEarly;
    }
    setMergedNamespaces(mergedNamespaces) {
        this.mergedNamespaces = mergedNamespaces;
        const moduleExecIndex = this.context.getModuleExecIndex();
        for (const identifier of this.references) {
            const { context } = identifier.scope;
            if (context.getModuleExecIndex() <= moduleExecIndex) {
                this.referencedEarly = true;
                break;
            }
        }
    }
    includeNonExplicitNamespaces() {
        if (!this.nonExplicitNamespacesIncluded) {
            this.nonExplicitNamespacesIncluded = true;
            this.setMergedNamespaces(this.module.includeAndGetAdditionalMergedNamespaces());
        }
    }
}
NamespaceVariable.prototype.isNamespace = true;
// This is a proxy that does not include the namespace object when a path is included
const getDynamicNamespaceVariable = (namespace) => Object.create(namespace, {
    includePath: {
        value(path, context) {
            namespace.includeMemberPath(path, context);
        }
    }
});

class SyntheticNamedExportVariable extends Variable {
    constructor(context, name, syntheticNamespace) {
        super(name);
        this.baseVariable = null;
        this.context = context;
        this.module = context.module;
        this.syntheticNamespace = syntheticNamespace;
    }
    getBaseVariable() {
        if (this.baseVariable)
            return this.baseVariable;
        let baseVariable = this.syntheticNamespace;
        while (baseVariable instanceof ExportDefaultVariable ||
            baseVariable instanceof SyntheticNamedExportVariable) {
            if (baseVariable instanceof ExportDefaultVariable) {
                const original = baseVariable.getOriginalVariable();
                if (original === baseVariable)
                    break;
                baseVariable = original;
            }
            if (baseVariable instanceof SyntheticNamedExportVariable) {
                baseVariable = baseVariable.syntheticNamespace;
            }
        }
        return (this.baseVariable = baseVariable);
    }
    getBaseVariableName() {
        return this.syntheticNamespace.getBaseVariableName();
    }
    getName(getPropertyAccess) {
        return `${this.syntheticNamespace.getName(getPropertyAccess)}${getPropertyAccess(this.name)}`;
    }
    includePath(path, context) {
        super.includePath(path, context);
        this.context.includeVariableInModule(this.syntheticNamespace, [this.name, ...path], context);
    }
    setRenderNames(baseName, name) {
        super.setRenderNames(baseName, name);
    }
}

class ExternalChunk {
    constructor(module, options, inputBase) {
        this.options = options;
        this.inputBase = inputBase;
        this.defaultVariableName = '';
        this.namespaceVariableName = '';
        this.variableName = '';
        this.fileName = null;
        this.importAttributes = null;
        this.id = module.id;
        this.moduleInfo = module.info;
        this.renormalizeRenderPath = module.renormalizeRenderPath;
        this.suggestedVariableName = module.suggestedVariableName;
    }
    getFileName() {
        if (this.fileName) {
            return this.fileName;
        }
        const { paths } = this.options;
        return (this.fileName =
            (typeof paths === 'function' ? paths(this.id) : paths[this.id]) ||
                (this.renormalizeRenderPath ? parseAst_js.normalize(path.relative(this.inputBase, this.id)) : this.id));
    }
    getImportAttributes(snippets) {
        return (this.importAttributes ||= formatAttributes(['es', 'cjs'].includes(this.options.format) &&
            this.options.externalImportAttributes &&
            this.moduleInfo.attributes, snippets));
    }
    getImportPath(importer) {
        return escapeId(this.renormalizeRenderPath
            ? parseAst_js.getImportPath(importer, this.getFileName(), this.options.format === 'amd', false)
            : this.getFileName());
    }
}
function formatAttributes(attributes, { getObject }) {
    if (!attributes) {
        return null;
    }
    const assertionEntries = Object.entries(attributes).map(([key, value]) => [key, `'${value}'`]);
    if (assertionEntries.length > 0) {
        return getObject(assertionEntries, { lineBreakIndent: null });
    }
    return null;
}

function removeJsExtension(name) {
    return name.endsWith('.js') ? name.slice(0, -3) : name;
}

function getCompleteAmdId(options, chunkId) {
    if (options.autoId) {
        return `${options.basePath ? options.basePath + '/' : ''}${removeJsExtension(chunkId)}`;
    }
    return options.id ?? '';
}

function getExportBlock$1(exports$1, dependencies, namedExportsMode, interop, snippets, t, externalLiveBindings, reexportProtoFromExternal, mechanism = 'return ') {
    const { _, getDirectReturnFunction, getFunctionIntro, getPropertyAccess, n, s } = snippets;
    if (!namedExportsMode) {
        return `${n}${n}${mechanism}${getSingleDefaultExport(exports$1, dependencies, interop, externalLiveBindings, getPropertyAccess)};`;
    }
    let exportBlock = '';
    if (namedExportsMode) {
        for (const { defaultVariableName, importPath, isChunk, name, namedExportsMode: depNamedExportsMode, namespaceVariableName, reexports } of dependencies) {
            if (!reexports) {
                continue;
            }
            for (const specifier of reexports) {
                if (specifier.reexported !== '*') {
                    const importName = getReexportedImportName(name, specifier.imported, depNamedExportsMode, isChunk, defaultVariableName, namespaceVariableName, interop, importPath, externalLiveBindings, getPropertyAccess);
                    if (exportBlock)
                        exportBlock += n;
                    if (specifier.imported !== '*' && specifier.needsLiveBinding) {
                        const [left, right] = getDirectReturnFunction([], {
                            functionReturn: true,
                            lineBreakIndent: null,
                            name: null
                        });
                        exportBlock +=
                            `Object.defineProperty(exports,${_}${JSON.stringify(specifier.reexported)},${_}{${n}` +
                                `${t}enumerable:${_}true,${n}` +
                                `${t}get:${_}${left}${importName}${right}${n}});`;
                    }
                    else if (specifier.reexported === '__proto__') {
                        exportBlock +=
                            `Object.defineProperty(exports,${_}"__proto__",${_}{${n}` +
                                `${t}enumerable:${_}true,${n}` +
                                `${t}value:${_}${importName}${n}});`;
                    }
                    else {
                        exportBlock += `exports${getPropertyAccess(specifier.reexported)}${_}=${_}${importName};`;
                    }
                }
            }
        }
    }
    for (const { exported, local } of exports$1) {
        const lhs = `exports${getPropertyAccess(exported)}`;
        const rhs = local;
        if (lhs !== rhs) {
            if (exportBlock)
                exportBlock += n;
            exportBlock +=
                exported === '__proto__'
                    ? `Object.defineProperty(exports,${_}"__proto__",${_}{${n}` +
                        `${t}enumerable:${_}true,${n}` +
                        `${t}value:${_}${rhs}${n}});`
                    : `${lhs}${_}=${_}${rhs};`;
        }
    }
    if (namedExportsMode) {
        for (const { name, reexports } of dependencies) {
            if (!reexports) {
                continue;
            }
            for (const specifier of reexports) {
                if (specifier.reexported === '*') {
                    if (exportBlock)
                        exportBlock += n;
                    if (!specifier.needsLiveBinding && reexportProtoFromExternal) {
                        const protoString = "'__proto__'";
                        exportBlock +=
                            `Object.prototype.hasOwnProperty.call(${name},${_}${protoString})${_}&&${n}` +
                                `${t}!Object.prototype.hasOwnProperty.call(exports,${_}${protoString})${_}&&${n}` +
                                `${t}Object.defineProperty(exports,${_}${protoString},${_}{${n}` +
                                `${t}${t}enumerable:${_}true,${n}` +
                                `${t}${t}value:${_}${name}[${protoString}]${n}` +
                                `${t}});${n}${n}`;
                    }
                    const copyPropertyIfNecessary = `{${n}${t}if${_}(k${_}!==${_}'default'${_}&&${_}!Object.prototype.hasOwnProperty.call(exports,${_}k))${_}${getDefineProperty(name, specifier.needsLiveBinding, t, snippets)}${s}${n}}`;
                    exportBlock += `Object.keys(${name}).forEach(${getFunctionIntro(['k'], {
                        isAsync: false,
                        name: null
                    })}${copyPropertyIfNecessary});`;
                }
            }
        }
    }
    if (exportBlock) {
        return `${n}${n}${exportBlock}`;
    }
    return '';
}
function getSingleDefaultExport(exports$1, dependencies, interop, externalLiveBindings, getPropertyAccess) {
    if (exports$1.length > 0) {
        return exports$1[0].local;
    }
    else {
        for (const { defaultVariableName, importPath, isChunk, name, namedExportsMode: depNamedExportsMode, namespaceVariableName, reexports } of dependencies) {
            if (reexports) {
                return getReexportedImportName(name, reexports[0].imported, depNamedExportsMode, isChunk, defaultVariableName, namespaceVariableName, interop, importPath, externalLiveBindings, getPropertyAccess);
            }
        }
    }
}
function getReexportedImportName(moduleVariableName, imported, depNamedExportsMode, isChunk, defaultVariableName, namespaceVariableName, interop, moduleId, externalLiveBindings, getPropertyAccess) {
    if (imported === 'default') {
        if (!isChunk) {
            const moduleInterop = interop(moduleId);
            const variableName = defaultInteropHelpersByInteropType[moduleInterop]
                ? defaultVariableName
                : moduleVariableName;
            return isDefaultAProperty(moduleInterop, externalLiveBindings)
                ? `${variableName}${getPropertyAccess('default')}`
                : variableName;
        }
        return depNamedExportsMode
            ? `${moduleVariableName}${getPropertyAccess('default')}`
            : moduleVariableName;
    }
    if (imported === '*') {
        return (isChunk ? !depNamedExportsMode : namespaceInteropHelpersByInteropType[interop(moduleId)])
            ? namespaceVariableName
            : moduleVariableName;
    }
    return `${moduleVariableName}${getPropertyAccess(imported)}`;
}
function getEsModuleValue(getObject) {
    return getObject([['value', 'true']], {
        lineBreakIndent: null
    });
}
function getNamespaceMarkers(hasNamedExports, addEsModule, addNamespaceToStringTag, { _, getObject }) {
    if (hasNamedExports) {
        if (addEsModule) {
            if (addNamespaceToStringTag) {
                return `Object.defineProperties(exports,${_}${getObject([
                    ['__esModule', getEsModuleValue(getObject)],
                    [null, `[Symbol.toStringTag]:${_}${getToStringTagValue(getObject)}`]
                ], {
                    lineBreakIndent: null
                })});`;
            }
            return `Object.defineProperty(exports,${_}'__esModule',${_}${getEsModuleValue(getObject)});`;
        }
        if (addNamespaceToStringTag) {
            return `Object.defineProperty(exports,${_}Symbol.toStringTag,${_}${getToStringTagValue(getObject)});`;
        }
    }
    return '';
}
const getDefineProperty = (name, needsLiveBinding, t, { _, getDirectReturnFunction, n }) => {
    if (needsLiveBinding) {
        const [left, right] = getDirectReturnFunction([], {
            functionReturn: true,
            lineBreakIndent: null,
            name: null
        });
        return (`Object.defineProperty(exports,${_}k,${_}{${n}` +
            `${t}${t}enumerable:${_}true,${n}` +
            `${t}${t}get:${_}${left}${name}[k]${right}${n}${t}})`);
    }
    return `exports[k]${_}=${_}${name}[k]`;
};

function getInteropBlock(dependencies, interop, externalLiveBindings, freeze, symbols, accessedGlobals, indent, snippets) {
    const { _, cnst, n } = snippets;
    const neededInteropHelpers = new Set();
    const interopStatements = [];
    const addInteropStatement = (helperVariableName, helper, dependencyVariableName) => {
        neededInteropHelpers.add(helper);
        interopStatements.push(`${cnst} ${helperVariableName}${_}=${_}/*#__PURE__*/${helper}(${dependencyVariableName});`);
    };
    for (const { defaultVariableName, imports, importPath, isChunk, name, namedExportsMode, namespaceVariableName, reexports } of dependencies) {
        if (isChunk) {
            for (const { imported, reexported } of [
                ...(imports || []),
                ...(reexports || [])
            ]) {
                if (imported === '*' && reexported !== '*') {
                    if (!namedExportsMode) {
                        addInteropStatement(namespaceVariableName, INTEROP_NAMESPACE_DEFAULT_ONLY_VARIABLE, name);
                    }
                    break;
                }
            }
        }
        else {
            const moduleInterop = interop(importPath);
            let hasDefault = false;
            let hasNamespace = false;
            for (const { imported, reexported } of [
                ...(imports || []),
                ...(reexports || [])
            ]) {
                let helper;
                let variableName;
                if (imported === 'default') {
                    if (!hasDefault) {
                        hasDefault = true;
                        if (defaultVariableName !== namespaceVariableName) {
                            variableName = defaultVariableName;
                            helper = defaultInteropHelpersByInteropType[moduleInterop];
                        }
                    }
                }
                else if (imported === '*' && reexported !== '*' && !hasNamespace) {
                    hasNamespace = true;
                    helper = namespaceInteropHelpersByInteropType[moduleInterop];
                    variableName = namespaceVariableName;
                }
                if (helper) {
                    addInteropStatement(variableName, helper, name);
                }
            }
        }
    }
    return `${getHelpersBlock(neededInteropHelpers, accessedGlobals, indent, snippets, externalLiveBindings, freeze, symbols)}${interopStatements.length > 0 ? `${interopStatements.join(n)}${n}${n}` : ''}`;
}

function throwOnPhase(outputFormat, chunkId, dependencies) {
    const sourcePhaseDependency = dependencies.find(dependency => dependency.sourcePhaseImport);
    if (sourcePhaseDependency) {
        parseAst_js.error(parseAst_js.logSourcePhaseFormatUnsupported(outputFormat, chunkId, sourcePhaseDependency.importPath));
    }
}

function addJsExtension(name) {
    return name.endsWith('.js') ? name : name + '.js';
}

// AMD resolution will only respect the AMD baseUrl if the .js extension is omitted.
// The assumption is that this makes sense for all relative ids:
// https://requirejs.org/docs/api.html#jsfiles
function updateExtensionForRelativeAmdId(id, forceJsExtensionForImports) {
    if (id[0] !== '.') {
        return id;
    }
    return forceJsExtensionForImports ? addJsExtension(id) : removeJsExtension(id);
}

const builtinModules = [
	"node:assert",
	"assert",
	"node:assert/strict",
	"assert/strict",
	"node:async_hooks",
	"async_hooks",
	"node:buffer",
	"buffer",
	"node:child_process",
	"child_process",
	"node:cluster",
	"cluster",
	"node:console",
	"console",
	"node:constants",
	"constants",
	"node:crypto",
	"crypto",
	"node:dgram",
	"dgram",
	"node:diagnostics_channel",
	"diagnostics_channel",
	"node:dns",
	"dns",
	"node:dns/promises",
	"dns/promises",
	"node:domain",
	"domain",
	"node:events",
	"events",
	"node:fs",
	"fs",
	"node:fs/promises",
	"fs/promises",
	"node:http",
	"http",
	"node:http2",
	"http2",
	"node:https",
	"https",
	"node:inspector",
	"inspector",
	"node:inspector/promises",
	"inspector/promises",
	"node:module",
	"module",
	"node:net",
	"net",
	"node:os",
	"os",
	"node:path",
	"path",
	"node:path/posix",
	"path/posix",
	"node:path/win32",
	"path/win32",
	"node:perf_hooks",
	"perf_hooks",
	"node:process",
	"process",
	"node:querystring",
	"querystring",
	"node:quic",
	"node:readline",
	"readline",
	"node:readline/promises",
	"readline/promises",
	"node:repl",
	"repl",
	"node:sea",
	"node:sqlite",
	"node:stream",
	"stream",
	"node:stream/consumers",
	"stream/consumers",
	"node:stream/iter",
	"stream/iter",
	"node:stream/promises",
	"stream/promises",
	"node:stream/web",
	"stream/web",
	"node:string_decoder",
	"string_decoder",
	"node:test",
	"node:test/reporters",
	"node:timers",
	"timers",
	"node:timers/promises",
	"timers/promises",
	"node:tls",
	"tls",
	"node:trace_events",
	"trace_events",
	"node:tty",
	"tty",
	"node:url",
	"url",
	"node:util",
	"util",
	"node:util/types",
	"util/types",
	"node:v8",
	"v8",
	"node:vm",
	"vm",
	"node:wasi",
	"wasi",
	"node:worker_threads",
	"worker_threads",
	"node:zlib",
	"zlib",
	"node:zlib/iter",
	"zlib/iter"
];

const nodeBuiltins = new Set(builtinModules);
function warnOnBuiltins(log, dependencies) {
    const externalBuiltins = dependencies
        .map(({ importPath }) => importPath)
        .filter(importPath => nodeBuiltins.has(importPath) || importPath.startsWith('node:'));
    if (externalBuiltins.length === 0)
        return;
    log(parseAst_js.LOGLEVEL_WARN, parseAst_js.logMissingNodeBuiltins(externalBuiltins));
}

function amd(magicString, { accessedGlobals, dependencies, exports: exports$1, hasDefaultExport, hasExports, id, indent: t, intro, isEntryFacade, isModuleFacade, namedExportsMode, log, outro, snippets }, { amd, esModule, externalLiveBindings, freeze, generatedCode: { symbols }, interop, reexportProtoFromExternal, strict }) {
    warnOnBuiltins(log, dependencies);
    throwOnPhase('amd', id, dependencies);
    const deps = dependencies.map(m => `'${updateExtensionForRelativeAmdId(m.importPath, amd.forceJsExtensionForImports)}'`);
    const parameters = dependencies.map(m => m.name);
    const { n, getNonArrowFunctionIntro, _ } = snippets;
    if (hasExports && (namedExportsMode || exports$1[0]?.local === 'exports.default')) {
        parameters.unshift(`exports`);
        deps.unshift(`'exports'`);
    }
    if (accessedGlobals.has('require')) {
        parameters.unshift('require');
        deps.unshift(`'require'`);
    }
    if (accessedGlobals.has('module')) {
        parameters.unshift('module');
        deps.unshift(`'module'`);
    }
    const completeAmdId = getCompleteAmdId(amd, id);
    const defineParameters = (completeAmdId ? `'${completeAmdId}',${_}` : ``) +
        (deps.length > 0 ? `[${deps.join(`,${_}`)}],${_}` : ``);
    const useStrict = strict ? `${_}'use strict';` : '';
    magicString.prepend(`${intro}${getInteropBlock(dependencies, interop, externalLiveBindings, freeze, symbols, accessedGlobals, t, snippets)}`);
    const exportBlock = getExportBlock$1(exports$1, dependencies, namedExportsMode, interop, snippets, t, externalLiveBindings, reexportProtoFromExternal);
    let namespaceMarkers = getNamespaceMarkers(namedExportsMode && hasExports, isEntryFacade && (esModule === true || (esModule === 'if-default-prop' && hasDefaultExport)), isModuleFacade && symbols, snippets);
    if (namespaceMarkers) {
        namespaceMarkers = n + n + namespaceMarkers;
    }
    magicString
        .append(`${exportBlock}${namespaceMarkers}${outro}`)
        .indent(t)
        // factory function should be wrapped by parentheses to avoid lazy parsing,
        // cf. https://v8.dev/blog/preparser#pife
        .prepend(`${amd.define}(${defineParameters}(${getNonArrowFunctionIntro(parameters, {
        isAsync: false,
        name: null
    })}{${useStrict}${n}${n}`)
        .append(`${n}${n}}));`);
}

function cjs(magicString, { accessedGlobals, dependencies, exports: exports$1, hasDefaultExport, hasExports, id, indent: t, intro, isEntryFacade, isModuleFacade, namedExportsMode, outro, snippets }, { compact, esModule, externalLiveBindings, freeze, interop, generatedCode: { symbols }, reexportProtoFromExternal, strict }) {
    throwOnPhase('cjs', id, dependencies);
    const { _, n } = snippets;
    const useStrict = strict ? `'use strict';${n}${n}` : '';
    let namespaceMarkers = getNamespaceMarkers(namedExportsMode && hasExports, isEntryFacade && (esModule === true || (esModule === 'if-default-prop' && hasDefaultExport)), isModuleFacade && symbols, snippets);
    if (namespaceMarkers) {
        namespaceMarkers += n + n;
    }
    const importBlock = getImportBlock$1(dependencies, snippets, compact);
    const interopBlock = getInteropBlock(dependencies, interop, externalLiveBindings, freeze, symbols, accessedGlobals, t, snippets);
    magicString.prepend(`${useStrict}${intro}${namespaceMarkers}${importBlock}${interopBlock}`);
    const exportBlock = getExportBlock$1(exports$1, dependencies, namedExportsMode, interop, snippets, t, externalLiveBindings, reexportProtoFromExternal, `module.exports${_}=${_}`);
    magicString.append(`${exportBlock}${outro}`);
}
function getImportBlock$1(dependencies, { _, cnst, n }, compact) {
    let importBlock = '';
    let definingVariable = false;
    for (const { importPath, name, reexports, imports } of dependencies) {
        if (!reexports && !imports) {
            if (importBlock) {
                importBlock += compact && !definingVariable ? ',' : `;${n}`;
            }
            definingVariable = false;
            importBlock += `require('${importPath}')`;
        }
        else {
            importBlock += compact && definingVariable ? ',' : `${importBlock ? `;${n}` : ''}${cnst} `;
            definingVariable = true;
            importBlock += `${name}${_}=${_}require('${importPath}')`;
        }
    }
    if (importBlock) {
        return `${importBlock};${n}${n}`;
    }
    return '';
}

function es(magicString, { accessedGlobals, indent: t, intro, outro, dependencies, exports: exports$1, snippets }, { externalLiveBindings, freeze, generatedCode: { symbols }, importAttributesKey }) {
    const { n } = snippets;
    const importBlock = getImportBlock(dependencies, importAttributesKey, snippets);
    if (importBlock.length > 0)
        intro += importBlock.join(n) + n + n;
    intro += getHelpersBlock(null, accessedGlobals, t, snippets, externalLiveBindings, freeze, symbols);
    if (intro)
        magicString.prepend(intro);
    const exportBlock = getExportBlock(exports$1, snippets);
    if (exportBlock.length > 0)
        magicString.append(n + n + exportBlock.join(n).trim());
    if (outro)
        magicString.append(outro);
    magicString.trim();
}
function getImportBlock(dependencies, importAttributesKey, { _ }) {
    const importBlock = [];
    for (const { importPath, reexports, imports, name, attributes, sourcePhaseImport } of dependencies) {
        const assertion = attributes ? `${_}${importAttributesKey}${_}${attributes}` : '';
        const pathWithAssertion = `'${importPath}'${assertion};`;
        if (sourcePhaseImport) {
            importBlock.push(`import source ${sourcePhaseImport} from${_}${pathWithAssertion}`);
        }
        if (!reexports && !imports) {
            if (!sourcePhaseImport) {
                importBlock.push(`import${_}${pathWithAssertion}`);
            }
            continue;
        }
        if (imports) {
            let defaultImport = null;
            let starImport = null;
            const importedNames = [];
            for (const specifier of imports) {
                if (specifier.imported === 'default') {
                    defaultImport = specifier;
                }
                else if (specifier.imported === '*') {
                    starImport = specifier;
                }
                else {
                    importedNames.push(specifier);
                }
            }
            if (starImport) {
                importBlock.push(`import${_}*${_}as ${starImport.local} from${_}${pathWithAssertion}`);
            }
            if (defaultImport && importedNames.length === 0) {
                importBlock.push(`import ${defaultImport.local} from${_}${pathWithAssertion}`);
            }
            else if (importedNames.length > 0) {
                importBlock.push(`import ${defaultImport ? `${defaultImport.local},${_}` : ''}{${_}${importedNames
                    .map(specifier => specifier.imported === specifier.local
                    ? specifier.imported
                    : `${stringifyIdentifierIfNeeded(specifier.imported)} as ${specifier.local}`)
                    .join(`,${_}`)}${_}}${_}from${_}${pathWithAssertion}`);
            }
        }
        if (reexports) {
            let starExport = null;
            const namespaceReexports = [];
            const namedReexports = [];
            for (const specifier of reexports) {
                if (specifier.reexported === '*') {
                    starExport = specifier;
                }
                else if (specifier.imported === '*') {
                    namespaceReexports.push(specifier);
                }
                else {
                    namedReexports.push(specifier);
                }
            }
            if (starExport) {
                importBlock.push(`export${_}*${_}from${_}${pathWithAssertion}`);
            }
            if (namespaceReexports.length > 0) {
                if (!imports ||
                    !imports.some(specifier => specifier.imported === '*' && specifier.local === name)) {
                    importBlock.push(`import${_}*${_}as ${name} from${_}${pathWithAssertion}`);
                }
                for (const specifier of namespaceReexports) {
                    importBlock.push(`export${_}{${_}${name === specifier.reexported
                        ? name
                        : `${name} as ${stringifyIdentifierIfNeeded(specifier.reexported)}`} };`);
                }
            }
            if (namedReexports.length > 0) {
                importBlock.push(`export${_}{${_}${namedReexports
                    .map(specifier => specifier.imported === specifier.reexported
                    ? stringifyIdentifierIfNeeded(specifier.imported)
                    : `${stringifyIdentifierIfNeeded(specifier.imported)} as ${stringifyIdentifierIfNeeded(specifier.reexported)}`)
                    .join(`,${_}`)}${_}}${_}from${_}${pathWithAssertion}`);
            }
        }
    }
    return importBlock;
}
function getExportBlock(exports$1, { _, cnst }) {
    const exportBlock = [];
    const exportDeclaration = new Array(exports$1.length);
    let index = 0;
    for (const specifier of exports$1) {
        if (specifier.expression) {
            exportBlock.push(`${cnst} ${specifier.local}${_}=${_}${specifier.expression};`);
        }
        exportDeclaration[index++] =
            specifier.exported === specifier.local
                ? specifier.local
                : `${specifier.local} as ${stringifyIdentifierIfNeeded(specifier.exported)}`;
    }
    if (exportDeclaration.length > 0) {
        exportBlock.push(`export${_}{${_}${exportDeclaration.join(`,${_}`)}${_}};`);
    }
    return exportBlock;
}

const keypath = (keypath, getPropertyAccess) => keypath.split('.').map(getPropertyAccess).join('');

function setupNamespace(name, root, globals, { _, getPropertyAccess, s }, compact, log) {
    const parts = name.split('.');
    // Check if the key exists in the object's prototype.
    const isReserved = parts[0] in Object.prototype;
    if (log && isReserved) {
        log(parseAst_js.LOGLEVEL_WARN, parseAst_js.logReservedNamespace(parts[0]));
    }
    parts[0] =
        (typeof globals === 'function'
            ? globals(parts[0])
            : isReserved
                ? parts[0]
                : globals[parts[0]]) || parts[0];
    parts.pop();
    let propertyPath = root;
    return (parts
        .map(part => {
        propertyPath += getPropertyAccess(part);
        return `${propertyPath}${_}=${_}${propertyPath}${_}||${_}{}${s}`;
    })
        .join(compact ? ',' : '\n') + (compact && parts.length > 0 ? ';' : '\n'));
}
function assignToDeepVariable(deepName, root, globals, assignment, { _, getPropertyAccess }, log) {
    const parts = deepName.split('.');
    // Check if the key exists in the object's prototype.
    const isReserved = parts[0] in Object.prototype;
    if (log && isReserved) {
        log(parseAst_js.LOGLEVEL_WARN, parseAst_js.logReservedNamespace(parts[0]));
    }
    parts[0] =
        (typeof globals === 'function'
            ? globals(parts[0])
            : isReserved
                ? parts[0]
                : globals[parts[0]]) || parts[0];
    const last = parts.pop();
    let propertyPath = root;
    let deepAssignment = [
        ...parts.map(part => {
            propertyPath += getPropertyAccess(part);
            return `${propertyPath}${_}=${_}${propertyPath}${_}||${_}{}`;
        }),
        `${propertyPath}${getPropertyAccess(last)}`
    ].join(`,${_}`) + `${_}=${_}${assignment}`;
    if (parts.length > 0) {
        deepAssignment = `(${deepAssignment})`;
    }
    return deepAssignment;
}

function trimEmptyImports(dependencies) {
    let index = dependencies.length;
    while (index--) {
        const { imports, reexports } = dependencies[index];
        if (imports || reexports) {
            return dependencies.slice(0, index + 1);
        }
    }
    return [];
}

function iife(magicString, { accessedGlobals, dependencies, exports: exports$1, hasDefaultExport, hasExports, id, indent: t, intro, namedExportsMode, log, outro, snippets }, { compact, esModule, extend, freeze, externalLiveBindings, reexportProtoFromExternal, globals, interop, name, generatedCode: { symbols }, strict }) {
    throwOnPhase('iife', id, dependencies);
    const { _, getNonArrowFunctionIntro, getPropertyAccess, n } = snippets;
    const isNamespaced = name && name.includes('.');
    const useVariableAssignment = !extend && !isNamespaced;
    if (name && useVariableAssignment && !isLegal(name)) {
        return parseAst_js.error(parseAst_js.logIllegalIdentifierAsName(name));
    }
    warnOnBuiltins(log, dependencies);
    const external = trimEmptyImports(dependencies);
    const deps = external.map(dep => dep.globalName || 'null');
    const parameters = external.map(m => m.name);
    if (hasExports && !name) {
        log(parseAst_js.LOGLEVEL_WARN, parseAst_js.logMissingNameOptionForIifeExport());
    }
    if (hasExports && (namedExportsMode || exports$1[0]?.local === 'exports.default')) {
        if (extend) {
            deps.unshift(`this${keypath(name, getPropertyAccess)}${_}=${_}this${keypath(name, getPropertyAccess)}${_}||${_}{}`);
            parameters.unshift('exports');
        }
        else {
            deps.unshift('{}');
            parameters.unshift('exports');
        }
    }
    const useStrict = strict ? `${t}'use strict';${n}` : '';
    const interopBlock = getInteropBlock(dependencies, interop, externalLiveBindings, freeze, symbols, accessedGlobals, t, snippets);
    magicString.prepend(`${intro}${interopBlock}`);
    let wrapperIntro = `(${getNonArrowFunctionIntro(parameters, {
        isAsync: false,
        name: null
    })}{${n}${useStrict}${n}`;
    if (hasExports) {
        if (name && !(extend && namedExportsMode)) {
            wrapperIntro =
                (useVariableAssignment ? `var ${name}` : `this${keypath(name, getPropertyAccess)}`) +
                    `${_}=${_}${wrapperIntro}`;
        }
        if (isNamespaced) {
            wrapperIntro = setupNamespace(name, 'this', globals, snippets, compact, log) + wrapperIntro;
        }
    }
    let wrapperOutro = `${n}${n}})(${deps.join(`,${_}`)});`;
    if (hasExports && !extend && namedExportsMode) {
        wrapperOutro = `${n}${n}${t}return exports;${wrapperOutro}`;
    }
    const exportBlock = getExportBlock$1(exports$1, dependencies, namedExportsMode, interop, snippets, t, externalLiveBindings, reexportProtoFromExternal);
    let namespaceMarkers = getNamespaceMarkers(namedExportsMode && hasExports, esModule === true || (esModule === 'if-default-prop' && hasDefaultExport), symbols, snippets);
    if (namespaceMarkers) {
        namespaceMarkers = n + n + namespaceMarkers;
    }
    magicString
        .append(`${exportBlock}${namespaceMarkers}${outro}`)
        .indent(t)
        .prepend(wrapperIntro)
        .append(wrapperOutro);
}

const MISSING_EXPORT_SHIM_VARIABLE = '_missingExportShim';

function system(magicString, { accessedGlobals, dependencies, exports: exports$1, hasExports, id, indent: t, intro, snippets, outro, usesTopLevelAwait }, { externalLiveBindings, freeze, name, generatedCode: { symbols }, strict, systemNullSetters }) {
    throwOnPhase('system', id, dependencies);
    const { _, getFunctionIntro, getNonArrowFunctionIntro, n, s } = snippets;
    const { importBindings, setters, starExcludes } = analyzeDependencies(dependencies, exports$1, t, snippets);
    const registeredName = name ? `'${name}',${_}` : '';
    const wrapperParameters = accessedGlobals.has('module')
        ? ['exports', 'module']
        : hasExports
            ? ['exports']
            : [];
    // factory function should be wrapped by parentheses to avoid lazy parsing,
    // cf. https://v8.dev/blog/preparser#pife
    let wrapperStart = `System.register(${registeredName}[` +
        dependencies.map(({ importPath }) => `'${importPath}'`).join(`,${_}`) +
        `],${_}(${getNonArrowFunctionIntro(wrapperParameters, {
            isAsync: false,
            name: null
        })}{${n}${t}${strict ? "'use strict';" : ''}` +
        getStarExcludesBlock(starExcludes, t, snippets) +
        getImportBindingsBlock(importBindings, t, snippets) +
        `${n}${t}return${_}{${setters.length > 0
            ? `${n}${t}${t}setters:${_}[${setters
                .map(setter => setter
                ? `${getFunctionIntro(['module'], {
                    isAsync: false,
                    name: null
                })}{${n}${t}${t}${t}${setter}${n}${t}${t}}`
                : systemNullSetters
                    ? `null`
                    : `${getFunctionIntro([], { isAsync: false, name: null })}{}`)
                .join(`,${_}`)}],`
            : ''}${n}`;
    wrapperStart += `${t}${t}execute:${_}(${getNonArrowFunctionIntro([], {
        isAsync: usesTopLevelAwait,
        name: null
    })}{${n}${n}`;
    const wrapperEnd = `${t}${t}})${n}${t}}${s}${n}}));`;
    magicString
        .prepend(intro +
        getHelpersBlock(null, accessedGlobals, t, snippets, externalLiveBindings, freeze, symbols) +
        getHoistedExportsBlock(exports$1, t, snippets))
        .append(`${outro}${n}${n}` +
        getSyntheticExportsBlock(exports$1, t, snippets) +
        getMissingExportsBlock(exports$1, t, snippets))
        .indent(`${t}${t}${t}`)
        .append(wrapperEnd)
        .prepend(wrapperStart);
}
function analyzeDependencies(dependencies, exports$1, t, { _, cnst, getObject, getPropertyAccess, n }) {
    const importBindings = [];
    const setters = [];
    let starExcludes = null;
    for (const { imports, reexports } of dependencies) {
        const setter = [];
        if (imports) {
            for (const specifier of imports) {
                importBindings.push(specifier.local);
                if (specifier.imported === '*') {
                    setter.push(`${specifier.local}${_}=${_}module;`);
                }
                else {
                    setter.push(`${specifier.local}${_}=${_}module${getPropertyAccess(specifier.imported)};`);
                }
            }
        }
        if (reexports) {
            const reexportedNames = [];
            let hasStarReexport = false;
            for (const { imported, reexported } of reexports) {
                if (reexported === '*') {
                    hasStarReexport = true;
                }
                else {
                    reexportedNames.push([
                        reexported,
                        imported === '*' ? 'module' : `module${getPropertyAccess(imported)}`
                    ]);
                }
            }
            if (reexportedNames.length > 1 || hasStarReexport) {
                if (hasStarReexport) {
                    if (!starExcludes) {
                        starExcludes = getStarExcludes({ dependencies, exports: exports$1 });
                    }
                    reexportedNames.unshift([null, `__proto__:${_}null`]);
                    const exportMapping = getObject(reexportedNames, { lineBreakIndent: null });
                    setter.push(`${cnst} setter${_}=${_}${exportMapping};`, `for${_}(${cnst} name in module)${_}{`, `${t}if${_}(!_starExcludes[name])${_}setter[name]${_}=${_}module[name];`, '}', 'exports(setter);');
                }
                else {
                    const exportMapping = getObject(reexportedNames, { lineBreakIndent: null });
                    setter.push(`exports(${exportMapping});`);
                }
            }
            else {
                const [key, value] = reexportedNames[0];
                setter.push(`exports(${JSON.stringify(key)},${_}${value});`);
            }
        }
        setters.push(setter.join(`${n}${t}${t}${t}`));
    }
    return { importBindings, setters, starExcludes };
}
const getStarExcludes = ({ dependencies, exports: exports$1 }) => {
    const starExcludes = new Set(exports$1.map(expt => expt.exported));
    starExcludes.add('default');
    for (const { reexports } of dependencies) {
        if (reexports) {
            for (const reexport of reexports) {
                if (reexport.reexported !== '*')
                    starExcludes.add(reexport.reexported);
            }
        }
    }
    return starExcludes;
};
const getStarExcludesBlock = (starExcludes, t, { _, cnst, getObject, n }) => {
    if (starExcludes) {
        const fields = [...starExcludes].map(property => [
            property,
            '1'
        ]);
        fields.unshift([null, `__proto__:${_}null`]);
        return `${n}${t}${cnst} _starExcludes${_}=${_}${getObject(fields, {
            lineBreakIndent: { base: t, t }
        })};`;
    }
    return '';
};
const getImportBindingsBlock = (importBindings, t, { _, n }) => (importBindings.length > 0 ? `${n}${t}var ${importBindings.join(`,${_}`)};` : '');
const getHoistedExportsBlock = (exports$1, t, snippets) => getExportsBlock(exports$1.filter(expt => expt.hoisted).map(expt => ({ name: expt.exported, value: expt.local })), t, snippets);
function getExportsBlock(exports$1, t, { _, n }) {
    if (exports$1.length === 0) {
        return '';
    }
    if (exports$1.length === 1) {
        return `exports(${JSON.stringify(exports$1[0].name)},${_}${exports$1[0].value});${n}${n}`;
    }
    return (`exports({${n}` +
        exports$1
            .map(({ name, value }) => `${t}${stringifyObjectKeyIfNeeded(name)}:${_}${value}`)
            .join(`,${n}`) +
        `${n}});${n}${n}`);
}
const getSyntheticExportsBlock = (exports$1, t, snippets) => getExportsBlock(exports$1
    .filter(expt => expt.expression)
    .map(expt => ({ name: expt.exported, value: expt.local })), t, snippets);
const getMissingExportsBlock = (exports$1, t, snippets) => getExportsBlock(exports$1
    .filter(expt => expt.local === MISSING_EXPORT_SHIM_VARIABLE)
    .map(expt => ({ name: expt.exported, value: MISSING_EXPORT_SHIM_VARIABLE })), t, snippets);

function globalProperty(name, globalVariable, getPropertyAccess) {
    if (!name)
        return 'null';
    return `${globalVariable}${keypath(name, getPropertyAccess)}`;
}
function safeAccess(name, globalVariable, { _, getPropertyAccess }) {
    let propertyPath = globalVariable;
    return name
        .split('.')
        .map(part => (propertyPath += getPropertyAccess(part)))
        .join(`${_}&&${_}`);
}
function umd(magicString, { accessedGlobals, dependencies, exports: exports$1, hasDefaultExport, hasExports, id, indent: t, intro, namedExportsMode, log, outro, snippets }, { amd, compact, esModule, extend, externalLiveBindings, freeze, interop, name, generatedCode: { symbols }, globals, noConflict, reexportProtoFromExternal, strict }) {
    const { _, cnst, getFunctionIntro, getNonArrowFunctionIntro, getPropertyAccess, n, s } = snippets;
    const factoryVariable = compact ? 'f' : 'factory';
    const globalVariable = compact ? 'g' : 'global';
    if (hasExports && !name) {
        return parseAst_js.error(parseAst_js.logMissingNameOptionForUmdExport());
    }
    throwOnPhase('umd', id, dependencies);
    warnOnBuiltins(log, dependencies);
    const amdDeps = dependencies.map(m => `'${updateExtensionForRelativeAmdId(m.importPath, amd.forceJsExtensionForImports)}'`);
    const cjsDeps = dependencies.map(m => `require('${m.importPath}')`);
    const trimmedImports = trimEmptyImports(dependencies);
    const globalDeps = trimmedImports.map(module => globalProperty(module.globalName, globalVariable, getPropertyAccess));
    const factoryParameters = trimmedImports.map(m => m.name);
    if ((hasExports || noConflict) &&
        (namedExportsMode || (hasExports && exports$1[0]?.local === 'exports.default'))) {
        amdDeps.unshift(`'exports'`);
        cjsDeps.unshift(`exports`);
        globalDeps.unshift(assignToDeepVariable(name, globalVariable, globals, `${extend ? `${globalProperty(name, globalVariable, getPropertyAccess)}${_}||${_}` : ''}{}`, snippets, log));
        factoryParameters.unshift('exports');
    }
    const completeAmdId = getCompleteAmdId(amd, id);
    const amdParameters = (completeAmdId ? `'${completeAmdId}',${_}` : ``) +
        (amdDeps.length > 0 ? `[${amdDeps.join(`,${_}`)}],${_}` : ``);
    const define = amd.define;
    const cjsExport = !namedExportsMode && hasExports ? `module.exports${_}=${_}` : ``;
    const useStrict = strict ? `${_}'use strict';${n}` : ``;
    let iifeExport;
    if (noConflict) {
        const noConflictExportsVariable = compact ? 'e' : 'exports';
        let factory;
        if (!namedExportsMode && hasExports) {
            factory = `${cnst} ${noConflictExportsVariable}${_}=${_}${assignToDeepVariable(name, globalVariable, globals, `${factoryVariable}(${globalDeps.join(`,${_}`)})`, snippets, log)};`;
        }
        else {
            const module = globalDeps.shift();
            factory =
                `${cnst} ${noConflictExportsVariable}${_}=${_}${module};${n}` +
                    `${t}${t}${factoryVariable}(${[noConflictExportsVariable, ...globalDeps].join(`,${_}`)});`;
        }
        iifeExport =
            `(${getFunctionIntro([], { isAsync: false, name: null })}{${n}` +
                `${t}${t}${cnst} current${_}=${_}${safeAccess(name, globalVariable, snippets)};${n}` +
                `${t}${t}${factory}${n}` +
                `${t}${t}${noConflictExportsVariable}.noConflict${_}=${_}${getFunctionIntro([], {
                    isAsync: false,
                    name: null
                })}{${_}` +
                `${globalProperty(name, globalVariable, getPropertyAccess)}${_}=${_}current;${_}return ${noConflictExportsVariable}${s}${_}};${n}` +
                `${t}})()`;
    }
    else {
        iifeExport = `${factoryVariable}(${globalDeps.join(`,${_}`)})`;
        if (!namedExportsMode && hasExports) {
            iifeExport = assignToDeepVariable(name, globalVariable, globals, iifeExport, snippets, log);
        }
    }
    const iifeNeedsGlobal = hasExports || (noConflict && namedExportsMode) || globalDeps.length > 0;
    const wrapperParameters = [factoryVariable];
    if (iifeNeedsGlobal) {
        wrapperParameters.unshift(globalVariable);
    }
    const globalArgument = iifeNeedsGlobal ? `this,${_}` : '';
    const iifeStart = iifeNeedsGlobal
        ? `(${globalVariable}${_}=${_}typeof globalThis${_}!==${_}'undefined'${_}?${_}globalThis${_}:${_}${globalVariable}${_}||${_}self,${_}`
        : '';
    const iifeEnd = iifeNeedsGlobal ? ')' : '';
    const cjsIntro = iifeNeedsGlobal
        ? `${t}typeof exports${_}===${_}'object'${_}&&${_}typeof module${_}!==${_}'undefined'${_}?` +
            `${_}${cjsExport}${factoryVariable}(${cjsDeps.join(`,${_}`)})${_}:${n}`
        : '';
    const wrapperIntro = `(${getNonArrowFunctionIntro(wrapperParameters, { isAsync: false, name: null })}{${n}` +
        cjsIntro +
        `${t}typeof ${define}${_}===${_}'function'${_}&&${_}${define}.amd${_}?${_}${define}(${amdParameters}${factoryVariable})${_}:${n}` +
        `${t}${iifeStart}${iifeExport}${iifeEnd};${n}` +
        // factory function should be wrapped by parentheses to avoid lazy parsing,
        // cf. https://v8.dev/blog/preparser#pife
        `})(${globalArgument}(${getNonArrowFunctionIntro(factoryParameters, {
            isAsync: false,
            name: null
        })}{${useStrict}${n}`;
    const wrapperOutro = n + n + '}));';
    magicString.prepend(`${intro}${getInteropBlock(dependencies, interop, externalLiveBindings, freeze, symbols, accessedGlobals, t, snippets)}`);
    const exportBlock = getExportBlock$1(exports$1, dependencies, namedExportsMode, interop, snippets, t, externalLiveBindings, reexportProtoFromExternal);
    let namespaceMarkers = getNamespaceMarkers(namedExportsMode && hasExports, esModule === true || (esModule === 'if-default-prop' && hasDefaultExport), symbols, snippets);
    if (namespaceMarkers) {
        namespaceMarkers = n + n + namespaceMarkers;
    }
    magicString
        .append(`${exportBlock}${namespaceMarkers}${outro}`)
        .trim()
        .indent(t)
        .append(wrapperOutro)
        .prepend(wrapperIntro);
}

const finalisers = { amd, cjs, es, iife, system, umd };

const extractors = {
    ArrayPattern(names, param) {
        for (const element of param.elements) {
            if (element)
                extractors[element.type](names, element);
        }
    },
    AssignmentPattern(names, param) {
        extractors[param.left.type](names, param.left);
    },
    Identifier(names, param) {
        names.push(param.name);
    },
    MemberExpression() { },
    ObjectPattern(names, param) {
        for (const prop of param.properties) {
            // @ts-ignore Typescript reports that this is not a valid type
            if (prop.type === 'RestElement') {
                extractors.RestElement(names, prop);
            }
            else {
                extractors[prop.value.type](names, prop.value);
            }
        }
    },
    RestElement(names, param) {
        extractors[param.argument.type](names, param.argument);
    }
};
const extractAssignedNames = function extractAssignedNames(param) {
    const names = [];
    extractors[param.type](names, param);
    return names;
};

// Helper since Typescript can't detect readonly arrays with Array.isArray
function isArray(arg) {
    return Array.isArray(arg);
}
function ensureArray(thing) {
    if (isArray(thing))
        return thing;
    if (thing == null)
        return [];
    return [thing];
}

const normalizePathRegExp = new RegExp(`\\${require$$0.win32.sep}`, 'g');
const normalizePath = function normalizePath(filename) {
    return filename.replace(normalizePathRegExp, require$$0.posix.sep);
};

function getMatcherString(id, resolutionBase) {
    if (resolutionBase === false || require$$0.isAbsolute(id) || id.startsWith('**')) {
        return normalizePath(id);
    }
    // resolve('') is valid and will default to process.cwd()
    const basePath = normalizePath(require$$0.resolve(resolutionBase || ''))
        // escape all possible (posix + win) path characters that might interfere with regex
        .replace(/[-^$*+?.()|[\]{}]/g, '\\$&');
    // Note that we use posix.join because:
    // 1. the basePath has been normalized to use /
    // 2. the incoming glob (id) matcher, also uses /
    // otherwise Node will force backslash (\) on windows
    return require$$0.posix.join(basePath, normalizePath(id));
}
const createFilter = function createFilter(include, exclude, options) {
    const resolutionBase = options && options.resolve;
    const getMatcher = (id) => id instanceof RegExp
        ? id
        : {
            test: (what) => {
                // this refactor is a tad overly verbose but makes for easy debugging
                const pattern = getMatcherString(id, resolutionBase);
                const fn = pm(pattern, { dot: true });
                const result = fn(what);
                return result;
            }
        };
    const includeMatchers = ensureArray(include).map(getMatcher);
    const excludeMatchers = ensureArray(exclude).map(getMatcher);
    if (!includeMatchers.length && !excludeMatchers.length)
        return (id) => typeof id === 'string' && !id.includes('\0');
    return function result(id) {
        if (typeof id !== 'string')
            return false;
        if (id.includes('\0'))
            return false;
        const pathId = normalizePath(id);
        for (let i = 0; i < excludeMatchers.length; ++i) {
            const matcher = excludeMatchers[i];
            if (matcher instanceof RegExp) {
                matcher.lastIndex = 0;
            }
            if (matcher.test(pathId))
                return false;
        }
        for (let i = 0; i < includeMatchers.length; ++i) {
            const matcher = includeMatchers[i];
            if (matcher instanceof RegExp) {
                matcher.lastIndex = 0;
            }
            if (matcher.test(pathId))
                return true;
        }
        return !includeMatchers.length;
    };
};

const reservedWords = 'break case class catch const continue debugger default delete do else export extends finally for function if import in instanceof let new return super switch this throw try typeof var void while with yield enum await implements package protected static interface private public';
const builtins = 'arguments Infinity NaN undefined null true false eval uneval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Symbol Error EvalError InternalError RangeError ReferenceError SyntaxError TypeError URIError Number Math Date String RegExp Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array Map Set WeakMap WeakSet SIMD ArrayBuffer DataView JSON Promise Generator GeneratorFunction Reflect Proxy Intl';
const forbiddenIdentifiers = new Set(`${reservedWords} ${builtins}`.split(' '));
forbiddenIdentifiers.add('');

class ArrayPattern extends NodeBase {
    addExportedVariables(variables, exportNamesByVariable) {
        for (const element of this.elements) {
            element?.addExportedVariables(variables, exportNamesByVariable);
        }
    }
    declare(kind, destructuredInitPath, init) {
        const variables = [];
        const includedPatternPath = getIncludedPatternPath(destructuredInitPath);
        for (const element of this.elements) {
            if (element !== null) {
                variables.push(...element.declare(kind, includedPatternPath, init));
            }
        }
        return variables;
    }
    deoptimizeAssignment(destructuredInitPath, init) {
        const includedPatternPath = getIncludedPatternPath(destructuredInitPath);
        for (const element of this.elements) {
            element?.deoptimizeAssignment(includedPatternPath, init);
        }
    }
    // Patterns can only be deoptimized at the empty path at the moment
    deoptimizePath() {
        for (const element of this.elements) {
            element?.deoptimizePath(EMPTY_PATH);
        }
    }
    hasEffectsWhenDestructuring(context, destructuredInitPath, init) {
        const includedPatternPath = getIncludedPatternPath(destructuredInitPath);
        for (const element of this.elements) {
            if (element?.hasEffectsWhenDestructuring(context, includedPatternPath, init)) {
                return true;
            }
        }
        return false;
    }
    // Patterns are only checked at the empty path at the moment
    hasEffectsOnInteractionAtPath(_path, interaction, context) {
        for (const element of this.elements) {
            if (element?.hasEffectsOnInteractionAtPath(EMPTY_PATH, interaction, context))
                return true;
        }
        return false;
    }
    includeDestructuredIfNecessary(context, destructuredInitPath, init) {
        let included = false;
        const includedPatternPath = getIncludedPatternPath(destructuredInitPath);
        for (const element of [...this.elements].reverse()) {
            if (element) {
                if (included && !element.included) {
                    element.includeNode(context);
                }
                included =
                    element.includeDestructuredIfNecessary(context, includedPatternPath, init) || included;
            }
        }
        if (!this.included && included) {
            this.includeNode(context);
        }
        return this.included;
    }
    render(code, options) {
        let removedStart = this.start + 1;
        for (const element of this.elements) {
            if (!element)
                continue;
            if (element.included) {
                element.render(code, options);
                removedStart = element.end;
            }
            else {
                code.remove(removedStart, this.end - 1);
                break;
            }
        }
    }
    markDeclarationReached() {
        for (const element of this.elements) {
            element?.markDeclarationReached();
        }
    }
}
ArrayPattern.prototype.includeNode = onlyIncludeSelf;
const getIncludedPatternPath = (destructuredInitPath) => destructuredInitPath.at(-1) === UnknownKey
    ? destructuredInitPath
    : [...destructuredInitPath, UnknownInteger];

class ArrowFunctionExpression extends FunctionBase {
    constructor() {
        super(...arguments);
        this.objectEntity = null;
    }
    get expression() {
        return isFlagSet(this.flags, 8388608 /* Flag.expression */);
    }
    set expression(value) {
        this.flags = setFlag(this.flags, 8388608 /* Flag.expression */, value);
    }
    createScope(parentScope) {
        this.scope = new ReturnValueScope(parentScope, false);
    }
    hasEffects() {
        return false;
    }
    hasEffectsOnInteractionAtPath(path, interaction, context) {
        if (this.annotationNoSideEffects &&
            path.length === 0 &&
            interaction.type === INTERACTION_CALLED) {
            return false;
        }
        if (super.hasEffectsOnInteractionAtPath(path, interaction, context)) {
            return true;
        }
        if (interaction.type === INTERACTION_CALLED) {
            const { ignore, brokenFlow } = context;
            context.ignore = {
                breaks: false,
                continues: false,
                labels: new Set(),
                returnYield: true,
                this: false
            };
            if (this.body.hasEffects(context))
                return true;
            context.ignore = ignore;
            context.brokenFlow = brokenFlow;
        }
        return false;
    }
    onlyFunctionCallUsed() {
        const isIIFE = this.parent.type === parseAst_js.CallExpression &&
            this.parent.callee === this;
        return isIIFE || super.onlyFunctionCallUsed();
    }
    include(context, includeChildrenRecursively) {
        super.include(context, includeChildrenRecursively);
        for (const parameter of this.params) {
            if (!(parameter instanceof Identifier)) {
                parameter.include(context, includeChildrenRecursively);
            }
        }
    }
    includeNode(context) {
        this.included = true;
        this.body.includePath(UNKNOWN_PATH, context);
        for (const parameter of this.params) {
            if (!(parameter instanceof Identifier)) {
                parameter.includePath(UNKNOWN_PATH, context);
            }
        }
    }
    getObjectEntity() {
        if (this.objectEntity !== null) {
            return this.objectEntity;
        }
        return (this.objectEntity = new ObjectEntity([], OBJECT_PROTOTYPE));
    }
}

class ObjectPattern extends NodeBase {
    addExportedVariables(variables, exportNamesByVariable) {
        for (const property of this.properties) {
            if (property.type === parseAst_js.Property) {
                property.value.addExportedVariables(variables, exportNamesByVariable);
            }
            else {
                property.argument.addExportedVariables(variables, exportNamesByVariable);
            }
        }
    }
    declare(kind, destructuredInitPath, init) {
        const variables = [];
        for (const property of this.properties) {
            variables.push(...property.declare(kind, destructuredInitPath, init));
        }
        return variables;
    }
    deoptimizeAssignment(destructuredInitPath, init) {
        for (const property of this.properties) {
            property.deoptimizeAssignment(destructuredInitPath, init);
        }
    }
    deoptimizePath(path) {
        if (path.length === 0) {
            for (const property of this.properties) {
                property.deoptimizePath(path);
            }
        }
    }
    hasEffectsOnInteractionAtPath(
    // At the moment, this is only triggered for assignment left-hand sides,
    // where the path is empty
    _path, interaction, context) {
        for (const property of this.properties) {
            if (property.hasEffectsOnInteractionAtPath(EMPTY_PATH, interaction, context))
                return true;
        }
        return false;
    }
    hasEffectsWhenDestructuring(context, destructuredInitPath, init) {
        for (const property of this.properties) {
            if (property.hasEffectsWhenDestructuring(context, destructuredInitPath, init))
                return true;
        }
        return false;
    }
    includeDestructuredIfNecessary(context, destructuredInitPath, init) {
        if (!this.properties.length)
            return this.included;
        const lastProperty = this.properties.at(-1);
        let included = lastProperty.includeDestructuredIfNecessary(context, destructuredInitPath, init);
        const lastPropertyIsRestElement = lastProperty.type === parseAst_js.RestElement;
        for (const property of this.properties.slice(0, -1)) {
            if (lastPropertyIsRestElement && included && !property.included) {
                property.includeNode(context);
            }
            included =
                property.includeDestructuredIfNecessary(context, destructuredInitPath, init) || included;
        }
        if (!this.included && included) {
            this.includeNode(context);
        }
        return this.included;
    }
    markDeclarationReached() {
        for (const property of this.properties) {
            property.markDeclarationReached();
        }
    }
    render(code, options) {
        if (this.properties.length > 0) {
            const separatedNodes = getCommaSeparatedNodesWithBoundaries(this.properties, code, this.start + 1, this.end - 1);
            let lastSeparatorPos = null;
            for (const { node, separator, start, end } of separatedNodes) {
                if (!node.included) {
                    treeshakeNode(node, code, start, end);
                    continue;
                }
                lastSeparatorPos = separator;
                node.render(code, options);
            }
            if (lastSeparatorPos) {
                code.remove(lastSeparatorPos, this.end - 1);
            }
        }
    }
}
ObjectPattern.prototype.includeNode = onlyIncludeSelfNoDeoptimize;
ObjectPattern.prototype.applyDeoptimizations = doNotDeoptimize;

class AssignmentExpression extends NodeBase {
    constructor() {
        super(...arguments);
        this.isConstReassignment = false;
    }
    hasEffects(context) {
        const { deoptimized, isConstReassignment, left, operator, right } = this;
        if (!deoptimized)
            this.applyDeoptimizations();
        // MemberExpressions do not access the property before assignments if the
        // operator is '='.
        return (isConstReassignment ||
            right.hasEffects(context) ||
            left.hasEffectsAsAssignmentTarget(context, operator !== '=') ||
            this.left.hasEffectsWhenDestructuring?.(context, EMPTY_PATH, right));
    }
    hasEffectsOnInteractionAtPath(path, interaction, context) {
        return ((interaction.type === INTERACTION_ASSIGNED && this.left.included) ||
            this.right.hasEffectsOnInteractionAtPath(path, interaction, context));
    }
    include(context, includeChildrenRecursively) {
        const { deoptimized, isConstReassignment, left, right, operator } = this;
        if (!deoptimized)
            this.applyDeoptimizations();
        if (!this.included)
            this.includeNode(context);
        const hasEffectsContext = createHasEffectsContext();
        if (includeChildrenRecursively ||
            isConstReassignment ||
            operator !== '=' ||
            left.included ||
            left.hasEffectsAsAssignmentTarget(hasEffectsContext, false) ||
            left.hasEffectsWhenDestructuring?.(hasEffectsContext, EMPTY_PATH, right)) {
            left.includeAsAssignmentTarget(context, includeChildrenRecursively, operator !== '=');
        }
        right.include(context, includeChildrenRecursively);
    }
    includeNode(context) {
        this.included = true;
        if (!this.deoptimized)
            this.applyDeoptimizations();
        this.right.includePath(UNKNOWN_PATH, context);
    }
    initialise() {
        super.initialise();
        if (this.left instanceof Identifier) {
            const variable = this.scope.variables.get(this.left.name);
            if (variable?.kind === 'const') {
                this.isConstReassignment = true;
                this.scope.context.log(parseAst_js.LOGLEVEL_WARN, parseAst_js.logConstVariableReassignError(), this.left.start);
            }
        }
        this.left.setAssignedValue(this.right);
    }
    render(code, options, { preventASI, renderedParentType, renderedSurroundingElement } = parseAst_js.BLANK) {
        const { left, right, start, end, parent } = this;
        if (left.included) {
            left.render(code, options);
            right.render(code, options);
        }
        else {
            const inclusionStart = findNonWhiteSpace(code.original, findFirstOccurrenceOutsideComment(code.original, '=', left.end) + 1);
            code.remove(start, inclusionStart);
            if (preventASI) {
                removeLineBreaks(code, inclusionStart, right.start);
            }
            right.render(code, options, {
                renderedParentType: renderedParentType || parent.type,
                renderedSurroundingElement: renderedSurroundingElement || parent.type
            });
        }
        if (options.format === 'system') {
            if (left instanceof Identifier) {
                const variable = left.variable;
                const exportNames = options.exportNamesByVariable.get(variable);
                if (exportNames) {
                    if (exportNames.length === 1) {
                        renderSystemExportExpression(variable, start, end, code, options);
                    }
                    else {
                        renderSystemExportSequenceAfterExpression(variable, start, end, parent.type !== parseAst_js.ExpressionStatement, code, options);
                    }
                    return;
                }
            }
            else {
                const systemPatternExports = [];
                left.addExportedVariables(systemPatternExports, options.exportNamesByVariable);
                if (systemPatternExports.length > 0) {
                    renderSystemExportFunction(systemPatternExports, start, end, renderedSurroundingElement === parseAst_js.ExpressionStatement, code, options);
                    return;
                }
            }
        }
        if (left.included &&
            left instanceof ObjectPattern &&
            (renderedSurroundingElement === parseAst_js.ExpressionStatement ||
                renderedSurroundingElement === parseAst_js.ArrowFunctionExpression)) {
            code.appendRight(start, '(');
            code.prependLeft(end, ')');
        }
    }
    applyDeoptimizations() {
        this.deoptimized = true;
        this.left.deoptimizeAssignment(EMPTY_PATH, this.right);
        this.scope.context.requestTreeshakingPass();
    }
}

class AssignmentPattern extends NodeBase {
    addExportedVariables(variables, exportNamesByVariable) {
        this.left.addExportedVariables(variables, exportNamesByVariable);
    }
    declare(kind, destructuredInitPath, init) {
        return this.left.declare(kind, destructuredInitPath, init);
    }
    deoptimizeAssignment(destructuredInitPath, init) {
        this.left.deoptimizeAssignment(destructuredInitPath, init);
    }
    deoptimizePath(path) {
        if (path.length === 0) {
            this.left.deoptimizePath(path);
        }
    }
    hasEffectsOnInteractionAtPath(path, interaction, context) {
        return (path.length > 0 || this.left.hasEffectsOnInteractionAtPath(EMPTY_PATH, interaction, context));
    }
    hasEffectsWhenDestructuring(context, destructuredInitPath, init) {
        return this.left.hasEffectsWhenDestructuring(context, destructuredInitPath, init);
    }
    includeDestructuredIfNecessary(context, destructuredInitPath, init) {
        let included = this.left.includeDestructuredIfNecessary(context, destructuredInitPath, init) ||
            this.included;
        if ((included ||= this.right.shouldBeIncluded(context))) {
            this.right.include(context, false);
            if (!this.left.included) {
                this.left.includeNode(context);
                // Unfortunately, we need to include the left side again now, so that
                // any declared variables are properly included.
                this.left.includeDestructuredIfNecessary(context, destructuredInitPath, init);
            }
        }
        if (!this.included && included) {
            this.includeNode(context);
        }
        return this.included;
    }
    includeNode(context) {
        this.included = true;
        if (!this.deoptimized)
            this.applyDeoptimizations();
        this.right.includePath(UNKNOWN_PATH, context);
    }
    markDeclarationReached() {
        this.left.markDeclarationReached();
    }
    render(code, options, { isShorthandProperty } = parseAst_js.BLANK) {
        this.left.render(code, options, { isShorthandProperty });
        this.right.render(code, options);
    }
    applyDeoptimizations() {
        this.deoptimized = true;
        this.left.deoptimizePath(EMPTY_PATH);
        this.right.deoptimizePath(UNKNOWN_PATH);
        this.scope.context.requestTreeshakingPass();
    }
}

class AwaitExpression extends NodeBase {
    deoptimizePath(path) {
        this.argument.deoptimizePath(path);
    }
    hasEffects() {
        if (!this.deoptimized)
            this.applyDeoptimizations();
        return true;
    }
    initialise() {
        super.initialise();
        let parent = this.parent;
        do {
            if (parent instanceof FunctionNode || parent instanceof ArrowFunctionExpression)
                return;
        } while ((parent = parent.parent));
        this.scope.context.usesTopLevelAwait = true;
    }
    include(context, includeChildrenRecursively) {
        if (!this.included)
            this.includeNode(context);
        this.argument.include(context, includeChildrenRecursively);
    }
    includeNode(context) {
        this.included = true;
        if (!this.deoptimized)
            this.applyDeoptimizations();
        // Thenables need to be included
        this.argument.includePath(THEN_PATH, context);
    }
    includePath(path, context) {
        if (!this.deoptimized)
            this.applyDeoptimizations();
        if (!this.included)
            this.includeNode(context);
        this.argument.includePath(path, context);
    }
}
const THEN_PATH = ['then'];

function getRenderedLiteralValue(value) {
    if (value === undefined) {
        return 'void 0';
    }
    if (typeof value === 'boolean') {
        return String(value);
    }
    if (typeof value === 'string') {
        return JSON.stringify(value);
    }
    if (typeof value === 'number') {
        return getSimplifiedNumber(value);
    }
    return UnknownValue;
}
function getSimplifiedNumber(value) {
    if (Object.is(-0, value)) {
        return '-0';
    }
    const exp = value.toExponential();
    const [base, exponent] = exp.split('e');
    const floatLength = base.split('.')[1]?.length || 0;
    const finalizedExp = `${base.replace('.', '')}e${parseInt(exponent) - floatLength}`;
    const stringifiedValue = String(value).replace('+', '');
    return finalizedExp.length < stringifiedValue.length ? finalizedExp : stringifiedValue;
}

const binaryOperators = {
    '!=': (left, right) => left != right,
    '!==': (left, right) => left !== right,
    '%': (left, right) => left % right,
    '&': (left, right) => left & right,
    '*': (left, right) => left * right,
    // At the moment, "**" will be transpiled to Math.pow
    '**': (left, right) => left ** right,
    '+': (left, right) => left + right,
    '-': (left, right) => left - right,
    '/': (left, right) => left / right,
    '<': (left, right) => left < right,
    '<<': (left, right) => left << right,
    '<=': (left, right) => left <= right,
    '==': (left, right) => left == right,
    '===': (left, right) => left === right,
    '>': (left, right) => left > right,
    '>=': (left, right) => left >= right,
    '>>': (left, right) => left >> right,
    '>>>': (left, right) => left >>> right,
    '^': (left, right) => left ^ right,
    '|': (left, right) => left | right
    // We use the fallback for cases where we return something unknown
    // in: () => UnknownValue,
    // instanceof: () => UnknownValue,
};
const UNASSIGNED$1 = Symbol('Unassigned');
class BinaryExpression extends NodeBase {
    constructor() {
        super(...arguments);
        this.renderedLiteralValue = UNASSIGNED$1;
    }
    deoptimizeCache() {
        this.renderedLiteralValue = UnknownValue;
    }
    getLiteralValueAtPath(path, recursionTracker, origin) {
        if (path.length > 0)
            return UnknownValue;
        const leftValue = this.left.getLiteralValueAtPath(EMPTY_PATH, recursionTracker, origin);
        if (typeof leftValue === 'symbol')
            return UnknownValue;
        // Optimize `'export' in namespace`
        if (this.operator === 'in' && this.right.variable instanceof NamespaceVariable) {
            const [variable] = this.right.variable.context.traceExport(String(leftValue));
            if (variable instanceof ExternalVariable)
                return UnknownValue;
            if (variable instanceof SyntheticNamedExportVariable)
                return UnknownValue;
            return !!variable;
        }
        const rightValue = this.right.getLiteralValueAtPath(EMPTY_PATH, recursionTracker, origin);
        if (typeof rightValue === 'symbol')
            return UnknownValue;
        const operatorFunction = binaryOperators[this.operator];
        if (!operatorFunction)
            return UnknownValue;
        return operatorFunction(leftValue, rightValue);
    }
    getRenderedLiteralValue() {
        // Only optimize `'export' in ns`
        if (this.operator !== 'in' || !(this.right.variable instanceof NamespaceVariable)) {
            return UnknownValue;
        }
        if (this.renderedLiteralValue !== UNASSIGNED$1)
            return this.renderedLiteralValue;
        return (this.renderedLiteralValue = getRenderedLiteralValue(this.getLiteralValueAtPath(EMPTY_PATH, SHARED_RECURSION_TRACKER, this)));
    }
    hasEffects(context) {
        // support some implicit type coercion runtime errors
        if (this.operator === '+' &&
            this.parent instanceof ExpressionStatement &&
            this.left.getLiteralValueAtPath(EMPTY_PATH, SHARED_RECURSION_TRACKER, this) === '') {
            return true;
        }
        return super.hasEffects(context);
    }
    hasEffectsOnInteractionAtPath(path, { type }) {
        return type !== INTERACTION_ACCESSED || path.length > 1;
    }
    include(context, includeChildrenRecursively, options) {
        if (!this.included)
            this.includeNode(context);
        if (typeof this.getRenderedLiteralValue() === 'symbol') {
            this.left.include(context, includeChildrenRecursively, options);
            this.right.include(context, includeChildrenRecursively, options);
            // `instanceof` will attempt to call RHS's `Symbol.hasInstance` if it exists.
            if (this.operator === 'instanceof')
                this.right.includePath(INSTANCEOF_PATH, context);
        }
    }
    includeNode(context) {
        this.included = true;
        if (this.operator === 'in' && typeof this.getRenderedLiteralValue() === 'symbol') {
            this.right.includePath(UNKNOWN_PATH, context);
        }
    }
    removeAnnotations(code) {
        this.left.removeAnnotations(code);
    }
    render(code, options, { renderedSurroundingElement } = parseAst_js.BLANK) {
        const renderedLiteralValue = this.getRenderedLiteralValue();
        if (typeof renderedLiteralValue !== 'symbol') {
            code.overwrite(this.start, this.end, renderedLiteralValue);
        }
        else {
            this.left.render(code, options, { renderedSurroundingElement });
            this.right.render(code, options);
        }
    }
}
BinaryExpression.prototype.applyDeoptimizations = doNotDeoptimize;

class BreakStatement extends NodeBase {
    hasEffects(context) {
        if (this.label) {
            if (!context.ignore.labels.has(this.label.name))
                return true;
            context.includedLabels.add(this.label.name);
        }
        else {
            if (!context.ignore.breaks)
                return true;
            context.hasBreak = true;
        }
        context.brokenFlow = true;
        return false;
    }
    include(context, includeChildrenRecursively) {
        this.included = true;
        if (this.label) {
            this.label.include(context, includeChildrenRecursively);
            context.includedLabels.add(this.label.name);
        }
        else {
            context.hasBreak = true;
        }
        context.brokenFlow = true;
    }
}
BreakStatement.prototype.includeNode = onlyIncludeSelfNoDeoptimize;
BreakStatement.prototype.applyDeoptimizations = doNotDeoptimize;

function renderCallArguments(code, options, node) {
    if (node.arguments.length > 0) {
        if (node.arguments[node.arguments.length - 1].included) {
            for (const argument of node.arguments) {
                argument.render(code, options);
            }
        }
        else {
            let lastIncludedIndex = node.arguments.length - 2;
            while (lastIncludedIndex >= 0 && !node.arguments[lastIncludedIndex].included) {
                lastIncludedIndex--;
            }
            if (lastIncludedIndex >= 0) {
                for (let index = 0; index <= lastIncludedIndex; index++) {
                    node.arguments[index].render(code, options);
                }
                code.remove(findFirstOccurrenceOutsideComment(code.original, ',', node.arguments[lastIncludedIndex].end), node.end - 1);
            }
            else {
                code.remove(findFirstOccurrenceOutsideComment(code.original, '(', node.callee.end) + 1, node.end - 1);
            }
        }
    }
}

class CallExpressionBase extends NodeBase {
    constructor() {
        super(...arguments);
        this.returnExpression = null;
        this.deoptimizableDependentExpressions = [];
        this.expressionsToBeDeoptimized = new Set();
    }
    deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker) {
        const { args } = interaction;
        const [returnExpression, isPure] = this.getReturnExpression(recursionTracker);
        if (isPure)
            return;
        const deoptimizedExpressions = args.filter(expression => !!expression && expression !== UNKNOWN_EXPRESSION);
        if (deoptimizedExpressions.length === 0)
            return;
        if (returnExpression === UNKNOWN_EXPRESSION) {
            for (const expression of deoptimizedExpressions) {
                expression.deoptimizePath(UNKNOWN_PATH);
            }
        }
        else {
            recursionTracker.withTrackedEntityAtPath(path, returnExpression, () => {
                for (const expression of deoptimizedExpressions) {
                    this.expressionsToBeDeoptimized.add(expression);
                }
                returnExpression.deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker);
            }, null);
        }
    }
    deoptimizeCache() {
        if (this.returnExpression?.[0] !== UNKNOWN_EXPRESSION) {
            this.returnExpression = UNKNOWN_RETURN_EXPRESSION;
            const { deoptimizableDependentExpressions, expressionsToBeDeoptimized } = this;
            this.expressionsToBeDeoptimized = parseAst_js.EMPTY_SET;
            this.deoptimizableDependentExpressions = parseAst_js.EMPTY_ARRAY;
            for (const expression of deoptimizableDependentExpressions) {
                expression.deoptimizeCache();
            }
            for (const expression of expressionsToBeDeoptimized) {
                expression.deoptimizePath(UNKNOWN_PATH);
            }
        }
    }
    deoptimizePath(path) {
        if (path.length === 0 ||
            this.scope.context.deoptimizationTracker.trackEntityAtPathAndGetIfTracked(path, this)) {
            return;
        }
        const [returnExpression] = this.getReturnExpression();
        if (returnExpression !== UNKNOWN_EXPRESSION) {
            returnExpression.deoptimizePath(path);
        }
    }
    getLiteralValueAtPath(path, recursionTracker, origin) {
        const [returnExpression] = this.getReturnExpression(recursionTracker);
        if (returnExpression === UNKNOWN_EXPRESSION) {
            return UnknownValue;
        }
        return recursionTracker.withTrackedEntityAtPath(path, returnExpression, () => {
            this.deoptimizableDependentExpressions.push(origin);
            return returnExpression.getLiteralValueAtPath(path, recursionTracker, origin);
        }, UnknownValue);
    }
    getReturnExpressionWhenCalledAtPath(path, interaction, recursionTracker, origin) {
        const returnExpression = this.getReturnExpression(recursionTracker);
        if (returnExpression[0] === UNKNOWN_EXPRESSION) {
            return returnExpression;
        }
        return recursionTracker.withTrackedEntityAtPath(path, returnExpression, () => {
            this.deoptimizableDependentExpressions.push(origin);
            const [expression, isPure] = returnExpression[0].getReturnExpressionWhenCalledAtPath(path, interaction, recursionTracker, origin);
            return [expression, isPure || returnExpression[1]];
        }, UNKNOWN_RETURN_EXPRESSION);
    }
    hasEffectsOnInteractionAtPath(path, interaction, context) {
        const { type } = interaction;
        if (type === INTERACTION_CALLED) {
            const { args, withNew } = interaction;
            if ((withNew ? context.instantiated : context.called).trackEntityAtPathAndGetIfTracked(path, args, this)) {
                return false;
            }
        }
        else if ((type === INTERACTION_ASSIGNED
            ? context.assigned
            : context.accessed).trackEntityAtPathAndGetIfTracked(path, this)) {
            return false;
        }
        const [returnExpression, isPure] = this.getReturnExpression();
        return ((type === INTERACTION_ASSIGNED || !isPure) &&
            returnExpression.hasEffectsOnInteractionAtPath(path, interaction, context));
    }
}

class CallExpression extends CallExpressionBase {
    get hasCheckedForWarnings() {
        return isFlagSet(this.flags, 134217728 /* Flag.checkedForWarnings */);
    }
    set hasCheckedForWarnings(value) {
        this.flags = setFlag(this.flags, 134217728 /* Flag.checkedForWarnings */, value);
    }
    get optional() {
        return isFlagSet(this.flags, 128 /* Flag.optional */);
    }
    set optional(value) {
        this.flags = setFlag(this.flags, 128 /* Flag.optional */, value);
    }
    bind() {
        super.bind();
        this.interaction = {
            args: [
                this.callee instanceof MemberExpression && !this.callee.variable
                    ? this.callee.object
                    : null,
                ...this.arguments
            ],
            type: INTERACTION_CALLED,
            withNew: false
        };
    }
    getLiteralValueAtPathAsChainElement(path, recursionTracker, origin) {
        return getChainElementLiteralValueAtPath(this, this.callee, path, recursionTracker, origin);
    }
    hasEffects(context) {
        if (!this.deoptimized)
            this.applyDeoptimizations();
        for (const argument of this.arguments) {
            if (argument.hasEffects(context))
                return true;
        }
        if (this.annotationPure) {
            return false;
        }
        return (this.callee.hasEffects(context) ||
            this.callee.hasEffectsOnInteractionAtPath(EMPTY_PATH, this.interaction, context));
    }
    hasEffectsAsChainElement(context) {
        const calleeHasEffects = 'hasEffectsAsChainElement' in this.callee
            ? this.callee.hasEffectsAsChainElement(context)
            : this.callee.hasEffects(context);
        if (calleeHasEffects === IS_SKIPPED_CHAIN)
            return IS_SKIPPED_CHAIN;
        if (this.optional &&
            this.callee.getLiteralValueAtPath(EMPTY_PATH, SHARED_RECURSION_TRACKER, this) == null) {
            return (!this.annotationPure && calleeHasEffects) || IS_SKIPPED_CHAIN;
        }
        // We only apply deoptimizations lazily once we know we are not skipping
        if (!this.deoptimized)
            this.applyDeoptimizations();
        for (const argument of this.arguments) {
            if (argument.hasEffects(context))
                return true;
        }
        return (!this.annotationPure &&
            (calleeHasEffects ||
                this.callee.hasEffectsOnInteractionAtPath(EMPTY_PATH, this.interaction, context)));
    }
    include(context, includeChildrenRecursively) {
        if (!this.included)
            this.includeNode(context);
        if (includeChildrenRecursively) {
            super.include(context, true);
            if (includeChildrenRecursively === INCLUDE_PARAMETERS &&
                this.callee instanceof Identifier &&
                this.callee.variable) {
                this.callee.variable.markCalledFromTryStatement();
            }
        }
        else {
            this.callee.include(context, false);
            this.callee.includeCallArguments(this.interaction, context);
        }
    }
    includeNode(_context) {
        this.included = true;
        if (!this.deoptimized)
            this.applyDeoptimizations();
    }
    initialise() {
        super.initialise();
        if (this.annotations &&
            this.scope.context.options.treeshake.annotations) {
            this.annotationPure = this.annotations.some(comment => comment.type === 'pure');
        }
    }
    render(code, options, { renderedSurroundingElement } = parseAst_js.BLANK) {
        this.callee.render(code, options, {
            isCalleeOfRenderedParent: true,
            renderedSurroundingElement
        });
        renderCallArguments(code, options, this);
        if (this.callee instanceof Identifier && !this.hasCheckedForWarnings) {
            this.hasCheckedForWarnings = true;
            const variable = this.scope.findVariable(this.callee.name);
            if (variable.isNamespace) {
                this.scope.context.log(parseAst_js.LOGLEVEL_WARN, parseAst_js.logCannotCallNamespace(this.callee.name), this.start);
            }
            if (this.callee.name === 'eval') {
                this.scope.context.log(parseAst_js.LOGLEVEL_WARN, parseAst_js.logEval(this.scope.context.module.id), this.start);
            }
        }
    }
    applyDeoptimizations() {
        this.deoptimized = true;
        this.callee.deoptimizeArgumentsOnInteractionAtPath(this.interaction, EMPTY_PATH, SHARED_RECURSION_TRACKER);
        this.scope.context.requestTreeshakingPass();
    }
    getReturnExpression(recursionTracker = SHARED_RECURSION_TRACKER) {
        if (this.returnExpression === null) {
            this.returnExpression = UNKNOWN_RETURN_EXPRESSION;
            return (this.returnExpression = this.callee.getReturnExpressionWhenCalledAtPath(EMPTY_PATH, this.interaction, recursionTracker, this));
        }
        return this.returnExpression;
    }
}

class CatchClause extends NodeBase {
    createScope(parentScope) {
        this.scope = new ParameterScope(parentScope, true);
    }
    parseNode(esTreeNode) {
        const { body, param, type } = esTreeNode;
        this.type = type;
        if (param) {
            this.param = new (this.scope.context.getNodeConstructor(param.type))(this, this.scope).parseNode(param);
            this.param.declare('parameter', EMPTY_PATH, UNKNOWN_EXPRESSION);
        }
        this.body = new BlockStatement(this, this.scope.bodyScope).parseNode(body);
        return super.parseNode(esTreeNode);
    }
}
CatchClause.prototype.preventChildBlockScope = true;
CatchClause.prototype.includeNode = onlyIncludeSelf;

class ChainExpression extends NodeBase {
    // deoptimizations are not relevant as we are not caching values
    deoptimizeCache() { }
    getLiteralValueAtPath(path, recursionTracker, origin) {
        const literalValue = this.expression.getLiteralValueAtPathAsChainElement(path, recursionTracker, origin);
        return literalValue === IS_SKIPPED_CHAIN ? undefined : literalValue;
    }
    hasEffects(context) {
        return this.expression.hasEffectsAsChainElement(context) === true;
    }
    includePath(path, context) {
        this.included = true;
        this.expression.includePath(path, context);
    }
    removeAnnotations(code) {
        this.expression.removeAnnotations(code);
    }
}
ChainExpression.prototype.includeNode = onlyIncludeSelfNoDeoptimize;
ChainExpression.prototype.applyDeoptimizations = doNotDeoptimize;

class ClassBodyScope extends ChildScope {
    constructor(parent, classNode) {
        const { context } = parent;
        super(parent, context);
        this.variables.set('this', (this.thisVariable = new LocalVariable('this', null, classNode, EMPTY_PATH, context, 'other')));
        this.instanceScope = new ChildScope(this, context);
        this.instanceScope.variables.set('this', new ThisVariable(context));
    }
    findLexicalBoundary() {
        return this;
    }
}

class ClassBody extends NodeBase {
    createScope(parentScope) {
        this.scope = new ClassBodyScope(parentScope, this.parent);
    }
    include(context, includeChildrenRecursively) {
        this.included = true;
        this.scope.context.includeVariableInModule(this.scope.thisVariable, UNKNOWN_PATH, context);
        for (const definition of this.body) {
            definition.include(context, includeChildrenRecursively);
        }
    }
    parseNode(esTreeNode) {
        const body = (this.body = new Array(esTreeNode.body.length));
        let index = 0;
        for (const definition of esTreeNode.body) {
            body[index++] = new (this.scope.context.getNodeConstructor(definition.type))(this, definition.static ? this.scope : this.scope.instanceScope).parseNode(definition);
        }
        return super.parseNode(esTreeNode);
    }
}
ClassBody.prototype.includeNode = onlyIncludeSelfNoDeoptimize;
ClassBody.prototype.applyDeoptimizations = doNotDeoptimize;

class ClassExpression extends ClassNode {
    render(code, options, { renderedSurroundingElement } = parseAst_js.BLANK) {
        super.render(code, options);
        if (renderedSurroundingElement === parseAst_js.ExpressionStatement) {
            code.appendRight(this.start, '(');
            code.prependLeft(this.end, ')');
        }
    }
}

function tryCastLiteralValueToBoolean(literalValue) {
    if (typeof literalValue === 'symbol') {
        if (literalValue === UnknownFalsyValue) {
            return false;
        }
        if (literalValue === UnknownTruthyValue) {
            return true;
        }
        return UnknownValue;
    }
    return !!literalValue;
}

class MultiExpression extends ExpressionEntity {
    constructor(expressions) {
        super();
        this.expressions = expressions;
    }
    deoptimizePath(path) {
        for (const expression of this.expressions) {
            expression.deoptimizePath(path);
        }
    }
    getReturnExpressionWhenCalledAtPath(path, interaction, recursionTracker, origin) {
        return [
            new MultiExpression(this.expressions.map(expression => expression.getReturnExpressionWhenCalledAtPath(path, interaction, recursionTracker, origin)[0])),
            false
        ];
    }
    hasEffectsOnInteractionAtPath(path, interaction, context) {
        for (const expression of this.expressions) {
            if (expression.hasEffectsOnInteractionAtPath(path, interaction, context))
                return true;
        }
        return false;
    }
}

class ConditionalExpression extends NodeBase {
    constructor() {
        super(...arguments);
        this.expressionsToBeDeoptimized = [];
        this.usedBranch = null;
    }
    get isBranchResolutionAnalysed() {
        return isFlagSet(this.flags, 65536 /* Flag.isBranchResolutionAnalysed */);
    }
    set isBranchResolutionAnalysed(value) {
        this.flags = setFlag(this.flags, 65536 /* Flag.isBranchResolutionAnalysed */, value);
    }
    get hasDeoptimizedCache() {
        return isFlagSet(this.flags, 33554432 /* Flag.hasDeoptimizedCache */);
    }
    set hasDeoptimizedCache(value) {
        this.flags = setFlag(this.flags, 33554432 /* Flag.hasDeoptimizedCache */, value);
    }
    deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker) {
        this.consequent.deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker);
        this.alternate.deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker);
    }
    deoptimizeCache() {
        if (this.hasDeoptimizedCache)
            return;
        this.hasDeoptimizedCache = true;
        if (this.usedBranch !== null) {
            const unusedBranch = this.usedBranch === this.consequent ? this.alternate : this.consequent;
            this.usedBranch = null;
            unusedBranch.deoptimizePath(UNKNOWN_PATH);
            if (this.included) {
                unusedBranch.includePath(UNKNOWN_PATH, createInclusionContext());
            }
            const { expressionsToBeDeoptimized } = this;
            this.expressionsToBeDeoptimized = parseAst_js.EMPTY_ARRAY;
            for (const expression of expressionsToBeDeoptimized) {
                expression.deoptimizeCache();
            }
        }
    }
    deoptimizePath(path) {
        const usedBranch = this.getUsedBranch();
        if (usedBranch) {
            usedBranch.deoptimizePath(path);
        }
        else {
            this.consequent.deoptimizePath(path);
            this.alternate.deoptimizePath(path);
        }
    }
    getLiteralValueAtPath(path, recursionTracker, origin) {
        const usedBranch = this.getUsedBranch();
        if (!usedBranch) {
            if (this.hasDeoptimizedCache) {
                return UnknownValue;
            }
            const consequentValue = this.consequent.getLiteralValueAtPath(path, recursionTracker, origin);
            const castedConsequentValue = tryCastLiteralValueToBoolean(consequentValue);
            if (castedConsequentValue === UnknownValue)
                return UnknownValue;
            const alternateValue = this.alternate.getLiteralValueAtPath(path, recursionTracker, origin);
            const castedAlternateValue = tryCastLiteralValueToBoolean(alternateValue);
            if (castedConsequentValue !== castedAlternateValue)
                return UnknownValue;
            this.expressionsToBeDeoptimized.push(origin);
            if (consequentValue !== alternateValue)
                return castedConsequentValue ? UnknownTruthyValue : UnknownFalsyValue;
            return consequentValue;
        }
        this.expressionsToBeDeoptimized.push(origin);
        return usedBranch.getLiteralValueAtPath(path, recursionTracker, origin);
    }
    getReturnExpressionWhenCalledAtPath(path, interaction, recursionTracker, origin) {
        const usedBranch = this.getUsedBranch();
        if (!usedBranch)
            return [
                new MultiExpression([
                    this.consequent.getReturnExpressionWhenCalledAtPath(path, interaction, recursionTracker, origin)[0],
                    this.alternate.getReturnExpressionWhenCalledAtPath(path, interaction, recursionTracker, origin)[0]
                ]),
                false
            ];
        this.expressionsToBeDeoptimized.push(origin);
        return usedBranch.getReturnExpressionWhenCalledAtPath(path, interaction, recursionTracker, origin);
    }
    hasEffects(context) {
        if (this.test.hasEffects(context))
            return true;
        const usedBranch = this.getUsedBranch();
        if (!usedBranch) {
            return this.consequent.hasEffects(context) || this.alternate.hasEffects(context);
        }
        return usedBranch.hasEffects(context);
    }
    hasEffectsOnInteractionAtPath(path, interaction, context) {
        const usedBranch = this.getUsedBranch();
        if (!usedBranch) {
            return (this.consequent.hasEffectsOnInteractionAtPath(path, interaction, context) ||
                this.alternate.hasEffectsOnInteractionAtPath(path, interaction, context));
        }
        return usedBranch.hasEffectsOnInteractionAtPath(path, interaction, context);
    }
    include(context, includeChildrenRecursively) {
        this.included = true;
        const usedBranch = this.getUsedBranch();
        if (usedBranch === null || includeChildrenRecursively || this.test.shouldBeIncluded(context)) {
            this.test.include(context, includeChildrenRecursively);
            this.consequent.include(context, includeChildrenRecursively);
            this.alternate.include(context, includeChildrenRecursively);
        }
        else {
            usedBranch.include(context, includeChildrenRecursively);
        }
    }
    includePath(path, context) {
        this.included = true;
        const usedBranch = this.getUsedBranch();
        if (usedBranch === null || this.test.shouldBeIncluded(context)) {
            this.consequent.includePath(path, context);
            this.alternate.includePath(path, context);
        }
        else {
            usedBranch.includePath(path, context);
        }
    }
    includeCallArguments(interaction, context) {
        const usedBranch = this.getUsedBranch();
        if (usedBranch) {
            usedBranch.includeCallArguments(interaction, context);
        }
        else {
            this.consequent.includeCallArguments(interaction, context);
            this.alternate.includeCallArguments(interaction, context);
        }
    }
    removeAnnotations(code) {
        this.test.removeAnnotations(code);
    }
    render(code, options, { isCalleeOfRenderedParent, preventASI, renderedParentType, renderedSurroundingElement } = parseAst_js.BLANK) {
        if (this.test.included) {
            this.test.render(code, options, { renderedSurroundingElement });
            this.consequent.render(code, options);
            this.alternate.render(code, options);
        }
        else {
            const usedBranch = this.getUsedBranch();
            const colonPos = findFirstOccurrenceOutsideComment(code.original, ':', this.consequent.end);
            const inclusionStart = findNonWhiteSpace(code.original, (this.consequent.included
                ? findFirstOccurrenceOutsideComment(code.original, '?', this.test.end)
                : colonPos) + 1);
            if (preventASI) {
                removeLineBreaks(code, inclusionStart, usedBranch.start);
            }
            code.remove(this.start, inclusionStart);
            if (this.consequent.included) {
                code.remove(colonPos, this.end);
            }
            this.test.removeAnnotations(code);
            usedBranch.render(code, options, {
                isCalleeOfRenderedParent,
                preventASI: true,
                renderedParentType: renderedParentType || this.parent.type,
                renderedSurroundingElement: renderedSurroundingElement || this.parent.type
            });
        }
    }
    getUsedBranch() {
        if (this.isBranchResolutionAnalysed) {
            return this.usedBranch;
        }
        this.isBranchResolutionAnalysed = true;
        const testValue = tryCastLiteralValueToBoolean(this.test.getLiteralValueAtPath(EMPTY_PATH, SHARED_RECURSION_TRACKER, this));
        return typeof testValue === 'symbol'
            ? null
            : (this.usedBranch = testValue ? this.consequent : this.alternate);
    }
}
ConditionalExpression.prototype.includeNode = onlyIncludeSelfNoDeoptimize;
ConditionalExpression.prototype.applyDeoptimizations = doNotDeoptimize;

class ContinueStatement extends NodeBase {
    hasEffects(context) {
        if (this.label) {
            if (!context.ignore.labels.has(this.label.name))
                return true;
            context.includedLabels.add(this.label.name);
        }
        else {
            if (!context.ignore.continues)
                return true;
            context.hasContinue = true;
        }
        context.brokenFlow = true;
        return false;
    }
    include(context, includeChildrenRecursively) {
        this.included = true;
        if (this.label) {
            this.label.include(context, includeChildrenRecursively);
            context.includedLabels.add(this.label.name);
        }
        else {
            context.hasContinue = true;
        }
        context.brokenFlow = true;
    }
}
ContinueStatement.prototype.includeNode = onlyIncludeSelfNoDeoptimize;
ContinueStatement.prototype.applyDeoptimizations = doNotDeoptimize;

class DebuggerStatement extends NodeBase {
    hasEffects() {
        return true;
    }
}
DebuggerStatement.prototype.includeNode = onlyIncludeSelf;

class Decorator extends NodeBase {
    hasEffects(context) {
        return (this.expression.hasEffects(context) ||
            this.expression.hasEffectsOnInteractionAtPath(EMPTY_PATH, NODE_INTERACTION_UNKNOWN_CALL, context));
    }
}
Decorator.prototype.includeNode = onlyIncludeSelf;

function hasLoopBodyEffects(context, body) {
    const { brokenFlow, hasBreak, hasContinue, ignore } = context;
    const { breaks, continues } = ignore;
    ignore.breaks = true;
    ignore.continues = true;
    context.hasBreak = false;
    context.hasContinue = false;
    if (body.hasEffects(context))
        return true;
    ignore.breaks = breaks;
    ignore.continues = continues;
    context.hasBreak = hasBreak;
    context.hasContinue = hasContinue;
    context.brokenFlow = brokenFlow;
    return false;
}
function includeLoopBody(context, body, includeChildrenRecursively) {
    const { brokenFlow, hasBreak, hasContinue } = context;
    context.hasBreak = false;
    context.hasContinue = false;
    body.include(context, includeChildrenRecursively, { asSingleStatement: true });
    context.hasBreak = hasBreak;
    context.hasContinue = hasContinue;
    context.brokenFlow = brokenFlow;
}

class DoWhileStatement extends NodeBase {
    hasEffects(context) {
        if (this.test.hasEffects(context))
            return true;
        return hasLoopBodyEffects(context, this.body);
    }
    include(context, includeChildrenRecursively) {
        this.included = true;
        this.test.include(context, includeChildrenRecursively);
        includeLoopBody(context, this.body, includeChildrenRecursively);
    }
}
DoWhileStatement.prototype.includeNode = onlyIncludeSelfNoDeoptimize;
DoWhileStatement.prototype.applyDeoptimizations = doNotDeoptimize;

class EmptyStatement extends NodeBase {
    hasEffects() {
        return false;
    }
}
EmptyStatement.prototype.includeNode = onlyIncludeSelf;

class ExportAllDeclaration extends NodeBase {
    hasEffects() {
        return false;
    }
    initialise() {
        super.initialise();
        this.scope.context.addExport(this);
    }
    render(code, _options, nodeRenderOptions) {
        code.remove(nodeRenderOptions.start, nodeRenderOptions.end);
    }
}
ExportAllDeclaration.prototype.needsBoundaries = true;
ExportAllDeclaration.prototype.includeNode = onlyIncludeSelfNoDeoptimize;
ExportAllDeclaration.prototype.applyDeoptimizations = doNotDeoptimize;

class ExportNamedDeclaration extends NodeBase {
    bind() {
        // Do not bind specifiers
        this.declaration?.bind();
    }
    hasEffects(context) {
        return !!this.declaration?.hasEffects(context);
    }
    initialise() {
        super.initialise();
        this.scope.context.addExport(this);
    }
    removeAnnotations(code) {
        this.declaration?.removeAnnotations(code);
    }
    render(code, options, nodeRenderOptions) {
        const { start, end } = nodeRenderOptions;
        if (this.declaration === null) {
            code.remove(start, end);
        }
        else {
            let endBoundary = this.declaration.start;
            // the start of the decorator may be before the start of the class declaration
            if (this.declaration instanceof ClassDeclaration) {
                const decorators = this.declaration.decorators;
                for (const decorator of decorators) {
                    endBoundary = Math.min(endBoundary, decorator.start);
                }
                if (endBoundary <= this.start) {
                    endBoundary = this.declaration.start;
                }
            }
            code.remove(this.start, endBoundary);
            this.declaration.render(code, options, { end, start });
        }
    }
}
ExportNamedDeclaration.prototype.needsBoundaries = true;
ExportNamedDeclaration.prototype.includeNode = onlyIncludeSelfNoDeoptimize;
ExportNamedDeclaration.prototype.applyDeoptimizations = doNotDeoptimize;

class ExportSpecifier extends NodeBase {
}
ExportSpecifier.prototype.includeNode = onlyIncludeSelfNoDeoptimize;
ExportSpecifier.prototype.applyDeoptimizations = doNotDeoptimize;

class ForInStatement extends NodeBase {
    createScope(parentScope) {
        this.scope = new BlockScope(parentScope);
    }
    hasEffects(context) {
        const { body, deoptimized, left, right } = this;
        if (!deoptimized)
            this.applyDeoptimizations();
        if (left.hasEffectsAsAssignmentTarget(context, false) || right.hasEffects(context))
            return true;
        return hasLoopBodyEffects(context, body);
    }
    include(context, includeChildrenRecursively) {
        const { body, deoptimized, left, right } = this;
        if (!deoptimized)
            this.applyDeoptimizations();
        if (!this.included)
            this.includeNode(context);
        left.includeAsAssignmentTarget(context, includeChildrenRecursively || true, false);
        right.include(context, includeChildrenRecursively);
        includeLoopBody(context, body, includeChildrenRecursively);
    }
    includeNode(context) {
        this.included = true;
        if (!this.deoptimized)
            this.applyDeoptimizations();
        this.right.includePath(UNKNOWN_PATH, context);
    }
    initialise() {
        super.initialise();
        this.left.setAssignedValue(UNKNOWN_EXPRESSION);
    }
    render(code, options) {
        this.left.render(code, options, NO_SEMICOLON);
        this.right.render(code, options, NO_SEMICOLON);
        // handle no space between "in" and the right side
        if (code.original.charCodeAt(this.right.start - 1) === 110 /* n */) {
            code.prependLeft(this.right.start, ' ');
        }
        this.body.render(code, options);
    }
    applyDeoptimizations() {
        this.deoptimized = true;
        this.left.deoptimizePath(EMPTY_PATH);
        this.scope.context.requestTreeshakingPass();
    }
}

class ForOfStatement extends NodeBase {
    get await() {
        return isFlagSet(this.flags, 131072 /* Flag.await */);
    }
    set await(value) {
        this.flags = setFlag(this.flags, 131072 /* Flag.await */, value);
    }
    createScope(parentScope) {
        this.scope = new BlockScope(parentScope);
    }
    hasEffects() {
        if (!this.deoptimized)
            this.applyDeoptimizations();
        // Placeholder until proper Symbol.Iterator support
        return true;
    }
    include(context, includeChildrenRecursively) {
        const { body, deoptimized, left, right } = this;
        if (!deoptimized)
            this.applyDeoptimizations();
        if (!this.included)
            this.includeNode(context);
        left.includeAsAssignmentTarget(context, includeChildrenRecursively || true, false);
        right.include(context, includeChildrenRecursively);
        includeLoopBody(context, body, includeChildrenRecursively);
    }
    includeNode(context) {
        this.included = true;
        if (!this.deoptimized)
            this.applyDeoptimizations();
        this.right.includePath(UNKNOWN_PATH, context);
    }
    initialise() {
        super.initialise();
        this.left.setAssignedValue(UNKNOWN_EXPRESSION);
    }
    render(code, options) {
        this.left.render(code, options, NO_SEMICOLON);
        this.right.render(code, options, NO_SEMICOLON);
        // handle no space between "of" and the right side
        if (code.original.charCodeAt(this.right.start - 1) === 102 /* f */) {
            code.prependLeft(this.right.start, ' ');
        }
        this.body.render(code, options);
    }
    applyDeoptimizations() {
        this.deoptimized = true;
        this.left.deoptimizePath(EMPTY_PATH);
        this.right.deoptimizePath(UNKNOWN_PATH);
        this.scope.context.requestTreeshakingPass();
    }
}

class ForStatement extends NodeBase {
    createScope(parentScope) {
        this.scope = new BlockScope(parentScope);
    }
    hasEffects(context) {
        if (this.init?.hasEffects(context) ||
            this.test?.hasEffects(context) ||
            this.update?.hasEffects(context)) {
            return true;
        }
        return hasLoopBodyEffects(context, this.body);
    }
    include(context, includeChildrenRecursively) {
        this.included = true;
        this.init?.include(context, includeChildrenRecursively, {
            asSingleStatement: true
        });
        this.test?.include(context, includeChildrenRecursively);
        this.update?.include(context, includeChildrenRecursively);
        includeLoopBody(context, this.body, includeChildrenRecursively);
    }
    render(code, options) {
        this.init?.render(code, options, NO_SEMICOLON);
        this.test?.render(code, options, NO_SEMICOLON);
        this.update?.render(code, options, NO_SEMICOLON);
        this.body.render(code, options);
    }
}
ForStatement.prototype.includeNode = onlyIncludeSelfNoDeoptimize;
ForStatement.prototype.applyDeoptimizations = doNotDeoptimize;

class FunctionExpression extends FunctionNode {
    createScope(parentScope) {
        super.createScope((this.idScope = new ChildScope(parentScope, parentScope.context)));
    }
    parseNode(esTreeNode) {
        if (esTreeNode.id !== null) {
            this.id = new Identifier(this, this.idScope).parseNode(esTreeNode.id);
        }
        return super.parseNode(esTreeNode);
    }
    onlyFunctionCallUsed() {
        const isIIFE = this.parent.type === parseAst_js.CallExpression &&
            this.parent.callee === this &&
            (this.id === null || this.id.variable.getOnlyFunctionCallUsed());
        return isIIFE || super.onlyFunctionCallUsed();
    }
    render(code, options, { renderedSurroundingElement } = parseAst_js.BLANK) {
        super.render(code, options);
        if (renderedSurroundingElement === parseAst_js.ExpressionStatement) {
            code.appendRight(this.start, '(');
            code.prependLeft(this.end, ')');
        }
    }
}

class TrackingScope extends BlockScope {
    constructor() {
        super(...arguments);
        this.hoistedDeclarations = [];
    }
    addDeclaration(identifier, context, init, destructuredInitPath, kind) {
        this.hoistedDeclarations.push(identifier);
        return super.addDeclaration(identifier, context, init, destructuredInitPath, kind);
    }
}

const unset = Symbol('unset');
class IfStatement extends NodeBase {
    constructor() {
        super(...arguments);
        this.testValue = unset;
    }
    deoptimizeCache() {
        this.testValue = UnknownValue;
    }
    hasEffects(context) {
        if (this.test.hasEffects(context)) {
            return true;
        }
        const testValue = this.getTestValue();
        if (typeof testValue === 'symbol') {
            const { brokenFlow } = context;
            if (this.consequent.hasEffects(context))
                return true;
            const consequentBrokenFlow = context.brokenFlow;
            context.brokenFlow = brokenFlow;
            if (this.alternate === null)
                return false;
            if (this.alternate.hasEffects(context))
                return true;
            context.brokenFlow = context.brokenFlow && consequentBrokenFlow;
            return false;
        }
        return testValue ? this.consequent.hasEffects(context) : !!this.alternate?.hasEffects(context);
    }
    include(context, includeChildrenRecursively) {
        this.included = true;
        if (includeChildrenRecursively) {
            this.includeRecursively(includeChildrenRecursively, context);
        }
        else {
            const testValue = this.getTestValue();
            if (typeof testValue === 'symbol') {
                this.includeUnknownTest(context);
            }
            else {
                this.includeKnownTest(context, testValue);
            }
        }
    }
    parseNode(esTreeNode) {
        this.consequent = new (this.scope.context.getNodeConstructor(esTreeNode.consequent.type))(this, (this.consequentScope = new TrackingScope(this.scope))).parseNode(esTreeNode.consequent);
        if (esTreeNode.alternate) {
            this.alternate = new (this.scope.context.getNodeConstructor(esTreeNode.alternate.type))(this, (this.alternateScope = new TrackingScope(this.scope))).parseNode(esTreeNode.alternate);
        }
        return super.parseNode(esTreeNode);
    }
    render(code, options) {
        const { snippets: { getPropertyAccess } } = options;
        // Note that unknown test values are always included
        const testValue = this.getTestValue();
        const hoistedDeclarations = [];
        const includesIfElse = this.test.included;
        const noTreeshake = !this.scope.context.options.treeshake;
        if (includesIfElse) {
            this.test.render(code, options);
        }
        else {
            code.remove(this.start, this.consequent.start);
        }
        if (this.consequent.included && (noTreeshake || typeof testValue === 'symbol' || testValue)) {
            this.consequent.render(code, options);
        }
        else {
            code.overwrite(this.consequent.start, this.consequent.end, includesIfElse ? ';' : '');
            hoistedDeclarations.push(...this.consequentScope.hoistedDeclarations);
        }
        if (this.alternate) {
            if (this.alternate.included && (noTreeshake || typeof testValue === 'symbol' || !testValue)) {
                if (includesIfElse) {
                    if (code.original.charCodeAt(this.alternate.start - 1) === 101) {
                        code.prependLeft(this.alternate.start, ' ');
                    }
                }
                else {
                    code.remove(this.consequent.end, this.alternate.start);
                }
                this.alternate.render(code, options);
            }
            else {
                if (includesIfElse && this.shouldKeepAlternateBranch()) {
                    code.overwrite(this.alternate.start, this.end, ';');
                }
                else {
                    code.remove(this.consequent.end, this.end);
                }
                hoistedDeclarations.push(...this.alternateScope.hoistedDeclarations);
            }
        }
        this.renderHoistedDeclarations(hoistedDeclarations, code, getPropertyAccess);
    }
    getTestValue() {
        if (this.testValue === unset) {
            return (this.testValue = tryCastLiteralValueToBoolean(this.test.getLiteralValueAtPath(EMPTY_PATH, SHARED_RECURSION_TRACKER, this)));
        }
        return this.testValue;
    }
    includeKnownTest(context, testValue) {
        if (this.test.shouldBeIncluded(context)) {
            this.test.include(context, false);
        }
        if (testValue && this.consequent.shouldBeIncluded(context)) {
            this.consequent.include(context, false, { asSingleStatement: true });
        }
        if (!testValue && this.alternate?.shouldBeIncluded(context)) {
            this.alternate.include(context, false, { asSingleStatement: true });
        }
    }
    includeRecursively(includeChildrenRecursively, context) {
        this.test.include(context, includeChildrenRecursively);
        this.consequent.include(context, includeChildrenRecursively);
        this.alternate?.include(context, includeChildrenRecursively);
    }
    includeUnknownTest(context) {
        this.test.include(context, false);
        const { brokenFlow } = context;
        let consequentBrokenFlow = false;
        if (this.consequent.shouldBeIncluded(context)) {
            this.consequent.include(context, false, { asSingleStatement: true });
            consequentBrokenFlow = context.brokenFlow;
            context.brokenFlow = brokenFlow;
        }
        if (this.alternate?.shouldBeIncluded(context)) {
            this.alternate.include(context, false, { asSingleStatement: true });
            context.brokenFlow = context.brokenFlow && consequentBrokenFlow;
        }
    }
    renderHoistedDeclarations(hoistedDeclarations, code, getPropertyAccess) {
        const hoistedVariables = [
            ...new Set(hoistedDeclarations.map(identifier => {
                const variable = identifier.variable;
                return variable.included ? variable.getName(getPropertyAccess) : '';
            }))
        ]
            .filter(Boolean)
            .join(', ');
        if (hoistedVariables) {
            const parentType = this.parent.type;
            const needsBraces = parentType !== parseAst_js.Program && parentType !== parseAst_js.BlockStatement;
            code.prependRight(this.start, `${needsBraces ? '{ ' : ''}var ${hoistedVariables}; `);
            if (needsBraces) {
                code.appendLeft(this.end, ` }`);
            }
        }
    }
    shouldKeepAlternateBranch() {
        let currentParent = this.parent;
        do {
            if (currentParent instanceof IfStatement && currentParent.alternate) {
                return true;
            }
            if (currentParent instanceof BlockStatement) {
                return false;
            }
            currentParent = currentParent.parent;
        } while (currentParent);
        return false;
    }
}
IfStatement.prototype.includeNode = onlyIncludeSelfNoDeoptimize;
IfStatement.prototype.applyDeoptimizations = doNotDeoptimize;

class ImportAttribute extends NodeBase {
}

class ImportDeclaration extends NodeBase {
    // Do not bind specifiers or attributes
    bind() { }
    hasEffects() {
        return false;
    }
    initialise() {
        super.initialise();
        this.scope.context.addImport(this);
    }
    render(code, _options, nodeRenderOptions) {
        code.remove(nodeRenderOptions.start, nodeRenderOptions.end);
    }
}
ImportDeclaration.prototype.needsBoundaries = true;
ImportDeclaration.prototype.includeNode = onlyIncludeSelfNoDeoptimize;
ImportDeclaration.prototype.applyDeoptimizations = doNotDeoptimize;

class ImportDefaultSpecifier extends NodeBase {
}
ImportDefaultSpecifier.prototype.includeNode = onlyIncludeSelfNoDeoptimize;
ImportDefaultSpecifier.prototype.applyDeoptimizations = doNotDeoptimize;

class ObjectPromiseHandler {
    constructor(resolvedVariable) {
        this.interaction = {
            args: [null, resolvedVariable],
            type: INTERACTION_CALLED,
            withNew: false
        };
    }
    deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker) {
        deoptimizeInteraction(interaction);
        if (interaction.type === INTERACTION_CALLED &&
            path.length === 0 &&
            (isFunctionExpressionNode(interaction.args[1]) ||
                isArrowFunctionExpressionNode(interaction.args[1]))) {
            interaction.args[1].deoptimizeArgumentsOnInteractionAtPath(this.interaction, [], recursionTracker);
        }
    }
    includeCallArguments(interaction, context) {
        // This includes the function call itself
        includeInteractionWithoutThis(interaction, context);
        if (interaction.type === INTERACTION_CALLED &&
            (isFunctionExpressionNode(interaction.args[1]) ||
                isArrowFunctionExpressionNode(interaction.args[1]))) {
            interaction.args[1].includeCallArguments(this.interaction, context);
        }
    }
}
class EmptyPromiseHandler {
    deoptimizeArgumentsOnInteractionAtPath(interaction) {
        deoptimizeInteraction(interaction);
    }
    includeCallArguments(interaction, context) {
        includeInteractionWithoutThis(interaction, context);
    }
}

function getChunkInfoWithPath(chunk) {
    return { fileName: chunk.getFileName(), ...chunk.getPreRenderedChunkInfo() };
}
class ImportExpression extends NodeBase {
    constructor() {
        super(...arguments);
        this.inlineNamespace = null;
        this.resolution = null;
        this.attributes = null;
        this.mechanism = null;
        this.namespaceExportName = undefined;
        this.localResolution = null;
        this.resolutionString = null;
    }
    get shouldIncludeDynamicAttributes() {
        return isFlagSet(this.flags, 268435456 /* Flag.shouldIncludeDynamicAttributes */);
    }
    set shouldIncludeDynamicAttributes(value) {
        this.flags = setFlag(this.flags, 268435456 /* Flag.shouldIncludeDynamicAttributes */, value);
    }
    bind() {
        const { options, parent, resolution, source } = this;
        source.bind();
        options?.bind();
        // Check if we resolved to a Module without using instanceof
        if (typeof resolution !== 'object' || !resolution || !('namespace' in resolution)) {
            return;
        }
        // In these cases, we can track exactly what is included or deoptimized:
        // * import('foo'); // as statement
        // * await import('foo') // use as awaited expression in any way
        // * import('foo').then(n => {...}) // only if .then is called directly on the import()
        if (isExpressionStatementNode(parent) || isAwaitExpressionNode(parent)) {
            this.localResolution = { resolution, tracked: true };
            return;
        }
        if (!isMemberExpressionNode(parent)) {
            this.localResolution = { resolution, tracked: false };
            return;
        }
        let currentParent = parent;
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let callExpression = this;
        while (true) {
            if (currentParent.computed ||
                currentParent.object !== callExpression ||
                !isIdentifierNode(currentParent.property) ||
                !isCallExpressionNode(currentParent.parent)) {
                break;
            }
            const propertyName = currentParent.property.name;
            callExpression = currentParent.parent;
            if (propertyName === 'then') {
                const firstArgument = callExpression.arguments[0];
                if (firstArgument === undefined ||
                    isFunctionExpressionNode(firstArgument) ||
                    isArrowFunctionExpressionNode(firstArgument)) {
                    currentParent.promiseHandler = new ObjectPromiseHandler(getDynamicNamespaceVariable(resolution.namespace));
                    this.localResolution = { resolution, tracked: true };
                    return;
                }
            }
            else if (propertyName === 'catch' || propertyName === 'finally') {
                if (isMemberExpressionNode(callExpression.parent)) {
                    currentParent.promiseHandler = new EmptyPromiseHandler();
                    currentParent = callExpression.parent;
                    continue;
                }
                if (isExpressionStatementNode(callExpression.parent)) {
                    currentParent.promiseHandler = new EmptyPromiseHandler();
                    this.localResolution = { resolution, tracked: true };
                    return;
                }
            }
            break;
        }
        this.localResolution = { resolution, tracked: false };
    }
    deoptimizePath(path) {
        this.localResolution?.resolution?.namespace.deoptimizePath(path);
    }
    hasEffects() {
        return true;
    }
    include(context, includeChildrenRecursively) {
        if (!this.included)
            this.includeNode(context);
        this.source.include(context, includeChildrenRecursively);
        if (this.shouldIncludeDynamicAttributes) {
            this.options?.include(context, includeChildrenRecursively);
        }
        if (includeChildrenRecursively) {
            this.localResolution?.resolution.includeAllExports();
        }
    }
    includeNode(context) {
        this.included = true;
        const { localResolution, scope, shouldIncludeDynamicAttributes } = this;
        if (shouldIncludeDynamicAttributes) {
            this.options?.includePath(UNKNOWN_PATH, context);
        }
        scope.context.includeDynamicImport(this);
        scope.addAccessedDynamicImport(this);
        if (localResolution) {
            if (localResolution.tracked) {
                localResolution.resolution.includeModuleInExecution();
            }
            else {
                localResolution.resolution.includeAllExports();
            }
        }
    }
    includePath(path, context) {
        if (!this.included)
            this.includeNode(context);
        this.localResolution?.resolution?.namespace.includeMemberPath(path, context);
    }
    initialise() {
        super.initialise();
        this.scope.context.addDynamicImport(this);
    }
    parseNode(esTreeNode) {
        this.sourceAstNode = esTreeNode.source;
        return super.parseNode(esTreeNode);
    }
    render(code, options) {
        const { snippets: { _, getDirectReturnFunction, getObject, getPropertyAccess }, importAttributesKey } = options;
        if (this.inlineNamespace) {
            const [left, right] = getDirectReturnFunction([], {
                functionReturn: true,
                lineBreakIndent: null,
                name: null
            });
            code.overwrite(this.start, this.end, `Promise.resolve().then(${left}${this.inlineNamespace.getName(getPropertyAccess)}${right})`);
            return;
        }
        if (this.mechanism) {
            code.overwrite(this.start, findFirstOccurrenceOutsideComment(code.original, '(', this.start + 6) + 1, this.mechanism.left);
            code.overwrite(this.end - 1, this.end, this.mechanism.right);
        }
        if (this.resolutionString) {
            code.overwrite(this.source.start, this.source.end, this.resolutionString);
            if (this.namespaceExportName) {
                const [left, right] = getDirectReturnFunction(['n'], {
                    functionReturn: true,
                    lineBreakIndent: null,
                    name: null
                });
                code.prependLeft(this.end, `.then(${left}n.${this.namespaceExportName}${right})`);
            }
        }
        else {
            this.source.render(code, options);
        }
        if (this.attributes !== true) {
            if (this.options) {
                code.overwrite(this.source.end, this.end - 1, '', { contentOnly: true });
            }
            if (this.attributes) {
                code.appendLeft(this.end - 1, `,${_}${getObject([[importAttributesKey, this.attributes]], {
                    lineBreakIndent: null
                })}`);
            }
        }
    }
    setExternalResolution(exportMode, options, snippets, pluginDriver, accessedGlobalsByScope, resolutionString, namespaceExportName, attributes, ownChunk, targetChunk) {
        const { format } = options;
        this.inlineNamespace = null;
        this.resolutionString = resolutionString;
        this.namespaceExportName = namespaceExportName;
        this.attributes = attributes;
        const accessedGlobals = [...(accessedImportGlobals[format] || [])];
        let helper;
        ({ helper, mechanism: this.mechanism } = this.getDynamicImportMechanismAndHelper(exportMode, options, snippets, pluginDriver, ownChunk, targetChunk));
        if (helper) {
            accessedGlobals.push(helper);
        }
        if (accessedGlobals.length > 0) {
            this.scope.addAccessedGlobals(accessedGlobals, accessedGlobalsByScope);
        }
    }
    setInternalResolution(inlineNamespace) {
        this.inlineNamespace = inlineNamespace;
    }
    getDynamicImportMechanismAndHelper(exportMode, { compact, dynamicImportInCjs, format, generatedCode: { arrowFunctions }, interop }, { _, getDirectReturnFunction, getDirectReturnIifeLeft }, pluginDriver, ownChunk, targetChunk) {
        const { resolution, scope } = this;
        const mechanism = pluginDriver.hookFirstSync('renderDynamicImport', [
            {
                chunk: getChunkInfoWithPath(ownChunk),
                customResolution: typeof resolution === 'string' ? resolution : null,
                format,
                getTargetChunkImports() {
                    if (targetChunk === null)
                        return null;
                    const chunkInfos = [];
                    const importerPath = ownChunk.getFileName();
                    for (const dep of targetChunk.dependencies) {
                        const resolvedImportPath = `'${dep.getImportPath(importerPath)}'`;
                        if (dep instanceof ExternalChunk) {
                            chunkInfos.push({
                                fileName: dep.getFileName(),
                                resolvedImportPath,
                                type: 'external'
                            });
                        }
                        else {
                            chunkInfos.push({
                                chunk: dep.getPreRenderedChunkInfo(),
                                fileName: dep.getFileName(),
                                resolvedImportPath,
                                type: 'internal'
                            });
                        }
                    }
                    return chunkInfos;
                },
                moduleId: scope.context.module.id,
                targetChunk: targetChunk ? getChunkInfoWithPath(targetChunk) : null,
                targetModuleAttributes: resolution && typeof resolution !== 'string' ? resolution.info.attributes : {},
                targetModuleId: resolution && typeof resolution !== 'string' ? resolution.id : null
            }
        ]);
        if (mechanism) {
            return { helper: null, mechanism };
        }
        const hasDynamicTarget = !resolution || typeof resolution === 'string';
        switch (format) {
            case 'cjs': {
                if (dynamicImportInCjs &&
                    (!resolution || typeof resolution === 'string' || resolution instanceof ExternalModule)) {
                    return { helper: null, mechanism: null };
                }
                const helper = getInteropHelper(resolution, exportMode, interop);
                let left = `require(`;
                let right = `)`;
                if (helper) {
                    left = `/*#__PURE__*/${helper}(${left}`;
                    right += ')';
                }
                const [functionLeft, functionRight] = getDirectReturnFunction([], {
                    functionReturn: true,
                    lineBreakIndent: null,
                    name: null
                });
                left = `Promise.resolve().then(${functionLeft}${left}`;
                right += `${functionRight})`;
                if (!arrowFunctions && hasDynamicTarget) {
                    left = getDirectReturnIifeLeft(['t'], `${left}t${right}`, {
                        needsArrowReturnParens: false,
                        needsWrappedFunction: true
                    });
                    right = ')';
                }
                return {
                    helper,
                    mechanism: { left, right }
                };
            }
            case 'amd': {
                const resolve = compact ? 'c' : 'resolve';
                const reject = compact ? 'e' : 'reject';
                const helper = getInteropHelper(resolution, exportMode, interop);
                const [resolveLeft, resolveRight] = getDirectReturnFunction(['m'], {
                    functionReturn: false,
                    lineBreakIndent: null,
                    name: null
                });
                const resolveNamespace = helper
                    ? `${resolveLeft}${resolve}(/*#__PURE__*/${helper}(m))${resolveRight}`
                    : resolve;
                const [handlerLeft, handlerRight] = getDirectReturnFunction([resolve, reject], {
                    functionReturn: false,
                    lineBreakIndent: null,
                    name: null
                });
                let left = `new Promise(${handlerLeft}require([`;
                let right = `],${_}${resolveNamespace},${_}${reject})${handlerRight})`;
                if (!arrowFunctions && hasDynamicTarget) {
                    left = getDirectReturnIifeLeft(['t'], `${left}t${right}`, {
                        needsArrowReturnParens: false,
                        needsWrappedFunction: true
                    });
                    right = ')';
                }
                return {
                    helper,
                    mechanism: { left, right }
                };
            }
            case 'system': {
                return {
                    helper: null,
                    mechanism: {
                        left: 'module.import(',
                        right: ')'
                    }
                };
            }
        }
        return { helper: null, mechanism: null };
    }
}
ImportExpression.prototype.applyDeoptimizations = doNotDeoptimize;
function getInteropHelper(resolution, exportMode, interop) {
    return exportMode === 'external'
        ? namespaceInteropHelpersByInteropType[interop(resolution instanceof ExternalModule ? resolution.id : null)]
        : exportMode === 'default'
            ? INTEROP_NAMESPACE_DEFAULT_ONLY_VARIABLE
            : null;
}
const accessedImportGlobals = {
    amd: ['require'],
    cjs: ['require'],
    system: ['module']
};

class ImportNamespaceSpecifier extends NodeBase {
}
ImportNamespaceSpecifier.prototype.includeNode = onlyIncludeSelfNoDeoptimize;
ImportNamespaceSpecifier.prototype.applyDeoptimizations = doNotDeoptimize;

class ImportSpecifier extends NodeBase {
}
ImportSpecifier.prototype.includeNode = onlyIncludeSelfNoDeoptimize;
ImportSpecifier.prototype.applyDeoptimizations = doNotDeoptimize;

class JSXIdentifier extends IdentifierBase {
    constructor() {
        super(...arguments);
        this.isNativeElement = false;
    }
    bind() {
        const type = this.getType();
        if (type === 0 /* IdentifierType.Reference */) {
            this.variable = this.scope.findVariable(this.name);
            this.variable.addReference(this);
        }
        else if (type === 1 /* IdentifierType.NativeElementName */) {
            this.isNativeElement = true;
        }
    }
    include(context) {
        if (!this.included)
            this.includeNode(context);
    }
    includeNode(context) {
        this.included = true;
        if (!this.deoptimized)
            this.applyDeoptimizations();
        if (this.variable !== null) {
            this.scope.context.includeVariableInModule(this.variable, EMPTY_PATH, context);
        }
    }
    includePath(path, context) {
        if (!this.included) {
            this.included = true;
            if (this.variable !== null) {
                this.scope.context.includeVariableInModule(this.variable, path, context);
            }
        }
        else if (path.length > 0) {
            this.variable?.includePath(path, context);
        }
    }
    render(code, { snippets: { getPropertyAccess }, useOriginalName }) {
        if (this.variable) {
            const name = this.variable.getName(getPropertyAccess, useOriginalName);
            if (name !== this.name) {
                code.overwrite(this.start, this.end, name, {
                    contentOnly: true,
                    storeName: true
                });
            }
        }
        else if (this.isNativeElement &&
            this.scope.context.options.jsx.mode !== 'preserve') {
            code.update(this.start, this.end, JSON.stringify(this.name));
        }
    }
    getType() {
        switch (this.parent.type) {
            case 'JSXOpeningElement':
            case 'JSXClosingElement': {
                return this.name.startsWith(this.name.charAt(0).toUpperCase())
                    ? 0 /* IdentifierType.Reference */
                    : 1 /* IdentifierType.NativeElementName */;
            }
            case 'JSXMemberExpression': {
                return this.parent.object === this
                    ? 0 /* IdentifierType.Reference */
                    : 2 /* IdentifierType.Other */;
            }
            case 'JSXAttribute':
            case 'JSXNamespacedName': {
                return 2 /* IdentifierType.Other */;
            }
            default: {
                /* istanbul ignore next */
                throw new Error(`Unexpected parent node type for JSXIdentifier: ${this.parent.type}`);
            }
        }
    }
}

class JSXAttribute extends NodeBase {
    render(code, options, { jsxMode } = parseAst_js.BLANK) {
        super.render(code, options);
        if (['classic', 'automatic'].includes(jsxMode)) {
            const { name, value } = this;
            const key = name instanceof JSXIdentifier ? name.name : `${name.namespace.name}:${name.name.name}`;
            if (!(jsxMode === 'automatic' && key === 'key')) {
                const safeKey = stringifyObjectKeyIfNeeded(key);
                if (key !== safeKey) {
                    code.overwrite(name.start, name.end, safeKey, { contentOnly: true });
                }
                if (value) {
                    code.overwrite(name.end, value.start, ': ', { contentOnly: true });
                    // foo="aa \n aa"
                    if (value instanceof Literal &&
                        typeof value.value === 'string' &&
                        value.value.includes('\n')) {
                        code.overwrite(value.start, value.end, JSON.stringify(value.value), {
                            contentOnly: true
                        });
                    }
                }
                else {
                    code.appendLeft(name.end, ': true');
                }
            }
        }
    }
}
JSXAttribute.prototype.includeNode = onlyIncludeSelf;

class JSXClosingBase extends NodeBase {
    render(code, options) {
        const { mode } = this.scope.context.options.jsx;
        if (mode !== 'preserve') {
            code.overwrite(this.start, this.end, ')', { contentOnly: true });
        }
        else {
            super.render(code, options);
        }
    }
}
JSXClosingBase.prototype.includeNode = onlyIncludeSelf;

class JSXClosingElement extends JSXClosingBase {
}

class JSXClosingFragment extends JSXClosingBase {
}

class JSXSpreadAttribute extends NodeBase {
    render(code, options) {
        this.argument.render(code, options);
        const { mode } = this.scope.context.options.jsx;
        if (mode !== 'preserve') {
            code.overwrite(this.start, this.argument.start, '', { contentOnly: true });
            code.overwrite(this.argument.end, this.end, '', { contentOnly: true });
        }
    }
}

class JSXEmptyExpression extends NodeBase {
}
JSXEmptyExpression.prototype.includeNode = onlyIncludeSelf;

class JSXExpressionContainer extends NodeBase {
    includeNode(context) {
        this.included = true;
        if (!this.deoptimized)
            this.applyDeoptimizations();
        this.expression.includePath(UNKNOWN_PATH, context);
    }
    render(code, options) {
        const { mode } = this.scope.context.options.jsx;
        if (mode !== 'preserve') {
            code.remove(this.start, this.expression.start);
            code.remove(this.expression.end, this.end);
        }
        this.expression.render(code, options);
    }
}

const RE_WHITESPACE_TRIM = /^[ \t]*\r?\n[ \t\r\n]*|[ \t]*\r?\n[ \t\r\n]*$/g;
const RE_WHITESPACE_MERGE = /[ \t]*\r?\n[ \t\r\n]*/g;
class JSXText extends NodeBase {
    shouldRender() {
        return !!this.getRenderedText();
    }
    render(code) {
        const { mode } = this.scope.context.options.jsx;
        if (mode !== 'preserve') {
            code.overwrite(this.start, this.end, JSON.stringify(this.getRenderedText()), {
                contentOnly: true
            });
        }
    }
    getRenderedText() {
        if (this.renderedText === undefined)
            this.renderedText = this.value
                .replace(RE_WHITESPACE_TRIM, '')
                .replace(RE_WHITESPACE_MERGE, ' ');
        return this.renderedText;
    }
}
JSXText.prototype.includeNode = onlyIncludeSelf;

function getRenderedJsxChildren(children) {
    let renderedChildren = 0;
    for (const child of children) {
        if (!(child instanceof JSXExpressionContainer && child.expression instanceof JSXEmptyExpression) &&
            (!(child instanceof JSXText) || child.shouldRender())) {
            renderedChildren++;
        }
    }
    return renderedChildren;
}

function getAndIncludeFactoryVariable(factory, preserve, importSource, node, context) {
    const [baseName, nestedName] = factory.split('.');
    let factoryVariable;
    if (importSource) {
        factoryVariable = node.scope.context.getImportedJsxFactoryVariable(nestedName ? 'default' : baseName, node.start, importSource);
        if (preserve) {
            // This pretends we are accessing an included global variable of the same name
            const globalVariable = node.scope.findGlobal(baseName);
            globalVariable.includePath(UNKNOWN_PATH, context);
            // This excludes this variable from renaming
            factoryVariable.globalName = baseName;
        }
    }
    else {
        factoryVariable = node.scope.findGlobal(baseName);
    }
    node.scope.context.includeVariableInModule(factoryVariable, UNKNOWN_PATH, context);
    if (factoryVariable instanceof LocalVariable) {
        factoryVariable.consolidateInitializers();
        factoryVariable.addUsedPlace(node);
        node.scope.context.requestTreeshakingPass();
    }
    return factoryVariable;
}

class JSXElementBase extends NodeBase {
    constructor() {
        super(...arguments);
        this.factoryVariable = null;
        this.factory = null;
    }
    initialise() {
        super.initialise();
        const { importSource } = (this.jsxMode = this.getRenderingMode());
        if (importSource) {
            this.scope.context.addImportSource(importSource);
        }
    }
    include(context, includeChildrenRecursively) {
        if (!this.included)
            this.includeNode(context);
        for (const child of this.children) {
            child.include(context, includeChildrenRecursively);
        }
    }
    includeNode(context) {
        this.included = true;
        const { factory, importSource, mode } = this.jsxMode;
        if (factory) {
            this.factory = factory;
            this.factoryVariable = getAndIncludeFactoryVariable(factory, mode === 'preserve', importSource, this, context);
        }
    }
    getRenderingMode() {
        const jsx = this.scope.context.options.jsx;
        const { mode, factory, importSource } = jsx;
        if (mode === 'automatic') {
            return {
                factory: getRenderedJsxChildren(this.children) > 1 ? 'jsxs' : 'jsx',
                importSource: jsx.jsxImportSource,
                mode
            };
        }
        return { factory, importSource, mode };
    }
    renderChildren(code, options, openingEnd) {
        const { children } = this;
        let hasMultipleChildren = false;
        let childrenEnd = openingEnd;
        let firstChild = null;
        for (const child of children) {
            if ((child instanceof JSXExpressionContainer &&
                child.expression instanceof JSXEmptyExpression) ||
                (child instanceof JSXText && !child.shouldRender())) {
                code.remove(childrenEnd, child.end);
            }
            else {
                code.appendLeft(childrenEnd, ', ');
                child.render(code, options);
                if (firstChild) {
                    hasMultipleChildren = true;
                }
                else {
                    firstChild = child;
                }
            }
            childrenEnd = child.end;
        }
        return { childrenEnd, firstChild, hasMultipleChildren };
    }
}
JSXElementBase.prototype.applyDeoptimizations = doNotDeoptimize;

class JSXElement extends JSXElementBase {
    include(context, includeChildrenRecursively) {
        super.include(context, includeChildrenRecursively);
        this.openingElement.include(context, includeChildrenRecursively);
        this.closingElement?.include(context, includeChildrenRecursively);
    }
    render(code, options) {
        switch (this.jsxMode.mode) {
            case 'classic': {
                this.renderClassicMode(code, options);
                break;
            }
            case 'automatic': {
                this.renderAutomaticMode(code, options);
                break;
            }
            default: {
                super.render(code, options);
            }
        }
    }
    getRenderingMode() {
        const jsx = this.scope.context.options.jsx;
        const { mode, factory, importSource } = jsx;
        if (mode === 'automatic') {
            // In the case there is a key after a spread attribute, we fall back to
            // classic mode, see https://github.com/facebook/react/issues/20031#issuecomment-710346866
            // for reasoning.
            let hasSpread = false;
            for (const attribute of this.openingElement.attributes) {
                if (attribute instanceof JSXSpreadAttribute) {
                    hasSpread = true;
                }
                else if (hasSpread && attribute.name.name === 'key') {
                    return { factory, importSource, mode: 'classic' };
                }
            }
        }
        return super.getRenderingMode();
    }
    renderClassicMode(code, options) {
        const { snippets: { getPropertyAccess }, useOriginalName } = options;
        const { closingElement, end, factory, factoryVariable, openingElement: { end: openingEnd, selfClosing } } = this;
        const [, ...nestedName] = factory.split('.');
        const { firstAttribute, hasAttributes, hasSpread, inObject, previousEnd } = this.renderAttributes(code, options, [factoryVariable.getName(getPropertyAccess, useOriginalName), ...nestedName].join('.'), false);
        this.wrapAttributes(code, inObject, hasAttributes, hasSpread, firstAttribute, 'null', previousEnd);
        this.renderChildren(code, options, openingEnd);
        if (selfClosing) {
            code.appendLeft(end, ')');
        }
        else {
            closingElement.render(code, options);
        }
    }
    renderAutomaticMode(code, options) {
        const { snippets: { getPropertyAccess }, useOriginalName } = options;
        const { closingElement, end, factoryVariable, openingElement: { end: openingEnd, selfClosing } } = this;
        let { firstAttribute, hasAttributes, hasSpread, inObject, keyAttribute, previousEnd } = this.renderAttributes(code, options, factoryVariable.getName(getPropertyAccess, useOriginalName), true);
        const { firstChild, hasMultipleChildren, childrenEnd } = this.renderChildren(code, options, openingEnd);
        if (firstChild) {
            code.prependRight(firstChild.start, `children: ${hasMultipleChildren ? '[' : ''}`);
            if (!inObject) {
                code.prependRight(firstChild.start, '{ ');
                inObject = true;
            }
            previousEnd = closingElement.start;
            if (hasMultipleChildren) {
                code.appendLeft(previousEnd, ']');
            }
        }
        // This ensures that attributesEnd never corresponds to this.end. This is
        // important because we must never use code.move with this.end as target.
        // Otherwise, this would interfere with parent elements that try to append
        // code to this.end, which would appear BEFORE the moved code.
        const attributesEnd = firstChild ? childrenEnd : previousEnd;
        this.wrapAttributes(code, inObject, hasAttributes || !!firstChild, hasSpread, firstAttribute || firstChild, '{}', attributesEnd);
        if (keyAttribute) {
            const { value } = keyAttribute;
            // This will appear to the left of the moved code...
            code.appendLeft(attributesEnd, ', ');
            if (value) {
                code.move(value.start, value.end, attributesEnd);
            }
            else {
                code.appendLeft(attributesEnd, 'true');
            }
        }
        if (selfClosing) {
            // Moving the key attribute will also move the parenthesis to the right position
            code.appendLeft(keyAttribute?.value?.end || end, ')');
        }
        else {
            closingElement.render(code, options);
        }
    }
    renderAttributes(code, options, factoryName, extractKeyAttribute) {
        const { jsxMode: { mode }, openingElement } = this;
        const { attributes, end: openingEnd, start: openingStart, name: { start: nameStart, end: nameEnd } } = openingElement;
        code.update(openingStart, nameStart, `/*#__PURE__*/${factoryName}(`);
        openingElement.render(code, options, { jsxMode: mode });
        let keyAttribute = null;
        let hasSpread = false;
        let inObject = false;
        let previousEnd = nameEnd;
        let hasAttributes = false;
        let firstAttribute = null;
        for (const attribute of attributes) {
            if (attribute instanceof JSXAttribute) {
                if (extractKeyAttribute && attribute.name.name === 'key') {
                    keyAttribute = attribute;
                    code.remove(previousEnd, attribute.value?.start || attribute.end);
                    continue;
                }
                code.appendLeft(previousEnd, ',');
                if (!inObject) {
                    code.prependRight(attribute.start, '{ ');
                    inObject = true;
                }
                hasAttributes = true;
            }
            else {
                if (inObject) {
                    if (hasAttributes) {
                        code.appendLeft(previousEnd, ' ');
                    }
                    code.appendLeft(previousEnd, '},');
                    inObject = false;
                }
                else {
                    code.appendLeft(previousEnd, ',');
                }
                hasSpread = true;
            }
            previousEnd = attribute.end;
            firstAttribute ??= attribute;
        }
        code.remove(attributes.at(-1)?.end || previousEnd, openingEnd);
        return { firstAttribute, hasAttributes, hasSpread, inObject, keyAttribute, previousEnd };
    }
    wrapAttributes(code, inObject, hasAttributes, hasSpread, firstAttribute, missingAttributesFallback, attributesEnd) {
        if (inObject) {
            code.appendLeft(attributesEnd, ' }');
        }
        if (hasSpread) {
            if (hasAttributes) {
                const { start } = firstAttribute;
                if (firstAttribute instanceof JSXSpreadAttribute) {
                    code.prependRight(start, '{}, ');
                }
                code.prependRight(start, 'Object.assign(');
                code.appendLeft(attributesEnd, ')');
            }
        }
        else if (!hasAttributes) {
            code.appendLeft(attributesEnd, `, ${missingAttributesFallback}`);
        }
    }
}

class JSXFragment extends JSXElementBase {
    include(context, includeChildrenRecursively) {
        super.include(context, includeChildrenRecursively);
        this.openingFragment.include(context, includeChildrenRecursively);
        this.closingFragment.include(context, includeChildrenRecursively);
    }
    render(code, options) {
        switch (this.jsxMode.mode) {
            case 'classic': {
                this.renderClassicMode(code, options);
                break;
            }
            case 'automatic': {
                this.renderAutomaticMode(code, options);
                break;
            }
            default: {
                super.render(code, options);
            }
        }
    }
    renderClassicMode(code, options) {
        const { snippets: { getPropertyAccess }, useOriginalName } = options;
        const { closingFragment, factory, factoryVariable, openingFragment, start } = this;
        const [, ...nestedName] = factory.split('.');
        openingFragment.render(code, options);
        code.prependRight(start, `/*#__PURE__*/${[
            factoryVariable.getName(getPropertyAccess, useOriginalName),
            ...nestedName
        ].join('.')}(`);
        code.appendLeft(openingFragment.end, ', null');
        this.renderChildren(code, options, openingFragment.end);
        closingFragment.render(code, options);
    }
    renderAutomaticMode(code, options) {
        const { snippets: { getPropertyAccess }, useOriginalName } = options;
        const { closingFragment, factoryVariable, openingFragment, start } = this;
        openingFragment.render(code, options);
        code.prependRight(start, `/*#__PURE__*/${factoryVariable.getName(getPropertyAccess, useOriginalName)}(`);
        const { firstChild, hasMultipleChildren, childrenEnd } = this.renderChildren(code, options, openingFragment.end);
        if (firstChild) {
            code.prependRight(firstChild.start, `{ children: ${hasMultipleChildren ? '[' : ''}`);
            if (hasMultipleChildren) {
                code.appendLeft(closingFragment.start, ']');
            }
            code.appendLeft(childrenEnd, ' }');
        }
        else {
            code.appendLeft(openingFragment.end, ', {}');
        }
        closingFragment.render(code, options);
    }
}

class JSXMemberExpression extends NodeBase {
    includeNode(context) {
        this.included = true;
        if (!this.deoptimized)
            this.applyDeoptimizations();
        this.object.includePath([this.property.name], context);
    }
    includePath(path, context) {
        if (!this.included)
            this.includeNode(context);
        this.object.includePath([this.property.name, ...path], context);
    }
}

class JSXNamespacedName extends NodeBase {
}
JSXNamespacedName.prototype.includeNode = onlyIncludeSelf;

class JSXOpeningElement extends NodeBase {
    render(code, options, { jsxMode = this.scope.context.options.jsx.mode } = {}) {
        this.name.render(code, options);
        for (const attribute of this.attributes) {
            attribute.render(code, options, { jsxMode });
        }
    }
}
JSXOpeningElement.prototype.includeNode = onlyIncludeSelf;

class JSXOpeningFragment extends NodeBase {
    constructor() {
        super(...arguments);
        this.fragment = null;
        this.fragmentVariable = null;
    }
    includeNode(context) {
        this.included = true;
        if (!this.deoptimized)
            this.applyDeoptimizations();
        const jsx = this.scope.context.options.jsx;
        if (jsx.mode === 'automatic') {
            this.fragment = 'Fragment';
            this.fragmentVariable = getAndIncludeFactoryVariable('Fragment', false, jsx.jsxImportSource, this, context);
        }
        else {
            const { fragment, importSource, mode } = jsx;
            if (fragment != null) {
                this.fragment = fragment;
                this.fragmentVariable = getAndIncludeFactoryVariable(fragment, mode === 'preserve', importSource, this, context);
            }
        }
    }
    render(code, options) {
        const { mode } = this.scope.context.options.jsx;
        if (mode !== 'preserve') {
            const { snippets: { getPropertyAccess }, useOriginalName } = options;
            const [, ...nestedFragment] = this.fragment.split('.');
            const fragment = [
                this.fragmentVariable.getName(getPropertyAccess, useOriginalName),
                ...nestedFragment
            ].join('.');
            code.update(this.start, this.end, fragment);
        }
    }
}

class JSXSpreadChild extends NodeBase {
    render(code, options) {
        super.render(code, options);
        const { mode } = this.scope.context.options.jsx;
        if (mode !== 'preserve') {
            code.overwrite(this.start, this.expression.start, '...', { contentOnly: true });
            code.overwrite(this.expression.end, this.end, '', { contentOnly: true });
        }
    }
}

class LabeledStatement extends NodeBase {
    hasEffects(context) {
        const { brokenFlow, includedLabels } = context;
        context.ignore.labels.add(this.label.name);
        context.includedLabels = new Set();
        let bodyHasEffects = false;
        if (this.body.hasEffects(context)) {
            bodyHasEffects = true;
        }
        else {
            context.ignore.labels.delete(this.label.name);
            if (context.includedLabels.has(this.label.name)) {
                context.includedLabels.delete(this.label.name);
                context.brokenFlow = brokenFlow;
            }
        }
        context.includedLabels = new Set([...includedLabels, ...context.includedLabels]);
        return bodyHasEffects;
    }
    include(context, includeChildrenRecursively) {
        if (!this.included)
            this.includeNode(context);
        const { brokenFlow, includedLabels } = context;
        context.includedLabels = new Set();
        this.body.include(context, includeChildrenRecursively);
        if (includeChildrenRecursively || context.includedLabels.has(this.label.name)) {
            this.label.include(context, includeChildrenRecursively);
            context.includedLabels.delete(this.label.name);
            context.brokenFlow = brokenFlow;
        }
        context.includedLabels = new Set([...includedLabels, ...context.includedLabels]);
    }
    includeNode(context) {
        this.included = true;
        this.body.includePath(UNKNOWN_PATH, context);
    }
    render(code, options) {
        if (this.label.included) {
            this.label.render(code, options);
        }
        else {
            code.remove(this.start, findNonWhiteSpace(code.original, findFirstOccurrenceOutsideComment(code.original, ':', this.label.end) + 1));
        }
        this.body.render(code, options);
    }
}
LabeledStatement.prototype.applyDeoptimizations = doNotDeoptimize;

class LogicalExpression extends NodeBase {
    constructor() {
        super(...arguments);
        // We collect deoptimization information if usedBranch !== null
        this.expressionsToBeDeoptimized = [];
        this.usedBranch = null;
    }
    //private isBranchResolutionAnalysed = false;
    get isBranchResolutionAnalysed() {
        return isFlagSet(this.flags, 65536 /* Flag.isBranchResolutionAnalysed */);
    }
    set isBranchResolutionAnalysed(value) {
        this.flags = setFlag(this.flags, 65536 /* Flag.isBranchResolutionAnalysed */, value);
    }
    get hasDeoptimizedCache() {
        return isFlagSet(this.flags, 33554432 /* Flag.hasDeoptimizedCache */);
    }
    set hasDeoptimizedCache(value) {
        this.flags = setFlag(this.flags, 33554432 /* Flag.hasDeoptimizedCache */, value);
    }
    deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker) {
        this.left.deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker);
        this.right.deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker);
    }
    deoptimizeCache() {
        if (this.hasDeoptimizedCache)
            return;
        this.hasDeoptimizedCache = true;
        if (this.usedBranch) {
            const unusedBranch = this.usedBranch === this.left ? this.right : this.left;
            this.usedBranch = null;
            unusedBranch.deoptimizePath(UNKNOWN_PATH);
            if (this.included) {
                // As we are not tracking inclusions, we just include everything
                unusedBranch.includePath(UNKNOWN_PATH, createInclusionContext());
            }
        }
        const { scope: { context }, expressionsToBeDeoptimized } = this;
        this.expressionsToBeDeoptimized = parseAst_js.EMPTY_ARRAY;
        for (const expression of expressionsToBeDeoptimized) {
            expression.deoptimizeCache();
        }
        // Request another pass because we need to ensure "include" runs again if
        // it is rendered
        context.requestTreeshakingPass();
    }
    deoptimizePath(path) {
        const usedBranch = this.getUsedBranch();
        if (usedBranch) {
            usedBranch.deoptimizePath(path);
        }
        else {
            this.left.deoptimizePath(path);
            this.right.deoptimizePath(path);
        }
    }
    getLiteralValueAtPath(path, recursionTracker, origin) {
        if (origin === this)
            return UnknownValue;
        const usedBranch = this.getUsedBranch();
        if (usedBranch) {
            this.expressionsToBeDeoptimized.push(origin);
            return usedBranch.getLiteralValueAtPath(path, recursionTracker, origin);
        }
        else if (!this.hasDeoptimizedCache && !path.length) {
            const rightValue = this.right.getLiteralValueAtPath(path, recursionTracker, origin);
            const booleanOrUnknown = tryCastLiteralValueToBoolean(rightValue);
            if (typeof booleanOrUnknown !== 'symbol') {
                if (!booleanOrUnknown && this.operator === '&&') {
                    this.expressionsToBeDeoptimized.push(origin);
                    return UnknownFalsyValue;
                }
                if (booleanOrUnknown && this.operator === '||') {
                    this.expressionsToBeDeoptimized.push(origin);
                    return UnknownTruthyValue;
                }
            }
        }
        return UnknownValue;
    }
    getReturnExpressionWhenCalledAtPath(path, interaction, recursionTracker, origin) {
        const usedBranch = this.getUsedBranch();
        if (usedBranch) {
            this.expressionsToBeDeoptimized.push(origin);
            return usedBranch.getReturnExpressionWhenCalledAtPath(path, interaction, recursionTracker, origin);
        }
        return [
            new MultiExpression([
                this.left.getReturnExpressionWhenCalledAtPath(path, interaction, recursionTracker, origin)[0],
                this.right.getReturnExpressionWhenCalledAtPath(path, interaction, recursionTracker, origin)[0]
            ]),
            false
        ];
    }
    hasEffects(context) {
        if (this.left.hasEffects(context)) {
            return true;
        }
        if (this.getUsedBranch() !== this.left) {
            return this.right.hasEffects(context);
        }
        return false;
    }
    hasEffectsOnInteractionAtPath(path, interaction, context) {
        const usedBranch = this.getUsedBranch();
        if (usedBranch) {
            return usedBranch.hasEffectsOnInteractionAtPath(path, interaction, context);
        }
        return (this.left.hasEffectsOnInteractionAtPath(path, interaction, context) ||
            this.right.hasEffectsOnInteractionAtPath(path, interaction, context));
    }
    include(context, includeChildrenRecursively) {
        this.included = true;
        const usedBranch = this.getUsedBranch();
        if (includeChildrenRecursively ||
            !usedBranch ||
            (usedBranch === this.right && this.left.shouldBeIncluded(context))) {
            this.left.include(context, includeChildrenRecursively);
            this.right.include(context, includeChildrenRecursively);
        }
        else {
            usedBranch.include(context, includeChildrenRecursively);
        }
    }
    includePath(path, context) {
        this.included = true;
        const usedBranch = this.getUsedBranch();
        if (!usedBranch || (usedBranch === this.right && this.left.shouldBeIncluded(context))) {
            this.left.includePath(path, context);
            this.right.includePath(path, context);
        }
        else {
            usedBranch.includePath(path, context);
        }
    }
    removeAnnotations(code) {
        this.left.removeAnnotations(code);
    }
    render(code, options, { isCalleeOfRenderedParent, preventASI, renderedParentType, renderedSurroundingElement } = parseAst_js.BLANK) {
        if (!this.left.included || !this.right.included) {
            const operatorPos = findFirstOccurrenceOutsideComment(code.original, this.operator, this.left.end);
            if (this.right.included) {
                const removePos = findNonWhiteSpace(code.original, operatorPos + 2);
                code.remove(this.start, removePos);
                if (preventASI) {
                    removeLineBreaks(code, removePos, this.right.start);
                }
                this.left.removeAnnotations(code);
            }
            else {
                code.remove(findLastWhiteSpaceReverse(code.original, this.left.end, operatorPos), this.end);
            }
            this.getUsedBranch().render(code, options, {
                isCalleeOfRenderedParent,
                preventASI,
                renderedParentType: renderedParentType || this.parent.type,
                renderedSurroundingElement: renderedSurroundingElement || this.parent.type
            });
        }
        else {
            this.left.render(code, options, {
                preventASI,
                renderedSurroundingElement
            });
            this.right.render(code, options);
        }
    }
    getUsedBranch() {
        if (!this.isBranchResolutionAnalysed) {
            this.isBranchResolutionAnalysed = true;
            const leftValue = this.left.getLiteralValueAtPath(EMPTY_PATH, SHARED_RECURSION_TRACKER, this);
            const booleanOrUnknown = tryCastLiteralValueToBoolean(leftValue);
            if (typeof booleanOrUnknown === 'symbol' ||
                (this.operator === '??' && typeof leftValue === 'symbol')) {
                return null;
            }
            else {
                this.usedBranch =
                    (this.operator === '||' && booleanOrUnknown) ||
                        (this.operator === '&&' && !booleanOrUnknown) ||
                        (this.operator === '??' && leftValue != null)
                        ? this.left
                        : this.right;
            }
        }
        return this.usedBranch;
    }
}
LogicalExpression.prototype.includeNode = onlyIncludeSelfNoDeoptimize;
LogicalExpression.prototype.applyDeoptimizations = doNotDeoptimize;

class NewExpression extends NodeBase {
    hasEffects(context) {
        if (!this.deoptimized)
            this.applyDeoptimizations();
        for (const argument of this.arguments) {
            if (argument.hasEffects(context))
                return true;
        }
        if (this.annotationPure) {
            return false;
        }
        return (this.callee.hasEffects(context) ||
            this.callee.hasEffectsOnInteractionAtPath(EMPTY_PATH, this.interaction, context));
    }
    hasEffectsOnInteractionAtPath(path, { type }) {
        return path.length > 0 || type !== INTERACTION_ACCESSED;
    }
    include(context, includeChildrenRecursively) {
        if (!this.included)
            this.includeNode(context);
        if (includeChildrenRecursively) {
            super.include(context, true);
        }
        else {
            this.callee.include(context, false);
            this.callee.includeCallArguments(this.interaction, context);
        }
    }
    includeNode(context) {
        this.included = true;
        if (!this.deoptimized)
            this.applyDeoptimizations();
        this.callee.includePath(UNKNOWN_PATH, context);
    }
    initialise() {
        super.initialise();
        this.interaction = {
            args: [null, ...this.arguments],
            type: INTERACTION_CALLED,
            withNew: true
        };
        if (this.annotations &&
            this.scope.context.options.treeshake.annotations) {
            this.annotationPure = this.annotations.some(comment => comment.type === 'pure');
        }
    }
    render(code, options) {
        this.callee.render(code, options);
        renderCallArguments(code, options, this);
    }
    applyDeoptimizations() {
        this.deoptimized = true;
        this.callee.deoptimizeArgumentsOnInteractionAtPath(this.interaction, EMPTY_PATH, SHARED_RECURSION_TRACKER);
        this.scope.context.requestTreeshakingPass();
    }
}

class ObjectExpression extends NodeBase {
    constructor() {
        super(...arguments);
        this.objectEntity = null;
        this.protoProp = null;
    }
    deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker) {
        this.getObjectEntity().deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker);
    }
    deoptimizeCache() {
        this.getObjectEntity().deoptimizeAllProperties();
    }
    deoptimizePath(path) {
        this.getObjectEntity().deoptimizePath(path);
    }
    getLiteralValueAtPath(path, recursionTracker, origin) {
        return this.getObjectEntity().getLiteralValueAtPath(path, recursionTracker, origin);
    }
    getReturnExpressionWhenCalledAtPath(path, interaction, recursionTracker, origin) {
        return this.getObjectEntity().getReturnExpressionWhenCalledAtPath(path, interaction, recursionTracker, origin);
    }
    hasEffectsOnInteractionAtPath(path, interaction, context) {
        return this.getObjectEntity().hasEffectsOnInteractionAtPath(path, interaction, context);
    }
    include(context, includeChildrenRecursively) {
        if (!this.included)
            this.includeNode(context);
        this.getObjectEntity().include(context, includeChildrenRecursively);
        this.protoProp?.include(context, includeChildrenRecursively);
    }
    includeNode(context) {
        this.included = true;
        this.protoProp?.includePath(UNKNOWN_PATH, context);
    }
    includePath(path, context) {
        if (!this.included)
            this.includeNode(context);
        this.getObjectEntity().includePath(path, context);
    }
    render(code, options, { renderedSurroundingElement } = parseAst_js.BLANK) {
        if (renderedSurroundingElement === parseAst_js.ExpressionStatement ||
            renderedSurroundingElement === parseAst_js.ArrowFunctionExpression) {
            code.appendRight(this.start, '(');
            code.prependLeft(this.end, ')');
        }
        if (this.properties.length > 0) {
            const separatedNodes = getCommaSeparatedNodesWithBoundaries(this.properties, code, this.start + 1, this.end - 1);
            let lastSeparatorPos = null;
            for (const { node, separator, start, end } of separatedNodes) {
                if (!node.included) {
                    treeshakeNode(node, code, start, end);
                    continue;
                }
                lastSeparatorPos = separator;
                node.render(code, options);
            }
            if (lastSeparatorPos) {
                code.remove(lastSeparatorPos, this.end - 1);
            }
        }
    }
    getObjectEntity() {
        if (this.objectEntity !== null) {
            return this.objectEntity;
        }
        let prototype = OBJECT_PROTOTYPE;
        const properties = [];
        for (const property of this.properties) {
            if (property instanceof SpreadElement) {
                properties.push({ key: UnknownKey, kind: 'init', property });
                continue;
            }
            let key;
            if (property.computed) {
                const keyValue = property.key.getLiteralValueAtPath(EMPTY_PATH, SHARED_RECURSION_TRACKER, this);
                if (typeof keyValue === 'symbol') {
                    properties.push({
                        key: isAnyWellKnown(keyValue) ? keyValue : UnknownKey,
                        kind: property.kind,
                        property
                    });
                    continue;
                }
                else {
                    key = String(keyValue);
                }
            }
            else {
                key =
                    property.key instanceof Identifier
                        ? property.key.name
                        : String(property.key.value);
                if (key === '__proto__' && property.kind === 'init') {
                    this.protoProp = property;
                    prototype =
                        property.value instanceof Literal && property.value.value === null
                            ? null
                            : property.value;
                    continue;
                }
            }
            properties.push({ key, kind: property.kind, property });
        }
        return (this.objectEntity = new ObjectEntity(properties, prototype));
    }
}
ObjectExpression.prototype.applyDeoptimizations = doNotDeoptimize;

class PanicError extends NodeBase {
    initialise() {
        const { id } = this.scope.context.module;
        // This simulates the current nested error structure. We could also just
        // replace it with a flat error.
        const parseError = parseAst_js.getRollupError(parseAst_js.logParseError(this.message));
        const moduleParseError = parseAst_js.logModuleParseError(parseError, id);
        return parseAst_js.error(moduleParseError);
    }
}

class ParseError extends NodeBase {
    initialise() {
        const pos = this.start;
        const { id } = this.scope.context.module;
        // This simulates the current nested error structure. We could also just
        // replace it with a flat error.
        const parseError = parseAst_js.getRollupError(parseAst_js.logParseError(this.message, pos));
        const moduleParseError = parseAst_js.logModuleParseError(parseError, id);
        this.scope.context.error(moduleParseError, pos);
    }
}

class PrivateIdentifier extends NodeBase {
}
PrivateIdentifier.prototype.includeNode = onlyIncludeSelf;

class Program extends NodeBase {
    constructor() {
        super(...arguments);
        this.hasCachedEffect = null;
        this.hasLoggedEffect = false;
    }
    hasCachedEffects() {
        if (!this.included) {
            return false;
        }
        return this.hasCachedEffect === null
            ? (this.hasCachedEffect = this.hasEffects(createHasEffectsContext()))
            : this.hasCachedEffect;
    }
    hasEffects(context) {
        for (const node of this.body) {
            if (node.hasEffects(context)) {
                if (this.scope.context.options.experimentalLogSideEffects && !this.hasLoggedEffect) {
                    this.hasLoggedEffect = true;
                    const { code, log, module } = this.scope.context;
                    log(parseAst_js.LOGLEVEL_INFO, parseAst_js.logFirstSideEffect(code, module.id, parseAst_js.locate(code, node.start, { offsetLine: 1 })), node.start);
                }
                return (this.hasCachedEffect = true);
            }
        }
        return false;
    }
    include(context, includeChildrenRecursively) {
        this.included = true;
        for (const node of this.body) {
            if (includeChildrenRecursively || node.shouldBeIncluded(context)) {
                node.include(context, includeChildrenRecursively);
            }
        }
    }
    initialise() {
        super.initialise();
        if (this.invalidAnnotations)
            for (const { start, end, type } of this.invalidAnnotations) {
                this.scope.context.magicString.remove(start, end);
                if (type === 'pure' || type === 'noSideEffects') {
                    this.scope.context.log(parseAst_js.LOGLEVEL_WARN, parseAst_js.logInvalidAnnotation(this.scope.context.code.slice(start, end), this.scope.context.module.id, type), start);
                }
            }
    }
    render(code, options) {
        let start = this.start;
        if (code.original.startsWith('#!')) {
            start = Math.min(code.original.indexOf('\n') + 1, this.end);
            code.remove(0, start);
        }
        if (this.body.length > 0) {
            // Keep all consecutive lines that start with a comment
            while (code.original[start] === '/' && /[*/]/.test(code.original[start + 1])) {
                const firstLineBreak = findFirstLineBreakOutsideComment(code.original.slice(start, this.body[0].start));
                if (firstLineBreak[0] === -1) {
                    break;
                }
                start += firstLineBreak[1];
            }
            renderStatementList(this.body, code, start, this.end, options);
        }
        else {
            super.render(code, options);
        }
    }
}
Program.prototype.includeNode = onlyIncludeSelfNoDeoptimize;
Program.prototype.applyDeoptimizations = doNotDeoptimize;

class Property extends MethodBase {
    //declare method: boolean;
    get method() {
        return isFlagSet(this.flags, 262144 /* Flag.method */);
    }
    set method(value) {
        this.flags = setFlag(this.flags, 262144 /* Flag.method */, value);
    }
    //declare shorthand: boolean;
    get shorthand() {
        return isFlagSet(this.flags, 524288 /* Flag.shorthand */);
    }
    set shorthand(value) {
        this.flags = setFlag(this.flags, 524288 /* Flag.shorthand */, value);
    }
    declare(kind, destructuredInitPath, init) {
        return this.value.declare(kind, this.getPathInProperty(destructuredInitPath), init);
    }
    deoptimizeAssignment(destructuredInitPath, init) {
        this.value.deoptimizeAssignment?.(this.getPathInProperty(destructuredInitPath), init);
    }
    hasEffects(context) {
        return this.key.hasEffects(context) || this.value.hasEffects(context);
    }
    hasEffectsWhenDestructuring(context, destructuredInitPath, init) {
        return this.value.hasEffectsWhenDestructuring?.(context, this.getPathInProperty(destructuredInitPath), init);
    }
    includeDestructuredIfNecessary(context, destructuredInitPath, init) {
        const path = this.getPathInProperty(destructuredInitPath);
        let included = this.value.includeDestructuredIfNecessary(context, path, init) ||
            this.included;
        if ((included ||= this.key.hasEffects(createHasEffectsContext()))) {
            this.key.include(context, false);
            if (!this.value.included) {
                this.value.includeNode(context);
                // Unfortunately, we need to include the value again now, so that any
                // declared variables are properly included.
                this.value.includeDestructuredIfNecessary(context, path, init);
            }
        }
        if (!this.included && included) {
            this.includeNode(context);
        }
        return this.included;
    }
    include(context, includeChildrenRecursively) {
        this.included = true;
        this.key.include(context, includeChildrenRecursively);
        this.value.include(context, includeChildrenRecursively);
    }
    includePath(path, context) {
        this.included = true;
        this.value.includePath(path, context);
    }
    markDeclarationReached() {
        this.value.markDeclarationReached();
    }
    render(code, options) {
        if (!this.shorthand) {
            this.key.render(code, options);
        }
        this.value.render(code, options, { isShorthandProperty: this.shorthand });
    }
    getPathInProperty(destructuredInitPath) {
        return destructuredInitPath.at(-1) === UnknownKey
            ? destructuredInitPath
            : // For now, we only consider static paths as we do not know how to
                // deoptimize the path in the dynamic case.
                this.computed
                    ? [...destructuredInitPath, UnknownKey]
                    : this.key instanceof Identifier
                        ? [...destructuredInitPath, this.key.name]
                        : [...destructuredInitPath, String(this.key.value)];
    }
}
Property.prototype.includeNode = onlyIncludeSelfNoDeoptimize;
Property.prototype.applyDeoptimizations = doNotDeoptimize;

class PropertyDefinition extends NodeBase {
    get computed() {
        return isFlagSet(this.flags, 1024 /* Flag.computed */);
    }
    set computed(value) {
        this.flags = setFlag(this.flags, 1024 /* Flag.computed */, value);
    }
    deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker) {
        this.value?.deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker);
    }
    deoptimizePath(path) {
        this.value?.deoptimizePath(path);
    }
    getLiteralValueAtPath(path, recursionTracker, origin) {
        return this.value
            ? this.value.getLiteralValueAtPath(path, recursionTracker, origin)
            : UnknownValue;
    }
    getReturnExpressionWhenCalledAtPath(path, interaction, recursionTracker, origin) {
        return this.value
            ? this.value.getReturnExpressionWhenCalledAtPath(path, interaction, recursionTracker, origin)
            : UNKNOWN_RETURN_EXPRESSION;
    }
    hasEffects(context) {
        return (this.key.hasEffects(context) ||
            (this.static && !!this.value?.hasEffects(context)) ||
            checkEffectForNodes(this.decorators, context));
    }
    hasEffectsOnInteractionAtPath(path, interaction, context) {
        return !this.value || this.value.hasEffectsOnInteractionAtPath(path, interaction, context);
    }
    includeNode(context) {
        this.included = true;
        this.value?.includePath(UNKNOWN_PATH, context);
        for (const decorator of this.decorators) {
            decorator.includePath(UNKNOWN_PATH, context);
        }
    }
}
PropertyDefinition.prototype.applyDeoptimizations = doNotDeoptimize;

class ReturnStatement extends NodeBase {
    hasEffects(context) {
        if (!context.ignore.returnYield || this.argument?.hasEffects(context))
            return true;
        context.brokenFlow = true;
        return false;
    }
    include(context, includeChildrenRecursively) {
        if (!this.included)
            this.includeNode(context);
        this.argument?.include(context, includeChildrenRecursively);
        context.brokenFlow = true;
    }
    includeNode(context) {
        this.included = true;
        this.argument?.includePath(UNKNOWN_PATH, context);
    }
    initialise() {
        super.initialise();
        this.scope.addReturnExpression(this.argument || UNKNOWN_EXPRESSION);
    }
    render(code, options) {
        if (this.argument) {
            this.argument.render(code, options, { preventASI: true });
            if (this.argument.start === this.start + 6 /* 'return'.length */) {
                code.prependLeft(this.start + 6, ' ');
            }
        }
    }
}
ReturnStatement.prototype.applyDeoptimizations = doNotDeoptimize;

class SequenceExpression extends NodeBase {
    deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker) {
        this.expressions[this.expressions.length - 1].deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker);
    }
    deoptimizePath(path) {
        this.expressions[this.expressions.length - 1].deoptimizePath(path);
    }
    getLiteralValueAtPath(path, recursionTracker, origin) {
        return this.expressions[this.expressions.length - 1].getLiteralValueAtPath(path, recursionTracker, origin);
    }
    hasEffects(context) {
        for (const expression of this.expressions) {
            if (expression.hasEffects(context))
                return true;
        }
        return false;
    }
    hasEffectsOnInteractionAtPath(path, interaction, context) {
        return this.expressions[this.expressions.length - 1].hasEffectsOnInteractionAtPath(path, interaction, context);
    }
    include(context, includeChildrenRecursively) {
        this.included = true;
        const lastExpression = this.expressions[this.expressions.length - 1];
        for (const expression of this.expressions) {
            if (includeChildrenRecursively ||
                (expression === lastExpression && !(this.parent instanceof ExpressionStatement)) ||
                expression.shouldBeIncluded(context)) {
                expression.include(context, includeChildrenRecursively);
            }
        }
    }
    includePath(path, context) {
        this.included = true;
        this.expressions[this.expressions.length - 1].includePath(path, context);
    }
    removeAnnotations(code) {
        this.expressions[0].removeAnnotations(code);
    }
    render(code, options, { renderedParentType, isCalleeOfRenderedParent, preventASI } = parseAst_js.BLANK) {
        let includedNodes = 0;
        let lastSeparatorPos = null;
        const lastNode = this.expressions[this.expressions.length - 1];
        for (const { node, separator, start, end } of getCommaSeparatedNodesWithBoundaries(this.expressions, code, this.start, this.end)) {
            if (!node.included) {
                treeshakeNode(node, code, start, end);
                continue;
            }
            includedNodes++;
            lastSeparatorPos = separator;
            if (includedNodes === 1 && preventASI) {
                removeLineBreaks(code, start, node.start);
            }
            if (includedNodes === 1) {
                const parentType = renderedParentType || this.parent.type;
                node.render(code, options, {
                    isCalleeOfRenderedParent: isCalleeOfRenderedParent && node === lastNode,
                    renderedParentType: parentType,
                    renderedSurroundingElement: parentType
                });
            }
            else {
                node.render(code, options);
            }
        }
        if (lastSeparatorPos) {
            code.remove(lastSeparatorPos, this.end);
        }
    }
}
SequenceExpression.prototype.includeNode = onlyIncludeSelfNoDeoptimize;
SequenceExpression.prototype.applyDeoptimizations = doNotDeoptimize;

class Super extends NodeBase {
    bind() {
        this.variable = this.scope.findVariable('this');
    }
    deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker) {
        this.variable.deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker);
    }
    deoptimizePath(path) {
        this.variable.deoptimizePath(path);
    }
    include(context) {
        if (!this.included)
            this.includeNode(context);
    }
    includeNode(context) {
        this.included = true;
        if (!this.deoptimized)
            this.applyDeoptimizations();
        this.scope.context.includeVariableInModule(this.variable, EMPTY_PATH, context);
    }
}

class SwitchCase extends NodeBase {
    hasEffects(context) {
        if (this.test?.hasEffects(context))
            return true;
        for (const node of this.consequent) {
            if (context.brokenFlow)
                break;
            if (node.hasEffects(context))
                return true;
        }
        return false;
    }
    include(context, includeChildrenRecursively) {
        this.included = true;
        this.test?.include(context, includeChildrenRecursively);
        for (const node of this.consequent) {
            if (includeChildrenRecursively || node.shouldBeIncluded(context))
                node.include(context, includeChildrenRecursively);
        }
    }
    render(code, options, nodeRenderOptions) {
        if (this.test) {
            this.test.render(code, options);
            if (this.test.start === this.start + 4) {
                code.prependLeft(this.test.start, ' ');
            }
        }
        if (this.consequent.length > 0) {
            const testEnd = this.test
                ? this.test.end
                : findFirstOccurrenceOutsideComment(code.original, 'default', this.start) + 7;
            const consequentStart = findFirstOccurrenceOutsideComment(code.original, ':', testEnd) + 1;
            renderStatementList(this.consequent, code, consequentStart, nodeRenderOptions.end, options);
        }
    }
}
SwitchCase.prototype.needsBoundaries = true;
SwitchCase.prototype.includeNode = onlyIncludeSelfNoDeoptimize;
SwitchCase.prototype.applyDeoptimizations = doNotDeoptimize;

class SwitchStatement extends NodeBase {
    createScope(parentScope) {
        this.parentScope = parentScope;
        this.scope = new BlockScope(parentScope);
    }
    hasEffects(context) {
        if (this.discriminant.hasEffects(context))
            return true;
        const { brokenFlow, hasBreak, ignore } = context;
        const { breaks } = ignore;
        ignore.breaks = true;
        context.hasBreak = false;
        let onlyHasBrokenFlow = true;
        for (const switchCase of this.cases) {
            if (switchCase.hasEffects(context))
                return true;
            onlyHasBrokenFlow &&= context.brokenFlow && !context.hasBreak;
            context.hasBreak = false;
            context.brokenFlow = brokenFlow;
        }
        if (this.defaultCase !== null) {
            context.brokenFlow = onlyHasBrokenFlow;
        }
        ignore.breaks = breaks;
        context.hasBreak = hasBreak;
        return false;
    }
    include(context, includeChildrenRecursively) {
        this.included = true;
        this.discriminant.include(context, includeChildrenRecursively);
        const { brokenFlow, hasBreak } = context;
        context.hasBreak = false;
        let onlyHasBrokenFlow = true;
        let isCaseIncluded = includeChildrenRecursively ||
            (this.defaultCase !== null && this.defaultCase < this.cases.length - 1);
        for (let caseIndex = this.cases.length - 1; caseIndex >= 0; caseIndex--) {
            const switchCase = this.cases[caseIndex];
            if (switchCase.included) {
                isCaseIncluded = true;
            }
            if (!isCaseIncluded) {
                const hasEffectsContext = createHasEffectsContext();
                hasEffectsContext.ignore.breaks = true;
                isCaseIncluded = switchCase.hasEffects(hasEffectsContext);
            }
            if (isCaseIncluded) {
                switchCase.include(context, includeChildrenRecursively);
                onlyHasBrokenFlow &&= context.brokenFlow && !context.hasBreak;
                context.hasBreak = false;
                context.brokenFlow = brokenFlow;
            }
            else {
                onlyHasBrokenFlow = brokenFlow;
            }
        }
        if (isCaseIncluded && this.defaultCase !== null) {
            context.brokenFlow = onlyHasBrokenFlow;
        }
        context.hasBreak = hasBreak;
    }
    initialise() {
        super.initialise();
        for (let caseIndex = 0; caseIndex < this.cases.length; caseIndex++) {
            if (this.cases[caseIndex].test === null) {
                this.defaultCase = caseIndex;
                return;
            }
        }
        this.defaultCase = null;
    }
    parseNode(esTreeNode) {
        this.discriminant = new (this.scope.context.getNodeConstructor(esTreeNode.discriminant.type))(this, this.parentScope).parseNode(esTreeNode.discriminant);
        return super.parseNode(esTreeNode);
    }
    render(code, options) {
        this.discriminant.render(code, options);
        if (this.cases.length > 0) {
            renderStatementList(this.cases, code, this.cases[0].start, this.end - 1, options);
        }
    }
}
SwitchStatement.prototype.includeNode = onlyIncludeSelfNoDeoptimize;
SwitchStatement.prototype.applyDeoptimizations = doNotDeoptimize;

class TaggedTemplateExpression extends CallExpressionBase {
    get hasCheckedForWarnings() {
        return isFlagSet(this.flags, 134217728 /* Flag.checkedForWarnings */);
    }
    set hasCheckedForWarnings(value) {
        this.flags = setFlag(this.flags, 134217728 /* Flag.checkedForWarnings */, value);
    }
    hasEffects(context) {
        if (!this.deoptimized)
            this.applyDeoptimizations();
        for (const argument of this.quasi.expressions) {
            if (argument.hasEffects(context))
                return true;
        }
        return (this.tag.hasEffects(context) ||
            this.tag.hasEffectsOnInteractionAtPath(EMPTY_PATH, this.interaction, context));
    }
    include(context, includeChildrenRecursively) {
        if (!this.included)
            this.includeNode(context);
        if (includeChildrenRecursively) {
            super.include(context, true);
        }
        else {
            this.quasi.include(context, false);
            this.tag.include(context, false);
            this.tag.includeCallArguments(this.interaction, context);
        }
    }
    initialise() {
        super.initialise();
        this.args = [UNKNOWN_EXPRESSION, ...this.quasi.expressions];
        this.interaction = {
            args: [
                this.tag instanceof MemberExpression && !this.tag.variable ? this.tag.object : null,
                ...this.args
            ],
            type: INTERACTION_CALLED,
            withNew: false
        };
    }
    render(code, options) {
        this.tag.render(code, options, { isCalleeOfRenderedParent: true });
        this.quasi.render(code, options);
        if (!this.hasCheckedForWarnings && this.tag.type === parseAst_js.Identifier) {
            this.hasCheckedForWarnings = true;
            const name = this.tag.name;
            const variable = this.scope.findVariable(name);
            if (variable.isNamespace) {
                this.scope.context.log(parseAst_js.LOGLEVEL_WARN, parseAst_js.logCannotCallNamespace(name), this.start);
            }
        }
    }
    applyDeoptimizations() {
        this.deoptimized = true;
        this.tag.deoptimizeArgumentsOnInteractionAtPath(this.interaction, EMPTY_PATH, SHARED_RECURSION_TRACKER);
        this.scope.context.requestTreeshakingPass();
    }
    getReturnExpression(recursionTracker = SHARED_RECURSION_TRACKER) {
        if (this.returnExpression === null) {
            this.returnExpression = UNKNOWN_RETURN_EXPRESSION;
            return (this.returnExpression = this.tag.getReturnExpressionWhenCalledAtPath(EMPTY_PATH, this.interaction, recursionTracker, this));
        }
        return this.returnExpression;
    }
}
TaggedTemplateExpression.prototype.includeNode = onlyIncludeSelf;

class TemplateElement extends NodeBase {
    get tail() {
        return isFlagSet(this.flags, 1048576 /* Flag.tail */);
    }
    set tail(value) {
        this.flags = setFlag(this.flags, 1048576 /* Flag.tail */, value);
    }
    // Do not try to bind value
    bind() { }
    hasEffects() {
        return false;
    }
    parseNode(esTreeNode) {
        this.value = esTreeNode.value;
        return super.parseNode(esTreeNode);
    }
    render() { }
}
TemplateElement.prototype.includeNode = onlyIncludeSelf;

class TemplateLiteral extends NodeBase {
    deoptimizeArgumentsOnInteractionAtPath() { }
    getLiteralValueAtPath(path) {
        if (path.length > 0 || this.quasis.length !== 1) {
            return UnknownValue;
        }
        return this.quasis[0].value.cooked;
    }
    getReturnExpressionWhenCalledAtPath(path) {
        if (path.length !== 1) {
            return UNKNOWN_RETURN_EXPRESSION;
        }
        return getMemberReturnExpressionWhenCalled(literalStringMembers, path[0]);
    }
    hasEffectsOnInteractionAtPath(path, interaction, context) {
        if (interaction.type === INTERACTION_ACCESSED) {
            return path.length > 1;
        }
        if (interaction.type === INTERACTION_CALLED && path.length === 1) {
            return hasMemberEffectWhenCalled(literalStringMembers, path[0], interaction, context);
        }
        return true;
    }
    includeNode(context) {
        this.included = true;
        if (!this.deoptimized)
            this.applyDeoptimizations();
        for (const node of this.expressions) {
            node.includePath(UNKNOWN_PATH, context);
        }
    }
    render(code, options) {
        code.indentExclusionRanges.push([this.start, this.end]);
        super.render(code, options);
    }
}

class ModuleScope extends ChildScope {
    constructor(parent, context, importDescriptions) {
        super(parent, context);
        this.importDescriptions = importDescriptions;
        this.variables.set('this', new LocalVariable('this', null, UNDEFINED_EXPRESSION, EMPTY_PATH, context, 'other'));
    }
    addDeclaration(identifier, context, init, destructuredInitPath, kind) {
        if (this.importDescriptions.has(identifier.name)) {
            context.error(parseAst_js.logRedeclarationError(identifier.name), identifier.start);
        }
        return super.addDeclaration(identifier, context, init, destructuredInitPath, kind);
    }
    addExportDefaultDeclaration(exportDefaultDeclaration, context) {
        const variable = new ExportDefaultVariable(exportDefaultDeclaration, context);
        this.variables.set('default', variable);
        return variable;
    }
    addNamespaceMemberAccess() { }
    deconflict(format, exportNamesByVariable, accessedGlobalsByScope) {
        // all module level variables are already deconflicted when deconflicting the chunk
        for (const scope of this.children)
            scope.deconflict(format, exportNamesByVariable, accessedGlobalsByScope);
    }
    findLexicalBoundary() {
        return this;
    }
    findVariable(name) {
        const knownVariable = this.variables.get(name) || this.accessedOutsideVariables.get(name);
        if (knownVariable) {
            return knownVariable;
        }
        const variable = this.context.traceVariable(name) || this.parent.findVariable(name);
        if (variable instanceof GlobalVariable) {
            this.accessedOutsideVariables.set(name, variable);
        }
        return variable;
    }
}

class ThisExpression extends NodeBase {
    bind() {
        this.variable = this.scope.findVariable('this');
    }
    deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker) {
        this.variable.deoptimizeArgumentsOnInteractionAtPath(interaction, path, recursionTracker);
    }
    deoptimizePath(path) {
        this.variable.deoptimizePath(path);
    }
    hasEffectsOnInteractionAtPath(path, interaction, context) {
        if (path.length === 0) {
            return interaction.type !== INTERACTION_ACCESSED;
        }
        return this.variable.hasEffectsOnInteractionAtPath(path, interaction, context);
    }
    include(context) {
        if (!this.included)
            this.includeNode(context);
    }
    includeNode(context) {
        this.included = true;
        if (!this.deoptimized)
            this.applyDeoptimizations();
        this.scope.context.includeVariableInModule(this.variable, EMPTY_PATH, context);
    }
    includePath(path, context) {
        if (!this.included) {
            this.included = true;
            this.scope.context.includeVariableInModule(this.variable, path, context);
        }
        else if (path.length > 0) {
            this.variable.includePath(path, context);
        }
        const functionScope = findFunctionScope(this.scope, this.variable);
        if (functionScope &&
            functionScope.functionNode.parent instanceof Property &&
            functionScope.functionNode.parent.parent instanceof ObjectExpression) {
            functionScope.functionNode.parent.parent.includePath(path, context);
        }
    }
    initialise() {
        super.initialise();
        this.alias =
            this.scope.findLexicalBoundary() instanceof ModuleScope
                ? this.scope.context.moduleContext
                : null;
        if (this.alias === 'undefined') {
            this.scope.context.log(parseAst_js.LOGLEVEL_WARN, parseAst_js.logThisIsUndefined(), this.start);
        }
    }
    render(code) {
        if (this.alias !== null) {
            code.overwrite(this.start, this.end, this.alias, {
                contentOnly: false,
                storeName: true
            });
        }
    }
}
function findFunctionScope(scope, thisVariable) {
    while (!(scope instanceof FunctionScope && scope.thisVariable === thisVariable)) {
        if (!(scope instanceof ChildScope)) {
            return null;
        }
        scope = scope.parent;
    }
    return scope;
}

class ThrowStatement extends NodeBase {
    hasEffects() {
        return true;
    }
    include(context, includeChildrenRecursively) {
        if (!this.included)
            this.includeNode(context);
        this.argument.include(context, includeChildrenRecursively);
        context.brokenFlow = true;
    }
    includeNode(context) {
        if (!this.included) {
            this.included = true;
            this.argument.includePath(UNKNOWN_PATH, context);
        }
    }
    render(code, options) {
        this.argument.render(code, options, { preventASI: true });
        if (this.argument.start === this.start + 5 /* 'throw'.length */) {
            code.prependLeft(this.start + 5, ' ');
        }
    }
}

class TryStatement extends NodeBase {
    constructor() {
        super(...arguments);
        this.directlyIncluded = false;
        this.includedLabelsAfterBlock = null;
    }
    hasEffects(context) {
        return ((this.scope.context.options.treeshake.tryCatchDeoptimization
            ? this.block.body.length > 0
            : this.block.hasEffects(context)) || !!this.finalizer?.hasEffects(context));
    }
    include(context, includeChildrenRecursively) {
        const tryCatchDeoptimization = this.scope.context.options.treeshake?.tryCatchDeoptimization;
        const { brokenFlow, includedLabels } = context;
        if (!this.directlyIncluded || !tryCatchDeoptimization) {
            this.included = true;
            this.directlyIncluded = true;
            this.block.include(context, tryCatchDeoptimization ? INCLUDE_PARAMETERS : includeChildrenRecursively);
            if (includedLabels.size > 0) {
                this.includedLabelsAfterBlock = [...includedLabels];
            }
            context.brokenFlow = brokenFlow;
        }
        else if (this.includedLabelsAfterBlock) {
            for (const label of this.includedLabelsAfterBlock) {
                includedLabels.add(label);
            }
        }
        if (this.handler !== null) {
            this.handler.include(context, includeChildrenRecursively);
            context.brokenFlow = brokenFlow;
        }
        this.finalizer?.include(context, includeChildrenRecursively);
    }
}
TryStatement.prototype.includeNode = onlyIncludeSelfNoDeoptimize;
TryStatement.prototype.applyDeoptimizations = doNotDeoptimize;

const unaryOperators = {
    '!': value => !value,
    '+': value => +value,
    '-': value => -value,
    delete: () => UnknownValue,
    typeof: value => typeof value,
    void: () => undefined,
    '~': value => ~value
};
const UNASSIGNED = Symbol('Unassigned');
class UnaryExpression extends NodeBase {
    constructor() {
        super(...arguments);
        this.renderedLiteralValue = UNASSIGNED;
    }
    get prefix() {
        return isFlagSet(this.flags, 2097152 /* Flag.prefix */);
    }
    set prefix(value) {
        this.flags = setFlag(this.flags, 2097152 /* Flag.prefix */, value);
    }
    deoptimizeCache() {
        this.renderedLiteralValue = UnknownValue;
    }
    getLiteralValueAtPath(path, recursionTracker, origin) {
        if (path.length > 0)
            return UnknownValue;
        const argumentValue = this.argument.getLiteralValueAtPath(EMPTY_PATH, recursionTracker, origin);
        if (typeof argumentValue === 'symbol') {
            if (this.operator === 'void')
                return undefined;
            if (this.operator === '!') {
                if (argumentValue === UnknownFalsyValue)
                    return true;
                if (argumentValue === UnknownTruthyValue)
                    return false;
            }
            return UnknownValue;
        }
        return unaryOperators[this.operator](argumentValue);
    }
    hasEffects(context) {
        if (!this.deoptimized)
            this.applyDeoptimizations();
        if (this.operator === 'typeof' && this.argument instanceof Identifier)
            return false;
        return (this.argument.hasEffects(context) ||
            (this.operator === 'delete' &&
                this.argument.hasEffectsOnInteractionAtPath(EMPTY_PATH, NODE_INTERACTION_UNKNOWN_ASSIGNMENT, context)));
    }
    hasEffectsOnInteractionAtPath(path, { type }) {
        return type !== INTERACTION_ACCESSED || path.length > (this.operator === 'void' ? 0 : 1);
    }
    applyDeoptimizations() {
        this.deoptimized = true;
        if (this.operator === 'delete') {
            this.argument.deoptimizePath(EMPTY_PATH);
            this.scope.context.requestTreeshakingPass();
        }
    }
    getRenderedLiteralValue(includeChildrenRecursively) {
        if (this.renderedLiteralValue !== UNASSIGNED)
            return this.renderedLiteralValue;
        return (this.renderedLiteralValue = includeChildrenRecursively
            ? UnknownValue
            : getRenderedLiteralValue(this.getLiteralValueAtPath(EMPTY_PATH, SHARED_RECURSION_TRACKER, this)));
    }
    include(context, includeChildrenRecursively, _options) {
        if (!this.deoptimized)
            this.applyDeoptimizations();
        this.included = true;
        // Check if the argument is an identifier that should be preserved as a reference for readability
        const shouldPreserveArgument = this.argument instanceof Identifier && this.argument.variable?.included;
        if (typeof this.getRenderedLiteralValue(includeChildrenRecursively) === 'symbol' ||
            this.argument.shouldBeIncluded(context) ||
            shouldPreserveArgument) {
            this.argument.include(context, includeChildrenRecursively);
            this.renderedLiteralValue = UnknownValue;
        }
    }
    render(code, options) {
        if (typeof this.renderedLiteralValue === 'symbol') {
            super.render(code, options);
        }
        else {
            let value = this.renderedLiteralValue;
            if (!CHARACTERS_THAT_DO_NOT_REQUIRE_SPACE.test(code.original[this.start - 1])) {
                value = ` ${value}`;
            }
            code.overwrite(this.start, this.end, value);
        }
    }
}
const CHARACTERS_THAT_DO_NOT_REQUIRE_SPACE = /[\s([=%&*+-/<>^|,?:;]/;
UnaryExpression.prototype.includeNode = onlyIncludeSelf;

class UpdateExpression extends NodeBase {
    hasEffects(context) {
        if (!this.deoptimized)
            this.applyDeoptimizations();
        return this.argument.hasEffectsAsAssignmentTarget(context, true);
    }
    hasEffectsOnInteractionAtPath(path, { type }) {
        return path.length > 1 || type !== INTERACTION_ACCESSED;
    }
    include(context, includeChildrenRecursively) {
        if (!this.included)
            this.includeNode(context);
        this.argument.includeAsAssignmentTarget(context, includeChildrenRecursively, true);
    }
    initialise() {
        super.initialise();
        this.argument.setAssignedValue(UNKNOWN_EXPRESSION);
    }
    render(code, options) {
        const { exportNamesByVariable, format, snippets: { _ } } = options;
        this.argument.render(code, options);
        if (format === 'system') {
            const variable = this.argument.variable;
            const exportNames = exportNamesByVariable.get(variable);
            if (exportNames) {
                if (this.prefix) {
                    if (exportNames.length === 1) {
                        renderSystemExportExpression(variable, this.start, this.end, code, options);
                    }
                    else {
                        renderSystemExportSequenceAfterExpression(variable, this.start, this.end, this.parent.type !== parseAst_js.ExpressionStatement, code, options);
                    }
                }
                else {
                    const operator = this.operator[0];
                    renderSystemExportSequenceBeforeExpression(variable, this.start, this.end, this.parent.type !== parseAst_js.ExpressionStatement, code, options, `${_}${operator}${_}1`);
                }
            }
        }
    }
    applyDeoptimizations() {
        this.deoptimized = true;
        this.argument.deoptimizePath(EMPTY_PATH);
        if (this.argument instanceof Identifier) {
            const variable = this.scope.findVariable(this.argument.name);
            variable.markReassigned();
        }
        this.scope.context.requestTreeshakingPass();
    }
}
UpdateExpression.prototype.includeNode = onlyIncludeSelf;

function isReassignedExportsMember(variable, exportNamesByVariable) {
    return (variable.renderBaseName !== null && exportNamesByVariable.has(variable) && variable.isReassigned);
}

class VariableDeclaration extends NodeBase {
    deoptimizePath() {
        for (const declarator of this.declarations) {
            declarator.deoptimizePath(EMPTY_PATH);
        }
    }
    hasEffectsOnInteractionAtPath() {
        return false;
    }
    include(context, includeChildrenRecursively, { asSingleStatement } = parseAst_js.BLANK) {
        this.included = true;
        for (const declarator of this.declarations) {
            if (includeChildrenRecursively || declarator.shouldBeIncluded(context)) {
                declarator.include(context, includeChildrenRecursively);
            }
            const { id, init } = declarator;
            if (asSingleStatement) {
                id.include(context, includeChildrenRecursively);
            }
            if (init &&
                id.included &&
                !init.included &&
                (id instanceof ObjectPattern || id instanceof ArrayPattern)) {
                init.include(context, includeChildrenRecursively);
            }
        }
    }
    initialise() {
        super.initialise();
        for (const declarator of this.declarations) {
            declarator.declareDeclarator(this.kind);
        }
    }
    removeAnnotations(code) {
        this.declarations[0].removeAnnotations(code);
    }
    render(code, options, nodeRenderOptions = parseAst_js.BLANK) {
        if (this.areAllDeclarationsIncludedAndNotExported(options.exportNamesByVariable)) {
            for (const declarator of this.declarations) {
                declarator.render(code, options);
            }
            if (!nodeRenderOptions.isNoStatement &&
                code.original.charCodeAt(this.end - 1) !== 59 /*";"*/) {
                code.appendLeft(this.end, ';');
            }
        }
        else {
            this.renderReplacedDeclarations(code, options);
        }
    }
    renderDeclarationEnd(code, separatorString, lastSeparatorPos, actualContentEnd, renderedContentEnd, systemPatternExports, options) {
        if (code.original.charCodeAt(this.end - 1) === 59 /*";"*/) {
            code.remove(this.end - 1, this.end);
        }
        separatorString += ';';
        if (lastSeparatorPos === null) {
            code.appendLeft(renderedContentEnd, separatorString);
        }
        else {
            if (code.original.charCodeAt(actualContentEnd - 1) === 10 /*"\n"*/ &&
                (code.original.charCodeAt(this.end) === 10 /*"\n"*/ ||
                    code.original.charCodeAt(this.end) === 13) /*"\r"*/) {
                actualContentEnd--;
                if (code.original.charCodeAt(actualContentEnd) === 13 /*"\r"*/) {
                    actualContentEnd--;
                }
            }
            if (actualContentEnd === lastSeparatorPos + 1) {
                code.overwrite(lastSeparatorPos, renderedContentEnd, separatorString);
            }
            else {
                code.overwrite(lastSeparatorPos, lastSeparatorPos + 1, separatorString);
                code.remove(actualContentEnd, renderedContentEnd);
            }
        }
        if (systemPatternExports.length > 0) {
            code.appendLeft(renderedContentEnd, ` ${getSystemExportStatement(systemPatternExports, options)};`);
        }
    }
    renderReplacedDeclarations(code, options) {
        const separatedNodes = getCommaSeparatedNodesWithBoundaries(this.declarations, code, this.start + this.kind.length, this.end - (code.original.charCodeAt(this.end - 1) === 59 /*";"*/ ? 1 : 0));
        let actualContentEnd, renderedContentEnd;
        renderedContentEnd = findNonWhiteSpace(code.original, this.start + this.kind.length);
        let lastSeparatorPos = renderedContentEnd - 1;
        code.remove(this.start, lastSeparatorPos);
        let isInDeclaration = false;
        let hasRenderedContent = false;
        let separatorString = '', leadingString, nextSeparatorString;
        const aggregatedSystemExports = [];
        const singleSystemExport = gatherSystemExportsAndGetSingleExport(separatedNodes, options, aggregatedSystemExports);
        for (const { node, start, separator, contentEnd, end } of separatedNodes) {
            if (!node.included) {
                treeshakeNode(node, code, start, end);
                continue;
            }
            node.render(code, options);
            leadingString = '';
            nextSeparatorString = '';
            if (!node.id.included ||
                (node.id instanceof Identifier &&
                    isReassignedExportsMember(node.id.variable, options.exportNamesByVariable))) {
                if (hasRenderedContent) {
                    separatorString += ';';
                }
                isInDeclaration = false;
            }
            else {
                if (singleSystemExport && singleSystemExport === node.id.variable) {
                    const operatorPos = findFirstOccurrenceOutsideComment(code.original, '=', node.id.end);
                    renderSystemExportExpression(singleSystemExport, findNonWhiteSpace(code.original, operatorPos + 1), separator === null ? contentEnd : separator, code, options);
                }
                if (isInDeclaration) {
                    separatorString += ',';
                }
                else {
                    if (hasRenderedContent) {
                        separatorString += ';';
                    }
                    leadingString += `${this.kind} `;
                    isInDeclaration = true;
                }
            }
            if (renderedContentEnd === lastSeparatorPos + 1) {
                code.overwrite(lastSeparatorPos, renderedContentEnd, separatorString + leadingString);
            }
            else {
                code.overwrite(lastSeparatorPos, lastSeparatorPos + 1, separatorString);
                code.appendLeft(renderedContentEnd, leadingString);
            }
            actualContentEnd = contentEnd;
            renderedContentEnd = end;
            hasRenderedContent = true;
            lastSeparatorPos = separator;
            separatorString = nextSeparatorString;
        }
        this.renderDeclarationEnd(code, separatorString, lastSeparatorPos, actualContentEnd, renderedContentEnd, aggregatedSystemExports, options);
    }
    areAllDeclarationsIncludedAndNotExported(exportNamesByVariable) {
        if (this.kind === 'await using' || this.kind === 'using') {
            return true;
        }
        for (const declarator of this.declarations) {
            if (!declarator.id.included)
                return false;
            if (declarator.id.type === parseAst_js.Identifier) {
                if (exportNamesByVariable.has(declarator.id.variable))
                    return false;
            }
            else {
                const exportedVariables = [];
                declarator.id.addExportedVariables(exportedVariables, exportNamesByVariable);
                if (exportedVariables.length > 0)
                    return false;
            }
        }
        return true;
    }
}
function gatherSystemExportsAndGetSingleExport(separatedNodes, options, aggregatedSystemExports) {
    let singleSystemExport = null;
    if (options.format === 'system') {
        for (const { node } of separatedNodes) {
            if (node.id instanceof Identifier &&
                node.init &&
                aggregatedSystemExports.length === 0 &&
                options.exportNamesByVariable.get(node.id.variable)?.length === 1) {
                singleSystemExport = node.id.variable;
                aggregatedSystemExports.push(singleSystemExport);
            }
            else {
                node.id.addExportedVariables(aggregatedSystemExports, options.exportNamesByVariable);
            }
        }
        if (aggregatedSystemExports.length > 1) {
            singleSystemExport = null;
        }
        else if (singleSystemExport) {
            aggregatedSystemExports.length = 0;
        }
    }
    return singleSystemExport;
}
VariableDeclaration.prototype.includeNode = onlyIncludeSelfNoDeoptimize;
VariableDeclaration.prototype.applyDeoptimizations = doNotDeoptimize;

class VariableDeclarator extends NodeBase {
    declareDeclarator(kind) {
        this.isUsingDeclaration = kind === 'using';
        this.isAsyncUsingDeclaration = kind === 'await using';
        this.id.declare(kind, EMPTY_PATH, this.init || UNDEFINED_EXPRESSION);
    }
    deoptimizePath(path) {
        this.id.deoptimizePath(path);
    }
    hasEffects(context) {
        const initEffect = this.init?.hasEffects(context);
        this.id.markDeclarationReached();
        return (initEffect ||
            this.isUsingDeclaration ||
            this.isAsyncUsingDeclaration ||
            this.id.hasEffects(context) ||
            (this.scope.context.options.treeshake
                .propertyReadSideEffects &&
                this.id.hasEffectsWhenDestructuring(context, EMPTY_PATH, this.init || UNDEFINED_EXPRESSION)));
    }
    include(context, includeChildrenRecursively) {
        const { id, init } = this;
        if (!this.included)
            this.includeNode(context);
        init?.include(context, includeChildrenRecursively);
        id.markDeclarationReached();
        if (includeChildrenRecursively) {
            id.include(context, includeChildrenRecursively);
        }
        else {
            id.includeDestructuredIfNecessary(context, EMPTY_PATH, init || UNDEFINED_EXPRESSION);
        }
    }
    removeAnnotations(code) {
        this.init?.removeAnnotations(code);
    }
    render(code, options) {
        const { exportNamesByVariable, snippets: { _, getPropertyAccess } } = options;
        const { end, id, init, start } = this;
        const renderId = id.included || this.isUsingDeclaration || this.isAsyncUsingDeclaration;
        if (renderId) {
            id.render(code, options);
        }
        else {
            const operatorPos = findFirstOccurrenceOutsideComment(code.original, '=', id.end);
            code.remove(start, findNonWhiteSpace(code.original, operatorPos + 1));
        }
        if (init) {
            if (id instanceof Identifier && init instanceof ClassExpression && !init.id) {
                const renderedVariable = id.variable.getName(getPropertyAccess);
                if (renderedVariable !== id.name) {
                    code.appendLeft(init.start + 5, ` ${id.name}`);
                }
            }
            init.render(code, options, renderId ? parseAst_js.BLANK : { renderedSurroundingElement: parseAst_js.ExpressionStatement });
        }
        else if (id instanceof Identifier &&
            isReassignedExportsMember(id.variable, exportNamesByVariable)) {
            code.appendLeft(end, `${_}=${_}void 0`);
        }
    }
    includeNode(context) {
        this.included = true;
        const { id, init } = this;
        if (init) {
            if (this.isUsingDeclaration) {
                init.includePath(SYMBOL_DISPOSE_PATH, context);
            }
            else if (this.isAsyncUsingDeclaration) {
                init.includePath(SYMBOL_ASYNC_DISPOSE_PATH, context);
            }
            if (id instanceof Identifier && init instanceof ClassExpression && !init.id) {
                const { name, variable } = id;
                for (const accessedVariable of init.scope.accessedOutsideVariables.values()) {
                    if (accessedVariable !== variable) {
                        accessedVariable.forbidName(name);
                    }
                }
            }
        }
    }
}
VariableDeclarator.prototype.applyDeoptimizations = doNotDeoptimize;
const SYMBOL_DISPOSE_PATH = [SymbolDispose];
const SYMBOL_ASYNC_DISPOSE_PATH = [SymbolAsyncDispose];

class WhileStatement extends NodeBase {
    hasEffects(context) {
        if (this.test.hasEffects(context))
            return true;
        return hasLoopBodyEffects(context, this.body);
    }
    include(context, includeChildrenRecursively) {
        this.included = true;
        this.test.include(context, includeChildrenRecursively);
        includeLoopBody(context, this.body, includeChildrenRecursively);
    }
}
WhileStatement.prototype.includeNode = onlyIncludeSelfNoDeoptimize;
WhileStatement.prototype.applyDeoptimizations = doNotDeoptimize;

class YieldExpression extends NodeBase {
    applyDeoptimizations() {
        this.deoptimized = true;
        this.argument?.deoptimizePath(UNKNOWN_PATH);
    }
    hasEffects(context) {
        if (!this.deoptimized)
            this.applyDeoptimizations();
        return !(context.ignore.returnYield && !this.argument?.hasEffects(context));
    }
    includeNode(context) {
        this.included = true;
        if (!this.deoptimized)
            this.applyDeoptimizations();
        this.argument?.includePath(UNKNOWN_PATH, context);
    }
    render(code, options) {
        if (this.argument) {
            this.argument.render(code, options, { preventASI: true });
            if (this.argument.start === this.start + 5 /* 'yield'.length */) {
                code.prependLeft(this.start + 5, ' ');
            }
        }
    }
}

// This file is generated by scripts/generate-buffer-parsers.js.
// Do not edit this file directly.
function convertProgram(buffer, parent, parentScope) {
    return convertNode(parent, parentScope, 0, parseAst_js.getAstBuffer(buffer));
}
const nodeTypeStrings = [
    'PanicError',
    'ParseError',
    'ArrayExpression',
    'ArrayPattern',
    'ArrowFunctionExpression',
    'AssignmentExpression',
    'AssignmentPattern',
    'AwaitExpression',
    'BinaryExpression',
    'BlockStatement',
    'BreakStatement',
    'CallExpression',
    'CatchClause',
    'ChainExpression',
    'ClassBody',
    'ClassDeclaration',
    'ClassExpression',
    'ConditionalExpression',
    'ContinueStatement',
    'DebuggerStatement',
    'Decorator',
    'ExpressionStatement',
    'DoWhileStatement',
    'EmptyStatement',
    'ExportAllDeclaration',
    'ExportDefaultDeclaration',
    'ExportNamedDeclaration',
    'ExportSpecifier',
    'ExpressionStatement',
    'ForInStatement',
    'ForOfStatement',
    'ForStatement',
    'FunctionDeclaration',
    'FunctionExpression',
    'Identifier',
    'IfStatement',
    'ImportAttribute',
    'ImportDeclaration',
    'ImportDefaultSpecifier',
    'ImportExpression',
    'ImportNamespaceSpecifier',
    'ImportSpecifier',
    'JSXAttribute',
    'JSXClosingElement',
    'JSXClosingFragment',
    'JSXElement',
    'JSXEmptyExpression',
    'JSXExpressionContainer',
    'JSXFragment',
    'JSXIdentifier',
    'JSXMemberExpression',
    'JSXNamespacedName',
    'JSXOpeningElement',
    'JSXOpeningFragment',
    'JSXSpreadAttribute',
    'JSXSpreadChild',
    'JSXText',
    'LabeledStatement',
    'Literal',
    'Literal',
    'Literal',
    'Literal',
    'Literal',
    'Literal',
    'LogicalExpression',
    'MemberExpression',
    'MetaProperty',
    'MethodDefinition',
    'NewExpression',
    'ObjectExpression',
    'ObjectPattern',
    'PrivateIdentifier',
    'Program',
    'Property',
    'PropertyDefinition',
    'RestElement',
    'ReturnStatement',
    'SequenceExpression',
    'SpreadElement',
    'StaticBlock',
    'Super',
    'SwitchCase',
    'SwitchStatement',
    'TaggedTemplateExpression',
    'TemplateElement',
    'TemplateLiteral',
    'ThisExpression',
    'ThrowStatement',
    'TryStatement',
    'UnaryExpression',
    'UpdateExpression',
    'VariableDeclaration',
    'VariableDeclarator',
    'WhileStatement',
    'YieldExpression'
];
const nodeConstructors$1 = [
    PanicError,
    ParseError,
    ArrayExpression,
    ArrayPattern,
    ArrowFunctionExpression,
    AssignmentExpression,
    AssignmentPattern,
    AwaitExpression,
    BinaryExpression,
    BlockStatement,
    BreakStatement,
    CallExpression,
    CatchClause,
    ChainExpression,
    ClassBody,
    ClassDeclaration,
    ClassExpression,
    ConditionalExpression,
    ContinueStatement,
    DebuggerStatement,
    Decorator,
    ExpressionStatement,
    DoWhileStatement,
    EmptyStatement,
    ExportAllDeclaration,
    ExportDefaultDeclaration,
    ExportNamedDeclaration,
    ExportSpecifier,
    ExpressionStatement,
    ForInStatement,
    ForOfStatement,
    ForStatement,
    FunctionDeclaration,
    FunctionExpression,
    Identifier,
    IfStatement,
    ImportAttribute,
    ImportDeclaration,
    ImportDefaultSpecifier,
    ImportExpression,
    ImportNamespaceSpecifier,
    ImportSpecifier,
    JSXAttribute,
    JSXClosingElement,
    JSXClosingFragment,
    JSXElement,
    JSXEmptyExpression,
    JSXExpressionContainer,
    JSXFragment,
    JSXIdentifier,
    JSXMemberExpression,
    JSXNamespacedName,
    JSXOpeningElement,
    JSXOpeningFragment,
    JSXSpreadAttribute,
    JSXSpreadChild,
    JSXText,
    LabeledStatement,
    Literal,
    Literal,
    Literal,
    Literal,
    Literal,
    Literal,
    LogicalExpression,
    MemberExpression,
    MetaProperty,
    MethodDefinition,
    NewExpression,
    ObjectExpression,
    ObjectPattern,
    PrivateIdentifier,
    Program,
    Property,
    PropertyDefinition,
    RestElement,
    ReturnStatement,
    SequenceExpression,
    SpreadElement,
    StaticBlock,
    Super,
    SwitchCase,
    SwitchStatement,
    TaggedTemplateExpression,
    TemplateElement,
    TemplateLiteral,
    ThisExpression,
    ThrowStatement,
    TryStatement,
    UnaryExpression,
    UpdateExpression,
    VariableDeclaration,
    VariableDeclarator,
    WhileStatement,
    YieldExpression
];
const bufferParsers = [
    function panicError(node, position, buffer) {
        node.message = buffer.convertString(buffer[position]);
    },
    function parseError(node, position, buffer) {
        node.message = buffer.convertString(buffer[position]);
    },
    function arrayExpression(node, position, buffer) {
        const { scope } = node;
        node.elements = convertNodeList(node, scope, buffer[position], buffer);
    },
    function arrayPattern(node, position, buffer) {
        const { scope } = node;
        node.elements = convertNodeList(node, scope, buffer[position], buffer);
    },
    function arrowFunctionExpression(node, position, buffer) {
        const { scope } = node;
        const flags = buffer[position];
        node.async = (flags & 1) === 1;
        node.expression = (flags & 2) === 2;
        node.generator = (flags & 4) === 4;
        const annotations = (node.annotations = parseAst_js.convertAnnotations(buffer[position + 1], buffer));
        node.annotationNoSideEffects = annotations.some(comment => comment.type === 'noSideEffects');
        const parameters = (node.params = convertNodeList(node, scope, buffer[position + 2], buffer));
        scope.addParameterVariables(parameters.map(parameter => parameter.declare('parameter', EMPTY_PATH, UNKNOWN_EXPRESSION)), parameters[parameters.length - 1] instanceof RestElement);
        node.body = convertNode(node, scope.bodyScope, buffer[position + 3], buffer);
    },
    function assignmentExpression(node, position, buffer) {
        const { scope } = node;
        node.operator = parseAst_js.FIXED_STRINGS[buffer[position]];
        node.left = convertNode(node, scope, buffer[position + 1], buffer);
        node.right = convertNode(node, scope, buffer[position + 2], buffer);
    },
    function assignmentPattern(node, position, buffer) {
        const { scope } = node;
        node.left = convertNode(node, scope, buffer[position], buffer);
        node.right = convertNode(node, scope, buffer[position + 1], buffer);
    },
    function awaitExpression(node, position, buffer) {
        const { scope } = node;
        node.argument = convertNode(node, scope, buffer[position], buffer);
    },
    function binaryExpression(node, position, buffer) {
        const { scope } = node;
        node.operator = parseAst_js.FIXED_STRINGS[buffer[position]];
        node.left = convertNode(node, scope, buffer[position + 1], buffer);
        node.right = convertNode(node, scope, buffer[position + 2], buffer);
    },
    function blockStatement(node, position, buffer) {
        const { scope } = node;
        node.body = convertNodeList(node, scope, buffer[position], buffer);
    },
    function breakStatement(node, position, buffer) {
        const { scope } = node;
        const labelPosition = buffer[position];
        node.label = labelPosition === 0 ? null : convertNode(node, scope, labelPosition, buffer);
    },
    function callExpression(node, position, buffer) {
        const { scope } = node;
        const flags = buffer[position];
        node.optional = (flags & 1) === 1;
        node.annotations = parseAst_js.convertAnnotations(buffer[position + 1], buffer);
        node.callee = convertNode(node, scope, buffer[position + 2], buffer);
        node.arguments = convertNodeList(node, scope, buffer[position + 3], buffer);
    },
    function catchClause(node, position, buffer) {
        const { scope } = node;
        const parameterPosition = buffer[position];
        const parameter = (node.param =
            parameterPosition === 0 ? null : convertNode(node, scope, parameterPosition, buffer));
        parameter?.declare('parameter', EMPTY_PATH, UNKNOWN_EXPRESSION);
        node.body = convertNode(node, scope.bodyScope, buffer[position + 1], buffer);
    },
    function chainExpression(node, position, buffer) {
        const { scope } = node;
        node.expression = convertNode(node, scope, buffer[position], buffer);
    },
    function classBody(node, position, buffer) {
        const { scope } = node;
        const bodyPosition = buffer[position];
        if (bodyPosition) {
            const length = buffer[bodyPosition];
            const body = (node.body = new Array(length));
            for (let index = 0; index < length; index++) {
                const nodePosition = buffer[bodyPosition + 1 + index];
                body[index] = convertNode(node, buffer[nodePosition] !== 79 &&
                    (buffer[nodePosition + 3] & /* the static flag is always first */ 1) === 0
                    ? scope.instanceScope
                    : scope, nodePosition, buffer);
            }
        }
        else {
            node.body = [];
        }
    },
    function classDeclaration(node, position, buffer) {
        const { scope } = node;
        node.decorators = convertNodeList(node, scope, buffer[position], buffer);
        const idPosition = buffer[position + 1];
        node.id =
            idPosition === 0 ? null : convertNode(node, scope.parent, idPosition, buffer);
        const superClassPosition = buffer[position + 2];
        node.superClass =
            superClassPosition === 0 ? null : convertNode(node, scope, superClassPosition, buffer);
        node.body = convertNode(node, scope, buffer[position + 3], buffer);
    },
    function classExpression(node, position, buffer) {
        const { scope } = node;
        node.decorators = convertNodeList(node, scope, buffer[position], buffer);
        const idPosition = buffer[position + 1];
        node.id = idPosition === 0 ? null : convertNode(node, scope, idPosition, buffer);
        const superClassPosition = buffer[position + 2];
        node.superClass =
            superClassPosition === 0 ? null : convertNode(node, scope, superClassPosition, buffer);
        node.body = convertNode(node, scope, buffer[position + 3], buffer);
    },
    function conditionalExpression(node, position, buffer) {
        const { scope } = node;
        node.test = convertNode(node, scope, buffer[position], buffer);
        node.consequent = convertNode(node, scope, buffer[position + 1], buffer);
        node.alternate = convertNode(node, scope, buffer[position + 2], buffer);
    },
    function continueStatement(node, position, buffer) {
        const { scope } = node;
        const labelPosition = buffer[position];
        node.label = labelPosition === 0 ? null : convertNode(node, scope, labelPosition, buffer);
    },
    function debuggerStatement() { },
    function decorator(node, position, buffer) {
        const { scope } = node;
        node.expression = convertNode(node, scope, buffer[position], buffer);
    },
    function directive(node, position, buffer) {
        const { scope } = node;
        node.directive = buffer.convertString(buffer[position]);
        node.expression = convertNode(node, scope, buffer[position + 1], buffer);
    },
    function doWhileStatement(node, position, buffer) {
        const { scope } = node;
        node.body = convertNode(node, scope, buffer[position], buffer);
        node.test = convertNode(node, scope, buffer[position + 1], buffer);
    },
    function emptyStatement() { },
    function exportAllDeclaration(node, position, buffer) {
        const { scope } = node;
        const exportedPosition = buffer[position];
        node.exported =
            exportedPosition === 0 ? null : convertNode(node, scope, exportedPosition, buffer);
        node.source = convertNode(node, scope, buffer[position + 1], buffer);
        node.attributes = convertNodeList(node, scope, buffer[position + 2], buffer);
    },
    function exportDefaultDeclaration(node, position, buffer) {
        const { scope } = node;
        node.declaration = convertNode(node, scope, buffer[position], buffer);
    },
    function exportNamedDeclaration(node, position, buffer) {
        const { scope } = node;
        node.specifiers = convertNodeList(node, scope, buffer[position], buffer);
        const sourcePosition = buffer[position + 1];
        node.source = sourcePosition === 0 ? null : convertNode(node, scope, sourcePosition, buffer);
        node.attributes = convertNodeList(node, scope, buffer[position + 2], buffer);
        const declarationPosition = buffer[position + 3];
        node.declaration =
            declarationPosition === 0 ? null : convertNode(node, scope, declarationPosition, buffer);
    },
    function exportSpecifier(node, position, buffer) {
        const { scope } = node;
        node.local = convertNode(node, scope, buffer[position], buffer);
        const exportedPosition = buffer[position + 1];
        node.exported =
            exportedPosition === 0 ? node.local : convertNode(node, scope, exportedPosition, buffer);
    },
    function expressionStatement(node, position, buffer) {
        const { scope } = node;
        node.expression = convertNode(node, scope, buffer[position], buffer);
    },
    function forInStatement(node, position, buffer) {
        const { scope } = node;
        node.left = convertNode(node, scope, buffer[position], buffer);
        node.right = convertNode(node, scope, buffer[position + 1], buffer);
        node.body = convertNode(node, scope, buffer[position + 2], buffer);
    },
    function forOfStatement(node, position, buffer) {
        const { scope } = node;
        const flags = buffer[position];
        node.await = (flags & 1) === 1;
        node.left = convertNode(node, scope, buffer[position + 1], buffer);
        node.right = convertNode(node, scope, buffer[position + 2], buffer);
        node.body = convertNode(node, scope, buffer[position + 3], buffer);
    },
    function forStatement(node, position, buffer) {
        const { scope } = node;
        const initPosition = buffer[position];
        node.init = initPosition === 0 ? null : convertNode(node, scope, initPosition, buffer);
        const testPosition = buffer[position + 1];
        node.test = testPosition === 0 ? null : convertNode(node, scope, testPosition, buffer);
        const updatePosition = buffer[position + 2];
        node.update = updatePosition === 0 ? null : convertNode(node, scope, updatePosition, buffer);
        node.body = convertNode(node, scope, buffer[position + 3], buffer);
    },
    function functionDeclaration(node, position, buffer) {
        const { scope } = node;
        const flags = buffer[position];
        node.async = (flags & 1) === 1;
        node.generator = (flags & 2) === 2;
        const annotations = (node.annotations = parseAst_js.convertAnnotations(buffer[position + 1], buffer));
        node.annotationNoSideEffects = annotations.some(comment => comment.type === 'noSideEffects');
        const idPosition = buffer[position + 2];
        node.id =
            idPosition === 0 ? null : convertNode(node, scope.parent, idPosition, buffer);
        const parameters = (node.params = convertNodeList(node, scope, buffer[position + 3], buffer));
        scope.addParameterVariables(parameters.map(parameter => parameter.declare('parameter', EMPTY_PATH, UNKNOWN_EXPRESSION)), parameters[parameters.length - 1] instanceof RestElement);
        node.body = convertNode(node, scope.bodyScope, buffer[position + 4], buffer);
    },
    function functionExpression(node, position, buffer) {
        const { scope } = node;
        const flags = buffer[position];
        node.async = (flags & 1) === 1;
        node.generator = (flags & 2) === 2;
        const annotations = (node.annotations = parseAst_js.convertAnnotations(buffer[position + 1], buffer));
        node.annotationNoSideEffects = annotations.some(comment => comment.type === 'noSideEffects');
        const idPosition = buffer[position + 2];
        node.id = idPosition === 0 ? null : convertNode(node, node.idScope, idPosition, buffer);
        const parameters = (node.params = convertNodeList(node, scope, buffer[position + 3], buffer));
        scope.addParameterVariables(parameters.map(parameter => parameter.declare('parameter', EMPTY_PATH, UNKNOWN_EXPRESSION)), parameters[parameters.length - 1] instanceof RestElement);
        node.body = convertNode(node, scope.bodyScope, buffer[position + 4], buffer);
    },
    function identifier(node, position, buffer) {
        node.name = buffer.convertString(buffer[position]);
    },
    function ifStatement(node, position, buffer) {
        const { scope } = node;
        node.test = convertNode(node, scope, buffer[position], buffer);
        node.consequent = convertNode(node, (node.consequentScope = new TrackingScope(scope)), buffer[position + 1], buffer);
        const alternatePosition = buffer[position + 2];
        node.alternate =
            alternatePosition === 0
                ? null
                : convertNode(node, (node.alternateScope = new TrackingScope(scope)), alternatePosition, buffer);
    },
    function importAttribute(node, position, buffer) {
        const { scope } = node;
        node.key = convertNode(node, scope, buffer[position], buffer);
        node.value = convertNode(node, scope, buffer[position + 1], buffer);
    },
    function importDeclaration(node, position, buffer) {
        const { scope } = node;
        node.specifiers = convertNodeList(node, scope, buffer[position], buffer);
        node.source = convertNode(node, scope, buffer[position + 1], buffer);
        node.attributes = convertNodeList(node, scope, buffer[position + 2], buffer);
        const phaseIndex = buffer[position + 3];
        node.phase = phaseIndex === 0 ? undefined : parseAst_js.FIXED_STRINGS[phaseIndex];
    },
    function importDefaultSpecifier(node, position, buffer) {
        const { scope } = node;
        node.local = convertNode(node, scope, buffer[position], buffer);
    },
    function importExpression(node, position, buffer) {
        const { scope } = node;
        node.source = convertNode(node, scope, buffer[position], buffer);
        node.sourceAstNode = parseAst_js.convertNode(buffer[position], buffer);
        const optionsPosition = buffer[position + 1];
        node.options = optionsPosition === 0 ? null : convertNode(node, scope, optionsPosition, buffer);
        const phaseIndex = buffer[position + 2];
        node.phase = phaseIndex === 0 ? undefined : parseAst_js.FIXED_STRINGS[phaseIndex];
    },
    function importNamespaceSpecifier(node, position, buffer) {
        const { scope } = node;
        node.local = convertNode(node, scope, buffer[position], buffer);
    },
    function importSpecifier(node, position, buffer) {
        const { scope } = node;
        const importedPosition = buffer[position];
        node.local = convertNode(node, scope, buffer[position + 1], buffer);
        node.imported =
            importedPosition === 0 ? node.local : convertNode(node, scope, importedPosition, buffer);
    },
    function jsxAttribute(node, position, buffer) {
        const { scope } = node;
        node.name = convertNode(node, scope, buffer[position], buffer);
        const valuePosition = buffer[position + 1];
        node.value = valuePosition === 0 ? null : convertNode(node, scope, valuePosition, buffer);
    },
    function jsxClosingElement(node, position, buffer) {
        const { scope } = node;
        node.name = convertNode(node, scope, buffer[position], buffer);
    },
    function jsxClosingFragment() { },
    function jsxElement(node, position, buffer) {
        const { scope } = node;
        node.openingElement = convertNode(node, scope, buffer[position], buffer);
        node.children = convertNodeList(node, scope, buffer[position + 1], buffer);
        const closingElementPosition = buffer[position + 2];
        node.closingElement =
            closingElementPosition === 0
                ? null
                : convertNode(node, scope, closingElementPosition, buffer);
    },
    function jsxEmptyExpression() { },
    function jsxExpressionContainer(node, position, buffer) {
        const { scope } = node;
        node.expression = convertNode(node, scope, buffer[position], buffer);
    },
    function jsxFragment(node, position, buffer) {
        const { scope } = node;
        node.openingFragment = convertNode(node, scope, buffer[position], buffer);
        node.children = convertNodeList(node, scope, buffer[position + 1], buffer);
        node.closingFragment = convertNode(node, scope, buffer[position + 2], buffer);
    },
    function jsxIdentifier(node, position, buffer) {
        node.name = buffer.convertString(buffer[position]);
    },
    function jsxMemberExpression(node, position, buffer) {
        const { scope } = node;
        node.object = convertNode(node, scope, buffer[position], buffer);
        node.property = convertNode(node, scope, buffer[position + 1], buffer);
    },
    function jsxNamespacedName(node, position, buffer) {
        const { scope } = node;
        node.namespace = convertNode(node, scope, buffer[position], buffer);
        node.name = convertNode(node, scope, buffer[position + 1], buffer);
    },
    function jsxOpeningElement(node, position, buffer) {
        const { scope } = node;
        const flags = buffer[position];
        node.selfClosing = (flags & 1) === 1;
        node.name = convertNode(node, scope, buffer[position + 1], buffer);
        node.attributes = convertNodeList(node, scope, buffer[position + 2], buffer);
    },
    function jsxOpeningFragment(node) {
        node.attributes = [];
        node.selfClosing = false;
    },
    function jsxSpreadAttribute(node, position, buffer) {
        const { scope } = node;
        node.argument = convertNode(node, scope, buffer[position], buffer);
    },
    function jsxSpreadChild(node, position, buffer) {
        const { scope } = node;
        node.expression = convertNode(node, scope, buffer[position], buffer);
    },
    function jsxText(node, position, buffer) {
        node.value = buffer.convertString(buffer[position]);
        node.raw = buffer.convertString(buffer[position + 1]);
    },
    function labeledStatement(node, position, buffer) {
        const { scope } = node;
        node.label = convertNode(node, scope, buffer[position], buffer);
        node.body = convertNode(node, scope, buffer[position + 1], buffer);
    },
    function literalBigInt(node, position, buffer) {
        const bigint = (node.bigint = buffer.convertString(buffer[position]));
        node.raw = buffer.convertString(buffer[position + 1]);
        node.value = BigInt(bigint);
    },
    function literalBoolean(node, position, buffer) {
        const flags = buffer[position];
        const value = (node.value = (flags & 1) === 1);
        node.raw = value ? 'true' : 'false';
    },
    function literalNull(node) {
        node.value = null;
    },
    function literalNumber(node, position, buffer) {
        const rawPosition = buffer[position];
        node.raw = rawPosition === 0 ? undefined : buffer.convertString(rawPosition);
        node.value = new DataView(buffer.buffer).getFloat64((position + 1) << 2, true);
    },
    function literalRegExp(node, position, buffer) {
        const flags = buffer.convertString(buffer[position]);
        const pattern = buffer.convertString(buffer[position + 1]);
        node.raw = `/${pattern}/${flags}`;
        node.regex = { flags, pattern };
        node.value = new RegExp(pattern, flags);
    },
    function literalString(node, position, buffer) {
        node.value = buffer.convertString(buffer[position]);
        const rawPosition = buffer[position + 1];
        node.raw = rawPosition === 0 ? undefined : buffer.convertString(rawPosition);
    },
    function logicalExpression(node, position, buffer) {
        const { scope } = node;
        node.operator = parseAst_js.FIXED_STRINGS[buffer[position]];
        node.left = convertNode(node, scope, buffer[position + 1], buffer);
        node.right = convertNode(node, scope, buffer[position + 2], buffer);
    },
    function memberExpression(node, position, buffer) {
        const { scope } = node;
        const flags = buffer[position];
        node.computed = (flags & 1) === 1;
        node.optional = (flags & 2) === 2;
        node.object = convertNode(node, scope, buffer[position + 1], buffer);
        node.property = convertNode(node, scope, buffer[position + 2], buffer);
    },
    function metaProperty(node, position, buffer) {
        const { scope } = node;
        node.meta = convertNode(node, scope, buffer[position], buffer);
        node.property = convertNode(node, scope, buffer[position + 1], buffer);
    },
    function methodDefinition(node, position, buffer) {
        const { scope } = node;
        const flags = buffer[position];
        node.static = (flags & 1) === 1;
        node.computed = (flags & 2) === 2;
        node.decorators = convertNodeList(node, scope, buffer[position + 1], buffer);
        node.key = convertNode(node, scope, buffer[position + 2], buffer);
        node.value = convertNode(node, scope, buffer[position + 3], buffer);
        node.kind = parseAst_js.FIXED_STRINGS[buffer[position + 4]];
    },
    function newExpression(node, position, buffer) {
        const { scope } = node;
        node.annotations = parseAst_js.convertAnnotations(buffer[position], buffer);
        node.callee = convertNode(node, scope, buffer[position + 1], buffer);
        node.arguments = convertNodeList(node, scope, buffer[position + 2], buffer);
    },
    function objectExpression(node, position, buffer) {
        const { scope } = node;
        node.properties = convertNodeList(node, scope, buffer[position], buffer);
    },
    function objectPattern(node, position, buffer) {
        const { scope } = node;
        node.properties = convertNodeList(node, scope, buffer[position], buffer);
    },
    function privateIdentifier(node, position, buffer) {
        node.name = buffer.convertString(buffer[position]);
    },
    function program(node, position, buffer) {
        const { scope } = node;
        node.body = convertNodeList(node, scope, buffer[position], buffer);
        node.invalidAnnotations = parseAst_js.convertAnnotations(buffer[position + 1], buffer);
    },
    function property(node, position, buffer) {
        const { scope } = node;
        const flags = buffer[position];
        node.method = (flags & 1) === 1;
        node.shorthand = (flags & 2) === 2;
        node.computed = (flags & 4) === 4;
        const keyPosition = buffer[position + 1];
        node.value = convertNode(node, scope, buffer[position + 2], buffer);
        node.kind = parseAst_js.FIXED_STRINGS[buffer[position + 3]];
        node.key = keyPosition === 0 ? node.value : convertNode(node, scope, keyPosition, buffer);
    },
    function propertyDefinition(node, position, buffer) {
        const { scope } = node;
        const flags = buffer[position];
        node.static = (flags & 1) === 1;
        node.computed = (flags & 2) === 2;
        node.decorators = convertNodeList(node, scope, buffer[position + 1], buffer);
        node.key = convertNode(node, scope, buffer[position + 2], buffer);
        const valuePosition = buffer[position + 3];
        node.value = valuePosition === 0 ? null : convertNode(node, scope, valuePosition, buffer);
    },
    function restElement(node, position, buffer) {
        const { scope } = node;
        node.argument = convertNode(node, scope, buffer[position], buffer);
    },
    function returnStatement(node, position, buffer) {
        const { scope } = node;
        const argumentPosition = buffer[position];
        node.argument =
            argumentPosition === 0 ? null : convertNode(node, scope, argumentPosition, buffer);
    },
    function sequenceExpression(node, position, buffer) {
        const { scope } = node;
        node.expressions = convertNodeList(node, scope, buffer[position], buffer);
    },
    function spreadElement(node, position, buffer) {
        const { scope } = node;
        node.argument = convertNode(node, scope, buffer[position], buffer);
    },
    function staticBlock(node, position, buffer) {
        const { scope } = node;
        node.body = convertNodeList(node, scope, buffer[position], buffer);
    },
    function superElement() { },
    function switchCase(node, position, buffer) {
        const { scope } = node;
        const testPosition = buffer[position];
        node.test = testPosition === 0 ? null : convertNode(node, scope, testPosition, buffer);
        node.consequent = convertNodeList(node, scope, buffer[position + 1], buffer);
    },
    function switchStatement(node, position, buffer) {
        const { scope } = node;
        node.discriminant = convertNode(node, node.parentScope, buffer[position], buffer);
        node.cases = convertNodeList(node, scope, buffer[position + 1], buffer);
    },
    function taggedTemplateExpression(node, position, buffer) {
        const { scope } = node;
        node.tag = convertNode(node, scope, buffer[position], buffer);
        node.quasi = convertNode(node, scope, buffer[position + 1], buffer);
    },
    function templateElement(node, position, buffer) {
        const flags = buffer[position];
        node.tail = (flags & 1) === 1;
        const cookedPosition = buffer[position + 1];
        const cooked = cookedPosition === 0 ? null : buffer.convertString(cookedPosition);
        const raw = buffer.convertString(buffer[position + 2]);
        node.value = { cooked, raw };
    },
    function templateLiteral(node, position, buffer) {
        const { scope } = node;
        node.quasis = convertNodeList(node, scope, buffer[position], buffer);
        node.expressions = convertNodeList(node, scope, buffer[position + 1], buffer);
    },
    function thisExpression() { },
    function throwStatement(node, position, buffer) {
        const { scope } = node;
        node.argument = convertNode(node, scope, buffer[position], buffer);
    },
    function tryStatement(node, position, buffer) {
        const { scope } = node;
        node.block = convertNode(node, scope, buffer[position], buffer);
        const handlerPosition = buffer[position + 1];
        node.handler = handlerPosition === 0 ? null : convertNode(node, scope, handlerPosition, buffer);
        const finalizerPosition = buffer[position + 2];
        node.finalizer =
            finalizerPosition === 0 ? null : convertNode(node, scope, finalizerPosition, buffer);
    },
    function unaryExpression(node, position, buffer) {
        const { scope } = node;
        node.operator = parseAst_js.FIXED_STRINGS[buffer[position]];
        node.argument = convertNode(node, scope, buffer[position + 1], buffer);
    },
    function updateExpression(node, position, buffer) {
        const { scope } = node;
        const flags = buffer[position];
        node.prefix = (flags & 1) === 1;
        node.operator = parseAst_js.FIXED_STRINGS[buffer[position + 1]];
        node.argument = convertNode(node, scope, buffer[position + 2], buffer);
    },
    function variableDeclaration(node, position, buffer) {
        const { scope } = node;
        node.kind = parseAst_js.FIXED_STRINGS[buffer[position]];
        node.declarations = convertNodeList(node, scope, buffer[position + 1], buffer);
    },
    function variableDeclarator(node, position, buffer) {
        const { scope } = node;
        node.id = convertNode(node, scope, buffer[position], buffer);
        const initPosition = buffer[position + 1];
        node.init = initPosition === 0 ? null : convertNode(node, scope, initPosition, buffer);
    },
    function whileStatement(node, position, buffer) {
        const { scope } = node;
        node.test = convertNode(node, scope, buffer[position], buffer);
        node.body = convertNode(node, scope, buffer[position + 1], buffer);
    },
    function yieldExpression(node, position, buffer) {
        const { scope } = node;
        const flags = buffer[position];
        node.delegate = (flags & 1) === 1;
        const argumentPosition = buffer[position + 1];
        node.argument =
            argumentPosition === 0 ? null : convertNode(node, scope, argumentPosition, buffer);
    }
];
function convertNode(parent, parentScope, position, buffer) {
    const nodeType = buffer[position];
    const NodeConstructor = nodeConstructors$1[nodeType];
    /* istanbul ignore if: This should never be executed but is a safeguard against faulty buffers */
    if (!NodeConstructor) {
        console.trace();
        throw new Error(`Unknown node type: ${nodeType}`);
    }
    const node = new NodeConstructor(parent, parentScope);
    node.type = nodeTypeStrings[nodeType];
    node.start = buffer[position + 1];
    node.end = buffer[position + 2];
    bufferParsers[nodeType](node, position + 3, buffer);
    node.initialise();
    return node;
}
function convertNodeList(parent, parentScope, position, buffer) {
    if (position === 0)
        return parseAst_js.EMPTY_ARRAY;
    const length = buffer[position++];
    const list = new Array(length);
    for (let index = 0; index < length; index++) {
        const nodePosition = buffer[position++];
        list[index] = nodePosition ? convertNode(parent, parentScope, nodePosition, buffer) : null;
    }
    return list;
}

class UnknownNode extends NodeBase {
    hasEffects() {
        return true;
    }
    include(context) {
        super.include(context, true);
    }
}

// This file is generated by scripts/generate-node-index.js.
// Do not edit this file directly.
const nodeConstructors = {
    ArrayExpression,
    ArrayPattern,
    ArrowFunctionExpression,
    AssignmentExpression,
    AssignmentPattern,
    AwaitExpression,
    BinaryExpression,
    BlockStatement,
    BreakStatement,
    CallExpression,
    CatchClause,
    ChainExpression,
    ClassBody,
    ClassDeclaration,
    ClassExpression,
    ConditionalExpression,
    ContinueStatement,
    DebuggerStatement,
    Decorator,
    DoWhileStatement,
    EmptyStatement,
    ExportAllDeclaration,
    ExportDefaultDeclaration,
    ExportNamedDeclaration,
    ExportSpecifier,
    ExpressionStatement,
    ForInStatement,
    ForOfStatement,
    ForStatement,
    FunctionDeclaration,
    FunctionExpression,
    Identifier,
    IfStatement,
    ImportAttribute,
    ImportDeclaration,
    ImportDefaultSpecifier,
    ImportExpression,
    ImportNamespaceSpecifier,
    ImportSpecifier,
    JSXAttribute,
    JSXClosingElement,
    JSXClosingFragment,
    JSXElement,
    JSXEmptyExpression,
    JSXExpressionContainer,
    JSXFragment,
    JSXIdentifier,
    JSXMemberExpression,
    JSXNamespacedName,
    JSXOpeningElement,
    JSXOpeningFragment,
    JSXSpreadAttribute,
    JSXSpreadChild,
    JSXText,
    LabeledStatement,
    Literal,
    LogicalExpression,
    MemberExpression,
    MetaProperty,
    MethodDefinition,
    NewExpression,
    ObjectExpression,
    ObjectPattern,
    PanicError,
    ParseError,
    PrivateIdentifier,
    Program,
    Property,
    PropertyDefinition,
    RestElement,
    ReturnStatement,
    SequenceExpression,
    SpreadElement,
    StaticBlock,
    Super,
    SwitchCase,
    SwitchStatement,
    TaggedTemplateExpression,
    TemplateElement,
    TemplateLiteral,
    ThisExpression,
    ThrowStatement,
    TryStatement,
    UnaryExpression,
    UnknownNode,
    UpdateExpression,
    VariableDeclaration,
    VariableDeclarator,
    WhileStatement,
    YieldExpression
};

class ExportShimVariable extends Variable {
    constructor(module) {
        super(MISSING_EXPORT_SHIM_VARIABLE);
        this.module = module;
    }
    includePath(path, context) {
        super.includePath(path, context);
        this.module.needsExportShim = true;
    }
}

const sourceMapCache = new WeakMap();
/**
 * This clears the decoded array and falls back to the encoded string form.
 * Sourcemap mappings arrays can be very large and holding on to them for longer
 * than is necessary leads to poor heap utilization.
 */
function resetCacheToEncoded(cache) {
    if (cache.encodedMappings === undefined && cache.decodedMappings) {
        cache.encodedMappings = encode(cache.decodedMappings);
    }
    cache.decodedMappings = undefined;
}
function resetSourcemapCache(map, sourcemapChain) {
    if (map) {
        const cache = sourceMapCache.get(map);
        if (cache) {
            resetCacheToEncoded(cache);
        }
    }
    if (!sourcemapChain) {
        return;
    }
    for (const map of sourcemapChain) {
        if (map.missing)
            continue;
        resetSourcemapCache(map);
    }
}
function decodedSourcemap(map) {
    if (!map)
        return null;
    if (typeof map === 'string') {
        map = JSON.parse(map);
    }
    if (!map.mappings) {
        return {
            mappings: [],
            names: [],
            sources: [],
            version: 3
        };
    }
    const originalMappings = map.mappings;
    const isAlreadyDecoded = Array.isArray(originalMappings);
    const cache = {
        decodedMappings: isAlreadyDecoded ? originalMappings : undefined,
        encodedMappings: isAlreadyDecoded ? undefined : originalMappings
    };
    const decodedMap = {
        ...map,
        // By moving mappings behind an accessor, we can avoid unneeded computation for cases
        // where the mappings field is never actually accessed. This appears to greatly reduce
        // the overhead of sourcemap decoding in terms of both compute time and memory usage.
        get mappings() {
            if (cache.decodedMappings) {
                return cache.decodedMappings;
            }
            // If decodedMappings doesn't exist then encodedMappings should.
            // The only scenario where cache.encodedMappings should be undefined is if the map
            // this was constructed from was already decoded, or if mappings was set to a new
            // decoded string. In either case, this line shouldn't get hit.
            cache.decodedMappings = cache.encodedMappings ? decode(cache.encodedMappings) : [];
            cache.encodedMappings = undefined;
            return cache.decodedMappings;
        }
    };
    sourceMapCache.set(decodedMap, cache);
    return decodedMap;
}

function getId(m) {
    return m.id;
}

function getOriginalLocation(sourcemapChain, location) {
    const filteredSourcemapChain = sourcemapChain.filter((sourcemap) => !sourcemap.missing);
    traceSourcemap: while (filteredSourcemapChain.length > 0) {
        const sourcemap = filteredSourcemapChain.pop();
        const line = sourcemap.mappings[location.line - 1];
        if (line) {
            const filteredLine = line.filter((segment) => segment.length > 1);
            const lastSegment = filteredLine[filteredLine.length - 1];
            let previousSegment = filteredLine[0];
            for (let segment of filteredLine) {
                if (segment[0] >= location.column || segment === lastSegment) {
                    const notMatched = segment[0] !== location.column;
                    segment = notMatched ? previousSegment : segment;
                    location = {
                        column: segment[3],
                        line: segment[2] + 1
                    };
                    continue traceSourcemap;
                }
                previousSegment = segment;
            }
        }
        throw new Error("Can't resolve original location of error.");
    }
    return location;
}

const ATTRIBUTE_KEYWORDS = new Set(['assert', 'with']);
function getAttributesFromImportExpression(node) {
    const { scope: { context }, options, start } = node;
    if (!(options instanceof ObjectExpression)) {
        if (options) {
            context.module.log(parseAst_js.LOGLEVEL_WARN, parseAst_js.logImportAttributeIsInvalid(context.module.id), start);
        }
        return parseAst_js.EMPTY_OBJECT;
    }
    const assertProperty = options.properties.find((property) => ATTRIBUTE_KEYWORDS.has(getPropertyKey(property)))?.value;
    if (!assertProperty) {
        return parseAst_js.EMPTY_OBJECT;
    }
    if (!(assertProperty instanceof ObjectExpression)) {
        context.module.log(parseAst_js.LOGLEVEL_WARN, parseAst_js.logImportOptionsAreInvalid(context.module.id), start);
        return parseAst_js.EMPTY_OBJECT;
    }
    const assertFields = assertProperty.properties
        .map(property => {
        const key = getPropertyKey(property);
        if (typeof key === 'string' &&
            typeof property.value.value === 'string') {
            return [key, property.value.value];
        }
        context.module.log(parseAst_js.LOGLEVEL_WARN, parseAst_js.logImportAttributeIsInvalid(context.module.id), property.start);
        return null;
    })
        .filter((property) => !!property);
    if (assertFields.length > 0) {
        return Object.fromEntries(assertFields);
    }
    return parseAst_js.EMPTY_OBJECT;
}
const getPropertyKey = (property) => {
    const key = property.key;
    return (key &&
        !property.computed &&
        (key.name || key.value));
};
function getAttributesFromImportExportDeclaration(attributes) {
    return attributes?.length
        ? Object.fromEntries(attributes.map(assertion => [getPropertyKey(assertion), assertion.value.value]))
        : parseAst_js.EMPTY_OBJECT;
}
function doAttributesDiffer(assertionA, assertionB) {
    const keysA = Object.keys(assertionA);
    return (keysA.length !== Object.keys(assertionB).length ||
        keysA.some(key => assertionA[key] !== assertionB[key]));
}

let timers = new Map();
function getPersistedLabel(label, level) {
    switch (level) {
        case 1: {
            return `# ${label}`;
        }
        case 2: {
            return `## ${label}`;
        }
        case 3: {
            return label;
        }
        default: {
            return `- ${label}`;
        }
    }
}
function timeStartImpl(label, level = 3) {
    label = getPersistedLabel(label, level);
    const startMemory = process$1.memoryUsage().heapUsed;
    const startTime = node_perf_hooks.performance.now();
    const timer = timers.get(label);
    if (timer === undefined) {
        timers.set(label, {
            memory: 0,
            startMemory,
            startTime,
            time: 0,
            totalMemory: 0
        });
    }
    else {
        timer.startMemory = startMemory;
        timer.startTime = startTime;
    }
}
function timeEndImpl(label, level = 3) {
    label = getPersistedLabel(label, level);
    const timer = timers.get(label);
    if (timer !== undefined) {
        const currentMemory = process$1.memoryUsage().heapUsed;
        timer.memory += currentMemory - timer.startMemory;
        timer.time += node_perf_hooks.performance.now() - timer.startTime;
        timer.totalMemory = Math.max(timer.totalMemory, currentMemory);
    }
}
function getTimings() {
    const newTimings = {};
    for (const [label, { memory, time, totalMemory }] of timers) {
        newTimings[label] = [time, memory, totalMemory];
    }
    return newTimings;
}
let timeStart = doNothing;
let timeEnd = doNothing;
const TIMED_PLUGIN_HOOKS = [
    'augmentChunkHash',
    'buildEnd',
    'buildStart',
    'generateBundle',
    'load',
    'moduleParsed',
    'options',
    'outputOptions',
    'renderChunk',
    'renderDynamicImport',
    'renderStart',
    'resolveDynamicImport',
    'resolveFileUrl',
    'resolveId',
    'resolveImportMeta',
    'shouldTransformCachedModule',
    'transform',
    'writeBundle'
];
function getPluginWithTimers(plugin, index) {
    if (plugin._hasTimer)
        return plugin;
    plugin._hasTimer = true;
    for (const hook of TIMED_PLUGIN_HOOKS) {
        if (hook in plugin) {
            let timerLabel = `plugin ${index}`;
            if (plugin.name) {
                timerLabel += ` (${plugin.name})`;
            }
            timerLabel += ` - ${hook}`;
            const handler = function (...parameters) {
                timeStart(timerLabel, 4);
                const result = hookFunction.apply(this, parameters);
                timeEnd(timerLabel, 4);
                return result;
            };
            let hookFunction;
            if (typeof plugin[hook].handler === 'function') {
                hookFunction = plugin[hook].handler;
                plugin[hook].handler = handler;
            }
            else {
                hookFunction = plugin[hook];
                plugin[hook] = handler;
            }
        }
    }
    return plugin;
}
function initialiseTimers(inputOptions) {
    if (inputOptions.perf) {
        timers = new Map();
        timeStart = timeStartImpl;
        timeEnd = timeEndImpl;
        inputOptions.plugins = inputOptions.plugins.map(getPluginWithTimers);
    }
    else {
        timeStart = doNothing;
        timeEnd = doNothing;
    }
}

const MISSING_EXPORT_SHIM_DESCRIPTION = {
    identifier: null,
    localName: MISSING_EXPORT_SHIM_VARIABLE
};
function getVariableForExportNameRecursive(target, name, importerForSideEffects, isExportAllSearch, searchedNamesAndModules = new Map(), importChain, sideEffectModules, exportOrReexportModules) {
    const searchedModules = searchedNamesAndModules.get(name);
    if (searchedModules) {
        if (searchedModules.has(target)) {
            return isExportAllSearch ? [null] : parseAst_js.error(parseAst_js.logCircularReexport(name, target.id));
        }
        searchedModules.add(target);
    }
    else {
        searchedNamesAndModules.set(name, new Set([target]));
    }
    return target.getVariableForExportName(name, {
        exportOrReexportModules,
        importChain,
        importerForSideEffects,
        isExportAllSearch,
        searchedNamesAndModules,
        sideEffectModules
    });
}
function getAndExtendSideEffectModules(variable, module) {
    const sideEffectModules = getOrCreate(module.sideEffectDependenciesByVariable, variable, (getNewSet));
    let currentVariable = variable;
    const referencedVariables = new Set([currentVariable]);
    while (true) {
        const importingModule = currentVariable.module;
        currentVariable =
            currentVariable instanceof ExportDefaultVariable
                ? currentVariable.getDirectOriginalVariable()
                : currentVariable instanceof SyntheticNamedExportVariable
                    ? currentVariable.syntheticNamespace
                    : null;
        if (!currentVariable || referencedVariables.has(currentVariable)) {
            break;
        }
        referencedVariables.add(currentVariable);
        sideEffectModules.add(importingModule);
        const originalSideEffects = importingModule.sideEffectDependenciesByVariable.get(currentVariable);
        if (originalSideEffects) {
            for (const module of originalSideEffects) {
                sideEffectModules.add(module);
            }
        }
    }
    return sideEffectModules;
}
class Module {
    constructor(graph, id, options, isEntry, moduleSideEffects, syntheticNamedExports, meta, attributes) {
        this.graph = graph;
        this.id = id;
        this.options = options;
        this.alternativeReexportModules = new Map();
        this.chunkFileNames = new Set();
        this.chunkNames = [];
        this.cycles = new Set();
        this.dependencies = new Set();
        this.dynamicDependencies = new Set();
        this.dynamicImporters = [];
        this.dynamicImports = [];
        this.execIndex = Infinity;
        this.hasTreeShakingPassStarted = false;
        this.implicitlyLoadedAfter = new Set();
        this.implicitlyLoadedBefore = new Set();
        this.importDescriptions = new Map();
        this.importMetas = [];
        this.importedFromNotTreeshaken = false;
        this.importers = [];
        this.includedDynamicImporters = [];
        this.includedTopLevelAwaitingDynamicImporters = new Set();
        this.includedImports = new Set();
        this.isExecuted = false;
        this.isUserDefinedEntryPoint = false;
        this.needsExportShim = false;
        this.sideEffectDependenciesByVariable = new Map();
        this.sourcePhaseSources = new Set();
        this.sourcesWithAttributes = new Map();
        this.allExportsIncluded = false;
        this.ast = null;
        this.exportAllModules = [];
        this.exportAllSources = new Set();
        this.exportDescriptions = new Map();
        this.exportedVariablesByName = null;
        this.exportNamesByVariable = null;
        this.exportShimVariable = new ExportShimVariable(this);
        this.namespaceReexportsByName = new Map();
        this.reexportDescriptions = new Map();
        this.relevantDependencies = null;
        this.syntheticExports = new Map();
        this.syntheticNamespace = null;
        this.transformDependencies = [];
        this.excludeFromSourcemap = /\0/.test(id);
        this.context = options.moduleContext(id);
        this.preserveSignature = this.options.preserveEntrySignatures;
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const module = this;
        const { dynamicImports, dynamicImporters, exportAllSources, exportDescriptions, implicitlyLoadedAfter, implicitlyLoadedBefore, importers, reexportDescriptions, sourcesWithAttributes } = this;
        this.info = {
            ast: null,
            attributes,
            code: null,
            get dynamicallyImportedIdResolutions() {
                return dynamicImports
                    .map(({ argument }) => typeof argument === 'string' && module.resolvedIds[argument])
                    .filter(Boolean);
            },
            get dynamicallyImportedIds() {
                // We cannot use this.dynamicDependencies because this is needed before
                // dynamicDependencies are populated
                return dynamicImports.map(({ id }) => id).filter((id) => id != null);
            },
            get dynamicImporters() {
                return dynamicImporters.sort();
            },
            get exportedBindings() {
                const exportBindings = { '.': [...exportDescriptions.keys()] };
                for (const [name, { source }] of reexportDescriptions) {
                    (exportBindings[source] ??= []).push(name);
                }
                for (const source of exportAllSources) {
                    (exportBindings[source] ??= []).push('*');
                }
                return exportBindings;
            },
            get exports() {
                return [
                    ...exportDescriptions.keys(),
                    ...reexportDescriptions.keys(),
                    ...[...exportAllSources].map(() => '*')
                ];
            },
            get hasDefaultExport() {
                // This information is only valid after parsing
                if (!module.ast) {
                    return null;
                }
                return module.exportDescriptions.has('default') || reexportDescriptions.has('default');
            },
            id,
            get implicitlyLoadedAfterOneOf() {
                return Array.from(implicitlyLoadedAfter, getId).sort();
            },
            get implicitlyLoadedBefore() {
                return Array.from(implicitlyLoadedBefore, getId).sort();
            },
            get importedIdResolutions() {
                return Array.from(sourcesWithAttributes.keys(), source => module.resolvedIds[source]).filter(Boolean);
            },
            get importedIds() {
                // We cannot use this.dependencies because this is needed before
                // dependencies are populated
                return Array.from(sourcesWithAttributes.keys(), source => module.resolvedIds[source]?.id).filter(Boolean);
            },
            get importers() {
                return importers.sort();
            },
            isEntry,
            isExternal: false,
            get isIncluded() {
                if (graph.phase !== BuildPhase.GENERATE) {
                    return null;
                }
                return module.isIncluded();
            },
            meta: { ...meta },
            moduleSideEffects,
            safeVariableNames: null,
            syntheticNamedExports
        };
    }
    basename() {
        const base = path.basename(this.id);
        const extension = path.extname(this.id);
        return makeLegal(extension ? base.slice(0, -extension.length) : base);
    }
    bindReferences() {
        this.ast.bind();
    }
    cacheInfoGetters() {
        cacheObjectGetters(this.info, [
            'dynamicallyImportedIdResolutions',
            'dynamicallyImportedIds',
            'dynamicImporters',
            'exportedBindings',
            'exports',
            'hasDefaultExport',
            'implicitlyLoadedAfterOneOf',
            'implicitlyLoadedBefore',
            'importedIdResolutions',
            'importedIds',
            'importers'
        ]);
    }
    error(properties, pos) {
        if (pos !== undefined) {
            this.addLocationToLogProps(properties, pos);
        }
        return parseAst_js.error(properties);
    }
    // sum up the length of all ast nodes that are included
    estimateSize() {
        let size = 0;
        for (const node of this.ast.body) {
            if (node.included) {
                size += node.end - node.start;
            }
        }
        return size;
    }
    getDependenciesToBeIncluded() {
        if (this.relevantDependencies)
            return this.relevantDependencies;
        this.relevantDependencies = new Set();
        const necessaryDependencies = new Set();
        const alwaysCheckedDependencies = new Set();
        const dependencyVariables = new Set(this.includedImports);
        if (this.info.isEntry ||
            this.includedDynamicImporters.length > 0 ||
            this.namespace.included ||
            this.implicitlyLoadedAfter.size > 0) {
            for (const variable of this.getExportedVariablesByName().values()) {
                if (variable.included) {
                    dependencyVariables.add(variable);
                }
            }
        }
        for (let variable of dependencyVariables) {
            const sideEffectDependencies = this.sideEffectDependenciesByVariable.get(variable);
            if (sideEffectDependencies) {
                for (const module of sideEffectDependencies) {
                    alwaysCheckedDependencies.add(module);
                }
            }
            if (variable instanceof SyntheticNamedExportVariable) {
                variable = variable.getBaseVariable();
            }
            else if (variable instanceof ExportDefaultVariable) {
                variable = variable.getOriginalVariable();
            }
            necessaryDependencies.add(variable.module);
        }
        if (!this.options.treeshake || this.info.moduleSideEffects === 'no-treeshake') {
            for (const dependency of this.dependencies) {
                this.relevantDependencies.add(dependency);
            }
        }
        else {
            this.addRelevantSideEffectDependencies(this.relevantDependencies, necessaryDependencies, alwaysCheckedDependencies);
        }
        for (const dependency of necessaryDependencies) {
            this.relevantDependencies.add(dependency);
        }
        return this.relevantDependencies;
    }
    getExportedVariablesByName() {
        if (this.exportedVariablesByName) {
            return this.exportedVariablesByName;
        }
        const exportedVariablesByName = (this.exportedVariablesByName = new Map());
        for (const name of this.exportDescriptions.keys()) {
            // We do not count the synthetic namespace as a regular export to hide it
            // from entry signatures and namespace objects
            if (name !== this.info.syntheticNamedExports) {
                const [exportedVariable] = this.getVariableForExportName(name);
                if (exportedVariable) {
                    exportedVariablesByName.set(name, exportedVariable);
                }
                else {
                    return parseAst_js.error(parseAst_js.logMissingEntryExport(name, this.id));
                }
            }
        }
        for (const name of this.reexportDescriptions.keys()) {
            const [exportedVariable] = this.getVariableForExportName(name);
            if (exportedVariable) {
                exportedVariablesByName.set(name, exportedVariable);
            }
        }
        for (const module of this.exportAllModules) {
            if (module instanceof ExternalModule) {
                exportedVariablesByName.set(`*${module.id}`, module.getVariableForExportName('*', {
                    importChain: [this.id]
                })[0]);
                continue;
            }
            for (const name of module.getExportedVariablesByName().keys()) {
                if (name !== 'default' && !exportedVariablesByName.has(name)) {
                    const [exportedVariable] = this.getVariableForExportName(name);
                    if (exportedVariable) {
                        exportedVariablesByName.set(name, exportedVariable);
                    }
                }
            }
        }
        return (this.exportedVariablesByName = new Map([...exportedVariablesByName].sort(sortExportedVariables)));
    }
    getExportNamesByVariable() {
        if (this.exportNamesByVariable) {
            return this.exportNamesByVariable;
        }
        const exportNamesByVariable = new Map();
        for (const [exportName, variable] of this.getExportedVariablesByName().entries()) {
            const tracedVariable = variable instanceof ExportDefaultVariable ? variable.getOriginalVariable() : variable;
            if (!variable || !(variable.included || variable instanceof ExternalVariable)) {
                continue;
            }
            const existingExportNames = exportNamesByVariable.get(tracedVariable);
            if (existingExportNames) {
                existingExportNames.push(exportName);
            }
            else {
                exportNamesByVariable.set(tracedVariable, [exportName]);
            }
        }
        return (this.exportNamesByVariable = exportNamesByVariable);
    }
    getRenderedExports() {
        // only direct exports are counted here, not reexports at all
        const renderedExports = [];
        const removedExports = [];
        for (const exportName of this.exportDescriptions.keys()) {
            (this.getExportedVariablesByName().get(exportName)?.included
                ? renderedExports
                : removedExports).push(exportName);
        }
        return { removedExports, renderedExports };
    }
    getSyntheticNamespace() {
        if (this.syntheticNamespace === null) {
            this.syntheticNamespace = undefined;
            [this.syntheticNamespace] = this.getVariableForExportName(typeof this.info.syntheticNamedExports === 'string'
                ? this.info.syntheticNamedExports
                : 'default', { onlyExplicit: true });
        }
        if (!this.syntheticNamespace) {
            return parseAst_js.error(parseAst_js.logSyntheticNamedExportsNeedNamespaceExport(this.id, this.info.syntheticNamedExports));
        }
        return this.syntheticNamespace;
    }
    getVariableForExportName(name, { importerForSideEffects, importChain = [], isExportAllSearch, onlyExplicit, searchedNamesAndModules, sideEffectModules, exportOrReexportModules } = parseAst_js.EMPTY_OBJECT) {
        if (name[0] === '*') {
            if (name.length === 1) {
                // export * from './other'
                return [this.namespace];
            }
            // export * from 'external'
            const module = this.graph.modulesById.get(name.slice(1));
            return module.getVariableForExportName('*', {
                importChain: [...importChain, this.id]
            });
        }
        // export { foo } from './other'
        const reexportDeclaration = this.reexportDescriptions.get(name);
        if (reexportDeclaration) {
            const [variable, options] = getVariableForExportNameRecursive(reexportDeclaration.module, reexportDeclaration.localName, importerForSideEffects, false, searchedNamesAndModules, [...importChain, this.id], sideEffectModules, exportOrReexportModules);
            if (!variable) {
                return this.error(parseAst_js.logMissingExport(reexportDeclaration.localName, this.id, reexportDeclaration.module.id, !!options?.missingButExportExists), reexportDeclaration.start);
            }
            if (importerForSideEffects) {
                setAlternativeExporterIfCyclic(variable, importerForSideEffects, this);
                if (this.info.moduleSideEffects) {
                    getOrCreate(importerForSideEffects.sideEffectDependenciesByVariable, variable, (getNewSet)).add(this);
                }
            }
            if (this.info.moduleSideEffects) {
                sideEffectModules?.add(this);
            }
            exportOrReexportModules?.add(this);
            return [variable];
        }
        const exportDeclaration = this.exportDescriptions.get(name);
        if (exportDeclaration) {
            if (exportDeclaration === MISSING_EXPORT_SHIM_DESCRIPTION) {
                return [this.exportShimVariable];
            }
            const name = exportDeclaration.localName;
            const variable = this.traceVariable(name, {
                exportOrReexportModules,
                importerForSideEffects,
                searchedNamesAndModules,
                sideEffectModules
            });
            if (!variable) {
                return [null, { missingButExportExists: true }];
            }
            if (importerForSideEffects) {
                setAlternativeExporterIfCyclic(variable, importerForSideEffects, this);
                getOrCreate(importerForSideEffects.sideEffectDependenciesByVariable, variable, (getNewSet)).add(this);
            }
            sideEffectModules?.add(this);
            exportOrReexportModules?.add(this);
            return [variable];
        }
        if (onlyExplicit) {
            return [null];
        }
        if (name !== 'default') {
            const foundNamespaceReexport = this.namespaceReexportsByName.get(name) ??
                this.getVariableFromNamespaceReexports(name, importerForSideEffects, searchedNamesAndModules, [...importChain, this.id]);
            this.namespaceReexportsByName.set(name, foundNamespaceReexport);
            if (foundNamespaceReexport[0]) {
                const [namespaceReexportVariable, namespaceReexportOptions] = foundNamespaceReexport;
                if (importerForSideEffects) {
                    const { exportOrReexportModules, sideEffectModules } = namespaceReexportOptions;
                    for (const module of exportOrReexportModules) {
                        if (importerForSideEffects.alternativeReexportModules.has(namespaceReexportVariable)) {
                            continue;
                        }
                        setAlternativeExporterIfCyclic(namespaceReexportVariable, importerForSideEffects, module);
                    }
                    for (const module of sideEffectModules) {
                        getOrCreate(importerForSideEffects.sideEffectDependenciesByVariable, namespaceReexportVariable, (getNewSet)).add(module);
                    }
                }
                return foundNamespaceReexport;
            }
        }
        if (this.info.syntheticNamedExports) {
            return [
                getOrCreate(this.syntheticExports, name, () => new SyntheticNamedExportVariable(this.astContext, name, this.getSyntheticNamespace()))
            ];
        }
        // we don't want to create shims when we are just
        // probing export * modules for exports
        if (!isExportAllSearch && this.options.shimMissingExports) {
            this.shimMissingExport(name);
            return [this.exportShimVariable];
        }
        return [null];
    }
    hasEffects() {
        return this.info.moduleSideEffects === 'no-treeshake' || this.ast.hasCachedEffects();
    }
    include() {
        const context = createInclusionContext();
        if (this.ast.shouldBeIncluded(context))
            this.ast.include(context, false);
    }
    includeAllExports() {
        if (this.allExportsIncluded)
            return;
        this.allExportsIncluded = true;
        this.includeModuleInExecution();
        const inclusionContext = createInclusionContext();
        for (const variable of this.getExportedVariablesByName().values()) {
            this.includeVariable(variable, UNKNOWN_PATH, inclusionContext);
            variable.deoptimizePath(UNKNOWN_PATH);
            if (variable instanceof ExternalVariable) {
                variable.module.reexported = true;
            }
        }
    }
    includeAllInBundle() {
        this.ast.include(createInclusionContext(), true);
        this.includeAllExports();
    }
    includeModuleInExecution() {
        if (!this.isExecuted) {
            markModuleAndImpureDependenciesAsExecuted(this);
            this.graph.needsTreeshakingPass = true;
        }
    }
    isIncluded() {
        // Modules where this.ast is missing have been loaded via this.load and are
        // not yet fully processed, hence they cannot be included.
        return (this.ast &&
            (this.ast.included ||
                this.namespace.included ||
                this.importedFromNotTreeshaken ||
                this.exportShimVariable.included));
    }
    linkImports() {
        this.addModulesToImportDescriptions(this.importDescriptions);
        this.addModulesToImportDescriptions(this.reexportDescriptions);
        const externalExportAllModules = [];
        for (const source of this.exportAllSources) {
            const module = this.graph.modulesById.get(this.resolvedIds[source].id);
            if (module instanceof ExternalModule) {
                externalExportAllModules.push(module);
                continue;
            }
            this.exportAllModules.push(module);
        }
        this.exportAllModules.push(...externalExportAllModules);
    }
    log(level, properties, pos) {
        this.addLocationToLogProps(properties, pos);
        this.options.onLog(level, properties);
    }
    render(options) {
        const source = this.magicString.clone();
        this.ast.render(source, options);
        source.trim();
        const { usesTopLevelAwait } = this.astContext;
        if (usesTopLevelAwait && options.format !== 'es' && options.format !== 'system') {
            return parseAst_js.error(parseAst_js.logInvalidFormatForTopLevelAwait(this.id, options.format));
        }
        return { source, usesTopLevelAwait };
    }
    async setSource({ ast, code, customTransformCache, originalCode, originalSourcemap, resolvedIds, sourcemapChain, transformDependencies, transformFiles, safeVariableNames, ...moduleOptions }) {
        timeStart('generate ast', 3);
        if (code.startsWith('#!')) {
            const shebangEndPosition = code.indexOf('\n');
            this.shebang = code.slice(2, shebangEndPosition);
        }
        this.info.code = code;
        this.info.safeVariableNames = safeVariableNames;
        this.originalCode = originalCode;
        // We need to call decodedSourcemap on the input in case they were hydrated from json in the cache and don't
        // have the lazy evaluation cache configured. Right now this isn't enforced by the type system because the
        // RollupCache stores `ExistingDecodedSourcemap` instead of `ExistingRawSourcemap`
        this.originalSourcemap = decodedSourcemap(originalSourcemap);
        this.sourcemapChain = sourcemapChain.map(mapOrMissing => mapOrMissing.missing ? mapOrMissing : decodedSourcemap(mapOrMissing));
        // If coming from cache and this value is already fully decoded, we want to re-encode here to save memory.
        resetSourcemapCache(this.originalSourcemap, this.sourcemapChain);
        if (transformFiles) {
            this.transformFiles = transformFiles;
        }
        this.transformDependencies = transformDependencies;
        this.customTransformCache = customTransformCache;
        this.updateOptions(moduleOptions);
        this.resolvedIds = resolvedIds ?? Object.create(null);
        // By default, `id` is the file name. Custom resolvers and loaders
        // can change that, but it makes sense to use it for the source file name
        const fileName = this.id;
        this.magicString = new MagicString(code, {
            filename: (this.excludeFromSourcemap ? null : fileName), // don't include plugin helpers in sourcemap
            indentExclusionRanges: []
        });
        this.astContext = {
            addDynamicImport: this.addDynamicImport.bind(this),
            addExport: this.addExport.bind(this),
            addImport: this.addImport.bind(this),
            addImportMeta: this.addImportMeta.bind(this),
            addImportSource: this.addImportSource.bind(this),
            code, // Only needed for debugging
            deoptimizationTracker: this.graph.deoptimizationTracker,
            error: this.error.bind(this),
            fileName, // Needed for warnings
            getImportedJsxFactoryVariable: this.getImportedJsxFactoryVariable.bind(this),
            getModuleExecIndex: () => this.execIndex,
            getModuleName: this.basename.bind(this),
            getNodeConstructor: (name) => nodeConstructors[name] || nodeConstructors.UnknownNode,
            importDescriptions: this.importDescriptions,
            includeDynamicImport: this.includeDynamicImport.bind(this),
            includeVariableInModule: this.includeVariableInModule.bind(this),
            log: this.log.bind(this),
            magicString: this.magicString,
            manualPureFunctions: this.graph.pureFunctions,
            module: this,
            moduleContext: this.context,
            newlyIncludedVariableInits: this.graph.newlyIncludedVariableInits,
            options: this.options,
            requestTreeshakingPass: () => (this.graph.needsTreeshakingPass = true),
            traceExport: (name) => this.getVariableForExportName(name),
            traceVariable: this.traceVariable.bind(this),
            usesTopLevelAwait: false
        };
        this.scope = new ModuleScope(this.graph.scope, this.astContext, this.importDescriptions);
        this.namespace = new NamespaceVariable(this.astContext);
        const programParent = { context: this.astContext, type: 'Module' };
        if (ast) {
            this.ast = new nodeConstructors[ast.type](programParent, this.scope).parseNode(ast);
            this.info.ast = ast;
        }
        else {
            // Measuring asynchronous code does not provide reasonable results
            timeEnd('generate ast', 3);
            const astBuffer = await native_js.parseAsync(code, false, this.options.jsx !== false);
            timeStart('generate ast', 3);
            this.ast = convertProgram(astBuffer, programParent, this.scope);
            // Make lazy and apply LRU cache to not hog the memory
            Object.defineProperty(this.info, 'ast', {
                get: () => {
                    if (this.graph.astLru.has(fileName)) {
                        return this.graph.astLru.get(fileName);
                    }
                    else {
                        const parsedAst = this.tryParse();
                        // If the cache is not disabled, we need to keep the AST in memory
                        // until the end when the cache is generated
                        if (this.options.cache !== false) {
                            Object.defineProperty(this.info, 'ast', {
                                value: parsedAst
                            });
                            return parsedAst;
                        }
                        // Otherwise, we keep it in a small LRU cache to not hog too much
                        // memory but allow the same AST to be requested several times.
                        this.graph.astLru.set(fileName, parsedAst);
                        return parsedAst;
                    }
                }
            });
        }
        timeEnd('generate ast', 3);
    }
    toJSON() {
        return {
            ast: this.info.ast,
            attributes: this.info.attributes,
            code: this.info.code,
            customTransformCache: this.customTransformCache,
            dependencies: Array.from(this.dependencies, getId),
            id: this.id,
            meta: this.info.meta,
            moduleSideEffects: this.info.moduleSideEffects,
            originalCode: this.originalCode,
            originalSourcemap: this.originalSourcemap,
            resolvedIds: this.resolvedIds,
            safeVariableNames: this.info.safeVariableNames,
            sourcemapChain: this.sourcemapChain,
            syntheticNamedExports: this.info.syntheticNamedExports,
            transformDependencies: this.transformDependencies,
            transformFiles: this.transformFiles
        };
    }
    traceVariable(name, { importerForSideEffects, isExportAllSearch, searchedNamesAndModules, sideEffectModules, exportOrReexportModules } = parseAst_js.EMPTY_OBJECT) {
        const localVariable = this.scope.variables.get(name);
        if (localVariable) {
            return localVariable;
        }
        const importDescription = this.importDescriptions.get(name);
        if (importDescription) {
            const otherModule = importDescription.module;
            if (otherModule instanceof Module && importDescription.name === '*') {
                return otherModule.namespace;
            }
            const [declaration, options] = getVariableForExportNameRecursive(otherModule, importDescription.name, importerForSideEffects || this, isExportAllSearch, searchedNamesAndModules, [this.id], sideEffectModules, exportOrReexportModules);
            if (!declaration) {
                return this.error(parseAst_js.logMissingExport(importDescription.name, this.id, otherModule.id, !!options?.missingButExportExists), importDescription.start);
            }
            return declaration;
        }
        return null;
    }
    updateOptions({ meta, moduleSideEffects, syntheticNamedExports }) {
        if (moduleSideEffects != null) {
            this.info.moduleSideEffects = moduleSideEffects;
        }
        if (syntheticNamedExports != null) {
            this.info.syntheticNamedExports = syntheticNamedExports;
        }
        if (meta != null) {
            Object.assign(this.info.meta, meta);
        }
    }
    addDynamicImport(node) {
        let argument = node.sourceAstNode;
        if (argument.type === parseAst_js.TemplateLiteral) {
            if (argument.quasis.length === 1 &&
                typeof argument.quasis[0].value.cooked === 'string') {
                argument = argument.quasis[0].value.cooked;
            }
        }
        else if (argument.type === parseAst_js.Literal &&
            typeof argument.value === 'string') {
            argument = argument.value;
        }
        this.dynamicImports.push({ argument, id: null, node });
    }
    assertUniqueExportName(name, nodeStart) {
        if (this.exportDescriptions.has(name) || this.reexportDescriptions.has(name)) {
            this.error(parseAst_js.logDuplicateExportError(name), nodeStart);
        }
    }
    addExport(node) {
        if (node instanceof ExportDefaultDeclaration) {
            // export default foo;
            this.assertUniqueExportName('default', node.start);
            this.exportDescriptions.set('default', {
                identifier: node.variable.getAssignedVariableName(),
                localName: 'default'
            });
        }
        else if (node instanceof ExportAllDeclaration) {
            const source = node.source.value;
            this.addSource(source, node);
            if (node.exported) {
                // export * as name from './other'
                const name = node.exported instanceof Literal ? node.exported.value : node.exported.name;
                this.assertUniqueExportName(name, node.exported.start);
                this.reexportDescriptions.set(name, {
                    localName: '*',
                    module: null, // filled in later,
                    source,
                    start: node.start
                });
            }
            else {
                // export * from './other'
                this.exportAllSources.add(source);
            }
        }
        else if (node.source instanceof Literal) {
            // export { name } from './other'
            const source = node.source.value;
            this.addSource(source, node);
            for (const { exported, local, start } of node.specifiers) {
                const name = exported instanceof Literal ? exported.value : exported.name;
                this.assertUniqueExportName(name, start);
                this.reexportDescriptions.set(name, {
                    localName: local instanceof Literal ? local.value : local.name,
                    module: null, // filled in later,
                    source,
                    start
                });
            }
        }
        else if (node.declaration) {
            const declaration = node.declaration;
            if (declaration instanceof VariableDeclaration) {
                // export var { foo, bar } = ...
                // export var foo = 1, bar = 2;
                for (const declarator of declaration.declarations) {
                    for (const localName of extractAssignedNames(declarator.id)) {
                        this.assertUniqueExportName(localName, declarator.id.start);
                        this.exportDescriptions.set(localName, { identifier: null, localName });
                    }
                }
            }
            else {
                // export function foo () {}
                const localName = declaration.id.name;
                this.assertUniqueExportName(localName, declaration.id.start);
                this.exportDescriptions.set(localName, { identifier: null, localName });
            }
        }
        else {
            // export { foo, bar, baz }
            for (const { local, exported } of node.specifiers) {
                // except for reexports, local must be an Identifier
                const localName = local.name;
                const exportedName = exported instanceof Identifier ? exported.name : exported.value;
                this.assertUniqueExportName(exportedName, exported.start);
                this.exportDescriptions.set(exportedName, { identifier: null, localName });
            }
        }
    }
    addImport(node) {
        const source = node.source.value;
        this.addSource(source, node);
        for (const specifier of node.specifiers) {
            const localName = specifier.local.name;
            if (this.scope.variables.has(localName) || this.importDescriptions.has(localName)) {
                this.error(parseAst_js.logRedeclarationError(localName), specifier.local.start);
            }
            const name = node.phase === 'source'
                ? SOURCE_PHASE_IMPORT
                : specifier instanceof ImportDefaultSpecifier
                    ? 'default'
                    : specifier instanceof ImportNamespaceSpecifier
                        ? '*'
                        : specifier.imported instanceof Identifier
                            ? specifier.imported.name
                            : specifier.imported.value;
            this.importDescriptions.set(localName, {
                module: null, // filled in later
                name,
                phase: node.phase === 'source' ? 'source' : 'instance',
                source,
                start: specifier.start
            });
        }
    }
    addImportSource(importSource) {
        if (importSource && !this.sourcesWithAttributes.has(importSource)) {
            this.sourcesWithAttributes.set(importSource, parseAst_js.EMPTY_OBJECT);
        }
    }
    addImportMeta(node) {
        this.importMetas.push(node);
    }
    addLocationToLogProps(properties, pos) {
        properties.id = this.id;
        properties.pos = pos;
        let code = this.info.code;
        const location = parseAst_js.locate(code, pos, { offsetLine: 1 });
        if (location) {
            let { column, line } = location;
            try {
                ({ column, line } = getOriginalLocation(this.sourcemapChain, { column, line }));
                code = this.originalCode;
            }
            catch (error_) {
                this.options.onLog(parseAst_js.LOGLEVEL_WARN, parseAst_js.logInvalidSourcemapForError(error_, this.id, column, line, pos));
            }
            parseAst_js.augmentCodeLocation(properties, { column, line }, code, this.id);
        }
    }
    addModulesToImportDescriptions(importDescription) {
        for (const specifier of importDescription.values()) {
            const { id } = this.resolvedIds[specifier.source];
            specifier.module = this.graph.modulesById.get(id);
        }
    }
    addRelevantSideEffectDependencies(relevantDependencies, necessaryDependencies, alwaysCheckedDependencies) {
        const handledDependencies = new Set();
        const addSideEffectDependencies = (possibleDependencies) => {
            for (const dependency of possibleDependencies) {
                if (handledDependencies.has(dependency)) {
                    continue;
                }
                handledDependencies.add(dependency);
                if (necessaryDependencies.has(dependency)) {
                    relevantDependencies.add(dependency);
                    continue;
                }
                if (!(dependency.info.moduleSideEffects || alwaysCheckedDependencies.has(dependency))) {
                    continue;
                }
                if (dependency instanceof ExternalModule || dependency.hasEffects()) {
                    relevantDependencies.add(dependency);
                    continue;
                }
                addSideEffectDependencies(dependency.dependencies);
            }
        };
        addSideEffectDependencies(this.dependencies);
        addSideEffectDependencies(alwaysCheckedDependencies);
    }
    addSource(source, declaration) {
        const parsedAttributes = getAttributesFromImportExportDeclaration(declaration.attributes);
        const existingAttributes = this.sourcesWithAttributes.get(source);
        if (existingAttributes) {
            if (doAttributesDiffer(existingAttributes, parsedAttributes)) {
                this.log(parseAst_js.LOGLEVEL_WARN, parseAst_js.logInconsistentImportAttributes(existingAttributes, parsedAttributes, source, this.id), declaration.start);
            }
        }
        else {
            this.sourcesWithAttributes.set(source, parsedAttributes);
        }
        if (declaration.phase === 'source') {
            this.sourcePhaseSources.add(source);
        }
    }
    getImportedJsxFactoryVariable(baseName, nodeStart, importSource) {
        const { id } = this.resolvedIds[importSource];
        const module = this.graph.modulesById.get(id);
        const [variable] = module.getVariableForExportName(baseName, { importChain: [this.id] });
        if (!variable) {
            return this.error(parseAst_js.logMissingJsxExport(baseName, id, this.id), nodeStart);
        }
        return variable;
    }
    getVariableFromNamespaceReexports(name, importerForSideEffects, searchedNamesAndModules, importChain) {
        let foundSyntheticDeclaration = null;
        const foundInternalDeclarations = new Map();
        const foundExternalDeclarations = new Set();
        const sideEffectModules = new Set();
        const exportOrReexportModules = new Set();
        for (const module of this.exportAllModules) {
            // Synthetic namespaces should not hide "regular" exports of the same name
            if (module.info.syntheticNamedExports === name) {
                continue;
            }
            const [variable, options] = getVariableForExportNameRecursive(module, name, importerForSideEffects, true, 
            // We are creating a copy to handle the case where the same binding is
            // imported through different namespace reexports gracefully
            copyNameToModulesMap(searchedNamesAndModules), importChain, sideEffectModules, exportOrReexportModules);
            if (module instanceof ExternalModule || options?.indirectExternal) {
                foundExternalDeclarations.add(variable);
            }
            else if (variable instanceof SyntheticNamedExportVariable) {
                if (!foundSyntheticDeclaration) {
                    foundSyntheticDeclaration = variable;
                }
            }
            else if (variable) {
                foundInternalDeclarations.set(variable, module);
            }
        }
        if (foundInternalDeclarations.size > 0) {
            const foundDeclarationList = [...foundInternalDeclarations];
            const usedDeclaration = foundDeclarationList[0][0];
            if (foundDeclarationList.length === 1) {
                return [usedDeclaration, { exportOrReexportModules, sideEffectModules }];
            }
            this.options.onLog(parseAst_js.LOGLEVEL_WARN, parseAst_js.logNamespaceConflict(name, this.id, foundDeclarationList.map(([, module]) => module.id)));
            // TODO we are pretending it was not found while it should behave like "undefined"
            return [null];
        }
        if (foundExternalDeclarations.size > 0) {
            const foundDeclarationList = [...foundExternalDeclarations];
            const usedDeclaration = foundDeclarationList[0];
            if (foundDeclarationList.length > 1) {
                this.options.onLog(parseAst_js.LOGLEVEL_WARN, parseAst_js.logAmbiguousExternalNamespaces(name, this.id, usedDeclaration.module.id, foundDeclarationList.map(declaration => declaration.module.id)));
            }
            return [
                usedDeclaration,
                { exportOrReexportModules, indirectExternal: true, sideEffectModules }
            ];
        }
        if (foundSyntheticDeclaration) {
            return [foundSyntheticDeclaration, { exportOrReexportModules, sideEffectModules }];
        }
        return [null];
    }
    includeAndGetAdditionalMergedNamespaces() {
        const externalNamespaces = new Set();
        const syntheticNamespaces = new Set();
        for (const module of [this, ...this.exportAllModules]) {
            if (module instanceof ExternalModule) {
                const [externalVariable] = module.getVariableForExportName('*', {
                    importChain: [this.id]
                });
                externalVariable.includePath(UNKNOWN_PATH, createInclusionContext());
                this.includedImports.add(externalVariable);
                externalNamespaces.add(externalVariable);
            }
            else if (module.info.syntheticNamedExports) {
                const syntheticNamespace = module.getSyntheticNamespace();
                syntheticNamespace.includePath(UNKNOWN_PATH, createInclusionContext());
                this.includedImports.add(syntheticNamespace);
                syntheticNamespaces.add(syntheticNamespace);
            }
        }
        return [...syntheticNamespaces, ...externalNamespaces];
    }
    includeDynamicImport(node) {
        const { resolution } = node;
        if (resolution instanceof Module) {
            if (!resolution.includedDynamicImporters.includes(this)) {
                resolution.includedDynamicImporters.push(this);
                // If a module has a top-level await, removing this entry can create
                // deadlocks.
                if (this.astContext.usesTopLevelAwait) {
                    resolution.includedTopLevelAwaitingDynamicImporters.add(this);
                }
            }
        }
    }
    includeVariable(variable, path, context) {
        const { included, module: variableModule } = variable;
        variable.includePath(path, context);
        if (included) {
            if (variableModule instanceof Module && variableModule !== this) {
                getAndExtendSideEffectModules(variable, this);
            }
            return;
        }
        this.graph.needsTreeshakingPass = true;
        if (!(variableModule instanceof Module)) {
            return;
        }
        variableModule.includeModuleInExecution();
        if (variableModule !== this) {
            const sideEffectModules = getAndExtendSideEffectModules(variable, this);
            for (const module of sideEffectModules) {
                module.includeModuleInExecution();
            }
        }
    }
    includeVariableInModule(variable, path, context) {
        this.includeVariable(variable, path, context);
        const variableModule = variable.module;
        if (variableModule && variableModule !== this) {
            this.includedImports.add(variable);
        }
    }
    shimMissingExport(name) {
        this.options.onLog(parseAst_js.LOGLEVEL_WARN, parseAst_js.logShimmedExport(this.id, name));
        this.exportDescriptions.set(name, MISSING_EXPORT_SHIM_DESCRIPTION);
    }
    tryParse() {
        try {
            return parseAst_js.parseAst(this.info.code, { jsx: this.options.jsx !== false });
        }
        catch (error_) {
            return this.error(parseAst_js.logModuleParseError(error_, this.id), error_.pos);
        }
    }
}
// if there is a cyclic import in the reexport chain, we should not
// import from the original module but from the cyclic module to not
// mess up execution order.
function setAlternativeExporterIfCyclic(variable, importer, reexporter) {
    if (variable.module instanceof Module && variable.module !== reexporter) {
        const exporterCycles = variable.module.cycles;
        if (exporterCycles.size > 0) {
            const importerCycles = reexporter.cycles;
            for (const cycleSymbol of importerCycles) {
                if (exporterCycles.has(cycleSymbol)) {
                    importer.alternativeReexportModules.set(variable, reexporter);
                    break;
                }
            }
        }
    }
}
const copyNameToModulesMap = (searchedNamesAndModules) => searchedNamesAndModules &&
    new Map(Array.from(searchedNamesAndModules, ([name, modules]) => [name, new Set(modules)]));
const sortExportedVariables = ([a], [b]) => a < b ? -1 : a > b ? 1 : 0;

const concatSeparator = (out, next) => (next ? `${out}\n${next}` : out);
const concatDblSeparator = (out, next) => (next ? `${out}\n\n${next}` : out);
async function createAddons(options, outputPluginDriver, chunk) {
    try {
        let [banner, footer, intro, outro] = await Promise.all([
            outputPluginDriver.hookReduceValue('banner', options.banner(chunk), [chunk], concatSeparator),
            outputPluginDriver.hookReduceValue('footer', options.footer(chunk), [chunk], concatSeparator),
            outputPluginDriver.hookReduceValue('intro', options.intro(chunk), [chunk], concatDblSeparator),
            outputPluginDriver.hookReduceValue('outro', options.outro(chunk), [chunk], concatDblSeparator)
        ]);
        if (intro)
            intro += '\n\n';
        if (outro)
            outro = `\n\n${outro}`;
        if (banner)
            banner += '\n';
        if (footer)
            footer = '\n' + footer;
        return { banner, footer, intro, outro };
    }
    catch (error_) {
        return parseAst_js.error(parseAst_js.logAddonNotGenerated(error_.message, error_.hook, error_.plugin));
    }
}

const DECONFLICT_IMPORTED_VARIABLES_BY_FORMAT = {
    amd: deconflictImportsOther,
    cjs: deconflictImportsOther,
    es: deconflictImportsEsmOrSystem,
    iife: deconflictImportsOther,
    system: deconflictImportsEsmOrSystem,
    umd: deconflictImportsOther
};
function deconflictChunk(modules, dependenciesToBeDeconflicted, imports, usedNames, format, interop, preserveModules, externalLiveBindings, chunkByModule, externalChunkByModule, syntheticExports, exportNamesByVariable, accessedGlobalsByScope, includedNamespaces) {
    const reversedModules = [...modules].reverse();
    for (const module of reversedModules) {
        module.scope.addUsedOutsideNames(usedNames, accessedGlobalsByScope);
    }
    deconflictTopLevelVariables(usedNames, reversedModules, includedNamespaces);
    DECONFLICT_IMPORTED_VARIABLES_BY_FORMAT[format](usedNames, imports, dependenciesToBeDeconflicted, interop, preserveModules, externalLiveBindings, chunkByModule, externalChunkByModule, syntheticExports);
    for (const module of reversedModules) {
        module.scope.deconflict(format, exportNamesByVariable, accessedGlobalsByScope);
    }
}
function deconflictImportsEsmOrSystem(usedNames, imports, dependenciesToBeDeconflicted, _interop, preserveModules, _externalLiveBindings, chunkByModule, externalChunkByModule, syntheticExports) {
    // This is needed for namespace reexports
    for (const dependency of dependenciesToBeDeconflicted.dependencies) {
        if (preserveModules || dependency instanceof ExternalChunk) {
            dependency.variableName = getSafeName(dependency.suggestedVariableName, usedNames, null);
        }
    }
    for (const variable of imports) {
        const module = variable.module;
        const name = variable.name;
        if (variable.isNamespace && (preserveModules || module instanceof ExternalModule)) {
            variable.setRenderNames(null, (module instanceof ExternalModule
                ? externalChunkByModule.get(module)
                : chunkByModule.get(module)).variableName);
        }
        else if (module instanceof ExternalModule && variable.isSourcePhase) {
            variable.setRenderNames(null, getSafeName(module.suggestedVariableName + '__source', usedNames, variable.forbiddenNames));
        }
        else if (module instanceof ExternalModule && name === 'default') {
            variable.setRenderNames(null, getSafeName([...module.exportedVariables].some(([exportedVariable, exportedName]) => exportedName === '*' && exportedVariable.included)
                ? module.suggestedVariableName + '__default'
                : module.suggestedVariableName, usedNames, variable.forbiddenNames));
        }
        else {
            variable.setRenderNames(null, getSafeName(makeLegal(name), usedNames, variable.forbiddenNames));
        }
    }
    for (const variable of syntheticExports) {
        variable.setRenderNames(null, getSafeName(variable.name, usedNames, variable.forbiddenNames));
    }
}
function deconflictImportsOther(usedNames, imports, { deconflictedDefault, deconflictedNamespace, dependencies }, interop, preserveModules, externalLiveBindings, chunkByModule, externalChunkByModule) {
    for (const chunk of dependencies) {
        chunk.variableName = getSafeName(chunk.suggestedVariableName, usedNames, null);
    }
    for (const chunk of deconflictedNamespace) {
        chunk.namespaceVariableName = getSafeName(`${chunk.suggestedVariableName}__namespace`, usedNames, null);
    }
    for (const externalModule of deconflictedDefault) {
        externalModule.defaultVariableName =
            deconflictedNamespace.has(externalModule) &&
                canDefaultBeTakenFromNamespace(interop(externalModule.id), externalLiveBindings)
                ? externalModule.namespaceVariableName
                : getSafeName(`${externalModule.suggestedVariableName}__default`, usedNames, null);
    }
    for (const variable of imports) {
        const module = variable.module;
        if (module instanceof ExternalModule) {
            const chunk = externalChunkByModule.get(module);
            const name = variable.name;
            if (name === 'default') {
                const moduleInterop = interop(module.id);
                const variableName = defaultInteropHelpersByInteropType[moduleInterop]
                    ? chunk.defaultVariableName
                    : chunk.variableName;
                if (isDefaultAProperty(moduleInterop, externalLiveBindings)) {
                    variable.setRenderNames(variableName, 'default');
                }
                else {
                    variable.setRenderNames(null, variableName);
                }
            }
            else if (name === '*') {
                variable.setRenderNames(null, namespaceInteropHelpersByInteropType[interop(module.id)]
                    ? chunk.namespaceVariableName
                    : chunk.variableName);
            }
            else {
                // if the second parameter is `null`, it uses its "name" for the property name
                variable.setRenderNames(chunk.variableName, null);
            }
        }
        else {
            const chunk = chunkByModule.get(module);
            if (preserveModules && variable.isNamespace) {
                variable.setRenderNames(null, chunk.exportMode === 'default' ? chunk.namespaceVariableName : chunk.variableName);
            }
            else if (chunk.exportMode === 'default') {
                variable.setRenderNames(null, chunk.variableName);
            }
            else {
                variable.setRenderNames(chunk.variableName, chunk.getVariableExportName(variable));
            }
        }
    }
}
function deconflictTopLevelVariables(usedNames, modules, includedNamespaces) {
    for (const module of modules) {
        module.info.safeVariableNames ||= {};
        for (const variable of module.scope.variables.values()) {
            if (variable.included &&
                // this will only happen for exports in some formats
                !(variable.renderBaseName ||
                    (variable instanceof ExportDefaultVariable && variable.getOriginalVariable() !== variable))) {
                // We need to make sure that variables that corresponding to object
                // prototype methods are not accidentally matched.
                const cachedSafeVariableName = Object.getOwnPropertyDescriptor(module.info.safeVariableNames, variable.name)?.value;
                if (cachedSafeVariableName && !usedNames.has(cachedSafeVariableName)) {
                    usedNames.add(cachedSafeVariableName);
                    variable.setRenderNames(null, cachedSafeVariableName);
                    continue;
                }
                variable.setRenderNames(null, getSafeName(variable.name, usedNames, variable.forbiddenNames));
                module.info.safeVariableNames[variable.name] = variable.renderName;
            }
        }
        if (includedNamespaces.has(module)) {
            const namespace = module.namespace;
            namespace.setRenderNames(null, getSafeName(namespace.name, usedNames, namespace.forbiddenNames));
        }
    }
}

function assignExportsToMangledNames(exports$1, exportsByName, exportNamesByVariable) {
    let nameIndex = 0;
    for (const variable of exports$1) {
        let [exportName] = variable.name;
        if (exportsByName.has(exportName)) {
            do {
                exportName = toBase64(++nameIndex);
                // skip past leading number identifiers
                if (exportName.charCodeAt(0) === 49 /* '1' */) {
                    nameIndex += 9 * 64 ** (exportName.length - 1);
                    exportName = toBase64(nameIndex);
                }
            } while (RESERVED_NAMES.has(exportName) || exportsByName.has(exportName));
        }
        exportsByName.set(exportName, variable);
        exportNamesByVariable.set(variable, [exportName]);
    }
}
function assignExportsToNames(exports$1, exportsByName, exportNamesByVariable) {
    for (const variable of exports$1) {
        let nameIndex = 0;
        let exportName = variable.name;
        while (exportsByName.has(exportName)) {
            exportName = variable.name + '$' + ++nameIndex;
        }
        exportsByName.set(exportName, variable);
        exportNamesByVariable.set(variable, [exportName]);
    }
}

function getExportMode(chunk, { exports: exportMode, name, format }, facadeModuleId, log) {
    const exportKeys = chunk.getExportNames();
    if (exportMode === 'default') {
        if (exportKeys.length !== 1 || exportKeys[0] !== 'default') {
            return parseAst_js.error(parseAst_js.logIncompatibleExportOptionValue('default', exportKeys, facadeModuleId));
        }
    }
    else if (exportMode === 'none' && exportKeys.length > 0) {
        return parseAst_js.error(parseAst_js.logIncompatibleExportOptionValue('none', exportKeys, facadeModuleId));
    }
    if (exportMode === 'auto') {
        if (exportKeys.length === 0) {
            exportMode = 'none';
        }
        else if (exportKeys.length === 1 && exportKeys[0] === 'default') {
            exportMode = 'default';
        }
        else {
            if (format !== 'es' && format !== 'system' && exportKeys.includes('default')) {
                log(parseAst_js.LOGLEVEL_WARN, parseAst_js.logMixedExport(facadeModuleId, name));
            }
            exportMode = 'named';
        }
    }
    return exportMode;
}

function guessIndentString(code) {
    const lines = code.split('\n');
    const tabbed = lines.filter(line => /^\t+/.test(line));
    const spaced = lines.filter(line => /^ {2,}/.test(line));
    if (tabbed.length === 0 && spaced.length === 0) {
        return null;
    }
    // More lines tabbed than spaced? Assume tabs, and
    // default to tabs in the case of a tie (or nothing
    // to go on)
    if (tabbed.length >= spaced.length) {
        return '\t';
    }
    // Otherwise, we need to guess the multiple
    const min = spaced.reduce((previous, current) => {
        const numberSpaces = /^ +/.exec(current)[0].length;
        return Math.min(numberSpaces, previous);
    }, Infinity);
    return ' '.repeat(min);
}
function getIndentString(modules, options) {
    if (options.indent !== true)
        return options.indent;
    for (const module of modules) {
        const indent = guessIndentString(module.originalCode);
        if (indent !== null)
            return indent;
    }
    return '\t';
}

function getStaticDependencies(chunk, orderedModules, chunkByModule, externalChunkByModule) {
    const staticDependencyBlocks = [];
    const handledDependencies = new Set();
    for (let modulePos = orderedModules.length - 1; modulePos >= 0; modulePos--) {
        const module = orderedModules[modulePos];
        if (!handledDependencies.has(module)) {
            const staticDependencies = [];
            addStaticDependencies(module, staticDependencies, handledDependencies, chunk, chunkByModule, externalChunkByModule);
            staticDependencyBlocks.unshift(staticDependencies);
        }
    }
    const dependencies = new Set();
    for (const block of staticDependencyBlocks) {
        for (const dependency of block) {
            dependencies.add(dependency);
        }
    }
    return dependencies;
}
function addStaticDependencies(module, staticDependencies, handledModules, chunk, chunkByModule, externalChunkByModule) {
    const dependencies = module.getDependenciesToBeIncluded();
    for (const dependency of dependencies) {
        if (dependency instanceof ExternalModule) {
            staticDependencies.push(externalChunkByModule.get(dependency));
            continue;
        }
        const dependencyChunk = chunkByModule.get(dependency);
        if (dependencyChunk !== chunk) {
            staticDependencies.push(dependencyChunk);
            continue;
        }
        if (!handledModules.has(dependency)) {
            handledModules.add(dependency);
            addStaticDependencies(dependency, staticDependencies, handledModules, chunk, chunkByModule, externalChunkByModule);
        }
    }
}

const RESERVED_USED_NAMES = [
    'Object',
    'Promise',
    'module',
    'exports',
    'require',
    '__filename',
    '__dirname',
    ...HELPER_NAMES
];
const NON_ASSET_EXTENSIONS = new Set([
    '.js',
    '.jsx',
    '.ts',
    '.tsx',
    '.mjs',
    '.mts',
    '.cjs',
    '.cts'
]);
function getGlobalName(chunk, globals, hasExports, log) {
    const globalName = typeof globals === 'function' ? globals(chunk.id) : globals[chunk.id];
    if (globalName) {
        return globalName;
    }
    if (hasExports) {
        log(parseAst_js.LOGLEVEL_WARN, parseAst_js.logMissingGlobalName(chunk.id, chunk.variableName));
        return chunk.variableName;
    }
}
class Chunk {
    constructor(orderedModules, inputOptions, outputOptions, unsetOptions, pluginDriver, modulesById, chunkByModule, externalChunkByModule, facadeChunkByModule, includedNamespaces, manualChunkAlias, getPlaceholder, bundle, inputBase, snippets) {
        this.orderedModules = orderedModules;
        this.inputOptions = inputOptions;
        this.outputOptions = outputOptions;
        this.unsetOptions = unsetOptions;
        this.pluginDriver = pluginDriver;
        this.modulesById = modulesById;
        this.chunkByModule = chunkByModule;
        this.externalChunkByModule = externalChunkByModule;
        this.facadeChunkByModule = facadeChunkByModule;
        this.includedNamespaces = includedNamespaces;
        this.manualChunkAlias = manualChunkAlias;
        this.getPlaceholder = getPlaceholder;
        this.bundle = bundle;
        this.inputBase = inputBase;
        this.snippets = snippets;
        this.dependencies = new Set();
        this.entryModules = [];
        this.exportMode = 'named';
        this.facadeModule = null;
        this.namespaceVariableName = '';
        this.variableName = '';
        this.isManualChunk = false;
        this.accessedGlobalsByScope = new Map();
        this.dynamicEntryModules = [];
        this.dynamicName = null;
        this.exportNamesByVariable = new Map();
        this.exports = new Set();
        this.exportsByName = new Map();
        this.fileName = null;
        this.implicitEntryModules = [];
        this.implicitlyLoadedBefore = new Set();
        this.imports = new Set();
        this.includedDynamicImports = null;
        this.includedReexportsByModule = new Map();
        // This may be updated in the constructor
        this.isEmpty = true;
        this.name = null;
        this.needsExportsShim = false;
        this.preRenderedChunkInfo = null;
        this.preliminaryFileName = null;
        this.preliminarySourcemapFileName = null;
        this.renderedChunkInfo = null;
        this.renderedDependencies = null;
        this.renderedModules = Object.create(null);
        this.sortedExportNames = null;
        this.strictFacade = false;
        /** Modules with 'allow-extension' that should have preserved exports within the chunk */
        this.allowExtensionModules = new Set();
        this.execIndex = orderedModules.length > 0 ? orderedModules[0].execIndex : Infinity;
        const chunkModules = new Set(orderedModules);
        for (const module of orderedModules) {
            chunkByModule.set(module, this);
            if (module.namespace.included && !outputOptions.preserveModules) {
                includedNamespaces.add(module);
            }
            if (this.isEmpty && module.isIncluded()) {
                this.isEmpty = false;
            }
            if (module.info.isEntry || outputOptions.preserveModules) {
                this.entryModules.push(module);
            }
            for (const importer of module.includedDynamicImporters) {
                if (!chunkModules.has(importer)) {
                    this.dynamicEntryModules.push(module);
                    // Modules with synthetic exports need an artificial namespace for dynamic imports
                    if (module.info.syntheticNamedExports) {
                        includedNamespaces.add(module);
                        this.exports.add(module.namespace);
                    }
                    // This only needs to run once
                    break;
                }
            }
            if (module.implicitlyLoadedAfter.size > 0) {
                this.implicitEntryModules.push(module);
            }
        }
        this.suggestedVariableName = makeLegal(this.generateVariableName());
        this.isManualChunk = manualChunkAlias !== null;
    }
    static generateFacade(inputOptions, outputOptions, unsetOptions, pluginDriver, modulesById, chunkByModule, externalChunkByModule, facadeChunkByModule, includedNamespaces, facadedModule, facadeName, getPlaceholder, bundle, inputBase, snippets) {
        const chunk = new Chunk([], inputOptions, outputOptions, unsetOptions, pluginDriver, modulesById, chunkByModule, externalChunkByModule, facadeChunkByModule, includedNamespaces, null, getPlaceholder, bundle, inputBase, snippets);
        chunk.assignFacadeName(facadeName, facadedModule);
        if (!facadeChunkByModule.has(facadedModule)) {
            facadeChunkByModule.set(facadedModule, chunk);
        }
        for (const dependency of facadedModule.getDependenciesToBeIncluded()) {
            chunk.dependencies.add(dependency instanceof Module
                ? chunkByModule.get(dependency)
                : externalChunkByModule.get(dependency));
        }
        if (!chunk.dependencies.has(chunkByModule.get(facadedModule)) &&
            facadedModule.info.moduleSideEffects &&
            facadedModule.hasEffects()) {
            chunk.dependencies.add(chunkByModule.get(facadedModule));
        }
        chunk.ensureReexportsAreAvailableForModule(facadedModule);
        chunk.facadeModule = facadedModule;
        chunk.strictFacade = true;
        return chunk;
    }
    canModuleBeFacade(module, exposedVariables) {
        const moduleExportNamesByVariable = module.getExportNamesByVariable();
        // All exports of this chunk need to be exposed by the candidate module
        for (const exposedVariable of this.exports) {
            if (!moduleExportNamesByVariable.has(exposedVariable)) {
                return false;
            }
        }
        // Additionally, we need to expose namespaces of dynamic entries that are not the facade module and exports from other entry modules
        for (const exposedVariable of exposedVariables) {
            if (!(exposedVariable.module === module ||
                moduleExportNamesByVariable.has(exposedVariable) ||
                (exposedVariable instanceof SyntheticNamedExportVariable &&
                    moduleExportNamesByVariable.has(exposedVariable.getBaseVariable())))) {
                return false;
            }
        }
        return true;
    }
    finalizeChunk(code, map, sourcemapFileName, hashesByPlaceholder) {
        const renderedChunkInfo = this.getRenderedChunkInfo();
        const finalize = (code) => replacePlaceholders(code, hashesByPlaceholder);
        const preliminaryFileName = renderedChunkInfo.fileName;
        const fileName = (this.fileName = finalize(preliminaryFileName));
        return {
            ...renderedChunkInfo,
            code,
            dynamicImports: renderedChunkInfo.dynamicImports.map(finalize),
            fileName,
            implicitlyLoadedBefore: renderedChunkInfo.implicitlyLoadedBefore.map(finalize),
            importedBindings: Object.fromEntries(Object.entries(renderedChunkInfo.importedBindings).map(([fileName, bindings]) => [
                finalize(fileName),
                bindings
            ])),
            imports: renderedChunkInfo.imports.map(finalize),
            map,
            preliminaryFileName,
            referencedFiles: renderedChunkInfo.referencedFiles.map(finalize),
            sourcemapFileName
        };
    }
    generateExports() {
        this.sortedExportNames = null;
        const remainingExports = new Set(this.exports);
        if (this.facadeModule !== null &&
            (this.facadeModule.preserveSignature !== false || this.strictFacade)) {
            const exportNamesByVariable = this.facadeModule.getExportNamesByVariable();
            for (const [variable, exportNames] of exportNamesByVariable) {
                this.exportNamesByVariable.set(variable, [...exportNames]);
                for (const exportName of exportNames) {
                    this.exportsByName.set(exportName, variable);
                }
                remainingExports.delete(variable);
            }
        }
        for (const module of this.allowExtensionModules) {
            const exportNamesByVariable = module.getExportNamesByVariable();
            for (const [variable, exportNames] of exportNamesByVariable) {
                this.exportNamesByVariable.set(variable, [...exportNames]);
                for (const exportName of exportNames) {
                    this.exportsByName.set(exportName, variable);
                }
                remainingExports.delete(variable);
            }
        }
        if (this.outputOptions.minifyInternalExports) {
            assignExportsToMangledNames(remainingExports, this.exportsByName, this.exportNamesByVariable);
        }
        else {
            assignExportsToNames(remainingExports, this.exportsByName, this.exportNamesByVariable);
        }
        if (this.outputOptions.preserveModules || (this.facadeModule && this.facadeModule.info.isEntry))
            this.exportMode = getExportMode(this, this.outputOptions, this.facadeModule.id, this.inputOptions.onLog);
    }
    generateFacades() {
        const facades = [];
        const entryModules = new Set([...this.entryModules, ...this.implicitEntryModules]);
        const exposedVariables = new Set(this.dynamicEntryModules.map(({ namespace }) => namespace));
        for (const module of entryModules) {
            if (module.preserveSignature === 'allow-extension') {
                const canPreserveExports = this.canPreserveModuleExports(module);
                if (canPreserveExports &&
                    !module.chunkFileNames.size &&
                    module.chunkNames.every(({ isUserDefined }) => !isUserDefined)) {
                    this.allowExtensionModules.add(module);
                    if (!this.facadeModule) {
                        this.facadeModule = module;
                        this.strictFacade = false;
                        this.assignFacadeName({}, module, this.outputOptions.preserveModules);
                    }
                    this.facadeChunkByModule.set(module, this);
                    continue;
                }
            }
            const requiredFacades = Array.from(new Set(module.chunkNames.filter(({ isUserDefined }) => isUserDefined).map(({ name }) => name)), 
            // mapping must run after Set 'name' dedupe
            name => ({
                name
            }));
            if (requiredFacades.length === 0 && module.isUserDefinedEntryPoint) {
                requiredFacades.push({});
            }
            requiredFacades.push(...Array.from(module.chunkFileNames, fileName => ({ fileName })));
            if (requiredFacades.length === 0) {
                requiredFacades.push({});
            }
            if (!this.facadeModule) {
                const needsStrictFacade = !this.outputOptions.preserveModules &&
                    (module.preserveSignature === 'strict' ||
                        (module.preserveSignature === 'exports-only' &&
                            module.getExportNamesByVariable().size > 0));
                if (!needsStrictFacade || this.canModuleBeFacade(module, exposedVariables)) {
                    this.facadeModule = module;
                    this.facadeChunkByModule.set(module, this);
                    if (module.preserveSignature) {
                        this.strictFacade = needsStrictFacade;
                    }
                    this.assignFacadeName(requiredFacades.shift(), module, this.outputOptions.preserveModules);
                }
            }
            for (const facadeName of requiredFacades) {
                facades.push(Chunk.generateFacade(this.inputOptions, this.outputOptions, this.unsetOptions, this.pluginDriver, this.modulesById, this.chunkByModule, this.externalChunkByModule, this.facadeChunkByModule, this.includedNamespaces, module, facadeName, this.getPlaceholder, this.bundle, this.inputBase, this.snippets));
            }
        }
        for (const module of this.dynamicEntryModules) {
            if (module.info.syntheticNamedExports)
                continue;
            if (!this.facadeModule && this.canModuleBeFacade(module, exposedVariables)) {
                this.facadeModule = module;
                this.facadeChunkByModule.set(module, this);
                this.strictFacade = true;
                this.dynamicName = getChunkNameFromModule(module);
            }
            else if (this.facadeModule === module &&
                !this.strictFacade &&
                this.canModuleBeFacade(module, exposedVariables)) {
                this.strictFacade = true;
            }
            else if (!this.facadeChunkByModule.get(module)?.strictFacade) {
                this.includedNamespaces.add(module);
                this.exports.add(module.namespace);
            }
        }
        if (!this.outputOptions.preserveModules) {
            this.addNecessaryImportsForFacades();
        }
        return facades;
    }
    canPreserveModuleExports(module) {
        const exportNamesByVariable = module.getExportNamesByVariable();
        // Check for conflicts - an export name is a conflict if it points to a different module or definition
        for (const [variable, exportNames] of exportNamesByVariable) {
            for (const exportName of exportNames) {
                const existingVariable = this.exportsByName.get(exportName);
                // It's ok if the same export name in two modules references the exact same variable
                if (existingVariable && existingVariable !== variable) {
                    return false;
                }
            }
        }
        // No actual conflicts found, add export names for future conflict checks
        for (const [variable, exportNames] of exportNamesByVariable) {
            for (const exportName of exportNames) {
                this.exportsByName.set(exportName, variable);
            }
        }
        return true;
    }
    getChunkName() {
        return (this.name ??= this.outputOptions.sanitizeFileName(this.getFallbackChunkName()));
    }
    getExportNames() {
        return (this.sortedExportNames ??= [...this.exportsByName.keys()].sort());
    }
    getFileName() {
        return this.fileName || this.getPreliminaryFileName().fileName;
    }
    getImportPath(importer) {
        return escapeId(parseAst_js.getImportPath(importer, this.getFileName(), this.outputOptions.format === 'amd' && !this.outputOptions.amd.forceJsExtensionForImports, true));
    }
    getPreliminaryFileName() {
        if (this.preliminaryFileName) {
            return this.preliminaryFileName;
        }
        let fileName;
        let hashPlaceholder = null;
        const { chunkFileNames, entryFileNames, file, format, preserveModules } = this.outputOptions;
        if (file) {
            fileName = path.basename(file);
        }
        else if (this.fileName === null) {
            const [pattern, patternName] = preserveModules || this.facadeModule?.isUserDefinedEntryPoint
                ? [entryFileNames, 'output.entryFileNames']
                : [chunkFileNames, 'output.chunkFileNames'];
            fileName = renderNamePattern(typeof pattern === 'function' ? pattern(this.getPreRenderedChunkInfo()) : pattern, patternName, {
                format: () => format,
                hash: size => hashPlaceholder ||
                    (hashPlaceholder = this.getPlaceholder(patternName, size || DEFAULT_HASH_SIZE)),
                name: () => this.getChunkName()
            });
            if (!hashPlaceholder) {
                fileName = makeUnique(fileName, this.bundle);
            }
        }
        else {
            fileName = this.fileName;
        }
        if (!hashPlaceholder) {
            this.bundle[fileName] = FILE_PLACEHOLDER;
        }
        // Caching is essential to not conflict with the file name reservation above
        return (this.preliminaryFileName = { fileName, hashPlaceholder });
    }
    getPreliminarySourcemapFileName() {
        if (this.preliminarySourcemapFileName) {
            return this.preliminarySourcemapFileName;
        }
        const { sourcemapFileNames, format } = this.outputOptions;
        if (!sourcemapFileNames) {
            return null;
        }
        let hashPlaceholder = null;
        const [pattern, patternName] = [sourcemapFileNames, 'output.sourcemapFileNames'];
        let sourcemapFileName = renderNamePattern(typeof pattern === 'function' ? pattern(this.getPreRenderedChunkInfo()) : pattern, patternName, {
            chunkhash: () => this.getPreliminaryFileName().hashPlaceholder || '',
            format: () => format,
            hash: size => hashPlaceholder ||
                (hashPlaceholder = this.getPlaceholder(patternName, size || DEFAULT_HASH_SIZE)),
            name: () => this.getChunkName()
        });
        if (!hashPlaceholder) {
            sourcemapFileName = makeUnique(sourcemapFileName, this.bundle);
        }
        return (this.preliminarySourcemapFileName = {
            fileName: sourcemapFileName,
            hashPlaceholder
        });
    }
    getRenderedChunkInfo() {
        if (this.renderedChunkInfo) {
            return this.renderedChunkInfo;
        }
        return (this.renderedChunkInfo = {
            ...this.getPreRenderedChunkInfo(),
            dynamicImports: this.getDynamicDependencies().map(resolveFileName),
            fileName: this.getFileName(),
            implicitlyLoadedBefore: Array.from(this.implicitlyLoadedBefore, resolveFileName),
            importedBindings: getImportedBindingsPerDependency(this.getRenderedDependencies(), resolveFileName),
            imports: Array.from(this.dependencies, resolveFileName),
            modules: this.renderedModules,
            referencedFiles: this.getReferencedFiles()
        });
    }
    getVariableExportName(variable) {
        if (this.outputOptions.preserveModules && variable instanceof NamespaceVariable) {
            return '*';
        }
        return this.exportNamesByVariable.get(variable)[0];
    }
    link() {
        this.dependencies = getStaticDependencies(this, this.orderedModules, this.chunkByModule, this.externalChunkByModule);
        for (const module of this.orderedModules) {
            this.addImplicitlyLoadedBeforeFromModule(module);
            this.setUpChunkImportsAndExportsForModule(module);
        }
    }
    inlineTransitiveImports() {
        const { facadeModule, dependencies, outputOptions } = this;
        const { hoistTransitiveImports, preserveModules } = outputOptions;
        // for static and dynamic entry points, add transitive dependencies to this
        // chunk's dependencies to avoid loading latency
        if (hoistTransitiveImports && !preserveModules && facadeModule !== null) {
            for (const dep of dependencies) {
                if (dep instanceof Chunk)
                    this.inlineChunkDependencies(dep);
            }
        }
    }
    async render() {
        const { exportMode, facadeModule, inputOptions: { onLog }, outputOptions, pluginDriver, snippets } = this;
        const { format, preserveModules } = outputOptions;
        const preliminaryFileName = this.getPreliminaryFileName();
        const preliminarySourcemapFileName = this.getPreliminarySourcemapFileName();
        const { accessedGlobals, indent, magicString, renderedSource, usedModules, usesTopLevelAwait } = this.renderModules(preliminaryFileName.fileName);
        const renderedDependencies = [...this.getRenderedDependencies().values()];
        const renderedExports = exportMode === 'none' ? [] : this.getChunkExportDeclarations(format);
        let hasExports = renderedExports.length > 0;
        let hasDefaultExport = false;
        for (const renderedDependency of renderedDependencies) {
            const { reexports } = renderedDependency;
            if (reexports?.length) {
                hasExports = true;
                if (!hasDefaultExport && reexports.some(reexport => reexport.reexported === 'default')) {
                    hasDefaultExport = true;
                }
                if (format === 'es') {
                    renderedDependency.reexports = reexports.filter(({ reexported }) => !renderedExports.find(({ exported }) => exported === reexported));
                }
            }
        }
        if (!hasDefaultExport) {
            for (const { exported } of renderedExports) {
                if (exported === 'default') {
                    hasDefaultExport = true;
                    break;
                }
            }
        }
        const { intro, outro, banner, footer } = await createAddons(outputOptions, pluginDriver, this.getRenderedChunkInfo());
        finalisers[format](renderedSource, {
            accessedGlobals,
            dependencies: renderedDependencies,
            exports: renderedExports,
            hasDefaultExport,
            hasExports,
            id: preliminaryFileName.fileName,
            indent,
            intro,
            isEntryFacade: preserveModules || (facadeModule !== null && facadeModule.info.isEntry),
            isModuleFacade: facadeModule !== null,
            log: onLog,
            namedExportsMode: exportMode !== 'default',
            outro,
            snippets,
            usesTopLevelAwait
        }, outputOptions);
        if (banner)
            magicString.prepend(banner);
        if (format === 'es' || format === 'cjs') {
            const shebang = facadeModule !== null && facadeModule.info.isEntry && facadeModule.shebang;
            if (shebang) {
                magicString.prepend(`#!${shebang}\n`);
            }
        }
        if (footer)
            magicString.append(footer);
        return {
            chunk: this,
            magicString,
            preliminaryFileName,
            preliminarySourcemapFileName,
            usedModules
        };
    }
    addImplicitlyLoadedBeforeFromModule(baseModule) {
        const { chunkByModule, implicitlyLoadedBefore } = this;
        for (const module of baseModule.implicitlyLoadedBefore) {
            const chunk = chunkByModule.get(module);
            if (chunk && chunk !== this) {
                implicitlyLoadedBefore.add(chunk);
            }
        }
    }
    addNecessaryImportsForFacades() {
        for (const [module, variables] of this.includedReexportsByModule) {
            if (this.includedNamespaces.has(module)) {
                for (const variable of variables) {
                    this.imports.add(variable);
                }
            }
        }
    }
    assignFacadeName({ fileName, name }, facadedModule, preservePath) {
        if (fileName) {
            this.fileName = fileName;
        }
        else {
            this.name = this.outputOptions.sanitizeFileName(name ||
                (preservePath
                    ? this.getPreserveModulesChunkNameFromModule(facadedModule)
                    : getChunkNameFromModule(facadedModule)));
        }
    }
    checkCircularDependencyImport(variable, importingModule) {
        const variableModule = variable.module;
        if (variableModule instanceof Module) {
            const exportChunk = this.chunkByModule.get(variableModule);
            let alternativeReexportModule;
            do {
                alternativeReexportModule = importingModule.alternativeReexportModules.get(variable);
                if (alternativeReexportModule) {
                    const exportingChunk = this.chunkByModule.get(alternativeReexportModule);
                    if (exportingChunk !== exportChunk) {
                        this.inputOptions.onLog(parseAst_js.LOGLEVEL_WARN, parseAst_js.logCyclicCrossChunkReexport(
                        // Namespaces do not have an export name
                        variableModule.getExportNamesByVariable().get(variable)?.[0] || '*', variableModule.id, alternativeReexportModule.id, importingModule.id, this.outputOptions.preserveModules));
                    }
                    importingModule = alternativeReexportModule;
                }
            } while (alternativeReexportModule);
        }
    }
    ensureReexportsAreAvailableForModule(module) {
        const includedReexports = [];
        const map = module.getExportNamesByVariable();
        for (const exportedVariable of map.keys()) {
            const isSynthetic = exportedVariable instanceof SyntheticNamedExportVariable;
            const importedVariable = isSynthetic ? exportedVariable.getBaseVariable() : exportedVariable;
            this.checkCircularDependencyImport(importedVariable, module);
            // When preserving modules, we do not create namespace objects but directly
            // use the actual namespaces, which would be broken by this logic.
            if (!(importedVariable instanceof NamespaceVariable && this.outputOptions.preserveModules)) {
                const exportingModule = importedVariable.module;
                if (exportingModule instanceof Module) {
                    const chunk = this.chunkByModule.get(exportingModule);
                    if (chunk && chunk !== this) {
                        chunk.exports.add(importedVariable);
                        includedReexports.push(importedVariable);
                        if (isSynthetic) {
                            this.imports.add(importedVariable);
                        }
                    }
                }
            }
        }
        if (includedReexports.length > 0) {
            this.includedReexportsByModule.set(module, includedReexports);
        }
    }
    generateVariableName() {
        if (this.manualChunkAlias) {
            return this.manualChunkAlias;
        }
        const moduleForNaming = this.entryModules[0] ||
            this.implicitEntryModules[0] ||
            this.dynamicEntryModules[0] ||
            this.orderedModules[this.orderedModules.length - 1];
        if (moduleForNaming) {
            return getChunkNameFromModule(moduleForNaming);
        }
        return 'chunk';
    }
    getChunkExportDeclarations(format) {
        const exports$1 = [];
        for (const exportName of this.getExportNames()) {
            if (exportName[0] === '*')
                continue;
            const variable = this.exportsByName.get(exportName);
            if (!(variable instanceof SyntheticNamedExportVariable)) {
                const module = variable.module;
                if (module) {
                    const chunk = this.chunkByModule.get(module);
                    if (chunk !== this) {
                        if (!chunk || format !== 'es') {
                            continue;
                        }
                        const chunkDep = this.renderedDependencies.get(chunk);
                        if (!chunkDep) {
                            continue;
                        }
                        const { imports, reexports } = chunkDep;
                        const importedByReexported = reexports?.find(({ reexported }) => reexported === exportName);
                        const isImported = imports?.find(({ imported }) => imported === importedByReexported?.imported);
                        if (!isImported) {
                            continue;
                        }
                    }
                }
            }
            let expression = null;
            let hoisted = false;
            let local = variable.getName(this.snippets.getPropertyAccess);
            if (variable instanceof LocalVariable) {
                for (const declaration of variable.declarations) {
                    if (declaration.parent instanceof FunctionDeclaration ||
                        (declaration instanceof ExportDefaultDeclaration &&
                            declaration.declaration instanceof FunctionDeclaration)) {
                        hoisted = true;
                        break;
                    }
                }
            }
            else if (variable instanceof SyntheticNamedExportVariable) {
                expression = local;
                if (format === 'es') {
                    local = variable.renderName;
                }
            }
            exports$1.push({
                exported: exportName,
                expression,
                hoisted,
                local
            });
        }
        return exports$1;
    }
    getDependenciesToBeDeconflicted(addNonNamespacesAndInteropHelpers, addDependenciesWithoutBindings, interop) {
        const dependencies = new Set();
        const deconflictedDefault = new Set();
        const deconflictedNamespace = new Set();
        for (const variable of [...this.exportNamesByVariable.keys(), ...this.imports]) {
            if (addNonNamespacesAndInteropHelpers || variable.isNamespace) {
                const module = variable.module;
                if (module instanceof ExternalModule) {
                    const chunk = this.externalChunkByModule.get(module);
                    dependencies.add(chunk);
                    if (addNonNamespacesAndInteropHelpers) {
                        if (variable.name === 'default') {
                            if (defaultInteropHelpersByInteropType[interop(module.id)]) {
                                deconflictedDefault.add(chunk);
                            }
                        }
                        else if (variable.isNamespace &&
                            namespaceInteropHelpersByInteropType[interop(module.id)] &&
                            (this.imports.has(variable) ||
                                !this.exportNamesByVariable.get(variable)?.every(name => name[0] === '*'))) {
                            // We only need to deconflict it if the namespace is actually
                            // created as a variable, i.e. because it is used internally or
                            // because it is reexported as an object
                            deconflictedNamespace.add(chunk);
                        }
                    }
                }
                else {
                    const chunk = this.chunkByModule.get(module);
                    if (chunk !== this) {
                        dependencies.add(chunk);
                        if (addNonNamespacesAndInteropHelpers &&
                            chunk.exportMode === 'default' &&
                            variable.isNamespace) {
                            deconflictedNamespace.add(chunk);
                        }
                    }
                }
            }
        }
        if (addDependenciesWithoutBindings) {
            for (const dependency of this.dependencies) {
                dependencies.add(dependency);
            }
        }
        return { deconflictedDefault, deconflictedNamespace, dependencies };
    }
    getDynamicDependencies() {
        return this.getIncludedDynamicImports()
            .map(resolvedDynamicImport => resolvedDynamicImport.facadeChunk ||
            resolvedDynamicImport.chunk ||
            resolvedDynamicImport.externalChunk ||
            resolvedDynamicImport.resolution)
            .filter((resolution) => resolution !== this &&
            (resolution instanceof Chunk || resolution instanceof ExternalChunk));
    }
    getDynamicImportStringAndAttributes(resolution, fileName, node) {
        const { externalImportAttributes } = this.outputOptions;
        const keepExternalImportAttributes = ['es', 'cjs'].includes(this.outputOptions.format) && externalImportAttributes;
        if (resolution instanceof ExternalModule) {
            const chunk = this.externalChunkByModule.get(resolution);
            const dynamicAttributes = chunk.getImportAttributes(this.snippets);
            return [
                `'${chunk.getImportPath(fileName)}'`,
                dynamicAttributes || (keepExternalImportAttributes ? true : null)
            ];
        }
        let attributes = null;
        if (keepExternalImportAttributes) {
            const attributesFromImportAttributes = getAttributesFromImportExpression(node);
            attributes =
                attributesFromImportAttributes === parseAst_js.EMPTY_OBJECT
                    ? true
                    : formatAttributes(attributesFromImportAttributes, this.snippets);
        }
        return [resolution || '', attributes];
    }
    getFallbackChunkName() {
        if (this.manualChunkAlias) {
            return this.manualChunkAlias;
        }
        if (this.dynamicName) {
            return this.dynamicName;
        }
        if (this.fileName) {
            return parseAst_js.getAliasName(this.fileName);
        }
        return parseAst_js.getAliasName(this.orderedModules[this.orderedModules.length - 1].id);
    }
    getImportSpecifiers() {
        const { interop } = this.outputOptions;
        const importsByDependency = new Map();
        for (const variable of this.imports) {
            const module = variable.module;
            let dependency;
            let imported;
            const isSourcePhase = module instanceof ExternalModule && variable.isSourcePhase;
            if (module instanceof ExternalModule) {
                dependency = this.externalChunkByModule.get(module);
                imported = variable.name;
                if (!isSourcePhase &&
                    imported !== 'default' &&
                    imported !== '*' &&
                    interop(module.id) === 'defaultOnly') {
                    return parseAst_js.error(parseAst_js.logUnexpectedNamedImport(module.id, imported, false));
                }
            }
            else {
                dependency = this.chunkByModule.get(module);
                imported = dependency.getVariableExportName(variable);
            }
            getOrCreate(importsByDependency, dependency, getNewArray).push({
                imported,
                local: variable.getName(this.snippets.getPropertyAccess),
                phase: isSourcePhase ? 'source' : 'instance'
            });
        }
        return importsByDependency;
    }
    getIncludedDynamicImports() {
        if (this.includedDynamicImports) {
            return this.includedDynamicImports;
        }
        const includedDynamicImports = [];
        for (const module of this.orderedModules) {
            for (const { node } of module.dynamicImports) {
                if (!node.included) {
                    continue;
                }
                const { resolution } = node;
                includedDynamicImports.push(resolution instanceof Module
                    ? {
                        chunk: this.chunkByModule.get(resolution),
                        externalChunk: null,
                        facadeChunk: this.facadeChunkByModule.get(resolution),
                        node,
                        resolution
                    }
                    : resolution instanceof ExternalModule
                        ? {
                            chunk: null,
                            externalChunk: this.externalChunkByModule.get(resolution),
                            facadeChunk: null,
                            node,
                            resolution
                        }
                        : { chunk: null, externalChunk: null, facadeChunk: null, node, resolution });
            }
        }
        return (this.includedDynamicImports = includedDynamicImports);
    }
    getPreRenderedChunkInfo() {
        if (this.preRenderedChunkInfo) {
            return this.preRenderedChunkInfo;
        }
        const { dynamicEntryModules, facadeModule, implicitEntryModules, orderedModules } = this;
        return (this.preRenderedChunkInfo = {
            exports: this.getExportNames(),
            facadeModuleId: facadeModule && facadeModule.id,
            isDynamicEntry: dynamicEntryModules.length > 0,
            isEntry: !!facadeModule?.info.isEntry,
            isImplicitEntry: implicitEntryModules.length > 0,
            moduleIds: orderedModules.map(({ id }) => id),
            name: this.getChunkName(),
            type: 'chunk'
        });
    }
    getPreserveModulesChunkNameFromModule(module) {
        const predefinedChunkName = getPredefinedChunkNameFromModule(module);
        if (predefinedChunkName)
            return predefinedChunkName;
        const { preserveModulesRoot, sanitizeFileName } = this.outputOptions;
        const sanitizedId = sanitizeFileName(parseAst_js.normalize(module.id.split(QUERY_HASH_REGEX, 1)[0]));
        const extensionName = path.extname(sanitizedId);
        const idWithoutExtension = NON_ASSET_EXTENSIONS.has(extensionName)
            ? sanitizedId.slice(0, -extensionName.length)
            : sanitizedId;
        if (parseAst_js.isAbsolute(idWithoutExtension)) {
            if (preserveModulesRoot && path.resolve(idWithoutExtension).startsWith(preserveModulesRoot)) {
                return idWithoutExtension.slice(preserveModulesRoot.length).replace(/^[/\\]/, '');
            }
            else {
                // handle edge case in Windows
                if (this.inputBase === '/' && idWithoutExtension[0] !== '/') {
                    return parseAst_js.relative(this.inputBase, idWithoutExtension.replace(/^[a-zA-Z]:[/\\]/, '/'));
                }
                return parseAst_js.relative(this.inputBase, idWithoutExtension);
            }
        }
        else {
            return (this.outputOptions.virtualDirname.replace(/\/$/, '') + '/' + path.basename(idWithoutExtension));
        }
    }
    getReexportSpecifiers() {
        const { externalLiveBindings, interop } = this.outputOptions;
        const reexportSpecifiers = new Map();
        for (let exportName of this.getExportNames()) {
            let dependency;
            let imported;
            let needsLiveBinding;
            if (exportName[0] === '*') {
                const id = exportName.slice(1);
                if (interop(id) === 'defaultOnly') {
                    this.inputOptions.onLog(parseAst_js.LOGLEVEL_WARN, parseAst_js.logUnexpectedNamespaceReexport(id));
                }
                needsLiveBinding = externalLiveBindings;
                dependency = this.externalChunkByModule.get(this.modulesById.get(id));
                imported = exportName = '*';
            }
            else {
                const variable = this.exportsByName.get(exportName);
                if (variable instanceof SyntheticNamedExportVariable)
                    continue;
                const module = variable.module;
                if (module instanceof Module) {
                    dependency = this.chunkByModule.get(module);
                    if (dependency === this)
                        continue;
                    imported = dependency.getVariableExportName(variable);
                    needsLiveBinding = variable.isReassigned;
                }
                else {
                    dependency = this.externalChunkByModule.get(module);
                    imported = variable.name;
                    if (imported !== 'default' && imported !== '*' && interop(module.id) === 'defaultOnly') {
                        return parseAst_js.error(parseAst_js.logUnexpectedNamedImport(module.id, imported, true));
                    }
                    needsLiveBinding =
                        externalLiveBindings &&
                            (imported !== 'default' || isDefaultAProperty(interop(module.id), true));
                }
            }
            getOrCreate(reexportSpecifiers, dependency, getNewArray).push({
                imported,
                needsLiveBinding,
                reexported: exportName
            });
        }
        return reexportSpecifiers;
    }
    getReferencedFiles() {
        const referencedFiles = new Set();
        for (const module of this.orderedModules) {
            for (const meta of module.importMetas) {
                const fileName = meta.getReferencedFileName(this.pluginDriver);
                if (fileName) {
                    referencedFiles.add(fileName);
                }
            }
        }
        return [...referencedFiles];
    }
    getRenderedDependencies() {
        if (this.renderedDependencies) {
            return this.renderedDependencies;
        }
        const importSpecifiers = this.getImportSpecifiers();
        const reexportSpecifiers = this.getReexportSpecifiers();
        const renderedDependencies = new Map();
        const fileName = this.getFileName();
        for (const dependency of this.dependencies) {
            const imports = importSpecifiers.get(dependency) || null;
            const reexports = reexportSpecifiers.get(dependency) || null;
            const namedExportsMode = dependency instanceof ExternalChunk || dependency.exportMode !== 'default';
            const importPath = dependency.getImportPath(fileName);
            // Separate source-phase imports from regular imports
            const sourcePhaseImport = imports?.find(index => index.phase === 'source');
            const instanceImports = imports?.filter(index => index.phase !== 'source') ?? null;
            renderedDependencies.set(dependency, {
                attributes: dependency instanceof ExternalChunk
                    ? dependency.getImportAttributes(this.snippets)
                    : null,
                defaultVariableName: dependency.defaultVariableName,
                globalName: dependency instanceof ExternalChunk &&
                    (this.outputOptions.format === 'umd' || this.outputOptions.format === 'iife') &&
                    getGlobalName(dependency, this.outputOptions.globals, (imports || reexports) !== null, this.inputOptions.onLog),
                importPath,
                imports: instanceImports && instanceImports.length > 0 ? instanceImports : null,
                isChunk: dependency instanceof Chunk,
                name: dependency.variableName,
                namedExportsMode,
                namespaceVariableName: dependency.namespaceVariableName,
                reexports,
                sourcePhaseImport: sourcePhaseImport?.local
            });
        }
        return (this.renderedDependencies = renderedDependencies);
    }
    inlineChunkDependencies(chunk) {
        for (const dep of chunk.dependencies) {
            if (this.dependencies.has(dep))
                continue;
            this.dependencies.add(dep);
            if (dep instanceof Chunk) {
                this.inlineChunkDependencies(dep);
            }
        }
    }
    // This method changes properties on the AST before rendering and must not be async
    renderModules(fileName) {
        const { accessedGlobalsByScope, dependencies, exportNamesByVariable, includedNamespaces, inputOptions: { onLog }, isEmpty, orderedModules, outputOptions, pluginDriver, renderedModules, snippets } = this;
        const { compact, format, freeze, generatedCode: { symbols }, importAttributesKey } = outputOptions;
        const { _, cnst, n } = snippets;
        this.setDynamicImportResolutions(fileName);
        this.setImportMetaResolutions(fileName);
        this.setIdentifierRenderResolutions();
        const magicString = new Bundle$1({ separator: `${n}${n}` });
        const indent = getIndentString(orderedModules, outputOptions);
        const usedModules = [];
        let hoistedSource = '';
        const accessedGlobals = new Set();
        const renderedModuleSources = new Map();
        const renderOptions = {
            accessedDocumentCurrentScript: false,
            exportNamesByVariable,
            format,
            freeze,
            importAttributesKey,
            indent,
            pluginDriver,
            snippets,
            symbols,
            useOriginalName: null
        };
        let usesTopLevelAwait = false;
        for (const module of orderedModules) {
            let renderedLength = 0;
            let source;
            if (module.isIncluded() || includedNamespaces.has(module)) {
                const rendered = module.render(renderOptions);
                if (!renderOptions.accessedDocumentCurrentScript &&
                    formatsMaybeAccessDocumentCurrentScript.includes(format)) {
                    this.accessedGlobalsByScope.get(module.scope)?.delete(DOCUMENT_CURRENT_SCRIPT);
                }
                renderOptions.accessedDocumentCurrentScript = false;
                ({ source } = rendered);
                usesTopLevelAwait ||= rendered.usesTopLevelAwait;
                renderedLength = source.length();
                if (renderedLength) {
                    if (compact && source.lastLine().includes('//'))
                        source.append('\n');
                    renderedModuleSources.set(module, source);
                    magicString.addSource(source);
                    usedModules.push(module);
                }
                const namespace = module.namespace;
                if (includedNamespaces.has(module)) {
                    const rendered = namespace.renderBlock(renderOptions);
                    if (namespace.renderFirst())
                        hoistedSource += n + rendered;
                    else
                        magicString.addSource(new MagicString(rendered));
                }
                const accessedGlobalVariables = accessedGlobalsByScope.get(module.scope);
                if (accessedGlobalVariables) {
                    for (const name of accessedGlobalVariables) {
                        accessedGlobals.add(name);
                    }
                }
            }
            const { renderedExports, removedExports } = module.getRenderedExports();
            renderedModules[module.id] = {
                get code() {
                    return source?.toString() ?? null;
                },
                originalLength: module.originalCode.length,
                removedExports,
                renderedExports,
                renderedLength
            };
        }
        if (hoistedSource)
            magicString.prepend(hoistedSource + n + n);
        if (this.needsExportsShim) {
            magicString.prepend(`${n}${cnst} ${MISSING_EXPORT_SHIM_VARIABLE}${_}=${_}void 0;${n}${n}`);
        }
        const renderedSource = compact ? magicString : magicString.trim();
        if (isEmpty && this.getExportNames().length === 0 && dependencies.size === 0) {
            onLog(parseAst_js.LOGLEVEL_WARN, parseAst_js.logEmptyChunk(this.getChunkName()));
        }
        return { accessedGlobals, indent, magicString, renderedSource, usedModules, usesTopLevelAwait };
    }
    setDynamicImportResolutions(fileName) {
        const { accessedGlobalsByScope, outputOptions, pluginDriver, snippets } = this;
        for (const resolvedDynamicImport of this.getIncludedDynamicImports()) {
            if (resolvedDynamicImport.chunk) {
                const { chunk, facadeChunk, node, resolution } = resolvedDynamicImport;
                if (chunk === this) {
                    node.setInternalResolution(resolution.namespace);
                }
                else {
                    node.setExternalResolution((facadeChunk || chunk).exportMode, outputOptions, snippets, pluginDriver, accessedGlobalsByScope, `'${(facadeChunk || chunk).getImportPath(fileName)}'`, !facadeChunk?.strictFacade && chunk.exportNamesByVariable.get(resolution.namespace)[0], null, this, facadeChunk || chunk);
                }
            }
            else {
                const { node, resolution } = resolvedDynamicImport;
                const [resolutionString, attributes] = this.getDynamicImportStringAndAttributes(resolution, fileName, node);
                node.setExternalResolution('external', outputOptions, snippets, pluginDriver, accessedGlobalsByScope, resolutionString, false, attributes, this, null);
            }
        }
    }
    setIdentifierRenderResolutions() {
        const { format, generatedCode: { symbols }, interop, preserveModules, externalLiveBindings } = this.outputOptions;
        // Reset stale render names from previous output renderings of the same
        // module graph. Without this, variables that were renamed during a prior
        // output's import deconfliction (e.g. given a chunk-prefixed
        // `renderBaseName` like `vendor`) would carry that name into the next
        // output, producing invalid identifiers such as `function vendor.foo()`.
        for (const module of this.orderedModules) {
            for (const variable of module.scope.variables.values()) {
                variable.setRenderNames(null, null);
            }
        }
        const syntheticExports = new Set();
        for (const exportName of this.getExportNames()) {
            const exportVariable = this.exportsByName.get(exportName);
            if (format !== 'es' &&
                format !== 'system' &&
                exportVariable.isReassigned &&
                !exportVariable.isId) {
                exportVariable.setRenderNames('exports', exportName);
            }
            else if (exportVariable instanceof SyntheticNamedExportVariable) {
                syntheticExports.add(exportVariable);
            }
            else {
                exportVariable.setRenderNames(null, null);
            }
        }
        for (const module of this.orderedModules) {
            if (module.needsExportShim) {
                this.needsExportsShim = true;
                break;
            }
        }
        const usedNames = new Set(RESERVED_USED_NAMES);
        if (this.needsExportsShim) {
            usedNames.add(MISSING_EXPORT_SHIM_VARIABLE);
        }
        if (symbols) {
            usedNames.add('Symbol');
        }
        deconflictChunk(this.orderedModules, this.getDependenciesToBeDeconflicted(format !== 'es' && format !== 'system', format === 'amd' || format === 'umd' || format === 'iife', interop), this.imports, usedNames, format, interop, preserveModules, externalLiveBindings, this.chunkByModule, this.externalChunkByModule, syntheticExports, this.exportNamesByVariable, this.accessedGlobalsByScope, this.includedNamespaces);
    }
    setImportMetaResolutions(fileName) {
        const { accessedGlobalsByScope, includedNamespaces, orderedModules, outputOptions: { format } } = this;
        for (const module of orderedModules) {
            for (const importMeta of module.importMetas) {
                importMeta.setResolution(format, accessedGlobalsByScope, fileName);
            }
            if (includedNamespaces.has(module)) {
                module.namespace.prepare(accessedGlobalsByScope);
            }
        }
    }
    setUpChunkImportsAndExportsForModule(module) {
        const moduleImports = new Set(module.includedImports);
        // when we are not preserving modules, we need to make all namespace variables available for
        // rendering the namespace object
        if (!this.outputOptions.preserveModules && this.includedNamespaces.has(module)) {
            for (const variable of module.getExportedVariablesByName().values()) {
                if (variable.included) {
                    moduleImports.add(variable);
                }
            }
        }
        for (let variable of moduleImports) {
            if (variable instanceof ExportDefaultVariable) {
                variable = variable.getOriginalVariable();
            }
            if (variable instanceof SyntheticNamedExportVariable) {
                variable = variable.getBaseVariable();
            }
            const chunk = this.chunkByModule.get(variable.module);
            if (chunk !== this) {
                this.imports.add(variable);
                if (variable.module instanceof Module) {
                    this.checkCircularDependencyImport(variable, module);
                    // When preserving modules, we do not create namespace objects but directly
                    // use the actual namespaces, which would be broken by this logic.
                    if (!(variable instanceof NamespaceVariable && this.outputOptions.preserveModules)) {
                        chunk.exports.add(variable);
                    }
                }
            }
        }
        if (this.includedNamespaces.has(module) ||
            (module.info.isEntry && module.preserveSignature !== false) ||
            module.includedDynamicImporters.some(importer => this.chunkByModule.get(importer) !== this)) {
            this.ensureReexportsAreAvailableForModule(module);
        }
        for (const { node: { included, resolution } } of module.dynamicImports) {
            if (included &&
                resolution instanceof Module &&
                this.chunkByModule.get(resolution) === this &&
                !this.includedNamespaces.has(resolution)) {
                this.includedNamespaces.add(resolution);
                this.ensureReexportsAreAvailableForModule(resolution);
            }
        }
    }
}
function getChunkNameFromModule(module) {
    return getPredefinedChunkNameFromModule(module) ?? parseAst_js.getAliasName(module.id);
}
function getPredefinedChunkNameFromModule(module) {
    return (module.chunkNames.find(({ isUserDefined }) => isUserDefined)?.name ?? module.chunkNames[0]?.name);
}
function getImportedBindingsPerDependency(renderedDependencies, resolveFileName) {
    const importedBindingsPerDependency = {};
    for (const [dependency, declaration] of renderedDependencies) {
        const specifiers = new Set();
        if (declaration.imports) {
            for (const { imported } of declaration.imports) {
                specifiers.add(imported);
            }
        }
        if (declaration.reexports) {
            for (const { imported } of declaration.reexports) {
                specifiers.add(imported);
            }
        }
        importedBindingsPerDependency[resolveFileName(dependency)] = [...specifiers];
    }
    return importedBindingsPerDependency;
}
const QUERY_HASH_REGEX = /[#?]/;
const resolveFileName = (dependency) => dependency.getFileName();

/**
 * Concatenate a number of iterables to a new iterable without fully evaluating
 * their iterators. Useful when e.g. working with large sets or lists and when
 * there is a chance that the iterators will not be fully exhausted.
 */
function* concatLazy(iterables) {
    for (const iterable of iterables) {
        yield* iterable;
    }
}

/**
 * At its core, the algorithm first starts from each static or dynamic entry
 * point and then assigns that entry point to all modules than can be reached
 * via static imports. We call this the *dependent entry points* of that
 * module.
 *
 * Then we group all modules with the same dependent entry points into chunks
 * as those modules will always be loaded together.
 *
 * One non-trivial optimization we can apply is that dynamic entries are
 * different from static entries in so far as when a dynamic import occurs,
 * some modules are already in memory. If some of these modules are also
 * dependencies of the dynamic entry, then it does not make sense to create a
 * separate chunk for them. Instead, the dynamic import target can load them
 * from the importing chunk.
 *
 * With regard to chunking, if B is implicitly loaded after A, then this can be
 * handled the same way as if there was a dynamic import A => B.
 *
 * Example:
 * Assume A -> B (A imports B), A => C (A dynamically imports C) and C -> B.
 * Then the initial algorithm would assign A into the A chunk, C into the C
 * chunk and B into the AC chunk, i.e. the chunk with the dependent entry
 * points A and C.
 * However we know that C can only be loaded from A, so A and its dependency B
 * must already be in memory when C is loaded. So it is enough to create only
 * two chunks A containing [AB] and C containing [C].
 *
 * So we do not assign the dynamic entry C as dependent entry point to modules
 * that are already loaded.
 *
 * In a more complex example, let us assume that we have entry points X and Y.
 * Further, let us assume
 * X -> A, X -> B, X -> C,
 * Y -> A, Y -> B,
 * A => D,
 * D -> B, D -> C
 * So without dynamic import optimization, the dependent entry points are
 * A: XY, B: DXY, C: DX, D: D, X: X, Y: Y, so we would for now create six
 * chunks.
 *
 * Now D is loaded only after A is loaded. But A is loaded if either X is
 * loaded or Y is loaded. So the modules that are already in memory when D is
 * loaded are the intersection of all modules that X depends on with all
 * modules that Y depends on, which in this case are the modules A and B.
 * We could also say they are all modules that have both X and Y as dependent
 * entry points.
 *
 * So we can remove D as dependent entry point from A and B, which means they
 * both now have only XY as dependent entry points and can be merged into the
 * same chunk.
 *
 * Now let us extend this to the most general case where we have several
 * dynamic importers for one dynamic entry point.
 *
 * In the most general form, it works like this:
 * For each dynamic entry point, we have a number of dynamic importers, which
 * are the modules importing it. Using the previous ideas, we can determine
 * the modules already in memory for each dynamic importer by looking for all
 * modules that have all the dependent entry points of the dynamic importer as
 * dependent entry points.
 * So the modules that are guaranteed to be in memory when the dynamic entry
 * point is loaded are the intersection of the modules already in memory for
 * each dynamic importer.
 *
 * Assuming that A => D and B => D and A has dependent entry points XY and B
 * has dependent entry points YZ, then the modules guaranteed to be in memory
 * are all modules that have at least XYZ as dependent entry points.
 * We call XYZ the *dynamically dependent entry points* of D.
 *
 * Now there is one last case to consider: If one of the dynamically dependent
 * entries is itself a dynamic entry, then any module is in memory that either
 * is a dependency of that dynamic entry or again has the dynamic dependent
 * entries of that dynamic entry as dependent entry points.
 *
 * A naive algorithm for this proved to be costly as it contained an O(n^3)
 * complexity with regard to dynamic entries that blew up for very large
 * projects.
 *
 * If we have an efficient way to do Set operations, an alternative approach
 * would be to instead collect already loaded modules per dynamic entry. And as
 * all chunks from the initial grouping would behave the same, we can instead
 * collect already loaded chunks for a performance improvement.
 *
 * To do that efficiently, need
 * - a Map of dynamic imports per dynamic entry, which contains all dynamic
 *   imports that can be triggered by a dynamic entry
 * - a Map of static dependencies per entry
 * - a Map of already loaded chunks per entry that we initially populate with
 *   empty Sets for static entries and Sets containing all entries for dynamic
 *   entries
 *
 * For efficient operations, we assign each entry a numerical index and
 * represent Sets of Chunks as BigInt values where each chunk corresponds to a
 * bit index. Then the last two maps can be represented as arrays of BigInt
 * values.
 *
 * Then we iterate through each dynamic entry. We set the already loaded modules
 * to the intersection of the previously already loaded modules with the union
 * of the already loaded modules of that chunk with its static dependencies.
 *
 * If the already loaded modules changed, then we use the Map of dynamic imports
 * per dynamic entry to marks all dynamic entry dependencies as "dirty" and put
 * them back into the iteration. As an additional optimization, we note for
 * each dynamic entry which dynamic dependent entries have changed and only
 * intersect those entries again on subsequent interations.
 *
 * Then we remove the dynamic entries from the list of dependent entries for
 * those chunks that are already loaded for that dynamic entry and create
 * another round of chunks.
 */
function getChunkAssignments(entries, manualChunkAliasByEntry, minChunkSize, log, isManualChunksFunctionForm, onlyExplicitManualChunks) {
    const { chunkDefinitions, modulesInManualChunks } = getChunkDefinitionsFromManualChunks(manualChunkAliasByEntry, isManualChunksFunctionForm, onlyExplicitManualChunks);
    const { allEntries, dependentEntriesByModule, dynamicallyDependentEntriesByDynamicEntry, dynamicImportsByEntry, dynamicallyDependentEntriesByAwaitedDynamicEntry, awaitedDynamicImportsByEntry } = analyzeModuleGraph(entries);
    // Each chunk is identified by its position in this array
    const chunkAtoms = getChunksWithSameDependentEntries(getModulesWithDependentEntriesAndHandleTLACycles(dependentEntriesByModule, modulesInManualChunks, chunkDefinitions));
    const staticDependencyAtomsByEntry = getStaticDependencyAtomsByEntry(allEntries, chunkAtoms);
    // Warning: This will consume dynamicallyDependentEntriesByDynamicEntry.
    // If we no longer want this, we should make a copy here.
    const alreadyLoadedAtomsByEntry = getAlreadyLoadedAtomsByEntry(staticDependencyAtomsByEntry, dynamicallyDependentEntriesByDynamicEntry, dynamicImportsByEntry, allEntries);
    const awaitedAlreadyLoadedAtomsByEntry = getAlreadyLoadedAtomsByEntry(staticDependencyAtomsByEntry, dynamicallyDependentEntriesByAwaitedDynamicEntry, awaitedDynamicImportsByEntry, allEntries);
    // This mutates the dependentEntries in chunkAtoms
    removeUnnecessaryDependentEntries(chunkAtoms, alreadyLoadedAtomsByEntry, awaitedAlreadyLoadedAtomsByEntry);
    const { chunks, sideEffectAtoms, sizeByAtom } = getChunksWithSameDependentEntriesAndCorrelatedAtoms(chunkAtoms, staticDependencyAtomsByEntry, alreadyLoadedAtomsByEntry, minChunkSize);
    chunkDefinitions.push(...getOptimizedChunks(chunks, minChunkSize, sideEffectAtoms, sizeByAtom, log).map(({ modules }) => ({
        alias: null,
        modules
    })));
    return chunkDefinitions;
}
function getChunkDefinitionsFromManualChunks(manualChunkAliasByEntry, isManualChunksFunctionForm, onlyExplicitManualChunks) {
    const modulesInManualChunks = new Set(manualChunkAliasByEntry.keys());
    const manualChunkModulesByAlias = Object.create(null);
    const sortedEntriesWithAlias = [...manualChunkAliasByEntry].sort(([entryA], [entryB]) => entryA.execIndex - entryB.execIndex);
    for (const [entry, alias] of sortedEntriesWithAlias) {
        if (isManualChunksFunctionForm && onlyExplicitManualChunks) {
            (manualChunkModulesByAlias[alias] ||= []).push(entry);
        }
        else {
            addStaticDependenciesToManualChunk(entry, (manualChunkModulesByAlias[alias] ||= []), modulesInManualChunks);
        }
    }
    const manualChunks = Object.entries(manualChunkModulesByAlias);
    const chunkDefinitions = new Array(manualChunks.length);
    let index = 0;
    for (const [alias, modules] of manualChunks) {
        chunkDefinitions[index++] = { alias, modules };
    }
    return { chunkDefinitions, modulesInManualChunks };
}
function addStaticDependenciesToManualChunk(entry, manualChunkModules, modulesInManualChunks) {
    const modulesToHandle = new Set([entry]);
    for (const module of modulesToHandle) {
        modulesInManualChunks.add(module);
        manualChunkModules.push(module);
        for (const dependency of module.dependencies) {
            if (!(dependency instanceof ExternalModule || modulesInManualChunks.has(dependency))) {
                modulesToHandle.add(dependency);
            }
        }
    }
}
function analyzeModuleGraph(entries) {
    const dynamicEntryModules = new Set();
    const awaitedDynamicEntryModules = new Set();
    const dependentEntriesByModule = new Map();
    const allEntriesSet = new Set(entries);
    const dynamicImportModulesByEntry = new Array(allEntriesSet.size);
    const awaitedDynamicImportModulesByEntry = new Array(allEntriesSet.size);
    let entryIndex = 0;
    for (const currentEntry of allEntriesSet) {
        const dynamicImportsForCurrentEntry = new Set();
        const awaitedDynamicImportsForCurrentEntry = new Set();
        dynamicImportModulesByEntry[entryIndex] = dynamicImportsForCurrentEntry;
        awaitedDynamicImportModulesByEntry[entryIndex] = awaitedDynamicImportsForCurrentEntry;
        const staticDependencies = new Set([currentEntry]);
        for (const module of staticDependencies) {
            getOrCreate(dependentEntriesByModule, module, (getNewSet)).add(entryIndex);
            for (const dependency of module.getDependenciesToBeIncluded()) {
                if (!(dependency instanceof ExternalModule)) {
                    staticDependencies.add(dependency);
                }
            }
            for (const { node: { resolution } } of module.dynamicImports) {
                if (resolution instanceof Module &&
                    resolution.includedDynamicImporters.length > 0 &&
                    !allEntriesSet.has(resolution)) {
                    dynamicEntryModules.add(resolution);
                    allEntriesSet.add(resolution);
                    dynamicImportsForCurrentEntry.add(resolution);
                    for (const includedTopLevelAwaitingDynamicImporter of resolution.includedTopLevelAwaitingDynamicImporters) {
                        if (staticDependencies.has(includedTopLevelAwaitingDynamicImporter)) {
                            awaitedDynamicEntryModules.add(resolution);
                            awaitedDynamicImportsForCurrentEntry.add(resolution);
                            break;
                        }
                    }
                }
            }
            for (const dependency of module.implicitlyLoadedBefore) {
                if (!allEntriesSet.has(dependency)) {
                    dynamicEntryModules.add(dependency);
                    allEntriesSet.add(dependency);
                }
            }
        }
        entryIndex++;
    }
    const allEntries = [...allEntriesSet];
    const { awaitedDynamicEntries, awaitedDynamicImportsByEntry, dynamicEntries, dynamicImportsByEntry } = getDynamicEntries(allEntries, dynamicEntryModules, dynamicImportModulesByEntry, awaitedDynamicEntryModules, awaitedDynamicImportModulesByEntry);
    return {
        allEntries,
        awaitedDynamicImportsByEntry,
        dependentEntriesByModule,
        dynamicallyDependentEntriesByAwaitedDynamicEntry: getDynamicallyDependentEntriesByDynamicEntry(dependentEntriesByModule, awaitedDynamicEntries, allEntries, dynamicEntry => dynamicEntry.includedTopLevelAwaitingDynamicImporters),
        dynamicallyDependentEntriesByDynamicEntry: getDynamicallyDependentEntriesByDynamicEntry(dependentEntriesByModule, dynamicEntries, allEntries, dynamicEntry => dynamicEntry.includedDynamicImporters),
        dynamicImportsByEntry
    };
}
function getDynamicEntries(allEntries, dynamicEntryModules, dynamicImportModulesByEntry, awaitedDynamicEntryModules, awaitedDynamicImportModulesByEntry) {
    const entryIndexByModule = new Map();
    const dynamicEntries = new Set();
    const awaitedDynamicEntries = new Set();
    for (const [entryIndex, entry] of allEntries.entries()) {
        entryIndexByModule.set(entry, entryIndex);
        if (dynamicEntryModules.has(entry)) {
            dynamicEntries.add(entryIndex);
        }
        if (awaitedDynamicEntryModules.has(entry)) {
            awaitedDynamicEntries.add(entryIndex);
        }
    }
    const dynamicImportsByEntry = getDynamicImportsByEntry(dynamicImportModulesByEntry, entryIndexByModule);
    const awaitedDynamicImportsByEntry = getDynamicImportsByEntry(awaitedDynamicImportModulesByEntry, entryIndexByModule);
    return {
        awaitedDynamicEntries,
        awaitedDynamicImportsByEntry,
        dynamicEntries,
        dynamicImportsByEntry
    };
}
function getDynamicImportsByEntry(dynamicImportModulesByEntry, entryIndexByModule) {
    const dynamicImportsByEntry = new Array(dynamicImportModulesByEntry.length);
    let index = 0;
    for (const dynamicImportModules of dynamicImportModulesByEntry) {
        const dynamicImports = new Set();
        for (const dynamicEntry of dynamicImportModules) {
            dynamicImports.add(entryIndexByModule.get(dynamicEntry));
        }
        dynamicImportsByEntry[index++] = dynamicImports;
    }
    return dynamicImportsByEntry;
}
function getDynamicallyDependentEntriesByDynamicEntry(dependentEntriesByModule, dynamicEntries, allEntries, getDynamicImporters) {
    const dynamicallyDependentEntriesByDynamicEntry = new Map();
    for (const dynamicEntryIndex of dynamicEntries) {
        const dynamicallyDependentEntries = getOrCreate(dynamicallyDependentEntriesByDynamicEntry, dynamicEntryIndex, (getNewSet));
        const dynamicEntry = allEntries[dynamicEntryIndex];
        for (const importer of concatLazy([
            getDynamicImporters(dynamicEntry),
            dynamicEntry.implicitlyLoadedAfter
        ])) {
            const importerEntries = dependentEntriesByModule.get(importer);
            if (!importerEntries) {
                continue;
            }
            for (const entry of importerEntries) {
                dynamicallyDependentEntries.add(entry);
            }
        }
    }
    return dynamicallyDependentEntriesByDynamicEntry;
}
function getChunksWithSameDependentEntries(modulesWithDependentEntries) {
    const chunkModules = Object.create(null);
    for (const { dependentEntries, modules } of modulesWithDependentEntries) {
        let chunkSignature = 0n;
        for (const entryIndex of dependentEntries) {
            chunkSignature |= 1n << BigInt(entryIndex);
        }
        (chunkModules[String(chunkSignature)] ||= {
            dependentEntries: new Set(dependentEntries),
            modules: []
        }).modules.push(...modules);
    }
    return Object.values(chunkModules);
}
function* getModulesWithDependentEntriesAndHandleTLACycles(dependentEntriesByModule, modulesInManualChunks, chunkDefinitions) {
    for (const [module, dependentEntries] of dependentEntriesByModule) {
        if (!modulesInManualChunks.has(module)) {
            if (module.cycles.size > 0 && module.includedTopLevelAwaitingDynamicImporters.size > 0) {
                chunkDefinitions.push({
                    alias: null,
                    modules: [module]
                });
                continue;
            }
            yield { dependentEntries, modules: [module] };
        }
    }
}
function getStaticDependencyAtomsByEntry(allEntries, chunkAtoms) {
    // The indices correspond to the indices in allEntries. The atoms correspond
    // to bits in the bigint values where chunk 0 is the lowest bit.
    const staticDependencyAtomsByEntry = allEntries.map(() => 0n);
    // This toggles the bits for each atom that is a dependency of an entry
    let atomMask = 1n;
    for (const { dependentEntries } of chunkAtoms) {
        for (const entryIndex of dependentEntries) {
            staticDependencyAtomsByEntry[entryIndex] |= atomMask;
        }
        atomMask <<= 1n;
    }
    return staticDependencyAtomsByEntry;
}
// Warning: This will consume dynamicallyDependentEntriesByDynamicEntry.
function getAlreadyLoadedAtomsByEntry(staticDependencyAtomsByEntry, dynamicallyDependentEntriesByDynamicEntry, dynamicImportsByEntry, allEntries) {
    // Dynamic entries have all atoms as already loaded initially because we then
    // intersect with the static dependency atoms of all dynamic importers.
    // Static entries cannot have already loaded atoms.
    const alreadyLoadedAtomsByEntry = allEntries.map((_entry, entryIndex) => dynamicallyDependentEntriesByDynamicEntry.has(entryIndex) ? -1n : 0n);
    for (const [dynamicEntryIndex, dynamicallyDependentEntries] of dynamicallyDependentEntriesByDynamicEntry) {
        // We delete here so that they can be added again if necessary to be handled
        // again by the loop
        dynamicallyDependentEntriesByDynamicEntry.delete(dynamicEntryIndex);
        const knownLoadedAtoms = alreadyLoadedAtomsByEntry[dynamicEntryIndex];
        let updatedLoadedAtoms = knownLoadedAtoms;
        for (const entryIndex of dynamicallyDependentEntries) {
            updatedLoadedAtoms &=
                staticDependencyAtomsByEntry[entryIndex] | alreadyLoadedAtomsByEntry[entryIndex];
        }
        // If the knownLoadedAtoms changed, all dependent dynamic entries need to be
        // updated again
        if (updatedLoadedAtoms !== knownLoadedAtoms) {
            alreadyLoadedAtomsByEntry[dynamicEntryIndex] = updatedLoadedAtoms;
            for (const dynamicImport of dynamicImportsByEntry[dynamicEntryIndex]) {
                // If this adds an entry that was deleted before, it will be handled
                // again. This is the reason why we delete every entry from this map
                // that we processed.
                getOrCreate(dynamicallyDependentEntriesByDynamicEntry, dynamicImport, (getNewSet)).add(dynamicEntryIndex);
            }
        }
    }
    return alreadyLoadedAtomsByEntry;
}
/**
 * This removes all unnecessary dynamic entries from the dependentEntries in its
 * first argument if a chunk is already loaded without that entry.
 */
function removeUnnecessaryDependentEntries(chunkAtoms, alreadyLoadedAtomsByEntry, awaitedAlreadyLoadedAtomsByEntry) {
    // Remove entries from dependent entries if a chunk is already loaded without
    // that entry. Do not remove already loaded atoms where some dynamic imports
    // are awaited to avoid cycles in the output.
    let chunkMask = 1n;
    for (const { dependentEntries } of chunkAtoms) {
        for (const entryIndex of dependentEntries) {
            if ((alreadyLoadedAtomsByEntry[entryIndex] & chunkMask) === chunkMask &&
                (awaitedAlreadyLoadedAtomsByEntry[entryIndex] & chunkMask) === 0n) {
                dependentEntries.delete(entryIndex);
            }
        }
        chunkMask <<= 1n;
    }
}
function getChunksWithSameDependentEntriesAndCorrelatedAtoms(chunkAtoms, staticDependencyAtomsByEntry, alreadyLoadedAtomsByEntry, minChunkSize) {
    const chunksBySignature = Object.create(null);
    const chunkByModule = new Map();
    const sizeByAtom = new Array(chunkAtoms.length);
    let sideEffectAtoms = 0n;
    let atomMask = 1n;
    let index = 0;
    for (const { dependentEntries, modules } of chunkAtoms) {
        let chunkSignature = 0n;
        let correlatedAtoms = -1n;
        for (const entryIndex of dependentEntries) {
            chunkSignature |= 1n << BigInt(entryIndex);
            // Correlated atoms are the atoms that are guaranteed to be loaded as
            // well when a given atom is loaded. It is the intersection of the already
            // loaded modules of each chunk merged with its static dependencies.
            correlatedAtoms &=
                staticDependencyAtomsByEntry[entryIndex] | alreadyLoadedAtomsByEntry[entryIndex];
        }
        const chunk = (chunksBySignature[String(chunkSignature)] ||= {
            containedAtoms: 0n,
            correlatedAtoms,
            dependencies: new Set(),
            dependentChunks: new Set(),
            dependentEntries: new Set(dependentEntries),
            modules: [],
            pure: true,
            size: 0
        });
        let atomSize = 0;
        let pure = true;
        for (const module of modules) {
            chunkByModule.set(module, chunk);
            // Unfortunately, we cannot take tree-shaking into account here because
            // rendering did not happen yet, but we can detect empty modules
            if (module.isIncluded()) {
                pure &&= !module.hasEffects();
                // we use a trivial size for the default minChunkSize to improve
                // performance
                atomSize += minChunkSize > 1 ? module.estimateSize() : 1;
            }
        }
        if (!pure) {
            sideEffectAtoms |= atomMask;
        }
        sizeByAtom[index++] = atomSize;
        chunk.containedAtoms |= atomMask;
        chunk.modules.push(...modules);
        chunk.pure &&= pure;
        chunk.size += atomSize;
        atomMask <<= 1n;
    }
    const chunks = Object.values(chunksBySignature);
    sideEffectAtoms |= addChunkDependenciesAndGetExternalSideEffectAtoms(chunks, chunkByModule, atomMask);
    return { chunks, sideEffectAtoms, sizeByAtom };
}
function addChunkDependenciesAndGetExternalSideEffectAtoms(chunks, chunkByModule, nextAvailableAtomMask) {
    const signatureByExternalModule = new Map();
    let externalSideEffectAtoms = 0n;
    for (const chunk of chunks) {
        const { dependencies, modules } = chunk;
        for (const module of modules) {
            for (const dependency of module.getDependenciesToBeIncluded()) {
                if (dependency instanceof ExternalModule) {
                    if (dependency.info.moduleSideEffects) {
                        const signature = getOrCreate(signatureByExternalModule, dependency, () => {
                            const signature = nextAvailableAtomMask;
                            nextAvailableAtomMask <<= 1n;
                            externalSideEffectAtoms |= signature;
                            return signature;
                        });
                        chunk.containedAtoms |= signature;
                        chunk.correlatedAtoms |= signature;
                    }
                }
                else {
                    const dependencyChunk = chunkByModule.get(dependency);
                    if (dependencyChunk && dependencyChunk !== chunk) {
                        dependencies.add(dependencyChunk);
                        dependencyChunk.dependentChunks.add(chunk);
                    }
                }
            }
        }
    }
    return externalSideEffectAtoms;
}
/**
 * This function tries to get rid of small chunks by merging them with other
 * chunks.
 *
 * We can only merge chunks safely if after the merge, loading any entry point
 * in any allowed order will not trigger side effects that should not have been
 * triggered. While side effects are usually things like global function calls,
 * global variable mutations or potentially thrown errors, details do not
 * matter here, and we just discern chunks without side effects (pure chunks)
 * from other chunks.
 *
 * As a first step, we assign each pre-generated chunk with side effects a
 * label. I.e. we have side effect "A" if the non-pure chunk "A" is loaded.
 *
 * Now to determine the side effects of loading a chunk, one also has to take
 * the side effects of its dependencies into account. So if A depends on B
 * (A -> B) and both have side effects, loading A triggers effects AB.
 *
 * Now from the previous step we know that each chunk is uniquely determine by
 * the entry points that depend on it and cause it to load, which we will call
 * its dependent entry points.
 *
 * E.g. if X -> A and Y -> A, then the dependent entry points of A are XY.
 * Starting from that idea, we can determine a set of chunks—and thus a set
 * of side effects—that must have been triggered if a certain chunk has been
 * loaded. Basically, it is the intersection of all chunks loaded by the
 * dependent entry points of a given chunk. We call the corresponding side
 * effects the correlated side effects of that chunk.
 *
 * Example:
 * X -> ABC, Y -> ADE, A-> F, B -> D
 * Then taking dependencies into account, X -> ABCDF, Y -> ADEF
 * The intersection is ADF. So we know that when A is loaded, D and F must also
 * be in memory even though neither D nor A is a dependency of the other.
 * If all have side effects, we call ADF the correlated side effects of A. The
 * correlated side effects need to remain constant when merging chunks.
 *
 * In contrast, we have the dependency side effects of A, which represents
 * the side effects we trigger if we directly load A. In this example, the
 * dependency side effects are AF.
 * For entry chunks, dependency and correlated side effects are the same.
 *
 * With these concepts, merging chunks is allowed if the correlated side
 * effects of each entry do not change. Thus, we are allowed to merge two
 * chunks if
 *
 * a) the dependency side effects of each chunk are a subset of the correlated
 *    side effects of the other chunk, so no additional side effects are
 *    triggered for any entry, or
 * b) The dependent entry points of chunk A are a subset of the dependent entry
 *    points of chunk B while the dependency side effects of A are a subset of
 *    the correlated side effects of B. Because in that scenario, whenever A is
 *    loaded, B is loaded as well. But there are cases when B is loaded where A
 *    is not loaded. So if we merge the chunks, all dependency side effects of
 *    A will be added to the correlated side effects of B, and as the latter is
 *    not allowed to change, the former need to be a subset of the latter.
 *
 * Another consideration when merging small chunks into other chunks is to
 * avoid
 * that too much additional code is loaded. This is achieved when the dependent
 * entries of the small chunk are a subset of the dependent entries of the
 * other
 * chunk. Because then when the small chunk is loaded, the other chunk was
 * loaded/in memory anyway, so at most when the other chunk is loaded, the
 * additional size of the small chunk is loaded unnecessarily.
 *
 * So the algorithm performs merges in two passes:
 *
 * 1. First we try to merge small chunks A only into other chunks B if the
 *    dependent entries of A are a subset of the dependent entries of B and the
 *    dependency side effects of A are a subset of the correlated side effects
 *    of B.
 * 2. Only then for all remaining small chunks, we look for arbitrary merges
 *    following the rule (a), starting with the smallest chunks to look for
 *    possible merge targets.
 */
function getOptimizedChunks(chunks, minChunkSize, sideEffectAtoms, sizeByAtom, log) {
    timeStart('optimize chunks', 3);
    const chunkPartition = getPartitionedChunks(chunks, minChunkSize);
    if (!chunkPartition) {
        timeEnd('optimize chunks', 3);
        return chunks; // the actual modules
    }
    if (minChunkSize > 1) {
        log('info', parseAst_js.logOptimizeChunkStatus(chunks.length, chunkPartition.small.size, 'Initially'));
    }
    mergeChunks(chunkPartition, minChunkSize, sideEffectAtoms, sizeByAtom);
    if (minChunkSize > 1) {
        log('info', parseAst_js.logOptimizeChunkStatus(chunkPartition.small.size + chunkPartition.big.size, chunkPartition.small.size, 'After merging chunks'));
    }
    timeEnd('optimize chunks', 3);
    return [...chunkPartition.small, ...chunkPartition.big];
}
function getPartitionedChunks(chunks, minChunkSize) {
    const smallChunks = [];
    const bigChunks = [];
    for (const chunk of chunks) {
        (chunk.size < minChunkSize ? smallChunks : bigChunks).push(chunk);
    }
    if (smallChunks.length === 0) {
        return null;
    }
    smallChunks.sort(compareChunkSize);
    bigChunks.sort(compareChunkSize);
    return {
        big: new Set(bigChunks),
        small: new Set(smallChunks)
    };
}
function compareChunkSize({ size: sizeA }, { size: sizeB }) {
    return sizeA - sizeB;
}
function mergeChunks(chunkPartition, minChunkSize, sideEffectAtoms, sizeByAtom) {
    const { small } = chunkPartition;
    for (const mergedChunk of small) {
        const bestTargetChunk = findBestMergeTarget(mergedChunk, chunkPartition, sideEffectAtoms, sizeByAtom, 
        // In the default case, we do not accept size increases
        minChunkSize <= 1 ? 1 : Infinity);
        if (bestTargetChunk) {
            const { containedAtoms, correlatedAtoms, modules, pure, size } = mergedChunk;
            small.delete(mergedChunk);
            getChunksInPartition(bestTargetChunk, minChunkSize, chunkPartition).delete(bestTargetChunk);
            bestTargetChunk.modules.push(...modules);
            bestTargetChunk.size += size;
            bestTargetChunk.pure &&= pure;
            const { dependencies, dependentChunks, dependentEntries } = bestTargetChunk;
            bestTargetChunk.correlatedAtoms &= correlatedAtoms;
            bestTargetChunk.containedAtoms |= containedAtoms;
            for (const entry of mergedChunk.dependentEntries) {
                dependentEntries.add(entry);
            }
            for (const dependency of mergedChunk.dependencies) {
                dependencies.add(dependency);
                dependency.dependentChunks.delete(mergedChunk);
                dependency.dependentChunks.add(bestTargetChunk);
            }
            for (const dependentChunk of mergedChunk.dependentChunks) {
                dependentChunks.add(dependentChunk);
                dependentChunk.dependencies.delete(mergedChunk);
                dependentChunk.dependencies.add(bestTargetChunk);
            }
            dependencies.delete(bestTargetChunk);
            dependentChunks.delete(bestTargetChunk);
            getChunksInPartition(bestTargetChunk, minChunkSize, chunkPartition).add(bestTargetChunk);
        }
    }
}
function findBestMergeTarget(mergedChunk, { big, small }, sideEffectAtoms, sizeByAtom, smallestAdditionalSize) {
    let bestTargetChunk = null;
    // In the default case, we do not accept size increases
    for (const targetChunk of concatLazy([small, big])) {
        if (mergedChunk === targetChunk)
            continue;
        const additionalSizeAfterMerge = getAdditionalSizeAfterMerge(mergedChunk, targetChunk, smallestAdditionalSize, sideEffectAtoms, sizeByAtom);
        if (additionalSizeAfterMerge < smallestAdditionalSize) {
            bestTargetChunk = targetChunk;
            if (additionalSizeAfterMerge === 0)
                break;
            smallestAdditionalSize = additionalSizeAfterMerge;
        }
    }
    return bestTargetChunk;
}
/**
 * Determine the additional unused code size that would be added by merging the
 * two chunks. This is not an exact measurement but rather an upper bound. If
 * the merge produces cycles or adds non-correlated side effects, `Infinity`
 * is returned.
 * Merging will not produce cycles if none of the direct non-merged
 * dependencies of a chunk have the other chunk as a transitive dependency.
 */
function getAdditionalSizeAfterMerge(mergedChunk, targetChunk, 
// The maximum additional unused code size allowed to be added by the merge,
// taking dependencies into account, needs to be below this number
currentAdditionalSize, sideEffectAtoms, sizeByAtom) {
    const firstSize = getAdditionalSizeIfNoTransitiveDependencyOrNonCorrelatedSideEffect(mergedChunk, targetChunk, currentAdditionalSize, sideEffectAtoms, sizeByAtom);
    return firstSize < currentAdditionalSize
        ? firstSize +
            getAdditionalSizeIfNoTransitiveDependencyOrNonCorrelatedSideEffect(targetChunk, mergedChunk, currentAdditionalSize - firstSize, sideEffectAtoms, sizeByAtom)
        : Infinity;
}
function getAdditionalSizeIfNoTransitiveDependencyOrNonCorrelatedSideEffect(dependentChunk, dependencyChunk, currentAdditionalSize, sideEffectAtoms, sizeByAtom) {
    const { correlatedAtoms } = dependencyChunk;
    let dependencyAtoms = dependentChunk.containedAtoms;
    const dependentContainedSideEffects = dependencyAtoms & sideEffectAtoms;
    if ((correlatedAtoms & dependentContainedSideEffects) !== dependentContainedSideEffects) {
        return Infinity;
    }
    const chunksToCheck = new Set(dependentChunk.dependencies);
    for (const { dependencies, containedAtoms } of chunksToCheck) {
        dependencyAtoms |= containedAtoms;
        const containedSideEffects = containedAtoms & sideEffectAtoms;
        if ((correlatedAtoms & containedSideEffects) !== containedSideEffects) {
            return Infinity;
        }
        for (const dependency of dependencies) {
            if (dependency === dependencyChunk) {
                return Infinity;
            }
            chunksToCheck.add(dependency);
        }
    }
    return getAtomsSizeIfBelowLimit(dependencyAtoms & ~correlatedAtoms, currentAdditionalSize, sizeByAtom);
}
function getAtomsSizeIfBelowLimit(atoms, currentAdditionalSize, sizeByAtom) {
    let size = 0;
    let atomIndex = 0;
    let atomSignature = 1n;
    const { length } = sizeByAtom;
    for (; atomIndex < length; atomIndex++) {
        if ((atoms & atomSignature) === atomSignature) {
            size += sizeByAtom[atomIndex];
        }
        atomSignature <<= 1n;
        if (size >= currentAdditionalSize) {
            return Infinity;
        }
    }
    return size;
}
function getChunksInPartition(chunk, minChunkSize, chunkPartition) {
    return chunk.size < minChunkSize ? chunkPartition.small : chunkPartition.big;
}

// ported from https://github.com/substack/node-commondir
function commondir(files) {
    if (files.length === 0)
        return '/';
    if (files.length === 1)
        return path.dirname(files[0]);
    const commonSegments = files.slice(1).reduce((commonSegments, file) => {
        const pathSegments = file.split(/\/+|\\+/);
        let index;
        for (index = 0; commonSegments[index] === pathSegments[index] &&
            index < Math.min(commonSegments.length, pathSegments.length); index++)
            ;
        return commonSegments.slice(0, index);
    }, files[0].split(/\/+|\\+/));
    // Windows correctly handles paths with forward-slashes
    return commonSegments.length > 1 ? commonSegments.join('/') : '/';
}

const compareExecIndex = (unitA, unitB) => unitA.execIndex > unitB.execIndex ? 1 : -1;
function sortByExecutionOrder(units) {
    units.sort(compareExecIndex);
}
// This process is currently faulty in so far as it only takes the first entry
// module into account and assumes that dynamic imports are imported in a
// certain order.
// A better algorithm would follow every possible execution path and mark which
// modules are executed before or after which other modules. THen the chunking
// would need to take care that in each chunk, all modules are always executed
// in the same sequence.
function analyseModuleExecution(entryModules) {
    let nextExecIndex = 0;
    const cyclePaths = [];
    const analysedModules = new Set();
    const dynamicImports = new Set();
    const parents = new Map();
    const orderedModules = [];
    const handleSyncLoadedModule = (module, parent) => {
        if (parents.has(module)) {
            if (!analysedModules.has(module)) {
                cyclePaths.push(getCyclePath(module, parent, parents));
            }
            return;
        }
        parents.set(module, parent);
        analyseModule(module);
    };
    const analyseModule = (module) => {
        if (module instanceof Module) {
            for (const dependency of module.dependencies) {
                handleSyncLoadedModule(dependency, module);
            }
            for (const dependency of module.implicitlyLoadedBefore) {
                dynamicImports.add(dependency);
            }
            for (const { node: { resolution, scope } } of module.dynamicImports) {
                if (resolution instanceof Module) {
                    if (scope.context.usesTopLevelAwait) {
                        handleSyncLoadedModule(resolution, module);
                    }
                    else {
                        dynamicImports.add(resolution);
                    }
                }
            }
            orderedModules.push(module);
        }
        module.execIndex = nextExecIndex++;
        analysedModules.add(module);
    };
    for (const currentEntry of entryModules) {
        if (!parents.has(currentEntry)) {
            parents.set(currentEntry, null);
            analyseModule(currentEntry);
        }
    }
    for (const currentEntry of dynamicImports) {
        if (!parents.has(currentEntry)) {
            parents.set(currentEntry, null);
            analyseModule(currentEntry);
        }
    }
    return { cyclePaths, orderedModules };
}
function getCyclePath(module, parent, parents) {
    const cycleSymbol = Symbol(module.id);
    const path = [module.id];
    let nextModule = parent;
    module.cycles.add(cycleSymbol);
    while (nextModule !== module) {
        nextModule.cycles.add(cycleSymbol);
        path.push(nextModule.id);
        nextModule = parents.get(nextModule);
    }
    path.push(path[0]);
    path.reverse();
    return path;
}

function getGenerateCodeSnippets({ compact, generatedCode: { arrowFunctions, constBindings, objectShorthand, reservedNamesAsProps } }) {
    const { _, n, s } = compact ? { _: '', n: '', s: '' } : { _: ' ', n: '\n', s: ';' };
    const cnst = constBindings ? 'const' : 'var';
    const getNonArrowFunctionIntro = (parameters, { isAsync, name }) => `${isAsync ? `async ` : ''}function${name ? ` ${name}` : ''}${_}(${parameters.join(`,${_}`)})${_}`;
    const getFunctionIntro = arrowFunctions
        ? (parameters, { isAsync, name }) => {
            const singleParameter = parameters.length === 1;
            const asyncString = isAsync ? `async${singleParameter ? ' ' : _}` : '';
            return `${name ? `${cnst} ${name}${_}=${_}` : ''}${asyncString}${singleParameter ? parameters[0] : `(${parameters.join(`,${_}`)})`}${_}=>${_}`;
        }
        : getNonArrowFunctionIntro;
    const getDirectReturnFunction = (parameters, { functionReturn, lineBreakIndent, name }) => [
        `${getFunctionIntro(parameters, {
            isAsync: false,
            name
        })}${arrowFunctions
            ? lineBreakIndent
                ? `${n}${lineBreakIndent.base}${lineBreakIndent.t}`
                : ''
            : `{${lineBreakIndent ? `${n}${lineBreakIndent.base}${lineBreakIndent.t}` : _}${functionReturn ? 'return ' : ''}`}`,
        arrowFunctions
            ? `${name ? ';' : ''}${lineBreakIndent ? `${n}${lineBreakIndent.base}` : ''}`
            : `${s}${lineBreakIndent ? `${n}${lineBreakIndent.base}` : _}}`
    ];
    const isValidPropertyName = reservedNamesAsProps
        ? (name) => VALID_IDENTIFIER_REGEXP.test(name)
        : (name) => !RESERVED_NAMES.has(name) && VALID_IDENTIFIER_REGEXP.test(name);
    return {
        _,
        cnst,
        getDirectReturnFunction,
        getDirectReturnIifeLeft: (parameters, returned, { needsArrowReturnParens, needsWrappedFunction }) => {
            const [left, right] = getDirectReturnFunction(parameters, {
                functionReturn: true,
                lineBreakIndent: null,
                name: null
            });
            return `${wrapIfNeeded(`${left}${wrapIfNeeded(returned, arrowFunctions && needsArrowReturnParens)}${right}`, arrowFunctions || needsWrappedFunction)}(`;
        },
        getFunctionIntro,
        getNonArrowFunctionIntro,
        getObject(fields, { lineBreakIndent }) {
            const prefix = lineBreakIndent ? `${n}${lineBreakIndent.base}${lineBreakIndent.t}` : _;
            return `{${fields
                .map(([key, value]) => {
                if (key === null)
                    return `${prefix}${value}`;
                const keyInObject = stringifyObjectKeyIfNeeded(key);
                return key === value && objectShorthand && key === keyInObject
                    ? prefix + key
                    : `${prefix}${keyInObject}:${_}${value}`;
            })
                .join(`,`)}${fields.length === 0 ? '' : lineBreakIndent ? `${n}${lineBreakIndent.base}` : _}}`;
        },
        getPropertyAccess: (name) => isValidPropertyName(name) ? `.${name}` : `[${JSON.stringify(name)}]`,
        n,
        s
    };
}
const wrapIfNeeded = (code, needsParens) => needsParens ? `(${code})` : code;

class Source {
    constructor(filename, content) {
        this.isOriginal = true;
        this.filename = filename;
        this.content = content;
    }
    traceSegment(line, column, name) {
        return { column, line, name, source: this };
    }
}
class Link {
    constructor(map, sources) {
        this.sources = sources;
        this.names = map.names;
        this.mappings = map.mappings;
    }
    traceMappings() {
        const sources = [];
        const sourceIndexMap = new Map();
        const sourcesContent = [];
        const names = [];
        const nameIndexMap = new Map();
        const mappings = [];
        for (const line of this.mappings) {
            const tracedLine = [];
            for (const segment of line) {
                if (segment.length === 1)
                    continue;
                const source = this.sources[segment[1]];
                if (!source)
                    continue;
                const traced = source.traceSegment(segment[2], segment[3], segment.length === 5 ? this.names[segment[4]] : '');
                if (traced) {
                    const { column, line, name, source: { content, filename } } = traced;
                    let sourceIndex = sourceIndexMap.get(filename);
                    if (sourceIndex === undefined) {
                        sourceIndex = sources.length;
                        sources.push(filename);
                        sourceIndexMap.set(filename, sourceIndex);
                        sourcesContent[sourceIndex] = content;
                    }
                    else if (sourcesContent[sourceIndex] == null) {
                        sourcesContent[sourceIndex] = content;
                    }
                    else if (content != null && sourcesContent[sourceIndex] !== content) {
                        return parseAst_js.error(parseAst_js.logConflictingSourcemapSources(filename));
                    }
                    const tracedSegment = [segment[0], sourceIndex, line, column];
                    if (name) {
                        let nameIndex = nameIndexMap.get(name);
                        if (nameIndex === undefined) {
                            nameIndex = names.length;
                            names.push(name);
                            nameIndexMap.set(name, nameIndex);
                        }
                        tracedSegment[4] = nameIndex;
                    }
                    tracedLine.push(tracedSegment);
                }
            }
            mappings.push(tracedLine);
        }
        return { mappings, names, sources, sourcesContent };
    }
    traceSegment(line, column, name) {
        const segments = this.mappings[line];
        if (!segments)
            return null;
        // binary search through segments for the given column
        let searchStart = 0;
        const lastSegmentIndex = segments.length - 1;
        let searchEnd = lastSegmentIndex;
        while (searchStart <= searchEnd) {
            const m = (searchStart + searchEnd) >> 1;
            let segment = segments[m];
            // If a sourcemap does not have sufficient resolution to contain a
            // necessary mapping, e.g. because it only contains line information or
            // the column is not precise (e.g. the sourcemap is generated by esbuild, segment[0] may be shorter than the location of the first letter),
            // we approximate by finding the closest segment whose segment[0] is less than the given column
            if (segment[0] !== column && searchStart === searchEnd) {
                const approximatedSegmentIndex = segments[searchStart][0] > column ? Math.max(0, searchStart - 1) : searchStart;
                segment = segments[approximatedSegmentIndex];
            }
            if (segment[0] === column || searchStart === searchEnd) {
                if (segment.length == 1)
                    return null;
                const source = this.sources[segment[1]];
                if (!source)
                    return null;
                return source.traceSegment(segment[2], segment[3], segment.length === 5 ? this.names[segment[4]] : name);
            }
            if (segment[0] > column) {
                searchEnd = m - 1;
            }
            else {
                searchStart = m + 1;
            }
        }
        return null;
    }
}
function getLinkMap(log) {
    return function linkMap(source, map) {
        if (!map.missing) {
            return new Link(map, [source]);
        }
        log(parseAst_js.LOGLEVEL_WARN, parseAst_js.logSourcemapBroken(map.plugin));
        return new Link({
            mappings: [],
            names: []
        }, [source]);
    };
}
function getCollapsedSourcemap(id, originalCode, originalSourcemap, sourcemapChain, linkMap) {
    let source;
    if (originalSourcemap) {
        const sources = originalSourcemap.sources;
        const sourcesContent = originalSourcemap.sourcesContent || [];
        const directory = path.dirname(id) || '.';
        const sourceRoot = originalSourcemap.sourceRoot || '.';
        const baseSources = sources.map((source, index) => new Source(path.resolve(directory, sourceRoot, source), sourcesContent[index]));
        source = new Link(originalSourcemap, baseSources);
    }
    else {
        source = new Source(id, originalCode);
    }
    return sourcemapChain.reduce(linkMap, source);
}
function collapseSourcemaps(file, map, modules, bundleSourcemapChain, excludeContent, log) {
    const linkMap = getLinkMap(log);
    const moduleSources = modules
        .filter(module => !module.excludeFromSourcemap)
        .map(module => getCollapsedSourcemap(module.id, module.originalCode, module.originalSourcemap, module.sourcemapChain, linkMap));
    const link = new Link(map, moduleSources);
    const source = bundleSourcemapChain.reduce(linkMap, link);
    let { sources, sourcesContent, names, mappings } = source.traceMappings();
    if (file) {
        const directory = path.dirname(file);
        sources = sources.map((source) => path.relative(directory, source));
        file = path.basename(file);
    }
    for (const module of modules) {
        resetSourcemapCache(module.originalSourcemap, module.sourcemapChain);
    }
    return new SourceMap({
        file,
        mappings,
        names,
        sources,
        sourcesContent: excludeContent ? undefined : sourcesContent
    });
}
function collapseSourcemap(id, originalCode, originalSourcemap, sourcemapChain, log) {
    if (sourcemapChain.length === 0) {
        return originalSourcemap;
    }
    const source = getCollapsedSourcemap(id, originalCode, originalSourcemap, sourcemapChain, getLinkMap(log));
    const map = source.traceMappings();
    return decodedSourcemap({ version: 3, ...map });
}

// this looks ridiculous, but it prevents sourcemap tooling from mistaking
// this for an actual sourceMappingURL
let SOURCEMAPPING_URL = 'sourceMa';
SOURCEMAPPING_URL += 'ppingURL';

async function renderChunks(chunks, bundle, pluginDriver, outputOptions, log) {
    timeStart('render chunks', 2);
    reserveEntryChunksInBundle(chunks);
    const renderedChunks = await Promise.all(chunks.map(chunk => chunk.render()));
    timeEnd('render chunks', 2);
    timeStart('transform chunks', 2);
    const getHash = hasherByType[outputOptions.hashCharacters];
    const chunkGraph = getChunkGraph(chunks);
    const { hashDependenciesByPlaceholder, initialHashesByPlaceholder, nonHashedChunksWithPlaceholders, placeholders, renderedChunksByPlaceholder } = await transformChunksAndGenerateContentHashes(renderedChunks, chunkGraph, outputOptions, pluginDriver, getHash, log);
    const hashesByPlaceholder = generateFinalHashes(renderedChunksByPlaceholder, hashDependenciesByPlaceholder, initialHashesByPlaceholder, placeholders, bundle, getHash);
    addChunksToBundle(renderedChunksByPlaceholder, hashesByPlaceholder, bundle, nonHashedChunksWithPlaceholders, pluginDriver, outputOptions);
    timeEnd('transform chunks', 2);
}
function reserveEntryChunksInBundle(chunks) {
    for (const chunk of chunks) {
        if (chunk.facadeModule && chunk.facadeModule.isUserDefinedEntryPoint) {
            // reserves name in bundle as side effect if it does not contain a hash
            chunk.getPreliminaryFileName();
        }
    }
}
function getChunkGraph(chunks) {
    return Object.fromEntries(chunks.map(chunk => {
        const renderedChunkInfo = chunk.getRenderedChunkInfo();
        return [renderedChunkInfo.fileName, renderedChunkInfo];
    }));
}
async function transformChunk(magicString, fileName, usedModules, chunkGraph, options, outputPluginDriver, log) {
    let map = null;
    const sourcemapChain = [];
    let code = await outputPluginDriver.hookReduceArg0('renderChunk', [magicString.toString(), chunkGraph[fileName], options, { chunks: chunkGraph }], (code, result, plugin) => {
        if (result == null)
            return code;
        if (typeof result === 'string')
            result = {
                code: result,
                map: undefined
            };
        // strict null check allows 'null' maps to not be pushed to the chain, while 'undefined' gets the missing map warning
        if (result.map !== null) {
            const map = decodedSourcemap(result.map);
            sourcemapChain.push(map || { missing: true, plugin: plugin.name });
        }
        return result.code;
    });
    const { compact, dir, file, sourcemap, sourcemapExcludeSources, sourcemapFile, sourcemapPathTransform, sourcemapIgnoreList } = options;
    if (!compact && code[code.length - 1] !== '\n')
        code += '\n';
    if (sourcemap) {
        timeStart('sourcemaps', 3);
        let resultingFile;
        if (file)
            resultingFile = path.resolve(sourcemapFile || file);
        else if (dir)
            resultingFile = path.resolve(dir, fileName);
        else
            resultingFile = path.resolve(fileName);
        const decodedMap = magicString.generateDecodedMap({});
        map = collapseSourcemaps(resultingFile, decodedMap, usedModules, sourcemapChain, sourcemapExcludeSources, log);
        for (let sourcesIndex = 0; sourcesIndex < map.sources.length; ++sourcesIndex) {
            let sourcePath = map.sources[sourcesIndex];
            const sourcemapPath = `${resultingFile}.map`;
            const ignoreList = sourcemapIgnoreList(sourcePath, sourcemapPath);
            if (typeof ignoreList !== 'boolean') {
                parseAst_js.error(parseAst_js.logFailedValidation('sourcemapIgnoreList function must return a boolean.'));
            }
            if (ignoreList) {
                if (map.x_google_ignoreList === undefined) {
                    map.x_google_ignoreList = [];
                }
                if (!map.x_google_ignoreList.includes(sourcesIndex)) {
                    map.x_google_ignoreList.push(sourcesIndex);
                }
            }
            if (sourcemapPathTransform) {
                sourcePath = sourcemapPathTransform(sourcePath, sourcemapPath);
                if (typeof sourcePath !== 'string') {
                    parseAst_js.error(parseAst_js.logFailedValidation(`sourcemapPathTransform function must return a string.`));
                }
            }
            map.sources[sourcesIndex] = parseAst_js.normalize(sourcePath);
        }
        timeEnd('sourcemaps', 3);
    }
    return {
        code,
        map
    };
}
async function transformChunksAndGenerateContentHashes(renderedChunks, chunkGraph, outputOptions, pluginDriver, getHash, log) {
    const nonHashedChunksWithPlaceholders = [];
    const renderedChunksByPlaceholder = new Map();
    const hashDependenciesByPlaceholder = new Map();
    const initialHashesByPlaceholder = new Map();
    const placeholders = new Set();
    for (const { preliminaryFileName: { hashPlaceholder } } of renderedChunks) {
        if (hashPlaceholder)
            placeholders.add(hashPlaceholder);
    }
    await Promise.all(renderedChunks.map(async ({ chunk, preliminaryFileName: { fileName, hashPlaceholder }, preliminarySourcemapFileName, magicString, usedModules }) => {
        const transformedChunk = {
            chunk,
            fileName,
            sourcemapFileName: preliminarySourcemapFileName?.fileName ?? null,
            ...(await transformChunk(magicString, fileName, usedModules, chunkGraph, outputOptions, pluginDriver, log))
        };
        const { code, map } = transformedChunk;
        if (hashPlaceholder) {
            // To create a reproducible content-only hash, all placeholders are
            // replaced with the same value before hashing
            const { containedPlaceholders, transformedCode } = replacePlaceholdersWithDefaultAndGetContainedPlaceholders(code, placeholders);
            let contentToHash = transformedCode;
            const hashAugmentation = pluginDriver.hookReduceValueSync('augmentChunkHash', '', [chunk.getRenderedChunkInfo()], (augmentation, pluginHash) => {
                if (pluginHash) {
                    augmentation += pluginHash;
                }
                return augmentation;
            });
            if (hashAugmentation) {
                contentToHash += hashAugmentation;
            }
            renderedChunksByPlaceholder.set(hashPlaceholder, transformedChunk);
            hashDependenciesByPlaceholder.set(hashPlaceholder, {
                containedPlaceholders,
                contentHash: getHash(contentToHash)
            });
        }
        else {
            nonHashedChunksWithPlaceholders.push(transformedChunk);
        }
        const sourcemapHashPlaceholder = preliminarySourcemapFileName?.hashPlaceholder;
        if (map && sourcemapHashPlaceholder) {
            initialHashesByPlaceholder.set(preliminarySourcemapFileName.hashPlaceholder, getHash(map.toString()).slice(0, preliminarySourcemapFileName.hashPlaceholder.length));
        }
    }));
    return {
        hashDependenciesByPlaceholder,
        initialHashesByPlaceholder,
        nonHashedChunksWithPlaceholders,
        placeholders,
        renderedChunksByPlaceholder
    };
}
function generateFinalHashes(renderedChunksByPlaceholder, hashDependenciesByPlaceholder, initialHashesByPlaceholder, placeholders, bundle, getHash) {
    const hashesByPlaceholder = new Map(initialHashesByPlaceholder);
    for (const placeholder of placeholders) {
        const { fileName } = renderedChunksByPlaceholder.get(placeholder);
        let contentToHash = '';
        const hashDependencyPlaceholders = new Set([placeholder]);
        for (const dependencyPlaceholder of hashDependencyPlaceholders) {
            const { containedPlaceholders, contentHash } = hashDependenciesByPlaceholder.get(dependencyPlaceholder);
            contentToHash += contentHash;
            for (const containedPlaceholder of containedPlaceholders) {
                // When looping over a map, setting an entry only causes a new iteration if the key is new
                hashDependencyPlaceholders.add(containedPlaceholder);
            }
        }
        let finalFileName;
        let finalHash;
        do {
            // In case of a hash collision, create a hash of the hash
            if (finalHash) {
                contentToHash = finalHash;
            }
            finalHash = getHash(contentToHash).slice(0, placeholder.length);
            finalFileName = replaceSinglePlaceholder(fileName, placeholder, finalHash);
        } while (bundle[lowercaseBundleKeys].has(finalFileName.toLowerCase()));
        bundle[finalFileName] = FILE_PLACEHOLDER;
        hashesByPlaceholder.set(placeholder, finalHash);
    }
    return hashesByPlaceholder;
}
function addChunksToBundle(renderedChunksByPlaceholder, hashesByPlaceholder, bundle, nonHashedChunksWithPlaceholders, pluginDriver, options) {
    for (const { chunk, code, fileName, sourcemapFileName, map } of renderedChunksByPlaceholder.values()) {
        let updatedCode = replacePlaceholders(code, hashesByPlaceholder);
        const finalFileName = replacePlaceholders(fileName, hashesByPlaceholder);
        let finalSourcemapFileName = null;
        if (map) {
            if (options.sourcemapDebugIds) {
                updatedCode += calculateDebugIdAndGetComment(updatedCode, map);
            }
            finalSourcemapFileName = sourcemapFileName
                ? replacePlaceholders(sourcemapFileName, hashesByPlaceholder)
                : `${finalFileName}.map`;
            map.file = replacePlaceholders(map.file, hashesByPlaceholder);
            updatedCode += emitSourceMapAndGetComment(finalSourcemapFileName, map, pluginDriver, options);
        }
        bundle[finalFileName] = chunk.finalizeChunk(updatedCode, map, finalSourcemapFileName, hashesByPlaceholder);
    }
    for (const { chunk, code, fileName, sourcemapFileName, map } of nonHashedChunksWithPlaceholders) {
        let updatedCode = hashesByPlaceholder.size > 0 ? replacePlaceholders(code, hashesByPlaceholder) : code;
        let finalSourcemapFileName = null;
        if (map) {
            if (options.sourcemapDebugIds) {
                updatedCode += calculateDebugIdAndGetComment(updatedCode, map);
            }
            finalSourcemapFileName = sourcemapFileName
                ? replacePlaceholders(sourcemapFileName, hashesByPlaceholder)
                : `${fileName}.map`;
            updatedCode += emitSourceMapAndGetComment(finalSourcemapFileName, map, pluginDriver, options);
        }
        bundle[fileName] = chunk.finalizeChunk(updatedCode, map, finalSourcemapFileName, hashesByPlaceholder);
    }
}
function emitSourceMapAndGetComment(fileName, map, pluginDriver, { sourcemap, sourcemapBaseUrl }) {
    let url;
    if (sourcemap === 'inline') {
        url = map.toUrl();
    }
    else {
        const sourcemapFileName = path.basename(fileName);
        url = sourcemapBaseUrl
            ? new URL(sourcemapFileName, sourcemapBaseUrl).toString()
            : sourcemapFileName;
        pluginDriver.emitFile({
            fileName,
            originalFileName: null,
            source: map.toString(),
            type: 'asset'
        });
    }
    return sourcemap === 'hidden' ? '' : `//# ${SOURCEMAPPING_URL}=${url}\n`;
}
function calculateDebugIdAndGetComment(code, map) {
    const hash = hasherByType.hex(code);
    const debugId = [
        hash.slice(0, 8),
        hash.slice(8, 12),
        '4' + hash.slice(12, 15),
        ((parseInt(hash.slice(15, 16), 16) & 3) | 8).toString(16) + hash.slice(17, 20),
        hash.slice(20, 32)
    ].join('-');
    map.debugId = debugId;
    return '//# debugId=' + debugId + '\n';
}

class Bundle {
    constructor(outputOptions, unsetOptions, inputOptions, pluginDriver, graph) {
        this.outputOptions = outputOptions;
        this.unsetOptions = unsetOptions;
        this.inputOptions = inputOptions;
        this.pluginDriver = pluginDriver;
        this.graph = graph;
        this.facadeChunkByModule = new Map();
        this.includedNamespaces = new Set();
    }
    async generate(isWrite) {
        timeStart('GENERATE', 1);
        const outputBundleBase = Object.create(null);
        const outputBundle = getOutputBundle(outputBundleBase);
        this.pluginDriver.setOutputBundle(outputBundle, this.outputOptions);
        try {
            timeStart('initialize render', 2);
            await this.pluginDriver.hookParallel('renderStart', [this.outputOptions, this.inputOptions]);
            timeEnd('initialize render', 2);
            timeStart('generate chunks', 2);
            const getHashPlaceholder = getHashPlaceholderGenerator();
            const chunks = await this.generateChunks(outputBundle, getHashPlaceholder);
            if (chunks.length > 1) {
                validateOptionsForMultiChunkOutput(this.outputOptions, this.inputOptions.onLog);
            }
            this.pluginDriver.setChunkInformation(this.facadeChunkByModule);
            for (const chunk of chunks) {
                chunk.generateExports();
                chunk.inlineTransitiveImports();
            }
            timeEnd('generate chunks', 2);
            await renderChunks(chunks, outputBundle, this.pluginDriver, this.outputOptions, this.inputOptions.onLog);
        }
        catch (error_) {
            await this.pluginDriver.hookParallel('renderError', [error_]);
            throw error_;
        }
        removeUnreferencedAssets(outputBundle);
        timeStart('generate bundle', 2);
        await this.pluginDriver.hookSeq('generateBundle', [
            this.outputOptions,
            outputBundle,
            isWrite
        ]);
        this.finaliseAssets(outputBundle);
        validateOutputBundleFileNames(outputBundle);
        timeEnd('generate bundle', 2);
        timeEnd('GENERATE', 1);
        return outputBundleBase;
    }
    async addManualChunks(manualChunks) {
        const manualChunkAliasByEntry = new Map();
        const chunkEntries = await Promise.all(Object.entries(manualChunks).map(async ([alias, files]) => ({
            alias,
            entries: await this.graph.moduleLoader.addAdditionalModules(files, true)
        })));
        for (const { alias, entries } of chunkEntries) {
            for (const entry of entries) {
                addModuleToManualChunk(alias, entry, manualChunkAliasByEntry);
            }
        }
        return manualChunkAliasByEntry;
    }
    assignManualChunks(getManualChunk) {
        const manualChunkAliasByEntry = new Map();
        const manualChunksApi = {
            getModuleIds: () => this.graph.modulesById.keys(),
            getModuleInfo: this.graph.getModuleInfo
        };
        for (const module of this.graph.modulesById.values()) {
            if (module instanceof Module) {
                const manualChunkAlias = getManualChunk(module.id, manualChunksApi);
                if (typeof manualChunkAlias === 'string') {
                    addModuleToManualChunk(manualChunkAlias, module, manualChunkAliasByEntry);
                }
            }
        }
        return manualChunkAliasByEntry;
    }
    finaliseAssets(bundle) {
        if (this.outputOptions.validate) {
            for (const file of Object.values(bundle)) {
                if ('code' in file) {
                    try {
                        parseAst_js.parseAst(file.code, { jsx: this.inputOptions.jsx !== false });
                    }
                    catch (error_) {
                        this.inputOptions.onLog(parseAst_js.LOGLEVEL_WARN, parseAst_js.logChunkInvalid(file, error_));
                    }
                }
            }
        }
        this.pluginDriver.finaliseAssets();
    }
    async generateChunks(bundle, getHashPlaceholder) {
        const { experimentalMinChunkSize, inlineDynamicImports, manualChunks, preserveModules, onlyExplicitManualChunks } = this.outputOptions;
        const manualChunkAliasByEntry = typeof manualChunks === 'object'
            ? await this.addManualChunks(manualChunks)
            : this.assignManualChunks(manualChunks);
        const snippets = getGenerateCodeSnippets(this.outputOptions);
        const includedModules = getIncludedModules(this.graph.modulesById);
        const inputBase = commondir(getAbsoluteEntryModulePaths(includedModules, preserveModules));
        const externalChunkByModule = getExternalChunkByModule(this.graph.modulesById, this.outputOptions, inputBase);
        const executableModule = inlineDynamicImports
            ? [{ alias: null, modules: includedModules }]
            : preserveModules
                ? includedModules.map(module => ({ alias: null, modules: [module] }))
                : getChunkAssignments(this.graph.entryModules, manualChunkAliasByEntry, experimentalMinChunkSize, this.inputOptions.onLog, typeof manualChunks === 'function', onlyExplicitManualChunks);
        const chunks = new Array(executableModule.length);
        const chunkByModule = new Map();
        let index = 0;
        for (const { alias, modules } of executableModule) {
            sortByExecutionOrder(modules);
            const chunk = new Chunk(modules, this.inputOptions, this.outputOptions, this.unsetOptions, this.pluginDriver, this.graph.modulesById, chunkByModule, externalChunkByModule, this.facadeChunkByModule, this.includedNamespaces, alias, getHashPlaceholder, bundle, inputBase, snippets);
            chunks[index++] = chunk;
        }
        for (const chunk of chunks) {
            chunk.link();
        }
        if (!inlineDynamicImports && !preserveModules) {
            this.checkCircularChunks(chunks);
        }
        const facades = [];
        for (const chunk of chunks) {
            facades.push(...chunk.generateFacades());
        }
        return [...chunks, ...facades];
    }
    checkCircularChunks(chunks) {
        const visited = new Set();
        const parents = new Map();
        const handleDependency = (chunk, parent) => {
            if (parents.has(chunk)) {
                if (!visited.has(chunk)) {
                    const path = [chunk.getChunkName()];
                    let isManualChunkConflict = chunk.isManualChunk;
                    let nextChunk = parent;
                    while (nextChunk !== chunk && nextChunk) {
                        path.push(nextChunk.getChunkName());
                        isManualChunkConflict &&= nextChunk.isManualChunk;
                        nextChunk = parents.get(nextChunk);
                    }
                    path.push(path[0]);
                    path.reverse();
                    this.inputOptions.onLog(parseAst_js.LOGLEVEL_WARN, parseAst_js.logCircularChunk(path, isManualChunkConflict));
                }
                return;
            }
            parents.set(chunk, parent);
            analyseChunk(chunk);
        };
        const analyseChunk = (chunk) => {
            for (const dependency of chunk.dependencies) {
                if (dependency instanceof Chunk) {
                    handleDependency(dependency, chunk);
                }
            }
            visited.add(chunk);
        };
        for (const chunk of chunks) {
            if (!parents.has(chunk)) {
                analyseChunk(chunk);
            }
        }
    }
}
function validateOptionsForMultiChunkOutput(outputOptions, log) {
    if (outputOptions.format === 'umd' || outputOptions.format === 'iife')
        return parseAst_js.error(parseAst_js.logInvalidOption('output.format', parseAst_js.URL_OUTPUT_FORMAT, 'UMD and IIFE output formats are not supported for code-splitting builds', outputOptions.format));
    if (typeof outputOptions.file === 'string')
        return parseAst_js.error(parseAst_js.logInvalidOption('output.file', parseAst_js.URL_OUTPUT_DIR, 'when building multiple chunks, the "output.dir" option must be used, not "output.file". To inline dynamic imports, set the "inlineDynamicImports" option'));
    if (outputOptions.sourcemapFile)
        return parseAst_js.error(parseAst_js.logInvalidOption('output.sourcemapFile', parseAst_js.URL_OUTPUT_SOURCEMAPFILE, '"output.sourcemapFile" is only supported for single-file builds'));
    if (!outputOptions.amd.autoId && outputOptions.amd.id)
        log(parseAst_js.LOGLEVEL_WARN, parseAst_js.logInvalidOption('output.amd.id', parseAst_js.URL_OUTPUT_AMD_ID, 'this option is only properly supported for single-file builds. Use "output.amd.autoId" and "output.amd.basePath" instead'));
}
function getIncludedModules(modulesById) {
    const includedModules = [];
    for (const module of modulesById.values()) {
        if (module instanceof Module &&
            (module.isIncluded() || module.info.isEntry || module.includedDynamicImporters.length > 0)) {
            includedModules.push(module);
        }
    }
    return includedModules;
}
function getAbsoluteEntryModulePaths(includedModules, preserveModules) {
    const absoluteEntryModulePaths = [];
    for (const module of includedModules) {
        if ((module.info.isEntry || preserveModules) && parseAst_js.isAbsolute(module.id)) {
            absoluteEntryModulePaths.push(module.id);
        }
    }
    return absoluteEntryModulePaths;
}
function getExternalChunkByModule(modulesById, outputOptions, inputBase) {
    const externalChunkByModule = new Map();
    for (const module of modulesById.values()) {
        if (module instanceof ExternalModule) {
            externalChunkByModule.set(module, new ExternalChunk(module, outputOptions, inputBase));
        }
    }
    return externalChunkByModule;
}
function addModuleToManualChunk(alias, module, manualChunkAliasByEntry) {
    const existingAlias = manualChunkAliasByEntry.get(module);
    if (typeof existingAlias === 'string' && existingAlias !== alias) {
        return parseAst_js.error(parseAst_js.logCannotAssignModuleToChunk(module.id, alias, existingAlias));
    }
    manualChunkAliasByEntry.set(module, alias);
}
function isFileNameOutsideOutputDirectory(fileName) {
    // Use join() to normalize ".." segments, then replace backslashes so the
    // string checks below work identically on Windows and POSIX.
    const normalized = path.join(fileName).replaceAll('\\', '/');
    return (normalized === '..' ||
        normalized.startsWith('../') ||
        normalized === '.' ||
        parseAst_js.isAbsolute(normalized));
}
function validateOutputBundleFileNames(bundle) {
    for (const [bundleKey, entry] of Object.entries(bundle)) {
        if (isFileNameOutsideOutputDirectory(bundleKey)) {
            return parseAst_js.error(parseAst_js.logFileNameOutsideOutputDirectory(bundleKey));
        }
        if (entry.type !== 'placeholder') {
            const { fileName } = entry;
            if (fileName !== bundleKey && isFileNameOutsideOutputDirectory(fileName)) {
                return parseAst_js.error(parseAst_js.logFileNameOutsideOutputDirectory(fileName));
            }
        }
    }
}

function flru (max) {
	var num, curr, prev;
	var limit = max;

	function keep(key, value) {
		if (++num > limit) {
			prev = curr;
			reset(1);
			++num;
		}
		curr[key] = value;
	}

	function reset(isPartial) {
		num = 0;
		curr = Object.create(null);
		isPartial || (prev=Object.create(null));
	}

	reset();

	return {
		clear: reset,
		has: function (key) {
			return curr[key] !== void 0 || prev[key] !== void 0;
		},
		get: function (key) {
			var val = curr[key];
			if (val !== void 0) return val;
			if ((val=prev[key]) !== void 0) {
				keep(key, val);
				return val;
			}
		},
		set: function (key, value) {
			if (curr[key] !== void 0) {
				curr[key] = value;
			} else {
				keep(key, value);
			}
		}
	};
}

class GlobalScope extends Scope {
    constructor() {
        super();
        this.parent = null;
        this.variables.set('undefined', new UndefinedVariable());
    }
    findVariable(name) {
        let variable = this.variables.get(name);
        if (!variable) {
            variable = new GlobalVariable(name);
            this.variables.set(name, variable);
        }
        return variable;
    }
}

function resolveIdViaPlugins(source, importer, pluginDriver, moduleLoaderResolveId, skip, customOptions, isEntry, attributes, importerAttributes) {
    let skipped = null;
    let replaceContext = null;
    if (skip) {
        skipped = new Set();
        for (const skippedCall of skip) {
            if (source === skippedCall.source && importer === skippedCall.importer) {
                skipped.add(skippedCall.plugin);
            }
        }
        replaceContext = (pluginContext, plugin) => ({
            ...pluginContext,
            resolve: (source, importer, { attributes, custom, isEntry, skipSelf, importerAttributes } = parseAst_js.BLANK) => {
                skipSelf ??= true;
                if (skipSelf &&
                    skip.findIndex(skippedCall => {
                        return (skippedCall.plugin === plugin &&
                            skippedCall.source === source &&
                            skippedCall.importer === importer);
                    }) !== -1) {
                    // This means that the plugin recursively called itself
                    // Thus returning Promise.resolve(null) in purpose of fallback to default behavior of `resolveId` plugin hook.
                    return Promise.resolve(null);
                }
                return moduleLoaderResolveId(source, importer, custom, isEntry, attributes || parseAst_js.EMPTY_OBJECT, importerAttributes, skipSelf ? [...skip, { importer, plugin, source }] : skip);
            }
        });
    }
    return pluginDriver.hookFirstAndGetPlugin('resolveId', [source, importer, { attributes, custom: customOptions, importerAttributes, isEntry }], replaceContext, skipped);
}

async function resolveId(source, importer, preserveSymlinks, pluginDriver, moduleLoaderResolveId, skip, customOptions, isEntry, attributes, importerAttributes, fs) {
    const pluginResult = await resolveIdViaPlugins(source, importer, pluginDriver, moduleLoaderResolveId, skip, customOptions, isEntry, attributes, importerAttributes);
    if (pluginResult != null) {
        const [resolveIdResult, plugin] = pluginResult;
        if (typeof resolveIdResult === 'object' && !resolveIdResult.resolvedBy) {
            return {
                ...resolveIdResult,
                resolvedBy: plugin.name
            };
        }
        if (typeof resolveIdResult === 'string') {
            return {
                id: resolveIdResult,
                resolvedBy: plugin.name
            };
        }
        return resolveIdResult;
    }
    // external modules (non-entry modules that start with neither '.' or '/')
    // are skipped at this stage.
    if (importer !== undefined && !parseAst_js.isAbsolute(source) && source[0] !== '.')
        return null;
    // `resolve` processes paths from right to left, prepending them until an
    // absolute path is created. Absolute importees therefore shortcircuit the
    // resolve call and require no special handing on our part.
    // See https://nodejs.org/api/path.html#path_path_resolve_paths
    return addJsExtensionIfNecessary(importer ? path.resolve(path.dirname(importer), source) : path.resolve(source), preserveSymlinks, fs);
}
async function addJsExtensionIfNecessary(file, preserveSymlinks, fs) {
    return ((await findFile(file, preserveSymlinks, fs)) ??
        (await findFile(file + '.mjs', preserveSymlinks, fs)) ??
        (await findFile(file + '.js', preserveSymlinks, fs)));
}
async function findFile(file, preserveSymlinks, fs) {
    try {
        const stats = await fs.lstat(file);
        if (!preserveSymlinks && stats.isSymbolicLink())
            return await findFile(await fs.realpath(file), preserveSymlinks, fs);
        if ((preserveSymlinks && stats.isSymbolicLink()) || stats.isFile()) {
            // check case
            const name = path.basename(file);
            const files = await fs.readdir(path.dirname(file));
            if (files.includes(name))
                return file;
        }
    }
    catch {
        // suppress
    }
}

function stripBom(content) {
    if (content.charCodeAt(0) === 0xfe_ff) {
        return stripBom(content.slice(1));
    }
    return content;
}

async function transform(source, module, pluginDriver, options) {
    const id = module.id;
    const sourcemapChain = [];
    let originalSourcemap = source.map === null ? null : decodedSourcemap(source.map);
    const originalCode = source.code;
    let ast = source.ast;
    const transformDependencies = [];
    const emittedFiles = [];
    let customTransformCache = false;
    const useCustomTransformCache = () => (customTransformCache = true);
    let pluginName = '';
    let currentSource = source.code;
    function transformReducer(previousCode, result, plugin) {
        let code;
        let map;
        if (typeof result === 'string') {
            code = result;
        }
        else if (result && typeof result === 'object') {
            module.updateOptions(result);
            if (result.code == null) {
                if (result.map || result.ast) {
                    options.onLog(parseAst_js.LOGLEVEL_WARN, parseAst_js.logNoTransformMapOrAstWithoutCode(plugin.name));
                }
                return previousCode;
            }
            if (result.attributes) {
                parseAst_js.warnDeprecation('Returning attributes from the "transform" hook is forbidden.', parseAst_js.URL_TRANSFORM, false, options);
            }
            ({ code, map, ast } = result);
        }
        else {
            return previousCode;
        }
        // strict null check allows 'null' maps to not be pushed to the chain,
        // while 'undefined' gets the missing map warning
        if (map !== null) {
            sourcemapChain.push(decodedSourcemap(typeof map === 'string' ? JSON.parse(map) : map) || {
                missing: true,
                plugin: plugin.name
            });
        }
        currentSource = code;
        return code;
    }
    const getLogHandler = (handler) => (log, pos) => {
        log = normalizeLog(log);
        if (pos)
            parseAst_js.augmentCodeLocation(log, pos, currentSource, id);
        log.id = id;
        log.hook = 'transform';
        handler(log);
    };
    let code;
    try {
        code = await pluginDriver.hookReduceArg0('transform', [
            currentSource,
            id,
            {
                attributes: module.info.attributes
            }
        ], transformReducer, (pluginContext, plugin) => {
            pluginName = plugin.name;
            return {
                ...pluginContext,
                addWatchFile(id) {
                    transformDependencies.push(id);
                    pluginContext.addWatchFile(id);
                },
                cache: customTransformCache
                    ? pluginContext.cache
                    : getTrackedPluginCache(pluginContext.cache, useCustomTransformCache),
                debug: getLogHandler(pluginContext.debug),
                emitFile(emittedFile) {
                    emittedFiles.push(emittedFile);
                    return pluginDriver.emitFile(emittedFile);
                },
                error(error_, pos) {
                    if (typeof error_ === 'string')
                        error_ = { message: error_ };
                    if (pos)
                        parseAst_js.augmentCodeLocation(error_, pos, currentSource, id);
                    error_.id = id;
                    error_.hook = 'transform';
                    return pluginContext.error(error_);
                },
                getCombinedSourcemap() {
                    const combinedMap = collapseSourcemap(id, originalCode, originalSourcemap, sourcemapChain, options.onLog);
                    if (!combinedMap) {
                        const magicString = new MagicString(originalCode);
                        return magicString.generateMap({ hires: true, includeContent: true, source: id });
                    }
                    if (originalSourcemap !== combinedMap) {
                        originalSourcemap = combinedMap;
                        sourcemapChain.length = 0;
                    }
                    return new SourceMap({
                        ...combinedMap,
                        file: null,
                        sourcesContent: combinedMap.sourcesContent
                    });
                },
                info: getLogHandler(pluginContext.info),
                setAssetSource() {
                    return this.error(parseAst_js.logInvalidSetAssetSourceCall());
                },
                warn: getLogHandler(pluginContext.warn)
            };
        });
    }
    catch (error_) {
        return parseAst_js.error(parseAst_js.logPluginError(error_, pluginName, { hook: 'transform', id }));
    }
    if (!customTransformCache && // files emitted by a transform hook need to be emitted again if the hook is skipped
        emittedFiles.length > 0)
        module.transformFiles = emittedFiles;
    return {
        ast,
        code,
        customTransformCache,
        originalCode,
        originalSourcemap,
        safeVariableNames: null,
        sourcemapChain,
        transformDependencies
    };
}

const RESOLVE_DEPENDENCIES = 'resolveDependencies';
class ModuleLoader {
    constructor(graph, modulesById, options, pluginDriver) {
        this.graph = graph;
        this.modulesById = modulesById;
        this.options = options;
        this.pluginDriver = pluginDriver;
        this.implicitEntryModules = new Set();
        this.indexedEntryModules = [];
        this.latestLoadModulesPromise = Promise.resolve();
        this.moduleLoadPromises = new Map();
        this.modulesWithLoadedDependencies = new Set();
        this.nextChunkNamePriority = 0;
        this.nextEntryModuleIndex = 0;
        this.resolveId = async (source, importer, customOptions, isEntry, attributes, importerAttributes, skip = null) => this.getResolvedIdWithDefaults(this.getNormalizedResolvedIdWithoutDefaults(this.options.external(source, importer, false)
            ? false
            : await resolveId(source, importer, this.options.preserveSymlinks, this.pluginDriver, this.resolveId, skip, customOptions, typeof isEntry === 'boolean' ? isEntry : !importer, attributes, importerAttributes, this.options.fs), importer, source), attributes);
        this.hasModuleSideEffects = options.treeshake
            ? options.treeshake.moduleSideEffects
            : () => true;
    }
    async addAdditionalModules(unresolvedModules, isAddForManualChunks) {
        const result = this.extendLoadModulesPromise(Promise.all(unresolvedModules.map(id => this.loadEntryModule(id, false, undefined, null, isAddForManualChunks, undefined))));
        await this.awaitLoadModulesPromise();
        return result;
    }
    async addEntryModules(unresolvedEntryModules, isUserDefined) {
        const firstEntryModuleIndex = this.nextEntryModuleIndex;
        this.nextEntryModuleIndex += unresolvedEntryModules.length;
        const firstChunkNamePriority = this.nextChunkNamePriority;
        this.nextChunkNamePriority += unresolvedEntryModules.length;
        const newEntryModules = await this.extendLoadModulesPromise(Promise.all(unresolvedEntryModules.map(({ id, importer }) => this.loadEntryModule(id, true, importer, null, undefined, undefined))).then(entryModules => {
            for (const [index, entryModule] of entryModules.entries()) {
                entryModule.isUserDefinedEntryPoint =
                    entryModule.isUserDefinedEntryPoint || isUserDefined;
                addChunkNamesToModule(entryModule, unresolvedEntryModules[index], isUserDefined, firstChunkNamePriority + index);
                const existingIndexedModule = this.indexedEntryModules.find(indexedModule => indexedModule.module === entryModule);
                if (existingIndexedModule) {
                    existingIndexedModule.index = Math.min(existingIndexedModule.index, firstEntryModuleIndex + index);
                }
                else {
                    this.indexedEntryModules.push({
                        index: firstEntryModuleIndex + index,
                        module: entryModule
                    });
                }
            }
            this.indexedEntryModules.sort(({ index: indexA }, { index: indexB }) => indexA > indexB ? 1 : -1);
            return entryModules;
        }));
        await this.awaitLoadModulesPromise();
        return {
            entryModules: this.indexedEntryModules.map(({ module }) => module),
            implicitEntryModules: [...this.implicitEntryModules],
            newEntryModules
        };
    }
    async emitChunk({ fileName, id, importer, name, implicitlyLoadedAfterOneOf, preserveSignature }) {
        const unresolvedModule = {
            fileName: fileName || null,
            id,
            importer,
            name: name || null
        };
        const module = implicitlyLoadedAfterOneOf
            ? await this.addEntryWithImplicitDependants(unresolvedModule, implicitlyLoadedAfterOneOf)
            : (await this.addEntryModules([unresolvedModule], false)).newEntryModules[0];
        if (preserveSignature != null) {
            module.preserveSignature = preserveSignature;
        }
        return module;
    }
    async preloadModule(resolvedId) {
        const module = await this.fetchModule(this.getResolvedIdWithDefaults(resolvedId, parseAst_js.EMPTY_OBJECT), undefined, false, resolvedId.resolveDependencies ? RESOLVE_DEPENDENCIES : true);
        return module.info;
    }
    addEntryWithImplicitDependants(unresolvedModule, implicitlyLoadedAfter) {
        const chunkNamePriority = this.nextChunkNamePriority++;
        return this.extendLoadModulesPromise(this.loadEntryModule(unresolvedModule.id, false, unresolvedModule.importer, null, undefined, undefined).then(async (entryModule) => {
            addChunkNamesToModule(entryModule, unresolvedModule, false, chunkNamePriority);
            if (!entryModule.info.isEntry) {
                const implicitlyLoadedAfterModules = await Promise.all(implicitlyLoadedAfter.map(id => this.loadEntryModule(id, false, unresolvedModule.importer, entryModule.id, undefined, undefined)));
                // We need to check again if this is still an entry module as these
                // changes need to be performed atomically to avoid race conditions
                // if the same module is re-emitted as an entry module.
                // The inverse changes happen in "handleExistingModule"
                if (!entryModule.info.isEntry) {
                    this.implicitEntryModules.add(entryModule);
                    for (const module of implicitlyLoadedAfterModules) {
                        entryModule.implicitlyLoadedAfter.add(module);
                    }
                    for (const dependent of entryModule.implicitlyLoadedAfter) {
                        dependent.implicitlyLoadedBefore.add(entryModule);
                    }
                }
            }
            return entryModule;
        }));
    }
    async addModuleSource(id, importer, module) {
        let source;
        try {
            source = await this.graph.fileOperationQueue.run(async () => {
                const content = await this.pluginDriver.hookFirst('load', [
                    id,
                    { attributes: module.info.attributes }
                ]);
                if (content !== null) {
                    if (typeof content === 'object' && content.attributes) {
                        parseAst_js.warnDeprecation('Returning attributes from the "load" hook is forbidden.', parseAst_js.URL_LOAD, false, this.options);
                    }
                    return content;
                }
                this.graph.watchFiles[id] = true;
                return (await this.options.fs.readFile(id, { encoding: 'utf8' }));
            });
        }
        catch (error_) {
            let message = `Could not load ${id}`;
            if (importer)
                message += ` (imported by ${parseAst_js.relativeId(importer)})`;
            message += `: ${error_.message}`;
            error_.message = message;
            throw error_;
        }
        const sourceDescription = typeof source === 'string'
            ? { code: source }
            : source != null && typeof source === 'object' && typeof source.code === 'string'
                ? source
                : parseAst_js.error(parseAst_js.logBadLoader(id));
        sourceDescription.code = stripBom(sourceDescription.code);
        const cachedModule = this.graph.cachedModules.get(id);
        if (cachedModule &&
            !cachedModule.customTransformCache &&
            cachedModule.originalCode === sourceDescription.code &&
            !(await this.pluginDriver.hookFirst('shouldTransformCachedModule', [
                {
                    ast: cachedModule.ast,
                    attributes: cachedModule.attributes,
                    code: cachedModule.code,
                    id: cachedModule.id,
                    meta: cachedModule.meta,
                    moduleSideEffects: cachedModule.moduleSideEffects,
                    resolvedSources: cachedModule.resolvedIds,
                    syntheticNamedExports: cachedModule.syntheticNamedExports
                }
            ]))) {
            if (cachedModule.transformFiles) {
                for (const emittedFile of cachedModule.transformFiles)
                    this.pluginDriver.emitFile(emittedFile);
            }
            await module.setSource(cachedModule);
        }
        else {
            module.updateOptions(sourceDescription);
            await module.setSource(await transform(sourceDescription, module, this.pluginDriver, this.options));
        }
    }
    async awaitLoadModulesPromise() {
        let startingPromise;
        do {
            startingPromise = this.latestLoadModulesPromise;
            await startingPromise;
        } while (startingPromise !== this.latestLoadModulesPromise);
    }
    extendLoadModulesPromise(loadNewModulesPromise) {
        this.latestLoadModulesPromise = Promise.all([
            loadNewModulesPromise,
            this.latestLoadModulesPromise
        ]);
        this.latestLoadModulesPromise.catch(() => {
            /* Avoid unhandled Promise rejections */
        });
        return loadNewModulesPromise;
    }
    async fetchDynamicDependencies(module, resolveDynamicImportPromises) {
        const dependencies = await Promise.all(resolveDynamicImportPromises.map(resolveDynamicImportPromise => resolveDynamicImportPromise.then(async ([{ argument, node }, resolvedId]) => {
            if (resolvedId === null)
                return null;
            if (typeof resolvedId === 'string') {
                node.resolution = resolvedId;
                return null;
            }
            if (node.phase === 'source' && !resolvedId.external) {
                return parseAst_js.error(parseAst_js.logNonExternalSourcePhaseImport(typeof argument === 'string' ? argument : parseAst_js.relativeId(resolvedId.id), module.id));
            }
            return (node.resolution = await this.fetchResolvedDependency(parseAst_js.relativeId(resolvedId.id), module.id, resolvedId));
        })));
        for (const dependency of dependencies) {
            if (dependency) {
                module.dynamicDependencies.add(dependency);
                dependency.dynamicImporters.push(module.id);
            }
        }
    }
    // If this is a preload, then this method always waits for the dependencies of
    // the module to be resolved.
    // Otherwise, if the module does not exist, it waits for the module and all
    // its dependencies to be loaded.
    // Otherwise, it returns immediately.
    async fetchModule({ attributes, id, meta, moduleSideEffects, syntheticNamedExports }, importer, isEntry, isPreload) {
        const existingModule = this.modulesById.get(id);
        if (existingModule instanceof Module) {
            if (importer && doAttributesDiffer(attributes, existingModule.info.attributes)) {
                this.options.onLog(parseAst_js.LOGLEVEL_WARN, parseAst_js.logInconsistentImportAttributes(existingModule.info.attributes, attributes, id, importer));
            }
            await this.handleExistingModule(existingModule, isEntry, isPreload);
            return existingModule;
        }
        if (existingModule instanceof ExternalModule) {
            return parseAst_js.error(parseAst_js.logExternalModulesCannotBeTransformedToModules(existingModule.id));
        }
        const module = new Module(this.graph, id, this.options, isEntry, moduleSideEffects, syntheticNamedExports, meta, attributes);
        this.modulesById.set(id, module);
        const loadPromise = this.addModuleSource(id, importer, module).then(() => [
            this.getResolveStaticDependencyPromises(module),
            this.getResolveDynamicImportPromises(module),
            loadAndResolveDependenciesPromise
        ]);
        const loadAndResolveDependenciesPromise = waitForDependencyResolution(loadPromise).then(() => this.pluginDriver.hookParallel('moduleParsed', [module.info]));
        loadAndResolveDependenciesPromise.catch(() => {
            /* avoid unhandled promise rejections */
        });
        this.moduleLoadPromises.set(module, loadPromise);
        const resolveDependencyPromises = await loadPromise;
        if (!isPreload) {
            await this.fetchModuleDependencies(module, ...resolveDependencyPromises);
        }
        else if (isPreload === RESOLVE_DEPENDENCIES) {
            await loadAndResolveDependenciesPromise;
        }
        return module;
    }
    async fetchModuleDependencies(module, resolveStaticDependencyPromises, resolveDynamicDependencyPromises, loadAndResolveDependenciesPromise) {
        if (this.modulesWithLoadedDependencies.has(module)) {
            return;
        }
        this.modulesWithLoadedDependencies.add(module);
        await Promise.all([
            this.fetchStaticDependencies(module, resolveStaticDependencyPromises),
            this.fetchDynamicDependencies(module, resolveDynamicDependencyPromises)
        ]);
        module.linkImports();
        // To handle errors when resolving dependencies or in moduleParsed
        await loadAndResolveDependenciesPromise;
    }
    fetchResolvedDependency(source, importer, resolvedId) {
        if (resolvedId.external) {
            const { attributes, external, id, moduleSideEffects, meta } = resolvedId;
            let externalModule = this.modulesById.get(id);
            if (!externalModule) {
                externalModule = new ExternalModule(this.options, id, moduleSideEffects, meta, external !== 'absolute' && parseAst_js.isAbsolute(id), attributes);
                this.modulesById.set(id, externalModule);
            }
            else if (!(externalModule instanceof ExternalModule)) {
                return parseAst_js.error(parseAst_js.logInternalIdCannotBeExternal(source, importer));
            }
            else if (doAttributesDiffer(externalModule.info.attributes, attributes)) {
                this.options.onLog(parseAst_js.LOGLEVEL_WARN, parseAst_js.logInconsistentImportAttributes(externalModule.info.attributes, attributes, source, importer));
            }
            return Promise.resolve(externalModule);
        }
        return this.fetchModule(resolvedId, importer, false, false);
    }
    async fetchStaticDependencies(module, resolveStaticDependencyPromises) {
        for (const dependency of await Promise.all(resolveStaticDependencyPromises.map(resolveStaticDependencyPromise => resolveStaticDependencyPromise.then(([source, resolvedId]) => {
            if (module.sourcePhaseSources.has(source) && !resolvedId.external) {
                return parseAst_js.error(parseAst_js.logNonExternalSourcePhaseImport(source, module.id));
            }
            return this.fetchResolvedDependency(source, module.id, resolvedId);
        })))) {
            module.dependencies.add(dependency);
            dependency.importers.push(module.id);
        }
        if (!this.options.treeshake || module.info.moduleSideEffects === 'no-treeshake') {
            for (const dependency of module.dependencies) {
                if (dependency instanceof Module) {
                    dependency.importedFromNotTreeshaken = true;
                }
            }
        }
    }
    getNormalizedResolvedIdWithoutDefaults(resolveIdResult, importer, source) {
        const { makeAbsoluteExternalsRelative } = this.options;
        if (resolveIdResult) {
            if (typeof resolveIdResult === 'object') {
                const external = resolveIdResult.external || this.options.external(resolveIdResult.id, importer, true);
                return {
                    ...resolveIdResult,
                    external: external &&
                        (external === 'relative' ||
                            !parseAst_js.isAbsolute(resolveIdResult.id) ||
                            (external === true &&
                                isNotAbsoluteExternal(resolveIdResult.id, source, makeAbsoluteExternalsRelative)) ||
                            'absolute')
                };
            }
            const external = this.options.external(resolveIdResult, importer, true);
            return {
                external: external &&
                    (isNotAbsoluteExternal(resolveIdResult, source, makeAbsoluteExternalsRelative) ||
                        'absolute'),
                id: external && makeAbsoluteExternalsRelative
                    ? normalizeRelativeExternalId(resolveIdResult, importer)
                    : resolveIdResult
            };
        }
        const id = makeAbsoluteExternalsRelative
            ? normalizeRelativeExternalId(source, importer)
            : source;
        if (resolveIdResult !== false && !this.options.external(id, importer, true)) {
            return null;
        }
        return {
            external: isNotAbsoluteExternal(id, source, makeAbsoluteExternalsRelative) || 'absolute',
            id
        };
    }
    getResolveDynamicImportPromises(module) {
        return module.dynamicImports.map(async (dynamicImport) => {
            const resolvedId = await this.resolveDynamicImport(module, dynamicImport.argument, module.id, getAttributesFromImportExpression(dynamicImport.node));
            if (!resolvedId || typeof resolvedId === 'string') {
                dynamicImport.node.shouldIncludeDynamicAttributes = true;
            }
            else {
                dynamicImport.node.shouldIncludeDynamicAttributes = !!resolvedId.external;
                dynamicImport.id = resolvedId.id;
            }
            return [dynamicImport, resolvedId];
        });
    }
    getResolveStaticDependencyPromises(module) {
        return Array.from(module.sourcesWithAttributes, async ([source, attributes]) => [
            source,
            (module.resolvedIds[source] =
                module.resolvedIds[source] ||
                    this.handleInvalidResolvedId(await this.resolveId(source, module.id, parseAst_js.EMPTY_OBJECT, false, attributes, module.info.attributes), source, module.id, attributes))
        ]);
    }
    getResolvedIdWithDefaults(resolvedId, attributes) {
        if (!resolvedId) {
            return null;
        }
        const external = resolvedId.external || false;
        return {
            attributes: resolvedId.attributes || attributes,
            external,
            id: resolvedId.id,
            meta: resolvedId.meta || {},
            moduleSideEffects: resolvedId.moduleSideEffects ?? this.hasModuleSideEffects(resolvedId.id, !!external),
            resolvedBy: resolvedId.resolvedBy ?? 'rollup',
            syntheticNamedExports: resolvedId.syntheticNamedExports ?? false
        };
    }
    async handleExistingModule(module, isEntry, isPreload) {
        const loadPromise = this.moduleLoadPromises.get(module);
        if (isPreload) {
            return isPreload === RESOLVE_DEPENDENCIES
                ? waitForDependencyResolution(loadPromise)
                : loadPromise;
        }
        if (isEntry) {
            // This reverts the changes in addEntryWithImplicitDependants and needs to
            // be performed atomically
            module.info.isEntry = true;
            this.implicitEntryModules.delete(module);
            for (const dependent of module.implicitlyLoadedAfter) {
                dependent.implicitlyLoadedBefore.delete(module);
            }
            module.implicitlyLoadedAfter.clear();
        }
        return this.fetchModuleDependencies(module, ...(await loadPromise));
    }
    handleInvalidResolvedId(resolvedId, source, importer, attributes) {
        if (resolvedId === null) {
            if (parseAst_js.isRelative(source)) {
                return parseAst_js.error(parseAst_js.logUnresolvedImport(source, importer));
            }
            this.options.onLog(parseAst_js.LOGLEVEL_WARN, parseAst_js.logUnresolvedImportTreatedAsExternal(source, importer));
            return {
                attributes,
                external: true,
                id: source,
                meta: {},
                moduleSideEffects: this.hasModuleSideEffects(source, true),
                resolvedBy: 'rollup',
                syntheticNamedExports: false
            };
        }
        else if (resolvedId.external && resolvedId.syntheticNamedExports) {
            this.options.onLog(parseAst_js.LOGLEVEL_WARN, parseAst_js.logExternalSyntheticExports(source, importer));
        }
        return resolvedId;
    }
    async loadEntryModule(unresolvedId, isEntry, importer, implicitlyLoadedBefore, isLoadForManualChunks = false, importerAttributes) {
        const resolveIdResult = await resolveId(unresolvedId, importer, this.options.preserveSymlinks, this.pluginDriver, this.resolveId, null, parseAst_js.EMPTY_OBJECT, true, parseAst_js.EMPTY_OBJECT, importerAttributes, this.options.fs);
        if (resolveIdResult == null) {
            return parseAst_js.error(implicitlyLoadedBefore === null
                ? parseAst_js.logUnresolvedEntry(unresolvedId)
                : parseAst_js.logUnresolvedImplicitDependant(unresolvedId, implicitlyLoadedBefore));
        }
        const isExternalModules = typeof resolveIdResult === 'object' && resolveIdResult.external;
        if (resolveIdResult === false || isExternalModules) {
            return parseAst_js.error(implicitlyLoadedBefore === null
                ? isExternalModules && isLoadForManualChunks
                    ? parseAst_js.logExternalModulesCannotBeIncludedInManualChunks(unresolvedId)
                    : parseAst_js.logEntryCannotBeExternal(unresolvedId)
                : parseAst_js.logImplicitDependantCannotBeExternal(unresolvedId, implicitlyLoadedBefore));
        }
        return this.fetchModule(this.getResolvedIdWithDefaults(typeof resolveIdResult === 'object'
            ? resolveIdResult
            : { id: resolveIdResult }, parseAst_js.EMPTY_OBJECT), undefined, isEntry, false);
    }
    async resolveDynamicImport(module, specifier, importer, attributes) {
        const resolution = await this.pluginDriver.hookFirst('resolveDynamicImport', [
            specifier,
            importer,
            { attributes, importerAttributes: module.info.attributes }
        ]);
        if (typeof specifier !== 'string') {
            if (typeof resolution === 'string') {
                return resolution;
            }
            if (!resolution) {
                return null;
            }
            return this.getResolvedIdWithDefaults(resolution, attributes);
        }
        if (resolution == null) {
            const existingResolution = module.resolvedIds[specifier];
            if (existingResolution) {
                if (doAttributesDiffer(existingResolution.attributes, attributes)) {
                    this.options.onLog(parseAst_js.LOGLEVEL_WARN, parseAst_js.logInconsistentImportAttributes(existingResolution.attributes, attributes, specifier, importer));
                }
                return existingResolution;
            }
            return (module.resolvedIds[specifier] = this.handleInvalidResolvedId(await this.resolveId(specifier, module.id, parseAst_js.EMPTY_OBJECT, false, attributes, module.info.attributes), specifier, module.id, attributes));
        }
        return this.handleInvalidResolvedId(this.getResolvedIdWithDefaults(this.getNormalizedResolvedIdWithoutDefaults(resolution, importer, specifier), attributes), specifier, importer, attributes);
    }
}
function normalizeRelativeExternalId(source, importer) {
    return parseAst_js.isRelative(source)
        ? importer
            ? path.resolve(importer, '..', source)
            : path.resolve(source)
        : source;
}
function addChunkNamesToModule(module, { fileName, name }, isUserDefined, priority) {
    if (fileName !== null) {
        module.chunkFileNames.add(fileName);
    }
    else if (name !== null) {
        // Always keep chunkNames sorted by priority
        let namePosition = 0;
        while (module.chunkNames[namePosition]?.priority < priority)
            namePosition++;
        module.chunkNames.splice(namePosition, 0, { isUserDefined, name, priority });
    }
}
function isNotAbsoluteExternal(id, source, makeAbsoluteExternalsRelative) {
    return (makeAbsoluteExternalsRelative === true ||
        (makeAbsoluteExternalsRelative === 'ifRelativeSource' && parseAst_js.isRelative(source)) ||
        !parseAst_js.isAbsolute(id));
}
async function waitForDependencyResolution(loadPromise) {
    const [resolveStaticDependencyPromises, resolveDynamicImportPromises] = await loadPromise;
    return Promise.all([...resolveStaticDependencyPromises, ...resolveDynamicImportPromises]);
}

class Queue {
    constructor(maxParallel) {
        this.maxParallel = maxParallel;
        this.queue = [];
        this.workerCount = 0;
    }
    run(task) {
        return new Promise((resolve, reject) => {
            this.queue.push({ reject, resolve, task });
            this.work();
        });
    }
    async work() {
        if (this.workerCount >= this.maxParallel)
            return;
        this.workerCount++;
        let entry;
        while ((entry = this.queue.shift())) {
            const { reject, resolve, task } = entry;
            try {
                const result = await task();
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        }
        this.workerCount--;
    }
}

function normalizeEntryModules(entryModules) {
    if (Array.isArray(entryModules)) {
        return entryModules.map(id => ({
            fileName: null,
            id,
            implicitlyLoadedAfter: [],
            importer: undefined,
            name: null
        }));
    }
    return Object.entries(entryModules).map(([name, id]) => ({
        fileName: null,
        id,
        implicitlyLoadedAfter: [],
        importer: undefined,
        name
    }));
}
class Graph {
    constructor(options, watcher) {
        this.options = options;
        this.astLru = flru(5);
        this.cachedModules = new Map();
        this.deoptimizationTracker = new EntityPathTracker();
        this.entryModules = [];
        this.modulesById = new Map();
        this.needsTreeshakingPass = false;
        this.newlyIncludedVariableInits = new Set();
        this.phase = BuildPhase.LOAD_AND_PARSE;
        this.scope = new GlobalScope();
        this.watchFiles = Object.create(null);
        this.watchMode = false;
        this.externalModules = [];
        this.implicitEntryModules = [];
        this.modules = [];
        this.getModuleInfo = (moduleId) => {
            const foundModule = this.modulesById.get(moduleId);
            if (!foundModule)
                return null;
            return foundModule.info;
        };
        if (options.cache !== false) {
            if (options.cache?.modules) {
                for (const module of options.cache.modules)
                    this.cachedModules.set(module.id, module);
            }
            this.pluginCache = options.cache?.plugins || Object.create(null);
            // increment access counter
            for (const name in this.pluginCache) {
                const cache = this.pluginCache[name];
                for (const value of Object.values(cache))
                    value[0]++;
            }
        }
        if (watcher) {
            this.watchMode = true;
            const handleChange = (...parameters) => this.pluginDriver.hookParallel('watchChange', parameters);
            const handleClose = () => this.pluginDriver.hookParallel('closeWatcher', []);
            watcher.onCurrentRun('change', handleChange);
            watcher.onCurrentRun('close', handleClose);
        }
        this.pluginDriver = new PluginDriver(this, options, options.plugins, this.pluginCache);
        this.moduleLoader = new ModuleLoader(this, this.modulesById, this.options, this.pluginDriver);
        this.fileOperationQueue = new Queue(options.maxParallelFileOps);
        this.pureFunctions = getPureFunctions(options);
    }
    async build() {
        timeStart('generate module graph', 2);
        await this.generateModuleGraph();
        timeEnd('generate module graph', 2);
        timeStart('sort and bind modules', 2);
        this.phase = BuildPhase.ANALYSE;
        this.sortAndBindModules();
        timeEnd('sort and bind modules', 2);
        timeStart('mark included statements', 2);
        this.includeStatements();
        timeEnd('mark included statements', 2);
        this.phase = BuildPhase.GENERATE;
    }
    getCache() {
        // handle plugin cache eviction
        for (const name in this.pluginCache) {
            const cache = this.pluginCache[name];
            let allDeleted = true;
            for (const [key, value] of Object.entries(cache)) {
                if (value[0] >= this.options.experimentalCacheExpiry)
                    delete cache[key];
                else
                    allDeleted = false;
            }
            if (allDeleted)
                delete this.pluginCache[name];
        }
        return {
            modules: this.modules.map(module => module.toJSON()),
            plugins: this.pluginCache
        };
    }
    async generateModuleGraph() {
        ({ entryModules: this.entryModules, implicitEntryModules: this.implicitEntryModules } =
            await this.moduleLoader.addEntryModules(normalizeEntryModules(this.options.input), true));
        if (this.entryModules.length === 0) {
            throw new Error('You must supply options.input to rollup');
        }
        for (const module of this.modulesById.values()) {
            module.cacheInfoGetters();
            if (module instanceof Module) {
                this.modules.push(module);
            }
            else {
                this.externalModules.push(module);
            }
        }
    }
    includeStatements() {
        const entryModules = [...this.entryModules, ...this.implicitEntryModules];
        for (const module of entryModules) {
            markModuleAndImpureDependenciesAsExecuted(module);
        }
        if (this.options.treeshake) {
            let treeshakingPass = 1;
            this.newlyIncludedVariableInits.clear();
            do {
                timeStart(`treeshaking pass ${treeshakingPass}`, 3);
                this.needsTreeshakingPass = false;
                for (const module of this.modules) {
                    if (module.isExecuted) {
                        module.hasTreeShakingPassStarted = true;
                        if (module.info.moduleSideEffects === 'no-treeshake') {
                            module.includeAllInBundle();
                        }
                        else {
                            module.include();
                        }
                        for (const entity of this.newlyIncludedVariableInits) {
                            this.newlyIncludedVariableInits.delete(entity);
                            entity.include(createInclusionContext(), false);
                        }
                    }
                }
                if (treeshakingPass === 1) {
                    // We only include exports after the first pass to avoid issues with
                    // the TDZ detection logic
                    for (const module of entryModules) {
                        if (module.preserveSignature !== false) {
                            module.includeAllExports();
                            this.needsTreeshakingPass = true;
                        }
                    }
                }
                timeEnd(`treeshaking pass ${treeshakingPass++}`, 3);
            } while (this.needsTreeshakingPass);
        }
        else {
            for (const module of this.modules)
                module.includeAllInBundle();
        }
        for (const externalModule of this.externalModules)
            externalModule.warnUnusedImports();
        for (const module of this.implicitEntryModules) {
            for (const dependent of module.implicitlyLoadedAfter) {
                if (!(dependent.info.isEntry || dependent.isIncluded())) {
                    parseAst_js.error(parseAst_js.logImplicitDependantIsNotIncluded(dependent));
                }
            }
        }
    }
    sortAndBindModules() {
        const { orderedModules, cyclePaths } = analyseModuleExecution(this.entryModules);
        for (const cyclePath of cyclePaths) {
            this.options.onLog(parseAst_js.LOGLEVEL_WARN, parseAst_js.logCircularDependency(cyclePath));
        }
        this.modules = orderedModules;
        for (const module of this.modules) {
            module.bindReferences();
        }
        this.warnForMissingExports();
    }
    warnForMissingExports() {
        for (const module of this.modules) {
            for (const importDescription of module.importDescriptions.values()) {
                if (importDescription.name !== '*' && importDescription.phase !== 'source') {
                    const [variable, options] = importDescription.module.getVariableForExportName(importDescription.name, { importChain: [module.id] });
                    if (!variable) {
                        module.log(parseAst_js.LOGLEVEL_WARN, parseAst_js.logMissingExport(importDescription.name, module.id, importDescription.module.id, !!options?.missingButExportExists), importDescription.start);
                    }
                }
            }
        }
    }
}

function formatAction([pluginName, hookName, parameters]) {
    const action = `(${pluginName}) ${hookName}`;
    const s = JSON.stringify;
    switch (hookName) {
        case 'resolveId': {
            return `${action} ${s(parameters[0])} ${s(parameters[1])}`;
        }
        case 'load': {
            return `${action} ${s(parameters[0])}`;
        }
        case 'transform': {
            return `${action} ${s(parameters[1])}`;
        }
        case 'shouldTransformCachedModule': {
            return `${action} ${s(parameters[0].id)}`;
        }
        case 'moduleParsed': {
            return `${action} ${s(parameters[0].id)}`;
        }
    }
    return action;
}
let handleBeforeExit = null;
const rejectByPluginDriver = new Map();
async function catchUnfinishedHookActions(pluginDriver, callback) {
    const emptyEventLoopPromise = new Promise((_, reject) => {
        rejectByPluginDriver.set(pluginDriver, reject);
        if (!handleBeforeExit) {
            // We only ever create a single event listener to avoid max listener and
            // other issues
            handleBeforeExit = () => {
                for (const [pluginDriver, reject] of rejectByPluginDriver) {
                    const unfulfilledActions = pluginDriver.getUnfulfilledHookActions();
                    reject(new Error(`Unexpected early exit. This happens when Promises returned by plugins cannot resolve. Unfinished hook action(s) on exit:\n` +
                        [...unfulfilledActions].map(formatAction).join('\n')));
                }
            };
            process$1.once('beforeExit', handleBeforeExit);
        }
    });
    try {
        return await Promise.race([callback(), emptyEventLoopPromise]);
    }
    finally {
        rejectByPluginDriver.delete(pluginDriver);
        if (rejectByPluginDriver.size === 0) {
            process$1.off('beforeExit', handleBeforeExit);
            handleBeforeExit = null;
        }
    }
}

async function initWasm() { }

const fs = /*#__PURE__*/_mergeNamespaces({
  __proto__: null
}, [promises__namespace]);

async function normalizeInputOptions(config, watchMode) {
    // These are options that may trigger special warnings or behaviour later
    // if the user did not select an explicit value
    const unsetOptions = new Set();
    const context = config.context ?? 'undefined';
    const plugins = await normalizePluginOption(config.plugins);
    const logLevel = config.logLevel || parseAst_js.LOGLEVEL_INFO;
    const onLog = getLogger(plugins, getOnLog(config, logLevel), watchMode, logLevel);
    const strictDeprecations = config.strictDeprecations || false;
    const maxParallelFileOps = getMaxParallelFileOps(config);
    const options = {
        cache: getCache(config),
        context,
        experimentalCacheExpiry: config.experimentalCacheExpiry ?? 10,
        experimentalLogSideEffects: config.experimentalLogSideEffects || false,
        external: getIdMatcher(config.external),
        fs: config.fs ?? fs,
        input: getInput(config),
        jsx: getJsx(config),
        logLevel,
        makeAbsoluteExternalsRelative: config.makeAbsoluteExternalsRelative ?? 'ifRelativeSource',
        maxParallelFileOps,
        moduleContext: getModuleContext(config, context),
        onLog,
        perf: config.perf || false,
        plugins,
        preserveEntrySignatures: config.preserveEntrySignatures ?? 'exports-only',
        preserveSymlinks: config.preserveSymlinks || false,
        shimMissingExports: config.shimMissingExports || false,
        strictDeprecations,
        treeshake: getTreeshake(config)
    };
    warnUnknownOptions(config, [...Object.keys(options), 'onwarn', 'watch'], 'input options', onLog, /^(output)$/);
    return { options, unsetOptions };
}
const getCache = (config) => config.cache === true // `true` is the default
    ? undefined
    : config.cache?.cache || config.cache;
const getIdMatcher = (option) => {
    if (option === true) {
        return () => true;
    }
    if (typeof option === 'function') {
        return (id, ...parameters) => (id[0] !== '\0' && option(id, ...parameters)) || false;
    }
    if (option) {
        const ids = new Set();
        const matchers = [];
        for (const value of ensureArray$1(option)) {
            if (value instanceof RegExp) {
                matchers.push(value);
            }
            else {
                ids.add(value);
            }
        }
        return (id, ..._arguments) => ids.has(id) || matchers.some(matcher => matcher.test(id));
    }
    return () => false;
};
const getInput = (config) => {
    const configInput = config.input;
    return configInput == null ? [] : typeof configInput === 'string' ? [configInput] : configInput;
};
const getJsx = (config) => {
    const configJsx = config.jsx;
    if (!configJsx)
        return false;
    const configWithPreset = getOptionWithPreset(configJsx, jsxPresets, 'jsx', parseAst_js.URL_JSX, 'false, ');
    const { factory, importSource, mode } = configWithPreset;
    switch (mode) {
        case 'automatic': {
            return {
                factory: factory || 'React.createElement',
                importSource: importSource || 'react',
                jsxImportSource: configWithPreset.jsxImportSource || 'react/jsx-runtime',
                mode: 'automatic'
            };
        }
        case 'preserve': {
            if (importSource && !(factory || configWithPreset.fragment)) {
                parseAst_js.error(parseAst_js.logInvalidOption('jsx', parseAst_js.URL_JSX, 'when preserving JSX and specifying an importSource, you also need to specify a factory or fragment'));
            }
            return {
                factory: factory || null,
                fragment: configWithPreset.fragment || null,
                importSource: importSource || null,
                mode: 'preserve'
            };
        }
        // case 'classic':
        default: {
            if (mode && mode !== 'classic') {
                parseAst_js.error(parseAst_js.logInvalidOption('jsx.mode', parseAst_js.URL_JSX, 'mode must be "automatic", "classic" or "preserve"', mode));
            }
            return {
                factory: factory || 'React.createElement',
                fragment: configWithPreset.fragment || 'React.Fragment',
                importSource: importSource || null,
                mode: 'classic'
            };
        }
    }
};
const getMaxParallelFileOps = (config) => {
    const maxParallelFileOps = config.maxParallelFileOps;
    if (typeof maxParallelFileOps === 'number') {
        if (maxParallelFileOps <= 0)
            return Infinity;
        return maxParallelFileOps;
    }
    return 1000;
};
const getModuleContext = (config, context) => {
    const configModuleContext = config.moduleContext;
    if (typeof configModuleContext === 'function') {
        return id => configModuleContext(id) ?? context;
    }
    if (configModuleContext) {
        const contextByModuleId = Object.create(null);
        for (const [key, moduleContext] of Object.entries(configModuleContext)) {
            contextByModuleId[path.resolve(key)] = moduleContext;
        }
        return id => contextByModuleId[id] ?? context;
    }
    return () => context;
};
const getTreeshake = (config) => {
    const configTreeshake = config.treeshake;
    if (configTreeshake === false) {
        return false;
    }
    const configWithPreset = getOptionWithPreset(config.treeshake, treeshakePresets, 'treeshake', parseAst_js.URL_TREESHAKE, 'false, true, ');
    return {
        annotations: configWithPreset.annotations !== false,
        correctVarValueBeforeDeclaration: configWithPreset.correctVarValueBeforeDeclaration === true,
        manualPureFunctions: configWithPreset.manualPureFunctions ?? parseAst_js.EMPTY_ARRAY,
        moduleSideEffects: getHasModuleSideEffects(configWithPreset.moduleSideEffects),
        propertyReadSideEffects: configWithPreset.propertyReadSideEffects === 'always'
            ? 'always'
            : configWithPreset.propertyReadSideEffects !== false,
        tryCatchDeoptimization: configWithPreset.tryCatchDeoptimization !== false,
        unknownGlobalSideEffects: configWithPreset.unknownGlobalSideEffects !== false
    };
};
const getHasModuleSideEffects = (moduleSideEffectsOption) => {
    if (typeof moduleSideEffectsOption === 'boolean') {
        return () => moduleSideEffectsOption;
    }
    if (moduleSideEffectsOption === 'no-external') {
        return (_id, external) => !external;
    }
    if (typeof moduleSideEffectsOption === 'function') {
        return (id, external) => id[0] === '\0' ? true : moduleSideEffectsOption(id, external) !== false;
    }
    if (Array.isArray(moduleSideEffectsOption)) {
        const ids = new Set(moduleSideEffectsOption);
        return id => ids.has(id);
    }
    if (moduleSideEffectsOption) {
        parseAst_js.error(parseAst_js.logInvalidOption('treeshake.moduleSideEffects', parseAst_js.URL_TREESHAKE_MODULESIDEEFFECTS, 'please use one of false, "no-external", a function or an array'));
    }
    return () => true;
};

// https://datatracker.ietf.org/doc/html/rfc2396
// eslint-disable-next-line no-control-regex
const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$%&*+,:;<=>?[\]^`{|}\u007F]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;
function sanitizeFileName(name) {
    const match = DRIVE_LETTER_REGEX.exec(name);
    const driveLetter = match ? match[0] : '';
    // A `:` is only allowed as part of a windows drive letter (ex: C:\foo)
    // Otherwise, avoid them because they can refer to NTFS alternate data streams.
    return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, '_');
}

async function normalizeOutputOptions(config, inputOptions, unsetInputOptions) {
    // These are options that may trigger special warnings or behaviour later
    // if the user did not select an explicit value
    const unsetOptions = new Set(unsetInputOptions);
    const compact = config.compact || false;
    const format = getFormat(config);
    const inlineDynamicImports = getInlineDynamicImports(config, inputOptions);
    const preserveModules = getPreserveModules(config, inlineDynamicImports, inputOptions);
    const file = getFile(config, preserveModules, inputOptions);
    const generatedCode = getGeneratedCode(config);
    const externalImportAttributes = getExternalImportAttributes(config, inputOptions);
    const outputOptions = {
        amd: getAmd(config),
        assetFileNames: config.assetFileNames ?? 'assets/[name]-[hash][extname]',
        banner: getAddon(config, 'banner'),
        chunkFileNames: config.chunkFileNames ?? '[name]-[hash].js',
        compact,
        dir: getDir(config, file),
        dynamicImportInCjs: config.dynamicImportInCjs ?? true,
        entryFileNames: getEntryFileNames(config, unsetOptions),
        esModule: config.esModule ?? 'if-default-prop',
        experimentalMinChunkSize: config.experimentalMinChunkSize ?? 1,
        exports: getExports(config, unsetOptions),
        extend: config.extend || false,
        externalImportAssertions: externalImportAttributes,
        externalImportAttributes,
        externalLiveBindings: config.externalLiveBindings ?? true,
        file,
        footer: getAddon(config, 'footer'),
        format,
        freeze: config.freeze ?? true,
        generatedCode,
        globals: config.globals || {},
        hashCharacters: config.hashCharacters ?? 'base64',
        hoistTransitiveImports: config.hoistTransitiveImports ?? true,
        importAttributesKey: config.importAttributesKey ?? 'assert',
        indent: getIndent(config, compact),
        inlineDynamicImports,
        interop: getInterop(config),
        intro: getAddon(config, 'intro'),
        manualChunks: getManualChunks(config, inlineDynamicImports, preserveModules),
        minifyInternalExports: getMinifyInternalExports(config, format, compact),
        name: config.name,
        noConflict: config.noConflict || false,
        onlyExplicitManualChunks: config.onlyExplicitManualChunks || false,
        outro: getAddon(config, 'outro'),
        paths: config.paths || {},
        plugins: await normalizePluginOption(config.plugins),
        preserveModules,
        preserveModulesRoot: getPreserveModulesRoot(config),
        reexportProtoFromExternal: config.reexportProtoFromExternal ?? true,
        sanitizeFileName: typeof config.sanitizeFileName === 'function'
            ? config.sanitizeFileName
            : config.sanitizeFileName === false
                ? id => id
                : sanitizeFileName,
        sourcemap: config.sourcemap || false,
        sourcemapBaseUrl: getSourcemapBaseUrl(config),
        sourcemapDebugIds: config.sourcemapDebugIds || false,
        sourcemapExcludeSources: config.sourcemapExcludeSources || false,
        sourcemapFile: config.sourcemapFile,
        sourcemapFileNames: getSourcemapFileNames(config, unsetOptions),
        sourcemapIgnoreList: typeof config.sourcemapIgnoreList === 'function'
            ? config.sourcemapIgnoreList
            : config.sourcemapIgnoreList === false
                ? () => false
                : relativeSourcePath => relativeSourcePath.includes('node_modules'),
        sourcemapPathTransform: config.sourcemapPathTransform,
        strict: config.strict ?? true,
        systemNullSetters: config.systemNullSetters ?? true,
        validate: config.validate || false,
        virtualDirname: config.virtualDirname || '_virtual'
    };
    warnUnknownOptions(config, Object.keys(outputOptions), 'output options', inputOptions.onLog);
    return { options: outputOptions, unsetOptions };
}
const getFile = (config, preserveModules, inputOptions) => {
    const { file } = config;
    if (typeof file === 'string') {
        if (preserveModules) {
            return parseAst_js.error(parseAst_js.logInvalidOption('output.file', parseAst_js.URL_OUTPUT_DIR, 'you must set "output.dir" instead of "output.file" when using the "output.preserveModules" option'));
        }
        if (!Array.isArray(inputOptions.input))
            return parseAst_js.error(parseAst_js.logInvalidOption('output.file', parseAst_js.URL_OUTPUT_DIR, 'you must set "output.dir" instead of "output.file" when providing named inputs'));
    }
    return file;
};
const getFormat = (config) => {
    const configFormat = config.format;
    switch (configFormat) {
        case undefined:
        case 'es':
        case 'esm':
        case 'module': {
            return 'es';
        }
        case 'cjs':
        case 'commonjs': {
            return 'cjs';
        }
        case 'system':
        case 'systemjs': {
            return 'system';
        }
        case 'amd':
        case 'iife':
        case 'umd': {
            return configFormat;
        }
        default: {
            return parseAst_js.error(parseAst_js.logInvalidOption('output.format', parseAst_js.URL_OUTPUT_FORMAT, `Valid values are "amd", "cjs", "system", "es", "iife" or "umd"`, configFormat));
        }
    }
};
const getInlineDynamicImports = (config, inputOptions) => {
    const inlineDynamicImports = config.inlineDynamicImports || false;
    const { input } = inputOptions;
    if (inlineDynamicImports && (Array.isArray(input) ? input : Object.keys(input)).length > 1) {
        return parseAst_js.error(parseAst_js.logInvalidOption('output.inlineDynamicImports', parseAst_js.URL_OUTPUT_INLINEDYNAMICIMPORTS, 'multiple inputs are not supported when "output.inlineDynamicImports" is true'));
    }
    return inlineDynamicImports;
};
const getPreserveModules = (config, inlineDynamicImports, inputOptions) => {
    const preserveModules = config.preserveModules || false;
    if (preserveModules) {
        if (inlineDynamicImports) {
            return parseAst_js.error(parseAst_js.logInvalidOption('output.inlineDynamicImports', parseAst_js.URL_OUTPUT_INLINEDYNAMICIMPORTS, `this option is not supported for "output.preserveModules"`));
        }
        if (inputOptions.preserveEntrySignatures === false) {
            return parseAst_js.error(parseAst_js.logInvalidOption('preserveEntrySignatures', parseAst_js.URL_PRESERVEENTRYSIGNATURES, 'setting this option to false is not supported for "output.preserveModules"'));
        }
    }
    return preserveModules;
};
const getPreserveModulesRoot = (config) => {
    const { preserveModulesRoot } = config;
    if (preserveModulesRoot === null || preserveModulesRoot === undefined) {
        return undefined;
    }
    return path.resolve(preserveModulesRoot);
};
const getAmd = (config) => {
    const mergedOption = {
        autoId: false,
        basePath: '',
        define: 'define',
        forceJsExtensionForImports: false,
        ...config.amd
    };
    if ((mergedOption.autoId || mergedOption.basePath) && mergedOption.id) {
        return parseAst_js.error(parseAst_js.logInvalidOption('output.amd.id', parseAst_js.URL_OUTPUT_AMD_ID, 'this option cannot be used together with "output.amd.autoId"/"output.amd.basePath"'));
    }
    if (mergedOption.basePath && !mergedOption.autoId) {
        return parseAst_js.error(parseAst_js.logInvalidOption('output.amd.basePath', parseAst_js.URL_OUTPUT_AMD_BASEPATH, 'this option only works with "output.amd.autoId"'));
    }
    return mergedOption.autoId
        ? {
            autoId: true,
            basePath: mergedOption.basePath,
            define: mergedOption.define,
            forceJsExtensionForImports: mergedOption.forceJsExtensionForImports
        }
        : {
            autoId: false,
            define: mergedOption.define,
            forceJsExtensionForImports: mergedOption.forceJsExtensionForImports,
            id: mergedOption.id
        };
};
const getAddon = (config, name) => {
    const configAddon = config[name];
    if (typeof configAddon === 'function') {
        return configAddon;
    }
    return () => configAddon || '';
};
const getDir = (config, file) => {
    const { dir } = config;
    if (typeof dir === 'string' && typeof file === 'string') {
        return parseAst_js.error(parseAst_js.logInvalidOption('output.dir', parseAst_js.URL_OUTPUT_DIR, 'you must set either "output.file" for a single-file build or "output.dir" when generating multiple chunks'));
    }
    return dir;
};
const getEntryFileNames = (config, unsetOptions) => {
    const configEntryFileNames = config.entryFileNames;
    if (configEntryFileNames == null) {
        unsetOptions.add('entryFileNames');
    }
    return configEntryFileNames ?? '[name].js';
};
function getExports(config, unsetOptions) {
    const configExports = config.exports;
    if (configExports == null) {
        unsetOptions.add('exports');
    }
    else if (!['default', 'named', 'none', 'auto'].includes(configExports)) {
        return parseAst_js.error(parseAst_js.logInvalidExportOptionValue(configExports));
    }
    return configExports || 'auto';
}
const getExternalImportAttributes = (config, inputOptions) => {
    if (config.externalImportAssertions != undefined) {
        parseAst_js.warnDeprecation(`The "output.externalImportAssertions" option is deprecated. Use the "output.externalImportAttributes" option instead.`, parseAst_js.URL_OUTPUT_EXTERNALIMPORTATTRIBUTES, true, inputOptions);
    }
    return config.externalImportAttributes ?? config.externalImportAssertions ?? true;
};
const getGeneratedCode = (config) => {
    const configWithPreset = getOptionWithPreset(config.generatedCode, generatedCodePresets, 'output.generatedCode', parseAst_js.URL_OUTPUT_GENERATEDCODE, '');
    return {
        arrowFunctions: configWithPreset.arrowFunctions === true,
        constBindings: configWithPreset.constBindings === true,
        objectShorthand: configWithPreset.objectShorthand === true,
        reservedNamesAsProps: configWithPreset.reservedNamesAsProps !== false,
        symbols: configWithPreset.symbols === true
    };
};
const getIndent = (config, compact) => {
    if (compact) {
        return '';
    }
    const configIndent = config.indent;
    return configIndent === false ? '' : (configIndent ?? true);
};
const ALLOWED_INTEROP_TYPES = new Set([
    'compat',
    'auto',
    'esModule',
    'default',
    'defaultOnly'
]);
const getInterop = (config) => {
    const configInterop = config.interop;
    if (typeof configInterop === 'function') {
        const interopPerId = Object.create(null);
        let defaultInterop = null;
        return id => id === null
            ? defaultInterop || validateInterop((defaultInterop = configInterop(id)))
            : id in interopPerId
                ? interopPerId[id]
                : validateInterop((interopPerId[id] = configInterop(id)));
    }
    return configInterop === undefined ? () => 'default' : () => validateInterop(configInterop);
};
const validateInterop = (interop) => {
    if (!ALLOWED_INTEROP_TYPES.has(interop)) {
        return parseAst_js.error(parseAst_js.logInvalidOption('output.interop', parseAst_js.URL_OUTPUT_INTEROP, `use one of ${Array.from(ALLOWED_INTEROP_TYPES, value => JSON.stringify(value)).join(', ')}`, interop));
    }
    return interop;
};
const getManualChunks = (config, inlineDynamicImports, preserveModules) => {
    const configManualChunks = config.manualChunks;
    if (configManualChunks) {
        if (inlineDynamicImports) {
            return parseAst_js.error(parseAst_js.logInvalidOption('output.manualChunks', parseAst_js.URL_OUTPUT_MANUALCHUNKS, 'this option is not supported for "output.inlineDynamicImports"'));
        }
        if (preserveModules) {
            return parseAst_js.error(parseAst_js.logInvalidOption('output.manualChunks', parseAst_js.URL_OUTPUT_MANUALCHUNKS, 'this option is not supported for "output.preserveModules"'));
        }
    }
    return configManualChunks || {};
};
const getMinifyInternalExports = (config, format, compact) => config.minifyInternalExports ?? (compact || format === 'es' || format === 'system');
const getSourcemapFileNames = (config, unsetOptions) => {
    const configSourcemapFileNames = config.sourcemapFileNames;
    if (configSourcemapFileNames == null) {
        unsetOptions.add('sourcemapFileNames');
    }
    return configSourcemapFileNames;
};
const getSourcemapBaseUrl = (config) => {
    const { sourcemapBaseUrl } = config;
    if (sourcemapBaseUrl) {
        if (parseAst_js.isValidUrl(sourcemapBaseUrl)) {
            return parseAst_js.addTrailingSlashIfMissed(sourcemapBaseUrl);
        }
        return parseAst_js.error(parseAst_js.logInvalidOption('output.sourcemapBaseUrl', parseAst_js.URL_OUTPUT_SOURCEMAPBASEURL, `must be a valid URL, received ${JSON.stringify(sourcemapBaseUrl)}`));
    }
};

// @ts-expect-error TS2540: the polyfill of `asyncDispose`.
Symbol.asyncDispose ??= Symbol('Symbol.asyncDispose');
function rollup(rawInputOptions) {
    return rollupInternal(rawInputOptions, null);
}
async function rollupInternal(rawInputOptions, watcher) {
    const { options: inputOptions, unsetOptions: unsetInputOptions } = await getInputOptions(rawInputOptions, watcher !== null);
    initialiseTimers(inputOptions);
    await initWasm();
    const graph = new Graph(inputOptions, watcher);
    // remove the cache object from the memory after graph creation (cache is not used anymore)
    const useCache = rawInputOptions.cache !== false;
    if (rawInputOptions.cache) {
        inputOptions.cache = undefined;
        rawInputOptions.cache = undefined;
    }
    timeStart('BUILD', 1);
    await catchUnfinishedHookActions(graph.pluginDriver, async () => {
        try {
            timeStart('initialize', 2);
            await graph.pluginDriver.hookParallel('buildStart', [inputOptions]);
            timeEnd('initialize', 2);
            await graph.build();
        }
        catch (error_) {
            const watchFiles = Object.keys(graph.watchFiles);
            if (watchFiles.length > 0) {
                error_.watchFiles = watchFiles;
            }
            try {
                await graph.pluginDriver.hookParallel('buildEnd', [error_]);
            }
            catch (buildEndError) {
                // Create a compound error object to include both errors, based on the original error
                const compoundError = parseAst_js.getRollupError({
                    ...error_,
                    message: `There was an error during the build:\n  ${error_.message}\nAdditionally, handling the error in the 'buildEnd' hook caused the following error:\n  ${buildEndError.message}`
                });
                await graph.pluginDriver.hookParallel('closeBundle', [compoundError]);
                throw compoundError;
            }
            await graph.pluginDriver.hookParallel('closeBundle', [error_]);
            throw error_;
        }
        try {
            await graph.pluginDriver.hookParallel('buildEnd', []);
        }
        catch (buildEndError) {
            await graph.pluginDriver.hookParallel('closeBundle', [buildEndError]);
            throw buildEndError;
        }
    });
    timeEnd('BUILD', 1);
    const result = {
        get cache() {
            return useCache ? graph.getCache() : undefined;
        },
        async close() {
            if (result.closed)
                return;
            result.closed = true;
            await graph.pluginDriver.hookParallel('closeBundle', []);
        },
        closed: false,
        async [Symbol.asyncDispose]() {
            await this.close();
        },
        async generate(rawOutputOptions) {
            if (result.closed)
                return parseAst_js.error(parseAst_js.logAlreadyClosed());
            return handleGenerateWrite(false, inputOptions, unsetInputOptions, rawOutputOptions, graph);
        },
        get watchFiles() {
            return Object.keys(graph.watchFiles);
        },
        async write(rawOutputOptions) {
            if (result.closed)
                return parseAst_js.error(parseAst_js.logAlreadyClosed());
            return handleGenerateWrite(true, inputOptions, unsetInputOptions, rawOutputOptions, graph);
        }
    };
    if (inputOptions.perf)
        result.getTimings = getTimings;
    return result;
}
async function getInputOptions(initialInputOptions, watchMode) {
    if (!initialInputOptions) {
        throw new Error('You must supply an options object to rollup');
    }
    const processedInputOptions = await getProcessedInputOptions(initialInputOptions, watchMode);
    const { options, unsetOptions } = await normalizeInputOptions(processedInputOptions, watchMode);
    normalizePlugins(options.plugins, ANONYMOUS_PLUGIN_PREFIX);
    return { options, unsetOptions };
}
async function getProcessedInputOptions(inputOptions, watchMode) {
    const plugins = getSortedValidatedPlugins('options', await normalizePluginOption(inputOptions.plugins));
    const logLevel = inputOptions.logLevel || parseAst_js.LOGLEVEL_INFO;
    const logger = getLogger(plugins, getOnLog(inputOptions, logLevel), watchMode, logLevel);
    for (const plugin of plugins) {
        const { name, options } = plugin;
        const handler = 'handler' in options ? options.handler : options;
        const processedOptions = await handler.call({
            debug: getLogHandler(parseAst_js.LOGLEVEL_DEBUG, 'PLUGIN_LOG', logger, name, logLevel),
            error: (error_) => parseAst_js.error(parseAst_js.logPluginError(normalizeLog(error_), name, { hook: 'onLog' })),
            info: getLogHandler(parseAst_js.LOGLEVEL_INFO, 'PLUGIN_LOG', logger, name, logLevel),
            meta: { rollupVersion: version, watchMode },
            warn: getLogHandler(parseAst_js.LOGLEVEL_WARN, 'PLUGIN_WARNING', logger, name, logLevel)
        }, inputOptions);
        if (processedOptions) {
            inputOptions = processedOptions;
        }
    }
    return inputOptions;
}
function normalizePlugins(plugins, anonymousPrefix) {
    for (const [index, plugin] of plugins.entries()) {
        if (!plugin.name) {
            plugin.name = `${anonymousPrefix}${index + 1}`;
        }
    }
}
async function handleGenerateWrite(isWrite, inputOptions, unsetInputOptions, rawOutputOptions, graph) {
    const { options: outputOptions, outputPluginDriver, unsetOptions } = await getOutputOptionsAndPluginDriver(rawOutputOptions, graph.pluginDriver, inputOptions, unsetInputOptions);
    return catchUnfinishedHookActions(outputPluginDriver, async () => {
        const bundle = new Bundle(outputOptions, unsetOptions, inputOptions, outputPluginDriver, graph);
        const generated = await bundle.generate(isWrite);
        if (isWrite) {
            timeStart('WRITE', 1);
            if (!outputOptions.dir && !outputOptions.file) {
                return parseAst_js.error(parseAst_js.logMissingFileOrDirOption());
            }
            await Promise.all(Object.values(generated).map(chunk => graph.fileOperationQueue.run(() => writeOutputFile(chunk, outputOptions, inputOptions))));
            await outputPluginDriver.hookParallel('writeBundle', [outputOptions, generated]);
            timeEnd('WRITE', 1);
        }
        return createOutput(generated);
    });
}
async function getOutputOptionsAndPluginDriver(rawOutputOptions, inputPluginDriver, inputOptions, unsetInputOptions) {
    if (!rawOutputOptions) {
        throw new Error('You must supply an options object');
    }
    const rawPlugins = await normalizePluginOption(rawOutputOptions.plugins);
    normalizePlugins(rawPlugins, ANONYMOUS_OUTPUT_PLUGIN_PREFIX);
    const outputPluginDriver = inputPluginDriver.createOutputPluginDriver(rawPlugins);
    return {
        ...(await getOutputOptions(inputOptions, unsetInputOptions, rawOutputOptions, outputPluginDriver)),
        outputPluginDriver
    };
}
function getOutputOptions(inputOptions, unsetInputOptions, rawOutputOptions, outputPluginDriver) {
    return normalizeOutputOptions(outputPluginDriver.hookReduceArg0Sync('outputOptions', [rawOutputOptions], (outputOptions, result) => result || outputOptions, pluginContext => {
        const emitError = () => pluginContext.error(parseAst_js.logCannotEmitFromOptionsHook());
        return {
            ...pluginContext,
            emitFile: emitError,
            setAssetSource: emitError
        };
    }), inputOptions, unsetInputOptions);
}
function createOutput(outputBundle) {
    return {
        output: Object.values(outputBundle).filter(outputFile => Object.keys(outputFile).length > 0).sort((outputFileA, outputFileB) => getSortingFileType(outputFileA) - getSortingFileType(outputFileB))
    };
}
var SortingFileType;
(function (SortingFileType) {
    SortingFileType[SortingFileType["ENTRY_CHUNK"] = 0] = "ENTRY_CHUNK";
    SortingFileType[SortingFileType["SECONDARY_CHUNK"] = 1] = "SECONDARY_CHUNK";
    SortingFileType[SortingFileType["ASSET"] = 2] = "ASSET";
})(SortingFileType || (SortingFileType = {}));
function getSortingFileType(file) {
    if (file.type === 'asset') {
        return SortingFileType.ASSET;
    }
    if (file.isEntry) {
        return SortingFileType.ENTRY_CHUNK;
    }
    return SortingFileType.SECONDARY_CHUNK;
}
async function writeOutputFile(outputFile, outputOptions, { fs: { mkdir, writeFile } }) {
    const fileName = path.resolve(outputOptions.dir || path.dirname(outputOptions.file), outputFile.fileName);
    // 'recursive: true' does not throw if the folder structure, or parts of it, already exist
    await mkdir(path.dirname(fileName), { recursive: true });
    return writeFile(fileName, outputFile.type === 'asset' ? outputFile.source : outputFile.code);
}
/**
 * Auxiliary function for defining rollup configuration
 * Mainly to facilitate IDE code prompts, after all, export default does not
 * prompt, even if you add @type annotations, it is not accurate
 * @param options
 */
function defineConfig(options) {
    return options;
}

exports.bold = bold;
exports.commandAliases = commandAliases;
exports.createFilter = createFilter;
exports.cyan = cyan;
exports.defineConfig = defineConfig;
exports.ensureArray = ensureArray$1;
exports.getAugmentedNamespace = getAugmentedNamespace;
exports.getDefaultExportFromCjs = getDefaultExportFromCjs;
exports.getNewArray = getNewArray;
exports.getOrCreate = getOrCreate;
exports.gray = gray;
exports.green = green;
exports.handleError = handleError;
exports.isWatchEnabled = isWatchEnabled;
exports.mergeOptions = mergeOptions;
exports.normalizePluginOption = normalizePluginOption;
exports.pc = pc;
exports.rollup = rollup;
exports.rollupInternal = rollupInternal;
exports.stderr = stderr;
exports.underline = underline;
exports.version = version;
exports.yellow = yellow;
//# sourceMappingURL=rollup.js.map
