import React from 'react';
import type { SortByProps as SortByUiComponentProps } from '../ui/SortBy';
import type { UseSortByProps } from 'react-instantsearch-core';
type UiProps = Pick<SortByUiComponentProps, 'items' | 'value' | 'onChange'>;
export type SortByProps = Omit<SortByUiComponentProps, keyof UiProps> & UseSortByProps;
export declare function SortBy({ items, transformItems, ...props }: SortByProps): React.JSX.Element;
export {};
