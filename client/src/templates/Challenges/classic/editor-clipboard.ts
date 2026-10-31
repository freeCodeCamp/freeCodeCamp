import type { editor } from 'monaco-editor/esm/vs/editor/editor.api.js';

type ClipboardEditor = Pick<
  editor.IStandaloneCodeEditor,
  'getModel' | 'getSelection' | 'executeEdits'
>;

type ClipboardWriter = Pick<Clipboard, 'writeText'>;

const getSelection = (codeEditor: ClipboardEditor) => {
  const model = codeEditor.getModel();
  const selection = codeEditor.getSelection();

  if (!model || !selection) return null;

  const text = model.getValueInRange(selection);

  return text
    ? { model, selection, text, version: model.getVersionId() }
    : null;
};

export const copyEditorSelection = async (
  codeEditor: ClipboardEditor,
  clipboard: ClipboardWriter
): Promise<boolean> => {
  const selected = getSelection(codeEditor);
  if (!selected) return false;

  await clipboard.writeText(selected.text);
  return true;
};

export const cutEditorSelection = async (
  codeEditor: ClipboardEditor,
  clipboard: ClipboardWriter
): Promise<boolean> => {
  const selected = getSelection(codeEditor);
  if (!selected) return false;

  await clipboard.writeText(selected.text);

  // Clipboard permission prompts can take time. Avoid cutting a stale range
  // if the user edited the model while the write was pending.
  if (
    codeEditor.getModel() !== selected.model ||
    selected.model.getVersionId() !== selected.version
  ) {
    return false;
  }

  return codeEditor.executeEdits('cut-selection', [
    { range: selected.selection, text: '' }
  ]);
};
