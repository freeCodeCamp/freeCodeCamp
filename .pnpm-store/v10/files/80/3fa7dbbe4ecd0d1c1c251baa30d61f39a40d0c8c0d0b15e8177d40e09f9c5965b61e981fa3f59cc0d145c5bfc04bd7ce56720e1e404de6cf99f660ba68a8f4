import { AuthModeType } from '@algolia/client-common';
import { ClientTransporterOptions } from '@algolia/client-common';
import { CreateClient } from '@algolia/client-common';
import { Request as Request_2 } from '@algolia/transporter';
import { RequestOptions } from '@algolia/transporter';
import { Transporter } from '@algolia/transporter';
import { WaitablePromise } from '@algolia/client-common';

export declare const addApiKey: (base: SearchClient) => (acl: readonly ApiKeyACLType[], requestOptions?: (AddApiKeyOptions & Pick<RequestOptions, string | number>) | undefined) => Readonly<WaitablePromise<AddApiKeyResponse>>;

export declare type AddApiKeyOptions = {
    /**
     * A Unix timestamp used to define the expiration date of the API key.
     */
    readonly validity?: number;
    /**
     * Specify the maximum number of hits this API key can retrieve in one call.
     * This parameter can be used to protect you from attempts at retrieving your entire index contents by massively querying the index.
     */
    readonly maxHitsPerQuery?: number;
    /**
     * Specify the maximum number of API calls allowed from an IP address per hour. Each time an API call is performed with this key, a check is performed.
     */
    readonly maxQueriesPerIPPerHour?: number;
    /**
     * Specify the list of targeted indices. You can target all indices starting with a prefix or ending with a suffix using the ‘*’ character.
     */
    readonly indexes?: readonly string[];
    /**
     * Specify the list of referers. You can target all referers starting with a prefix, ending with a suffix using the ‘*’ character.
     */
    readonly referers?: readonly string[];
    /**
     * Specify the list of query parameters. You can force the query parameters for a query using the url string format.
     */
    readonly queryParameters?: string;
    /**
     * Specify a description of the API key. Used for informative purposes only. It has impact on the functionality of the API key.
     */
    readonly description?: string;
};

export declare type AddApiKeyResponse = {
    /**
     * The returned api key.
     */
    key: string;
    /**
     * Date of creation of the api key.
     */
    createdAt: string;
};

export declare const ApiKeyACLEnum: Readonly<Record<string, ApiKeyACLType>>;

export declare type ApiKeyACLType = 'addObject' | 'analytics' | 'browse' | 'deleteIndex' | 'deleteObject' | 'editSettings' | 'inference' | 'listIndexes' | 'logs' | 'personalization' | 'recommendation' | 'search' | 'seeUnretrievableAttributes' | 'settings' | 'usage';

export declare const assignUserID: (base: SearchClient) => (userID: string, clusterName: string, requestOptions?: RequestOptions | undefined) => Readonly<Promise<AssignUserIDResponse>>;

export declare type AssignUserIDResponse = {
    /**
     * Date of creation of the userId.
     */
    createdAt: string;
};

export declare const assignUserIDs: (base: SearchClient) => (userIDs: readonly string[], clusterName: string, requestOptions?: RequestOptions | undefined) => Readonly<Promise<AssignUserIDsResponse>>;

export declare type AssignUserIDsResponse = {
    /**
     * Date of creation of the userId
     */
    createdAt: string;
};

export declare type AutomaticFacetFilter = {
    /**
     * Attribute to filter on. This must match a facet placeholder in the rule’s pattern.
     */
    readonly facet: string;
    /**
     * Whether the filter is disjunctive (true) or conjunctive (false).
     */
    readonly disjunctive?: boolean;
    /**
     * Score for the filter. Typically used for optional or disjunctive filters.
     */
    readonly score?: number;
};

export declare const batch: (base: SearchIndex) => (requests: readonly BatchRequest[], requestOptions?: RequestOptions | undefined) => Readonly<WaitablePromise<BatchResponse>>;

export declare const BatchActionEnum: Readonly<Record<string, BatchActionType>>;

export declare type BatchActionType = 'addObject' | 'updateObject' | 'partialUpdateObject' | 'partialUpdateObjectNoCreate' | 'deleteObject' | 'delete' | 'clear';

export declare type BatchRequest = {
    /**
     * The batch action.
     */
    readonly action: BatchActionType;
    /**
     * The body of the given `action`. Note that, bodies difer
     * depending of the action.
     */
    readonly body: Record<string, any>;
};

export declare type BatchResponse = {
    /**
     * The operation task id. May be used to perform a wait task.
     */
    taskID: number;
    /**
     * The object ids created/updated by the batch request.
     */
    objectIDs: string[];
};

export declare const browseObjects: (base: SearchIndex) => <TObject>(requestOptions?: (SearchOptions & BrowseOptions<TObject> & RequestOptions) | undefined) => Readonly<Promise<void>>;

export declare type BrowseOptions<TObject> = {
    /**
     * The callback called for each batch of objects.
     */
    readonly batch?: (batch: ReadonlyArray<TObject & ObjectWithObjectID>) => any;
    /**
     * The callback called to determine if the browse should stop. By
     * default this checks whether there's any more content to get.
     */
    readonly shouldStop?: (response: BrowseResponse<TObject>) => boolean;
};

export declare type BrowseRequestData = {
    /**
     * If available, should be used for browsing to the next page.
     */
    readonly cursor?: string;
    /**
     * If cursor is not available, should be used for browsing to the next page.
     */
    readonly page?: number;
};

export declare type BrowseResponse<TObject> = {
    /**
     * The hits per page.
     */
    hits: Array<TObject & ObjectWithObjectID>;
    /**
     * The cursor used for iterate on the next page.
     */
    cursor?: string;
};

export declare const browseRules: (base: SearchIndex) => (requestOptions?: (SearchRulesOptions & BrowseOptions<Rule> & RequestOptions) | undefined) => Readonly<Promise<void>>;

export declare const browseSynonyms: (base: SearchIndex) => (requestOptions?: (SearchSynonymsOptions & BrowseOptions<Synonym> & RequestOptions) | undefined) => Readonly<Promise<void>>;

export declare const chunkedBatch: (base: SearchIndex) => (bodies: readonly object[], action: BatchActionType, requestOptions?: (RequestOptions & ChunkOptions) | undefined) => Readonly<WaitablePromise<ChunkedBatchResponse>>;

export declare type ChunkedBatchResponse = {
    /**
     * The operations task ids. May be used to perform a wait task.
     */
    taskIDs: number[];
    /**
     * The object ids created/updated/deleted by the multiple requests.
     */
    objectIDs: string[];
};

export declare type ChunkOptions = {
    /**
     * The number of objects per batch.
     */
    readonly batchSize?: number;
};

export declare const clearDictionaryEntries: (base: SearchClient) => (dictionary: DictionaryName, requestOptions?: (RequestOptions & DictionaryEntriesOptions) | undefined) => Readonly<WaitablePromise<DictionaryEntriesResponse>>;

export declare const clearObjects: (base: SearchIndex) => (requestOptions?: RequestOptions | undefined) => Readonly<WaitablePromise<DeleteResponse>>;

export declare const clearRules: (base: SearchIndex) => (requestOptions?: (RequestOptions & ClearRulesOptions) | undefined) => Readonly<WaitablePromise<DeleteResponse>>;

export declare type ClearRulesOptions = {
    /**
     * If the clear rules request should be forward to replicas.
     */
    readonly forwardToReplicas?: boolean;
};

export declare const clearSynonyms: (base: SearchIndex) => (requestOptions?: (ClearSynonymsOptions & RequestOptions) | undefined) => Readonly<WaitablePromise<DeleteResponse>>;

export declare type ClearSynonymsOptions = {
    /**
     * If the clear synonyms request should be forward to replicas.
     */
    readonly forwardToReplicas?: boolean;
};

export declare type Cluster = {
    /**
     * The cluster name
     */
    readonly clusterName: string;
    /**
     * Number of records in the cluster.
     */
    readonly nbRecords: number;
    /**
     * Number of users assign to the cluster.
     */
    readonly nbUserIDs: number;
    /**
     * Data size taken by all the users assigned to the cluster.
     */
    readonly dataSize: number;
};

export declare type Condition = {
    /**
     * Query patterns are expressed as a string with a specific syntax. A pattern is a sequence of tokens.
     */
    readonly pattern?: string;
    /**
     * Apply this rule only when the filter matches.
     */
    readonly filters?: string;
    /**
     * is | startsWith | endsWith | contains: Whether the pattern must match the beginning or the end of the query string, or both, or none.
     */
    readonly anchoring?: 'is' | 'startsWith' | 'endsWith' | 'contains';
    /**
     * Rule context (format: [A-Za-z0-9_-]+). When specified, the rule is contextual and applies only when the same context is specified at query time (using the ruleContexts parameter).
     * When absent, the rule is generic and always applies (provided that its other conditions are met, of course).
     */
    readonly context?: string;
    /**
     * If set to true, alternatives make the rule to trigger on synonyms, typos and plurals.
     * Note that setting ignorePlurals to false overrides this parameter.
     */
    readonly alternatives?: boolean;
};

export declare type Consequence = {
    /**
     * Additional search parameters. Any valid search parameter is allowed.
     */
    readonly params?: ConsequenceParams & Pick<SearchOptions, Exclude<keyof SearchOptions, 'query'>>;
    /**
     * Objects to promote as hits.
     */
    readonly promote?: readonly ConsequencePromote[];
    /**
     * Objects to hide from hits.
     */
    readonly hide?: ReadonlyArray<{
        readonly objectID: string;
    }>;
    /**
     * Whether the Query Rule should promote or not promoted items.
     */
    readonly filterPromotes?: boolean;
    /**
     * Custom JSON object that will be appended to the userData array in the response.
     * This object is not interpreted by the API. It is limited to 1kB of minified JSON.
     */
    readonly userData?: any;
};

export declare type ConsequenceParams = {
    /**
     * When providing a string, it replaces the entire query string.
     * When providing an object, it describes incremental edits to be made to the query string (but you can’t do both).
     */
    readonly query?: ConsequenceQuery | string;
    /**
     * Names of facets to which automatic filtering must be applied; they must match the facet name of a facet value placeholder in the query pattern.
     */
    readonly automaticFacetFilters?: readonly AutomaticFacetFilter[] | readonly string[];
    /**
     * Same syntax as automaticFacetFilters, but the engine treats the filters as optional.
     * Behaves like optionalFilters.
     */
    readonly automaticOptionalFacetFilters?: readonly AutomaticFacetFilter[] | readonly string[];
    /**
     * Content defining how the search interface should be rendered.
     * A default value for this can be set via settings
     */
    readonly renderingContent?: Settings['renderingContent'];
};

export declare type ConsequencePromote = {
    /**
     * Unique identifier of the object to promote.
     */
    readonly objectID: string;
    /**
     * Promoted rank for the object (zero-based).
     */
    readonly position: number;
} | {
    /**
     * List of unique identifiers for the objects to promote.
     */
    readonly objectIDs: readonly string[];
    /**
     * Promoted start rank for the objects (zero-based).
     */
    readonly position: number;
};

export declare type ConsequenceQuery = {
    /**
     * List of removes.
     */
    readonly remove?: readonly string[];
    /**
     * List of edits.
     */
    readonly edits?: ReadonlyArray<{
        /**
         * Type of edit.
         */
        readonly type?: 'remove' | 'replace';
        /**
         * Text or patterns to remove from the query string.
         */
        readonly delete?: string;
        /**
         * Text that should be inserted in place of the removed text inside the query string.
         */
        readonly insert?: string;
    }>;
};

export declare const copyIndex: (base: SearchClient) => (from: string, to: string, requestOptions?: (CopyIndexOptions & RequestOptions) | undefined) => Readonly<WaitablePromise<IndexOperationResponse>>;

export declare type CopyIndexOptions = {
    readonly scope?: readonly ScopeType[];
};

export declare const copyRules: (base: SearchClient) => (from: string, to: string, requestOptions?: RequestOptions | undefined) => Readonly<WaitablePromise<IndexOperationResponse>>;

export declare const copySettings: (base: SearchClient) => (from: string, to: string, requestOptions?: RequestOptions | undefined) => Readonly<WaitablePromise<IndexOperationResponse>>;

export declare const copySynonyms: (base: SearchClient) => (from: string, to: string, requestOptions?: RequestOptions | undefined) => Readonly<WaitablePromise<IndexOperationResponse>>;

export declare function createBrowsablePromise<TObject>(options: {
    readonly shouldStop: (response: BrowseResponse<TObject>) => boolean;
    readonly request: (data: BrowseRequestData) => Readonly<Promise<BrowseResponse<TObject>>>;
} & BrowseOptions<TObject>): Readonly<Promise<void>>;

export declare type CreateIndex = <TMethods extends {
    readonly [key: string]: (base: SearchIndex) => (...args: any) => any;
}>(indexName: string, options?: {
    readonly methods?: TMethods;
}) => SearchIndex & {
    [key in keyof TMethods extends string ? keyof TMethods : never]: ReturnType<TMethods[key]>;
};

export declare function createMissingObjectIDError(): Error;

export declare function createObjectNotFoundError(): Error;

export declare const createSearchClient: CreateClient<SearchClient, SearchClientOptions & ClientTransporterOptions>;

export declare function createValidUntilNotFoundError(): Error;

export declare const customRequest: <TResponse = any>(base: SearchClient) => (request: Request_2, requestOptions?: RequestOptions | undefined) => Readonly<Promise<TResponse>>;

export declare const deleteApiKey: (base: SearchClient) => (apiKey: string, requestOptions?: RequestOptions | undefined) => Readonly<WaitablePromise<DeleteApiKeyResponse>>;

export declare type DeleteApiKeyResponse = {
    /**
     * The date when the api key was deleted.
     */
    deletedAt: string;
};

export declare const deleteBy: (base: SearchIndex) => (filters: DeleteByFiltersOptions, requestOptions?: RequestOptions | undefined) => Readonly<WaitablePromise<DeleteResponse>>;

export declare type DeleteByFiltersOptions = {
    /**
     * Filter the query with numeric, facet and/or tag filters.
     */
    readonly filters?: string;
    /**
     *  Filter hits by facet value.
     */
    readonly facetFilters?: string | readonly string[] | ReadonlyArray<readonly string[] | string>;
    /**
     * Filter on numeric attributes.
     */
    readonly numericFilters?: string | readonly string[] | ReadonlyArray<readonly string[] | string>;
    /**
     * Filter hits by tags. tagFilters is a different way of filtering, which relies on the _tags
     * attribute. It uses a simpler syntax than filters. You can use it when you want to do
     * simple filtering based on tags.
     */
    readonly tagFilters?: string | readonly string[] | ReadonlyArray<readonly string[] | string>;
    /**
     * Search for entries around a central geolocation, enabling a geo search within a circular area.
     */
    readonly aroundLatLng?: string;
    /**
     * Search for entries around a given location automatically computed from the requester’s IP address.
     */
    readonly aroundLatLngViaIP?: boolean;
    /**
     * Search inside a rectangular area (in geo coordinates).
     */
    readonly insideBoundingBox?: ReadonlyArray<readonly number[]> | string;
    /**
     * Search inside a polygon (in geo coordinates).
     */
    readonly insidePolygon?: ReadonlyArray<readonly number[]>;
};

export declare const deleteDictionaryEntries: (base: SearchClient) => (dictionary: DictionaryName, objectIDs: readonly string[], requestOptions?: (RequestOptions & DictionaryEntriesOptions) | undefined) => Readonly<WaitablePromise<DictionaryEntriesResponse>>;

export declare const deleteIndex: (base: SearchIndex) => (requestOptions?: RequestOptions | undefined) => Readonly<WaitablePromise<DeleteResponse>>;

export declare const deleteObject: (base: SearchIndex) => (objectID: string, requestOptions?: RequestOptions | undefined) => Readonly<WaitablePromise<DeleteResponse>>;

export declare const deleteObjects: (base: SearchIndex) => (objectIDs: readonly string[], requestOptions?: (RequestOptions & ChunkOptions) | undefined) => Readonly<WaitablePromise<ChunkedBatchResponse>>;

export declare type DeleteResponse = {
    /**
     * The operation task id. May be used to perform a wait task.
     */
    taskID: number;
};

export declare const deleteRule: (base: SearchIndex) => (objectID: string, requestOptions?: RequestOptions | undefined) => Readonly<WaitablePromise<DeleteResponse>>;

export declare const deleteSynonym: (base: SearchIndex) => (objectID: string, requestOptions?: (RequestOptions & DeleteSynonymOptions) | undefined) => Readonly<WaitablePromise<DeleteResponse>>;

export declare type DeleteSynonymOptions = {
    /**
     * If the delete synonym request should be forward to replicas.
     */
    readonly forwardToReplicas?: boolean;
};

export declare type DictionaryEntriesOptions = {
    /**
     * Array of dictionary entries
     */
    readonly dictionaryEntries: readonly DictionaryEntry[];
};

export declare type DictionaryEntriesResponse = {
    /**
     * When the given rules got saved.
     */
    updatedAt: number;
    /**
     * The operation task id. May be used to perform a wait task.
     */
    taskID: number;
};

export declare type DictionaryEntry = {
    /**
     * Unique identifier for the rule (format: [A-Za-z0-9_-]+).
     */
    readonly objectID: string;
    readonly language: string;
    readonly word?: string;
    readonly words?: readonly string[];
    readonly decomposition?: readonly string[];
    readonly state?: 'enabled' | 'disabled';
};

export declare type DictionaryName = 'plurals' | 'stopwords' | 'compounds';

export declare type DictionarySettings = {
    /**
     * Disable the builtin Algolia entries for a type of dictionary per language.
     */
    readonly disableStandardEntries: RequireAtLeastOne<Record<DictionaryName, Record<string, boolean>>>;
};

export declare const exists: (base: SearchIndex) => (requestOptions?: RequestOptions | undefined) => Readonly<Promise<boolean>>;

export declare type FacetHit = {
    /**
     * The value of the facet.
     */
    readonly value: string;
    /**
     * The highlighted value.
     */
    readonly highlighted: string;
    /**
     * The count.
     */
    readonly count: number;
};

export declare const findAnswers: (base: SearchIndex) => <TObject>(query: string, queryLanguages: readonly string[], requestOptions?: (RequestOptions & FindAnswersOptions) | undefined) => Readonly<Promise<FindAnswersResponse<TObject>>>;

export declare type FindAnswersOptions = {
    /**
     * Attributes to use for predictions.
     * If using the default (["*"]), all attributes are used to find answers.
     */
    readonly attributesForPrediction?: readonly string[];
    /**
     * Maximum number of answers to retrieve from the Answers Engine.
     * Cannot be greater than 1000.
     */
    readonly nbHits?: number;
    /**
     * Threshold for the answers’ confidence score:
     * only answers with extracts that score above this threshold are returned.
     */
    readonly threshold?: number;
    /**
     * Whether the attribute name in which the answer was found should be returned.
     * This option is expensive in processing time.
     */
    readonly returnExtractAttribute?: boolean;
    /**
     * Algolia search parameters to use to fetch the hits.
     * Can be any search parameter, except:
     *   - attributesToSnippet
     *   - hitsPerPage
     *   - queryType
     *   - naturalLanguages and associated parameters
     *     (removeStopWords, ignorePlurals, and removeWordsIfNoResults)
     */
    readonly searchParameters?: Omit<SearchOptions, 'attributesToSnippet' | 'hitsPerPage' | 'queryType' | 'naturalLanguages' | 'removeStopWords' | 'ignorePlurals' | 'removeWordsIfNoResults'>;
};

export declare type FindAnswersResponse<TObject = {}> = Omit<SearchResponse<TObject>, 'hits'> & {
    /**
     * The hits returned by the search.
     *
     * Hits are ordered according to the ranking or sorting of the index being queried.
     */
    hits: Array<Hit<TObject & {
        _answer?: {
            extract: string;
            score: number;
            extractAttribute: string;
        };
    }>>;
};

export declare const findObject: (base: SearchIndex) => <TObject>(callback: (object: TObject & ObjectWithObjectID) => boolean, requestOptions?: (FindObjectOptions & RequestOptions) | undefined) => Readonly<Promise<FindObjectResponse<TObject>>>;

export declare type FindObjectOptions = {
    /**
     * If the underlying find object options should paginate
     * over a search method.
     */
    readonly paginate?: boolean;
    /**
     * The query used by the underlying find object to
     * find the object.
     */
    readonly query?: string;
};

export declare type FindObjectResponse<TObject> = {
    /**
     * The found object.
     */
    object: TObject & ObjectWithObjectID;
    /**
     * The position where the object was found.
     */
    position: number;
    /**
     * The page where the object was found.
     */
    page: number;
};

export declare const generateSecuredApiKey: () => (parentApiKey: string, restrictions: SecuredApiKeyRestrictions) => string;

export declare const getApiKey: (base: SearchClient) => (apiKey: string, requestOptions?: RequestOptions | undefined) => Readonly<Promise<GetApiKeyResponse>>;

export declare type GetApiKeyResponse = {
    /**
     * The api key value
     */
    value: string;
    /**
     * Date of creation (Unix timestamp).
     */
    createdAt: number;
    /**
     * List of permissions the key contains.
     */
    acl: ApiKeyACLType[];
    /**
     * A Unix timestamp used to define the expiration date of the API key.
     */
    validity: number;
    /**
     * Specify the maximum number of hits this API key can retrieve in one call.
     * This parameter can be used to protect you from attempts at retrieving your entire index contents by massively querying the index.
     */
    maxHitsPerQuery?: number;
    /**
     * Specify the maximum number of API calls allowed from an IP address per hour. Each time an API call is performed with this key, a check is performed.
     */
    maxQueriesPerIPPerHour?: number;
    /**
     * Specify the list of targeted indices. You can target all indices starting with a prefix or ending with a suffix using the ‘*’ character.
     */
    indexes?: string[];
    /**
     * Specify the list of referers. You can target all referers starting with a prefix, ending with a suffix using the ‘*’ character.
     */
    referers?: string[];
    /**
     * IPv4 network allowed to use the generated key.
     * This is used for more protection against API key leaking and reuse.
     * Note that you can only provide a single source, but you can specify a range of IPs (e.g., 192.168.1.0/24).
     */
    restrictSources?: string;
    /**
     * Specify the list of query parameters. You can force the query parameters for a query using the url string format.
     */
    queryParameters?: string;
    /**
     * Specify a description of the API key. Used for informative purposes only. It has impact on the functionality of the API key.
     */
    description?: string;
};

export declare const getAppTask: (base: SearchClient) => (taskID: number, requestOptions?: RequestOptions | undefined) => Readonly<Promise<TaskStatusResponse>>;

export declare const getDictionarySettings: (base: SearchClient) => (requestOptions?: RequestOptions | undefined) => Readonly<Promise<GetDictionarySettingsResponse>>;

export declare type GetDictionarySettingsResponse = {
    /**
     * Disable the builtin Algolia entries for a type of dictionary per language.
     */
    readonly disableStandardEntries: RequireAtLeastOne<Record<DictionaryName, Record<string, boolean>>>;
};

export declare const getLogs: (base: SearchClient) => (requestOptions?: RequestOptions | undefined) => Readonly<Promise<GetLogsResponse>>;

export declare type GetLogsOptions = {
    /**
     * The offset.
     */
    readonly offset: number;
    /**
     * The length size.
     */
    readonly length: number;
};

export declare type GetLogsResponse = {
    /**
     * The list of logs.
     */
    logs: Log[];
};

export declare const getObject: (base: SearchIndex) => <TObject>(objectID: string, requestOptions?: (RequestOptions & GetObjectOptions) | undefined) => Readonly<Promise<TObject & ObjectWithObjectID>>;

export declare type GetObjectOptions = {
    /**
     * The attributes that should come with witch object.
     */
    readonly attributesToRetrieve?: readonly string[];
};

export declare const getObjectPosition: <TObject>() => (searchResponse: SearchResponse<TObject>, objectID: string) => number;

export declare const getObjects: (base: SearchIndex) => <TObject>(objectIDs: readonly string[], requestOptions?: (RequestOptions & GetObjectsOptions) | undefined) => Readonly<Promise<GetObjectsResponse<TObject>>>;

export declare type GetObjectsOptions = {
    /**
     * The attributes that should come with witch object.
     */
    readonly attributesToRetrieve?: readonly string[];
};

export declare type GetObjectsResponse<TObject> = {
    /**
     * The list of results.
     */
    results: Array<(TObject & ObjectWithObjectID) | null>;
};

export declare const getRule: (base: SearchIndex) => (objectID: string, requestOptions?: RequestOptions | undefined) => Readonly<Promise<Rule>>;

export declare const getSecuredApiKeyRemainingValidity: () => (securedApiKey: string) => number;

export declare const getSettings: (base: SearchIndex) => (requestOptions?: RequestOptions | undefined) => Readonly<Promise<Settings>>;

export declare const getSynonym: (base: SearchIndex) => (objectID: string, requestOptions?: RequestOptions | undefined) => Readonly<Promise<Synonym>>;

export declare const getTask: (base: SearchIndex) => (taskID: number, requestOptions?: RequestOptions | undefined) => Readonly<Promise<TaskStatusResponse>>;

export declare const getTopUserIDs: (base: SearchClient) => (requestOptions?: RequestOptions | undefined) => Readonly<Promise<GetTopUserIDsResponse>>;

export declare type GetTopUserIDsResponse = {
    /**
     * Mapping of cluster names to top users.
     */
    topUsers: Record<string, UserIDResponse[]>;
};

export declare const getUserID: (base: SearchClient) => (userID: string, requestOptions?: RequestOptions | undefined) => Readonly<Promise<UserIDResponse>>;

export declare const hasPendingMappings: (base: SearchClient) => (requestOptions?: (HasPendingMappingsOptions & RequestOptions) | undefined) => Readonly<Promise<HasPendingMappingsResponse>>;

export declare type HasPendingMappingsOptions = {
    /**
     * If the clusters pending mapping state should be on the response.
     *
     * @defaultValue false
     */
    readonly retrieveMappings?: boolean;
    /**
     * If the clusters pending mapping state should be on the response.
     *
     * @defaultValue false
     *
     * @internal
     */
    readonly getClusters?: boolean;
};

export declare type HasPendingMappingsResponse = {
    /**
     * If there is any clusters with pending mapping state.
     */
    pending: boolean;
    /**
     * Describe cluster pending (migrating, creating, deleting) mapping state.
     */
    clusters?: {
        [key: string]: string[];
    };
};

declare type HighlightMatch = {
    readonly value: string;
    readonly matchLevel: 'none' | 'partial' | 'full';
    readonly matchedWords: readonly string[];
    readonly fullyHighlighted?: boolean;
};

export declare type HighlightResult<THit> = THit extends string | number ? HighlightMatch : {
    [KAttribute in keyof THit]?: HighlightResult<THit[KAttribute]>;
};

export declare type Hit<THit> = THit & {
    readonly objectID: string;
    readonly _highlightResult?: HighlightResult<THit>;
    readonly _snippetResult?: SnippetResult<THit>;
    readonly _rankingInfo?: RankingInfo;
    readonly _distinctSeqID?: number;
};

export declare type Index = {
    /**
     * Index name.
     */
    readonly name: string;
    /**
     * Index creation date. (ISO-8601 format)
     */
    readonly createdAt: string;
    /**
     * Date of last update. (ISO-8601 format)
     */
    readonly updatedAt: string;
    /**
     * Number of records contained in the index
     */
    readonly entries: number;
    /**
     * Number of bytes of the index in minified format.
     */
    readonly dataSize: number;
    /**
     * Number of bytes of the index binary file.
     */
    readonly fileSize: number;
    /**
     * Last build time in seconds.
     */
    readonly lastBuildTimeS: number;
    /**
     * Number of pending indexing operations.
     */
    readonly numberOfPendingTasks: number;
    /**
     * A boolean which says whether the index has pending tasks.
     */
    readonly pendingTask: boolean;
    /**
     * Only present if the index is a replica.
     * Contains the name of the related primary index.
     */
    readonly primary?: string;
    /**
     * Only present if the index is a primary index with replicas.
     * Contains the names of all linked replicas.
     */
    readonly replicas?: readonly string[];
    /**
     * Only present if the index is a virtual replica.
     */
    readonly virtual?: boolean;
};

export declare type IndexOperationResponse = {
    /**
     * The operation task id. May be used to perform a wait task.
     */
    taskID: number;
};

/**
 * @deprecated please use `Index` instead of `Indice`
 */
export declare type Indice = Index;

export declare const initIndex: (base: SearchClient) => CreateIndex;

export declare const listApiKeys: (base: SearchClient) => (requestOptions?: RequestOptions | undefined) => Readonly<Promise<ListApiKeysResponse>>;

export declare type ListApiKeysResponse = {
    /**
     * List of keys
     */
    keys: GetApiKeyResponse[];
};

export declare const listClusters: (base: SearchClient) => (requestOptions?: RequestOptions | undefined) => Readonly<Promise<ListClustersResponse>>;

export declare type ListClustersResponse = {
    /**
     * List of clusters.
     */
    clusters: Cluster[];
};

export declare const listIndices: (base: SearchClient) => (requestOptions?: RequestOptions | undefined) => Readonly<Promise<ListIndicesResponse>>;

export declare type ListIndicesResponse = {
    /**
     * Number of pages
     */
    nbPages: number;
    /**
     * List of index response
     */
    items: Index[];
};

export declare const listUserIDs: (base: SearchClient) => (requestOptions?: (ListUserIDsOptions & RequestOptions) | undefined) => Readonly<Promise<ListUserIDsResponse>>;

export declare type ListUserIDsOptions = {
    /**
     * Page to fetch.
     */
    readonly page?: number;
    /**
     * Number of users to retrieve per page.
     */
    readonly hitsPerPage?: number;
};

export declare type ListUserIDsResponse = {
    /**
     * List of users id.
     */
    userIDs: UserIDResponse[];
};

export declare type Log = {
    /**
     * Timestamp in ISO-8601 format.
     */
    readonly timestamp: string;
    /**
     * Rest type of the method.
     */
    readonly method: string;
    /**
     * Http response code.
     */
    readonly answer_code: string;
    /**
     * Request body. It’s truncated after 1000 characters.
     */
    readonly query_body: string;
    /**
     * Answer body. It’s truncated after 1000 characters.
     */
    readonly answer: string;
    /**
     * Request URL.
     */
    readonly url: string;
    /**
     * Client ip of the call.
     */
    readonly ip: string;
    /**
     * SHA1 ID of entry.
     */
    readonly sha1: string;
    /**
     * Request Headers (API Key is obfuscated).
     */
    readonly query_headers: string;
    /**
     * Number Of Api Calls
     */
    readonly nb_api_calls?: string;
    /**
     * Processing time for the query. This does not include network time.
     */
    readonly processing_time_ms: string;
    /**
     * Number of hits returned for the query.
     */
    readonly query_nb_hits?: string;
    /**
     * Exhaustive flags used during the query.
     */
    readonly exhaustive?: boolean;
    /**
     * Index name of the log
     */
    readonly index?: string;
    /**
     * Internal queries performed for this query.
     */
    readonly inner_queries: ReadonlyArray<{
        /**
         * Index name of the query.
         */
        readonly index_name: string;
        /**
         * Query ID of the query.
         */
        readonly query_id?: string;
        /**
         * The offset of the query.
         */
        readonly offset?: number;
        /**
         * The user token of the query.
         */
        readonly user_token?: string;
    }>;
};

export declare const moveIndex: (base: SearchClient) => (from: string, to: string, requestOptions?: RequestOptions | undefined) => Readonly<WaitablePromise<IndexOperationResponse>>;

export declare const multipleBatch: (base: SearchClient) => (requests: readonly MultipleBatchRequest[], requestOptions?: RequestOptions | undefined) => Readonly<WaitablePromise<MultipleBatchResponse>>;

export declare type MultipleBatchRequest = {
    /**
     * The index name where the multiple batch are going to be applied.
     */
    readonly indexName: string;
    /**
     * The action used.
     */
    readonly action: BatchActionType;
    /**
     * The body associated with the request.
     */
    readonly body: Record<string, any>;
};

export declare type MultipleBatchResponse = {
    /**
     * The list of object ids.
     */
    objectIDs: string[];
    /**
     * The operation task id. May be used to perform a wait task.
     */
    taskID: Record<string, number>;
};

export declare type MultipleGetObject = {
    /**
     * The index name.
     */
    readonly indexName: string;
    /**
     * The object id.
     */
    readonly objectID: string;
    /**
     * The attributes that should be returned with the object.
     */
    readonly attributesToRetrieve?: readonly string[];
};

export declare const multipleGetObjects: (base: SearchClient) => <TObject>(requests: readonly MultipleGetObject[], requestOptions?: RequestOptions | undefined) => Readonly<Promise<MultipleGetObjectsResponse<TObject>>>;

export declare type MultipleGetObjectsResponse<TObject> = {
    /**
     * The list of objects.
     */
    results: Array<TObject & ObjectWithObjectID>;
};

export declare const multipleQueries: (base: SearchClient) => <TObject>(queries: readonly MultipleQueriesQuery[], requestOptions?: (RequestOptions & MultipleQueriesOptions) | undefined) => Readonly<Promise<MultipleQueriesResponse<TObject>>>;

export declare type MultipleQueriesOptions = {
    readonly strategy?: StrategyType;
};

export declare type MultipleQueriesQuery = SharedMultipleQueriesQuery & ({
    readonly type?: 'default';
} | {
    readonly type: 'facet';
    /**
     * The facet name.
     */
    readonly facet: string;
    /**
     * The search options.
     */
    readonly params?: SharedMultipleQueriesQuery['params'] & {
        /**
         * The search query used to search the facet attribute. Follows the same rules for an index query: a single character, a partial word, a word, or a phrase.
         */
        readonly facetQuery?: string;
    };
});

export declare type MultipleQueriesResponse<TObject> = {
    /**
     * The list of results.
     */
    results: Array<SearchResponse<TObject> | SearchForFacetValuesResponse>;
};

export declare const multipleSearchForFacetValues: (base: SearchClient) => (queries: readonly {
    readonly indexName: string;
    readonly params: SearchForFacetValuesQueryParams & SearchOptions;
}[], requestOptions?: RequestOptions | undefined) => Readonly<Promise<readonly SearchForFacetValuesResponse[]>>;

export declare type ObjectWithObjectID = {
    /**
     * The object id of the object.
     */
    readonly objectID: string;
};

export declare const partialUpdateObject: (base: SearchIndex) => (object: Record<string, any>, requestOptions?: (RequestOptions & ChunkOptions & PartialUpdateObjectsOptions) | undefined) => Readonly<WaitablePromise<PartialUpdateObjectResponse>>;

export declare type PartialUpdateObjectResponse = {
    /**
     * The operation task id. May be used to perform a wait task.
     */
    taskID: number;
    /**
     * The object id updated.
     */
    objectID: string;
};

export declare const partialUpdateObjects: (base: SearchIndex) => (objects: readonly Record<string, any>[], requestOptions?: (RequestOptions & ChunkOptions & PartialUpdateObjectsOptions) | undefined) => Readonly<WaitablePromise<ChunkedBatchResponse>>;

export declare type PartialUpdateObjectsOptions = {
    /**
     * If the object should be created when does not exist.
     */
    readonly createIfNotExists?: boolean;
};

export declare type RankingInfo = {
    readonly promoted: boolean;
    readonly nbTypos: number;
    readonly firstMatchedWord: number;
    readonly proximityDistance?: number;
    readonly geoDistance: number;
    readonly geoPrecision?: number;
    readonly nbExactWords: number;
    readonly words: number;
    readonly filters: number;
    readonly userScore: number;
    readonly matchedGeoLocation?: {
        readonly lat: number;
        readonly lng: number;
        readonly distance: number;
    };
    readonly personalization?: {
        readonly filtersScore: number;
        readonly rankingScore: number;
        readonly score: number;
    };
    readonly promotedByReRanking?: boolean;
};

export declare type RedirectRuleIndexMetadata = {
    /**
     * Source index for the redirect rule
     */
    readonly source: string;
    /**
     * Destination index for the redirect rule
     */
    readonly dest: string;
    /**
     * Reason for the redirect rule
     */
    readonly reason: string;
    /**
     * Status for the redirect rule
     */
    readonly succeed: boolean;
    /**
     * Data for the redirect rule
     */
    readonly data: {
        /**
         * Rule objectId
         */
        readonly ruleObjectID: string;
    };
};

export declare const removeUserID: (base: SearchClient) => (userID: string, requestOptions?: RequestOptions | undefined) => Readonly<Promise<RemoveUserIDResponse>>;

export declare type RemoveUserIDResponse = {
    /**
     * When the given `userID` got removed.
     */
    deletedAt: string;
};

export declare const replaceAllObjects: (base: SearchIndex) => (objects: readonly Readonly<Record<string, any>>[], requestOptions?: (ReplaceAllObjectsOptions & ChunkOptions & SaveObjectsOptions & RequestOptions) | undefined) => Readonly<WaitablePromise<ChunkedBatchResponse>>;

export declare type ReplaceAllObjectsOptions = {
    /**
     * If the all objects should be replaced using wait operations. Keep
     * in mind that, when the `safe` option is used, the operation may
     * take a little more than expected.
     */
    readonly safe?: boolean;
};

export declare const replaceAllRules: (base: SearchIndex) => (rules: readonly Rule[], requestOptions?: (RequestOptions & SaveRulesOptions) | undefined) => Readonly<WaitablePromise<SaveRulesResponse>>;

export declare const replaceAllSynonyms: (base: SearchIndex) => (synonyms: readonly Synonym[], requestOptions?: (RequestOptions & Pick<SaveSynonymsOptions, "forwardToReplicas">) | undefined) => Readonly<WaitablePromise<SaveSynonymsResponse>>;

export declare const replaceDictionaryEntries: (base: SearchClient) => (dictionary: DictionaryName, entries: readonly DictionaryEntry[], requestOptions?: (RequestOptions & DictionaryEntriesOptions) | undefined) => Readonly<WaitablePromise<DictionaryEntriesResponse>>;

export declare type RequireAtLeastOne<TType> = {
    [TKey in keyof TType]-?: Required<Pick<TType, TKey>> & Partial<Pick<TType, Exclude<keyof TType, TKey>>>;
}[keyof TType];

export declare const restoreApiKey: (base: SearchClient) => (apiKey: string, requestOptions?: RequestOptions | undefined) => Readonly<WaitablePromise<RestoreApiKeyResponse>>;

export declare type RestoreApiKeyResponse = {
    /**
     * Restoration date of the API key.
     */
    createdAt: string;
};

export declare type Rule = {
    /**
     * Unique identifier for the rule (format: [A-Za-z0-9_-]+).
     */
    readonly objectID: string;
    /**
     * Condition of the rule, expressed using the following variables: pattern, anchoring, context.
     *
     * @deprecated This parameter is deprecated in favor of `conditions`.
     */
    readonly condition?: Condition;
    /**
     * Conditions of the rule, expressed using the following variables: pattern, anchoring, context.
     */
    readonly conditions?: readonly Condition[];
    /**
     * Consequence of the rule. At least one of the following object must be used: params, promote, hide, userData.
     */
    readonly consequence?: Consequence;
    /**
     * This field is intended for rule management purposes, in particular to ease searching for rules and presenting them to human readers. It is not interpreted by the API.
     */
    readonly description?: string;
    /**
     * Whether the rule is enabled. Disabled rules remain in the index, but are not applied at query time.
     */
    readonly enabled?: boolean;
    /**
     * By default, rules are permanently valid. When validity periods are specified, the rule applies only during those periods; it is ignored the rest of the time.
     * The list must not be empty.
     */
    readonly validity?: readonly TimeRange[];
};

export declare const saveDictionaryEntries: (base: SearchClient) => (dictionary: DictionaryName, entries: readonly DictionaryEntry[], requestOptions?: (RequestOptions & DictionaryEntriesOptions) | undefined) => Readonly<WaitablePromise<DictionaryEntriesResponse>>;

export declare const saveObject: (base: SearchIndex) => (object: Readonly<Record<string, any>>, requestOptions?: (RequestOptions & ChunkOptions & SaveObjectsOptions) | undefined) => Readonly<WaitablePromise<SaveObjectResponse>>;

export declare type SaveObjectResponse = {
    /**
     * The operation task id. May be used to perform a wait task.
     */
    taskID: number;
    /**
     * The object id saved.
     */
    objectID: string;
};

export declare const saveObjects: (base: SearchIndex) => (objects: readonly Readonly<Record<string, any>>[], requestOptions?: (RequestOptions & ChunkOptions & SaveObjectsOptions) | undefined) => Readonly<WaitablePromise<ChunkedBatchResponse>>;

export declare type SaveObjectsOptions = {
    /**
     * If the object id should be generated when does not exists.
     */
    readonly autoGenerateObjectIDIfNotExist?: boolean;
};

export declare const saveRule: (base: SearchIndex) => (rule: Rule, requestOptions?: (RequestOptions & SaveRulesOptions) | undefined) => Readonly<WaitablePromise<SaveRuleResponse>>;

export declare type SaveRuleResponse = {
    /**
     * When the given rules got saved.
     */
    updatedAt: number;
    /**
     * The operation task id. May be used to perform a wait task.
     */
    taskID: number;
};

export declare const saveRules: (base: SearchIndex) => (rules: readonly Rule[], requestOptions?: (RequestOptions & SaveRulesOptions) | undefined) => Readonly<WaitablePromise<SaveRulesResponse>>;

export declare type SaveRulesOptions = {
    /**
     * If the saved rules should be forward to replicas.
     */
    readonly forwardToReplicas?: boolean;
    /**
     * If the existing rules should be removed.
     */
    readonly clearExistingRules?: boolean;
};

export declare type SaveRulesResponse = {
    /**
     * When the given rules got saved.
     */
    updatedAt: number;
    /**
     * The operation task id. May be used to perform a wait task.
     */
    taskID: number;
};

export declare const saveSynonym: (base: SearchIndex) => (synonym: Synonym, requestOptions?: (RequestOptions & SaveSynonymsOptions) | undefined) => Readonly<WaitablePromise<SaveSynonymResponse>>;

export declare type SaveSynonymResponse = {
    /**
     * When the given synonyms got saved.
     */
    updatedAt: number;
    /**
     * The operation task id. May be used to perform a wait task.
     */
    taskID: number;
};

export declare const saveSynonyms: (base: SearchIndex) => (synonyms: readonly Synonym[], requestOptions?: (SaveSynonymsOptions & RequestOptions) | undefined) => Readonly<WaitablePromise<SaveSynonymsResponse>>;

export declare type SaveSynonymsOptions = {
    /**
     * If the saved synonyms should be forward to replicas.
     */
    readonly forwardToReplicas?: boolean;
    /**
     * If the existing synonyms should be removed.
     * @deprecated use clearExistingSynonyms
     */
    readonly replaceExistingSynonyms?: boolean;
    /**
     * If the existing synonyms should be removed.
     */
    readonly clearExistingSynonyms?: boolean;
};

export declare type SaveSynonymsResponse = {
    /**
     * When the given synonyms got saved.
     */
    updatedAt: number;
    /**
     * The operation task id. May be used to perform a wait task.
     */
    taskID: number;
};

export declare const ScopeEnum: Readonly<Record<string, ScopeType>>;

export declare type ScopeType = 'settings' | 'synonyms' | 'rules';

export declare const search: (base: SearchIndex) => <TObject>(query: string, requestOptions?: (RequestOptions & SearchOptions) | undefined) => Readonly<Promise<SearchResponse<TObject>>>;

export declare type SearchClient = {
    /**
     * The application id.
     */
    readonly appId: string;
    /**
     * The underlying transporter.
     */
    readonly transporter: Transporter;
    /**
     * Mutates the transporter, adding the given user agent.
     */
    readonly addAlgoliaAgent: (segment: string, version?: string) => void;
    /**
     * Clears both requests and responses caches.
     */
    readonly clearCache: () => Readonly<Promise<void>>;
};

export declare type SearchClientOptions = {
    /**
     * The application id.
     */
    readonly appId: string;
    /**
     * The api key.
     */
    readonly apiKey: string;
    /**
     * The auth mode type. In browser environments credentials may
     * be passed within the headers.
     */
    readonly authMode?: AuthModeType;
};

export declare const searchDictionaryEntries: (base: SearchClient) => (dictionary: DictionaryName, query: string, requestOptions?: RequestOptions | undefined) => Readonly<Promise<SearchDictionaryEntriesResponse>>;

export declare type SearchDictionaryEntriesResponse = {
    /**
     * The dictionary entries returned by the search.
     */
    hits: DictionaryEntry[];
    /**
     * Index of the current page (zero-based).
     */
    page: number;
    /**
     * Number of dictionary entries matched by the query.
     */
    nbHits: number;
    /**
     * Number of pages returned.
     *
     * Calculation is based on the total number of hits (nbHits) divided by the
     * number of hits per page (hitsPerPage), rounded up to the nearest integer.
     */
    nbPages: number;
};

export declare const searchForFacetValues: (base: SearchIndex) => (facetName: string, facetQuery: string, requestOptions?: (RequestOptions & SearchOptions) | undefined) => Readonly<Promise<SearchForFacetValuesResponse>>;

export declare type SearchForFacetValuesQueryParams = {
    /**
     * The facet name.
     */
    readonly facetName: string;
    /**
     * The facet query.
     */
    readonly facetQuery: string;
};

export declare type SearchForFacetValuesResponse = {
    /**
     * The list of facet hits.
     */
    facetHits: FacetHit[];
    /**
     * The exhaustive facets count.
     */
    exhaustiveFacetsCount: boolean;
    /**
     * The time that the API toke the process the request.
     */
    processingTimeMS?: number;
};

export declare type SearchIndex = {
    /**
     * The application id.
     */
    readonly appId: string;
    /**
     * The index name.
     */
    readonly indexName: string;
    /**
     * The underlying transporter.
     */
    readonly transporter: Transporter;
};

export declare type SearchOptions = {
    /**
     * Create a new query with an empty search query.
     */
    readonly query?: string;
    /**
     * Allows a search for similar objects, but the query has to be constructed on your end and included alongside an empty query.
     *
     * The similarQuery should be made from the tags and keywords of the relevant object.
     */
    readonly similarQuery?: string;
    /**
     *  Filter hits by facet value.
     */
    readonly facetFilters?: string | readonly string[] | ReadonlyArray<readonly string[] | string>;
    /**
     * Create filters for ranking purposes, where records that match the filter are ranked highest.
     */
    readonly optionalFilters?: string | readonly string[] | ReadonlyArray<readonly string[] | string>;
    /**
     * Filter on numeric attributes.
     */
    readonly numericFilters?: string | readonly string[] | ReadonlyArray<readonly string[] | string>;
    /**
     * Filter hits by tags. tagFilters is a different way of filtering, which relies on the _tags
     * attribute. It uses a simpler syntax than filters. You can use it when you want to do
     * simple filtering based on tags.
     */
    readonly tagFilters?: string | readonly string[] | ReadonlyArray<readonly string[] | string>;
    /**
     * Determines how to calculate the total score for filtering.
     */
    readonly sumOrFiltersScores?: boolean;
    /**
     * Filter the query with numeric, facet and/or tag filters.
     */
    readonly filters?: string;
    /**
     * Specify the page to retrieve.
     */
    readonly page?: number;
    /**
     * Set the number of hits per page.
     */
    readonly hitsPerPage?: number;
    /**
     * Specify the offset of the first hit to return.
     */
    readonly offset?: number;
    /**
     * Set the number of hits to retrieve (used only with offset).
     */
    readonly length?: number;
    /**
     * List of attributes to highlight.
     */
    readonly attributesToHighlight?: readonly string[];
    /**
     * List of attributes to snippet, with an optional maximum number of words to snippet.
     */
    readonly attributesToSnippet?: readonly string[];
    /**
     * Gives control over which attributes to retrieve and which not to retrieve.
     */
    readonly attributesToRetrieve?: readonly string[];
    /**
     * The HTML string to insert before the highlighted parts in all highlight and snippet results.
     */
    readonly highlightPreTag?: string;
    /**
     * The HTML string to insert after the highlighted parts in all highlight and snippet results
     */
    readonly highlightPostTag?: string;
    /**
     * String used as an ellipsis indicator when a snippet is truncated.
     */
    readonly snippetEllipsisText?: string;
    /**
     * Restrict highlighting and snippeting to items that matched the query.
     */
    readonly restrictHighlightAndSnippetArrays?: boolean;
    /**
     * Facets to retrieve.
     */
    readonly facets?: readonly string[];
    /**
     * Maximum number of facet values to return for each facet during a regular search.
     */
    readonly maxValuesPerFacet?: number;
    /**
     *  Force faceting to be applied after de-duplication (via the Distinct setting).
     */
    readonly facetingAfterDistinct?: boolean;
    /**
     * Minimum number of characters a word in the query string must contain to accept matches with 1 typo
     */
    readonly minWordSizefor1Typo?: number;
    /**
     * Minimum number of characters a word in the query string must contain to accept matches with 2 typos.
     */
    readonly minWordSizefor2Typos?: number;
    /**
     * Whether to allow typos on numbers (“numeric tokens”) in the query string.
     */
    readonly allowTyposOnNumericTokens?: boolean;
    /**
     * List of attributes on which you want to disable typo tolerance.
     */
    readonly disableTypoToleranceOnAttributes?: readonly string[];
    /**
     * Controls if and how query words are interpreted as prefixes.
     */
    readonly queryType?: 'prefixLast' | 'prefixAll' | 'prefixNone';
    /**
     * Selects a strategy to remove words from the query when it doesn’t match any hits.
     */
    readonly removeWordsIfNoResults?: 'none' | 'lastWords' | 'firstWords' | 'allOptional';
    /**
     * Enables the advanced query syntax.
     */
    readonly advancedSyntax?: boolean;
    /**
     * AdvancedSyntaxFeatures can be exactPhrase or excludeWords
     */
    readonly advancedSyntaxFeatures?: ReadonlyArray<'exactPhrase' | 'excludeWords'>;
    /**
     * A list of words that should be considered as optional when found in the query.
     */
    readonly optionalWords?: string | readonly string[];
    /**
     * List of attributes on which you want to disable the exact ranking criterion.
     */
    readonly disableExactOnAttributes?: readonly string[];
    /**
     * Controls how the exact ranking criterion is computed when the query contains only one word.
     */
    readonly exactOnSingleWordQuery?: 'attribute' | 'none' | 'word';
    /**
     * List of alternatives that should be considered an exact match by the exact ranking criterion.
     */
    readonly alternativesAsExact?: ReadonlyArray<'ignorePlurals' | 'singleWordSynonym' | 'multiWordsSynonym'>;
    /**
     * Whether rules should be globally enabled.
     */
    readonly enableRules?: boolean;
    /**
     * Enables contextual rules.
     */
    readonly ruleContexts?: readonly string[];
    /**
     * Enables de-duplication or grouping of results.
     */
    readonly distinct?: boolean | number;
    /**
     * Whether the current query will be taken into account in the Analytics
     */
    readonly analytics?: boolean;
    /**
     * List of tags to apply to the query in the analytics.
     */
    readonly analyticsTags?: readonly string[];
    /**
     * Whether to take into account an index’s synonyms for a particular search.
     */
    readonly synonyms?: boolean;
    /**
     * Whether to highlight and snippet the original word that matches the synonym or the synonym itself.
     */
    readonly replaceSynonymsInHighlight?: boolean;
    /**
     * Precision of the proximity ranking criterion.
     */
    readonly minProximity?: number;
    /**
     * Choose which fields the response will contain. Applies to search and browse queries.
     */
    readonly responseFields?: readonly string[];
    /**
     * Maximum number of facet hits to return during a search for facet values.
     */
    readonly maxFacetHits?: number;
    /**
     * Whether to include or exclude a query from the processing-time percentile computation.
     */
    readonly percentileComputation?: boolean;
    /**
     * Enable the Click Analytics feature.
     */
    readonly clickAnalytics?: boolean;
    /**
     * The `personalizationImpact` parameter sets the percentage of the impact that personalization has on ranking records. The
     * value must be between 0 and 100 (inclusive). This parameter will not be taken into account if `enablePersonalization`
     * is **false**.
     */
    readonly personalizationImpact?: number;
    /**
     * Enable personalization for the query
     */
    readonly enablePersonalization?: boolean;
    /**
     * Restricts a given query to look in only a subset of your searchable attributes.
     */
    readonly restrictSearchableAttributes?: readonly string[];
    /**
     * Controls how facet values are sorted.
     */
    readonly sortFacetValuesBy?: 'count' | 'alpha';
    /**
     * Controls whether typo tolerance is enabled and how it is applied.
     */
    readonly typoTolerance?: boolean | 'min' | 'strict';
    /**
     * Search for entries around a central geolocation, enabling a geo search within a circular area.
     */
    readonly aroundLatLng?: string;
    /**
     * Search for entries around a given location automatically computed from the requester’s IP address.
     */
    readonly aroundLatLngViaIP?: boolean;
    /**
     * Define the maximum radius for a geo search (in meters).
     */
    readonly aroundRadius?: number | 'all';
    /**
     * Precision of geo search (in meters), to add grouping by geo location to the ranking formula.
     */
    readonly aroundPrecision?: number | ReadonlyArray<{
        readonly from: number;
        readonly value: number;
    }>;
    /**
     * Minimum radius (in meters) used for a geo search when aroundRadius is not set.
     */
    readonly minimumAroundRadius?: number;
    /**
     * Search inside a rectangular area (in geo coordinates).
     */
    readonly insideBoundingBox?: ReadonlyArray<readonly number[]> | string;
    /**
     * Search inside a polygon (in geo coordinates).
     */
    readonly insidePolygon?: ReadonlyArray<readonly number[]>;
    /**
     * Treats singular, plurals, and other forms of declensions as matching terms.
     */
    readonly ignorePlurals?: boolean | readonly string[];
    /**
     * Removes stop (common) words from the query before executing it.
     */
    readonly removeStopWords?: boolean | readonly string[];
    /**
     * List of supported languages with their associated language ISO code.
     *
     * Apply a set of natural language best practices such as ignorePlurals,
     * removeStopWords, removeWordsIfNoResults, analyticsTags and ruleContexts.
     */
    readonly naturalLanguages?: readonly string[];
    /**
     * When true, each hit in the response contains an additional _rankingInfo object.
     */
    readonly getRankingInfo?: boolean;
    /**
     * A user identifier.
     * Format: alpha numeric string [a-zA-Z0-9_-]
     * Length: between 1 and 64 characters.
     */
    readonly userToken?: string;
    /**
     * Can be to enable or disable A/B tests at query time.
     * Engine's default: true
     */
    readonly enableABTest?: boolean;
    /**
     * Enable word segmentation (also called decompounding) at query time for
     * compatible languages. For example, this turns the Dutch query
     * "spaanplaatbehang" into "spaan plaat behang" to retrieve more relevant
     * results.
     */
    readonly decompoundQuery?: boolean;
    /**
     * The relevancy threshold to apply to search in a virtual index [0-100]. A Bigger
     * value means fewer, but more relevant results, smaller value means more, but
     * less relevant results.
     */
    readonly relevancyStrictness?: number;
    /**
     * Whether this search should use Dynamic Re-Ranking.
     * @link https://www.algolia.com/doc/guides/algolia-ai/re-ranking/
     *
     * Note: You need to turn on Dynamic Re-Ranking on your index for it to have an effect on
     * your search results. You can do this through the Re-Ranking page on the dashboard.
     * This parameter is only used to turn off Dynamic Re-Ranking (with false) at search time.
     */
    readonly enableReRanking?: boolean;
    /**
     * When Dynamic Re-Ranking is enabled, only records that match these filters will be impacted by Dynamic Re-Ranking.
     */
    readonly reRankingApplyFilter?: string | readonly string[] | ReadonlyArray<readonly string[] | string> | null;
    /**
     * Sets the languages to be used by language-specific settings and functionalities such as ignorePlurals, removeStopWords, and CJK word-detection.
     */
    readonly queryLanguages?: readonly string[];
    /**
     * Enriches the API’s response with meta-information as to how the query was processed.
     */
    readonly explain?: readonly string[];
};

export declare type SearchResponse<TObject = {}> = {
    /**
     * The hits returned by the search.
     *
     * Hits are ordered according to the ranking or sorting of the index being queried.
     */
    hits: Array<Hit<TObject>>;
    /**
     * Index of the current page (zero-based).
     */
    page: number;
    /**
     * Number of hits returned (used only with offset)
     */
    length?: number;
    /**
     * The offset of the first hit to returned.
     */
    offset?: number;
    /**
     * Number of hits matched by the query.
     */
    nbHits: number;
    /**
     * Subset of hits selected when relevancyStrictness is applied.
     */
    nbSortedHits?: number;
    /**
     * Number of pages returned.
     *
     * Calculation is based on the total number of hits (nbHits) divided by the
     * number of hits per page (hitsPerPage), rounded up to the nearest integer.
     */
    nbPages: number;
    /**
     * Maximum number of hits returned per page.
     */
    hitsPerPage: number;
    /**
     * Time the server took to process the request, in milliseconds. This does not include network time.
     */
    processingTimeMS: number;
    /**
     * Time the server took to process the request, in milliseconds.
     */
    serverTimeMS?: number;
    /**
     * Whether the nbHits is exhaustive (true) or approximate (false).
     *
     * An approximation is done when the query takes more than 50ms to be
     * processed (this can happen when using complex filters on millions on records).
     */
    exhaustiveNbHits: boolean;
    /**
     * Whether the facet count is exhaustive (true) or approximate (false).
     */
    exhaustiveFacetsCount?: boolean;
    /**
     * A mapping of each facet name to the corresponding facet counts.
     */
    facets?: Record<string, Record<string, number>>;
    /**
     * Statistics for numerical facets.
     */
    facets_stats?: Record<string, {
        /**
         * The minimum value in the result set.
         */
        min: number;
        /**
         * The maximum value in the result set.
         */
        max: number;
        /**
         * The average facet value in the result set.
         */
        avg: number;
        /**
         * The sum of all values in the result set.
         */
        sum: number;
    }>;
    /**
     * The query used to search. Accepts every character, and every character entered will be used in the search.
     *
     * An empty query can be used to fetch all records.
     */
    query: string;
    /**
     * A markup text indicating which parts of the original query have been removed in order to retrieve a non-empty result set.
     */
    queryAfterRemoval?: string;
    /**
     * A url-encoded string of all search parameters.
     */
    params: string;
    /**
     * Unique identifier of the search query, to be sent in Insights methods. This identifier links events back to the search query it represents.
     *
     * Returned only if clickAnalytics is true.
     */
    queryID?: string;
    /**
     * Used to return warnings about the query.
     */
    message?: string;
    /**
     * The computed geo location.
     *
     * Format: "lat,lng", where the latitude and longitude are expressed as decimal floating point number.
     */
    aroundLatLng?: string;
    /**
     * The automatically computed radius.
     */
    automaticRadius?: string;
    /**
     * Actual host name of the server that processed the request.
     *
     * Our DNS supports automatic failover and load balancing, so this may differ from the host name used in the request.
     */
    serverUsed?: string;
    /**
     * Index name used for the query.
     */
    index?: string;
    /**
     * Index name used for the query. In case of AB test, the index targetted isn’t always the index used by the query.
     */
    indexUsed?: string;
    /**
     * If a search encounters an index that is being A/B tested, abTestID reports the ongoing A/B test ID.
     */
    abTestID?: number;
    /**
     * In case of AB test, reports the variant ID used. The variant ID is the position in the array of variants (starting at 1).
     */
    abTestVariantID?: number;
    /**
     * The query string that will be searched, after normalization.
     */
    parsedQuery?: string;
    /**
     * Custom user data.
     */
    userData?: any;
    /**
     * Rules applied to the query.
     */
    appliedRules?: Array<Record<string, any>>;
    /**
     * The explanation of the decompounding at query time.
     */
    explain?: {
        /**
         * The explain query match.
         */
        match: {
            /**
             * The explain query match alternatives.
             */
            alternatives: Array<{
                /**
                 * The alternative type.
                 */
                types: string[];
                /**
                 * The list of alternative words.
                 */
                words: string[];
                /**
                 * The number of typos.
                 */
                typos: number;
                /**
                 * The offset.
                 */
                offset: number;
                /**
                 * The length.
                 */
                length: number;
            }>;
        };
        /**
         * Query parameter reporting. Parameters are reported
         * as a JSON object with one field per parameter.
         */
        params?: Record<string, any>;
        /**
         * This parameter is for internal use only.
         */
        redirect?: {
            index?: RedirectRuleIndexMetadata[];
        };
    };
    /**
     * The relevancy threshold applied to search in a virtual index.
     */
    appliedRelevancyStrictness?: number;
    renderingContent?: Settings['renderingContent'];
};

export declare const searchRules: (base: SearchIndex) => (query: string, requestOptions?: (RequestOptions & SearchRulesOptions) | undefined) => Readonly<Promise<SearchResponse<Rule>>>;

export declare type SearchRulesOptions = {
    /**
     * Full text query.
     */
    readonly query?: string;
    /**
     * When specified, restricts matches to rules with a specific anchoring type. When omitted, all anchoring types may match.
     */
    readonly anchoring?: string;
    /**
     * Restricts matches to contextual rules with a specific context (exact match).
     */
    readonly context?: string;
    /**
     * Requested page (zero-based).
     */
    readonly page?: number;
    /**
     * Maximum number of hits in a page. Minimum is 1, maximum is 1000.
     */
    readonly hitsPerPage?: number;
    /**
     * When specified, restricts matches to rules with a specific enabled status.
     * When absent (default), all rules are retrieved, regardless of their enabled status.
     */
    readonly enabled?: boolean;
};

export declare const searchSynonyms: (base: SearchIndex) => (query: string, requestOptions?: (SearchSynonymsOptions & RequestOptions) | undefined) => Readonly<Promise<SearchSynonymsResponse>>;

export declare type SearchSynonymsOptions = {
    /**
     * The synonym type.
     */
    readonly type?: string;
    /**
     * Page to retrieve.
     */
    readonly page?: number;
    /**
     * Number of hits per page.
     */
    readonly hitsPerPage?: number;
};

export declare type SearchSynonymsResponse = {
    /**
     * The list of synonyms.
     */
    hits: Synonym[];
    /**
     * The number of synonyms on the list.
     */
    nbHits: number;
};

export declare const searchUserIDs: (base: SearchClient) => (query: string, requestOptions?: (SearchUserIDsOptions & RequestOptions) | undefined) => Readonly<Promise<SearchUserIDsResponse>>;

export declare type SearchUserIDsOptions = {
    /**
     * If specified, only clusters assigned to this cluster can be returned.
     * */
    readonly cluster?: string;
    /**
     * Page to fetch.
     */
    readonly page?: number;
    /**
     * Number of users to return by page.
     */
    readonly hitsPerPage?: number;
};

export declare type SearchUserIDsResponse = {
    /**
     * List of userID matching the query.
     */
    hits: UserIDResponse[];
    /**
     * Current page.
     */
    page: number;
    /**
     * Number of userIDs matching the query.
     */
    nbHits: number;
    /**
     * Number of hits retrieved per page.
     */
    hitsPerPage: number;
    /**
     * Timestamp of the last update of the index.
     */
    updatedAt: number;
};

export declare type SecuredApiKeyRestrictions = SearchOptions & {
    /**
     * A Unix timestamp used to define the expiration date of the API key.
     */
    readonly validUntil?: number;
    /**
     * List of index names that can be queried.
     */
    readonly restrictIndices?: readonly string[] | string;
    /**
     * IPv4 network allowed to use the generated key. This is used for more protection against API key leaking and reuse.
     */
    readonly restrictSources?: string;
    /**
     * Specify a user identifier. This is often used with rate limits.
     */
    readonly userToken?: string;
};

export declare const setDictionarySettings: (base: SearchClient) => (settings: DictionarySettings, requestOptions?: RequestOptions | undefined) => Readonly<WaitablePromise<DictionaryEntriesResponse>>;

export declare const setSettings: (base: SearchIndex) => (settings: Settings, requestOptions?: (RequestOptions & SetSettingsOptions) | undefined) => Readonly<WaitablePromise<SetSettingsResponse>>;

export declare type SetSettingsOptions = {
    /**
     * If the saved settings should be forward to replicas.
     */
    readonly forwardToReplicas?: boolean;
};

export declare type SetSettingsResponse = {
    /**
     * The operation task id. May be used to perform a wait task.
     */
    taskID: number;
    /**
     * When the settings got updated.
     */
    updatedAt: number;
};

export declare type Settings = {
    /**
     * The complete list of attributes that will be used for searching.
     */
    readonly searchableAttributes?: readonly string[];
    /**
     * @deprecated Use `searchableAttributes` instead.
     */
    readonly attributesToIndex?: readonly string[];
    /**
     * The complete list of attributes that will be used for faceting.
     */
    readonly attributesForFaceting?: readonly string[];
    /**
     * List of attributes that cannot be retrieved at query time.
     */
    readonly unretrievableAttributes?: readonly string[];
    /**
     * Gives control over which attributes to retrieve and which not to retrieve.
     */
    readonly attributesToRetrieve?: readonly string[];
    /**
     * Controls the way results are sorted.
     */
    readonly ranking?: readonly string[];
    /**
     * Specifies the custom ranking criterion.
     */
    readonly customRanking?: readonly string[];
    /**
     * Creates replicas, exact copies of an index.
     */
    readonly replicas?: readonly string[];
    /**
     * @deprecated Use `replicas` instead.
     */
    readonly slaves?: readonly string[];
    /**
     * The primary parameter is automatically added to a replica's settings when the replica is created and cannot be modified.
     *
     * Can not be setted.
     */
    readonly primary?: string;
    /**
     * Maximum number of facet values to return for each facet during a regular search.
     */
    readonly maxValuesPerFacet?: number;
    /**
     * Controls how facet values are sorted.
     */
    readonly sortFacetValuesBy?: 'count' | 'alpha';
    /**
     * List of attributes to highlight.
     */
    readonly attributesToHighlight?: readonly string[];
    /**
     * List of attributes to snippet, with an optional maximum number of words to snippet.
     */
    readonly attributesToSnippet?: readonly string[];
    /**
     * The HTML string to insert before the highlighted parts in all highlight and snippet results.
     */
    readonly highlightPreTag?: string;
    /**
     * The HTML string to insert after the highlighted parts in all highlight and snippet results.
     */
    readonly highlightPostTag?: string;
    /**
     * String used as an ellipsis indicator when a snippet is truncated.
     */
    readonly snippetEllipsisText?: string;
    /**
     * Restrict highlighting and snippeting to items that matched the query.
     */
    readonly restrictHighlightAndSnippetArrays?: boolean;
    /**
     * Set the number of hits per page.
     */
    readonly hitsPerPage?: number;
    /**
     * Set the maximum number of hits accessible via pagination.
     */
    readonly paginationLimitedTo?: number;
    /**
     * Minimum number of characters a word in the query string must contain to accept matches with 1 typo.
     */
    readonly minWordSizefor1Typo?: number;
    /**
     * Minimum number of characters a word in the query string must contain to accept matches with 2 typos.
     */
    readonly minWordSizefor2Typos?: number;
    /**
     * Controls whether typo tolerance is enabled and how it is applied.
     */
    readonly typoTolerance?: string | boolean;
    /**
     * hether to allow typos on numbers (“numeric tokens”) in the query string.
     */
    readonly allowTyposOnNumericTokens?: boolean;
    /**
     * List of attributes on which you want to disable typo tolerance.
     */
    readonly disableTypoToleranceOnAttributes?: readonly string[];
    /**
     * List of words on which you want to disable typo tolerance.
     */
    readonly disableTypoToleranceOnWords?: readonly string[];
    /**
     * Control which separators are indexed.
     */
    readonly separatorsToIndex?: string;
    /**
     * Treats singular, plurals, and other forms of declensions as matching terms.
     */
    readonly ignorePlurals?: readonly string[] | boolean;
    /**
     * Sets the languages to be used by language-specific settings and functionalities such as ignorePlurals, removeStopWords, and CJK word-detection.
     */
    readonly queryLanguages?: readonly string[];
    /**
     * A list of language ISO code.
     */
    readonly indexLanguages?: readonly string[];
    /**
     * Whether rules should be globally enabled.
     */
    readonly enableRules?: boolean;
    /**
     * Controls if and how query words are interpreted as prefixes.
     */
    readonly queryType?: 'prefixLast' | 'prefixAll' | 'prefixNone';
    /**
     * Selects a strategy to remove words from the query when it doesn’t match any hits.
     */
    readonly removeWordsIfNoResults?: 'none' | 'lastWords' | 'firstWords' | 'allOptional';
    /**
     * Enables the advanced query syntax.
     */
    readonly advancedSyntax?: boolean;
    /**
     * AdvancedSyntaxFeatures can be exactPhrase or excludeWords
     */
    readonly advancedSyntaxFeatures?: ReadonlyArray<'exactPhrase' | 'excludeWords'>;
    /**
     * A list of words that should be considered as optional when found in the query.
     */
    readonly optionalWords?: readonly string[];
    /**
     * List of attributes on which you want to disable prefix matching.
     */
    readonly disablePrefixOnAttributes?: readonly string[];
    /**
     * List of attributes on which you want to disable the exact ranking criterion.
     */
    readonly disableExactOnAttributes?: readonly string[];
    /**
     * Controls how the exact ranking criterion is computed when the query contains only one word.
     */
    readonly exactOnSingleWordQuery?: 'attribute' | 'none' | 'word';
    /**
     * List of alternatives that should be considered an exact match by the exact ranking criterion.
     */
    readonly alternativesAsExact?: ReadonlyArray<'ignorePlurals' | 'singleWordSynonym' | 'multiWordsSynonym'>;
    /**
     * Removes stop (common) words from the query before executing it.
     */
    readonly removeStopWords?: boolean | readonly string[];
    /**
     * List of numeric attributes that can be used as numerical filters.
     */
    readonly numericAttributesForFiltering?: readonly string[];
    /**
     * Enables compression of large integer arrays.
     */
    readonly allowCompressionOfIntegerArray?: boolean;
    /**
     * Name of the de-duplication attribute to be used with the distinct feature.
     */
    readonly attributeForDistinct?: string;
    /**
     * Enables de-duplication or grouping of results.
     */
    readonly distinct?: boolean | number;
    /**
     * Whether to highlight and snippet the original word that matches the synonym or the synonym itself.
     */
    readonly replaceSynonymsInHighlight?: boolean;
    /**
     * Allows proximity to impact which searchable attribute is matched in the attribute ranking stage.
     */
    readonly attributeCriteriaComputedByMinProximity?: boolean;
    /**
     * Precision of the proximity ranking criterion.
     */
    readonly minProximity?: number;
    /**
     * Choose which fields the response will contain. Applies to search and browse queries.
     */
    readonly responseFields?: readonly string[];
    /**
     * Maximum number of facet hits to return during a search for facet values.
     */
    readonly maxFacetHits?: number;
    /**
     * List of attributes on which to do a decomposition of camel case words.
     */
    readonly camelCaseAttributes?: readonly string[];
    /**
     * Specify on which attributes in your index Algolia should apply word-splitting (“decompounding”)
     */
    readonly decompoundedAttributes?: Readonly<Record<string, readonly string[]>>;
    /**
     * Characters that should not be automatically normalized by the search engine.
     */
    readonly keepDiacriticsOnCharacters?: string;
    /**
     * Overrides Algolia's default normalization.
     */
    readonly customNormalization?: Readonly<Record<string, Readonly<Record<string, string>>>>;
    /**
     * Enable personalization for queries by default
     */
    readonly enablePersonalization?: boolean;
    /**
     * Custom userData that could be added to the Settings.
     */
    readonly userData?: any;
    /**
     * Enable word segmentation (also called decompounding) at query time for
     * compatible languages. For example, this turns the Dutch query
     * "spaanplaatbehang" into "spaan plaat behang" to retrieve more relevant
     * results.
     */
    readonly decompoundQuery?: boolean;
    /**
     * Specify on which attributes in your index Algolia should apply Japanese
     * transliteration to make words indexed in Katakana or Kanji searchable in Hiragana.
     */
    readonly attributesToTransliterate?: readonly string[];
    /**
     * The relevancy threshold to apply to search in a virtual index [0-100]. A Bigger
     * value means fewer, but more relevant results, smaller value means more, but
     * less relevant results.
     */
    readonly relevancyStrictness?: number;
    /**
     * The search mode that the index will use to query for results.
     */
    readonly mode?: 'neuralSearch' | 'keywordSearch';
    /**
     * The settings relevant for configuration of the semantic search engine.
     * These settings are only used when the mode is set to 'neuralSearch'.
     */
    readonly semanticSearch?: {
        /**
         * When null, the current index / replica group will be used as the event source.
         */
        readonly eventSources?: readonly string[] | null;
    };
    /**
     * Content defining how the search interface should be rendered.
     * This is set via the settings for a default value and can be overridden via rules
     */
    readonly renderingContent?: {
        /**
         * defining how facets should be ordered
         */
        readonly facetOrdering?: {
            /**
             * the ordering of facets (widgets)
             */
            readonly facets?: {
                /**
                 * pinned order of facet lists
                 */
                readonly order?: readonly string[];
            };
            /**
             * the ordering of facet values, within an individual list
             */
            readonly values?: {
                readonly [facet: string]: {
                    /**
                     * Hide facet values
                     */
                    readonly hide?: readonly string[];
                    /**
                     * pinned order of facet values
                     */
                    readonly order?: readonly string[];
                    /**
                     * How to display the remaining items.
                     * - facet count (descending)
                     * - alphabetical (ascending)
                     * - hidden (show only pinned values)
                     */
                    readonly sortRemainingBy?: 'count' | 'alpha' | 'hidden';
                };
            };
        };
        /**
         * Defining UI widget configuration
         */
        readonly widgets?: {
            /**
             * Configuration for banners
             */
            readonly banners?: ReadonlyArray<{
                /**
                 * Configuration for the banner image
                 */
                readonly image: {
                    /**
                     * Set of possible URLs of the banner image
                     */
                    readonly urls: ReadonlyArray<{
                        /**
                         * URL of the banner image
                         */
                        readonly url: string;
                    }>;
                    /**
                     * Alt text of the banner image
                     */
                    readonly title?: string;
                };
                /**
                 * Configuration for the banner click navigation
                 */
                readonly link?: {
                    /**
                     * URL to navigate to when the banner is clicked
                     */
                    readonly url?: string;
                    /**
                     * Target of the navigation
                     * - `_blank` opens the URL in a new tab
                     * - `_self` opens the URL in the same tab
                     */
                    readonly target?: '_blank' | '_self';
                };
            }>;
        };
    };
    /**
     * Whether this index should use Dynamic Re-Ranking.
     * @link https://www.algolia.com/doc/guides/algolia-ai/re-ranking/
     *
     * Note: You need to turn on Dynamic Re-Ranking on your index for it to have an effect on
     * your search results. You can do this through the Re-Ranking page on the dashboard.
     */
    readonly enableReRanking?: boolean;
    /**
     * When Dynamic Re-Ranking is enabled, only records that match these filters will be impacted by Dynamic Re-Ranking.
     */
    readonly reRankingApplyFilter?: string | readonly string[] | ReadonlyArray<readonly string[] | string> | null;
};

declare type SharedMultipleQueriesQuery = {
    /**
     * The type of query to perform.
     *
     * @defaultValue "default"
     */
    readonly type?: 'default' | 'facet';
    /**
     * The index name.
     */
    readonly indexName: string;
    /**
     * The search options.
     */
    readonly params?: SearchOptions;
    /**
     * The query associated with the request.
     */
    readonly query?: string;
};

declare type SnippetMatch = {
    readonly value: string;
    readonly matchLevel: 'none' | 'partial' | 'full';
};

export declare type SnippetResult<THit> = THit extends string | number ? SnippetMatch : {
    [KAttribute in keyof THit]: SnippetResult<THit[KAttribute]>;
};

export declare const StrategyEnum: Readonly<Record<string, StrategyType>>;

export declare type StrategyType = 'none' | 'stopIfEnoughMatches';

export declare type Synonym = {
    /**
     *  Synonym object ID.
     */
    readonly objectID: string;
    /**
     * There are 4 synonym types. The parameter can be one of the following value.
     */
    readonly type: SynonymType;
    /**
     * A list of synonyms.
     */
    readonly synonyms?: readonly string[];
    /**
     * Defines the synonym. A word or expression, used as the basis for the array of synonyms.
     */
    readonly input?: string;
    /**
     * A single word, used as the basis for the below array of corrections.
     */
    readonly word?: string;
    /**
     * An list of corrections of the word.
     */
    readonly corrections?: readonly string[];
    /**
     * A single word, used as the basis for the below list of replacements.
     */
    readonly placeholder?: string;
    /**
     * An list of replacements of the placeholder.
     */
    readonly replacements?: readonly string[];
};

export declare const SynonymEnum: Readonly<Record<string, SynonymType>>;

export declare type SynonymType = 'synonym' | 'oneWaySynonym' | 'altCorrection1' | 'altCorrection2' | 'placeholder';

export declare type TaskStatusResponse = {
    /**
     * The operation status. When the value is `published` the
     * operation is completed.
     */
    status: string;
    /**
     * If the operation is pending.
     */
    pendingTask: boolean;
};

export declare type TimeRange = {
    /**
     * DateTime with UTC offset for Serialization/Deserialization in unix timespan.
     */
    readonly from: number;
    /**
     * DateTime with UTC offset for Serialization/Deserialization in unix timespan.
     */
    readonly until: number;
};

export declare const updateApiKey: (base: SearchClient) => (apiKey: string, requestOptions?: (UpdateApiKeyOptions & Pick<RequestOptions, string | number>) | undefined) => Readonly<WaitablePromise<UpdateApiKeyResponse>>;

export declare type UpdateApiKeyOptions = {
    /**
     * List of permissions the key contains.
     */
    readonly acl?: readonly ApiKeyACLType[];
    /**
     * A Unix timestamp used to define the expiration date of the API key.
     */
    readonly validity?: number;
    /**
     * Specify the maximum number of hits this API key can retrieve in one call.
     * This parameter can be used to protect you from attempts at retrieving your entire index contents by massively querying the index.
     */
    readonly maxHitsPerQuery?: number;
    /**
     * Specify the maximum number of API calls allowed from an IP address per hour. Each time an API call is performed with this key, a check is performed.
     */
    readonly maxQueriesPerIPPerHour?: number;
    /**
     * Specify the list of targeted indices. You can target all indices starting with a prefix or ending with a suffix using the ‘*’ character.
     */
    readonly indexes?: readonly string[];
    /**
     * Specify the list of referers. You can target all referers starting with a prefix, ending with a suffix using the ‘*’ character.
     */
    readonly referers?: readonly string[];
    /**
     * Specify the list of query parameters. You can force the query parameters for a query using the url string format.
     */
    readonly queryParameters?: string;
    /**
     * Specify a description of the API key. Used for informative purposes only. It has impact on the functionality of the API key.
     */
    readonly description?: string;
};

export declare type UpdateApiKeyResponse = {
    /**
     * The api key.
     */
    key: string;
    /**
     * Date of update
     */
    updatedAt: string;
};

export declare type UserIDResponse = {
    /**
     * userID of the user.
     */
    userID: string;
    /**
     * Cluster on which the user is assigned
     */
    clusterName: string;
    /**
     * Number of records belonging to the user.
     */
    nbRecords: number;
    /**
     * Data size used by the user.
     */
    dataSize: number;
};

export declare const waitAppTask: (base: SearchClient) => (taskID: number, requestOptions?: RequestOptions | undefined) => Readonly<Promise<void>>;

export declare const waitTask: (base: SearchIndex) => (taskID: number, requestOptions?: RequestOptions | undefined) => Readonly<Promise<void>>;

export { }
