function dasherize(name: string): string {
  return ('' + name)
    .toLowerCase()
    .trim()
    .replace(/\s|\./g, '-')
    .replace(/[^a-z\d\-.]/g, '');
}

function nameify(str: string): string {
  return ('' + str).replace(/[^a-z\d\s]/gi, '');
}

function unDasherize(name: string): string {
  return (
    ('' + name)
      // replace dash with space
      .replace(/-/g, ' ')
      // strip nonalphanumarics chars except whitespace
      .replace(/[^a-z\d\s]/gi, '')
      .trim()
  );
}

export { dasherize, nameify, unDasherize };
