import { TNativeAudioNode } from './native-audio-node';

export type TMonitorConnectionsFunction = <T extends TNativeAudioNode>(
    nativeAudioNode: T,
    whenConnected: () => void,
    whenDisconnected: () => void
) => T;
