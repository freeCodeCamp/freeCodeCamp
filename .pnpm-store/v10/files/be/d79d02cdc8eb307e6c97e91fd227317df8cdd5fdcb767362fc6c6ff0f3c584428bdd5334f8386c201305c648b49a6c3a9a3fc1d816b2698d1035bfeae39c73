import fs from "fs-extra";
import path from "path";
const checkForHtmlSuffix = pagePath => !/\.(html?)$/i.test(pagePath);
export function generateHtmlPath(dir, outputPath) {
  let outputFileName = outputPath.replace(/^(\/|\\)/, ``); //  Remove leading slashes for webpack-dev-server

  if (checkForHtmlSuffix(outputPath)) {
    outputFileName = path.join(outputFileName, `index.html`);
  }
  return path.join(dir, outputFileName);
}
export async function remove({
  publicDir
}, pagePath) {
  const filePath = generateHtmlPath(publicDir, pagePath);
  if (fs.existsSync(filePath)) {
    return await fs.remove(filePath);
  }
  return Promise.resolve();
}