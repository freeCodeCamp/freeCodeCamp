const tape = require('tape')
const tee = require('./')
const { Readable } = require('streamx')

tape('throttled by eachother', function (t) {
  const r = new Readable()

  for (let i = 0; i < 1000; i++) {
    r.push(Buffer.alloc(1000))
  }

  const [a, b] = tee(r)

  let aTicks = 0

  a.on('data', function (data) {
    aTicks++
  })

  setTimeout(() => b.read(), 100)

  setTimeout(() => {
    t.same(aTicks, 18)
    t.end()
  }, 200)
})

tape('does not premature destroy', function (t) {
  const r = new Readable()

  const [a, b] = tee(r)

  r.push('a')
  r.push('b')
  r.push('c')
  r.push(null)

  setTimeout(() => {
    const aSeen = []
    const bSeen = []

    a.on('data', function (data) {
      aSeen.push(data)
    })
    a.on('end', function () {
      aSeen.push(null)
    })

    b.on('data', function (data) {
      bSeen.push(data)
    })
    b.on('end', function () {
      bSeen.push(null)
    })

    let missing = 2
    a.on('close', onclose)
    b.on('close', onclose)

    function onclose () {
      if (--missing === 0) {
        t.same(aSeen, ['a', 'b', 'c', null])
        t.same(bSeen, ['a', 'b', 'c', null])
        t.end()
      }
    }
  }, 200)
})
