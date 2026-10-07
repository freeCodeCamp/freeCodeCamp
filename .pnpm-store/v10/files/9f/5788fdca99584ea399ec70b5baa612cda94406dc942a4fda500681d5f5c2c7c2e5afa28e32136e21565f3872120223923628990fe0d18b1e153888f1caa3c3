Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

function normalizeArray(parts, allowAboveRoot) {
  let up = 0;
  for (let i = parts.length - 1; i >= 0; i--) {
    const last = parts[i];
    if (last === ".") {
      parts.splice(i, 1);
    } else if (last === "..") {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift("..");
    }
  }
  return parts;
}
const splitPathRe = /^(\S+:\\|\/?)([\s\S]*?)((?:\.{1,2}|[^/\\]+?|)(\.[^./\\]*|))(?:[/\\]*)$/;
function splitPath(filename) {
  const truncated = filename.length > 1024 ? `<truncated>${filename.slice(-1024)}` : filename;
  const parts = splitPathRe.exec(truncated);
  return parts ? parts.slice(1) : [];
}
function resolve(...args) {
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    const path = i >= 0 ? args[i] : "/";
    if (!path) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = path.charAt(0) === "/";
  }
  resolvedPath = normalizeArray(
    resolvedPath.split("/").filter((p) => !!p),
    !resolvedAbsolute
  ).join("/");
  return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
}
function trim(arr) {
  let start = 0;
  for (; start < arr.length; start++) {
    if (arr[start] !== "") {
      break;
    }
  }
  let end = arr.length - 1;
  for (; end >= 0; end--) {
    if (arr[end] !== "") {
      break;
    }
  }
  if (start > end) {
    return [];
  }
  return arr.slice(start, end - start + 1);
}
function relative(from, to) {
  from = resolve(from).slice(1);
  to = resolve(to).slice(1);
  const fromParts = trim(from.split("/"));
  const toParts = trim(to.split("/"));
  const length = Math.min(fromParts.length, toParts.length);
  let samePartsLength = length;
  for (let i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }
  let outputParts = [];
  for (let i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push("..");
  }
  outputParts = outputParts.concat(toParts.slice(samePartsLength));
  return outputParts.join("/");
}
function normalizePath(path) {
  const isPathAbsolute = isAbsolute(path);
  const trailingSlash = path.slice(-1) === "/";
  let normalizedPath = normalizeArray(
    path.split("/").filter((p) => !!p),
    !isPathAbsolute
  ).join("/");
  if (!normalizedPath && !isPathAbsolute) {
    normalizedPath = ".";
  }
  if (normalizedPath && trailingSlash) {
    normalizedPath += "/";
  }
  return (isPathAbsolute ? "/" : "") + normalizedPath;
}
function isAbsolute(path) {
  return path.charAt(0) === "/";
}
function join(...args) {
  return normalizePath(args.join("/"));
}
function dirname(path) {
  const result = splitPath(path);
  const root = result[0] || "";
  let dir = result[1];
  if (!root && !dir) {
    return ".";
  }
  if (dir) {
    dir = dir.slice(0, dir.length - 1);
  }
  return root + dir;
}
function basename(path, ext) {
  let f = splitPath(path)[2] || "";
  if (ext && f.slice(ext.length * -1) === ext) {
    f = f.slice(0, f.length - ext.length);
  }
  return f;
}

exports.basename = basename;
exports.dirname = dirname;
exports.isAbsolute = isAbsolute;
exports.join = join;
exports.normalizePath = normalizePath;
exports.relative = relative;
exports.resolve = resolve;
//# sourceMappingURL=path.js.map
