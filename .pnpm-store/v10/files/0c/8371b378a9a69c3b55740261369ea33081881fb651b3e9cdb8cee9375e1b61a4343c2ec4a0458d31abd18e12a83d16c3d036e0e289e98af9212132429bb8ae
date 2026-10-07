import { Logger } from "@open-draft/logger";
import { Emitter, Listener } from "strict-event-emitter";

//#region src/RequestController.d.ts
interface RequestControllerSource {
  passthrough(): void;
  respondWith(response: Response): void;
  errorWith(reason?: unknown): void;
}
declare class RequestController {
  #private;
  protected readonly request: Request;
  protected readonly source: RequestControllerSource;
  static PENDING: 0;
  static PASSTHROUGH: 1;
  static RESPONSE: 2;
  static ERROR: 3;
  readyState: number;
  /**
   * A Promise that resolves when this controller handles a request.
   * See `controller.readyState` for more information on the handling result.
   */
  handled: Promise<void>;
  constructor(request: Request, source: RequestControllerSource);
  /**
   * Perform this request as-is.
   */
  passthrough(): Promise<void>;
  /**
   * Respond to this request with the given `Response` instance.
   *
   * @example
   * controller.respondWith(new Response())
   * controller.respondWith(Response.json({ id }))
   * controller.respondWith(Response.error())
   */
  respondWith(response: Response): void;
  /**
   * Error this request with the given reason.
   *
   * @example
   * controller.errorWith()
   * controller.errorWith(new Error('Oops!'))
   * controller.errorWith({ message: 'Oops!'})
   */
  errorWith(reason?: unknown): void;
}
//#endregion
//#region src/glossary.d.ts
type RequestCredentials = 'omit' | 'include' | 'same-origin';
type HttpRequestEventMap = {
  request: [args: {
    request: Request;
    requestId: string;
    controller: RequestController;
  }];
  response: [args: {
    response: Response;
    isMockedResponse: boolean;
    request: Request;
    requestId: string;
  }];
  unhandledException: [args: {
    error: unknown;
    request: Request;
    requestId: string;
    controller: RequestController;
  }];
};
//#endregion
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
export { InterceptorReadyState as a, getGlobalSymbol as c, RequestController as d, RequestControllerSource as f, InterceptorEventMap as i, HttpRequestEventMap as l, INTERNAL_REQUEST_ID_HEADER_NAME as n, InterceptorSubscription as o, Interceptor as r, deleteGlobalSymbol as s, ExtractEventNames as t, RequestCredentials as u };
//# sourceMappingURL=Interceptor-soD-WpQO.d.mts.map