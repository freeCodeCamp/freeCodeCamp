"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultLoadersSync = exports.defaultLoaders = exports.metaSearchPlaces = exports.globalConfigSearchPlacesSync = exports.globalConfigSearchPlaces = exports.getDefaultSearchPlacesSync = exports.getDefaultSearchPlaces = void 0;
const loaders_1 = require("./loaders");
function getDefaultSearchPlaces(moduleName) {
    return [
        'package.json',
        `.${moduleName}rc`,
        `.${moduleName}rc.json`,
        `.${moduleName}rc.yaml`,
        `.${moduleName}rc.yml`,
        `.${moduleName}rc.js`,
        `.${moduleName}rc.ts`,
        `.${moduleName}rc.cjs`,
        `.${moduleName}rc.mjs`,
        `.config/${moduleName}rc`,
        `.config/${moduleName}rc.json`,
        `.config/${moduleName}rc.yaml`,
        `.config/${moduleName}rc.yml`,
        `.config/${moduleName}rc.js`,
        `.config/${moduleName}rc.ts`,
        `.config/${moduleName}rc.cjs`,
        `.config/${moduleName}rc.mjs`,
        `${moduleName}.config.js`,
        `${moduleName}.config.ts`,
        `${moduleName}.config.cjs`,
        `${moduleName}.config.mjs`,
    ];
}
exports.getDefaultSearchPlaces = getDefaultSearchPlaces;
function getDefaultSearchPlacesSync(moduleName) {
    return [
        'package.json',
        `.${moduleName}rc`,
        `.${moduleName}rc.json`,
        `.${moduleName}rc.yaml`,
        `.${moduleName}rc.yml`,
        `.${moduleName}rc.js`,
        `.${moduleName}rc.ts`,
        `.${moduleName}rc.cjs`,
        `.config/${moduleName}rc`,
        `.config/${moduleName}rc.json`,
        `.config/${moduleName}rc.yaml`,
        `.config/${moduleName}rc.yml`,
        `.config/${moduleName}rc.js`,
        `.config/${moduleName}rc.ts`,
        `.config/${moduleName}rc.cjs`,
        `${moduleName}.config.js`,
        `${moduleName}.config.ts`,
        `${moduleName}.config.cjs`,
    ];
}
exports.getDefaultSearchPlacesSync = getDefaultSearchPlacesSync;
exports.globalConfigSearchPlaces = [
    'config',
    'config.json',
    'config.yaml',
    'config.yml',
    'config.js',
    'config.ts',
    'config.cjs',
    'config.mjs',
];
exports.globalConfigSearchPlacesSync = [
    'config',
    'config.json',
    'config.yaml',
    'config.yml',
    'config.js',
    'config.ts',
    'config.cjs',
];
// this needs to be hardcoded, as this is intended for end users, who can't supply options at this point
exports.metaSearchPlaces = [
    'package.json',
    'package.yaml',
    '.config/config.json',
    '.config/config.yaml',
    '.config/config.yml',
    '.config/config.js',
    '.config/config.ts',
    '.config/config.cjs',
    '.config/config.mjs',
];
// do not allow mutation of default loaders. Make sure it is set inside options
exports.defaultLoaders = Object.freeze({
    '.mjs': loaders_1.loadJs,
    '.cjs': loaders_1.loadJs,
    '.js': loaders_1.loadJs,
    '.ts': loaders_1.loadTs,
    '.json': loaders_1.loadJson,
    '.yaml': loaders_1.loadYaml,
    '.yml': loaders_1.loadYaml,
    noExt: loaders_1.loadYaml,
});
exports.defaultLoadersSync = Object.freeze({
    '.cjs': loaders_1.loadJsSync,
    '.js': loaders_1.loadJsSync,
    '.ts': loaders_1.loadTsSync,
    '.json': loaders_1.loadJson,
    '.yaml': loaders_1.loadYaml,
    '.yml': loaders_1.loadYaml,
    noExt: loaders_1.loadYaml,
});
//# sourceMappingURL=defaults.js.map