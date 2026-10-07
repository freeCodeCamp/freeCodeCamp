"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyMiddleware = exports.commandMiddlewareFactory = exports.globalMiddlewareFactory = void 0;
const argsert_1 = require("./argsert");
const is_promise_1 = require("./is-promise");
function globalMiddlewareFactory(globalMiddleware, context) {
    return function (callback, applyBeforeValidation = false) {
        argsert_1.argsert('<array|function> [boolean]', [callback, applyBeforeValidation], arguments.length);
        if (Array.isArray(callback)) {
            for (let i = 0; i < callback.length; i++) {
                if (typeof callback[i] !== 'function') {
                    throw Error('middleware must be a function');
                }
                callback[i].applyBeforeValidation = applyBeforeValidation;
            }
            Array.prototype.push.apply(globalMiddleware, callback);
        }
        else if (typeof callback === 'function') {
            callback.applyBeforeValidation = applyBeforeValidation;
            globalMiddleware.push(callback);
        }
        return context;
    };
}
exports.globalMiddlewareFactory = globalMiddlewareFactory;
function commandMiddlewareFactory(commandMiddleware) {
    if (!commandMiddleware)
        return [];
    return commandMiddleware.map(middleware => {
        middleware.applyBeforeValidation = false;
        return middleware;
    });
}
exports.commandMiddlewareFactory = commandMiddlewareFactory;
function applyMiddleware(argv, yargs, middlewares, beforeValidation) {
    const beforeValidationError = new Error('middleware cannot return a promise when applyBeforeValidation is true');
    return middlewares
        .reduce((acc, middleware) => {
        if (middleware.applyBeforeValidation !== beforeValidation) {
            return acc;
        }
        if (is_promise_1.isPromise(acc)) {
            return acc
                .then(initialObj => Promise.all([initialObj, middleware(initialObj, yargs)]))
                .then(([initialObj, middlewareObj]) => Object.assign(initialObj, middlewareObj));
        }
        else {
            const result = middleware(acc, yargs);
            if (beforeValidation && is_promise_1.isPromise(result))
                throw beforeValidationError;
            return is_promise_1.isPromise(result)
                ? result.then(middlewareObj => Object.assign(acc, middlewareObj))
                : Object.assign(acc, result);
        }
    }, argv);
}
exports.applyMiddleware = applyMiddleware;
