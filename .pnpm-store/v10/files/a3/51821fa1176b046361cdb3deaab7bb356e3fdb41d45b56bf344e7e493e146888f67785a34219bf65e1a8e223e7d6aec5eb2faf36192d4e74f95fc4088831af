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
export { RequestControllerSource as i, RequestCredentials as n, RequestController as r, HttpRequestEventMap as t };
//# sourceMappingURL=glossary-nkHWcwvY.d.mts.map