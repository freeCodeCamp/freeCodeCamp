import { FastifyError } from '@fastify/error'
import { FastifyInstance } from './instance'
import { FastifyReply } from './reply'
import { FastifyRequest } from './request'
import { RouteGenericInterface } from './route'
import { FastifySchema } from './schema'
import { FastifyTypeProvider, FastifyTypeProviderDefault } from './type-provider'
import { ContextConfigDefault, RawReplyDefaultExpression, RawRequestDefaultExpression, RawServerBase, RawServerDefault } from './utils'

import type {
  BaseLogger,
  LogFn as FastifyLogFn,
  LevelWithSilent as LogLevel,
  Bindings,
  ChildLoggerOptions,
  LoggerOptions as PinoLoggerOptions
} from 'pino'

export type {
  FastifyLogFn,
  LogLevel,
  Bindings,
  ChildLoggerOptions,
  PinoLoggerOptions
}

export interface FastifyBaseLogger extends Pick<BaseLogger, 'level' | 'info' | 'error' | 'debug' | 'fatal' | 'warn' | 'trace' | 'silent'> {
  child(bindings: Bindings, options?: ChildLoggerOptions): FastifyBaseLogger
}

// TODO delete FastifyLoggerInstance in the next major release. It seems that it is enough to have only FastifyBaseLogger.
/**
 * @deprecated Use FastifyBaseLogger instead
 */
export type FastifyLoggerInstance = FastifyBaseLogger

export interface FastifyLoggerStreamDestination {
  write(msg: string): void;
}

// TODO: once node 18 is EOL, this type can be replaced with plain FastifyReply.
/**
 * Specialized reply type used for the `res` log serializer, since only `statusCode` is passed in certain cases.
 */
export type ResSerializerReply<
  RawServer extends RawServerBase,
  RawReply extends FastifyReply<RouteGenericInterface, RawServer>
> = Partial<RawReply> & Pick<RawReply, 'statusCode'>

/**
 * Fastify Custom Logger options.
 */
export interface FastifyLoggerOptions<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends FastifyRequest<RouteGenericInterface, RawServer, RawRequestDefaultExpression<RawServer>, FastifySchema, FastifyTypeProvider> = FastifyRequest<RouteGenericInterface, RawServer, RawRequestDefaultExpression<RawServer>, FastifySchema, FastifyTypeProviderDefault>,
  RawReply extends FastifyReply<RouteGenericInterface, RawServer, RawRequestDefaultExpression<RawServer>, RawReplyDefaultExpression<RawServer>, ContextConfigDefault, FastifySchema, FastifyTypeProvider> = FastifyReply<RouteGenericInterface, RawServer, RawRequestDefaultExpression<RawServer>, RawReplyDefaultExpression<RawServer>, ContextConfigDefault, FastifySchema, FastifyTypeProviderDefault>
> {
  serializers?: {
    req?: (req: RawRequest) => {
      method?: string;
      url?: string;
      version?: string;
      host?: string;
      remoteAddress?: string;
      remotePort?: number;
      [key: string]: unknown;
    };
    err?: (err: FastifyError) => {
      type: string;
      message: string;
      stack: string;
      [key: string]: unknown;
    };
    res?: (res: ResSerializerReply<RawServer, RawReply>) => {
      statusCode?: string | number;
      [key: string]: unknown;
    };
  };
  level?: string;
  file?: string;
  genReqId?: (req: RawRequest) => string;
  stream?: FastifyLoggerStreamDestination;
}

export interface FastifyChildLoggerFactory<
  RawServer extends RawServerBase = RawServerDefault,
  RawRequest extends RawRequestDefaultExpression<RawServer> = RawRequestDefaultExpression<RawServer>,
  RawReply extends RawReplyDefaultExpression<RawServer> = RawReplyDefaultExpression<RawServer>,
  Logger extends FastifyBaseLogger = FastifyBaseLogger,
  TypeProvider extends FastifyTypeProvider = FastifyTypeProviderDefault
> {
  /**
   * @param logger The parent logger
   * @param bindings The bindings object that will be passed to the child logger
   * @param childLoggerOpts The logger options that will be passed to the child logger
   * @param rawReq The raw request
   * @this The fastify instance
   * @returns The child logger instance
   */
  (
    this: FastifyInstance<RawServer, RawRequest, RawReply, Logger, TypeProvider>,
    logger: Logger,
    bindings: Bindings,
    childLoggerOpts: ChildLoggerOptions,
    rawReq: RawRequest
  ): Logger
}
