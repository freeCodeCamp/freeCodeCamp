const path = require('path');

const { parseMD } = require('.');

describe('challenge parser', () => {
  it('should parse a simple md file', async () => {
    const parsed = await parseMD(
      path.resolve(__dirname, '__fixtures__/simple.md')
    );
    expect(parsed).toMatchSnapshot();
  });

  it('should parse a more realistic md file', async () => {
    const parsed = await parseMD(
      path.resolve(__dirname, '__fixtures__/realistic.md')
    );
    expect(parsed).toMatchSnapshot();
  });

  it('should import md from other files', async () => {
    const parsed = await parseMD(
      path.resolve(__dirname, '__fixtures__/with-imports.md')
    );
    expect(parsed).toMatchSnapshot();
  });

  it('should parse frontmatter', async () => {
    const parsed = await parseMD(
      path.resolve(__dirname, '__fixtures__/with-frontmatter.md')
    );
    expect(parsed).toMatchSnapshot();
  });

  it('should parse gfm strikethrough and frontmatter', async () => {
    const parsed = await parseMD(
      path.resolve(__dirname, '__fixtures__/with-gfm.md')
    );
    expect(parsed).toMatchSnapshot();
  });

  it('should not mix other YAML with the frontmatter', async () => {
    const parsed = await parseMD(
      path.resolve(__dirname, '__fixtures__/with-yaml.md')
    );
    expect(parsed).toMatchSnapshot();
  });

  it('it should parse video questions', async () => {
    const parsed = await parseMD(
      path.resolve(__dirname, '__fixtures__/with-video-question.md')
    );
    expect(parsed).toMatchSnapshot();
  });

  it('it should not parse directives we do not use', async () => {
    const parsed = await parseMD(
      path.resolve(__dirname, '__fixtures__/with-directives.md')
    );
    expect(parsed).toMatchSnapshot();
  });
});
