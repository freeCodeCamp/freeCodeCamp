'use strict';

var node_module = require('node:module');
var fs = require('node:fs');
var path = require('node:path');

const import_meta = {};
const CWD = process.cwd();
const cjsRequire = typeof require === "undefined" ? node_module.createRequire(import_meta.url) : require;
const EXTENSIONS = [".ts", ".tsx", ...Object.keys(cjsRequire.extensions)];

const tryPkg = (pkg) => {
  try {
    return cjsRequire.resolve(pkg);
  } catch (e) {
  }
};
const isPkgAvailable = (pkg) => !!tryPkg(pkg);
const tryFile = (filename, includeDir = false, base = CWD) => {
  if (typeof filename === "string") {
    const filepath = path.resolve(base, filename);
    return fs.existsSync(filepath) && (includeDir || fs.statSync(filepath).isFile()) ? filepath : "";
  }
  for (const file of filename != null ? filename : []) {
    const filepath = tryFile(file, includeDir, base);
    if (filepath) {
      return filepath;
    }
  }
  return "";
};
const tryExtensions = (filepath, extensions = EXTENSIONS) => {
  const ext = [...extensions, ""].find((ext2) => tryFile(filepath + ext2));
  return ext == null ? "" : filepath + ext;
};
const findUp = (searchEntry, searchFileOrIncludeDir, includeDir) => {
  console.assert(path.isAbsolute(searchEntry));
  if (!tryFile(searchEntry, true) || searchEntry !== CWD && !searchEntry.startsWith(CWD + path.sep)) {
    return "";
  }
  searchEntry = path.resolve(
    fs.statSync(searchEntry).isDirectory() ? searchEntry : path.resolve(searchEntry, "..")
  );
  const isSearchFile = typeof searchFileOrIncludeDir === "string";
  const searchFile = isSearchFile ? searchFileOrIncludeDir : "package.json";
  do {
    const searched = tryFile(
      path.resolve(searchEntry, searchFile),
      isSearchFile && includeDir
    );
    if (searched) {
      return searched;
    }
    searchEntry = path.resolve(searchEntry, "..");
  } while (searchEntry === CWD || searchEntry.startsWith(CWD + path.sep));
  return "";
};

exports.CWD = CWD;
exports.EXTENSIONS = EXTENSIONS;
exports.cjsRequire = cjsRequire;
exports.findUp = findUp;
exports.isPkgAvailable = isPkgAvailable;
exports.tryExtensions = tryExtensions;
exports.tryFile = tryFile;
exports.tryPkg = tryPkg;
