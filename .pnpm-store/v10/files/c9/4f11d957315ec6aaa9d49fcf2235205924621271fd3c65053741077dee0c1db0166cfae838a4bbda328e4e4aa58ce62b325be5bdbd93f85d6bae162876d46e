module.exports = function(node) {
    var value = node.value;

    // remove escaped newlines, i.e.
    // .a { content: "foo\
    // bar"}
    // ->
    // .a { content: "foobar" }
    value = value.replace(/\\(\r\n|\r|\n|\f)/g, '');

    node.value = value;
};
