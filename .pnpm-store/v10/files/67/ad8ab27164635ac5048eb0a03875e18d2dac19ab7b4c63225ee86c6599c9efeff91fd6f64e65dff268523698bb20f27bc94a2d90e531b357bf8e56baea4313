export default function(source, keys, update) {
  keys.split && (keys = keys.split('.'));

  let next = copy(source),
    last = next,
    i = 0,
    l = keys.length;

  for (; i < l; i++) {
    last = last[keys[i]] =
      i === l - 1
        ? update && !!update.call
          ? update(last[keys[i]])
          : update
        : copy(last[keys[i]]);
  }

  return next;
}

function copy(source) {
  let to = source && !!source.pop ? [] : {};
  for (let i in source) to[i] = source[i];
  return to;
}
