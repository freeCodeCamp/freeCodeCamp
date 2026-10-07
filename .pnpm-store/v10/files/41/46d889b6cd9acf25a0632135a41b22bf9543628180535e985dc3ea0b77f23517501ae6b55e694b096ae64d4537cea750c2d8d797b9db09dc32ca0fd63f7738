/**
 * While micromark is a lexer/tokenizer, the common case of going from markdown
 * to html is currently built in as this module, even though the parts can be
 * used separately to build ASTs, CSTs, or many other output formats.
 *
 * Having an HTML compiler built in is useful because it allows us to check for
 * compliancy to CommonMark, the de facto norm of markdown, specified in roughly
 * 600 input/output cases.
 *
 * This module has an interface that accepts lists of events instead of the
 * whole at once, however, because markdown can’t be truly streaming, we buffer
 * events before processing and outputting the final result.
 */

/**
 * @import {
 *   CompileContext,
 *   CompileData,
 *   CompileOptions,
 *   Compile,
 *   Definition,
 *   Event,
 *   Handle,
 *   HtmlExtension,
 *   LineEnding,
 *   NormalizedHtmlExtension,
 *   Token
 * } from 'micromark-util-types'
 */

/**
 * @typedef Media
 * @property {boolean | undefined} [image]
 * @property {string | undefined} [labelId]
 * @property {string | undefined} [label]
 * @property {string | undefined} [referenceId]
 * @property {string | undefined} [destination]
 * @property {string | undefined} [title]
 */

import {decodeNamedCharacterReference} from 'decode-named-character-reference'
import {ok as assert} from 'devlop'
import {push} from 'micromark-util-chunked'
import {combineHtmlExtensions} from 'micromark-util-combine-extensions'
import {decodeNumericCharacterReference} from 'micromark-util-decode-numeric-character-reference'
import {encode as _encode} from 'micromark-util-encode'
import {normalizeIdentifier} from 'micromark-util-normalize-identifier'
import {sanitizeUri} from 'micromark-util-sanitize-uri'
import {codes, constants, types} from 'micromark-util-symbol'

const hasOwnProperty = {}.hasOwnProperty

/**
 * These two are allowlists of safe protocols for full URLs in respectively the
 * `href` (on `<a>`) and `src` (on `<img>`) attributes.
 * They are based on what is allowed on GitHub,
 * <https://github.com/syntax-tree/hast-util-sanitize/blob/9275b21/lib/github.json#L31>
 */
const protocolHref = /^(https?|ircs?|mailto|xmpp)$/i
const protocolSource = /^https?$/i

/**
 * @param {CompileOptions | null | undefined} [options]
 * @returns {Compile}
 */
export function compile(options) {
  const settings = options || {}

  /**
   * Tags is needed because according to markdown, links and emphasis and
   * whatnot can exist in images, however, as HTML doesn’t allow content in
   * images, the tags are ignored in the `alt` attribute, but the content
   * remains.
   *
   * @type {boolean | undefined}
   */
  let tags = true

  /**
   * An object to track identifiers to media (URLs and titles) defined with
   * definitions.
   *
   * @type {Record<string, Definition>}
   */
  const definitions = {}

  /**
   * A lot of the handlers need to capture some of the output data, modify it
   * somehow, and then deal with it.
   * We do that by tracking a stack of buffers, that can be opened (with
   * `buffer`) and closed (with `resume`) to access them.
   *
   * @type {Array<Array<string>>}
   */
  const buffers = [[]]

  /**
   * As we can have links in images and the other way around, where the deepest
   * ones are closed first, we need to track which one we’re in.
   *
   * @type {Array<Media>}
   */
  const mediaStack = []

  /**
   * Same as `mediaStack` for tightness, which is specific to lists.
   * We need to track if we’re currently in a tight or loose container.
   *
   * @type {Array<boolean>}
   */
  const tightStack = []

  /** @type {HtmlExtension} */
  const defaultHandlers = {
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
      codeFencedFenceMeta: onresumedrop,
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
      reference: onresumedrop,
      referenceString: onexitreferencestring,
      resource: onresumedrop,
      resourceDestinationString: onexitresourcedestinationstring,
      resourceTitleString: onexitresourcetitlestring,
      setextHeading: onexitsetextheading,
      setextHeadingLineSequence: onexitsetextheadinglinesequence,
      setextHeadingText: onexitsetextheadingtext,
      strong: onexitstrong,
      thematicBreak: onexitthematicbreak
    }
  }

  /**
   * Combine the HTML extensions with the default handlers.
   * An HTML extension is an object whose fields are either `enter` or `exit`
   * (reflecting whether a token is entered or exited).
   * The values at such objects are names of tokens mapping to handlers.
   * Handlers are called, respectively when a token is opener or closed, with
   * that token, and a context as `this`.
   */
  const handlers = /** @type {NormalizedHtmlExtension} */ (
    combineHtmlExtensions([defaultHandlers, ...(settings.htmlExtensions || [])])
  )

  /**
   * Handlers do often need to keep track of some state.
   * That state is provided here as a key-value store (an object).
   *
   * @type {CompileData}
   */
  const data = {
    definitions,
    tightStack
  }

  /**
   * The context for handlers references a couple of useful functions.
   * In handlers from extensions, those can be accessed at `this`.
   * For the handlers here, they can be accessed directly.
   *
   * @type {Omit<CompileContext, 'sliceSerialize'>}
   */
  const context = {
    buffer,
    encode,
    getData,
    lineEndingIfNeeded,
    options: settings,
    raw,
    resume,
    setData,
    tag
  }

  /**
   * Generally, micromark copies line endings (`'\r'`, `'\n'`, `'\r\n'`) in the
   * markdown document over to the compiled HTML.
   * In some cases, such as `> a`, CommonMark requires that extra line endings
   * are added: `<blockquote>\n<p>a</p>\n</blockquote>`.
   * This variable hold the default line ending when given (or `undefined`),
   * and in the latter case will be updated to the first found line ending if
   * there is one.
   */
  let lineEndingStyle = settings.defaultLineEnding

  // Return the function that handles a slice of events.
  return compile

  /**
   * Deal w/ a slice of events.
   * Return either the empty string if there’s nothing of note to return, or the
   * result when done.
   *
   * @param {ReadonlyArray<Event>} events
   * @returns {string}
   */
  function compile(events) {
    let index = -1
    let start = 0
    /** @type {Array<number>} */
    const listStack = []
    // As definitions can come after references, we need to figure out the media
    // (urls and titles) defined by them before handling the references.
    // So, we do sort of what HTML does: put metadata at the start (in head), and
    // then put content after (`body`).
    /** @type {Array<Event>} */
    let head = []
    /** @type {Array<Event>} */
    let body = []

    while (++index < events.length) {
      // Figure out the line ending style used in the document.
      if (
        !lineEndingStyle &&
        (events[index][1].type === types.lineEnding ||
          events[index][1].type === types.lineEndingBlank)
      ) {
        lineEndingStyle = /** @type {LineEnding} */ (
          events[index][2].sliceSerialize(events[index][1])
        )
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
          body = push(body, events.slice(start, index))
          start = index
        } else {
          head = push(head, events.slice(start, index + 1))
          start = index + 1
        }
      }
    }

    head = push(head, body)
    head = push(head, events.slice(start))
    index = -1
    const result = head

    // Handle the start of the document, if defined.
    if (handlers.enter.null) {
      handlers.enter.null.call(context)
    }

    // Handle all events.
    while (++index < events.length) {
      const handles = handlers[result[index][0]]
      const kind = result[index][1].type
      const handle = handles[kind]

      if (hasOwnProperty.call(handles, kind) && handle) {
        handle.call(
          {sliceSerialize: result[index][2].sliceSerialize, ...context},
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

  /**
   * Figure out whether lists are loose or not.
   *
   * @param {ReadonlyArray<Event>} slice
   * @returns {undefined}
   */
  function prepareList(slice) {
    const length = slice.length
    let index = 0 // Skip open.
    let containerBalance = 0
    let loose = false
    /** @type {boolean | undefined} */
    let atMarker

    while (++index < length) {
      const event = slice[index]

      if (event[1]._container) {
        atMarker = undefined

        if (event[0] === 'enter') {
          containerBalance++
        } else {
          containerBalance--
        }
      } else
        switch (event[1].type) {
          case types.listItemPrefix: {
            if (event[0] === 'exit') {
              atMarker = true
            }

            break
          }

          case types.linePrefix: {
            // Ignore

            break
          }

          case types.lineEndingBlank: {
            if (event[0] === 'enter' && !containerBalance) {
              if (atMarker) {
                atMarker = undefined
              } else {
                loose = true
              }
            }

            break
          }

          default: {
            atMarker = undefined
          }
        }
    }

    slice[0][1]._loose = loose
  }

  /**
   * @type {CompileContext['setData']}
   */
  function setData(key, value) {
    // @ts-expect-error: assume `value` is omitted (`undefined` is passed) only
    // if allowed.
    data[key] = value
  }

  /**
   * @type {CompileContext['getData']}
   */
  function getData(key) {
    return data[key]
  }

  /** @type {CompileContext['buffer']} */
  function buffer() {
    buffers.push([])
  }

  /** @type {CompileContext['resume']} */
  function resume() {
    const buf = buffers.pop()
    assert(buf !== undefined, 'Cannot resume w/o buffer')
    return buf.join('')
  }

  /** @type {CompileContext['tag']} */
  function tag(value) {
    if (!tags) return
    setData('lastWasTag', true)
    buffers[buffers.length - 1].push(value)
  }

  /** @type {CompileContext['raw']} */
  function raw(value) {
    setData('lastWasTag')
    buffers[buffers.length - 1].push(value)
  }

  /**
   * Output an extra line ending.
   *
   * @returns {undefined}
   */
  function lineEnding() {
    raw(lineEndingStyle || '\n')
  }

  /** @type {CompileContext['lineEndingIfNeeded']} */
  function lineEndingIfNeeded() {
    const buffer = buffers[buffers.length - 1]
    const slice = buffer[buffer.length - 1]
    const previous = slice ? slice.charCodeAt(slice.length - 1) : codes.eof

    if (
      previous === codes.lf ||
      previous === codes.cr ||
      previous === codes.eof
    ) {
      return
    }

    lineEnding()
  }

  /** @type {CompileContext['encode']} */
  function encode(value) {
    return getData('ignoreEncode') ? value : _encode(value)
  }

  //
  // Handlers.
  //

  /**
   * @returns {undefined}
   */
  function onresumedrop() {
    resume()
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onenterlistordered(token) {
    tightStack.push(!token._loose)
    lineEndingIfNeeded()
    tag('<ol')
    setData('expectFirstItem', true)
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onenterlistunordered(token) {
    tightStack.push(!token._loose)
    lineEndingIfNeeded()
    tag('<ul')
    setData('expectFirstItem', true)
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onenterlistitemvalue(token) {
    if (getData('expectFirstItem')) {
      const value = Number.parseInt(
        this.sliceSerialize(token),
        constants.numericBaseDecimal
      )

      if (value !== 1) {
        tag(' start="' + encode(String(value)) + '"')
      }
    }
  }

  /**
   * @returns {undefined}
   */
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

  /**
   * @returns {undefined}
   */
  function onexitlistordered() {
    onexitlistitem()
    tightStack.pop()
    lineEnding()
    tag('</ol>')
  }

  /**
   * @returns {undefined}
   */
  function onexitlistunordered() {
    onexitlistitem()
    tightStack.pop()
    lineEnding()
    tag('</ul>')
  }

  /**
   * @returns {undefined}
   */
  function onexitlistitem() {
    if (getData('lastWasTag') && !getData('slurpAllLineEndings')) {
      lineEndingIfNeeded()
    }

    tag('</li>')
    setData('slurpAllLineEndings')
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onenterblockquote() {
    tightStack.push(false)
    lineEndingIfNeeded()
    tag('<blockquote>')
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitblockquote() {
    tightStack.pop()
    lineEndingIfNeeded()
    tag('</blockquote>')
    setData('slurpAllLineEndings')
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onenterparagraph() {
    if (!tightStack[tightStack.length - 1]) {
      lineEndingIfNeeded()
      tag('<p>')
    }

    setData('slurpAllLineEndings')
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitparagraph() {
    if (tightStack[tightStack.length - 1]) {
      setData('slurpAllLineEndings', true)
    } else {
      tag('</p>')
    }
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onentercodefenced() {
    lineEndingIfNeeded()
    tag('<pre><code')
    setData('fencesCount', 0)
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitcodefencedfenceinfo() {
    const value = resume()
    tag(' class="language-' + value + '"')
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitcodefencedfence() {
    const count = getData('fencesCount') || 0

    if (!count) {
      tag('>')
      setData('slurpOneLineEnding', true)
    }

    setData('fencesCount', count + 1)
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onentercodeindented() {
    lineEndingIfNeeded()
    tag('<pre><code>')
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitflowcode() {
    const count = getData('fencesCount')

    // One special case is if we are inside a container, and the fenced code was
    // not closed (meaning it runs to the end).
    // In that case, the following line ending, is considered *outside* the
    // fenced code and block quote by micromark, but CM wants to treat that
    // ending as part of the code.
    if (
      count !== undefined &&
      count < 2 &&
      data.tightStack.length > 0 &&
      !getData('lastWasTag')
    ) {
      lineEnding()
    }

    // But in most cases, it’s simpler: when we’ve seen some data, emit an extra
    // line ending when needed.
    if (getData('flowCodeSeenData')) {
      lineEndingIfNeeded()
    }

    tag('</code></pre>')
    if (count !== undefined && count < 2) lineEndingIfNeeded()
    setData('flowCodeSeenData')
    setData('fencesCount')
    setData('slurpOneLineEnding')
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onenterimage() {
    mediaStack.push({image: true})
    tags = undefined // Disallow tags.
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onenterlink() {
    mediaStack.push({})
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitlabeltext(token) {
    mediaStack[mediaStack.length - 1].labelId = this.sliceSerialize(token)
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitlabel() {
    mediaStack[mediaStack.length - 1].label = resume()
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitreferencestring(token) {
    mediaStack[mediaStack.length - 1].referenceId = this.sliceSerialize(token)
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onenterresource() {
    buffer() // We can have line endings in the resource, ignore them.
    mediaStack[mediaStack.length - 1].destination = ''
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onenterresourcedestinationstring() {
    buffer()
    // Ignore encoding the result, as we’ll first percent encode the url and
    // encode manually after.
    setData('ignoreEncode', true)
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitresourcedestinationstring() {
    mediaStack[mediaStack.length - 1].destination = resume()
    setData('ignoreEncode')
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitresourcetitlestring() {
    mediaStack[mediaStack.length - 1].title = resume()
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitmedia() {
    let index = mediaStack.length - 1 // Skip current.
    const media = mediaStack[index]
    const id = media.referenceId || media.labelId
    assert(id !== undefined, 'media should have `referenceId` or `labelId`')
    assert(media.label !== undefined, 'media should have `label`')
    const context =
      media.destination === undefined
        ? definitions[normalizeIdentifier(id)]
        : media

    tags = true

    while (index--) {
      if (mediaStack[index].image) {
        tags = undefined
        break
      }
    }

    if (media.image) {
      tag(
        '<img src="' +
          sanitizeUri(
            context.destination,
            settings.allowDangerousProtocol ? undefined : protocolSource
          ) +
          '" alt="'
      )
      raw(media.label)
      tag('"')
    } else {
      tag(
        '<a href="' +
          sanitizeUri(
            context.destination,
            settings.allowDangerousProtocol ? undefined : protocolHref
          ) +
          '"'
      )
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

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onenterdefinition() {
    buffer()
    mediaStack.push({})
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitdefinitionlabelstring(token) {
    // Discard label, use the source content instead.
    resume()
    mediaStack[mediaStack.length - 1].labelId = this.sliceSerialize(token)
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onenterdefinitiondestinationstring() {
    buffer()
    setData('ignoreEncode', true)
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitdefinitiondestinationstring() {
    mediaStack[mediaStack.length - 1].destination = resume()
    setData('ignoreEncode')
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitdefinitiontitlestring() {
    mediaStack[mediaStack.length - 1].title = resume()
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitdefinition() {
    const media = mediaStack[mediaStack.length - 1]
    assert(media.labelId !== undefined, 'media should have `labelId`')
    const id = normalizeIdentifier(media.labelId)

    resume()

    if (!hasOwnProperty.call(definitions, id)) {
      definitions[id] = mediaStack[mediaStack.length - 1]
    }

    mediaStack.pop()
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onentercontent() {
    setData('slurpAllLineEndings', true)
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitatxheadingsequence(token) {
    // Exit for further sequences.
    if (getData('headingRank')) return
    setData('headingRank', this.sliceSerialize(token).length)
    lineEndingIfNeeded()
    tag('<h' + getData('headingRank') + '>')
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onentersetextheading() {
    buffer()
    setData('slurpAllLineEndings')
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitsetextheadingtext() {
    setData('slurpAllLineEndings', true)
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitatxheading() {
    tag('</h' + getData('headingRank') + '>')
    setData('headingRank')
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitsetextheadinglinesequence(token) {
    setData(
      'headingRank',
      this.sliceSerialize(token).charCodeAt(0) === codes.equalsTo ? 1 : 2
    )
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitsetextheading() {
    const value = resume()
    lineEndingIfNeeded()
    tag('<h' + getData('headingRank') + '>')
    raw(value)
    tag('</h' + getData('headingRank') + '>')
    setData('slurpAllLineEndings')
    setData('headingRank')
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitdata(token) {
    raw(encode(this.sliceSerialize(token)))
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
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

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitcodeflowvalue(token) {
    raw(encode(this.sliceSerialize(token)))
    setData('flowCodeSeenData', true)
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexithardbreak() {
    tag('<br />')
  }

  /**
   * @returns {undefined}
   */
  function onenterhtmlflow() {
    lineEndingIfNeeded()
    onenterhtml()
  }

  /**
   * @returns {undefined}
   */
  function onexithtml() {
    setData('ignoreEncode')
  }

  /**
   * @returns {undefined}
   */
  function onenterhtml() {
    if (settings.allowDangerousHtml) {
      setData('ignoreEncode', true)
    }
  }

  /**
   * @returns {undefined}
   */
  function onenteremphasis() {
    tag('<em>')
  }

  /**
   * @returns {undefined}
   */
  function onenterstrong() {
    tag('<strong>')
  }

  /**
   * @returns {undefined}
   */
  function onentercodetext() {
    setData('inCodeText', true)
    tag('<code>')
  }

  /**
   * @returns {undefined}
   */
  function onexitcodetext() {
    setData('inCodeText')
    tag('</code>')
  }

  /**
   * @returns {undefined}
   */
  function onexitemphasis() {
    tag('</em>')
  }

  /**
   * @returns {undefined}
   */
  function onexitstrong() {
    tag('</strong>')
  }

  /**
   * @returns {undefined}
   */
  function onexitthematicbreak() {
    lineEndingIfNeeded()
    tag('<hr />')
  }

  /**
   * @this {CompileContext}
   * @param {Token} token
   * @returns {undefined}
   */
  function onexitcharacterreferencemarker(token) {
    setData('characterReferenceType', token.type)
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitcharacterreferencevalue(token) {
    const value = this.sliceSerialize(token)
    const decoded = getData('characterReferenceType')
      ? decodeNumericCharacterReference(
          value,
          getData('characterReferenceType') ===
            types.characterReferenceMarkerNumeric
            ? constants.numericBaseDecimal
            : constants.numericBaseHexadecimal
        )
      : decodeNamedCharacterReference(value)

    // `decodeNamedCharacterReference` can return `false` for invalid named
    // character references,
    // but everything we’ve tokenized is valid.
    raw(encode(/** @type {string} */ (decoded)))
    setData('characterReferenceType')
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitautolinkprotocol(token) {
    const uri = this.sliceSerialize(token)
    tag(
      '<a href="' +
        sanitizeUri(
          uri,
          settings.allowDangerousProtocol ? undefined : protocolHref
        ) +
        '">'
    )
    raw(encode(uri))
    tag('</a>')
  }

  /**
   * @this {CompileContext}
   * @type {Handle}
   */
  function onexitautolinkemail(token) {
    const uri = this.sliceSerialize(token)
    tag('<a href="' + sanitizeUri('mailto:' + uri) + '">')
    raw(encode(uri))
    tag('</a>')
  }
}
