import React from 'react';
import type { LookingSimilarProps as LookingSimilarPropsUiComponentProps } from 'instantsearch-ui-components';
import type { Hit, BaseHit } from 'instantsearch.js';
import type { UseLookingSimilarProps } from 'react-instantsearch-core';
type UiProps<THit extends BaseHit> = Pick<LookingSimilarPropsUiComponentProps<Hit<THit>>, 'items' | 'itemComponent' | 'headerComponent' | 'emptyComponent' | 'layout' | 'status' | 'sendEvent'>;
export type LookingSimilarProps<THit extends BaseHit> = Omit<LookingSimilarPropsUiComponentProps<Hit<THit>>, keyof UiProps<THit>> & UseLookingSimilarProps<THit> & {
    itemComponent?: LookingSimilarPropsUiComponentProps<THit>['itemComponent'];
    headerComponent?: LookingSimilarPropsUiComponentProps<THit>['headerComponent'];
    emptyComponent?: LookingSimilarPropsUiComponentProps<THit>['emptyComponent'];
    layoutComponent?: LookingSimilarPropsUiComponentProps<THit>['layout'];
};
export declare function LookingSimilar<THit extends BaseHit = BaseHit>({ objectIDs, limit, threshold, queryParameters, fallbackParameters, escapeHTML, transformItems, itemComponent, headerComponent, emptyComponent, layoutComponent, ...props }: LookingSimilarProps<THit>): React.JSX.Element;
export {};
