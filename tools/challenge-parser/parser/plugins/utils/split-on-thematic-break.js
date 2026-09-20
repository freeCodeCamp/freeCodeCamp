const is = require('unist-util-is');

// TODO: specific tests for this would be nice, even though it is somewhat
// covered by the plugins that use it.
function splitOnThematicBreak(nodes) {
  return nodes.reduce(
    (prev, curr) => {
      if (is(curr, 'thematicBreak')) {
        return [...prev, []];
      } else {
        const first = prev.slice(0, -1);
        const last = prev.slice(-1)[0];
        return [...first, [...last, curr]];
      }
    },
    [[]]
  );
}

exports.splitOnThematicBreak = splitOnThematicBreak;
