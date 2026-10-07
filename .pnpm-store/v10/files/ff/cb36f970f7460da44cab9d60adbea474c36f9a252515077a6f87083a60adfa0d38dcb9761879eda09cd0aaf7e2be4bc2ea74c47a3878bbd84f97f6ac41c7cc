import { TContext, TEventHandler } from '../types';
import { IAudioNode } from './audio-node';
import { IAudioScheduledSourceNodeEventMap } from './audio-scheduled-source-node-event-map';

export interface IAudioScheduledSourceNode<T extends TContext> extends IAudioNode<T, IAudioScheduledSourceNodeEventMap> {
    onended: null | TEventHandler<this>;

    start(when?: number): void;

    stop(when?: number): void;
}
