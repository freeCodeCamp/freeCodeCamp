import React from 'react';
import type { HitsPerPageProps as HitsPerPageUiComponentProps } from '../ui/HitsPerPage';
import type { UseHitsPerPageProps } from 'react-instantsearch-core';
type UiProps = Pick<HitsPerPageUiComponentProps, 'items' | 'onChange' | 'currentValue'>;
export type HitsPerPageProps = Omit<HitsPerPageUiComponentProps, keyof UiProps> & UseHitsPerPageProps;
export declare function HitsPerPage({ items: userItems, transformItems, ...props }: HitsPerPageProps): React.JSX.Element;
export {};
