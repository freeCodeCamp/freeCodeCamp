import { type ElementType, type MutableRefObject, type Ref } from 'react';
import type { Props } from '../../types.js';
import { type HasDisplayName, type RefProp } from '../../utils/render.js';
type Containers = (() => Iterable<HTMLElement>) | MutableRefObject<Set<MutableRefObject<HTMLElement | null>>>;
declare let DEFAULT_FOCUS_TRAP_TAG: "div";
declare enum Features {
    /** No features enabled for the focus trap. */
    None = 1,
    /** Ensure that we move focus initially into the container. */
    InitialFocus = 2,
    /** Ensure that pressing `Tab` and `Shift+Tab` is trapped within the container. */
    TabLock = 4,
    /** Ensure that programmatically moving focus outside of the container is disallowed. */
    FocusLock = 8,
    /** Ensure that we restore the focus when unmounting the focus trap. */
    RestoreFocus = 16,
    /** Enable all features. */
    All = 30
}
export type FocusTrapProps<TTag extends ElementType> = Props<TTag> & {
    initialFocus?: MutableRefObject<HTMLElement | null>;
    features?: Features;
    containers?: Containers;
};
declare function FocusTrapFn<TTag extends ElementType = typeof DEFAULT_FOCUS_TRAP_TAG>(props: FocusTrapProps<TTag>, ref: Ref<HTMLDivElement>): JSX.Element;
export interface _internal_ComponentFocusTrap extends HasDisplayName {
    <TTag extends ElementType = typeof DEFAULT_FOCUS_TRAP_TAG>(props: FocusTrapProps<TTag> & RefProp<typeof FocusTrapFn>): JSX.Element;
}
export declare let FocusTrap: _internal_ComponentFocusTrap & {
    features: typeof Features;
};
export {};
