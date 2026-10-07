/**
 * Chrome version 66 and 67 did not call the process() function of an AudioWorkletProcessor if it had no outputs. AudioWorklet support was
 * enabled by default in version 66.
 */
export const createTestAudioWorkletProcessorNoOutputsSupport = (nativeAudioWorkletNodeConstructor, nativeOfflineAudioContextConstructor) => {
    return async () => {
        // Bug #61: If there is no native AudioWorkletNode it gets faked and therefore it is no problem if the it doesn't exist.
        if (nativeAudioWorkletNodeConstructor === null) {
            return true;
        }
        if (nativeOfflineAudioContextConstructor === null) {
            return false;
        }
        const blob = new Blob([
            'let c,p;class A extends AudioWorkletProcessor{constructor(){super();this.port.onmessage=(e)=>{p=e.data;p.onmessage=()=>{p.postMessage(c);p.close()};this.port.postMessage(0)}}process(){c=1}}registerProcessor("a",A)'
        ], {
            type: 'application/javascript; charset=utf-8'
        });
        const messageChannel = new MessageChannel();
        // Bug #141: Safari does not support creating an OfflineAudioContext with less than 44100 Hz.
        const offlineAudioContext = new nativeOfflineAudioContextConstructor(1, 128, 44100);
        const url = URL.createObjectURL(blob);
        let isCallingProcess = false;
        try {
            await offlineAudioContext.audioWorklet.addModule(url);
            const audioWorkletNode = new nativeAudioWorkletNodeConstructor(offlineAudioContext, 'a', { numberOfOutputs: 0 });
            const oscillator = offlineAudioContext.createOscillator();
            await new Promise((resolve) => {
                audioWorkletNode.port.onmessage = () => resolve();
                audioWorkletNode.port.postMessage(messageChannel.port2, [messageChannel.port2]);
            });
            audioWorkletNode.port.onmessage = () => (isCallingProcess = true);
            oscillator.connect(audioWorkletNode);
            oscillator.start(0);
            await offlineAudioContext.startRendering();
            isCallingProcess = await new Promise((resolve) => {
                messageChannel.port1.onmessage = ({ data }) => resolve(data === 1);
                messageChannel.port1.postMessage(0);
            });
        }
        catch {
            // Ignore errors.
        }
        finally {
            messageChannel.port1.close();
            URL.revokeObjectURL(url);
        }
        return isCallingProcess;
    };
};
//# sourceMappingURL=test-audio-worklet-processor-no-outputs-support.js.map