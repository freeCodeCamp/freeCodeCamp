import React from 'react';
import type { useRange } from 'react-instantsearch-core';
type RangeRenderState = ReturnType<typeof useRange>;
export type RangeInputProps = Omit<React.ComponentProps<'div'>, 'onSubmit'> & Pick<RangeRenderState, 'range' | 'start'> & {
    classNames?: Partial<RangeInputClassNames>;
    disabled: boolean;
    onSubmit: RangeRenderState['refine'];
    step?: number;
    translations: RangeInputTranslations;
};
export type RangeInputClassNames = {
    /**
     * Class names to apply to the root element
     */
    root: string;
    /**
     * Class names to apply to the root element when there are no refinements possible
     */
    noRefinementRoot: string;
    /**
     * Class names to apply to the form element
     */
    form: string;
    /**
     * Class names to apply to each label element
     */
    label: string;
    /**
     * Class names to apply to each input element
     */
    input: string;
    /**
     * Class names to apply to the minimum input element
     */
    inputMin: string;
    /**
     * Class names to apply to the maximum input element
     */
    inputMax: string;
    /**
     * Class names to apply to the separator element
     */
    separator: string;
    /**
     * Class names to apply to the submit button
     */
    submit: string;
};
export type RangeInputTranslations = {
    /**
     * The label of the separator, between the minimum and maximum inputs
     */
    separatorElementText: string;
    /**
     * The label of the submit button
     */
    submitButtonText: string;
};
export declare function RangeInput({ classNames, range: { min, max }, start: [minValue, maxValue], step, disabled, onSubmit, translations, ...props }: RangeInputProps): React.JSX.Element;
export {};
