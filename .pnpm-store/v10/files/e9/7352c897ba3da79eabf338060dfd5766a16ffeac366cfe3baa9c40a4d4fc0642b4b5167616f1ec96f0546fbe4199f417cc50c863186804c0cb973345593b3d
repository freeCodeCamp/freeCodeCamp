var alignment = {
  null: '',
  left: ' align="left"',
  right: ' align="right"',
  center: ' align="center"'
}

exports.enter = {
  table: enterTable,
  tableBody: enterBody,
  tableData: enterTableData,
  tableHead: enterHead,
  tableHeader: enterTableHeader,
  tableRow: enterRow
}
exports.exit = {
  codeTextData: exitCodeTextData,
  table: exitTable,
  tableBody: exitBody,
  tableData: exitTableData,
  tableHead: exitHead,
  tableHeader: exitTableHeader,
  tableRow: exitRow
}

function enterTable(token) {
  this.lineEndingIfNeeded()
  this.tag('<table>')
  this.setData('tableAlign', token._align)
}

function exitTable() {
  this.setData('tableAlign')
  // If there was no table body, make sure the slurping from the delimiter row
  // is cleared.
  this.setData('slurpAllLineEndings')
  this.lineEndingIfNeeded()
  this.tag('</table>')
}

function enterHead() {
  this.lineEndingIfNeeded()
  this.tag('<thead>')
}

function exitHead() {
  this.lineEndingIfNeeded()
  this.tag('</thead>')
  this.setData('slurpOneLineEnding', true)
  // Slurp the line ending from the delimiter row.
}

function enterBody() {
  // Clear slurping line ending from the delimiter row.
  this.setData('slurpOneLineEnding')
  this.tag('<tbody>')
}

function exitBody() {
  this.lineEndingIfNeeded()
  this.tag('</tbody>')
}

function enterRow() {
  this.setData('tableColumn', 0)
  this.lineEndingIfNeeded()
  this.tag('<tr>')
}

function exitRow() {
  var align = this.getData('tableAlign')
  var column = this.getData('tableColumn')

  while (column < align.length) {
    this.lineEndingIfNeeded()
    this.tag('<td' + alignment[align[column]] + '></td>')
    column++
  }

  this.setData('tableColumn', column)
  this.lineEndingIfNeeded()
  this.tag('</tr>')
}

function enterTableHeader() {
  this.lineEndingIfNeeded()
  this.tag(
    '<th' +
      alignment[this.getData('tableAlign')[this.getData('tableColumn')]] +
      '>'
  )
}

function exitTableHeader() {
  this.tag('</th>')
  this.setData('tableColumn', this.getData('tableColumn') + 1)
}

function enterTableData() {
  var align = alignment[this.getData('tableAlign')[this.getData('tableColumn')]]

  if (align === undefined) {
    // Capture results to ignore them.
    this.buffer()
  } else {
    this.lineEndingIfNeeded()
    this.tag('<td' + align + '>')
  }
}

function exitTableData() {
  var column = this.getData('tableColumn')

  if (column in this.getData('tableAlign')) {
    this.tag('</td>')
    this.setData('tableColumn', column + 1)
  } else {
    // Stop capturing.
    this.resume()
  }
}

// Overwrite the default code text data handler to unescape escaped pipes when
// they are in tables.
function exitCodeTextData(token) {
  var value = this.sliceSerialize(token)

  if (this.getData('tableAlign')) {
    value = value.replace(/\\([\\|])/g, replace)
  }

  this.raw(this.encode(value))
}

function replace($0, $1) {
  // Pipes work, backslashes don’t (but can’t escape pipes).
  return $1 === '|' ? $1 : $0
}
