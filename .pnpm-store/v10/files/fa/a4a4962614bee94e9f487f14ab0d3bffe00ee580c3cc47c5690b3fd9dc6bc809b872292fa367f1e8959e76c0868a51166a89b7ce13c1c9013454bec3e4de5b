
import { h } from 'preact';
import type { ComponentCSSClasses, UnknownWidgetFactory } from '../../types';
import type { PanelCSSClasses, PanelSharedOptions, PanelTemplates } from '../../widgets/panel/panel';
export type PanelComponentCSSClasses = ComponentCSSClasses<Omit<PanelCSSClasses, 'collapseIcon'>>;
export type PanelComponentTemplates<TWidget extends UnknownWidgetFactory> = PanelTemplates<TWidget>;
export type PanelProps<TWidget extends UnknownWidgetFactory> = {
    hidden: boolean;
    collapsible: boolean;
    isCollapsed: boolean;
    data: PanelSharedOptions<TWidget>;
    cssClasses: PanelComponentCSSClasses;
    templates: PanelComponentTemplates<TWidget>;
    bodyElement: HTMLElement;
};
declare function Panel<TWidget extends UnknownWidgetFactory>(props: PanelProps<TWidget>): h.JSX.Element;
export default Panel;
