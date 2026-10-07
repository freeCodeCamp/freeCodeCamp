'use strict'

var element = require('hast-util-is-element')
var whiteSpaceStart = require('./util/white-space-start')
var comment = require('./util/comment')
var siblings = require('./util/siblings')
var omission = require('./omission')

module.exports = omission({
  html: html,
  head: headOrColgroupOrCaption,
  body: body,
  p: p,
  li: li,
  dt: dt,
  dd: dd,
  rt: rubyElement,
  rp: rubyElement,
  optgroup: optgroup,
  option: option,
  menuitem: menuitem,
  colgroup: headOrColgroupOrCaption,
  caption: headOrColgroupOrCaption,
  thead: thead,
  tbody: tbody,
  tfoot: tfoot,
  tr: tr,
  td: cells,
  th: cells
})

// Macro for `</head>`, `</colgroup>`, and `</caption>`.
function headOrColgroupOrCaption(node, index, parent) {
  var next = siblings.after(parent, index, true)
  return !next || (!comment(next) && !whiteSpaceStart(next))
}

// Whether to omit `</html>`.
function html(node, index, parent) {
  var next = siblings.after(parent, index)
  return !next || !comment(next)
}

// Whether to omit `</body>`.
function body(node, index, parent) {
  var next = siblings.after(parent, index)
  return !next || !comment(next)
}

// Whether to omit `</p>`.
function p(node, index, parent) {
  var next = siblings.after(parent, index)
  return next
    ? element(next, [
        'address',
        'article',
        'aside',
        'blockquote',
        'details',
        'div',
        'dl',
        'fieldset',
        'figcaption',
        'figure',
        'footer',
        'form',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'header',
        'hgroup',
        'hr',
        'main',
        'menu',
        'nav',
        'ol',
        'p',
        'pre',
        'section',
        'table',
        'ul'
      ])
    : !parent ||
        // Confusing parent.
        !element(parent, [
          'a',
          'audio',
          'del',
          'ins',
          'map',
          'noscript',
          'video'
        ])
}

// Whether to omit `</li>`.
function li(node, index, parent) {
  var next = siblings.after(parent, index)
  return !next || element(next, 'li')
}

// Whether to omit `</dt>`.
function dt(node, index, parent) {
  var next = siblings.after(parent, index)
  return next && element(next, ['dt', 'dd'])
}

// Whether to omit `</dd>`.
function dd(node, index, parent) {
  var next = siblings.after(parent, index)
  return !next || element(next, ['dt', 'dd'])
}

// Whether to omit `</rt>` or `</rp>`.
function rubyElement(node, index, parent) {
  var next = siblings.after(parent, index)
  return !next || element(next, ['rp', 'rt'])
}

// Whether to omit `</optgroup>`.
function optgroup(node, index, parent) {
  var next = siblings.after(parent, index)
  return !next || element(next, 'optgroup')
}

// Whether to omit `</option>`.
function option(node, index, parent) {
  var next = siblings.after(parent, index)
  return !next || element(next, ['option', 'optgroup'])
}

// Whether to omit `</menuitem>`.
function menuitem(node, index, parent) {
  var next = siblings.after(parent, index)
  return !next || element(next, ['menuitem', 'hr', 'menu'])
}

// Whether to omit `</thead>`.
function thead(node, index, parent) {
  var next = siblings.after(parent, index)
  return next && element(next, ['tbody', 'tfoot'])
}

// Whether to omit `</tbody>`.
function tbody(node, index, parent) {
  var next = siblings.after(parent, index)
  return !next || element(next, ['tbody', 'tfoot'])
}

// Whether to omit `</tfoot>`.
function tfoot(node, index, parent) {
  return !siblings.after(parent, index)
}

// Whether to omit `</tr>`.
function tr(node, index, parent) {
  var next = siblings.after(parent, index)
  return !next || element(next, 'tr')
}

// Whether to omit `</td>` or `</th>`.
function cells(node, index, parent) {
  var next = siblings.after(parent, index)
  return !next || element(next, ['td', 'th'])
}
