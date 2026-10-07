import type { RequestController } from './RequestController'

/**
 * @note Export `RequestController` as a type only.
 * It's never meant to be created in the userland.
 */
export type { RequestController }

export type RequestCredentials = 'omit' | 'include' | 'same-origin'

export type HttpRequestEventMap = {
  request: [
    args: {
      request: Request
      requestId: string
      controller: RequestController
    },
  ]
  response: [
    args: {
      response: Response
      isMockedResponse: boolean
      request: Request
      requestId: string
    },
  ]
  unhandledException: [
    args: {
      error: unknown
      request: Request
      requestId: string
      controller: RequestController
    },
  ]
}
