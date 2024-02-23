// Update given value with markers (labels)
const insertErms = (seedCode: string, erms: number[]): string => {
  if (!erms || erms.length <= 1) {
    throw `erms should be provided`;
  }

  if (erms.length <= 1) {
    throw `erms should contain 2 elements`;
  }

  const separator = '\n';
  const lines = seedCode.split(separator);
  const markerLabel = '--fcc-editable-region--';

  // Generate a version of seed code with the erm markers
  const newSeedCode = erms
    .slice(0, 2)
    .reduce((acc, erm) => {
      if (Number.isInteger(erm)) {
        acc.splice(erm, 0, markerLabel);
      }

      return acc;
    }, lines)
    .join(separator);

  return newSeedCode;
};

export { insertErms };
