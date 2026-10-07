import { ChromiumBidi, NoSuchHandleException, } from '../../../protocol/protocol.js';
import { LogType } from '../../../utils/log.js';
import { uuidv4 } from '../../../utils/uuid.js';
import { ChannelProxy } from './ChannelProxy.js';
export class Realm {
    #cdpClient;
    #eventManager;
    #executionContextId;
    #logger;
    #origin;
    #realmId;
    realmStorage;
    constructor(cdpClient, eventManager, executionContextId, logger, origin, realmId, realmStorage) {
        this.#cdpClient = cdpClient;
        this.#eventManager = eventManager;
        this.#executionContextId = executionContextId;
        this.#logger = logger;
        this.#origin = origin;
        this.#realmId = realmId;
        this.realmStorage = realmStorage;
        this.realmStorage.addRealm(this);
    }
    cdpToBidiValue(cdpValue, resultOwnership) {
        const bidiValue = this.serializeForBiDi(cdpValue.result.deepSerializedValue, new Map());
        if (cdpValue.result.objectId) {
            const objectId = cdpValue.result.objectId;
            if (resultOwnership === "root" /* Script.ResultOwnership.Root */) {
                // Extend BiDi value with `handle` based on required `resultOwnership`
                // and  CDP response but not on the actual BiDi type.
                bidiValue.handle = objectId;
                // Remember all the handles sent to client.
                this.realmStorage.knownHandlesToRealmMap.set(objectId, this.realmId);
            }
            else {
                // No need to await for the object to be released.
                void this.#releaseObject(objectId).catch((error) => this.#logger?.(LogType.debugError, error));
            }
        }
        return bidiValue;
    }
    isHidden() {
        return false;
    }
    /**
     * Relies on the CDP to implement proper BiDi serialization, except:
     * * CDP integer property `backendNodeId` is replaced with `sharedId` of
     * `{documentId}_element_{backendNodeId}`;
     * * CDP integer property `weakLocalObjectReference` is replaced with UUID `internalId`
     * using unique-per serialization `internalIdMap`.
     * * CDP type `platformobject` is replaced with `object`.
     * @param deepSerializedValue - CDP value to be converted to BiDi.
     * @param internalIdMap - Map from CDP integer `weakLocalObjectReference` to BiDi UUID
     * `internalId`.
     */
    serializeForBiDi(deepSerializedValue, internalIdMap) {
        if (Object.hasOwn(deepSerializedValue, 'weakLocalObjectReference')) {
            const weakLocalObjectReference = deepSerializedValue.weakLocalObjectReference;
            if (!internalIdMap.has(weakLocalObjectReference)) {
                internalIdMap.set(weakLocalObjectReference, uuidv4());
            }
            deepSerializedValue.internalId = internalIdMap.get(weakLocalObjectReference);
            delete deepSerializedValue['weakLocalObjectReference'];
        }
        if (deepSerializedValue.type === 'node' &&
            deepSerializedValue.value &&
            Object.hasOwn(deepSerializedValue.value, 'frameId')) {
            // `frameId` is not needed in BiDi as it is not yet specified.
            delete deepSerializedValue.value['frameId'];
        }
        // Platform object is a special case. It should have only `{type: object}`
        // without `value` field.
        if (deepSerializedValue.type === 'platformobject') {
            return { type: 'object' };
        }
        const bidiValue = deepSerializedValue.value;
        if (bidiValue === undefined) {
            return deepSerializedValue;
        }
        // Recursively update the nested values.
        if (['array', 'set', 'htmlcollection', 'nodelist'].includes(deepSerializedValue.type)) {
            for (const i in bidiValue) {
                bidiValue[i] = this.serializeForBiDi(bidiValue[i], internalIdMap);
            }
        }
        if (['object', 'map'].includes(deepSerializedValue.type)) {
            for (const i in bidiValue) {
                bidiValue[i] = [
                    this.serializeForBiDi(bidiValue[i][0], internalIdMap),
                    this.serializeForBiDi(bidiValue[i][1], internalIdMap),
                ];
            }
        }
        return deepSerializedValue;
    }
    get realmId() {
        return this.#realmId;
    }
    get executionContextId() {
        return this.#executionContextId;
    }
    get origin() {
        return this.#origin;
    }
    get source() {
        return {
            realm: this.realmId,
        };
    }
    get cdpClient() {
        return this.#cdpClient;
    }
    get baseInfo() {
        return {
            realm: this.realmId,
            origin: this.origin,
        };
    }
    async evaluate(expression, awaitPromise, resultOwnership = "none" /* Script.ResultOwnership.None */, serializationOptions = {}, userActivation = false, includeCommandLineApi = false) {
        const cdpEvaluateResult = await this.cdpClient.sendCommand('Runtime.evaluate', {
            contextId: this.executionContextId,
            expression,
            awaitPromise,
            serializationOptions: Realm.#getSerializationOptions("deep" /* Protocol.Runtime.SerializationOptionsSerialization.Deep */, serializationOptions),
            userGesture: userActivation,
            includeCommandLineAPI: includeCommandLineApi,
        });
        if (cdpEvaluateResult.exceptionDetails) {
            return await this.#getExceptionResult(cdpEvaluateResult.exceptionDetails, 0, resultOwnership);
        }
        return {
            realm: this.realmId,
            result: this.cdpToBidiValue(cdpEvaluateResult, resultOwnership),
            type: 'success',
        };
    }
    #registerEvent(event) {
        if (this.associatedBrowsingContexts.length === 0) {
            this.#eventManager.registerGlobalEvent(event);
        }
        else {
            for (const browsingContext of this.associatedBrowsingContexts) {
                this.#eventManager.registerEvent(event, browsingContext.id);
            }
        }
    }
    initialize() {
        if (!this.isHidden()) {
            // Report only not-hidden realms.
            this.#registerEvent({
                type: 'event',
                method: ChromiumBidi.Script.EventNames.RealmCreated,
                params: this.realmInfo,
            });
        }
    }
    /**
     * Serializes a given CDP object into BiDi, keeping references in the
     * target's `globalThis`.
     */
    async serializeCdpObject(cdpRemoteObject, resultOwnership) {
        // TODO: if the object is a primitive, return it directly without CDP roundtrip.
        const argument = Realm.#cdpRemoteObjectToCallArgument(cdpRemoteObject);
        const cdpValue = await this.cdpClient.sendCommand('Runtime.callFunctionOn', {
            functionDeclaration: String((remoteObject) => remoteObject),
            awaitPromise: false,
            arguments: [argument],
            serializationOptions: {
                serialization: "deep" /* Protocol.Runtime.SerializationOptionsSerialization.Deep */,
            },
            executionContextId: this.executionContextId,
        });
        return this.cdpToBidiValue(cdpValue, resultOwnership);
    }
    static #cdpRemoteObjectToCallArgument(cdpRemoteObject) {
        if (cdpRemoteObject.objectId !== undefined) {
            return { objectId: cdpRemoteObject.objectId };
        }
        if (cdpRemoteObject.unserializableValue !== undefined) {
            return { unserializableValue: cdpRemoteObject.unserializableValue };
        }
        return { value: cdpRemoteObject.value };
    }
    /**
     * Gets the string representation of an object. This is equivalent to
     * calling `toString()` on the object value.
     */
    async stringifyObject(cdpRemoteObject) {
        const { result } = await this.cdpClient.sendCommand('Runtime.callFunctionOn', {
            functionDeclaration: String((remoteObject) => String(remoteObject)),
            awaitPromise: false,
            arguments: [cdpRemoteObject],
            returnByValue: true,
            executionContextId: this.executionContextId,
        });
        return result.value;
    }
    async #flattenKeyValuePairs(mappingLocalValue) {
        const keyValueArray = await Promise.all(mappingLocalValue.map(async ([key, value]) => {
            let keyArg;
            if (typeof key === 'string') {
                // Key is a string.
                keyArg = { value: key };
            }
            else {
                // Key is a serialized value.
                keyArg = await this.deserializeForCdp(key);
            }
            const valueArg = await this.deserializeForCdp(value);
            return [keyArg, valueArg];
        }));
        return keyValueArray.flat();
    }
    async #flattenValueList(listLocalValue) {
        return await Promise.all(listLocalValue.map((localValue) => this.deserializeForCdp(localValue)));
    }
    async #serializeCdpExceptionDetails(cdpExceptionDetails, lineOffset, resultOwnership) {
        const callFrames = cdpExceptionDetails.stackTrace?.callFrames.map((frame) => ({
            url: frame.url,
            functionName: frame.functionName,
            lineNumber: frame.lineNumber - lineOffset,
            columnNumber: frame.columnNumber,
        })) ?? [];
        // Exception should always be there.
        const exception = cdpExceptionDetails.exception;
        return {
            exception: await this.serializeCdpObject(exception, resultOwnership),
            columnNumber: cdpExceptionDetails.columnNumber,
            lineNumber: cdpExceptionDetails.lineNumber - lineOffset,
            stackTrace: {
                callFrames,
            },
            text: (await this.stringifyObject(exception)) || cdpExceptionDetails.text,
        };
    }
    async callFunction(functionDeclaration, awaitPromise, thisLocalValue = {
        type: 'undefined',
    }, argumentsLocalValues = [], resultOwnership = "none" /* Script.ResultOwnership.None */, serializationOptions = {}, userActivation = false) {
        const callFunctionAndSerializeScript = `(...args) => {
      function callFunction(f, args) {
        const deserializedThis = args.shift();
        const deserializedArgs = args;
        return f.apply(deserializedThis, deserializedArgs);
      }
      return callFunction((
        ${functionDeclaration}
      ), args);
    }`;
        const thisAndArgumentsList = [
            await this.deserializeForCdp(thisLocalValue),
            ...(await Promise.all(argumentsLocalValues.map(async (argumentLocalValue) => await this.deserializeForCdp(argumentLocalValue)))),
        ];
        let cdpCallFunctionResult;
        try {
            cdpCallFunctionResult = await this.cdpClient.sendCommand('Runtime.callFunctionOn', {
                functionDeclaration: callFunctionAndSerializeScript,
                awaitPromise,
                arguments: thisAndArgumentsList,
                serializationOptions: Realm.#getSerializationOptions("deep" /* Protocol.Runtime.SerializationOptionsSerialization.Deep */, serializationOptions),
                executionContextId: this.executionContextId,
                userGesture: userActivation,
            });
        }
        catch (error) {
            // Heuristic to determine if the problem is in the argument.
            // The check can be done on the `deserialization` step, but this approach
            // helps to save round-trips.
            if (error.code === -32000 /* CdpErrorConstants.GENERIC_ERROR */ &&
                [
                    'Could not find object with given id',
                    'Argument should belong to the same JavaScript world as target object',
                    'Invalid remote object id',
                ].includes(error.message)) {
                throw new NoSuchHandleException('Handle was not found.');
            }
            throw error;
        }
        if (cdpCallFunctionResult.exceptionDetails) {
            return await this.#getExceptionResult(cdpCallFunctionResult.exceptionDetails, 1, resultOwnership);
        }
        return {
            type: 'success',
            result: this.cdpToBidiValue(cdpCallFunctionResult, resultOwnership),
            realm: this.realmId,
        };
    }
    async deserializeForCdp(localValue) {
        if ('handle' in localValue && localValue.handle) {
            return { objectId: localValue.handle };
            // We tried to find a handle value but failed
            // This allows us to have exhaustive switch on `localValue.type`
        }
        else if ('handle' in localValue || 'sharedId' in localValue) {
            throw new NoSuchHandleException('Handle was not found.');
        }
        switch (localValue.type) {
            case 'undefined':
                return { unserializableValue: 'undefined' };
            case 'null':
                return { unserializableValue: 'null' };
            case 'string':
                return { value: localValue.value };
            case 'number':
                if (localValue.value === 'NaN') {
                    return { unserializableValue: 'NaN' };
                }
                else if (localValue.value === '-0') {
                    return { unserializableValue: '-0' };
                }
                else if (localValue.value === 'Infinity') {
                    return { unserializableValue: 'Infinity' };
                }
                else if (localValue.value === '-Infinity') {
                    return { unserializableValue: '-Infinity' };
                }
                return {
                    value: localValue.value,
                };
            case 'boolean':
                return { value: Boolean(localValue.value) };
            case 'bigint':
                return {
                    unserializableValue: `BigInt(${JSON.stringify(localValue.value)})`,
                };
            case 'date':
                return {
                    unserializableValue: `new Date(Date.parse(${JSON.stringify(localValue.value)}))`,
                };
            case 'regexp':
                return {
                    unserializableValue: `new RegExp(${JSON.stringify(localValue.value.pattern)}, ${JSON.stringify(localValue.value.flags)})`,
                };
            case 'map': {
                // TODO: If none of the nested keys and values has a remote
                // reference, serialize to `unserializableValue` without CDP roundtrip.
                const keyValueArray = await this.#flattenKeyValuePairs(localValue.value);
                const { result } = await this.cdpClient.sendCommand('Runtime.callFunctionOn', {
                    functionDeclaration: String((...args) => {
                        const result = new Map();
                        for (let i = 0; i < args.length; i += 2) {
                            result.set(args[i], args[i + 1]);
                        }
                        return result;
                    }),
                    awaitPromise: false,
                    arguments: keyValueArray,
                    returnByValue: false,
                    executionContextId: this.executionContextId,
                });
                // TODO(#375): Release `result.objectId` after using.
                return { objectId: result.objectId };
            }
            case 'object': {
                // TODO: If none of the nested keys and values has a remote
                // reference, serialize to `unserializableValue` without CDP roundtrip.
                const keyValueArray = await this.#flattenKeyValuePairs(localValue.value);
                const { result } = await this.cdpClient.sendCommand('Runtime.callFunctionOn', {
                    functionDeclaration: String((...args) => {
                        const result = {};
                        for (let i = 0; i < args.length; i += 2) {
                            // Key should be either `string`, `number`, or `symbol`.
                            const key = args[i];
                            result[key] = args[i + 1];
                        }
                        return result;
                    }),
                    awaitPromise: false,
                    arguments: keyValueArray,
                    returnByValue: false,
                    executionContextId: this.executionContextId,
                });
                // TODO(#375): Release `result.objectId` after using.
                return { objectId: result.objectId };
            }
            case 'array': {
                // TODO: If none of the nested items has a remote reference,
                // serialize to `unserializableValue` without CDP roundtrip.
                const args = await this.#flattenValueList(localValue.value);
                const { result } = await this.cdpClient.sendCommand('Runtime.callFunctionOn', {
                    functionDeclaration: String((...args) => args),
                    awaitPromise: false,
                    arguments: args,
                    returnByValue: false,
                    executionContextId: this.executionContextId,
                });
                // TODO(#375): Release `result.objectId` after using.
                return { objectId: result.objectId };
            }
            case 'set': {
                // TODO: if none of the nested items has a remote reference,
                // serialize to `unserializableValue` without CDP roundtrip.
                const args = await this.#flattenValueList(localValue.value);
                const { result } = await this.cdpClient.sendCommand('Runtime.callFunctionOn', {
                    functionDeclaration: String((...args) => new Set(args)),
                    awaitPromise: false,
                    arguments: args,
                    returnByValue: false,
                    executionContextId: this.executionContextId,
                });
                // TODO(#375): Release `result.objectId` after using.
                return { objectId: result.objectId };
            }
            case 'channel': {
                const channelProxy = new ChannelProxy(localValue.value, this.#logger);
                const channelProxySendMessageHandle = await channelProxy.init(this, this.#eventManager);
                return { objectId: channelProxySendMessageHandle };
            }
            // TODO(#375): Dispose of nested objects.
        }
        // Intentionally outside to handle unknown types
        throw new Error(`Value ${JSON.stringify(localValue)} is not deserializable.`);
    }
    async #getExceptionResult(exceptionDetails, lineOffset, resultOwnership) {
        return {
            exceptionDetails: await this.#serializeCdpExceptionDetails(exceptionDetails, lineOffset, resultOwnership),
            realm: this.realmId,
            type: 'exception',
        };
    }
    static #getSerializationOptions(serialization, serializationOptions) {
        return {
            serialization,
            additionalParameters: Realm.#getAdditionalSerializationParameters(serializationOptions),
            ...Realm.#getMaxObjectDepth(serializationOptions),
        };
    }
    static #getAdditionalSerializationParameters(serializationOptions) {
        const additionalParameters = {};
        if (serializationOptions.maxDomDepth !== undefined) {
            additionalParameters['maxNodeDepth'] =
                serializationOptions.maxDomDepth === null
                    ? 1000
                    : serializationOptions.maxDomDepth;
        }
        if (serializationOptions.includeShadowTree !== undefined) {
            additionalParameters['includeShadowTree'] =
                serializationOptions.includeShadowTree;
        }
        return additionalParameters;
    }
    static #getMaxObjectDepth(serializationOptions) {
        return serializationOptions.maxObjectDepth === undefined ||
            serializationOptions.maxObjectDepth === null
            ? {}
            : { maxDepth: serializationOptions.maxObjectDepth };
    }
    async #releaseObject(handle) {
        try {
            await this.cdpClient.sendCommand('Runtime.releaseObject', {
                objectId: handle,
            });
        }
        catch (error) {
            // Heuristic to determine if the problem is in the unknown handler.
            // Ignore the error if so.
            if (!(error.code === -32000 /* CdpErrorConstants.GENERIC_ERROR */ &&
                error.message === 'Invalid remote object id')) {
                throw error;
            }
        }
    }
    async disown(handle) {
        // Disowning an object from different realm does nothing.
        if (this.realmStorage.knownHandlesToRealmMap.get(handle) !== this.realmId) {
            return;
        }
        await this.#releaseObject(handle);
        this.realmStorage.knownHandlesToRealmMap.delete(handle);
    }
    dispose() {
        if (!this.isHidden()) {
            this.#registerEvent({
                type: 'event',
                method: ChromiumBidi.Script.EventNames.RealmDestroyed,
                params: {
                    realm: this.realmId,
                },
            });
        }
    }
}
//# sourceMappingURL=Realm.js.map