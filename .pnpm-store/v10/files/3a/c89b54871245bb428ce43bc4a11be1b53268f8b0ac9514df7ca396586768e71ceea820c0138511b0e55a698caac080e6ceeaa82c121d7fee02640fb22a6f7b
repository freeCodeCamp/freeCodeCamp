import { TCacheTestResultFunction } from './cache-test-result-function';
import { TCreateNativeOfflineAudioContextFunction } from './create-native-offline-audio-context-function';
import { TInvalidStateErrorFactory } from './invalid-state-error-factory';
import { TMinimalBaseAudioContextConstructor } from './minimal-base-audio-context-constructor';
import { TMinimalOfflineAudioContextConstructor } from './minimal-offline-audio-context-constructor';
import { TStartRenderingFunction } from './start-rendering-function';

export type TMinimalOfflineAudioContextConstructorFactory = (
    cacheTestResult: TCacheTestResultFunction,
    createInvalidStateError: TInvalidStateErrorFactory,
    createNativeOfflineAudioContext: TCreateNativeOfflineAudioContextFunction,
    minimalBaseAudioContextConstructor: TMinimalBaseAudioContextConstructor,
    startRendering: TStartRenderingFunction
) => TMinimalOfflineAudioContextConstructor;
