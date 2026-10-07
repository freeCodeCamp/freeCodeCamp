import { IAudioWorkletNodeOptions } from '../interfaces';

export const testClonabilityOfAudioWorkletNodeOptions = (audioWorkletNodeOptions: IAudioWorkletNodeOptions): void => {
    const { port1 } = new MessageChannel();

    try {
        // This will throw an error if the audioWorkletNodeOptions are not clonable.
        port1.postMessage(audioWorkletNodeOptions);
    } finally {
        port1.close();
    }
};
