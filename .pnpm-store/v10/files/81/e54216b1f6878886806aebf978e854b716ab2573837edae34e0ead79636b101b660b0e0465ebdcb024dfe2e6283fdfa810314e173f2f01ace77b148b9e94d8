import { TDeleteActiveInputConnectionToAudioNodeFactory } from '../types';

export const createDeleteActiveInputConnectionToAudioNode: TDeleteActiveInputConnectionToAudioNodeFactory = (pickElementFromSet) => {
    return (activeInputs, source, output, input) => {
        return pickElementFromSet(
            activeInputs[input],
            (activeInputConnection) => activeInputConnection[0] === source && activeInputConnection[1] === output
        );
    };
};
