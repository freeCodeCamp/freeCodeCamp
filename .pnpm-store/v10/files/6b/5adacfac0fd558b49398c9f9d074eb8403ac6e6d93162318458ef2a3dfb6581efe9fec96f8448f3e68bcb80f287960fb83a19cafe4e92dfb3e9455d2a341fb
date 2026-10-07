import React from 'react';
import type { RangeInputProps as RangeInputUiProps } from '../ui/RangeInput';
import type { UseRangeProps } from 'react-instantsearch-core';
type UiProps = Pick<RangeInputUiProps, 'disabled' | 'onSubmit' | 'range' | 'start' | 'step' | 'translations'>;
export type RangeInputProps = Omit<RangeInputUiProps, keyof UiProps> & UseRangeProps & {
    translations?: Partial<UiProps['translations']>;
};
export declare function RangeInput({ attribute, min, max, precision, translations, ...props }: RangeInputProps): React.JSX.Element;
export {};
