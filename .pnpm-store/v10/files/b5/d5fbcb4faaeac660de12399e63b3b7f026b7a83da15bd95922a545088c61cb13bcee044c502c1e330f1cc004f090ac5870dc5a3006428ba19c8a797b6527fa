import * as editor_api from '../editor.api2.js';

function getGlobalMonaco() {
  return editor_api;
}
const monacoEnvironment = globalThis.MonacoEnvironment;
if (monacoEnvironment?.globalAPI) {
  globalThis.monaco = getGlobalMonaco();
}

export { getGlobalMonaco };
