import React from 'react';
import type { ShowMoreButtonTranslations } from './ShowMoreButton';
import type { useHierarchicalMenu } from 'react-instantsearch-core';
type HierarchicalMenuClassNames = {
    /**
     * Class names to apply to the root element
     */
    root: string;
    /**
     * Class names to apply to the root element when there are no refinements possible
     */
    noRefinementRoot: string;
    /**
     * Class names to apply to the list element
     */
    list: string;
    /**
     * Class names to apply to each child list element
     */
    childList: string;
    /**
     * Class names to apply to each item element
     */
    item: string;
    /**
     * Class names to apply to the selected item
     */
    selectedItem: string;
    /**
     * Class names to apply to the parent item of the list
     */
    parentItem: string;
    /**
     * Class names to apply to each link element
     */
    link: string;
    /**
     * Class names to apply to the link of each selected item
     */
    selectedItemLink: string;
    /**
     * Class names to apply to the label of an item element
     */
    label: string;
    /**
     * Class names to apply to the count of an item element
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
type HierarchicalListProps = Pick<ReturnType<typeof useHierarchicalMenu>, 'items' | 'createURL'> & {
    className?: string;
    classNames?: Partial<HierarchicalMenuClassNames>;
    onNavigate: (value: string) => void;
};
export type HierarchicalMenuProps = React.ComponentProps<'div'> & HierarchicalListProps & {
    hasItems: boolean;
    showMore?: boolean;
    canToggleShowMore: boolean;
    onToggleShowMore: () => void;
    isShowingMore: boolean;
    translations: ShowMoreButtonTranslations;
};
export type HierarchicalMenuTranslations = ShowMoreButtonTranslations;
export declare function HierarchicalMenu({ classNames, items, hasItems, onNavigate, createURL, showMore, canToggleShowMore, onToggleShowMore, isShowingMore, translations, ...props }: HierarchicalMenuProps): React.JSX.Element;
export {};
