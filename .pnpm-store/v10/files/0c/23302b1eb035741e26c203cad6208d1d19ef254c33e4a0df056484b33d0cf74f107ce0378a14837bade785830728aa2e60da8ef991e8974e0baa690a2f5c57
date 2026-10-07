import { getValueForKey } from './get-value-for-key';
import { pickElementFromSet } from './pick-element-from-set';
export const deletePassiveInputConnectionToAudioParam = (passiveInputs, source, output) => {
    const passiveInputConnections = getValueForKey(passiveInputs, source);
    const matchingConnection = pickElementFromSet(passiveInputConnections, (passiveInputConnection) => passiveInputConnection[0] === output);
    if (passiveInputConnections.size === 0) {
        passiveInputs.delete(source);
    }
    return matchingConnection;
};
//# sourceMappingURL=delete-passive-input-connection-to-audio-param.js.map