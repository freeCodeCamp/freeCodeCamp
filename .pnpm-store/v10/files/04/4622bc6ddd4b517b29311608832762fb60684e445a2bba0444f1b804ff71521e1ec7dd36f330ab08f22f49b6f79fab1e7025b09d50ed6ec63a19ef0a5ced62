exports.exit = {
  htmlFlowData: exitHtmlFlowData,
  htmlTextData: exitHtmlTextData
}

// An opening or closing tag, followed by a case-insensitive specific tag name,
// followed by HTML whitespace, a greater than, or a slash.
var reFlow = /<(\/?)(iframe|noembed|noframes|plaintext|script|style|title|textarea|xmp)(?=[\t\n\f\r />])/gi
// As HTML (text) parses tags separately (and v. strictly), we don’t need to be
// global.
var reText = new RegExp('^' + reFlow.source, 'i')

function exitHtmlFlowData(token) {
  exitHtmlData.call(this, token, reFlow)
}

function exitHtmlTextData(token) {
  exitHtmlData.call(this, token, reText)
}

function exitHtmlData(token, filter) {
  var value = this.sliceSerialize(token)

  if (this.options.allowDangerousHtml) {
    value = value.replace(filter, '&lt;$1$2')
  }

  this.raw(this.encode(value))
}
