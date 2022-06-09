export function isMacOS(): boolean {
  if (typeof window?.navigator?.platform === 'string') {
    return window.navigator.platform.startsWith('Mac');
  }

  // Fallback to non-macOS always.
  return false;
}
