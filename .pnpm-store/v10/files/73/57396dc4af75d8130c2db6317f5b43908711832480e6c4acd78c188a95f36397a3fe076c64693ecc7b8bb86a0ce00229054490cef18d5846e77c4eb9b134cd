'use strict'

/* eslint n/no-deprecated-api: "off" */

const fs = require('node:fs')
const http = require('node:http')
const path = require('node:path')
const { test } = require('node:test')
const Fastify = require('fastify')

const fastifyStatic = require('..')
const dirList = require('../lib/dirList')

const helper = {
  arrange: async function (t, options, f) {
    const fastify = Fastify()
    fastify.register(fastifyStatic, options)
    t.after(() => fastify.close())
    await fastify.listen({ port: 0 })
    fastify.server.unref()
    await f('http://localhost:' + fastify.server.address().port)
  },
  rawRequest: async function (baseUrl, route) {
    const url = new URL(baseUrl)

    return await new Promise((resolve, reject) => {
      const request = http.request({
        hostname: url.hostname,
        port: url.port,
        path: route,
        method: 'GET'
      }, (response) => {
        let body = ''
        response.setEncoding('utf8')
        response.on('data', chunk => { body += chunk })
        response.on('end', () => {
          resolve({
            statusCode: response.statusCode,
            body
          })
        })
      })

      request.on('error', reject)
      request.end()
    })
  }
}

try {
  fs.mkdirSync(path.join(__dirname, 'static/shallow/empty'))
} catch {}

test('throws when `root` is an array', t => {
  t.plan(2)

  const err = dirList.validateOptions({ root: ['hello', 'world'], list: true })
  t.assert.ok(err instanceof TypeError)
  t.assert.deepStrictEqual(err.message, 'multi-root with list option is not supported')
})

test('throws when `list.format` option is invalid', t => {
  t.plan(2)

  const err = dirList.validateOptions({ list: { format: 'hello' } })
  t.assert.ok(err instanceof TypeError)
  t.assert.deepStrictEqual(err.message, 'The `list.format` option must be json or html')
})

test('throws when `list.names option` is not an array', t => {
  t.plan(2)

  const err = dirList.validateOptions({ list: { names: 'hello' } })
  t.assert.ok(err instanceof TypeError)
  t.assert.deepStrictEqual(err.message, 'The `list.names` option must be an array')
})

test('throws when `list.jsonFormat` option is invalid', t => {
  t.plan(2)

  const err = dirList.validateOptions({ list: { jsonFormat: 'hello' } })
  t.assert.ok(err instanceof TypeError)
  t.assert.deepStrictEqual(err.message, 'The `list.jsonFormat` option must be name or extended')
})

test('throws when `list.format` is html and `list render` is not a function', t => {
  t.plan(2)

  const err = dirList.validateOptions({ list: { format: 'html', render: 'hello' } })
  t.assert.ok(err instanceof TypeError)
  t.assert.deepStrictEqual(err.message, 'The `list.render` option must be a function and is required with html format')
})

test('dir list path stays within the configured root', t => {
  t.plan(3)

  const root = path.join(__dirname, '/static')

  t.assert.deepStrictEqual(dirList.path(root, '/'), root)
  t.assert.deepStrictEqual(dirList.path(root, '/deep/path/'), path.join(root, 'deep/path'))
  t.assert.deepStrictEqual(dirList.path(root, '/../'), null)
})

test('dir list wrong options', async t => {
  t.plan(3)

  const cases = [
    {
      options: {
        root: path.join(__dirname, '/static'),
        prefix: '/public',
        list: {
          format: 'no-json,no-html'
        }
      },
      error: new TypeError('The `list.format` option must be json or html')
    },
    {
      options: {
        root: path.join(__dirname, '/static'),
        list: {
          format: 'html'
          // no render function
        }
      },
      error: new TypeError('The `list.render` option must be a function and is required with html format')
    },
    {
      options: {
        root: path.join(__dirname, '/static'),
        list: {
          names: 'not-an-array'
        }
      },
      error: new TypeError('The `list.names` option must be an array')
    }
  ]

  for (const case_ of cases) {
    const fastify = Fastify()
    fastify.register(fastifyStatic, case_.options)
    await t.assert.rejects(fastify.listen({ port: 0 }), new TypeError(case_.error.message))
    fastify.server.unref()
  }
})

test('dir list default options', async t => {
  t.plan(1)

  const options = {
    root: path.join(__dirname, '/static'),
    prefix: '/public',
    list: true
  }
  const route = '/public/shallow'
  const content = { dirs: ['empty'], files: ['sample.jpg'] }

  await helper.arrange(t, options, async (url) => {
    await t.test(route, async t => {
      t.plan(3)

      const response = await fetch(url + route)
      t.assert.ok(response.ok)
      t.assert.deepStrictEqual(response.status, 200)
      t.assert.deepStrictEqual(await response.json(), content)
    })
  })
})

test('dir list, custom options', async t => {
  t.plan(1)

  const options = {
    root: path.join(__dirname, '/static'),
    prefix: '/public',
    index: false,
    list: true
  }

  const route = '/public/'
  const content = { dirs: ['deep', 'shallow'], files: ['.example', '100%.txt', 'a .md', 'foo.html', 'foobar.html', 'index.css', 'index.html'] }

  await helper.arrange(t, options, async (url) => {
    await t.test(route, async t => {
      t.plan(3)

      const response = await fetch(url + route)
      t.assert.ok(response.ok)
      t.assert.deepStrictEqual(response.status, 200)
      t.assert.deepStrictEqual(await response.json(), content)
    })
  })
})

test('dir list, custom options with empty array index', async t => {
  t.plan(1)

  const options = {
    root: path.join(__dirname, '/static'),
    prefix: '/public',
    index: [],
    list: true
  }

  const route = '/public/'
  const content = { dirs: ['deep', 'shallow'], files: ['.example', '100%.txt', 'a .md', 'foo.html', 'foobar.html', 'index.css', 'index.html'] }

  await helper.arrange(t, options, async (url) => {
    await t.test(route, async t => {
      t.plan(3)

      const response = await fetch(url + route)
      t.assert.ok(response.ok)
      t.assert.deepStrictEqual(response.status, 200)
      t.assert.deepStrictEqual(await response.json(), content)
    })
  })
})

test('dir list blocks path traversal when index is false', async t => {
  t.plan(2)

  const options = {
    root: path.join(__dirname, '/static'),
    prefix: '/public',
    index: false,
    list: true
  }
  const routes = ['/public/../', '/public/../static2/']

  await helper.arrange(t, options, async (url) => {
    for (const route of routes) {
      await t.test(route, async t => {
        t.plan(2)

        const response = await helper.rawRequest(url, route)
        t.assert.deepStrictEqual(response.statusCode, 403)
        t.assert.match(response.body, /Forbidden/u)
      })
    }
  })
})

test('dir list blocks path traversal when index is an empty array', async t => {
  t.plan(1)

  const options = {
    root: path.join(__dirname, '/static'),
    prefix: '/public',
    index: [],
    list: true
  }
  const route = '/public/../'

  await helper.arrange(t, options, async (url) => {
    await t.test(route, async t => {
      t.plan(2)

      const response = await helper.rawRequest(url, route)
      t.assert.deepStrictEqual(response.statusCode, 403)
      t.assert.match(response.body, /Forbidden/u)
    })
  })
})

test('dir list html format', async t => {
  t.plan(2)

  const options = {
    root: path.join(__dirname, '/static'),
    prefix: '/public',
    index: false,
    list: {
      format: 'html',
      names: ['index', 'index.htm'],
      render: (dirs, files) => {
        return `
<html><body>
<ul>
  ${dirs.map(dir => `<li><a href="${dir.href}">${dir.name}</a></li>`).join('\n  ')}
</ul>
<ul>
  ${files.map(file => `<li><a href="${file.href}" target="_blank">${file.name}</a></li>`).join('\n  ')}
</ul>
</body></html>
`
      }
    }
  }
  const routes = ['/public/index.htm', '/public/index']

  // check all routes by names

  await helper.arrange(t, options, async (url) => {
    for (const route of routes) {
      await t.test(route, async t => {
        t.plan(3)

        const response = await fetch(url + route)
        t.assert.ok(response.ok)
        t.assert.deepStrictEqual(response.status, 200)
        t.assert.deepStrictEqual(await response.text(), `
<html><body>
<ul>
  <li><a href="/public/deep">deep</a></li>
  <li><a href="/public/shallow">shallow</a></li>
</ul>
<ul>
  <li><a href="/public/.example" target="_blank">.example</a></li>
  <li><a href="/public/100%25.txt" target="_blank">100%.txt</a></li>
  <li><a href="/public/a%20.md" target="_blank">a .md</a></li>
  <li><a href="/public/foo.html" target="_blank">foo.html</a></li>
  <li><a href="/public/foobar.html" target="_blank">foobar.html</a></li>
  <li><a href="/public/index.css" target="_blank">index.css</a></li>
  <li><a href="/public/index.html" target="_blank">index.html</a></li>
</ul>
</body></html>
`)
      })
    }
  })
})

test('dir list href nested structure', async t => {
  t.plan(5)

  const options = {
    root: path.join(__dirname, '/static'),
    prefix: '/public',
    index: false,
    list: {
      format: 'html',
      names: ['index', 'index.htm'],
      render (dirs) {
        return dirs[0].href
      }
    }
  }

  const routes = [
    { path: '/public/', response: '/public/deep' },
    { path: '/public/index', response: '/public/deep' },
    { path: '/public/deep/', response: '/public/deep/path' },
    { path: '/public/deep/index.htm', response: '/public/deep/path' },
    { path: '/public/deep/path/', response: '/public/deep/path/for' }
  ]
  await helper.arrange(t, options, async (url) => {
    for (const route of routes) {
      await t.test(route.path, async t => {
        t.plan(5)

        const response = await fetch(url + route.path)
        t.assert.ok(response.ok)
        t.assert.deepStrictEqual(response.status, 200)
        const responseContent = await response.text()
        t.assert.deepStrictEqual(responseContent, route.response)

        const response2 = await fetch(url + responseContent)
        t.assert.ok(response2.ok)
        t.assert.deepStrictEqual(response2.status, 200)
      })
    }
  })
})

test('dir list html format - stats', async t => {
  t.plan(6)

  const options1 = {
    root: path.join(__dirname, '/static'),
    prefix: '/public',
    index: false,
    list: {
      format: 'html',
      render (dirs, files) {
        t.assert.ok(dirs.length > 0)
        t.assert.ok(files.length > 0)

        t.assert.ok(dirs.every(every))
        t.assert.ok(files.every(every))

        function every (value) {
          return value.stats?.atime &&
            !value.extendedInfo
        }
      }
    }
  }

  const route = '/public/'

  await helper.arrange(t, options1, async (url) => {
    const response = await fetch(url + route)
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
  })
})

test('dir list html format - extended info', async t => {
  t.plan(2)

  const route = '/public/'

  const options = {
    root: path.join(__dirname, '/static'),
    prefix: '/public',
    index: false,
    list: {
      format: 'html',
      extendedFolderInfo: true,
      render (dirs) {
        test('dirs', t => {
          t.plan(dirs.length * 7)

          for (const value of dirs) {
            t.assert.ok(value.extendedInfo)

            t.assert.deepStrictEqual(typeof value.extendedInfo.fileCount, 'number')
            t.assert.deepStrictEqual(typeof value.extendedInfo.totalFileCount, 'number')
            t.assert.deepStrictEqual(typeof value.extendedInfo.folderCount, 'number')
            t.assert.deepStrictEqual(typeof value.extendedInfo.totalFolderCount, 'number')
            t.assert.deepStrictEqual(typeof value.extendedInfo.totalSize, 'number')
            t.assert.deepStrictEqual(typeof value.extendedInfo.lastModified, 'number')
          }
        })
      }
    }
  }

  await helper.arrange(t, options, async (url) => {
    const response = await fetch(url + route)
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
  })
})

test('dir list json format', async t => {
  t.plan(1)

  const options = {
    root: path.join(__dirname, '/static'),
    prefix: '/public',
    prefixAvoidTrailingSlash: true,
    list: {
      format: 'json',
      names: ['index', 'index.json', '/']
    }
  }
  const routes = ['/public/shallow/']
  const content = { dirs: ['empty'], files: ['sample.jpg'] }

  await helper.arrange(t, options, async (url) => {
    for (const route of routes) {
      await t.test(route, async t => {
        t.plan(3)

        const response = await fetch(url + route)
        t.assert.ok(response.ok)
        t.assert.deepStrictEqual(response.status, 200)
        t.assert.deepStrictEqual(await response.json(), content)
      })
    }
  })
})

test('dir list json format - extended info', async t => {
  t.plan(1)

  const options = {
    root: path.join(__dirname, '/static'),
    prefix: '/public',
    prefixAvoidTrailingSlash: true,
    list: {
      format: 'json',
      names: ['index', 'index.json', '/'],
      extendedFolderInfo: true,
      jsonFormat: 'extended'

    }
  }
  const routes = ['/public/shallow/']

  await helper.arrange(t, options, async (url) => {
    for (const route of routes) {
      await t.test(route, async t => {
        t.plan(5)

        const response = await fetch(url + route)
        t.assert.ok(response.ok)
        t.assert.deepStrictEqual(response.status, 200)
        const responseContent = await response.json()
        t.assert.deepStrictEqual(responseContent.dirs[0].name, 'empty')
        t.assert.deepStrictEqual(typeof responseContent.dirs[0].stats.atimeMs, 'number')
        t.assert.deepStrictEqual(typeof responseContent.dirs[0].extendedInfo.totalSize, 'number')
      })
    }
  })
})

test('json format with url parameter format', async t => {
  t.plan(12)

  const options = {
    root: path.join(__dirname, '/static'),
    prefix: '/public',
    index: false,
    list: {
      format: 'json',
      render () {
        return 'html'
      }
    }
  }
  const route = '/public/'
  const jsonContent = { dirs: ['deep', 'shallow'], files: ['.example', '100%.txt', 'a .md', 'foo.html', 'foobar.html', 'index.css', 'index.html'] }

  await helper.arrange(t, options, async (url) => {
    const response = await fetch(url + route)
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.json(), jsonContent)
    t.assert.ok(response.headers.get('content-type').includes('application/json'))

    const response2 = await fetch(url + route + '?format=html')
    t.assert.ok(response2.ok)
    t.assert.deepStrictEqual(response2.status, 200)
    t.assert.deepStrictEqual(await response2.text(), 'html')
    t.assert.ok(response2.headers.get('content-type').includes('text/html'))

    const response3 = await fetch(url + route + '?format=json')
    t.assert.ok(response3.ok)
    t.assert.deepStrictEqual(response3.status, 200)
    t.assert.deepStrictEqual(await response3.json(), jsonContent)
    t.assert.ok(response3.headers.get('content-type').includes('application/json'))
  })
})

test('json format with url parameter format and without render option', async t => {
  t.plan(11)

  const options = {
    root: path.join(__dirname, '/static'),
    prefix: '/public',
    index: false,
    list: {
      format: 'json'
    }
  }
  const route = '/public/'
  const jsonContent = { dirs: ['deep', 'shallow'], files: ['.example', '100%.txt', 'a .md', 'foo.html', 'foobar.html', 'index.css', 'index.html'] }

  await helper.arrange(t, options, async (url) => {
    const response = await fetch(url + route)
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.json(), jsonContent)
    t.assert.ok(response.headers.get('content-type').includes('application/json'))

    const response2 = await fetch(url + route + '?format=html')
    t.assert.ok(!response2.ok)
    t.assert.deepStrictEqual(response2.status, 500)
    t.assert.deepStrictEqual((await response2.json()).message, 'The `list.render` option must be a function and is required with the URL parameter `format=html`')

    const response3 = await fetch(url + route + '?format=json')
    t.assert.ok(response3.ok)
    t.assert.deepStrictEqual(response3.status, 200)
    t.assert.deepStrictEqual(await response3.json(), jsonContent)
    t.assert.ok(response3.headers.get('content-type').includes('application/json'))
  })
})

test('html format with url parameter format', async t => {
  t.plan(12)

  const options = {
    root: path.join(__dirname, '/static'),
    prefix: '/public',
    index: false,
    list: {
      format: 'html',
      render () {
        return 'html'
      }
    }
  }
  const route = '/public/'
  const jsonContent = { dirs: ['deep', 'shallow'], files: ['.example', '100%.txt', 'a .md', 'foo.html', 'foobar.html', 'index.css', 'index.html'] }

  await helper.arrange(t, options, async (url) => {
    const response = await fetch(url + route)
    t.assert.ok(response.ok)
    t.assert.deepStrictEqual(response.status, 200)
    t.assert.deepStrictEqual(await response.text(), 'html')
    t.assert.ok(response.headers.get('content-type').includes('text/html'))

    const response2 = await fetch(url + route + '?format=html')
    t.assert.ok(response2.ok)
    t.assert.deepStrictEqual(response2.status, 200)
    t.assert.deepStrictEqual(await response2.text(), 'html')
    t.assert.ok(response2.headers.get('content-type').includes('text/html'))

    const response3 = await fetch(url + route + '?format=json')
    t.assert.ok(response3.ok)
    t.assert.deepStrictEqual(response3.status, 200)
    t.assert.deepStrictEqual(await response3.json(), jsonContent)
    t.assert.ok(response3.headers.get('content-type').includes('application/json'))
  })
})

test('dir list on empty dir', async t => {
  t.plan(1)

  const options = {
    root: path.join(__dirname, '/static'),
    prefix: '/public',
    list: true
  }
  const route = '/public/shallow/empty'
  const content = { dirs: [], files: [] }

  await helper.arrange(t, options, async (url) => {
    await t.test(route, async t => {
      t.plan(3)

      const response = await fetch(url + route)
      t.assert.ok(response.ok)
      t.assert.deepStrictEqual(response.status, 200)
      t.assert.deepStrictEqual(await response.json(), content)
    })
  })
})

test('dir list serve index.html on index option', async t => {
  t.plan(1)

  const options = {
    root: path.join(__dirname, '/static'),
    prefix: '/public',
    index: false,
    list: {
      format: 'html',
      names: ['index', 'index.html'],
      render: () => 'dir list index'
    }
  }

  await helper.arrange(t, options, async (url) => {
    await t.test('serve index.html from fs', async t => {
      t.plan(6)

      const response = await fetch(url + '/public/index.html')
      t.assert.ok(response.ok)
      t.assert.deepStrictEqual(response.status, 200)
      t.assert.deepStrictEqual(await response.text(), '<html>\n  <body>\n    the body\n  </body>\n</html>\n')

      const response2 = await fetch(url + '/public/index')
      t.assert.ok(response2.ok)
      t.assert.deepStrictEqual(response2.status, 200)
      t.assert.deepStrictEqual(await response2.text(), 'dir list index')
    })
  })
})

test('serve a non existent dir and get error', async t => {
  t.plan(1)

  const options = {
    root: '/none',
    prefix: '/public',
    list: true
  }
  const route = '/public/'

  await helper.arrange(t, options, async (url) => {
    await t.test(route, async t => {
      t.plan(2)

      const response = await fetch(url + route)
      t.assert.ok(!response.ok)
      t.assert.deepStrictEqual(response.status, 404)
    })
  })
})

test('serve a non existent dir and get error', async t => {
  t.plan(1)

  const options = {
    root: path.join(__dirname, '/static'),
    prefix: '/public',
    list: {
      names: ['index']
    }
  }
  const route = '/public/none/index'

  await helper.arrange(t, options, async (url) => {
    await t.test(route, async t => {
      t.plan(2)

      const response = await fetch(url + route)
      t.assert.ok(!response.ok)
      t.assert.deepStrictEqual(response.status, 404)
    })
  })
})

test('dir list with dotfiles allow option', async t => {
  t.plan(1)

  const options = {
    root: path.join(__dirname, '/static-dotfiles'),
    prefix: '/public',
    dotfiles: 'allow',
    index: false,
    list: true
  }
  const route = '/public/'
  const content = { dirs: ['dir'], files: ['.aaa', 'test.txt'] }

  await helper.arrange(t, options, async (url) => {
    await t.test(route, async t => {
      t.plan(3)

      const response = await fetch(url + route)
      t.assert.ok(response.ok)
      t.assert.deepStrictEqual(response.status, 200)
      t.assert.deepStrictEqual(await response.json(), content)
    })
  })
})

test('dir list with dotfiles deny option', async t => {
  t.plan(1)

  const options = {
    root: path.join(__dirname, '/static-dotfiles'),
    prefix: '/public',
    dotfiles: 'deny',
    index: false,
    list: true
  }
  const route = '/public/'
  const content = { dirs: ['dir'], files: ['test.txt'] }

  await helper.arrange(t, options, async (url) => {
    await t.test(route, async t => {
      t.plan(3)

      const response = await fetch(url + route)
      t.assert.ok(response.ok)
      t.assert.deepStrictEqual(response.status, 200)
      t.assert.deepStrictEqual(await response.json(), content)
    })
  })
})

test('dir list with dotfiles ignore option', async t => {
  t.plan(1)

  const options = {
    root: path.join(__dirname, '/static-dotfiles'),
    prefix: '/public',
    dotfiles: 'ignore',
    index: false,
    list: true
  }
  const route = '/public/'
  const content = { dirs: ['dir'], files: ['test.txt'] }

  await helper.arrange(t, options, async (url) => {
    await t.test(route, async t => {
      t.plan(3)

      const response = await fetch(url + route)
      t.assert.ok(response.ok)
      t.assert.deepStrictEqual(response.status, 200)
      t.assert.deepStrictEqual(await response.json(), content)
    })
  })
})

test('dir list error', async t => {
  t.plan(6)

  const options = {
    root: path.join(__dirname, '/static'),
    prefix: '/public',
    prefixAvoidTrailingSlash: true,
    index: false,
    list: {
      format: 'html',
      names: ['index', 'index.htm'],
      render: () => ''
    }
  }

  const errorMessage = 'mocking send'
  dirList.send = async () => { throw new Error(errorMessage) }

  t.beforeEach((ctx) => {
    ctx.initialDirList = ctx['../lib/dirList.js']
    ctx['../lib/dirList.js'] = dirList
  })

  t.afterEach((ctx) => {
    ctx['../lib/dirList.js'] = ctx.initialDirList
  })

  const routes = ['/public/', '/public/index.htm']

  await helper.arrange(t, options, async (url) => {
    for (const route of routes) {
      const response = await fetch(url + route)
      t.assert.ok(!response.ok)
      t.assert.deepStrictEqual(response.status, 500)
      t.assert.deepStrictEqual((await response.json()).message, errorMessage)
    }
  })
})
