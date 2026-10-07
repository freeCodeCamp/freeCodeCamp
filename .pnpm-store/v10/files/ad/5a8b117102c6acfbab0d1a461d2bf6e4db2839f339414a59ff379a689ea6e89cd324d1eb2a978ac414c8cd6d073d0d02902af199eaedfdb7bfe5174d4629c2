import { TAddSilentConnectionFunction } from './add-silent-connection-function';
import { TCacheTestResultFunction } from './cache-test-result-function';
import { TNativeContext } from './native-context';
import { TNativeOscillatorNodeFactory } from './native-oscillator-node-factory';
import { TWrapAudioScheduledSourceNodeStopMethodConsecutiveCallsFunction } from './wrap-audio-scheduled-source-node-stop-method-consecutive-calls-function';

export type TNativeOscillatorNodeFactoryFactory = (
    addSilentConnection: TAddSilentConnectionFunction,
    cacheTestResult: TCacheTestResultFunction,
    testAudioScheduledSourceNodeStartMethodNegativeParametersSupport: (nativeContext: TNativeContext) => boolean,
    testAudioScheduledSourceNodeStopMethodConsecutiveCallsSupport: (nativeContext: TNativeContext) => boolean,
    testAudioScheduledSourceNodeStopMethodNegativeParametersSupport: (nativeContext: TNativeContext) => boolean,
    wrapAudioScheduledSourceNodeStopMethodConsecutiveCalls: TWrapAudioScheduledSourceNodeStopMethodConsecutiveCallsFunction
) => TNativeOscillatorNodeFactory;
