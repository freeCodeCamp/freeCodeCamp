'use strict'

const { test } = require('node:test')
const fastify = require('../../')()
fastify.addHttpMethod('PROPPATCH', { hasBody: true })

const bodySample = `<?xml version="1.0" encoding="utf-8" ?>
        <D:propertyupdate xmlns:D="DAV:"
          xmlns:Z="http://ns.fastify.test/standards/z39.50/">
          <D:set>
            <D:prop>
              <Z:Authors>
                <Z:Author>Jim Whitehead</Z:Author>
                <Z:Author>Roy Fielding</Z:Author>
              </Z:Authors>
            </D:prop>
          </D:set>
          <D:remove>
            <D:prop>
              <Z:Copyright-Owner/>
            </D:prop>
          </D:remove>
        </D:propertyupdate>`

test('shorthand - proppatch', t => {
  t.plan(1)
  try {
    fastify.route({
      method: 'PROPPATCH',
      url: '*',
      handler: function (req, reply) {
        reply
          .code(207)
          .send(`<?xml version="1.0" encoding="utf-8" ?>
            <D:multistatus xmlns:D="DAV:"
              xmlns:Z="http://ns.fastify.test/standards/z39.50/">
              <D:response>
                <D:href>http://www.fastify.test/bar.html</D:href>
                <D:propstat>
                  <D:prop>
                    <Z:Authors/>
                  </D:prop>
                  <D:status>HTTP/1.1 424 Failed Dependency</D:status>
                </D:propstat>
                <D:propstat>
                  <D:prop>
                    <Z:Copyright-Owner/>
                  </D:prop>
                  <D:status>HTTP/1.1 409 Conflict</D:status>
                </D:propstat>
                <D:responsedescription> Copyright Owner cannot be deleted or altered.</D:responsedescription>
              </D:response>
            </D:multistatus>`
          )
      }
    })
    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }
})

test('proppatch test', async t => {
  const fastifyServer = await fastify.listen({ port: 0 })

  t.after(() => { fastify.close() })
  // the body test uses a text/plain content type instead of application/xml because it requires
  // a specific content type parser
  await t.test('request with body - proppatch', async t => {
    t.plan(3)
    const result = await fetch(`${fastifyServer}/test/a.txt`, {
      method: 'PROPPATCH',
      headers: { 'content-type': 'text/plain' },
      body: bodySample
    })
    t.assert.ok(result.ok)
    t.assert.strictEqual(result.status, 207)
    const body = await result.text()
    t.assert.strictEqual(result.headers.get('content-length'), '' + body.length)
  })

  await t.test('request with body and no content type (415 error) - proppatch', async t => {
    t.plan(3)
    const result = await fetch(`${fastifyServer}/test/a.txt`, {
      method: 'PROPPATCH',
      body: bodySample,
      headers: { 'content-type': undefined }
    })
    t.assert.ok(!result.ok)
    t.assert.strictEqual(result.status, 415)
    const body = await result.text()
    t.assert.strictEqual(result.headers.get('content-length'), '' + body.length)
  })

  await t.test('request without body - proppatch', async t => {
    t.plan(3)
    const result = await fetch(`${fastifyServer}/test/a.txt`, {
      method: 'PROPPATCH'
    })
    t.assert.ok(result.ok)
    t.assert.strictEqual(result.status, 207)
    const body = await result.text()
    t.assert.strictEqual(result.headers.get('content-length'), '' + body.length)
  })
})
