import React from 'react';
import type { RelatedProductsProps as RelatedProductsUiComponentProps } from 'instantsearch-ui-components';
import type { BaseHit } from 'instantsearch.js';
import type { UseRelatedProductsProps } from 'react-instantsearch-core';
type UiProps<TItem extends BaseHit> = Pick<RelatedProductsUiComponentProps<TItem>, 'items' | 'itemComponent' | 'headerComponent' | 'emptyComponent' | 'layout' | 'status' | 'sendEvent'>;
export type RelatedProductsProps<TItem extends BaseHit> = Omit<RelatedProductsUiComponentProps<TItem>, keyof UiProps<TItem>> & UseRelatedProductsProps & {
    itemComponent?: RelatedProductsUiComponentProps<TItem>['itemComponent'];
    headerComponent?: RelatedProductsUiComponentProps<TItem>['headerComponent'];
    emptyComponent?: RelatedProductsUiComponentProps<TItem>['emptyComponent'];
    layoutComponent?: RelatedProductsUiComponentProps<TItem>['layout'];
};
export declare function RelatedProducts<TItem extends BaseHit = BaseHit>({ objectIDs, limit, threshold, fallbackParameters, queryParameters, escapeHTML, transformItems, itemComponent, headerComponent, emptyComponent, layoutComponent, ...props }: RelatedProductsProps<TItem>): React.JSX.Element;
export {};
