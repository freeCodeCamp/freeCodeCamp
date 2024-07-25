declare global {
  interface Window {
    // This is a feature Gatsby adds to the `window` object.
    // https://github.com/gatsbyjs/gatsby/blob/deb41cdfefbefe0c170b5dd7c10a19ba2b338f6e/packages/gatsby/cache-dir/production-app.js#L28
    ___loader: {
      hovering: (path: string | null) => void;
    };
  }
}

export {};
