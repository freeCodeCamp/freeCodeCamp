export const detachArrayBuffer = (arrayBuffer) => {
    const { port1, port2 } = new MessageChannel();
    return new Promise((resolve) => {
        const closeAndResolve = () => {
            port2.onmessage = null;
            port1.close();
            port2.close();
            resolve();
        };
        port2.onmessage = () => closeAndResolve();
        try {
            port1.postMessage(arrayBuffer, [arrayBuffer]);
        }
        catch {
            // Ignore errors.
        }
        finally {
            closeAndResolve();
        }
    });
};
//# sourceMappingURL=detach-array-buffer.js.map