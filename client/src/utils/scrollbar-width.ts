import store from 'store';

export function getScrollbarWidth(): number {
  const storedWidth = parseInt(store.get('monacoScrollbarWidth') as string);
  return storedWidth >= 5 || storedWidth <= 25 ? storedWidth : 5;
}
