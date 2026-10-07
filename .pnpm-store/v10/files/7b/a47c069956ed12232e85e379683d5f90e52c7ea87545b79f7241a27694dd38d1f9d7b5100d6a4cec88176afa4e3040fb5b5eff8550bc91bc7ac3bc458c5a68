import { Emitter, TypedEvent, type TypedListenerOptions } from 'rettime'
import {
  type AnyNetworkFrame,
  type ExtractFrameEvents,
} from '../frames/network-frame'

class NetworkFrameEvent<
  DataType = void,
  ReturnType = void,
  EventType extends string = string,
> extends TypedEvent<DataType, ReturnType, EventType> {
  public frame: AnyNetworkFrame

  constructor(type: string, frame: AnyNetworkFrame) {
    super(...([type, {}] as any))
    this.frame = frame
  }
}

type NetworkSourceEventMap<Frame extends AnyNetworkFrame> = {
  frame: NetworkFrameEvent<Frame>
}

export type ExtractSourceEvents<Source> =
  Source extends NetworkSource<infer Frame> ? ExtractFrameEvents<Frame> : never

export abstract class NetworkSource<
  Frame extends AnyNetworkFrame = AnyNetworkFrame,
> {
  protected emitter: Emitter<NetworkSourceEventMap<Frame>>

  constructor() {
    this.emitter = new Emitter()
  }

  public abstract enable(): unknown | Promise<unknown>

  public async queue(frame: Frame): Promise<void> {
    await this.emitter.emitAsPromise(
      // @ts-expect-error Trouble handling a conditional type parameter.
      new NetworkFrameEvent('frame', frame),
    )
  }

  public on<Type extends keyof NetworkSourceEventMap<Frame>>(
    type: Type,
    listener: Emitter.Listener<typeof this.emitter, Type>,
    options?: TypedListenerOptions,
  ): void {
    this.emitter.on(type, listener, options)
  }

  public disable(): void | Promise<void> {
    this.emitter.removeAllListeners()
  }
}
