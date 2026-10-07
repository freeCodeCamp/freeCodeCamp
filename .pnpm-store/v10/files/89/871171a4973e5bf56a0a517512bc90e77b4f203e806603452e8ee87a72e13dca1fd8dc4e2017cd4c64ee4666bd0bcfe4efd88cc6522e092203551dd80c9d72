import { ElementType, ReactElement } from "react";
export {};

// extracted from:
// - https://github.com/facebook/react/blob/v16.0.0/src/renderers/testing/ReactTestRendererFiberEntry.js
// - https://reactjs.org/docs/test-renderer.html

export interface ReactTestRendererJSON {
    type: string;
    props: { [propName: string]: any };
    children: null | ReactTestRendererNode[];
}
export type ReactTestRendererNode = ReactTestRendererJSON | string;
export interface ReactTestRendererTree extends ReactTestRendererJSON {
    nodeType: "component" | "host";
    instance: any;
    rendered: null | ReactTestRendererTree | ReactTestRendererTree[];
}
export interface ReactTestInstance {
    instance: any;
    type: ElementType;
    props: { [propName: string]: any };
    parent: null | ReactTestInstance;
    children: Array<ReactTestInstance | string>;

    find(predicate: (node: ReactTestInstance) => boolean): ReactTestInstance;
    findByType(type: ElementType): ReactTestInstance;
    findByProps(props: { [propName: string]: any }): ReactTestInstance;

    findAll(predicate: (node: ReactTestInstance) => boolean, options?: { deep: boolean }): ReactTestInstance[];
    findAllByType(type: ElementType, options?: { deep: boolean }): ReactTestInstance[];
    findAllByProps(props: { [propName: string]: any }, options?: { deep: boolean }): ReactTestInstance[];
}
export interface ReactTestRenderer {
    toJSON(): null | ReactTestRendererJSON | ReactTestRendererJSON[];
    toTree(): null | ReactTestRendererTree;
    unmount(nextElement?: ReactElement): void;
    update(nextElement: ReactElement): void;
    getInstance(): null | ReactTestInstance;
    root: ReactTestInstance;
}
export interface TestRendererOptions {
    createNodeMock(element: ReactElement): any;
}
export function create(nextElement: ReactElement, options?: TestRendererOptions): ReactTestRenderer;

// VoidOrUndefinedOnly is here to forbid any sneaky "Promise" returns.
// the actual return value is always a "DebugPromiseLike".
declare const UNDEFINED_VOID_ONLY: unique symbol;
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
type VoidOrUndefinedOnly = void | { [UNDEFINED_VOID_ONLY]: never };
/**
 * Wrap any code rendering and triggering updates to your components into `act()` calls.
 *
 * Ensures that the behavior in your tests matches what happens in the browser
 * more closely by executing pending `useEffect`s before returning. This also
 * reduces the amount of re-renders done.
 *
 * @param callback An asynchronous, void callback that will execute as a single, complete React commit.
 *
 * @see https://reactjs.org/blog/2019/02/06/react-v16.8.0.html#testing-hooks
 */
// VoidOrUndefinedOnly is here to forbid any sneaky return values
export function act(callback: () => Promise<VoidOrUndefinedOnly>): Promise<undefined>;
/**
 * Wrap any code rendering and triggering updates to your components into `act()` calls.
 *
 * Ensures that the behavior in your tests matches what happens in the browser
 * more closely by executing pending `useEffect`s before returning. This also
 * reduces the amount of re-renders done.
 *
 * @param callback A synchronous, void callback that will execute as a single, complete React commit.
 *
 * @see https://reactjs.org/blog/2019/02/06/react-v16.8.0.html#testing-hooks
 */
export function act(callback: () => VoidOrUndefinedOnly): DebugPromiseLike;

// Intentionally doesn't extend PromiseLike<never>.
// Ideally this should be as hard to accidentally use as possible.
export interface DebugPromiseLike {
    // the actual then() in here is 1-ary, but that doesn't count as a PromiseLike.
    then(onfulfilled: (value: never) => never, onrejected: (reason: never) => never): never;
}
