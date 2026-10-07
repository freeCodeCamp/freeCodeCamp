import { RawServerBase, RawServerDefault, RawReplyDefaultExpression, RawRequestDefaultExpression } from './utils'
import * as http from 'node:http'
import * as https from 'node:https'
import * as http2 from 'node:http2'

export type FastifyServerFactoryHandler<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>
> =
RawServer extends http.Server | https.Server ?
    (request: http.IncomingMessage & RawRequest, response: http.ServerResponse & RawReply) => void :
    (request: http2.Http2ServerRequest & RawRequest, response: http2.Http2ServerResponse & RawReply) => void

export interface FastifyServerFactory<
  RawServer extends RawServerBase = RawServerDefault
> {
  (handler: FastifyServerFactoryHandler<RawServer>, opts: Record<string, unknown>): RawServer;
}
