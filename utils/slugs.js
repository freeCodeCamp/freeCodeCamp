exports.dasherize = function dasherize(name) {
  return ('' + name)
    .toLowerCase()
    .trim()
    .replace(/\s|\./g, '-')
    .replace(/[^a-z\d\-.]/g, '');
};

exports.nameify = function nameify(str) {
  return ('' + str).replace(/[^a-z\d\s]/gi, '');
};

exports.unDasherize = function unDasherize(name) {
  return (
    ('' + name)
      // replace dash with space
      .replace(/-/g, ' ')
      // strip nonalphanumarics chars except whitespace
      .replace(/[^a-z\d\s]/gi, '')
      .trim()
  );
};
