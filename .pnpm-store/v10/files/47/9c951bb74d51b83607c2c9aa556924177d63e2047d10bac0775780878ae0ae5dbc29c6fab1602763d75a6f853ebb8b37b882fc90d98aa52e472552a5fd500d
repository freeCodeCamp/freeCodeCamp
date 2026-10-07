module.exports = create

var matters = require('./matters')

function create(options) {
  var settings = matters(options)
  var length = settings.length
  var index = -1
  var flow = {}
  var matter
  var code

  while (++index < length) {
    matter = settings[index]
    code = fence(matter, 'open').charCodeAt(0)
    if (code in flow) {
      flow[code].push(parse(matter))
    } else {
      flow[code] = [parse(matter)]
    }
  }

  return {flow: flow}
}

function parse(matter) {
  var name = matter.type
  var anywhere = matter.anywhere
  var valueType = name + 'Value'
  var fenceType = name + 'Fence'
  var sequenceType = fenceType + 'Sequence'
  var fenceConstruct = {tokenize: tokenizeFence, partial: true}
  var buffer

  return {tokenize: tokenizeFrontmatter, concrete: true}

  function tokenizeFrontmatter(effects, ok, nok) {
    var self = this

    return start

    function start(code) {
      var position = self.now()

      if (position.column !== 1 || (!anywhere && position.line !== 1)) {
        return nok(code)
      }

      effects.enter(name)
      buffer = fence(matter, 'open')
      return effects.attempt(fenceConstruct, afterOpeningFence, nok)(code)
    }

    function afterOpeningFence(code) {
      buffer = fence(matter, 'close')
      return lineEnd(code)
    }

    function lineStart(code) {
      if (code === -5 || code === -4 || code === -3 || code === null) {
        return lineEnd(code)
      }

      effects.enter(valueType)
      return lineData(code)
    }

    function lineData(code) {
      if (code === -5 || code === -4 || code === -3 || code === null) {
        effects.exit(valueType)
        return lineEnd(code)
      }

      effects.consume(code)
      return lineData
    }

    function lineEnd(code) {
      // Require a closing fence.
      if (code === null) {
        return nok(code)
      }

      // Can only be an eol.
      effects.enter('lineEnding')
      effects.consume(code)
      effects.exit('lineEnding')
      return effects.attempt(fenceConstruct, after, lineStart)
    }

    function after(code) {
      effects.exit(name)
      return ok(code)
    }
  }

  function tokenizeFence(effects, ok, nok) {
    var bufferIndex = 0

    return start

    function start(code) {
      if (code === buffer.charCodeAt(bufferIndex)) {
        effects.enter(fenceType)
        effects.enter(sequenceType)
        return insideSequence(code)
      }

      return nok(code)
    }

    function insideSequence(code) {
      if (bufferIndex === buffer.length) {
        effects.exit(sequenceType)

        if (code === -2 || code === -1 || code === 32) {
          effects.enter('whitespace')
          return insideWhitespace(code)
        }

        return fenceEnd(code)
      }

      if (code === buffer.charCodeAt(bufferIndex)) {
        effects.consume(code)
        bufferIndex++
        return insideSequence
      }

      return nok(code)
    }

    function insideWhitespace(code) {
      if (code === -2 || code === -1 || code === 32) {
        effects.consume(code)
        return insideWhitespace
      }

      effects.exit('whitespace')
      return fenceEnd(code)
    }

    function fenceEnd(code) {
      if (code === -5 || code === -4 || code === -3 || code === null) {
        effects.exit(fenceType)
        return ok(code)
      }

      return nok(code)
    }
  }
}

function fence(matter, prop) {
  var marker

  if (matter.marker) {
    marker = pick(matter.marker, prop)
    return marker + marker + marker
  }

  return pick(matter.fence, prop)
}

function pick(schema, prop) {
  return typeof schema === 'string' ? schema : schema[prop]
}
