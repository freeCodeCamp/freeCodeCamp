import type { Connector, Widget, WidgetDescription } from 'instantsearch.js';
export type AdditionalWidgetProperties = Partial<Widget<WidgetDescription>> & {
    skipSuspense?: boolean;
};
export declare function useConnector<TProps extends Record<string, unknown>, TDescription extends WidgetDescription>(connector: Connector<TDescription, TProps>, props?: TProps, { skipSuspense, ...additionalWidgetProperties }?: AdditionalWidgetProperties): TDescription['renderState'];
