isPlainObject = require 'lodash/isPlainObject'
defaultStyle = require './defaultStyle'
ParsedError = require './ParsedError'
nodePaths = require './nodePaths'
RenderKid = require 'renderkid'
merge = require 'lodash/merge'

arrayUtils = 
  pluckByCallback: (a, cb) ->
    return a if a.length < 1
    removed = 0

    for value, index in a
      if cb value, index
        removed++
        continue

      if removed isnt 0
        a[index - removed] = a[index]

    if removed > 0
      a.length = a.length - removed

    a

  pluckOneItem: (a, item) ->
    return a if a.length < 1
    reached = no

    for value, index in a
      if not reached
        if value is item
          reached = yes
          continue
      else
        a[index - 1] = a[index]

    a.length = a.length - 1 if reached
    a

instance = null

module.exports = class PrettyError
  self = @

  @_filters:
    'module.exports': (item) ->
      return unless item.what?
      item.what = item.what.replace /\.module\.exports\./g, ' - '
      return

  @_getDefaultStyle: ->
    defaultStyle()

  @start: ->
    unless instance?
      instance = new self
      instance.start()

    instance

  @stop: ->
    instance?.stop()

  constructor: ->
    @_useColors = yes
    @_maxItems = 50
    @_packagesToSkip = []
    @_pathsToSkip = []
    @_skipCallbacks = []
    @_filterCallbacks = []
    @_parsedErrorFilters = []
    @_aliases = []
    @_renderer = new RenderKid
    @_style = self._getDefaultStyle()
    @_renderer.style @_style

  start: ->
    @_oldPrepareStackTrace = Error.prepareStackTrace

    prepeare = @_oldPrepareStackTrace or (exc, frames) ->
      result = exc.toString()
      frames = frames.map (frame) -> "  at #{frame.toString()}"
      result + "\n" + frames.join "\n"

    # https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi
    Error.prepareStackTrace = (exc, trace) =>
      stack = prepeare.apply(null, arguments)
      @render {stack, message: exc.toString().replace /^.*: /, ''}, no

    @

  stop: ->
    Error.prepareStackTrace = @_oldPrepareStackTrace
    @_oldPrepareStackTrace = null

  config: (c) ->
    if c.skipPackages?
      if c.skipPackages is no
        @unskipAllPackages()
      else
        @skipPackage.apply @, c.skipPackages

    if c.skipPaths?
      if c.skipPaths is no
        @unskipAllPaths()
      else
        @skipPath.apply @, c.skipPaths

    if c.skip?
      if c.skip is no
        @unskipAll()
      else
        @skip.apply @, c.skip

    if c.maxItems?
      @setMaxItems c.maxItems

    if c.skipNodeFiles is yes
      @skipNodeFiles()
    else if c.skipNodeFiles is no
      @unskipNodeFiles()

    if c.filters?
      if c.filters is no
        @removeAllFilters()
      else
        @filter.apply @, c.filters

    if c.parsedErrorFilters?
      if c.parsedErrorFilters is no
        @removeAllParsedErrorFilters()
      else
        @filterParsedError.apply @, c.parsedErrorFilters

    if c.aliases?
      if isPlainObject c.aliases
        @alias path, alias for path, alias of c.aliases
      else if c.aliases is no
        @removeAllAliases()

    @

  withoutColors: ->
    @_useColors = false
    @

  withColors: ->
    @_useColors = true
    @

  skipPackage: (packages...) ->
    @_packagesToSkip.push String pkg for pkg in packages
    @

  unskipPackage: (packages...) ->
    arrayUtils.pluckOneItem(@_packagesToSkip, pkg) for pkg in packages
    @

  unskipAllPackages: ->
    @_packagesToSkip.length = 0
    @

  skipPath: (paths...) ->
    @_pathsToSkip.push path for path in paths
    @

  unskipPath: (paths...) ->
    arrayUtils.pluckOneItem(@_pathsToSkip, path) for path in paths
    @

  unskipAllPaths: ->
    @_pathsToSkip.length = 0
    @

  skip: (callbacks...) ->
    @_skipCallbacks.push cb for cb in callbacks
    @

  unskip: (callbacks...) ->
    arrayUtils.pluckOneItem(@_skipCallbacks, cb) for cb in callbacks
    @

  unskipAll: ->
    @_skipCallbacks.length = 0
    @

  skipNodeFiles: ->
    @skipPath.apply @, nodePaths

  unskipNodeFiles: ->
    @unskipPath.apply @, nodePaths

  filter: (callbacks...) ->
    @_filterCallbacks.push cb for cb in callbacks
    @

  removeFilter: (callbacks...) ->
    arrayUtils.pluckOneItem(@_filterCallbacks, cb) for cb in callbacks
    @

  removeAllFilters: ->
    @_filterCallbacks.length = 0
    @

  filterParsedError: (callbacks...) ->
    @_parsedErrorFilters.push cb for cb in callbacks
    @

  removeParsedErrorFilter: (callbacks...) ->
    arrayUtils.pluckOneItem(@_parsedErrorFilters, cb) for cb in callbacks
    @

  removeAllParsedErrorFilters: ->
    @_parsedErrorFilters.length = 0
    @

  setMaxItems: (maxItems = 50) ->
    if maxItems is 0 then maxItems = 50
    @_maxItems = maxItems|0
    @

  alias: (stringOrRx, alias) ->
    @_aliases.push {stringOrRx, alias}
    @

  removeAlias: (stringOrRx) ->
    arrayUtils.pluckByCallback @_aliases, (pair) ->
      pair.stringOrRx is stringOrRx

    @

  removeAllAliases: ->
    @_aliases.length = 0
    @

  _getStyle: ->
    @_style

  appendStyle: (toAppend) ->
    merge @_style, toAppend
    @_renderer.style toAppend
    @

  _getRenderer: ->
    @_renderer

  render: (e, logIt = no, useColors = @_useColors) ->
    obj = @getObject e
    rendered = @_renderer.render(obj, useColors)
    console.error rendered if logIt is yes
    rendered

  getObject: (e) ->
    unless e instanceof ParsedError
      e = new ParsedError e

    @_applyParsedErrorFiltersOn e

    header =
      title: do ->
        ret = {}

        # some errors are thrown to display other errors.
        # we call them wrappers here.
        if e.wrapper isnt ''
          ret.wrapper = "#{e.wrapper}"

        ret.kind = e.kind
        ret

      colon: ':'

      message: String(e.message).trim()

    traceItems = []
    count = -1

    for item, i in e.trace
      continue unless item?
      continue if @_skipOrFilter(item, i) is yes

      count++

      break if count > @_maxItems

      if typeof item is 'string'
        traceItems.push item: custom: item
        continue

      traceItems.push do ->
        markupItem = item:
          header:
            pointer: do ->
              return '' unless item.file?

              file: item.file
              colon: ':'
              line: item.line

          footer: do ->
            foooter = addr: item.shortenedAddr
            if item.extra? then foooter.extra = item.extra
            foooter

        markupItem.item.header.what = item.what if typeof item.what is 'string' and item.what.trim().length > 0
        markupItem


    obj = 'pretty-error':
      header: header

    if traceItems.length > 0
      obj['pretty-error'].trace = traceItems

    obj

  _skipOrFilter: (item, itemNumber) ->
    if typeof item is 'object'
      return yes if item.modName in @_packagesToSkip
      return yes if item.path in @_pathsToSkip

      for modName in item.packages
        return yes if modName in @_packagesToSkip

      if typeof item.shortenedAddr is 'string'
        for pair in @_aliases
          item.shortenedAddr = item.shortenedAddr.replace pair.stringOrRx, pair.alias

    for cb in @_skipCallbacks
      return yes if cb(item, itemNumber) is yes

    for cb in @_filterCallbacks
      cb(item, itemNumber)

    return no

  _applyParsedErrorFiltersOn: (error) ->
    for cb in @_parsedErrorFilters
      cb error

    return

for prop in ['renderer', 'style'] then do ->
  methodName = '_get' + prop[0].toUpperCase() + prop.substr(1, prop.length)
  PrettyError::__defineGetter__ prop, -> do @[methodName]
