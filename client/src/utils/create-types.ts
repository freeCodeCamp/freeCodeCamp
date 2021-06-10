type CreateTypesType = {
  [action: string]: string;
};

export function createTypes(
  types: string[] = [],
  ns = 'annon'
): CreateTypesType {
  return types.reduce(
    (types, action: string) => ({
      ...types,
      [action]: `${ns}.${action}`
    }),
    {}
  );
}

export const createAsyncTypes = (action: string): string[] => [
  `${action}`,
  `${action}Complete`,
  `${action}Error`
];
