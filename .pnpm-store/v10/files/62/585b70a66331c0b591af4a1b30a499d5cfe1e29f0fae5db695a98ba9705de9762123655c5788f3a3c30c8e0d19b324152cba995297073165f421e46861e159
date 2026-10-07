import React from 'react';
import type { CurrentRefinementsConnectorParamsItem } from 'instantsearch.js/es/connectors/current-refinements/connectCurrentRefinements';
export type CurrentRefinementsProps = React.ComponentProps<'div'> & {
    classNames?: Partial<CurrentRefinementsClassNames>;
    items?: Array<Pick<CurrentRefinementsConnectorParamsItem, 'label' | 'refinements' | 'refine'> & Record<string, unknown>>;
    hasRefinements?: boolean;
};
export type CurrentRefinementsClassNames = {
    /**
     * Class names to apply to the root element
     */
    root: string;
    /**
     * Class names to apply to the root element when there are no refinements possible
     */
    noRefinementRoot: string;
    /**
     * Class names to apply to the list element
     */
    list: string;
    /**
     * Class names to apply to the list element when there are no refinements possible
     */
    noRefinementList: string;
    /**
     * Class names to apply to each refinement
     */
    item: string;
    /**
     * Class names to apply to the label of each refinement
     */
    label: string;
    /**
     * Class names to apply to the container of each refinement's value
     */
    category: string;
    /**
     * Class names to apply to the text element of each refinement's value
     */
    categoryLabel: string;
    /**
     * Class names to apply to the each refinement's delete button
     */
    delete: string;
};
export declare function CurrentRefinements({ classNames, items, hasRefinements, ...props }: CurrentRefinementsProps): React.JSX.Element;
