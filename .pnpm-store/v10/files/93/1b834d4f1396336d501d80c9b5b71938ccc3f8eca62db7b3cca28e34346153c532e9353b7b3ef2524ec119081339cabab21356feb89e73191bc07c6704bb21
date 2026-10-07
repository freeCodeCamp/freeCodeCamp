import { IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces';
import { TContext } from './context';
import { TNativeAudioContext } from './native-audio-context';
import { TNativeOfflineAudioContext } from './native-offline-audio-context';

export type TGetNativeContextFunction = <T extends TContext>(
    context: T
) => T extends IMinimalOfflineAudioContext | IOfflineAudioContext ? TNativeOfflineAudioContext : TNativeAudioContext;
