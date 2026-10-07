/**
 * Copyright 2021 Google LLC.
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
import type { CdpClient } from '../cdp/CdpClient.js';
import type { CdpConnection } from '../cdp/CdpConnection.js';
import type { ChromiumBidi } from '../protocol/protocol.js';
import { EventEmitter } from '../utils/EventEmitter.js';
import { type LoggerFn } from '../utils/log.js';
import type { Result } from '../utils/result.js';
import type { BidiCommandParameterParser } from './BidiParser.js';
import type { BidiTransport } from './BidiTransport.js';
import type { OutgoingMessage } from './OutgoingMessage.js';
interface BidiServerEvent extends Record<string | symbol, unknown> {
    message: ChromiumBidi.Command;
}
export declare class BidiServer extends EventEmitter<BidiServerEvent> {
    #private;
    private constructor();
    /**
     * Creates and starts BiDi Mapper instance.
     */
    static createAndStart(bidiTransport: BidiTransport, cdpConnection: CdpConnection, browserCdpClient: CdpClient, selfTargetId: string, parser?: BidiCommandParameterParser, logger?: LoggerFn): Promise<BidiServer>;
    /**
     * Sends BiDi message.
     */
    emitOutgoingMessage(messageEntry: Promise<Result<OutgoingMessage>>, event: string): void;
    close(): void;
}
export {};
