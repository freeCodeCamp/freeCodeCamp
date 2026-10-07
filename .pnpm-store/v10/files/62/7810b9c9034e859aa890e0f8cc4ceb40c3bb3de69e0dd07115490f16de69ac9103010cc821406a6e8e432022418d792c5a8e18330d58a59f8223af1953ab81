import React from 'react';
import type { UseSortByProps } from 'react-instantsearch-core';
export type SortByProps = Omit<React.ComponentProps<'div'>, 'onChange'> & Pick<UseSortByProps, 'items'> & Pick<React.ComponentProps<'select'>, 'value'> & {
    onChange?: (value: string) => void;
    classNames?: Partial<SortByClassNames>;
};
export type SortByClassNames = {
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
export declare function SortBy({ items, value, onChange, classNames, ...props }: SortByProps): React.JSX.Element;
