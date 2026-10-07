/** @jsx createElement */
import type { ComponentChildren, Renderer } from '../../types';
export type AutocompletePromptSuggestionProps<T = {
    prompt: string;
    label?: string;
} & Record<string, unknown>> = {
    item: T;
    onSelect: () => void;
    children?: ComponentChildren;
    classNames?: Partial<AutocompletePromptSuggestionClassNames>;
};
export type AutocompletePromptSuggestionClassNames = {
    /**
     * Class names to apply to the root element.
     */
    root: string | string[];
    /**
     * Class names to apply to the content element.
     */
    content: string | string[];
    /**
     * Class names to apply to the icon element.
     */
    icon: string | string[];
    /**
     * Class names to apply to the body element.
     */
    body: string | string[];
};
export declare function createAutocompletePromptSuggestionComponent({ createElement, }: Renderer): (userProps: AutocompletePromptSuggestionProps) => JSX.Element;
