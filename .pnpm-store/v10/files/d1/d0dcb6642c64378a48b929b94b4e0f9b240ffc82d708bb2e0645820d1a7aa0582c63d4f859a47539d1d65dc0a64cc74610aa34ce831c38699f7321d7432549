
import { h } from 'preact';
import type { SendEventForHits, BindEventForHits } from '../../lib/utils';
import type { ComponentCSSClasses, Hit, InsightsClient } from '../../types';
import type { InfiniteHitsCSSClasses, InfiniteHitsTemplates } from '../../widgets/infinite-hits/infinite-hits';
import type { Banner, SearchResults } from 'algoliasearch-helper';
export type InfiniteHitsComponentCSSClasses = ComponentCSSClasses<InfiniteHitsCSSClasses>;
export type InfiniteHitsComponentTemplates = InfiniteHitsTemplates;
export type InfiniteHitsProps = {
    cssClasses: InfiniteHitsComponentCSSClasses;
    hits: Hit[];
    results: SearchResults;
    hasShowPrevious: boolean;
    showPrevious: () => void;
    showMore: () => void;
    templateProps: {
        [key: string]: any;
        templates: InfiniteHitsComponentTemplates;
    };
    isFirstPage: boolean;
    isLastPage: boolean;
    insights?: InsightsClient;
    sendEvent: SendEventForHits;
    bindEvent: BindEventForHits;
    banner?: Banner;
};
declare const InfiniteHits: ({ results, hits, insights, bindEvent, sendEvent, hasShowPrevious, showPrevious, showMore, isFirstPage, isLastPage, cssClasses, templateProps, banner, }: InfiniteHitsProps) => h.JSX.Element;
export default InfiniteHits;
