'use strict';

require('../../utils/dataTransfer/Clipboard.js');
var isEditable = require('../../utils/edit/isEditable.js');
var input = require('../input.js');
var registry = require('./registry.js');

registry.behavior.paste = (event, target, instance)=>{
    if (isEditable.isEditable(target)) {
        return ()=>{
            var _event_clipboardData;
            const insertData = (_event_clipboardData = event.clipboardData) === null || _event_clipboardData === void 0 ? void 0 : _event_clipboardData.getData('text');
            if (insertData) {
                input.input(instance, target, insertData, 'insertFromPaste');
            }
        };
    }
};
