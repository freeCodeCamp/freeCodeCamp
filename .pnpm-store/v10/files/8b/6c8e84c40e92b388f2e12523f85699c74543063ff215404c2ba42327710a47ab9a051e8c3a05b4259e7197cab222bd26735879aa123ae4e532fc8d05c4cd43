'use strict'

process.env.TZ = 'UTC'

const path = require('path')
const spawn = require('child_process').spawn
const test = require('tap').test
const fs = require('fs')
const rimraf = require('rimraf')

const bin = require.resolve('../bin')
const logLine = '{"level":30,"time":1522431328992,"msg":"hello world","pid":42,"hostname":"foo"}\n'
const noop = () => {}

test('cli', (t) => {
  const tmpDir = path.join(__dirname, '.tmp_' + Date.now())
  fs.mkdirSync(tmpDir)

  t.teardown(() => rimraf(tmpDir, noop))

  t.test('loads and applies default config file: pino-pretty.config.js', (t) => {
    t.plan(1)
    // Set translateTime: true on run configuration
    const configFile = path.join(tmpDir, 'pino-pretty.config.js')
    fs.writeFileSync(configFile, 'module.exports = { translateTime: true }')
    const env = { TERM: 'dumb', TZ: 'UTC' }
    const child = spawn(process.argv[0], [bin], { env, cwd: tmpDir })
    // Validate that the time has been translated
    child.on('error', t.threw)
    child.stdout.on('data', (data) => {
      t.equal(data.toString(), '[17:35:28.992] INFO (42): hello world\n')
    })
    child.stdin.write(logLine)
    t.teardown(() => {
      fs.unlinkSync(configFile)
      child.kill()
    })
  })

  t.test('loads and applies default config file: pino-pretty.config.cjs', (t) => {
    t.plan(1)
    // Set translateTime: true on run configuration
    const configFile = path.join(tmpDir, 'pino-pretty.config.cjs')
    fs.writeFileSync(configFile, 'module.exports = { translateTime: true }')
    // Tell the loader to expect ESM modules
    const packageJsonFile = path.join(tmpDir, 'package.json')
    fs.writeFileSync(packageJsonFile, JSON.stringify({ type: 'module' }, null, 4))
    const env = { TERM: ' dumb', TZ: 'UTC' }
    const child = spawn(process.argv[0], [bin], { env, cwd: tmpDir })
    // Validate that the time has been translated
    child.on('error', t.threw)
    child.stdout.on('data', (data) => {
      t.equal(data.toString(), '[17:35:28.992] INFO (42): hello world\n')
    })
    child.stdin.write(logLine)
    t.teardown(() => {
      fs.unlinkSync(configFile)
      fs.unlinkSync(packageJsonFile)
      child.kill()
    })
  })

  t.test('loads and applies default config file: .pino-prettyrc', (t) => {
    t.plan(1)
    // Set translateTime: true on run configuration
    const configFile = path.join(tmpDir, '.pino-prettyrc')
    fs.writeFileSync(configFile, JSON.stringify({ translateTime: true }, null, 4))
    const env = { TERM: ' dumb', TZ: 'UTC' }
    const child = spawn(process.argv[0], [bin], { env, cwd: tmpDir })
    // Validate that the time has been translated
    child.on('error', t.threw)
    child.stdout.on('data', (data) => {
      t.equal(data.toString(), '[17:35:28.992] INFO (42): hello world\n')
    })
    child.stdin.write(logLine)
    t.teardown(() => {
      fs.unlinkSync(configFile)
      child.kill()
    })
  })

  t.test('loads and applies default config file: .pino-prettyrc.json', (t) => {
    t.plan(1)
    // Set translateTime: true on run configuration
    const configFile = path.join(tmpDir, '.pino-prettyrc.json')
    fs.writeFileSync(configFile, JSON.stringify({ translateTime: true }, null, 4))
    const env = { TERM: ' dumb', TZ: 'UTC' }
    const child = spawn(process.argv[0], [bin], { env, cwd: tmpDir })
    // Validate that the time has been translated
    child.on('error', t.threw)
    child.stdout.on('data', (data) => {
      t.equal(data.toString(), '[17:35:28.992] INFO (42): hello world\n')
    })
    child.stdin.write(logLine)
    t.teardown(() => {
      fs.unlinkSync(configFile)
      child.kill()
    })
  })

  t.test('loads and applies custom config file: pino-pretty.config.test.json', (t) => {
    t.plan(1)
    // Set translateTime: true on run configuration
    const configFile = path.join(tmpDir, 'pino-pretty.config.test.json')
    fs.writeFileSync(configFile, JSON.stringify({ translateTime: true }, null, 4))
    const env = { TERM: ' dumb', TZ: 'UTC' }
    const child = spawn(process.argv[0], [bin, '--config', configFile], { env, cwd: tmpDir })
    // Validate that the time has been translated
    child.on('error', t.threw)
    child.stdout.on('data', (data) => {
      t.equal(data.toString(), '[17:35:28.992] INFO (42): hello world\n')
    })
    child.stdin.write(logLine)
    t.teardown(() => child.kill())
  })

  t.test('loads and applies custom config file: pino-pretty.config.test.js', (t) => {
    t.plan(1)
    // Set translateTime: true on run configuration
    const configFile = path.join(tmpDir, 'pino-pretty.config.test.js')
    fs.writeFileSync(configFile, 'module.exports = { translateTime: true }')
    const env = { TERM: ' dumb', TZ: 'UTC' }
    const child = spawn(process.argv[0], [bin, '--config', configFile], { env, cwd: tmpDir })
    // Validate that the time has been translated
    child.on('error', t.threw)
    child.stdout.on('data', (data) => {
      t.equal(data.toString(), '[17:35:28.992] INFO (42): hello world\n')
    })
    child.stdin.write(logLine)
    t.teardown(() => child.kill())
  })

  ;['--messageKey', '-m'].forEach((optionName) => {
    t.test(`cli options override config options via ${optionName}`, (t) => {
      t.plan(1)
      // Set translateTime: true on run configuration
      const configFile = path.join(tmpDir, 'pino-pretty.config.js')
      fs.writeFileSync(configFile, `
        module.exports = {
          translateTime: true,
          messageKey: 'custom_msg'
        }
      `.trim())
      // Set messageKey: 'new_msg' using command line option
      const env = { TERM: ' dumb', TZ: 'UTC' }
      const child = spawn(process.argv[0], [bin, optionName, 'new_msg'], { env, cwd: tmpDir })
      // Validate that the time has been translated and correct message key has been used
      child.on('error', t.threw)
      child.stdout.on('data', (data) => {
        t.equal(data.toString(), '[17:35:28.992] INFO (42): hello world\n')
      })
      child.stdin.write(logLine.replace(/"msg"/, '"new_msg"'))
      t.teardown(() => {
        fs.unlinkSync(configFile)
        child.kill()
      })
    })
  })

  t.test('cli options with defaults can be overridden by config', (t) => {
    t.plan(1)
    // Set errorProps: '*' on run configuration
    const configFile = path.join(tmpDir, 'pino-pretty.config.js')
    fs.writeFileSync(configFile, `
      module.exports = {
          errorProps: '*'
      }
    `.trim())
    // Set messageKey: 'new_msg' using command line option
    const env = { TERM: ' dumb', TZ: 'UTC' }
    const child = spawn(process.argv[0], [bin], { env, cwd: tmpDir })
    // Validate that the time has been translated and correct message key has been used
    child.on('error', t.threw)
    child.stdout.on('data', (data) => {
      t.equal(data.toString(), '[21:31:36.006] FATAL: There was an error starting the process.\n    QueryError: Error during sql query: syntax error at or near SELECTT\n        at /home/me/projects/example/sql.js\n        at /home/me/projects/example/index.js\n    querySql: SELECTT * FROM "test" WHERE id = $1;\n    queryArgs: 12\n')
    })
    child.stdin.write('{"level":60,"time":1594416696006,"msg":"There was an error starting the process.","type":"Error","stack":"QueryError: Error during sql query: syntax error at or near SELECTT\\n    at /home/me/projects/example/sql.js\\n    at /home/me/projects/example/index.js","querySql":"SELECTT * FROM \\"test\\" WHERE id = $1;","queryArgs":[12]}\n')
    t.teardown(() => {
      fs.unlinkSync(configFile)
      child.kill()
    })
  })

  t.test('throws on missing config file', (t) => {
    t.plan(2)
    const args = [bin, '--config', 'pino-pretty.config.missing.json']
    const env = { TERM: ' dumb', TZ: 'UTC' }
    const child = spawn(process.argv[0], args, { env, cwd: tmpDir })
    child.on('close', (code) => t.equal(code, 1))
    child.stdout.pipe(process.stdout)
    child.stderr.setEncoding('utf8')
    let data = ''
    child.stderr.on('data', (chunk) => {
      data += chunk
    })
    child.on('close', function () {
      t.match(
        data.toString(), 'Error: Failed to load runtime configuration file: pino-pretty.config.missing.json')
    })
    t.teardown(() => child.kill())
  })

  t.test('throws on invalid default config file', (t) => {
    t.plan(2)
    const configFile = path.join(tmpDir, 'pino-pretty.config.js')
    fs.writeFileSync(configFile, 'module.exports = () => {}')
    const env = { TERM: ' dumb', TZ: 'UTC' }
    const child = spawn(process.argv[0], [bin], { env, cwd: tmpDir })
    child.on('close', (code) => t.equal(code, 1))
    child.stdout.pipe(process.stdout)
    child.stderr.setEncoding('utf8')
    let data = ''
    child.stderr.on('data', (chunk) => {
      data += chunk
    })
    child.on('close', function () {
      t.match(data, 'Error: Invalid runtime configuration file: pino-pretty.config.js')
    })
    t.teardown(() => child.kill())
  })

  t.test('throws on invalid custom config file', (t) => {
    t.plan(2)
    const configFile = path.join(tmpDir, 'pino-pretty.config.invalid.js')
    fs.writeFileSync(configFile, 'module.exports = () => {}')
    const args = [bin, '--config', path.relative(tmpDir, configFile)]
    const env = { TERM: ' dumb', TZ: 'UTC' }
    const child = spawn(process.argv[0], args, { env, cwd: tmpDir })
    child.on('close', (code) => t.equal(code, 1))
    child.stdout.pipe(process.stdout)
    child.stderr.setEncoding('utf8')
    let data = ''
    child.stderr.on('data', (chunk) => {
      data += chunk
    })
    child.on('close', function () {
      t.match(data, 'Error: Invalid runtime configuration file: pino-pretty.config.invalid.js')
    })
    t.teardown(() => child.kill())
  })

  t.test('test help', (t) => {
    t.plan(1)
    const env = { TERM: ' dumb', TZ: 'UTC' }
    const child = spawn(process.argv[0], [bin, '--help'], { env })
    const file = fs.readFileSync('help/help.txt').toString()
    child.on('error', t.threw)
    child.stdout.on('data', (data) => {
      t.equal(data.toString(), file)
    })
    t.teardown(() => child.kill())
  })

  t.end()
})
