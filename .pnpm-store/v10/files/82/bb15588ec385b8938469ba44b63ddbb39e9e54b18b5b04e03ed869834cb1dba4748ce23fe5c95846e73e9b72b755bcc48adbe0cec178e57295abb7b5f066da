'use strict'

const { test } = require('node:test')
const FindMyWay = require('../')

test('Multi-parametric tricky path', t => {
  t.plan(6)
  const findMyWay = FindMyWay({
    defaultRoute: () => t.assert.fail('Should not be defaultRoute')
  })

  findMyWay.on('GET', '/:param1-static-:param2', () => {})

  t.assert.deepEqual(
    findMyWay.find('GET', '/param1-static-param2', {}).params,
    { param1: 'param1', param2: 'param2' }
  )
  t.assert.deepEqual(
    findMyWay.find('GET', '/param1.1-param1.2-static-param2.1-param2.2', {}).params,
    { param1: 'param1.1-param1.2', param2: 'param2.1-param2.2' }
  )
  t.assert.deepEqual(
    findMyWay.find('GET', '/param1-1-param1-2-static-param2-1-param2-2', {}).params,
    { param1: 'param1-1-param1-2', param2: 'param2-1-param2-2' }
  )
  t.assert.deepEqual(
    findMyWay.find('GET', '/static-static-static', {}).params,
    { param1: 'static', param2: 'static' }
  )
  t.assert.deepEqual(
    findMyWay.find('GET', '/static-static-static-static', {}).params,
    { param1: 'static', param2: 'static-static' }
  )
  t.assert.deepEqual(
    findMyWay.find('GET', '/static-static1-static-static', {}).params,
    { param1: 'static-static1', param2: 'static' }
  )
})

test('Multi-parametric nodes with different static ending 1', t => {
  t.plan(4)
  const findMyWay = FindMyWay({
    defaultRoute: () => t.assert.fail('Should not be defaultRoute')
  })

  const paramHandler = () => {}
  const multiParamHandler = () => {}

  findMyWay.on('GET', '/v1/foo/:code', paramHandler)
  findMyWay.on('GET', '/v1/foo/:code.png', multiParamHandler)

  t.assert.deepEqual(findMyWay.find('GET', '/v1/foo/hello', {}).handler, paramHandler)
  t.assert.deepEqual(findMyWay.find('GET', '/v1/foo/hello', {}).params, { code: 'hello' })

  t.assert.deepEqual(findMyWay.find('GET', '/v1/foo/hello.png', {}).handler, multiParamHandler)
  t.assert.deepEqual(findMyWay.find('GET', '/v1/foo/hello.png', {}).params, { code: 'hello' })
})

test('Multi-parametric nodes with different static ending 2', t => {
  t.plan(4)
  const findMyWay = FindMyWay({
    defaultRoute: () => t.assert.fail('Should not be defaultRoute')
  })

  const jpgHandler = () => {}
  const pngHandler = () => {}

  findMyWay.on('GET', '/v1/foo/:code.jpg', jpgHandler)
  findMyWay.on('GET', '/v1/foo/:code.png', pngHandler)

  t.assert.deepEqual(findMyWay.find('GET', '/v1/foo/hello.jpg', {}).handler, jpgHandler)
  t.assert.deepEqual(findMyWay.find('GET', '/v1/foo/hello.jpg', {}).params, { code: 'hello' })

  t.assert.deepEqual(findMyWay.find('GET', '/v1/foo/hello.png', {}).handler, pngHandler)
  t.assert.deepEqual(findMyWay.find('GET', '/v1/foo/hello.png', {}).params, { code: 'hello' })
})

test('Multi-parametric nodes with different static ending 3', t => {
  t.plan(4)
  const findMyWay = FindMyWay({
    defaultRoute: () => t.assert.fail('Should not be defaultRoute')
  })

  const jpgHandler = () => {}
  const pngHandler = () => {}

  findMyWay.on('GET', '/v1/foo/:code.jpg/bar', jpgHandler)
  findMyWay.on('GET', '/v1/foo/:code.png/bar', pngHandler)

  t.assert.deepEqual(findMyWay.find('GET', '/v1/foo/hello.jpg/bar', {}).handler, jpgHandler)
  t.assert.deepEqual(findMyWay.find('GET', '/v1/foo/hello.jpg/bar', {}).params, { code: 'hello' })

  t.assert.deepEqual(findMyWay.find('GET', '/v1/foo/hello.png/bar', {}).handler, pngHandler)
  t.assert.deepEqual(findMyWay.find('GET', '/v1/foo/hello.png/bar', {}).params, { code: 'hello' })
})

test('Multi-parametric nodes with different static ending 4', t => {
  t.plan(6)
  const findMyWay = FindMyWay({
    defaultRoute: () => t.assert.fail('Should not be defaultRoute')
  })

  const handler = () => {}
  const jpgHandler = () => {}
  const pngHandler = () => {}

  findMyWay.on('GET', '/v1/foo/:code/bar', handler)
  findMyWay.on('GET', '/v1/foo/:code.jpg/bar', jpgHandler)
  findMyWay.on('GET', '/v1/foo/:code.png/bar', pngHandler)

  t.assert.deepEqual(findMyWay.find('GET', '/v1/foo/hello/bar', {}).handler, handler)
  t.assert.deepEqual(findMyWay.find('GET', '/v1/foo/hello/bar', {}).params, { code: 'hello' })

  t.assert.deepEqual(findMyWay.find('GET', '/v1/foo/hello.jpg/bar', {}).handler, jpgHandler)
  t.assert.deepEqual(findMyWay.find('GET', '/v1/foo/hello.jpg/bar', {}).params, { code: 'hello' })

  t.assert.deepEqual(findMyWay.find('GET', '/v1/foo/hello.png/bar', {}).handler, pngHandler)
  t.assert.deepEqual(findMyWay.find('GET', '/v1/foo/hello.png/bar', {}).params, { code: 'hello' })
})
