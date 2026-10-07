'use strict';

function getWindow(node) {
    var _node_ownerDocument;
    if (isDocument(node) && node.defaultView) {
        return node.defaultView;
    } else if ((_node_ownerDocument = node.ownerDocument) === null || _node_ownerDocument === void 0 ? void 0 : _node_ownerDocument.defaultView) {
        return node.ownerDocument.defaultView;
    }
    throw new Error(`Could not determine window of node. Node was ${describe(node)}`);
}
function isDocument(node) {
    return node.nodeType === 9;
}
function describe(val) {
    return typeof val === 'function' ? `function ${val.name}` : val === null ? 'null' : String(val);
}

exports.getWindow = getWindow;
