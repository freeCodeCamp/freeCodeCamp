'use strict'

const { test } = require('node:test')
const http = require('node:http')
const path = require('node:path')
const request = require('supertest')
const send = require('../lib/send').send
const { shouldNotHaveBody, createServer, shouldNotHaveHeader } = require('./utils')

const dateRegExp = /^\w{3}, \d+ \w+ \d+ \d+:\d+:\d+ \w+$/
const fixtures = path.join(__dirname, 'fixtures')

test('send(file)', async function (t) {
  t.plan(22)

  await t.test('should stream the file contents', async function (t) {
    const app = http.createServer(async function (req, res) {
      const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
      res.writeHead(statusCode, headers)
      stream.pipe(res)
    })

    await request(app)
      .get('/name.txt')
      .expect('Content-Length', '4')
      .expect(200, 'tobi')
  })

  await t.test('should stream a zero-length file', async function (t) {
    const app = http.createServer(async function (req, res) {
      const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
      res.writeHead(statusCode, headers)
      stream.pipe(res)
    })

    await request(app)
      .get('/empty.txt')
      .expect('Content-Length', '0')
      .expect(200, '')
  })

  await t.test('should decode the given path as a URI', async function (t) {
    const app = http.createServer(async function (req, res) {
      const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
      res.writeHead(statusCode, headers)
      stream.pipe(res)
    })

    await request(app)
      .get('/some%20thing.txt')
      .expect(200, 'hey')
  })

  await t.test('should serve files with dots in name', async function (t) {
    const app = http.createServer(async function (req, res) {
      const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
      res.writeHead(statusCode, headers)
      stream.pipe(res)
    })

    await request(app)
      .get('/do..ts.txt')
      .expect(200, '...')
  })

  await t.test('should treat a malformed URI as a bad request', async function (t) {
    const app = http.createServer(async function (req, res) {
      const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
      res.writeHead(statusCode, headers)
      stream.pipe(res)
    })

    await request(app)
      .get('/some%99thing.txt')
      .expect(400, /Bad Request/)
  })

  await t.test('should 400 on NULL bytes', async function (t) {
    const app = http.createServer(async function (req, res) {
      const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
      res.writeHead(statusCode, headers)
      stream.pipe(res)
    })

    await request(app)
      .get('/some%00thing.txt')
      .expect(400, /Bad Request/)
  })

  await t.test('should treat an ENAMETOOLONG as a 404', async function (t) {
    const app = http.createServer(async function (req, res) {
      const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
      res.writeHead(statusCode, headers)
      stream.pipe(res)
    })

    const path = Array(100).join('foobar')
    await request(app)
      .get('/' + path)
      .expect(404)
  })

  await t.test('should support HEAD', async function (t) {
    t.plan(1)

    const app = http.createServer(async function (req, res) {
      const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
      res.writeHead(statusCode, headers)
      stream.pipe(res)
    })

    await request(app)
      .head('/name.txt')
      .expect(200)
      .expect('Content-Length', '4')
      .expect(shouldNotHaveBody(t))
  })

  await t.test('should add an ETag header field', async function (t) {
    const app = http.createServer(async function (req, res) {
      const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
      res.writeHead(statusCode, headers)
      stream.pipe(res)
    })

    await request(app)
      .get('/name.txt')
      .expect('etag', /^W\/"[^"]+"$/)
  })

  await t.test('should add a Date header field', async function (t) {
    const app = http.createServer(async function (req, res) {
      const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
      res.writeHead(statusCode, headers)
      stream.pipe(res)
    })

    await request(app)
      .get('/name.txt')
      .expect('date', dateRegExp)
  })

  await t.test('should add a Last-Modified header field', async function (t) {
    const app = http.createServer(async function (req, res) {
      const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
      res.writeHead(statusCode, headers)
      stream.pipe(res)
    })

    await request(app)
      .get('/name.txt')
      .expect('last-modified', dateRegExp)
  })

  await t.test('should add a Accept-Ranges header field', async function (t) {
    const app = http.createServer(async function (req, res) {
      const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
      res.writeHead(statusCode, headers)
      stream.pipe(res)
    })

    await request(app)
      .get('/name.txt')
      .expect('Accept-Ranges', 'bytes')
  })

  await t.test('should 404 if the file does not exist', async function (t) {
    const app = http.createServer(async function (req, res) {
      const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
      res.writeHead(statusCode, headers)
      stream.pipe(res)
    })

    await request(app)
      .get('/meow')
      .expect(404, /Not Found/)
  })

  await t.test('should 404 if the filename is too long', async function (t) {
    const app = http.createServer(async function (req, res) {
      const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
      res.writeHead(statusCode, headers)
      stream.pipe(res)
    })

    const longFilename = new Array(512).fill('a').join('')

    await request(app)
      .get('/' + longFilename)
      .expect(404, /Not Found/)
  })

  await t.test('should 404 if the requested resource is not a directory', async function (t) {
    const app = http.createServer(async function (req, res) {
      const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
      res.writeHead(statusCode, headers)
      stream.pipe(res)
    })

    await request(app)
      .get('/nums.txt/invalid')
      .expect(404, /Not Found/)
  })

  await t.test('should not override content-type', async function (t) {
    const app = http.createServer(async function (req, res) {
      const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
      res.writeHead(statusCode, {
        ...headers,
        'Content-Type': 'application/x-custom'
      })
      stream.pipe(res)
    })
    await request(app)
      .get('/name.txt')
      .expect('Content-Type', 'application/x-custom')
  })

  await t.test('should set Content-Type via mime map', async function (t) {
    const app = http.createServer(async function (req, res) {
      const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
      res.writeHead(statusCode, headers)
      stream.pipe(res)
    })

    await request(app)
      .get('/name.txt')
      .expect('Content-Type', 'text/plain; charset=utf-8')
      .expect(200)

    await request(app)
      .get('/tobi.html')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(200)
  })

  await t.test('send directory', async function (t) {
    t.plan(5)

    await t.test('should redirect directories to trailing slash', async function (t) {
      await request(createServer({ root: fixtures }))
        .get('/pets')
        .expect('Location', '/pets/')
        .expect(301)
    })

    await t.test('should respond with an HTML redirect', async function (t) {
      await request(createServer({ root: fixtures }))
        .get('/pets')
        .expect('Location', '/pets/')
        .expect('Content-Type', /html/)
        .expect(301, />Redirecting to \/pets\/</)
    })

    await t.test('should respond with default Content-Security-Policy', async function (t) {
      await request(createServer({ root: fixtures }))
        .get('/pets')
        .expect('Location', '/pets/')
        .expect('Content-Security-Policy', "default-src 'none'")
        .expect(301)
    })

    await t.test('should not redirect to protocol-relative locations', async function (t) {
      await request(createServer({ root: fixtures }))
        .get('//pets')
        .expect('Location', '/pets/')
        .expect(301)
    })

    await t.test('should respond with an HTML redirect', async function (t) {
      const app = http.createServer(async function (req, res) {
        const { statusCode, headers, stream } = await send(req, req.url.replace('/snow', '/snow ☃'), { root: 'test/fixtures' })
        res.writeHead(statusCode, headers)
        stream.pipe(res)
      })

      await request(app)
        .get('/snow')
        .expect('Location', '/snow%20%E2%98%83/')
        .expect('Content-Type', /html/)
        .expect(301, />Redirecting to \/snow%20%E2%98%83\/</)
    })
  })

  await t.test('send error', async function (t) {
    t.plan(2)

    await t.test('should respond to errors directly', async function (t) {
      await request(createServer({ root: fixtures }))
        .get('/foobar')
        .expect(404, />Not Found</)
    })

    await t.test('should respond with default Content-Security-Policy', async function (t) {
      await request(createServer({ root: fixtures }))
        .get('/foobar')
        .expect('Content-Security-Policy', "default-src 'none'")
        .expect(404)
    })
  })

  await t.test('with conditional-GET', async function (t) {
    t.plan(6)

    await t.test('should remove Content headers with 304', async function (t) {
      const server = createServer({ root: fixtures }, function (_req, res) {
        res.setHeader('Content-Language', 'en-US')
        res.setHeader('Content-Location', 'http://localhost/name.txt')
        res.setHeader('Contents', 'foo')
      })

      const res = await request(server)
        .get('/name.txt')
        .expect(200)

      await request(server)
        .get('/name.txt')
        .set('If-None-Match', res.headers.etag)
        .expect('Content-Location', 'http://localhost/name.txt')
        .expect('Contents', 'foo')
        .expect(304)
    })

    await t.test('should not remove all Content-* headers', async function (t) {
      const server = createServer({ root: fixtures }, function (_req, res) {
        res.setHeader('Content-Location', 'http://localhost/name.txt')
        res.setHeader('Content-Security-Policy', 'default-src \'self\'')
      })

      const res = await request(server)
        .get('/name.txt')
        .expect(200)

      await request(server)
        .get('/name.txt')
        .set('If-None-Match', res.headers.etag)
        .expect('Content-Location', 'http://localhost/name.txt')
        .expect('Content-Security-Policy', 'default-src \'self\'')
        .expect(304)
    })

    await t.test('where "If-Match" is set', async function (t) {
      t.plan(4)

      await t.test('should respond with 200 when "*"', async function (t) {
        const app = http.createServer(async function (req, res) {
          const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
          res.writeHead(statusCode, headers)
          stream.pipe(res)
        })

        await request(app)
          .get('/name.txt')
          .set('If-Match', '*')
          .expect(200)
      })

      await t.test('should respond with 412 when ETag unmatched', async function (t) {
        const app = http.createServer(async function (req, res) {
          const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
          res.writeHead(statusCode, headers)
          stream.pipe(res)
        })

        await request(app)
          .get('/name.txt')
          .set('If-Match', ' "foo",, "bar" ,')
          .expect(412)
      })

      await t.test('should respond with 200 when ETag matched /1', async function (t) {
        const app = http.createServer(async function (req, res) {
          const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
          res.writeHead(statusCode, headers)
          stream.pipe(res)
        })

        const res = await request(app)
          .get('/name.txt')
          .expect(200)

        await request(app)
          .get('/name.txt')
          .set('If-Match', '"foo", "bar", ' + res.headers.etag)
          .expect(200)
      })

      await t.test('should respond with 200 when ETag matched /2', async function (t) {
        const app = http.createServer(async function (req, res) {
          const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
          res.writeHead(statusCode, headers)
          stream.pipe(res)
        })

        const res = await request(app)
          .get('/name.txt')
          .expect(200)

        await request(app)
          .get('/name.txt')
          .set('If-Match', '"foo", ' + res.headers.etag + ', "bar"')
          .expect(200)
      })
    })

    await t.test('where "If-Modified-Since" is set', async function (t) {
      t.plan(3)

      await t.test('should respond with 304 when unmodified', async function (t) {
        const app = http.createServer(async function (req, res) {
          const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
          res.writeHead(statusCode, headers)
          stream.pipe(res)
        })

        const res = await request(app)
          .get('/name.txt')
          .expect(200)

        await request(app)
          .get('/name.txt')
          .set('If-Modified-Since', res.headers['last-modified'])
          .expect(304)
      })

      await t.test('should respond with 200 when modified', async function (t) {
        const app = http.createServer(async function (req, res) {
          const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
          res.writeHead(statusCode, headers)
          stream.pipe(res)
        })

        const res = await request(app)
          .get('/name.txt')
          .expect(200)

        const lmod = new Date(res.headers['last-modified'])
        const date = new Date(lmod - 60000)
        await request(app)
          .get('/name.txt')
          .set('If-Modified-Since', date.toUTCString())
          .expect(200, 'tobi')
      })

      await t.test('should respond with 200 when modified', async function (t) {
        const app = http.createServer(async function (req, res) {
          const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
          res.writeHead(statusCode, headers)
          stream.pipe(res)
        })

        const res = await request(app)
          .get('/name.txt')
          .expect(200)

        await request(app)
          .get('/name.txt')
          .set('If-Modified-Since', res.headers['last-modified'])
          .set('cache-control', 'no-cache')
          .expect(200, 'tobi')
      })
    })

    await t.test('where "If-None-Match" is set', async function (t) {
      t.plan(6)

      await t.test('should respond with 304 when ETag matched', async function (t) {
        const app = http.createServer(async function (req, res) {
          const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
          res.writeHead(statusCode, headers)
          stream.pipe(res)
        })

        const res = await request(app)
          .get('/name.txt')
          .expect(200)

        await request(app)
          .get('/name.txt')
          .set('If-None-Match', res.headers.etag)
          .expect(304)
      })

      await t.test('should respond with 200 when ETag unmatched', async function (t) {
        const app = http.createServer(async function (req, res) {
          const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
          res.writeHead(statusCode, headers)
          stream.pipe(res)
        })

        await request(app)
          .get('/name.txt')
          .expect(200)

        await request(app)
          .get('/name.txt')
          .set('If-None-Match', '"123"')
          .expect(200, 'tobi')
      })

      await t.test('should respond with 200 when ETag is not generated', async function (t) {
        const app = http.createServer(async function (req, res) {
          const { statusCode, headers, stream } = await send(req, req.url, { etag: false, root: fixtures })
          res.writeHead(statusCode, headers)
          stream.pipe(res)
        })

        await request(app)
          .get('/name.txt')
          .expect(200)

        await request(app)
          .get('/name.txt')
          .set('If-None-Match', '"123"')
          .expect(200, 'tobi')
      })

      await t.test('should respond with 306 Not Modified when using wildcard * on existing file', async function (t) {
        const app = http.createServer(async function (req, res) {
          const { statusCode, headers, stream } = await send(req, req.url, { etag: false, root: fixtures })
          res.writeHead(statusCode, headers)
          stream.pipe(res)
        })

        await request(app)
          .get('/name.txt')
          .expect(200)

        await request(app)
          .get('/name.txt')
          .set('If-None-Match', '*')
          .expect(304, '')
      })

      await t.test('should respond with 404 Not Found when using wildcard * on non-existing file', async function (t) {
        const app = http.createServer(async function (req, res) {
          const { statusCode, headers, stream } = await send(req, req.url, { etag: false, root: fixtures })
          res.writeHead(statusCode, headers)
          stream.pipe(res)
        })

        await request(app)
          .get('/asdf.txt')
          .set('If-None-Match', '*')
          .expect(404, /Not Found/)
      })

      await t.test('should respond with 200 cache-control is set to no-cache', async function (t) {
        const app = http.createServer(async function (req, res) {
          const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
          res.writeHead(statusCode, headers)
          stream.pipe(res)
        })

        const res = await request(app)
          .get('/name.txt')
          .expect(200)

        await request(app)
          .get('/name.txt')
          .set('If-None-Match', res.headers.etag)
          .set('cache-control', 'no-cache')
          .expect(200, 'tobi')
      })
    })

    await t.test('where "If-Unmodified-Since" is set', async function (t) {
      t.plan(3)

      await t.test('should respond with 200 when unmodified', async function (t) {
        const app = http.createServer(async function (req, res) {
          const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
          res.writeHead(statusCode, headers)
          stream.pipe(res)
        })

        const res = await request(app)
          .get('/name.txt')
          .expect(200)

        await request(app)
          .get('/name.txt')
          .set('If-Unmodified-Since', res.headers['last-modified'])
          .expect(200)
      })

      await t.test('should respond with 412 when modified', async function (t) {
        const app = http.createServer(async function (req, res) {
          const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
          res.writeHead(statusCode, headers)
          stream.pipe(res)
        })

        const res = await request(app)
          .get('/name.txt')
          .expect(200)

        const lmod = new Date(res.headers['last-modified'])
        const date = new Date(lmod - 60000).toUTCString()
        await request(app)
          .get('/name.txt')
          .set('If-Unmodified-Since', date)
          .expect(412)
      })

      await t.test('should respond with 200 when invalid date', async function (t) {
        const app = http.createServer(async function (req, res) {
          const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
          res.writeHead(statusCode, headers)
          stream.pipe(res)
        })

        await request(app)
          .get('/name.txt')
          .set('If-Unmodified-Since', 'foo')
          .expect(200)
      })
    })
  })

  await t.test('with Range request', async function (t) {
    t.plan(13)

    await t.test('should support byte ranges', async function (t) {
      const app = http.createServer(async function (req, res) {
        const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
        res.writeHead(statusCode, headers)
        stream.pipe(res)
      })

      await request(app)
        .get('/nums.txt')
        .set('Range', 'bytes=0-4')
        .expect(206, '12345')
    })

    await t.test('should ignore non-byte ranges', async function (t) {
      const app = http.createServer(async function (req, res) {
        const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
        res.writeHead(statusCode, headers)
        stream.pipe(res)
      })

      await request(app)
        .get('/nums.txt')
        .set('Range', 'items=0-4')
        .expect(200, '123456789')
    })

    await t.test('should be inclusive', async function (t) {
      const app = http.createServer(async function (req, res) {
        const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
        res.writeHead(statusCode, headers)
        stream.pipe(res)
      })

      await request(app)
        .get('/nums.txt')
        .set('Range', 'bytes=0-0')
        .expect(206, '1')
    })

    await t.test('should set Content-Range', async function (t) {
      const app = http.createServer(async function (req, res) {
        const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
        res.writeHead(statusCode, headers)
        stream.pipe(res)
      })

      await request(app)
        .get('/nums.txt')
        .set('Range', 'bytes=2-5')
        .expect('Content-Range', 'bytes 2-5/9')
        .expect(206)
    })

    await t.test('should support -n', async function (t) {
      const app = http.createServer(async function (req, res) {
        const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
        res.writeHead(statusCode, headers)
        stream.pipe(res)
      })

      await request(app)
        .get('/nums.txt')
        .set('Range', 'bytes=-3')
        .expect(206, '789')
    })

    await t.test('should support n-', async function (t) {
      const app = http.createServer(async function (req, res) {
        const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
        res.writeHead(statusCode, headers)
        stream.pipe(res)
      })

      await request(app)
        .get('/nums.txt')
        .set('Range', 'bytes=3-')
        .expect(206, '456789')
    })

    await t.test('should respond with 206 "Partial Content"', async function (t) {
      const app = http.createServer(async function (req, res) {
        const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
        res.writeHead(statusCode, headers)
        stream.pipe(res)
      })

      await request(app)
        .get('/nums.txt')
        .set('Range', 'bytes=0-4')
        .expect(206)
    })

    await t.test('should set Content-Length to the # of octets transferred', async function (t) {
      const app = http.createServer(async function (req, res) {
        const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
        res.writeHead(statusCode, headers)
        stream.pipe(res)
      })

      await request(app)
        .get('/nums.txt')
        .set('Range', 'bytes=2-3')
        .expect('Content-Length', '2')
        .expect(206, '34')
    })

    await t.test('when last-byte-pos of the range is greater the length', async function (t) {
      t.plan(2)

      await t.test('is taken to be equal to one less than the length', async function (t) {
        const app = http.createServer(async function (req, res) {
          const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
          res.writeHead(statusCode, headers)
          stream.pipe(res)
        })

        await request(app)
          .get('/nums.txt')
          .set('Range', 'bytes=2-50')
          .expect('Content-Range', 'bytes 2-8/9')
          .expect(206)
      })

      await t.test('should adapt the Content-Length accordingly', async function (t) {
        const app = http.createServer(async function (req, res) {
          const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
          res.writeHead(statusCode, headers)
          stream.pipe(res)
        })

        await request(app)
          .get('/nums.txt')
          .set('Range', 'bytes=2-50')
          .expect('Content-Length', '7')
          .expect(206)
      })
    })

    await t.test('when the first- byte-pos of the range is greater length', async function (t) {
      t.plan(2)

      await t.test('should respond with 416', async function (t) {
        const app = http.createServer(async function (req, res) {
          const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
          res.writeHead(statusCode, headers)
          stream.pipe(res)
        })

        await request(app)
          .get('/nums.txt')
          .set('Range', 'bytes=9-50')
          .expect('Content-Range', 'bytes */9')
          .expect(416)
      })

      await t.test('should emit error 416 with content-range header', async function (t) {
        const server = http.createServer(async function (req, res) {
          const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
          res.writeHead(statusCode, {
            ...headers,
            'X-Content-Range': headers['Content-Range']
          })
          stream.pipe(res)
        })

        await request(server)
          .get('/nums.txt')
          .set('Range', 'bytes=9-50')
          .expect('X-Content-Range', 'bytes */9')
          .expect(416)
      })
    })

    await t.test('when syntactically invalid', async function (t) {
      t.plan(1)

      await t.test('should respond with 200 and the entire contents', async function (t) {
        const app = http.createServer(async function (req, res) {
          const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
          res.writeHead(statusCode, headers)
          stream.pipe(res)
        })

        await request(app)
          .get('/nums.txt')
          .set('Range', 'asdf')
          .expect(200, '123456789')
      })
    })

    await t.test('when multiple ranges', async function (t) {
      t.plan(2)

      await t.test('should respond with 200 and the entire contents', async function (t) {
        t.plan(1)

        const app = http.createServer(async function (req, res) {
          const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
          res.writeHead(statusCode, headers)
          stream.pipe(res)
        })

        await request(app)
          .get('/nums.txt')
          .set('Range', 'bytes=1-1,3-')
          .expect(shouldNotHaveHeader('Content-Range', t))
          .expect(200, '123456789')
      })

      await t.test('should respond with 206 is all ranges can be combined', async function (t) {
        const app = http.createServer(async function (req, res) {
          const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
          res.writeHead(statusCode, headers)
          stream.pipe(res)
        })

        await request(app)
          .get('/nums.txt')
          .set('Range', 'bytes=1-2,3-5')
          .expect('Content-Range', 'bytes 1-5/9')
          .expect(206, '23456')
      })
    })

    await t.test('when if-range present', async function (t) {
      t.plan(5)

      await t.test('should respond with parts when etag unchanged', async function (t) {
        const app = http.createServer(async function (req, res) {
          const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
          res.writeHead(statusCode, headers)
          stream.pipe(res)
        })

        const res = await request(app)
          .get('/nums.txt')
          .expect(200)

        const etag = res.headers.etag

        await request(app)
          .get('/nums.txt')
          .set('If-Range', etag)
          .set('Range', 'bytes=0-0')
          .expect(206, '1')
      })

      await t.test('should respond with 200 when etag changed', async function (t) {
        const app = http.createServer(async function (req, res) {
          const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
          res.writeHead(statusCode, headers)
          stream.pipe(res)
        })

        const res = await request(app)
          .get('/nums.txt')
          .expect(200)

        const etag = res.headers.etag.replace(/"(.)/, '"0$1')

        await request(app)
          .get('/nums.txt')
          .set('If-Range', etag)
          .set('Range', 'bytes=0-0')
          .expect(200, '123456789')
      })

      await t.test('should respond with parts when modified unchanged', async function (t) {
        const app = http.createServer(async function (req, res) {
          const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
          res.writeHead(statusCode, headers)
          stream.pipe(res)
        })

        const res = await request(app)
          .get('/nums.txt')
          .expect(200)

        const modified = res.headers['last-modified']

        await request(app)
          .get('/nums.txt')
          .set('If-Range', modified)
          .set('Range', 'bytes=0-0')
          .expect(206, '1')
      })

      await t.test('should respond with 200 when modified changed', async function (t) {
        const app = http.createServer(async function (req, res) {
          const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
          res.writeHead(statusCode, headers)
          stream.pipe(res)
        })

        const res = await request(app)
          .get('/nums.txt')
          .expect(200)

        const modified = Date.parse(res.headers['last-modified']) - 20000

        await request(app)
          .get('/nums.txt')
          .set('If-Range', new Date(modified).toUTCString())
          .set('Range', 'bytes=0-0')
          .expect(200, '123456789')
      })

      await t.test('should respond with 200 when invalid value', async function (t) {
        const app = http.createServer(async function (req, res) {
          const { statusCode, headers, stream } = await send(req, req.url, { root: fixtures })
          res.writeHead(statusCode, headers)
          stream.pipe(res)
        })

        await request(app)
          .get('/nums.txt')
          .set('If-Range', 'foo')
          .set('Range', 'bytes=0-0')
          .expect(200, '123456789')
      })
    })
  })

  await t.test('when "options" is specified', async function (t) {
    t.plan(4)

    await t.test('should support start/end', async function (t) {
      await request(createServer({ root: fixtures, start: 3, end: 5 }))
        .get('/nums.txt')
        .expect(200, '456')
    })

    await t.test('should adjust too large end', async function (t) {
      await request(createServer({ root: fixtures, start: 3, end: 90 }))
        .get('/nums.txt')
        .expect(200, '456789')
    })

    await t.test('should support start/end with Range request', async function (t) {
      await request(createServer({ root: fixtures, start: 0, end: 2 }))
        .get('/nums.txt')
        .set('Range', 'bytes=-2')
        .expect(206, '23')
    })

    await t.test('should support start/end with unsatisfiable Range request', async function (t) {
      await request(createServer({ root: fixtures, start: 0, end: 2 }))
        .get('/nums.txt')
        .set('Range', 'bytes=5-9')
        .expect('Content-Range', 'bytes */3')
        .expect(416)
    })
  })
})
