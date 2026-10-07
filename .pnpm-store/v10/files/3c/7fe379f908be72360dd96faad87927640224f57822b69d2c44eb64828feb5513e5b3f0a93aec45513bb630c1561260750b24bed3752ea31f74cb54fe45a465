import path from "path";
import importFrom from "import-from";
import resolveFrom from "resolve-from";
export function getLmdb() {
  // Try to use lmdb from gatsby if not we use our own version
  try {
    const gatsbyPkgRoot = path.dirname(resolveFrom(process.cwd(), `gatsby/package.json`));
    return importFrom(gatsbyPkgRoot, `lmdb`);
  } catch (err) {
    return require(`lmdb`);
  }
}