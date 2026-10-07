function con(n) {
  return 0x80 | (n & 0x3f);
}

export function encode(str) {
  const arr = str.split("").map((x) => x.charCodeAt(0));
  return _encode(arr);
}

function _encode(arr) {
  if (arr.length === 0) {
    return [];
  }

  const [n, ...ns] = arr;

  if (n < 0) {
    throw new Error("utf8");
  }

  if (n < 0x80) {
    return [n, ..._encode(ns)];
  }

  if (n < 0x800) {
    return [0xc0 | (n >>> 6), con(n), ..._encode(ns)];
  }

  if (n < 0x10000) {
    return [0xe0 | (n >>> 12), con(n >>> 6), con(n), ..._encode(ns)];
  }

  if (n < 0x110000) {
    return [
      0xf0 | (n >>> 18),
      con(n >>> 12),
      con(n >>> 6),
      con(n),
      ..._encode(ns),
    ];
  }

  throw new Error("utf8");
}
