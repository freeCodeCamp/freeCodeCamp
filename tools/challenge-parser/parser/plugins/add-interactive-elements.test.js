import { describe, beforeEach, it, expect } from 'vitest';
const parseFixture = require('./../__fixtures__/parse-fixture');
const addInteractiveElements = require('./add-interactive-elements');

describe('add-interactive-editor plugin', () => {
  const plugin = addInteractiveElements();
  let file = { data: {} };

  beforeEach(() => {
    file = { data: {} };
  });

  it('returns a function', () => {
    expect(typeof plugin).toEqual('function');
  });

  it('adds a `nodules` property to `file.data`', async () => {
    const mockAST = await parseFixture('with-interactive.md');
    plugin(mockAST, file);
    expect(file.data).toHaveProperty('nodules');
    expect(Array.isArray(file.data.nodules)).toBe(true);
  });

  it('converts paragraphs to paragraph nodes', async () => {
    const mockAST = await parseFixture('with-interactive.md');
    plugin(mockAST, file);

    expect(file.data.nodules.slice(0, 2)).toEqual([
      {
        type: 'paragraph',
        contents: '<p>Normal markdown</p>'
      },
      {
        type: 'paragraph',
        contents:
          '<pre><code class="language-html">&#x3C;div>This is NOT an interactive element&#x3C;/div>\n</code></pre>'
      }
    ]);
  });

  it('populates `nodules` with editor objects', async () => {
    const mockAST = await parseFixture('with-interactive.md');
    plugin(mockAST, file);
    const editorElements = file.data.nodules.filter(
      element => element.type === 'interactiveEditor'
    );

    expect(editorElements).toEqual([
      {
        type: 'interactiveEditor',
        files: [
          {
            contents: "console.log('Interactive JS');",
            ext: 'js',
            name: 'script-1',
            contentsHtml:
              '<pre><code class="language-js">console.log(\'Interactive JS\');\n</code></pre>'
          }
        ]
      },
      {
        type: 'interactiveEditor',
        files: [
          {
            contents: '<div>This is an interactive element</div>',
            ext: 'html',
            name: 'index-1',
            contentsHtml:
              '<pre><code class="language-html">&#x3C;div>This is an interactive element&#x3C;/div>\n</code></pre>'
          }
        ]
      },
      {
        type: 'interactiveEditor',
        files: [
          {
            contents: '<div>This is an interactive element</div>',
            ext: 'html',
            name: 'index-1',
            contentsHtml:
              '<pre><code class="language-html">&#x3C;div>This is an interactive element&#x3C;/div>\n</code></pre>'
          },
          {
            contents: "console.log('Interactive JS');",
            ext: 'js',
            name: 'script-1',
            contentsHtml:
              '<pre><code class="language-js">console.log(\'Interactive JS\');\n</code></pre>'
          }
        ]
      }
    ]);
  });

  it('provides unique names for each file with the same extension', async () => {
    const mockAST = await parseFixture('with-multiple-js-files.md');
    plugin(mockAST, file);
    const editorElements = file.data.nodules.filter(
      element => element.type === 'interactiveEditor'
    );

    expect(editorElements).toHaveLength(1);

    const { files } = editorElements[0];
    expect(files).toHaveLength(2);

    // Both files should be JavaScript but have unique names
    expect(files[0].ext).toBe('js');
    expect(files[1].ext).toBe('js');
    // TODO: only number if there are multiple files.
    expect(files[0].name).toBe('script-1');
    expect(files[1].name).toBe('script-2');

    // Contents should match
    expect(files[0].contents).toBe("console.log('First JavaScript file');");
    expect(files[1].contents).toBe("console.log('Second JavaScript file');");

    expect(files[0].contentsHtml).toContain('<pre><code class="language-js">');
    expect(files[1].contentsHtml).toContain('<pre><code class="language-js">');
  });

  it('respects the order of elements in the original markdown', async () => {
    const expectedTypes = [
      'paragraph',
      'paragraph',
      'interactiveEditor',
      'interactiveEditor',
      'paragraph',
      'interactiveEditor',
      'paragraph'
    ];

    const mockAST = await parseFixture('with-interactive.md');
    plugin(mockAST, file);
    const elements = file.data.nodules;
    const types = elements.map(element => element.type);

    expect(types).toEqual(expectedTypes);
  });

  it('throws if the interactive_editor directive contains non-code nodes', async () => {
    const mockAST = await parseFixture('with-interactive-non-code.md');
    expect(() => plugin(mockAST, file)).toThrow(
      'The :::interactive_editor should only contain code blocks.'
    );
  });
});
