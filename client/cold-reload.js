import store from 'store';

const key = '__cold-storage__';
export function isColdStored() {
  return store.has(key);
}

export function getColdStorage() {
  const coldReloadData = store.get(key);
  store.remove(key);
  return coldReloadData;
}

export function saveToColdStorage(data) {
  store.set(key, data);
}
