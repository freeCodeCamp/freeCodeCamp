import { interpolateValue } from './interpolate-value';
export const truncateValueCurve = (values, originalDuration, targetDuration) => {
    const length = values.length;
    const truncatedLength = Math.max(1, Math.floor((targetDuration / originalDuration) * length)) + 1;
    const truncatedValues = values instanceof Float32Array ? new Float32Array(truncatedLength) : values.slice(0, truncatedLength);
    for (let i = 0; i < truncatedLength; i += 1) {
        const time = (i / (truncatedLength - 1)) * targetDuration;
        const theoreticIndex = (time / originalDuration) * (length - 1);
        truncatedValues[i] = interpolateValue(values, theoreticIndex);
    }
    return truncatedValues;
};
//# sourceMappingURL=truncate-value-curve.js.map