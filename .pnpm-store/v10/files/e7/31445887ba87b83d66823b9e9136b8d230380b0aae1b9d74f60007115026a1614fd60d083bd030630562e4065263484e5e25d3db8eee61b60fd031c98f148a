import { setupDirect } from './setup.js';

function clear(element) {
    return setupDirect().api.clear(element);
}
function click(element, options = {}) {
    return setupDirect(options, element).api.click(element);
}
function copy(options = {}) {
    return setupDirect(options).api.copy();
}
function cut(options = {}) {
    return setupDirect(options).api.cut();
}
function dblClick(element, options = {}) {
    return setupDirect(options).api.dblClick(element);
}
function deselectOptions(select, values, options = {}) {
    return setupDirect(options).api.deselectOptions(select, values);
}
function hover(element, options = {}) {
    return setupDirect(options).api.hover(element);
}
async function keyboard(text, options = {}) {
    const { api, system } = setupDirect(options);
    return api.keyboard(text).then(()=>system);
}
async function pointer(input, options = {}) {
    const { api, system } = setupDirect(options);
    return api.pointer(input).then(()=>system);
}
function paste(clipboardData, options) {
    return setupDirect(options).api.paste(clipboardData);
}
function selectOptions(select, values, options = {}) {
    return setupDirect(options).api.selectOptions(select, values);
}
function tripleClick(element, options = {}) {
    return setupDirect(options).api.tripleClick(element);
}
function type(element, text, options = {}) {
    return setupDirect(options, element).api.type(element, text, options);
}
function unhover(element, options = {}) {
    const { api, system } = setupDirect(options);
    system.pointer.setMousePosition({
        target: element
    });
    return api.unhover(element);
}
function upload(element, fileOrFiles, options = {}) {
    return setupDirect(options).api.upload(element, fileOrFiles);
}
function tab(options = {}) {
    return setupDirect().api.tab(options);
}

export { clear, click, copy, cut, dblClick, deselectOptions, hover, keyboard, paste, pointer, selectOptions, tab, tripleClick, type, unhover, upload };
