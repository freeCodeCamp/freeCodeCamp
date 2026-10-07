export const wrapEventListener = (target, eventListener) => {
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
//# sourceMappingURL=wrap-event-listener.js.map