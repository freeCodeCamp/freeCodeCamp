import { TAddActiveInputConnectionToAudioNodeFactory } from '../types/add-active-input-connection-to-audio-node-factory';

export const createAddActiveInputConnectionToAudioNode: TAddActiveInputConnectionToAudioNodeFactory = (insertElementInSet) => {
    return (activeInputs, source, [output, input, eventListener], ignoreDuplicates) => {
        insertElementInSet(
            activeInputs[input],
            [source, output, eventListener],
            (activeInputConnection) => activeInputConnection[0] === source && activeInputConnection[1] === output,
            ignoreDuplicates
        );
    };
};
