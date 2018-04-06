export function createTypes(types, ns) {
  return types.reduce(
    (types, action) => ({
      ...types,
      [action]: `${ns}.${action}`
    }),
    {}
  );
}
