import React from 'react';
import type { FrequentlyBoughtTogetherProps as FrequentlyBoughtTogetherPropsUiComponentProps } from 'instantsearch-ui-components';
import type { Hit, BaseHit } from 'instantsearch.js';
import type { UseFrequentlyBoughtTogetherProps } from 'react-instantsearch-core';
type UiProps<THit extends BaseHit> = Pick<FrequentlyBoughtTogetherPropsUiComponentProps<Hit<THit>>, 'items' | 'itemComponent' | 'headerComponent' | 'emptyComponent' | 'layout' | 'status' | 'sendEvent'>;
export type FrequentlyBoughtTogetherProps<THit extends BaseHit> = Omit<FrequentlyBoughtTogetherPropsUiComponentProps<Hit<THit>>, keyof UiProps<THit>> & UseFrequentlyBoughtTogetherProps<THit> & {
    itemComponent?: FrequentlyBoughtTogetherPropsUiComponentProps<THit>['itemComponent'];
    headerComponent?: FrequentlyBoughtTogetherPropsUiComponentProps<THit>['headerComponent'];
    emptyComponent?: FrequentlyBoughtTogetherPropsUiComponentProps<THit>['emptyComponent'];
    layoutComponent?: FrequentlyBoughtTogetherPropsUiComponentProps<THit>['layout'];
};
export declare function FrequentlyBoughtTogether<THit extends BaseHit = BaseHit>({ objectIDs, limit, threshold, queryParameters, fallbackParameters, escapeHTML, transformItems, itemComponent, headerComponent, emptyComponent, layoutComponent, ...props }: FrequentlyBoughtTogetherProps<THit>): React.JSX.Element;
export {};
