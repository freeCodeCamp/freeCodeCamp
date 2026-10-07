/**
 * @license
 * Copyright 2024 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var _a;
import { EventEmitter } from '../../common/EventEmitter.js';
import { inertIfDisposed, throwIfDisposed } from '../../util/decorators.js';
import { DisposableStack, disposeSymbol } from '../../util/disposable.js';
/**
 * @internal
 */
let Realm = (() => {
    let _classSuper = EventEmitter;
    let _instanceExtraInitializers = [];
    let _dispose_decorators;
    let _disown_decorators;
    let _callFunction_decorators;
    let _evaluate_decorators;
    let _resolveExecutionContextId_decorators;
    return class Realm extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(this, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: obj => "dispose" in obj, get: obj => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _disown_decorators, { kind: "method", name: "disown", static: false, private: false, access: { has: obj => "disown" in obj, get: obj => obj.disown }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _callFunction_decorators, { kind: "method", name: "callFunction", static: false, private: false, access: { has: obj => "callFunction" in obj, get: obj => obj.callFunction }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _evaluate_decorators, { kind: "method", name: "evaluate", static: false, private: false, access: { has: obj => "evaluate" in obj, get: obj => obj.evaluate }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _resolveExecutionContextId_decorators, { kind: "method", name: "resolveExecutionContextId", static: false, private: false, access: { has: obj => "resolveExecutionContextId" in obj, get: obj => obj.resolveExecutionContextId }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        #reason = __runInitializers(this, _instanceExtraInitializers);
        disposables = new DisposableStack();
        id;
        origin;
        executionContextId;
        constructor(id, origin) {
            super();
            this.id = id;
            this.origin = origin;
        }
        get disposed() {
            return this.#reason !== undefined;
        }
        get target() {
            return { realm: this.id };
        }
        dispose(reason) {
            this.#reason = reason;
            this[disposeSymbol]();
        }
        async disown(handles) {
            await this.session.send('script.disown', {
                target: this.target,
                handles,
            });
        }
        async callFunction(functionDeclaration, awaitPromise, options = {}) {
            const { result } = await this.session.send('script.callFunction', {
                functionDeclaration,
                awaitPromise,
                target: this.target,
                ...options,
            });
            return result;
        }
        async evaluate(expression, awaitPromise, options = {}) {
            const { result } = await this.session.send('script.evaluate', {
                expression,
                awaitPromise,
                target: this.target,
                ...options,
            });
            return result;
        }
        async resolveExecutionContextId() {
            if (!this.executionContextId) {
                const { result } = await this.session.connection.send('goog:cdp.resolveRealm', { realm: this.id });
                this.executionContextId = result.executionContextId;
            }
            return this.executionContextId;
        }
        [(_dispose_decorators = [inertIfDisposed], _disown_decorators = [throwIfDisposed(realm => {
                // SAFETY: Disposal implies this exists.
                return realm.#reason;
            })], _callFunction_decorators = [throwIfDisposed(realm => {
                // SAFETY: Disposal implies this exists.
                return realm.#reason;
            })], _evaluate_decorators = [throwIfDisposed(realm => {
                // SAFETY: Disposal implies this exists.
                return realm.#reason;
            })], _resolveExecutionContextId_decorators = [throwIfDisposed(realm => {
                // SAFETY: Disposal implies this exists.
                return realm.#reason;
            })], disposeSymbol)]() {
            this.#reason ??=
                'Realm already destroyed, probably because all associated browsing contexts closed.';
            this.emit('destroyed', this.#reason);
            this.disposables.dispose();
            super[disposeSymbol]();
        }
    };
})();
export { Realm };
/**
 * @internal
 */
export class WindowRealm extends Realm {
    static from(context, sandbox) {
        const realm = new WindowRealm(context, sandbox);
        realm.#initialize();
        return realm;
    }
    browsingContext;
    sandbox;
    #workers = new Map();
    constructor(context, sandbox) {
        super('', '');
        this.browsingContext = context;
        this.sandbox = sandbox;
    }
    #initialize() {
        const browsingContextEmitter = this.disposables.use(new EventEmitter(this.browsingContext));
        browsingContextEmitter.on('closed', reason => {
            this.dispose(reason);
        });
        const sessionEmitter = this.disposables.use(new EventEmitter(this.session));
        sessionEmitter.on('script.realmCreated', info => {
            if (info.type !== 'window' ||
                info.context !== this.browsingContext.id ||
                info.sandbox !== this.sandbox) {
                return;
            }
            this.id = info.realm;
            this.origin = info.origin;
            this.executionContextId = undefined;
            this.emit('updated', this);
        });
        sessionEmitter.on('script.realmCreated', info => {
            if (info.type !== 'dedicated-worker') {
                return;
            }
            if (!info.owners.includes(this.id)) {
                return;
            }
            const realm = DedicatedWorkerRealm.from(this, info.realm, info.origin);
            this.#workers.set(realm.id, realm);
            const realmEmitter = this.disposables.use(new EventEmitter(realm));
            realmEmitter.once('destroyed', () => {
                realmEmitter.removeAllListeners();
                this.#workers.delete(realm.id);
            });
            this.emit('worker', realm);
        });
        sessionEmitter.on('log.entryAdded', entry => {
            if (entry.source.realm !== this.id) {
                return;
            }
            this.emit('log', entry);
        });
    }
    get session() {
        return this.browsingContext.userContext.browser.session;
    }
    get target() {
        return { context: this.browsingContext.id, sandbox: this.sandbox };
    }
}
/**
 * @internal
 */
export class DedicatedWorkerRealm extends Realm {
    static from(owner, id, origin) {
        const realm = new _a(owner, id, origin);
        realm.#initialize();
        return realm;
    }
    #workers = new Map();
    owners;
    constructor(owner, id, origin) {
        super(id, origin);
        this.owners = new Set([owner]);
    }
    #initialize() {
        const sessionEmitter = this.disposables.use(new EventEmitter(this.session));
        sessionEmitter.on('script.realmDestroyed', info => {
            if (info.realm !== this.id) {
                return;
            }
            this.dispose('Realm already destroyed.');
        });
        sessionEmitter.on('script.realmCreated', info => {
            if (info.type !== 'dedicated-worker') {
                return;
            }
            if (!info.owners.includes(this.id)) {
                return;
            }
            const realm = _a.from(this, info.realm, info.origin);
            this.#workers.set(realm.id, realm);
            const realmEmitter = this.disposables.use(new EventEmitter(realm));
            realmEmitter.once('destroyed', () => {
                this.#workers.delete(realm.id);
            });
            this.emit('worker', realm);
        });
        sessionEmitter.on('log.entryAdded', entry => {
            if (entry.source.realm !== this.id) {
                return;
            }
            this.emit('log', entry);
        });
    }
    get session() {
        // SAFETY: At least one owner will exist.
        return this.owners.values().next().value.session;
    }
}
_a = DedicatedWorkerRealm;
/**
 * @internal
 */
export class SharedWorkerRealm extends Realm {
    static from(browser, id, origin) {
        const realm = new SharedWorkerRealm(browser, id, origin);
        realm.#initialize();
        return realm;
    }
    #workers = new Map();
    browser;
    constructor(browser, id, origin) {
        super(id, origin);
        this.browser = browser;
    }
    #initialize() {
        const sessionEmitter = this.disposables.use(new EventEmitter(this.session));
        sessionEmitter.on('script.realmDestroyed', info => {
            if (info.realm !== this.id) {
                return;
            }
            this.dispose('Realm already destroyed.');
        });
        sessionEmitter.on('script.realmCreated', info => {
            if (info.type !== 'dedicated-worker') {
                return;
            }
            if (!info.owners.includes(this.id)) {
                return;
            }
            const realm = DedicatedWorkerRealm.from(this, info.realm, info.origin);
            this.#workers.set(realm.id, realm);
            const realmEmitter = this.disposables.use(new EventEmitter(realm));
            realmEmitter.once('destroyed', () => {
                this.#workers.delete(realm.id);
            });
            this.emit('worker', realm);
        });
        sessionEmitter.on('log.entryAdded', entry => {
            if (entry.source.realm !== this.id) {
                return;
            }
            this.emit('log', entry);
        });
    }
    get session() {
        return this.browser.session;
    }
}
//# sourceMappingURL=Realm.js.map