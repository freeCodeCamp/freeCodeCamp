export default function getWindowHeight() {
  try {
    const win = typeof window !== 'undefined' ?
      window :
      null;
    if (!win) {
      return 0;
    }
    const docElement = win.document.documentElement;
    const body = win.document.getElementsByTagName('body')[0];
    return win.innerHeight ||
      docElement.clientHeight ||
      body.clientHeight ||
      0;
  } catch (e) {
    return 0;
  }
}
