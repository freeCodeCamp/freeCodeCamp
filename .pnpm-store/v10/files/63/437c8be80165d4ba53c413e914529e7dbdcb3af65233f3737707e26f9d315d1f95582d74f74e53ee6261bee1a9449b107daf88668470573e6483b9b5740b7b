module.exports = phrasing

function phrasing(parent, context, safeOptions) {
  var children = parent.children || []
  var results = []
  var index = -1
  var before = safeOptions.before
  var after
  var handle
  var child

  while (++index < children.length) {
    child = children[index]

    if (index + 1 < children.length) {
      handle = context.handle.handlers[children[index + 1].type]
      if (handle && handle.peek) handle = handle.peek
      after = handle
        ? handle(children[index + 1], parent, context, {
            before: '',
            after: ''
          }).charAt(0)
        : ''
    } else {
      after = safeOptions.after
    }

    // In some cases, html (text) can be found in phrasing right after an eol.
    // When we’d serialize that, in most cases that would be seen as html
    // (flow).
    // As we can’t escape or so to prevent it from happening, we take a somewhat
    // reasonable approach: replace that eol with a space.
    // See: <https://github.com/syntax-tree/mdast-util-to-markdown/issues/15>
    if (
      results.length > 0 &&
      (before === '\r' || before === '\n') &&
      child.type === 'html'
    ) {
      results[results.length - 1] = results[results.length - 1].replace(
        /(\r?\n|\r)$/,
        ' '
      )
      before = ' '
    }

    results.push(
      context.handle(child, parent, context, {
        before: before,
        after: after
      })
    )

    before = results[results.length - 1].slice(-1)
  }

  return results.join('')
}
