/**
 * @license
 * Copyright 2019 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
import { firstValueFrom, map, raceWith } from '../../third_party/rxjs/rxjs.js';
import { Realm } from '../api/Realm.js';
import { EventEmitter } from '../common/EventEmitter.js';
import { fromEmitterEvent, timeout, withSourcePuppeteerURLIfNone, } from '../common/util.js';
import { disposeSymbol } from '../util/disposable.js';
import { CdpElementHandle } from './ElementHandle.js';
import { MAIN_WORLD } from './IsolatedWorlds.js';
import { CdpJSHandle } from './JSHandle.js';
import { CdpWebWorker } from './WebWorker.js';
/**
 * @internal
 */
export class IsolatedWorld extends Realm {
    #context;
    #emitter = new EventEmitter();
    #worldId;
    #origin;
    #frameOrWorker;
    constructor(frameOrWorker, timeoutSettings, worldId) {
        super(timeoutSettings);
        this.#frameOrWorker = frameOrWorker;
        this.#worldId = worldId;
    }
    get environment() {
        return this.#frameOrWorker;
    }
    get client() {
        return this.#frameOrWorker.client;
    }
    get emitter() {
        return this.#emitter;
    }
    setContext(context) {
        this.#context?.[disposeSymbol]();
        context.once('disposed', this.#onContextDisposed.bind(this));
        context.on('consoleapicalled', this.#onContextConsoleApiCalled.bind(this));
        context.on('bindingcalled', this.#onContextBindingCalled.bind(this));
        this.#context = context;
        this.#emitter.emit('context', context);
        void this.taskManager.rerunAll();
    }
    #onContextDisposed() {
        this.#context = undefined;
        if ('clearDocumentHandle' in this.#frameOrWorker) {
            this.#frameOrWorker.clearDocumentHandle();
        }
    }
    #onContextConsoleApiCalled(event) {
        this.#emitter.emit('consoleapicalled', event);
    }
    #onContextBindingCalled(event) {
        this.#emitter.emit('bindingcalled', event);
    }
    hasContext() {
        return !!this.#context;
    }
    get context() {
        return this.#context;
    }
    #executionContext() {
        if (this.disposed) {
            throw new Error(`Execution context is not available in detached frame or worker "${this.environment.url()}" (are you trying to evaluate?)`);
        }
        return this.#context;
    }
    /**
     * Waits for the next context to be set on the isolated world.
     */
    async #waitForExecutionContext() {
        const error = new Error('Execution context was destroyed');
        const result = await firstValueFrom(fromEmitterEvent(this.#emitter, 'context').pipe(raceWith(fromEmitterEvent(this.#emitter, 'disposed').pipe(map(() => {
            // The message has to match the CDP message expected by the WaitTask class.
            throw error;
        })), timeout(this.timeoutSettings.timeout()))));
        return result;
    }
    async evaluateHandle(pageFunction, ...args) {
        pageFunction = withSourcePuppeteerURLIfNone(this.evaluateHandle.name, pageFunction);
        // This code needs to schedule evaluateHandle call synchronously (at
        // least when the context is there) so we cannot unconditionally
        // await.
        let context = this.#executionContext();
        if (!context) {
            context = await this.#waitForExecutionContext();
        }
        return await context.evaluateHandle(pageFunction, ...args);
    }
    async evaluate(pageFunction, ...args) {
        pageFunction = withSourcePuppeteerURLIfNone(this.evaluate.name, pageFunction);
        // This code needs to schedule evaluate call synchronously (at
        // least when the context is there) so we cannot unconditionally
        // await.
        let context = this.#executionContext();
        if (!context) {
            context = await this.#waitForExecutionContext();
        }
        return await context.evaluate(pageFunction, ...args);
    }
    async adoptBackendNode(backendNodeId) {
        // This code needs to schedule resolveNode call synchronously (at
        // least when the context is there) so we cannot unconditionally
        // await.
        let context = this.#executionContext();
        if (!context) {
            context = await this.#waitForExecutionContext();
        }
        const { object } = await this.client.send('DOM.resolveNode', {
            backendNodeId: backendNodeId,
            executionContextId: context.id,
        });
        return this.createCdpHandle(object);
    }
    async adoptHandle(handle) {
        if (handle.realm === this) {
            // If the context has already adopted this handle, clone it so downstream
            // disposal doesn't become an issue.
            return (await handle.evaluateHandle(value => {
                return value;
            }));
        }
        const nodeInfo = await this.client.send('DOM.describeNode', {
            objectId: handle.id,
        });
        return (await this.adoptBackendNode(nodeInfo.node.backendNodeId));
    }
    async transferHandle(handle) {
        if (handle.realm === this) {
            return handle;
        }
        // Implies it's a primitive value, probably.
        if (handle.remoteObject().objectId === undefined) {
            return handle;
        }
        const info = await this.client.send('DOM.describeNode', {
            objectId: handle.remoteObject().objectId,
        });
        const newHandle = (await this.adoptBackendNode(info.node.backendNodeId));
        await handle.dispose();
        return newHandle;
    }
    /**
     * @internal
     */
    createCdpHandle(remoteObject) {
        if (remoteObject.subtype === 'node') {
            return new CdpElementHandle(this, remoteObject);
        }
        return new CdpJSHandle(this, remoteObject);
    }
    [disposeSymbol]() {
        this.#context?.[disposeSymbol]();
        this.#emitter.emit('disposed', undefined);
        this.#emitter.removeAllListeners();
        super[disposeSymbol]();
    }
    get origin() {
        return this.#origin;
    }
    set origin(origin) {
        this.#origin = origin;
    }
    setWorldId(worldId) {
        this.#worldId = worldId;
    }
    async extension() {
        if (this.#frameOrWorker instanceof CdpWebWorker) {
            throw new Error('Unable to get extension from Realm');
        }
        if (this.#worldId === MAIN_WORLD) {
            return null;
        }
        if (typeof this.#worldId === 'string') {
            const extensions = await this.#frameOrWorker._frameManager
                .page()
                .browser()
                .extensions();
            return extensions.get(this.#worldId) ?? null;
        }
        return null;
    }
}
//# sourceMappingURL=IsolatedWorld.js.map