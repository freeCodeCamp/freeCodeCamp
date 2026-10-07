var postcss = require('postcss');

module.exports = function(decl) {
  if (decl.prop === 'flex') {
    var values = postcss.list.space(decl.value);
    var flexGrow = values[0];
    var flexShrink = values[1] || '1';
    var flexBasis = values[2] || '0%';
    // Safari seems to hate '0%' and the others seems to make do with a nice value when basis is missing,
    // so if we see a '0%', just remove it.  This way it'll get adjusted for any other cases where '0%' is
    // already defined somewhere else.
    if (flexBasis === '0%') flexBasis = null;
    decl.value =
      flexGrow + ' ' + flexShrink + (flexBasis ? ' ' + flexBasis : '');
  }
};
