"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalEditor = exports.RemoveFileError = exports.ReadFileError = exports.LaunchEditorError = exports.CreateFileError = void 0;
exports.edit = edit;
exports.editAsync = editAsync;
const chardet_1 = require("chardet");
const child_process_1 = require("child_process");
const fs_1 = require("fs");
const node_path_1 = __importDefault(require("node:path"));
const node_os_1 = __importDefault(require("node:os"));
const node_crypto_1 = require("node:crypto");
const iconv_lite_1 = __importDefault(require("iconv-lite"));
const CreateFileError_ts_1 = require("./errors/CreateFileError.js");
Object.defineProperty(exports, "CreateFileError", { enumerable: true, get: function () { return CreateFileError_ts_1.CreateFileError; } });
const LaunchEditorError_ts_1 = require("./errors/LaunchEditorError.js");
Object.defineProperty(exports, "LaunchEditorError", { enumerable: true, get: function () { return LaunchEditorError_ts_1.LaunchEditorError; } });
const ReadFileError_ts_1 = require("./errors/ReadFileError.js");
Object.defineProperty(exports, "ReadFileError", { enumerable: true, get: function () { return ReadFileError_ts_1.ReadFileError; } });
const RemoveFileError_ts_1 = require("./errors/RemoveFileError.js");
Object.defineProperty(exports, "RemoveFileError", { enumerable: true, get: function () { return RemoveFileError_ts_1.RemoveFileError; } });
function edit(text = '', fileOptions) {
    const editor = new ExternalEditor(text, fileOptions);
    editor.run();
    editor.cleanup();
    return editor.text;
}
function editAsync(text = '', callback, fileOptions) {
    const editor = new ExternalEditor(text, fileOptions);
    editor.runAsync((err, result) => {
        if (err) {
            setImmediate(callback, err, undefined);
        }
        else {
            try {
                editor.cleanup();
                setImmediate(callback, undefined, result);
            }
            catch (cleanupError) {
                setImmediate(callback, cleanupError, undefined);
            }
        }
    });
}
function sanitizeAffix(affix) {
    if (!affix)
        return '';
    return affix.replace(/[^a-zA-Z0-9_.-]/g, '_');
}
function splitStringBySpace(str) {
    const pieces = [];
    let currentString = '';
    for (let strIndex = 0; strIndex < str.length; strIndex++) {
        const currentLetter = str.charAt(strIndex);
        if (strIndex > 0 &&
            currentLetter === ' ' &&
            str[strIndex - 1] !== '\\' &&
            currentString.length > 0) {
            pieces.push(currentString);
            currentString = '';
        }
        else {
            currentString = `${currentString}${currentLetter}`;
        }
    }
    if (currentString.length > 0) {
        pieces.push(currentString);
    }
    return pieces;
}
class ExternalEditor {
    text = '';
    tempFile;
    editor;
    lastExitStatus = 0;
    fileOptions = {};
    get temp_file() {
        console.log('DEPRECATED: temp_file. Use tempFile moving forward.');
        return this.tempFile;
    }
    get last_exit_status() {
        console.log('DEPRECATED: last_exit_status. Use lastExitStatus moving forward.');
        return this.lastExitStatus;
    }
    constructor(text = '', fileOptions) {
        this.text = text;
        if (fileOptions) {
            this.fileOptions = fileOptions;
        }
        this.determineEditor();
        this.createTemporaryFile();
    }
    run() {
        this.launchEditor();
        this.readTemporaryFile();
        return this.text;
    }
    runAsync(callback) {
        try {
            this.launchEditorAsync(() => {
                try {
                    this.readTemporaryFile();
                    setImmediate(callback, undefined, this.text);
                }
                catch (readError) {
                    setImmediate(callback, readError, undefined);
                }
            });
        }
        catch (launchError) {
            setImmediate(callback, launchError, undefined);
        }
    }
    cleanup() {
        this.removeTemporaryFile();
    }
    determineEditor() {
        const editor = process.env['VISUAL']
            ? process.env['VISUAL']
            : process.env['EDITOR']
                ? process.env['EDITOR']
                : process.platform.startsWith('win')
                    ? 'notepad'
                    : 'vim';
        const editorOpts = splitStringBySpace(editor).map((piece) => piece.replace('\\ ', ' '));
        const bin = editorOpts.shift();
        this.editor = { args: editorOpts, bin };
    }
    createTemporaryFile() {
        try {
            const baseDir = this.fileOptions.dir ?? node_os_1.default.tmpdir();
            const id = (0, node_crypto_1.randomUUID)();
            const prefix = sanitizeAffix(this.fileOptions.prefix);
            const postfix = sanitizeAffix(this.fileOptions.postfix);
            const filename = `${prefix}${id}${postfix}`;
            const candidate = node_path_1.default.resolve(baseDir, filename);
            const baseResolved = node_path_1.default.resolve(baseDir) + node_path_1.default.sep;
            if (!candidate.startsWith(baseResolved)) {
                throw new Error('Resolved temporary file escaped the base directory');
            }
            this.tempFile = candidate;
            const opt = { encoding: 'utf8', flag: 'wx' };
            if (Object.prototype.hasOwnProperty.call(this.fileOptions, 'mode')) {
                opt.mode = this.fileOptions.mode;
            }
            (0, fs_1.writeFileSync)(this.tempFile, this.text, opt);
        }
        catch (createFileError) {
            throw new CreateFileError_ts_1.CreateFileError(createFileError);
        }
    }
    readTemporaryFile() {
        try {
            const tempFileBuffer = (0, fs_1.readFileSync)(this.tempFile);
            if (tempFileBuffer.length === 0) {
                this.text = '';
            }
            else {
                let encoding = (0, chardet_1.detect)(tempFileBuffer) ?? 'utf8';
                if (!iconv_lite_1.default.encodingExists(encoding)) {
                    // Probably a bad idea, but will at least prevent crashing
                    encoding = 'utf8';
                }
                this.text = iconv_lite_1.default.decode(tempFileBuffer, encoding);
            }
        }
        catch (readFileError) {
            throw new ReadFileError_ts_1.ReadFileError(readFileError);
        }
    }
    removeTemporaryFile() {
        try {
            (0, fs_1.unlinkSync)(this.tempFile);
        }
        catch (removeFileError) {
            throw new RemoveFileError_ts_1.RemoveFileError(removeFileError);
        }
    }
    launchEditor() {
        try {
            const editorProcess = (0, child_process_1.spawnSync)(this.editor.bin, this.editor.args.concat([this.tempFile]), { stdio: 'inherit' });
            this.lastExitStatus = editorProcess.status ?? 0;
        }
        catch (launchError) {
            throw new LaunchEditorError_ts_1.LaunchEditorError(launchError);
        }
    }
    launchEditorAsync(callback) {
        try {
            const editorProcess = (0, child_process_1.spawn)(this.editor.bin, this.editor.args.concat([this.tempFile]), { stdio: 'inherit' });
            editorProcess.on('exit', (code) => {
                this.lastExitStatus = code;
                setImmediate(callback);
            });
        }
        catch (launchError) {
            throw new LaunchEditorError_ts_1.LaunchEditorError(launchError);
        }
    }
}
exports.ExternalEditor = ExternalEditor;
