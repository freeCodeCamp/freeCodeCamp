/*
 * Copyright The OpenTelemetry Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { NoopContextManager } from '../context/NoopContextManager';
import { getGlobal, registerGlobal, unregisterGlobal, } from '../internal/global-utils';
import { DiagAPI } from './diag';
const API_NAME = 'context';
const NOOP_CONTEXT_MANAGER = new NoopContextManager();
/**
 * Singleton object which represents the entry point to the OpenTelemetry Context API
 *
 * @since 1.0.0
 */
export class ContextAPI {
    /** Empty private constructor prevents end users from constructing a new instance of the API */
    constructor() { }
    /** Get the singleton instance of the Context API */
    static getInstance() {
        if (!this._instance) {
            this._instance = new ContextAPI();
        }
        return this._instance;
    }
    /**
     * Set the current context manager.
     *
     * @returns true if the context manager was successfully registered, else false
     */
    setGlobalContextManager(contextManager) {
        return registerGlobal(API_NAME, contextManager, DiagAPI.instance());
    }
    /**
     * Get the currently active context
     */
    active() {
        return this._getContextManager().active();
    }
    /**
     * Execute a function with an active context
     *
     * @param context context to be active during function execution
     * @param fn function to execute in a context
     * @param thisArg optional receiver to be used for calling fn
     * @param args optional arguments forwarded to fn
     */
    with(context, fn, thisArg, ...args) {
        return this._getContextManager().with(context, fn, thisArg, ...args);
    }
    /**
     * Bind a context to a target function or event emitter
     *
     * @param context context to bind to the event emitter or function. Defaults to the currently active context
     * @param target function or event emitter to bind
     */
    bind(context, target) {
        return this._getContextManager().bind(context, target);
    }
    _getContextManager() {
        return getGlobal(API_NAME) || NOOP_CONTEXT_MANAGER;
    }
    /** Disable and remove the global context manager */
    disable() {
        this._getContextManager().disable();
        unregisterGlobal(API_NAME, DiagAPI.instance());
    }
}
//# sourceMappingURL=context.js.map