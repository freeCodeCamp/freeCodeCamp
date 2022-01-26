const dasherize = function dasherize(name: string): string {
  return ('' + name)
    .toLowerCase()
    .trim()
    .replace(/\s|\./g, '-')
    .replace(/[^a-z\d\-.]/g, '');
};

const nameify = function nameify(str: string): string {
  return ('' + str).replace(/[^a-z\d\s]/gi, '');
};

const unDasherize = function unDasherize(name: string): string {
  return (
    ('' + name)
      // replace dash with space
      .replace(/-/g, ' ')
      // strip nonalphanumarics chars except whitespace
      .replace(/[^a-z\d\s]/gi, '')
      .trim()
  );
};

export default {
  dasherize,
  nameify,
  unDasherize
};
