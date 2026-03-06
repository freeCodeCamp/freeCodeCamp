// @vitest-environment jsdom
import { describe, expect, test } from 'vitest';

import {
  buildReviewOutlineItems,
  createAnchorId,
  reviewHeadingSelector
} from './review-outline';

describe('review-outline', () => {
  test('createAnchorId should normalize heading text', () => {
    expect(createAnchorId('  HTML Basics!  ')).toBe('html-basics');
    expect(createAnchorId('A11y & SEO')).toBe('a11y-seo');
  });

  test('buildReviewOutlineItems should include h2/h3 headings and assign ids', () => {
    const root = document.createElement('div');
    root.innerHTML = `
      <h2>HTML Basics</h2>
      <h3>Semantic Elements</h3>
      <h2>HTML Basics</h2>
      <h3 id="existing-id">With Existing Id</h3>
      <h2>   </h2>
    `;

    const headingElements = Array.from(
      root.querySelectorAll<HTMLHeadingElement>(reviewHeadingSelector)
    );

    const items = buildReviewOutlineItems(headingElements);

    expect(items).toEqual([
      { id: 'html-basics', level: 2, text: 'HTML Basics' },
      { id: 'semantic-elements', level: 3, text: 'Semantic Elements' },
      { id: 'html-basics-2', level: 2, text: 'HTML Basics' },
      { id: 'existing-id', level: 3, text: 'With Existing Id' }
    ]);

    expect(headingElements[0]?.id).toBe('html-basics');
    expect(headingElements[1]?.id).toBe('semantic-elements');
    expect(headingElements[2]?.id).toBe('html-basics-2');
    expect(headingElements[3]?.id).toBe('existing-id');
  });

  test('buildReviewOutlineItems should ignore headings outside h2/h3', () => {
    const root = document.createElement('div');
    root.innerHTML = `
      <h1>Page Title</h1>
      <h2>Section One</h2>
      <h4>Ignored Subsection</h4>
      <h3>Section One Details</h3>
    `;

    const headingElements = Array.from(
      root.querySelectorAll<HTMLHeadingElement>(reviewHeadingSelector)
    );
    const items = buildReviewOutlineItems(headingElements);

    expect(items).toEqual([
      { id: 'section-one', level: 2, text: 'Section One' },
      { id: 'section-one-details', level: 3, text: 'Section One Details' }
    ]);
  });
});
