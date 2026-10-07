'use strict'

const { realImport, realRequire } = require('real-require')
const { workerData, parentPort } = require('worker_threads')
const { WRITE_INDEX, READ_INDEX } = require('./indexes')
const { waitDiff } = require('./wait')

const {
  dataBuf,
  filename,
  stateBuf
} = workerData

let destination

const state = new Int32Array(stateBuf)
const data = Buffer.from(dataBuf)

async function start () {
  let worker
  try {
    if (filename.endsWith('.ts') || filename.endsWith('.cts')) {
      // TODO: add support for the TSM modules loader ( https://github.com/lukeed/tsm ).
      if (!process[Symbol.for('ts-node.register.instance')]) {
        realRequire('ts-node/register')
      } else if (process.env.TS_NODE_DEV) {
        realRequire('ts-node-dev')
      }
      // TODO: Support ES imports once tsc, tap & ts-node provide better compatibility guarantees.
      // Remove extra forwardslash on Windows
      worker = realRequire(decodeURIComponent(filename.replace(process.platform === 'win32' ? 'file:///' : 'file://', '')))
    } else {
      worker = (await realImport(filename))
    }
  } catch (error) {
    // A yarn user that tries to start a ThreadStream for an external module
    // provides a filename pointing to a zip file.
    // eg. require.resolve('pino-elasticsearch') // returns /foo/pino-elasticsearch-npm-6.1.0-0c03079478-6915435172.zip/bar.js
    // The `import` will fail to try to load it.
    // This catch block executes the `require` fallback to load the module correctly.
    // In fact, yarn modifies the `require` function to manage the zipped path.
    // More details at https://github.com/pinojs/pino/pull/1113
    // The error codes may change based on the node.js version (ENOTDIR > 12, ERR_MODULE_NOT_FOUND <= 12 )
    if ((error.code === 'ENOTDIR' || error.code === 'ERR_MODULE_NOT_FOUND') &&
     filename.startsWith('file://')) {
      worker = realRequire(decodeURIComponent(filename.replace('file://', '')))
    } else if (error.code === undefined || error.code === 'ERR_VM_DYNAMIC_IMPORT_CALLBACK_MISSING') {
      // When bundled with pkg, an undefined error is thrown when called with realImport
      // When bundled with pkg and using node v20, an ERR_VM_DYNAMIC_IMPORT_CALLBACK_MISSING error is thrown when called with realImport
      // More info at: https://github.com/pinojs/thread-stream/issues/143
      try {
        worker = realRequire(decodeURIComponent(filename.replace(process.platform === 'win32' ? 'file:///' : 'file://', '')))
      } catch {
        throw error
      }
    } else {
      throw error
    }
  }

  // Depending on how the default export is performed, and on how the code is
  // transpiled, we may find cases of two nested "default" objects.
  // See https://github.com/pinojs/pino/issues/1243#issuecomment-982774762
  if (typeof worker === 'object') worker = worker.default
  if (typeof worker === 'object') worker = worker.default

  destination = await worker(workerData.workerData)

  destination.on('error', function (err) {
    Atomics.store(state, WRITE_INDEX, -2)
    Atomics.notify(state, WRITE_INDEX)

    Atomics.store(state, READ_INDEX, -2)
    Atomics.notify(state, READ_INDEX)

    parentPort.postMessage({
      code: 'ERROR',
      err
    })
  })

  destination.on('close', function () {
    // process._rawDebug('worker close emitted')
    const end = Atomics.load(state, WRITE_INDEX)
    Atomics.store(state, READ_INDEX, end)
    Atomics.notify(state, READ_INDEX)
    setImmediate(() => {
      process.exit(0)
    })
  })
}

// No .catch() handler,
// in case there is an error it goes
// to unhandledRejection
start().then(function () {
  parentPort.postMessage({
    code: 'READY'
  })

  process.nextTick(run)
})

function run () {
  const current = Atomics.load(state, READ_INDEX)
  const end = Atomics.load(state, WRITE_INDEX)

  // process._rawDebug(`pre state ${current} ${end}`)

  if (end === current) {
    if (end === data.length) {
      waitDiff(state, READ_INDEX, end, Infinity, run)
    } else {
      waitDiff(state, WRITE_INDEX, end, Infinity, run)
    }
    return
  }

  // process._rawDebug(`post state ${current} ${end}`)

  if (end === -1) {
    // process._rawDebug('end')
    destination.end()
    return
  }

  const toWrite = data.toString('utf8', current, end)
  // process._rawDebug('worker writing: ' + toWrite)

  const res = destination.write(toWrite)

  if (res) {
    Atomics.store(state, READ_INDEX, end)
    Atomics.notify(state, READ_INDEX)
    setImmediate(run)
  } else {
    destination.once('drain', function () {
      Atomics.store(state, READ_INDEX, end)
      Atomics.notify(state, READ_INDEX)
      run()
    })
  }
}

process.on('unhandledRejection', function (err) {
  parentPort.postMessage({
    code: 'ERROR',
    err
  })
  process.exit(1)
})

process.on('uncaughtException', function (err) {
  parentPort.postMessage({
    code: 'ERROR',
    err
  })
  process.exit(1)
})

process.once('exit', exitCode => {
  if (exitCode !== 0) {
    process.exit(exitCode)
    return
  }
  if (destination?.writableNeedDrain && !destination?.writableEnded) {
    parentPort.postMessage({
      code: 'WARNING',
      err: new Error('ThreadStream: process exited before destination stream was drained. this may indicate that the destination stream try to write to a another missing stream')
    })
  }

  process.exit(0)
})
