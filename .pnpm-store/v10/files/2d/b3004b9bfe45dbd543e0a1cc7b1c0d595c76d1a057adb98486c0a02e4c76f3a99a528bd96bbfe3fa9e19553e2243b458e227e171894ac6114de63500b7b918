import { Component, ReactElement } from "react";

export enum modes {
    out = "out-in",
    in = "in-out",
}

export interface SwitchTransitionProps {
    /**
     * Transition modes.
     * `out-in`: Current element transitions out first, then when complete, the new element transitions in.
     * `in-out`: New element transitions in first, then when complete, the current element transitions out.
     */
    mode?: "out-in" | "in-out" | undefined;

    /**
     * Any `Transition` or `CSSTransition` component
     */
    children: ReactElement;
}

/**
 * A transition component inspired by the [vue transition modes](https://vuejs.org/v2/guide/transitions.html#Transition-Modes).
 * You can use it when you want to control the render between state transitions.
 * Based on the selected mode and the child's key which is the `Transition` or `CSSTransition` component, the `SwitchTransition` makes a consistent transition between them.
 *
 * If the `out-in` mode is selected, the `SwitchTransition` waits until the old child leaves and then inserts a new child.
 * If the `in-out` mode is selected, the `SwitchTransition` inserts a new child first, waits for the new child to enter and then removes the old child
 *
 * ```jsx
 * function App() {
 *  const [state, setState] = useState(false);
 *  return (
 *    <SwitchTransition>
 *      <FadeTransition key={state ? "Goodbye, world!" : "Hello, world!"}
 *        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
 *        classNames='fade' >
 *        <button onClick={() => setState(state => !state)}>
 *          {state ? "Goodbye, world!" : "Hello, world!"}
 *        </button>
 *      </FadeTransition>
 *    </SwitchTransition>
 *  )
 * }
 * ```
 */
declare class SwitchTransition extends Component<SwitchTransitionProps> {}

export default SwitchTransition;
