import { getValueForKey } from './get-value-for-key';
import { pickElementFromSet } from './pick-element-from-set';
export const deletePassiveInputConnectionToAudioNode = (passiveInputs, source, output, input) => {
    const passiveInputConnections = getValueForKey(passiveInputs, source);
    const matchingConnection = pickElementFromSet(passiveInputConnections, (passiveInputConnection) => passiveInputConnection[0] === output && passiveInputConnection[1] === input);
    if (passiveInputConnections.size === 0) {
        passiveInputs.delete(source);
    }
    return matchingConnection;
};
//# sourceMappingURL=delete-passive-input-connection-to-audio-node.js.map