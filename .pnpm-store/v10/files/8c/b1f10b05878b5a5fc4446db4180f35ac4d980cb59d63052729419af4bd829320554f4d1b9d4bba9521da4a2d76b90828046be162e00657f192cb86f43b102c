const deprecate = require('./deprecate.js');

const v1 = require('./dist/v1.js');

module.exports = deprecate(
  v1,
  "Deep requiring like `const uuidv1 = require('uuid/v1');` is deprecated as of uuid@7.x. Please require the top-level module when using the Node.js CommonJS module or use ECMAScript Modules when bundling for the browser. See https://github.com/uuidjs/uuid#deep-requires-now-deprecated for more information.",
);
