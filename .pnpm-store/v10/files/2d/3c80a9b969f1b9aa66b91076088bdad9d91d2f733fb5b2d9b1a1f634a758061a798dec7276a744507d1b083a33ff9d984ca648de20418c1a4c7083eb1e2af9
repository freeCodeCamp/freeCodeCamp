import { IAudioNode } from '../interfaces';
import { TContext } from '../types';

export const visitEachAudioNodeOnce = <T extends TContext>(
    cycles: IAudioNode<T>[][],
    visitor: (audioNode: IAudioNode<T>, count: number) => void
): void => {
    const counts = new Map<IAudioNode<T>, number>();

    for (const cycle of cycles) {
        for (const audioNode of cycle) {
            const count = counts.get(audioNode);

            counts.set(audioNode, count === undefined ? 1 : count + 1);
        }
    }

    counts.forEach((count, audioNode) => visitor(audioNode, count));
};
