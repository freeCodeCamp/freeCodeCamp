/**
 * Escape carrigage returns like a terminal
 * @param {string} txt - String to escape.
 * @return {string}    - Escaped string.
 */
function escapeCarriageReturn(txt) {
  if (!txt) return "";
  if (!/\r/.test(txt)) return txt;
  txt = txt.replace(/\r+\n/gm, "\n"); // \r followed by \n --> newline
  while (/\r./.test(txt)) {
    txt = txt.replace(/^([^\r\n]*)\r+([^\r\n]+)/gm, function (_, base, insert) {
      return insert + base.slice(insert.length);
    });
  }
  return txt;
}

function findLongestString(arr) {
  var longest = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[longest].length <= arr[i].length) {
      longest = i;
    }
  }
  return longest;
}

function escapeSingleLineSafe(txt) {
  if (!/\r/.test(txt)) return txt;
  var arr = txt.split("\r");
  var res = [];

  while (arr.length > 0) {
    var longest = findLongestString(arr);
    res.push(arr[longest]);
    arr = arr.slice(longest + 1);
  }

  return res.join("\r");
}

/**
 * Safely escape carrigage returns like a terminal.
 * This allows to escape carrigage returns while allowing future output to be appended
 * without loosing information.
 * Use this as a intermediate escape step if your stream hasn't completed yet.
 * @param {string} txt - String to escape.
 * @return {string}    - Escaped string.
 */
function escapeCarriageReturnSafe(txt) {
  if (!txt) return "";
  if (!/\r/.test(txt)) return txt;
  if (!/\n/.test(txt)) return escapeSingleLineSafe(txt);
  txt = txt.replace(/\r+\n/gm, "\n"); // \r followed by \n --> newline
  var idx = txt.lastIndexOf("\n");

  return (
    escapeCarriageReturn(txt.slice(0, idx)) +
    "\n" +
    escapeSingleLineSafe(txt.slice(idx + 1))
  );
}

module.exports = escapeCarriageReturn;
module.exports.escapeCarriageReturn = escapeCarriageReturn;
module.exports.escapeCarriageReturnSafe = escapeCarriageReturnSafe;
