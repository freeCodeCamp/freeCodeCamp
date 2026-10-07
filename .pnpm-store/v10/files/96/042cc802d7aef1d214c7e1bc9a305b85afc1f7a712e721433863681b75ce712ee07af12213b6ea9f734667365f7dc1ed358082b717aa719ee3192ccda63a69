import { TTestAudioWorkletProcessorPostMessageSupportFactory } from '../types';

// Bug #179: Firefox does not allow to transfer any buffer which has been passed to the process() method as an argument.
export const createTestAudioWorkletProcessorPostMessageSupport: TTestAudioWorkletProcessorPostMessageSupportFactory = (
    nativeAudioWorkletNodeConstructor,
    nativeOfflineAudioContextConstructor
) => {
    return async () => {
        // Bug #61: If there is no native AudioWorkletNode it gets faked and therefore it is no problem if the it doesn't exist.
        if (nativeAudioWorkletNodeConstructor === null) {
            return true;
        }

        if (nativeOfflineAudioContextConstructor === null) {
            return false;
        }

        const blob = new Blob(
            ['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'],
            {
                type: 'application/javascript; charset=utf-8'
            }
        );
        // Bug #141: Safari does not support creating an OfflineAudioContext with less than 44100 Hz.
        const offlineAudioContext = new nativeOfflineAudioContextConstructor(1, 128, 44100);
        const url = URL.createObjectURL(blob);

        let isEmittingMessageEvents = false;
        let isEmittingProcessorErrorEvents = false;

        try {
            await offlineAudioContext.audioWorklet.addModule(url);

            const audioWorkletNode = new nativeAudioWorkletNodeConstructor(offlineAudioContext, 'a', { numberOfOutputs: 0 });
            const oscillator = offlineAudioContext.createOscillator();

            audioWorkletNode.port.onmessage = () => (isEmittingMessageEvents = true);
            audioWorkletNode.onprocessorerror = () => (isEmittingProcessorErrorEvents = true);

            oscillator.connect(audioWorkletNode);
            oscillator.start(0);

            await offlineAudioContext.startRendering();

            // Bug #197: Safari does not deliver the messages before the promise returned by startRendering() resolves.
            await new Promise((resolve) => setTimeout(resolve));
        } catch {
            // Ignore errors.
        } finally {
            URL.revokeObjectURL(url);
        }

        return isEmittingMessageEvents && !isEmittingProcessorErrorEvents;
    };
};
