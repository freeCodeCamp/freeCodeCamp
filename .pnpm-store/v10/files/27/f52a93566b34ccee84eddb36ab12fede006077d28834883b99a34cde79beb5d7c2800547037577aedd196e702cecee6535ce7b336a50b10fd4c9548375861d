import { Component, ReactNode } from "react";

type RefHandler<
    RefElement extends undefined | HTMLElement,
    ImplicitRefHandler extends (node: HTMLElement, ...args: any[]) => void,
    ExplicitRefHandler extends (...args: any[]) => void,
> = {
    implicit: ImplicitRefHandler;
    explicit: ExplicitRefHandler;
}[RefElement extends undefined ? "implicit" : "explicit"];

export type EndHandler<RefElement extends undefined | HTMLElement> = RefHandler<
    RefElement,
    (node: HTMLElement, done: () => void) => void,
    (done: () => void) => void
>;

export type EnterHandler<RefElement extends undefined | HTMLElement> = RefHandler<
    RefElement,
    (node: HTMLElement, isAppearing: boolean) => void,
    (isAppearing: boolean) => void
>;

export type ExitHandler<E extends undefined | HTMLElement> = RefHandler<E, (node: HTMLElement) => void, () => void>;

export const UNMOUNTED = "unmounted";
export const EXITED = "exited";
export const ENTERING = "entering";
export const ENTERED = "entered";
export const EXITING = "exiting";

export interface TransitionActions {
    /**
     * Normally a component is not transitioned if it is shown when the
     * `<Transition>` component mounts. If you want to transition on the first
     * mount set  appear to true, and the component will transition in as soon
     * as the `<Transition>` mounts. Note: there are no specific "appear" states.
     * appear only adds an additional enter transition.
     */
    appear?: boolean | undefined;

    /**
     * Enable or disable enter transitions.
     */
    enter?: boolean | undefined;

    /**
     * Enable or disable exit transitions.
     */
    exit?: boolean | undefined;
}

interface BaseTransitionProps<RefElement extends undefined | HTMLElement> extends TransitionActions {
    /**
     * Show the component; triggers the enter or exit states
     */
    in?: boolean | undefined;

    /**
     * By default the child component is mounted immediately along with the
     * parent Transition component. If you want to "lazy mount" the component on
     * the first `in={true}` you can set `mountOnEnter`. After the first enter
     * transition the component will stay mounted, even on "exited", unless you
     * also specify `unmountOnExit`.
     */
    mountOnEnter?: boolean | undefined;

    /**
     * By default the child component stays mounted after it reaches the
     * 'exited' state. Set `unmountOnExit` if you'd prefer to unmount the
     * component after it finishes exiting.
     */
    unmountOnExit?: boolean | undefined;

    /**
     * Callback fired before the "entering" status is applied. An extra
     * parameter `isAppearing` is supplied to indicate if the enter stage is
     * occurring on the initial mount
     */
    onEnter?: EnterHandler<RefElement> | undefined;

    /**
     * Callback fired after the "entering" status is applied. An extra parameter
     * isAppearing is supplied to indicate if the enter stage is occurring on
     * the initial mount
     */
    onEntering?: EnterHandler<RefElement> | undefined;

    /**
     * Callback fired after the "entered" status is applied. An extra parameter
     * isAppearing is supplied to indicate if the enter stage is occurring on
     * the initial mount
     */
    onEntered?: EnterHandler<RefElement> | undefined;

    /**
     * Callback fired before the "exiting" status is applied.
     */
    onExit?: ExitHandler<RefElement> | undefined;

    /**
     * Callback fired after the "exiting" status is applied.
     */
    onExiting?: ExitHandler<RefElement> | undefined;

    /**
     * Callback fired after the "exited" status is applied.
     */
    onExited?: ExitHandler<RefElement> | undefined;

    /**
     * A function child can be used instead of a React element. This function is
     * called with the current transition status ('entering', 'entered',
     * 'exiting',  'exited', 'unmounted'), which can be used to apply context
     * specific props to a component.
     * ```jsx
     *    <Transition in={this.state.in} timeout={150}>
     *        {state => (
     *            <MyComponent className={`fade fade-${state}`} />
     *        )}
     *    </Transition>
     * ```
     */
    children?: TransitionChildren | undefined;

    /**
     * A React reference to DOM element that need to transition: https://stackoverflow.com/a/51127130/4671932
     * When `nodeRef` prop is used, node is not passed to callback functions (e.g. onEnter) because user already has direct access to the node.
     * When changing `key` prop of `Transition` in a `TransitionGroup` a new `nodeRef` need to be provided to `Transition` with changed `key`
     * prop (@see https://github.com/reactjs/react-transition-group/blob/master/test/Transition-test.js).
     */
    nodeRef?: React.Ref<RefElement> | undefined;

    [prop: string]: any;
}

export type TransitionStatus = typeof ENTERING | typeof ENTERED | typeof EXITING | typeof EXITED | typeof UNMOUNTED;
export type TransitionChildren =
    | ReactNode
    | ((status: TransitionStatus, childProps?: Record<string, unknown>) => ReactNode);

export interface TimeoutProps<RefElement extends undefined | HTMLElement> extends BaseTransitionProps<RefElement> {
    /**
     * The duration of the transition, in milliseconds. Required unless addEndListener is provided.
     *
     * You may specify a single timeout for all transitions:
     * ```js
     *   timeout={500}
     * ```
     * or individually:
     * ```js
     * timeout={{
     *  appear: 500,
     *  enter: 300,
     *  exit: 500,
     * }}
     * ```
     * - appear defaults to the value of `enter`
     * - enter defaults to `0`
     * - exit defaults to `0`
     */
    timeout: number | { appear?: number | undefined; enter?: number | undefined; exit?: number | undefined };

    /**
     * Add a custom transition end trigger. Called with the transitioning DOM
     * node and a done callback. Allows for more fine grained transition end
     * logic. Note: Timeouts are still used as a fallback if provided.
     */
    addEndListener?: EndHandler<RefElement> | undefined;
}

export interface EndListenerProps<Ref extends undefined | HTMLElement> extends BaseTransitionProps<Ref> {
    /**
     * The duration of the transition, in milliseconds. Required unless addEndListener is provided.
     *
     * You may specify a single timeout for all transitions:
     * ```js
     *   timeout={500}
     * ```
     * or individually:
     * ```js
     * timeout={{
     *  appear: 500,
     *  enter: 300,
     *  exit: 500,
     * }}
     * ```
     * - appear defaults to the value of `enter`
     * - enter defaults to `0`
     * - exit defaults to `0`
     */
    timeout?:
        | number
        | { appear?: number | undefined; enter?: number | undefined; exit?: number | undefined }
        | undefined;
    /**
     * Add a custom transition end trigger. Called with the transitioning DOM
     * node and a done callback. Allows for more fine grained transition end
     * logic. Note: Timeouts are still used as a fallback if provided.
     */
    addEndListener: EndHandler<Ref>;
}

export type TransitionProps<RefElement extends undefined | HTMLElement = undefined> =
    | TimeoutProps<RefElement>
    | EndListenerProps<RefElement>;

/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * It's used to animate the mounting and unmounting of Component, but can also
 * be used to describe in-place transition states as well.
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the components.
 * It's up to you to give meaning and effect to those states. For example we can
 * add styles to a component when it enters or exits:
 *
 * ```jsx
 * import Transition from 'react-transition-group/Transition';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {(state) => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm A fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 */
declare class Transition<RefElement extends HTMLElement | undefined> extends Component<TransitionProps<RefElement>> {}

export default Transition;
