/**
 * The function is useful in cases where we want to preload a page
 * but the link of the page isn't rendered on the screen.
 * For more details, see https://github.com/freeCodeCamp/freeCodeCamp/pull/55472.
 */
export const preloadPage = (path: string | null) => {
  if (!window.___loader || !path) return;

  window.___loader.hovering(path);
};
