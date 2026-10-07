import type { ComponentChildren, ComponentProps, ElementType, Renderer } from '../types';
type HighlightedPart = {
    isHighlighted: boolean;
    value: string;
};
export type HighlightClassNames = {
    /**
     * Class names to apply to the root element
     */
    root: string;
    /**
     * Class names to apply to the highlighted parts
     */
    highlighted: string;
    /**
     * Class names to apply to the non-highlighted parts
     */
    nonHighlighted: string;
    /**
     * Class names to apply to the separator between highlighted parts
     */
    separator: string;
};
export type HighlightProps = ComponentProps<'span'> & {
    classNames?: Partial<HighlightClassNames>;
    highlightedTagName?: ElementType;
    nonHighlightedTagName?: ElementType;
    separator?: ComponentChildren;
    parts: HighlightedPart[][];
};
export declare function createHighlightComponent({ createElement, Fragment, }: Renderer): (userProps: HighlightProps) => JSX.Element;
export {};
