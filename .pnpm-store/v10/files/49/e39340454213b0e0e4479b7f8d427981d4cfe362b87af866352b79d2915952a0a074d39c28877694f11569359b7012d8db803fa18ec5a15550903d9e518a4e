'use strict';

require('../../utils/dataTransfer/Clipboard.js');
var isEditable = require('../../utils/edit/isEditable.js');
var input = require('../input.js');
var registry = require('./registry.js');

registry.behavior.cut = (event, target, instance)=>{
    return ()=>{
        if (isEditable.isEditable(target)) {
            input.input(instance, target, '', 'deleteByCut');
        }
    };
};
