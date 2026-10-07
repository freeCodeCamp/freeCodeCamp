import { IPeriodicWave } from '../interfaces';
import { TGetNativeContextFunction } from './get-native-context-function';
import { TNativePeriodicWaveFactory } from './native-periodic-wave-factory';
import { TPeriodicWaveConstructor } from './periodic-wave-constructor';
import { TSanitizePeriodicWaveOptionsFunction } from './sanitize-periodic-wave-options-function';

export type TPeriodicWaveConstructorFactory = (
    createNativePeriodicWave: TNativePeriodicWaveFactory,
    getNativeContext: TGetNativeContextFunction,
    periodicWaveStore: WeakSet<IPeriodicWave>,
    sanitizePeriodicWaveOptions: TSanitizePeriodicWaveOptionsFunction
) => TPeriodicWaveConstructor;
