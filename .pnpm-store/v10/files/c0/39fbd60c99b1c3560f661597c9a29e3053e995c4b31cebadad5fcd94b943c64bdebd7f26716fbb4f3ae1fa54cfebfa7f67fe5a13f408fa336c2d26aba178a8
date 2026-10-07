'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get findTool () {
        return findTool;
    },
    get getTextContent () {
        return getTextContent;
    },
    get hasTextContent () {
        return hasTextContent;
    },
    get isPartText () {
        return isPartText;
    },
    get isPartTool () {
        return isPartTool;
    }
});
var _sliced_to_array = require("@swc/helpers/_/_sliced_to_array");
var _startsWith = require("./startsWith");
var getTextContent = function getTextContent(message) {
    return message.parts.map(function(part) {
        return 'text' in part ? part.text : '';
    }).join('');
};
var hasTextContent = function hasTextContent(message) {
    return getTextContent(message).trim() !== '';
};
var isPartText = function isPartText(part) {
    return part.type === 'text';
};
var isPartTool = function isPartTool(part) {
    return (0, _startsWith.startsWith)(part.type, 'tool-');
};
var findTool = function findTool(partType, tools) {
    var toolName = partType.replace('tool-', '');
    var tool = tools[toolName];
    if (!tool) {
        var _Object_entries_find;
        tool = (_Object_entries_find = Object.entries(tools).find(function(param) {
            var _param = _sliced_to_array._(param, 1), key = _param[0];
            return (0, _startsWith.startsWith)(toolName, "".concat(key, "_"));
        })) === null || _Object_entries_find === void 0 ? void 0 : _Object_entries_find[1];
    }
    return tool;
};
