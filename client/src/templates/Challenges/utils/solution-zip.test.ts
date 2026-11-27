import { describe, expect, it } from 'vitest';
import { getSolutionZipEntries, linkSolutionFiles } from './solution-zip';

const html = `<!DOCTYPE html>
<html>
  <head>
    <title>Test</title>
  </head>
  <body>
    <h1>Hello</h1>
  </body>
</html>`;

describe('getSolutionZipEntries', () => {
  it('splits the solution into separately named files', () => {
    const entries = getSolutionZipEntries([
      { name: 'index', ext: 'html', contents: html },
      { name: 'styles', ext: 'css', contents: 'h1 { color: red; }' },
      { name: 'script', ext: 'js', contents: 'console.log(1);' }
    ]);

    expect(entries.map(entry => entry.path)).toEqual([
      'index.html',
      'styles.css',
      'script.js'
    ]);
    expect(entries[1].contents).toBe('h1 { color: red; }');
    expect(entries[2].contents).toBe('console.log(1);');
  });

  it('links the stylesheet and script from the HTML file', () => {
    const [index] = getSolutionZipEntries([
      { name: 'index', ext: 'html', contents: html },
      { name: 'styles', ext: 'css', contents: '' },
      { name: 'script', ext: 'js', contents: '' }
    ]);

    expect(index.contents).toContain(
      '<link rel="stylesheet" href="styles.css" />\n  </head>'
    );
    expect(index.contents).toContain(
      '<script src="script.js"></script>\n  </body>'
    );
  });

  it('leaves files that are not HTML unchanged', () => {
    const entries = getSolutionZipEntries([
      { name: 'script', ext: 'js', contents: 'const a = 1;' }
    ]);
    expect(entries).toEqual([{ path: 'script.js', contents: 'const a = 1;' }]);
  });
});

describe('linkSolutionFiles', () => {
  it('does not add links that are already there', () => {
    const linked = html
      .replace(
        '</head>',
        '<link rel="stylesheet" href="./styles.css">\n  </head>'
      )
      .replace('</body>', "<script src='script.js'></script>\n  </body>");

    expect(
      linkSolutionFiles(linked, {
        styles: ['styles.css'],
        scripts: ['script.js']
      })
    ).toBe(linked);
  });

  it('appends tags when the HTML has no head or body', () => {
    expect(
      linkSolutionFiles('<h1>Hi</h1>', {
        styles: ['styles.css'],
        scripts: ['script.js']
      })
    ).toBe(
      '<h1>Hi</h1>\n  <link rel="stylesheet" href="styles.css" />\n  <script src="script.js"></script>'
    );
  });
});
