/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Bidi from './gen/main.js';
import * as BidiPermissions from './gen/permissions.js';
import * as BidiBluetooth from './gen/web-bluetooth.js';
import * as BidiUaClientHints from './gen/ua-client-hints.js';

export * from './gen/main.js';
export * from './gen/permissions.js';
export * from './gen/web-bluetooth.js';
// Only `UserAgentClientHintsCommand` is exported, because the UA-CH extends
// the `emulation` WebDriver BiDi domain and exposes `Emulation` namespace
// which is already exported by main spec.
export {UserAgentClientHintsCommand} from './gen/ua-client-hints.js';
export {BidiUaClientHints};

export * from './gen/mapping.js';

type ExternalSpecCommand<T> = {
  // id is defined by the main WebDriver BiDi spec and extension specs do
  // not re-define it. Therefore, it's not part of generated types.
  id: Bidi.JsUint;
} & T;

export type Result = Bidi.ResultData;

export type Command =
  | Bidi.Command
  | ExternalSpecCommand<BidiPermissions.PermissionsCommand>
  | ExternalSpecCommand<BidiBluetooth.BluetoothCommand>
  | ExternalSpecCommand<BidiUaClientHints.UserAgentClientHintsCommand>;

type ExternalSpecEvent<T> = {
  // type is defined by the main WebDriver BiDi spec and extension specs do
  // not re-define it. Therefore, it's not part of generated types.
  type: 'event';
} & T &
  Bidi.Extensible;

export type Event =
  | Bidi.Event
  | ExternalSpecEvent<BidiBluetooth.BluetoothEvent>;
