import React from 'react';
import type { ShowMoreButtonTranslations } from './ShowMoreButton';
import type { CreateURL } from 'instantsearch.js';
import type { MenuItem } from 'instantsearch.js/es/connectors/menu/connectMenu';
export type MenuProps = React.ComponentProps<'div'> & {
    items: MenuItem[];
    classNames?: Partial<MenuCSSClasses>;
    showMore?: boolean;
    canToggleShowMore: boolean;
    onToggleShowMore: () => void;
    isShowingMore: boolean;
    createURL: CreateURL<MenuItem['value']>;
    onRefine: (item: MenuItem) => void;
    translations: MenuTranslations;
};
export type MenuCSSClasses = {
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
     * Class names to apply to each item element
     */
    item: string;
    /**
     * Class names to apply to each selected item element
     */
    selectedItem: string;
    /**
     * Class names to apply to each link element
     */
    link: string;
    /**
     * Class names to apply to each label element
     */
    label: string;
    /**
     * Class names to apply to each facet count element
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
export type MenuTranslations = ShowMoreButtonTranslations;
export declare function Menu({ items, classNames, showMore, canToggleShowMore, onToggleShowMore, isShowingMore, createURL, onRefine, translations, ...props }: MenuProps): React.JSX.Element;
