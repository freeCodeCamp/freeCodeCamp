/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type { Observable, OperatorFunction } from '../../../third_party/rxjs/rxjs.js';
import type { EventType } from '../../common/EventEmitter.js';
import { EventEmitter } from '../../common/EventEmitter.js';
import type { Awaitable, HandleFor, NodeFor } from '../../common/types.js';
import type { ClickOptions, ElementHandle } from '../ElementHandle.js';
import type { Frame } from '../Frame.js';
import type { Page } from '../Page.js';
/**
 * Whether to wait for the element to be
 * {@link ElementHandle.isVisible | visible} or
 * {@link ElementHandle.isHidden | hidden}.
 * `null` to disable visibility checks.
 *
 * @public
 */
export type VisibilityOption = 'hidden' | 'visible' | null;
/**
 * @public
 */
export interface ActionOptions {
    /**
     * A signal to abort the locator action.
     */
    signal?: AbortSignal;
}
/**
 * @public
 */
export type LocatorClickOptions = ClickOptions & ActionOptions;
/**
 * @public
 */
export interface LocatorFillOptions extends ActionOptions {
    /**
     * The number of characters to type before switching to a faster fill-out
     * method.
     *
     * @defaultValue `100`
     */
    typingThreshold?: number;
}
/**
 * @public
 */
export interface LocatorScrollOptions extends ActionOptions {
    scrollTop?: number;
    scrollLeft?: number;
}
/**
 * All the events that a locator instance may emit.
 *
 * @public
 */
export declare enum LocatorEvent {
    /**
     * Emitted every time before the locator performs an action on the located element(s).
     */
    Action = "action"
}
/**
 * @public
 */
export interface LocatorEvents extends Record<EventType, unknown> {
    [LocatorEvent.Action]: undefined;
}
/**
 * Locators describe a strategy of locating objects and performing an action on
 * them. If the action fails because the object is not ready for the action, the
 * whole operation is retried. Various preconditions for a successful action are
 * checked automatically.
 *
 * See {@link https://pptr.dev/guides/page-interactions#locators} for details.
 *
 * @public
 */
export declare abstract class Locator<T> extends EventEmitter<LocatorEvents> {
    #private;
    /**
     * Creates a race between multiple locators trying to locate elements in
     * parallel but ensures that only a single element receives the action.
     *
     * @public
     */
    static race<Locators extends readonly unknown[] | []>(locators: Locators): Locator<AwaitedLocator<Locators[number]>>;
    /**
     * Used for nominally typing {@link Locator}.
     */
    _?: T;
    /**
     * @internal
     */
    protected visibility: VisibilityOption;
    /**
     * @internal
     */
    protected _timeout: number;
    /**
     * @internal
     */
    protected operators: {
        conditions: (conditions: Array<Action<T, never>>, signal?: AbortSignal) => OperatorFunction<HandleFor<T>, HandleFor<T>>;
        retryAndRaceWithSignalAndTimer: <T_1>(signal?: AbortSignal, cause?: Error) => OperatorFunction<T_1, T_1>;
    };
    get timeout(): number;
    /**
     * Creates a new locator instance by cloning the current locator and setting
     * the total timeout for the locator actions.
     *
     * Pass `0` to disable timeout.
     *
     * @defaultValue `Page.getDefaultTimeout()`
     */
    setTimeout(timeout: number): Locator<T>;
    /**
     * Creates a new locator instance by cloning the current locator with the
     * visibility property changed to the specified value.
     */
    setVisibility<NodeType extends Node>(this: Locator<NodeType>, visibility: VisibilityOption): Locator<NodeType>;
    /**
     * Creates a new locator instance by cloning the current locator and
     * specifying whether to wait for input elements to become enabled before the
     * action. Applicable to `click` and `fill` actions.
     *
     * @defaultValue `true`
     */
    setWaitForEnabled<NodeType extends Node>(this: Locator<NodeType>, value: boolean): Locator<NodeType>;
    /**
     * Creates a new locator instance by cloning the current locator and
     * specifying whether the locator should scroll the element into viewport if
     * it is not in the viewport already.
     *
     * @defaultValue `true`
     */
    setEnsureElementIsInTheViewport<ElementType extends Element>(this: Locator<ElementType>, value: boolean): Locator<ElementType>;
    /**
     * Creates a new locator instance by cloning the current locator and
     * specifying whether the locator has to wait for the element's bounding box
     * to be same between two consecutive animation frames.
     *
     * @defaultValue `true`
     */
    setWaitForStableBoundingBox<ElementType extends Element>(this: Locator<ElementType>, value: boolean): Locator<ElementType>;
    /**
     * @internal
     */
    copyOptions<T>(locator: Locator<T>): this;
    /**
     * @internal
     */
    abstract _clone(): Locator<T>;
    /**
     * @internal
     */
    abstract _wait(options?: Readonly<ActionOptions>): Observable<HandleFor<T>>;
    /**
     * Clones the locator.
     */
    clone(): Locator<T>;
    /**
     * Waits for the locator to get a handle from the page.
     *
     * @public
     */
    waitHandle(options?: Readonly<ActionOptions>): Promise<HandleFor<T>>;
    /**
     * Waits for the locator to get the serialized value from the page.
     *
     * Note this requires the value to be JSON-serializable.
     *
     * @public
     */
    wait(options?: Readonly<ActionOptions>): Promise<T>;
    /**
     * Maps the locator using the provided mapper.
     *
     * @public
     */
    map<To>(mapper: Mapper<T, To>): Locator<To>;
    /**
     * Creates an expectation that is evaluated against located values.
     *
     * If the expectations do not match, then the locator will retry.
     *
     * @public
     */
    filter<S extends T>(predicate: Predicate<T, S>): Locator<S>;
    /**
     * Creates an expectation that is evaluated against located handles.
     *
     * If the expectations do not match, then the locator will retry.
     *
     * @internal
     */
    filterHandle<S extends T>(predicate: Predicate<HandleFor<T>, HandleFor<S>>): Locator<S>;
    /**
     * Maps the locator using the provided mapper.
     *
     * @internal
     */
    mapHandle<To>(mapper: HandleMapper<T, To>): Locator<To>;
    /**
     * Clicks the located element.
     */
    click<ElementType extends Element>(this: Locator<ElementType>, options?: Readonly<LocatorClickOptions>): Promise<void>;
    /**
     * Fills out the input identified by the locator using the provided value. The
     * type of the input is determined at runtime and the appropriate fill-out
     * method is chosen based on the type. `contenteditable`, select, textarea and
     * input elements are supported. For checkboxes, radio buttons and switches
     * specify a boolean value.
     */
    fill<ElementType extends Element>(this: Locator<ElementType>, value: string | boolean, options?: Readonly<LocatorFillOptions>): Promise<void>;
    /**
     * Hovers over the located element.
     */
    hover<ElementType extends Element>(this: Locator<ElementType>, options?: Readonly<ActionOptions>): Promise<void>;
    /**
     * Scrolls the located element.
     */
    scroll<ElementType extends Element>(this: Locator<ElementType>, options?: Readonly<LocatorScrollOptions>): Promise<void>;
}
/**
 * @internal
 */
export declare class FunctionLocator<T> extends Locator<T> {
    #private;
    static create<Ret>(pageOrFrame: Page | Frame, func: () => Awaitable<Ret>): Locator<Ret>;
    private constructor();
    _clone(): FunctionLocator<T>;
    _wait(options?: Readonly<ActionOptions>): Observable<HandleFor<T>>;
}
/**
 * @public
 */
export type Predicate<From, To extends From = From> = ((value: From) => value is To) | ((value: From) => Awaitable<boolean>);
/**
 * @internal
 */
export type HandlePredicate<From, To extends From = From> = ((value: HandleFor<From>, signal?: AbortSignal) => value is HandleFor<To>) | ((value: HandleFor<From>, signal?: AbortSignal) => Awaitable<boolean>);
/**
 * @internal
 */
export declare abstract class DelegatedLocator<T, U> extends Locator<U> {
    #private;
    constructor(delegate: Locator<T>);
    protected get delegate(): Locator<T>;
    setTimeout(timeout: number): DelegatedLocator<T, U>;
    setVisibility<ValueType extends Node, NodeType extends Node>(this: DelegatedLocator<ValueType, NodeType>, visibility: VisibilityOption): DelegatedLocator<ValueType, NodeType>;
    setWaitForEnabled<ValueType extends Node, NodeType extends Node>(this: DelegatedLocator<ValueType, NodeType>, value: boolean): DelegatedLocator<ValueType, NodeType>;
    setEnsureElementIsInTheViewport<ValueType extends Element, ElementType extends Element>(this: DelegatedLocator<ValueType, ElementType>, value: boolean): DelegatedLocator<ValueType, ElementType>;
    setWaitForStableBoundingBox<ValueType extends Element, ElementType extends Element>(this: DelegatedLocator<ValueType, ElementType>, value: boolean): DelegatedLocator<ValueType, ElementType>;
    abstract _clone(): DelegatedLocator<T, U>;
    abstract _wait(): Observable<HandleFor<U>>;
}
/**
 * @internal
 */
export declare class FilteredLocator<From, To extends From> extends DelegatedLocator<From, To> {
    #private;
    constructor(base: Locator<From>, predicate: HandlePredicate<From, To>);
    _clone(): FilteredLocator<From, To>;
    _wait(options?: Readonly<ActionOptions>): Observable<HandleFor<To>>;
}
/**
 * @public
 */
export type Mapper<From, To> = (value: From) => Awaitable<To>;
/**
 * @internal
 */
export type HandleMapper<From, To> = (value: HandleFor<From>, signal?: AbortSignal) => Awaitable<HandleFor<To>>;
/**
 * @internal
 */
export declare class MappedLocator<From, To> extends DelegatedLocator<From, To> {
    #private;
    constructor(base: Locator<From>, mapper: HandleMapper<From, To>);
    _clone(): MappedLocator<From, To>;
    _wait(options?: Readonly<ActionOptions>): Observable<HandleFor<To>>;
}
/**
 * @internal
 */
export type Action<T, U> = (element: HandleFor<T>, signal?: AbortSignal) => Observable<U>;
/**
 * @internal
 */
export declare class NodeLocator<T extends Node> extends Locator<T> {
    #private;
    static create<Selector extends string>(pageOrFrame: Page | Frame, selector: Selector): Locator<NodeFor<Selector>>;
    static createFromHandle<T extends Node>(pageOrFrame: Page | Frame, handle: ElementHandle<T>): Locator<T>;
    private constructor();
    private constructor();
    _clone(): NodeLocator<T>;
    _wait(options?: Readonly<ActionOptions>): Observable<HandleFor<T>>;
}
/**
 * @public
 */
export type AwaitedLocator<T> = T extends Locator<infer S> ? S : never;
/**
 * @internal
 */
export declare class RaceLocator<T> extends Locator<T> {
    #private;
    static create<T extends readonly unknown[]>(locators: T): Locator<AwaitedLocator<T[number]>>;
    constructor(locators: ReadonlyArray<Locator<T>>);
    _clone(): RaceLocator<T>;
    _wait(options?: Readonly<ActionOptions>): Observable<HandleFor<T>>;
}
/**
 * For observables coming from promises, a delay is needed, otherwise RxJS will
 * never yield in a permanent failure for a promise.
 *
 * We also don't want RxJS to do promise operations to often, so we bump the
 * delay up to 100ms.
 *
 * @internal
 */
export declare const RETRY_DELAY = 100;
//# sourceMappingURL=locators.d.ts.map