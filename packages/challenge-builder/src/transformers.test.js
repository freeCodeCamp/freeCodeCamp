/**
 * @vitest-environment jsdom
 */

import { describe, expect, it } from 'vitest';
import { embedFilesInHtml } from './transformers.js';

describe('embedFilesInHtml', () => {
  it('should inject a warning for incorrect css file links', async () => {
    const challengeFiles = [
      {
        fileKey: 'indexhtml',
        contents:
          '<!DOCTYPE html><html><head><link href="style.css" rel="stylesheet"></head><body></body></html>'
      }
    ];

    const result = await embedFilesInHtml(challengeFiles);
    expect(result).toContain(
      'console.warn("You have tried to source style.css, but that does not exist. The only file that can be sourced is styles.css.");'
    );
  });

  it('should inject a warning for incorrect js file scripts', async () => {
    const challengeFiles = [
      {
        fileKey: 'indexhtml',
        contents:
          '<!DOCTYPE html><html><head></head><body><script src="scripts.js"></script></body></html>'
      }
    ];

    const result = await embedFilesInHtml(challengeFiles);
    expect(result).toContain(
      'console.warn("You have tried to source scripts.js, but that does not exist. The only file that can be sourced is script.js.");'
    );
  });

  it('should not inject a warning for correct file links', async () => {
    const challengeFiles = [
      {
        fileKey: 'indexhtml',
        contents:
          '<!DOCTYPE html><html><head><link href="styles.css" rel="stylesheet"></head><body><script src="script.js"></script></body></html>'
      },
      {
        fileKey: 'stylescss',
        contents: 'body { color: red; }'
      },
      {
        fileKey: 'scriptjs',
        contents: 'console.log("hello");'
      }
    ];

    const result = await embedFilesInHtml(challengeFiles);
    expect(result).not.toContain('console.warn');
    expect(result).toContain('fcc-injected-styles');
    expect(result).toContain('body { color: red; }');
  });

  it('should not inject a warning for external links', async () => {
    const challengeFiles = [
      {
        fileKey: 'indexhtml',
        contents:
          '<!DOCTYPE html><html><head><link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet"></head><body><script src="https://example.com/script.js"></script></body></html>'
      }
    ];

    const result = await embedFilesInHtml(challengeFiles);
    expect(result).not.toContain('console.warn');
  });
});
