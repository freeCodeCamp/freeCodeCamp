import ownKeys from './ownKeys';

export default function hasGeneratorInterface(handler) {
  const keys = ownKeys(handler);
  const hasOnlyInterfaceNames = keys.every(
    ownKey => ownKey === 'next' || ownKey === 'throw'
  );
  return keys.length && keys.length <= 2 && hasOnlyInterfaceNames;
}
