import { TNativeAudioBufferSourceNode, TNativeConstantSourceNode, TNativeOscillatorNode } from '../types';

export const wrapAudioScheduledSourceNodeStartMethodNegativeParameters = (
    nativeAudioScheduledSourceNode: TNativeAudioBufferSourceNode | TNativeConstantSourceNode | TNativeOscillatorNode
): void => {
    nativeAudioScheduledSourceNode.start = ((start) => {
        return (when = 0, offset = 0, duration?: number) => {
            if ((typeof duration === 'number' && duration < 0) || offset < 0 || when < 0) {
                throw new RangeError("The parameters can't be negative.");
            }

            // @todo TypeScript cannot infer the overloaded signature with 3 arguments yet.
            (<(when: number, offset: number, duration?: number) => void>start).call(nativeAudioScheduledSourceNode, when, offset, duration);
        };
    })(nativeAudioScheduledSourceNode.start);
};
