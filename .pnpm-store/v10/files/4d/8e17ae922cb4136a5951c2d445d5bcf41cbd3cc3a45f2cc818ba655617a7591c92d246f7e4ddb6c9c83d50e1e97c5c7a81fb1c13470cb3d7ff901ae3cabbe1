import { it, expect } from 'vitest'
import { Agent as HttpAgent } from 'http'
import { RequestOptions, Agent as HttpsAgent } from 'https'
import { getUrlByRequestOptions } from './getUrlByRequestOptions'

it('returns a URL based on the basic RequestOptions', () => {
  expect(
    getUrlByRequestOptions({
      protocol: 'https:',
      host: '127.0.0.1',
      path: '/resource',
    }).href
  ).toBe('https://127.0.0.1/resource')
})

it('inherits protocol and port from http.Agent, if set', () => {
  expect(
    getUrlByRequestOptions({
      host: '127.0.0.1',
      path: '/',
      agent: new HttpAgent(),
    }).href
  ).toBe('http://127.0.0.1/')
})

it('inherits protocol and port from https.Agent, if set', () => {
  expect(
    getUrlByRequestOptions({
      host: '127.0.0.1',
      path: '/',
      agent: new HttpsAgent({
        port: 3080,
      }),
    }).href
  ).toBe('https://127.0.0.1:3080/')
})

it('resolves protocol to "http" given no explicit protocol and no certificate', () => {
  expect(
    getUrlByRequestOptions({
      host: '127.0.0.1',
      path: '/',
    }).href
  ).toBe('http://127.0.0.1/')
})

it('resolves protocol to "https" given no explicit protocol, but certificate', () => {
  expect(
    getUrlByRequestOptions({
      host: '127.0.0.1',
      path: '/secure',
      cert: '<!-- SSL certificate -->',
    }).href
  ).toBe('https://127.0.0.1/secure')
})

it('resolves protocol to "https" given no explicit protocol, but port is 443', () => {
  expect(
    getUrlByRequestOptions({
      host: '127.0.0.1',
      port: 443,
      path: '/resource',
    }).href
  ).toBe('https://127.0.0.1/resource')
})

it('resolves protocol to "https" given no explicit protocol, but agent port is 443', () => {
  expect(
    getUrlByRequestOptions({
      host: '127.0.0.1',
      agent: new HttpsAgent({
        port: 443,
      }),
      path: '/resource',
    }).href
  ).toBe('https://127.0.0.1/resource')
})

it('respects explicitly provided port', () => {
  expect(
    getUrlByRequestOptions({
      protocol: 'http:',
      host: '127.0.0.1',
      port: 4002,
      path: '/',
    }).href
  ).toBe('http://127.0.0.1:4002/')
})

it('inherits "username" and "password"', () => {
  const url = getUrlByRequestOptions({
    protocol: 'https:',
    host: '127.0.0.1',
    path: '/user',
    auth: 'admin:abc-123',
  })

  expect(url).toBeInstanceOf(URL)
  expect(url).toHaveProperty('username', 'admin')
  expect(url).toHaveProperty('password', 'abc-123')
  expect(url).toHaveProperty('href', 'https://admin:abc-123@127.0.0.1/user')
})

it('resolves hostname to localhost if none provided', () => {
  expect(getUrlByRequestOptions({}).hostname).toBe('localhost')
})

it('resolves host to localhost if none provided', () => {
  expect(getUrlByRequestOptions({}).host).toBe('localhost')
})

it('supports "hostname" and "port"', () => {
  const options: RequestOptions = {
    protocol: 'https:',
    hostname: '127.0.0.1',
    port: 1234,
    path: '/resource',
  }

  expect(getUrlByRequestOptions(options).href).toBe(
    'https://127.0.0.1:1234/resource'
  )
})

it('use "hostname" if both "hostname" and "host" are specified', () => {
  const options: RequestOptions = {
    protocol: 'https:',
    host: 'host',
    hostname: 'hostname',
    path: '/resource',
  }

  expect(getUrlByRequestOptions(options).href).toBe(
    'https://hostname/resource'
  )
})

it('parses "host" in IPv6', () => {
  expect(
    getUrlByRequestOptions({
      host: '::1',
      path: '/resource',
    }).href
  ).toBe('http://[::1]/resource')

  expect(
    getUrlByRequestOptions({
      host: '[::1]',
      path: '/resource',
    }).href
  ).toBe('http://[::1]/resource')

})

it('parses "host" and "port" in IPv6', () => {
  expect(
    getUrlByRequestOptions({
      host: '::1',
      port: 3001,
      path: '/resource',
    }).href
  ).toBe('http://[::1]:3001/resource')
})
