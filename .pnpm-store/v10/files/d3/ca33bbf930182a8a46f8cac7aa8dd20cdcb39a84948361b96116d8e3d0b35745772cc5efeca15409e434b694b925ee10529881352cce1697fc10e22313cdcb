import { interpolateValue } from './interpolate-value';
export const getValueCurveValueAtTime = (time, { duration, startTime, values }) => {
    const theoreticIndex = ((time - startTime) / duration) * (values.length - 1);
    return interpolateValue(values, theoreticIndex);
};
//# sourceMappingURL=get-value-curve-value-at-time.js.map