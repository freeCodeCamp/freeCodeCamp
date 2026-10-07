/**
 * These are types for things that are present in the React `canary` release channel.
 *
 * To load the types declared here in an actual project, there are three ways. The easiest one,
 * if your `tsconfig.json` already has a `"types"` array in the `"compilerOptions"` section,
 * is to add `"react/canary"` to the `"types"` array.
 *
 * Alternatively, a specific import syntax can to be used from a typescript file.
 * This module does not exist in reality, which is why the {} is important:
 *
 * ```ts
 * import {} from 'react/canary'
 * ```
 *
 * It is also possible to include it through a triple-slash reference:
 *
 * ```ts
 * /// <reference types="react/canary" />
 * ```
 *
 * Either the import or the reference only needs to appear once, anywhere in the project.
 */

// See https://github.com/facebook/react/blob/main/packages/react/src/React.js to see how the exports are declared,

import React = require(".");

export {};

declare const UNDEFINED_VOID_ONLY: unique symbol;
type VoidOrUndefinedOnly = void | { [UNDEFINED_VOID_ONLY]: never };

type NativeToggleEvent = ToggleEvent;

declare module "." {
    export type Usable<T> = PromiseLike<T> | Context<T>;

    export function use<T>(usable: Usable<T>): T;

    interface ServerContextJSONArray extends ReadonlyArray<ServerContextJSONValue> {}
    export type ServerContextJSONValue =
        | string
        | boolean
        | number
        | null
        | ServerContextJSONArray
        | { [key: string]: ServerContextJSONValue };
    export interface ServerContext<T extends ServerContextJSONValue> {
        Provider: Provider<T>;
    }
    /**
     * Accepts a context object (the value returned from `React.createContext` or `React.createServerContext`) and returns the current
     * context value, as given by the nearest context provider for the given context.
     *
     * @version 16.8.0
     * @see {@link https://react.dev/reference/react/useContext}
     */
    function useContext<T extends ServerContextJSONValue>(context: ServerContext<T>): T;
    export function createServerContext<T extends ServerContextJSONValue>(
        globalName: string,
        defaultValue: T,
    ): ServerContext<T>;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    export function cache<CachedFunction extends Function>(fn: CachedFunction): CachedFunction;

    export function unstable_useCacheRefresh(): () => void;

    interface DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_FORM_ACTIONS {
        functions: (formData: FormData) => void | Promise<void>;
    }

    export interface TransitionStartFunction {
        /**
         * Marks all state updates inside the async function as transitions
         *
         * @see {https://react.dev/reference/react/useTransition#starttransition}
         *
         * @param callback
         */
        (callback: () => Promise<VoidOrUndefinedOnly>): void;
    }

    /**
     * Similar to `useTransition` but allows uses where hooks are not available.
     *
     * @param callback An _asynchronous_ function which causes state updates that can be deferred.
     */
    export function startTransition(scope: () => Promise<VoidOrUndefinedOnly>): void;

    export function useOptimistic<State>(
        passthrough: State,
    ): [State, (action: State | ((pendingState: State) => State)) => void];
    export function useOptimistic<State, Action>(
        passthrough: State,
        reducer: (state: State, action: Action) => State,
    ): [State, (action: Action) => void];

    interface DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES {
        cleanup: () => VoidOrUndefinedOnly;
    }

    export function useActionState<State>(
        action: (state: Awaited<State>) => State | Promise<State>,
        initialState: Awaited<State>,
        permalink?: string,
    ): [state: Awaited<State>, dispatch: () => void, isPending: boolean];
    export function useActionState<State, Payload>(
        action: (state: Awaited<State>, payload: Payload) => State | Promise<State>,
        initialState: Awaited<State>,
        permalink?: string,
    ): [state: Awaited<State>, dispatch: (payload: Payload) => void, isPending: boolean];

    interface DOMAttributes<T> {
        // Transition Events
        onTransitionCancel?: TransitionEventHandler<T> | undefined;
        onTransitionCancelCapture?: TransitionEventHandler<T> | undefined;
        onTransitionRun?: TransitionEventHandler<T> | undefined;
        onTransitionRunCapture?: TransitionEventHandler<T> | undefined;
        onTransitionStart?: TransitionEventHandler<T> | undefined;
        onTransitionStartCapture?: TransitionEventHandler<T> | undefined;
    }

    type ToggleEventHandler<T = Element> = EventHandler<ToggleEvent<T>>;

    interface HTMLAttributes<T> {
        popover?: "" | "auto" | "manual" | "hint" | undefined;
        popoverTargetAction?: "toggle" | "show" | "hide" | undefined;
        popoverTarget?: string | undefined;
        onToggle?: ToggleEventHandler<T> | undefined;
        onBeforeToggle?: ToggleEventHandler<T> | undefined;
    }

    interface ToggleEvent<T = Element> extends SyntheticEvent<T, NativeToggleEvent> {
        oldState: "closed" | "open";
        newState: "closed" | "open";
    }

    interface LinkHTMLAttributes<T> {
        precedence?: string | undefined;
    }

    interface StyleHTMLAttributes<T> {
        href?: string | undefined;
        precedence?: string | undefined;
    }

    /**
     * @internal Use `Awaited<ReactNode>` instead
     */
    // Helper type to enable `Awaited<ReactNode>`.
    // Must be a copy of the non-thenables of `ReactNode`.
    type AwaitedReactNode =
        | ReactElement
        | string
        | number
        | Iterable<AwaitedReactNode>
        | ReactPortal
        | boolean
        | null
        | undefined;
    interface DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES {
        promises: Promise<AwaitedReactNode>;
        bigints: bigint;
    }
}
