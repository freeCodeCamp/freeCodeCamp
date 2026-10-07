import { CDPSessionEvent } from '../api/CDPSession.js';
import { TargetType } from '../api/Target.js';
import { WebWorker, WebWorkerEvent, } from '../api/WebWorker.js';
import { EventEmitter } from '../common/EventEmitter.js';
import { TimeoutSettings } from '../common/TimeoutSettings.js';
import { debugError } from '../common/util.js';
import { ExecutionContext } from './ExecutionContext.js';
import { IsolatedWorld } from './IsolatedWorld.js';
import { MAIN_WORLD } from './IsolatedWorlds.js';
import { createConsoleMessage } from './utils.js';
/**
 * @internal
 */
export class CdpWebWorker extends WebWorker {
    #world;
    #client;
    #id;
    #targetType;
    #emitter;
    get internalEmitter() {
        return this.#emitter;
    }
    constructor(client, url, targetId, targetType, exceptionThrown, networkManager) {
        super(url);
        this.#id = targetId;
        this.#client = client;
        this.#targetType = targetType;
        this.#world = new IsolatedWorld(this, new TimeoutSettings(), MAIN_WORLD);
        this.#emitter = new EventEmitter();
        this.#client.once('Runtime.executionContextCreated', async (event) => {
            this.#world.setContext(new ExecutionContext(client, event.context, this.#world));
        });
        this.#world.emitter.on('consoleapicalled', async (event) => {
            try {
                const values = event.args.map(arg => {
                    return this.#world.createCdpHandle(arg);
                });
                const noInternalListeners = this.#emitter.listenerCount(WebWorkerEvent.Console) === 0;
                const noWorkerListeners = this.listenerCount(WebWorkerEvent.Console) === 0;
                if (noInternalListeners && noWorkerListeners) {
                    // eslint-disable-next-line max-len -- The comment is long.
                    // eslint-disable-next-line @puppeteer/use-using -- These are not owned by this function.
                    for (const value of values) {
                        void value.dispose().catch(debugError);
                    }
                    return;
                }
                const consoleMessages = createConsoleMessage(event, values, this.#id);
                this.#emitter.emit(WebWorkerEvent.Console, consoleMessages);
                if (!noWorkerListeners) {
                    this.emit(WebWorkerEvent.Console, consoleMessages);
                }
            }
            catch (err) {
                debugError(err);
            }
        });
        this.#client.on('Runtime.exceptionThrown', exceptionThrown);
        this.#client.once(CDPSessionEvent.Disconnected, () => {
            this.#world.dispose();
        });
        // This might fail if the target is closed before we receive all execution contexts.
        networkManager?.addClient(this.#client).catch(debugError);
        this.#client.send('Runtime.enable').catch(debugError);
    }
    mainRealm() {
        return this.#world;
    }
    get client() {
        return this.#client;
    }
    async close() {
        switch (this.#targetType) {
            case TargetType.SERVICE_WORKER: {
                // For service workers we need to close the target and detach to allow
                // the worker to stop.
                await this.client.connection()?.send('Target.closeTarget', {
                    targetId: this.#id,
                });
                await this.client.connection()?.send('Target.detachFromTarget', {
                    sessionId: this.client.id(),
                });
                break;
            }
            case TargetType.SHARED_WORKER: {
                await this.client.connection()?.send('Target.closeTarget', {
                    targetId: this.#id,
                });
                break;
            }
            default:
                await this.evaluate(() => {
                    self.close();
                });
        }
    }
}
//# sourceMappingURL=WebWorker.js.map