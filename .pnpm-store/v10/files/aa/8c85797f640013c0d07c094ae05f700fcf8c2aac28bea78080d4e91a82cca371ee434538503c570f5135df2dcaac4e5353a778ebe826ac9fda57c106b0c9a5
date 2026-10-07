import { IAudioWorkletNodeOptions } from '../interfaces';

export const cloneAudioWorkletNodeOptions = (audioWorkletNodeOptions: IAudioWorkletNodeOptions): Promise<IAudioWorkletNodeOptions> => {
    return new Promise((resolve, reject) => {
        const { port1, port2 } = new MessageChannel();

        port1.onmessage = ({ data }) => {
            port1.close();
            port2.close();

            resolve(data);
        };
        port1.onmessageerror = ({ data }) => {
            port1.close();
            port2.close();

            reject(data);
        };

        // This will throw an error if the audioWorkletNodeOptions are not clonable.
        port2.postMessage(audioWorkletNodeOptions);
    });
};
