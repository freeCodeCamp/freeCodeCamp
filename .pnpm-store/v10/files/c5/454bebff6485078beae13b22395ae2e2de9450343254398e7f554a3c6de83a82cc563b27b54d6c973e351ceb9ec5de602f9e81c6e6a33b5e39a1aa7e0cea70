/**
 * @license
 * Copyright 2020 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {ParseSelector} from 'typed-query-selector/parser.js';

import type {ElementHandle} from '../api/ElementHandle.js';
import type {JSHandle} from '../api/JSHandle.js';

/**
 * @public
 */
export type AwaitablePredicate<T> = (value: T) => Awaitable<boolean>;

/**
 * @public
 */
export interface Moveable {
  /**
   * Moves the resource when 'using'.
   */
  move(): this;
}

/**
 * @internal
 */
export interface Disposed {
  get disposed(): boolean;
}

/**
 * @internal
 */
export interface BindingPayload {
  type: string;
  name: string;
  seq: number;
  args: unknown[];
  /**
   * Determines whether the arguments of the payload are trivial.
   */
  isTrivial: boolean;
}

/**
 * @internal
 */
export type AwaitableIterator<T> = Iterator<T> | AsyncIterator<T>;

/**
 * @public
 */
export type AwaitableIterable<T> = Iterable<T> | AsyncIterable<T>;

/**
 * @public
 */
export type Awaitable<T> = T | PromiseLike<T>;

/**
 * @public
 */
export type HandleFor<T> = T extends Node ? ElementHandle<T> : JSHandle<T>;

/**
 * @public
 */
export type HandleOr<T> = HandleFor<T> | JSHandle<T> | T;

/**
 * @public
 */
export type FlattenHandle<T> = T extends HandleOr<infer U> ? U : never;

/**
 * @public
 */
export type InnerParams<T extends unknown[]> = {
  [K in keyof T]: FlattenHandle<T[K]>;
};

/**
 * @public
 */
export type ElementFor<
  TagName extends keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap,
> = TagName extends keyof HTMLElementTagNameMap
  ? HTMLElementTagNameMap[TagName]
  : TagName extends keyof SVGElementTagNameMap
    ? SVGElementTagNameMap[TagName]
    : never;

/**
 * @public
 */
export type EvaluateFunc<T extends unknown[]> = (
  ...params: InnerParams<T>
) => Awaitable<unknown>;

/**
 * @public
 */
export type EvaluateFuncWith<V, T extends unknown[]> = (
  ...params: [V, ...InnerParams<T>]
) => Awaitable<unknown>;

/**
 * @public
 */
export type NodeFor<ComplexSelector extends string> =
  ParseSelector<ComplexSelector>;
