import { compareStrings, asArray } from '@graphql-tools/utils';
import { normalizePointers } from './utils/pointers.js';
import { applyDefaultOptions } from './load-typedefs/options.js';
import { collectSources, collectSourcesSync } from './load-typedefs/collect-sources.js';
import { parseSource } from './load-typedefs/parse.js';
import { useLimit } from './utils/helpers.js';
import { env } from 'process';
const CONCURRENCY_LIMIT = 100;
/**
 * Asynchronously loads any GraphQL documents (i.e. executable documents like
 * operations and fragments as well as type system definitions) from the
 * provided pointers.
 * loadTypedefs does not merge the typeDefs when `#import` is used ( https://github.com/ardatan/graphql-tools/issues/2980#issuecomment-1003692728 )
 * @param pointerOrPointers Pointers to the sources to load the documents from
 * @param options Additional options
 */
export async function loadTypedefs(pointerOrPointers, options) {
    if (env['DEBUG'] != null) {
        console.time('@graphql-tools/load: loadTypedefs');
    }
    const { ignore, pointerOptionMap } = normalizePointers(pointerOrPointers);
    options.ignore = asArray(options.ignore || []);
    options.ignore.push(...ignore);
    applyDefaultOptions(options);
    const sources = await collectSources({
        pointerOptionMap,
        options,
    });
    const validSources = [];
    // If we have few k of files it may be an issue
    const limit = useLimit(CONCURRENCY_LIMIT);
    await Promise.all(sources.map(partialSource => limit(() => parseSource({
        partialSource,
        options,
        pointerOptionMap,
        addValidSource(source) {
            validSources.push(source);
        },
    }))));
    const result = prepareResult({ options, pointerOptionMap, validSources });
    if (env['DEBUG'] != null) {
        console.timeEnd('@graphql-tools/load: loadTypedefs');
    }
    return result;
}
/**
 * Synchronously loads any GraphQL documents (i.e. executable documents like
 * operations and fragments as well as type system definitions) from the
 * provided pointers.
 * @param pointerOrPointers Pointers to the sources to load the documents from
 * @param options Additional options
 */
export function loadTypedefsSync(pointerOrPointers, options) {
    if (env['DEBUG'] != null) {
        console.time('@graphql-tools/load: loadTypedefsSync');
    }
    const { ignore, pointerOptionMap } = normalizePointers(pointerOrPointers);
    options.ignore = asArray(options.ignore || []).concat(ignore);
    applyDefaultOptions(options);
    const sources = collectSourcesSync({
        pointerOptionMap,
        options,
    });
    const validSources = [];
    for (const partialSource of sources) {
        parseSource({
            partialSource,
            options,
            pointerOptionMap,
            addValidSource(source) {
                validSources.push(source);
            },
        });
    }
    const result = prepareResult({ options, pointerOptionMap, validSources });
    if (env['DEBUG'] != null) {
        console.timeEnd('@graphql-tools/load: loadTypedefsSync');
    }
    return result;
}
//
function prepareResult({ options, pointerOptionMap, validSources, }) {
    if (env['DEBUG'] != null) {
        console.time('@graphql-tools/load: prepareResult');
    }
    const pointerList = Object.keys(pointerOptionMap);
    if (pointerList.length > 0 && validSources.length === 0) {
        throw new Error(`
      Unable to find any GraphQL type definitions for the following pointers:
        ${pointerList.map(p => `
          - ${p}
          `)}`);
    }
    const sortedResult = options.sort
        ? validSources.sort((left, right) => compareStrings(left.location, right.location))
        : validSources;
    if (env['DEBUG'] != null) {
        console.timeEnd('@graphql-tools/load: prepareResult');
    }
    return sortedResult;
}
