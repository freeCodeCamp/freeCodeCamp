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
import { type Cdp } from '../../../protocol/protocol.js';
import type { CdpClient, CdpConnection } from '../../BidiMapper.js';
import type { BrowsingContextStorage } from '../context/BrowsingContextStorage.js';
import type { RealmStorage } from '../script/RealmStorage.js';
export declare class CdpProcessor {
    #private;
    constructor(browsingContextStorage: BrowsingContextStorage, realmStorage: RealmStorage, cdpConnection: CdpConnection, browserCdpClient: CdpClient);
    getSession(params: Cdp.GetSessionParameters): Cdp.GetSessionResult;
    resolveRealm(params: Cdp.ResolveRealmParameters): Cdp.ResolveRealmResult;
    sendCommand(params: Cdp.SendCommandParameters): Promise<Cdp.SendCommandResult>;
}
