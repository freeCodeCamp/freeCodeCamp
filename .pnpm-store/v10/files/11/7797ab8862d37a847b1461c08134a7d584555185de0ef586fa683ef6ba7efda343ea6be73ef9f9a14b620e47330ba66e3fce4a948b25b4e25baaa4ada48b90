'use strict';

var isElementType = require('../misc/isElementType.js');
var isContentEditable = require('./isContentEditable.js');

function isEditable(element) {
    return isEditableInputOrTextArea(element) && !element.readOnly || isContentEditable.isContentEditable(element);
}
var editableInputTypes = /*#__PURE__*/ function(editableInputTypes) {
    editableInputTypes["text"] = "text";
    editableInputTypes["date"] = "date";
    editableInputTypes["datetime-local"] = "datetime-local";
    editableInputTypes["email"] = "email";
    editableInputTypes["month"] = "month";
    editableInputTypes["number"] = "number";
    editableInputTypes["password"] = "password";
    editableInputTypes["search"] = "search";
    editableInputTypes["tel"] = "tel";
    editableInputTypes["time"] = "time";
    editableInputTypes["url"] = "url";
    editableInputTypes["week"] = "week";
    return editableInputTypes;
}(editableInputTypes || {});
function isEditableInputOrTextArea(element) {
    return isElementType.isElementType(element, 'textarea') || isElementType.isElementType(element, 'input') && element.type in editableInputTypes;
}

exports.isEditable = isEditable;
exports.isEditableInputOrTextArea = isEditableInputOrTextArea;
