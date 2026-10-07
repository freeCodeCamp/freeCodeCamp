"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadDocumentsSync = exports.loadDocuments = exports.NON_OPERATION_KINDS = exports.OPERATION_KINDS = void 0;
const graphql_1 = require("graphql");
const load_typedefs_js_1 = require("./load-typedefs.js");
/**
 * Kinds of AST nodes that are included in executable documents
 */
exports.OPERATION_KINDS = [graphql_1.Kind.OPERATION_DEFINITION, graphql_1.Kind.FRAGMENT_DEFINITION];
/**
 * Kinds of AST nodes that are included in type system definition documents
 */
exports.NON_OPERATION_KINDS = Object.keys(graphql_1.Kind)
    .reduce((prev, v) => [...prev, graphql_1.Kind[v]], [])
    .filter(v => !exports.OPERATION_KINDS.includes(v));
/**
 * Asynchronously loads executable documents (i.e. operations and fragments) from
 * the provided pointers. The pointers may be individual files or a glob pattern.
 * The files themselves may be `.graphql` files or `.js` and `.ts` (in which
 * case they will be parsed using graphql-tag-pluck).
 * @param pointerOrPointers Pointers to the files to load the documents from
 * @param options Additional options
 */
function loadDocuments(pointerOrPointers, options) {
    return (0, load_typedefs_js_1.loadTypedefs)(pointerOrPointers, { noRequire: true, filterKinds: exports.NON_OPERATION_KINDS, ...options });
}
exports.loadDocuments = loadDocuments;
/**
 * Synchronously loads executable documents (i.e. operations and fragments) from
 * the provided pointers. The pointers may be individual files or a glob pattern.
 * The files themselves may be `.graphql` files or `.js` and `.ts` (in which
 * case they will be parsed using graphql-tag-pluck).
 * @param pointerOrPointers Pointers to the files to load the documents from
 * @param options Additional options
 */
function loadDocumentsSync(pointerOrPointers, options) {
    return (0, load_typedefs_js_1.loadTypedefsSync)(pointerOrPointers, { noRequire: true, filterKinds: exports.NON_OPERATION_KINDS, ...options });
}
exports.loadDocumentsSync = loadDocumentsSync;
