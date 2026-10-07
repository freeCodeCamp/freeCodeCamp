'use strict'

const test = require('tape')
const concat = require('concat-stream')
const fs = require('fs')
const os = require('os')
const path = require('path')
const helpMe = require('./')
const proxyquire = require('proxyquire')

test('throws if no directory is passed', function (t) {
  try {
    helpMe()
    t.fail()
  } catch (err) {
    t.equal(err.message, 'missing dir')
  }
  t.end()
})

test('throws if a normal file is passed', function (t) {
  try {
    helpMe({
      dir: __filename
    })
    t.fail()
  } catch (err) {
    t.equal(err.message, `${__filename} is not a directory`)
  }
  t.end()
})

test('throws if the directory cannot be accessed', function (t) {
  try {
    helpMe({
      dir: './foo'
    })
    t.fail()
  } catch (err) {
    t.equal(err.message, './foo is not a directory')
  }
  t.end()
})

test('show a generic help.txt from a folder to a stream with relative path in dir', function (t) {
  t.plan(2)

  helpMe({
    dir: 'fixture/basic'
  }).createStream()
    .pipe(concat(function (data) {
      fs.readFile('fixture/basic/help.txt', function (err, expected) {
        t.error(err)
        t.equal(data.toString(), expected.toString())
      })
    }))
})

test('show a generic help.txt from a folder to a stream with absolute path in dir', function (t) {
  t.plan(2)

  helpMe({
    dir: path.join(__dirname, 'fixture/basic')
  }).createStream()
    .pipe(concat(function (data) {
      fs.readFile('fixture/basic/help.txt', function (err, expected) {
        t.error(err)
        t.equal(data.toString(), expected.toString())
      })
    }))
})

test('custom help command with an array', function (t) {
  t.plan(2)

  helpMe({
    dir: 'fixture/basic'
  }).createStream(['hello'])
    .pipe(concat(function (data) {
      fs.readFile('fixture/basic/hello.txt', function (err, expected) {
        t.error(err)
        t.equal(data.toString(), expected.toString())
      })
    }))
})

test('custom help command without an ext', function (t) {
  t.plan(2)

  helpMe({
    dir: 'fixture/no-ext',
    ext: ''
  }).createStream(['hello'])
    .pipe(concat(function (data) {
      fs.readFile('fixture/no-ext/hello', function (err, expected) {
        t.error(err)
        t.equal(data.toString(), expected.toString())
      })
    }))
})

test('custom help command with a string', function (t) {
  t.plan(2)

  helpMe({
    dir: 'fixture/basic'
  }).createStream('hello')
    .pipe(concat(function (data) {
      fs.readFile('fixture/basic/hello.txt', function (err, expected) {
        t.error(err)
        t.equal(data.toString(), expected.toString())
      })
    }))
})

test('missing help file', function (t) {
  t.plan(1)

  helpMe({
    dir: 'fixture/basic'
  }).createStream('abcde')
    .on('error', function (err) {
      t.equal(err.message, 'no such help file')
    })
    .resume()
})

test('custom help command with an array', function (t) {
  const helper = helpMe({
    dir: 'fixture/shortnames'
  })

  t.test('abbreviates two words in one', function (t) {
    t.plan(2)

    helper
      .createStream(['world'])
      .pipe(concat(function (data) {
        fs.readFile('fixture/shortnames/hello world.txt', function (err, expected) {
          t.error(err)
          t.equal(data.toString(), expected.toString())
        })
      }))
  })

  t.test('abbreviates three words in two', function (t) {
    t.plan(2)

    helper
      .createStream(['abcde', 'fghi'])
      .pipe(concat(function (data) {
        fs.readFile('fixture/shortnames/abcde fghi lmno.txt', function (err, expected) {
          t.error(err)
          t.equal(data.toString(), expected.toString())
        })
      }))
  })

  t.test('abbreviates a word', function (t) {
    t.plan(2)

    helper
      .createStream(['abc', 'fg'])
      .pipe(concat(function (data) {
        fs.readFile('fixture/shortnames/abcde fghi lmno.txt', function (err, expected) {
          t.error(err)
          t.equal(data.toString(), expected.toString())
        })
      }))
  })

  t.test('abbreviates a word using strings', function (t) {
    t.plan(2)

    helper
      .createStream('abc fg')
      .pipe(concat(function (data) {
        fs.readFile('fixture/shortnames/abcde fghi lmno.txt', function (err, expected) {
          t.error(err)
          t.equal(data.toString(), expected.toString())
        })
      }))
  })

  t.test('print a disambiguation', function (t) {
    t.plan(1)

    const expected = '' +
      'There are 2 help pages that matches the given request, please disambiguate:\n' +
      '  * abcde fghi lmno\n' +
      '  * abcde hello\n'

    helper
      .createStream(['abc'])
      .pipe(concat({ encoding: 'string' }, function (data) {
        t.equal(data, expected)
      }))
  })

  t.test('choose exact match over partial', function (t) {
    t.plan(1)

    helpMe({
      dir: 'fixture/sameprefix'
    }).createStream(['hello'])
      .pipe(concat({ encoding: 'string' }, function (data) {
        t.equal(data, 'hello')
      }))
  })
})

test('toStdout helper', async function (t) {
  t.plan(2)

  let completed = false
  const stream = concat(function (data) {
    completed = true
    fs.readFile('fixture/basic/help.txt', function (err, expected) {
      t.error(err)
      t.equal(data.toString(), expected.toString())
    })
  })

  await helpMe({
    dir: 'fixture/basic'
  }).toStdout([], { stream })

  t.ok(completed)
})

test('handle error in toStdout', async function (t) {
  t.plan(2)

  let completed = false
  const stream = concat(function (data) {
    completed = true
    fs.readFile('fixture/basic/help.txt', function (err, expected) {
      t.error(err)
      t.equal(data.toString(), 'no such help file: something.\n\n' + expected.toString())
    })
  })

  await helpMe({
    dir: 'fixture/basic'
  }).toStdout(['something'], {
    stream
  })

  t.ok(completed)
})

test('customize missing help fle message', async function (t) {
  t.plan(3)

  const stream = concat(function (data) {
    t.equal(data.toString(), 'kaboom\n\n')
  })

  await helpMe({
    dir: 'fixture/basic'
  }).toStdout(['something'], {
    stream,
    async onMissingHelp (err, args, stream) {
      t.equal(err.message, 'no such help file')
      t.deepEquals(args, ['something'])
      stream.end('kaboom\n\n')
    }
  })
})

test('toStdout without factory', async function (t) {
  t.plan(2)

  let completed = false
  const stream = concat(function (data) {
    completed = true
    fs.readFile('fixture/basic/help.txt', function (err, expected) {
      t.error(err)
      t.equal(data.toString(), expected.toString())
    })
  })

  await helpMe.help({
    dir: 'fixture/basic',
    stream
  }, [])

  t.ok(completed)
})

test('should allow for awaiting the response with default stdout stream', async function (t) {
  t.plan(2)

  const _process = Object.create(process)
  const stdout = Object.create(process.stdout)
  Object.defineProperty(_process, 'stdout', {
    value: stdout
  })

  let completed = false
  stdout.write = (data, cb) => {
    t.equal(data.toString(), 'hello world' + os.EOL)
    completed = true
    cb()
  }

  const helpMe = proxyquire('./help-me', {
    process: _process
  })

  await helpMe.help({
    dir: 'fixture/basic'
  })

  t.ok(completed)
})
