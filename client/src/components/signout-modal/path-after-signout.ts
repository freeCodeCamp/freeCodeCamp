export const pathAfterSignout = (currentPath: string): string => {
  // These pages try to sign in the user automatically if they are signed out,
  // so, to respect the user's intention to sign out, we redirect them to /learn
  // instead.
  const redirectedPaths = ['/settings', '/update-email'];
  const allPaths = [
    ...redirectedPaths,
    ...redirectedPaths.map(path => `${path}/`)
  ];

  return allPaths.some(path => currentPath === path) ? '/learn' : currentPath;
};
