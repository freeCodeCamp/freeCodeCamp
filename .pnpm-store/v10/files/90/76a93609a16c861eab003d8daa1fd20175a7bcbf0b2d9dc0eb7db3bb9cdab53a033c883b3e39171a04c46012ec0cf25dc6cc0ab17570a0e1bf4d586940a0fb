import { isDocumentString, parseGraphQLSDL, getDocumentNodeFromSchema, asArray } from '@graphql-tools/utils';
import { isSchema, Kind } from 'graphql';
import { loadFile, loadFileSync } from './load-file.js';
import { stringToHash, useStack } from '../utils/helpers.js';
import { useCustomLoader, useCustomLoaderSync } from '../utils/custom-loader.js';
import { useQueue, useSyncQueue } from '../utils/queue.js';
import { createRequire } from 'module';
import { cwd, env } from 'process';
const CONCURRENCY_LIMIT = 50;
export async function collectSources({ pointerOptionMap, options, }) {
    if (env['DEBUG'] != null) {
        console.time('@graphql-tools/load: collectSources');
    }
    const sources = [];
    const queue = useQueue({ concurrency: CONCURRENCY_LIMIT });
    const { addSource, collect } = createHelpers({
        sources,
        stack: [collectDocumentString, collectCustomLoader, collectFallback],
    });
    for (const pointer in pointerOptionMap) {
        const pointerOptions = pointerOptionMap[pointer];
        if (env['DEBUG'] != null) {
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
        if (env['DEBUG'] != null) {
            console.timeEnd(`@graphql-tools/load: collectSources ${pointer}`);
        }
    }
    if (env['DEBUG'] != null) {
        console.time('@graphql-tools/load: collectSources queue');
    }
    await queue.runAll();
    if (env['DEBUG'] != null) {
        console.timeEnd('@graphql-tools/load: collectSources queue');
    }
    return sources;
}
export function collectSourcesSync({ pointerOptionMap, options, }) {
    const sources = [];
    const queue = useSyncQueue();
    const { addSource, collect } = createHelpers({
        sources,
        stack: [collectDocumentString, collectCustomLoaderSync, collectFallbackSync],
    });
    if (env['DEBUG'] != null) {
        console.time('@graphql-tools/load: collectSourcesSync');
    }
    for (const pointer in pointerOptionMap) {
        const pointerOptions = pointerOptionMap[pointer];
        if (env['DEBUG'] != null) {
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
        if (env['DEBUG'] != null) {
            console.timeEnd(`@graphql-tools/load: collectSourcesSync ${pointer}`);
        }
    }
    if (env['DEBUG'] != null) {
        console.time('@graphql-tools/load: collectSourcesSync queue');
    }
    queue.runAll();
    if (env['DEBUG'] != null) {
        console.timeEnd('@graphql-tools/load: collectSourcesSync queue');
    }
    return sources;
}
function createHelpers({ sources, stack }) {
    const addSource = ({ source }) => {
        sources.push(source);
    };
    const collect = useStack(...stack);
    return {
        addSource,
        collect,
    };
}
function addResultOfCustomLoader({ pointer, result, addSource, }) {
    if (env['DEBUG'] != null) {
        console.time(`@graphql-tools/load: addResultOfCustomLoader ${pointer}`);
    }
    if (isSchema(result)) {
        addSource({
            source: {
                location: pointer,
                schema: result,
                document: getDocumentNodeFromSchema(result),
            },
            pointer,
            noCache: true,
        });
    }
    else if (result.kind && result.kind === Kind.DOCUMENT) {
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
    if (env['DEBUG'] != null) {
        console.timeEnd(`@graphql-tools/load: addResultOfCustomLoader ${pointer}`);
    }
}
function collectDocumentString({ pointer, pointerOptions, options, addSource, queue }, next) {
    if (env['DEBUG'] != null) {
        console.time(`@graphql-tools/load: collectDocumentString ${pointer}`);
    }
    if (isDocumentString(pointer)) {
        return queue(() => {
            const source = parseGraphQLSDL(`${stringToHash(pointer)}.graphql`, pointer, {
                ...options,
                ...pointerOptions,
            });
            addSource({
                source,
                pointer,
            });
        });
    }
    if (env['DEBUG'] != null) {
        console.timeEnd(`@graphql-tools/load: collectDocumentString ${pointer}`);
    }
    next();
}
function collectCustomLoader({ pointer, pointerOptions, queue, addSource, options, pointerOptionMap }, next) {
    if (pointerOptions.loader) {
        return queue(async () => {
            if (env['DEBUG'] != null) {
                console.time(`@graphql-tools/load: collectCustomLoader ${pointer}`);
            }
            await Promise.all(asArray(pointerOptions.require).map(m => import(m)));
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore TODO options.cwd is possibly undefined, but it seems like no test covers this path
            const loader = await useCustomLoader(pointerOptions.loader, options.cwd);
            const result = await loader(pointer, { ...options, ...pointerOptions }, pointerOptionMap);
            if (env['DEBUG'] != null) {
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
            if (env['DEBUG'] != null) {
                console.time(`@graphql-tools/load: collectCustomLoaderSync ${pointer}`);
            }
            const cwdRequire = createRequire(options.cwd || cwd());
            for (const m of asArray(pointerOptions.require)) {
                cwdRequire(m);
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore TODO options.cwd is possibly undefined, but it seems like no test covers this path
            const loader = useCustomLoaderSync(pointerOptions.loader, options.cwd);
            const result = loader(pointer, { ...options, ...pointerOptions }, pointerOptionMap);
            if (env['DEBUG'] != null) {
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
        if (env['DEBUG'] != null) {
            console.time(`@graphql-tools/load: collectFallback ${pointer}`);
        }
        const sources = await loadFile(pointer, {
            ...options,
            ...pointerOptions,
        });
        if (sources) {
            for (const source of sources) {
                addSource({ source, pointer });
            }
        }
        if (env['DEBUG'] != null) {
            console.timeEnd(`@graphql-tools/load: collectFallback ${pointer}`);
        }
    });
}
function collectFallbackSync({ queue, pointer, options, pointerOptions, addSource }) {
    return queue(() => {
        if (env['DEBUG'] != null) {
            console.time(`@graphql-tools/load: collectFallbackSync ${pointer}`);
        }
        const sources = loadFileSync(pointer, {
            ...options,
            ...pointerOptions,
        });
        if (sources) {
            for (const source of sources) {
                addSource({ source, pointer });
            }
        }
        if (env['DEBUG'] != null) {
            console.timeEnd(`@graphql-tools/load: collectFallbackSync ${pointer}`);
        }
    });
}
