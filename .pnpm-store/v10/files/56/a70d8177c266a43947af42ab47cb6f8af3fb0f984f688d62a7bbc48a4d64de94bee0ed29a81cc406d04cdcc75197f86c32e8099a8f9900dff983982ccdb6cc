import { TTestMediaStreamAudioSourceNodeMediaStreamWithoutAudioTrackSupportFactory } from '../types';

// Firefox up to version 68 did not throw an error when creating a MediaStreamAudioSourceNode with a mediaStream that had no audio track.
export const createTestMediaStreamAudioSourceNodeMediaStreamWithoutAudioTrackSupport: TTestMediaStreamAudioSourceNodeMediaStreamWithoutAudioTrackSupportFactory =
    (nativeAudioContextConstructor) => {
        return () => {
            if (nativeAudioContextConstructor === null) {
                return false;
            }

            const audioContext = new nativeAudioContextConstructor();

            try {
                audioContext.createMediaStreamSource(new MediaStream());

                return false;
            } catch (err) {
                return true;
            } finally {
                audioContext.close();
            }
        };
    };
