// Safari at version 11 did not support transferables.
export const testTransferablesSupport = () => new Promise((resolve) => {
    const arrayBuffer = new ArrayBuffer(0);
    const { port1, port2 } = new MessageChannel();
    port1.onmessage = ({ data }) => resolve(data !== null);
    port2.postMessage(arrayBuffer, [arrayBuffer]);
});
//# sourceMappingURL=test-transferables-support.js.map