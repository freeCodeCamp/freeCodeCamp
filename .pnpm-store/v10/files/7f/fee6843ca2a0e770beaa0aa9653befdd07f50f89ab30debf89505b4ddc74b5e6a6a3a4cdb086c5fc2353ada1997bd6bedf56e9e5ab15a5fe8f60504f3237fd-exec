#!/usr/bin/env node
import { performance } from 'node:perf_hooks'
import module from 'node:module'

if (!import.meta.url.includes('node_modules')) {
  if (!process.env.DEBUG_DISABLE_SOURCE_MAP) {
    // eslint-disable-next-line n/no-unsupported-features/node-builtins -- only used in dev
    process.setSourceMapsEnabled(true)
  }

  process.on('unhandledRejection', (err) => {
    throw new Error('UNHANDLED PROMISE REJECTION', { cause: err })
  })
}

global.__vite_start_time = performance.now()

// check debug mode first before requiring the CLI.
const debugIndex = process.argv.findIndex((arg) => /^(?:-d|--debug)$/.test(arg))
const filterIndex = process.argv.findIndex((arg) =>
  /^(?:-f|--filter)$/.test(arg),
)
const profileIndex = process.argv.indexOf('--profile')

if (debugIndex > 0) {
  let value = process.argv[debugIndex + 1]
  if (!value || value[0] === '-') {
    value = 'vite:*'
  } else {
    // support debugging multiple flags with comma-separated list
    value = value
      .split(',')
      .map((v) => `vite:${v}`)
      .join(',')
  }
  process.env.DEBUG = `${
    process.env.DEBUG ? process.env.DEBUG + ',' : ''
  }${value}`

  if (filterIndex > 0) {
    const filter = process.argv[filterIndex + 1]
    if (filter && filter[0] !== '-') {
      process.env.VITE_DEBUG_FILTER = filter
    }
  }
}

function start() {
  try {
    // eslint-disable-next-line n/no-unsupported-features/node-builtins -- it is supported in Node 22.8.0+ and only called if it exists
    module.enableCompileCache?.()
    // flush the cache after 10s because the cache is not flushed until process end
    // for dev server, the cache is never flushed unless manually flushed because the process.exit is called
    // also flushing the cache in SIGINT handler seems to cause the process to hang
    setTimeout(() => {
      try {
        // eslint-disable-next-line n/no-unsupported-features/node-builtins -- it is supported in Node 22.12.0+ and only called if it exists
        module.flushCompileCache?.()
      } catch {}
    }, 10 * 1000).unref()
  } catch {}
  return import('../dist/node/cli.js')
}

if (profileIndex > 0) {
  process.argv.splice(profileIndex, 1)
  const next = process.argv[profileIndex]
  if (next && next[0] !== '-') {
    process.argv.splice(profileIndex, 1)
  }
  const inspector = await import('node:inspector').then((r) => r.default)
  const session = (global.__vite_profile_session = new inspector.Session())
  session.connect()
  session.post('Profiler.enable', () => {
    session.post('Profiler.start', start)
  })
} else {
  start()
}
