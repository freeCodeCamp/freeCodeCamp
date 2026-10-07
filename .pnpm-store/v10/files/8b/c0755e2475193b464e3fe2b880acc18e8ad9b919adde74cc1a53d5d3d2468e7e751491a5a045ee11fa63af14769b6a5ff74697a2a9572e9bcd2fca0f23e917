import { isWindows } from '../../../../base/common/platform.js';
import { Mimes } from '../../../../base/common/mime.js';

function getDataToCopy(viewModel, modelSelections, emptySelectionClipboard, copyWithSyntaxHighlighting) {
    const rawTextToCopy = viewModel.getPlainTextToCopy(modelSelections, emptySelectionClipboard, isWindows);
    const newLineCharacter = viewModel.model.getEOL();
    const isFromEmptySelection = (emptySelectionClipboard && modelSelections.length === 1 && modelSelections[0].isEmpty());
    const multicursorText = (Array.isArray(rawTextToCopy) ? rawTextToCopy : null);
    const text = (Array.isArray(rawTextToCopy) ? rawTextToCopy.join(newLineCharacter) : rawTextToCopy);
    let html = undefined;
    let mode = null;
    if (CopyOptions.forceCopyWithSyntaxHighlighting || (copyWithSyntaxHighlighting && text.length < 65536)) {
        const richText = viewModel.getRichTextToCopy(modelSelections, emptySelectionClipboard);
        if (richText) {
            html = richText.html;
            mode = richText.mode;
        }
    }
    const dataToCopy = {
        isFromEmptySelection,
        multicursorText,
        text,
        html,
        mode
    };
    return dataToCopy;
}
/**
 * Every time we write to the clipboard, we record a bit of extra metadata here.
 * Every time we read from the cipboard, if the text matches our last written text,
 * we can fetch the previous metadata.
 */
class InMemoryClipboardMetadataManager {
    static { this.INSTANCE = new InMemoryClipboardMetadataManager(); }
    constructor() {
        this._lastState = null;
    }
    set(lastCopiedValue, data) {
        this._lastState = { lastCopiedValue, data };
    }
    get(pastedText) {
        if (this._lastState && this._lastState.lastCopiedValue === pastedText) {
            // match!
            return this._lastState.data;
        }
        this._lastState = null;
        return null;
    }
}
const CopyOptions = {
    forceCopyWithSyntaxHighlighting: false
};
const ClipboardEventUtils = {
    getTextData(clipboardData) {
        const text = clipboardData.getData(Mimes.text);
        let metadata = null;
        const rawmetadata = clipboardData.getData('vscode-editor-data');
        if (typeof rawmetadata === 'string') {
            try {
                metadata = JSON.parse(rawmetadata);
                if (metadata.version !== 1) {
                    metadata = null;
                }
            }
            catch (err) {
                // no problem!
            }
        }
        if (text.length === 0 && metadata === null && clipboardData.files.length > 0) {
            // no textual data pasted, generate text from file names
            const files = Array.prototype.slice.call(clipboardData.files, 0);
            return [files.map(file => file.name).join('\n'), null];
        }
        return [text, metadata];
    },
    setTextData(clipboardData, text, html, metadata) {
        clipboardData.setData(Mimes.text, text);
        if (typeof html === 'string') {
            clipboardData.setData('text/html', html);
        }
        clipboardData.setData('vscode-editor-data', JSON.stringify(metadata));
    }
};

export { ClipboardEventUtils, CopyOptions, InMemoryClipboardMetadataManager, getDataToCopy };
