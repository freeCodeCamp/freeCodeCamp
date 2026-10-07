var UNICODE = '\\\\[0-9a-f]{1,6}(\\r\\n|[ \\n\\r\\t\\f])?';
var ESCAPE = '(' + UNICODE + '|\\\\[^\\n\\r\\f0-9a-fA-F])';
var NONPRINTABLE = '\u0000\u0008\u000b\u000e-\u001f\u007f';
var SAFE_URL = new RegExp('^(' + ESCAPE + '|[^\"\'\\(\\)\\\\\\s' + NONPRINTABLE + '])*$', 'i');

module.exports = function(node) {
    var value = node.value;

    if (value.type !== 'String') {
        return;
    }

    var quote = value.value[0];
    var url = value.value.substr(1, value.value.length - 2);

    // convert `\\` to `/`
    url = url.replace(/\\\\/g, '/');

    // remove quotes when safe
    // https://www.w3.org/TR/css-syntax-3/#url-unquoted-diagram
    if (SAFE_URL.test(url)) {
        node.value = {
            type: 'Raw',
            loc: node.value.loc,
            value: url
        };
    } else {
        // use double quotes if string has no double quotes
        // otherwise use original quotes
        // TODO: make better quote type selection
        node.value.value = url.indexOf('"') === -1 ? '"' + url + '"' : quote + url + quote;
    }
};
