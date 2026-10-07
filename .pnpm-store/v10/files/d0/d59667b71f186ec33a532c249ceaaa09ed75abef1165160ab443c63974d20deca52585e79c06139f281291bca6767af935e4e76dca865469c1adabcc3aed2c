Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const node_path = require('node:path');
const core = require('@sentry/core');

function normalizeWindowsPath(path) {
  return path.replace(/^[A-Z]:/, "").replace(/\\/g, "/");
}
function createGetModuleFromFilename(basePath = process.argv[1] ? core.dirname(process.argv[1]) : process.cwd(), isWindows = node_path.sep === "\\") {
  const normalizedBase = isWindows ? normalizeWindowsPath(basePath) : basePath;
  return (filename) => {
    if (!filename) {
      return;
    }
    const normalizedFilename = isWindows ? normalizeWindowsPath(filename) : filename;
    let { dir, base: file, ext } = node_path.posix.parse(normalizedFilename);
    if (ext === ".js" || ext === ".mjs" || ext === ".cjs") {
      file = file.slice(0, ext.length * -1);
    }
    const decodedFile = decodeURIComponent(file);
    if (!dir) {
      dir = ".";
    }
    const n = dir.lastIndexOf("/node_modules");
    if (n > -1) {
      return `${dir.slice(n + 14).replace(/\//g, ".")}:${decodedFile}`;
    }
    if (dir.startsWith(normalizedBase)) {
      const moduleName = dir.slice(normalizedBase.length + 1).replace(/\//g, ".");
      return moduleName ? `${moduleName}:${decodedFile}` : decodedFile;
    }
    return decodedFile;
  };
}

exports.createGetModuleFromFilename = createGetModuleFromFilename;
//# sourceMappingURL=module.js.map
