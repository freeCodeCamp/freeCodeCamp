import type { Connector, CreateURL, WidgetRenderState } from '../../types';
export type PaginationConnectorParams = {
    /**
     * The total number of pages to browse.
     */
    totalPages?: number;
    /**
     * The padding of pages to show around the current page
     * @default 3
     */
    padding?: number;
};
export type PaginationRenderState = {
    /** Creates URLs for the next state, the number is the page to generate the URL for. */
    createURL: CreateURL<number>;
    /** Sets the current page and triggers a search. */
    refine: (page: number) => void;
    /** true if this search returned more than one page */
    canRefine: boolean;
    /** The number of the page currently displayed. */
    currentRefinement: number;
    /** The number of hits computed for the last query (can be approximated). */
    nbHits: number;
    /** The number of pages for the result set. */
    nbPages: number;
    /** The actual pages relevant to the current situation and padding. */
    pages: number[];
    /** true if the current page is also the first page. */
    isFirstPage: boolean;
    /** true if the current page is also the last page. */
    isLastPage: boolean;
};
export type PaginationWidgetDescription = {
    $$type: 'ais.pagination';
    renderState: PaginationRenderState;
    indexRenderState: {
        pagination: WidgetRenderState<PaginationRenderState, PaginationConnectorParams>;
    };
    indexUiState: {
        page: number;
    };
};
export type PaginationConnector = Connector<PaginationWidgetDescription, PaginationConnectorParams>;
/**
 * **Pagination** connector provides the logic to build a widget that will let the user
 * choose the current page of the results.
 *
 * When using the pagination with Algolia, you should be aware that the engine won't provide you pages
 * beyond the 1000th hits by default. You can find more information on the [Algolia documentation](https://www.algolia.com/doc/guides/searching/pagination/#pagination-limitations).
 */
declare const connectPagination: PaginationConnector;
export default connectPagination;
