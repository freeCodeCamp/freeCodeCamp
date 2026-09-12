import React from 'react';
import { describe, expect, test } from 'vitest';

import { externalizeGlobalCss } from './externalize-global-css';

describe('externalizeGlobalCss', () => {
  test('replaces Gatsby global styles with a stylesheet link', () => {
    const globalStyle = (
      <style
        data-href='/styles.css'
        data-identity='gatsby-global-css'
        dangerouslySetInnerHTML={{ __html: '.foo { color: red; }' }}
        key='global-css'
      />
    );
    const meta = <meta content='freeCodeCamp' key='description' />;

    const [stylesheet, unchangedMeta] = externalizeGlobalCss([
      globalStyle,
      meta
    ]);

    expect(stylesheet).toMatchObject({
      key: 'global-css',
      props: {
        href: '/styles.css',
        rel: 'stylesheet'
      },
      type: 'link'
    });
    expect(unchangedMeta).toBe(meta);
  });

  test('does not replace unrelated style elements', () => {
    const style = <style data-href='/styles.css' key='other-css' />;

    const [unchangedStyle] = externalizeGlobalCss([style]);

    expect(unchangedStyle).toBe(style);
  });
});
