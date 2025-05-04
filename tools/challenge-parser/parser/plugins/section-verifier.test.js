const parseFixture = require('../__fixtures__/parse-fixture');

const sectionVerifier = require('./section-verifier');

describe('section-verifier plugin', () => {
  let noInstructionsAST;

  const plugin = sectionVerifier(['description', 'instructions']);

  beforeAll(async () => {
    noInstructionsAST = await parseFixture('no-instructions.md');
  });

  it('returns a function', () => {
    expect(typeof plugin).toEqual('function');
  });

  it('should throw an error if the instructions section is missing', () => {
    expect(() => plugin(noInstructionsAST)).toThrow(
      `This file must contain a instructions section.`
    );
  });
});
