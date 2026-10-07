import type { ComponentProps, Renderer, SendEventForHits } from '../types';
import type { Banner } from 'algoliasearch-helper';
type Hit = Record<string, unknown> & {
    objectID: string;
};
export type HitsProps<THit> = ComponentProps<'div'> & {
    hits: THit[];
    itemComponent: (props: {
        hit: THit;
        index: number;
        className: string;
        onClick: () => void;
        onAuxClick: () => void;
        key?: string | number;
    }) => JSX.Element;
    sendEvent: SendEventForHits;
    classNames?: Partial<HitsClassNames>;
    emptyComponent?: (props: {
        className?: string;
    }) => JSX.Element;
    banner?: Banner;
    bannerComponent?: (props: {
        className: string;
        banner: Banner;
    }) => JSX.Element;
};
export type HitsClassNames = {
    /**
     * Class names to apply to the root element
     */
    root: string | string[];
    /**
     * Class names to apply to the root element without results
     */
    emptyRoot: string | string[];
    /**
     * Class names to apply to the list element
     */
    list: string | string[];
    /**
     * Class names to apply to each item element
     */
    item: string | string[];
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
export declare function createHitsComponent({ createElement, Fragment }: Renderer): <THit extends Hit>(userProps: HitsProps<THit>) => JSX.Element;
export {};
