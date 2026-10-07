import React from 'react';
import type { FilterSuggestionsProps as FilterSuggestionsUiComponentProps } from 'instantsearch-ui-components';
import type { UseFilterSuggestionsProps } from 'react-instantsearch-core';
type UiProps = Pick<FilterSuggestionsUiComponentProps, 'suggestions' | 'isLoading' | 'refine' | 'skeletonCount' | 'itemComponent' | 'headerComponent' | 'emptyComponent'>;
export type FilterSuggestionsProps = Omit<FilterSuggestionsUiComponentProps, keyof UiProps> & UseFilterSuggestionsProps & {
    /**
     * Component to render each suggestion item.
     */
    itemComponent?: FilterSuggestionsUiComponentProps['itemComponent'];
    /**
     * Component to render the header. Set to `false` to disable the header.
     */
    headerComponent?: FilterSuggestionsUiComponentProps['headerComponent'];
    /**
     * Component to render when there are no suggestions.
     */
    emptyComponent?: FilterSuggestionsUiComponentProps['emptyComponent'];
};
export declare function FilterSuggestions({ agentId, attributes, maxSuggestions, debounceMs, hitsToSample, transformItems, itemComponent, headerComponent, emptyComponent, transport, ...props }: FilterSuggestionsProps): React.JSX.Element;
export {};
