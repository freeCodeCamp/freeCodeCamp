var _a;
import { ChromiumBidi } from '../../../protocol/protocol.js';
import { LogType } from '../../../utils/log.js';
import { getRemoteValuesText } from './logHelper.js';
/** Converts CDP StackTrace object to BiDi StackTrace object. */
function getBidiStackTrace(cdpStackTrace) {
    const stackFrames = cdpStackTrace?.callFrames.map((callFrame) => {
        return {
            columnNumber: callFrame.columnNumber,
            functionName: callFrame.functionName,
            lineNumber: callFrame.lineNumber,
            url: callFrame.url,
        };
    });
    return stackFrames ? { callFrames: stackFrames } : undefined;
}
function getLogLevel(consoleApiType) {
    if (["error" /* Log.Level.Error */, 'assert'].includes(consoleApiType)) {
        return "error" /* Log.Level.Error */;
    }
    if (["debug" /* Log.Level.Debug */, 'trace'].includes(consoleApiType)) {
        return "debug" /* Log.Level.Debug */;
    }
    if (["warn" /* Log.Level.Warn */, 'warning'].includes(consoleApiType)) {
        return "warn" /* Log.Level.Warn */;
    }
    return "info" /* Log.Level.Info */;
}
function getLogMethod(consoleApiType) {
    switch (consoleApiType) {
        case 'warning':
            return 'warn';
        case 'startGroup':
            return 'group';
        case 'startGroupCollapsed':
            return 'groupCollapsed';
        case 'endGroup':
            return 'groupEnd';
    }
    return consoleApiType;
}
export class LogManager {
    #eventManager;
    #realmStorage;
    #cdpTarget;
    #logger;
    constructor(cdpTarget, realmStorage, eventManager, logger) {
        this.#cdpTarget = cdpTarget;
        this.#realmStorage = realmStorage;
        this.#eventManager = eventManager;
        this.#logger = logger;
    }
    static create(cdpTarget, realmStorage, eventManager, logger) {
        const logManager = new _a(cdpTarget, realmStorage, eventManager, logger);
        logManager.#initializeEntryAddedEventListener();
        return logManager;
    }
    /**
     * Heuristic serialization of CDP remote object. If possible, return the BiDi value
     * without deep serialization.
     */
    async #heuristicSerializeArg(arg, realm) {
        switch (arg.type) {
            // TODO: Implement regexp, array, object, map and set heuristics base on
            //  preview.
            case 'undefined':
                return { type: 'undefined' };
            case 'boolean':
                return { type: 'boolean', value: arg.value };
            case 'string':
                return { type: 'string', value: arg.value };
            case 'number':
                // The value can be either a number or a string like `Infinity` or `-0`.
                return { type: 'number', value: arg.unserializableValue ?? arg.value };
            case 'bigint':
                if (arg.unserializableValue !== undefined &&
                    arg.unserializableValue[arg.unserializableValue.length - 1] === 'n') {
                    return {
                        type: arg.type,
                        value: arg.unserializableValue.slice(0, -1),
                    };
                }
                // Unexpected bigint value, fall back to CDP deep serialization.
                break;
            case 'object':
                if (arg.subtype === 'null') {
                    return { type: 'null' };
                }
                // Fall back to CDP deep serialization.
                break;
            default:
                // Fall back to CDP deep serialization.
                break;
        }
        // Fall back to CDP deep serialization.
        return await realm.serializeCdpObject(arg, "none" /* Script.ResultOwnership.None */);
    }
    #initializeEntryAddedEventListener() {
        this.#cdpTarget.cdpClient.on('Runtime.consoleAPICalled', (params) => {
            // Try to find realm by `cdpSessionId` and `executionContextId`,
            // if provided.
            const realm = this.#realmStorage.findRealm({
                cdpSessionId: this.#cdpTarget.cdpSessionId,
                executionContextId: params.executionContextId,
            });
            if (realm === undefined) {
                // Ignore exceptions not attached to any realm.
                this.#logger?.(LogType.cdp, params);
                return;
            }
            const argsPromise = Promise.all(params.args.map((arg) => this.#heuristicSerializeArg(arg, realm)));
            for (const browsingContext of realm.associatedBrowsingContexts) {
                this.#eventManager.registerPromiseEvent(argsPromise.then((args) => ({
                    kind: 'success',
                    value: {
                        type: 'event',
                        method: ChromiumBidi.Log.EventNames.LogEntryAdded,
                        params: {
                            level: getLogLevel(params.type),
                            source: realm.source,
                            text: getRemoteValuesText(args, true),
                            timestamp: Math.round(params.timestamp),
                            stackTrace: getBidiStackTrace(params.stackTrace),
                            type: 'console',
                            method: getLogMethod(params.type),
                            args,
                        },
                    },
                }), (error) => ({
                    kind: 'error',
                    error,
                })), browsingContext.id, ChromiumBidi.Log.EventNames.LogEntryAdded);
            }
        });
        this.#cdpTarget.cdpClient.on('Runtime.exceptionThrown', (params) => {
            // Try to find realm by `cdpSessionId` and `executionContextId`,
            // if provided.
            const realm = this.#realmStorage.findRealm({
                cdpSessionId: this.#cdpTarget.cdpSessionId,
                executionContextId: params.exceptionDetails.executionContextId,
            });
            if (realm === undefined) {
                // Ignore exceptions not attached to any realm.
                this.#logger?.(LogType.cdp, params);
                return;
            }
            for (const browsingContext of realm.associatedBrowsingContexts) {
                this.#eventManager.registerPromiseEvent(_a.#getExceptionText(params, realm).then((text) => ({
                    kind: 'success',
                    value: {
                        type: 'event',
                        method: ChromiumBidi.Log.EventNames.LogEntryAdded,
                        params: {
                            level: "error" /* Log.Level.Error */,
                            source: realm.source,
                            text,
                            timestamp: Math.round(params.timestamp),
                            stackTrace: getBidiStackTrace(params.exceptionDetails.stackTrace),
                            type: 'javascript',
                        },
                    },
                }), (error) => ({
                    kind: 'error',
                    error,
                })), browsingContext.id, ChromiumBidi.Log.EventNames.LogEntryAdded);
            }
        });
    }
    /**
     * Try the best to get the exception text.
     */
    static async #getExceptionText(params, realm) {
        if (!params.exceptionDetails.exception) {
            return params.exceptionDetails.text;
        }
        if (realm === undefined) {
            return JSON.stringify(params.exceptionDetails.exception);
        }
        return await realm.stringifyObject(params.exceptionDetails.exception);
    }
}
_a = LogManager;
//# sourceMappingURL=LogManager.js.map