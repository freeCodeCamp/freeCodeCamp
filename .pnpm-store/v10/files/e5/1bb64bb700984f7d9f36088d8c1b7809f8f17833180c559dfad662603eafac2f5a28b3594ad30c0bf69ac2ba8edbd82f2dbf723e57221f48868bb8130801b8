import { Emitter, type DefaultEventMap } from 'rettime'
import type { AnyHandler, HandlersController } from '../handlers-controller'
import type { UnhandledFrameHandle } from '../on-unhandled-frame'

export type AnyNetworkFrame = NetworkFrame<string, unknown, any>

export type ExtractFrameEvents<Frame> =
  Frame extends NetworkFrame<any, any, infer Events> ? Events : never

export interface NetworkFrameResolutionContext {
  baseUrl?: string | URL
  quiet?: boolean
}

/**
 * The base for the network frames. Extend this abstract class
 * to implement custom network frames.
 */
export abstract class NetworkFrame<
  Protocol extends string,
  Data,
  Events extends DefaultEventMap,
> {
  public events: Emitter<Events>

  constructor(
    public readonly protocol: Protocol,
    public readonly data: Data,
  ) {
    this.events = new Emitter()
  }

  public abstract getHandlers(controller: HandlersController): Array<AnyHandler>

  /**
   * Resolve the current frame against the given list of handlers.
   * Optionally, use a custom resolution context to control behaviors
   * like `baseUrl`.
   *
   * Returns `true` if the frame was handled, `false` if it wasn't, and `null`
   * if its handling was skipped (e.g. the frame was bypassed).
   */
  public abstract resolve(
    handlers: Array<AnyHandler>,
    onUnhandledFrame: UnhandledFrameHandle,
    resolutionContext?: NetworkFrameResolutionContext,
  ): Promise<boolean | null>

  /**
   * Perform this network frame as-is.
   */
  public abstract passthrough(): void

  /**
   * Error the underling network frame.
   * @param reason The reason for the error.
   */
  public abstract errorWith(reason?: unknown): void

  /**
   * Get a message to be used when this frame is unhandled.
   */
  public abstract getUnhandledMessage(): Promise<string>
}
