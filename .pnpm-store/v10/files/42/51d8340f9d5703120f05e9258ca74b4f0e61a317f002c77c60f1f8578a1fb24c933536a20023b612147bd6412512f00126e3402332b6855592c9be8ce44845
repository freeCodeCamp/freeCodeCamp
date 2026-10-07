
import type { Template, RenderOptions, WidgetFactory, InitOptions, Widget } from '../../types';
export type PanelCSSClasses = Partial<{
    /**
     * CSS classes to add to the root element of the widget.
     */
    root: string | string[];
    /**
     * CSS classes to add to the root element of the widget when there's no refinements.
     */
    noRefinementRoot: string | string[];
    /**
     * CSS classes to add to the root element when collapsible (`collapse` is defined).
     */
    collapsibleRoot: string | string[];
    /**
     * CSS classes to add to the root element when collapsed.
     */
    collapsedRoot: string | string[];
    /**
     * CSS classes to add to the collapse button element.
     */
    collapseButton: string | string[];
    /**
     * CSS classes to add to the collapse icon of the button.
     */
    collapseIcon: string | string[];
    /**
     * CSS classes to add to the header.
     */
    header: string | string[];
    /**
     * CSS classes to add to the body.
     */
    body: string | string[];
    /**
     * CSS classes to add to the footer.
     */
    footer: string | string[];
}>;
type AnyWidgetFactory = WidgetFactory<{
    $$type: string;
}, Record<string, any>, any>;
export type PanelTemplates<TWidget extends AnyWidgetFactory> = Partial<{
    /**
     * Template to use for the header.
     */
    header: Template<PanelRenderOptions<TWidget>>;
    /**
     * Template to use for the footer.
     */
    footer: Template<PanelRenderOptions<TWidget>>;
    /**
     * Template to use for collapse button.
     */
    collapseButtonText: Template<{
        collapsed: boolean;
    }>;
}>;
type GetWidgetRenderState<TWidgetFactory extends AnyWidgetFactory> = ReturnType<TWidgetFactory>['getWidgetRenderState'] extends (renderOptions: any) => infer TRenderState ? TRenderState extends Record<string, unknown> ? TRenderState : never : Record<string, unknown>;
export type PanelRenderOptions<TWidgetFactory extends AnyWidgetFactory> = RenderOptions & GetWidgetRenderState<TWidgetFactory>;
export type PanelSharedOptions<TWidgetFactory extends AnyWidgetFactory> = (InitOptions | RenderOptions) & GetWidgetRenderState<TWidgetFactory>;
export type PanelWidgetParams<TWidgetFactory extends AnyWidgetFactory> = {
    /**
     * A function that is called on each render to determine if the
     * panel should be hidden based on the render options.
     */
    hidden?: (options: PanelRenderOptions<TWidgetFactory>) => boolean;
    /**
     * A function that is called on each render to determine if the
     * panel should be collapsed based on the render options.
     */
    collapsed?: (options: PanelRenderOptions<TWidgetFactory>) => boolean;
    /**
     * The templates to use for the widget.
     */
    templates?: PanelTemplates<TWidgetFactory>;
    /**
     * The CSS classes to override.
     */
    cssClasses?: PanelCSSClasses;
};
type AugmentedWidget<TWidgetFactory extends AnyWidgetFactory, TOverriddenKeys extends keyof Widget = 'init' | 'render' | 'dispose'> = Omit<ReturnType<TWidgetFactory>, TOverriddenKeys | 'dependsOn' | 'getWidgetParameters'> & Pick<Required<Widget>, TOverriddenKeys>;
export type PanelWidget = <TWidgetFactory extends AnyWidgetFactory>(panelWidgetParams?: PanelWidgetParams<TWidgetFactory>) => (widgetFactory: TWidgetFactory) => (widgetParams: Parameters<TWidgetFactory>[0]) => AugmentedWidget<TWidgetFactory>;
/**
 * The panel widget wraps other widgets in a consistent panel design.
 * It also reacts, indicates and sets CSS classes when widgets are no longer relevant for refining.
 */
declare const panel: PanelWidget;
export default panel;
