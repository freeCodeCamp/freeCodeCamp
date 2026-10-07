import { TNativeGainNodeFactory } from './native-gain-node-factory';
import { TNativeOfflineAudioContextConstructor } from './native-offline-audio-context-constructor';

export type TTestOfflineAudioContextCurrentTimeSupportFactory = (
    createNativeGainNode: TNativeGainNodeFactory,
    nativeOfflineAudioContextConstructor: null | TNativeOfflineAudioContextConstructor
) => () => Promise<boolean>;
