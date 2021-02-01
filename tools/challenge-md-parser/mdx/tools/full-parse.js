const { inspect } = require('util');
const path = require('path');

const { parsemd } = require('../index');

(async () => {
  const fullPath = path.resolve(__dirname, '../__fixtures__/realistic.md');
  const output = await parsemd(fullPath);
  console.log(inspect(output, null, null, true));
})();
