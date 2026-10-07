import type { XSchemaObject } from './schema.mjs';
export interface XRefinement {
    check: (value: unknown) => boolean;
    error: (value: unknown) => string;
}
export interface XRefine<Refinements extends XRefinement[] = XRefinement[]> {
    '~refine': Refinements;
}
/**
 * Returns true if the schema contains an '~refine` keyword
 * @specification None
 */
export declare function IsRefine(value: XSchemaObject): value is XRefine;
