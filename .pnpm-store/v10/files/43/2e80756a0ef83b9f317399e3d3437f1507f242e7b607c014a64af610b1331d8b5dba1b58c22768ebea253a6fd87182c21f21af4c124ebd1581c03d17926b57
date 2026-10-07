import React from 'react';
import type { DynamicWidgetsConnectorParams } from 'instantsearch.js/es/connectors/dynamic-widgets/connectDynamicWidgets';
import type { ComponentType, ReactNode } from 'react';
type AtLeastOne<TTarget, TMapped = {
    [Key in keyof TTarget]: Pick<TTarget, Key>;
}> = Partial<TTarget> & TMapped[keyof TMapped];
export type DynamicWidgetsProps = Omit<DynamicWidgetsConnectorParams, 'widgets' | 'fallbackWidget'> & AtLeastOne<{
    children: ReactNode;
    fallbackComponent: ComponentType<{
        attribute: string;
    }>;
}>;
export declare function DynamicWidgets({ children, fallbackComponent: Fallback, ...props }: DynamicWidgetsProps): React.JSX.Element;
export {};
