import { isAudioNode } from '../guards/audio-node';
import { isDelayNode } from '../guards/delay-node';
import { IAudioNode, IAudioParam } from '../interfaces';
import { TContext, TDetectCyclesFactory } from '../types';

export const createDetectCycles: TDetectCyclesFactory = (audioParamAudioNodeStore, getAudioNodeConnections, getValueForKey) => {
    return function detectCycles<T extends TContext>(chain: IAudioNode<T>[], nextLink: IAudioNode<T> | IAudioParam): IAudioNode<T>[][] {
        const audioNode = isAudioNode(nextLink) ? nextLink : <IAudioNode<T>>getValueForKey(audioParamAudioNodeStore, nextLink);

        if (isDelayNode(audioNode)) {
            return [];
        }

        if (chain[0] === audioNode) {
            return [chain];
        }

        if (chain.includes(audioNode)) {
            return [];
        }

        const { outputs } = getAudioNodeConnections(audioNode);

        return Array.from(outputs)
            .map((outputConnection) => detectCycles([...chain, audioNode], outputConnection[0]))
            .reduce((mergedCycles, nestedCycles) => mergedCycles.concat(nestedCycles), []);
    };
};
