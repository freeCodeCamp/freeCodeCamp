"use strict";
/***
 * Node External Editor
 *
 * Kevin Gravier <kevin@mrkmg.com>
 * MIT 2019
 */
Object.defineProperty(exports, "__esModule", { value: true });
var chardet_1 = require("chardet");
var child_process_1 = require("child_process");
var fs_1 = require("fs");
var iconv_lite_1 = require("iconv-lite");
var tmp_1 = require("tmp");
var CreateFileError_1 = require("./errors/CreateFileError");
exports.CreateFileError = CreateFileError_1.CreateFileError;
var LaunchEditorError_1 = require("./errors/LaunchEditorError");
exports.LaunchEditorError = LaunchEditorError_1.LaunchEditorError;
var ReadFileError_1 = require("./errors/ReadFileError");
exports.ReadFileError = ReadFileError_1.ReadFileError;
var RemoveFileError_1 = require("./errors/RemoveFileError");
exports.RemoveFileError = RemoveFileError_1.RemoveFileError;
function edit(text, fileOptions) {
    if (text === void 0) { text = ""; }
    var editor = new ExternalEditor(text, fileOptions);
    editor.run();
    editor.cleanup();
    return editor.text;
}
exports.edit = edit;
function editAsync(text, callback, fileOptions) {
    if (text === void 0) { text = ""; }
    var editor = new ExternalEditor(text, fileOptions);
    editor.runAsync(function (err, result) {
        if (err) {
            setImmediate(callback, err, null);
        }
        else {
            try {
                editor.cleanup();
                setImmediate(callback, null, result);
            }
            catch (cleanupError) {
                setImmediate(callback, cleanupError, null);
            }
        }
    });
}
exports.editAsync = editAsync;
var ExternalEditor = /** @class */ (function () {
    function ExternalEditor(text, fileOptions) {
        if (text === void 0) { text = ""; }
        this.text = "";
        this.fileOptions = {};
        this.text = text;
        if (fileOptions) {
            this.fileOptions = fileOptions;
        }
        this.determineEditor();
        this.createTemporaryFile();
    }
    ExternalEditor.splitStringBySpace = function (str) {
        var pieces = [];
        var currentString = "";
        for (var strIndex = 0; strIndex < str.length; strIndex++) {
            var currentLetter = str[strIndex];
            if (strIndex > 0 && currentLetter === " " && str[strIndex - 1] !== "\\" && currentString.length > 0) {
                pieces.push(currentString);
                currentString = "";
            }
            else {
                currentString += currentLetter;
            }
        }
        if (currentString.length > 0) {
            pieces.push(currentString);
        }
        return pieces;
    };
    Object.defineProperty(ExternalEditor.prototype, "temp_file", {
        get: function () {
            console.log("DEPRECATED: temp_file. Use tempFile moving forward.");
            return this.tempFile;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExternalEditor.prototype, "last_exit_status", {
        get: function () {
            console.log("DEPRECATED: last_exit_status. Use lastExitStatus moving forward.");
            return this.lastExitStatus;
        },
        enumerable: true,
        configurable: true
    });
    ExternalEditor.prototype.run = function () {
        this.launchEditor();
        this.readTemporaryFile();
        return this.text;
    };
    ExternalEditor.prototype.runAsync = function (callback) {
        var _this = this;
        try {
            this.launchEditorAsync(function () {
                try {
                    _this.readTemporaryFile();
                    setImmediate(callback, null, _this.text);
                }
                catch (readError) {
                    setImmediate(callback, readError, null);
                }
            });
        }
        catch (launchError) {
            setImmediate(callback, launchError, null);
        }
    };
    ExternalEditor.prototype.cleanup = function () {
        this.removeTemporaryFile();
    };
    ExternalEditor.prototype.determineEditor = function () {
        var editor = process.env.VISUAL ? process.env.VISUAL :
            process.env.EDITOR ? process.env.EDITOR :
                /^win/.test(process.platform) ? "notepad" :
                    "vim";
        var editorOpts = ExternalEditor.splitStringBySpace(editor).map(function (piece) { return piece.replace("\\ ", " "); });
        var bin = editorOpts.shift();
        this.editor = { args: editorOpts, bin: bin };
    };
    ExternalEditor.prototype.createTemporaryFile = function () {
        try {
            this.tempFile = tmp_1.tmpNameSync(this.fileOptions);
            var opt = { encoding: "utf8" };
            if (this.fileOptions.hasOwnProperty("mode")) {
                opt.mode = this.fileOptions.mode;
            }
            fs_1.writeFileSync(this.tempFile, this.text, opt);
        }
        catch (createFileError) {
            throw new CreateFileError_1.CreateFileError(createFileError);
        }
    };
    ExternalEditor.prototype.readTemporaryFile = function () {
        try {
            var tempFileBuffer = fs_1.readFileSync(this.tempFile);
            if (tempFileBuffer.length === 0) {
                this.text = "";
            }
            else {
                var encoding = chardet_1.detect(tempFileBuffer).toString();
                if (!iconv_lite_1.encodingExists(encoding)) {
                    // Probably a bad idea, but will at least prevent crashing
                    encoding = "utf8";
                }
                this.text = iconv_lite_1.decode(tempFileBuffer, encoding);
            }
        }
        catch (readFileError) {
            throw new ReadFileError_1.ReadFileError(readFileError);
        }
    };
    ExternalEditor.prototype.removeTemporaryFile = function () {
        try {
            fs_1.unlinkSync(this.tempFile);
        }
        catch (removeFileError) {
            throw new RemoveFileError_1.RemoveFileError(removeFileError);
        }
    };
    ExternalEditor.prototype.launchEditor = function () {
        try {
            var editorProcess = child_process_1.spawnSync(this.editor.bin, this.editor.args.concat([this.tempFile]), { stdio: "inherit" });
            this.lastExitStatus = editorProcess.status;
        }
        catch (launchError) {
            throw new LaunchEditorError_1.LaunchEditorError(launchError);
        }
    };
    ExternalEditor.prototype.launchEditorAsync = function (callback) {
        var _this = this;
        try {
            var editorProcess = child_process_1.spawn(this.editor.bin, this.editor.args.concat([this.tempFile]), { stdio: "inherit" });
            editorProcess.on("exit", function (code) {
                _this.lastExitStatus = code;
                setImmediate(callback);
            });
        }
        catch (launchError) {
            throw new LaunchEditorError_1.LaunchEditorError(launchError);
        }
    };
    return ExternalEditor;
}());
exports.ExternalEditor = ExternalEditor;
