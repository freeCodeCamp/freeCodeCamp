function iterateProps(obj, iterator) {
  Object.keys(obj).forEach((key) => iterator({ ...obj[key], name: key }));
}

function mapProps(obj) {
  return Object.keys(obj).map((key) => ({ ...obj[key], name: key }));
}

function filterProps(obj, filter) {
  const ret = {};
  Object.keys(obj).forEach((key) => {
    if (filter(obj[key])) {
      ret[key] = obj[key];
    }
  });
  return ret;
}

function typeSignature(meta) {
  const type = meta.array ? `Array<${meta.type}>` : meta.type;
  if (meta.optional) {
    return `${meta.name}?: ${type}`;
  } else if (meta.maybe) {
    return `${meta.name}: ?${type}`;
  } else {
    return `${meta.name}: ${type}`;
  }
}

const unique = (items) => Array.from(new Set(items));

module.exports = {
  iterateProps,
  mapProps,
  filterProps,
  typeSignature,
  unique,
};
