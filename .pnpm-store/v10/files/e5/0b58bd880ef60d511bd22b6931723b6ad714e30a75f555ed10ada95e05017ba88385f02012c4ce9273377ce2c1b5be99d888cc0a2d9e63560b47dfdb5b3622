import React from 'react';
export type ToggleRefinementClassNames = {
    /**
     * Class names to apply to the root element
     */
    root: string;
    /**
     * Class names to apply to the label element
     */
    label: string;
    /**
     * Class names to apply to the checkbox element
     */
    checkbox: string;
    /**
     * Class names to apply to the label text
     */
    labelText: string;
};
export type ToggleRefinementProps = Omit<React.ComponentProps<'div'>, 'onChange'> & Pick<React.ComponentProps<'input'>, 'checked'> & {
    classNames?: Partial<ToggleRefinementClassNames>;
    onChange: (isChecked: boolean) => void;
    label: string;
};
export declare function ToggleRefinement({ classNames, checked, onChange, label, ...props }: ToggleRefinementProps): React.JSX.Element;
