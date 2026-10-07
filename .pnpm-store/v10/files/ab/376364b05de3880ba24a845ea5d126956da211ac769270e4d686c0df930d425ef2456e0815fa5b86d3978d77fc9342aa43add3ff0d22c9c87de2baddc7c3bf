import { ABTest } from '@algolia/client-analytics';
import { AddABTestResponse } from '@algolia/client-analytics';
import { AddApiKeyOptions } from '@algolia/client-search';
import { AddApiKeyResponse } from '@algolia/client-search';
import { AnalyticsClient as AnalyticsClient_2 } from '@algolia/client-analytics';
import { AnalyticsClientOptions } from '@algolia/client-analytics';
import { ApiKeyACLType } from '@algolia/client-search';
import { AssignUserIDResponse } from '@algolia/client-search';
import { AssignUserIDsResponse } from '@algolia/client-search';
import { BatchActionType } from '@algolia/client-search';
import { BatchRequest } from '@algolia/client-search';
import { BatchResponse } from '@algolia/client-search';
import { BrowseOptions } from '@algolia/client-search';
import { ChunkedBatchResponse } from '@algolia/client-search';
import { ChunkOptions } from '@algolia/client-search';
import { ClearRulesOptions } from '@algolia/client-search';
import { ClearSynonymsOptions } from '@algolia/client-search';
import { ClientTransporterOptions } from '@algolia/client-common';
import { CopyIndexOptions } from '@algolia/client-search';
import { DeleteABTestResponse } from '@algolia/client-analytics';
import { DeleteApiKeyResponse } from '@algolia/client-search';
import { DeleteByFiltersOptions } from '@algolia/client-search';
import { DeleteResponse } from '@algolia/client-search';
import { DeleteSynonymOptions } from '@algolia/client-search';
import { Destroyable } from '@algolia/requester-common';
import { DictionaryEntriesOptions } from '@algolia/client-search';
import { DictionaryEntriesResponse } from '@algolia/client-search';
import { DictionaryEntry } from '@algolia/client-search';
import { DictionaryName } from '@algolia/client-search';
import { DictionarySettings } from '@algolia/client-search';
import { FindAnswersOptions } from '@algolia/client-search';
import { FindAnswersResponse } from '@algolia/client-search';
import { FindObjectOptions } from '@algolia/client-search';
import { FindObjectResponse } from '@algolia/client-search';
import { GetABTestResponse } from '@algolia/client-analytics';
import { GetABTestsOptions } from '@algolia/client-analytics';
import { GetABTestsResponse } from '@algolia/client-analytics';
import { GetApiKeyResponse } from '@algolia/client-search';
import { GetDictionarySettingsResponse } from '@algolia/client-search';
import { GetLogsResponse } from '@algolia/client-search';
import { GetObjectOptions } from '@algolia/client-search';
import { GetObjectsOptions } from '@algolia/client-search';
import { GetObjectsResponse } from '@algolia/client-search';
import { GetPersonalizationStrategyResponse } from '@algolia/client-personalization';
import { GetTopUserIDsResponse } from '@algolia/client-search';
import { HasPendingMappingsOptions } from '@algolia/client-search';
import { HasPendingMappingsResponse } from '@algolia/client-search';
import { IndexOperationResponse } from '@algolia/client-search';
import { ListApiKeysResponse } from '@algolia/client-search';
import { ListClustersResponse } from '@algolia/client-search';
import { ListIndicesResponse } from '@algolia/client-search';
import { ListUserIDsOptions } from '@algolia/client-search';
import { ListUserIDsResponse } from '@algolia/client-search';
import { MultipleBatchRequest } from '@algolia/client-search';
import { MultipleBatchResponse } from '@algolia/client-search';
import { MultipleGetObject } from '@algolia/client-search';
import { MultipleGetObjectsResponse } from '@algolia/client-search';
import { MultipleQueriesOptions } from '@algolia/client-search';
import { MultipleQueriesQuery } from '@algolia/client-search';
import { MultipleQueriesResponse } from '@algolia/client-search';
import { ObjectWithObjectID } from '@algolia/client-search';
import { PartialUpdateObjectResponse } from '@algolia/client-search';
import { PartialUpdateObjectsOptions } from '@algolia/client-search';
import { PersonalizationClient as PersonalizationClient_2 } from '@algolia/client-personalization';
import { PersonalizationClientOptions } from '@algolia/client-personalization';
import { PersonalizationStrategy } from '@algolia/client-personalization';
import { RemoveUserIDResponse } from '@algolia/client-search';
import { ReplaceAllObjectsOptions } from '@algolia/client-search';
import { Request as Request_2 } from '@algolia/transporter';
import { RequestOptions } from '@algolia/transporter';
import { RestoreApiKeyResponse } from '@algolia/client-search';
import { Rule } from '@algolia/client-search';
import { SaveObjectResponse } from '@algolia/client-search';
import { SaveObjectsOptions } from '@algolia/client-search';
import { SaveRuleResponse } from '@algolia/client-search';
import { SaveRulesOptions } from '@algolia/client-search';
import { SaveRulesResponse } from '@algolia/client-search';
import { SaveSynonymResponse } from '@algolia/client-search';
import { SaveSynonymsOptions } from '@algolia/client-search';
import { SaveSynonymsResponse } from '@algolia/client-search';
import { SearchClient as SearchClient_2 } from '@algolia/client-search';
import { SearchClientOptions } from '@algolia/client-search';
import { SearchDictionaryEntriesResponse } from '@algolia/client-search';
import { SearchForFacetValuesQueryParams } from '@algolia/client-search';
import { SearchForFacetValuesResponse } from '@algolia/client-search';
import { SearchIndex as SearchIndex_2 } from '@algolia/client-search';
import { SearchOptions } from '@algolia/client-search';
import { SearchResponse } from '@algolia/client-search';
import { SearchRulesOptions } from '@algolia/client-search';
import { SearchSynonymsOptions } from '@algolia/client-search';
import { SearchSynonymsResponse } from '@algolia/client-search';
import { SearchUserIDsOptions } from '@algolia/client-search';
import { SearchUserIDsResponse } from '@algolia/client-search';
import { SecuredApiKeyRestrictions } from '@algolia/client-search';
import { SetPersonalizationStrategyResponse } from '@algolia/client-personalization';
import { SetSettingsResponse } from '@algolia/client-search';
import { Settings } from '@algolia/client-search';
import { StopABTestResponse } from '@algolia/client-analytics';
import { Synonym } from '@algolia/client-search';
import { TaskStatusResponse } from '@algolia/client-search';
import { UpdateApiKeyOptions } from '@algolia/client-search';
import { UpdateApiKeyResponse } from '@algolia/client-search';
import { UserIDResponse } from '@algolia/client-search';
import { WaitablePromise } from '@algolia/client-common';
import { WithRecommendMethods } from '@algolia/recommend';

declare function algoliasearch(appId: string, apiKey: string, options?: AlgoliaSearchOptions & TransformationOptions): SearchClient;

declare namespace algoliasearch {
    var version: string;
}
export default algoliasearch;

export declare type AlgoliaSearchOptions = Partial<ClientTransporterOptions> & WithoutCredentials<SearchClientOptions>;

export declare type AnalyticsClient = AnalyticsClient_2 & {
    readonly addABTest: (abTest: ABTest, requestOptions?: RequestOptions) => Readonly<Promise<AddABTestResponse>>;
    readonly getABTest: (abTestID: number, requestOptions?: RequestOptions) => Readonly<Promise<GetABTestResponse>>;
    readonly getABTests: (requestOptions?: RequestOptions & GetABTestsOptions) => Readonly<Promise<GetABTestsResponse>>;
    readonly stopABTest: (abTestID: number, requestOptions?: RequestOptions) => Readonly<Promise<StopABTestResponse>>;
    readonly deleteABTest: (abTestID: number, requestOptions?: RequestOptions) => Readonly<Promise<DeleteABTestResponse>>;
};

declare type Credentials = {
    readonly appId: string;
    readonly apiKey: string;
};

export declare type IngestionClient = SearchClient_2 & {
    /**
     * Pushes records through the Pipeline, directly to an index. You can make the call synchronous by providing the `watch` parameter, for asynchronous calls, you can use the observability endpoints and/or debugger dashboard to see the status of your task. If you want to leverage the [pre-indexing data transformation](https://www.algolia.com/doc/guides/sending-and-managing-data/send-and-update-your-data/how-to/transform-your-data/), this is the recommended way of ingesting your records. If zero or many tasks are found, an error will be returned.
     *
     * Required API Key ACLs:
     *  - addObject
     *  - deleteIndex
     *  - editSettings
     * @param push - The push object.
     * @param push.indexName - Name of the index on which to perform the operation.
     * @param push.pushTaskPayload - The pushTaskPayload object.
     * @param push.watch - When provided, the push operation will be synchronous and the API will wait for the ingestion to be finished before responding.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    readonly push: ({ indexName, pushTaskPayload, watch }: PushProps, requestOptions?: RequestOptions) => Readonly<Promise<WatchResponse>>;
};

export declare type IngestionMethods = {
    /**
     * Helper: Similar to the `saveObjects` method but requires a Push connector (https://www.algolia.com/doc/guides/sending-and-managing-data/send-and-update-your-data/connectors/push/) to be created first, in order to transform records before indexing them to Algolia. The `region` must've been passed to the client instantiation method.
     *
     * @param objects - The array of `objects` to store in the given Algolia `indexName`.
     * @param requestOptions - The requestOptions to send along with the query, they will be forwarded to the `batch` method and merged with the transporter requestOptions.
     */
    readonly saveObjectsWithTransformation: (objects: ReadonlyArray<Readonly<Record<string, any>>>, requestOptions?: RequestOptions & ChunkOptions & SaveObjectsOptions & PushOptions) => Readonly<Promise<WatchResponse>>;
    /**
     * Helper: Similar to the `partialUpdateObjects` method but requires a Push connector (https://www.algolia.com/doc/guides/sending-and-managing-data/send-and-update-your-data/connectors/push/) to be created first, in order to transform records before indexing them to Algolia. The `region` must've been passed to the client instantiation method.
     *
     * @param objects - The array of `objects` to update in the given Algolia `indexName`.
     * @param requestOptions - The requestOptions to send along with the query, they will be forwarded to the `getTask` method and merged with the transporter requestOptions.
     */
    readonly partialUpdateObjectsWithTransformation: (objects: ReadonlyArray<Readonly<Record<string, any>>>, requestOptions?: RequestOptions & ChunkOptions & PartialUpdateObjectsOptions & PushOptions) => Readonly<Promise<WatchResponse>>;
};

export declare type InitAnalyticsOptions = Partial<ClientTransporterOptions> & OptionalCredentials<AnalyticsClientOptions>;

export declare type InitPersonalizationOptions = Partial<ClientTransporterOptions> & OptionalCredentials<PersonalizationClientOptions>;

/**
 * @deprecated Use `InitPersonalizationOptions` instead.
 */
export declare type InitRecommendationOptions = InitPersonalizationOptions;

export declare type OptionalCredentials<TClientOptions extends Credentials> = Omit<TClientOptions, keyof Credentials> & Pick<Partial<TClientOptions>, keyof Credentials>;

export declare type PersonalizationClient = PersonalizationClient_2 & {
    readonly getPersonalizationStrategy: (requestOptions?: RequestOptions) => Readonly<Promise<GetPersonalizationStrategyResponse>>;
    readonly setPersonalizationStrategy: (personalizationStrategy: PersonalizationStrategy, requestOptions?: RequestOptions) => Readonly<Promise<SetPersonalizationStrategyResponse>>;
};

export declare type PushOptions = Pick<PushProps, 'watch'>;

/**
 * Properties for the `push` method.
 */
export declare type PushProps = {
    /**
     * Name of the index on which to perform the operation.
     */
    readonly indexName: string;
    readonly pushTaskPayload: {
        readonly action: BatchActionType;
        readonly records: Record<string, any>;
    };
    /**
     * When provided, the push operation will be synchronous and the API will wait for the ingestion to be finished before responding.
     */
    readonly watch?: boolean;
};

/**
 * @deprecated Use `PersonalizationClient` instead.
 */
export declare type RecommendationClient = PersonalizationClient;

export declare type SearchClient = SearchClient_2 & {
    readonly initIndex: (indexName: string) => SearchIndex & IngestionMethods;
    readonly search: <TObject>(queries: readonly MultipleQueriesQuery[], requestOptions?: RequestOptions & MultipleQueriesOptions) => Readonly<Promise<MultipleQueriesResponse<TObject>>>;
    readonly searchForFacetValues: (queries: ReadonlyArray<{
        readonly indexName: string;
        readonly params: SearchForFacetValuesQueryParams & SearchOptions;
    }>, requestOptions?: RequestOptions) => Readonly<Promise<readonly SearchForFacetValuesResponse[]>>;
    readonly multipleBatch: (requests: readonly MultipleBatchRequest[], requestOptions?: RequestOptions) => Readonly<WaitablePromise<MultipleBatchResponse>>;
    readonly multipleGetObjects: <TObject>(requests: readonly MultipleGetObject[], requestOptions?: RequestOptions) => Readonly<Promise<MultipleGetObjectsResponse<TObject>>>;
    readonly multipleQueries: <TObject>(queries: readonly MultipleQueriesQuery[], requestOptions?: RequestOptions & MultipleQueriesOptions) => Readonly<Promise<MultipleQueriesResponse<TObject>>>;
    readonly copyIndex: (from: string, to: string, requestOptions?: CopyIndexOptions & RequestOptions) => Readonly<WaitablePromise<IndexOperationResponse>>;
    readonly copySettings: (from: string, to: string, requestOptions?: RequestOptions) => Readonly<WaitablePromise<IndexOperationResponse>>;
    readonly copyRules: (from: string, to: string, requestOptions?: RequestOptions) => Readonly<WaitablePromise<IndexOperationResponse>>;
    readonly copySynonyms: (from: string, to: string, requestOptions?: RequestOptions) => Readonly<WaitablePromise<IndexOperationResponse>>;
    readonly moveIndex: (from: string, to: string, requestOptions?: RequestOptions) => Readonly<WaitablePromise<IndexOperationResponse>>;
    readonly listIndices: (requestOptions?: RequestOptions) => Readonly<Promise<ListIndicesResponse>>;
    readonly getLogs: (requestOptions?: RequestOptions) => Readonly<Promise<GetLogsResponse>>;
    readonly listClusters: (requestOptions?: RequestOptions) => Readonly<Promise<ListClustersResponse>>;
    readonly multipleSearchForFacetValues: (queries: ReadonlyArray<{
        readonly indexName: string;
        readonly params: SearchForFacetValuesQueryParams & SearchOptions;
    }>, requestOptions?: RequestOptions) => Readonly<Promise<readonly SearchForFacetValuesResponse[]>>;
    readonly getApiKey: (apiKey: string, requestOptions?: RequestOptions) => Readonly<Promise<GetApiKeyResponse>>;
    readonly addApiKey: (acl: readonly ApiKeyACLType[], requestOptions?: AddApiKeyOptions & Pick<RequestOptions, Exclude<keyof RequestOptions, 'queryParameters'>>) => Readonly<WaitablePromise<AddApiKeyResponse>>;
    readonly listApiKeys: (requestOptions?: RequestOptions) => Readonly<Promise<ListApiKeysResponse>>;
    readonly updateApiKey: (apiKey: string, requestOptions?: UpdateApiKeyOptions & Pick<RequestOptions, Exclude<keyof RequestOptions, 'queryParameters'>>) => Readonly<WaitablePromise<UpdateApiKeyResponse>>;
    readonly deleteApiKey: (apiKey: string, requestOptions?: RequestOptions) => Readonly<WaitablePromise<DeleteApiKeyResponse>>;
    readonly restoreApiKey: (apiKey: string, requestOptions?: RequestOptions) => Readonly<WaitablePromise<RestoreApiKeyResponse>>;
    readonly assignUserID: (userID: string, clusterName: string, requestOptions?: RequestOptions) => Readonly<Promise<AssignUserIDResponse>>;
    readonly assignUserIDs: (userIDs: readonly string[], clusterName: string, requestOptions?: RequestOptions) => Readonly<Promise<AssignUserIDsResponse>>;
    readonly getUserID: (userID: string, requestOptions?: RequestOptions) => Readonly<Promise<UserIDResponse>>;
    readonly searchUserIDs: (query: string, requestOptions?: SearchUserIDsOptions & RequestOptions) => Readonly<Promise<SearchUserIDsResponse>>;
    readonly listUserIDs: (requestOptions?: ListUserIDsOptions & RequestOptions) => Readonly<Promise<ListUserIDsResponse>>;
    readonly getTopUserIDs: (requestOptions?: RequestOptions) => Readonly<Promise<GetTopUserIDsResponse>>;
    readonly removeUserID: (userID: string, requestOptions?: RequestOptions) => Readonly<Promise<RemoveUserIDResponse>>;
    readonly hasPendingMappings: (requestOptions?: HasPendingMappingsOptions & RequestOptions) => Readonly<Promise<HasPendingMappingsResponse>>;
    readonly generateSecuredApiKey: (parentApiKey: string, restrictions: SecuredApiKeyRestrictions) => string;
    readonly getSecuredApiKeyRemainingValidity: (securedApiKey: string) => number;
    readonly clearDictionaryEntries: (dictionary: DictionaryName, requestOptions?: RequestOptions & DictionaryEntriesOptions) => Readonly<WaitablePromise<DictionaryEntriesResponse>>;
    readonly deleteDictionaryEntries: (dictionary: DictionaryName, objectIDs: readonly string[], requestOptions?: RequestOptions & DictionaryEntriesOptions) => Readonly<WaitablePromise<DictionaryEntriesResponse>>;
    readonly replaceDictionaryEntries: (dictionary: DictionaryName, entries: readonly DictionaryEntry[], requestOptions?: RequestOptions & DictionaryEntriesOptions) => Readonly<WaitablePromise<DictionaryEntriesResponse>>;
    readonly saveDictionaryEntries: (dictionary: DictionaryName, entries: readonly DictionaryEntry[], requestOptions?: RequestOptions & DictionaryEntriesOptions) => Readonly<WaitablePromise<DictionaryEntriesResponse>>;
    readonly searchDictionaryEntries: (dictionary: DictionaryName, query: string, requestOptions?: RequestOptions) => Readonly<Promise<SearchDictionaryEntriesResponse>>;
    readonly getDictionarySettings: (requestOptions?: RequestOptions) => Readonly<Promise<GetDictionarySettingsResponse>>;
    readonly setDictionarySettings: (settings: DictionarySettings, requestOptions?: RequestOptions) => Readonly<WaitablePromise<DictionaryEntriesResponse>>;
    readonly getAppTask: (taskID: number, requestOptions?: RequestOptions) => Readonly<Promise<TaskStatusResponse>>;
    readonly customRequest: <TResponse>(request: Request_2, requestOptions?: RequestOptions) => Readonly<Promise<TResponse>>;
    readonly initAnalytics: (options?: InitAnalyticsOptions) => AnalyticsClient;
    readonly initPersonalization: (options?: InitPersonalizationOptions) => PersonalizationClient;
    /**
     * @deprecated Use `initPersonalization` instead.
     */
    readonly initRecommendation: (options?: InitPersonalizationOptions) => PersonalizationClient;
    readonly getRecommendations: WithRecommendMethods<SearchClient_2>['getRecommendations'];
    readonly getFrequentlyBoughtTogether: WithRecommendMethods<SearchClient_2>['getFrequentlyBoughtTogether'];
    readonly getLookingSimilar: WithRecommendMethods<SearchClient_2>['getLookingSimilar'];
    readonly getRecommendedForYou: WithRecommendMethods<SearchClient_2>['getRecommendedForYou'];
    readonly getRelatedProducts: WithRecommendMethods<SearchClient_2>['getRelatedProducts'];
    readonly getTrendingFacets: WithRecommendMethods<SearchClient_2>['getTrendingFacets'];
    readonly getTrendingItems: WithRecommendMethods<SearchClient_2>['getTrendingItems'];
} & Destroyable;

export declare type SearchIndex = SearchIndex_2 & {
    readonly search: <TObject>(query: string, requestOptions?: RequestOptions & SearchOptions) => Readonly<Promise<SearchResponse<TObject>>>;
    readonly searchForFacetValues: (facetName: string, facetQuery: string, requestOptions?: RequestOptions & SearchOptions) => Readonly<Promise<SearchForFacetValuesResponse>>;
    readonly findAnswers: <TObject>(query: string, queryLanguages: readonly string[], requestOptions?: RequestOptions & FindAnswersOptions) => Readonly<Promise<FindAnswersResponse<TObject>>>;
    readonly batch: (requests: readonly BatchRequest[], requestOptions?: RequestOptions) => Readonly<WaitablePromise<BatchResponse>>;
    readonly delete: (requestOptions?: RequestOptions) => Readonly<WaitablePromise<DeleteResponse>>;
    readonly getObject: <TObject>(objectID: string, requestOptions?: RequestOptions & GetObjectOptions) => Readonly<Promise<TObject & ObjectWithObjectID>>;
    readonly getObjects: <TObject>(objectIDs: readonly string[], requestOptions?: RequestOptions & GetObjectsOptions) => Readonly<Promise<GetObjectsResponse<TObject>>>;
    readonly saveObject: (object: Readonly<Record<string, any>>, requestOptions?: RequestOptions & ChunkOptions & SaveObjectsOptions) => Readonly<WaitablePromise<SaveObjectResponse>>;
    readonly saveObjects: (objects: ReadonlyArray<Readonly<Record<string, any>>>, requestOptions?: RequestOptions & ChunkOptions & SaveObjectsOptions) => Readonly<WaitablePromise<ChunkedBatchResponse>>;
    readonly waitTask: (taskID: number, requestOptions?: RequestOptions) => Readonly<Promise<void>>;
    readonly setSettings: (settings: Settings, requestOptions?: RequestOptions) => Readonly<WaitablePromise<SetSettingsResponse>>;
    readonly getSettings: (requestOptions?: RequestOptions) => Readonly<Promise<Settings>>;
    readonly partialUpdateObject: (object: Record<string, any>, requestOptions?: RequestOptions & ChunkOptions & PartialUpdateObjectsOptions) => Readonly<WaitablePromise<PartialUpdateObjectResponse>>;
    readonly partialUpdateObjects: (objects: ReadonlyArray<Record<string, any>>, requestOptions?: RequestOptions & ChunkOptions & PartialUpdateObjectsOptions) => Readonly<WaitablePromise<ChunkedBatchResponse>>;
    readonly deleteObject: (objectID: string, requestOptions?: RequestOptions) => Readonly<WaitablePromise<DeleteResponse>>;
    readonly deleteObjects: (objectIDs: readonly string[], requestOptions?: RequestOptions & ChunkOptions) => Readonly<WaitablePromise<ChunkedBatchResponse>>;
    readonly deleteBy: (filters: DeleteByFiltersOptions, requestOptions?: RequestOptions) => Readonly<WaitablePromise<DeleteResponse>>;
    readonly clearObjects: (requestOptions?: RequestOptions) => Readonly<WaitablePromise<DeleteResponse>>;
    readonly browseObjects: <TObject>(requestOptions?: SearchOptions & BrowseOptions<TObject> & RequestOptions) => Readonly<Promise<void>>;
    readonly getObjectPosition: (searchResponse: SearchResponse<{}>, objectID: string) => number;
    readonly findObject: <TObject>(callback: (object: TObject & ObjectWithObjectID) => boolean, requestOptions?: FindObjectOptions & RequestOptions) => Readonly<Promise<FindObjectResponse<TObject>>>;
    readonly exists: (requestOptions?: RequestOptions) => Readonly<Promise<boolean>>;
    readonly saveSynonym: (synonym: Synonym, requestOptions?: RequestOptions & SaveSynonymsOptions) => Readonly<WaitablePromise<SaveSynonymResponse>>;
    readonly saveSynonyms: (synonyms: readonly Synonym[], requestOptions?: SaveSynonymsOptions & RequestOptions) => Readonly<WaitablePromise<SaveSynonymsResponse>>;
    readonly getSynonym: (objectID: string, requestOptions?: RequestOptions) => Readonly<Promise<Synonym>>;
    readonly searchSynonyms: (query: string, requestOptions?: SearchSynonymsOptions & RequestOptions) => Readonly<Promise<SearchSynonymsResponse>>;
    readonly browseSynonyms: (requestOptions?: SearchSynonymsOptions & BrowseOptions<Synonym> & RequestOptions) => Readonly<Promise<void>>;
    readonly deleteSynonym: (objectID: string, requestOptions?: DeleteSynonymOptions & RequestOptions) => Readonly<WaitablePromise<DeleteResponse>>;
    readonly clearSynonyms: (requestOptions?: ClearSynonymsOptions & RequestOptions) => Readonly<WaitablePromise<DeleteResponse>>;
    readonly replaceAllObjects: (objects: ReadonlyArray<Readonly<Record<string, any>>>, requestOptions?: ReplaceAllObjectsOptions & ChunkOptions & SaveObjectsOptions & RequestOptions) => Readonly<WaitablePromise<ChunkedBatchResponse>>;
    readonly replaceAllSynonyms: (synonyms: readonly Synonym[], requestOptions?: RequestOptions & Pick<SaveSynonymsOptions, Exclude<keyof SaveSynonymsOptions, 'clearExistingSynonyms' | 'replaceExistingSynonyms'>>) => Readonly<WaitablePromise<SaveSynonymsResponse>>;
    readonly searchRules: (query: string, requestOptions?: RequestOptions & SearchRulesOptions) => Readonly<Promise<SearchResponse<Rule>>>;
    readonly getRule: (objectID: string, requestOptions?: RequestOptions) => Readonly<Promise<Rule>>;
    readonly deleteRule: (objectID: string, requestOptions?: RequestOptions) => Readonly<WaitablePromise<DeleteResponse>>;
    readonly saveRule: (rule: Rule, requestOptions?: RequestOptions & SaveRulesOptions) => Readonly<WaitablePromise<SaveRuleResponse>>;
    readonly saveRules: (rules: readonly Rule[], requestOptions?: RequestOptions & SaveRulesOptions) => Readonly<WaitablePromise<SaveRulesResponse>>;
    readonly replaceAllRules: (rules: readonly Rule[], requestOptions?: RequestOptions & SaveRulesOptions) => Readonly<WaitablePromise<SaveRulesResponse>>;
    readonly browseRules: (requestOptions?: SearchRulesOptions & BrowseOptions<Rule> & RequestOptions) => Readonly<Promise<void>>;
    readonly clearRules: (requestOptions?: RequestOptions & ClearRulesOptions) => Readonly<WaitablePromise<DeleteResponse>>;
};

export declare type TransformationOptions = {
    readonly transformation?: {
        readonly region: 'eu' | 'us';
    };
};

export declare type WatchResponse = {
    /**
     * Universally unique identifier (UUID) of a task run.
     */
    readonly runID: string;
    /**
     * Universally unique identifier (UUID) of an event.
     */
    readonly eventID?: string;
    /**
     * when used with discovering or validating sources, the sampled data of your source is returned.
     */
    readonly data?: ReadonlyArray<Record<string, unknown>>;
    /**
     * in case of error, observability events will be added to the response, if any.
     */
    readonly events?: readonly Event[];
    /**
     * a message describing the outcome of a validate run.
     */
    readonly message?: string;
    /**
     * Date of creation in RFC 3339 format.
     */
    readonly createdAt?: string;
};

export declare type WithoutCredentials<TClientOptions extends Credentials> = Omit<TClientOptions, keyof Credentials>;

export { }
