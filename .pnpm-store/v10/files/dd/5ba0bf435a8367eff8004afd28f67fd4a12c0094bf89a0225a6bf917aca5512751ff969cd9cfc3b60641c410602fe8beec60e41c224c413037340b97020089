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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectSourcesSync = exports.collectSources = void 0;
const utils_1 = require("@graphql-tools/utils");
const graphql_1 = require("graphql");
const load_file_js_1 = require("./load-file.js");
const helpers_js_1 = require("../utils/helpers.js");
const custom_loader_js_1 = require("../utils/custom-loader.js");
const queue_js_1 = require("../utils/queue.js");
const module_1 = require("module");
const process_1 = require("process");
const CONCURRENCY_LIMIT = 50;
async function collectSources({ pointerOptionMap, options, }) {
    if (process_1.env['DEBUG'] != null) {
        console.time('@graphql-tools/load: collectSources');
    }
    const sources = [];
    const queue = (0, queue_js_1.useQueue)({ concurrency: CONCURRENCY_LIMIT });
    const { addSource, collect } = createHelpers({
        sources,
        stack: [collectDocumentString, collectCustomLoader, collectFallback],
    });
    for (const pointer in pointerOptionMap) {
        const pointerOptions = pointerOptionMap[pointer];
        if (process_1.env['DEBUG'] != null) {
            console.time(`@graphql-tools/load: collectSources ${pointer}`);
        }
        collect({
            pointer,
            pointerOptions,
            pointerOptionMap,
            options,
            addSource,
            queue: queue.add,
        });
        if (process_1.env['DEBUG'] != null) {
            console.timeEnd(`@graphql-tools/load: collectSources ${pointer}`);
        }
    }
    if (process_1.env['DEBUG'] != null) {
        console.time('@graphql-tools/load: collectSources queue');
    }
    await queue.runAll();
    if (process_1.env['DEBUG'] != null) {
        console.timeEnd('@graphql-tools/load: collectSources queue');
    }
    return sources;
}
exports.collectSources = collectSources;
function collectSourcesSync({ pointerOptionMap, options, }) {
    const sources = [];
    const queue = (0, queue_js_1.useSyncQueue)();
    const { addSource, collect } = createHelpers({
        sources,
        stack: [collectDocumentString, collectCustomLoaderSync, collectFallbackSync],
    });
    if (process_1.env['DEBUG'] != null) {
        console.time('@graphql-tools/load: collectSourcesSync');
    }
    for (const pointer in pointerOptionMap) {
        const pointerOptions = pointerOptionMap[pointer];
        if (process_1.env['DEBUG'] != null) {
            console.time(`@graphql-tools/load: collectSourcesSync ${pointer}`);
        }
        collect({
            pointer,
            pointerOptions,
            pointerOptionMap,
            options,
            addSource,
            queue: queue.add,
        });
        if (process_1.env['DEBUG'] != null) {
            console.timeEnd(`@graphql-tools/load: collectSourcesSync ${pointer}`);
        }
    }
    if (process_1.env['DEBUG'] != null) {
        console.time('@graphql-tools/load: collectSourcesSync queue');
    }
    queue.runAll();
    if (process_1.env['DEBUG'] != null) {
        console.timeEnd('@graphql-tools/load: collectSourcesSync queue');
    }
    return sources;
}
exports.collectSourcesSync = collectSourcesSync;
function createHelpers({ sources, stack }) {
    const addSource = ({ source }) => {
        sources.push(source);
    };
    const collect = (0, helpers_js_1.useStack)(...stack);
    return {
        addSource,
        collect,
    };
}
function addResultOfCustomLoader({ pointer, result, addSource, }) {
    if (process_1.env['DEBUG'] != null) {
        console.time(`@graphql-tools/load: addResultOfCustomLoader ${pointer}`);
    }
    if ((0, graphql_1.isSchema)(result)) {
        addSource({
            source: {
                location: pointer,
                schema: result,
                document: (0, utils_1.getDocumentNodeFromSchema)(result),
            },
            pointer,
            noCache: true,
        });
    }
    else if (result.kind && result.kind === graphql_1.Kind.DOCUMENT) {
        addSource({
            source: {
                document: result,
                location: pointer,
            },
            pointer,
        });
    }
    else if (result.document) {
        addSource({
            source: {
                location: pointer,
                ...result,
            },
            pointer,
        });
    }
    if (process_1.env['DEBUG'] != null) {
        console.timeEnd(`@graphql-tools/load: addResultOfCustomLoader ${pointer}`);
    }
}
function collectDocumentString({ pointer, pointerOptions, options, addSource, queue }, next) {
    if (process_1.env['DEBUG'] != null) {
        console.time(`@graphql-tools/load: collectDocumentString ${pointer}`);
    }
    if ((0, utils_1.isDocumentString)(pointer)) {
        return queue(() => {
            const source = (0, utils_1.parseGraphQLSDL)(`${(0, helpers_js_1.stringToHash)(pointer)}.graphql`, pointer, {
                ...options,
                ...pointerOptions,
            });
            addSource({
                source,
                pointer,
            });
        });
    }
    if (process_1.env['DEBUG'] != null) {
        console.timeEnd(`@graphql-tools/load: collectDocumentString ${pointer}`);
    }
    next();
}
function collectCustomLoader({ pointer, pointerOptions, queue, addSource, options, pointerOptionMap }, next) {
    if (pointerOptions.loader) {
        return queue(async () => {
            if (process_1.env['DEBUG'] != null) {
                console.time(`@graphql-tools/load: collectCustomLoader ${pointer}`);
            }
            await Promise.all((0, utils_1.asArray)(pointerOptions.require).map(m => Promise.resolve(`${m}`).then(s => __importStar(require(s)))));
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore TODO options.cwd is possibly undefined, but it seems like no test covers this path
            const loader = await (0, custom_loader_js_1.useCustomLoader)(pointerOptions.loader, options.cwd);
            const result = await loader(pointer, { ...options, ...pointerOptions }, pointerOptionMap);
            if (process_1.env['DEBUG'] != null) {
                console.timeEnd(`@graphql-tools/load: collectCustomLoader ${pointer}`);
            }
            if (!result) {
                return;
            }
            addResultOfCustomLoader({ pointer, result, addSource });
        });
    }
    next();
}
function collectCustomLoaderSync({ pointer, pointerOptions, queue, addSource, options, pointerOptionMap }, next) {
    if (pointerOptions.loader) {
        return queue(() => {
            if (process_1.env['DEBUG'] != null) {
                console.time(`@graphql-tools/load: collectCustomLoaderSync ${pointer}`);
            }
            const cwdRequire = (0, module_1.createRequire)(options.cwd || (0, process_1.cwd)());
            for (const m of (0, utils_1.asArray)(pointerOptions.require)) {
                cwdRequire(m);
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore TODO options.cwd is possibly undefined, but it seems like no test covers this path
            const loader = (0, custom_loader_js_1.useCustomLoaderSync)(pointerOptions.loader, options.cwd);
            const result = loader(pointer, { ...options, ...pointerOptions }, pointerOptionMap);
            if (process_1.env['DEBUG'] != null) {
                console.timeEnd(`@graphql-tools/load: collectCustomLoaderSync ${pointer}`);
            }
            if (result) {
                addResultOfCustomLoader({ pointer, result, addSource });
            }
        });
    }
    next();
}
function collectFallback({ queue, pointer, options, pointerOptions, addSource }) {
    return queue(async () => {
        if (process_1.env['DEBUG'] != null) {
            console.time(`@graphql-tools/load: collectFallback ${pointer}`);
        }
        const sources = await (0, load_file_js_1.loadFile)(pointer, {
            ...options,
            ...pointerOptions,
        });
        if (sources) {
            for (const source of sources) {
                addSource({ source, pointer });
            }
        }
        if (process_1.env['DEBUG'] != null) {
            console.timeEnd(`@graphql-tools/load: collectFallback ${pointer}`);
        }
    });
}
function collectFallbackSync({ queue, pointer, options, pointerOptions, addSource }) {
    return queue(() => {
        if (process_1.env['DEBUG'] != null) {
            console.time(`@graphql-tools/load: collectFallbackSync ${pointer}`);
        }
        const sources = (0, load_file_js_1.loadFileSync)(pointer, {
            ...options,
            ...pointerOptions,
        });
        if (sources) {
            for (const source of sources) {
                addSource({ source, pointer });
            }
        }
        if (process_1.env['DEBUG'] != null) {
            console.timeEnd(`@graphql-tools/load: collectFallbackSync ${pointer}`);
        }
    });
}
