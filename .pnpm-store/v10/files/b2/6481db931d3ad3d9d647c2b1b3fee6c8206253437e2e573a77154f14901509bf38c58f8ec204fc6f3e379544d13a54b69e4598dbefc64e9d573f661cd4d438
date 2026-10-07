"use strict";
/**
 *
 * audit/utils
 *
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ressert = exports.AuditError = exports.audit = void 0;
__exportStar(require("../utils"), exports);
/**
 * Wrap and prepare an audit for testing.
 *
 * @private
 */
function audit(id, name, fn) {
    return {
        id,
        name,
        fn: async () => {
            try {
                await fn();
                return {
                    id,
                    name,
                    status: 'ok',
                };
            }
            catch (err) {
                if (!(err instanceof AuditError)) {
                    // anything thrown that is not an assertion error is considered fatal
                    throw err;
                }
                return {
                    id,
                    name,
                    status: name.startsWith('MUST')
                        ? // failing MUSTs are considered errors
                            'error'
                        : name.startsWith('SHOULD')
                            ? // recommendations are warnings
                                'warn'
                            : // everything else is truly optional
                                'notice',
                    reason: err.reason,
                    response: err.response,
                };
            }
        },
    };
}
exports.audit = audit;
/**
 * Error thrown when an assertion test fails.
 *
 * @private
 */
class AuditError {
    constructor(response, reason) {
        this.response = response;
        this.reason = reason;
    }
}
exports.AuditError = AuditError;
/**
 * Will throw an AuditError if the assertion on Response fails.
 *
 * All fatal problems will throw an instance of an Error.
 *
 * The name "ressert" is a wordplay combining "response" and "assert".
 *
 * @private
 */
function ressert(res) {
    return {
        status: {
            toBe(code) {
                if (res.status !== code) {
                    throw new AuditError(res, `Response status code is not ${code}`);
                }
            },
            toBeBetween: (min, max) => {
                if (!(min <= res.status && res.status <= max)) {
                    throw new AuditError(res, `Response status is not between ${min} and ${max}`);
                }
            },
        },
        header(key) {
            return {
                toContain(part) {
                    var _a;
                    if (!((_a = res.headers.get(key)) === null || _a === void 0 ? void 0 : _a.includes(part))) {
                        throw new AuditError(res, `Response header ${key} does not contain ${part}`);
                    }
                },
                notToContain(part) {
                    var _a;
                    if ((_a = res.headers.get(key)) === null || _a === void 0 ? void 0 : _a.includes(part)) {
                        throw new AuditError(res, `Response header ${key} contains ${part}`);
                    }
                },
            };
        },
        bodyAsExecutionResult: {
            data: {
                async toBe(val) {
                    const clonedRes = res.clone(); // allow the body to be re-read
                    const body = await assertBodyAsExecutionResult(res);
                    if (body.data !== val) {
                        throw new AuditError(clonedRes, `Response body execution result data is not "${val}"`);
                    }
                },
            },
            async toHaveProperty(key) {
                const clonedRes = res.clone(); // allow the body to be re-read
                const body = await assertBodyAsExecutionResult(res);
                if (!(key in body)) {
                    throw new AuditError(clonedRes, `Response body execution result does not have a property "${key}"`);
                }
            },
            async notToHaveProperty(key) {
                const clonedRes = res.clone(); // allow the body to be re-read
                const body = await assertBodyAsExecutionResult(res);
                if (key in body) {
                    throw new AuditError(clonedRes, `Response body execution result has a property "${key}"`);
                }
            },
        },
    };
}
exports.ressert = ressert;
/** @private */
async function assertBodyAsExecutionResult(res) {
    let decoded;
    try {
        const decoder = new TextDecoder('utf-8');
        const buff = await res.arrayBuffer();
        decoded = decoder.decode(buff);
    }
    catch (err) {
        throw new AuditError(res, 'Response body is not UTF-8 encoded');
    }
    let body;
    try {
        body = JSON.parse(decoded);
    }
    catch (err) {
        throw new AuditError(res, 'Response body is not valid JSON');
    }
    return body;
}
