export function createTypes(types = [], ns = 'annon') {
  return types.reduce(
    (types, action) => ({
      ...types,
      [action]: `${ns}.${action}`
    }),
    {}
  );
}

export const createAsyncTypes = action => [
  `${action}`,
  `${action}Complete`,
  `${action}Error`
];
