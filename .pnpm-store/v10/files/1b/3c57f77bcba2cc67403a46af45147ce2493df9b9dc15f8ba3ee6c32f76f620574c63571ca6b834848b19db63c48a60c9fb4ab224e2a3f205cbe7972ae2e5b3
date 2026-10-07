import { wrapIIRFilterNodeGetFrequencyResponseMethod } from '../helpers/wrap-iir-filter-node-get-frequency-response-method';
import { IIIRFilterNode, IIIRFilterOptions, IMinimalAudioContext } from '../interfaces';
import { TAudioNodeRenderer, TContext, TIIRFilterNodeConstructorFactory, TNativeIIRFilterNode } from '../types';

const DEFAULT_OPTIONS = {
    channelCount: 2,
    channelCountMode: 'max',
    channelInterpretation: 'speakers'
} as const;

export const createIIRFilterNodeConstructor: TIIRFilterNodeConstructorFactory = (
    audioNodeConstructor,
    createNativeIIRFilterNode,
    createIIRFilterNodeRenderer,
    getNativeContext,
    isNativeOfflineAudioContext,
    setAudioNodeTailTime
) => {
    return class IIRFilterNode<T extends TContext> extends audioNodeConstructor<T> implements IIIRFilterNode<T> {
        private _nativeIIRFilterNode: TNativeIIRFilterNode;

        constructor(
            context: T,
            options: { feedback: IIIRFilterOptions['feedback']; feedforward: IIIRFilterOptions['feedforward'] } & Partial<IIIRFilterOptions>
        ) {
            const nativeContext = getNativeContext(context);
            const isOffline = isNativeOfflineAudioContext(nativeContext);
            const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
            const nativeIIRFilterNode = createNativeIIRFilterNode(
                nativeContext,
                isOffline ? null : (<IMinimalAudioContext>(<any>context)).baseLatency,
                mergedOptions
            );
            const iirFilterNodeRenderer = <TAudioNodeRenderer<T, this>>(
                (isOffline ? createIIRFilterNodeRenderer(mergedOptions.feedback, mergedOptions.feedforward) : null)
            );

            super(context, false, nativeIIRFilterNode, iirFilterNodeRenderer);

            // Bug #23 & #24: FirefoxDeveloper does not throw an InvalidAccessError.
            // @todo Write a test which allows other browsers to remain unpatched.
            wrapIIRFilterNodeGetFrequencyResponseMethod(nativeIIRFilterNode);

            this._nativeIIRFilterNode = nativeIIRFilterNode;

            // @todo Determine a meaningful tail-time instead of just using one second.
            setAudioNodeTailTime(this, 1);
        }

        public getFrequencyResponse(frequencyHz: Float32Array, magResponse: Float32Array, phaseResponse: Float32Array): void {
            return this._nativeIIRFilterNode.getFrequencyResponse(frequencyHz, magResponse, phaseResponse);
        }
    };
};
