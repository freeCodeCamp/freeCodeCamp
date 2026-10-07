import type { ComponentProps, Renderer } from '../types';
export type Suggestion = {
    /**
     * The facet attribute name.
     */
    attribute: string;
    /**
     * The facet value to filter by.
     */
    value: string;
    /**
     * Human-readable display label.
     */
    label: string;
    /**
     * Number of records matching this filter.
     */
    count: number;
};
export type FilterSuggestionsItemComponentProps = {
    suggestion: Suggestion;
    classNames: Partial<Pick<FilterSuggestionsClassNames, 'item' | 'button' | 'label' | 'count'>>;
    refine: () => void;
};
export type FilterSuggestionsHeaderComponentProps = {
    classNames: Partial<Pick<FilterSuggestionsClassNames, 'header' | 'headerIcon' | 'headerTitle'>>;
};
export type FilterSuggestionsEmptyComponentProps = {
    classNames: Partial<Pick<FilterSuggestionsClassNames, 'emptyRoot'>>;
};
export type FilterSuggestionsProps = ComponentProps<'div'> & {
    suggestions: Suggestion[];
    isLoading: boolean;
    refine: (attribute: string, value: string) => void;
    classNames?: Partial<FilterSuggestionsClassNames>;
    /**
     * Number of skeleton items to show when loading.
     * @default 3
     */
    skeletonCount?: number;
    /**
     * Component to render each suggestion item.
     */
    itemComponent?: (props: FilterSuggestionsItemComponentProps) => JSX.Element;
    /**
     * Component to render the header. Set to `false` to disable the header.
     */
    headerComponent?: ((props: FilterSuggestionsHeaderComponentProps) => JSX.Element) | false;
    /**
     * Component to render when there are no suggestions.
     */
    emptyComponent?: (props: FilterSuggestionsEmptyComponentProps) => JSX.Element | null;
};
export type FilterSuggestionsClassNames = {
    /**
     * Class names to apply to the root element
     */
    root: string | string[];
    /**
     * Class names to apply to the root element when loading
     */
    loadingRoot: string | string[];
    /**
     * Class names to apply to the root element when empty
     */
    emptyRoot: string | string[];
    /**
     * Class names to apply to the header element
     */
    header: string | string[];
    /**
     * Class names to apply to the header icon element
     */
    headerIcon: string | string[];
    /**
     * Class names to apply to the header title element
     */
    headerTitle: string | string[];
    /**
     * Class names to apply to the skeleton container element
     */
    skeleton: string | string[];
    /**
     * Class names to apply to each skeleton item element
     */
    skeletonItem: string | string[];
    /**
     * Class names to apply to the list element
     */
    list: string | string[];
    /**
     * Class names to apply to each item element
     */
    item: string | string[];
    /**
     * Class names to apply to the button element
     */
    button: string | string[];
    /**
     * Class names to apply to the label element
     */
    label: string | string[];
    /**
     * Class names to apply to the count element
     */
    count: string | string[];
};
export declare function createFilterSuggestionsComponent({ createElement }: Renderer): (userProps: FilterSuggestionsProps) => JSX.Element | null;
