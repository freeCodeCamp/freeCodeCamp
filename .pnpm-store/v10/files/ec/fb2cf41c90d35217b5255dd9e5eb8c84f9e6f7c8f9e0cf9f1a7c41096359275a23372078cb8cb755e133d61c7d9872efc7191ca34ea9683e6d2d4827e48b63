import path from "path";
export function fixedPagePath(pagePath) {
  return pagePath === `/` ? `index` : pagePath;
}
export function generatePageDataPath(publicDir, pagePath) {
  return path.join(publicDir, `page-data`, fixedPagePath(pagePath), `page-data.json`);
}