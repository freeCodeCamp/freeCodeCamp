import { createZip, type ZipEntry } from '../../../utils/create-zip';

export interface DownloadableChallengeFile {
  name: string;
  ext: string;
  contents: string;
}

const getFileName = ({ name, ext }: DownloadableChallengeFile) =>
  `${name}.${ext}`;

const escapeRegExp = (value: string) =>
  value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const referencesFile = (html: string, fileName: string) =>
  new RegExp(
    `(?:href|src)\\s*=\\s*["']?(?:\\./)?${escapeRegExp(fileName)}`,
    'i'
  ).test(html);

function insertBefore(html: string, tag: RegExp, snippet: string): string {
  const match = tag.exec(html);
  if (!match) return `${html}\n${snippet}`;
  // Insert on its own line above the tag, keeping the tag's indentation.
  const lineStart = html.lastIndexOf('\n', match.index - 1) + 1;
  const index = /^\s*$/.test(html.slice(lineStart, match.index))
    ? lineStart
    : match.index;
  return `${html.slice(0, index)}${snippet}\n${html.slice(index)}`;
}

/**
 * Makes sure the HTML file loads the stylesheets and scripts that sit next to
 * it in the download, so the project can be opened in a browser as-is. Files
 * that are already referenced are left untouched.
 */
export function linkSolutionFiles(
  html: string,
  { styles, scripts }: { styles: string[]; scripts: string[] }
): string {
  let result = html;
  const missingStyles = styles.filter(file => !referencesFile(result, file));
  const missingScripts = scripts.filter(file => !referencesFile(result, file));

  if (missingStyles.length) {
    const links = missingStyles
      .map(file => `  <link rel="stylesheet" href="${file}" />`)
      .join('\n');
    result = insertBefore(result, /<\/head\s*>/i, links);
  }

  if (missingScripts.length) {
    const tags = missingScripts
      .map(file => `  <script src="${file}"></script>`)
      .join('\n');
    result = insertBefore(result, /<\/body\s*>/i, tags);
  }

  return result;
}

export function getSolutionZipEntries(
  challengeFiles: DownloadableChallengeFile[]
): ZipEntry[] {
  const styles = challengeFiles
    .filter(file => file.ext === 'css')
    .map(getFileName);
  const scripts = challengeFiles
    .filter(file => file.ext === 'js')
    .map(getFileName);

  return challengeFiles.map(file => ({
    path: getFileName(file),
    contents:
      file.ext === 'html'
        ? linkSolutionFiles(file.contents, { styles, scripts })
        : file.contents
  }));
}

export function createSolutionZip(
  challengeFiles: DownloadableChallengeFile[]
): Uint8Array<ArrayBuffer> {
  return createZip(getSolutionZipEntries(challengeFiles));
}
