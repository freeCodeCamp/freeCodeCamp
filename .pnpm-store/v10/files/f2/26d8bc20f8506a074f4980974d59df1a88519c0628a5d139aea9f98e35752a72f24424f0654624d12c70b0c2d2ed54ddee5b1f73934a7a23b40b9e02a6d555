'use strict'

const { test } = require('tap')
const boot = require('..')

test('pretty print', t => {
  t.plan(19)

  const app = boot()
  app
    .use(first)
    .use(duplicate, { count: 3 })
    .use(second).after(afterUse).after(after)
    .use(duplicate, { count: 2 })
    .use(third).after(after)
    .use(duplicate, { count: 1 })

  const linesExpected = [/^root \d+ ms$/,
    /^├── first \d+ ms$/,
    /^├─┬ duplicate \d+ ms$/,
    /^│ └─┬ duplicate \d+ ms$/,
    /^│ {3}└─┬ duplicate \d+ ms$/,
    /^│ {5}└── duplicate \d+ ms$/,
    /^├── second \d+ ms$/,
    /^├─┬ bound _after \d+ ms$/,
    /^│ └── afterInsider \d+ ms$/,
    /^├── bound _after \d+ ms$/,
    /^├─┬ duplicate \d+ ms$/,
    /^│ └─┬ duplicate \d+ ms$/,
    /^│ {3}└── duplicate \d+ ms$/,
    /^├── third \d+ ms$/,
    /^├── bound _after \d+ ms$/,
    /^└─┬ duplicate \d+ ms$/,
    /^ {2}└── duplicate \d+ ms$/,
    ''
  ]

  app.on('preReady', function show () {
    const print = app.prettyPrint()
    const lines = print.split('\n')

    t.equal(lines.length, linesExpected.length)
    lines.forEach((l, i) => {
      t.match(l, linesExpected[i])
    })
  })

  function first (s, opts, done) {
    done()
  }
  function second (s, opts, done) {
    done()
  }
  function third (s, opts, done) {
    done()
  }
  function after (err, cb) {
    cb(err)
  }
  function afterUse (err, cb) {
    app.use(afterInsider)
    cb(err)
  }

  function afterInsider (s, opts, done) {
    done()
  }

  function duplicate (instance, opts, cb) {
    if (opts.count > 0) {
      instance.use(duplicate, { count: opts.count - 1 })
    }
    setTimeout(cb, 20)
  }
})
