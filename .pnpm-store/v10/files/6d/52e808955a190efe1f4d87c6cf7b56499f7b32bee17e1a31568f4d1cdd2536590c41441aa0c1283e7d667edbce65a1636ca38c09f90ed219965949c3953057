var normalizeIdentifier = require('micromark/dist/util/normalize-identifier')

exports.canContainEols = ['footnote']

exports.enter = {
  footnoteDefinition: enterFootnoteDefinition,
  footnoteDefinitionLabelString: enterFootnoteDefinitionLabelString,
  footnoteCall: enterFootnoteCall,
  footnoteCallString: enterFootnoteCallString,
  inlineNote: enterNote
}
exports.exit = {
  footnoteDefinition: exitFootnoteDefinition,
  footnoteDefinitionLabelString: exitFootnoteDefinitionLabelString,
  footnoteCall: exitFootnoteCall,
  footnoteCallString: exitFootnoteCallString,
  inlineNote: exitNote
}

function enterFootnoteDefinition(token) {
  this.enter(
    {type: 'footnoteDefinition', identifier: '', label: '', children: []},
    token
  )
}

function enterFootnoteDefinitionLabelString() {
  this.buffer()
}

function exitFootnoteDefinitionLabelString(token) {
  var label = this.resume()
  this.stack[this.stack.length - 1].label = label
  this.stack[this.stack.length - 1].identifier = normalizeIdentifier(
    this.sliceSerialize(token)
  ).toLowerCase()
}

function exitFootnoteDefinition(token) {
  this.exit(token)
}

function enterFootnoteCall(token) {
  this.enter({type: 'footnoteReference', identifier: '', label: ''}, token)
}

function enterFootnoteCallString() {
  this.buffer()
}

function exitFootnoteCallString(token) {
  var label = this.resume()
  this.stack[this.stack.length - 1].label = label
  this.stack[this.stack.length - 1].identifier = normalizeIdentifier(
    this.sliceSerialize(token)
  ).toLowerCase()
}

function exitFootnoteCall(token) {
  this.exit(token)
}

function enterNote(token) {
  this.enter({type: 'footnote', children: []}, token)
}

function exitNote(token) {
  this.exit(token)
}
