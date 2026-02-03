export const patchBlock = (meta: Record<string, unknown>) => {
  const { blockLabel, ...rest } = meta;
  return {
    ...rest,
    blockType: blockLabel
  };
};
