'use strict';

require('../utils/dataTransfer/Clipboard.js');
var isContentEditable = require('../utils/edit/isContentEditable.js');
var UI = require('./UI.js');

function getValueOrTextContent(element) {
    // istanbul ignore if
    if (!element) {
        return null;
    }
    if (isContentEditable.isContentEditable(element)) {
        return element.textContent;
    }
    return UI.getUIValue(element);
}

exports.getValueOrTextContent = getValueOrTextContent;
