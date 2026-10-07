import { IAudioNode } from '../interfaces';
import { TActiveInputConnection, TContext } from '../types';

export const deleteActiveInputConnection = <T extends TContext>(
    activeInputConnections: Set<TActiveInputConnection<T>>,
    source: IAudioNode<T>,
    output: number
): null | TActiveInputConnection<T> => {
    for (const activeInputConnection of activeInputConnections) {
        if (activeInputConnection[0] === source && activeInputConnection[1] === output) {
            activeInputConnections.delete(activeInputConnection);

            return activeInputConnection;
        }
    }

    return null;
};
