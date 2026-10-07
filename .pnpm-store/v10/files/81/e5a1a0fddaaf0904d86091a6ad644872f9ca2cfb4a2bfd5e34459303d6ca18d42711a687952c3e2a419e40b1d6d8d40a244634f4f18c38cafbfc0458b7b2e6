import { IncomingMessage } from 'node:http'

type Forwarded = (req: IncomingMessage) => string[]

declare namespace forwarded {
  export const forwarded: Forwarded
  export { forwarded as default }
}

/**
 * Get all addresses in the request used in the `X-Forwarded-For` header.
 */
declare function forwarded (...params: Parameters<Forwarded>): ReturnType<Forwarded>
export = forwarded
