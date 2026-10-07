import React from 'react';
import type { CreateURL } from 'instantsearch.js';
export type PageItemTextOptions = {
    /**
     * The page number to be displayed.
     */
    currentPage: number;
    /**
     * The total number of pages.
     */
    nbPages: number;
};
export type PaginationTranslations = {
    /**
     * The label for the first page's button.
     */
    firstPageItemText: string;
    /**
     * The label for the previous page's button.
     */
    previousPageItemText: string;
    /**
     * The label for the next page's button.
     */
    nextPageItemText: string;
    /**
     * The label for the last page's button.
     */
    lastPageItemText: string;
    /**
     * The label for a page's button.
     */
    pageItemText: (options: PageItemTextOptions) => string;
    /**
     * The accessible label for the first page's button.
     */
    firstPageItemAriaLabel: string;
    /**
     * The accessible label for the previous page's button.
     */
    previousPageItemAriaLabel: string;
    /**
     * The accessible label for the next page's button.
     */
    nextPageItemAriaLabel: string;
    /**
     * The accessible label for the last page's button.
     */
    lastPageItemAriaLabel: string;
    /**
     * The accessible label for a page's button.
     */
    pageItemAriaLabel: (options: PageItemTextOptions) => string;
};
export type PaginationProps = React.ComponentProps<'div'> & {
    classNames?: Partial<PaginationClassNames>;
    pages: number[];
    currentPage: number;
    isFirstPage: boolean;
    isLastPage: boolean;
    nbPages: number;
    showFirst?: boolean;
    showPrevious?: boolean;
    showNext?: boolean;
    showLast?: boolean;
    createURL: CreateURL<number>;
    onNavigate: (page: number) => void;
} & {
    translations: PaginationTranslations;
};
export type PaginationClassNames = {
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
     * Class names to apply to the first page element
     */
    firstPageItem: string;
    /**
     * Class names to apply to the previous page element
     */
    previousPageItem: string;
    /**
     * Class names to apply to each page element
     */
    pageItem: string;
    /**
     * Class names to apply to a selected page element
     */
    selectedItem: string;
    /**
     * Class names to apply to a disabled page element
     */
    disabledItem: string;
    /**
     * Class names to apply to the next page element
     */
    nextPageItem: string;
    /**
     * Class names to apply to the last page element
     */
    lastPageItem: string;
    /**
     * Class names to apply to each link element
     */
    link: string;
};
export declare function Pagination({ pages, currentPage, nbPages, isFirstPage, isLastPage, showFirst, showPrevious, showNext, showLast, createURL, onNavigate, translations, classNames, ...props }: PaginationProps): React.JSX.Element;
