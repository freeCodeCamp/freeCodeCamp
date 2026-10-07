import { Source } from '@graphql-tools/utils';
import { Kind } from 'graphql';
import { LoadTypedefsOptions, UnnormalizedTypeDefPointer } from './load-typedefs.js';
type KindList = Array<(typeof Kind)[keyof typeof Kind]>;
/**
 * Kinds of AST nodes that are included in executable documents
 */
export declare const OPERATION_KINDS: KindList;
/**
 * Kinds of AST nodes that are included in type system definition documents
 */
export declare const NON_OPERATION_KINDS: KindList;
/**
 * Asynchronously loads executable documents (i.e. operations and fragments) from
 * the provided pointers. The pointers may be individual files or a glob pattern.
 * The files themselves may be `.graphql` files or `.js` and `.ts` (in which
 * case they will be parsed using graphql-tag-pluck).
 * @param pointerOrPointers Pointers to the files to load the documents from
 * @param options Additional options
 */
export declare function loadDocuments(pointerOrPointers: UnnormalizedTypeDefPointer | UnnormalizedTypeDefPointer[], options: LoadTypedefsOptions): Promise<Source[]>;
/**
 * Synchronously loads executable documents (i.e. operations and fragments) from
 * the provided pointers. The pointers may be individual files or a glob pattern.
 * The files themselves may be `.graphql` files or `.js` and `.ts` (in which
 * case they will be parsed using graphql-tag-pluck).
 * @param pointerOrPointers Pointers to the files to load the documents from
 * @param options Additional options
 */
export declare function loadDocumentsSync(pointerOrPointers: UnnormalizedTypeDefPointer | UnnormalizedTypeDefPointer[], options: LoadTypedefsOptions): Source[];
export {};
