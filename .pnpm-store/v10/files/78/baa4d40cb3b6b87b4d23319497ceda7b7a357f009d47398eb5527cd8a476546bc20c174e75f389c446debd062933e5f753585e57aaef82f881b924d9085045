import { _ } from '@swc/helpers/esm/_sliced_to_array.js';
import { startsWith } from './startsWith.js';

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
    return startsWith(part.type, 'tool-');
};
var findTool = function findTool(partType, tools) {
    var toolName = partType.replace('tool-', '');
    var tool = tools[toolName];
    if (!tool) {
        var _Object_entries_find;
        tool = (_Object_entries_find = Object.entries(tools).find(function(param) {
            var _param = _(param, 1), key = _param[0];
            return startsWith(toolName, "".concat(key, "_"));
        })) === null || _Object_entries_find === void 0 ? void 0 : _Object_entries_find[1];
    }
    return tool;
};

export { findTool, getTextContent, hasTextContent, isPartText, isPartTool };
