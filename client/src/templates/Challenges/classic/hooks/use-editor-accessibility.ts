import { useCallback } from 'react';
import store from 'store';
import { useTranslation } from 'react-i18next';
import type { editor } from 'monaco-editor/esm/vs/editor/editor.api';

interface UseEditorAccessibilityReturn {
  ariaAlert: (message: string) => void;
  toggleAriaRoledescription: () => void;
  setAriaRoledescription: (value: boolean) => void;
  getStoredAriaRoledescription: () => boolean;
  storedAccessibilityMode: (editor: editor.IStandaloneCodeEditor, ariaEditorName: string) => boolean;
}

export const useEditorAccessibility = (): UseEditorAccessibilityReturn => {
  const { t } = useTranslation();

  // Borrowed from
  // freeCodeCamp/node_modules/monaco-editor/esm/vs/base/browser/ui/aria/aria.js
  // Uses the aria live region provided by monaco.
  const ariaAlert = useCallback((message: string) => {
    const ariaLive: NodeListOf<HTMLDivElement> =
      document.querySelectorAll('.monaco-alert');
    if (ariaLive.length > 0) {
      const liveText = ariaLive[0];
      liveText.textContent = message;
      // Hack used by monaco to force older browsers to announce the update to
      // the live region.
      // See https://www.tpgi.com/html5-accessibility-chops-aria-rolealert-browser-support/
      liveText.style.visibility = 'hidden';
      liveText.style.visibility = 'visible';
      // Need to remove message after a few seconds so screen readers don't
      // run into it.
      // First, track the latest message so it is shown for the full duration.
      const time = `t${Date.now()}`;
      liveText.dataset.timestamp = time;
      setTimeout(function () {
        // Now, only the latest message will have this timestamp.
        if (liveText.dataset.timestamp === time) {
          liveText.textContent = '';
        }
      }, 3000);
    }
  }, []);

  const setAriaRoledescription = useCallback((value: boolean) => {
    const textareas = document.querySelectorAll('.monaco-editor textarea');
    textareas.forEach(textarea => {
      if (value) {
        textarea.setAttribute('aria-roledescription', 'editor');
      } else {
        textarea.removeAttribute('aria-roledescription');
      }
    });
    store.set('ariaRoledescription', value);
  }, []);

  const getStoredAriaRoledescription = useCallback(
    () => !!(store.get('ariaRoledescription') ?? true),
    []
  );

  const toggleAriaRoledescription = useCallback(() => {
    const newRoledescription = !getStoredAriaRoledescription();
    setAriaRoledescription(newRoledescription);
    ariaAlert(
      `aria-roledescription has been turned ${
        newRoledescription ? 'on' : 'off'
      }`
    );
  }, [ariaAlert, getStoredAriaRoledescription, setAriaRoledescription]);

  const storedAccessibilityMode = useCallback(
    (editor: editor.IStandaloneCodeEditor, ariaEditorName: string) => {
      const accessibility = store.get('accessibilityMode') as boolean;

      const isMacOS = navigator.userAgent.includes('Mac OS');
      const a11yOffText = isMacOS
        ? t('aria.editor-a11y-off-macos', { editorName: ariaEditorName })
        : t('aria.editor-a11y-off-non-macos', { editorName: ariaEditorName });
      const a11yOnText = isMacOS
        ? t('aria.editor-a11y-on-macos', { editorName: ariaEditorName })
        : t('aria.editor-a11y-on-non-macos', { editorName: ariaEditorName });

      if (!accessibility) {
        store.set('accessibilityMode', false);

        editor.updateOptions({
          ariaLabel: a11yOffText
        });
      }

      if (accessibility) {
        editor.updateOptions({
          ariaLabel: a11yOnText
        });
      }

      return accessibility;
    },
    [t]
  );

  return {
    ariaAlert,
    toggleAriaRoledescription,
    setAriaRoledescription,
    getStoredAriaRoledescription,
    storedAccessibilityMode
  };
};
