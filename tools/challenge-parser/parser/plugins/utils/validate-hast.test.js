import { describe, it, expect } from 'vitest';
import rehypeParse from 'rehype-parse';
import unified from 'unified';
import validateHAST from './validate-hast';

const processor = unified().use(rehypeParse, { fragment: true });

describe('validateHAST', () => {
  it('should throw errors for disallowed content', () => {
    const disallowedCases = [
      {
        html: '<script>alert("xss")</script>',
        error: /Disallowed tag: <script>/
      },
      {
        html: '<style>body { background: red; }</style>',
        error: /Disallowed tag: <style>/
      },
      {
        html: '<div onclick="alert(1)">Content</div>',
        error: /Disallowed attribute "onclick" on <div>/
      }
    ];

    disallowedCases.forEach(({ html, error }) => {
      const tree = processor.parse(html);
      expect(() => validateHAST(tree)).toThrow(error);
    });
  });

  it('should allow valid HTML content', () => {
    const allowedCases = [
      '<kbd>Ctrl</kbd><del>deleted</del><sub>subscript</sub><sup>superscript</sup>',
      '<iframe src="https://example.com" title="Example" width="100"></iframe>',
      '<iframe src="https://example.com" title="Test" allowfullscreen loading="lazy"></iframe>',
      '<img src="test.jpg" alt="Test" width="100" />',
      '<div class="test-class">Content</div>',
      '<p>Paragraph</p><strong>Strong</strong><em>Emphasis</em><ul><li>Item</li></ul><a href="http://example.com">Link</a>',
      '<a href="https://example.com" target="_blank" rel="noopener noreferrer nofollow">Link with rel</a>',
      '<div style="color: red;">Styled div</div>',
      '<p style="font-size: 16px;">Styled paragraph</p>',
      '<table><tr><th align="center">Header</th></tr><tr><td align="left">Data</td></tr></table>'
    ];

    allowedCases.forEach(html => {
      const tree = processor.parse(html);
      expect(() => validateHAST(tree)).not.toThrow();
    });
  });
});
