import { Logger } from "@open-draft/logger";
import { Emitter, Listener } from "strict-event-emitter";

//#region src/Interceptor.d.ts
type InterceptorEventMap = Record<string, any>;
type InterceptorSubscription = () => void;
/**
 * Request header name to detect when a single request
 * is being handled by nested interceptors (XHR -> ClientRequest).
 * Obscure by design to prevent collisions with user-defined headers.
 * Ideally, come up with the Interceptor-level mechanism for this.
 * @see https://github.com/mswjs/interceptors/issues/378
 */
declare const INTERNAL_REQUEST_ID_HEADER_NAME = "x-interceptors-internal-request-id";
declare function getGlobalSymbol<V>(symbol: Symbol): V | undefined;
declare function deleteGlobalSymbol(symbol: Symbol): void;
declare enum InterceptorReadyState {
  INACTIVE = "INACTIVE",
  APPLYING = "APPLYING",
  APPLIED = "APPLIED",
  DISPOSING = "DISPOSING",
  DISPOSED = "DISPOSED",
}
type ExtractEventNames<Events extends Record<string, any>> = Events extends Record<infer EventName, any> ? EventName : never;
declare class Interceptor<Events extends InterceptorEventMap> {
  private readonly symbol;
  protected emitter: Emitter<Events>;
  protected subscriptions: Array<InterceptorSubscription>;
  protected logger: Logger;
  readyState: InterceptorReadyState;
  constructor(symbol: symbol);
  /**
   * Determine if this interceptor can be applied
   * in the current environment.
   */
  protected checkEnvironment(): boolean;
  /**
   * Apply this interceptor to the current process.
   * Returns an already running interceptor instance if it's present.
   */
  apply(): void;
  /**
   * Setup the module augments and stubs necessary for this interceptor.
   * This method is not run if there's a running interceptor instance
   * to prevent instantiating an interceptor multiple times.
   */
  protected setup(): void;
  /**
   * Listen to the interceptor's public events.
   */
  on<EventName extends ExtractEventNames<Events>>(event: EventName, listener: Listener<Events[EventName]>): this;
  once<EventName extends ExtractEventNames<Events>>(event: EventName, listener: Listener<Events[EventName]>): this;
  off<EventName extends ExtractEventNames<Events>>(event: EventName, listener: Listener<Events[EventName]>): this;
  removeAllListeners<EventName extends ExtractEventNames<Events>>(event?: EventName): this;
  /**
   * Disposes of any side-effects this interceptor has introduced.
   */
  dispose(): void;
  private getInstance;
  private setInstance;
  private clearInstance;
}
//#endregion
export { InterceptorReadyState as a, getGlobalSymbol as c, InterceptorEventMap as i, INTERNAL_REQUEST_ID_HEADER_NAME as n, InterceptorSubscription as o, Interceptor as r, deleteGlobalSymbol as s, ExtractEventNames as t };
//# sourceMappingURL=Interceptor-Deczogc8.d.cts.map