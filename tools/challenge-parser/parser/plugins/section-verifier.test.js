const remark = require('remark');
const plugin = require('./section-verifier');

function processMarkdown(md, challengeType) {
  return remark()
    .use(plugin)
    .processSync({ contents: md, data: { challengeType } });
}

describe('section-verifier', () => {
  it('throws for missing --instructions-- in HTML (type 0)', () => {
    const md = `# --description--\n\nHello`;
    expect(() => processMarkdown(md, 0)).toThrow(/--instructions--/);
  });

  it('throws for missing --question-- in Multiple Choice (type 2)', () => {
    const md = `# --description--\n\n# --answers--\n- A\n- B`;
    expect(() => processMarkdown(md, 2)).toThrow(/--question--/);
  });

  it('throws for missing --transcript-- in Audio (type 7)', () => {
    const md = `# --description--\n\n# --question--\nWhat?`;
    expect(() => processMarkdown(md, 7)).toThrow(/--transcript--/);
  });

  it('passes for complete HTML (type 0)', () => {
    const md = `
# --description--

# --instructions--

# --hints--

# --seed--

## --seed-contents--

\`\`\`html
<p>Hi</p>
\`\`\`
`;
    expect(() => processMarkdown(md, 0)).not.toThrow();
  });
});
