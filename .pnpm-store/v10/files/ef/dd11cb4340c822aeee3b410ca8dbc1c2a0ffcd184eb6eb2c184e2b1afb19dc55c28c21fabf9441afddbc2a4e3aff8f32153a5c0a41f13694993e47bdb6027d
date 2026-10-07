import type { SearchOptions } from './algoliasearch';
import type { PlainSearchParameters, RecommendParametersOptions, RecommendResults, SearchForFacetValues, SearchResults } from 'algoliasearch-helper';
export type HitAttributeHighlightResult = {
    value: string;
    matchLevel: 'none' | 'partial' | 'full';
    matchedWords: string[];
    fullyHighlighted?: boolean;
};
export type HitHighlightResult = {
    [attribute: string]: HitAttributeHighlightResult | HitAttributeHighlightResult[] | HitHighlightResult[] | HitHighlightResult;
};
export type HitAttributeSnippetResult = Pick<HitAttributeHighlightResult, 'value' | 'matchLevel'>;
export type HitSnippetResult = {
    [attribute: string]: HitAttributeSnippetResult[] | HitSnippetResult[] | HitAttributeSnippetResult | HitSnippetResult;
};
export type GeoLoc = {
    lat: number;
    lng: number;
};
export type AlgoliaHit<THit extends NonNullable<object> = Record<string, any>> = {
    objectID: string;
    _highlightResult?: HitHighlightResult;
    _snippetResult?: HitSnippetResult;
    _rankingInfo?: {
        promoted: boolean;
        nbTypos: number;
        firstMatchedWord: number;
        proximityDistance?: number;
        geoDistance: number;
        geoPrecision?: number;
        nbExactWords: number;
        words: number;
        filters: number;
        userScore: number;
        matchedGeoLocation?: {
            lat: number;
            lng: number;
            distance: number;
        };
    };
    _distinctSeqID?: number;
    _geoloc?: GeoLoc;
} & THit;
export type BaseHit = Record<string, any>;
export type Hit<THit extends NonNullable<object> = Record<string, any>> = {
    __position: number;
    __queryID?: string;
} & AlgoliaHit<THit>;
export type GeoHit<THit extends NonNullable<object> = BaseHit> = Hit<THit> & Required<Pick<Hit, '_geoloc'>>;
/**
 * @deprecated use Hit[] directly instead
 */
export type Hits = Hit[];
export type EscapedHits<THit = Hit> = THit[] & {
    __escaped: boolean;
};
export type FacetHit = SearchForFacetValues.Hit;
export type FacetRefinement = {
    value: string;
    type: 'conjunctive' | 'disjunctive' | 'exclude';
};
export type NumericRefinement = {
    value: number[];
    type: 'numeric';
    operator: string;
};
export type Refinement = FacetRefinement | NumericRefinement;
type InitialResult = {
    state?: PlainSearchParameters;
    results?: SearchResults['_rawResults'];
    recommendResults?: {
        params: NonNullable<RecommendParametersOptions['params']>;
        results: RecommendResults['_rawResults'];
    };
    requestParams?: SearchOptions[];
};
export type InitialResults = Record<string, InitialResult>;
export {};
