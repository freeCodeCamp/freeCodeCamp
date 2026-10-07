/// <reference types="node" />

import { IncomingMessage } from 'node:http'

type FastifyProxyAddr = typeof proxyaddr

declare function proxyaddr (req: IncomingMessage, trust: proxyaddr.Address | proxyaddr.Address[] | ((addr: string, i: number) => boolean)): string

declare namespace proxyaddr {
  export function all (req: IncomingMessage, trust?: Address | Address[] | ((addr: string, i: number) => boolean)): string[]
  export function compile (val: Address | Address[]): (addr: string, i: number) => boolean

  export type Address = 'loopback' | 'linklocal' | 'uniquelocal' | string

  export const proxyAddr: FastifyProxyAddr
  export { proxyAddr as default }
}
export = proxyaddr
