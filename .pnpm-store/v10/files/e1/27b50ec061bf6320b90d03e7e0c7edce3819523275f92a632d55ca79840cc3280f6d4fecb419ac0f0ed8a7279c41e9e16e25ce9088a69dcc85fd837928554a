'use strict';

function isElementType(element, tag, props) {
    if (element.namespaceURI && element.namespaceURI !== 'http://www.w3.org/1999/xhtml') {
        return false;
    }
    tag = Array.isArray(tag) ? tag : [
        tag
    ];
    // tagName is uppercase in HTMLDocument and lowercase in XMLDocument
    if (!tag.includes(element.tagName.toLowerCase())) {
        return false;
    }
    if (props) {
        return Object.entries(props).every(([k, v])=>element[k] === v);
    }
    return true;
}

exports.isElementType = isElementType;
