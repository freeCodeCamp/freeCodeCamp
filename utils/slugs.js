exports.dasherize = function dasherize(name) {
  return ('' + name)
    .toLowerCase()
    .replace(/\s/g, '-')
    .replace(/[^a-z0-9\-.]/gi, '');
};

exports.nameify = function nameify(str) {
  return ('' + str).replace(/[^a-zA-Z0-9\s]/g, '');
};

exports.unDasherize = function unDasherize(name) {
  return (
    ('' + name)
      // replace dash with space
      .replace(/-/g, ' ')
      // strip nonalphanumarics chars except whitespace
      .replace(/[^a-zA-Z\d\s]/g, '')
      .trim()
  );
};
