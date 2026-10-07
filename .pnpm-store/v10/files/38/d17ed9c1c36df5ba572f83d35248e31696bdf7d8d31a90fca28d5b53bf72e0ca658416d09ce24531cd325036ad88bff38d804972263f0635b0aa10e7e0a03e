const path = require('path')
const fs = require('fs')
const get = require('simple-get')
const pump = require('pump')
const tfs = require('tar-fs')
const zlib = require('zlib')
const util = require('./util')
const error = require('./error')
const proxy = require('./proxy')
const mkdirp = require('mkdirp-classic')

function downloadPrebuild (downloadUrl, opts, cb) {
  let cachedPrebuild = util.cachedPrebuild(downloadUrl)
  const localPrebuild = util.localPrebuild(downloadUrl, opts)
  const tempFile = util.tempFile(cachedPrebuild)
  const log = opts.log || util.noopLogger

  if (opts.nolocal) return download()

  log.info('looking for local prebuild @', localPrebuild)
  fs.access(localPrebuild, fs.R_OK | fs.W_OK, function (err) {
    if (err && err.code === 'ENOENT') {
      return download()
    }

    log.info('found local prebuild')
    cachedPrebuild = localPrebuild
    unpack()
  })

  function download () {
    ensureNpmCacheDir(function (err) {
      if (err) return onerror(err)

      log.info('looking for cached prebuild @', cachedPrebuild)
      fs.access(cachedPrebuild, fs.R_OK | fs.W_OK, function (err) {
        if (!(err && err.code === 'ENOENT')) {
          log.info('found cached prebuild')
          return unpack()
        }

        log.http('request', 'GET ' + downloadUrl)
        const reqOpts = proxy({ url: downloadUrl }, opts)

        if (opts.token) {
          reqOpts.headers = {
            'User-Agent': 'simple-get',
            Accept: 'application/octet-stream',
            Authorization: 'token ' + opts.token
          }
        }

        const req = get(reqOpts, function (err, res) {
          if (err) return onerror(err)
          log.http(res.statusCode, downloadUrl)
          if (res.statusCode !== 200) return onerror()
          mkdirp(util.prebuildCache(), function () {
            log.info('downloading to @', tempFile)
            pump(res, fs.createWriteStream(tempFile), function (err) {
              if (err) return onerror(err)
              fs.rename(tempFile, cachedPrebuild, function (err) {
                if (err) return cb(err)
                log.info('renaming to @', cachedPrebuild)
                unpack()
              })
            })
          })
        })

        req.setTimeout(30 * 1000, function () {
          req.abort()
        })
      })

      function onerror (err) {
        fs.unlink(tempFile, function () {
          cb(err || error.noPrebuilts(opts))
        })
      }
    })
  }

  function unpack () {
    let binaryName

    const updateName = opts.updateName || function (entry) {
      if (/\.node$/i.test(entry.name)) binaryName = entry.name
    }

    log.info('unpacking @', cachedPrebuild)

    const options = {
      readable: true,
      writable: true,
      hardlinkAsFilesFallback: true
    }
    const extract = tfs.extract(opts.path, options).on('entry', updateName)

    pump(fs.createReadStream(cachedPrebuild), zlib.createGunzip(), extract,
      function (err) {
        if (err) return cb(err)

        let resolved
        if (binaryName) {
          try {
            resolved = path.resolve(opts.path || '.', binaryName)
          } catch (err) {
            return cb(err)
          }
          log.info('unpack', 'resolved to ' + resolved)

          if (opts.runtime === 'node' && opts.platform === process.platform && opts.abi === process.versions.modules && opts.arch === process.arch) {
            try {
              require(resolved)
            } catch (err) {
              return cb(err)
            }
            log.info('unpack', 'required ' + resolved + ' successfully')
          }
        }

        cb(null, resolved)
      })
  }

  function ensureNpmCacheDir (cb) {
    const cacheFolder = util.npmCache()
    fs.access(cacheFolder, fs.R_OK | fs.W_OK, function (err) {
      if (err && err.code === 'ENOENT') {
        return makeNpmCacheDir()
      }
      cb(err)
    })

    function makeNpmCacheDir () {
      log.info('npm cache directory missing, creating it...')
      mkdirp(cacheFolder, cb)
    }
  }
}

module.exports = downloadPrebuild
