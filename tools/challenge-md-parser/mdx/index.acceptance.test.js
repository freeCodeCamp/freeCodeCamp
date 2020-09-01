/* global expect */

const path = require('path');

const { parseMDX } = require('./');

describe('mdx parser', () => {
  it('should parse a simple mdx file', async () => {
    const parsed = await parseMDX(
      path.resolve(__dirname, '__fixtures__/simple.mdx')
    );
    expect(parsed).toMatchSnapshot();
  });

  it('should parse a more realistic mdx file', async () => {
    const parsed = await parseMDX(
      path.resolve(__dirname, '__fixtures__/realistic.mdx')
    );
    expect(parsed).toMatchSnapshot();
  });

  it('should import mdx from other files', async () => {
    const parsed = await parseMDX(
      path.resolve(__dirname, '__fixtures__/with-imports.mdx')
    );
    expect(parsed).toMatchSnapshot();
  });

  it('should parse frontmatter', async () => {
    const parsed = await parseMDX(
      path.resolve(__dirname, '__fixtures__/with-frontmatter.mdx')
    );
    expect(parsed).toMatchSnapshot();
  });

  it('should not mix other YAML with the frontmatter', async () => {
    const parsed = await parseMDX(
      path.resolve(__dirname, '__fixtures__/with-yaml.mdx')
    );
    expect(parsed).toMatchSnapshot();
  });

  it('it should parse video questions', async () => {
    const parsed = await parseMDX(
      path.resolve(__dirname, '__fixtures__/with-video-question.mdx')
    );
    expect(parsed).toMatchSnapshot();
  });
});
