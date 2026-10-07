import { ClientTransporterOptions } from '@algolia/client-common';
import { FindAnswersOptions } from '@algolia/client-search';
import { FindAnswersResponse } from '@algolia/client-search';
import { MultipleQueriesOptions } from '@algolia/client-search';
import { MultipleQueriesQuery } from '@algolia/client-search';
import { MultipleQueriesResponse } from '@algolia/client-search';
import { Request as Request_2 } from '@algolia/transporter';
import { RequestOptions } from '@algolia/transporter';
import { SearchClient as SearchClient_2 } from '@algolia/client-search';
import { SearchClientOptions } from '@algolia/client-search';
import { SearchForFacetValuesQueryParams } from '@algolia/client-search';
import { SearchForFacetValuesResponse } from '@algolia/client-search';
import { SearchIndex as SearchIndex_2 } from '@algolia/client-search';
import { SearchOptions } from '@algolia/client-search';
import { SearchResponse } from '@algolia/client-search';
import { WithRecommendMethods } from '@algolia/recommend';

declare function algoliasearch(appId: string, apiKey: string, options?: AlgoliaSearchOptions): SearchClient;

declare namespace algoliasearch {
    var version: string;
}
export default algoliasearch;

export declare type AlgoliaSearchOptions = Partial<ClientTransporterOptions> & WithoutCredentials<SearchClientOptions>;

declare type Credentials = {
    readonly appId: string;
    readonly apiKey: string;
};

export declare type SearchClient = SearchClient_2 & {
    readonly initIndex: (indexName: string) => SearchIndex;
    readonly search: <TObject>(queries: readonly MultipleQueriesQuery[], requestOptions?: RequestOptions & MultipleQueriesOptions) => Readonly<Promise<MultipleQueriesResponse<TObject>>>;
    readonly searchForFacetValues: (queries: ReadonlyArray<{
        readonly indexName: string;
        readonly params: SearchForFacetValuesQueryParams & SearchOptions;
    }>, requestOptions?: RequestOptions) => Readonly<Promise<readonly SearchForFacetValuesResponse[]>>;
    readonly customRequest: <TResponse>(request: Request_2, requestOptions?: RequestOptions) => Readonly<Promise<TResponse>>;
    readonly getRecommendations: WithRecommendMethods<SearchClient_2>['getRecommendations'];
};

export declare type SearchIndex = SearchIndex_2 & {
    readonly search: <TObject>(query: string, requestOptions?: RequestOptions & SearchOptions) => Readonly<Promise<SearchResponse<TObject>>>;
    readonly searchForFacetValues: (facetName: string, facetQuery: string, requestOptions?: RequestOptions & SearchOptions) => Readonly<Promise<SearchForFacetValuesResponse>>;
    readonly findAnswers: <TObject>(query: string, queryLanguages: readonly string[], requestOptions?: RequestOptions & FindAnswersOptions) => Readonly<Promise<FindAnswersResponse<TObject>>>;
};

export declare type WithoutCredentials<TClientOptions extends Credentials> = Omit<TClientOptions, keyof Credentials>;

export { }
