import { IMinimalBaseAudioContext } from '../interfaces';
import { TContext } from './context';
import { TNativeContext } from './native-context';

export type TMinimalBaseAudioContextConstructor = new <T extends TContext>(
    nativeContext: TNativeContext,
    numberOfChannels: number
) => IMinimalBaseAudioContext<T>;
