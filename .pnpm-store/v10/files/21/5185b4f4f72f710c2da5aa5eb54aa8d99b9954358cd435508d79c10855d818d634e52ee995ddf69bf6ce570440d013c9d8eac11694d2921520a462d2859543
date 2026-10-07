/**
 * @fileoverview Types for this package.
 */

import type { ConfigObject } from "@eslint/core";

/**
 * Infinite array type.
 */
export type InfiniteArray<T> = T | InfiniteArray<T>[];

/**
 * The type of array element in the `extends` property after flattening.
 */
export type SimpleExtendsElement = string | ConfigObject;

/**
 * The type of array element in the `extends` property before flattening.
 */
export type ExtendsElement = SimpleExtendsElement | InfiniteArray<ConfigObject>;

/**
 * Config with extends. Valid only inside of `defineConfig()`.
 */
export interface ConfigWithExtends extends ConfigObject {
	extends?: ExtendsElement[];
}

export type ConfigWithExtendsArray = InfiniteArray<ConfigWithExtends>[];
