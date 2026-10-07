"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSource = void 0;
const utils_1 = require("@graphql-tools/utils");
const process_1 = require("process");
const filter_document_kind_js_1 = require("../filter-document-kind.js");
function parseSource({ partialSource, options, pointerOptionMap, addValidSource }) {
    if (process_1.env['DEBUG'] != null) {
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
    if (process_1.env['DEBUG'] != null) {
        console.timeEnd(`@graphql-tools/load: parseSource ${partialSource.location}`);
    }
}
exports.parseSource = parseSource;
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
    if (process_1.env['DEBUG'] != null) {
        console.time(`@graphql-tools/load: parseSchema ${input.source.location}`);
    }
    if (input.source.schema) {
        input.source.rawSDL = (0, utils_1.printSchemaWithDirectives)(input.source.schema, input.options);
    }
    if (process_1.env['DEBUG'] != null) {
        console.timeEnd(`@graphql-tools/load: parseSchema ${input.source.location}`);
    }
}
function parseRawSDL(input) {
    if (process_1.env['DEBUG'] != null) {
        console.time(`@graphql-tools/load: parseRawSDL ${input.source.location}`);
    }
    if (input.source.rawSDL) {
        input.source.document = (0, utils_1.parseGraphQLSDL)(input.source.location, input.source.rawSDL, input.options).document;
    }
    if (process_1.env['DEBUG'] != null) {
        console.timeEnd(`@graphql-tools/load: parseRawSDL ${input.source.location}`);
    }
}
function useKindsFilter(input) {
    if (process_1.env['DEBUG'] != null) {
        console.time(`@graphql-tools/load: useKindsFilter ${input.source.location}`);
    }
    if (input.options.filterKinds) {
        input.source.document = (0, filter_document_kind_js_1.filterKind)(input.source.document, input.options.filterKinds);
    }
}
function useComments(input) {
    if (process_1.env['DEBUG'] != null) {
        console.time(`@graphql-tools/load: useComments ${input.source.location}`);
    }
    if (!input.source.rawSDL && input.source.document) {
        input.source.rawSDL = (0, utils_1.printWithComments)(input.source.document);
        (0, utils_1.resetComments)();
    }
    if (process_1.env['DEBUG'] != null) {
        console.timeEnd(`@graphql-tools/load: useComments ${input.source.location}`);
    }
}
function collectValidSources(input, addValidSource) {
    var _a;
    if (process_1.env['DEBUG'] != null) {
        console.time(`@graphql-tools/load: collectValidSources ${input.source.location}`);
    }
    if (((_a = input.source.document) === null || _a === void 0 ? void 0 : _a.definitions) && input.source.document.definitions.length > 0) {
        addValidSource(input.source);
    }
    if (process_1.env['DEBUG'] != null) {
        console.timeEnd(`@graphql-tools/load: collectValidSources ${input.source.location}`);
    }
}
