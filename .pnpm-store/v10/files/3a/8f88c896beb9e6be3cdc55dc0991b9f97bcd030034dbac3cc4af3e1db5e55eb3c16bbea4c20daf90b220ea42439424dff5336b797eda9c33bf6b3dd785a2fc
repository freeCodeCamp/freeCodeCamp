import * as fs from 'node:fs'
import { IncomingMessage, Server, ServerResponse } from 'node:http'
import P from 'pino'
import { expectAssignable, expectDeprecated, expectError, expectNotAssignable, expectType } from 'tsd'
import fastify, {
  FastifyBaseLogger,
  FastifyLogFn,
  FastifyReply,
  FastifyRequest,
  LogLevel
} from '../../fastify'
import { FastifyLoggerInstance, ResSerializerReply } from '../../types/logger'

expectType<FastifyBaseLogger>(fastify().log)

class Foo { }

['trace', 'debug', 'info', 'warn', 'error', 'fatal'].forEach(logLevel => {
  expectType<FastifyLogFn>(
    fastify<Server, IncomingMessage, ServerResponse, FastifyBaseLogger>().log[logLevel as LogLevel]
  )
  expectType<void>(
    fastify<Server, IncomingMessage, ServerResponse, FastifyBaseLogger>().log[logLevel as LogLevel]('')
  )
  expectType<void>(
    fastify<Server, IncomingMessage, ServerResponse, FastifyBaseLogger>().log[logLevel as LogLevel]({})
  )
  expectType<void>(
    fastify<Server, IncomingMessage, ServerResponse, FastifyBaseLogger>().log[logLevel as LogLevel]({ foo: 'bar' })
  )
  expectType<void>(
    fastify<Server, IncomingMessage, ServerResponse, FastifyBaseLogger>().log[logLevel as LogLevel](new Error())
  )
  expectType<void>(
    fastify<Server, IncomingMessage, ServerResponse, FastifyBaseLogger>().log[logLevel as LogLevel](new Foo())
  )
})

interface CustomLogger extends FastifyBaseLogger {
  customMethod(msg: string, ...args: unknown[]): void;
}

class CustomLoggerImpl implements CustomLogger {
  level = 'info'
  customMethod (msg: string, ...args: unknown[]) { console.log(msg, args) }

  // Implementation signature must be compatible with all overloads of FastifyLogFn
  info (arg1: unknown, arg2?: unknown, ...args: unknown[]): void {
    console.log(arg1, arg2, ...args)
  }

  warn (...args: unknown[]) { console.log(args) }
  error (...args: unknown[]) { console.log(args) }
  fatal (...args: unknown[]) { console.log(args) }
  trace (...args: unknown[]) { console.log(args) }
  debug (...args: unknown[]) { console.log(args) }
  silent (...args: unknown[]) { }

  child (bindings: P.Bindings, options?: P.ChildLoggerOptions): CustomLoggerImpl { return new CustomLoggerImpl() }
}

const customLogger = new CustomLoggerImpl()

const serverWithCustomLogger = fastify<
  Server,
  IncomingMessage,
  ServerResponse,
  CustomLoggerImpl
>({ logger: customLogger })

expectType<CustomLoggerImpl>(serverWithCustomLogger.log)

const serverWithPino = fastify<
  Server,
  IncomingMessage,
  ServerResponse,
  P.Logger
>({
  logger: P({
    level: 'info',
    redact: ['x-userinfo']
  })
})

expectType<P.Logger>(serverWithPino.log)

serverWithPino.route({
  method: 'GET',
  url: '/',
  handler (request) {
    expectType<P.Logger>(this.log)
    expectType<P.Logger>(request.log)
  }
})

serverWithPino.get('/', function (request) {
  expectType<P.Logger>(this.log)
  expectType<P.Logger>(request.log)
})

const serverWithLogOptions = fastify<
  Server,
  IncomingMessage,
  ServerResponse
>({
  logger: {
    level: 'info'
  }
})

expectType<FastifyBaseLogger>(serverWithLogOptions.log)

const serverWithFileOption = fastify<
  Server,
  IncomingMessage,
  ServerResponse
>({
  logger: {
    level: 'info',
    file: '/path/to/file'
  }
})

expectType<FastifyBaseLogger>(serverWithFileOption.log)

const serverAutoInferringTypes = fastify({
  logger: {
    level: 'info'
  }
})

expectType<FastifyBaseLogger>(serverAutoInferringTypes.log)

const serverWithLoggerInstance = fastify({
  loggerInstance: P({
    level: 'info',
    redact: ['x-userinfo']
  })
})

expectType<P.Logger>(serverWithLoggerInstance.log)

const serverWithPinoConfig = fastify({
  logger: {
    level: 'info',
    serializers: {
      req (IncomingMessage) {
        expectType<FastifyRequest>(IncomingMessage)
        return {
          method: 'method',
          url: 'url',
          version: 'version',
          host: 'fastify.test',
          remoteAddress: 'remoteAddress',
          remotePort: 80,
          other: ''
        }
      },
      res (ServerResponse) {
        expectType<ResSerializerReply<Server, FastifyReply>>(ServerResponse)
        expectAssignable<Partial<FastifyReply> & Pick<FastifyReply, 'statusCode'>>(ServerResponse)
        expectNotAssignable<FastifyReply>(ServerResponse)
        return {
          statusCode: 'statusCode'
        }
      },
      err (FastifyError) {
        return {
          other: '',
          type: 'type',
          message: 'msg',
          stack: 'stack'
        }
      }
    }
  }
})

expectType<FastifyBaseLogger>(serverWithPinoConfig.log)

const serverAutoInferredFileOption = fastify({
  logger: {
    level: 'info',
    file: '/path/to/file'
  }
})

expectType<FastifyBaseLogger>(serverAutoInferredFileOption.log)

const serverAutoInferredSerializerResponseObjectOption = fastify({
  logger: {
    serializers: {
      res (ServerResponse) {
        expectType<ResSerializerReply<Server, FastifyReply>>(ServerResponse)
        expectAssignable<Partial<FastifyReply> & Pick<FastifyReply, 'statusCode'>>(ServerResponse)
        expectNotAssignable<FastifyReply>(ServerResponse)
        return {
          status: '200'
        }
      }
    }
  }
})

expectType<FastifyBaseLogger>(serverAutoInferredSerializerResponseObjectOption.log)

const serverAutoInferredSerializerObjectOption = fastify({
  logger: {
    serializers: {
      req (IncomingMessage) {
        expectType<FastifyRequest>(IncomingMessage)
        return {
          method: 'method',
          url: 'url',
          version: 'version',
          host: 'fastify.test',
          remoteAddress: 'remoteAddress',
          remotePort: 80,
          other: ''
        }
      },
      res (ServerResponse) {
        expectType<ResSerializerReply<Server, FastifyReply>>(ServerResponse)
        expectAssignable<Partial<FastifyReply> & Pick<FastifyReply, 'statusCode'>>(ServerResponse)
        expectNotAssignable<FastifyReply>(ServerResponse)
        return {
          statusCode: 'statusCode'
        }
      },
      err (FastifyError) {
        return {
          other: '',
          type: 'type',
          message: 'msg',
          stack: 'stack'
        }
      }
    }
  }
})

expectType<FastifyBaseLogger>(serverAutoInferredSerializerObjectOption.log)

const passStreamAsOption = fastify({
  logger: {
    stream: fs.createWriteStream('/tmp/stream.out')
  }
})

expectType<FastifyBaseLogger>(passStreamAsOption.log)

const passPinoOption = fastify({
  logger: {
    redact: ['custom'],
    messageKey: 'msg',
    nestedKey: 'nested',
    enabled: true
  }
})

expectType<FastifyBaseLogger>(passPinoOption.log)

// FastifyLoggerInstance is deprecated
expectDeprecated({} as FastifyLoggerInstance)

const childParent = fastify().log
// we test different option variant here
expectType<FastifyBaseLogger>(childParent.child({}, { level: 'info' }))
expectType<FastifyBaseLogger>(childParent.child({}, { level: 'silent' }))
expectType<FastifyBaseLogger>(childParent.child({}, { redact: ['pass', 'pin'] }))
expectType<FastifyBaseLogger>(childParent.child({}, { serializers: { key: () => { } } }))
expectType<FastifyBaseLogger>(childParent.child({}, { level: 'info', redact: ['pass', 'pin'], serializers: { key: () => { } } }))

// no option pass
expectError(childParent.child())
// wrong option
expectError(childParent.child({}, { nonExist: true }))
