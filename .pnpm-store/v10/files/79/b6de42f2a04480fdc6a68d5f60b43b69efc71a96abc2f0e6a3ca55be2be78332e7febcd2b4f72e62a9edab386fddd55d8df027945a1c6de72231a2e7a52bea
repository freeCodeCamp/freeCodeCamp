// Since gatsby-plugin-mdx v4, we are using the resourceQuery feature
// of webpack's loaders to inject a content file into a page component.
// These helper functions are used to simplify working with these new
// page component path URI's.

const CONTENT_FILE_PATH_QUERY = `?__contentFilePath=`;

// Split the path component URI without using the expensive URI.parse()
export const splitComponentPath = componentPath => {
  // If the path does not include the contentFilePath query, we can assume its a regular path
  if (!componentPath.includes(CONTENT_FILE_PATH_QUERY)) {
    return [componentPath];
  }
  const cleanedComponentPath = componentPath.replace(/&export=(default|head)$/, ``);
  const splitPath = cleanedComponentPath.split(CONTENT_FILE_PATH_QUERY);

  // We only support URI paths with the `?__contentFilePath=` parameter
  if (splitPath.length !== 2) {
    throw new Error(`The following page component must contain '${CONTENT_FILE_PATH_QUERY}':\n${cleanedComponentPath}`);
  }
  return splitPath;
};

// Get the path to the actual js page component
export const getPathToLayoutComponent = componentPath => splitComponentPath(componentPath)[0];

// Get the path to the content file, falling back to the js component if no content file is given.
// Pages directly created from `.mdx` files
export const getPathToContentComponent = componentPath => {
  const splitPath = splitComponentPath(componentPath);
  if (splitPath.length === 1) {
    return splitPath[0];
  }
  return splitPath[1];
};