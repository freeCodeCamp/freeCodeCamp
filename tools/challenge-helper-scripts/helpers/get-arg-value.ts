const isIntRE = /^\d+$/;
function getArgValue(argv: string[] = []): number {
  if (argv.length !== 3) throw `only one argument allowed`;
  const value = argv[2];
  const intValue = parseInt(value, 10);
  if (!isIntRE.test(value) || !Number.isInteger(intValue))
    throw `argument must be an integer`;
  return intValue;
}

export { getArgValue };
