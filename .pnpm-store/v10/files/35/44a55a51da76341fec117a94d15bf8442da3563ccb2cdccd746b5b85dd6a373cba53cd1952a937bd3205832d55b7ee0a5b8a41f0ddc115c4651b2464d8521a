import React from 'react';
import type { HitsProps as HitsUiComponentProps } from 'instantsearch-ui-components';
import type { Hit, BaseHit } from 'instantsearch.js';
import type { SendEventForHits } from 'instantsearch.js/es/lib/utils';
import type { UseHitsProps } from 'react-instantsearch-core';
type UiProps<THit extends BaseHit> = Pick<HitsUiComponentProps<Hit<THit>>, 'hits' | 'sendEvent' | 'itemComponent' | 'emptyComponent' | 'banner' | 'bannerComponent'>;
export type HitsProps<THit extends BaseHit> = Omit<HitsUiComponentProps<Hit<THit>>, keyof UiProps<THit>> & {
    hitComponent?: React.JSXElementConstructor<{
        hit: Hit<THit>;
        sendEvent: SendEventForHits;
    }>;
} & {
    bannerComponent?: React.JSXElementConstructor<{
        banner: Required<HitsUiComponentProps<Hit<THit>>>['banner'];
        className: string;
    }> | false;
} & UseHitsProps<THit>;
export declare function Hits<THit extends BaseHit = BaseHit>({ escapeHTML, transformItems, hitComponent: HitComponent, bannerComponent: BannerComponent, ...props }: HitsProps<THit>): React.JSX.Element;
export {};
