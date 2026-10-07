var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import * as React from "react";
import { useEffect, useMemo, useRef } from "react";
import { noop, processSize } from "./utils";
function MonacoDiffEditor(_a, ref) {
    var _b = _a.width, width = _b === void 0 ? "100%" : _b, _c = _a.height, height = _c === void 0 ? "100%" : _c, _d = _a.value, value = _d === void 0 ? null : _d, _e = _a.defaultValue, defaultValue = _e === void 0 ? "" : _e, _f = _a.language, language = _f === void 0 ? "javascript" : _f, _g = _a.theme, theme = _g === void 0 ? null : _g, _h = _a.options, options = _h === void 0 ? {} : _h, _j = _a.overrideServices, overrideServices = _j === void 0 ? {} : _j, _k = _a.editorWillMount, editorWillMount = _k === void 0 ? noop : _k, _l = _a.editorDidMount, editorDidMount = _l === void 0 ? noop : _l, _m = _a.editorWillUnmount, editorWillUnmount = _m === void 0 ? noop : _m, _o = _a.onChange, onChange = _o === void 0 ? noop : _o, _p = _a.className, className = _p === void 0 ? null : _p, _q = _a.original, original = _q === void 0 ? null : _q, originalUri = _a.originalUri, modifiedUri = _a.modifiedUri;
    var containerElement = useRef(null);
    var editor = useRef(null);
    var _subscription = useRef(null);
    var __prevent_trigger_change_event = useRef(null);
    var fixedWidth = processSize(width);
    var fixedHeight = processSize(height);
    var style = useMemo(function () { return ({
        width: fixedWidth,
        height: fixedHeight,
    }); }, [fixedWidth, fixedHeight]);
    React.useImperativeHandle(ref, function () { return ({
        get editor() {
            return editor.current;
        },
    }); });
    var handleEditorWillMount = function () {
        var finalOptions = editorWillMount(monaco);
        return finalOptions || {};
    };
    var handleEditorDidMount = function () {
        editorDidMount(editor.current, monaco);
        var modified = editor.current.getModel().modified;
        _subscription.current = modified.onDidChangeContent(function (event) {
            if (!__prevent_trigger_change_event.current) {
                onChange(modified.getValue(), event);
            }
        });
    };
    var handleEditorWillUnmount = function () {
        editorWillUnmount(editor.current, monaco);
    };
    var initModels = function () {
        var finalValue = value != null ? value : defaultValue;
        var originalModelUri = originalUri === null || originalUri === void 0 ? void 0 : originalUri(monaco);
        var modifiedModelUri = modifiedUri === null || modifiedUri === void 0 ? void 0 : modifiedUri(monaco);
        var originalModel = originalModelUri && monaco.editor.getModel(originalModelUri);
        var modifiedModel = modifiedModelUri && monaco.editor.getModel(modifiedModelUri);
        // Cannot create two models with the same URI,
        // if model with the given URI is already created, just update it.
        if (originalModel) {
            originalModel.setValue(original);
            monaco.editor.setModelLanguage(originalModel, language);
        }
        else {
            originalModel = monaco.editor.createModel(finalValue, language, originalModelUri);
        }
        if (modifiedModel) {
            originalModel.setValue(finalValue);
            monaco.editor.setModelLanguage(modifiedModel, language);
        }
        else {
            modifiedModel = monaco.editor.createModel(finalValue, language, modifiedModelUri);
        }
        editor.current.setModel({
            original: originalModel,
            modified: modifiedModel,
        });
    };
    useEffect(function () {
        if (containerElement.current) {
            // Before initializing monaco editor
            handleEditorWillMount();
            editor.current = monaco.editor.createDiffEditor(containerElement.current, __assign(__assign(__assign({}, (className ? { extraEditorClassName: className } : {})), options), (theme ? { theme: theme } : {})), overrideServices);
            // After initializing monaco editor
            initModels();
            handleEditorDidMount();
        }
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    useEffect(function () {
        if (editor.current) {
            editor.current.updateOptions(__assign(__assign({}, (className ? { extraEditorClassName: className } : {})), options));
        }
    }, [className, options]);
    useEffect(function () {
        if (editor.current) {
            editor.current.layout();
        }
    }, [width, height]);
    useEffect(function () {
        if (editor.current) {
            var _a = editor.current.getModel(), originalEditor = _a.original, modified = _a.modified;
            monaco.editor.setModelLanguage(originalEditor, language);
            monaco.editor.setModelLanguage(modified, language);
        }
    }, [language]);
    useEffect(function () {
        if (editor.current) {
            var modified = editor.current.getModel().modified;
            __prevent_trigger_change_event.current = true;
            // modifiedEditor is not in the public API for diff editors
            editor.current.getModifiedEditor().pushUndoStop();
            // pushEditOperations says it expects a cursorComputer, but doesn't seem to need one.
            // @ts-expect-error
            modified.pushEditOperations([], [
                {
                    range: modified.getFullModelRange(),
                    text: value,
                },
            ]);
            // modifiedEditor is not in the public API for diff editors
            editor.current.getModifiedEditor().pushUndoStop();
            __prevent_trigger_change_event.current = false;
        }
    }, [value]);
    useEffect(function () {
        monaco.editor.setTheme(theme);
    }, [theme]);
    useEffect(function () {
        if (editor.current) {
            var originalEditor = editor.current.getModel().original;
            if (original !== originalEditor.getValue()) {
                originalEditor.setValue(original);
            }
        }
    }, [original]);
    useEffect(function () { return function () {
        if (editor.current) {
            handleEditorWillUnmount();
            editor.current.dispose();
            var _a = editor.current.getModel(), originalEditor = _a.original, modified = _a.modified;
            if (originalEditor) {
                originalEditor.dispose();
            }
            if (modified) {
                modified.dispose();
            }
        }
        if (_subscription.current) {
            _subscription.current.dispose();
        }
    }; }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);
    return (React.createElement("div", { ref: containerElement, style: style, className: "react-monaco-editor-container" }));
}
var MonacoDiffEditorForwarded = React.forwardRef(MonacoDiffEditor);
MonacoDiffEditorForwarded.displayName = "MonacoDiffEditor";
export default MonacoDiffEditorForwarded;
//# sourceMappingURL=diff.js.map