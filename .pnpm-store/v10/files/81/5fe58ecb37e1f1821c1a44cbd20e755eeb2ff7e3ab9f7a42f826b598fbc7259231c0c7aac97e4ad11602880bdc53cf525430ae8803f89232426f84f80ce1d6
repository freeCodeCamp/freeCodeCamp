'use strict'

const os = require('node:os')
const path = require('node:path')
const fs = require('node:fs/promises')
const fastq = require('fastq')
const fastqConcurrency = Math.max(1, os.cpus().length - 1)

function isPathInsideRoot (root, target) {
  const relativePath = path.relative(root, target)

  return relativePath === '' || (
    relativePath !== '..' &&
    !relativePath.startsWith(`..${path.sep}`) &&
    !path.isAbsolute(relativePath)
  )
}

const dirList = {
  _getExtendedInfo: async function (dir, info) {
    const depth = dir.split(path.sep).length
    const files = await fs.readdir(dir)

    const worker = async (filename) => {
      const filePath = path.join(dir, filename)
      let stats
      try {
        stats = await fs.stat(filePath)
      } catch {
        return
      }

      if (stats.isDirectory()) {
        info.totalFolderCount++
        filePath.split(path.sep).length === depth + 1 && info.folderCount++
        await dirList._getExtendedInfo(filePath, info)
      } else {
        info.totalSize += stats.size
        info.totalFileCount++
        filePath.split(path.sep).length === depth + 1 && info.fileCount++
        info.lastModified = Math.max(info.lastModified, stats.mtimeMs)
      }
    }
    const queue = fastq.promise(worker, fastqConcurrency)
    await Promise.all(files.map(filename => queue.push(filename)))
  },

  /**
   * get extended info about a folder
   * @param {string} folderPath full path fs dir
   * @return {Promise<ExtendedInfo>}
   */
  getExtendedInfo: async function (folderPath) {
    const info = {
      totalSize: 0,
      fileCount: 0,
      totalFileCount: 0,
      folderCount: 0,
      totalFolderCount: 0,
      lastModified: 0
    }

    await dirList._getExtendedInfo(folderPath, info)

    return info
  },

  /**
   * get files and dirs from dir, or error
   * @param {string} dir full path fs dir
   * @param {(boolean | ListOptionsJsonFormat | ListOptionsHtmlFormat)} options
   * @param {string} dotfiles
   * note: can't use glob because don't get error on non existing dir
   */
  list: async function (dir, options, dotfiles) {
    const entries = { dirs: [], files: [] }
    let files = await fs.readdir(dir)
    if (dotfiles === 'deny' || dotfiles === 'ignore') {
      files = files.filter(file => file.charAt(0) !== '.')
    }
    if (files.length < 1) {
      return entries
    }

    const worker = async (filename) => {
      let stats
      try {
        stats = await fs.stat(path.join(dir, filename))
      } catch {
        return
      }
      const entry = { name: filename, stats }
      if (stats.isDirectory()) {
        if (options.extendedFolderInfo) {
          entry.extendedInfo = await dirList.getExtendedInfo(path.join(dir, filename))
        }
        entries.dirs.push(entry)
      } else {
        entries.files.push(entry)
      }
    }
    const queue = fastq.promise(worker, fastqConcurrency)
    await Promise.all(files.map(filename => queue.push(filename)))

    entries.dirs.sort((a, b) => a.name.localeCompare(b.name))
    entries.files.sort((a, b) => a.name.localeCompare(b.name))

    return entries
  },

  /**
   * send dir list content, or 404 on error
   * @param {Fastify.Reply} reply
   * @param {string} dir full path fs dir
   * @param {(boolean | ListOptionsJsonFormat | ListOptionsHtmlFormat)} options
   * @param {string} route request route
   * @param {string} dotfiles
   */
  send: async function ({ reply, dir, options, route, prefix, dotfiles }) {
    if (reply.request.query.format === 'html' && typeof options.render !== 'function') {
      throw new TypeError('The `list.render` option must be a function and is required with the URL parameter `format=html`')
    }

    let entries
    try {
      entries = await dirList.list(dir, options, dotfiles)
    } catch {
      return reply.callNotFound()
    }

    const format = reply.request.query.format || options.format
    if (format !== 'html') {
      if (options.jsonFormat !== 'extended') {
        const nameEntries = { dirs: [], files: [] }
        entries.dirs.forEach(entry => nameEntries.dirs.push(entry.name))
        entries.files.forEach(entry => nameEntries.files.push(entry.name))

        await reply.send(nameEntries)
      } else {
        await reply.send(entries)
      }
      return
    }

    const html = options.render(
      entries.dirs.map(entry => dirList.htmlInfo(entry, route, prefix, options)),
      entries.files.map(entry => dirList.htmlInfo(entry, route, prefix, options)))
    await reply.type('text/html').send(html)
  },

  /**
   * provide the html information about entry and route, to get name and full route
   * @param entry file or dir name and stats
   * @param {string} route request route
   * @return {ListFile}
   */
  htmlInfo: function (entry, route, prefix, options) {
    if (options.names?.includes(path.basename(route))) {
      route = path.posix.normalize(path.posix.join(route, '..'))
    }
    return {
      href: encodeURI(path.posix.join(prefix, route, entry.name)),
      name: entry.name,
      stats: entry.stats,
      extendedInfo: entry.extendedInfo
    }
  },

  /**
   * say if the route can be handled by dir list or not
   * @param {string} route request route
   * @param {(boolean | ListOptionsJsonFormat | ListOptionsHtmlFormat)} options
   * @return {boolean}
   */
  handle: function (route, options) {
    return options.names?.includes(path.basename(route)) ||
      // match trailing slash
      ((options.names?.includes('/') && route[route.length - 1] === '/') ?? false)
  },

  /**
   * get path from route and fs root paths, considering trailing slash
   * @param {string} root fs root path
   * @param {string} route request route
   * @return {string|null}
   */
  path: function (root, route) {
    const relativeRoute = route[route.length - 1] === '/'
      ? '.' + route + 'none'
      : '.' + route
    const resolvedRoot = path.resolve(root)
    const dir = path.dirname(path.resolve(resolvedRoot, relativeRoute))

    return isPathInsideRoot(resolvedRoot, dir) ? dir : null
  },

  /**
   * validate options
   * @return {Error}
   */
  validateOptions: function (options) {
    if (!options.list) {
      return
    }

    if (Array.isArray(options.root)) {
      return new TypeError('multi-root with list option is not supported')
    }

    if (options.list.format && options.list.format !== 'json' && options.list.format !== 'html') {
      return new TypeError('The `list.format` option must be json or html')
    }
    if (options.list.names && !Array.isArray(options.list.names)) {
      return new TypeError('The `list.names` option must be an array')
    }
    if (options.list.jsonFormat != null && options.list.jsonFormat !== 'names' && options.list.jsonFormat !== 'extended') {
      return new TypeError('The `list.jsonFormat` option must be name or extended')
    }
    if (options.list.format === 'html' && typeof options.list.render !== 'function') {
      return new TypeError('The `list.render` option must be a function and is required with html format')
    }
  }
}

module.exports = dirList
