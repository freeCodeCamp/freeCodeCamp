'use strict'

var decodeEntity = require('parse-entities/decode-entity.js')
var codes = require('../character/codes.js')
var assign = require('../constant/assign.js')
var constants = require('../constant/constants.js')
var hasOwnProperty = require('../constant/has-own-property.js')
var types = require('../constant/types.js')
var combineHtmlExtensions = require('../util/combine-html-extensions.js')
var chunkedPush = require('../util/chunked-push.js')
var miniflat = require('../util/miniflat.js')
var normalizeIdentifier = require('../util/normalize-identifier.js')
var normalizeUri = require('../util/normalize-uri.js')
var safeFromInt = require('../util/safe-from-int.js')

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : {default: e}
}

var decodeEntity__default = /*#__PURE__*/ _interopDefaultLegacy(decodeEntity)

// While micromark is a lexer/tokenizer, the common case of going from markdown

// This ensures that certain characters which have special meaning in HTML are
// dealt with.
// Technically, we can skip `>` and `"` in many cases, but CM includes them.
var characterReferences = {'"': 'quot', '&': 'amp', '<': 'lt', '>': 'gt'}

// These two are allowlists of essentially safe protocols for full URLs in
// respectively the `href` (on `<a>`) and `src` (on `<img>`) attributes.
// They are based on what is allowed on GitHub,
// <https://github.com/syntax-tree/hast-util-sanitize/blob/9275b21/lib/github.json#L31>
var protocolHref = /^(https?|ircs?|mailto|xmpp)$/i
var protocolSrc = /^https?$/i

function compileHtml(options) {
  // Configuration.
  // Includes `htmlExtensions` (an array of extensions), `defaultLineEnding` (a
  // preferred EOL), `allowDangerousProtocol` (whether to allow potential
  // dangerous protocols), and `allowDangerousHtml` (whether to allow potential
  // dangerous HTML).
  var settings = options || {}
  // Tags is needed because according to markdown, links and emphasis and
  // whatnot can exist in images, however, as HTML doesn’t allow content in
  // images, the tags are ignored in the `alt` attribute, but the content
  // remains.
  var tags = true
  // An object to track identifiers to media (URLs and titles) defined with
  // definitions.
  var definitions = {}
  // A lot of the handlers need to capture some of the output data, modify it
  // somehow, and then deal with it.
  // We do that by tracking a stack of buffers, that can be opened (with
  // `buffer`) and closed (with `resume`) to access them.
  var buffers = [[]]
  // As we can have links in images and the other way around, where the deepest
  // ones are closed first, we need to track which one we’re in.
  var mediaStack = []
  // Same for tightness, which is specific to lists.
  // We need to track if we’re currently in a tight or loose container.
  var tightStack = []

  var defaultHandlers = {
    enter: {
      blockQuote: onenterblockquote,
      codeFenced: onentercodefenced,
      codeFencedFenceInfo: buffer,
      codeFencedFenceMeta: buffer,
      codeIndented: onentercodeindented,
      codeText: onentercodetext,
      content: onentercontent,
      definition: onenterdefinition,
      definitionDestinationString: onenterdefinitiondestinationstring,
      definitionLabelString: buffer,
      definitionTitleString: buffer,
      emphasis: onenteremphasis,
      htmlFlow: onenterhtmlflow,
      htmlText: onenterhtml,
      image: onenterimage,
      label: buffer,
      link: onenterlink,
      listItemMarker: onenterlistitemmarker,
      listItemValue: onenterlistitemvalue,
      listOrdered: onenterlistordered,
      listUnordered: onenterlistunordered,
      paragraph: onenterparagraph,
      reference: buffer,
      resource: onenterresource,
      resourceDestinationString: onenterresourcedestinationstring,
      resourceTitleString: buffer,
      setextHeading: onentersetextheading,
      strong: onenterstrong
    },
    exit: {
      atxHeading: onexitatxheading,
      atxHeadingSequence: onexitatxheadingsequence,
      autolinkEmail: onexitautolinkemail,
      autolinkProtocol: onexitautolinkprotocol,
      blockQuote: onexitblockquote,
      characterEscapeValue: onexitdata,
      characterReferenceMarkerHexadecimal: onexitcharacterreferencemarker,
      characterReferenceMarkerNumeric: onexitcharacterreferencemarker,
      characterReferenceValue: onexitcharacterreferencevalue,
      codeFenced: onexitflowcode,
      codeFencedFence: onexitcodefencedfence,
      codeFencedFenceInfo: onexitcodefencedfenceinfo,
      codeFencedFenceMeta: resume,
      codeFlowValue: onexitcodeflowvalue,
      codeIndented: onexitflowcode,
      codeText: onexitcodetext,
      codeTextData: onexitdata,
      data: onexitdata,
      definition: onexitdefinition,
      definitionDestinationString: onexitdefinitiondestinationstring,
      definitionLabelString: onexitdefinitionlabelstring,
      definitionTitleString: onexitdefinitiontitlestring,
      emphasis: onexitemphasis,
      hardBreakEscape: onexithardbreak,
      hardBreakTrailing: onexithardbreak,
      htmlFlow: onexithtml,
      htmlFlowData: onexitdata,
      htmlText: onexithtml,
      htmlTextData: onexitdata,
      image: onexitmedia,
      label: onexitlabel,
      labelText: onexitlabeltext,
      lineEnding: onexitlineending,
      link: onexitmedia,
      listOrdered: onexitlistordered,
      listUnordered: onexitlistunordered,
      paragraph: onexitparagraph,
      reference: resume,
      referenceString: onexitreferencestring,
      resource: resume,
      resourceDestinationString: onexitresourcedestinationstring,
      resourceTitleString: onexitresourcetitlestring,
      setextHeading: onexitsetextheading,
      setextHeadingLineSequence: onexitsetextheadinglinesequence,
      setextHeadingText: onexitsetextheadingtext,
      strong: onexitstrong,
      thematicBreak: onexitthematicbreak
    }
  }

  // Combine the HTML extensions with the default handlers.
  // An HTML extension is an object whose fields are either `enter` or `exit`
  // (reflecting whether a token is entered or exited).
  // The values at such objects are names of tokens mapping to handlers.
  // Handlers are called, respectively when a token is opener or closed, with
  // that token, and a context as `this`.
  var handlers = combineHtmlExtensions(
    [defaultHandlers].concat(miniflat(settings.htmlExtensions))
  )

  // Handlers do often need to keep track of some state.
  // That state is provided here as a key-value store (an object).
  var data = {tightStack: tightStack}

  // The context for handlers references a couple of useful functions.
  // In handlers from extensions, those can be accessed at `this`.
  // For the handlers here, they can be accessed directly.
  var context = {
    lineEndingIfNeeded: lineEndingIfNeeded,
    options: settings,
    encode: encode,
    raw: raw,
    tag: tag,
    buffer: buffer,
    resume: resume,
    setData: setData,
    getData: getData
  }

  // Generally, micromark copies line endings (`'\r'`, `'\n'`, `'\r\n'`) in the
  // markdown document over to the compiled HTML.
  // In some cases, such as `> a`, CommonMark requires that extra line endings
  // are added: `<blockquote>\n<p>a</p>\n</blockquote>`.
  // This variable hold the default line ending when given (or `undefined`),
  // and in the latter case will be updated to the first found line ending if
  // there is one.
  var lineEndingStyle = settings.defaultLineEnding

  // Return the function that handles a slice of events.
  return compile

  // Deal w/ a slice of events.
  // Return either the empty string if there’s nothing of note to return, or the
  // result when done.
  function compile(events) {
    // As definitions can come after references, we need to figure out the media
    // (urls and titles) defined by them before handling the references.
    // So, we do sort of what HTML does: put metadata at the start (in head), and
    // then put content after (`body`).
    var head = []
    var body = []
    var index
    var start
    var listStack
    var handler
    var result

    index = -1
    start = 0
    listStack = []

    while (++index < events.length) {
      // Figure out the line ending style used in the document.
      if (
        !lineEndingStyle &&
        (events[index][1].type === types.lineEnding ||
          events[index][1].type === types.lineEndingBlank)
      ) {
        lineEndingStyle = events[index][2].sliceSerialize(events[index][1])
      }

      // Preprocess lists to infer whether the list is loose or not.
      if (
        events[index][1].type === types.listOrdered ||
        events[index][1].type === types.listUnordered
      ) {
        if (events[index][0] === 'enter') {
          listStack.push(index)
        } else {
          prepareList(events.slice(listStack.pop(), index))
        }
      }

      // Move definitions to the front.
      if (events[index][1].type === types.definition) {
        if (events[index][0] === 'enter') {
          body = chunkedPush(body, events.slice(start, index))
          start = index
        } else {
          head = chunkedPush(head, events.slice(start, index + 1))
          start = index + 1
        }
      }
    }

    head = chunkedPush(head, body)
    head = chunkedPush(head, events.slice(start))
    result = head
    index = -1

    // Handle the start of the document, if defined.
    if (handlers.enter.null) {
      handlers.enter.null.call(context)
    }

    // Handle all events.
    while (++index < events.length) {
      handler = handlers[result[index][0]]

      if (hasOwnProperty.call(handler, result[index][1].type)) {
        handler[result[index][1].type].call(
          assign({sliceSerialize: result[index][2].sliceSerialize}, context),
          result[index][1]
        )
      }
    }

    // Handle the end of the document, if defined.
    if (handlers.exit.null) {
      handlers.exit.null.call(context)
    }

    return buffers[0].join('')
  }

  // Figure out whether lists are loose or not.
  function prepareList(slice) {
    var length = slice.length - 1 // Skip close.
    var index = 0 // Skip open.
    var containerBalance = 0
    var loose
    var atMarker
    var event

    while (++index < length) {
      event = slice[index]

      if (event[1]._container) {
        atMarker = undefined

        if (event[0] === 'enter') {
          containerBalance++
        } else {
          containerBalance--
        }
      } else if (event[1].type === types.listItemPrefix) {
        if (event[0] === 'exit') {
          atMarker = true
        }
      } else if (event[1].type === types.linePrefix);
      else if (event[1].type === types.lineEndingBlank) {
        if (event[0] === 'enter' && !containerBalance) {
          if (atMarker) {
            atMarker = undefined
          } else {
            loose = true
          }
        }
      } else {
        atMarker = undefined
      }
    }

    slice[0][1]._loose = loose
  }

  // Set data into the key-value store.
  function setData(key, value) {
    data[key] = value
  }

  // Get data from the key-value store.
  function getData(key) {
    return data[key]
  }

  // Capture some of the output data.
  function buffer() {
    buffers.push([])
  }

  // Stop capturing and access the output data.
  function resume() {
    return buffers.pop().join('')
  }

  // Output (parts of) HTML tags.
  function tag(value) {
    if (!tags) return
    setData('lastWasTag', true)
    buffers[buffers.length - 1].push(value)
  }

  // Output raw data.
  function raw(value) {
    setData('lastWasTag')
    buffers[buffers.length - 1].push(value)
  }

  // Output an extra line ending.
  function lineEnding() {
    raw(lineEndingStyle || '\n')
  }

  // Output an extra line ending if the previous value wasn’t EOF/EOL.
  function lineEndingIfNeeded() {
    var buffer = buffers[buffers.length - 1]
    var slice = buffer[buffer.length - 1]
    var previous = slice ? slice.charCodeAt(slice.length - 1) : codes.eof

    if (
      previous === codes.lf ||
      previous === codes.cr ||
      previous === codes.eof
    ) {
      return
    }

    lineEnding()
  }

  // Make a value safe for injection in HTML (except w/ `ignoreEncode`).
  function encode(value) {
    return getData('ignoreEncode') ? value : value.replace(/["&<>]/g, replace)
    function replace(value) {
      return '&' + characterReferences[value] + ';'
    }
  }

  // Make a value safe for injection as a URL.
  // This does encode unsafe characters with percent-encoding, skipping already
  // encoded sequences (`normalizeUri`).
  // Further unsafe characters are encoded as character references (`encode`).
  // Finally, if the URL includes an unknown protocol (such as a dangerous
  // example, `javascript:`), the value is ignored.
  function url(url, protocol) {
    var value = encode(normalizeUri(url || ''))
    var colon = value.indexOf(':')
    var questionMark = value.indexOf('?')
    var numberSign = value.indexOf('#')
    var slash = value.indexOf('/')

    if (
      settings.allowDangerousProtocol ||
      // If there is no protocol, it’s relative.
      colon < 0 ||
      // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
      (slash > -1 && colon > slash) ||
      (questionMark > -1 && colon > questionMark) ||
      (numberSign > -1 && colon > numberSign) ||
      // It is a protocol, it should be allowed.
      protocol.test(value.slice(0, colon))
    ) {
      return value
    }

    return ''
  }

  //
  // Handlers.
  //

  function onenterlistordered(token) {
    tightStack.push(!token._loose)
    lineEndingIfNeeded()
    tag('<ol')
    setData('expectFirstItem', true)
  }

  function onenterlistunordered(token) {
    tightStack.push(!token._loose)
    lineEndingIfNeeded()
    tag('<ul')
    setData('expectFirstItem', true)
  }

  function onenterlistitemvalue(token) {
    var value

    if (getData('expectFirstItem')) {
      value = parseInt(this.sliceSerialize(token), constants.numericBaseDecimal)

      if (value !== 1) {
        tag(' start="' + encode(String(value)) + '"')
      }
    }
  }

  function onenterlistitemmarker() {
    if (getData('expectFirstItem')) {
      tag('>')
    } else {
      onexitlistitem()
    }

    lineEndingIfNeeded()
    tag('<li>')
    setData('expectFirstItem')
    // “Hack” to prevent a line ending from showing up if the item is empty.
    setData('lastWasTag')
  }

  function onexitlistordered() {
    onexitlistitem()
    tightStack.pop()
    lineEnding()
    tag('</ol>')
  }

  function onexitlistunordered() {
    onexitlistitem()
    tightStack.pop()
    lineEnding()
    tag('</ul>')
  }

  function onexitlistitem() {
    if (getData('lastWasTag') && !getData('slurpAllLineEndings')) {
      lineEndingIfNeeded()
    }

    tag('</li>')
    setData('slurpAllLineEndings')
  }

  function onenterblockquote() {
    tightStack.push(false)
    lineEndingIfNeeded()
    tag('<blockquote>')
  }

  function onexitblockquote() {
    tightStack.pop()
    lineEndingIfNeeded()
    tag('</blockquote>')
    setData('slurpAllLineEndings')
  }

  function onenterparagraph() {
    if (!tightStack[tightStack.length - 1]) {
      lineEndingIfNeeded()
      tag('<p>')
    }

    setData('slurpAllLineEndings')
  }

  function onexitparagraph() {
    if (tightStack[tightStack.length - 1]) {
      setData('slurpAllLineEndings', true)
    } else {
      tag('</p>')
    }
  }

  function onentercodefenced() {
    lineEndingIfNeeded()
    tag('<pre><code')
    setData('fencesCount', 0)
  }

  function onexitcodefencedfenceinfo() {
    var value = resume()
    tag(' class="language-' + value + '"')
  }

  function onexitcodefencedfence() {
    if (!getData('fencesCount')) {
      tag('>')
      setData('fencedCodeInside', true)
      setData('slurpOneLineEnding', true)
    }

    setData('fencesCount', getData('fencesCount') + 1)
  }

  function onentercodeindented() {
    lineEndingIfNeeded()
    tag('<pre><code>')
  }

  function onexitflowcode() {
    // Send an extra line feed if we saw data.
    if (getData('flowCodeSeenData')) lineEndingIfNeeded()
    tag('</code></pre>')
    if (getData('fencesCount') < 2) lineEndingIfNeeded()
    setData('flowCodeSeenData')
    setData('fencesCount')
    setData('slurpOneLineEnding')
  }

  function onenterimage() {
    mediaStack.push({image: true})
    tags = undefined // Disallow tags.
  }

  function onenterlink() {
    mediaStack.push({})
  }

  function onexitlabeltext(token) {
    mediaStack[mediaStack.length - 1].labelId = this.sliceSerialize(token)
  }

  function onexitlabel() {
    mediaStack[mediaStack.length - 1].label = resume()
  }

  function onexitreferencestring(token) {
    mediaStack[mediaStack.length - 1].referenceId = this.sliceSerialize(token)
  }

  function onenterresource() {
    buffer() // We can have line endings in the resource, ignore them.
    mediaStack[mediaStack.length - 1].destination = ''
  }

  function onenterresourcedestinationstring() {
    buffer()
    // Ignore encoding the result, as we’ll first percent encode the url and
    // encode manually after.
    setData('ignoreEncode', true)
  }

  function onexitresourcedestinationstring() {
    mediaStack[mediaStack.length - 1].destination = resume()
    setData('ignoreEncode')
  }

  function onexitresourcetitlestring() {
    mediaStack[mediaStack.length - 1].title = resume()
  }

  function onexitmedia() {
    var index = mediaStack.length - 1 // Skip current.
    var media = mediaStack[index]
    var context =
      media.destination === undefined
        ? definitions[normalizeIdentifier(media.referenceId || media.labelId)]
        : media

    tags = true

    while (index--) {
      if (mediaStack[index].image) {
        tags = undefined
        break
      }
    }

    if (media.image) {
      tag('<img src="' + url(context.destination, protocolSrc) + '" alt="')
      raw(media.label)
      tag('"')
    } else {
      tag('<a href="' + url(context.destination, protocolHref) + '"')
    }

    tag(context.title ? ' title="' + context.title + '"' : '')

    if (media.image) {
      tag(' />')
    } else {
      tag('>')
      raw(media.label)
      tag('</a>')
    }

    mediaStack.pop()
  }

  function onenterdefinition() {
    buffer()
    mediaStack.push({})
  }

  function onexitdefinitionlabelstring(token) {
    // Discard label, use the source content instead.
    resume()
    mediaStack[mediaStack.length - 1].labelId = this.sliceSerialize(token)
  }

  function onenterdefinitiondestinationstring() {
    buffer()
    setData('ignoreEncode', true)
  }

  function onexitdefinitiondestinationstring() {
    mediaStack[mediaStack.length - 1].destination = resume()
    setData('ignoreEncode')
  }

  function onexitdefinitiontitlestring() {
    mediaStack[mediaStack.length - 1].title = resume()
  }

  function onexitdefinition() {
    var id = normalizeIdentifier(mediaStack[mediaStack.length - 1].labelId)

    resume()

    if (!hasOwnProperty.call(definitions, id)) {
      definitions[id] = mediaStack[mediaStack.length - 1]
    }

    mediaStack.pop()
  }

  function onentercontent() {
    setData('slurpAllLineEndings', true)
  }

  function onexitatxheadingsequence(token) {
    // Exit for further sequences.
    if (getData('headingRank')) return
    setData('headingRank', this.sliceSerialize(token).length)
    lineEndingIfNeeded()
    tag('<h' + getData('headingRank') + '>')
  }

  function onentersetextheading() {
    buffer()
    setData('slurpAllLineEndings')
  }

  function onexitsetextheadingtext() {
    setData('slurpAllLineEndings', true)
  }

  function onexitatxheading() {
    tag('</h' + getData('headingRank') + '>')
    setData('headingRank')
  }

  function onexitsetextheadinglinesequence(token) {
    setData(
      'headingRank',
      this.sliceSerialize(token).charCodeAt(0) === codes.equalsTo ? 1 : 2
    )
  }

  function onexitsetextheading() {
    var value = resume()
    lineEndingIfNeeded()
    tag('<h' + getData('headingRank') + '>')
    raw(value)
    tag('</h' + getData('headingRank') + '>')
    setData('slurpAllLineEndings')
    setData('headingRank')
  }

  function onexitdata(token) {
    raw(encode(this.sliceSerialize(token)))
  }

  function onexitlineending(token) {
    if (getData('slurpAllLineEndings')) {
      return
    }

    if (getData('slurpOneLineEnding')) {
      setData('slurpOneLineEnding')
      return
    }

    if (getData('inCodeText')) {
      raw(' ')
      return
    }

    raw(encode(this.sliceSerialize(token)))
  }

  function onexitcodeflowvalue(token) {
    raw(encode(this.sliceSerialize(token)))
    setData('flowCodeSeenData', true)
  }

  function onexithardbreak() {
    tag('<br />')
  }

  function onenterhtmlflow() {
    lineEndingIfNeeded()
    onenterhtml()
  }

  function onexithtml() {
    setData('ignoreEncode')
  }

  function onenterhtml() {
    if (settings.allowDangerousHtml) {
      setData('ignoreEncode', true)
    }
  }

  function onenteremphasis() {
    tag('<em>')
  }

  function onenterstrong() {
    tag('<strong>')
  }

  function onentercodetext() {
    setData('inCodeText', true)
    tag('<code>')
  }

  function onexitcodetext() {
    setData('inCodeText')
    tag('</code>')
  }

  function onexitemphasis() {
    tag('</em>')
  }

  function onexitstrong() {
    tag('</strong>')
  }

  function onexitthematicbreak() {
    lineEndingIfNeeded()
    tag('<hr />')
  }

  function onexitcharacterreferencemarker(token) {
    setData('characterReferenceType', token.type)
  }

  function onexitcharacterreferencevalue(token) {
    var value = this.sliceSerialize(token)

    value = getData('characterReferenceType')
      ? safeFromInt(
          value,
          getData('characterReferenceType') ===
            types.characterReferenceMarkerNumeric
            ? constants.numericBaseDecimal
            : constants.numericBaseHexadecimal
        )
      : decodeEntity__default['default'](value)

    raw(encode(value))
    setData('characterReferenceType')
  }

  function onexitautolinkprotocol(token) {
    var uri = this.sliceSerialize(token)
    tag('<a href="' + url(uri, protocolHref) + '">')
    raw(encode(uri))
    tag('</a>')
  }

  function onexitautolinkemail(token) {
    var uri = this.sliceSerialize(token)
    tag('<a href="' + url('mailto:' + uri, protocolHref) + '">')
    raw(encode(uri))
    tag('</a>')
  }
}

module.exports = compileHtml
