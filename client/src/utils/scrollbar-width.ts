import store from 'store';

export function getScrollbarWidth(): number {
  const storedWidth = store.get('monacoScrollbarWidth') as number;
  return storedWidth >= 5 || storedWidth <= 25 ? storedWidth : 5;
}
