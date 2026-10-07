import { TAudioNodeOutputConnection, TContext, TOutputConnection } from '../types';
import { isAudioNode } from './audio-node';

export const isAudioNodeOutputConnection = <T extends TContext>(
    outputConnection: TOutputConnection<T>
): outputConnection is TAudioNodeOutputConnection<T> => {
    return isAudioNode(outputConnection[0]);
};
