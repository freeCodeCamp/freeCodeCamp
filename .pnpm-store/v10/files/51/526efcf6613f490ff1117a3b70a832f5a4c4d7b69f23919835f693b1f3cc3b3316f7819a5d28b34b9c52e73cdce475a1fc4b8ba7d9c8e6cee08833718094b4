import { DeferredPromise } from '@open-draft/deferred-promise'
import { invariant } from 'outvariant'
import { InterceptorError } from './InterceptorError'

export interface RequestControllerSource {
  passthrough(): void
  respondWith(response: Response): void
  errorWith(reason?: unknown): void
}

export class RequestController {
  static PENDING = 0 as const
  static PASSTHROUGH = 1 as const
  static RESPONSE = 2 as const
  static ERROR = 3 as const

  public readyState: number

  /**
   * A Promise that resolves when this controller handles a request.
   * See `controller.readyState` for more information on the handling result.
   */
  public handled: Promise<void>

  constructor(
    protected readonly request: Request,
    protected readonly source: RequestControllerSource
  ) {
    this.readyState = RequestController.PENDING
    this.handled = new DeferredPromise<void>()
  }

  get #handled() {
    return this.handled as DeferredPromise<void>
  }

  /**
   * Perform this request as-is.
   */
  public async passthrough(): Promise<void> {
    invariant.as(
      InterceptorError,
      this.readyState === RequestController.PENDING,
      'Failed to passthrough the "%s %s" request: the request has already been handled',
      this.request.method,
      this.request.url
    )

    this.readyState = RequestController.PASSTHROUGH
    await this.source.passthrough()
    this.#handled.resolve()
  }

  /**
   * Respond to this request with the given `Response` instance.
   *
   * @example
   * controller.respondWith(new Response())
   * controller.respondWith(Response.json({ id }))
   * controller.respondWith(Response.error())
   */
  public respondWith(response: Response): void {
    invariant.as(
      InterceptorError,
      this.readyState === RequestController.PENDING,
      'Failed to respond to the "%s %s" request with "%d %s": the request has already been handled (%d)',
      this.request.method,
      this.request.url,
      response.status,
      response.statusText || 'OK',
      this.readyState
    )

    this.readyState = RequestController.RESPONSE
    this.#handled.resolve()

    /**
     * @note Although `source.respondWith()` is potentially asynchronous,
     * do NOT await it for backward-compatibility. Awaiting it will short-circuit
     * the request listener invocation as soon as a listener responds to a request.
     * Ideally, that's what we want, but that's not what we promise the user.
     */
    this.source.respondWith(response)
  }

  /**
   * Error this request with the given reason.
   *
   * @example
   * controller.errorWith()
   * controller.errorWith(new Error('Oops!'))
   * controller.errorWith({ message: 'Oops!'})
   */
  public errorWith(reason?: unknown): void {
    invariant.as(
      InterceptorError,
      this.readyState === RequestController.PENDING,
      'Failed to error the "%s %s" request with "%s": the request has already been handled (%d)',
      this.request.method,
      this.request.url,
      reason?.toString(),
      this.readyState
    )

    this.readyState = RequestController.ERROR
    this.source.errorWith(reason)
    this.#handled.resolve()
  }
}
