var generate = require('css-tree').generate;

function Index() {
    this.seed = 0;
    this.map = Object.create(null);
}

Index.prototype.resolve = function(str) {
    var index = this.map[str];

    if (!index) {
        index = ++this.seed;
        this.map[str] = index;
    }

    return index;
};

module.exports = function createDeclarationIndexer() {
    var ids = new Index();

    return function markDeclaration(node) {
        var id = generate(node);

        node.id = ids.resolve(id);
        node.length = id.length;
        node.fingerprint = null;

        return node;
    };
};
