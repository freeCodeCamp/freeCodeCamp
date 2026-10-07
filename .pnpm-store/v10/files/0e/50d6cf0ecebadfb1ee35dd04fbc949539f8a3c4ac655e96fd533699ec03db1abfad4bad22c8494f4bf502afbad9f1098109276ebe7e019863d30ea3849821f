'use strict'

process.env.TZ = 'UTC'

const path = require('path')
const spawn = require('child_process').spawn
const test = require('tap').test

const bin = require.resolve(path.join(__dirname, '..', 'bin.js'))
const epoch = 1522431328992
const logLine = '{"level":30,"time":1522431328992,"msg":"hello world","pid":42,"hostname":"foo"}\n'
const env = { TERM: 'dumb', TZ: 'UTC' }
const formattedEpoch = '17:35:28.992'

test('cli', (t) => {
  t.test('does basic reformatting', (t) => {
    t.plan(1)
    const child = spawn(process.argv[0], [bin], { env })
    child.on('error', t.threw)
    child.stdout.on('data', (data) => {
      t.equal(data.toString(), `[${formattedEpoch}] INFO (42): hello world\n`)
    })
    child.stdin.write(logLine)
    t.teardown(() => child.kill())
  })

  ;['--levelFirst', '-l'].forEach((optionName) => {
    t.test(`flips epoch and level via ${optionName}`, (t) => {
      t.plan(1)
      const child = spawn(process.argv[0], [bin, optionName], { env })
      child.on('error', t.threw)
      child.stdout.on('data', (data) => {
        t.equal(data.toString(), `INFO [${formattedEpoch}] (42): hello world\n`)
      })
      child.stdin.write(logLine)
      t.teardown(() => child.kill())
    })
  })

  ;['--translateTime', '-t'].forEach((optionName) => {
    t.test(`translates time to default format via ${optionName}`, (t) => {
      t.plan(1)
      const child = spawn(process.argv[0], [bin, optionName], { env })
      child.on('error', t.threw)
      child.stdout.on('data', (data) => {
        t.equal(data.toString(), `[${formattedEpoch}] INFO (42): hello world\n`)
      })
      child.stdin.write(logLine)
      t.teardown(() => child.kill())
    })
  })

  ;['--ignore', '-i'].forEach((optionName) => {
    t.test('does ignore multiple keys', (t) => {
      t.plan(1)
      const child = spawn(process.argv[0], [bin, optionName, 'pid,hostname'], { env })
      child.on('error', t.threw)
      child.stdout.on('data', (data) => {
        t.equal(data.toString(), `[${formattedEpoch}] INFO: hello world\n`)
      })
      child.stdin.write(logLine)
      t.teardown(() => child.kill())
    })
  })

  ;['--customLevels', '-x'].forEach((optionName) => {
    t.test(`customize levels via ${optionName}`, (t) => {
      t.plan(1)
      const logLine = '{"level":1,"time":1522431328992,"msg":"hello world","pid":42,"hostname":"foo"}\n'
      const child = spawn(process.argv[0], [bin, optionName, 'err:99,info:1'], { env })
      child.on('error', t.threw)
      child.stdout.on('data', (data) => {
        t.equal(data.toString(), `[${formattedEpoch}] INFO (42): hello world\n`)
      })
      child.stdin.write(logLine)
      t.teardown(() => child.kill())
    })

    t.test(`customize levels via ${optionName} without index`, (t) => {
      t.plan(1)
      const logLine = '{"level":1,"time":1522431328992,"msg":"hello world","pid":42,"hostname":"foo"}\n'
      const child = spawn(process.argv[0], [bin, optionName, 'err:99,info'], { env })
      child.on('error', t.threw)
      child.stdout.on('data', (data) => {
        t.equal(data.toString(), `[${formattedEpoch}] INFO (42): hello world\n`)
      })
      child.stdin.write(logLine)
      t.teardown(() => child.kill())
    })

    t.test(`customize levels via ${optionName} with minimumLevel`, (t) => {
      t.plan(1)
      const child = spawn(process.argv[0], [bin, '--minimumLevel', 'err', optionName, 'err:99,info:1'], { env })
      child.on('error', t.threw)
      child.stdout.on('data', (data) => {
        t.equal(data.toString(), `[${formattedEpoch}] ERR (42): hello world\n`)
      })
      child.stdin.write('{"level":1,"time":1522431328992,"msg":"hello world","pid":42,"hostname":"foo"}\n')
      child.stdin.write('{"level":99,"time":1522431328992,"msg":"hello world","pid":42,"hostname":"foo"}\n')
      t.teardown(() => child.kill())
    })

    t.test(`customize levels via ${optionName} with minimumLevel, customLevels and useOnlyCustomProps false`, (t) => {
      t.plan(1)
      const child = spawn(process.argv[0], [bin, '--minimumLevel', 'custom', '--useOnlyCustomProps', 'false', optionName, 'custom:99,info:1'], { env })
      child.on('error', t.threw)
      child.stdout.on('data', (data) => {
        t.equal(data.toString(), `[${formattedEpoch}] CUSTOM (42): hello world\n`)
      })
      child.stdin.write('{"level":1,"time":1522431328992,"msg":"hello world","pid":42,"hostname":"foo"}\n')
      child.stdin.write('{"level":99,"time":1522431328992,"msg":"hello world","pid":42,"hostname":"foo"}\n')
      t.teardown(() => child.kill())
    })

    t.test(`customize levels via ${optionName} with minimumLevel, customLevels and useOnlyCustomProps true`, (t) => {
      t.plan(1)
      const child = spawn(process.argv[0], [bin, '--minimumLevel', 'custom', '--useOnlyCustomProps', 'true', optionName, 'custom:99,info:1'], { env })
      child.on('error', t.threw)
      child.stdout.on('data', (data) => {
        t.equal(data.toString(), `[${formattedEpoch}] CUSTOM (42): hello world\n`)
      })
      child.stdin.write('{"level":1,"time":1522431328992,"msg":"hello world","pid":42,"hostname":"foo"}\n')
      child.stdin.write('{"level":99,"time":1522431328992,"msg":"hello world","pid":42,"hostname":"foo"}\n')
      t.teardown(() => child.kill())
    })
  })

  ;['--customColors', '-X'].forEach((optionName) => {
    t.test(`customize levels via ${optionName}`, (t) => {
      t.plan(1)
      const child = spawn(process.argv[0], [bin, optionName, 'info:blue,message:red'], { env })
      child.on('error', t.threw)
      child.stdout.on('data', (data) => {
        t.equal(data.toString(), `[${formattedEpoch}] INFO (42): hello world\n`)
      })
      child.stdin.write(logLine)
      t.teardown(() => child.kill())
    })

    t.test(`customize levels via ${optionName} with customLevels`, (t) => {
      t.plan(1)
      const logLine = '{"level":1,"time":1522431328992,"msg":"hello world","pid":42,"hostname":"foo"}\n'
      const child = spawn(process.argv[0], [bin, '--customLevels', 'err:99,info', optionName, 'info:blue,message:red'], { env })
      child.on('error', t.threw)
      child.stdout.on('data', (data) => {
        t.equal(data.toString(), `[${formattedEpoch}] INFO (42): hello world\n`)
      })
      child.stdin.write(logLine)
      t.teardown(() => child.kill())
    })
  })

  ;['--useOnlyCustomProps', '-U'].forEach((optionName) => {
    t.test(`customize levels via ${optionName} false and customColors`, (t) => {
      t.plan(1)
      const child = spawn(process.argv[0], [bin, '--customColors', 'err:blue,info:red', optionName, 'false'], { env })
      child.on('error', t.threw)
      child.stdout.on('data', (data) => {
        t.equal(data.toString(), `[${formattedEpoch}] INFO (42): hello world\n`)
      })
      child.stdin.write(logLine)
      t.teardown(() => child.kill())
    })

    t.test(`customize levels via ${optionName} true and customColors`, (t) => {
      t.plan(1)
      const child = spawn(process.argv[0], [bin, '--customColors', 'err:blue,info:red', optionName, 'true'], { env })
      child.on('error', t.threw)
      child.stdout.on('data', (data) => {
        t.equal(data.toString(), `[${formattedEpoch}] INFO (42): hello world\n`)
      })
      child.stdin.write(logLine)
      t.teardown(() => child.kill())
    })

    t.test(`customize levels via ${optionName} true and customLevels`, (t) => {
      t.plan(1)
      const child = spawn(process.argv[0], [bin, '--customLevels', 'err:99,custom:30', optionName, 'true'], { env })
      child.on('error', t.threw)
      child.stdout.on('data', (data) => {
        t.equal(data.toString(), `[${formattedEpoch}] CUSTOM (42): hello world\n`)
      })
      child.stdin.write(logLine)
      t.teardown(() => child.kill())
    })

    t.test(`customize levels via ${optionName} true and no customLevels`, (t) => {
      t.plan(1)
      const child = spawn(process.argv[0], [bin, optionName, 'true'], { env })
      child.on('error', t.threw)
      child.stdout.on('data', (data) => {
        t.equal(data.toString(), `[${formattedEpoch}] INFO (42): hello world\n`)
      })
      child.stdin.write(logLine)
      t.teardown(() => child.kill())
    })

    t.test(`customize levels via ${optionName} false and customLevels`, (t) => {
      t.plan(1)
      const child = spawn(process.argv[0], [bin, '--customLevels', 'err:99,custom:25', optionName, 'false'], { env })
      child.on('error', t.threw)
      child.stdout.on('data', (data) => {
        t.equal(data.toString(), `[${formattedEpoch}] INFO (42): hello world\n`)
      })
      child.stdin.write(logLine)
      t.teardown(() => child.kill())
    })

    t.test(`customize levels via ${optionName} false and no customLevels`, (t) => {
      t.plan(1)
      const child = spawn(process.argv[0], [bin, optionName, 'false'], { env })
      child.on('error', t.threw)
      child.stdout.on('data', (data) => {
        t.equal(data.toString(), `[${formattedEpoch}] INFO (42): hello world\n`)
      })
      child.stdin.write(logLine)
      t.teardown(() => child.kill())
    })
  })

  t.test('does ignore escaped keys', (t) => {
    t.plan(1)
    const child = spawn(process.argv[0], [bin, '-i', 'log\\.domain\\.corp/foo'], { env })
    child.on('error', t.threw)
    child.stdout.on('data', (data) => {
      t.equal(data.toString(), `[${formattedEpoch}] INFO: hello world\n`)
    })
    const logLine = '{"level":30,"time":1522431328992,"msg":"hello world","log.domain.corp/foo":"bar"}\n'
    child.stdin.write(logLine)
    t.teardown(() => child.kill())
  })

  t.test('passes through stringified date as string', (t) => {
    t.plan(1)
    const child = spawn(process.argv[0], [bin], { env })
    child.on('error', t.threw)

    const date = JSON.stringify(new Date(epoch))

    child.stdout.on('data', (data) => {
      t.equal(data.toString(), date + '\n')
    })

    child.stdin.write(date)
    child.stdin.write('\n')

    t.teardown(() => child.kill())
  })

  t.test('end stdin does not end the destination', (t) => {
    t.plan(2)
    const child = spawn(process.argv[0], [bin], { env })
    child.on('error', t.threw)

    child.stdout.on('data', (data) => {
      t.equal(data.toString(), 'aaa\n')
    })

    child.stdin.end('aaa\n')
    child.on('exit', function (code) {
      t.equal(code, 0)
    })

    t.teardown(() => child.kill())
  })

  ;['--timestampKey', '-a'].forEach((optionName) => {
    t.test(`uses specified timestamp key via ${optionName}`, (t) => {
      t.plan(1)
      const child = spawn(process.argv[0], [bin, optionName, '@timestamp'], { env })
      child.on('error', t.threw)
      child.stdout.on('data', (data) => {
        t.equal(data.toString(), `[${formattedEpoch}] INFO: hello world\n`)
      })
      const logLine = '{"level":30,"@timestamp":1522431328992,"msg":"hello world"}\n'
      child.stdin.write(logLine)
      t.teardown(() => child.kill())
    })
  })

  ;['--singleLine', '-S'].forEach((optionName) => {
    t.test(`singleLine=true via ${optionName}`, (t) => {
      t.plan(1)
      const logLineWithExtra = JSON.stringify(Object.assign(JSON.parse(logLine), {
        extra: {
          foo: 'bar',
          number: 42
        }
      })) + '\n'

      const child = spawn(process.argv[0], [bin, optionName], { env })
      child.on('error', t.threw)
      child.stdout.on('data', (data) => {
        t.equal(data.toString(), `[${formattedEpoch}] INFO (42): hello world {"extra":{"foo":"bar","number":42}}\n`)
      })
      child.stdin.write(logLineWithExtra)
      t.teardown(() => child.kill())
    })
  })

  t.test('does ignore nested keys', (t) => {
    t.plan(1)

    const logLineNested = JSON.stringify(Object.assign(JSON.parse(logLine), {
      extra: {
        foo: 'bar',
        number: 42,
        nested: {
          foo2: 'bar2'
        }
      }
    })) + '\n'

    const child = spawn(process.argv[0], [bin, '-S', '-i', 'extra.foo,extra.nested,extra.nested.miss'], { env })
    child.on('error', t.threw)
    child.stdout.on('data', (data) => {
      t.equal(data.toString(), `[${formattedEpoch}] INFO (42 on foo): hello world {"extra":{"number":42}}\n`)
    })
    child.stdin.write(logLineNested)
    t.teardown(() => child.kill())
  })

  t.test('change TZ', (t) => {
    t.plan(1)
    const child = spawn(process.argv[0], [bin], { env: { ...env, TZ: 'Europe/Amsterdam' } })
    child.on('error', t.threw)
    child.stdout.on('data', (data) => {
      t.equal(data.toString(), '[19:35:28.992] INFO (42): hello world\n')
    })
    child.stdin.write(logLine)
    t.teardown(() => child.kill())
  })

  t.end()
})
