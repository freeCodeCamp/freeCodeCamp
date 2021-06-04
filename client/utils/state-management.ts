export function createTypes(types = [], ns = 'annon'): Record<string, unknown> {
  return types.reduce(
    (types, action: string) => ({
      ...types,
      [action]: `${ns}.${action}`
    }),
    {}
  );
}
