/**
 * These are types for things that are present in the `experimental` builds of React but not yet
 * on a stable build.
 *
 * Once they are promoted to stable they can just be moved to the main index file.
 *
 * To load the types declared here in an actual project, there are three ways. The easiest one,
 * if your `tsconfig.json` already has a `"types"` array in the `"compilerOptions"` section,
 * is to add `"react/experimental"` to the `"types"` array.
 *
 * Alternatively, a specific import syntax can to be used from a typescript file.
 * This module does not exist in reality, which is why the {} is important:
 *
 * ```ts
 * import {} from 'react/experimental'
 * ```
 *
 * It is also possible to include it through a triple-slash reference:
 *
 * ```ts
 * /// <reference types="react/experimental" />
 * ```
 *
 * Either the import or the reference only needs to appear once, anywhere in the project.
 */

// See https://github.com/facebook/react/blob/master/packages/react/src/React.js to see how the exports are declared,
// and https://github.com/facebook/react/blob/master/packages/shared/ReactFeatureFlags.js to verify which APIs are
// flagged experimental or not. Experimental APIs will be tagged with `__EXPERIMENTAL__`.
//
// For the inputs of types exported as simply a fiber tag, the `beginWork` function of ReactFiberBeginWork.js
// is a good place to start looking for details; it generally calls prop validation functions or delegates
// all tasks done as part of the render phase (the concurrent part of the React update cycle).
//
// Suspense-related handling can be found in ReactFiberThrow.js.

import React = require("./canary");

export {};

declare const UNDEFINED_VOID_ONLY: unique symbol;
type VoidOrUndefinedOnly = void | { [UNDEFINED_VOID_ONLY]: never };

declare module "." {
    export interface SuspenseProps {
        /**
         * The presence of this prop indicates that the content is computationally expensive to render.
         * In other words, the tree is CPU bound and not I/O bound (e.g. due to fetching data).
         * @see {@link https://github.com/facebook/react/pull/19936}
         */
        unstable_expectedLoadTime?: number | undefined;
    }

    export type SuspenseListRevealOrder = "forwards" | "backwards" | "together";
    export type SuspenseListTailMode = "collapsed" | "hidden";

    export interface SuspenseListCommonProps {
        /**
         * Note that SuspenseList require more than one child;
         * it is a runtime warning to provide only a single child.
         *
         * It does, however, allow those children to be wrapped inside a single
         * level of `<React.Fragment>`.
         */
        children: ReactElement | Iterable<ReactElement>;
    }

    interface DirectionalSuspenseListProps extends SuspenseListCommonProps {
        /**
         * Defines the order in which the `SuspenseList` children should be revealed.
         */
        revealOrder: "forwards" | "backwards";
        /**
         * Dictates how unloaded items in a SuspenseList is shown.
         *
         * - By default, `SuspenseList` will show all fallbacks in the list.
         * - `collapsed` shows only the next fallback in the list.
         * - `hidden` doesn’t show any unloaded items.
         */
        tail?: SuspenseListTailMode | undefined;
    }

    interface NonDirectionalSuspenseListProps extends SuspenseListCommonProps {
        /**
         * Defines the order in which the `SuspenseList` children should be revealed.
         */
        revealOrder?: Exclude<SuspenseListRevealOrder, DirectionalSuspenseListProps["revealOrder"]> | undefined;
        /**
         * The tail property is invalid when not using the `forwards` or `backwards` reveal orders.
         */
        tail?: never | undefined;
    }

    export type SuspenseListProps = DirectionalSuspenseListProps | NonDirectionalSuspenseListProps;

    /**
     * `SuspenseList` helps coordinate many components that can suspend by orchestrating the order
     * in which these components are revealed to the user.
     *
     * When multiple components need to fetch data, this data may arrive in an unpredictable order.
     * However, if you wrap these items in a `SuspenseList`, React will not show an item in the list
     * until previous items have been displayed (this behavior is adjustable).
     *
     * @see {@link https://reactjs.org/docs/concurrent-mode-reference.html#suspenselist}
     * @see {@link https://reactjs.org/docs/concurrent-mode-patterns.html#suspenselist}
     */
    export const unstable_SuspenseList: ExoticComponent<SuspenseListProps>;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    export function experimental_useEffectEvent<T extends Function>(event: T): T;

    /**
     * Warning: Only available in development builds.
     */
    function captureOwnerStack(): string | null;

    type Reference = object;
    type TaintableUniqueValue = string | bigint | ArrayBufferView;
    function experimental_taintUniqueValue(
        message: string | undefined,
        lifetime: Reference,
        value: TaintableUniqueValue,
    ): void;
    function experimental_taintObjectReference(message: string | undefined, object: Reference): void;

    export interface HTMLAttributes<T> {
        /**
         * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/inert}
         */
        inert?: boolean | undefined;
    }
}
