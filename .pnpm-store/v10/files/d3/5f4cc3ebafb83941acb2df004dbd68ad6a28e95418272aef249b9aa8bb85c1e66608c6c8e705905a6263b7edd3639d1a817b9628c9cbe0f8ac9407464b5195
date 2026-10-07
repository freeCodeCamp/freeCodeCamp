import { expect } from 'chai';
import { describe, it } from 'mocha';
import * as stringify from 'remark-stringify';
import * as unified from 'unified';
import { Node } from 'unist';
import {
  blockquote,
  brk,
  code,
  emphasis,
  heading,
  html,
  inlineCode,
  link,
  list,
  listItem,
  paragraph,
  root,
  rootWithTitle,
  strike,
  strong,
  table,
  tableCell,
  tableRow,
  text,
  image,
  separator
} from '../src/index';

var processor = unified().use(stringify, {
  bullet: '*',
  fence: '`',
  fences: true,
  incrementListMarker: false
});

function expectMd(root: Node): Chai.Assertion {
  const out = processor.stringify(root);
  return expect(out);
}

describe('acceptance tests', () => {
  it('heading', () => {
    expectMd(heading(1, text('hello'))).to.eq('# hello');
    expectMd(heading(2, text('hello'))).to.eq('## hello');
    expect(() => heading(0, text('hello'))).to.throw('Invalid depth: 0');
  });

  it('normalizing children', () => {
    expectMd(heading(1, () => text('hello'))).to.eq('# hello');
    expectMd(heading(1, [text('hello')])).to.eq('# hello');
    expectMd(heading(1)).to.eq('# ');
  });

  it('root', () => {
    expectMd(root(text('hello'))).to.eq('hello\n');
    expectMd(root(paragraph(text('hello')))).to.eq('hello\n');
    expectMd(root([text('hello'), paragraph(text('world'))])).to.eq(
      'hello\n\nworld\n'
    );
  });

  it('root w/ title', () => {
    expectMd(rootWithTitle(1, text('hello'))).to.eq('# hello\n');
  });

  it('README example', () => {
    expectMd(
      root([
        heading(2, text('Begin')),
        paragraph([
          paragraph(text('these are the starting instructions')),
          brk,
          list('unordered', [
            listItem(text('one')),
            listItem(text('two')),
            listItem(text('three'))
          ])
        ])
      ])
    ).to.eq(`## Begin

these are the starting instructions  
*   one
*   two
*   three
`);
  });

  it('text', () => {
    expectMd(text('foo')).to.eq('foo');
  });

  it('code', () => {
    expectMd(code('json', JSON.stringify({ foo: 'bar' }, null, '  '))).to
      .eq(`\`\`\`json
{
  "foo": "bar"
}
\`\`\``);
  });

  it('html', () => {
    expectMd(html('<img src="http://example.com/picture.png" />')).to.eq(
      '<img src="http://example.com/picture.png" />'
    );
  });

  it('strong', () => {
    expectMd(strong(text('foo'))).to.eq('**foo**');
  });

  it('separator', () => {
    expectMd(
      root([
        heading(1, text('hello')),
        paragraph(text('this is a thing')),
        separator,
        paragraph(text('another thing'))
      ])
    ).to.eq(`# hello

this is a thing

---

another thing
`);
  });

  it('emphasis', () => {
    expectMd(emphasis(text('foo'))).to.eq('_foo_');
  });

  it('strike', () => {
    expectMd(strike(text('foo'))).to.eq('~~foo~~');
  });

  it('blockQuote', () => {
    expectMd(blockquote(text('foo'))).to.eq('> foo');
  });

  it('inlineCode', () => {
    expectMd(inlineCode('foo')).to.eq('`foo`');
  });

  it('link', () => {
    expectMd(link('http://example.com', 'foo', text('Foo'))).to.eq(
      '[Foo](http://example.com "foo")'
    );
  });

  it('image', () => {
    expectMd(image('http://example.com', 'foo', 'Foo')).to.eq(
      '![Foo](http://example.com "foo")'
    );
  });

  it('list', () => {
    expectMd(
      list('ordered', [
        listItem(text('first')),
        listItem(text('second')),
        listItem(text('third'))
      ])
    ).to.eq(`1.  first
1.  second
1.  third`);
    expectMd(
      list('unordered', [
        listItem(text('first')),
        listItem(text('second')),
        listItem(text('third'))
      ])
    ).to.eq(`*   first
*   second
*   third`);
  });

  it('table', () => {
    expectMd(
      table(
        ['left', 'center'],
        [
          tableRow([tableCell(text('foo')), tableCell(text('bar'))]),
          tableRow([tableCell(text('biz')), tableCell(text('baz'))])
        ]
      )
    ).to.eq(`| foo | bar |
| :-- | :-: |
| biz | baz |`);
  });
});
