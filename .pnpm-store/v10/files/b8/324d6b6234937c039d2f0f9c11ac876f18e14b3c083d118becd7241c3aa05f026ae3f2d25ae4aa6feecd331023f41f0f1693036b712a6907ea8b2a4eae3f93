var normalizeIdentifier = require('micromark/dist/util/normalize-identifier')

exports.enter = {
  footnoteDefinition: enterFootnoteDefinition,
  footnoteDefinitionLabelString: buffer,
  footnoteCallString: buffer,
  inlineNoteText: enterNoteText
}
exports.exit = {
  footnoteDefinition: exitFootnoteDefinition,
  footnoteDefinitionLabelString: exitFootnoteDefinitionLabelString,
  footnoteCallString: exitFootnoteCallString,
  inlineNoteText: exitNoteText,
  null: exitDocument
}

var own = {}.hasOwnProperty

function buffer() {
  this.buffer()
}

function exitFootnoteDefinitionLabelString(token) {
  var stack = this.getData('footnoteDefinitionStack')

  if (!stack) this.setData('footnoteDefinitionStack', (stack = []))

  stack.push(normalizeIdentifier(this.sliceSerialize(token)))
  this.resume() // Drop the label.
  this.buffer() // Get ready for a value.
}

function enterFootnoteDefinition() {
  this.getData('tightStack').push(false)
}

function exitFootnoteDefinition() {
  var definitions = this.getData('footnoteDefinitions')
  var stack = this.getData('footnoteDefinitionStack')
  var current = stack.pop()
  var value = this.resume()

  if (!definitions) this.setData('footnoteDefinitions', (definitions = {}))
  if (!own.call(definitions, current)) definitions[current] = value

  this.getData('tightStack').pop()
  this.setData('slurpOneLineEnding', true)
  // “Hack” to prevent a line ending from showing up if we’re in a definition in
  // an empty list item.
  this.setData('lastWasTag')
}

function exitFootnoteCallString(token) {
  var calls = this.getData('footnoteCallOrder')
  var id = normalizeIdentifier(this.sliceSerialize(token))
  var index
  var counter

  this.resume()

  if (!calls) this.setData('footnoteCallOrder', (calls = []))

  index = calls.indexOf(id)

  if (index === -1) {
    calls.push(id)
    counter = calls.length
  } else {
    counter = index + 1
  }

  createCall.call(this, String(counter))
}

function exitDocument() {
  var calls = this.getData('footnoteCallOrder') || []
  var definitions = this.getData('footnoteDefinitions') || {}
  var notes = this.getData('inlineNotes') || {}
  var index = -1
  var length = calls.length
  var value
  var id
  var injected
  var back
  var counter

  if (length) {
    this.lineEndingIfNeeded()
    this.tag('<div class="footnotes">')
    this.lineEndingIfNeeded()
    this.tag('<hr />')
    this.lineEndingIfNeeded()
    this.tag('<ol>')
  }

  while (++index < length) {
    // Called definitions are always defined.
    id = calls[index]
    counter = String(index + 1)
    injected = false
    back = '<a href="#fnref' + counter + '" class="footnote-back">↩︎</a>'
    value = (typeof id === 'number' ? notes : definitions)[id].replace(
      /<\/p>(?:\r?\n|\r)?$/,
      injectBack
    )

    this.lineEndingIfNeeded()
    this.tag('<li id="fn' + counter + '">')
    this.lineEndingIfNeeded()
    this.raw(value)

    if (!injected) {
      this.lineEndingIfNeeded()
      this.tag(back)
    }

    this.lineEndingIfNeeded()
    this.tag('</li>')
  }

  if (length) {
    this.lineEndingIfNeeded()
    this.tag('</ol>')
    this.lineEndingIfNeeded()
    this.tag('</div>')
  }

  function injectBack($0) {
    injected = true
    return back + $0
  }
}

function enterNoteText() {
  var counter = (this.getData('inlineNoteCounter') || 0) + 1
  var stack = this.getData('inlineNoteStack')
  var calls = this.getData('footnoteCallOrder')

  if (!stack) this.setData('inlineNoteStack', (stack = []))
  if (!calls) this.setData('footnoteCallOrder', (calls = []))

  stack.push(counter)
  calls.push(counter)
  this.setData('inlineNoteCounter', counter)
  this.buffer()
}

function exitNoteText() {
  var counter = this.getData('inlineNoteStack').pop()
  var notes = this.getData('inlineNotes')

  if (!notes) this.setData('inlineNotes', (notes = {}))

  notes[counter] = '<p>' + this.resume() + '</p>'
  createCall.call(this, String(counter))
}

function createCall(counter) {
  this.tag(
    '<a href="#fn' +
      counter +
      '" class="footnote-ref" id="fnref' +
      counter +
      '"><sup>'
  )
  this.raw(counter)
  this.tag('</sup></a>')
}
