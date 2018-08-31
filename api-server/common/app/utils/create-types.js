// createTypes(types: String[], prefix: String) => Object
export default function createTypes(types = [], prefix = '') {
  if (!Array.isArray(types) || typeof prefix !== 'string') {
    return {};
  }
  return types.reduce((types, type) => {
    types[type] = prefix + '.' + type;
    return types;
  }, {});
}
