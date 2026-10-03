export const previewAlertMessageType = 'fcc:preview:alert';

export type PreviewAlertVariant = 'external-link' | 'external-form';

export interface PreviewAlertMessage {
  type: typeof previewAlertMessageType;
  variant: PreviewAlertVariant;
  externalLink: string;
}

const alertVariants: readonly string[] = ['external-link', 'external-form'];

export const alertKeyByVariant: Record<PreviewAlertVariant, string> = {
  'external-link': 'misc.iframe-alert',
  'external-form': 'misc.iframe-form-submit-alert'
};

export const parsePreviewAlert = (
  data: unknown
): PreviewAlertMessage | null => {
  if (typeof data !== 'object' || data === null) return null;

  const { type, variant, externalLink } = data as Record<string, unknown>;

  if (type !== previewAlertMessageType) return null;
  if (typeof variant !== 'string' || !alertVariants.includes(variant)) {
    return null;
  }
  if (typeof externalLink !== 'string' || externalLink === '') return null;

  return {
    type: previewAlertMessageType,
    variant: variant as PreviewAlertVariant,
    externalLink
  };
};

export const createPreviewAlertListener =
  ({
    frame,
    showAlert
  }: {
    frame: Pick<HTMLIFrameElement, 'contentWindow'>;
    showAlert: (message: PreviewAlertMessage) => void;
  }) =>
  (event: Pick<MessageEvent, 'source' | 'data'>): void => {
    if (!frame.contentWindow || event.source !== frame.contentWindow) return;

    const message = parsePreviewAlert(event.data);
    if (!message) return;

    showAlert(message);
  };
