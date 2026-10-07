import React from 'react';
import type { Banner } from 'algoliasearch-helper';
import type { Hit } from 'instantsearch.js';
import type { SendEventForHits } from 'instantsearch.js/es/lib/utils';
export type InfiniteHitsProps<THit> = React.ComponentProps<'div'> & {
    hits: THit[];
    banner?: Banner;
    sendEvent: SendEventForHits;
    hitComponent?: React.JSXElementConstructor<{
        hit: THit;
        sendEvent: SendEventForHits;
    }>;
    bannerComponent?: React.JSXElementConstructor<{
        className: string;
        banner: Banner;
    }>;
    isFirstPage: boolean;
    isLastPage: boolean;
    onShowPrevious?: () => void;
    onShowMore: () => void;
    classNames?: Partial<InfiniteHitsClassNames>;
    translations: InfiniteHitsTranslations;
};
export type InfiniteHitsClassNames = {
    /**
     * Class names to apply to the root element
     */
    root: string;
    /**
     * Class names to apply to the root element without results
     */
    emptyRoot: string;
    /**
     * Class names to apply to the "load previous" button
     */
    loadPrevious: string;
    /**
     * Class names to apply to the "load previous" button when it's disabled
     */
    disabledLoadPrevious: string;
    /**
     * Class names to apply to the "load more" button
     */
    loadMore: string;
    /**
     * Class names to apply to the "load more" button when it's disabled
     */
    disabledLoadMore: string;
    /**
     * Class names to apply to the list element
     */
    list: string;
    /**
     * Class names to apply to each item element
     */
    item: string;
    /**
     * Class names to apply to the banner element
     */
    bannerRoot: string | string[];
    /**
     * Class names to apply to the banner image element
     */
    bannerImage: string | string[];
    /**
     * Class names to apply to the banner link element
     */
    bannerLink: string | string[];
};
export type InfiniteHitsTranslations = {
    showPreviousButtonText: string;
    showMoreButtonText: string;
};
export declare function InfiniteHits<THit extends Hit>({ hitComponent: HitComponent, hits, bannerComponent: BannerComponent, banner, sendEvent, isFirstPage, isLastPage, onShowPrevious, onShowMore, classNames, translations, ...props }: InfiniteHitsProps<THit>): React.JSX.Element;
