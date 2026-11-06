import { describe, expect, it, vi } from 'vitest';

import type { editor } from 'monaco-editor/esm/vs/editor/editor.api.js';

import { copyEditorSelection, cutEditorSelection } from './editor-clipboard';

const selection = {
  startLineNumber: 1,
  startColumn: 2,
  endLineNumber: 1,
  endColumn: 5
};

const createEditor = (options?: {
  text?: string;
  version?: number;
  currentVersion?: number;
  selectedRange?: typeof selection | null;
}) => {
  const text = options?.text ?? 'ell';
  const selectedRange = options?.selectedRange ?? selection;
  const getValueInRange = vi.fn(() => text);
  const getVersionId = vi
    .fn()
    .mockReturnValueOnce(options?.version ?? 1)
    .mockReturnValue(options?.currentVersion ?? options?.version ?? 1);
  const model = { getValueInRange, getVersionId };
  const executeEdits = vi.fn(() => true);
  const codeEditor = {
    getModel: () => (options?.selectedRange === null ? null : model),
    getSelection: () => selectedRange,
    executeEdits
  } as unknown as Pick<
    editor.IStandaloneCodeEditor,
    'getModel' | 'getSelection' | 'executeEdits'
  >;

  return { codeEditor, executeEdits, getValueInRange };
};

describe('editor clipboard actions', () => {
  it('copies the selected text', async () => {
    const { codeEditor } = createEditor();
    const writeText = vi.fn().mockResolvedValue(undefined);

    await expect(copyEditorSelection(codeEditor, { writeText })).resolves.toBe(
      true
    );
    expect(writeText).toHaveBeenCalledWith('ell');
  });

  it('does nothing when there is no model or selection', async () => {
    const { codeEditor } = createEditor({ selectedRange: null });
    const writeText = vi.fn();

    await expect(copyEditorSelection(codeEditor, { writeText })).resolves.toBe(
      false
    );
    expect(writeText).not.toHaveBeenCalled();
  });

  it('cuts the selection only after the clipboard write succeeds', async () => {
    const { codeEditor, executeEdits } = createEditor();
    const writeText = vi.fn().mockResolvedValue(undefined);

    await expect(cutEditorSelection(codeEditor, { writeText })).resolves.toBe(
      true
    );
    expect(writeText).toHaveBeenCalledWith('ell');
    expect(executeEdits).toHaveBeenCalledWith('cut-selection', [
      { range: selection, text: '' }
    ]);
  });

  it('does not cut if the model changes while writing to the clipboard', async () => {
    const { codeEditor, executeEdits } = createEditor({
      version: 1,
      currentVersion: 2
    });
    const writeText = vi.fn().mockResolvedValue(undefined);

    await expect(cutEditorSelection(codeEditor, { writeText })).resolves.toBe(
      false
    );
    expect(executeEdits).not.toHaveBeenCalled();
  });

  it('does not cut if writing to the clipboard fails', async () => {
    const { codeEditor, executeEdits } = createEditor();
    const writeText = vi.fn().mockRejectedValue(new Error('Clipboard denied'));

    await expect(cutEditorSelection(codeEditor, { writeText })).rejects.toThrow(
      'Clipboard denied'
    );
    expect(executeEdits).not.toHaveBeenCalled();
  });
});
