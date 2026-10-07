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
import type { Protocol } from 'devtools-protocol';
import type { Browser, BrowsingContext, Emulation, Session, UAClientHints } from '../../../protocol/protocol.js';
/**
 * Represents a context configurations. It can be global, per User Context, or per
 * Browsing Context. The undefined value means the config will be taken from the upstream
 * config. `null` values means the value should be default regardless of the upstream.
 */
export declare class ContextConfig {
    acceptInsecureCerts?: boolean;
    clientHints?: UAClientHints.UserAgentClientHints.ClientHintsMetadata | null;
    devicePixelRatio?: number | null;
    disableNetworkDurableMessages?: true;
    downloadBehavior?: Browser.DownloadBehavior | null;
    emulatedNetworkConditions?: Emulation.NetworkConditions | null;
    extraHeaders?: Protocol.Network.Headers;
    geolocation?: Emulation.GeolocationCoordinates | Emulation.GeolocationPositionError | null;
    locale?: string | null;
    maxTouchPoints?: number | null;
    prerenderingDisabled?: boolean;
    screenArea?: Emulation.ScreenArea | null;
    screenOrientation?: Emulation.ScreenOrientation | null;
    scriptingEnabled?: false | null;
    scrollbarType?: 'classic' | 'overlay' | null;
    timezone?: string | null;
    userAgent?: string | null;
    userPromptHandler?: Session.UserPromptHandler;
    viewport?: BrowsingContext.Viewport | null;
    /**
     * Merges multiple `ContextConfig` objects. The configs are merged in the order they are
     * provided. For each property, the value from the last config that defines it will be
     * used. The final result will not contain any `undefined` or `null` properties.
     * `undefined` values are ignored. `null` values remove the already set value.
     */
    static merge(...configs: (ContextConfig | undefined)[]): ContextConfig;
}
