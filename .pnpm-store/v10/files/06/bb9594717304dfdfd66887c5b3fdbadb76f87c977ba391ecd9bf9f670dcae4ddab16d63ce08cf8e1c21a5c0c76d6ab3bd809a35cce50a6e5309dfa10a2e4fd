import * as http from 'node:http'
import { inject, isInjection, Response, DispatchFunc, InjectOptions, Chain } from '..'
import { expectType, expectAssignable, expectNotAssignable } from 'tsd'
import { Readable } from 'node:stream'

expectAssignable<InjectOptions>({ url: '/' })
expectAssignable<InjectOptions>({ autoStart: true })
expectAssignable<InjectOptions>({ autoStart: false })
expectAssignable<InjectOptions>({ validate: true })
expectAssignable<InjectOptions>({ validate: false })

const dispatch: http.RequestListener = function (req, res) {
  expectAssignable<http.IncomingMessage>(req)
  expectAssignable<http.ServerResponse>(res)
  expectType<boolean>(isInjection(req))
  expectType<boolean>(isInjection(res))

  const reply = 'Hello World'
  res.writeHead(200, { 'Content-Type': 'text/plain', 'Content-Length': reply.length })
  res.end(reply)
}

const expectResponse = function (res: Response | undefined) {
  if (!res) {
    return
  }
  expectType<Response>(res)
  console.log(res.payload)
  expectAssignable<Function>(res.json)
  expectAssignable<Function>(res.stream)
  expectAssignable<http.ServerResponse>(res.raw.res)
  expectAssignable<http.IncomingMessage>(res.raw.req)
  expectType<Readable>(res.stream())
  expectType<string>(res.payload)
  expectType<string>(res.body)
  expectAssignable<Array<any>>(res.cookies)
  const cookie = res.cookies[0]
  expectType<string>(cookie.name)
  expectType<string>(cookie.value)
  expectType<Date | undefined>(cookie.expires)
  expectType<number | undefined>(cookie.maxAge)
  expectType<boolean | undefined>(cookie.httpOnly)
  expectType<boolean | undefined>(cookie.secure)
  expectType<string | undefined>(cookie.sameSite)
  expectType<unknown | undefined>(cookie.additional)
}

expectType<DispatchFunc>(dispatch)

inject(dispatch, { method: 'get', url: '/' }, (err, res) => {
  expectType<Error | undefined>(err)
  expectResponse(res)
})

const url = {
  protocol: 'http',
  hostname: 'example.com',
  port: '8080',
  pathname: 'hello',
  query: {
    test: '1234'
  }
}
inject(dispatch, { method: 'get', url }, (err, res) => {
  expectType<Error | undefined>(err)
  expectResponse(res)
})

inject(dispatch, { method: 'get', url: '/', cookies: { name1: 'value1', value2: 'value2' } }, (err, res) => {
  expectType<Error | undefined>(err)
  expectResponse(res)
})

inject(dispatch, { method: 'get', url: '/', query: { name1: 'value1', value2: 'value2' } }, (err, res) => {
  expectType<Error | undefined>(err)
  expectResponse(res)
})

inject(dispatch, { method: 'get', url: '/', query: { name1: ['value1', 'value2'] } }, (err, res) => {
  expectType<Error | undefined>(err)
  expectResponse(res)
})

inject(dispatch, { method: 'get', url: '/', query: 'name1=value1' }, (err, res) => {
  expectType<Error | undefined>(err)
  expectResponse(res)
})

inject(dispatch, { method: 'post', url: '/', payload: { name1: 'value1', value2: 'value2' } }, (err, res) => {
  expectType<Error | undefined>(err)
  expectResponse(res)
})

inject(dispatch, { method: 'post', url: '/', body: { name1: 'value1', value2: 'value2' } }, (err, res) => {
  expectType<Error | undefined>(err)
  expectResponse(res)
})

expectType<void>(
  inject(dispatch)
    .get('/')
    .end((err, res) => {
      expectType<Error | undefined>(err)
      expectType<Response | undefined>(res)
      console.log(res?.payload)
    })
)

inject(dispatch)
  .get('/')
  .then((value) => {
    expectType<Response>(value)
  })

expectType<Chain>(inject(dispatch))
expectType<Promise<Response>>(inject(dispatch).end())
expectType<Chain>(inject(dispatch, { method: 'get', url: '/' }))
// @ts-ignore tsd supports top-level await, but normal ts does not so ignore
expectType<Response>(await inject(dispatch, { method: 'get', url: '/' }))

type ParsedValue = { field: string }
// @ts-ignore tsd supports top-level await, but normal ts does not so ignore
const response: Response = await inject(dispatch)
const parsedValue: ParsedValue = response.json()
expectType<ParsedValue>(parsedValue)

const parsedValueUsingGeneric = response.json<ParsedValue>()
expectType<ParsedValue>(parsedValueUsingGeneric)

expectNotAssignable<http.ServerResponse>(response)

const httpDispatch = function (req: http.IncomingMessage, res: http.ServerResponse) {
  expectType<boolean>(isInjection(req))
  expectType<boolean>(isInjection(res))

  const reply = 'Hello World'
  res.writeHead(200, { 'Content-Type': 'text/plain', 'Content-Length': reply.length })
  res.end(reply)
}

inject(httpDispatch, { method: 'get', url: '/' }, (err, res) => {
  expectType<Error | undefined>(err)
  expectResponse(res)
})

inject(httpDispatch, { method: 'get', url: '/', payloadAsStream: true }, (err, res) => {
  expectType<Error | undefined>(err)
  expectResponse(res)
})
