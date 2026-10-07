import { argsert } from './argsert.js';
import { isPromise } from './utils/is-promise.js';
export class GlobalMiddleware {
    constructor(yargs) {
        this.globalMiddleware = [];
        this.frozens = [];
        this.yargs = yargs;
    }
    addMiddleware(callback, applyBeforeValidation, global = true, mutates = false) {
        argsert('<array|function> [boolean] [boolean] [boolean]', [callback, applyBeforeValidation, global], arguments.length);
        if (Array.isArray(callback)) {
            for (let i = 0; i < callback.length; i++) {
                if (typeof callback[i] !== 'function') {
                    throw Error('middleware must be a function');
                }
                const m = callback[i];
                m.applyBeforeValidation = applyBeforeValidation;
                m.global = global;
            }
            Array.prototype.push.apply(this.globalMiddleware, callback);
        }
        else if (typeof callback === 'function') {
            const m = callback;
            m.applyBeforeValidation = applyBeforeValidation;
            m.global = global;
            m.mutates = mutates;
            this.globalMiddleware.push(callback);
        }
        return this.yargs;
    }
    addCoerceMiddleware(callback, option) {
        const aliases = this.yargs.getAliases();
        this.globalMiddleware = this.globalMiddleware.filter(m => {
            const toCheck = [...(aliases[option] || []), option];
            if (!m.option)
                return true;
            else
                return !toCheck.includes(m.option);
        });
        callback.option = option;
        return this.addMiddleware(callback, true, true, true);
    }
    getMiddleware() {
        return this.globalMiddleware;
    }
    freeze() {
        this.frozens.push([...this.globalMiddleware]);
    }
    unfreeze() {
        const frozen = this.frozens.pop();
        if (frozen !== undefined)
            this.globalMiddleware = frozen;
    }
    reset() {
        this.globalMiddleware = this.globalMiddleware.filter(m => m.global);
    }
}
export function commandMiddlewareFactory(commandMiddleware) {
    if (!commandMiddleware)
        return [];
    return commandMiddleware.map(middleware => {
        middleware.applyBeforeValidation = false;
        return middleware;
    });
}
export function applyMiddleware(argv, yargs, middlewares, beforeValidation) {
    return middlewares.reduce((acc, middleware) => {
        if (middleware.applyBeforeValidation !== beforeValidation) {
            return acc;
        }
        if (middleware.mutates) {
            if (middleware.applied)
                return acc;
            middleware.applied = true;
        }
        if (isPromise(acc)) {
            return acc
                .then(initialObj => Promise.all([initialObj, middleware(initialObj, yargs)]))
                .then(([initialObj, middlewareObj]) => Object.assign(initialObj, middlewareObj));
        }
        else {
            const result = middleware(acc, yargs);
            return isPromise(result)
                ? result.then(middlewareObj => Object.assign(acc, middlewareObj))
                : Object.assign(acc, result);
        }
    }, argv);
}
