'use strict';

var isContentEditable = require('../edit/isContentEditable.js');
var isElementType = require('../misc/isElementType.js');

function getNextCursorPosition(node, offset, direction, inputType) {
    // The behavior at text node zero offset is inconsistent.
    // When walking backwards:
    // Firefox always moves to zero offset and jumps over last offset.
    // Chrome jumps over zero offset per default but over last offset when Shift is pressed.
    // The cursor always moves to zero offset if the focus area (contenteditable or body) ends there.
    // When walking forward both ignore zero offset.
    // When walking over input elements the cursor moves before or after that element.
    // When walking over line breaks the cursor moves inside any following text node.
    if (isTextNode(node) && offset + direction >= 0 && offset + direction <= node.nodeValue.length) {
        return {
            node,
            offset: offset + direction
        };
    }
    const nextNode = getNextCharacterContentNode(node, offset, direction);
    if (nextNode) {
        if (isTextNode(nextNode)) {
            return {
                node: nextNode,
                offset: direction > 0 ? Math.min(1, nextNode.nodeValue.length) : Math.max(nextNode.nodeValue.length - 1, 0)
            };
        } else if (isElementType.isElementType(nextNode, 'br')) {
            const nextPlusOne = getNextCharacterContentNode(nextNode, undefined, direction);
            if (!nextPlusOne) {
                // The behavior when there is no possible cursor position beyond the line break is inconsistent.
                // In Chrome outside of contenteditable moving before a leading line break is possible.
                // A leading line break can still be removed per deleteContentBackward.
                // A trailing line break on the other hand is not removed by deleteContentForward.
                if (direction < 0 && inputType === 'deleteContentBackward') {
                    return {
                        node: nextNode.parentNode,
                        offset: getOffset(nextNode)
                    };
                }
                return undefined;
            } else if (isTextNode(nextPlusOne)) {
                return {
                    node: nextPlusOne,
                    offset: direction > 0 ? 0 : nextPlusOne.nodeValue.length
                };
            } else if (direction < 0 && isElementType.isElementType(nextPlusOne, 'br')) {
                return {
                    node: nextNode.parentNode,
                    offset: getOffset(nextNode)
                };
            } else {
                return {
                    node: nextPlusOne.parentNode,
                    offset: getOffset(nextPlusOne) + (direction > 0 ? 0 : 1)
                };
            }
        } else {
            return {
                node: nextNode.parentNode,
                offset: getOffset(nextNode) + (direction > 0 ? 1 : 0)
            };
        }
    }
}
function getNextCharacterContentNode(node, offset, direction) {
    const nextOffset = Number(offset) + (direction < 0 ? -1 : 0);
    if (offset !== undefined && isElement(node) && nextOffset >= 0 && nextOffset < node.children.length) {
        node = node.children[nextOffset];
    }
    return walkNodes(node, direction === 1 ? 'next' : 'previous', isTreatedAsCharacterContent);
}
function isTreatedAsCharacterContent(node) {
    if (isTextNode(node)) {
        return true;
    }
    if (isElement(node)) {
        if (isElementType.isElementType(node, [
            'input',
            'textarea'
        ])) {
            return node.type !== 'hidden';
        } else if (isElementType.isElementType(node, 'br')) {
            return true;
        }
    }
    return false;
}
function getOffset(node) {
    let i = 0;
    while(node.previousSibling){
        i++;
        node = node.previousSibling;
    }
    return i;
}
function isElement(node) {
    return node.nodeType === 1;
}
function isTextNode(node) {
    return node.nodeType === 3;
}
function walkNodes(node, direction, callback) {
    for(;;){
        var _node_ownerDocument;
        const sibling = node[`${direction}Sibling`];
        if (sibling) {
            node = getDescendant(sibling, direction === 'next' ? 'first' : 'last');
            if (callback(node)) {
                return node;
            }
        } else if (node.parentNode && (!isElement(node.parentNode) || !isContentEditable.isContentEditable(node.parentNode) && node.parentNode !== ((_node_ownerDocument = node.ownerDocument) === null || _node_ownerDocument === void 0 ? void 0 : _node_ownerDocument.body))) {
            node = node.parentNode;
        } else {
            break;
        }
    }
}
function getDescendant(node, direction) {
    while(node.hasChildNodes()){
        node = node[`${direction}Child`];
    }
    return node;
}

exports.getNextCursorPosition = getNextCursorPosition;
