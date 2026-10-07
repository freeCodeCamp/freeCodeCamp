
import { h } from 'preact';
import type { ComponentCSSClasses } from '../../types';
import type { PaginationCSSClasses, PaginationTemplates } from '../../widgets/pagination/pagination';
export type PaginationComponentCSSClasses = ComponentCSSClasses<PaginationCSSClasses>;
export type PaginationComponentTemplates = Required<PaginationTemplates>;
export type PaginationProps = {
    createURL: (value: number) => string;
    cssClasses: PaginationComponentCSSClasses;
    templates: PaginationComponentTemplates;
    currentPage: number;
    nbPages: number;
    pages: number[];
    isFirstPage: boolean;
    isLastPage: boolean;
    setCurrentPage: (value: number) => void;
    showFirst?: boolean;
    showLast?: boolean;
    showPrevious?: boolean;
    showNext?: boolean;
};
declare function Pagination(props: PaginationProps): h.JSX.Element;
export default Pagination;
