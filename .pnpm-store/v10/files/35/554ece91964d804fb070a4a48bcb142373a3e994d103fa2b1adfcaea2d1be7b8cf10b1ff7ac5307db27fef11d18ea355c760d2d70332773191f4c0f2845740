/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import type {
  Observable,
  OperatorFunction,
} from '../../../third_party/rxjs/rxjs.js';
import {
  EMPTY,
  catchError,
  defaultIfEmpty,
  defer,
  filter,
  first,
  firstValueFrom,
  from,
  identity,
  ignoreElements,
  map,
  merge,
  mergeMap,
  noop,
  of,
  pipe,
  race,
  raceWith,
  retry,
  tap,
  throwIfEmpty,
} from '../../../third_party/rxjs/rxjs.js';
import type {EventType} from '../../common/EventEmitter.js';
import {EventEmitter} from '../../common/EventEmitter.js';
import type {Awaitable, HandleFor, NodeFor} from '../../common/types.js';
import {debugError, fromAbortSignal, timeout} from '../../common/util.js';
import type {
  BoundingBox,
  ClickOptions,
  ElementHandle,
} from '../ElementHandle.js';
import type {Frame} from '../Frame.js';
import type {Page} from '../Page.js';

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
export enum LocatorEvent {
  /**
   * Emitted every time before the locator performs an action on the located element(s).
   */
  Action = 'action',
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
export abstract class Locator<T> extends EventEmitter<LocatorEvents> {
  /**
   * Creates a race between multiple locators trying to locate elements in
   * parallel but ensures that only a single element receives the action.
   *
   * @public
   */
  static race<Locators extends readonly unknown[] | []>(
    locators: Locators,
  ): Locator<AwaitedLocator<Locators[number]>> {
    return RaceLocator.create(locators);
  }

  /**
   * Used for nominally typing {@link Locator}.
   */
  declare _?: T;

  /**
   * @internal
   */
  protected visibility: VisibilityOption = null;
  /**
   * @internal
   */
  protected _timeout = 30000;
  #ensureElementIsInTheViewport = true;
  #waitForEnabled = true;
  #waitForStableBoundingBox = true;

  /**
   * @internal
   */
  protected operators = {
    conditions: (
      conditions: Array<Action<T, never>>,
      signal?: AbortSignal,
    ): OperatorFunction<HandleFor<T>, HandleFor<T>> => {
      return mergeMap((handle: HandleFor<T>) => {
        return merge(
          ...conditions.map(condition => {
            return condition(handle, signal);
          }),
        ).pipe(defaultIfEmpty(handle));
      });
    },
    retryAndRaceWithSignalAndTimer: <T>(
      signal?: AbortSignal,
      cause?: Error,
    ): OperatorFunction<T, T> => {
      const candidates = [];
      if (signal) {
        candidates.push(fromAbortSignal(signal, cause));
      }
      candidates.push(timeout(this._timeout, cause));
      return pipe(
        retry({delay: RETRY_DELAY}),
        raceWith<T, never[]>(...candidates),
      );
    },
  };

  // Determines when the locator will timeout for actions.
  get timeout(): number {
    return this._timeout;
  }

  /**
   * Creates a new locator instance by cloning the current locator and setting
   * the total timeout for the locator actions.
   *
   * Pass `0` to disable timeout.
   *
   * @defaultValue `Page.getDefaultTimeout()`
   */
  setTimeout(timeout: number): Locator<T> {
    const locator = this._clone();
    locator._timeout = timeout;
    return locator;
  }

  /**
   * Creates a new locator instance by cloning the current locator with the
   * visibility property changed to the specified value.
   */
  setVisibility<NodeType extends Node>(
    this: Locator<NodeType>,
    visibility: VisibilityOption,
  ): Locator<NodeType> {
    const locator = this._clone();
    locator.visibility = visibility;
    return locator;
  }

  /**
   * Creates a new locator instance by cloning the current locator and
   * specifying whether to wait for input elements to become enabled before the
   * action. Applicable to `click` and `fill` actions.
   *
   * @defaultValue `true`
   */
  setWaitForEnabled<NodeType extends Node>(
    this: Locator<NodeType>,
    value: boolean,
  ): Locator<NodeType> {
    const locator = this._clone();
    locator.#waitForEnabled = value;
    return locator;
  }

  /**
   * Creates a new locator instance by cloning the current locator and
   * specifying whether the locator should scroll the element into viewport if
   * it is not in the viewport already.
   *
   * @defaultValue `true`
   */
  setEnsureElementIsInTheViewport<ElementType extends Element>(
    this: Locator<ElementType>,
    value: boolean,
  ): Locator<ElementType> {
    const locator = this._clone();
    locator.#ensureElementIsInTheViewport = value;
    return locator;
  }

  /**
   * Creates a new locator instance by cloning the current locator and
   * specifying whether the locator has to wait for the element's bounding box
   * to be same between two consecutive animation frames.
   *
   * @defaultValue `true`
   */
  setWaitForStableBoundingBox<ElementType extends Element>(
    this: Locator<ElementType>,
    value: boolean,
  ): Locator<ElementType> {
    const locator = this._clone();
    locator.#waitForStableBoundingBox = value;
    return locator;
  }

  /**
   * @internal
   */
  copyOptions<T>(locator: Locator<T>): this {
    this._timeout = locator._timeout;
    this.visibility = locator.visibility;
    this.#waitForEnabled = locator.#waitForEnabled;
    this.#ensureElementIsInTheViewport = locator.#ensureElementIsInTheViewport;
    this.#waitForStableBoundingBox = locator.#waitForStableBoundingBox;
    return this;
  }

  /**
   * If the element has a "disabled" property, wait for the element to be
   * enabled.
   */
  #waitForEnabledIfNeeded = <ElementType extends Node>(
    handle: HandleFor<ElementType>,
    signal?: AbortSignal,
  ): Observable<never> => {
    if (!this.#waitForEnabled) {
      return EMPTY;
    }
    return from(
      handle.frame.waitForFunction(
        element => {
          if (!(element instanceof HTMLElement)) {
            return true;
          }
          const isNativeFormControl = [
            'BUTTON',
            'INPUT',
            'SELECT',
            'TEXTAREA',
            'OPTION',
            'OPTGROUP',
          ].includes(element.nodeName);
          return !isNativeFormControl || !element.hasAttribute('disabled');
        },
        {
          timeout: this._timeout,
          signal,
        },
        handle,
      ),
    ).pipe(ignoreElements());
  };

  /**
   * Compares the bounding box of the element for two consecutive animation
   * frames and waits till they are the same.
   */
  #waitForStableBoundingBoxIfNeeded = <ElementType extends Element>(
    handle: HandleFor<ElementType>,
  ): Observable<never> => {
    if (!this.#waitForStableBoundingBox) {
      return EMPTY;
    }
    return defer(() => {
      // Note we don't use waitForFunction because that relies on RAF.
      return from(
        handle.evaluate(element => {
          return new Promise<[BoundingBox, BoundingBox]>(resolve => {
            window.requestAnimationFrame(() => {
              const rect1 = element.getBoundingClientRect();
              window.requestAnimationFrame(() => {
                const rect2 = element.getBoundingClientRect();
                resolve([
                  {
                    x: rect1.x,
                    y: rect1.y,
                    width: rect1.width,
                    height: rect1.height,
                  },
                  {
                    x: rect2.x,
                    y: rect2.y,
                    width: rect2.width,
                    height: rect2.height,
                  },
                ]);
              });
            });
          });
        }),
      );
    }).pipe(
      first(([rect1, rect2]) => {
        return (
          rect1.x === rect2.x &&
          rect1.y === rect2.y &&
          rect1.width === rect2.width &&
          rect1.height === rect2.height
        );
      }),
      retry({delay: RETRY_DELAY}),
      ignoreElements(),
    );
  };

  /**
   * Checks if the element is in the viewport and auto-scrolls it if it is not.
   */
  #ensureElementIsInTheViewportIfNeeded = <ElementType extends Element>(
    handle: HandleFor<ElementType>,
  ): Observable<never> => {
    if (!this.#ensureElementIsInTheViewport) {
      return EMPTY;
    }
    return from(handle.isIntersectingViewport({threshold: 0})).pipe(
      filter(isIntersectingViewport => {
        return !isIntersectingViewport;
      }),
      mergeMap(() => {
        return from(handle.scrollIntoView());
      }),
      mergeMap(() => {
        return defer(() => {
          return from(handle.isIntersectingViewport({threshold: 0}));
        }).pipe(first(identity), retry({delay: RETRY_DELAY}), ignoreElements());
      }),
    );
  };

  #click<ElementType extends Element>(
    this: Locator<ElementType>,
    options?: Readonly<LocatorClickOptions>,
  ): Observable<void> {
    const signal = options?.signal;
    const cause = new Error('Locator.click');
    return this._wait(options).pipe(
      this.operators.conditions(
        [
          this.#ensureElementIsInTheViewportIfNeeded,
          this.#waitForStableBoundingBoxIfNeeded,
          this.#waitForEnabledIfNeeded,
        ],
        signal,
      ),
      tap(() => {
        return this.emit(LocatorEvent.Action, undefined);
      }),
      mergeMap(handle => {
        return from(handle.click(options)).pipe(
          catchError(err => {
            void handle.dispose().catch(debugError);
            throw err;
          }),
        );
      }),
      this.operators.retryAndRaceWithSignalAndTimer(signal, cause),
    );
  }

  #fill<ElementType extends Element>(
    this: Locator<ElementType>,
    value: string | boolean,
    options?: Readonly<LocatorFillOptions>,
  ): Observable<void> {
    const signal = options?.signal;
    const typingThreshold = options?.typingThreshold ?? 100;
    const cause = new Error('Locator.fill');
    return this._wait(options).pipe(
      this.operators.conditions(
        [
          this.#ensureElementIsInTheViewportIfNeeded,
          this.#waitForStableBoundingBoxIfNeeded,
          this.#waitForEnabledIfNeeded,
        ],
        signal,
      ),
      tap(() => {
        return this.emit(LocatorEvent.Action, undefined);
      }),
      mergeMap(handle => {
        return from(
          (handle as unknown as ElementHandle<HTMLElement>).evaluate(el => {
            if (el instanceof HTMLSelectElement) {
              return 'select';
            }
            if (el instanceof HTMLTextAreaElement) {
              return 'typeable-input';
            }
            if (el instanceof HTMLInputElement) {
              switch (el.type) {
                case 'checkbox':
                case 'radio':
                  return 'checkable-input';
                case 'text':
                case 'url':
                case 'tel':
                case 'search':
                case 'password':
                case 'number':
                case 'email':
                  return 'typeable-input';
                default:
                  return 'other-input';
              }
            }

            switch (el.getAttribute('role')) {
              case 'checkbox':
              case 'radio':
              case 'switch':
                return 'checkable-input';
            }

            if (el.isContentEditable) {
              return 'contenteditable';
            }

            return 'unknown';
          }),
        )
          .pipe(
            mergeMap(inputType => {
              const fillDirectly = (): Observable<void> => {
                return from(handle.focus()).pipe(
                  mergeMap(() => {
                    return from(
                      handle.evaluate((input, newValue) => {
                        const element = input as HTMLElement;
                        const valString = String(newValue);
                        const currentValue = element.isContentEditable
                          ? element.innerText
                          : (element as HTMLInputElement).value;
                        if (currentValue === valString) {
                          return;
                        }
                        if (element.isContentEditable) {
                          element.innerText = valString;
                        } else {
                          (element as HTMLInputElement).value = valString;
                        }
                        element.dispatchEvent(
                          new Event('input', {bubbles: true}),
                        );
                        element.dispatchEvent(
                          new Event('change', {bubbles: true}),
                        );
                      }, value),
                    );
                  }),
                );
              };

              const toggleIfNeeded = (): Observable<void> => {
                return from(
                  handle.evaluate(toggleEl => {
                    if (
                      (toggleEl as HTMLInputElement).indeterminate ||
                      toggleEl.getAttribute('aria-checked') === 'mixed'
                    ) {
                      return 'mixed';
                    }
                    return (
                      (toggleEl as HTMLInputElement).checked ||
                      toggleEl.getAttribute('aria-checked') === 'true'
                    );
                  }),
                ).pipe(
                  mergeMap(currentState => {
                    if (currentState === 'mixed' || currentState !== !!value) {
                      return from(handle.click());
                    }
                    return of(undefined);
                  }),
                );
              };

              switch (inputType) {
                case 'checkable-input':
                  return toggleIfNeeded();
                case 'select':
                  return from(handle.select(value as string).then(noop));
                case 'contenteditable':
                case 'typeable-input':
                  if (
                    typeof value === 'string' &&
                    value.length < typingThreshold
                  ) {
                    return from(
                      (
                        handle as unknown as ElementHandle<HTMLInputElement>
                      ).evaluate((input, newValue) => {
                        const element = input as HTMLElement;
                        const valString = String(newValue);
                        const currentValue = element.isContentEditable
                          ? element.innerText
                          : (input as HTMLInputElement).value;

                        if (currentValue === valString) {
                          return '';
                        }

                        // Clear the input if the current value does not match the filled
                        // out value.
                        if (
                          !valString.startsWith(currentValue) ||
                          !currentValue
                        ) {
                          if (element.isContentEditable) {
                            element.innerText = '';
                          } else {
                            (input as HTMLInputElement).value = '';
                          }
                          return valString;
                        }

                        // If the value is partially filled out, only type the rest. Move
                        // cursor to the end of the common prefix.
                        if (element.isContentEditable) {
                          element.innerText = '';
                          element.innerText = currentValue;
                        } else {
                          (input as HTMLInputElement).value = '';
                          (input as HTMLInputElement).value = currentValue;
                        }
                        return valString.substring(currentValue.length);
                      }, value),
                    ).pipe(
                      mergeMap(textToType => {
                        if (!textToType) {
                          return of(undefined);
                        }
                        return from(handle.type(textToType));
                      }),
                    );
                  }
                  return fillDirectly();
                case 'other-input':
                  return fillDirectly();
                case 'unknown':
                  throw new Error(`Element cannot be filled out.`);
              }
            }),
          )
          .pipe(
            catchError(err => {
              void handle.dispose().catch(debugError);
              throw err;
            }),
          );
      }),
      this.operators.retryAndRaceWithSignalAndTimer(signal, cause),
    );
  }

  #hover<ElementType extends Element>(
    this: Locator<ElementType>,
    options?: Readonly<ActionOptions>,
  ): Observable<void> {
    const signal = options?.signal;
    const cause = new Error('Locator.hover');
    return this._wait(options).pipe(
      this.operators.conditions(
        [
          this.#ensureElementIsInTheViewportIfNeeded,
          this.#waitForStableBoundingBoxIfNeeded,
        ],
        signal,
      ),
      tap(() => {
        return this.emit(LocatorEvent.Action, undefined);
      }),
      mergeMap(handle => {
        return from(handle.hover()).pipe(
          catchError(err => {
            void handle.dispose().catch(debugError);
            throw err;
          }),
        );
      }),
      this.operators.retryAndRaceWithSignalAndTimer(signal, cause),
    );
  }

  #scroll<ElementType extends Element>(
    this: Locator<ElementType>,
    options?: Readonly<LocatorScrollOptions>,
  ): Observable<void> {
    const signal = options?.signal;
    const cause = new Error('Locator.scroll');
    return this._wait(options).pipe(
      this.operators.conditions(
        [
          this.#ensureElementIsInTheViewportIfNeeded,
          this.#waitForStableBoundingBoxIfNeeded,
        ],
        signal,
      ),
      tap(() => {
        return this.emit(LocatorEvent.Action, undefined);
      }),
      mergeMap(handle => {
        return from(
          handle.evaluate(
            (el, scrollTop, scrollLeft) => {
              if (scrollTop !== undefined) {
                el.scrollTop = scrollTop;
              }
              if (scrollLeft !== undefined) {
                el.scrollLeft = scrollLeft;
              }
            },
            options?.scrollTop,
            options?.scrollLeft,
          ),
        ).pipe(
          catchError(err => {
            void handle.dispose().catch(debugError);
            throw err;
          }),
        );
      }),
      this.operators.retryAndRaceWithSignalAndTimer(signal, cause),
    );
  }

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
  clone(): Locator<T> {
    return this._clone();
  }

  /**
   * Waits for the locator to get a handle from the page.
   *
   * @public
   */
  async waitHandle(options?: Readonly<ActionOptions>): Promise<HandleFor<T>> {
    const cause = new Error('Locator.waitHandle');
    return await firstValueFrom(
      this._wait(options).pipe(
        this.operators.retryAndRaceWithSignalAndTimer(options?.signal, cause),
      ),
    );
  }

  /**
   * Waits for the locator to get the serialized value from the page.
   *
   * Note this requires the value to be JSON-serializable.
   *
   * @public
   */
  async wait(options?: Readonly<ActionOptions>): Promise<T> {
    using handle = await this.waitHandle(options);
    return await handle.jsonValue();
  }

  /**
   * Maps the locator using the provided mapper.
   *
   * @public
   */
  map<To>(mapper: Mapper<T, To>): Locator<To> {
    return new MappedLocator(this._clone(), handle => {
      // SAFETY: TypeScript cannot deduce the type.
      return (handle as any).evaluateHandle(mapper);
    });
  }

  /**
   * Creates an expectation that is evaluated against located values.
   *
   * If the expectations do not match, then the locator will retry.
   *
   * @public
   */
  filter<S extends T>(predicate: Predicate<T, S>): Locator<S> {
    return new FilteredLocator(this._clone(), async (handle, signal) => {
      await (handle as ElementHandle<Node>).frame.waitForFunction(
        predicate,
        {signal, timeout: this._timeout},
        handle,
      );
      return true;
    });
  }

  /**
   * Creates an expectation that is evaluated against located handles.
   *
   * If the expectations do not match, then the locator will retry.
   *
   * @internal
   */
  filterHandle<S extends T>(
    predicate: Predicate<HandleFor<T>, HandleFor<S>>,
  ): Locator<S> {
    return new FilteredLocator(this._clone(), predicate);
  }

  /**
   * Maps the locator using the provided mapper.
   *
   * @internal
   */
  mapHandle<To>(mapper: HandleMapper<T, To>): Locator<To> {
    return new MappedLocator(this._clone(), mapper);
  }

  /**
   * Clicks the located element.
   */
  click<ElementType extends Element>(
    this: Locator<ElementType>,
    options?: Readonly<LocatorClickOptions>,
  ): Promise<void> {
    return firstValueFrom(this.#click(options));
  }

  /**
   * Fills out the input identified by the locator using the provided value. The
   * type of the input is determined at runtime and the appropriate fill-out
   * method is chosen based on the type. `contenteditable`, select, textarea and
   * input elements are supported. For checkboxes, radio buttons and switches
   * specify a boolean value.
   */
  fill<ElementType extends Element>(
    this: Locator<ElementType>,
    value: string | boolean,
    options?: Readonly<LocatorFillOptions>,
  ): Promise<void> {
    return firstValueFrom(this.#fill(value, options));
  }

  /**
   * Hovers over the located element.
   */
  hover<ElementType extends Element>(
    this: Locator<ElementType>,
    options?: Readonly<ActionOptions>,
  ): Promise<void> {
    return firstValueFrom(this.#hover(options));
  }

  /**
   * Scrolls the located element.
   */
  scroll<ElementType extends Element>(
    this: Locator<ElementType>,
    options?: Readonly<LocatorScrollOptions>,
  ): Promise<void> {
    return firstValueFrom(this.#scroll(options));
  }
}

/**
 * @internal
 */
export class FunctionLocator<T> extends Locator<T> {
  static create<Ret>(
    pageOrFrame: Page | Frame,
    func: () => Awaitable<Ret>,
  ): Locator<Ret> {
    return new FunctionLocator<Ret>(pageOrFrame, func).setTimeout(
      'getDefaultTimeout' in pageOrFrame
        ? pageOrFrame.getDefaultTimeout()
        : pageOrFrame.page().getDefaultTimeout(),
    );
  }

  #pageOrFrame: Page | Frame;
  #func: () => Awaitable<T>;

  private constructor(pageOrFrame: Page | Frame, func: () => Awaitable<T>) {
    super();

    this.#pageOrFrame = pageOrFrame;
    this.#func = func;
  }

  override _clone(): FunctionLocator<T> {
    return new FunctionLocator(this.#pageOrFrame, this.#func);
  }

  _wait(options?: Readonly<ActionOptions>): Observable<HandleFor<T>> {
    const signal = options?.signal;
    return defer(() => {
      return from(
        this.#pageOrFrame.waitForFunction(this.#func, {
          timeout: this.timeout,
          signal,
        }),
      );
    }).pipe(throwIfEmpty());
  }
}

/**
 * @public
 */
export type Predicate<From, To extends From = From> =
  | ((value: From) => value is To)
  | ((value: From) => Awaitable<boolean>);
/**
 * @internal
 */
export type HandlePredicate<From, To extends From = From> =
  | ((value: HandleFor<From>, signal?: AbortSignal) => value is HandleFor<To>)
  | ((value: HandleFor<From>, signal?: AbortSignal) => Awaitable<boolean>);

/**
 * @internal
 */
export abstract class DelegatedLocator<T, U> extends Locator<U> {
  #delegate: Locator<T>;

  constructor(delegate: Locator<T>) {
    super();

    this.#delegate = delegate;
    this.copyOptions(this.#delegate);
  }

  protected get delegate(): Locator<T> {
    return this.#delegate;
  }

  override setTimeout(timeout: number): DelegatedLocator<T, U> {
    const locator = super.setTimeout(timeout) as DelegatedLocator<T, U>;
    locator.#delegate = this.#delegate.setTimeout(timeout);
    return locator;
  }

  override setVisibility<ValueType extends Node, NodeType extends Node>(
    this: DelegatedLocator<ValueType, NodeType>,
    visibility: VisibilityOption,
  ): DelegatedLocator<ValueType, NodeType> {
    const locator = super.setVisibility<NodeType>(
      visibility,
    ) as DelegatedLocator<ValueType, NodeType>;
    locator.#delegate = locator.#delegate.setVisibility<ValueType>(visibility);
    return locator;
  }

  override setWaitForEnabled<ValueType extends Node, NodeType extends Node>(
    this: DelegatedLocator<ValueType, NodeType>,
    value: boolean,
  ): DelegatedLocator<ValueType, NodeType> {
    const locator = super.setWaitForEnabled<NodeType>(
      value,
    ) as DelegatedLocator<ValueType, NodeType>;
    locator.#delegate = this.#delegate.setWaitForEnabled(value);
    return locator;
  }

  override setEnsureElementIsInTheViewport<
    ValueType extends Element,
    ElementType extends Element,
  >(
    this: DelegatedLocator<ValueType, ElementType>,
    value: boolean,
  ): DelegatedLocator<ValueType, ElementType> {
    const locator = super.setEnsureElementIsInTheViewport<ElementType>(
      value,
    ) as DelegatedLocator<ValueType, ElementType>;
    locator.#delegate = this.#delegate.setEnsureElementIsInTheViewport(value);
    return locator;
  }

  override setWaitForStableBoundingBox<
    ValueType extends Element,
    ElementType extends Element,
  >(
    this: DelegatedLocator<ValueType, ElementType>,
    value: boolean,
  ): DelegatedLocator<ValueType, ElementType> {
    const locator = super.setWaitForStableBoundingBox<ElementType>(
      value,
    ) as DelegatedLocator<ValueType, ElementType>;
    locator.#delegate = this.#delegate.setWaitForStableBoundingBox(value);
    return locator;
  }

  abstract override _clone(): DelegatedLocator<T, U>;
  abstract override _wait(): Observable<HandleFor<U>>;
}

/**
 * @internal
 */
export class FilteredLocator<From, To extends From> extends DelegatedLocator<
  From,
  To
> {
  #predicate: HandlePredicate<From, To>;

  constructor(base: Locator<From>, predicate: HandlePredicate<From, To>) {
    super(base);
    this.#predicate = predicate;
  }

  override _clone(): FilteredLocator<From, To> {
    return new FilteredLocator(
      this.delegate.clone(),
      this.#predicate,
    ).copyOptions(this);
  }

  override _wait(options?: Readonly<ActionOptions>): Observable<HandleFor<To>> {
    return this.delegate._wait(options).pipe(
      mergeMap(handle => {
        return from(
          Promise.resolve(this.#predicate(handle, options?.signal)),
        ).pipe(
          filter(value => {
            return value;
          }),
          map(() => {
            // SAFETY: It passed the predicate, so this is correct.
            return handle as HandleFor<To>;
          }),
        );
      }),
      throwIfEmpty(),
    );
  }
}

/**
 * @public
 */
export type Mapper<From, To> = (value: From) => Awaitable<To>;
/**
 * @internal
 */
export type HandleMapper<From, To> = (
  value: HandleFor<From>,
  signal?: AbortSignal,
) => Awaitable<HandleFor<To>>;
/**
 * @internal
 */
export class MappedLocator<From, To> extends DelegatedLocator<From, To> {
  #mapper: HandleMapper<From, To>;

  constructor(base: Locator<From>, mapper: HandleMapper<From, To>) {
    super(base);
    this.#mapper = mapper;
  }

  override _clone(): MappedLocator<From, To> {
    return new MappedLocator(this.delegate.clone(), this.#mapper).copyOptions(
      this,
    );
  }

  override _wait(options?: Readonly<ActionOptions>): Observable<HandleFor<To>> {
    return this.delegate._wait(options).pipe(
      mergeMap(handle => {
        return from(Promise.resolve(this.#mapper(handle, options?.signal)));
      }),
    );
  }
}

/**
 * @internal
 */
export type Action<T, U> = (
  element: HandleFor<T>,
  signal?: AbortSignal,
) => Observable<U>;
/**
 * @internal
 */
export class NodeLocator<T extends Node> extends Locator<T> {
  static create<Selector extends string>(
    pageOrFrame: Page | Frame,
    selector: Selector,
  ): Locator<NodeFor<Selector>> {
    return new NodeLocator<NodeFor<Selector>>(pageOrFrame, selector).setTimeout(
      'getDefaultTimeout' in pageOrFrame
        ? pageOrFrame.getDefaultTimeout()
        : pageOrFrame.page().getDefaultTimeout(),
    );
  }

  static createFromHandle<T extends Node>(
    pageOrFrame: Page | Frame,
    handle: ElementHandle<T>,
  ): Locator<T> {
    return new NodeLocator<T>(pageOrFrame, handle).setTimeout(
      'getDefaultTimeout' in pageOrFrame
        ? pageOrFrame.getDefaultTimeout()
        : pageOrFrame.page().getDefaultTimeout(),
    );
  }

  #pageOrFrame: Page | Frame;
  #selectorOrHandle: string | ElementHandle<T>;

  private constructor(pageOrFrame: Page | Frame, selector: string);
  private constructor(pageOrFrame: Page | Frame, handle: ElementHandle<T>);
  private constructor(
    pageOrFrame: Page | Frame,
    selectorOrHandle: string | ElementHandle<T>,
  ) {
    super();
    this.#pageOrFrame = pageOrFrame;
    this.#selectorOrHandle = selectorOrHandle;
  }

  /**
   * Waits for the element to become visible or hidden. visibility === 'visible'
   * means that the element has a computed style, the visibility property other
   * than 'hidden' or 'collapse' and non-empty bounding box. visibility ===
   * 'hidden' means the opposite of that.
   */
  #waitForVisibilityIfNeeded = (handle: HandleFor<T>): Observable<never> => {
    if (!this.visibility) {
      return EMPTY;
    }

    return (() => {
      switch (this.visibility) {
        case 'hidden':
          return defer(() => {
            return from(handle.isHidden());
          });
        case 'visible':
          return defer(() => {
            return from(handle.isVisible());
          });
      }
    })().pipe(first(identity), retry({delay: RETRY_DELAY}), ignoreElements());
  };

  override _clone(): NodeLocator<T> {
    return new NodeLocator<T>(
      this.#pageOrFrame,
      // @ts-expect-error TSC does cannot parse private overloads.
      this.#selectorOrHandle,
    ).copyOptions(this);
  }

  override _wait(options?: Readonly<ActionOptions>): Observable<HandleFor<T>> {
    const signal = options?.signal;
    return defer(() => {
      if (typeof this.#selectorOrHandle === 'string') {
        return from(
          this.#pageOrFrame.waitForSelector(this.#selectorOrHandle, {
            visible: false,
            timeout: this._timeout,
            signal,
          }) as Promise<HandleFor<T> | null>,
        );
      } else {
        return of(this.#selectorOrHandle as HandleFor<T>);
      }
    }).pipe(
      filter((value): value is NonNullable<typeof value> => {
        return value !== null;
      }),
      throwIfEmpty(),
      this.operators.conditions([this.#waitForVisibilityIfNeeded], signal),
    );
  }
}

/**
 * @public
 */
export type AwaitedLocator<T> = T extends Locator<infer S> ? S : never;
function checkLocatorArray<T extends readonly unknown[] | []>(
  locators: T,
): ReadonlyArray<Locator<AwaitedLocator<T[number]>>> {
  for (const locator of locators) {
    if (!(locator instanceof Locator)) {
      throw new Error('Unknown locator for race candidate');
    }
  }
  return locators as ReadonlyArray<Locator<AwaitedLocator<T[number]>>>;
}
/**
 * @internal
 */
export class RaceLocator<T> extends Locator<T> {
  static create<T extends readonly unknown[]>(
    locators: T,
  ): Locator<AwaitedLocator<T[number]>> {
    const array = checkLocatorArray(locators);
    return new RaceLocator(array);
  }

  #locators: ReadonlyArray<Locator<T>>;

  constructor(locators: ReadonlyArray<Locator<T>>) {
    super();
    this.#locators = locators;
  }

  override _clone(): RaceLocator<T> {
    return new RaceLocator<T>(
      this.#locators.map(locator => {
        return locator.clone();
      }),
    ).copyOptions(this);
  }

  override _wait(options?: Readonly<ActionOptions>): Observable<HandleFor<T>> {
    return race(
      ...this.#locators.map(locator => {
        return locator._wait(options);
      }),
    );
  }
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
export const RETRY_DELAY = 100;
