import { TWrapEventListenerFunction } from '../types';

export const wrapEventListener: TWrapEventListenerFunction = (target, eventListener) => {
    return (event) => {
        const descriptor = { value: target };

        Object.defineProperties(event, {
            currentTarget: descriptor,
            target: descriptor
        });

        if (typeof eventListener === 'function') {
            return eventListener.call(target, event);
        }

        return eventListener.handleEvent.call(target, event);
    };
};
