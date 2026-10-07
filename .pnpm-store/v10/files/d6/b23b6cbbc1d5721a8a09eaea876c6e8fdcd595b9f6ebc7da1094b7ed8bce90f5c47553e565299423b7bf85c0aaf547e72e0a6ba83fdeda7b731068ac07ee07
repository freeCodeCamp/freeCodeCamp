/** @jsx createElement */
import type { ComponentProps, Renderer } from '../types';
export type TrendingFacetItem = {
    facetName: string;
    facetValue: string;
    _score: number;
};
export type TrendingFacetsClassNames = {
    root: string;
    emptyRoot: string;
    title: string;
    container: string;
    list: string;
    item: string;
};
export type TrendingFacetsTranslations = {
    title: string;
};
export type TrendingFacetsProps = ComponentProps<'div'> & {
    items: TrendingFacetItem[];
    classNames?: Partial<TrendingFacetsClassNames>;
    itemComponent?: (props: {
        item: TrendingFacetItem;
    }) => JSX.Element;
    headerComponent?: (props: {
        classNames: Partial<TrendingFacetsClassNames>;
        items: TrendingFacetItem[];
        translations: Required<TrendingFacetsTranslations>;
    }) => JSX.Element;
    emptyComponent?: () => JSX.Element;
    status: 'idle' | 'loading' | 'stalled' | 'error';
    translations?: Partial<TrendingFacetsTranslations>;
};
export declare function createTrendingFacetsComponent({ createElement, Fragment, }: Renderer): (userProps: TrendingFacetsProps) => JSX.Element;
