import { LocalStorage } from "./localStorage";

interface ObjectQueryMap {
  [indexAndObjectId: string]: [queryId: string, timestamp: number];
}

const STORE = "AlgoliaObjectQueryCache";
const LIMIT = 5000; // 1 entry is typically no more than 100 bytes, so this is ~500kB worth of data - most browsers allow at least 5MB per origin
const FREE = 1000;

function getCache(): ObjectQueryMap {
  return LocalStorage.get(STORE) ?? {};
}
function setCache(objectQueryMap: ObjectQueryMap): void {
  LocalStorage.set(STORE, limited(objectQueryMap));
}

function limited(objectQueryMap: ObjectQueryMap): ObjectQueryMap {
  return Object.keys(objectQueryMap).length > LIMIT
    ? purgeOldest(objectQueryMap)
    : objectQueryMap;
}

function purgeOldest(objectQueryMap: ObjectQueryMap): ObjectQueryMap {
  const sorted = Object.entries(objectQueryMap).sort(
    ([, [, aTimestamp]], [, [, bTimestamp]]) => bTimestamp - aTimestamp
  );

  const newObjectQueryMap = sorted
    .slice(0, sorted.length - FREE - 1)
    .reduce<ObjectQueryMap>(
      (acc, [key, value]) => ({
        ...acc,
        [key]: value
      }),
      {}
    );

  return newObjectQueryMap;
}

function makeKey(index: string, objectID: string): string {
  return `${index}_${objectID}`;
}

export function storeQueryForObject(
  index: string,
  objectID: string,
  queryID: string
): void {
  const objectQueryMap = getCache();

  objectQueryMap[makeKey(index, objectID)] = [queryID, Date.now()];
  setCache(objectQueryMap);
}

export function getQueryForObject(
  index: string,
  objectID: string
): [queryId: string, timestamp: number] | undefined {
  return getCache()[makeKey(index, objectID)];
}

export function removeQueryForObjects(
  index: string,
  objectIDs: string[]
): void {
  const objectQueryMap = getCache();

  objectIDs.forEach((objectID) => {
    delete objectQueryMap[makeKey(index, objectID)];
  });
  setCache(objectQueryMap);
}
