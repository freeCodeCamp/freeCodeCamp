'use strict'

const { test } = require('node:test')
const extractPluginName = require('../lib/getPluginName').extractPluginName

const winStack = `Error: anonymous function
at checkName (C:\\Users\\leonardo.davinci\\Desktop\\fastify-plugin\\index.js:43:11)
at plugin (C:\\Users\\leonardo.davinci\\Desktop\\fastify-plugin\\index.js:24:20)
at Test.test (C:\\Users\\leonardo.davinci\\Desktop\\fastify-plugin\\test\\hello.test.js:9:14)
at bound (domain.js:396:14)
at Test.runBound (domain.js:409:12)
at ret (C:\\Users\\leonardo.davinci\\Desktop\\fastify-plugin\\node_modules\\tap\\lib\\test.js:278:21)
at Test.main (C:\\Users\\leonardo.davinci\\Desktop\\fastify-plugin\\node_modules\\tap\\lib\\test.js:282:7)
at writeSubComment (C:\\Users\\leonardo.davinci\\Desktop\\fastify-plugin\\node_modules\\tap\\lib\\test.js:371:13)
at TAP.writeSubComment (C:\\Users\\leonardo.davinci\\Desktop\\fastify-plugin\\node_modules\\tap\\lib\\test.js:403:5)
at Test.runBeforeEach (C:\\Users\\leonardo.davinci\\Desktop\\fastify-plugin\\node_modules\\tap\\lib\\test.js:370:14)
at loop (C:\\Users\\leonardo.davinci\\Desktop\\fastify-plugin\\node_modules\\function-loop\\index.js:35:15)
at TAP.runBeforeEach (C:\\Users\\leonardo.davinci\\Desktop\\fastify-plugin\\node_modules\\tap\\lib\\test.js:683:7)
at TAP.processSubtest (C:\\Users\\leonardo.davinci\\Desktop\\fastify-plugin\\node_modules\\tap\\lib\\test.js:369:12)
at TAP.process (C:\\Users\\leonardo.davinci\\Desktop\\fastify-plugin\\node_modules\\tap\\lib\\test.js:306:14)
at TAP.sub (C:\\Users\\leonardo.davinci\\Desktop\\fastify-plugin\\node_modules\\tap\\lib\\test.js:185:10)
at TAP.test (C:\\Users\\leonardo.davinci\\Desktop\\fastify-plugin\\node_modules\\tap\\lib\\test.js:209:17)`

const nixStack = `Error: anonymous function
at checkName (/home/leonardo/desktop/fastify-plugin/index.js:43:11)
at plugin (/home/leonardo/desktop/fastify-plugin/index.js:24:20)
at Test.test (/home/leonardo/desktop/fastify-plugin/test/this.is.a.test.js:9:14)
at bound (domain.js:396:14)
at Test.runBound (domain.js:409:12)
at ret (/home/leonardo/desktop/fastify-plugin/node_modules/tap/lib/test.js:278:21)
at Test.main (/home/leonardo/desktop/fastify-plugin/node_modules/tap/lib/test.js:282:7)
at writeSubComment (/home/leonardo/desktop/fastify-plugin/node_modules/tap/lib/test.js:371:13)
at TAP.writeSubComment (/home/leonardo/desktop/fastify-plugin/node_modules/tap/lib/test.js:403:5)
at Test.runBeforeEach (/home/leonardo/desktop/fastify-plugin/node_modules/tap/lib/test.js:370:14)
at loop (/home/leonardo/desktop/fastify-plugin/node_modules/function-loop/index.js:35:15)
at TAP.runBeforeEach (/home/leonardo/desktop/fastify-plugin/node_modules/tap/lib/test.js:683:7)
at TAP.processSubtest (/home/leonardo/desktop/fastify-plugin/node_modules/tap/lib/test.js:369:12)
at TAP.process (/home/leonardo/desktop/fastify-plugin/node_modules/tap/lib/test.js:306:14)
at TAP.sub (/home/leonardo/desktop/fastify-plugin/node_modules/tap/lib/test.js:185:10)
at TAP.test (/home/leonardo/desktop/fastify-plugin/node_modules/tap/lib/test.js:209:17)`

const anonymousStack = 'Unable to parse this'

test('extractPluginName tests', (t) => {
  t.plan(3)
  t.assert.strictEqual(extractPluginName(winStack), 'hello.test')
  t.assert.strictEqual(extractPluginName(nixStack), 'this.is.a.test')
  t.assert.strictEqual(extractPluginName(anonymousStack), 'anonymous')
})
