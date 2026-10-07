/**
 * Copyright 2023 Google LLC.
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
import type * as Cdp from './cdp.js';
import type * as WebDriverBidiBluetooth from './generated/webdriver-bidi-bluetooth.js';
import type * as WebDriverBidiSpeculation from './generated/webdriver-bidi-nav-speculation.ts';
import type * as WebDriverBidiPermissions from './generated/webdriver-bidi-permissions.js';
import type * as WebDriverBidiUAClientHints from './generated/webdriver-bidi-ua-client-hints.js';
import type * as WebDriverBidi from './generated/webdriver-bidi.js';
export type EventNames = Cdp.EventNames | `${BiDiModule}` | `${Bluetooth.EventNames}` | `${BrowsingContext.EventNames}` | `${Input.EventNames}` | `${Log.EventNames}` | `${Network.EventNames}` | `${Script.EventNames}` | `${Speculation.EventNames}`;
export declare enum BiDiModule {
    Bluetooth = "bluetooth",
    Browser = "browser",
    BrowsingContext = "browsingContext",
    Cdp = "goog:cdp",
    Input = "input",
    Log = "log",
    Network = "network",
    Script = "script",
    Session = "session",
    Speculation = "speculation"
}
export declare namespace Script {
    enum EventNames {
        Message = "script.message",
        RealmCreated = "script.realmCreated",
        RealmDestroyed = "script.realmDestroyed"
    }
}
export declare namespace Log {
    enum EventNames {
        LogEntryAdded = "log.entryAdded"
    }
}
export declare namespace BrowsingContext {
    enum EventNames {
        ContextCreated = "browsingContext.contextCreated",
        ContextDestroyed = "browsingContext.contextDestroyed",
        DomContentLoaded = "browsingContext.domContentLoaded",
        DownloadEnd = "browsingContext.downloadEnd",
        DownloadWillBegin = "browsingContext.downloadWillBegin",
        FragmentNavigated = "browsingContext.fragmentNavigated",
        HistoryUpdated = "browsingContext.historyUpdated",
        Load = "browsingContext.load",
        NavigationAborted = "browsingContext.navigationAborted",
        NavigationCommitted = "browsingContext.navigationCommitted",
        NavigationFailed = "browsingContext.navigationFailed",
        NavigationStarted = "browsingContext.navigationStarted",
        UserPromptClosed = "browsingContext.userPromptClosed",
        UserPromptOpened = "browsingContext.userPromptOpened"
    }
}
export declare namespace Input {
    enum EventNames {
        FileDialogOpened = "input.fileDialogOpened"
    }
}
export declare namespace Network {
    enum EventNames {
        AuthRequired = "network.authRequired",
        BeforeRequestSent = "network.beforeRequestSent",
        FetchError = "network.fetchError",
        ResponseCompleted = "network.responseCompleted",
        ResponseStarted = "network.responseStarted"
    }
}
export declare namespace Bluetooth {
    enum EventNames {
        RequestDevicePromptUpdated = "bluetooth.requestDevicePromptUpdated",
        GattConnectionAttempted = "bluetooth.gattConnectionAttempted",
        CharacteristicEventGenerated = "bluetooth.characteristicEventGenerated",
        DescriptorEventGenerated = "bluetooth.descriptorEventGenerated"
    }
}
export declare namespace Speculation {
    enum EventNames {
        PrefetchStatusUpdated = "speculation.prefetchStatusUpdated"
    }
}
type ExternalSpecCommand<T> = {
    id: WebDriverBidi.JsUint;
} & T;
type ExternalSpecEvent<T> = {
    type: 'event';
} & T & WebDriverBidi.Extensible;
export type Command = (WebDriverBidi.Command | Cdp.Command | ExternalSpecCommand<WebDriverBidiPermissions.PermissionsCommand> | ExternalSpecCommand<WebDriverBidiBluetooth.BluetoothCommand> | ExternalSpecCommand<WebDriverBidiUAClientHints.UserAgentClientHintsCommand>) & {
    'goog:channel'?: GoogChannel;
};
export type CommandResponse = WebDriverBidi.CommandResponse | Cdp.CommandResponse;
export type BluetoothEvent = ExternalSpecEvent<WebDriverBidiBluetooth.Bluetooth.RequestDevicePromptUpdated> | ExternalSpecEvent<WebDriverBidiBluetooth.Bluetooth.GattConnectionAttempted> | ExternalSpecEvent<WebDriverBidiBluetooth.Bluetooth.CharacteristicEventGenerated> | ExternalSpecEvent<WebDriverBidiBluetooth.Bluetooth.DescriptorEventGenerated>;
export type SpeculationEvent = ExternalSpecEvent<WebDriverBidiSpeculation.Speculation.PrefetchStatusUpdated>;
export type Event = WebDriverBidi.Event | Cdp.Event | BluetoothEvent | SpeculationEvent;
export declare const EVENT_NAMES: Set<BiDiModule | Bluetooth.EventNames | BrowsingContext.EventNames | Input.EventNames.FileDialogOpened | Log.EventNames.LogEntryAdded | Network.EventNames | Script.EventNames | Speculation.EventNames.PrefetchStatusUpdated>;
export type ResultData = WebDriverBidi.ResultData | Cdp.ResultData;
export type GoogChannel = string | null;
export type Message = (WebDriverBidi.Message | Cdp.Message | BluetoothEvent | SpeculationEvent) & {
    'goog:channel'?: GoogChannel;
};
export {};
