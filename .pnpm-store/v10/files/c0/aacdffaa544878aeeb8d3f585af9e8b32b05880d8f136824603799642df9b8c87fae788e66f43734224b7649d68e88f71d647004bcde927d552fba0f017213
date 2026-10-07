'use strict'

const { test } = require('node:test')
const http = require('node:http')
const path = require('node:path')
const request = require('supertest')
const { readdir } = require('node:fs/promises')
const send = require('../lib/send').send

const fixtures = path.join(__dirname, 'fixtures')

test('send(file)', async function (t) {
  t.plan(5)

  await t.test('file type', async function (t) {
    t.plan(5)

    const app = http.createServer(async function (req, res) {
      const { statusCode, headers, stream, type, metadata } = await send(req, req.url, { root: fixtures })
      t.assert.deepStrictEqual(type, 'file')
      t.assert.ok(metadata.path)
      t.assert.ok(metadata.stat)
      t.assert.ok(!metadata.error)
      t.assert.ok(!metadata.requestPath)
      res.writeHead(statusCode, headers)
      stream.pipe(res)
    })

    await request(app)
      .get('/name.txt')
      .expect('Content-Length', '4')
      .expect(200, 'tobi')
  })

  await t.test('directory type', async function (t) {
    t.plan(5)

    const app = http.createServer(async function (req, res) {
      const { statusCode, headers, stream, type, metadata } = await send(req, req.url, { root: fixtures })
      t.assert.deepStrictEqual(type, 'directory')
      t.assert.ok(metadata.path)
      t.assert.ok(!metadata.stat)
      t.assert.ok(!metadata.error)
      t.assert.ok(metadata.requestPath)
      res.writeHead(statusCode, headers)
      stream.pipe(res)
    })

    await request(app)
      .get('/pets')
      .expect('Location', '/pets/')
      .expect(301)
  })

  await t.test('error type', async function (t) {
    t.plan(5)

    const app = http.createServer(async function (req, res) {
      const { statusCode, headers, stream, type, metadata } = await send(req, req.url, { root: fixtures })
      t.assert.deepStrictEqual(type, 'error')
      t.assert.ok(!metadata.path)
      t.assert.ok(!metadata.stat)
      t.assert.ok(metadata.error)
      t.assert.ok(!metadata.requestPath)
      res.writeHead(statusCode, headers)
      stream.pipe(res)
    })

    const path = Array(100).join('foobar')
    await request(app)
      .get('/' + path)
      .expect(404)
  })

  await t.test('custom directory index view', async function (t) {
    const app = http.createServer(async function (req, res) {
      const { statusCode, headers, stream, type, metadata } = await send(req, req.url, { root: fixtures })
      if (type === 'directory') {
        const list = await readdir(metadata.path)
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
        res.end(list.join('\n') + '\n')
      } else {
        res.writeHead(statusCode, headers)
        stream.pipe(res)
      }
    })

    await request(app)
      .get('/pets')
      .expect('Content-Type', 'text/plain; charset=utf-8')
      .expect(200, '.hidden.txt\nindex.html\n')
  })

  await t.test('serving from a root directory with custom error-handling', async function (t) {
    const app = http.createServer(async function (req, res) {
      const { statusCode, headers, stream, type, metadata } = await send(req, req.url, { root: fixtures })
      switch (type) {
        case 'directory': {
          res.writeHead(301, {
            Location: metadata.requestPath + '/'
          })
          res.end('Redirecting to ' + metadata.requestPath + '/')
          break
        }
        case 'error': {
          res.writeHead(metadata.error.status ?? 500, {})
          res.end(metadata.error.message)
          break
        }
        default: {
          // serve all files for download
          res.setHeader('Content-Disposition', 'attachment')
          res.writeHead(statusCode, headers)
          stream.pipe(res)
        }
      }
    })

    await request(app)
      .get('/pets')
      .expect('Location', '/pets/')
      .expect(301)

    await request(app)
      .get('/not-exists')
      .expect(404)

    await request(app)
      .get('/pets/index.html')
      .expect('Content-Disposition', 'attachment')
      .expect(200)
  })
})
