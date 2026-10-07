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
 * limitations under the License. *
 */
import type { BidiTransport } from '../bidiMapper/BidiMapper.js';
import { type ChromiumBidi } from '../protocol/protocol.js';
import { LogType } from '../utils/log.js';
import type { Transport } from '../utils/transport.js';
export declare class WindowBidiTransport implements BidiTransport {
    #private;
    static readonly LOGGER_PREFIX_RECV: "bidi:RECV ◂";
    static readonly LOGGER_PREFIX_SEND: "bidi:SEND ▸";
    static readonly LOGGER_PREFIX_WARN = LogType.debugWarn;
    constructor();
    setOnMessage(onMessage: Parameters<BidiTransport['setOnMessage']>[0]): void;
    sendMessage(message: ChromiumBidi.Message): void;
    close(): void;
}
export declare class WindowCdpTransport implements Transport {
    #private;
    constructor();
    setOnMessage(onMessage: Parameters<Transport['setOnMessage']>[0]): void;
    sendMessage(message: string): void;
    close(): void;
}
