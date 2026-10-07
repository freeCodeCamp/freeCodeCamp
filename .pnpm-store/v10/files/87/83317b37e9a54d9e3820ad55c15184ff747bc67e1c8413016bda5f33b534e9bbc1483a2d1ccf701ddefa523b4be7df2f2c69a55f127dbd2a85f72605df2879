/** @jsx createElement */
import type { ComponentChildren, Renderer } from '../../types';
export type AutocompleteRecentSearchProps<T = {
    query: string;
} & Record<string, unknown>> = {
    item: T;
    children?: ComponentChildren;
    onSelect: () => void;
    onRemoveRecentSearch: () => void;
    onApply: () => void;
    classNames?: Partial<AutocompleteRecentSearchClassNames>;
};
export type AutocompleteRecentSearchClassNames = {
    /**
     * Class names to apply to the root element
     **/
    root: string | string[];
    /**
     * Class names to apply to the content element
     **/
    content: string | string[];
    /**
     * Class names to apply to the actions element
     **/
    actions: string | string[];
    /**
     * Class names to apply to the icon element
     **/
    icon: string | string[];
    /**
     * Class names to apply to the body element
     **/
    body: string | string[];
    /**
     * Class names to apply to the delete button element
     **/
    deleteButton: string | string[];
    /**
     * Class names to apply to the apply button element
     **/
    applyButton: string | string[];
};
export declare function createAutocompleteRecentSearchComponent({ createElement, }: Renderer): (userProps: AutocompleteRecentSearchProps) => JSX.Element;
