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
import http from 'http';
import debug from 'debug';
import * as websocket from 'websocket';
import { Deferred } from '../utils/Deferred.js';
import { uuidv4 } from '../utils/uuid.js';
import { BrowserInstance } from './BrowserInstance.js';
export const debugInfo = debug('bidi:server:info');
const debugInternal = debug('bidi:server:internal');
const debugSend = debug('bidi:server:SEND ▸');
const debugRecv = debug('bidi:server:RECV ◂');
export class WebSocketServer {
    #sessions = new Map();
    #port;
    #verbose;
    #server;
    #wsServer;
    constructor(port, verbose) {
        this.#port = port;
        this.#verbose = verbose;
        this.#server = http.createServer((request, response) => {
            return this.#onRequest(request, response).catch((e) => {
                debugInfo('Error while processing request', e);
                response.writeHead(500, String(e));
            });
        });
        this.#wsServer = new websocket.server({
            httpServer: this.#server,
            autoAcceptConnections: false,
        });
        this.#wsServer.on('request', this.#onWsRequest.bind(this));
        void this.#listen();
    }
    #logServerStarted() {
        debugInfo('BiDi server is listening on port', this.#port);
        debugInfo('BiDi server was started successfully.');
    }
    async #listen() {
        try {
            this.#server.listen(this.#port, () => {
                this.#logServerStarted();
            });
        }
        catch (error) {
            if (error &&
                typeof error === 'object' &&
                'code' in error &&
                error.code === 'EADDRINUSE') {
                await new Promise((resolve) => {
                    setTimeout(resolve, 500);
                });
                debugInfo('Retrying to run BiDi server');
                this.#server.listen(this.#port, () => {
                    this.#logServerStarted();
                });
            }
            throw error;
        }
    }
    async #onRequest(request, response) {
        debugInternal(`Received HTTP ${JSON.stringify(request.method)} request for ${JSON.stringify(request.url)}`);
        if (!request.url) {
            throw new Error('Request URL is empty.');
        }
        // https://w3c.github.io/webdriver-bidi/#transport, step 2.
        if (request.url === '/session') {
            const body = await new Promise((resolve, reject) => {
                const bodyArray = [];
                request.on('data', (chunk) => {
                    bodyArray.push(chunk);
                });
                request.on('error', reject);
                request.on('end', () => {
                    resolve(Buffer.concat(bodyArray));
                });
            });
            debugInternal(`Creating session by HTTP request ${body.toString()}`);
            // https://w3c.github.io/webdriver-bidi/#transport, step 3.
            const jsonBody = JSON.parse(body.toString());
            response.writeHead(200, {
                'Content-Type': 'application/json;charset=utf-8',
                'Cache-Control': 'no-cache',
            });
            const sessionId = uuidv4();
            const session = {
                sessionId,
                // TODO: launch browser instance and set it to the session after WPT
                //  tests clean up is switched to pure BiDi.
                browserInstancePromise: undefined,
                sessionOptions: {
                    chromeOptions: this.#getChromeOptions(jsonBody.capabilities),
                    verbose: this.#verbose,
                    sessionNewBody: `{"id":0,"method":"session.new","params":${body.toString()}}`,
                },
            };
            this.#sessions.set(sessionId, session);
            const webSocketUrl = `ws://localhost:${this.#port}/session/${sessionId}`;
            debugInternal(`Session created. WebSocket URL: ${JSON.stringify(webSocketUrl)}.`);
            response.write(JSON.stringify({
                value: {
                    sessionId,
                    capabilities: {
                        webSocketUrl,
                    },
                },
            }));
            return response.end();
        }
        else if (request.url.startsWith('/session')) {
            debugInternal(`Unknown session command ${request.method ?? 'UNKNOWN METHOD'} request for ${request.url} with payload ${await this.#getHttpRequestPayload(request)}. 200 returned.`);
            response.writeHead(200, {
                'Content-Type': 'application/json;charset=utf-8',
                'Cache-Control': 'no-cache',
            });
            response.write(JSON.stringify({
                value: {},
            }));
            return response.end();
        }
        throw new Error(`Unknown "${request.method}" request for "${JSON.stringify(request.url)}" with payload "${await this.#getHttpRequestPayload(request)}".`);
    }
    #onWsRequest(request) {
        // Session is set either by Classic or BiDi commands.
        let session;
        // Request to `/session` should be treated as a new session request.
        let requestSessionId = '';
        if ((request.resource ?? '').startsWith(`/session/`)) {
            requestSessionId = (request.resource ?? '').split('/').pop() ?? '';
        }
        debugInternal(`new WS request received. Path: ${JSON.stringify(request.resourceURL.path)}, sessionId: ${JSON.stringify(requestSessionId)}`);
        if (requestSessionId !== '' &&
            requestSessionId !== undefined &&
            !this.#sessions.has(requestSessionId)) {
            debugInternal('Unknown session id:', requestSessionId);
            request.reject();
            return;
        }
        const connection = request.accept();
        session = this.#sessions.get(requestSessionId ?? '');
        if (session !== undefined) {
            // BrowserInstance is created for each new WS connection, even for the
            // same SessionId. This is because WPT uses a single session for all the
            // tests, but cleans up tests using WebDriver Classic commands, which is
            // not implemented in this Mapper runner.
            // TODO: connect to an existing BrowserInstance instead.
            const sessionOptions = session.sessionOptions;
            session.browserInstancePromise = this.#closeBrowserInstanceIfLaunched(session)
                .then(async () => await this.#launchBrowserInstance(connection, sessionOptions))
                .catch((e) => {
                debugInfo('Error while creating session', e);
                connection.close(500, 'cannot create browser instance');
                throw e;
            });
        }
        connection.on('message', async (message) => {
            // If type is not text, return error.
            if (message.type !== 'utf8') {
                this.#respondWithError(connection, {}, "invalid argument" /* ErrorCode.InvalidArgument */, `not supported type (${message.type})`);
                return;
            }
            const plainCommandData = message.utf8Data;
            if (debugRecv.enabled) {
                try {
                    debugRecv(JSON.parse(plainCommandData));
                }
                catch {
                    debugRecv(plainCommandData);
                }
            }
            // Try to parse the message to handle some of BiDi commands.
            let parsedCommandData;
            try {
                parsedCommandData = JSON.parse(plainCommandData);
            }
            catch (error) {
                this.#respondWithError(connection, {}, "invalid argument" /* ErrorCode.InvalidArgument */, `unable to parse BiDi command: ${error}`);
                return;
            }
            // Handle creating new session.
            if (parsedCommandData.method === 'session.new') {
                if (session !== undefined) {
                    debugInfo('WS connection already have an associated session.');
                    this.#respondWithError(connection, plainCommandData, "session not created" /* ErrorCode.SessionNotCreated */, 'WS connection already have an associated session.');
                    return;
                }
                try {
                    const sessionOptions = {
                        chromeOptions: this.#getChromeOptions(parsedCommandData.params?.capabilities),
                        verbose: this.#verbose,
                        sessionNewBody: plainCommandData,
                    };
                    const browserInstance = await this.#launchBrowserInstance(connection, sessionOptions, true);
                    const sessionId = uuidv4();
                    session = {
                        sessionId,
                        browserInstancePromise: Promise.resolve(browserInstance),
                        sessionOptions,
                    };
                    this.#sessions.set(sessionId, session);
                }
                catch (e) {
                    debugInfo('Error while creating session', e);
                    this.#respondWithError(connection, plainCommandData, "session not created" /* ErrorCode.SessionNotCreated */, e?.message ?? 'Unknown error');
                    return;
                }
                return;
            }
            // Handle ending session. Close browser if open, remove session.
            if (parsedCommandData.method === 'session.end') {
                if (session === undefined) {
                    debugInfo('WS connection does not have an associated session.');
                    this.#respondWithError(connection, plainCommandData, "session not created" /* ErrorCode.SessionNotCreated */, 'WS connection does not have an associated session.');
                    return;
                }
                try {
                    await this.#closeBrowserInstanceIfLaunched(session);
                    this.#sessions.delete(session.sessionId);
                }
                catch (e) {
                    debugInfo('Error while closing session', e);
                    this.#respondWithError(connection, plainCommandData, "unknown error" /* ErrorCode.UnknownError */, `Session cannot be closed. Error: ${e?.message}`);
                    return;
                }
                this.#sendClientMessage({
                    id: parsedCommandData.id,
                    type: 'success',
                    result: {},
                }, connection);
                return;
            }
            if (session === undefined) {
                debugInfo('Session is not yet initialized.');
                this.#respondWithError(connection, plainCommandData, "invalid session id" /* ErrorCode.InvalidSessionId */, 'Session is not yet initialized.');
                return;
            }
            if (session.browserInstancePromise === undefined) {
                debugInfo('Browser instance is not launched.');
                this.#respondWithError(connection, plainCommandData, "invalid session id" /* ErrorCode.InvalidSessionId */, 'Browser instance is not launched.');
                return;
            }
            const browserInstance = await session.browserInstancePromise;
            // Handle `browser.close` command.
            if (parsedCommandData.method === 'browser.close') {
                await browserInstance.close();
                this.#sendClientMessage({
                    id: parsedCommandData.id,
                    type: 'success',
                    result: {},
                }, connection);
                return;
            }
            // Forward all other commands to BiDi Mapper.
            await browserInstance.bidiSession().sendCommand(plainCommandData);
        });
        connection.on('close', async () => {
            debugInternal(`Peer ${connection.remoteAddress} disconnected.`);
            // TODO: don't close Browser instance to allow re-connecting to the session.
            await this.#closeBrowserInstanceIfLaunched(session);
        });
    }
    async #closeBrowserInstanceIfLaunched(session) {
        if (session === undefined || session.browserInstancePromise === undefined) {
            return;
        }
        const browserInstance = await session.browserInstancePromise;
        session.browserInstancePromise = undefined;
        void browserInstance.close();
    }
    #getChromeOptions(capabilities) {
        const chromeCapabilities = capabilities?.alwaysMatch?.['goog:chromeOptions'];
        return {
            chromeArgs: chromeCapabilities?.args ?? [],
            chromeBinary: chromeCapabilities?.binary ?? undefined,
        };
    }
    async #launchBrowserInstance(connection, sessionOptions, passSessionNewThrough = false) {
        debugInfo('Scheduling browser launch...');
        const browserInstance = await BrowserInstance.run(sessionOptions.chromeOptions, sessionOptions.verbose);
        const body = JSON.parse(sessionOptions.sessionNewBody);
        const id = body.id;
        const sessionCreated = new Deferred();
        const sessionResponseListener = (message) => {
            const jsonMessage = JSON.parse(message);
            if (jsonMessage['id'] === id) {
                debugInfo('Receiving session.new response from mapper', message);
                sessionCreated.resolve();
                if (passSessionNewThrough) {
                    this.#sendClientMessageString(message, connection);
                }
            }
        };
        browserInstance.bidiSession().on('message', sessionResponseListener);
        debugInfo('Sending session.new to mapper', sessionOptions.sessionNewBody);
        await browserInstance
            .bidiSession()
            .sendCommand(sessionOptions.sessionNewBody);
        await sessionCreated;
        browserInstance.bidiSession().off('message', sessionResponseListener);
        // Forward messages from BiDi Mapper to the client unconditionally.
        browserInstance.bidiSession().on('message', (message) => {
            this.#sendClientMessageString(message, connection);
        });
        debugInfo('Browser is launched!');
        return browserInstance;
    }
    #sendClientMessageString(message, connection) {
        if (debugSend.enabled) {
            try {
                debugSend(JSON.parse(message));
            }
            catch {
                debugSend(message);
            }
        }
        connection.sendUTF(message);
    }
    #sendClientMessage(object, connection) {
        const json = JSON.stringify(object);
        return this.#sendClientMessageString(json, connection);
    }
    #respondWithError(connection, plainCommandData, errorCode, errorMessage) {
        const errorResponse = this.#getErrorResponse(plainCommandData, errorCode, errorMessage);
        void this.#sendClientMessage(errorResponse, connection);
    }
    #getErrorResponse(plainCommandData, errorCode, errorMessage) {
        // XXX: this is bizarre per spec. We reparse the payload and
        // extract the ID, regardless of what kind of value it was.
        let commandId;
        try {
            const commandData = JSON.parse(plainCommandData);
            if ('id' in commandData) {
                commandId = commandData.id;
            }
        }
        catch { }
        return {
            type: 'error',
            id: commandId,
            error: errorCode,
            message: errorMessage,
            // XXX: optional stacktrace field.
        };
    }
    #getHttpRequestPayload(request) {
        return new Promise((resolve, reject) => {
            let data = '';
            request.on('data', (chunk) => {
                data += chunk;
            });
            request.on('end', () => {
                resolve(data);
            });
            request.on('error', (error) => {
                reject(error);
            });
        });
    }
}
//# sourceMappingURL=WebSocketServer.js.map