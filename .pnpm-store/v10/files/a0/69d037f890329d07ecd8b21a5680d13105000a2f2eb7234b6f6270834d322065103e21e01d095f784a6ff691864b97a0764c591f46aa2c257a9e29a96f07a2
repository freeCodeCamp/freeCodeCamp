import { createDecorator } from '../../instantiation/common/instantiation.js';

const IProgressService = createDecorator('progressService');
class Progress {
    static { this.None = Object.freeze({ report() { } }); }
    constructor(callback) {
        this.callback = callback;
    }
    report(item) {
        this._value = item;
        this.callback(this._value);
    }
}
const IEditorProgressService = createDecorator('editorProgressService');

export { IEditorProgressService, IProgressService, Progress };
