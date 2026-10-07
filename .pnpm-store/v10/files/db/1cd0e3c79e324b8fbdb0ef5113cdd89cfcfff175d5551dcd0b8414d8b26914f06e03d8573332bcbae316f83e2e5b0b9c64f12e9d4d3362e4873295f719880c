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
import { EventEmitter } from '../utils/EventEmitter.js';
/** An error that will be thrown if/when the connection is closed. */
export class CloseError extends Error {
}
/** Represents a high-level CDP connection to the browser. */
export class MapperCdpClient extends EventEmitter {
    #cdpConnection;
    #sessionId;
    constructor(cdpConnection, sessionId) {
        super();
        this.#cdpConnection = cdpConnection;
        this.#sessionId = sessionId;
    }
    get sessionId() {
        return this.#sessionId;
    }
    sendCommand(method, ...params) {
        return this.#cdpConnection.sendCommand(method, params[0], this.#sessionId);
    }
    isCloseError(error) {
        return error instanceof CloseError;
    }
}
//# sourceMappingURL=CdpClient.js.map