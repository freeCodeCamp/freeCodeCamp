import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import * as React from "react";
import { useEffect, useMemo, useRef } from "react";
import { MonacoEditorHandle, MonacoEditorProps } from "./types";
import { noop, processSize } from "./utils";

function MonacoEditor(
  {
    width = "100%",
    height = "100%",
    value = null,
    defaultValue = "",
    language = "javascript",
    theme = null,
    options = {},
    overrideServices = {},
    editorWillMount = noop,
    editorDidMount = noop,
    editorWillUnmount = noop,
    onChange = noop,
    className = null,
    uri,
  }: MonacoEditorProps,
  ref: React.ForwardedRef<MonacoEditorHandle>,
) {
  const containerElement = useRef<HTMLDivElement | null>(null);

  const editor = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  const _subscription = useRef<monaco.IDisposable | null>(null);

  const __prevent_trigger_change_event = useRef<boolean | null>(null);

  const fixedWidth = processSize(width);

  const fixedHeight = processSize(height);

  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  React.useImperativeHandle(ref, () => ({
    get editor() {
      return editor.current;
    },
  }));

  const style = useMemo(
    () => ({
      width: fixedWidth,
      height: fixedHeight,
    }),
    [fixedWidth, fixedHeight],
  );

  const handleEditorWillMount = () => {
    const finalOptions = editorWillMount(monaco);
    return finalOptions || {};
  };

  const handleEditorDidMount = () => {
    editorDidMount(editor.current, monaco);

    _subscription.current = editor.current.onDidChangeModelContent((event) => {
      if (!__prevent_trigger_change_event.current) {
        onChangeRef.current?.(editor.current.getValue(), event);
      }
    });
  };

  const handleEditorWillUnmount = () => {
    editorWillUnmount(editor.current, monaco);
  };

  const initMonaco = () => {
    const finalValue = value !== null ? value : defaultValue;

    if (containerElement.current) {
      // Before initializing monaco editor
      const finalOptions = { ...options, ...handleEditorWillMount() };
      const modelUri = uri?.(monaco);
      let model = modelUri && monaco.editor.getModel(modelUri);
      if (model) {
        // Cannot create two models with the same URI,
        // if model with the given URI is already created, just update it.
        model.setValue(finalValue);
        monaco.editor.setModelLanguage(model, language);
      } else {
        model = monaco.editor.createModel(finalValue, language, modelUri);
      }
      editor.current = monaco.editor.create(
        containerElement.current,
        {
          model,
          ...(className ? { extraEditorClassName: className } : {}),
          ...finalOptions,
          ...(theme ? { theme } : {}),
        },
        overrideServices,
      );
      // After initializing monaco editor
      handleEditorDidMount();
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(initMonaco, []);

  useEffect(() => {
    // If value is null, we don't want to update the editor content because it is controlled by defaultValue.
    if (editor.current && value !== null) {
      if (value === editor.current.getValue()) {
        return;
      }

      const model = editor.current.getModel();
      __prevent_trigger_change_event.current = true;
      editor.current.pushUndoStop();
      // pushEditOperations says it expects a cursorComputer, but doesn't seem to need one.
      model.pushEditOperations(
        [],
        [
          {
            range: model.getFullModelRange(),
            text: value,
          },
        ],
        undefined,
      );
      editor.current.pushUndoStop();
      __prevent_trigger_change_event.current = false;
    }
  }, [value]);

  useEffect(() => {
    if (editor.current) {
      const model = editor.current.getModel();
      monaco.editor.setModelLanguage(model, language);
    }
  }, [language]);

  useEffect(() => {
    if (editor.current) {
      // Don't pass in the model on update because monaco crashes if we pass the model
      // a second time. See https://github.com/microsoft/monaco-editor/issues/2027
      const { model: _model, ...optionsWithoutModel } = options;
      editor.current.updateOptions({
        ...(className ? { extraEditorClassName: className } : {}),
        ...optionsWithoutModel,
      });
    }
  }, [className, options]);

  useEffect(() => {
    if (editor.current) {
      editor.current.layout();
    }
  }, [width, height]);

  useEffect(() => {
    monaco.editor.setTheme(theme);
  }, [theme]);

  useEffect(
    () => () => {
      if (editor.current) {
        handleEditorWillUnmount();
        editor.current.dispose();
      }
      if (_subscription.current) {
        _subscription.current.dispose();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <div
      ref={containerElement}
      style={style}
      className="react-monaco-editor-container"
    />
  );
}

const MonacoEditorForwarded = React.forwardRef(MonacoEditor);
MonacoEditorForwarded.displayName = "MonacoEditor";

export default MonacoEditorForwarded;
