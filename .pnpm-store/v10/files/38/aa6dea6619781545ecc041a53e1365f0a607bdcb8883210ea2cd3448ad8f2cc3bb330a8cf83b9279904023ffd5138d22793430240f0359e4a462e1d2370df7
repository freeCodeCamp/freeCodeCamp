import React from 'react';
import type { useBreadcrumb } from 'react-instantsearch-core';
export type BreadcrumbTranslations = {
    /**
     * The label of the root element
     */
    rootElementText: string;
};
export type BreadcrumbClassNames = {
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
     * Class names to apply to the selected item
     */
    selectedItem: string;
    /**
     * Class names to apply to the separator between items
     */
    separator: string;
    /**
     * Class names to apply to each link element
     */
    link: string;
};
type UseBreadcrumbRenderState = ReturnType<typeof useBreadcrumb>;
export type BreadcrumbProps = React.ComponentProps<'div'> & Pick<UseBreadcrumbRenderState, 'items' | 'createURL'> & {
    classNames?: Partial<BreadcrumbClassNames>;
    hasItems: boolean;
    onNavigate: UseBreadcrumbRenderState['refine'];
    separator?: string;
    translations: BreadcrumbTranslations;
};
export declare function Breadcrumb({ classNames, items, hasItems, createURL, onNavigate, separator, translations, ...props }: BreadcrumbProps): React.JSX.Element;
export {};
