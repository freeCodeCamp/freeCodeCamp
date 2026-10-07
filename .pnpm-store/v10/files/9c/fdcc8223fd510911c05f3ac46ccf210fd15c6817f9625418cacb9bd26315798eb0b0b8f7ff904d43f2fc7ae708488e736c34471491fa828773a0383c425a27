"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeOptions = normalizeOptions;
exports.shouldUseModulesPlugins = shouldUseModulesPlugins;
exports.shouldUseImportPlugin = shouldUseImportPlugin;
exports.shouldUseURLPlugin = shouldUseURLPlugin;
exports.shouldUseIcssPlugin = shouldUseIcssPlugin;
exports.normalizeUrl = normalizeUrl;
exports.requestify = requestify;
exports.getFilter = getFilter;
exports.getModulesOptions = getModulesOptions;
exports.getModulesPlugins = getModulesPlugins;
exports.normalizeSourceMap = normalizeSourceMap;
exports.getPreRequester = getPreRequester;
exports.getImportCode = getImportCode;
exports.getModuleCode = getModuleCode;
exports.getExportCode = getExportCode;
exports.resolveRequests = resolveRequests;
exports.isUrlRequestable = isUrlRequestable;
exports.sort = sort;
exports.combineRequests = combineRequests;
exports.camelCase = camelCase;
exports.WEBPACK_IGNORE_COMMENT_REGEXP = void 0;

var _url = require("url");

var _path = _interopRequireDefault(require("path"));

var _loaderUtils = require("loader-utils");

var _postcssModulesValues = _interopRequireDefault(require("postcss-modules-values"));

var _postcssModulesLocalByDefault = _interopRequireDefault(require("postcss-modules-local-by-default"));

var _postcssModulesExtractImports = _interopRequireDefault(require("postcss-modules-extract-imports"));

var _postcssModulesScope = _interopRequireDefault(require("postcss-modules-scope"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
const WEBPACK_IGNORE_COMMENT_REGEXP = /webpackIgnore:(\s+)?(true|false)/; // eslint-disable-next-line no-useless-escape

exports.WEBPACK_IGNORE_COMMENT_REGEXP = WEBPACK_IGNORE_COMMENT_REGEXP;
const regexSingleEscape = /[ -,.\/:-@[\]\^`{-~]/;
const regexExcessiveSpaces = /(^|\\+)?(\\[A-F0-9]{1,6})\x20(?![a-fA-F0-9\x20])/g;

const preserveCamelCase = string => {
  let result = string;
  let isLastCharLower = false;
  let isLastCharUpper = false;
  let isLastLastCharUpper = false;

  for (let i = 0; i < result.length; i++) {
    const character = result[i];

    if (isLastCharLower && /[\p{Lu}]/u.test(character)) {
      result = `${result.slice(0, i)}-${result.slice(i)}`;
      isLastCharLower = false;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = true;
      i += 1;
    } else if (isLastCharUpper && isLastLastCharUpper && /[\p{Ll}]/u.test(character)) {
      result = `${result.slice(0, i - 1)}-${result.slice(i - 1)}`;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = false;
      isLastCharLower = true;
    } else {
      isLastCharLower = character.toLowerCase() === character && character.toUpperCase() !== character;
      isLastLastCharUpper = isLastCharUpper;
      isLastCharUpper = character.toUpperCase() === character && character.toLowerCase() !== character;
    }
  }

  return result;
};

function camelCase(input) {
  let result = input.trim();

  if (result.length === 0) {
    return "";
  }

  if (result.length === 1) {
    return result.toLowerCase();
  }

  const hasUpperCase = result !== result.toLowerCase();

  if (hasUpperCase) {
    result = preserveCamelCase(result);
  }

  return result.replace(/^[_.\- ]+/, "").toLowerCase().replace(/[_.\- ]+([\p{Alpha}\p{N}_]|$)/gu, (_, p1) => p1.toUpperCase()).replace(/\d+([\p{Alpha}\p{N}_]|$)/gu, m => m.toUpperCase());
}

function escape(string) {
  let output = "";
  let counter = 0;

  while (counter < string.length) {
    // eslint-disable-next-line no-plusplus
    const character = string.charAt(counter++);
    let value; // eslint-disable-next-line no-control-regex

    if (/[\t\n\f\r\x0B]/.test(character)) {
      const codePoint = character.charCodeAt();
      value = `\\${codePoint.toString(16).toUpperCase()} `;
    } else if (character === "\\" || regexSingleEscape.test(character)) {
      value = `\\${character}`;
    } else {
      value = character;
    }

    output += value;
  }

  const firstChar = string.charAt(0);

  if (/^-[-\d]/.test(output)) {
    output = `\\-${output.slice(1)}`;
  } else if (/\d/.test(firstChar)) {
    output = `\\3${firstChar} ${output.slice(1)}`;
  } // Remove spaces after `\HEX` escapes that are not followed by a hex digit,
  // since they’re redundant. Note that this is only possible if the escape
  // sequence isn’t preceded by an odd number of backslashes.


  output = output.replace(regexExcessiveSpaces, ($0, $1, $2) => {
    if ($1 && $1.length % 2) {
      // It’s not safe to remove the space, so don’t.
      return $0;
    } // Strip the space.


    return ($1 || "") + $2;
  });
  return output;
}

function gobbleHex(str) {
  const lower = str.toLowerCase();
  let hex = "";
  let spaceTerminated = false; // eslint-disable-next-line no-undefined

  for (let i = 0; i < 6 && lower[i] !== undefined; i++) {
    const code = lower.charCodeAt(i); // check to see if we are dealing with a valid hex char [a-f|0-9]

    const valid = code >= 97 && code <= 102 || code >= 48 && code <= 57; // https://drafts.csswg.org/css-syntax/#consume-escaped-code-point

    spaceTerminated = code === 32;

    if (!valid) {
      break;
    }

    hex += lower[i];
  }

  if (hex.length === 0) {
    // eslint-disable-next-line no-undefined
    return undefined;
  }

  const codePoint = parseInt(hex, 16);
  const isSurrogate = codePoint >= 0xd800 && codePoint <= 0xdfff; // Add special case for
  // "If this number is zero, or is for a surrogate, or is greater than the maximum allowed code point"
  // https://drafts.csswg.org/css-syntax/#maximum-allowed-code-point

  if (isSurrogate || codePoint === 0x0000 || codePoint > 0x10ffff) {
    return ["\uFFFD", hex.length + (spaceTerminated ? 1 : 0)];
  }

  return [String.fromCodePoint(codePoint), hex.length + (spaceTerminated ? 1 : 0)];
}

const CONTAINS_ESCAPE = /\\/;

function unescape(str) {
  const needToProcess = CONTAINS_ESCAPE.test(str);

  if (!needToProcess) {
    return str;
  }

  let ret = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "\\") {
      const gobbled = gobbleHex(str.slice(i + 1, i + 7)); // eslint-disable-next-line no-undefined

      if (gobbled !== undefined) {
        ret += gobbled[0];
        i += gobbled[1]; // eslint-disable-next-line no-continue

        continue;
      } // Retain a pair of \\ if double escaped `\\\\`
      // https://github.com/postcss/postcss-selector-parser/commit/268c9a7656fb53f543dc620aa5b73a30ec3ff20e


      if (str[i + 1] === "\\") {
        ret += "\\";
        i += 1; // eslint-disable-next-line no-continue

        continue;
      } // if \\ is at the end of the string retain it
      // https://github.com/postcss/postcss-selector-parser/commit/01a6b346e3612ce1ab20219acc26abdc259ccefb


      if (str.length === i + 1) {
        ret += str[i];
      } // eslint-disable-next-line no-continue


      continue;
    }

    ret += str[i];
  }

  return ret;
}

function normalizePath(file) {
  return _path.default.sep === "\\" ? file.replace(/\\/g, "/") : file;
} // eslint-disable-next-line no-control-regex


const filenameReservedRegex = /[<>:"/\\|?*]/g; // eslint-disable-next-line no-control-regex

const reControlChars = /[\u0000-\u001f\u0080-\u009f]/g;

function escapeLocalIdent(localident) {
  // TODO simplify in the next major release
  return escape(localident // For `[hash]` placeholder
  .replace(/^((-?[0-9])|--)/, "_$1").replace(filenameReservedRegex, "-").replace(reControlChars, "-").replace(/\./g, "-"));
}

function defaultGetLocalIdent(loaderContext, localIdentName, localName, options) {
  let relativeMatchResource = ""; // eslint-disable-next-line no-underscore-dangle

  if (loaderContext._module && loaderContext._module.matchResource) {
    relativeMatchResource = `${normalizePath( // eslint-disable-next-line no-underscore-dangle
    _path.default.relative(options.context, loaderContext._module.matchResource))}\x00`;
  }

  const relativeResourcePath = normalizePath(_path.default.relative(options.context, loaderContext.resourcePath)); // eslint-disable-next-line no-param-reassign

  options.content = `${options.hashPrefix}${relativeMatchResource}${relativeResourcePath}\x00${localName}`;
  return (0, _loaderUtils.interpolateName)(loaderContext, localIdentName, options);
}

const NATIVE_WIN32_PATH = /^[A-Z]:[/\\]|^\\\\/i;

function normalizeUrl(url, isStringValue) {
  let normalizedUrl = url.replace(/^( |\t\n|\r\n|\r|\f)*/g, "").replace(/( |\t\n|\r\n|\r|\f)*$/g, "");

  if (isStringValue && /\\(\n|\r\n|\r|\f)/.test(normalizedUrl)) {
    normalizedUrl = normalizedUrl.replace(/\\(\n|\r\n|\r|\f)/g, "");
  }

  if (NATIVE_WIN32_PATH.test(url)) {
    try {
      normalizedUrl = decodeURI(normalizedUrl);
    } catch (error) {// Ignore
    }

    return normalizedUrl;
  }

  normalizedUrl = unescape(normalizedUrl);

  try {
    normalizedUrl = decodeURI(normalizedUrl);
  } catch (error) {// Ignore
  }

  return normalizedUrl;
}

function requestify(url, rootContext) {
  if (/^file:/i.test(url)) {
    return (0, _url.fileURLToPath)(url);
  }

  return url.charAt(0) === "/" ? (0, _loaderUtils.urlToRequest)(url, rootContext) : (0, _loaderUtils.urlToRequest)(url);
}

function getFilter(filter, resourcePath) {
  return (...args) => {
    if (typeof filter === "function") {
      return filter(...args, resourcePath);
    }

    return true;
  };
}

function getValidLocalName(localName, exportLocalsConvention) {
  if (exportLocalsConvention === "dashesOnly") {
    return dashesCamelCase(localName);
  }

  return camelCase(localName);
}

const moduleRegExp = /\.module(s)?\.\w+$/i;
const icssRegExp = /\.icss\.\w+$/i;

function getModulesOptions(rawOptions, loaderContext) {
  const resourcePath = // eslint-disable-next-line no-underscore-dangle
  loaderContext._module && loaderContext._module.matchResource || loaderContext.resourcePath;
  let isIcss;

  if (typeof rawOptions.modules === "undefined") {
    const isModules = moduleRegExp.test(resourcePath);

    if (!isModules) {
      isIcss = icssRegExp.test(resourcePath);
    }

    if (!isModules && !isIcss) {
      return false;
    }
  } else if (typeof rawOptions.modules === "boolean" && rawOptions.modules === false) {
    return false;
  }

  let modulesOptions = {
    compileType: isIcss ? "icss" : "module",
    auto: true,
    mode: "local",
    exportGlobals: false,
    localIdentName: "[hash:base64]",
    localIdentContext: loaderContext.rootContext,
    localIdentHashPrefix: "",
    // eslint-disable-next-line no-undefined
    localIdentRegExp: undefined,
    // eslint-disable-next-line no-undefined
    getLocalIdent: undefined,
    namedExport: false,
    exportLocalsConvention: "asIs",
    exportOnlyLocals: false
  };

  if (typeof rawOptions.modules === "boolean" || typeof rawOptions.modules === "string") {
    modulesOptions.mode = typeof rawOptions.modules === "string" ? rawOptions.modules : "local";
  } else {
    if (rawOptions.modules) {
      if (typeof rawOptions.modules.auto === "boolean") {
        const isModules = rawOptions.modules.auto && moduleRegExp.test(resourcePath);

        if (!isModules) {
          return false;
        }
      } else if (rawOptions.modules.auto instanceof RegExp) {
        const isModules = rawOptions.modules.auto.test(resourcePath);

        if (!isModules) {
          return false;
        }
      } else if (typeof rawOptions.modules.auto === "function") {
        const isModule = rawOptions.modules.auto(resourcePath);

        if (!isModule) {
          return false;
        }
      }

      if (rawOptions.modules.namedExport === true && typeof rawOptions.modules.exportLocalsConvention === "undefined") {
        modulesOptions.exportLocalsConvention = "camelCaseOnly";
      }
    }

    modulesOptions = { ...modulesOptions,
      ...(rawOptions.modules || {})
    };
  }

  if (typeof modulesOptions.mode === "function") {
    modulesOptions.mode = modulesOptions.mode(loaderContext.resourcePath);
  }

  if (modulesOptions.namedExport === true) {
    if (rawOptions.esModule === false) {
      throw new Error('The "modules.namedExport" option requires the "esModules" option to be enabled');
    }

    if (modulesOptions.exportLocalsConvention !== "camelCaseOnly" && modulesOptions.exportLocalsConvention !== "dashesOnly") {
      throw new Error('The "modules.namedExport" option requires the "modules.exportLocalsConvention" option to be "camelCaseOnly" or "dashesOnly"');
    }
  }

  if (/\[emoji(?::(\d+))?\]/i.test(modulesOptions.localIdentName)) {
    loaderContext.emitWarning("Emoji is deprecated and will be removed in next major release.");
  }

  return modulesOptions;
}

function normalizeOptions(rawOptions, loaderContext) {
  const modulesOptions = getModulesOptions(rawOptions, loaderContext);
  return {
    url: typeof rawOptions.url === "undefined" ? true : rawOptions.url,
    import: typeof rawOptions.import === "undefined" ? true : rawOptions.import,
    modules: modulesOptions,
    sourceMap: typeof rawOptions.sourceMap === "boolean" ? rawOptions.sourceMap : loaderContext.sourceMap,
    importLoaders: typeof rawOptions.importLoaders === "string" ? parseInt(rawOptions.importLoaders, 10) : rawOptions.importLoaders,
    esModule: typeof rawOptions.esModule === "undefined" ? true : rawOptions.esModule
  };
}

function shouldUseImportPlugin(options) {
  if (options.modules.exportOnlyLocals) {
    return false;
  }

  if (typeof options.import === "boolean") {
    return options.import;
  }

  return true;
}

function shouldUseURLPlugin(options) {
  if (options.modules.exportOnlyLocals) {
    return false;
  }

  if (typeof options.url === "boolean") {
    return options.url;
  }

  return true;
}

function shouldUseModulesPlugins(options) {
  return options.modules.compileType === "module";
}

function shouldUseIcssPlugin(options) {
  return options.icss === true || Boolean(options.modules);
}

function getModulesPlugins(options, loaderContext) {
  const {
    mode,
    getLocalIdent,
    localIdentName,
    localIdentContext,
    localIdentHashPrefix,
    localIdentRegExp
  } = options.modules;
  let plugins = [];

  try {
    plugins = [_postcssModulesValues.default, (0, _postcssModulesLocalByDefault.default)({
      mode
    }), (0, _postcssModulesExtractImports.default)(), (0, _postcssModulesScope.default)({
      generateScopedName(exportName) {
        let localIdent;

        if (typeof getLocalIdent !== "undefined") {
          localIdent = getLocalIdent(loaderContext, localIdentName, unescape(exportName), {
            context: localIdentContext,
            hashPrefix: localIdentHashPrefix,
            regExp: localIdentRegExp
          });
        } // A null/undefined value signals that we should invoke the default
        // getLocalIdent method.


        if (typeof localIdent === "undefined" || localIdent === null) {
          localIdent = defaultGetLocalIdent(loaderContext, localIdentName, unescape(exportName), {
            context: localIdentContext,
            hashPrefix: localIdentHashPrefix,
            regExp: localIdentRegExp
          });
          return escapeLocalIdent(localIdent).replace(/\\\[local\\]/gi, exportName);
        }

        return escapeLocalIdent(localIdent);
      },

      exportGlobals: options.modules.exportGlobals
    })];
  } catch (error) {
    loaderContext.emitError(error);
  }

  return plugins;
}

const IS_NATIVE_WIN32_PATH = /^[a-z]:[/\\]|^\\\\/i;
const ABSOLUTE_SCHEME = /^[a-z0-9+\-.]+:/i;

function getURLType(source) {
  if (source[0] === "/") {
    if (source[1] === "/") {
      return "scheme-relative";
    }

    return "path-absolute";
  }

  if (IS_NATIVE_WIN32_PATH.test(source)) {
    return "path-absolute";
  }

  return ABSOLUTE_SCHEME.test(source) ? "absolute" : "path-relative";
}

function normalizeSourceMap(map, resourcePath) {
  let newMap = map; // Some loader emit source map as string
  // Strip any JSON XSSI avoidance prefix from the string (as documented in the source maps specification), and then parse the string as JSON.

  if (typeof newMap === "string") {
    newMap = JSON.parse(newMap);
  }

  delete newMap.file;
  const {
    sourceRoot
  } = newMap;
  delete newMap.sourceRoot;

  if (newMap.sources) {
    // Source maps should use forward slash because it is URLs (https://github.com/mozilla/source-map/issues/91)
    // We should normalize path because previous loaders like `sass-loader` using backslash when generate source map
    newMap.sources = newMap.sources.map(source => {
      // Non-standard syntax from `postcss`
      if (source.indexOf("<") === 0) {
        return source;
      }

      const sourceType = getURLType(source); // Do no touch `scheme-relative` and `absolute` URLs

      if (sourceType === "path-relative" || sourceType === "path-absolute") {
        const absoluteSource = sourceType === "path-relative" && sourceRoot ? _path.default.resolve(sourceRoot, normalizePath(source)) : normalizePath(source);
        return _path.default.relative(_path.default.dirname(resourcePath), absoluteSource);
      }

      return source;
    });
  }

  return newMap;
}

function getPreRequester({
  loaders,
  loaderIndex
}) {
  const cache = Object.create(null);
  return number => {
    if (cache[number]) {
      return cache[number];
    }

    if (number === false) {
      cache[number] = "";
    } else {
      const loadersRequest = loaders.slice(loaderIndex, loaderIndex + 1 + (typeof number !== "number" ? 0 : number)).map(x => x.request).join("!");
      cache[number] = `-!${loadersRequest}!`;
    }

    return cache[number];
  };
}

function getImportCode(imports, options) {
  let code = "";

  for (const item of imports) {
    const {
      importName,
      url,
      icss
    } = item;

    if (options.esModule) {
      if (icss && options.modules.namedExport) {
        code += `import ${options.modules.exportOnlyLocals ? "" : `${importName}, `}* as ${importName}_NAMED___ from ${url};\n`;
      } else {
        code += `import ${importName} from ${url};\n`;
      }
    } else {
      code += `var ${importName} = require(${url});\n`;
    }
  }

  return code ? `// Imports\n${code}` : "";
}

function normalizeSourceMapForRuntime(map, loaderContext) {
  const resultMap = map ? map.toJSON() : null;

  if (resultMap) {
    delete resultMap.file;
    resultMap.sourceRoot = "";
    resultMap.sources = resultMap.sources.map(source => {
      // Non-standard syntax from `postcss`
      if (source.indexOf("<") === 0) {
        return source;
      }

      const sourceType = getURLType(source);

      if (sourceType !== "path-relative") {
        return source;
      }

      const resourceDirname = _path.default.dirname(loaderContext.resourcePath);

      const absoluteSource = _path.default.resolve(resourceDirname, source);

      const contextifyPath = normalizePath(_path.default.relative(loaderContext.rootContext, absoluteSource));
      return `webpack://./${contextifyPath}`;
    });
  }

  return JSON.stringify(resultMap);
}

function getModuleCode(result, api, replacements, options, loaderContext) {
  if (options.modules.exportOnlyLocals === true) {
    return "";
  }

  const sourceMapValue = options.sourceMap ? `,${normalizeSourceMapForRuntime(result.map, loaderContext)}` : "";
  let code = JSON.stringify(result.css);
  let beforeCode = `var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(${options.sourceMap ? "___CSS_LOADER_API_SOURCEMAP_IMPORT___" : "function(i){return i[1]}"});\n`;

  for (const item of api) {
    const {
      url,
      media,
      dedupe
    } = item;
    beforeCode += url ? `___CSS_LOADER_EXPORT___.push([module.id, ${JSON.stringify(`@import url(${url});`)}${media ? `, ${JSON.stringify(media)}` : ""}]);\n` : `___CSS_LOADER_EXPORT___.i(${item.importName}${media ? `, ${JSON.stringify(media)}` : dedupe ? ', ""' : ""}${dedupe ? ", true" : ""});\n`;
  }

  for (const item of replacements) {
    const {
      replacementName,
      importName,
      localName
    } = item;

    if (localName) {
      code = code.replace(new RegExp(replacementName, "g"), () => options.modules.namedExport ? `" + ${importName}_NAMED___[${JSON.stringify(getValidLocalName(localName, options.modules.exportLocalsConvention))}] + "` : `" + ${importName}.locals[${JSON.stringify(localName)}] + "`);
    } else {
      const {
        hash,
        needQuotes
      } = item;
      const getUrlOptions = [].concat(hash ? [`hash: ${JSON.stringify(hash)}`] : []).concat(needQuotes ? "needQuotes: true" : []);
      const preparedOptions = getUrlOptions.length > 0 ? `, { ${getUrlOptions.join(", ")} }` : "";
      beforeCode += `var ${replacementName} = ___CSS_LOADER_GET_URL_IMPORT___(${importName}${preparedOptions});\n`;
      code = code.replace(new RegExp(replacementName, "g"), () => `" + ${replacementName} + "`);
    }
  }

  return `${beforeCode}// Module\n___CSS_LOADER_EXPORT___.push([module.id, ${code}, ""${sourceMapValue}]);\n`;
}

function dashesCamelCase(str) {
  return str.replace(/-+(\w)/g, (match, firstLetter) => firstLetter.toUpperCase());
}

function getExportCode(exports, replacements, needToUseIcssPlugin, options) {
  let code = "// Exports\n";

  if (!needToUseIcssPlugin) {
    code += `${options.esModule ? "export default" : "module.exports ="} ___CSS_LOADER_EXPORT___;\n`;
    return code;
  }

  let localsCode = "";

  const addExportToLocalsCode = (name, value) => {
    if (options.modules.namedExport) {
      localsCode += `export var ${name} = ${JSON.stringify(value)};\n`;
    } else {
      if (localsCode) {
        localsCode += `,\n`;
      }

      localsCode += `\t${JSON.stringify(name)}: ${JSON.stringify(value)}`;
    }
  };

  for (const {
    name,
    value
  } of exports) {
    switch (options.modules.exportLocalsConvention) {
      case "camelCase":
        {
          addExportToLocalsCode(name, value);
          const modifiedName = camelCase(name);

          if (modifiedName !== name) {
            addExportToLocalsCode(modifiedName, value);
          }

          break;
        }

      case "camelCaseOnly":
        {
          addExportToLocalsCode(camelCase(name), value);
          break;
        }

      case "dashes":
        {
          addExportToLocalsCode(name, value);
          const modifiedName = dashesCamelCase(name);

          if (modifiedName !== name) {
            addExportToLocalsCode(modifiedName, value);
          }

          break;
        }

      case "dashesOnly":
        {
          addExportToLocalsCode(dashesCamelCase(name), value);
          break;
        }

      case "asIs":
      default:
        addExportToLocalsCode(name, value);
        break;
    }
  }

  for (const item of replacements) {
    const {
      replacementName,
      localName
    } = item;

    if (localName) {
      const {
        importName
      } = item;
      localsCode = localsCode.replace(new RegExp(replacementName, "g"), () => {
        if (options.modules.namedExport) {
          return `" + ${importName}_NAMED___[${JSON.stringify(getValidLocalName(localName, options.modules.exportLocalsConvention))}] + "`;
        } else if (options.modules.exportOnlyLocals) {
          return `" + ${importName}[${JSON.stringify(localName)}] + "`;
        }

        return `" + ${importName}.locals[${JSON.stringify(localName)}] + "`;
      });
    } else {
      localsCode = localsCode.replace(new RegExp(replacementName, "g"), () => `" + ${replacementName} + "`);
    }
  }

  if (options.modules.exportOnlyLocals) {
    code += options.modules.namedExport ? localsCode : `${options.esModule ? "export default" : "module.exports ="} {\n${localsCode}\n};\n`;
    return code;
  }

  code += options.modules.namedExport ? localsCode : `___CSS_LOADER_EXPORT___.locals = {${localsCode ? `\n${localsCode}\n` : ""}};\n`;
  code += `${options.esModule ? "export default" : "module.exports ="} ___CSS_LOADER_EXPORT___;\n`;
  return code;
}

async function resolveRequests(resolve, context, possibleRequests) {
  return resolve(context, possibleRequests[0]).then(result => result).catch(error => {
    const [, ...tailPossibleRequests] = possibleRequests;

    if (tailPossibleRequests.length === 0) {
      throw error;
    }

    return resolveRequests(resolve, context, tailPossibleRequests);
  });
}

function isUrlRequestable(url) {
  // Protocol-relative URLs
  if (/^\/\//.test(url)) {
    return false;
  } // `file:` protocol


  if (/^file:/i.test(url)) {
    return true;
  } // Absolute URLs


  if (/^[a-z][a-z0-9+.-]*:/i.test(url) && !NATIVE_WIN32_PATH.test(url)) {
    return false;
  } // `#` URLs


  if (/^#/.test(url)) {
    return false;
  }

  return true;
}

function sort(a, b) {
  return a.index - b.index;
}

function combineRequests(preRequest, url) {
  const idx = url.indexOf("!=!");
  return idx !== -1 ? url.slice(0, idx + 3) + preRequest + url.slice(idx + 3) : preRequest + url;
}