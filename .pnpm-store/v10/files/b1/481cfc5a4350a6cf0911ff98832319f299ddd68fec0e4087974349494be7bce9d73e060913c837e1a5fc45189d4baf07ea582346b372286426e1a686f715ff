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
import { EventEmitter } from '../../common/EventEmitter.js';
import { inertIfDisposed, throwIfDisposed } from '../../util/decorators.js';
import { DisposableStack, disposeSymbol } from '../../util/disposable.js';
/**
 * @internal
 */
let UserPrompt = (() => {
    let _classSuper = EventEmitter;
    let _instanceExtraInitializers = [];
    let _dispose_decorators;
    let _handle_decorators;
    return class UserPrompt extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(this, null, _dispose_decorators, { kind: "method", name: "dispose", static: false, private: false, access: { has: obj => "dispose" in obj, get: obj => obj.dispose }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _handle_decorators, { kind: "method", name: "handle", static: false, private: false, access: { has: obj => "handle" in obj, get: obj => obj.handle }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static from(browsingContext, info) {
            const userPrompt = new UserPrompt(browsingContext, info);
            userPrompt.#initialize();
            return userPrompt;
        }
        #reason = __runInitializers(this, _instanceExtraInitializers);
        #result;
        #disposables = new DisposableStack();
        browsingContext;
        info;
        constructor(context, info) {
            super();
            this.browsingContext = context;
            this.info = info;
        }
        #initialize() {
            const browserContextEmitter = this.#disposables.use(new EventEmitter(this.browsingContext));
            browserContextEmitter.once('closed', reason => {
                this.dispose(`User prompt already closed: ${reason}`);
            });
            const sessionEmitter = this.#disposables.use(new EventEmitter(this.#session));
            sessionEmitter.on('browsingContext.userPromptClosed', parameters => {
                if (parameters.context !== this.browsingContext.id) {
                    return;
                }
                this.#result = parameters;
                this.emit('handled', parameters);
                this.dispose('User prompt already handled.');
            });
        }
        get #session() {
            return this.browsingContext.userContext.browser.session;
        }
        get closed() {
            return this.#reason !== undefined;
        }
        get disposed() {
            return this.closed;
        }
        get handled() {
            if (this.info.handler === "accept" /* Bidi.Session.UserPromptHandlerType.Accept */ ||
                this.info.handler === "dismiss" /* Bidi.Session.UserPromptHandlerType.Dismiss */) {
                return true;
            }
            return this.#result !== undefined;
        }
        get result() {
            return this.#result;
        }
        dispose(reason) {
            this.#reason = reason;
            this[disposeSymbol]();
        }
        async handle(options = {}) {
            await this.#session.send('browsingContext.handleUserPrompt', {
                ...options,
                context: this.info.context,
            });
            // SAFETY: `handled` is triggered before the above promise resolved.
            return this.#result;
        }
        [(_dispose_decorators = [inertIfDisposed], _handle_decorators = [throwIfDisposed(prompt => {
                // SAFETY: Disposal implies this exists.
                return prompt.#reason;
            })], disposeSymbol)]() {
            this.#reason ??=
                'User prompt already closed, probably because the associated browsing context was destroyed.';
            this.emit('closed', this.#reason);
            this.#disposables.dispose();
            super[disposeSymbol]();
        }
    };
})();
export { UserPrompt };
//# sourceMappingURL=UserPrompt.js.map