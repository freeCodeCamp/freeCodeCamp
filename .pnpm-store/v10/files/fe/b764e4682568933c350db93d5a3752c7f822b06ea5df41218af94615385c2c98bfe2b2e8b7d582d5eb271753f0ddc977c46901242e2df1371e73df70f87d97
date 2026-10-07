'use strict'

const fs = require('../fs')
const path = require('path')
const { mkdirs } = require('../mkdirs')
const { pathExists } = require('../path-exists')
const { utimesMillis } = require('../util/utimes')
const stat = require('../util/stat')

async function copy (src, dest, opts = {}) {
  if (typeof opts === 'function') {
    opts = { filter: opts }
  }

  opts.clobber = 'clobber' in opts ? !!opts.clobber : true // default to true for now
  opts.overwrite = 'overwrite' in opts ? !!opts.overwrite : opts.clobber // overwrite falls back to clobber

  // Warn about using preserveTimestamps on 32-bit node
  if (opts.preserveTimestamps && process.arch === 'ia32') {
    process.emitWarning(
      'Using the preserveTimestamps option in 32-bit node is not recommended;\n\n' +
      '\tsee https://github.com/jprichardson/node-fs-extra/issues/269',
      'Warning', 'fs-extra-WARN0001'
    )
  }

  const { srcStat, destStat } = await stat.checkPaths(src, dest, 'copy', opts)

  await stat.checkParentPaths(src, srcStat, dest, 'copy')

  const include = await runFilter(src, dest, opts)

  if (!include) return

  // check if the parent of dest exists, and create it if it doesn't exist
  const destParent = path.dirname(dest)
  const dirExists = await pathExists(destParent)
  if (!dirExists) {
    await mkdirs(destParent)
  }

  await getStatsAndPerformCopy(destStat, src, dest, opts)
}

async function runFilter (src, dest, opts) {
  if (!opts.filter) return true
  return opts.filter(src, dest)
}

async function getStatsAndPerformCopy (destStat, src, dest, opts) {
  const statFn = opts.dereference ? fs.stat : fs.lstat
  const srcStat = await statFn(src)

  if (srcStat.isDirectory()) return onDir(srcStat, destStat, src, dest, opts)

  if (
    srcStat.isFile() ||
    srcStat.isCharacterDevice() ||
    srcStat.isBlockDevice()
  ) return onFile(srcStat, destStat, src, dest, opts)

  if (srcStat.isSymbolicLink()) return onLink(destStat, src, dest, opts)
  if (srcStat.isSocket()) throw new Error(`Cannot copy a socket file: ${src}`)
  if (srcStat.isFIFO()) throw new Error(`Cannot copy a FIFO pipe: ${src}`)
  throw new Error(`Unknown file: ${src}`)
}

async function onFile (srcStat, destStat, src, dest, opts) {
  if (!destStat) return copyFile(srcStat, src, dest, opts)

  if (opts.overwrite) {
    await fs.unlink(dest)
    return copyFile(srcStat, src, dest, opts)
  }
  if (opts.errorOnExist) {
    throw new Error(`'${dest}' already exists`)
  }
}

async function copyFile (srcStat, src, dest, opts) {
  await fs.copyFile(src, dest)
  if (opts.preserveTimestamps) {
    // Make sure the file is writable before setting the timestamp
    // otherwise open fails with EPERM when invoked with 'r+'
    // (through utimes call)
    if (fileIsNotWritable(srcStat.mode)) {
      await makeFileWritable(dest, srcStat.mode)
    }

    // Set timestamps and mode correspondingly

    // Note that The initial srcStat.atime cannot be trusted
    // because it is modified by the read(2) system call
    // (See https://nodejs.org/api/fs.html#fs_stat_time_values)
    const updatedSrcStat = await fs.stat(src)
    await utimesMillis(dest, updatedSrcStat.atime, updatedSrcStat.mtime)
  }

  return fs.chmod(dest, srcStat.mode)
}

function fileIsNotWritable (srcMode) {
  return (srcMode & 0o200) === 0
}

function makeFileWritable (dest, srcMode) {
  return fs.chmod(dest, srcMode | 0o200)
}

async function onDir (srcStat, destStat, src, dest, opts) {
  // the dest directory might not exist, create it
  if (!destStat) {
    await fs.mkdir(dest)
  }

  const items = await fs.readdir(src)

  // loop through the files in the current directory to copy everything
  await Promise.all(items.map(async item => {
    const srcItem = path.join(src, item)
    const destItem = path.join(dest, item)

    // skip the item if it is matches by the filter function
    const include = await runFilter(srcItem, destItem, opts)
    if (!include) return

    const { destStat } = await stat.checkPaths(srcItem, destItem, 'copy', opts)

    // If the item is a copyable file, `getStatsAndPerformCopy` will copy it
    // If the item is a directory, `getStatsAndPerformCopy` will call `onDir` recursively
    return getStatsAndPerformCopy(destStat, srcItem, destItem, opts)
  }))

  if (!destStat) {
    await fs.chmod(dest, srcStat.mode)
  }
}

async function onLink (destStat, src, dest, opts) {
  let resolvedSrc = await fs.readlink(src)
  if (opts.dereference) {
    resolvedSrc = path.resolve(process.cwd(), resolvedSrc)
  }
  if (!destStat) {
    return fs.symlink(resolvedSrc, dest)
  }

  let resolvedDest = null
  try {
    resolvedDest = await fs.readlink(dest)
  } catch (e) {
    // dest exists and is a regular file or directory,
    // Windows may throw UNKNOWN error. If dest already exists,
    // fs throws error anyway, so no need to guard against it here.
    if (e.code === 'EINVAL' || e.code === 'UNKNOWN') return fs.symlink(resolvedSrc, dest)
    throw e
  }
  if (opts.dereference) {
    resolvedDest = path.resolve(process.cwd(), resolvedDest)
  }
  if (stat.isSrcSubdir(resolvedSrc, resolvedDest)) {
    throw new Error(`Cannot copy '${resolvedSrc}' to a subdirectory of itself, '${resolvedDest}'.`)
  }

  // do not copy if src is a subdir of dest since unlinking
  // dest in this case would result in removing src contents
  // and therefore a broken symlink would be created.
  if (stat.isSrcSubdir(resolvedDest, resolvedSrc)) {
    throw new Error(`Cannot overwrite '${resolvedDest}' with '${resolvedSrc}'.`)
  }

  // copy the link
  await fs.unlink(dest)
  return fs.symlink(resolvedSrc, dest)
}

module.exports = copy
