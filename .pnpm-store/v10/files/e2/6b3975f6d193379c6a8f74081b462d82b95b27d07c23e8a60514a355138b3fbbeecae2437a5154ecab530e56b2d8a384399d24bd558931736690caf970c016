
import { h } from 'preact';
import type { BreadcrumbConnectorParamsItem } from '../../connectors/breadcrumb/connectBreadcrumb';
import type { PreparedTemplateProps } from '../../lib/templating';
import type { ComponentCSSClasses } from '../../types';
import type { BreadcrumbCSSClasses, BreadcrumbTemplates } from '../../widgets/breadcrumb/breadcrumb';
export type BreadcrumbComponentCSSClasses = ComponentCSSClasses<BreadcrumbCSSClasses>;
export type BreadcrumbComponentTemplates = Required<BreadcrumbTemplates>;
export type BreadcrumbProps = {
    items: BreadcrumbConnectorParamsItem[];
    cssClasses: BreadcrumbComponentCSSClasses;
    templateProps: PreparedTemplateProps<BreadcrumbComponentTemplates>;
    createURL: (value: BreadcrumbConnectorParamsItem['value']) => string;
    refine: (value: BreadcrumbConnectorParamsItem['value']) => void;
    canRefine?: boolean;
};
declare const Breadcrumb: ({ items, cssClasses, templateProps, createURL, refine, }: BreadcrumbProps) => h.JSX.Element;
export default Breadcrumb;
