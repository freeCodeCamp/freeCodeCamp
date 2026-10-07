import { FastifyPluginOptions, FastifyPluginCallback, FastifyPluginAsync } from './plugin'
import { LogLevel } from './logger'
import { FastifyInstance } from './instance'
import { RawServerBase } from './utils'
import { FastifyBaseLogger, FastifyTypeProvider, RawServerDefault } from '../fastify'

export interface RegisterOptions {
  prefix?: string;
  logLevel?: LogLevel;
  logSerializers?: Record<string, (value: any) => string>;
}

export type FastifyRegisterOptions<Options> = (RegisterOptions & Options) | ((instance: FastifyInstance) => RegisterOptions & Options)

/**
 * FastifyRegister
 *
 * Function for adding a plugin to fastify. The options are inferred from the passed in FastifyPlugin parameter.
 */
export interface FastifyRegister<T = void, RawServer extends RawServerBase = RawServerDefault, TypeProviderDefault extends FastifyTypeProvider = FastifyTypeProvider, LoggerDefault extends FastifyBaseLogger = FastifyBaseLogger> {
  <Server extends RawServerBase = RawServer, TypeProvider extends FastifyTypeProvider = TypeProviderDefault, Logger extends FastifyBaseLogger = LoggerDefault>(
    plugin: FastifyPluginCallback<FastifyPluginOptions, Server, TypeProvider, Logger>
  ): T;
  <Options extends FastifyPluginOptions, Server extends RawServerBase = RawServer, TypeProvider extends FastifyTypeProvider = TypeProviderDefault, Logger extends FastifyBaseLogger = LoggerDefault>(
    plugin: FastifyPluginCallback<Options, Server, TypeProvider, Logger>,
    opts: FastifyRegisterOptions<Options>
  ): T;
  <Server extends RawServerBase = RawServer, TypeProvider extends FastifyTypeProvider = TypeProviderDefault, Logger extends FastifyBaseLogger = LoggerDefault>(
    plugin: FastifyPluginAsync<FastifyPluginOptions, Server, TypeProvider, Logger>
  ): T;
  <Options extends FastifyPluginOptions, Server extends RawServerBase = RawServer, TypeProvider extends FastifyTypeProvider = TypeProviderDefault, Logger extends FastifyBaseLogger = LoggerDefault>(
    plugin: FastifyPluginAsync<Options, Server, TypeProvider, Logger>,
    opts: FastifyRegisterOptions<Options>
  ): T;
  <Server extends RawServerBase = RawServer, TypeProvider extends FastifyTypeProvider = TypeProviderDefault, Logger extends FastifyBaseLogger = LoggerDefault>(
    plugin: FastifyPluginCallback<FastifyPluginOptions, Server, TypeProvider, Logger> | FastifyPluginAsync<FastifyPluginOptions, Server, TypeProvider, Logger> | Promise<{ default: FastifyPluginCallback<FastifyPluginOptions, Server, TypeProvider, Logger> }> | Promise<{ default: FastifyPluginAsync<FastifyPluginOptions, Server, TypeProvider, Logger> }>,
  ): T;
  <Options extends FastifyPluginOptions, Server extends RawServerBase = RawServer, TypeProvider extends FastifyTypeProvider = TypeProviderDefault, Logger extends FastifyBaseLogger = LoggerDefault>(
    plugin: FastifyPluginCallback<Options, Server, TypeProvider, Logger> | FastifyPluginAsync<Options, Server, TypeProvider, Logger> | Promise<{ default: FastifyPluginCallback<Options, Server, TypeProvider, Logger> }> | Promise<{ default: FastifyPluginAsync<Options, Server, TypeProvider, Logger> }>,
    opts: FastifyRegisterOptions<Options>
  ): T;
}
