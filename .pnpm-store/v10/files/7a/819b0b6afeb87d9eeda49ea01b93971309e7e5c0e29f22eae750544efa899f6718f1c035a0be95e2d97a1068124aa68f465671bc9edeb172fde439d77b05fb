import { type ElementType, type MutableRefObject, type Ref } from 'react';
import type { Props, ReactTag } from '../../types.js';
import { Features, type HasDisplayName, type PropsForFeatures, type RefProp } from '../../utils/render.js';
export interface TransitionClasses {
    enter?: string;
    enterFrom?: string;
    enterTo?: string;
    entered?: string;
    leave?: string;
    leaveFrom?: string;
    leaveTo?: string;
}
export interface TransitionEvents {
    beforeEnter?: () => void;
    afterEnter?: () => void;
    beforeLeave?: () => void;
    afterLeave?: () => void;
}
export type TransitionChildProps<TTag extends ReactTag> = Props<TTag, TransitionChildRenderPropArg, never, PropsForFeatures<typeof TransitionChildRenderFeatures> & TransitionClasses & TransitionEvents & {
    appear?: boolean;
}>;
declare let DEFAULT_TRANSITION_CHILD_TAG: "div";
type TransitionChildRenderPropArg = MutableRefObject<HTMLDivElement>;
declare let TransitionChildRenderFeatures: Features;
declare function TransitionChildFn<TTag extends ElementType = typeof DEFAULT_TRANSITION_CHILD_TAG>(props: TransitionChildProps<TTag>, ref: Ref<HTMLElement>): JSX.Element;
export type TransitionRootProps<TTag extends ElementType> = TransitionChildProps<TTag> & {
    show?: boolean;
    appear?: boolean;
};
declare function TransitionRootFn<TTag extends ElementType = typeof DEFAULT_TRANSITION_CHILD_TAG>(props: TransitionRootProps<TTag>, ref: Ref<HTMLElement>): JSX.Element;
export interface _internal_ComponentTransitionRoot extends HasDisplayName {
    <TTag extends ElementType = typeof DEFAULT_TRANSITION_CHILD_TAG>(props: TransitionRootProps<TTag> & RefProp<typeof TransitionRootFn>): JSX.Element;
}
export interface _internal_ComponentTransitionChild extends HasDisplayName {
    <TTag extends ElementType = typeof DEFAULT_TRANSITION_CHILD_TAG>(props: TransitionChildProps<TTag> & RefProp<typeof TransitionChildFn>): JSX.Element;
}
export declare let Transition: _internal_ComponentTransitionRoot & {
    Child: _internal_ComponentTransitionChild;
    Root: _internal_ComponentTransitionRoot;
};
export {};
