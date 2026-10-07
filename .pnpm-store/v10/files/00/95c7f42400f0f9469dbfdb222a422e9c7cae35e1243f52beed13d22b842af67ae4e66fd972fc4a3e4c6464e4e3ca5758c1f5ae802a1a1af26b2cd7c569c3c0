import React, { type ElementType, type ReactNode, type Ref } from 'react';
import type { Props } from '../../types.js';
import { type HasDisplayName, type RefProp } from '../../utils/render.js';
interface SharedData {
    slot?: {};
    name?: string;
    props?: {};
}
interface LabelProviderProps extends SharedData {
    children: ReactNode;
}
export declare function useLabels(): [string | undefined, (props: LabelProviderProps) => JSX.Element];
declare let DEFAULT_LABEL_TAG: "label";
export type LabelProps<TTag extends ElementType = typeof DEFAULT_LABEL_TAG> = Props<TTag> & {
    passive?: boolean;
};
declare function LabelFn<TTag extends ElementType = typeof DEFAULT_LABEL_TAG>(props: LabelProps<TTag>, ref: Ref<HTMLLabelElement>): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export interface _internal_ComponentLabel extends HasDisplayName {
    <TTag extends ElementType = typeof DEFAULT_LABEL_TAG>(props: LabelProps<TTag> & RefProp<typeof LabelFn>): JSX.Element;
}
export declare let Label: _internal_ComponentLabel;
export {};
