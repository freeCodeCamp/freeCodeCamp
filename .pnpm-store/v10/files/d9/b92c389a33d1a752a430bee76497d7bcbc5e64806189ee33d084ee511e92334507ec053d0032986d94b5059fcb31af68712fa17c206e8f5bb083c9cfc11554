"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const extname_js_1 = require("./libs/extname.js");
function generateConfig(filePath, code, _options) {
    const plugins = [
        'asyncGenerators',
        'bigInt',
        'classProperties',
        'classPrivateProperties',
        'classPrivateMethods',
        'decorators-legacy',
        'doExpressions',
        'dynamicImport',
        'exportDefaultFrom',
        'exportNamespaceFrom',
        'functionBind',
        'functionSent',
        'importMeta',
        'logicalAssignment',
        'nullishCoalescingOperator',
        'numericSeparator',
        'objectRestSpread',
        'optionalCatchBinding',
        'optionalChaining',
        ['pipelineOperator', { proposal: 'smart' }],
        'throwExpressions',
    ];
    // { all: true } option is bullshit thus I do it manually, just in case
    // I still specify it
    const flowPlugins = [['flow', { all: true }], 'flowComments'];
    // If line has @flow header, include flow plug-ins
    const dynamicFlowPlugins = code.includes('@flow') ? flowPlugins : [];
    const fileExt = (0, extname_js_1.getExtNameFromFilePath)(filePath);
    switch (fileExt) {
        case '.ts':
        case '.cts':
        case '.mts':
            plugins.push('typescript');
            plugins.push('importAssertions');
            break;
        case '.tsx':
            plugins.push('typescript', 'jsx');
            plugins.push('importAssertions');
            break;
        // Adding .jsx extension by default because it doesn't affect other syntax features
        // (unlike .tsx) and because people are seem to use it with regular file extensions
        // (e.g. .js) see https://github.com/dotansimha/graphql-code-generator/issues/1967
        case '.js':
        case '.mjs':
        case '.cjs':
            plugins.push('jsx', ...dynamicFlowPlugins);
            break;
        case '.jsx':
            plugins.push('jsx', ...dynamicFlowPlugins);
            break;
        case '.flow.js':
            plugins.push('jsx', ...flowPlugins);
            break;
        case '.flow.jsx':
            plugins.push('jsx', ...flowPlugins);
            break;
        case '.flow':
            plugins.push('jsx', ...flowPlugins);
            break;
        case '.vue':
            plugins.push('typescript', 'vue');
            break;
        case '.svelte':
            plugins.push('typescript', 'svelte');
            break;
        default:
            plugins.push('jsx', ...dynamicFlowPlugins);
            break;
    }
    // The _options filed will be used to retrieve the original options.
    // Useful when we wanna get not config related options later on
    return {
        sourceType: 'module',
        plugins,
        allowUndeclaredExports: true,
    };
}
exports.default = generateConfig;
