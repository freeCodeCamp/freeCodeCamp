const path = require('path');

const lint = require('.');

describe('markdown linter', () => {
  let good = { path: path.join(__dirname, './fixtures/good.md') };
  let badYML = { path: path.join(__dirname, './fixtures/badYML.md') };
  let badFencing = { path: path.join(__dirname, './fixtures/badFencing.md') };
  beforeEach(() => {
    console.log = jest.fn();
    // the linter signals that a file failed by setting
    // exitCode to 1, so it needs (re)setting to 0
    process.exitCode = 0;
  });
  afterEach(() => {
    process.exitCode = 0;
  });

  it('should pass `good` markdown', done => {
    function callback() {
      expect(process.exitCode).toBe(0);
      done();
    }
    lint(good, callback);
  });

  it('should fail invalid YML blocks', done => {
    function callback() {
      expect(process.exitCode).toBe(1);
      done();
    }
    lint(badYML, callback);
  });

  it('should fail when code fences are not surrounded by newlines', done => {
    function callback() {
      expect(process.exitCode).toBe(1);
      done();
    }
    lint(badFencing, callback);
  });

  it('should write to the console describing the problem', done => {
    function callback() {
      const expected =
        // eslint-disable-next-line max-len
        'badYML.md: 19: yaml-linter YAML code blocks should be valid [bad indentation of a mapping entry at line 3, column 17:\n          testString: testString\n                    ^] [Context: "```yml"]';
      expect(console.log.mock.calls.length).toBe(1);
      expect(console.log.mock.calls[0][0]).toEqual(
        expect.stringContaining(expected)
      );
      done();
    }
    lint(badYML, callback);
  });
});
