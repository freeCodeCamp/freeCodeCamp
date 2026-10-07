import { MongoInvalidArgumentError } from './error';

/** @public */
export type SortDirection =
  | 1
  | -1
  | 'asc'
  | 'desc'
  | 'ascending'
  | 'descending'
  | { readonly $meta: string };

/** @public */
export type Sort =
  | string
  | Exclude<SortDirection, { readonly $meta: string }>
  | ReadonlyArray<string>
  | { readonly [key: string]: SortDirection }
  | ReadonlyMap<string, SortDirection>
  | ReadonlyArray<readonly [string, SortDirection]>
  | readonly [string, SortDirection];

/** Below stricter types were created for sort that correspond with type that the cmd takes  */

/** @public */
export type SortDirectionForCmd = 1 | -1 | { $meta: string };

/** @public */
export type SortForCmd = Map<string, SortDirectionForCmd>;

/** @internal */
type SortPairForCmd = [string, SortDirectionForCmd];

/** @internal */
function prepareDirection(direction: any = 1): SortDirectionForCmd {
  const value = `${direction}`.toLowerCase();
  if (isMeta(direction)) return direction;
  switch (value) {
    case 'ascending':
    case 'asc':
    case '1':
      return 1;
    case 'descending':
    case 'desc':
    case '-1':
      return -1;
    default:
      throw new MongoInvalidArgumentError(`Invalid sort direction: ${JSON.stringify(direction)}`);
  }
}

/** @internal */
function isMeta(t: SortDirection): t is { $meta: string } {
  return typeof t === 'object' && t != null && '$meta' in t && typeof t.$meta === 'string';
}

/** @internal */
function isPair(t: Sort): t is readonly [string, SortDirection] {
  if (Array.isArray(t) && t.length === 2) {
    try {
      prepareDirection(t[1]);
      return true;
    } catch {
      return false;
    }
  }
  return false;
}

function isDeep(t: Sort): t is ReadonlyArray<readonly [string, SortDirection]> {
  return Array.isArray(t) && Array.isArray(t[0]);
}

function isMap(t: Sort): t is ReadonlyMap<string, SortDirection> {
  return t instanceof Map && t.size > 0;
}

function isReadonlyArray<T>(value: any): value is readonly T[] {
  return Array.isArray(value);
}

/** @internal */
function pairToMap(v: readonly [string, SortDirection]): SortForCmd {
  return new Map([[`${v[0]}`, prepareDirection([v[1]])]]);
}

/** @internal */
function deepToMap(t: ReadonlyArray<readonly [string, SortDirection]>): SortForCmd {
  const sortEntries: SortPairForCmd[] = t.map(([k, v]) => [`${k}`, prepareDirection(v)]);
  return new Map(sortEntries);
}

/** @internal */
function stringsToMap(t: ReadonlyArray<string>): SortForCmd {
  const sortEntries: SortPairForCmd[] = t.map(key => [`${key}`, 1]);
  return new Map(sortEntries);
}

/** @internal */
function objectToMap(t: { readonly [key: string]: SortDirection }): SortForCmd {
  const sortEntries: SortPairForCmd[] = Object.entries(t).map(([k, v]) => [
    `${k}`,
    prepareDirection(v)
  ]);
  return new Map(sortEntries);
}

/** @internal */
function mapToMap(t: ReadonlyMap<string, SortDirection>): SortForCmd {
  const sortEntries: SortPairForCmd[] = Array.from(t).map(([k, v]) => [
    `${k}`,
    prepareDirection(v)
  ]);
  return new Map(sortEntries);
}

/** converts a Sort type into a type that is valid for the server (SortForCmd) */
export function formatSort(
  sort: Sort | undefined,
  direction?: SortDirection
): SortForCmd | undefined {
  if (sort == null) return undefined;

  if (typeof sort === 'string') return new Map([[sort, prepareDirection(direction)]]); // 'fieldName'

  if (typeof sort !== 'object') {
    throw new MongoInvalidArgumentError(
      `Invalid sort format: ${JSON.stringify(sort)} Sort must be a valid object`
    );
  }

  if (!isReadonlyArray(sort)) {
    if (isMap(sort)) return mapToMap(sort); // Map<fieldName, SortDirection>
    if (Object.keys(sort).length) return objectToMap(sort); // { [fieldName: string]: SortDirection }
    return undefined;
  }
  if (!sort.length) return undefined;
  if (isDeep(sort)) return deepToMap(sort); // [ [fieldName, sortDir], [fieldName, sortDir] ... ]
  if (isPair(sort)) return pairToMap(sort); // [ fieldName, sortDir ]
  return stringsToMap(sort); // [ fieldName, fieldName ]
}
