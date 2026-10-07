// @flow
import serializeEffect from '../shared/serializeEffect';

export default function reportActualEffects(
  store: Object,
  storeKey: string,
): string {
  const values = store.values();

  if (values.length === 0) {
    return '';
  }

  const serializedEffects = values.map(
    (effect, i) => `${i + 1}. ${serializeEffect(effect, storeKey)}`,
  );

  return `\nActual:\n------\n${serializedEffects.join('\n')}\n`;
}
