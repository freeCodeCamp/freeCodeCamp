export const createAddPassiveInputConnectionToAudioNode = (insertElementInSet) => {
    return (passiveInputs, input, [source, output, eventListener], ignoreDuplicates) => {
        const passiveInputConnections = passiveInputs.get(source);
        if (passiveInputConnections === undefined) {
            passiveInputs.set(source, new Set([[output, input, eventListener]]));
        }
        else {
            insertElementInSet(passiveInputConnections, [output, input, eventListener], (passiveInputConnection) => passiveInputConnection[0] === output && passiveInputConnection[1] === input, ignoreDuplicates);
        }
    };
};
//# sourceMappingURL=add-passive-input-connection-to-audio-node.js.map