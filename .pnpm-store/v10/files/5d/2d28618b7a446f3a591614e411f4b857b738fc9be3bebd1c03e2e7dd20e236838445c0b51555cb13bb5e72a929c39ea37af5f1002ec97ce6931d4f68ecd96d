import { printSchemaWithDirectives, parseGraphQLSDL, printWithComments, resetComments, } from '@graphql-tools/utils';
import { env } from 'process';
import { filterKind } from '../filter-document-kind.js';
export function parseSource({ partialSource, options, pointerOptionMap, addValidSource }) {
    if (env['DEBUG'] != null) {
        console.time(`@graphql-tools/load: parseSource ${partialSource.location}`);
    }
    if (partialSource) {
        const input = prepareInput({
            source: partialSource,
            options,
            pointerOptionMap,
        });
        parseSchema(input);
        parseRawSDL(input);
        if (input.source.document) {
            useKindsFilter(input);
            useComments(input);
            collectValidSources(input, addValidSource);
        }
    }
    if (env['DEBUG'] != null) {
        console.timeEnd(`@graphql-tools/load: parseSource ${partialSource.location}`);
    }
}
//
function prepareInput({ source, options, pointerOptionMap, }) {
    let specificOptions = {
        ...options,
    };
    if (source.location) {
        specificOptions = {
            ...specificOptions,
            ...pointerOptionMap[source.location],
        };
    }
    return { source: { ...source }, options: specificOptions };
}
function parseSchema(input) {
    if (env['DEBUG'] != null) {
        console.time(`@graphql-tools/load: parseSchema ${input.source.location}`);
    }
    if (input.source.schema) {
        input.source.rawSDL = printSchemaWithDirectives(input.source.schema, input.options);
    }
    if (env['DEBUG'] != null) {
        console.timeEnd(`@graphql-tools/load: parseSchema ${input.source.location}`);
    }
}
function parseRawSDL(input) {
    if (env['DEBUG'] != null) {
        console.time(`@graphql-tools/load: parseRawSDL ${input.source.location}`);
    }
    if (input.source.rawSDL) {
        input.source.document = parseGraphQLSDL(input.source.location, input.source.rawSDL, input.options).document;
    }
    if (env['DEBUG'] != null) {
        console.timeEnd(`@graphql-tools/load: parseRawSDL ${input.source.location}`);
    }
}
function useKindsFilter(input) {
    if (env['DEBUG'] != null) {
        console.time(`@graphql-tools/load: useKindsFilter ${input.source.location}`);
    }
    if (input.options.filterKinds) {
        input.source.document = filterKind(input.source.document, input.options.filterKinds);
    }
}
function useComments(input) {
    if (env['DEBUG'] != null) {
        console.time(`@graphql-tools/load: useComments ${input.source.location}`);
    }
    if (!input.source.rawSDL && input.source.document) {
        input.source.rawSDL = printWithComments(input.source.document);
        resetComments();
    }
    if (env['DEBUG'] != null) {
        console.timeEnd(`@graphql-tools/load: useComments ${input.source.location}`);
    }
}
function collectValidSources(input, addValidSource) {
    var _a;
    if (env['DEBUG'] != null) {
        console.time(`@graphql-tools/load: collectValidSources ${input.source.location}`);
    }
    if (((_a = input.source.document) === null || _a === void 0 ? void 0 : _a.definitions) && input.source.document.definitions.length > 0) {
        addValidSource(input.source);
    }
    if (env['DEBUG'] != null) {
        console.timeEnd(`@graphql-tools/load: collectValidSources ${input.source.location}`);
    }
}
