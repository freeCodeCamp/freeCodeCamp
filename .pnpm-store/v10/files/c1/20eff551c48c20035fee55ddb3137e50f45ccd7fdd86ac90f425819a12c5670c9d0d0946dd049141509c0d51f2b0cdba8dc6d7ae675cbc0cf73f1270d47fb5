/** @jsx createElement */
import type { ComponentChildren, Renderer } from '../../types';
export type AutocompleteSuggestionProps<T = {
    query: string;
} & Record<string, unknown>> = {
    item: T;
    onSelect: () => void;
    onApply: () => void;
    children: ComponentChildren;
    classNames?: Partial<AutocompleteSuggestionClassNames>;
};
export type AutocompleteSuggestionClassNames = {
    /**
     * Class names to apply to the root element
     **/
    root: string | string[];
    /** Class names to apply to the content element **/
    content: string | string[];
    /** Class names to apply to the actions element **/
    actions: string | string[];
    /** Class names to apply to the icon element **/
    icon: string | string[];
    /** Class names to apply to the body element **/
    body: string | string[];
    /** Class names to apply to the apply button element **/
    applyButton: string | string[];
};
export declare function createAutocompleteSuggestionComponent({ createElement, }: Renderer): (userProps: AutocompleteSuggestionProps) => JSX.Element;
