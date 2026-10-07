import { NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS } from '../globals';
import {
    IAudioParam,
    IAudioWorkletNode,
    IAudioWorkletNodeEventMap,
    IAudioWorkletNodeOptions,
    IMinimalAudioContext,
    IMinimalOfflineAudioContext,
    IOfflineAudioContext,
    IReadOnlyMap
} from '../interfaces';
import { ReadOnlyMap } from '../read-only-map';
import {
    TAudioNodeRenderer,
    TAudioParamMap,
    TAudioWorkletNodeConstructorFactory,
    TContext,
    TErrorEventHandler,
    TNativeAudioContext,
    TNativeAudioParam,
    TNativeAudioWorkletNode
} from '../types';

const DEFAULT_OPTIONS = {
    channelCount: 2,
    // Bug #61: The channelCountMode should be 'max' according to the spec but is set to 'explicit' to achieve consistent behavior.
    channelCountMode: 'explicit',
    channelInterpretation: 'speakers',
    numberOfInputs: 1,
    numberOfOutputs: 1,
    parameterData: {},
    processorOptions: {}
} as const;

export const createAudioWorkletNodeConstructor: TAudioWorkletNodeConstructorFactory = (
    addUnrenderedAudioWorkletNode,
    audioNodeConstructor,
    createAudioParam,
    createAudioWorkletNodeRenderer,
    createNativeAudioWorkletNode,
    getAudioNodeConnections,
    getBackupOfflineAudioContext,
    getNativeContext,
    isNativeOfflineAudioContext,
    nativeAudioWorkletNodeConstructor,
    sanitizeAudioWorkletNodeOptions,
    setActiveAudioWorkletNodeInputs,
    testAudioWorkletNodeOptionsClonability,
    wrapEventListener
) => {
    return class AudioWorkletNode<T extends TContext>
        extends audioNodeConstructor<T, IAudioWorkletNodeEventMap>
        implements IAudioWorkletNode<T>
    {
        private _nativeAudioWorkletNode: TNativeAudioWorkletNode;

        private _onprocessorerror: null | TErrorEventHandler<this>;

        private _parameters: null | TAudioParamMap;

        constructor(context: T, name: string, options?: Partial<IAudioWorkletNodeOptions>) {
            const nativeContext = getNativeContext(context);
            const isOffline = isNativeOfflineAudioContext(nativeContext);
            const mergedOptions = sanitizeAudioWorkletNodeOptions({ ...DEFAULT_OPTIONS, ...options });

            // Bug #191: Safari doesn't throw an error if the options aren't clonable.
            testAudioWorkletNodeOptionsClonability(mergedOptions);

            const nodeNameToProcessorConstructorMap = NODE_NAME_TO_PROCESSOR_CONSTRUCTOR_MAPS.get(nativeContext);
            const processorConstructor = nodeNameToProcessorConstructorMap?.get(name);
            // Bug #186: Chrome and Edge do not allow to create an AudioWorkletNode on a closed AudioContext.
            const nativeContextOrBackupOfflineAudioContext =
                isOffline || nativeContext.state !== 'closed'
                    ? nativeContext
                    : getBackupOfflineAudioContext(<TNativeAudioContext>nativeContext) ?? nativeContext;
            const nativeAudioWorkletNode = createNativeAudioWorkletNode(
                nativeContextOrBackupOfflineAudioContext,
                isOffline ? null : (<IMinimalAudioContext>(<any>context)).baseLatency,
                nativeAudioWorkletNodeConstructor,
                name,
                processorConstructor,
                mergedOptions
            );
            const audioWorkletNodeRenderer = <TAudioNodeRenderer<T, this>>(
                (isOffline ? createAudioWorkletNodeRenderer(name, mergedOptions, processorConstructor) : null)
            );

            /*
             * @todo Add a mechanism to switch an AudioWorkletNode to passive once the process() function of the AudioWorkletProcessor
             * returns false.
             */
            super(context, true, nativeAudioWorkletNode, audioWorkletNodeRenderer);

            const parameters: [string, IAudioParam][] = [];

            nativeAudioWorkletNode.parameters.forEach((nativeAudioParam, nm) => {
                const audioParam = createAudioParam(this, isOffline, nativeAudioParam);

                parameters.push([nm, audioParam]);
            });

            this._nativeAudioWorkletNode = nativeAudioWorkletNode;
            this._onprocessorerror = null;
            this._parameters = new ReadOnlyMap(parameters);

            /*
             * Bug #86 & #87: Invoking the renderer of an AudioWorkletNode might be necessary if it has no direct or indirect connection to
             * the destination.
             */
            if (isOffline) {
                addUnrenderedAudioWorkletNode(nativeContext, <IAudioWorkletNode<IMinimalOfflineAudioContext | IOfflineAudioContext>>this);
            }

            const { activeInputs } = getAudioNodeConnections(this);

            setActiveAudioWorkletNodeInputs(nativeAudioWorkletNode, activeInputs);
        }

        get onprocessorerror(): null | TErrorEventHandler<this> {
            return this._onprocessorerror;
        }

        set onprocessorerror(value) {
            const wrappedListener = typeof value === 'function' ? wrapEventListener(this, <EventListenerOrEventListenerObject>value) : null;

            this._nativeAudioWorkletNode.onprocessorerror = wrappedListener;

            const nativeOnProcessorError = this._nativeAudioWorkletNode.onprocessorerror;

            this._onprocessorerror =
                nativeOnProcessorError !== null && nativeOnProcessorError === wrappedListener
                    ? value
                    : <null | TErrorEventHandler<this>>nativeOnProcessorError;
        }

        get parameters(): TAudioParamMap {
            if (this._parameters === null) {
                // @todo The definition that TypeScript uses of the AudioParamMap is lacking many methods.
                return <IReadOnlyMap<string, TNativeAudioParam>>this._nativeAudioWorkletNode.parameters;
            }

            return this._parameters;
        }

        get port(): MessagePort {
            return this._nativeAudioWorkletNode.port;
        }
    };
};
