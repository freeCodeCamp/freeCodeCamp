export const createAddActiveInputConnectionToAudioNode = (insertElementInSet) => {
    return (activeInputs, source, [output, input, eventListener], ignoreDuplicates) => {
        insertElementInSet(activeInputs[input], [source, output, eventListener], (activeInputConnection) => activeInputConnection[0] === source && activeInputConnection[1] === output, ignoreDuplicates);
    };
};
//# sourceMappingURL=add-active-input-connection-to-audio-node.js.map