'use strict'

const { test } = require('node:test')
const fs = require('node:fs')
const http = require('node:http')
const path = require('node:path')
const request = require('supertest')
const { send } = require('..')
const { shouldNotHaveHeader, createServer } = require('./utils')

// test server

const fixtures = path.join(__dirname, 'fixtures')

test('send(file, options)', async function (t) {
  t.plan(11)

  await t.test('acceptRanges', async function (t) {
    t.plan(6)

    await t.test('should support disabling accept-ranges', async function (t) {
      t.plan(1)

      await request(createServer({ acceptRanges: false, root: fixtures }))
        .get('/nums.txt')
        .expect(shouldNotHaveHeader('Accept-Ranges', t))
        .expect(200)
    })

    await t.test('should ignore requested range', async function (t) {
      t.plan(2)

      await request(createServer({ acceptRanges: false, root: fixtures }))
        .get('/nums.txt')
        .set('Range', 'bytes=0-2')
        .expect(shouldNotHaveHeader('Accept-Ranges', t))
        .expect(shouldNotHaveHeader('Content-Range', t))
        .expect(200, '123456789')
    })

    await t.test('should limit high return size /1', async function (t) {
      t.plan(3)

      await request(createServer({ acceptRanges: true, maxContentRangeChunkSize: 1, root: fixtures }))
        .get('/nums.txt')
        .set('Range', 'bytes=0-2')
        .expect((res) => t.assert.deepStrictEqual(res.headers['accept-ranges'], 'bytes'))
        .expect((res) => t.assert.deepStrictEqual(res.headers['content-range'], 'bytes 0-0/9'))
        .expect((res) => t.assert.deepStrictEqual(res.headers['content-length'], '1', 'should content-length must be as same as maxContentRangeChunkSize'))
        .expect(206, '1')
    })

    await t.test('should limit high return size /2', async function (t) {
      t.plan(3)

      await request(createServer({ acceptRanges: true, maxContentRangeChunkSize: 1, root: fixtures }))
        .get('/nums.txt')
        .set('Range', 'bytes=1-2')
        .expect((res) => t.assert.deepStrictEqual(res.headers['accept-ranges'], 'bytes'))
        .expect((res) => t.assert.deepStrictEqual(res.headers['content-range'], 'bytes 1-1/9'))
        .expect((res) => t.assert.deepStrictEqual(res.headers['content-length'], '1', 'should content-length must be as same as maxContentRangeChunkSize'))
        .expect(206, '2')
    })

    await t.test('should limit high return size /3', async function (t) {
      t.plan(3)

      await request(createServer({ acceptRanges: true, maxContentRangeChunkSize: 1, root: fixtures }))
        .get('/nums.txt')
        .set('Range', 'bytes=1-3')
        .expect((res) => t.assert.deepStrictEqual(res.headers['accept-ranges'], 'bytes'))
        .expect((res) => t.assert.deepStrictEqual(res.headers['content-range'], 'bytes 1-1/9'))
        .expect((res) => t.assert.deepStrictEqual(res.headers['content-length'], '1', 'should content-length must be as same as maxContentRangeChunkSize'))
        .expect(206, '2')
    })

    await t.test('should limit high return size /4', async function (t) {
      t.plan(3)

      await request(createServer({ acceptRanges: true, maxContentRangeChunkSize: 4, root: fixtures }))
        .get('/nums.txt')
        .set('Range', 'bytes=1-2,3-6')
        .expect((res) => t.assert.deepStrictEqual(res.headers['accept-ranges'], 'bytes'))
        .expect((res) => t.assert.deepStrictEqual(res.headers['content-range'], 'bytes 1-4/9'))
        .expect((res) => t.assert.deepStrictEqual(res.headers['content-length'], '4', 'should content-length must be as same as maxContentRangeChunkSize'))
        .expect(206, '2345')
    })
  })

  await t.test('cacheControl', async function (t) {
    t.plan(2)

    await t.test('should support disabling cache-control', async function (t) {
      t.plan(1)
      await request(createServer({ cacheControl: false, root: fixtures }))
        .get('/name.txt')
        .expect(shouldNotHaveHeader('Cache-Control', t))
        .expect(200)
    })

    await t.test('should ignore maxAge option', async function (t) {
      t.plan(1)

      await request(createServer({ cacheControl: false, maxAge: 1000, root: fixtures }))
        .get('/name.txt')
        .expect(shouldNotHaveHeader('Cache-Control', t))
        .expect(200)
    })
  })

  await t.test('contentType', async function (t) {
    t.plan(1)

    await t.test('should support disabling content-type', async function (t) {
      t.plan(1)

      await request(createServer({ contentType: false, root: fixtures }))
        .get('/name.txt')
        .expect(shouldNotHaveHeader('Content-Type', t))
        .expect(200)
    })
  })

  await t.test('etag', async function (t) {
    t.plan(1)

    await t.test('should support disabling etags', async function (t) {
      t.plan(1)

      await request(createServer({ etag: false, root: fixtures }))
        .get('/name.txt')
        .expect(shouldNotHaveHeader('ETag', t))
        .expect(200)
    })
  })

  await t.test('extensions', async function (t) {
    t.plan(9)

    await t.test('should reject numbers', async function (t) {
      await request(createServer({ extensions: 42, root: fixtures }))
        .get('/pets/')
        .expect(500, /TypeError: extensions option/)
    })

    await t.test('should reject true', async function (t) {
      await request(createServer({ extensions: true, root: fixtures }))
        .get('/pets/')
        .expect(500, /TypeError: extensions option/)
    })

    await t.test('should be not be enabled by default', async function (t) {
      await request(createServer({ root: fixtures }))
        .get('/tobi')
        .expect(404)
    })

    await t.test('should be configurable', async function (t) {
      await request(createServer({ extensions: 'txt', root: fixtures }))
        .get('/name')
        .expect(200, 'tobi')
    })

    await t.test('should support disabling extensions', async function (t) {
      await request(createServer({ extensions: false, root: fixtures }))
        .get('/name')
        .expect(404)
    })

    await t.test('should support fallbacks', async function (t) {
      await request(createServer({ extensions: ['htm', 'html', 'txt'], root: fixtures }))
        .get('/name')
        .expect(200, '<p>tobi</p>')
    })

    await t.test('should 404 if nothing found', async function (t) {
      await request(createServer({ extensions: ['htm', 'html', 'txt'], root: fixtures }))
        .get('/bob')
        .expect(404)
    })

    await t.test('should skip directories', async function (t) {
      await request(createServer({ extensions: ['file', 'dir'], root: fixtures }))
        .get('/name')
        .expect(404)
    })

    await t.test('should not search if file has extension', async function (t) {
      await request(createServer({ extensions: 'html', root: fixtures }))
        .get('/thing.html')
        .expect(404)
    })
  })

  await t.test('lastModified', async function (t) {
    t.plan(1)

    await t.test('should support disabling last-modified', async function (t) {
      t.plan(1)

      await request(createServer({ lastModified: false, root: fixtures }))
        .get('/name.txt')
        .expect(shouldNotHaveHeader('Last-Modified', t))
        .expect(200)
    })
  })

  await t.test('dotfiles', async function (t) {
    t.plan(5)

    await t.test('should default to "ignore"', async function (t) {
      await request(createServer({ root: fixtures }))
        .get('/.hidden.txt')
        .expect(404)
    })

    await t.test('should reject bad value', async function (t) {
      await request(createServer({ dotfiles: 'bogus' }))
        .get('/name.txt')
        .expect(500, /dotfiles/)
    })

    await t.test('when "allow"', async function (t) {
      t.plan(3)

      await t.test('should send dotfile', async function (t) {
        await request(createServer({ dotfiles: 'allow', root: fixtures }))
          .get('/.hidden.txt')
          .expect(200, 'secret')
      })

      await t.test('should send within dotfile directory', async function (t) {
        await request(createServer({ dotfiles: 'allow', root: fixtures }))
          .get('/.mine/name.txt')
          .expect(200, /tobi/)
      })

      await t.test('should 404 for non-existent dotfile', async function (t) {
        await request(createServer({ dotfiles: 'allow', root: fixtures }))
          .get('/.nothere')
          .expect(404)
      })
    })

    await t.test('when "deny"', async function (t) {
      t.plan(10)

      await t.test('should 403 for dotfile', async function (t) {
        await request(createServer({ dotfiles: 'deny', root: fixtures }))
          .get('/.hidden.txt')
          .expect(403)
      })

      await t.test('should 403 for dotfile directory', async function (t) {
        await request(createServer({ dotfiles: 'deny', root: fixtures }))
          .get('/.mine')
          .expect(403)
      })

      await t.test('should 403 for dotfile directory with trailing slash', async function (t) {
        await request(createServer({ dotfiles: 'deny', root: fixtures }))
          .get('/.mine/')
          .expect(403)
      })

      await t.test('should 403 for file within dotfile directory', async function (t) {
        await request(createServer({ dotfiles: 'deny', root: fixtures }))
          .get('/.mine/name.txt')
          .expect(403)
      })

      await t.test('should 403 for non-existent dotfile', async function (t) {
        await request(createServer({ dotfiles: 'deny', root: fixtures }))
          .get('/.nothere')
          .expect(403)
      })

      await t.test('should 403 for non-existent dotfile directory', async function (t) {
        await request(createServer({ dotfiles: 'deny', root: fixtures }))
          .get('/.what/name.txt')
          .expect(403)
      })

      await t.test('should 403 for dotfile in directory', async function (t) {
        await request(createServer({ dotfiles: 'deny', root: fixtures }))
          .get('/pets/.hidden.txt')
          .expect(403)
      })

      await t.test('should 403 for dotfile in dotfile directory', async function (t) {
        await request(createServer({ dotfiles: 'deny', root: fixtures }))
          .get('/.mine/.hidden.txt')
          .expect(403)
      })

      await t.test('should send files in root dotfile directory', async function (t) {
        await request(createServer({ dotfiles: 'deny', root: path.join(fixtures, '.mine') }))
          .get('/name.txt')
          .expect(200, /tobi/)
      })

      await t.test('should 403 for dotfile without root', async function (t) {
        const server = http.createServer(async function onRequest (req, res) {
          const { statusCode, headers, stream } = await send(req, fixtures + '/.mine' + req.url, { dotfiles: 'deny' })
          res.writeHead(statusCode, headers)
          stream.pipe(res)
        })

        await request(server)
          .get('/name.txt')
          .expect(403)
      })
    })

    await t.test('when "ignore"', async function (t) {
      t.plan(8)

      await t.test('should 404 for dotfile', async function (t) {
        await request(createServer({ dotfiles: 'ignore', root: fixtures }))
          .get('/.hidden.txt')
          .expect(404)
      })

      await t.test('should 404 for dotfile directory', async function (t) {
        await request(createServer({ dotfiles: 'ignore', root: fixtures }))
          .get('/.mine')
          .expect(404)
      })

      await t.test('should 404 for dotfile directory with trailing slash', async function (t) {
        await request(createServer({ dotfiles: 'ignore', root: fixtures }))
          .get('/.mine/')
          .expect(404)
      })

      await t.test('should 404 for file within dotfile directory', async function (t) {
        await request(createServer({ dotfiles: 'ignore', root: fixtures }))
          .get('/.mine/name.txt')
          .expect(404)
      })

      await t.test('should 404 for non-existent dotfile', async function (t) {
        await request(createServer({ dotfiles: 'ignore', root: fixtures }))
          .get('/.nothere')
          .expect(404)
      })

      await t.test('should 404 for non-existent dotfile directory', async function (t) {
        await request(createServer({ dotfiles: 'ignore', root: fixtures }))
          .get('/.what/name.txt')
          .expect(404)
      })

      await t.test('should send files in root dotfile directory', async function (t) {
        await request(createServer({ dotfiles: 'ignore', root: path.join(fixtures, '.mine') }))
          .get('/name.txt')
          .expect(200, /tobi/)
      })

      await t.test('should 404 for dotfile without root', async function (t) {
        const server = http.createServer(async function onRequest (req, res) {
          const { statusCode, headers, stream } = await send(req, fixtures + '/.mine' + req.url, { dotfiles: 'ignore' })
          res.writeHead(statusCode, headers)
          stream.pipe(res)
        })

        await request(server)
          .get('/name.txt')
          .expect(404)
      })
    })
  })

  await t.test('immutable', async function (t) {
    t.plan(2)

    await t.test('should default to false', async function (t) {
      await request(createServer({ root: fixtures }))
        .get('/name.txt')
        .expect('Cache-Control', 'public, max-age=0')
    })

    await t.test('should set immutable directive in Cache-Control', async function (t) {
      await request(createServer({ immutable: true, maxAge: '1h', root: fixtures }))
        .get('/name.txt')
        .expect('Cache-Control', 'public, max-age=3600, immutable')
    })
  })

  await t.test('maxAge', async function (t) {
    t.plan(4)

    await t.test('should default to 0', async function (t) {
      await request(createServer({ root: fixtures }))
        .get('/name.txt')
        .expect('Cache-Control', 'public, max-age=0')
    })

    await t.test('should floor to integer', async function (t) {
      await request(createServer({ maxAge: 123956, root: fixtures }))
        .get('/name.txt')
        .expect('Cache-Control', 'public, max-age=123')
    })

    await t.test('should accept string', async function (t) {
      await request(createServer({ maxAge: '30d', root: fixtures }))
        .get('/name.txt')
        .expect('Cache-Control', 'public, max-age=2592000')
    })

    await t.test('should max at 1 year', async function (t) {
      await request(createServer({ maxAge: '2y', root: fixtures }))
        .get('/name.txt')
        .expect('Cache-Control', 'public, max-age=31536000')
    })
  })

  await t.test('index', async function (t) {
    t.plan(10)

    await t.test('should reject numbers', async function (t) {
      await request(createServer({ root: fixtures, index: 42 }))
        .get('/pets/')
        .expect(500, /TypeError: index option/)
    })

    await t.test('should reject true', async function (t) {
      await request(createServer({ root: fixtures, index: true }))
        .get('/pets/')
        .expect(500, /TypeError: index option/)
    })

    await t.test('should default to index.html', async function (t) {
      await request(createServer({ root: fixtures }))
        .get('/pets/')
        .expect(fs.readFileSync(path.join(fixtures, 'pets', 'index.html'), 'utf8'))
    })

    await t.test('should be configurable', async function (t) {
      await request(createServer({ root: fixtures, index: 'tobi.html' }))
        .get('/')
        .expect(200, '<p>tobi</p>')
    })

    await t.test('should support disabling', async function (t) {
      await request(createServer({ root: fixtures, index: false }))
        .get('/pets/')
        .expect(403)
    })

    await t.test('should support fallbacks', async function (t) {
      await request(createServer({ root: fixtures, index: ['default.htm', 'index.html'] }))
        .get('/pets/')
        .expect(200, fs.readFileSync(path.join(fixtures, 'pets', 'index.html'), 'utf8'))
    })

    await t.test('should 404 if no index file found (file)', async function (t) {
      await request(createServer({ root: fixtures, index: 'default.htm' }))
        .get('/pets/')
        .expect(404)
    })

    await t.test('should 404 if no index file found (dir)', async function (t) {
      await request(createServer({ root: fixtures, index: 'pets' }))
        .get('/')
        .expect(404)
    })

    await t.test('should not follow directories', async function (t) {
      await request(createServer({ root: fixtures, index: ['pets', 'name.txt'] }))
        .get('/')
        .expect(200, 'tobi')
    })

    await t.test('should work without root', async function (t) {
      const server = http.createServer(async function (req, res) {
        const p = path.join(fixtures, 'pets').replace(/\\/g, '/') + '/'
        const { statusCode, headers, stream } = await send(req, p, { index: ['index.html'] })
        res.writeHead(statusCode, headers)
        stream.pipe(res)
      })

      await request(server)
        .get('/')
        .expect(200, /tobi/)
    })
  })

  await t.test('root', async function (t) {
    t.plan(2)

    await t.test('when given', async function (t) {
      t.plan(8)

      await t.test('should join root', async function (t) {
        await request(createServer({ root: fixtures }))
          .get('/pets/../name.txt')
          .expect(200, 'tobi')
      })

      await t.test('should work with trailing slash', async function (t) {
        const app = http.createServer(async function (req, res) {
          const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures + '/' })
          res.writeHead(statusCode, headers)
          stream.pipe(res)
        })

        await request(app)
          .get('/name.txt')
          .expect(200, 'tobi')
      })

      await t.test('should work with empty path', async function (t) {
        const app = http.createServer(async function (req, res) {
          const { statusCode, headers, stream } = await send(req, '', { root: fixtures })
          res.writeHead(statusCode, headers)
          stream.pipe(res)
        })

        await request(app)
          .get('/name.txt')
          .expect(301, /Redirecting to/)
      })

      //
      // NOTE: This is not a real part of the API, but
      //       over time this has become something users
      //       are doing, so this will prevent unseen
      //       regressions around this use-case.
      //
      await t.test('should try as file with empty path', async function (t) {
        const app = http.createServer(async function (req, res) {
          const { statusCode, headers, stream } = await send(req, '', { root: path.join(fixtures, 'name.txt') })
          res.writeHead(statusCode, headers)
          stream.pipe(res)
        })

        await request(app)
          .get('/')
          .expect(200, 'tobi')
      })

      await t.test('should restrict paths to within root', async function (t) {
        await request(createServer({ root: fixtures }))
          .get('/pets/../../send.js')
          .expect(403)
      })

      await t.test('should allow .. in root', async function (t) {
        const app = http.createServer(async function (req, res) {
          const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures + '/../fixtures' })
          res.writeHead(statusCode, headers)
          stream.pipe(res)
        })

        await request(app)
          .get('/pets/../../send.js')
          .expect(403)
      })

      await t.test('should not allow root transversal', async function (t) {
        await request(createServer({ root: path.join(fixtures, 'name.d') }))
          .get('/../name.dir/name.txt')
          .expect(403)
      })

      await t.test('should not allow root path disclosure', async function (t) {
        await request(createServer({ root: fixtures }))
          .get('/pets/../../fixtures/name.txt')
          .expect(403)
      })
    })

    await t.test('when missing', async function (t) {
      t.plan(2)

      await t.test('should consider .. malicious', async function (t) {
        const app = http.createServer(async function (req, res) {
          const { statusCode, headers, stream } = await send(req, fixtures + req.url)
          res.writeHead(statusCode, headers)
          stream.pipe(res)
        })

        await request(app)
          .get('/../send.js')
          .expect(403)
      })

      await t.test('should still serve files with dots in name', async function (t) {
        const app = http.createServer(async function (req, res) {
          const { statusCode, headers, stream } = await send(req, fixtures + req.url)
          res.writeHead(statusCode, headers)
          stream.pipe(res)
        })

        await request(app)
          .get('/do..ts.txt')
          .expect(200, '...')
      })
    })
  })
})
