import React from 'react';
import type { TrendingItemsProps as TrendingItemsUiComponentProps } from 'instantsearch-ui-components';
import type { BaseHit } from 'instantsearch.js';
import type { UseTrendingItemsProps } from 'react-instantsearch-core';
type UiProps<TItem extends BaseHit> = Pick<TrendingItemsUiComponentProps<TItem>, 'items' | 'itemComponent' | 'headerComponent' | 'emptyComponent' | 'layout' | 'status' | 'sendEvent'>;
export type TrendingItemsProps<TItem extends BaseHit> = Omit<TrendingItemsUiComponentProps<TItem>, keyof UiProps<TItem>> & UseTrendingItemsProps & {
    itemComponent?: TrendingItemsUiComponentProps<TItem>['itemComponent'];
    headerComponent?: TrendingItemsUiComponentProps<TItem>['headerComponent'];
    emptyComponent?: TrendingItemsUiComponentProps<TItem>['emptyComponent'];
    layoutComponent?: TrendingItemsUiComponentProps<TItem>['layout'];
};
export declare function TrendingItems<TItem extends BaseHit = BaseHit>({ facetName, facetValue, limit, threshold, fallbackParameters, queryParameters, escapeHTML, transformItems, itemComponent, headerComponent, emptyComponent, layoutComponent, ...props }: TrendingItemsProps<TItem>): React.JSX.Element;
export {};
