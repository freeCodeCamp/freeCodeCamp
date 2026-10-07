import { format as format$1 } from '../../../../jsonc-parser/lib/esm/main.js';
import '../jsonLanguageTypes.js';
import { TextEdit, Range } from '../../../../vscode-languageserver-types/lib/esm/main.js';

function format(documentToFormat, formattingOptions, formattingRange) {
    let range = undefined;
    if (formattingRange) {
        const offset = documentToFormat.offsetAt(formattingRange.start);
        const length = documentToFormat.offsetAt(formattingRange.end) - offset;
        range = { offset, length };
    }
    const options = {
        tabSize: formattingOptions ? formattingOptions.tabSize : 4,
        insertSpaces: formattingOptions?.insertSpaces === true,
        insertFinalNewline: formattingOptions?.insertFinalNewline === true,
        eol: '\n',
        keepLines: formattingOptions?.keepLines === true
    };
    return format$1(documentToFormat.getText(), range, options).map(edit => {
        return TextEdit.replace(Range.create(documentToFormat.positionAt(edit.offset), documentToFormat.positionAt(edit.offset + edit.length)), edit.content);
    });
}

export { format };
