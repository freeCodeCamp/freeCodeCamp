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
export {UserAgentClientHintsCommand} from './gen/ua-client-hints.js';
export {BidiUaClientHints};
export * from './gen/mapping.js';
type ExternalSpecCommand<T> = {
  id: Bidi.JsUint;
} & T;
export type Result = Bidi.ResultData;
export type Command =
  | Bidi.Command
  | ExternalSpecCommand<BidiPermissions.PermissionsCommand>
  | ExternalSpecCommand<BidiBluetooth.BluetoothCommand>
  | ExternalSpecCommand<BidiUaClientHints.UserAgentClientHintsCommand>;
type ExternalSpecEvent<T> = {
  type: 'event';
} & T &
  Bidi.Extensible;
export type Event =
  | Bidi.Event
  | ExternalSpecEvent<BidiBluetooth.BluetoothEvent>;
