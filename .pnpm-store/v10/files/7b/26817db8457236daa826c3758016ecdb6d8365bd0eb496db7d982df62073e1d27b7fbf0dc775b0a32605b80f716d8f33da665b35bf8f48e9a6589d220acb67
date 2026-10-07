const TypedArrayPrototypeGetSymbolToStringTag = (() => {
  // Type check system lovingly referenced from:
  // https://github.com/nodejs/node/blob/7450332339ed40481f470df2a3014e2ec355d8d8/lib/internal/util/types.js#L13-L15
  // eslint-disable-next-line @typescript-eslint/unbound-method -- the intention is to call this method with a bound value
  const g = Object.getOwnPropertyDescriptor(
    Object.getPrototypeOf(Uint8Array.prototype),
    Symbol.toStringTag
  )!.get!;

  return (value: unknown) => g.call(value);
})();

export function isUint8Array(value: unknown): value is Uint8Array {
  return TypedArrayPrototypeGetSymbolToStringTag(value) === 'Uint8Array';
}

export function isAnyArrayBuffer(value: unknown): value is ArrayBuffer {
  return (
    typeof value === 'object' &&
    value != null &&
    Symbol.toStringTag in value &&
    (value[Symbol.toStringTag] === 'ArrayBuffer' ||
      value[Symbol.toStringTag] === 'SharedArrayBuffer')
  );
}

export function isRegExp(regexp: unknown): regexp is RegExp {
  return regexp instanceof RegExp || Object.prototype.toString.call(regexp) === '[object RegExp]';
}

export function isMap(value: unknown): value is Map<unknown, unknown> {
  return (
    typeof value === 'object' &&
    value != null &&
    Symbol.toStringTag in value &&
    value[Symbol.toStringTag] === 'Map'
  );
}

export function isDate(date: unknown): date is Date {
  return date instanceof Date || Object.prototype.toString.call(date) === '[object Date]';
}

export type InspectFn = (x: unknown, options?: unknown) => string;
export function defaultInspect(x: unknown, _options?: unknown): string {
  return JSON.stringify(x, (k: string, v: unknown) => {
    if (typeof v === 'bigint') {
      return { $numberLong: `${v}` };
    } else if (isMap(v)) {
      return Object.fromEntries(v);
    }
    return v;
  });
}

/** @internal */
type StylizeFunction = (x: string, style: string) => string;
/** @internal */
export function getStylizeFunction(options?: unknown): StylizeFunction | undefined {
  const stylizeExists =
    options != null &&
    typeof options === 'object' &&
    'stylize' in options &&
    typeof options.stylize === 'function';

  if (stylizeExists) {
    return options.stylize as StylizeFunction;
  }
}
