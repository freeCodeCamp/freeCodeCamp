var _a;
import { LogType } from '../utils/log.js';
import { log } from './mapperTabPage.js';
export class WindowBidiTransport {
    static LOGGER_PREFIX_RECV = `${LogType.bidi}:RECV ◂`;
    static LOGGER_PREFIX_SEND = `${LogType.bidi}:SEND ▸`;
    static LOGGER_PREFIX_WARN = LogType.debugWarn;
    #onMessage = null;
    constructor() {
        window.onBidiMessage = (message) => {
            log(_a.LOGGER_PREFIX_RECV, message);
            try {
                const command = _a.#parseBidiMessage(message);
                this.#onMessage?.call(null, command);
            }
            catch (e) {
                const error = e instanceof Error ? e : new Error(e);
                // Transport-level error does not provide goog:channel.
                this.#respondWithError(message, "invalid argument" /* ErrorCode.InvalidArgument */, error, null);
            }
        };
    }
    setOnMessage(onMessage) {
        this.#onMessage = onMessage;
    }
    sendMessage(message) {
        log(_a.LOGGER_PREFIX_SEND, message);
        const json = JSON.stringify(message);
        window.sendBidiResponse(json);
    }
    close() {
        this.#onMessage = null;
        window.onBidiMessage = null;
    }
    #respondWithError(plainCommandData, errorCode, error, googChannel) {
        const errorResponse = _a.#getErrorResponse(plainCommandData, errorCode, error);
        if (googChannel) {
            this.sendMessage({
                ...errorResponse,
                'goog:channel': googChannel,
            });
        }
        else {
            this.sendMessage(errorResponse);
        }
    }
    static #getJsonType(value) {
        if (value === null) {
            return 'null';
        }
        if (Array.isArray(value)) {
            return 'array';
        }
        return typeof value;
    }
    static #getErrorResponse(message, errorCode, error) {
        // XXX: this is bizarre per spec. We reparse the payload and
        // extract the ID, regardless of what kind of value it was.
        let messageId;
        try {
            const command = JSON.parse(message);
            if (_a.#getJsonType(command) === 'object' &&
                'id' in command) {
                messageId = command.id;
            }
        }
        catch { }
        return {
            type: 'error',
            id: messageId,
            error: errorCode,
            message: error.message,
        };
    }
    static #parseBidiMessage(message) {
        let command;
        try {
            command = JSON.parse(message);
        }
        catch {
            throw new Error('Cannot parse data as JSON');
        }
        const type = _a.#getJsonType(command);
        if (type !== 'object') {
            throw new Error(`Expected JSON object but got ${type}`);
        }
        // Extract and validate id, method and params.
        const { id, method, params } = command;
        const idType = _a.#getJsonType(id);
        if (idType !== 'number' || !Number.isInteger(id) || id < 0) {
            // TODO: should uint64_t be the upper limit?
            // https://tools.ietf.org/html/rfc7049#section-2.1
            throw new Error(`Expected unsigned integer but got ${idType}`);
        }
        const methodType = _a.#getJsonType(method);
        if (methodType !== 'string') {
            throw new Error(`Expected string method but got ${methodType}`);
        }
        const paramsType = _a.#getJsonType(params);
        if (paramsType !== 'object') {
            throw new Error(`Expected object params but got ${paramsType}`);
        }
        let googChannel = command['goog:channel'];
        if (googChannel !== undefined) {
            const googChannelType = _a.#getJsonType(googChannel);
            if (googChannelType !== 'string') {
                throw new Error(`Expected string channel but got ${googChannelType}`);
            }
            // Empty string goog:channel is considered as no goog:channel provided.
            if (googChannel === '') {
                googChannel = undefined;
            }
        }
        return {
            id,
            method,
            params,
            'goog:channel': googChannel,
        };
    }
}
_a = WindowBidiTransport;
export class WindowCdpTransport {
    #onMessage = null;
    #cdpSend;
    constructor() {
        this.#cdpSend = window.cdp.send;
        // @ts-expect-error removing cdp
        window.cdp.send = undefined;
        window.cdp.onmessage = (message) => {
            this.#onMessage?.call(null, message);
        };
    }
    setOnMessage(onMessage) {
        this.#onMessage = onMessage;
    }
    sendMessage(message) {
        this.#cdpSend(message);
    }
    close() {
        this.#onMessage = null;
        window.cdp.onmessage = null;
    }
}
//# sourceMappingURL=Transport.js.map