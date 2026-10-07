import { onUnexpectedError, transformErrorForSerialization } from '../errors.js';
import { Emitter } from '../event.js';
import { Disposable } from '../lifecycle.js';
import { isWeb } from '../platform.js';
import { isUpperAsciiLetter } from '../strings.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
const DEFAULT_CHANNEL = 'default';
const INITIALIZE = '$initialize';
let webWorkerWarningLogged = false;
function logOnceWebWorkerWarning(err) {
    if (!isWeb) {
        // running tests
        return;
    }
    if (!webWorkerWarningLogged) {
        webWorkerWarningLogged = true;
        console.warn('Could not create web worker(s). Falling back to loading web worker code in main thread, which might cause UI freezes. Please see https://github.com/microsoft/monaco-editor#faq');
    }
    console.warn(err.message);
}
class RequestMessage {
    constructor(vsWorker, req, channel, method, args) {
        this.vsWorker = vsWorker;
        this.req = req;
        this.channel = channel;
        this.method = method;
        this.args = args;
        this.type = 0 /* MessageType.Request */;
    }
}
class ReplyMessage {
    constructor(vsWorker, seq, res, err) {
        this.vsWorker = vsWorker;
        this.seq = seq;
        this.res = res;
        this.err = err;
        this.type = 1 /* MessageType.Reply */;
    }
}
class SubscribeEventMessage {
    constructor(vsWorker, req, channel, eventName, arg) {
        this.vsWorker = vsWorker;
        this.req = req;
        this.channel = channel;
        this.eventName = eventName;
        this.arg = arg;
        this.type = 2 /* MessageType.SubscribeEvent */;
    }
}
class EventMessage {
    constructor(vsWorker, req, event) {
        this.vsWorker = vsWorker;
        this.req = req;
        this.event = event;
        this.type = 3 /* MessageType.Event */;
    }
}
class UnsubscribeEventMessage {
    constructor(vsWorker, req) {
        this.vsWorker = vsWorker;
        this.req = req;
        this.type = 4 /* MessageType.UnsubscribeEvent */;
    }
}
class WebWorkerProtocol {
    constructor(handler) {
        this._workerId = -1;
        this._handler = handler;
        this._lastSentReq = 0;
        this._pendingReplies = Object.create(null);
        this._pendingEmitters = new Map();
        this._pendingEvents = new Map();
    }
    setWorkerId(workerId) {
        this._workerId = workerId;
    }
    async sendMessage(channel, method, args) {
        const req = String(++this._lastSentReq);
        return new Promise((resolve, reject) => {
            this._pendingReplies[req] = {
                resolve: resolve,
                reject: reject
            };
            this._send(new RequestMessage(this._workerId, req, channel, method, args));
        });
    }
    listen(channel, eventName, arg) {
        let req = null;
        const emitter = new Emitter({
            onWillAddFirstListener: () => {
                req = String(++this._lastSentReq);
                this._pendingEmitters.set(req, emitter);
                this._send(new SubscribeEventMessage(this._workerId, req, channel, eventName, arg));
            },
            onDidRemoveLastListener: () => {
                this._pendingEmitters.delete(req);
                this._send(new UnsubscribeEventMessage(this._workerId, req));
                req = null;
            }
        });
        return emitter.event;
    }
    handleMessage(message) {
        if (!message || !message.vsWorker) {
            return;
        }
        if (this._workerId !== -1 && message.vsWorker !== this._workerId) {
            return;
        }
        this._handleMessage(message);
    }
    createProxyToRemoteChannel(channel, sendMessageBarrier) {
        const handler = {
            get: (target, name) => {
                if (typeof name === 'string' && !target[name]) {
                    if (propertyIsDynamicEvent(name)) { // onDynamic...
                        target[name] = (arg) => {
                            return this.listen(channel, name, arg);
                        };
                    }
                    else if (propertyIsEvent(name)) { // on...
                        target[name] = this.listen(channel, name, undefined);
                    }
                    else if (name.charCodeAt(0) === 36 /* CharCode.DollarSign */) { // $...
                        target[name] = async (...myArgs) => {
                            await sendMessageBarrier?.();
                            return this.sendMessage(channel, name, myArgs);
                        };
                    }
                }
                return target[name];
            }
        };
        return new Proxy(Object.create(null), handler);
    }
    _handleMessage(msg) {
        switch (msg.type) {
            case 1 /* MessageType.Reply */:
                return this._handleReplyMessage(msg);
            case 0 /* MessageType.Request */:
                return this._handleRequestMessage(msg);
            case 2 /* MessageType.SubscribeEvent */:
                return this._handleSubscribeEventMessage(msg);
            case 3 /* MessageType.Event */:
                return this._handleEventMessage(msg);
            case 4 /* MessageType.UnsubscribeEvent */:
                return this._handleUnsubscribeEventMessage(msg);
        }
    }
    _handleReplyMessage(replyMessage) {
        if (!this._pendingReplies[replyMessage.seq]) {
            console.warn('Got reply to unknown seq');
            return;
        }
        const reply = this._pendingReplies[replyMessage.seq];
        delete this._pendingReplies[replyMessage.seq];
        if (replyMessage.err) {
            let err = replyMessage.err;
            if (replyMessage.err.$isError) {
                const newErr = new Error();
                newErr.name = replyMessage.err.name;
                newErr.message = replyMessage.err.message;
                newErr.stack = replyMessage.err.stack;
                err = newErr;
            }
            reply.reject(err);
            return;
        }
        reply.resolve(replyMessage.res);
    }
    _handleRequestMessage(requestMessage) {
        const req = requestMessage.req;
        const result = this._handler.handleMessage(requestMessage.channel, requestMessage.method, requestMessage.args);
        result.then((r) => {
            this._send(new ReplyMessage(this._workerId, req, r, undefined));
        }, (e) => {
            if (e.detail instanceof Error) {
                // Loading errors have a detail property that points to the actual error
                e.detail = transformErrorForSerialization(e.detail);
            }
            this._send(new ReplyMessage(this._workerId, req, undefined, transformErrorForSerialization(e)));
        });
    }
    _handleSubscribeEventMessage(msg) {
        const req = msg.req;
        const disposable = this._handler.handleEvent(msg.channel, msg.eventName, msg.arg)((event) => {
            this._send(new EventMessage(this._workerId, req, event));
        });
        this._pendingEvents.set(req, disposable);
    }
    _handleEventMessage(msg) {
        if (!this._pendingEmitters.has(msg.req)) {
            console.warn('Got event for unknown req');
            return;
        }
        this._pendingEmitters.get(msg.req).fire(msg.event);
    }
    _handleUnsubscribeEventMessage(msg) {
        if (!this._pendingEvents.has(msg.req)) {
            console.warn('Got unsubscribe for unknown req');
            return;
        }
        this._pendingEvents.get(msg.req).dispose();
        this._pendingEvents.delete(msg.req);
    }
    _send(msg) {
        const transfer = [];
        if (msg.type === 0 /* MessageType.Request */) {
            for (let i = 0; i < msg.args.length; i++) {
                const arg = msg.args[i];
                if (arg instanceof ArrayBuffer) {
                    transfer.push(arg);
                }
            }
        }
        else if (msg.type === 1 /* MessageType.Reply */) {
            if (msg.res instanceof ArrayBuffer) {
                transfer.push(msg.res);
            }
        }
        this._handler.sendMessage(msg, transfer);
    }
}
/**
 * Main thread side
 */
class WebWorkerClient extends Disposable {
    constructor(worker) {
        super();
        this._localChannels = new Map();
        this._worker = this._register(worker);
        this._register(this._worker.onMessage((msg) => {
            this._protocol.handleMessage(msg);
        }));
        this._register(this._worker.onError((err) => {
            logOnceWebWorkerWarning(err);
            onUnexpectedError(err);
        }));
        this._protocol = new WebWorkerProtocol({
            sendMessage: (msg, transfer) => {
                this._worker.postMessage(msg, transfer);
            },
            handleMessage: (channel, method, args) => {
                return this._handleMessage(channel, method, args);
            },
            handleEvent: (channel, eventName, arg) => {
                return this._handleEvent(channel, eventName, arg);
            }
        });
        this._protocol.setWorkerId(this._worker.getId());
        // Send initialize message
        this._onModuleLoaded = this._protocol.sendMessage(DEFAULT_CHANNEL, INITIALIZE, [
            this._worker.getId(),
        ]).then(() => { });
        this.proxy = this._protocol.createProxyToRemoteChannel(DEFAULT_CHANNEL, async () => { await this._onModuleLoaded; });
        this._onModuleLoaded.catch((e) => {
            this._onError('Worker failed to load ', e);
        });
    }
    _handleMessage(channelName, method, args) {
        const channel = this._localChannels.get(channelName);
        if (!channel) {
            return Promise.reject(new Error(`Missing channel ${channelName} on main thread`));
        }
        const fn = channel[method];
        if (typeof fn !== 'function') {
            return Promise.reject(new Error(`Missing method ${method} on main thread channel ${channelName}`));
        }
        try {
            return Promise.resolve(fn.apply(channel, args));
        }
        catch (e) {
            return Promise.reject(e);
        }
    }
    _handleEvent(channelName, eventName, arg) {
        const channel = this._localChannels.get(channelName);
        if (!channel) {
            throw new Error(`Missing channel ${channelName} on main thread`);
        }
        if (propertyIsDynamicEvent(eventName)) {
            const fn = channel[eventName];
            if (typeof fn !== 'function') {
                throw new Error(`Missing dynamic event ${eventName} on main thread channel ${channelName}.`);
            }
            const event = fn.call(channel, arg);
            if (typeof event !== 'function') {
                throw new Error(`Missing dynamic event ${eventName} on main thread channel ${channelName}.`);
            }
            return event;
        }
        if (propertyIsEvent(eventName)) {
            const event = channel[eventName];
            if (typeof event !== 'function') {
                throw new Error(`Missing event ${eventName} on main thread channel ${channelName}.`);
            }
            return event;
        }
        throw new Error(`Malformed event name ${eventName}`);
    }
    setChannel(channel, handler) {
        this._localChannels.set(channel, handler);
    }
    _onError(message, error) {
        console.error(message);
        console.info(error);
    }
}
function propertyIsEvent(name) {
    // Assume a property is an event if it has a form of "onSomething"
    return name[0] === 'o' && name[1] === 'n' && isUpperAsciiLetter(name.charCodeAt(2));
}
function propertyIsDynamicEvent(name) {
    // Assume a property is a dynamic event (a method that returns an event) if it has a form of "onDynamicSomething"
    return /^onDynamic/.test(name) && isUpperAsciiLetter(name.charCodeAt(9));
}
/**
 * Worker side
 */
class WebWorkerServer {
    constructor(postMessage, requestHandlerFactory) {
        this._localChannels = new Map();
        this._remoteChannels = new Map();
        this._protocol = new WebWorkerProtocol({
            sendMessage: (msg, transfer) => {
                postMessage(msg, transfer);
            },
            handleMessage: (channel, method, args) => this._handleMessage(channel, method, args),
            handleEvent: (channel, eventName, arg) => this._handleEvent(channel, eventName, arg)
        });
        this.requestHandler = requestHandlerFactory(this);
    }
    onmessage(msg) {
        this._protocol.handleMessage(msg);
    }
    _handleMessage(channel, method, args) {
        if (channel === DEFAULT_CHANNEL && method === INITIALIZE) {
            return this.initialize(args[0]);
        }
        const requestHandler = (channel === DEFAULT_CHANNEL ? this.requestHandler : this._localChannels.get(channel));
        if (!requestHandler) {
            return Promise.reject(new Error(`Missing channel ${channel} on worker thread`));
        }
        const fn = requestHandler[method];
        if (typeof fn !== 'function') {
            return Promise.reject(new Error(`Missing method ${method} on worker thread channel ${channel}`));
        }
        try {
            return Promise.resolve(fn.apply(requestHandler, args));
        }
        catch (e) {
            return Promise.reject(e);
        }
    }
    _handleEvent(channel, eventName, arg) {
        const requestHandler = (channel === DEFAULT_CHANNEL ? this.requestHandler : this._localChannels.get(channel));
        if (!requestHandler) {
            throw new Error(`Missing channel ${channel} on worker thread`);
        }
        if (propertyIsDynamicEvent(eventName)) {
            const fn = requestHandler[eventName];
            if (typeof fn !== 'function') {
                throw new Error(`Missing dynamic event ${eventName} on request handler.`);
            }
            const event = fn.call(requestHandler, arg);
            if (typeof event !== 'function') {
                throw new Error(`Missing dynamic event ${eventName} on request handler.`);
            }
            return event;
        }
        if (propertyIsEvent(eventName)) {
            const event = requestHandler[eventName];
            if (typeof event !== 'function') {
                throw new Error(`Missing event ${eventName} on request handler.`);
            }
            return event;
        }
        throw new Error(`Malformed event name ${eventName}`);
    }
    getChannel(channel) {
        if (!this._remoteChannels.has(channel)) {
            const inst = this._protocol.createProxyToRemoteChannel(channel);
            this._remoteChannels.set(channel, inst);
        }
        return this._remoteChannels.get(channel);
    }
    async initialize(workerId) {
        this._protocol.setWorkerId(workerId);
    }
}

export { WebWorkerClient, WebWorkerServer, logOnceWebWorkerWarning };
