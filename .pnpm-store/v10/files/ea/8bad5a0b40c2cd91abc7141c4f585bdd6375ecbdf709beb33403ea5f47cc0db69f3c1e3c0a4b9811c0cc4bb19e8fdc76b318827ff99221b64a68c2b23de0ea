import { expectError, expectType } from 'tsd'
import * as fastifyCookieStar from '..'
import fastifyCookieCjsImport = require('..')
import cookie, { fastifyCookie as fastifyCookieNamed, Signer } from '..'
import fastify, { FastifyInstance, FastifyReply, setCookieWrapper } from 'fastify'

const fastifyCookieCjs = require('..')

const app: FastifyInstance = fastify()
app.register(fastifyCookieNamed)
app.register(cookie)
app.register(fastifyCookieCjs)
app.register(fastifyCookieCjsImport.default)
app.register(fastifyCookieCjsImport.fastifyCookie)
app.register(fastifyCookieStar.default)
app.register(fastifyCookieStar.fastifyCookie)

expectType<fastifyCookieStar.FastifyCookie>(fastifyCookieNamed)
expectType<fastifyCookieStar.FastifyCookie>(cookie)
expectType<fastifyCookieStar.FastifyCookie>(fastifyCookieCjsImport.default)
expectType<fastifyCookieStar.FastifyCookie>(fastifyCookieCjsImport.fastifyCookie)
expectType<fastifyCookieStar.FastifyCookie>(fastifyCookieStar.default)
expectType<fastifyCookieStar.FastifyCookie>(
  fastifyCookieStar.fastifyCookie
)
expectType<any>(fastifyCookieCjs)

expectType<fastifyCookieStar.Sign>(cookie.sign)
expectType<fastifyCookieStar.Unsign>(cookie.unsign)
expectType<fastifyCookieStar.SignerFactory >(cookie.signerFactory)

expectType<fastifyCookieStar.Sign>(fastifyCookieNamed.sign)
expectType<fastifyCookieStar.Unsign>(fastifyCookieNamed.unsign)
expectType<fastifyCookieStar.SignerFactory >(fastifyCookieNamed.signerFactory)

const server = fastify()

server.register(cookie)

server.after((_err) => {
  expectType< string >(
    server.serializeCookie('sessionId', 'aYb4uTIhdBXC')
  )

  expectType<{ [key: string]: string }>(
    // See https://github.com/fastify/fastify-cookie#manual-cookie-parsing
    server.parseCookie('sessionId=aYb4uTIhdBXC')
  )

  server.get('/', (request, reply) => {
    const test = request.cookies.test
    expectType<string | undefined>(test)

    expectType<setCookieWrapper>(reply.cookie)
    expectType<setCookieWrapper>(reply.setCookie)

    expectType<FastifyReply>(
      reply
        .setCookie('test', test!, { domain: 'example.com', path: '/' })
        .clearCookie('foo')
        .send({ hello: 'world' })
    )
  })

  expectType<(value: string) => string>(server.signCookie)
  expectType<(value: string) => fastifyCookieStar.UnsignResult>(server.unsignCookie)

  server.get('/', (request, reply) => {
    expectType<(value: string) => string>(request.signCookie)
    expectType<(value: string) => string>(reply.signCookie)
    expectType<(value: string) => fastifyCookieStar.UnsignResult>(request.unsignCookie)
    expectType<(value: string) => fastifyCookieStar.UnsignResult>(reply.unsignCookie)
  })
})

const serverWithHttp2 = fastify({ http2: true })

serverWithHttp2.register(cookie)

serverWithHttp2.after(() => {
  serverWithHttp2.get('/', (request, reply) => {
    const test = request.cookies.test
    reply
      .setCookie('test', test!, { domain: 'example.com', path: '/' })
      .clearCookie('foo')
      .send({ hello: 'world' })
  })
})

const testSamesiteOptionsApp = fastify()

testSamesiteOptionsApp.register(cookie)
testSamesiteOptionsApp.after(() => {
  server.get('/test-samesite-option-true', (request, reply) => {
    const test = request.cookies.test
    reply.setCookie('test', test!, { sameSite: true }).send({ hello: 'world' })
  })
  server.get('/test-samesite-option-false', (request, reply) => {
    const test = request.cookies.test
    reply.setCookie('test', test!, { sameSite: false }).send({ hello: 'world' })
  })
  server.get('/test-samesite-option-lax', (request, reply) => {
    const test = request.cookies.test
    reply.setCookie('test', test!, { sameSite: 'lax' }).send({ hello: 'world' })
  })
  server.get('/test-samesite-option-strict', (request, reply) => {
    const test = request.cookies.test
    reply
      .setCookie('test', test!, { sameSite: 'strict' })
      .send({ hello: 'world' })
  })
  server.get('/test-samesite-option-none', (request, reply) => {
    const test = request.cookies.test
    reply
      .setCookie('test', test!, { sameSite: 'none' })
      .send({ hello: 'world' })
  })
})

const appWithImplicitHttpSigned = fastify()

appWithImplicitHttpSigned.register(cookie, {
  secret: 'testsecret',
})
appWithImplicitHttpSigned.register(cookie, {
  secret: 'testsecret',
  algorithm: 'sha512'
})
appWithImplicitHttpSigned.after(() => {
  server.get('/', (request, reply) => {
    appWithImplicitHttpSigned.unsignCookie(request.cookies.test!)
    appWithImplicitHttpSigned.unsignCookie('test')

    reply.unsignCookie(request.cookies.test!)
    reply.unsignCookie('test')

    request.unsignCookie(request.cookies.anotherTest!)
    request.unsignCookie('anotherTest')

    reply.send({ hello: 'world' })
  })
})

const appWithRotationSecret = fastify()

appWithRotationSecret.register(cookie, {
  secret: ['testsecret'],
})
appWithRotationSecret.after(() => {
  server.get('/', (request, reply) => {
    reply.unsignCookie(request.cookies.test!)
    const unsigned = reply.unsignCookie('test')

    expectType<boolean>(unsigned.valid)
    if (unsigned.valid) {
      expectType<string>(unsigned.value)
    } else {
      expectType<null>(unsigned.value)
    }
    expectType<boolean>(unsigned.renew)

    reply.send({ hello: 'world' })
  })
})

const appWithParseOptions = fastify()

const parseOptions: fastifyCookieStar.CookieSerializeOptions = {
  domain: 'example.com',
  encode: (value: string) => value,
  expires: new Date(),
  httpOnly: true,
  maxAge: 3600,
  path: '/',
  sameSite: 'lax',
  secure: true,
  signed: true,
  partitioned: false,
}
expectType<fastifyCookieStar.CookieSerializeOptions>(parseOptions)

appWithParseOptions.register(cookie, {
  secret: 'testsecret',
  parseOptions,
})
appWithParseOptions.after(() => {
  server.get('/', (request, reply) => {
    const unsigned = reply.unsignCookie(request.cookies.test!)

    expectType<boolean>(unsigned.valid)
    if (unsigned.valid) {
      expectType<string>(unsigned.value)
    } else {
      expectType<null>(unsigned.value)
    }
    expectType<boolean>(unsigned.renew)
  })
})

const appWithCustomSigner = fastify()

appWithCustomSigner.register(cookie, {
  secret: {
    sign: (x) => x + '.signed',
    unsign: (x) => {
      if (x.endsWith('.signed')) { return { renew: false, valid: true, value: x.slice(0, -7) } }
      return { renew: false, valid: false, value: null }
    }
  }
})
appWithCustomSigner.after(() => {
  server.get('/', (request, reply) => {
    reply.unsignCookie(request.cookies.test!)
    const unsigned = reply.unsignCookie('test')

    expectType<boolean>(unsigned.valid)
    if (unsigned.valid) {
      expectType<string>(unsigned.value)
    } else {
      expectType<null>(unsigned.value)
    }
    expectType<boolean>(unsigned.renew)

    reply.send({ hello: 'world' })
  })
})

expectType<Signer>(new fastifyCookieStar.Signer('secretString'))
expectType<Signer>(new fastifyCookieStar.Signer(['secretStringInArray']))
expectType<Signer>(new fastifyCookieStar.Signer(Buffer.from('secretString')))
expectType<Signer>(new fastifyCookieStar.Signer([Buffer.from('secretStringInArray')]))

const signer = new fastifyCookieStar.Signer(['secretStringInArray'], 'sha256')
signer.sign('Lorem Ipsum')
signer.unsign('Lorem Ipsum')

const appWithHook: FastifyInstance = fastify()

appWithHook.register(cookie, { hook: false })
appWithHook.register(cookie, { hook: 'onRequest' })
appWithHook.register(cookie, { hook: 'preHandler' })
appWithHook.register(cookie, { hook: 'preParsing' })
appWithHook.register(cookie, { hook: 'preSerialization' })
appWithHook.register(cookie, { hook: 'preValidation' })
expectError(appWithHook.register(cookie, { hook: true }))
expectError(appWithHook.register(cookie, { hook: 'false' }))

expectType<(cookieHeader: string, opts?: fastifyCookieStar.ParseOptions) => { [key: string]: string }>(cookie.parse)
expectType<(name: string, value: string, opts?: fastifyCookieStar.SerializeOptions) => string>(cookie.serialize)
