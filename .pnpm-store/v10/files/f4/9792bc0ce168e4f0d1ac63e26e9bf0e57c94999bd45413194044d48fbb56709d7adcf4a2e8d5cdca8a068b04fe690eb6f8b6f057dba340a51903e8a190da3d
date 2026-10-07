import { TIsDCCurveFunction } from '../types';

export const isDCCurve: TIsDCCurveFunction = (curve) => {
    if (curve === null) {
        return false;
    }

    const length = curve.length;

    if (length % 2 !== 0) {
        return curve[Math.floor(length / 2)] !== 0;
    }

    return curve[length / 2 - 1] + curve[length / 2] !== 0;
};
