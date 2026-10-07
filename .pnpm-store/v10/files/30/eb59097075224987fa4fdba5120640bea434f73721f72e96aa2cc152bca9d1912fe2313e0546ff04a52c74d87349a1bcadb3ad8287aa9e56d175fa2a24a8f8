import { TSanitizePeriodicWaveOptionsFunction } from '../types';

export const sanitizePeriodicWaveOptions: TSanitizePeriodicWaveOptionsFunction = (options) => {
    const { imag, real } = options;

    if (imag === undefined) {
        if (real === undefined) {
            return { ...options, imag: [0, 0], real: [0, 0] };
        }

        return { ...options, imag: Array.from(real, () => 0), real };
    }

    if (real === undefined) {
        return { ...options, imag, real: Array.from(imag, () => 0) };
    }

    return { ...options, imag, real };
};
