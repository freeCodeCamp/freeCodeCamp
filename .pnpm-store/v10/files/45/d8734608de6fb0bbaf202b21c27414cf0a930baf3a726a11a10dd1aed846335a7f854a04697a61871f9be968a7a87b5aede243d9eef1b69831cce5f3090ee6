// Note: Below, we will be importing all algoliasearch v3,4,5 types.
// The goal is being able to export the algoliasearch-helper types using
// the version of the client installed by the developer.

// @ts-ignore
import type * as ClientSearch from '@algolia/client-search';
// @ts-ignore
import type * as RecommendClient from '@algolia/recommend';
// @ts-ignore
import type * as AlgoliaSearch from 'algoliasearch';
// @ts-ignore
import type algoliasearch from 'algoliasearch/lite';
// @ts-ignore
import type * as AlgoliaSearchLite from 'algoliasearch/lite';

// turns any to unknown, so it can be used as a conditional
// more info in https://stackoverflow.com/a/49928360/3185307
type AnyToUnknown<T> = (0 extends 1 & T ? true : false) extends true
  ? unknown
  : T;
type IsNull<T> = [T] extends [null] ? true : false;
type IsUnknown<T> = unknown extends T // `T` can be `unknown` or `any`
  ? IsNull<T> extends false // `any` can be `null`, but `unknown` can't be
    ? true
    : false
  : false;

type SearchClientV4Shape = {
  transporter: unknown;
};

type SearchClientShape = {
  search: unknown;
};

// @ts-ignore
type ClientV3_4 = ReturnType<typeof algoliasearch>;

type ClientLiteV5 = IsUnknown<
  AnyToUnknown<typeof AlgoliaSearchLite>
> extends true
  ? unknown
  : typeof AlgoliaSearchLite extends { liteClient: unknown }
  ? AnyToUnknown<
      // @ts-ignore
      ReturnType<typeof AlgoliaSearchLite.liteClient>
    >
  : unknown;
type ClientFullV5 = IsUnknown<AnyToUnknown<typeof AlgoliaSearch>> extends true
  ? unknown
  : typeof AlgoliaSearch extends { algoliasearch: unknown }
  ? AnyToUnknown<
      // @ts-ignore
      ReturnType<typeof AlgoliaSearch.algoliasearch>
    >
  : unknown;
type ClientSearchV5 = IsUnknown<AnyToUnknown<typeof ClientSearch>> extends true
  ? unknown
  : typeof ClientSearch extends { searchClient: unknown }
  ? AnyToUnknown<
      // @ts-ignore
      ReturnType<typeof ClientSearch.searchClient>
    >
  : unknown;
type ClientV5 = ClientLiteV5 extends SearchClientShape
  ? ClientLiteV5
  : ClientSearchV5 extends SearchClientShape
  ? ClientSearchV5
  : ClientFullV5 extends SearchClientShape
  ? ClientFullV5
  : unknown;

type PickForClient<
  T extends {
    v3: unknown;
    v4: unknown;
    v5: unknown;
  }
> = ClientV5 extends SearchClientShape
  ? T['v5']
  : // @ts-ignore
  ClientV3_4 extends SearchClientV4Shape
  ? T['v4']
  : T['v3'];

type ClientVersion = PickForClient<{
  v3: '3';
  v4: '4';
  v5: '5';
}>;

type DefaultSearchClient = PickForClient<{
  v3: ClientV3_4;
  v4: ClientV3_4;
  v5: ClientV5;
}>;

export type HighlightResult<T> = PickForClient<{
  // @ts-ignore this doesn't exist as an exact type in v3
  v3: any;
  // @ts-ignore
  v4: ClientSearch.HighlightResult<T>;
  // @ts-ignore the type in the v5 library is not yet correct https://github.com/algolia/api-clients-automation/issues/853
  v5: any;
}>;

export type SnippetResult<T> = PickForClient<{
  // @ts-ignore this doesn't exist as an exact type in v3
  v3: any;
  // @ts-ignore
  v4: ClientSearch.SnippetResult<T>;
  // @ts-ignore the type in the v5 library is not yet correct https://github.com/algolia/api-clients-automation/issues/853
  v5: any;
}>;

export type RankingInfo = PickForClient<{
  v3: Record<string, unknown>;
  // @ts-ignore
  v4: ClientSearch.RankingInfo;
  // @ts-ignore
  v5: AlgoliaSearch.RankingInfo;
}>;

export type SearchOptions = PickForClient<{
  // @ts-ignore
  v3: AlgoliaSearch.QueryParameters;
  // @ts-ignore
  v4: ClientSearch.SearchOptions;
  v5: NonNullable<
    // @ts-ignore
    AlgoliaSearch.LegacySearchMethodProps[number]['params']
  >;
}>;

export type SearchResponse<T> = PickForClient<{
  // @ts-ignore
  v3: AlgoliaSearch.Response<T> & {
    appliedRelevancyStrictness?: number;
    nbSortedHits?: number;
    renderingContent?: {
      facetOrdering?: {
        facets?: {
          order?: string[];
        };
        values?: {
          [facet: string]: {
            order?: string[];
            sortRemainingBy?: 'count' | 'alpha' | 'hidden';
          };
        };
      };
    };
  };
  // @ts-ignore
  v4: ClientSearch.SearchResponse<T>;
  // @ts-ignore
  v5: AlgoliaSearch.SearchResponse<T>;
}>;

export type SearchResponses<T> = PickForClient<{
  // @ts-ignore
  v3: AlgoliaSearch.MultiResponse<T>;
  // @ts-ignore
  v4: ClientSearch.MultipleQueriesResponse<T>;
  // @ts-ignore
  v5: AlgoliaSearch.SearchResponses<T>;
}>;

export type RecommendResponse<T> = PickForClient<{
  v3: any;
  // @ts-ignore
  v4: ClientSearch.SearchResponse<T>;
  // @ts-ignore
  v5: AlgoliaSearch.RecommendationsResults;
}>;

export type RecommendResponses<T> = PickForClient<{
  v3: any;
  // @ts-ignore
  v4: RecommendClient.RecommendQueriesResponse<T>;
  // @ts-ignore
  v5: AlgoliaSearch.GetRecommendationsResponse;
}>;

// We remove `indexName` from the Recommend query types as the helper
// will fill in this value before sending the queries
type _OptionalKeys<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
type _RequiredKeys<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

export type FrequentlyBoughtTogetherQuery = PickForClient<{
  v3: any;
  // @ts-ignore
  v4: Omit<RecommendClient.FrequentlyBoughtTogetherQuery, 'indexName'>;
  // @ts-ignore
  v5: _OptionalKeys<
    // @ts-ignore
    Omit<AlgoliaSearch.BoughtTogetherQuery, 'model' | 'indexName'>,
    'threshold'
  >;
}>;
export type LookingSimilarQuery = PickForClient<{
  v3: any;
  // @ts-ignore
  v4: Omit<RecommendClient.LookingSimilarQuery, 'indexName'>;
  v5: _OptionalKeys<
    // @ts-ignore
    Omit<AlgoliaSearch.LookingSimilarQuery, 'model' | 'indexName'>,
    'threshold'
  >;
}>;
export type RelatedProductsQuery = PickForClient<{
  v3: any;
  // @ts-ignore
  v4: Omit<RecommendClient.RelatedProductsQuery, 'indexName'>;
  v5: _OptionalKeys<
    // @ts-ignore
    Omit<AlgoliaSearch.LookingSimilarQuery, 'model' | 'indexName'>,
    'threshold'
  >;
}>;
export type TrendingFacetsQuery = PickForClient<{
  v3: any;
  // @ts-ignore
  v4: Omit<RecommendClient.TrendingFacetsQuery, 'indexName'>;
  v5: _OptionalKeys<
    // @ts-ignore
    Omit<AlgoliaSearch.TrendingFacetsQuery, 'model' | 'indexName'>,
    'threshold'
  >;
}>;
export type TrendingItemsQuery = PickForClient<{
  v3: any;
  // @ts-ignore
  v4: Omit<RecommendClient.TrendingItemsQuery, 'indexName'>;
  v5: _OptionalKeys<
    // @ts-ignore
    Omit<AlgoliaSearch.TrendingItemsQuery, 'model' | 'indexName'>,
    'threshold'
  >;
}>;

export type RecommendOptions =
  | _RequiredKeys<
      FrequentlyBoughtTogetherQuery & {
        indexName: string;
        model: 'bought-together';
      },
      'threshold' | 'indexName' | 'model'
    >
  | _RequiredKeys<
      LookingSimilarQuery & { indexName: string; model: 'looking-similar' },
      'threshold' | 'indexName' | 'model'
    >
  | _RequiredKeys<
      RelatedProductsQuery & { indexName: string; model: 'related-products' },
      'threshold' | 'indexName' | 'model'
    >
  | _RequiredKeys<
      TrendingFacetsQuery & { indexName: string; model: 'trending-facets' },
      'threshold' | 'indexName' | 'model'
    >
  | _RequiredKeys<
      TrendingItemsQuery & { indexName: string; model: 'trending-items' },
      'threshold' | 'indexName' | 'model'
    >;

export type PlainRecommendParameters =
  | FrequentlyBoughtTogetherQuery
  | LookingSimilarQuery
  | RelatedProductsQuery
  | TrendingFacetsQuery
  | TrendingItemsQuery;

export type SearchForFacetValuesResponse = PickForClient<{
  // @ts-ignore
  v3: AlgoliaSearch.SearchForFacetValues.Response;
  // @ts-ignore
  v4: ClientSearch.SearchForFacetValuesResponse;
  // @ts-ignore
  v5: AlgoliaSearch.SearchForFacetValuesResponse;
}>;

export type FindAnswersOptions = PickForClient<{
  v3: any; // answers only exists in v4
  // @ts-ignore
  v4: ClientSearch.FindAnswersOptions;
  v5: any; // answers only exists in v4
}>;
export type FindAnswersResponse<T> = PickForClient<{
  v3: any; // answers only exists in v4
  // @ts-ignore
  v4: ClientSearch.FindAnswersResponse<T>;
  v5: any; // answers only exists in v4
}>;
export type FindAnswers = PickForClient<{
  v3: any; // answers only exists in v4
  // @ts-ignore
  v4: ReturnType<DefaultSearchClient['initIndex']>['findAnswers'];
  v5: any; // answers only exists in v4
}>;

export type SupportedLanguage = PickForClient<{
  v3: string;
  v4: string;
  // @ts-ignore
  v5: AlgoliaSearch.SupportedLanguage;
}>;

// v5 only has the `searchForFacetValues` method in the `search` client, not in `lite`.
// We need to check both clients to get the correct type.
// (this is not actually used in the codebase, but it's here for completeness)
type SearchForFacetValuesV5 = ClientSearchV5 | ClientFullV5 extends {
  searchForFacetValues: unknown;
}
  ?
      | ClientSearchV5['searchForFacetValues']
      | ClientFullV5['searchForFacetValues']
  : never;

export interface SearchClient {
  search: <T>(
    requests: Array<{ indexName: string; params: SearchOptions }>
  ) => Promise<SearchResponses<T>>;
  getRecommendations?: <T>(
    requests: RecommendOptions[]
  ) => Promise<RecommendResponses<T>>;
  searchForFacetValues?: DefaultSearchClient extends {
    searchForFacetValues: unknown;
  }
    ? DefaultSearchClient['searchForFacetValues']
    : SearchForFacetValuesV5;
  initIndex?: DefaultSearchClient extends { initIndex: unknown }
    ? DefaultSearchClient['initIndex']
    : never;
  addAlgoliaAgent?: DefaultSearchClient['addAlgoliaAgent'];
}

export interface CompositionClient {
  search: <T>(request: {
    compositionID: string;
    requestBody: { params: SearchOptions };
  }) => Promise<{
    results: Array<AlgoliaSearch.SearchResponse<T>>;
  }>;
  searchForFacetValues?: (options: {
    compositionID: string;
    facetName: string;
    searchForFacetValuesRequest: {
      params: {
        query: string;
        maxFacetHits: number;
        searchQuery: SearchOptions;
      };
    };
  }) => Promise<{ results: AlgoliaSearch.SearchForFacetValuesResponse[] }>;
  initIndex?: never;
  addAlgoliaAgent?: DefaultSearchClient['addAlgoliaAgent'];
}
