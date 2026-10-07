"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const mocha_1 = require("mocha");
const stringify = require("remark-stringify");
const unified = require("unified");
const index_1 = require("../src/index");
var processor = unified().use(stringify, {
    bullet: '*',
    fence: '`',
    fences: true,
    incrementListMarker: false
});
function expectMd(root) {
    const out = processor.stringify(root);
    return chai_1.expect(out);
}
mocha_1.describe('acceptance tests', () => {
    mocha_1.it('heading', () => {
        expectMd(index_1.heading(1, index_1.text('hello'))).to.eq('# hello');
        expectMd(index_1.heading(2, index_1.text('hello'))).to.eq('## hello');
        chai_1.expect(() => index_1.heading(0, index_1.text('hello'))).to.throw('Invalid depth: 0');
    });
    mocha_1.it('normalizing children', () => {
        expectMd(index_1.heading(1, () => index_1.text('hello'))).to.eq('# hello');
        expectMd(index_1.heading(1, [index_1.text('hello')])).to.eq('# hello');
        expectMd(index_1.heading(1)).to.eq('# ');
    });
    mocha_1.it('root', () => {
        expectMd(index_1.root(index_1.text('hello'))).to.eq('hello\n');
        expectMd(index_1.root(index_1.paragraph(index_1.text('hello')))).to.eq('hello\n');
        expectMd(index_1.root([index_1.text('hello'), index_1.paragraph(index_1.text('world'))])).to.eq('hello\n\nworld\n');
    });
    mocha_1.it('root w/ title', () => {
        expectMd(index_1.rootWithTitle(1, index_1.text('hello'))).to.eq('# hello\n');
    });
    mocha_1.it('README example', () => {
        expectMd(index_1.root([
            index_1.heading(2, index_1.text('Begin')),
            index_1.paragraph([
                index_1.paragraph(index_1.text('these are the starting instructions')),
                index_1.brk,
                index_1.list('unordered', [
                    index_1.listItem(index_1.text('one')),
                    index_1.listItem(index_1.text('two')),
                    index_1.listItem(index_1.text('three'))
                ])
            ])
        ])).to.eq(`## Begin

these are the starting instructions  
*   one
*   two
*   three
`);
    });
    mocha_1.it('text', () => {
        expectMd(index_1.text('foo')).to.eq('foo');
    });
    mocha_1.it('code', () => {
        expectMd(index_1.code('json', JSON.stringify({ foo: 'bar' }, null, '  '))).to
            .eq(`\`\`\`json
{
  "foo": "bar"
}
\`\`\``);
    });
    mocha_1.it('html', () => {
        expectMd(index_1.html('<img src="http://example.com/picture.png" />')).to.eq('<img src="http://example.com/picture.png" />');
    });
    mocha_1.it('strong', () => {
        expectMd(index_1.strong(index_1.text('foo'))).to.eq('**foo**');
    });
    mocha_1.it('separator', () => {
        expectMd(index_1.root([
            index_1.heading(1, index_1.text('hello')),
            index_1.paragraph(index_1.text('this is a thing')),
            index_1.separator,
            index_1.paragraph(index_1.text('another thing'))
        ])).to.eq(`# hello

this is a thing

---

another thing
`);
    });
    mocha_1.it('emphasis', () => {
        expectMd(index_1.emphasis(index_1.text('foo'))).to.eq('_foo_');
    });
    mocha_1.it('strike', () => {
        expectMd(index_1.strike(index_1.text('foo'))).to.eq('~~foo~~');
    });
    mocha_1.it('blockQuote', () => {
        expectMd(index_1.blockquote(index_1.text('foo'))).to.eq('> foo');
    });
    mocha_1.it('inlineCode', () => {
        expectMd(index_1.inlineCode('foo')).to.eq('`foo`');
    });
    mocha_1.it('link', () => {
        expectMd(index_1.link('http://example.com', 'foo', index_1.text('Foo'))).to.eq('[Foo](http://example.com "foo")');
    });
    mocha_1.it('image', () => {
        expectMd(index_1.image('http://example.com', 'foo', 'Foo')).to.eq('![Foo](http://example.com "foo")');
    });
    mocha_1.it('list', () => {
        expectMd(index_1.list('ordered', [
            index_1.listItem(index_1.text('first')),
            index_1.listItem(index_1.text('second')),
            index_1.listItem(index_1.text('third'))
        ])).to.eq(`1.  first
1.  second
1.  third`);
        expectMd(index_1.list('unordered', [
            index_1.listItem(index_1.text('first')),
            index_1.listItem(index_1.text('second')),
            index_1.listItem(index_1.text('third'))
        ])).to.eq(`*   first
*   second
*   third`);
    });
    mocha_1.it('table', () => {
        expectMd(index_1.table(['left', 'center'], [
            index_1.tableRow([index_1.tableCell(index_1.text('foo')), index_1.tableCell(index_1.text('bar'))]),
            index_1.tableRow([index_1.tableCell(index_1.text('biz')), index_1.tableCell(index_1.text('baz'))])
        ])).to.eq(`| foo | bar |
| :-- | :-: |
| biz | baz |`);
    });
});
//# sourceMappingURL=acceptance.test.js.map