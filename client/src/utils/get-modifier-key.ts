import { isMacOS } from './is-mac-os';

type ModifierKey = 'Ctrl' | 'Cmd';

export function getModifierKey(): ModifierKey {
  if (isMacOS()) {
    return 'Cmd';
  }

  return 'Ctrl';
}
