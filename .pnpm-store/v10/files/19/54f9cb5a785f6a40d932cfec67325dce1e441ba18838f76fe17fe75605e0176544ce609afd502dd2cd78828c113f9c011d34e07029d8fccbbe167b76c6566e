// jsdom is not supporting isContentEditable
function isContentEditable(element) {
    return element.hasAttribute('contenteditable') && (element.getAttribute('contenteditable') == 'true' || element.getAttribute('contenteditable') == '');
}
/**
 * If a node is a contenteditable or inside one, return that element.
 */ function getContentEditable(node) {
    const element = getElement(node);
    return element && (element.closest('[contenteditable=""]') || element.closest('[contenteditable="true"]'));
}
function getElement(node) {
    return node.nodeType === 1 ? node : node.parentElement;
}

export { getContentEditable, isContentEditable };
