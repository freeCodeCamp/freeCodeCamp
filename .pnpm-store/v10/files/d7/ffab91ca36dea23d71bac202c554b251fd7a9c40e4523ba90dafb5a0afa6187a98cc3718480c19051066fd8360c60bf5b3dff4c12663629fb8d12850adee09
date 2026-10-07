const { test } = require('tap')
const ThreadStream = require('../index')
const { join } = require('path')

function retryUntilTimeout (fn, timeout) {
  const start = Date.now()
  return new Promise((resolve, reject) => {
    async function run () {
      if (fn()) {
        resolve()
        return
      }

      if (Date.now() - start >= timeout) {
        reject(new Error('timeout'))
        return
      }
      setTimeout(run, 10)
    }

    run()
  })
}

const isNode18 = process.version.indexOf('v18') === 0

test('emit warning when the worker gracefully exit without the stream ended', { skip: !isNode18 }, async function (t) {
  const expectedWarning = 'ThreadStream: process exited before destination stream was drained. this may indicate that the destination stream try to write to a another missing stream'
  const stream = new ThreadStream({
    filename: join(__dirname, 'to-next.js')
  })
  stream.unref()

  let streamWarning
  function saveWarning (e) {
    if (e.message === expectedWarning) {
      streamWarning = e
    }
  }
  process.on('warning', saveWarning)

  const data = 'hello'.repeat(10)
  for (let i = 0; i < 1000; i++) {
    if (streamWarning?.message === expectedWarning) {
      break
    }
    stream.write(data)
    await new Promise((resolve) => {
      setTimeout(resolve, 1)
    })
  }

  process.off('warning', saveWarning)
  t.equal(streamWarning?.message, expectedWarning)

  await retryUntilTimeout(() => stream.worker.exited === true, 3000)
})
