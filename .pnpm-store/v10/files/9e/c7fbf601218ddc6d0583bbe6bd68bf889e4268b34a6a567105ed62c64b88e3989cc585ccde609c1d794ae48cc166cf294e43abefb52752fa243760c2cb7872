'use strict'

const { test } = require('node:test')
const fastify = require('../../fastify')()
fastify.addHttpMethod('LOCK', { hasBody: true })

const bodySample = `<?xml version="1.0" encoding="utf-8" ?>
        <D:lockinfo xmlns:D='DAV:'>
          <D:lockscope> <D:exclusive/> </D:lockscope>
          <D:locktype> <D:write/> </D:locktype>
          <D:owner>
            <D:href>http://fastify.test/~ejw/contact.html</D:href>
          </D:owner>
        </D:lockinfo> `

test('can be created - lock', t => {
  t.plan(1)
  try {
    fastify.route({
      method: 'LOCK',
      url: '*',
      handler: function (req, reply) {
        reply
          .code(200)
          .send(`<?xml version="1.0" encoding="utf-8" ?>
            <D:prop xmlns:D="DAV:">
              <D:lockdiscovery>
                <D:activelock>
                  <D:locktype>
                    <D:write/>
                  </D:locktype>
                  <D:lockscope>
                    <D:exclusive/>
                  </D:lockscope>
                  <D:depth>infinity</D:depth>
                  <D:owner>
                    <D:href>http://fastify.test/~ejw/contact.html</D:href>
                  </D:owner>
                  <D:timeout>Second-604800</D:timeout>
                  <D:locktoken>
                    <D:href>urn:uuid:e71d4fae-5dec-22d6-fea5-00a0c91e6be4</:href>
                  </D:locktoken>
                  <D:lockroot>
                    <D:href>http://fastify.test/workspace/webdav/proposal.oc</D:href>
                  </D:lockroot>
                </D:activelock>
              </D:lockdiscovery>
            </D:prop>`
          )
      }
    })
    t.assert.ok(true)
  } catch (e) {
    t.assert.fail()
  }
})

test('lock test', async t => {
  const fastifyServer = await fastify.listen({ port: 0 })
  t.after(() => {
    fastify.close()
  })
  // the body test uses a text/plain content type instead of application/xml because it requires
  // a specific content type parser
  await t.test('request with body - lock', async (t) => {
    t.plan(3)

    const result = await fetch(`${fastifyServer}/test/a.txt`, {
      method: 'LOCK',
      headers: { 'content-type': 'text/plain' },
      body: bodySample
    })

    t.assert.ok(result.ok)
    t.assert.strictEqual(result.status, 200)
    const body = await result.text()
    t.assert.strictEqual(result.headers.get('content-length'), '' + body.length)
  })

  await t.test('request with body and no content type (415 error) - lock', async (t) => {
    t.plan(3)

    const result = await fetch(`${fastifyServer}/test/a.txt`, {
      method: 'LOCK',
      body: bodySample,
      headers: { 'content-type': undefined }
    })

    t.assert.ok(!result.ok)
    t.assert.strictEqual(result.status, 415)
    const body = await result.text()
    t.assert.strictEqual(result.headers.get('content-length'), '' + body.length)
  })

  await t.test('request without body - lock', async (t) => {
    t.plan(3)

    const result = await fetch(`${fastifyServer}/test/a.txt`, {
      method: 'LOCK',
      headers: { 'content-type': 'text/plain' }
    })

    t.assert.ok(result.ok)
    t.assert.strictEqual(result.status, 200)
    const body = await result.text()
    t.assert.strictEqual(result.headers.get('content-length'), '' + body.length)
  })
})
