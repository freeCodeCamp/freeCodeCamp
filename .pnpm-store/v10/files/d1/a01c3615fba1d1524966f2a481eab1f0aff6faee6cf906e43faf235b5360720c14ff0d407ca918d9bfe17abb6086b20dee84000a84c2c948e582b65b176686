import fastify, { FastifyInstance, FastifyPluginAsync, FastifyRequest, FastifyReply } from 'fastify'
import { Server } from 'node:http'
import { Stats } from 'node:fs'
import { expectAssignable, expectError, expectType } from 'tsd'
import * as fastifyStaticStar from '..'
import fastifyStatic, {
  FastifyStaticOptions,
  fastifyStatic as fastifyStaticNamed
} from '..'

const fastifyStaticCjsImport = fastifyStaticStar
const fastifyStaticCjs = require('..')

const app: FastifyInstance = fastify()

app.register(fastifyStatic, { root: __dirname })
app.register(fastifyStaticNamed, { root: __dirname })
app.register(fastifyStaticCjs, { root: __dirname })
app.register(fastifyStaticCjsImport.default, { root: __dirname })
app.register(fastifyStaticCjsImport.fastifyStatic, { root: __dirname })
app.register(fastifyStaticStar.default, { root: __dirname })
app.register(fastifyStaticStar.fastifyStatic, { root: __dirname })

expectType<FastifyPluginAsync<FastifyStaticOptions, Server>>(fastifyStatic)
expectType<FastifyPluginAsync<FastifyStaticOptions, Server>>(fastifyStaticNamed)
expectType<FastifyPluginAsync<FastifyStaticOptions, Server>>(fastifyStaticCjsImport.default)
expectType<FastifyPluginAsync<FastifyStaticOptions, Server>>(fastifyStaticCjsImport.fastifyStatic)
expectType<FastifyPluginAsync<FastifyStaticOptions, Server>>(fastifyStaticStar.default)
expectType<FastifyPluginAsync<FastifyStaticOptions, Server>>(
  fastifyStaticStar.fastifyStatic
)
expectType<any>(fastifyStaticCjs)

const appWithImplicitHttp = fastify()
const options: FastifyStaticOptions = {
  acceptRanges: true,
  contentType: true,
  cacheControl: true,
  decorateReply: true,
  dotfiles: 'allow',
  etag: true,
  extensions: ['.js'],
  immutable: true,
  index: ['1'],
  lastModified: true,
  maxAge: '',
  prefix: '',
  prefixAvoidTrailingSlash: false,
  root: '',
  schemaHide: true,
  serve: true,
  wildcard: true,
  globIgnore: ['**/*.private'],
  list: false,
  setHeaders: (res, path, stat) => {
    expectType<string>(res.filename)
    expectType<number>(res.statusCode)
    expectType<ReturnType<FastifyReply['getHeader']>>(res.getHeader('X-Test'))
    res.setHeader('X-Test', 'string')

    expectType<string>(path)

    expectType<Stats>(stat)
  },
  preCompressed: false,
  allowedPath: (_pathName: string, _root: string, _request: FastifyRequest) => {
    return true
  },
  constraints: {
    host: /^.*\.example\.com$/,
    version: '1.0.2'
  },
  logLevel: 'warn'
}

expectError<FastifyStaticOptions>({
  root: '',
  wildcard: '**/**'
})

expectAssignable<FastifyStaticOptions>({
  root: '',
  list: {
    format: 'json'
  }
})

expectAssignable<FastifyStaticOptions>({
  root: '',
  list: {
    format: 'json',
    render: () => ''
  }
})

expectAssignable<FastifyStaticOptions>({
  root: '',
  list: {
    format: 'html',
    render: () => ''
  }
})

expectError<FastifyStaticOptions>({
  root: '',
  list: {
    format: 'html'
  }
})

expectAssignable<FastifyStaticOptions>({
  root: ['']
})

expectAssignable<FastifyStaticOptions>({
  root: new URL('')
})

expectAssignable<FastifyStaticOptions>({
  root: [new URL('')]
})

expectError<FastifyStaticOptions>({
  serve: true
})

expectAssignable<FastifyStaticOptions>({
  serve: true,
  root: ''
})

expectAssignable<FastifyStaticOptions>({
  serve: false
})

appWithImplicitHttp
  .register(fastifyStatic, options)
  .after(() => {
    appWithImplicitHttp.get('/', (_request, reply) => {
      reply.sendFile('some-file-name')
    })
  })

const appWithHttp2 = fastify({ http2: true })

appWithHttp2
  .register(fastifyStatic, options)
  .after(() => {
    appWithHttp2.get('/', (_request, reply) => {
      reply.sendFile('some-file-name')
    })

    appWithHttp2.get('/download', (_request, reply) => {
      reply.download('some-file-name')
    })

    appWithHttp2.get('/download/1', (_request, reply) => {
      reply.download('some-file-name', { maxAge: '2 days' })
    })

    appWithHttp2.get('/download/2', (_request, reply) => {
      reply.download('some-file-name', 'some-filename', { cacheControl: false, acceptRanges: true })
    })

    appWithHttp2.get('/download/3', (_request, reply) => {
      reply.download('some-file-name', 'some-filename', { contentType: false })
    })
  })

const multiRootAppWithImplicitHttp = fastify()
options.root = ['']

multiRootAppWithImplicitHttp
  .register(fastifyStatic, options)
  .after(() => {
    multiRootAppWithImplicitHttp.get('/', (_request, reply) => {
      reply.sendFile('some-file-name')
    })

    multiRootAppWithImplicitHttp.get('/', (_request, reply) => {
      reply.sendFile('some-file-name', { cacheControl: false, acceptRanges: true })
    })

    multiRootAppWithImplicitHttp.get('/', (_request, reply) => {
      reply.sendFile('some-file-name', 'some-root-name', { cacheControl: false, acceptRanges: true })
    })

    multiRootAppWithImplicitHttp.get('/', (_request, reply) => {
      reply.sendFile('some-file-name', 'some-root-name-2', { contentType: false })
    })

    multiRootAppWithImplicitHttp.get('/download', (_request, reply) => {
      reply.download('some-file-name')
    })

    multiRootAppWithImplicitHttp.get('/download/1', (_request, reply) => {
      reply.download('some-file-name', { maxAge: '2 days' })
    })

    multiRootAppWithImplicitHttp.get('/download/2', (_request, reply) => {
      reply.download('some-file-name', 'some-filename', { cacheControl: false, acceptRanges: true })
    })

    multiRootAppWithImplicitHttp.get('/download/3', (_request, reply) => {
      reply.download('some-file-name', 'some-filename', { contentType: false })
    })
  })

const noIndexApp = fastify()
options.root = ''
options.index = false

noIndexApp
  .register(fastifyStatic, options)
  .after(() => {
    noIndexApp.get('/', (_request, reply) => {
      reply.send('<h1>fastify-static</h1>')
    })
  })

options.root = new URL('')

const URLRootApp = fastify()
URLRootApp.register(fastifyStatic, options)
  .after(() => {
    URLRootApp.get('/', (_request, reply) => {
      reply.send('<h1>fastify-static</h1>')
    })
  })

const defaultIndexApp = fastify()
options.index = 'index.html'

defaultIndexApp
  .register(fastifyStatic, options)
  .after(() => {
    defaultIndexApp.get('/', (_request, reply) => {
      reply.send('<h1>fastify-static</h1>')
    })
  })
