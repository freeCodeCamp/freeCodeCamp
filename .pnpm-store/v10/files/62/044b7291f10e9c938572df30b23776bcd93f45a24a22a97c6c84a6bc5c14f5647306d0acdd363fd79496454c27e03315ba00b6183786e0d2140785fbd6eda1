'use strict';

var isElementType = require('../misc/isElementType.js');

var clickableInputTypes = /*#__PURE__*/ function(clickableInputTypes) {
    clickableInputTypes["button"] = "button";
    clickableInputTypes["color"] = "color";
    clickableInputTypes["file"] = "file";
    clickableInputTypes["image"] = "image";
    clickableInputTypes["reset"] = "reset";
    clickableInputTypes["submit"] = "submit";
    clickableInputTypes["checkbox"] = "checkbox";
    clickableInputTypes["radio"] = "radio";
    return clickableInputTypes;
}(clickableInputTypes || {});
function isClickableInput(element) {
    return isElementType.isElementType(element, 'button') || isElementType.isElementType(element, 'input') && element.type in clickableInputTypes;
}

exports.isClickableInput = isClickableInput;
