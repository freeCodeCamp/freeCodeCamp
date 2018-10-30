var wrap = require('wordwrap'),
  align = {
    right: require('right-align'),
    center: require('center-align')
  },
  top = 0,
  right = 1,
  bottom = 2,
  left = 3

function UI (opts) {
  this.width = opts.width
  this.wrap = opts.wrap
  this.rows = []
}

UI.prototype.span = function () {
  var cols = this.div.apply(this, arguments)
  cols.span = true
}

UI.prototype.div = function () {
  if (arguments.length === 0) this.div('')
  if (this.wrap && this._shouldApplyLayoutDSL.apply(this, arguments)) {
    return this._applyLayoutDSL(arguments[0])
  }

  var cols = []

  for (var i = 0, arg; (arg = arguments[i]) !== undefined; i++) {
    if (typeof arg === 'string') cols.push(this._colFromString(arg))
    else cols.push(arg)
  }

  this.rows.push(cols)
  return cols
}

UI.prototype._shouldApplyLayoutDSL = function () {
  return arguments.length === 1 && typeof arguments[0] === 'string' &&
    /[\t\n]/.test(arguments[0])
}

UI.prototype._applyLayoutDSL = function (str) {
  var _this = this,
    rows = str.split('\n'),
    leftColumnWidth = 0

  // simple heuristic for layout, make sure the
  // second column lines up along the left-hand.
  // don't allow the first column to take up more
  // than 50% of the screen.
  rows.forEach(function (row) {
    var columns = row.split('\t')
    if (columns.length > 1 && columns[0].length > leftColumnWidth) {
      leftColumnWidth = Math.min(
        Math.floor(_this.width * 0.5),
        columns[0].length
      )
    }
  })

  // generate a table:
  //  replacing ' ' with padding calculations.
  //  using the algorithmically generated width.
  rows.forEach(function (row) {
    var columns = row.split('\t')
    _this.div.apply(_this, columns.map(function (r, i) {
      return {
        text: r.trim(),
        padding: [0, r.match(/\s*$/)[0].length, 0, r.match(/^\s*/)[0].length],
        width: (i === 0 && columns.length > 1) ? leftColumnWidth : undefined
      }
    }))
  })

  return this.rows[this.rows.length - 1]
}

UI.prototype._colFromString = function (str) {
  return {
    text: str
  }
}

UI.prototype.toString = function () {
  var _this = this,
    lines = []

  _this.rows.forEach(function (row, i) {
    _this.rowToString(row, lines)
  })

  // don't display any lines with the
  // hidden flag set.
  lines = lines.filter(function (line) {
    return !line.hidden
  })

  return lines.map(function (line) {
    return line.text
  }).join('\n')
}

UI.prototype.rowToString = function (row, lines) {
  var _this = this,
    paddingLeft,
    rrows = this._rasterize(row),
    str = '',
    ts,
    width,
    wrapWidth

  rrows.forEach(function (rrow, r) {
    str = ''
    rrow.forEach(function (col, c) {
      ts = '' // temporary string used during alignment/padding.
      width = row[c].width // the width with padding.
      wrapWidth = _this._negatePadding(row[c]) // the width without padding.

      for (var i = 0; i < Math.max(wrapWidth, col.length); i++) {
        ts += col.charAt(i) || ' '
      }

      // align the string within its column.
      if (row[c].align && row[c].align !== 'left' && _this.wrap) {
        ts = align[row[c].align](ts.trim() + '\n' + new Array(wrapWidth + 1).join(' '))
          .split('\n')[0]
        if (ts.length < wrapWidth) ts += new Array(width - ts.length).join(' ')
      }

      // add left/right padding and print string.
      paddingLeft = (row[c].padding || [0, 0, 0, 0])[left]
      if (paddingLeft) str += new Array(row[c].padding[left] + 1).join(' ')
      str += ts
      if (row[c].padding && row[c].padding[right]) str += new Array(row[c].padding[right] + 1).join(' ')

      // if prior row is span, try to render the
      // current row on the prior line.
      if (r === 0 && lines.length > 0) {
        str = _this._renderInline(str, lines[lines.length - 1], paddingLeft)
      }
    })

    // remove trailing whitespace.
    lines.push({
      text: str.replace(/ +$/, ''),
      span: row.span
    })
  })

  return lines
}

// if the full 'source' can render in
// the target line, do so.
UI.prototype._renderInline = function (source, previousLine, paddingLeft) {
  var target = previousLine.text,
    str = ''

  if (!previousLine.span) return source

  // if we're not applying wrapping logic,
  // just always append to the span.
  if (!this.wrap) {
    previousLine.hidden = true
    return target + source
  }

  for (var i = 0, tc, sc; i < Math.max(source.length, target.length); i++) {
    tc = target.charAt(i) || ' '
    sc = source.charAt(i) || ' '
    // we tried to overwrite a character in the other string.
    if (tc !== ' ' && sc !== ' ') return source
    // there is not enough whitespace to maintain padding.
    if (sc !== ' ' && i < paddingLeft + target.length) return source
    // :thumbsup:
    if (tc === ' ') str += sc
    else str += tc
  }

  previousLine.hidden = true

  return str
}

UI.prototype._rasterize = function (row) {
  var _this = this,
    i,
    rrow,
    rrows = [],
    widths = this._columnWidths(row),
    wrapped

  // word wrap all columns, and create
  // a data-structure that is easy to rasterize.
  row.forEach(function (col, c) {
    // leave room for left and right padding.
    col.width = widths[c]
    if (_this.wrap) wrapped = wrap.hard(_this._negatePadding(col))(col.text).split('\n')
    else wrapped = col.text.split('\n')

    // add top and bottom padding.
    if (col.padding) {
      for (i = 0; i < (col.padding[top] || 0); i++) wrapped.unshift('')
      for (i = 0; i < (col.padding[bottom] || 0); i++) wrapped.push('')
    }

    wrapped.forEach(function (str, r) {
      if (!rrows[r]) rrows.push([])

      rrow = rrows[r]

      for (var i = 0; i < c; i++) {
        if (rrow[i] === undefined) rrow.push('')
      }
      rrow.push(str)
    })
  })

  return rrows
}

UI.prototype._negatePadding = function (col) {
  var wrapWidth = col.width
  if (col.padding) wrapWidth -= (col.padding[left] || 0) + (col.padding[right] || 0)
  return wrapWidth
}

UI.prototype._columnWidths = function (row) {
  var _this = this,
    widths = [],
    unset = row.length,
    unsetWidth,
    remainingWidth = this.width

  // column widths can be set in config.
  row.forEach(function (col, i) {
    if (col.width) {
      unset--
      widths[i] = col.width
      remainingWidth -= col.width
    } else {
      widths[i] = undefined
    }
  })

  // any unset widths should be calculated.
  if (unset) unsetWidth = Math.floor(remainingWidth / unset)
  widths.forEach(function (w, i) {
    if (!_this.wrap) widths[i] = row[i].width || row[i].text.length
    else if (w === undefined) widths[i] = Math.max(unsetWidth, _minWidth(row[i]))
  })

  return widths
}

// calculates the minimum width of
// a column, based on padding preferences.
function _minWidth (col) {
  var padding = col.padding || []

  return 1 + (padding[left] || 0) + (padding[right] || 0)
}

module.exports = function (opts) {
  opts = opts || {}

  return new UI({
    width: (opts || {}).width || 80,
    wrap: typeof opts.wrap === 'boolean' ? opts.wrap : true
  })
}
