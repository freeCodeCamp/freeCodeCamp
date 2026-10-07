import React from 'react';
import type { ShowMoreButtonTranslations } from './ShowMoreButton';
import type { RefinementListItem } from 'instantsearch.js/es/connectors/refinement-list/connectRefinementList';
export type RefinementListProps = React.ComponentProps<'div'> & {
    canRefine: boolean;
    items: RefinementListItem[];
    onRefine: (item: RefinementListItem) => void;
    query: string;
    searchBox?: React.ReactNode;
    noResults?: React.ReactNode;
    showMore?: boolean;
    canToggleShowMore: boolean;
    onToggleShowMore: () => void;
    isShowingMore: boolean;
    classNames?: Partial<RefinementListClassNames>;
    translations: RefinementListTranslations;
};
export type RefinementListClassNames = {
    /**
     * Class names to apply to the root element
     */
    root: string;
    /**
     * Class names to apply to the root element when there are no refinements possible
     */
    noRefinementRoot: string;
    /**
     * Class names to apply to the search box wrapper element
     */
    searchBox: string;
    /**
     * Class names to apply to the root element
     */
    noResults: string;
    /**
     * Class names to apply to the list element
     */
    list: string;
    /**
     * Class names to apply to each item element
     */
    item: string;
    /**
     * Class names to apply to each selected item element
     */
    selectedItem: string;
    /**
     * Class names to apply to each label element
     */
    label: string;
    /**
     * Class names to apply to each checkbox element
     */
    checkbox: string;
    /**
     * Class names to apply to the text for each label
     */
    labelText: string;
    /**
     * Class names to apply to the facet count of each item
     */
    count: string;
    /**
     * Class names to apply to the "Show more" button
     */
    showMore: string;
    /**
     * Class names to apply to the "Show more" button if it's disabled
     */
    disabledShowMore: string;
};
export type RefinementListTranslations = ShowMoreButtonTranslations;
export declare function RefinementList({ canRefine, items, onRefine, query, searchBox, noResults, showMore, canToggleShowMore, onToggleShowMore, isShowingMore, className, classNames, translations, ...props }: RefinementListProps): React.JSX.Element;
