sysPath = require 'path'

module.exports = class ParsedError
  constructor: (@error) ->
    do @_parse

  _parse: ->
    @_trace = []
    @_kind = 'Error'
    @_wrapper = ''

    @_wrapper = String @error.wrapper if @error.wrapper?

    unless typeof @error is 'object'
      @_message = String @error
    else
      @_stack = @error.stack

      if @error.kind?
        @_kind = String @error.kind
      else if typeof @_stack is 'string'
        if m = @_stack.match /^([a-zA-Z0-9\_\$]+):\ /
          @_kind = m[1]

      if typeof @_stack is 'string'
        @_parseStack()
      else
        @_message = @error.message? and String(@error.message) or ''

    return

  _parseStack: ->
    messageLines = []
    reachedTrace = no

    for line in @_stack.split '\n'
      continue if line.trim() is ''
      if reachedTrace
        @_trace.push @_parseTraceItem line
      else
        if line.match /^\s*at\s.+/
          reachedTrace = yes
          @_trace.push @_parseTraceItem line
        else
          messageLines.push line

    message = messageLines.join '\n'
    if message.substr(0, @_kind.length) is @_kind
      message =
        message
        .substr(@_kind.length, message.length)
        .replace(/^\:\s+/, '')

    @_message = message

    return

  _parseTraceItem: (text) ->
    text = text.trim()

    return if text is ''
    return text unless text.match /^at\ /

    # remove the 'at ' part
    text = text.replace /^at /, ''

    return if text in ['Error (<anonymous>)', 'Error (<anonymous>:null:null)']

    original = text

    # the part that comes before the address
    what = null

    # address, including path to module and line/col
    addr = null

    # path to module
    path = null

    # module dir
    dir = null

    # module basename
    file = null

    # line number (if using a compiler, the line number of the module
    # in that compiler will be used)
    line = null

    # column, same as above
    col = null

    # if using a compiler, this will translate to the line number of
    # the js equivalent of that module
    jsLine = null

    # like above
    jsCol = null

    # path that doesn't include `node_module` dirs
    shortenedPath = null

    # like above
    shortenedAddr = null

    packageName = '[current]'

    # pick out the address
    if m = text.match /\(([^\)]+)\)$/
      addr = m[1].trim()

    if addr?
      what = text.substr 0, text.length - addr.length - 2
      what = what.trim()

    # might not have a 'what' clause
    unless addr?
      addr = text.trim()

    addr = @_fixPath addr
    remaining = addr

    # remove the <js> clause if the file is a compiled one
    if m = remaining.match /\,\ <js>:(\d+):(\d+)$/
      jsLine = m[1]
      jsCol = m[2]
      remaining = remaining.substr 0, remaining.length - m[0].length

    # the line/col part
    if m = remaining.match /:(\d+):(\d+)$/
      line = m[1]
      col = m[2]
      remaining = remaining.substr 0, remaining.length - m[0].length
      path = remaining

    # file and dir
    if path?
      file = sysPath.basename path
      dir = sysPath.dirname path

      if dir is '.' then dir = ''

      path = @_fixPath path
      file = @_fixPath file
      dir = @_fixPath dir

    if dir?
      d = dir.replace /[\\]{1,2}/g, '/'
      if m = d.match ///
          node_modules/([^/]+)(?!.*node_modules.*)
        ///

        packageName = m[1]

    unless jsLine?
      jsLine = line
      jsCol = col

    if path?
      r = @_rectifyPath path
      shortenedPath = r.path
      shortenedAddr = shortenedPath + addr.substr(path.length, addr.length)
      packages = r.packages

    original: original
    what: what
    addr: addr
    path: path
    dir: dir
    file: file
    line: parseInt line
    col: parseInt col
    jsLine: parseInt jsLine
    jsCol: parseInt jsCol
    packageName: packageName
    shortenedPath: shortenedPath
    shortenedAddr: shortenedAddr
    packages: packages || []

  _getMessage: -> @_message
  _getKind: -> @_kind
  _getWrapper: -> @_wrapper
  _getStack: -> @_stack
  _getArguments: -> @error.arguments
  _getType: -> @error.type
  _getTrace: -> @_trace
  _fixPath: (path) -> path.replace(///[\\]{1,2}///g, '/')

  _rectifyPath: (path, nameForCurrentPackage) ->
    path = String path
    remaining = path

    return path: path, packages: [] unless m = path.match /^(.+?)\/node_modules\/(.+)$/

    parts = []
    packages = []

    if typeof nameForCurrentPackage is 'string'
      parts.push "[#{nameForCurrentPackage}]"
      packages.push "[#{nameForCurrentPackage}]"
    else
      parts.push "[#{m[1].match(/([^\/]+)$/)[1]}]"
      packages.push m[1].match(/([^\/]+)$/)[1]

    rest = m[2]

    while m = rest.match /([^\/]+)\/node_modules\/(.+)$/
      parts.push "[#{m[1]}]"
      packages.push m[1]
      rest = m[2]

    if m = rest.match /([^\/]+)\/(.+)$/
      parts.push "[#{m[1]}]"
      packages.push m[1]
      rest = m[2]

    parts.push rest

    path: parts.join "/"
    packages: packages

for prop in ['message', 'kind', 'arguments', 'type', 'stack', 'trace', 'wrapper'] then do ->
  methodName = '_get' + prop[0].toUpperCase() + prop.substr(1, prop.length)

  Object.defineProperty ParsedError::, prop,
    get: -> this[methodName]()