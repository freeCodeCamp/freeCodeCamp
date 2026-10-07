import { IAudioContextOptions } from '../interfaces';

export const isValidLatencyHint = (latencyHint: IAudioContextOptions['latencyHint']) => {
    return (
        latencyHint === undefined ||
        typeof latencyHint === 'number' ||
        (typeof latencyHint === 'string' && (latencyHint === 'balanced' || latencyHint === 'interactive' || latencyHint === 'playback'))
    );
};
