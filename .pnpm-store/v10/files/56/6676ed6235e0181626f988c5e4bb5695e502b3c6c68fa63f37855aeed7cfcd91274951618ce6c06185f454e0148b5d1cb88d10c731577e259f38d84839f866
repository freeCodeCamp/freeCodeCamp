import React from 'react';
import type { InfiniteHitsProps as InfiniteHitsUiComponentProps } from '../ui/InfiniteHits';
import type { BaseHit, Hit } from 'instantsearch.js';
import type { UseInfiniteHitsProps } from 'react-instantsearch-core';
type UiProps<THit extends BaseHit = BaseHit> = Pick<InfiniteHitsUiComponentProps<Hit<THit>>, 'hits' | 'banner' | 'bannerComponent' | 'sendEvent' | 'onShowPrevious' | 'onShowMore' | 'isFirstPage' | 'isLastPage' | 'translations'>;
export type InfiniteHitsProps<THit extends BaseHit = BaseHit> = Omit<InfiniteHitsUiComponentProps<Hit<THit>>, keyof UiProps<THit>> & {
    bannerComponent?: React.JSXElementConstructor<{
        banner: Required<InfiniteHitsUiComponentProps<Hit<THit>>>['banner'];
        className: string;
    }> | false;
} & UseInfiniteHitsProps<THit> & {
    /**
     * Displays the "Show Previous" button when the UI is loaded from a page
     * beyond the first one.
     * @default true
     */
    showPrevious?: boolean;
    translations?: Partial<UiProps<THit>['translations']>;
};
export declare function InfiniteHits<THit extends BaseHit = BaseHit>({ showPrevious: shouldShowPrevious, cache, escapeHTML, transformItems, translations, bannerComponent: BannerComponent, ...props }: InfiniteHitsProps<THit>): React.JSX.Element;
export {};
