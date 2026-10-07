import type { SearchParameters, SearchResults } from 'algoliasearch-helper';
export type FacetRefinement = {
    type: 'facet' | 'disjunctive' | 'hierarchical';
    attribute: string;
    name: string;
    escapedValue: string;
    count?: number;
    exhaustive?: boolean;
};
export type TagRefinement = {
    type: 'tag';
    attribute: string;
    name: string;
};
export type QueryRefinement = {
    type: 'query';
    attribute: 'query';
    query: string;
    name: string;
};
export type NumericRefinement = {
    type: 'numeric';
    numericValue: number;
    operator: '<' | '<=' | '=' | '!=' | '>=' | '>';
    attribute: string;
    name: string;
    count?: number;
    exhaustive?: boolean;
};
export type FacetExcludeRefinement = {
    type: 'exclude';
    exclude: boolean;
    attribute: string;
    name: string;
    count?: number;
    exhaustive?: boolean;
};
export type Refinement = FacetRefinement | QueryRefinement | NumericRefinement | FacetExcludeRefinement | TagRefinement;
export declare function getRefinements(_results: SearchResults | Record<string, never> | null, state: SearchParameters, includesQuery?: boolean): Refinement[];
