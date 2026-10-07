import { TNativePeriodicWaveFactoryFactory } from '../types';

export const createNativePeriodicWaveFactory: TNativePeriodicWaveFactoryFactory = (createIndexSizeError) => {
    return (nativeContext, { disableNormalization, imag, real }) => {
        // Bug #180: Safari does not allow to use ordinary arrays.
        const convertedImag = imag instanceof Float32Array ? imag : new Float32Array(imag);
        const convertedReal = real instanceof Float32Array ? real : new Float32Array(real);

        const nativePeriodicWave = nativeContext.createPeriodicWave(convertedReal, convertedImag, { disableNormalization });

        // Bug #181: Safari does not throw an IndexSizeError so far if the given arrays have less than two values.
        if (Array.from(imag).length < 2) {
            throw createIndexSizeError();
        }

        return nativePeriodicWave;
    };
};
