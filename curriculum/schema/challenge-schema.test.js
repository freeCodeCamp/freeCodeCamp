const { readFileSync } = require('fs');
const path = require('path');

describe('challenge schema', () => {
  it('Notify mobile team BEFORE updating snapshot', () => {
    const schemaFile = readFileSync(
      path.resolve(__dirname, './challenge-schema.js'),
      'utf8'
    );

    expect(schemaFile).toMatchSnapshot();
  });
});
