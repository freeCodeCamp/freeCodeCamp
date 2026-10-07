'use strict';

var DataTransfer = require('../utils/dataTransfer/DataTransfer.js');
var Clipboard = require('../utils/dataTransfer/Clipboard.js');
var getWindow = require('../utils/misc/getWindow.js');

async function paste(clipboardData) {
    var _doc_activeElement, _ref;
    const doc = this.config.document;
    const target = (_doc_activeElement = doc.activeElement) !== null && _doc_activeElement !== void 0 ? _doc_activeElement : /* istanbul ignore next */ doc.body;
    const dataTransfer = (_ref = typeof clipboardData === 'string' ? getClipboardDataFromString(doc, clipboardData) : clipboardData) !== null && _ref !== void 0 ? _ref : await Clipboard.readDataTransferFromClipboard(doc).catch(()=>{
        throw new Error('`userEvent.paste()` without `clipboardData` requires the `ClipboardAPI` to be available.');
    });
    this.dispatchUIEvent(target, 'paste', {
        clipboardData: dataTransfer
    });
}
function getClipboardDataFromString(doc, text) {
    const dt = DataTransfer.createDataTransfer(getWindow.getWindow(doc));
    dt.setData('text', text);
    return dt;
}

exports.paste = paste;
