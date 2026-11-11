import { describe, expect, it, vi } from 'vitest';

import {
  createPreviewAlertListener,
  parsePreviewAlert,
  previewAlertMessageType
} from './preview-messages';

const validMessage = {
  type: previewAlertMessageType,
  variant: 'external-link',
  externalLink: 'https://example.com/'
};

describe('parsePreviewAlert', () => {
  it('accepts a well formed alert', () => {
    expect(parsePreviewAlert(validMessage)).toEqual(validMessage);
  });

  it.each([
    ['a foreign type', { ...validMessage, type: 'other:type' }],
    ['an unknown variant', { ...validMessage, variant: 'external-script' }],
    ['a missing link', { ...validMessage, externalLink: '' }],
    ['a non-string link', { ...validMessage, externalLink: 42 }],
    ['a string payload', 'fcc:preview:alert'],
    ['null', null],
    ['undefined', undefined]
  ])('rejects %s', (_label, payload) => {
    expect(parsePreviewAlert(payload)).toBeNull();
  });
});

describe('createPreviewAlertListener', () => {
  const contentWindow = {} as Window;
  const frame = { contentWindow };

  it('forwards an alert sent by its own frame', () => {
    const showAlert = vi.fn();
    const listener = createPreviewAlertListener({ frame, showAlert });

    listener({
      source: contentWindow,
      data: validMessage
    });

    expect(showAlert).toHaveBeenCalledWith(validMessage);
  });

  it('ignores an alert from a foreign sender', () => {
    const showAlert = vi.fn();
    const listener = createPreviewAlertListener({ frame, showAlert });

    listener({ source: {} as Window, data: validMessage });

    expect(showAlert).not.toHaveBeenCalled();
  });

  it('ignores a message its own frame did not shape correctly', () => {
    const showAlert = vi.fn();
    const listener = createPreviewAlertListener({ frame, showAlert });

    listener({
      source: contentWindow,
      data: { type: 'other:type' }
    });

    expect(showAlert).not.toHaveBeenCalled();
  });

  it('ignores every message when the frame has no content window', () => {
    const showAlert = vi.fn();
    const listener = createPreviewAlertListener({
      frame: { contentWindow: null },
      showAlert
    });

    listener({ source: null, data: validMessage });

    expect(showAlert).not.toHaveBeenCalled();
  });
});
