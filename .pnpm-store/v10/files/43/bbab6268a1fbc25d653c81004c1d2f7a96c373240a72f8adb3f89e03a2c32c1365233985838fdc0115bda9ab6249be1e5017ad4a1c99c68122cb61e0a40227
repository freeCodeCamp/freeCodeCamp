const { Readable } = require('streamx')

module.exports = function (s, forks = 2) {
  const streams = new Array(forks)
  const status = new Array(forks).fill(true)

  let ended = false

  for (let i = 0; i < forks; i++) {
    streams[i] = new Readable({
      read (cb) {
        const check = !status[i]
        status[i] = true
        if (check && allReadable()) s.resume()
        cb(null)
      }
    })
  }

  s.on('end', function () {
    ended = true
    for (const stream of streams) stream.push(null)
  })

  s.on('error', function (err) {
    for (const stream of streams) stream.destroy(err)
  })

  s.on('close', function () {
    if (ended) return
    for (const stream of streams) stream.destroy()
  })

  s.on('data', function (data) {
    let needsPause = false
    for (let i = 0; i < streams.length; i++) {
      if (!(status[i] = streams[i].push(data))) {
        needsPause = true
      }
    }
    if (needsPause) s.pause()
  })

  return streams

  function allReadable () {
    for (let j = 0; j < status.length; j++) {
      if (!status[j]) return false
    }
    return true
  }
}
