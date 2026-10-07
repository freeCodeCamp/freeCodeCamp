import { Component } from "react";
import { TransitionProps } from "./Transition";

export interface CSSTransitionClassNames {
    appear?: string | undefined;
    appearActive?: string | undefined;
    appearDone?: string | undefined;
    enter?: string | undefined;
    enterActive?: string | undefined;
    enterDone?: string | undefined;
    exit?: string | undefined;
    exitActive?: string | undefined;
    exitDone?: string | undefined;
}

export type CSSTransitionProps<Ref extends undefined | HTMLElement = undefined> = TransitionProps<Ref> & {
    /**
     * The animation `classNames` applied to the component as it enters or exits.
     * A single name can be provided and it will be suffixed for each stage: e.g.
     *
     * `classNames="fade"` applies `fade-enter`, `fade-enter-active`,
     * `fade-exit`, `fade-exit-active`, `fade-appear`, and `fade-appear-active`.
     *
     * Each individual classNames can also be specified independently like:
     *
     * ```js
     * classNames={{
     *   appear: 'my-appear',
     *   appearActive: 'my-appear-active',
     *   appearDone: 'my-appear-done',
     *   enter: 'my-enter',
     *   enterActive: 'my-enter-active',
     *   enterDone: 'my-enter-done',
     *   exit: 'my-exit',
     *   exitActive: 'my-exit-active',
     *   exitDone: 'my-exit-done'
     * }}
     * ```
     */
    classNames?: string | CSSTransitionClassNames | undefined;
};

declare class CSSTransition<Ref extends undefined | HTMLElement> extends Component<CSSTransitionProps<Ref>> {}

export default CSSTransition;
