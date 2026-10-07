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
import { z } from 'zod';
import { InvalidArgumentException } from '../protocol/protocol.js';
import * as WebDriverBidiBluetooth from './generated/webdriver-bidi-bluetooth.js';
import * as WebDriverBidiPermissions from './generated/webdriver-bidi-permissions.js';
import * as WebDriverBidiUAClientHints from './generated/webdriver-bidi-ua-client-hints.js';
import * as WebDriverBidi from './generated/webdriver-bidi.js';
export function parseObject(obj, schema) {
    const parseResult = schema.safeParse(obj);
    if (parseResult.success) {
        return parseResult.data;
    }
    const errorMessage = parseResult.error.errors
        .map((e) => `${e.message} in ` +
        `${e.path.map((p) => JSON.stringify(p)).join('/')}.`)
        .join(' ');
    throw new InvalidArgumentException(errorMessage);
}
/** @see https://w3c.github.io/webdriver-bidi/#module-browser */
export var Browser;
(function (Browser) {
    // keep-sorted start block=yes
    function parseCreateUserContextParameters(params) {
        // Work around of `cddlconv` https://github.com/google/cddlconv/issues/19.
        return parseObject(params, WebDriverBidi.Browser.CreateUserContextParametersSchema);
    }
    Browser.parseCreateUserContextParameters = parseCreateUserContextParameters;
    function parseRemoveUserContextParameters(params) {
        return parseObject(params, WebDriverBidi.Browser.RemoveUserContextParametersSchema);
    }
    Browser.parseRemoveUserContextParameters = parseRemoveUserContextParameters;
    function parseSetClientWindowStateParameters(params) {
        return parseObject(params, WebDriverBidi.Browser.SetClientWindowStateParametersSchema);
    }
    Browser.parseSetClientWindowStateParameters = parseSetClientWindowStateParameters;
    function parseSetDownloadBehaviorParameters(params) {
        return parseObject(params, WebDriverBidi.Browser.SetDownloadBehaviorParametersSchema);
    }
    Browser.parseSetDownloadBehaviorParameters = parseSetDownloadBehaviorParameters;
    // keep-sorted end
})(Browser || (Browser = {}));
/** @see https://w3c.github.io/webdriver-bidi/#module-network */
export var Network;
(function (Network) {
    // keep-sorted start block=yes
    function parseAddDataCollectorParameters(params) {
        // Work around of `cddlconv` https://github.com/google/cddlconv/issues/19.
        return parseObject(params, WebDriverBidi.Network.AddDataCollectorParametersSchema);
    }
    Network.parseAddDataCollectorParameters = parseAddDataCollectorParameters;
    function parseAddInterceptParameters(params) {
        // Work around of `cddlconv` https://github.com/google/cddlconv/issues/19.
        return parseObject(params, WebDriverBidi.Network.AddInterceptParametersSchema);
    }
    Network.parseAddInterceptParameters = parseAddInterceptParameters;
    function parseContinueRequestParameters(params) {
        return parseObject(params, WebDriverBidi.Network.ContinueRequestParametersSchema);
    }
    Network.parseContinueRequestParameters = parseContinueRequestParameters;
    function parseContinueResponseParameters(params) {
        // TODO: remove cast after https://github.com/google/cddlconv/issues/19 is fixed.
        return parseObject(params, WebDriverBidi.Network.ContinueResponseParametersSchema);
    }
    Network.parseContinueResponseParameters = parseContinueResponseParameters;
    function parseContinueWithAuthParameters(params) {
        return parseObject(params, WebDriverBidi.Network.ContinueWithAuthParametersSchema);
    }
    Network.parseContinueWithAuthParameters = parseContinueWithAuthParameters;
    function parseDisownDataParameters(params) {
        return parseObject(params, WebDriverBidi.Network.DisownDataParametersSchema);
    }
    Network.parseDisownDataParameters = parseDisownDataParameters;
    function parseFailRequestParameters(params) {
        return parseObject(params, WebDriverBidi.Network.FailRequestParametersSchema);
    }
    Network.parseFailRequestParameters = parseFailRequestParameters;
    function parseGetDataParameters(params) {
        // Work around of `cddlconv` https://github.com/google/cddlconv/issues/19.
        return parseObject(params, WebDriverBidi.Network.GetDataParametersSchema);
    }
    Network.parseGetDataParameters = parseGetDataParameters;
    function parseProvideResponseParameters(params) {
        // Work around of `cddlconv` https://github.com/google/cddlconv/issues/19.
        return parseObject(params, WebDriverBidi.Network.ProvideResponseParametersSchema);
    }
    Network.parseProvideResponseParameters = parseProvideResponseParameters;
    function parseRemoveDataCollectorParameters(params) {
        // Work around of `cddlconv` https://github.com/google/cddlconv/issues/19.
        return parseObject(params, WebDriverBidi.Network.RemoveDataCollectorParametersSchema);
    }
    Network.parseRemoveDataCollectorParameters = parseRemoveDataCollectorParameters;
    function parseRemoveInterceptParameters(params) {
        return parseObject(params, WebDriverBidi.Network.RemoveInterceptParametersSchema);
    }
    Network.parseRemoveInterceptParameters = parseRemoveInterceptParameters;
    function parseSetCacheBehaviorParameters(params) {
        return parseObject(params, WebDriverBidi.Network.SetCacheBehaviorParametersSchema);
    }
    Network.parseSetCacheBehaviorParameters = parseSetCacheBehaviorParameters;
    function parseSetExtraHeadersParameters(params) {
        return parseObject(params, WebDriverBidi.Network.SetExtraHeadersParametersSchema);
    }
    Network.parseSetExtraHeadersParameters = parseSetExtraHeadersParameters;
    // keep-sorted end
})(Network || (Network = {}));
/** @see https://w3c.github.io/webdriver-bidi/#module-script */
export var Script;
(function (Script) {
    // keep-sorted start block=yes
    function parseAddPreloadScriptParams(params) {
        return parseObject(params, WebDriverBidi.Script.AddPreloadScriptParametersSchema);
    }
    Script.parseAddPreloadScriptParams = parseAddPreloadScriptParams;
    function parseCallFunctionParams(params) {
        return parseObject(params, WebDriverBidi.Script.CallFunctionParametersSchema);
    }
    Script.parseCallFunctionParams = parseCallFunctionParams;
    function parseDisownParams(params) {
        return parseObject(params, WebDriverBidi.Script.DisownParametersSchema);
    }
    Script.parseDisownParams = parseDisownParams;
    function parseEvaluateParams(params) {
        return parseObject(params, WebDriverBidi.Script.EvaluateParametersSchema);
    }
    Script.parseEvaluateParams = parseEvaluateParams;
    function parseGetRealmsParams(params) {
        return parseObject(params, WebDriverBidi.Script.GetRealmsParametersSchema);
    }
    Script.parseGetRealmsParams = parseGetRealmsParams;
    function parseRemovePreloadScriptParams(params) {
        return parseObject(params, WebDriverBidi.Script.RemovePreloadScriptParametersSchema);
    }
    Script.parseRemovePreloadScriptParams = parseRemovePreloadScriptParams;
    // keep-sorted end
})(Script || (Script = {}));
/** @see https://w3c.github.io/webdriver-bidi/#module-browsingContext */
export var BrowsingContext;
(function (BrowsingContext) {
    // keep-sorted start block=yes
    function parseActivateParams(params) {
        return parseObject(params, WebDriverBidi.BrowsingContext.ActivateParametersSchema);
    }
    BrowsingContext.parseActivateParams = parseActivateParams;
    function parseCaptureScreenshotParams(params) {
        return parseObject(params, WebDriverBidi.BrowsingContext.CaptureScreenshotParametersSchema);
    }
    BrowsingContext.parseCaptureScreenshotParams = parseCaptureScreenshotParams;
    function parseCloseParams(params) {
        return parseObject(params, WebDriverBidi.BrowsingContext.CloseParametersSchema);
    }
    BrowsingContext.parseCloseParams = parseCloseParams;
    function parseCreateParams(params) {
        return parseObject(params, WebDriverBidi.BrowsingContext.CreateParametersSchema);
    }
    BrowsingContext.parseCreateParams = parseCreateParams;
    function parseGetTreeParams(params) {
        return parseObject(params, WebDriverBidi.BrowsingContext.GetTreeParametersSchema);
    }
    BrowsingContext.parseGetTreeParams = parseGetTreeParams;
    function parseHandleUserPromptParameters(params) {
        return parseObject(params, WebDriverBidi.BrowsingContext.HandleUserPromptParametersSchema);
    }
    BrowsingContext.parseHandleUserPromptParameters = parseHandleUserPromptParameters;
    function parseLocateNodesParams(params) {
        // TODO: remove cast after https://github.com/google/cddlconv/issues/19 is fixed.
        return parseObject(params, WebDriverBidi.BrowsingContext.LocateNodesParametersSchema);
    }
    BrowsingContext.parseLocateNodesParams = parseLocateNodesParams;
    function parseNavigateParams(params) {
        return parseObject(params, WebDriverBidi.BrowsingContext.NavigateParametersSchema);
    }
    BrowsingContext.parseNavigateParams = parseNavigateParams;
    function parsePrintParams(params) {
        return parseObject(params, WebDriverBidi.BrowsingContext.PrintParametersSchema);
    }
    BrowsingContext.parsePrintParams = parsePrintParams;
    function parseReloadParams(params) {
        return parseObject(params, WebDriverBidi.BrowsingContext.ReloadParametersSchema);
    }
    BrowsingContext.parseReloadParams = parseReloadParams;
    function parseSetBypassCspParams(params) {
        return parseObject(params, WebDriverBidi.BrowsingContext.SetBypassCspParametersSchema);
    }
    BrowsingContext.parseSetBypassCspParams = parseSetBypassCspParams;
    function parseSetViewportParams(params) {
        return parseObject(params, WebDriverBidi.BrowsingContext.SetViewportParametersSchema);
    }
    BrowsingContext.parseSetViewportParams = parseSetViewportParams;
    function parseTraverseHistoryParams(params) {
        return parseObject(params, WebDriverBidi.BrowsingContext.TraverseHistoryParametersSchema);
    }
    BrowsingContext.parseTraverseHistoryParams = parseTraverseHistoryParams;
    // keep-sorted end
})(BrowsingContext || (BrowsingContext = {}));
/** @see https://w3c.github.io/webdriver-bidi/#module-session */
export var Session;
(function (Session) {
    // keep-sorted start block=yes
    function parseSubscribeParams(params) {
        return parseObject(params, WebDriverBidi.Session.SubscribeParametersSchema);
    }
    Session.parseSubscribeParams = parseSubscribeParams;
    function parseUnsubscribeParams(params) {
        if (params && typeof params === 'object' && 'subscriptions' in params) {
            return parseObject(params, WebDriverBidi.Session.UnsubscribeByIdRequestSchema);
        }
        return parseObject(params, WebDriverBidi.Session.UnsubscribeParametersSchema);
    }
    Session.parseUnsubscribeParams = parseUnsubscribeParams;
    // keep-sorted end
})(Session || (Session = {}));
export var Emulation;
(function (Emulation) {
    // keep-sorted start block=yes
    function parseSetClientHintsOverrideParams(params) {
        const SetClientHintsOverrideParametersSchema = z.object({
            clientHints: z.union([
                WebDriverBidiUAClientHints.UserAgentClientHints
                    .ClientHintsMetadataSchema,
                z.null(),
            ]),
            contexts: z.array(z.string()).min(1).optional(),
            userContexts: z.array(z.string()).min(1).optional(),
        });
        return parseObject(params, SetClientHintsOverrideParametersSchema);
    }
    Emulation.parseSetClientHintsOverrideParams = parseSetClientHintsOverrideParams;
    function parseSetForcedColorsModeThemeOverrideParams(params) {
        return parseObject(params, WebDriverBidi.Emulation.SetForcedColorsModeThemeOverrideParametersSchema);
    }
    Emulation.parseSetForcedColorsModeThemeOverrideParams = parseSetForcedColorsModeThemeOverrideParams;
    function parseSetGeolocationOverrideParams(params) {
        if ('coordinates' in params && 'error' in params) {
            // Zod picks the first matching parameter omitting the other. In this case, the
            // `parseObject` will remove `error` from the params. However, specification
            // requires to throw an exception.
            throw new InvalidArgumentException('Coordinates and error cannot be set at the same time');
        }
        return parseObject(params, WebDriverBidi.Emulation.SetGeolocationOverrideParametersSchema);
    }
    Emulation.parseSetGeolocationOverrideParams = parseSetGeolocationOverrideParams;
    function parseSetLocaleOverrideParams(params) {
        return parseObject(params, WebDriverBidi.Emulation.SetLocaleOverrideParametersSchema);
    }
    Emulation.parseSetLocaleOverrideParams = parseSetLocaleOverrideParams;
    function parseSetNetworkConditionsParams(params) {
        return parseObject(params, WebDriverBidi.Emulation.SetNetworkConditionsParametersSchema);
    }
    Emulation.parseSetNetworkConditionsParams = parseSetNetworkConditionsParams;
    function parseSetScreenOrientationOverrideParams(params) {
        return parseObject(params, WebDriverBidi.Emulation.SetScreenOrientationOverrideParametersSchema);
    }
    Emulation.parseSetScreenOrientationOverrideParams = parseSetScreenOrientationOverrideParams;
    function parseSetScreenSettingsOverrideParams(params) {
        return parseObject(params, WebDriverBidi.Emulation.SetScreenSettingsOverrideParametersSchema);
    }
    Emulation.parseSetScreenSettingsOverrideParams = parseSetScreenSettingsOverrideParams;
    function parseSetScriptingEnabledParams(params) {
        return parseObject(params, WebDriverBidi.Emulation.SetScriptingEnabledParametersSchema);
    }
    Emulation.parseSetScriptingEnabledParams = parseSetScriptingEnabledParams;
    function parseSetScrollbarTypeOverrideParams(params) {
        return parseObject(params, WebDriverBidi.Emulation.SetScrollbarTypeOverrideParametersSchema);
    }
    Emulation.parseSetScrollbarTypeOverrideParams = parseSetScrollbarTypeOverrideParams;
    function parseSetTimezoneOverrideParams(params) {
        return parseObject(params, WebDriverBidi.Emulation.SetTimezoneOverrideParametersSchema);
    }
    Emulation.parseSetTimezoneOverrideParams = parseSetTimezoneOverrideParams;
    function parseSetTouchOverrideParams(params) {
        return parseObject(params, WebDriverBidi.Emulation.SetTouchOverrideParametersSchema);
    }
    Emulation.parseSetTouchOverrideParams = parseSetTouchOverrideParams;
    function parseSetUserAgentOverrideParams(params) {
        return parseObject(params, WebDriverBidi.Emulation.SetUserAgentOverrideParametersSchema);
    }
    Emulation.parseSetUserAgentOverrideParams = parseSetUserAgentOverrideParams;
    // keep-sorted end
})(Emulation || (Emulation = {}));
export var Input;
(function (Input) {
    // keep-sorted start block=yes
    function parsePerformActionsParams(params) {
        return parseObject(params, WebDriverBidi.Input.PerformActionsParametersSchema);
    }
    Input.parsePerformActionsParams = parsePerformActionsParams;
    function parseReleaseActionsParams(params) {
        return parseObject(params, WebDriverBidi.Input.ReleaseActionsParametersSchema);
    }
    Input.parseReleaseActionsParams = parseReleaseActionsParams;
    function parseSetFilesParams(params) {
        return parseObject(params, WebDriverBidi.Input.SetFilesParametersSchema);
    }
    Input.parseSetFilesParams = parseSetFilesParams;
    // keep-sorted end
})(Input || (Input = {}));
export var Storage;
(function (Storage) {
    // keep-sorted start block=yes
    function parseDeleteCookiesParams(params) {
        // Work around of `cddlconv` https://github.com/google/cddlconv/issues/19.
        // The generated schema `SameSiteSchema` in `src/protocol-parser/webdriver-bidi.ts` is
        // of type `"none" | "strict" | "lax"` which is not assignable to generated enum
        // `SameSite` in `src/protocol/webdriver-bidi.ts`.
        // TODO: remove cast after https://github.com/google/cddlconv/issues/19 is fixed.
        return parseObject(params, WebDriverBidi.Storage.DeleteCookiesParametersSchema);
    }
    Storage.parseDeleteCookiesParams = parseDeleteCookiesParams;
    function parseGetCookiesParams(params) {
        // Work around of `cddlconv` https://github.com/google/cddlconv/issues/19.
        // The generated schema `SameSiteSchema` in `src/protocol-parser/webdriver-bidi.ts` is
        // of type `"none" | "strict" | "lax"` which is not assignable to generated enum
        // `SameSite` in `src/protocol/webdriver-bidi.ts`.
        // TODO: remove cast after https://github.com/google/cddlconv/issues/19 is fixed.
        return parseObject(params, WebDriverBidi.Storage.GetCookiesParametersSchema);
    }
    Storage.parseGetCookiesParams = parseGetCookiesParams;
    function parseSetCookieParams(params) {
        // Work around of `cddlconv` https://github.com/google/cddlconv/issues/19.
        // The generated schema `SameSiteSchema` in `src/protocol-parser/webdriver-bidi.ts` is
        // of type `"none" | "strict" | "lax"` which is not assignable to generated enum
        // `SameSite` in `src/protocol/webdriver-bidi.ts`.
        // TODO: remove cast after https://github.com/google/cddlconv/issues/19 is fixed.
        return parseObject(params, WebDriverBidi.Storage.SetCookieParametersSchema);
    }
    Storage.parseSetCookieParams = parseSetCookieParams;
    // keep-sorted end
})(Storage || (Storage = {}));
export var Cdp;
(function (Cdp) {
    // keep-sorted start block=yes
    const GetSessionRequestSchema = z.object({
        context: WebDriverBidi.BrowsingContext.BrowsingContextSchema,
    });
    const ResolveRealmRequestSchema = z.object({
        realm: WebDriverBidi.Script.RealmSchema,
    });
    const SendCommandRequestSchema = z.object({
        // Allowing any cdpMethod, and casting to proper type later on.
        method: z.string(),
        // `passthrough` allows object to have any fields.
        // https://github.com/colinhacks/zod#passthrough
        params: z.object({}).passthrough().optional(),
        session: z.string().optional(),
    });
    function parseGetSessionRequest(params) {
        return parseObject(params, GetSessionRequestSchema);
    }
    Cdp.parseGetSessionRequest = parseGetSessionRequest;
    function parseResolveRealmRequest(params) {
        return parseObject(params, ResolveRealmRequestSchema);
    }
    Cdp.parseResolveRealmRequest = parseResolveRealmRequest;
    function parseSendCommandRequest(params) {
        return parseObject(params, SendCommandRequestSchema);
    }
    Cdp.parseSendCommandRequest = parseSendCommandRequest;
    // keep-sorted end
})(Cdp || (Cdp = {}));
export var Permissions;
(function (Permissions) {
    // keep-sorted start block=yes
    function parseSetPermissionsParams(params) {
        return {
            // TODO: remove once "goog:" attributes are not needed.
            ...params,
            ...parseObject(params, WebDriverBidiPermissions.Permissions.SetPermissionParametersSchema),
        };
    }
    Permissions.parseSetPermissionsParams = parseSetPermissionsParams;
    // keep-sorted end
})(Permissions || (Permissions = {}));
export var Bluetooth;
(function (Bluetooth) {
    // keep-sorted start block=yes
    function parseDisableSimulationParameters(params) {
        return parseObject(params, WebDriverBidiBluetooth.Bluetooth.DisableSimulationParametersSchema);
    }
    Bluetooth.parseDisableSimulationParameters = parseDisableSimulationParameters;
    function parseHandleRequestDevicePromptParams(params) {
        return parseObject(params, WebDriverBidiBluetooth.Bluetooth
            .HandleRequestDevicePromptParametersSchema);
    }
    Bluetooth.parseHandleRequestDevicePromptParams = parseHandleRequestDevicePromptParams;
    function parseSimulateAdapterParams(params) {
        return parseObject(params, WebDriverBidiBluetooth.Bluetooth.SimulateAdapterParametersSchema);
    }
    Bluetooth.parseSimulateAdapterParams = parseSimulateAdapterParams;
    function parseSimulateAdvertisementParams(params) {
        return parseObject(params, WebDriverBidiBluetooth.Bluetooth.SimulateAdvertisementParametersSchema);
    }
    Bluetooth.parseSimulateAdvertisementParams = parseSimulateAdvertisementParams;
    function parseSimulateCharacteristicParams(params) {
        return parseObject(params, WebDriverBidiBluetooth.Bluetooth.SimulateCharacteristicParametersSchema);
    }
    Bluetooth.parseSimulateCharacteristicParams = parseSimulateCharacteristicParams;
    function parseSimulateCharacteristicResponseParams(params) {
        return parseObject(params, WebDriverBidiBluetooth.Bluetooth
            .SimulateCharacteristicResponseParametersSchema);
    }
    Bluetooth.parseSimulateCharacteristicResponseParams = parseSimulateCharacteristicResponseParams;
    function parseSimulateDescriptorParams(params) {
        return parseObject(params, WebDriverBidiBluetooth.Bluetooth.SimulateDescriptorParametersSchema);
    }
    Bluetooth.parseSimulateDescriptorParams = parseSimulateDescriptorParams;
    function parseSimulateDescriptorResponseParams(params) {
        return parseObject(params, WebDriverBidiBluetooth.Bluetooth
            .SimulateDescriptorResponseParametersSchema);
    }
    Bluetooth.parseSimulateDescriptorResponseParams = parseSimulateDescriptorResponseParams;
    function parseSimulateGattConnectionResponseParams(params) {
        return parseObject(params, WebDriverBidiBluetooth.Bluetooth
            .SimulateGattConnectionResponseParametersSchema);
    }
    Bluetooth.parseSimulateGattConnectionResponseParams = parseSimulateGattConnectionResponseParams;
    function parseSimulateGattDisconnectionParams(params) {
        return parseObject(params, WebDriverBidiBluetooth.Bluetooth
            .SimulateGattDisconnectionParametersSchema);
    }
    Bluetooth.parseSimulateGattDisconnectionParams = parseSimulateGattDisconnectionParams;
    function parseSimulatePreconnectedPeripheralParams(params) {
        return parseObject(params, WebDriverBidiBluetooth.Bluetooth
            .SimulatePreconnectedPeripheralParametersSchema);
    }
    Bluetooth.parseSimulatePreconnectedPeripheralParams = parseSimulatePreconnectedPeripheralParams;
    function parseSimulateServiceParams(params) {
        return parseObject(params, WebDriverBidiBluetooth.Bluetooth.SimulateServiceParametersSchema);
    }
    Bluetooth.parseSimulateServiceParams = parseSimulateServiceParams;
    // keep-sorted end
})(Bluetooth || (Bluetooth = {}));
/** @see https://w3c.github.io/webdriver-bidi/#module-webExtension */
export var WebModule;
(function (WebModule) {
    // keep-sorted start block=yes
    function parseInstallParams(params) {
        return parseObject(params, WebDriverBidi.WebExtension.InstallParametersSchema);
    }
    WebModule.parseInstallParams = parseInstallParams;
    function parseUninstallParams(params) {
        return parseObject(params, WebDriverBidi.WebExtension.UninstallParametersSchema);
    }
    WebModule.parseUninstallParams = parseUninstallParams;
    // keep-sorted end
})(WebModule || (WebModule = {}));
//# sourceMappingURL=protocol-parser.js.map