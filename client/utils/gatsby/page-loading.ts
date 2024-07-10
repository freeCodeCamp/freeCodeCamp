// Gatsby's Link component has the following features:
// - When a Link component is in the viewport, Gatsby starts a low-priority request for the linked page's resources
// - When a Link component is hovered, Gatsby starts a high-priority request for the linked page's resources
//
// These functions are to mimic those behaviors to help cover cases
// where we want to preload a page but we don't show the link of the page on the screen.
//
// Refs:
// - https://v3.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/#link-drives-gatsbys-fast-page-navigation
// - https://github.com/gatsbyjs/gatsby/discussions/20568#discussioncomment-104944

// Ref: https://github.com/gatsbyjs/gatsby/blob/721e9d1cf4a53604cddb7901003046bd3649836c/packages/gatsby-link/src/index.js#L74-L79
export const lowPriorityPreload = (path: string | null) => {
  if (!window.___loader) return;

  if (path) {
    window.___loader.enqueue(path);
  }
};

// Ref: https://github.com/gatsbyjs/gatsby/blob/721e9d1cf4a53604cddb7901003046bd3649836c/packages/gatsby-link/src/index.js#L150-L155
export const highPriorityPreload = (path: string | null) => {
  if (!window.___loader) return;

  if (path) {
    window.___loader.hovering(path);
  }
};
