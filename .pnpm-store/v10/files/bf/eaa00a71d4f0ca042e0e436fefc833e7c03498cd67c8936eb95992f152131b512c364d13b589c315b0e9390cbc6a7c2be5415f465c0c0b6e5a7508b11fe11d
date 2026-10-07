import React from 'react';
import type { ClearRefinementsProps as ClearRefinementsUiComponentProps } from '../ui/ClearRefinements';
import type { UseClearRefinementsProps } from 'react-instantsearch-core';
type UiProps = Pick<ClearRefinementsUiComponentProps, 'disabled' | 'onClick' | 'translations'>;
export type ClearRefinementsProps = Omit<ClearRefinementsUiComponentProps, keyof UiProps> & UseClearRefinementsProps & {
    translations?: Partial<UiProps['translations']>;
};
export declare function ClearRefinements({ includedAttributes, excludedAttributes, transformItems, translations, ...props }: ClearRefinementsProps): React.JSX.Element;
export {};
