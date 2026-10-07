export const visitEachAudioNodeOnce = (cycles, visitor) => {
    const counts = new Map();
    for (const cycle of cycles) {
        for (const audioNode of cycle) {
            const count = counts.get(audioNode);
            counts.set(audioNode, count === undefined ? 1 : count + 1);
        }
    }
    counts.forEach((count, audioNode) => visitor(audioNode, count));
};
//# sourceMappingURL=visit-each-audio-node-once.js.map