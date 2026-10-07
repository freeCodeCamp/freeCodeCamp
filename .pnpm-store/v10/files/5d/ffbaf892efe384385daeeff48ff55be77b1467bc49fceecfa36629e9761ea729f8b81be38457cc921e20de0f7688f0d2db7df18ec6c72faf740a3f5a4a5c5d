/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import type { NewPlugin, Options, OptionsReceived } from './types';
export type { Colors, CompareKeys, Config, Options, OptionsReceived, OldPlugin, NewPlugin, Plugin, Plugins, PrettyFormatOptions, Printer, Refs, Theme, } from './types';
export declare const DEFAULT_OPTIONS: Options;
/**
 * Returns a presentation string of your `val` object
 * @param val any potential JavaScript object
 * @param options Custom settings
 */
export declare function format(val: unknown, options?: OptionsReceived): string;
export declare const plugins: {
    AsymmetricMatcher: NewPlugin;
    ConvertAnsi: NewPlugin;
    DOMCollection: NewPlugin;
    DOMElement: NewPlugin;
    Immutable: NewPlugin;
    ReactElement: NewPlugin;
    ReactTestComponent: NewPlugin;
};
export default format;
