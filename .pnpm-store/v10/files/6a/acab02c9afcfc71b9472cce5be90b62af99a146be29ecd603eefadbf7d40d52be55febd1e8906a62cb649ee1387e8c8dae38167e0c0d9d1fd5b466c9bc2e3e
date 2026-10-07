const DEFAULT_OPTIONS = {
    disableNormalization: false
};
export const createPeriodicWaveConstructor = (createNativePeriodicWave, getNativeContext, periodicWaveStore, sanitizePeriodicWaveOptions) => {
    return class PeriodicWave {
        constructor(context, options) {
            const nativeContext = getNativeContext(context);
            const mergedOptions = sanitizePeriodicWaveOptions({ ...DEFAULT_OPTIONS, ...options });
            const periodicWave = createNativePeriodicWave(nativeContext, mergedOptions);
            periodicWaveStore.add(periodicWave);
            // This does violate all good pratices but it is used here to simplify the handling of periodic waves.
            return periodicWave;
        }
        static [Symbol.hasInstance](instance) {
            return ((instance !== null && typeof instance === 'object' && Object.getPrototypeOf(instance) === PeriodicWave.prototype) ||
                periodicWaveStore.has(instance));
        }
    };
};
//# sourceMappingURL=periodic-wave-constructor.js.map