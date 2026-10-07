'use strict'

const fs = require('fs')
const { PassThrough, Writable, pipeline } = require('stream')
const process = require('process')
const { join } = require('path')

const defaults = {
  ext: '.txt',
  help: 'help'
}

function isDirectory (path) {
  try {
    const stat = fs.lstatSync(path)
    return stat.isDirectory()
  } catch (err) {
    return false
  }
}

function createDefaultStream () {
  return new Writable({
    write (chunk, encoding, callback) {
      process.stdout.write(chunk, callback)
    }
  })
}

function helpMe (opts) {
  opts = Object.assign({}, defaults, opts)

  if (!opts.dir) {
    throw new Error('missing dir')
  }

  if (!isDirectory(opts.dir)) {
    throw new Error(`${opts.dir} is not a directory`)
  }

  return {
    createStream: createStream,
    toStdout: toStdout
  }

  function createStream (args) {
    if (typeof args === 'string') {
      args = args.split(' ')
    } else if (!args || args.length === 0) {
      args = [opts.help]
    }

    const out = new PassThrough()
    const re = new RegExp(
      args
        .map(function (arg) {
          return arg + '[a-zA-Z0-9]*'
        })
        .join('[ /]+')
    )

    if (process.platform === 'win32') {
      opts.dir = opts.dir.split('\\').join('/')
    }

    fs.readdir(opts.dir, function (err, files) {
      if (err) return out.emit('error', err)

      const regexp = new RegExp('.*' + opts.ext + '$')
      files = files
        .filter(function (file) {
          const matched = file.match(regexp)
          return !!matched
        })
        .map(function (relative) {
          return { file: join(opts.dir, relative), relative }
        })
        .filter(function (file) {
          return file.relative.match(re)
        })

      if (files.length === 0) {
        return out.emit('error', new Error('no such help file'))
      } else if (files.length > 1) {
        const exactMatch = files.find(
          (file) => file.relative === `${args[0]}${opts.ext}`
        )
        if (!exactMatch) {
          out.write('There are ' + files.length + ' help pages ')
          out.write('that matches the given request, please disambiguate:\n')
          files.forEach(function (file) {
            out.write('  * ')
            out.write(file.relative.replace(opts.ext, ''))
            out.write('\n')
          })
          out.end()
          return
        }
        files = [exactMatch]
      }

      pipeline(fs.createReadStream(files[0].file), out, () => {})
    })

    return out
  }

  function toStdout (args = [], opts) {
    opts = opts || {}
    const stream = opts.stream || createDefaultStream()
    const _onMissingHelp = opts.onMissingHelp || onMissingHelp
    return new Promise((resolve, reject) => {
      createStream(args)
        .on('error', (err) => {
          _onMissingHelp(err, args, stream).then(resolve, reject)
        })
        .pipe(stream)
        .on('close', resolve)
        .on('end', resolve)
    })
  }

  function onMissingHelp (_, args, stream) {
    stream.write(`no such help file: ${args.join(' ')}.\n\n`)
    return toStdout([], { stream, async onMissingHelp () {} })
  }
}

function help (opts, args) {
  return helpMe(opts).toStdout(args, opts)
}

module.exports = helpMe
module.exports.help = help
