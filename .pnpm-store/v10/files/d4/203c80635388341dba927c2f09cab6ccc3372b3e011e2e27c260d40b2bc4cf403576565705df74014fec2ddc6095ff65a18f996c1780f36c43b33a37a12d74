import { Emitter, TypedEvent, TypedListenerOptions } from 'rettime';
import { A as AnyNetworkFrame, E as ExtractFrameEvents } from '../../on-unhandled-frame-Cr1KOZ0I.mjs';
import '../handlers-controller.mjs';
import '../../HttpResponse-CxHR1nNN.mjs';
import '@mswjs/interceptors';
import '../../utils/internal/isIterable.mjs';
import '../../typeUtils.mjs';
import 'graphql';
import '../../utils/matching/matchRequestUrl.mjs';
import '../../handlers/WebSocketHandler.mjs';
import 'strict-event-emitter';
import '@mswjs/interceptors/WebSocket';

declare class NetworkFrameEvent<DataType = void, ReturnType = void, EventType extends string = string> extends TypedEvent<DataType, ReturnType, EventType> {
    frame: AnyNetworkFrame;
    constructor(type: string, frame: AnyNetworkFrame);
}
type NetworkSourceEventMap<Frame extends AnyNetworkFrame> = {
    frame: NetworkFrameEvent<Frame>;
};
type ExtractSourceEvents<Source> = Source extends NetworkSource<infer Frame> ? ExtractFrameEvents<Frame> : never;
declare abstract class NetworkSource<Frame extends AnyNetworkFrame = AnyNetworkFrame> {
    protected emitter: Emitter<NetworkSourceEventMap<Frame>>;
    constructor();
    abstract enable(): unknown | Promise<unknown>;
    queue(frame: Frame): Promise<void>;
    on<Type extends keyof NetworkSourceEventMap<Frame>>(type: Type, listener: Emitter.Listener<typeof this.emitter, Type>, options?: TypedListenerOptions): void;
    disable(): void | Promise<void>;
}

export { type ExtractSourceEvents, NetworkSource };
