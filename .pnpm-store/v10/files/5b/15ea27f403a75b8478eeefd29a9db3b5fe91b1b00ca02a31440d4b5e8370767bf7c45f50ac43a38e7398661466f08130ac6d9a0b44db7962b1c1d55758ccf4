import { createInvalidAccessError } from '../factories/invalid-access-error';
export const wrapIIRFilterNodeGetFrequencyResponseMethod = (nativeIIRFilterNode) => {
    nativeIIRFilterNode.getFrequencyResponse = ((getFrequencyResponse) => {
        return (frequencyHz, magResponse, phaseResponse) => {
            if (frequencyHz.length !== magResponse.length || magResponse.length !== phaseResponse.length) {
                throw createInvalidAccessError();
            }
            return getFrequencyResponse.call(nativeIIRFilterNode, frequencyHz, magResponse, phaseResponse);
        };
    })(nativeIIRFilterNode.getFrequencyResponse);
};
//# sourceMappingURL=wrap-iir-filter-node-get-frequency-response-method.js.map