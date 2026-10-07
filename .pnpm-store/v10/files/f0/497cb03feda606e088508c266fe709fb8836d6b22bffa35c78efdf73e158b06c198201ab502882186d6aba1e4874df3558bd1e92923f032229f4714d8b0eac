var _a;
import { LogType } from '../utils/log.js';
import { CloseError, MapperCdpClient } from './CdpClient.js';
/**
 * Represents a high-level CDP connection to the browser backend.
 *
 * Manages all CdpClients (each backed by a Session ID) instance for each active
 * CDP session.
 */
export class MapperCdpConnection {
    static LOGGER_PREFIX_RECV = `${LogType.cdp}:RECV ◂`;
    static LOGGER_PREFIX_SEND = `${LogType.cdp}:SEND ▸`;
    #mainBrowserCdpClient;
    #transport;
    /** Map from session ID to CdpClient.
     * `undefined` points to the main browser session. */
    #sessionCdpClients = new Map();
    #commandCallbacks = new Map();
    #logger;
    #nextId = 0;
    constructor(transport, logger) {
        this.#transport = transport;
        this.#logger = logger;
        this.#transport.setOnMessage(this.#onMessage);
        // Create default Browser CDP Session.
        this.#mainBrowserCdpClient = this.#createCdpClient(undefined);
    }
    /** Closes the connection to the browser. */
    close() {
        this.#transport.close();
        for (const [, { reject, error }] of this.#commandCallbacks) {
            reject(error);
        }
        this.#commandCallbacks.clear();
        this.#sessionCdpClients.clear();
    }
    async createBrowserSession() {
        const { sessionId } = await this.#mainBrowserCdpClient.sendCommand('Target.attachToBrowserTarget');
        return this.#createCdpClient(sessionId);
    }
    /**
     * Gets a CdpClient instance attached to the given session ID,
     * or null if the session is not attached.
     */
    getCdpClient(sessionId) {
        const cdpClient = this.#sessionCdpClients.get(sessionId);
        if (!cdpClient) {
            throw new Error(`Unknown CDP session ID: ${sessionId}`);
        }
        return cdpClient;
    }
    sendCommand(method, params, sessionId) {
        return new Promise((resolve, reject) => {
            const id = this.#nextId++;
            this.#commandCallbacks.set(id, {
                sessionId,
                resolve,
                reject,
                error: new CloseError(`${method} ${JSON.stringify(params)} ${sessionId ?? ''} call rejected because the connection has been closed.`),
            });
            const cdpMessage = { id, method, params };
            if (sessionId) {
                cdpMessage.sessionId = sessionId;
            }
            void this.#transport
                .sendMessage(JSON.stringify(cdpMessage))
                ?.catch((error) => {
                this.#logger?.(LogType.debugError, error);
                this.#transport.close();
            });
            this.#logger?.(_a.LOGGER_PREFIX_SEND, cdpMessage);
        });
    }
    #onMessage = (json) => {
        const message = JSON.parse(json);
        this.#logger?.(_a.LOGGER_PREFIX_RECV, message);
        // Update client map if a session is attached
        // Listen for these events on every session.
        if (message.method === 'Target.attachedToTarget') {
            const { sessionId } = message.params;
            this.#createCdpClient(sessionId);
        }
        if (message.id !== undefined) {
            // Handle command response.
            const callbacks = this.#commandCallbacks.get(message.id);
            this.#commandCallbacks.delete(message.id);
            if (callbacks) {
                if (message.result) {
                    callbacks.resolve(message.result);
                }
                else if (message.error) {
                    callbacks.reject(message.error);
                }
            }
        }
        else if (message.method) {
            const client = this.#sessionCdpClients.get(message.sessionId ?? undefined);
            client?.emit(message.method, message.params || {});
            // Update client map if a session is detached
            // But emit on that session
            if (message.method === 'Target.detachedFromTarget') {
                const { sessionId } = message.params;
                const client = this.#sessionCdpClients.get(sessionId);
                if (client) {
                    this.#sessionCdpClients.delete(sessionId);
                    client.removeAllListeners();
                }
                // Reject all the pending commands for the detached session.
                for (const callback of this.#commandCallbacks.values()) {
                    if (callback.sessionId === sessionId) {
                        callback.reject(callback.error);
                    }
                }
            }
        }
    };
    /**
     * Creates a new CdpClient instance for the given session ID.
     * @param sessionId either a string, or undefined for the main browser session.
     * The main browser session is used only to create new browser sessions.
     * @private
     */
    #createCdpClient(sessionId) {
        const cdpClient = new MapperCdpClient(this, sessionId);
        this.#sessionCdpClients.set(sessionId, cdpClient);
        return cdpClient;
    }
}
_a = MapperCdpConnection;
//# sourceMappingURL=CdpConnection.js.map