"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lilconfigSync = exports.lilconfig = exports.defaultLoaders = void 0;
const path = require("path");
const fs = require("fs");
const os = require("os");
const fsReadFileAsync = fs.promises.readFile;
function getDefaultSearchPlaces(name) {
    return [
        'package.json',
        `.${name}rc.json`,
        `.${name}rc.js`,
        `.${name}rc.cjs`,
        `.config/${name}rc`,
        `.config/${name}rc.json`,
        `.config/${name}rc.js`,
        `.config/${name}rc.cjs`,
        `${name}.config.js`,
        `${name}.config.cjs`,
    ];
}
function getSearchPaths(startDir, stopDir) {
    return startDir
        .split(path.sep)
        .reduceRight((acc, _, ind, arr) => {
        const currentPath = arr.slice(0, ind + 1).join(path.sep);
        if (!acc.passedStopDir)
            acc.searchPlaces.push(currentPath || path.sep);
        if (currentPath === stopDir)
            acc.passedStopDir = true;
        return acc;
    }, { searchPlaces: [], passedStopDir: false }).searchPlaces;
}
exports.defaultLoaders = Object.freeze({
    '.js': require,
    '.json': require,
    '.cjs': require,
    noExt(_, content) {
        return JSON.parse(content);
    },
});
function getExtDesc(ext) {
    return ext === 'noExt' ? 'files without extensions' : `extension "${ext}"`;
}
function getOptions(name, options = {}) {
    const conf = {
        stopDir: os.homedir(),
        searchPlaces: getDefaultSearchPlaces(name),
        ignoreEmptySearchPlaces: true,
        transform: (x) => x,
        packageProp: [name],
        ...options,
        loaders: { ...exports.defaultLoaders, ...options.loaders },
    };
    conf.searchPlaces.forEach(place => {
        const key = path.extname(place) || 'noExt';
        const loader = conf.loaders[key];
        if (!loader) {
            throw new Error(`No loader specified for ${getExtDesc(key)}, so searchPlaces item "${place}" is invalid`);
        }
        if (typeof loader !== 'function') {
            throw new Error(`loader for ${getExtDesc(key)} is not a function (type provided: "${typeof loader}"), so searchPlaces item "${place}" is invalid`);
        }
    });
    return conf;
}
function getPackageProp(props, obj) {
    if (typeof props === 'string' && props in obj)
        return obj[props];
    return ((Array.isArray(props) ? props : props.split('.')).reduce((acc, prop) => (acc === undefined ? acc : acc[prop]), obj) || null);
}
function getSearchItems(searchPlaces, searchPaths) {
    return searchPaths.reduce((acc, searchPath) => {
        searchPlaces.forEach(sp => acc.push({
            searchPlace: sp,
            filepath: path.join(searchPath, sp),
            loaderKey: path.extname(sp) || 'noExt',
        }));
        return acc;
    }, []);
}
function validateFilePath(filepath) {
    if (!filepath)
        throw new Error('load must pass a non-empty string');
}
function validateLoader(loader, ext) {
    if (!loader)
        throw new Error(`No loader specified for extension "${ext}"`);
    if (typeof loader !== 'function')
        throw new Error('loader is not a function');
}
function lilconfig(name, options) {
    const { ignoreEmptySearchPlaces, loaders, packageProp, searchPlaces, stopDir, transform, } = getOptions(name, options);
    return {
        async search(searchFrom = process.cwd()) {
            const searchPaths = getSearchPaths(searchFrom, stopDir);
            const result = {
                config: null,
                filepath: '',
            };
            const searchItems = getSearchItems(searchPlaces, searchPaths);
            for (const { searchPlace, filepath, loaderKey } of searchItems) {
                try {
                    await fs.promises.access(filepath);
                }
                catch (_a) {
                    continue;
                }
                const content = String(await fsReadFileAsync(filepath));
                const loader = loaders[loaderKey];
                if (searchPlace === 'package.json') {
                    const pkg = await loader(filepath, content);
                    const maybeConfig = getPackageProp(packageProp, pkg);
                    if (maybeConfig != null) {
                        result.config = maybeConfig;
                        result.filepath = filepath;
                        break;
                    }
                    continue;
                }
                const isEmpty = content.trim() === '';
                if (isEmpty && ignoreEmptySearchPlaces)
                    continue;
                if (isEmpty) {
                    result.isEmpty = true;
                    result.config = undefined;
                }
                else {
                    validateLoader(loader, loaderKey);
                    result.config = await loader(filepath, content);
                }
                result.filepath = filepath;
                break;
            }
            if (result.filepath === '' && result.config === null)
                return transform(null);
            return transform(result);
        },
        async load(filepath) {
            validateFilePath(filepath);
            const absPath = path.resolve(process.cwd(), filepath);
            const { base, ext } = path.parse(absPath);
            const loaderKey = ext || 'noExt';
            const loader = loaders[loaderKey];
            validateLoader(loader, loaderKey);
            const content = String(await fsReadFileAsync(absPath));
            if (base === 'package.json') {
                const pkg = await loader(absPath, content);
                return transform({
                    config: getPackageProp(packageProp, pkg),
                    filepath: absPath,
                });
            }
            const result = {
                config: null,
                filepath: absPath,
            };
            const isEmpty = content.trim() === '';
            if (isEmpty && ignoreEmptySearchPlaces)
                return transform({
                    config: undefined,
                    filepath: absPath,
                    isEmpty: true,
                });
            result.config = isEmpty
                ? undefined
                : await loader(absPath, content);
            return transform(isEmpty ? { ...result, isEmpty, config: undefined } : result);
        },
    };
}
exports.lilconfig = lilconfig;
function lilconfigSync(name, options) {
    const { ignoreEmptySearchPlaces, loaders, packageProp, searchPlaces, stopDir, transform, } = getOptions(name, options);
    return {
        search(searchFrom = process.cwd()) {
            const searchPaths = getSearchPaths(searchFrom, stopDir);
            const result = {
                config: null,
                filepath: '',
            };
            const searchItems = getSearchItems(searchPlaces, searchPaths);
            for (const { searchPlace, filepath, loaderKey } of searchItems) {
                try {
                    fs.accessSync(filepath);
                }
                catch (_a) {
                    continue;
                }
                const loader = loaders[loaderKey];
                const content = String(fs.readFileSync(filepath));
                if (searchPlace === 'package.json') {
                    const pkg = loader(filepath, content);
                    const maybeConfig = getPackageProp(packageProp, pkg);
                    if (maybeConfig != null) {
                        result.config = maybeConfig;
                        result.filepath = filepath;
                        break;
                    }
                    continue;
                }
                const isEmpty = content.trim() === '';
                if (isEmpty && ignoreEmptySearchPlaces)
                    continue;
                if (isEmpty) {
                    result.isEmpty = true;
                    result.config = undefined;
                }
                else {
                    validateLoader(loader, loaderKey);
                    result.config = loader(filepath, content);
                }
                result.filepath = filepath;
                break;
            }
            if (result.filepath === '' && result.config === null)
                return transform(null);
            return transform(result);
        },
        load(filepath) {
            validateFilePath(filepath);
            const absPath = path.resolve(process.cwd(), filepath);
            const { base, ext } = path.parse(absPath);
            const loaderKey = ext || 'noExt';
            const loader = loaders[loaderKey];
            validateLoader(loader, loaderKey);
            const content = String(fs.readFileSync(absPath));
            if (base === 'package.json') {
                const pkg = loader(absPath, content);
                return transform({
                    config: getPackageProp(packageProp, pkg),
                    filepath: absPath,
                });
            }
            const result = {
                config: null,
                filepath: absPath,
            };
            const isEmpty = content.trim() === '';
            if (isEmpty && ignoreEmptySearchPlaces)
                return transform({
                    filepath: absPath,
                    config: undefined,
                    isEmpty: true,
                });
            result.config = isEmpty ? undefined : loader(absPath, content);
            return transform(isEmpty ? { ...result, isEmpty, config: undefined } : result);
        },
    };
}
exports.lilconfigSync = lilconfigSync;
