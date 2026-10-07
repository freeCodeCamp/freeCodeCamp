import React from 'react';
import type { PaginationProps as PaginationUiComponentProps } from '../ui/Pagination';
import type { UsePaginationProps } from 'react-instantsearch-core';
type UiProps = Pick<PaginationUiComponentProps, 'pages' | 'currentPage' | 'isFirstPage' | 'isLastPage' | 'nbPages' | 'createURL' | 'onNavigate' | 'translations'>;
export type PaginationProps = Omit<PaginationUiComponentProps, keyof UiProps> & UsePaginationProps & {
    translations?: Partial<UiProps['translations']>;
};
export declare function Pagination({ showFirst, showPrevious, showNext, showLast, padding, totalPages, translations, ...props }: PaginationProps): React.JSX.Element;
export {};
