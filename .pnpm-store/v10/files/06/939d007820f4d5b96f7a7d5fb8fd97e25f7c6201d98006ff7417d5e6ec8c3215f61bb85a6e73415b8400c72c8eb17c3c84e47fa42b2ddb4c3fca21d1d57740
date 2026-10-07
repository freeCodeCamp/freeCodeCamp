import EventEmitter from '@algolia/events';

// eslint-disable-next-line typescript/consistent-type-imports
import type {
  FindAnswersResponse,
  FrequentlyBoughtTogetherQuery,
  HighlightResult,
  LookingSimilarQuery,
  RankingInfo,
  RecommendResponse,
  RelatedProductsQuery,
  SearchClient,
  SearchOptions,
  SearchResponse,
  SnippetResult,
  SupportedLanguage,
  TrendingFacetsQuery,
  TrendingItemsQuery,
  PlainRecommendParameters as ClientPlainRecommendParameters,
  CompositionClient,
} from './types/algoliasearch';

/**
 * The algoliasearchHelper module is the function that will let its
 * contains everything needed to use the Algoliasearch
 * Helper. It is a also a function that instantiate the helper.
 * To use the helper, you also need the Algolia JS client v3.
 * @param client an AlgoliaSearch client
 * @param index the name of the index to query
 * @param opts
 * @param searchResultsOptions
 */
declare function algoliasearchHelper(
  client: SearchClient | CompositionClient,
  index: string,
  opts?: algoliasearchHelper.PlainSearchParameters,
  searchResultsOptions?: algoliasearchHelper.SearchResultsOptions
): algoliasearchHelper.AlgoliaSearchHelper;

declare namespace algoliasearchHelper {
  export const version: string;

  export class AlgoliaSearchHelper extends EventEmitter {
    state: SearchParameters;
    recommendState: RecommendParameters;
    lastResults: SearchResults | null;
    lastRecommendResults: RecommendResults | null;
    _recommendCache: RecommendResults['_rawResults'];
    derivedHelpers: DerivedHelper[];

    on(
      event: 'search',
      cb: (res: { state: SearchParameters; results: SearchResults }) => void
    ): this;
    on(
      event: 'change',
      cb: (res: {
        state: SearchParameters;
        results: SearchResults;
        isPageReset: boolean;
      }) => void
    ): this;
    on(
      event: 'searchForFacetValues',
      cb: (res: {
        state: SearchParameters;
        facet: string;
        query: string;
      }) => void
    ): this;
    on(
      event: 'searchOnce',
      cb: (res: { state: SearchParameters }) => void
    ): this;
    on(
      event: 'result',
      cb: (res: { results: SearchResults; state: SearchParameters }) => void
    ): this;
    on(event: 'error', cb: (res: { error: Error }) => void): this;
    on(event: 'searchQueueEmpty', cb: () => void): this;

    /**
     * Start the search with the parameters set in the state. When the
     * method is called, it triggers a `search` event. The results will
     * be available through the `result` event. If an error occurs, an
     * `error` will be fired instead.
     * @return
     * @fires search
     * @fires result
     * @fires error
     * @chainable
     */
    search(): this;

    recommend(): this;

    /**
     * Private method to only search on derived helpers
     */
    searchOnlyWithDerivedHelpers(): this;

    /**
     * Private method to search using composition API
     */
    searchWithComposition(): this;

    /**
     * Private method for search, without triggering events
     */
    searchWithoutTriggeringOnStateChange(): this;

    /**
     * Gets the search query parameters that would be sent to the Algolia Client
     * for the hits
     */
    getQuery(): SearchOptions;

    /**
     * Start a search using a modified version of the current state. This method does
     * not trigger the helper lifecycle and does not modify the state kept internally
     * by the helper. This second aspect means that the next search call will be the
     * same as a search call before calling searchOnce.
     * @param options can contain all the parameters that can be set to SearchParameters
     * plus the index
     * @param [callback] optional callback executed when the response from the
     * server is back.
     * @return if a callback is passed the method returns undefined
     * otherwise it returns a promise containing an object with two keys :
     *  - content with a SearchResults
     *  - state with the state used for the query as a SearchParameters
     * @example
     * // Changing the number of records returned per page to 1
     * // This example uses the callback API
     * var state = helper.searchOnce({hitsPerPage: 1},
     *   function(error, content, state) {
     *     // if an error occurred it will be passed in error, otherwise its value is null
     *     // content contains the results formatted as a SearchResults
     *     // state is the instance of SearchParameters used for this search
     *   });
     * @example
     * // Changing the number of records returned per page to 1
     * // This example uses the promise API
     * var state1 = helper.searchOnce({hitsPerPage: 1})
     *                 .then(promiseHandler);
     *
     * function promiseHandler(res) {
     *   // res contains
     *   // {
     *   //   content : SearchResults
     *   //   state   : SearchParameters (the one used for this specific search)
     *   // }
     * }
     */
    searchOnce(
      options: PlainSearchParameters
    ): Promise<{ content: SearchResults; state: SearchParameters }>;
    searchOnce(
      options: PlainSearchParameters,
      cb: (
        error: Error,
        content: SearchResults,
        state: SearchParameters
      ) => void
    ): void;

    /**
     * Start the search for answers with the parameters set in the state.
     * This method returns a promise.
     * @param {Object} options - the options for answers API call
     * @param {string[]} options.attributesForPrediction - Attributes to use for predictions. If empty, `searchableAttributes` is used instead.
     * @param {string[]} options.queryLanguages - The languages in the query. Currently only supports ['en'].
     * @param {number} options.nbHits - Maximum number of answers to retrieve from the Answers Engine. Cannot be greater than 1000.
     * @deprecated answers is deprecated and will be replaced with new initiatives
     */
    findAnswers<TObject>(options: {
      attributesForPrediction: string[];
      queryLanguages: string[];
      nbHits: number;
    }): Promise<FindAnswersResponse<TObject>>;

    /**
     * Search for facet values based on an query and the name of a faceted attribute. This
     * triggers a search and will return a promise. On top of using the query, it also sends
     * the parameters from the state so that the search is narrowed down to only the possible values.
     *
     * See the description of [FacetSearchResult](reference.html#FacetSearchResult)
     * @param facet the name of the faceted attribute
     * @param query the string query for the search
     * @param [maxFacetHits] the maximum number values returned. Should be > 0 and <= 100
     * @param [userState] the set of custom parameters to use on top of the current state. Setting a property to `undefined` removes
     * it in the generated query.
     * @return the results of the search
     */
    searchForFacetValues(
      facet: string,
      query: string,
      maxFacetHits: number,
      userState?: PlainSearchParameters
    ): Promise<SearchForFacetValues.Result>;

    /**
     * Search for facet values using the Composition API & based on a query and the name of a faceted attribute.
     * This triggers a search and will return a promise. On top of using the query, it also sends
     * the parameters from the state so that the search is narrowed down to only the possible values.
     *
     * See the description of [FacetSearchResult](reference.html#FacetSearchResult)
     * @param facet the name of the faceted attribute
     * @param query the string query for the search
     * @param [maxFacetHits] the maximum number values returned. Should be > 0 and <= 100
     * @param [userState] the set of custom parameters to use on top of the current state. Setting a property to `undefined` removes
     * it in the generated query.
     * @return the results of the search
     */
    searchForCompositionFacetValues(
      facet: string,
      query: string,
      maxFacetHits: number,
      userState?: PlainSearchParameters
    ): Promise<SearchForFacetValues.Result>;

    /**
     * Sets the text query used for the search.
     *
     * This method resets the current page to 0.
     * @param  q the user query
     * @return
     * @fires change
     * @chainable
     */
    setQuery(q: string): this;

    /**
     * Remove all the types of refinements except tags. A string can be provided to remove
     * only the refinements of a specific attribute. For more advanced use case, you can
     * provide a function instead. This function should follow the
     * [clearCallback definition](#SearchParameters.clearCallback).
     *
     * This method resets the current page to 0.
     * @param [name] optional name of the facet / attribute on which we want to remove all refinements
     * @return
     * @fires change
     * @chainable
     * @example
     * // Removing all the refinements
     * helper.clearRefinements().search();
     * @example
     * // Removing all the filters on a the category attribute.
     * helper.clearRefinements('category').search();
     * @example
     * // Removing only the exclude filters on the category facet.
     * helper.clearRefinements(function(value, attribute, type) {
     *   return type === 'exclude' && attribute === 'category';
     * }).search();
     */
    clearRefinements(name?: string): this;
    clearRefinements(
      func: (value: any, attribute: string, type: string) => boolean
    ): this;

    /**
     * Remove all the tag filters.
     *
     * This method resets the current page to 0.
     * @return
     * @fires change
     * @chainable
     */
    clearTags(): this;

    /**
     * Updates the name of the index that will be targeted by the query.
     *
     * This method resets the current page to 0.
     * @param name the index name
     * @return
     * @fires change
     * @chainable
     */
    setIndex(name: string): this;

    addDisjunctiveFacetRefinement(facet: string, value: string): this;
    /**
     * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addDisjunctiveFacetRefinement}
     */
    addDisjunctiveRefine(facet: string, value: string): this;
    addHierarchicalFacetRefinement(facet: string, path: string): this;
    addNumericRefinement(
      facet: string,
      operator?: SearchParameters.Operator,
      value?: number | number[]
    ): this;
    addFacetRefinement(facet: string, value: string): this;
    /**
     * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addFacetRefinement}
     */
    addRefine: AlgoliaSearchHelper['addFacetRefinement'];
    addFacetExclusion(facet: string, value: string): this;
    /**
     * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addFacetExclusion}
     */
    addExclude: AlgoliaSearchHelper['addFacetExclusion'];
    addTag(tag: string): this;
    addFrequentlyBoughtTogether(
      params: RecommendParametersWithId<FrequentlyBoughtTogetherQuery>
    ): this;
    addRelatedProducts(
      params: RecommendParametersWithId<RelatedProductsQuery>
    ): this;
    addTrendingItems(
      params: RecommendParametersWithId<TrendingItemsQuery>
    ): this;
    addTrendingFacets(
      params: RecommendParametersWithId<TrendingFacetsQuery>
    ): this;
    addLookingSimilar(
      params: RecommendParametersWithId<LookingSimilarQuery>
    ): this;
    removeNumericRefinement(
      facet: string,
      operator?: SearchParameters.Operator,
      value?: number | number[]
    ): this;
    removeDisjunctiveFacetRefinement(facet: string, value?: string): this;
    /**
     * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeDisjunctiveFacetRefinement}
     */
    removeDisjunctiveRefine(facet: string, value?: string): this;
    removeHierarchicalFacetRefinement(facet: string): this;
    removeFacetRefinement(facet: string, value?: string): this;
    /**
     * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeFacetRefinement}
     */
    removeRefine(facet: string, value: string): this;
    removeFacetExclusion(facet: string, value: string): this;
    /**
     * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeFacetExclusion}
     */
    removeExclude(facet: string, value: string): this;
    removeTag(value: string): this;
    removeFrequentlyBoughtTogether(id: number): this;
    removeRelatedProducts(id: number): this;
    removeTrendingItems(id: number): this;
    removeTrendingFacets(id: number): this;
    removeLookingSimilar(id: number): this;
    toggleFacetExclusion(facet: string, value: string): this;
    /**
     * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#toggleFacetExclusion}
     */
    toggleExclude(facet: string, value: string): this;
    toggleFacetRefinement(facet: string, value: string): this;
    /**
     * @deprecated since version 2.19.0, see {@link AlgoliaSearchHelper#toggleFacetRefinement}
     */
    toggleRefinement(facet: string, value: string): this;
    /**
     * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#toggleFacetRefinement}
     */
    toggleRefine(facet: string, value: string): this;
    toggleTag(tag: string): this;
    nextPage(): this;
    previousPage(): this;
    setPage(page: number): this;
    /**
     * @deprecated
     */
    setCurrentPage(page: number): this;
    setQueryParameter<SearchParameter extends keyof PlainSearchParameters>(
      parameter: SearchParameter,
      value: PlainSearchParameters[SearchParameter]
    ): this;

    /**
     * Set the whole state (warning: will erase previous state)
     * @param newState the whole new state
     * @return
     * @fires change
     * @chainable
     */
    setState(newState: PlainSearchParameters): this;

    overrideStateWithoutTriggeringChangeEvent: AlgoliaSearchHelper['setState'];
    hasRefinements(facet: string): boolean;
    isExcluded: SearchParameters['isExcludeRefined'];
    /**
     * @deprecated since 2.4.0, see {@link AlgoliaSearchHelper#hasRefinements}
     */
    isDisjunctiveRefined: SearchParameters['isDisjunctiveFacetRefined'];
    hasTag: SearchParameters['isTagRefined'];
    /**
     * @deprecated since 2.4.0, see {@link AlgoliaSearchHelper#hasTag}
     */
    isTagRefined: SearchParameters['isTagRefined'];
    getIndex(): string;
    /**
     * @deprecated
     */
    getCurrentPage(): number;
    getPage(): number;
    getTags(): string[];
    getRefinements(facetName: string): any[];
    getNumericRefinement: SearchParameters['getNumericRefinement'];
    getHierarchicalFacetBreadcrumb: SearchParameters['getHierarchicalFacetBreadcrumb'];
    /**
     * @deprecated
     */
    containsRefinement(...any: any[]): any;
    clearCache(): this;
    setClient(client: SearchClient | CompositionClient): this;
    getClient(): SearchClient | CompositionClient;
    derive(
      deriveFn: (oldParams: SearchParameters) => SearchParameters,
      deriveRecommendFn?: (
        oldParams: RecommendParameters
      ) => RecommendParameters
    ): DerivedHelper;
    detachDerivedHelper(derivedHelper: DerivedHelper): void;
    hasPendingRequests(): boolean;
  }

  interface DerivedHelper extends EventEmitter {
    on(
      event: 'search',
      cb: (res: { state: SearchParameters; results: SearchResults }) => void
    ): this;
    on(
      event: 'result',
      cb: (res: { results: SearchResults; state: SearchParameters }) => void
    ): this;
    on(
      event: 'recommend:result',
      cb: (res: {
        recommend: {
          results: RecommendResults | null;
          state: RecommendParameters;
        };
      }) => void
    ): this;
    on(event: 'error', cb: (res: { error: Error }) => void): this;

    lastResults: SearchResults | null;
    lastRecommendResults: RecommendResults | null;
    detach(): void;
    getModifiedState(): SearchParameters;
    getModifiedRecommendState(): RecommendParameters;
  }

  namespace SearchForFacetValues {
    /**
     * Structure of each result when using
     * [`searchForFacetValues()`](reference.html#AlgoliaSearchHelper#searchForFacetValues)
     */
    export interface Hit {
      value: string;
      escapedValue: string;
      highlighted: string;
      count: number;
      isRefined: boolean;
    }

    /**
     * Structure of the data resolved by the
     * [`searchForFacetValues()`](reference.html#AlgoliaSearchHelper#searchForFacetValues)
     * promise.
     */
    export interface Result {
      facetHits: Hit[];
      processingTimeMS: number;
    }
  }

  export interface PlainSearchParameters extends SearchOptions {
    /**
     * Targeted index. This parameter is mandatory.
     */
    index?: string;
    /**
     * This attribute contains the list of all the disjunctive facets
     * used. This list will be added to requested facets in the
     * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
     */
    disjunctiveFacets?: string[];
    /**
     * This attribute contains the list of all the hierarchical facets
     * used. This list will be added to requested facets in the
     * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
     * Hierarchical facets are a sub type of disjunctive facets that
     * let you filter faceted attributes hierarchically.
     */
    hierarchicalFacets?: SearchParameters.HierarchicalFacet[];

    // Refinements
    /**
     * This attribute contains all the filters that need to be
     * applied on the conjunctive facets. Each facet must be properly
     * defined in the `facets` attribute.
     *
     * The key is the name of the facet, and the `FacetList` contains all
     * filters selected for the associated facet name.
     *
     * When querying algolia, the values stored in this attribute will
     * be translated into the `facetFilters` attribute.
     */
    facetsRefinements?: { [facet: string]: SearchParameters.FacetList };
    /**
     * This attribute contains all the filters that need to be
     * excluded from the conjunctive facets. Each facet must be properly
     * defined in the `facets` attribute.
     *
     * The key is the name of the facet, and the `FacetList` contains all
     * filters excluded for the associated facet name.
     *
     * When querying algolia, the values stored in this attribute will
     * be translated into the `facetFilters` attribute.
     */
    facetsExcludes?: { [facet: string]: SearchParameters.FacetList };
    /**
     * This attribute contains all the filters that need to be
     * applied on the disjunctive facets. Each facet must be properly
     * defined in the `disjunctiveFacets` attribute.
     *
     * The key is the name of the facet, and the `FacetList` contains all
     * filters selected for the associated facet name.
     *
     * When querying algolia, the values stored in this attribute will
     * be translated into the `facetFilters` attribute.
     */
    disjunctiveFacetsRefinements?: {
      [facet: string]: SearchParameters.FacetList;
    };
    /**
     * This attribute contains all the filters that need to be
     * applied on the numeric attributes.
     *
     * The key is the name of the attribute, and the value is the
     * filters to apply to this attribute.
     *
     * When querying algolia, the values stored in this attribute will
     * be translated into the `numericFilters` attribute.
     */
    numericRefinements?: { [facet: string]: SearchParameters.OperatorList };
    /**
     * This attribute contains all the tags used to refine the query.
     *
     * When querying algolia, the values stored in this attribute will
     * be translated into the `tagFilters` attribute.
     */
    tagRefinements?: string[];
    /**
     * This attribute contains all the filters that need to be
     * applied on the hierarchical facets. Each facet must be properly
     * defined in the `hierarchicalFacets` attribute.
     *
     * The key is the name of the facet, and the `FacetList` contains all
     * filters selected for the associated facet name. The FacetList values
     * are structured as a string that contain the values for each level
     * separated by the configured separator.
     *
     * When querying algolia, the values stored in this attribute will
     * be translated into the `facetFilters` attribute.
     */
    hierarchicalFacetsRefinements?: {
      [facet: string]: SearchParameters.FacetList;
    };

    // types missing in @types/algoliasearch, so duplicated from v4
    ruleContexts?: string[];
    optionalFilters?: Array<string | string[]>;
    queryLanguages?: SupportedLanguage[];

    /**
     * The relevancy threshold to apply to search in a virtual index [0-100]. A bigger
     * value means fewer but more relevant results, a smaller value means more but
     * less relevant results.
     */
    relevancyStrictness?: number;

    /**
     * The sorting strategy to use in composition mode.
     * Only available when using the Composition API.
     */
    sortBy?: string;
  }

  export class SearchParameters implements PlainSearchParameters {
    managedParameters: [
      'index',

      'facets',
      'disjunctiveFacets',
      'facetsRefinements',
      'hierarchicalFacets',
      'facetsExcludes',

      'disjunctiveFacetsRefinements',
      'numericRefinements',
      'tagRefinements',
      'hierarchicalFacetsRefinements'
    ];

    constructor(newParameters?: PlainSearchParameters);

    /* Add a disjunctive facet to the disjunctiveFacets attribute of the helper configuration, if it isn't already present. */
    addDisjunctiveFacet(facet: string): SearchParameters;
    /* Adds a refinement on a disjunctive facet. */
    addDisjunctiveFacetRefinement(
      facet: string,
      value: string
    ): SearchParameters;
    /* Exclude a value from a "normal" facet */
    addExcludeRefinement(facet: string, value: string): SearchParameters;
    /* Add a facet to the facets attribute of the helper configuration, if it isn't already present. */
    addFacet(facet: string): SearchParameters;
    /* Add a refinement on a "normal" facet */
    addFacetRefinement(facet: string, value: string): SearchParameters;
    addHierarchicalFacet(
      facet: SearchParameters.HierarchicalFacet
    ): SearchParameters;
    addHierarchicalFacetRefinement(
      facet: string,
      path: string
    ): SearchParameters;
    addNumericRefinement(
      attribute: string,
      operator: SearchParameters.Operator,
      value: number | number[]
    ): SearchParameters;
    addTagRefinement(tag: string): SearchParameters;
    clearRefinements(
      attribute?:
        | string
        | ((value: any, attribute: string, type: string) => void)
    ): SearchParameters;
    clearTags(): SearchParameters;
    getConjunctiveRefinements(facetName: string): string[];
    getDisjunctiveRefinements(facetName: string): string[];
    getExcludeRefinements(facetName: string): string[];
    getHierarchicalFacetBreadcrumb(facetName: string): string[];
    getHierarchicalFacetByName(hierarchicalFacetName: string): any;
    getHierarchicalRefinement(facetName: string): string[];
    getNumericRefinements(facetName: string): SearchParameters.OperatorList;
    getNumericRefinement(
      attribute: string,
      operator: SearchParameters.Operator
    ): Array<number | number[]>;
    getQueryParams(): SearchOptions;
    getRefinedDisjunctiveFacets(facet: string, value: any): string[];
    getRefinedHierarchicalFacets(facet: string, value: any): string[];
    getUnrefinedDisjunctiveFacets(): string[];
    isConjunctiveFacet(facet: string): boolean;
    isDisjunctiveFacetRefined(facet: string, value?: string): boolean;
    isDisjunctiveFacet(facet: string): boolean;
    isExcludeRefined(facet: string, value?: string): boolean;
    isFacetRefined(facet: string, value?: string): boolean;
    isHierarchicalFacetRefined(facet: string, value?: string): boolean;
    isHierarchicalFacet(facet: string): boolean;
    isNumericRefined(
      attribute: string,
      operator?: SearchParameters.Operator,
      value?: string
    ): boolean;
    isTagRefined(tag: string): boolean;
    static make(newParameters: PlainSearchParameters): SearchParameters;
    removeExcludeRefinement(facet: string, value: string): SearchParameters;
    removeFacet(facet: string): SearchParameters;
    removeFacetRefinement(facet: string, value?: string): SearchParameters;
    removeDisjunctiveFacet(facet: string): SearchParameters;
    removeDisjunctiveFacetRefinement(
      facet: string,
      value?: string
    ): SearchParameters;
    removeHierarchicalFacet(facet: string): SearchParameters;
    removeHierarchicalFacetRefinement(facet: string): SearchParameters;
    removeNumericRefinement(
      attribute: string,
      operator?: string,
      value?: string
    ): SearchParameters;
    removeTagRefinement(tag: string): SearchParameters;
    resetPage(): SearchParameters;
    setDisjunctiveFacets(facets: string[]): SearchParameters;
    setFacets(facets: string[]): SearchParameters;
    setHitsPerPage(n: number): SearchParameters;
    setIndex(index: string): SearchParameters;
    setPage(newPage: number): SearchParameters;
    setQueryParameters(params: PlainSearchParameters): SearchParameters;
    setQueryParameter<SearchParameter extends keyof PlainSearchParameters>(
      parameter: SearchParameter,
      value: PlainSearchParameters[SearchParameter]
    ): SearchParameters;
    setQuery(newQuery: string): SearchParameters;
    setTypoTolerance(typoTolerance: string): SearchParameters;
    toggleDisjunctiveFacetRefinement(
      facet: string,
      value: any
    ): SearchParameters;
    toggleExcludeFacetRefinement(facet: string, value: any): SearchParameters;
    toggleConjunctiveFacetRefinement(
      facet: string,
      value: any
    ): SearchParameters;
    toggleHierarchicalFacetRefinement(
      facet: string,
      value: any
    ): SearchParameters;
    toggleFacetRefinement(facet: string, value: any): SearchParameters;
    toggleTagRefinement(tag: string): SearchParameters;
    static validate(
      currentState: SearchParameters,
      parameters: PlainSearchParameters
    ): null | Error;

    /**
     * implementation of PlainSearchParameters, copied because it's an interface.
     * Notable difference is that the managed search parameters are not optional,
     * ideally this would be Required<ManagedParameters> where ManagedParameters
     * are the following ones.
     */

    /**
     * Targeted index. This parameter is mandatory.
     */
    index: string;
    /**
     * This attribute contains the list of all the disjunctive facets
     * used. This list will be added to requested facets in the
     * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
     */
    disjunctiveFacets: string[];
    /**
     * This attribute contains the list of all the hierarchical facets
     * used. This list will be added to requested facets in the
     * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
     * Hierarchical facets are a sub type of disjunctive facets that
     * let you filter faceted attributes hierarchically.
     */
    hierarchicalFacets: SearchParameters.HierarchicalFacet[];

    // Refinements
    /**
     * This attribute contains all the filters that need to be
     * applied on the conjunctive facets. Each facet must be properly
     * defined in the `facets` attribute.
     *
     * The key is the name of the facet, and the `FacetList` contains all
     * filters selected for the associated facet name.
     *
     * When querying algolia, the values stored in this attribute will
     * be translated into the `facetFilters` attribute.
     */
    facetsRefinements: { [facet: string]: SearchParameters.FacetList };
    /**
     * This attribute contains all the filters that need to be
     * excluded from the conjunctive facets. Each facet must be properly
     * defined in the `facets` attribute.
     *
     * The key is the name of the facet, and the `FacetList` contains all
     * filters excluded for the associated facet name.
     *
     * When querying algolia, the values stored in this attribute will
     * be translated into the `facetFilters` attribute.
     */
    facetsExcludes: { [facet: string]: SearchParameters.FacetList };
    /**
     * This attribute contains all the filters that need to be
     * applied on the disjunctive facets. Each facet must be properly
     * defined in the `disjunctiveFacets` attribute.
     *
     * The key is the name of the facet, and the `FacetList` contains all
     * filters selected for the associated facet name.
     *
     * When querying algolia, the values stored in this attribute will
     * be translated into the `facetFilters` attribute.
     */
    disjunctiveFacetsRefinements: {
      [facet: string]: SearchParameters.FacetList;
    };
    /**
     * This attribute contains all the filters that need to be
     * applied on the numeric attributes.
     *
     * The key is the name of the attribute, and the value is the
     * filters to apply to this attribute.
     *
     * When querying algolia, the values stored in this attribute will
     * be translated into the `numericFilters` attribute.
     */
    numericRefinements: { [facet: string]: SearchParameters.OperatorList };
    /**
     * This attribute contains all the tags used to refine the query.
     *
     * When querying algolia, the values stored in this attribute will
     * be translated into the `tagFilters` attribute.
     */
    tagRefinements: string[];
    /**
     * This attribute contains all the filters that need to be
     * applied on the hierarchical facets. Each facet must be properly
     * defined in the `hierarchicalFacets` attribute.
     *
     * The key is the name of the facet, and the `FacetList` contains all
     * filters selected for the associated facet name. The FacetList values
     * are structured as a string that contain the values for each level
     * separated by the configured separator.
     *
     * When querying algolia, the values stored in this attribute will
     * be translated into the `facetFilters` attribute.
     */
    hierarchicalFacetsRefinements: {
      [facet: string]: SearchParameters.FacetList;
    };

    /* end implementation of PlainSearchParameters */

    /**
     * Implementation of regular search parameters, copied from algoliasearch.QueryParameters
     * Ideally there'd be a way to automatically implement this interface, but that
     * isn't possible.
     */

    /**
     * Query string used to perform the search
     * default: ''
     * https://www.algolia.com/doc/api-reference/api-parameters/query/
     */
    query?: string;
    /**
     * Filter the query with numeric, facet or/and tag filters
     * default: ""
     * https://www.algolia.com/doc/api-reference/api-parameters/filters/
     */
    filters?: string;
    /**
     * A string that contains the list of attributes you want to retrieve in order to minimize the size of the JSON answer.
     * default: *
     * https://www.algolia.com/doc/api-reference/api-parameters/attributesToRetrieve/
     */
    attributesToRetrieve?: string[];
    /**
     * List of attributes you want to use for textual search
     * default: attributeToIndex
     * https://www.algolia.com/doc/api-reference/api-parameters/restrictSearchableAttributes/
     */
    restrictSearchableAttributes?: string[];
    /**
     * You can use facets to retrieve only a part of your attributes declared in attributesForFaceting attributes
     * default: []
     * https://www.algolia.com/doc/api-reference/api-parameters/facets/
     */
    facets?: string[];
    /**
     * Force faceting to be applied after de-duplication (via the Distinct setting).
     * When using the distinct setting in combination with faceting, facet counts may be higher than expected.
     * This is because the engine, by default, computes faceting before applying de-duplication (distinct).
     * When facetingAfterDistinct is set to true, the engine calculates faceting after the de-duplication has been applied.
     * default ""
     * https://www.algolia.com/doc/api-reference/api-parameters/facetingAfterDistinct/
     */
    facetingAfterDistinct?: boolean;
    /**
     * Limit the number of facet values returned for each facet.
     * default: 100
     * https://www.algolia.com/doc/api-reference/api-parameters/maxValuesPerFacet/
     */
    maxValuesPerFacet?: number;
    /**
     * Default list of attributes to highlight. If set to null, all indexed attributes are highlighted.
     * default: null
     * https://www.algolia.com/doc/api-reference/api-parameters/attributesToHighlight/
     */
    attributesToHighlight?: string[];
    /**
     * Default list of attributes to snippet alongside the number of words to return
     * default: null
     * https://www.algolia.com/doc/api-reference/api-parameters/attributesToSnippet/
     */
    attributesToSnippet?: string[];
    /**
     * Specify the string that is inserted before the highlighted parts in the query result
     * default: <em>
     * https://www.algolia.com/doc/api-reference/api-parameters/highlightPreTag/
     */
    highlightPreTag?: string;
    /**
     * Specify the string that is inserted after the highlighted parts in the query result
     * default: </em>
     * https://www.algolia.com/doc/api-reference/api-parameters/highlightPostTag/
     */
    highlightPostTag?: string;
    /**
     * String used as an ellipsis indicator when a snippet is truncated.
     * default: …
     * https://www.algolia.com/doc/api-reference/api-parameters/snippetEllipsisText/
     */
    snippetEllipsisText?: string;
    /**
     * If set to true, restrict arrays in highlights and snippets to items that matched the query at least partially else return all array items in highlights and snippets
     * default: false
     * https://www.algolia.com/doc/api-reference/api-parameters/restrictHighlightAndSnippetArrays/
     */
    restrictHighlightAndSnippetArrays?: boolean;
    /**
     * Pagination parameter used to select the number of hits per page
     * default: 20
     * https://www.algolia.com/doc/api-reference/api-parameters/hitsPerPage/
     */
    hitsPerPage?: number;
    /**
     * Pagination parameter used to select the page to retrieve.
     * default: 0
     * https://www.algolia.com/doc/api-reference/api-parameters/page/
     */
    page?: number;
    /**
     * Offset of the first hit to return
     * default: null
     * https://www.algolia.com/doc/api-reference/api-parameters/offset/
     */
    offset?: number;
    /**
     * Number of hits to return.
     * default: null
     * https://www.algolia.com/doc/api-reference/api-parameters/length/
     */
    length?: number;
    /**
     * The minimum number of characters needed to accept one typo.
     * default: 4
     * https://www.algolia.com/doc/api-reference/api-parameters/minWordSizefor1Typo/
     */
    minWordSizefor1Typo?: number;
    /**
     * The minimum number of characters needed to accept two typo.
     * fault: 8
     * https://www.algolia.com/doc/api-reference/api-parameters/minWordSizefor2Typos/
     */
    minWordSizefor2Typos?: number;
    /**
     * This option allows you to control the number of typos allowed in the result set:
     * default: true
     * 'true' The typo tolerance is enabled and all matching hits are retrieved
     * 'false' The typo tolerance is disabled. All results with typos will be hidden.
     * 'min' Only keep results with the minimum number of typos
     * 'strict' Hits matching with 2 typos are not retrieved if there are some matching without typos.
     * https://www.algolia.com/doc/api-reference/api-parameters/typoTolerance/
     */
    typoTolerance?: boolean;
    /**
     * If set to false, disables typo tolerance on numeric tokens (numbers).
     * default:
     * https://www.algolia.com/doc/api-reference/api-parameters/allowTyposOnNumericTokens/
     */
    allowTyposOnNumericTokens?: boolean;
    /**
     * If set to true, plural won't be considered as a typo
     * default: false
     * https://www.algolia.com/doc/api-reference/api-parameters/ignorePlurals/
     */
    ignorePlurals?: boolean;
    /**
     * List of attributes on which you want to disable typo tolerance
     * default: []
     * https://www.algolia.com/doc/api-reference/api-parameters/disableTypoToleranceOnAttributes/
     */
    disableTypoToleranceOnAttributes?: string[];
    /**
     * Search for entries around a given location
     * default: ""
     * https://www.algolia.com/doc/api-reference/api-parameters/aroundLatLng/
     */
    aroundLatLng?: string;
    /**
     * Search for entries around a given latitude/longitude automatically computed from user IP address.
     * default: ""
     * https://www.algolia.com/doc/api-reference/api-parameters/aroundLatLngViaIP/
     */
    aroundLatLngViaIP?: boolean;
    /**
     * Control the radius associated with a geo search. Defined in meters.
     * default: null
     * You can specify aroundRadius=all if you want to compute the geo distance without filtering in a geo area
     * https://www.algolia.com/doc/api-reference/api-parameters/aroundRadius/
     */
    aroundRadius?: number | 'all';
    /**
     * Control the precision of a geo search
     * default: null
     * https://www.algolia.com/doc/api-reference/api-parameters/aroundPrecision/
     */
    aroundPrecision?: number;
    /**
     * Define the minimum radius used for a geo search when aroundRadius is not set.
     * default: null
     * https://www.algolia.com/doc/api-reference/api-parameters/minimumAroundRadius/
     */
    minimumAroundRadius?: number;
    /**
     * Search entries inside a given area defined by the two extreme points of a rectangle
     * default: null
     * https://www.algolia.com/doc/api-reference/api-parameters/insideBoundingBox/
     */
    insideBoundingBox?: Array<[number, number, number, number]>;
    /**
     * Selects how the query words are interpreted
     * default: 'prefixLast'
     * 'prefixAll' All query words are interpreted as prefixes. This option is not recommended.
     * 'prefixLast' Only the last word is interpreted as a prefix (default behavior).
     * 'prefixNone' No query word is interpreted as a prefix. This option is not recommended.
     * https://www.algolia.com/doc/api-reference/api-parameters/queryType/
     */
    queryType?: 'prefixAll' | 'prefixLast' | 'prefixNone';
    /**
     * Search entries inside a given area defined by a set of points
     * default: ''
     * https://www.algolia.com/doc/api-reference/api-parameters/insidePolygon/
     */
    insidePolygon?: number[][];
    /**
     * This option is used to select a strategy in order to avoid having an empty result page
     * default: 'none'
     * 'lastWords' When a query does not return any results, the last word will be added as optional
     * 'firstWords' When a query does not return any results, the first word will be added as optional
     * 'allOptional' When a query does not return any results, a second trial will be made with all words as optional
     * 'none' No specific processing is done when a query does not return any results
     * https://www.algolia.com/doc/api-reference/api-parameters/removeWordsIfNoResults/
     */
    removeWordsIfNoResults?:
      | 'none'
      | 'lastWords'
      | 'firstWords'
      | 'allOptional';
    /**
     * Enables the advanced query syntax
     * default: false
     * https://www.algolia.com/doc/api-reference/api-parameters/advancedSyntax/
     */
    advancedSyntax?: boolean;
    /**
     * A string that contains the comma separated list of words that should be considered as optional when found in the query
     * default: []
     * https://www.algolia.com/doc/api-reference/api-parameters/optionalWords/
     */
    optionalWords?: string[];
    /**
     * Determines how to calculate the total score for filtering
     * default: false
     * https://www.algolia.com/doc/api-reference/api-parameters/sumOrFiltersScores/
     */
    sumOrFiltersScores?: boolean;
    /**
     * Remove stop words from the query before executing it
     * default: false
     * true|false: enable or disable stop words for all 41 supported languages; or
     * a list of language ISO codes (as a comma-separated string) for which stop words should be enable
     * https://www.algolia.com/doc/api-reference/api-parameters/removeStopWords/
     */
    removeStopWords?: boolean | SupportedLanguage[];
    /**
     * List of attributes on which you want to disable the computation of exact criteria
     * default: []
     * https://www.algolia.com/doc/api-reference/api-parameters/disableExactOnAttributes/
     */
    disableExactOnAttributes?: string[];
    /**
     * This parameter control how the exact ranking criterion is computed when the query contains one word
     * default: attribute
     * 'none': no exact on single word query
     * 'word': exact set to 1 if the query word is found in the record
     * 'attribute': exact set to 1 if there is an attribute containing a string equals to the query
     * https://www.algolia.com/doc/api-reference/api-parameters/exactOnSingleWordQuery/
     */
    exactOnSingleWordQuery?: 'attribute' | 'none' | 'word';
    /**
     * Specify the list of approximation that should be considered as an exact match in the ranking formula
     * default: ['ignorePlurals', 'singleWordSynonym']
     * 'ignorePlurals': alternative words added by the ignorePlurals feature
     * 'singleWordSynonym': single-word synonym (For example "NY" = "NYC")
     * 'multiWordsSynonym': multiple-words synonym
     * https://www.algolia.com/doc/api-reference/api-parameters/alternativesAsExact/
     */
    alternativesAsExact?: Array<
      'ignorePlurals' | 'singleWordSynonym' | 'multiWordsSynonym'
    >;
    /**
     * If set to 1, enables the distinct feature, disabled by default, if the attributeForDistinct index setting is set.
     * https://www.algolia.com/doc/api-reference/api-parameters/distinct/
     */
    distinct?: number | boolean;
    /**
     * If set to true, the result hits will contain ranking information in the _rankingInfo attribute.
     * default: false
     * https://www.algolia.com/doc/api-reference/api-parameters/getRankingInfo/
     */
    getRankingInfo?: boolean;
    /**
     * @deprecated Use `numericAttributesForFiltering` instead
     * All numerical attributes are automatically indexed as numerical filters
     * default: ''
     * https://www.algolia.com/doc/api-reference/api-parameters/numericAttributesForFiltering/
     */
    numericAttributesToIndex?: string[];
    /**
     * All numerical attributes are automatically indexed as numerical filters
     * default: ''
     * https://www.algolia.com/doc/api-reference/api-parameters/numericAttributesForFiltering/
     */
    numericAttributesForFiltering?: string[];
    /**
     * @deprecated please use filters instead
     * A string that contains the comma separated list of numeric filters you want to apply.
     * https://www.algolia.com/doc/api-reference/api-parameters/numericFilters/
     */
    numericFilters?: string[];
    /**
     * @deprecated
     *
     * Filter the query by a set of tags.
     * Default: []
     * https://www.algolia.com/doc/api-reference/api-parameters/tagFilters/
     */
    tagFilters?: string[];
    /**
     * Filter the query by a set of facets.
     * Default: []
     * https://www.algolia.com/doc/api-reference/api-parameters/facetFilters/
     */
    facetFilters?: string[] | string[][];
    /**
     * Create filters for ranking purposes, where records that match the filter are ranked highest
     * default: []
     * https://www.algolia.com/doc/api-reference/api-parameters/optionalFilters/
     */
    optionalFilters?: Array<string | string[]>;
    /**
     * Unique pseudonymous or anonymous user identifier.
     * This helps with analytics and click and conversion events.
     * For more information, see [user token](https://www.algolia.com/doc/guides/sending-events/concepts/usertoken/).
     */
    userToken?: string;
    /**
     * If set to false, this query will not be taken into account in the analytics feature.
     * default true
     * https://www.algolia.com/doc/api-reference/api-parameters/analytics/
     */
    analytics?: boolean;
    /**
     * If set to true, enables the Click Analytics feature
     * default false
     * https://www.algolia.com/doc/api-reference/api-parameters/clickAnalytics/
     */
    clickAnalytics?: boolean;
    /**
     * If set, tag your query with the specified identifiers
     * default: []
     * https://www.algolia.com/doc/api-reference/api-parameters/analyticsTags/
     */
    analyticsTags?: string[];
    /**
     * If set to false, the search will not use the synonyms defined for the targeted index.
     * default: true
     * https://www.algolia.com/doc/api-reference/api-parameters/synonyms/
     */
    synonyms?: boolean;
    /**
     * If set to false, words matched via synonym expansion will not be replaced by the matched synonym in the highlighted result.
     * default: true
     * https://www.algolia.com/doc/api-reference/api-parameters/replaceSynonymsInHighlight/
     */
    replaceSynonymsInHighlight?: boolean;
    /**
     * Configure the precision of the proximity ranking criterion
     * default: 1
     * https://www.algolia.com/doc/api-reference/api-parameters/minProximity/
     */
    minProximity?: number;

    nbShards?: number;
    userData?: string | object;

    /**
     * https://www.algolia.com/doc/api-reference/api-parameters/sortFacetValuesBy/
     */
    sortFacetValuesBy?: 'count' | 'alpha';

    /**
     * The relevancy threshold to apply to search in a virtual index [0-100]. A bigger
     * value means fewer but more relevant results, a smaller value means more but
     * less relevant results.
     */
    relevancyStrictness?: number;

    /**
     * The sorting strategy to use in composition mode.
     * Only available when using the Composition API.
     */
    sortBy?: string;

    /* end implementation of algoliasearch.QueryParameters */

    ruleContexts?: string[];
  }

  namespace SearchParameters {
    type FacetList = string[];

    type HierarchicalFacet = {
      name: string;
      attributes: string[];
      separator?: string;
      rootPath?: string | null;
      showParentLevel?: boolean;
    };

    type OperatorList = {
      [k in Operator]?: Array<number | number[]>;
    };

    type Operator = '=' | '>' | '>=' | '<' | '<=' | '!=';
  }

  export interface SearchResultsOptions {
    /**
     * Marker which can be added to search results to identify them as created without a search response.
     * This is for internal use, e.g., avoiding caching in infinite hits, or delaying the display of these results.
     */
    __isArtificial?: boolean | undefined;
    persistHierarchicalRootCount?: boolean;
  }

  type ISearchResponse<T> = Omit<SearchResponse<T>, 'facets' | 'params'> &
    SearchResultsOptions;

  export class SearchResults<T = any> implements ISearchResponse<T> {
    /**
     * query used to generate the results
     */
    query: string;
    /**
     * A markup text indicating which parts of the original query have been removed in order to retrieve a non-empty result set.
     *
     * Returned when `removeWordsIfNoResults` is set to `lastWords` or `firstWords`.
     */
    queryAfterRemoval?: string;
    /**
     * The query as parsed by the engine given all the rules.
     *
     * Returned only if `getRankingInfo` is set to `true`.
     */
    parsedQuery?: string;
    /**
     * all the records that match the search parameters. Each record is
     * augmented with a new attribute `_highlightResult`
     * which is an object keyed by attribute and with the following properties:
     *  - `value` : the value of the facet highlighted (html)
     *  - `matchLevel`: full, partial or none depending on how the query terms match
     */
    hits: Array<
      T & {
        readonly objectID: string;
        readonly _highlightResult?: HighlightResult<T>;
        readonly _snippetResult?: SnippetResult<T>;
        readonly _rankingInfo?: RankingInfo;
        readonly _distinctSeqID?: number;
      }
    >;
    /**
     * index where the results come from
     */
    index: string;
    /**
     * number of hits per page requested
     */
    hitsPerPage: number;
    /**
     * total number of hits of this query on the index
     */
    nbHits: number;
    /**
     * subset of hits selected when relevancyStrictness is applied
     */
    nbSortedHits?: number;
    /**
     * the relevancy threshold applied to search in a virtual index
     */
    appliedRelevancyStrictness?: number;
    /**
     * total number of pages with respect to the number of hits per page and the total number of hits
     */
    nbPages: number;
    /**
     * current page
     */
    page: number;
    /**
     * sum of the processing time of all the queries
     */
    processingTimeMS: number;
    /**
     * The position if the position was guessed by IP.
     * @example "48.8637,2.3615",
     */
    aroundLatLng: string;
    /**
     * The radius computed by Algolia.
     * @example "126792922",
     */
    automaticRadius: string;
    /**
     * String identifying the server used to serve this request.
     * @example "c7-use-2.algolia.net",
     */
    serverUsed: string;
    /**
     * Boolean that indicates if the computation of the counts did time out.
     * @deprecated
     */
    timeoutCounts: boolean;
    /**
     * Boolean that indicates if the computation of the hits did time out.
     * @deprecated
     */
    timeoutHits: boolean;

    /**
     * True if the counts of the facets is exhaustive
     */
    exhaustiveFacetsCount: boolean;

    /**
     * True if the number of hits is exhaustive
     */
    exhaustiveNbHits: boolean;

    /**
     * Contains the userData if they are set by a [query rule](https://www.algolia.com/doc/guides/query-rules/query-rules-overview/).
     */
    userData: any[];

    /**
     * Content defining how the search interface should be rendered.
     * This is set via the settings for a default value and can be overridden via rules
     */
    renderingContent?: {
      /**
       * defining how facets should be ordered
       */
      facetOrdering?: {
        /**
         * the ordering of facets (widgets)
         */
        facets?: {
          /**
           * Ordered facet lists
           */
          order?: string[];
        };
        /**
         * the ordering of facet values, within an individual list
         */
        values?: {
          [facet: string]: {
            /**
             * Hide facet values
             */
            hide?: string[];
            /**
             * Ordered facet values
             */
            order?: string[];
            /**
             * How to display the remaining items.
             * - facet count (descending)
             * - alphabetical (ascending)
             * - hidden (show only pinned values)
             */
            sortRemainingBy?: 'count' | 'alpha' | 'hidden';
          };
        };
      };
      /**
       * Defining UI widget configuration
       */
      widgets?: {
        /**
         * Configuration for banners
         */
        banners?: Banner[];
      };
    };

    /**
     * queryID is the unique identifier of the query used to generate the current search results.
     * This value is only available if the `clickAnalytics` search parameter is set to `true`.
     */
    queryID?: string;

    /**
     * Used to return warnings about the query.
     */
    message?: string;

    /**
     * If a search encounters an index that is being A/B tested, `abTestID` reports the ongoing A/B test ID.
     *
     * Returned only if `getRankingInfo` is set to `true`.
     */
    abTestID?: number;
    /**
     * In case of AB test, reports the variant ID used. The variant ID is the position in the array of variants (starting at 1).
     *
     * Returned only if `getRankingInfo` is set to `true`.
     */
    abTestVariantID?: number;

    /**
     * disjunctive facets results
     */
    disjunctiveFacets: SearchResults.Facet[];
    /**
     * disjunctive facets results
     */
    hierarchicalFacets: SearchResults.HierarchicalFacet[];

    /**
     * other facets results
     */
    facets: SearchResults.Facet[];

    _automaticInsights?: true;

    _rawResults: Array<SearchResponse<T>>;
    _state: SearchParameters;

    /**
     * Marker which can be added to search results to identify them as created without a search response.
     * This is for internal use, e.g., avoiding caching in infinite hits, or delaying the display of these results.
     */
    __isArtificial?: boolean;

    constructor(
      state: SearchParameters,
      results: Array<SearchResponse<T>>,
      options?: SearchResultsOptions
    );

    /**
     * Get a facet object with its name
     * @deprecated
     * @param name name of the faceted attribute
     * @return  the facet object
     */
    getFacetByName(name: string): SearchResults.Facet;

    /**
     * Get a the list of values for a given facet attribute. Those values are sorted
     * refinement first, descending count (bigger value on top), and name ascending
     * (alphabetical order). The sort formula can overridden using either string based
     * predicates or a function.
     *
     * This method will return all the values returned by the Algolia engine plus all
     * the values already refined. This means that it can happen that the
     * `maxValuesPerFacet` [configuration](https://www.algolia.com/doc/rest-api/search#param-maxValuesPerFacet)
     * might not be respected if you have facet values that are already refined.
     * @param attribute attribute name
     * @param opts configuration options.
     * @param opts.sortBy
     * When using strings, it consists of
     * the name of the [FacetValue](#SearchResults.FacetValue) or the
     * [HierarchicalFacet](#SearchResults.HierarchicalFacet) attributes with the
     * order (`asc` or `desc`). For example to order the value by count, the
     * argument would be `['count:asc']`.
     *
     * If only the attribute name is specified, the ordering defaults to the one
     * specified in the default value for this attribute.
     *
     * When not specified, the order is
     * ascending.  This parameter can also be a function which takes two facet
     * values and should return a number, 0 if equal, 1 if the first argument is
     * bigger or -1 otherwise.
     *
     * The default value for this attribute `['isRefined:desc', 'count:desc', 'name:asc']`
     * @return depending on the type of facet of
     * the attribute requested (hierarchical, disjunctive or conjunctive)
     * @example
     * helper.on('results', function(content){
     *   //get values ordered only by name ascending using the string predicate
     *   content.getFacetValues('city', {sortBy: ['name:asc']});
     *   //get values  ordered only by count ascending using a function
     *   content.getFacetValues('city', {
     *     // this is equivalent to ['count:asc']
     *     sortBy: function(a, b) {
     *       if (a.count === b.count) return 0;
     *       if (a.count > b.count)   return 1;
     *       if (b.count > a.count)   return -1;
     *     }
     *   });
     * });
     */
    getFacetValues(
      attribute: string,
      opts: {
        sortBy?: any;
        facetOrdering?: boolean;
      }
    ): SearchResults.FacetValue[] | SearchResults.HierarchicalFacet | undefined;

    /**
     * Returns the facet stats if attribute is defined and the facet contains some.
     * Otherwise returns undefined.
     * @param attribute name of the faceted attribute
     * @return The stats of the facet
     */
    getFacetStats(attribute: string): any;

    /**
     * Returns all refinements for all filters + tags. It also provides
     * additional information: count and exhaustiveness for each filter.
     *
     * See the [refinement type](#Refinement) for an exhaustive view of the available
     * data.
     *
     * @return all the refinements
     */
    getRefinements(): SearchResults.Refinement[];
  }

  export type Banner = {
    /**
     * Configuration for the banner image
     */
    image: {
      /**
       * Set of possible URLs of the banner image
       */
      urls: Array<{
        /**
         * URL of the banner image
         */
        url: string;
      }>;
      /**
       * Alt text of the banner image
       */
      title?: string;
    };
    /**
     * Configuration for the banner click navigation
     */
    link?: {
      /**
       * URL to navigate to when the banner is clicked
       */
      url: string;
      /**
       * Target of the navigation
       * - `_blank` opens the URL in a new tab
       * - `_self` opens the URL in the same tab
       */
      target?: '_blank' | '_self';
    };
  };

  namespace SearchResults {
    interface Facet {
      name: string;
      data: object;
      stats?: {
        min: number;
        max: number;
        sum: number;
        avg: number;
      };
    }

    interface HierarchicalFacet {
      name: string;
      path: string;
      escapedValue: string;
      count: number;
      isRefined: boolean;
      data: HierarchicalFacet[];
    }

    interface FacetValue {
      name: string;
      escapedValue: string;
      count: number;
      isRefined: boolean;
      isExcluded: boolean;
    }

    interface Refinement {
      type: 'numeric' | 'facet' | 'exclude' | 'disjunctive' | 'hierarchical';
      attributeName: string;
      name: string;
      numericValue: number;
      operator: string;
      count: number;
      exhaustive: boolean;
    }
  }

  export type PlainRecommendParameters = ClientPlainRecommendParameters;

  export type RecommendParametersWithId<
    T extends PlainRecommendParameters = PlainRecommendParameters
  > = T & {
    $$id: number;
  };

  export type RecommendParametersOptions = {
    params?: Array<RecommendParametersWithId<PlainRecommendParameters>>;
  };

  export class RecommendParameters {
    params: RecommendParametersWithId[];
    constructor(opts?: RecommendParametersOptions);
    addParams(params: RecommendParametersWithId): RecommendParameters;
    removeParams(id: number): RecommendParameters;
    addFrequentlyBoughtTogether(
      params: RecommendParametersWithId<FrequentlyBoughtTogetherQuery>
    ): RecommendParameters;
    addRelatedProducts(
      params: RecommendParametersWithId<RelatedProductsQuery>
    ): RecommendParameters;
    addTrendingItems(
      params: RecommendParametersWithId<TrendingItemsQuery>
    ): RecommendParameters;
    addTrendingFacets(
      params: RecommendParametersWithId<TrendingFacetsQuery>
    ): RecommendParameters;
    addLookingSimilar(
      params: RecommendParametersWithId<LookingSimilarQuery>
    ): RecommendParameters;
  }

  type RecommendResultMap<T> = { [index: number]: RecommendResponse<T> };

  export class RecommendResults<T = any> {
    constructor(state: RecommendParameters, results: RecommendResultMap<T>);

    _state: RecommendParameters;
    _rawResults: RecommendResultMap<T>;

    [index: number]: RecommendResponse<T>;
  }
}

export = algoliasearchHelper;
