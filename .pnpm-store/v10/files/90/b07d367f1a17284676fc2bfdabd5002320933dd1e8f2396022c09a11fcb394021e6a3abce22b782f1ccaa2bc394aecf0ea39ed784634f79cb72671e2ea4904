import { AUDIO_NODE_STORE, EVENT_LISTENERS } from '../globals';
import { isAudioNode } from '../guards/audio-node';
import { isAudioNodeOutputConnection } from '../guards/audio-node-output-connection';
import { addActiveInputConnectionToAudioParam } from '../helpers/add-active-input-connection-to-audio-param';
import { addPassiveInputConnectionToAudioParam } from '../helpers/add-passive-input-connection-to-audio-param';
import { connectNativeAudioNodeToNativeAudioNode } from '../helpers/connect-native-audio-node-to-native-audio-node';
import { deleteActiveInputConnection } from '../helpers/delete-active-input-connection';
import { deleteActiveInputConnectionToAudioParam } from '../helpers/delete-active-input-connection-to-audio-param';
import { deleteEventListenerOfAudioNode } from '../helpers/delete-event-listeners-of-audio-node';
import { deletePassiveInputConnectionToAudioNode } from '../helpers/delete-passive-input-connection-to-audio-node';
import { deletePassiveInputConnectionToAudioParam } from '../helpers/delete-passive-input-connection-to-audio-param';
import { disconnectNativeAudioNodeFromNativeAudioNode } from '../helpers/disconnect-native-audio-node-from-native-audio-node';
import { getAudioNodeConnections } from '../helpers/get-audio-node-connections';
import { getAudioParamConnections } from '../helpers/get-audio-param-connections';
import { getEventListenersOfAudioNode } from '../helpers/get-event-listeners-of-audio-node';
import { getNativeAudioNode } from '../helpers/get-native-audio-node';
import { getNativeAudioParam } from '../helpers/get-native-audio-param';
import { insertElementInSet } from '../helpers/insert-element-in-set';
import { isActiveAudioNode } from '../helpers/is-active-audio-node';
import { isPartOfACycle } from '../helpers/is-part-of-a-cycle';
import { isPassiveAudioNode } from '../helpers/is-passive-audio-node';
import { setInternalStateToActive } from '../helpers/set-internal-state-to-active';
import { setInternalStateToPassiveWhenNecessary } from '../helpers/set-internal-state-to-passive-when-necessary';
import { testAudioNodeDisconnectMethodSupport } from '../helpers/test-audio-node-disconnect-method-support';
import { visitEachAudioNodeOnce } from '../helpers/visit-each-audio-node-once';
import { wrapAudioNodeDisconnectMethod } from '../helpers/wrap-audio-node-disconnect-method';
const addConnectionToAudioParamOfAudioContext = (source, destination, output, isOffline) => {
    const { activeInputs, passiveInputs } = getAudioParamConnections(destination);
    const { outputs } = getAudioNodeConnections(source);
    const eventListeners = getEventListenersOfAudioNode(source);
    const eventListener = (isActive) => {
        const nativeAudioNode = getNativeAudioNode(source);
        const nativeAudioParam = getNativeAudioParam(destination);
        if (isActive) {
            const partialConnection = deletePassiveInputConnectionToAudioParam(passiveInputs, source, output);
            addActiveInputConnectionToAudioParam(activeInputs, source, partialConnection, false);
            if (!isOffline && !isPartOfACycle(source)) {
                nativeAudioNode.connect(nativeAudioParam, output);
            }
        }
        else {
            const partialConnection = deleteActiveInputConnectionToAudioParam(activeInputs, source, output);
            addPassiveInputConnectionToAudioParam(passiveInputs, partialConnection, false);
            if (!isOffline && !isPartOfACycle(source)) {
                nativeAudioNode.disconnect(nativeAudioParam, output);
            }
        }
    };
    if (insertElementInSet(outputs, [destination, output], (outputConnection) => outputConnection[0] === destination && outputConnection[1] === output, true)) {
        eventListeners.add(eventListener);
        if (isActiveAudioNode(source)) {
            addActiveInputConnectionToAudioParam(activeInputs, source, [output, eventListener], true);
        }
        else {
            addPassiveInputConnectionToAudioParam(passiveInputs, [source, output, eventListener], true);
        }
        return true;
    }
    return false;
};
const deleteInputConnectionOfAudioNode = (source, destination, output, input) => {
    const { activeInputs, passiveInputs } = getAudioNodeConnections(destination);
    const activeInputConnection = deleteActiveInputConnection(activeInputs[input], source, output);
    if (activeInputConnection === null) {
        const passiveInputConnection = deletePassiveInputConnectionToAudioNode(passiveInputs, source, output, input);
        return [passiveInputConnection[2], false];
    }
    return [activeInputConnection[2], true];
};
const deleteInputConnectionOfAudioParam = (source, destination, output) => {
    const { activeInputs, passiveInputs } = getAudioParamConnections(destination);
    const activeInputConnection = deleteActiveInputConnection(activeInputs, source, output);
    if (activeInputConnection === null) {
        const passiveInputConnection = deletePassiveInputConnectionToAudioParam(passiveInputs, source, output);
        return [passiveInputConnection[1], false];
    }
    return [activeInputConnection[2], true];
};
const deleteInputsOfAudioNode = (source, isOffline, destination, output, input) => {
    const [listener, isActive] = deleteInputConnectionOfAudioNode(source, destination, output, input);
    if (listener !== null) {
        deleteEventListenerOfAudioNode(source, listener);
        if (isActive && !isOffline && !isPartOfACycle(source)) {
            disconnectNativeAudioNodeFromNativeAudioNode(getNativeAudioNode(source), getNativeAudioNode(destination), output, input);
        }
    }
    if (isActiveAudioNode(destination)) {
        const { activeInputs } = getAudioNodeConnections(destination);
        setInternalStateToPassiveWhenNecessary(destination, activeInputs);
    }
};
const deleteInputsOfAudioParam = (source, isOffline, destination, output) => {
    const [listener, isActive] = deleteInputConnectionOfAudioParam(source, destination, output);
    if (listener !== null) {
        deleteEventListenerOfAudioNode(source, listener);
        if (isActive && !isOffline && !isPartOfACycle(source)) {
            getNativeAudioNode(source).disconnect(getNativeAudioParam(destination), output);
        }
    }
};
const deleteAnyConnection = (source, isOffline) => {
    const audioNodeConnectionsOfSource = getAudioNodeConnections(source);
    const destinations = [];
    for (const outputConnection of audioNodeConnectionsOfSource.outputs) {
        if (isAudioNodeOutputConnection(outputConnection)) {
            deleteInputsOfAudioNode(source, isOffline, ...outputConnection);
        }
        else {
            deleteInputsOfAudioParam(source, isOffline, ...outputConnection);
        }
        destinations.push(outputConnection[0]);
    }
    audioNodeConnectionsOfSource.outputs.clear();
    return destinations;
};
const deleteConnectionAtOutput = (source, isOffline, output) => {
    const audioNodeConnectionsOfSource = getAudioNodeConnections(source);
    const destinations = [];
    for (const outputConnection of audioNodeConnectionsOfSource.outputs) {
        if (outputConnection[1] === output) {
            if (isAudioNodeOutputConnection(outputConnection)) {
                deleteInputsOfAudioNode(source, isOffline, ...outputConnection);
            }
            else {
                deleteInputsOfAudioParam(source, isOffline, ...outputConnection);
            }
            destinations.push(outputConnection[0]);
            audioNodeConnectionsOfSource.outputs.delete(outputConnection);
        }
    }
    return destinations;
};
const deleteConnectionToDestination = (source, isOffline, destination, output, input) => {
    const audioNodeConnectionsOfSource = getAudioNodeConnections(source);
    return Array.from(audioNodeConnectionsOfSource.outputs)
        .filter((outputConnection) => outputConnection[0] === destination &&
        (output === undefined || outputConnection[1] === output) &&
        (input === undefined || outputConnection[2] === input))
        .map((outputConnection) => {
        if (isAudioNodeOutputConnection(outputConnection)) {
            deleteInputsOfAudioNode(source, isOffline, ...outputConnection);
        }
        else {
            deleteInputsOfAudioParam(source, isOffline, ...outputConnection);
        }
        audioNodeConnectionsOfSource.outputs.delete(outputConnection);
        return outputConnection[0];
    });
};
export const createAudioNodeConstructor = (addAudioNodeConnections, addConnectionToAudioNode, cacheTestResult, createIncrementCycleCounter, createIndexSizeError, createInvalidAccessError, createNotSupportedError, decrementCycleCounter, detectCycles, eventTargetConstructor, getNativeContext, isNativeAudioContext, isNativeAudioNode, isNativeAudioParam, isNativeOfflineAudioContext, nativeAudioWorkletNodeConstructor) => {
    return class AudioNode extends eventTargetConstructor {
        constructor(context, isActive, nativeAudioNode, audioNodeRenderer) {
            super(nativeAudioNode);
            this._context = context;
            this._nativeAudioNode = nativeAudioNode;
            const nativeContext = getNativeContext(context);
            // Bug #12: Safari does not support to disconnect a specific destination.
            if (isNativeAudioContext(nativeContext) &&
                true !==
                    cacheTestResult(testAudioNodeDisconnectMethodSupport, () => {
                        return testAudioNodeDisconnectMethodSupport(nativeContext, nativeAudioWorkletNodeConstructor);
                    })) {
                wrapAudioNodeDisconnectMethod(nativeAudioNode);
            }
            AUDIO_NODE_STORE.set(this, nativeAudioNode);
            EVENT_LISTENERS.set(this, new Set());
            if (context.state !== 'closed' && isActive) {
                setInternalStateToActive(this);
            }
            addAudioNodeConnections(this, audioNodeRenderer, nativeAudioNode);
        }
        get channelCount() {
            return this._nativeAudioNode.channelCount;
        }
        set channelCount(value) {
            this._nativeAudioNode.channelCount = value;
        }
        get channelCountMode() {
            return this._nativeAudioNode.channelCountMode;
        }
        set channelCountMode(value) {
            this._nativeAudioNode.channelCountMode = value;
        }
        get channelInterpretation() {
            return this._nativeAudioNode.channelInterpretation;
        }
        set channelInterpretation(value) {
            this._nativeAudioNode.channelInterpretation = value;
        }
        get context() {
            return this._context;
        }
        get numberOfInputs() {
            return this._nativeAudioNode.numberOfInputs;
        }
        get numberOfOutputs() {
            return this._nativeAudioNode.numberOfOutputs;
        }
        // tslint:disable-next-line:invalid-void
        connect(destination, output = 0, input = 0) {
            // Bug #174: Safari does expose a wrong numberOfOutputs for MediaStreamAudioDestinationNodes.
            if (output < 0 || output >= this._nativeAudioNode.numberOfOutputs) {
                throw createIndexSizeError();
            }
            const nativeContext = getNativeContext(this._context);
            const isOffline = isNativeOfflineAudioContext(nativeContext);
            if (isNativeAudioNode(destination) || isNativeAudioParam(destination)) {
                throw createInvalidAccessError();
            }
            if (isAudioNode(destination)) {
                const nativeDestinationAudioNode = getNativeAudioNode(destination);
                try {
                    const connection = connectNativeAudioNodeToNativeAudioNode(this._nativeAudioNode, nativeDestinationAudioNode, output, input);
                    const isPassive = isPassiveAudioNode(this);
                    if (isOffline || isPassive) {
                        this._nativeAudioNode.disconnect(...connection);
                    }
                    if (this.context.state !== 'closed' && !isPassive && isPassiveAudioNode(destination)) {
                        setInternalStateToActive(destination);
                    }
                }
                catch (err) {
                    // Bug #41: Safari does not throw the correct exception so far.
                    if (err.code === 12) {
                        throw createInvalidAccessError();
                    }
                    throw err;
                }
                const isNewConnectionToAudioNode = addConnectionToAudioNode(this, destination, output, input, isOffline);
                // Bug #164: Only Firefox detects cycles so far.
                if (isNewConnectionToAudioNode) {
                    const cycles = detectCycles([this], destination);
                    visitEachAudioNodeOnce(cycles, createIncrementCycleCounter(isOffline));
                }
                return destination;
            }
            const nativeAudioParam = getNativeAudioParam(destination);
            /*
             * Bug #73, #147 & #153: Safari does not support to connect an input signal to the playbackRate AudioParam of an
             * AudioBufferSourceNode. This can't be easily detected and that's why the outdated name property is used here to identify
             * Safari. In addition to that the maxValue property is used to only detect the affected versions below v14.0.2.
             */
            if (nativeAudioParam.name === 'playbackRate' && nativeAudioParam.maxValue === 1024) {
                throw createNotSupportedError();
            }
            try {
                this._nativeAudioNode.connect(nativeAudioParam, output);
                if (isOffline || isPassiveAudioNode(this)) {
                    this._nativeAudioNode.disconnect(nativeAudioParam, output);
                }
            }
            catch (err) {
                // Bug #58: Safari doesn't throw an InvalidAccessError yet.
                if (err.code === 12) {
                    throw createInvalidAccessError();
                }
                throw err;
            }
            const isNewConnectionToAudioParam = addConnectionToAudioParamOfAudioContext(this, destination, output, isOffline);
            // Bug #164: Only Firefox detects cycles so far.
            if (isNewConnectionToAudioParam) {
                const cycles = detectCycles([this], destination);
                visitEachAudioNodeOnce(cycles, createIncrementCycleCounter(isOffline));
            }
        }
        disconnect(destinationOrOutput, output, input) {
            let destinations;
            const nativeContext = getNativeContext(this._context);
            const isOffline = isNativeOfflineAudioContext(nativeContext);
            if (destinationOrOutput === undefined) {
                destinations = deleteAnyConnection(this, isOffline);
            }
            else if (typeof destinationOrOutput === 'number') {
                if (destinationOrOutput < 0 || destinationOrOutput >= this.numberOfOutputs) {
                    throw createIndexSizeError();
                }
                destinations = deleteConnectionAtOutput(this, isOffline, destinationOrOutput);
            }
            else {
                if (output !== undefined && (output < 0 || output >= this.numberOfOutputs)) {
                    throw createIndexSizeError();
                }
                if (isAudioNode(destinationOrOutput) && input !== undefined && (input < 0 || input >= destinationOrOutput.numberOfInputs)) {
                    throw createIndexSizeError();
                }
                destinations = deleteConnectionToDestination(this, isOffline, destinationOrOutput, output, input);
                if (destinations.length === 0) {
                    throw createInvalidAccessError();
                }
            }
            // Bug #164: Only Firefox detects cycles so far.
            for (const destination of destinations) {
                const cycles = detectCycles([this], destination);
                visitEachAudioNodeOnce(cycles, decrementCycleCounter);
            }
        }
    };
};
//# sourceMappingURL=audio-node-constructor.js.map