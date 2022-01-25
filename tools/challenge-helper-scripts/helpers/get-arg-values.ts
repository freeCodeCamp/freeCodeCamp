// Creates an object with the values starting at the third position of argv,
// ['lorem', 'ipsum', 'one=1', 'two=2', ...] => { one: 1, two: 2, ...}
function getArgValues(argv: string[] = []): Record<string, string> {
  return argv.slice(2).reduce((argsObj, arg) => {
    const [argument, value] = arg.replace(/\s/g, '').split('=');

    if (!argument || !value) {
      throw `Invalid argument/value specified: ${arg}`;
    }

    return { ...argsObj, [argument]: value };
  }, {});
}

export { getArgValues };
