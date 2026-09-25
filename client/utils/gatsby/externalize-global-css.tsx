import React from 'react';

export const externalizeGlobalCss = (
  headComponents: React.ReactNode[]
): React.ReactNode[] =>
  headComponents.map(component => {
    if (!React.isValidElement(component)) {
      return component;
    }

    const href = component.props['data-href'];
    const identity = component.props['data-identity'];

    if (identity !== 'gatsby-global-css' || typeof href !== 'string') {
      return component;
    }

    // Gatsby inlines the complete global stylesheet into every generated page.
    // Linking it avoids duplicating the same CSS across thousands of pages.
    return <link href={href} key={component.key} rel='stylesheet' />;
  });
