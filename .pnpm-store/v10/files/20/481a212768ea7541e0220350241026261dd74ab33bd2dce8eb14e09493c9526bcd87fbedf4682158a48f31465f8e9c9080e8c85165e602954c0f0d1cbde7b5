import React from 'react';
import type { HitsPerPageConnectorParamsItem as HitsPerPageItem } from 'instantsearch.js/es/connectors/hits-per-page/connectHitsPerPage';
export type HitsPerPageProps = Omit<React.ComponentProps<'div'>, 'onChange'> & {
    items: HitsPerPageItem[];
    onChange: (value: number) => void;
    currentValue: number;
    classNames?: Partial<HitsPerPageClassNames>;
};
export type HitsPerPageClassNames = {
    /**
     * Class names to apply to the root element
     */
    root: string;
    /**
     * Class names to apply to the select element
     */
    select: string;
    /**
     * Class names to apply to the option element
     */
    option: string;
};
export declare function HitsPerPage({ items, onChange, currentValue, classNames, ...props }: HitsPerPageProps): React.JSX.Element;
