/**
 * Copyright 2025 Google LLC.
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import type { EmptyResult, Emulation, UAClientHints } from '../../../protocol/protocol.js';
import type { ContextConfigStorage } from '../browser/ContextConfigStorage.js';
import type { UserContextStorage } from '../browser/UserContextStorage.js';
import type { BrowsingContextStorage } from '../context/BrowsingContextStorage.js';
export declare class EmulationProcessor {
    #private;
    constructor(browsingContextStorage: BrowsingContextStorage, userContextStorage: UserContextStorage, contextConfigStorage: ContextConfigStorage);
    setGeolocationOverride(params: Emulation.SetGeolocationOverrideParameters): Promise<EmptyResult>;
    setLocaleOverride(params: Emulation.SetLocaleOverrideParameters): Promise<EmptyResult>;
    setScriptingEnabled(params: Emulation.SetScriptingEnabledParameters): Promise<EmptyResult>;
    setScrollbarTypeOverride(params: Emulation.SetScrollbarTypeOverrideParameters): Promise<EmptyResult>;
    setScreenOrientationOverride(params: Emulation.SetScreenOrientationOverrideParameters): Promise<EmptyResult>;
    setScreenSettingsOverride(params: Emulation.SetScreenSettingsOverrideParameters): Promise<EmptyResult>;
    setTimezoneOverride(params: Emulation.SetTimezoneOverrideParameters): Promise<EmptyResult>;
    setTouchOverride(params: Emulation.SetTouchOverrideParameters): Promise<EmptyResult>;
    setUserAgentOverrideParams(params: Emulation.SetUserAgentOverrideParameters): Promise<EmptyResult>;
    setClientHintsOverride(params: UAClientHints.UserAgentClientHints.SetClientHintsOverrideCommand['params']): Promise<EmptyResult>;
    setNetworkConditions(params: Emulation.SetNetworkConditionsParameters): Promise<EmptyResult>;
}
export declare function isValidLocale(locale: string): boolean;
export declare function isValidTimezone(timezone: string): boolean;
export declare function isTimeZoneOffsetString(timezone: string): boolean;
