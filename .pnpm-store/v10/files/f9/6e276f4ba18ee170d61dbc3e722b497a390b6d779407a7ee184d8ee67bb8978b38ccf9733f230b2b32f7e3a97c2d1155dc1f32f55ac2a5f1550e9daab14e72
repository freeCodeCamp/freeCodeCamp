import { TChannelCountMode, TChannelInterpretation, TContext } from '../types';
import { IAudioParam } from './audio-param';
import { IEventTarget } from './event-target';
export interface IAudioNode<T extends TContext, EventMap extends Record<string, Event> = {}> extends IEventTarget<EventMap> {
    channelCount: number;
    channelCountMode: TChannelCountMode;
    channelInterpretation: TChannelInterpretation;
    readonly context: T;
    readonly numberOfInputs: number;
    readonly numberOfOutputs: number;
    connect<U extends TContext, OtherEventMap extends Record<string, Event>, V extends IAudioNode<U, OtherEventMap>>(destinationNode: V, output?: number, input?: number): V;
    connect(destinationParam: IAudioParam, output?: number): void;
    disconnect(output?: number): void;
    disconnect<U extends TContext, OtherEventMap extends Record<string, Event>>(destinationNode: IAudioNode<U, OtherEventMap>, output?: number, input?: number): void;
    disconnect(destinationParam: IAudioParam, output?: number): void;
}
//# sourceMappingURL=audio-node.d.ts.map