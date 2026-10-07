import React from 'react';
import type { BreadcrumbProps as BreadcrumbUiProps } from '../ui/Breadcrumb';
import type { UseBreadcrumbProps } from 'react-instantsearch-core';
type UiProps = Pick<BreadcrumbUiProps, 'items' | 'hasItems' | 'createURL' | 'onNavigate' | 'translations'>;
export type BreadcrumbProps = Omit<BreadcrumbUiProps, keyof UiProps> & Omit<UseBreadcrumbProps, 'separator'> & {
    translations?: Partial<UiProps['translations']>;
};
export declare function Breadcrumb({ attributes, rootPath, separator, transformItems, translations, ...props }: BreadcrumbProps): React.JSX.Element;
export {};
