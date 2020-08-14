const { inspect } = require('util');
const path = require('path');

const { parseMDX } = require('../index');

(async () => {
  const fullPath = path.resolve(__dirname, '../__fixtures__/realistic.mdx');
  const output = await parseMDX(fullPath);
  console.log(inspect(output, null, null, true));
})();
