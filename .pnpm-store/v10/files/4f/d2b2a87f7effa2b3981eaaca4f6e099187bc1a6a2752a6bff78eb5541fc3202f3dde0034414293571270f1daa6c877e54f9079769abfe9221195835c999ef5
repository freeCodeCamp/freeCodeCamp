'use strict';

var setup = require('./setup.js');

function clear(element) {
    return setup.setupDirect().api.clear(element);
}
function click(element, options = {}) {
    return setup.setupDirect(options, element).api.click(element);
}
function copy(options = {}) {
    return setup.setupDirect(options).api.copy();
}
function cut(options = {}) {
    return setup.setupDirect(options).api.cut();
}
function dblClick(element, options = {}) {
    return setup.setupDirect(options).api.dblClick(element);
}
function deselectOptions(select, values, options = {}) {
    return setup.setupDirect(options).api.deselectOptions(select, values);
}
function hover(element, options = {}) {
    return setup.setupDirect(options).api.hover(element);
}
async function keyboard(text, options = {}) {
    const { api, system } = setup.setupDirect(options);
    return api.keyboard(text).then(()=>system);
}
async function pointer(input, options = {}) {
    const { api, system } = setup.setupDirect(options);
    return api.pointer(input).then(()=>system);
}
function paste(clipboardData, options) {
    return setup.setupDirect(options).api.paste(clipboardData);
}
function selectOptions(select, values, options = {}) {
    return setup.setupDirect(options).api.selectOptions(select, values);
}
function tripleClick(element, options = {}) {
    return setup.setupDirect(options).api.tripleClick(element);
}
function type(element, text, options = {}) {
    return setup.setupDirect(options, element).api.type(element, text, options);
}
function unhover(element, options = {}) {
    const { api, system } = setup.setupDirect(options);
    system.pointer.setMousePosition({
        target: element
    });
    return api.unhover(element);
}
function upload(element, fileOrFiles, options = {}) {
    return setup.setupDirect(options).api.upload(element, fileOrFiles);
}
function tab(options = {}) {
    return setup.setupDirect().api.tab(options);
}

exports.clear = clear;
exports.click = click;
exports.copy = copy;
exports.cut = cut;
exports.dblClick = dblClick;
exports.deselectOptions = deselectOptions;
exports.hover = hover;
exports.keyboard = keyboard;
exports.paste = paste;
exports.pointer = pointer;
exports.selectOptions = selectOptions;
exports.tab = tab;
exports.tripleClick = tripleClick;
exports.type = type;
exports.unhover = unhover;
exports.upload = upload;
