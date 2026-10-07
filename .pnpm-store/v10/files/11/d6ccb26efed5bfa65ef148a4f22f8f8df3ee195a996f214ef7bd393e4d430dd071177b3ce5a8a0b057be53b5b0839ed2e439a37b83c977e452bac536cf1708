/**
 * Copyright 2022 Google LLC.
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
/**
 * @fileoverview Provides parsing and validator for WebDriver BiDi protocol.
 * Parser types should match the `../protocol` types.
 */
import { z, type ZodType } from 'zod';
import type * as Protocol from '../protocol/protocol.js';
export declare function parseObject<T extends ZodType>(obj: unknown, schema: T): z.infer<T>;
/** @see https://w3c.github.io/webdriver-bidi/#module-browser */
export declare namespace Browser {
    function parseCreateUserContextParameters(params: unknown): Protocol.Browser.CreateUserContextParameters;
    function parseRemoveUserContextParameters(params: unknown): Protocol.Browser.RemoveUserContextParameters;
    function parseSetClientWindowStateParameters(params: unknown): Protocol.Browser.SetClientWindowStateParameters;
    function parseSetDownloadBehaviorParameters(params: unknown): Protocol.Browser.SetDownloadBehaviorParameters;
}
/** @see https://w3c.github.io/webdriver-bidi/#module-network */
export declare namespace Network {
    function parseAddDataCollectorParameters(params: unknown): Protocol.Network.AddDataCollectorParameters;
    function parseAddInterceptParameters(params: unknown): Protocol.Network.AddInterceptParameters;
    function parseContinueRequestParameters(params: unknown): {
        request: string;
        url?: string | undefined;
        cookies?: {
            value: {
                type: "string";
                value: string;
            } | {
                type: "base64";
                value: string;
            };
            name: string;
        }[] | undefined;
        method?: string | undefined;
        body?: {
            type: "string";
            value: string;
        } | {
            type: "base64";
            value: string;
        } | undefined;
        headers?: {
            value: {
                type: "string";
                value: string;
            } | {
                type: "base64";
                value: string;
            };
            name: string;
        }[] | undefined;
    };
    function parseContinueResponseParameters(params: unknown): Protocol.Network.ContinueResponseParameters;
    function parseContinueWithAuthParameters(params: unknown): {
        request: string;
    } & ({
        credentials: {
            type: "password";
            password: string;
            username: string;
        };
        action: "provideCredentials";
    } | {
        action: "default" | "cancel";
    });
    function parseDisownDataParameters(params: unknown): Protocol.Network.DisownDataParameters;
    function parseFailRequestParameters(params: unknown): {
        request: string;
    };
    function parseGetDataParameters(params: unknown): Protocol.Network.GetDataParameters;
    function parseProvideResponseParameters(params: unknown): Protocol.Network.ProvideResponseParameters;
    function parseRemoveDataCollectorParameters(params: unknown): Protocol.Network.RemoveDataCollectorParameters;
    function parseRemoveInterceptParameters(params: unknown): {
        intercept: string;
    };
    function parseSetCacheBehaviorParameters(params: unknown): Protocol.Network.SetCacheBehaviorParameters;
    function parseSetExtraHeadersParameters(params: unknown): Protocol.Network.SetExtraHeadersParameters;
}
/** @see https://w3c.github.io/webdriver-bidi/#module-script */
export declare namespace Script {
    function parseAddPreloadScriptParams(params: unknown): Protocol.Script.AddPreloadScriptParameters;
    function parseCallFunctionParams(params: unknown): Protocol.Script.CallFunctionParameters;
    function parseDisownParams(params: unknown): Protocol.Script.DisownParameters;
    function parseEvaluateParams(params: unknown): Protocol.Script.EvaluateParameters;
    function parseGetRealmsParams(params: unknown): Protocol.Script.GetRealmsParameters;
    function parseRemovePreloadScriptParams(params: unknown): {
        script: string;
    };
}
/** @see https://w3c.github.io/webdriver-bidi/#module-browsingContext */
export declare namespace BrowsingContext {
    function parseActivateParams(params: unknown): {
        context: string;
    };
    function parseCaptureScreenshotParams(params: unknown): Protocol.BrowsingContext.CaptureScreenshotParameters;
    function parseCloseParams(params: unknown): Protocol.BrowsingContext.CloseParameters;
    function parseCreateParams(params: unknown): Protocol.BrowsingContext.CreateParameters;
    function parseGetTreeParams(params: unknown): Protocol.BrowsingContext.GetTreeParameters;
    function parseHandleUserPromptParameters(params: unknown): Protocol.BrowsingContext.HandleUserPromptParameters;
    function parseLocateNodesParams(params: unknown): Protocol.BrowsingContext.LocateNodesParameters;
    function parseNavigateParams(params: unknown): Protocol.BrowsingContext.NavigateParameters;
    function parsePrintParams(params: unknown): Protocol.BrowsingContext.PrintParameters;
    function parseReloadParams(params: unknown): Protocol.BrowsingContext.ReloadParameters;
    function parseSetBypassCspParams(params: unknown): Protocol.BrowsingContext.SetBypassCspParameters;
    function parseSetViewportParams(params: unknown): Protocol.BrowsingContext.SetViewportParameters;
    function parseTraverseHistoryParams(params: unknown): Protocol.BrowsingContext.TraverseHistoryParameters;
}
/** @see https://w3c.github.io/webdriver-bidi/#module-session */
export declare namespace Session {
    function parseSubscribeParams(params: unknown): Protocol.Session.SubscribeParameters;
    function parseUnsubscribeParams(params: unknown): Protocol.Session.UnsubscribeParameters;
}
export declare namespace Emulation {
    function parseSetClientHintsOverrideParams(params: unknown): Protocol.UAClientHints.UserAgentClientHints.SetClientHintsOverrideCommand["params"];
    function parseSetForcedColorsModeThemeOverrideParams(params: unknown): Protocol.Emulation.SetForcedColorsModeThemeOverrideParameters;
    function parseSetGeolocationOverrideParams(params: unknown): Protocol.Emulation.SetGeolocationOverrideParameters;
    function parseSetLocaleOverrideParams(params: unknown): Protocol.Emulation.SetLocaleOverrideParameters;
    function parseSetNetworkConditionsParams(params: unknown): Protocol.Emulation.SetNetworkConditionsParameters;
    function parseSetScreenOrientationOverrideParams(params: unknown): Protocol.Emulation.SetScreenOrientationOverrideParameters;
    function parseSetScreenSettingsOverrideParams(params: unknown): Protocol.Emulation.SetScreenSettingsOverrideParameters;
    function parseSetScriptingEnabledParams(params: unknown): Protocol.Emulation.SetScriptingEnabledParameters;
    function parseSetScrollbarTypeOverrideParams(params: unknown): Protocol.Emulation.SetScrollbarTypeOverrideParameters;
    function parseSetTimezoneOverrideParams(params: unknown): Protocol.Emulation.SetTimezoneOverrideParameters;
    function parseSetTouchOverrideParams(params: unknown): Protocol.Emulation.SetTouchOverrideParameters;
    function parseSetUserAgentOverrideParams(params: unknown): Protocol.Emulation.SetUserAgentOverrideParameters;
}
export declare namespace Input {
    function parsePerformActionsParams(params: unknown): Protocol.Input.PerformActionsParameters;
    function parseReleaseActionsParams(params: unknown): Protocol.Input.ReleaseActionsParameters;
    function parseSetFilesParams(params: unknown): Protocol.Input.SetFilesParameters;
}
export declare namespace Storage {
    function parseDeleteCookiesParams(params: unknown): Protocol.Storage.DeleteCookiesParameters;
    function parseGetCookiesParams(params: unknown): Protocol.Storage.GetCookiesParameters;
    function parseSetCookieParams(params: unknown): Protocol.Storage.SetCookieParameters;
}
export declare namespace Cdp {
    function parseGetSessionRequest(params: unknown): Protocol.Cdp.GetSessionParameters;
    function parseResolveRealmRequest(params: unknown): Protocol.Cdp.ResolveRealmParameters;
    function parseSendCommandRequest(params: unknown): Protocol.Cdp.SendCommandParameters;
}
export declare namespace Permissions {
    function parseSetPermissionsParams(params: unknown): Protocol.Permissions.SetPermissionParameters;
}
export declare namespace Bluetooth {
    function parseDisableSimulationParameters(params: unknown): Protocol.Bluetooth.DisableSimulationParameters;
    function parseHandleRequestDevicePromptParams(params: unknown): Protocol.Bluetooth.HandleRequestDevicePromptParameters;
    function parseSimulateAdapterParams(params: unknown): Protocol.Bluetooth.SimulateAdapterParameters;
    function parseSimulateAdvertisementParams(params: unknown): Protocol.Bluetooth.SimulateAdvertisementParameters;
    function parseSimulateCharacteristicParams(params: unknown): Protocol.Bluetooth.SimulateCharacteristicParameters;
    function parseSimulateCharacteristicResponseParams(params: unknown): Protocol.Bluetooth.SimulateCharacteristicResponseParameters;
    function parseSimulateDescriptorParams(params: unknown): Protocol.Bluetooth.SimulateDescriptorParameters;
    function parseSimulateDescriptorResponseParams(params: unknown): Protocol.Bluetooth.SimulateDescriptorResponseParameters;
    function parseSimulateGattConnectionResponseParams(params: unknown): Protocol.Bluetooth.SimulateGattConnectionResponseParameters;
    function parseSimulateGattDisconnectionParams(params: unknown): Protocol.Bluetooth.SimulateGattDisconnectionParameters;
    function parseSimulatePreconnectedPeripheralParams(params: unknown): Protocol.Bluetooth.SimulatePreconnectedPeripheralParameters;
    function parseSimulateServiceParams(params: unknown): Protocol.Bluetooth.SimulateServiceParameters;
}
/** @see https://w3c.github.io/webdriver-bidi/#module-webExtension */
export declare namespace WebModule {
    function parseInstallParams(params: unknown): Protocol.WebExtension.InstallParameters;
    function parseUninstallParams(params: unknown): Protocol.WebExtension.UninstallParameters;
}
