import { detect } from 'chardet';
import { spawn, spawnSync } from 'child_process';
import { readFileSync, unlinkSync, writeFileSync } from 'fs';
import path from 'node:path';
import os from 'node:os';
import { randomUUID } from 'node:crypto';
import iconv from 'iconv-lite';
import { CreateFileError } from "./errors/CreateFileError.js";
import { LaunchEditorError } from "./errors/LaunchEditorError.js";
import { ReadFileError } from "./errors/ReadFileError.js";
import { RemoveFileError } from "./errors/RemoveFileError.js";
export { CreateFileError, LaunchEditorError, ReadFileError, RemoveFileError };
export function edit(text = '', fileOptions) {
    const editor = new ExternalEditor(text, fileOptions);
    editor.run();
    editor.cleanup();
    return editor.text;
}
export function editAsync(text = '', callback, fileOptions) {
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
export class ExternalEditor {
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
            const baseDir = this.fileOptions.dir ?? os.tmpdir();
            const id = randomUUID();
            const prefix = sanitizeAffix(this.fileOptions.prefix);
            const postfix = sanitizeAffix(this.fileOptions.postfix);
            const filename = `${prefix}${id}${postfix}`;
            const candidate = path.resolve(baseDir, filename);
            const baseResolved = path.resolve(baseDir) + path.sep;
            if (!candidate.startsWith(baseResolved)) {
                throw new Error('Resolved temporary file escaped the base directory');
            }
            this.tempFile = candidate;
            const opt = { encoding: 'utf8', flag: 'wx' };
            if (Object.prototype.hasOwnProperty.call(this.fileOptions, 'mode')) {
                opt.mode = this.fileOptions.mode;
            }
            writeFileSync(this.tempFile, this.text, opt);
        }
        catch (createFileError) {
            throw new CreateFileError(createFileError);
        }
    }
    readTemporaryFile() {
        try {
            const tempFileBuffer = readFileSync(this.tempFile);
            if (tempFileBuffer.length === 0) {
                this.text = '';
            }
            else {
                let encoding = detect(tempFileBuffer) ?? 'utf8';
                if (!iconv.encodingExists(encoding)) {
                    // Probably a bad idea, but will at least prevent crashing
                    encoding = 'utf8';
                }
                this.text = iconv.decode(tempFileBuffer, encoding);
            }
        }
        catch (readFileError) {
            throw new ReadFileError(readFileError);
        }
    }
    removeTemporaryFile() {
        try {
            unlinkSync(this.tempFile);
        }
        catch (removeFileError) {
            throw new RemoveFileError(removeFileError);
        }
    }
    launchEditor() {
        try {
            const editorProcess = spawnSync(this.editor.bin, this.editor.args.concat([this.tempFile]), { stdio: 'inherit' });
            this.lastExitStatus = editorProcess.status ?? 0;
        }
        catch (launchError) {
            throw new LaunchEditorError(launchError);
        }
    }
    launchEditorAsync(callback) {
        try {
            const editorProcess = spawn(this.editor.bin, this.editor.args.concat([this.tempFile]), { stdio: 'inherit' });
            editorProcess.on('exit', (code) => {
                this.lastExitStatus = code;
                setImmediate(callback);
            });
        }
        catch (launchError) {
            throw new LaunchEditorError(launchError);
        }
    }
}
