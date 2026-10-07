/** @jsx createElement */
import type { ComponentProps, Renderer, SendEventForHits } from '../../types';
export type AutocompleteIndexProps<T = {
    objectID: string;
    __indexName: string;
} & Record<string, unknown>> = {
    items: T[];
    HeaderComponent?: (props: {
        items: T[];
    }) => JSX.Element;
    ItemComponent: (props: {
        item: T;
        onSelect: () => void;
        onApply: () => void;
    }) => JSX.Element;
    NoResultsComponent?: () => JSX.Element;
    getItemProps: (item: T, index: number) => Omit<ComponentProps<'li'>, 'onSelect'> & {
        onSelect: () => void;
        onApply: () => void;
    };
    sendEvent?: SendEventForHits;
    classNames?: Partial<AutocompleteIndexClassNames>;
};
export type AutocompleteIndexClassNames = {
    /**
     * Class names to apply to the root element
     **/
    root: string | string[];
    /**
     * Class names to apply to the list element
     */
    list: string | string[];
    /**
     * Class names to apply to the header element
     */
    header: string | string[];
    /**
     * Class names to apply to each item element
     */
    item: string | string[];
    /**
     * Class names to apply to the no results element
     */
    noResults: string | string[];
};
export declare function createAutocompleteIndexComponent({ createElement }: Renderer): (userProps: AutocompleteIndexProps) => JSX.Element | null;
