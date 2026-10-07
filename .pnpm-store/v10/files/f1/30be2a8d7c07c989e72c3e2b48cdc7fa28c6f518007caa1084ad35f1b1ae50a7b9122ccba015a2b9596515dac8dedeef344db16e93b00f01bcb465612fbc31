import { TAudioContextState, TContext, TEventHandler } from '../types';
import { IAudioDestinationNode } from './audio-destination-node';
import { IAudioListener } from './audio-listener';
import { IEventTarget } from './event-target';
import { IMinimalBaseAudioContextEventMap } from './minimal-base-audio-context-event-map';
export interface IMinimalBaseAudioContext<T extends TContext> extends IEventTarget<IMinimalBaseAudioContextEventMap> {
    readonly currentTime: number;
    readonly destination: IAudioDestinationNode<T>;
    readonly listener: IAudioListener;
    onstatechange: null | TEventHandler<T>;
    readonly sampleRate: number;
    readonly state: TAudioContextState;
}
//# sourceMappingURL=minimal-base-audio-context.d.ts.map