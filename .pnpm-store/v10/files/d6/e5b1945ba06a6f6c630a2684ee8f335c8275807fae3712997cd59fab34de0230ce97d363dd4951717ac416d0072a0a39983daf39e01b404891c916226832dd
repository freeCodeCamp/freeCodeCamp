/*
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
 *
 */
import debug from 'debug';
const debugInternal = debug('bidi:server:pipeTranspot');
export class PipeTransport {
    #pipeWrite;
    #onMessage = null;
    #pendingMessage = '';
    constructor(pipeWrite, pipeRead) {
        this.#pipeWrite = pipeWrite;
        pipeRead.on('data', (chunk) => {
            return this.#dispatch(chunk);
        });
        pipeRead.on('close', () => {
            this.close();
        });
        pipeRead.on('error', (error) => {
            debugInternal('Pipe read error: ', error);
            this.close();
        });
        pipeWrite.on('error', (error) => {
            debugInternal('Pipe read error: ', error);
            this.close();
        });
    }
    setOnMessage(onMessage) {
        this.#onMessage = onMessage;
    }
    sendMessage(message) {
        // TODO: WebSocketServer keeps sending messages after closing the transport.
        // TODO: we should assert that the pipe was not closed.
        this.#pipeWrite.write(message);
        this.#pipeWrite.write('\0');
    }
    #dispatch(buffer) {
        // TODO: WebSocketServer keeps sending messages after closing the transport.
        // TODO: we should assert that the pipe was not closed.
        let end = buffer.indexOf('\0');
        if (end === -1) {
            this.#pendingMessage += buffer.toString();
            return;
        }
        const message = this.#pendingMessage + buffer.toString(undefined, 0, end);
        if (this.#onMessage) {
            this.#onMessage.call(null, message);
        }
        let start = end + 1;
        end = buffer.indexOf('\0', start);
        while (end !== -1) {
            if (this.#onMessage) {
                this.#onMessage.call(null, buffer.toString(undefined, start, end));
            }
            start = end + 1;
            end = buffer.indexOf('\0', start);
        }
        this.#pendingMessage = buffer.toString(undefined, start);
    }
    close() {
        debugInternal('Closing pipe');
    }
}
//# sourceMappingURL=PipeTransport.js.map