
import type { AutocompleteConnectorParams, AutocompleteRenderState, AutocompleteWidgetDescription, TransformItemsIndicesConfig } from '../../connectors/autocomplete/connectAutocomplete';
import type { BaseHit, IndexUiState, IndexWidget, Template, WidgetFactory } from '../../types';
import type { PlainSearchParameters } from 'algoliasearch-helper';
import type { AutocompleteClassNames, AutocompleteIndexClassNames, AutocompleteIndexConfig } from 'instantsearch-ui-components';
type AutocompleteTranslations = {
    detachedCancelButtonText: string;
    detachedSearchButtonTitle: string;
    detachedClearButtonTitle: string;
};
export type AutocompleteCSSClasses = Partial<AutocompleteClassNames>;
export type AutocompleteSearchParameters = Omit<PlainSearchParameters, 'index'>;
export type AutocompleteTemplates = {
    /**
     * Template to use for the panel.
     */
    panel?: Template<{
        elements: PanelElements;
        indices: AutocompleteRenderState['indices'];
    }>;
};
type IndexConfig<TItem extends BaseHit> = AutocompleteIndexConfig<TItem> & {
    templates?: Partial<{
        /**
         * Template to use for the header, before the list of items.
         */
        header: Template<{
            items: TItem[];
        }>;
        /**
         * Template to use for each result. This template will receive an object containing a single record.
         */
        item: Template<{
            item: TItem;
            onSelect: () => void;
        }>;
        /**
         * Template to use when no results are found.
         */
        noResults: Template<Record<string, never>>;
    }>;
    /**
     * Search parameters to apply to this index.
     */
    searchParameters?: AutocompleteSearchParameters;
    cssClasses?: Partial<AutocompleteIndexClassNames>;
};
type PanelElements = Partial<Record<'recent' | 'suggestions' | (string & {}), preact.JSX.Element>>;
type AutocompleteWidgetParams<TItem extends BaseHit> = {
    /**
     * CSS Selector or HTMLElement to insert the widget.
     */
    container: string | HTMLElement;
    /**
     * Indices to use in the Autocomplete.
     */
    indices?: Array<IndexConfig<TItem>>;
    /**
     * Index to use for retrieving and showing query suggestions.
     */
    showQuerySuggestions?: Partial<Pick<IndexConfig<{
        query: string;
    }>, 'indexName' | 'getURL' | 'templates' | 'cssClasses' | 'searchParameters'>>;
    showPromptSuggestions?: Partial<Pick<IndexConfig<{
        query: string;
        label?: string;
    }>, 'indexName' | 'getURL' | 'templates' | 'cssClasses' | 'searchParameters'>>;
    showRecent?: boolean | {
        /**
         * Storage key to use in the local storage.
         */
        storageKey?: string;
        templates?: Partial<{
            /**
             * Template to use for the header, before the list of items.
             */
            header: Template<{
                items: Array<{
                    query: string;
                }>;
            }>;
            /**
             * Template to use for each result. This template will receive an object containing a single record.
             */
            item: Template<{
                item: {
                    query: string;
                };
                onSelect: () => void;
                onRemoveRecentSearch: () => void;
            }>;
        }>;
        cssClasses?: Partial<AutocompleteIndexClassNames>;
    };
    transformItems?: (indices: TransformItemsIndicesConfig[]) => TransformItemsIndicesConfig[];
    /**
     * Search parameters to apply to the autocomplete indices.
     */
    searchParameters?: AutocompleteSearchParameters;
    getSearchPageURL?: (nextUiState: IndexUiState) => string;
    onSelect?: AutocompleteIndexConfig<TItem>['onSelect'];
    /**
     * Templates to use for the widget.
     */
    templates?: AutocompleteTemplates;
    /**
     * CSS classes to add.
     */
    cssClasses?: AutocompleteCSSClasses;
    /**
     * Placeholder text for the search input.
     */
    placeholder?: string;
    /**
     * Whether the input should be focused and the panel open initially.
     */
    autofocus?: boolean;
    /**
     * Media query to enable detached (mobile) mode.
     * When the media query matches, the autocomplete switches to a full-screen overlay.
     * Set to empty string to disable detached mode.
     * When omitted, defaults to `--ais-autocomplete-detached-media-query`.
     * @default "(max-width: 680px)"
     */
    detachedMediaQuery?: string;
    /**
     * Translations for the Autocomplete widget.
     */
    translations?: Partial<AutocompleteTranslations>;
    /**
     * When true, renders an AI mode button inside the search input
     * that opens the Chat widget and sends the current query.
     * Requires a Chat widget on the same index.
     */
    aiMode?: boolean;
};
export type AutocompleteWidget<TItem extends BaseHit = BaseHit> = WidgetFactory<AutocompleteWidgetDescription & {
    $$widgetType: 'ais.autocomplete';
}, AutocompleteConnectorParams, AutocompleteWidgetParams<TItem>>;
export declare function EXPERIMENTAL_autocomplete<TItem extends BaseHit = BaseHit>(widgetParams: AutocompleteWidgetParams<TItem> & AutocompleteConnectorParams): (IndexWidget<import("../../types").UiState> | import("../../types").Widget<import("../../connectors/search-box/connectSearchBox").SearchBoxWidgetDescription & {
    widgetParams: import("../../connectors/search-box/connectSearchBox").SearchBoxConnectorParams & object;
}>)[];
export {};
