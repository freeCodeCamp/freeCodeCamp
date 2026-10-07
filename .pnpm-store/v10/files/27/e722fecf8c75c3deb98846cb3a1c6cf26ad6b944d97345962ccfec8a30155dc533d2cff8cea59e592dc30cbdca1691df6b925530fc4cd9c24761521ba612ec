import { g as normalizeWindowsPath, j as join } from './shared/pathe.M-eThtNZ.mjs';

const pathSeparators = /* @__PURE__ */ new Set(["/", "\\", void 0]);
const normalizedAliasSymbol = Symbol.for("pathe:normalizedAlias");
const SLASH_RE = /[/\\]/;
function normalizeAliases(_aliases) {
  if (_aliases[normalizedAliasSymbol]) {
    return _aliases;
  }
  const aliases = Object.fromEntries(
    Object.entries(_aliases).sort(([a], [b]) => _compareAliases(a, b))
  );
  for (const key in aliases) {
    for (const alias in aliases) {
      if (alias === key || key.startsWith(alias)) {
        continue;
      }
      if (aliases[key]?.startsWith(alias) && pathSeparators.has(aliases[key][alias.length])) {
        aliases[key] = aliases[alias] + aliases[key].slice(alias.length);
      }
    }
  }
  Object.defineProperty(aliases, normalizedAliasSymbol, {
    value: true,
    enumerable: false
  });
  return aliases;
}
function resolveAlias(path, aliases) {
  const _path = normalizeWindowsPath(path);
  aliases = normalizeAliases(aliases);
  for (const [alias, to] of Object.entries(aliases)) {
    if (!_path.startsWith(alias)) {
      continue;
    }
    const _alias = hasTrailingSlash(alias) ? alias.slice(0, -1) : alias;
    if (hasTrailingSlash(_path[_alias.length])) {
      return join(to, _path.slice(alias.length));
    }
  }
  return _path;
}
function reverseResolveAlias(path, aliases) {
  const _path = normalizeWindowsPath(path);
  aliases = normalizeAliases(aliases);
  const matches = [];
  for (const [to, alias] of Object.entries(aliases)) {
    if (!_path.startsWith(alias)) {
      continue;
    }
    const _alias = hasTrailingSlash(alias) ? alias.slice(0, -1) : alias;
    if (hasTrailingSlash(_path[_alias.length])) {
      matches.push(join(to, _path.slice(alias.length)));
    }
  }
  return matches.sort((a, b) => b.length - a.length);
}
function filename(path) {
  const base = path.split(SLASH_RE).pop();
  if (!base) {
    return void 0;
  }
  const separatorIndex = base.lastIndexOf(".");
  if (separatorIndex <= 0) {
    return base;
  }
  return base.slice(0, separatorIndex);
}
function _compareAliases(a, b) {
  return b.split("/").length - a.split("/").length;
}
function hasTrailingSlash(path = "/") {
  const lastChar = path[path.length - 1];
  return lastChar === "/" || lastChar === "\\";
}

export { filename, normalizeAliases, resolveAlias, reverseResolveAlias };
