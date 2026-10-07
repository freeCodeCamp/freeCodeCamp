'use strict'

const u = require('universalify').fromPromise
const path = require('path')
const fs = require('../fs')
const mkdir = require('../mkdirs')
const { pathExists } = require('../path-exists')
const { areIdentical } = require('../util/stat')

async function createLink (srcpath, dstpath) {
  let dstStat
  try {
    dstStat = await fs.lstat(dstpath)
  } catch {
    // ignore error
  }

  let srcStat
  try {
    srcStat = await fs.lstat(srcpath)
  } catch (err) {
    err.message = err.message.replace('lstat', 'ensureLink')
    throw err
  }

  if (dstStat && areIdentical(srcStat, dstStat)) return

  const dir = path.dirname(dstpath)

  const dirExists = await pathExists(dir)

  if (!dirExists) {
    await mkdir.mkdirs(dir)
  }

  await fs.link(srcpath, dstpath)
}

function createLinkSync (srcpath, dstpath) {
  let dstStat
  try {
    dstStat = fs.lstatSync(dstpath)
  } catch {}

  try {
    const srcStat = fs.lstatSync(srcpath)
    if (dstStat && areIdentical(srcStat, dstStat)) return
  } catch (err) {
    err.message = err.message.replace('lstat', 'ensureLink')
    throw err
  }

  const dir = path.dirname(dstpath)
  const dirExists = fs.existsSync(dir)
  if (dirExists) return fs.linkSync(srcpath, dstpath)
  mkdir.mkdirsSync(dir)

  return fs.linkSync(srcpath, dstpath)
}

module.exports = {
  createLink: u(createLink),
  createLinkSync
}
