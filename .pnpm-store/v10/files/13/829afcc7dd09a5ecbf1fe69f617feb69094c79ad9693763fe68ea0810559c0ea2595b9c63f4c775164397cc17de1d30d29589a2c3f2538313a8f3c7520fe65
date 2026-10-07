'use strict';

var isElementType = require('../utils/misc/isElementType.js');
var FileList = require('../utils/dataTransfer/FileList.js');
require('../utils/dataTransfer/Clipboard.js');
var setFiles = require('../utils/edit/setFiles.js');
var isDisabled = require('../utils/misc/isDisabled.js');
var getWindow = require('../utils/misc/getWindow.js');

async function upload(element, fileOrFiles) {
    const input = isElementType.isElementType(element, 'label') ? element.control : element;
    if (!input || !isElementType.isElementType(input, 'input', {
        type: 'file'
    })) {
        throw new TypeError(`The ${input === element ? 'given' : 'associated'} ${input === null || input === void 0 ? void 0 : input.tagName} element does not accept file uploads`);
    }
    if (isDisabled.isDisabled(element)) return;
    const files = (Array.isArray(fileOrFiles) ? fileOrFiles : [
        fileOrFiles
    ]).filter((file)=>!this.config.applyAccept || isAcceptableFile(file, input.accept)).slice(0, input.multiple ? undefined : 1);
    const fileDialog = ()=>{
        var _input_files;
        // do not fire an input event if the file selection does not change
        if (files.length === ((_input_files = input.files) === null || _input_files === void 0 ? void 0 : _input_files.length) && files.every((f, i)=>{
            var _input_files;
            return f === ((_input_files = input.files) === null || _input_files === void 0 ? void 0 : _input_files.item(i));
        })) {
            return;
        }
        setFiles.setFiles(input, FileList.createFileList(getWindow.getWindow(element), files));
        this.dispatchUIEvent(input, 'input');
        this.dispatchUIEvent(input, 'change');
    };
    input.addEventListener('fileDialog', fileDialog);
    await this.click(element);
    input.removeEventListener('fileDialog', fileDialog);
}
// When matching files, browsers ignore case and consider jpeg/jpg interchangeable.
function normalize(nameOrType) {
    return nameOrType.toLowerCase().replace(/(\.|\/)jpg\b/g, '$1jpeg');
}
function isAcceptableFile(file, accept) {
    if (!accept) {
        return true;
    }
    const wildcards = [
        'audio/*',
        'image/*',
        'video/*'
    ];
    return normalize(accept).trim().split(/\s*,\s*/).some((acceptToken)=>{
        // tokens starting with a dot represent a file extension
        if (acceptToken.startsWith('.')) {
            return normalize(file.name).endsWith(acceptToken);
        } else if (wildcards.includes(acceptToken)) {
            return normalize(file.type).startsWith(acceptToken.replace('*', ''));
        }
        return normalize(file.type) === acceptToken;
    });
}

exports.upload = upload;
