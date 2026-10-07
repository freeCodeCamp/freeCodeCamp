"use strict";

/** @typedef {import("./index.js").ExtractCommentsOptions} ExtractCommentsOptions */
/** @typedef {import("./index.js").ExtractCommentsFunction} ExtractCommentsFunction */
/** @typedef {import("./index.js").ExtractCommentsCondition} ExtractCommentsCondition */
/** @typedef {import("./index.js").Input} Input */
/** @typedef {import("./index.js").MinimizedResult} MinimizedResult */
/** @typedef {import("./index.js").CustomOptions} CustomOptions */
/** @typedef {import("./index.js").RawSourceMap} RawSourceMap */

/**
 * @template T
 * @typedef {import("./index.js").PredefinedOptions<T>} PredefinedOptions
 */

/**
 * @typedef {string[]} ExtractedComments
 */

const notSettled = Symbol("not-settled");

/**
 * @template T
 * @typedef {() => Promise<T>} Task
 */

/**
 * Run tasks with limited concurrency.
 * @template T
 * @param {number} limit Limit of tasks that run at once.
 * @param {Task<T>[]} tasks List of tasks to run.
 * @returns {Promise<T[]>} A promise that fulfills to an array of the results
 */
function throttleAll(limit, tasks) {
  return new Promise((resolve, reject) => {
    const result = Array.from({
      length: tasks.length
    }).fill(notSettled);
    const entries = tasks.entries();
    const next = () => {
      const {
        done,
        value
      } = entries.next();
      if (done) {
        const isLast = !result.includes(notSettled);
        if (isLast) resolve(result);
        return;
      }
      const [index, task] = value;

      /**
       * @param {T} resultValue Result value
       */
      const onFulfilled = resultValue => {
        result[index] = resultValue;
        next();
      };
      task().then(onFulfilled, reject);
    };
    for (let i = 0; i < limit; i++) {
      next();
    }
  });
}

/* istanbul ignore next */
/**
 * @param {Input} input input
 * @param {RawSourceMap=} sourceMap source map
 * @param {CustomOptions=} minimizerOptions options
 * @param {ExtractCommentsOptions=} extractComments extract comments option
 * @returns {Promise<MinimizedResult>} minimized result
 */
async function terserMinify(input, sourceMap, minimizerOptions, extractComments) {
  // eslint-disable-next-line jsdoc/no-restricted-syntax
  /**
   * @param {unknown} value value
   * @returns {value is object} true when value is object or function
   */
  const isObject = value => {
    const type = typeof value;

    // eslint-disable-next-line no-eq-null, eqeqeq
    return value != null && (type === "object" || type === "function");
  };

  /**
   * @param {import("terser").MinifyOptions & { sourceMap: import("terser").SourceMapOptions | undefined } & ({ output: import("terser").FormatOptions & { beautify: boolean } } | { format: import("terser").FormatOptions & { beautify: boolean } })} terserOptions terser options
   * @param {ExtractedComments} extractedComments extracted comments
   * @returns {ExtractCommentsFunction} function to extract comments
   */
  const buildComments = (terserOptions, extractedComments) => {
    /** @type {{ [index: string]: ExtractCommentsCondition }} */
    const condition = {};
    let comments;
    if (terserOptions.format) {
      ({
        comments
      } = terserOptions.format);
    } else if (terserOptions.output) {
      ({
        comments
      } = terserOptions.output);
    }
    condition.preserve = typeof comments !== "undefined" ? comments : false;
    if (typeof extractComments === "boolean" && extractComments) {
      condition.extract = "some";
    } else if (typeof extractComments === "string" || extractComments instanceof RegExp) {
      condition.extract = extractComments;
    } else if (typeof extractComments === "function") {
      condition.extract = extractComments;
    } else if (extractComments && isObject(extractComments)) {
      condition.extract = typeof extractComments.condition === "boolean" && extractComments.condition ? "some" : typeof extractComments.condition !== "undefined" ? extractComments.condition : "some";
    } else {
      // No extract
      // Preserve using "commentsOpts" or "some"
      condition.preserve = typeof comments !== "undefined" ? comments : "some";
      condition.extract = false;
    }

    // Ensure that both conditions are functions
    for (const key of ["preserve", "extract"]) {
      /** @type {undefined | string} */
      let regexStr;
      /** @type {undefined | RegExp} */
      let regex;
      switch (typeof condition[key]) {
        case "boolean":
          condition[key] = condition[key] ? () => true : () => false;
          break;
        case "function":
          break;
        case "string":
          if (condition[key] === "all") {
            condition[key] = () => true;
            break;
          }
          if (condition[key] === "some") {
            condition[key] = /** @type {ExtractCommentsFunction} */
            (astNode, comment) => (comment.type === "comment2" || comment.type === "comment1") && /@preserve|@lic|@cc_on|^\**!/i.test(comment.value);
            break;
          }
          regexStr = /** @type {string} */condition[key];
          condition[key] = /** @type {ExtractCommentsFunction} */
          (astNode, comment) => new RegExp(/** @type {string} */regexStr).test(comment.value);
          break;
        default:
          regex = /** @type {RegExp} */condition[key];
          condition[key] = /** @type {ExtractCommentsFunction} */
          (astNode, comment) => /** @type {RegExp} */regex.test(comment.value);
      }
    }

    // Redefine the comments function to extract and preserve
    // comments according to the two conditions
    return (astNode, comment) => {
      if (/** @type {{ extract: ExtractCommentsFunction }} */
      condition.extract(astNode, comment)) {
        const commentText = comment.type === "comment2" ? `/*${comment.value}*/` : `//${comment.value}`;

        // Don't include duplicate comments
        if (!extractedComments.includes(commentText)) {
          extractedComments.push(commentText);
        }
      }
      return /** @type {{ preserve: ExtractCommentsFunction }} */condition.preserve(astNode, comment);
    };
  };

  /**
   * @param {PredefinedOptions<import("terser").MinifyOptions> & import("terser").MinifyOptions=} terserOptions terser options
   * @returns {import("terser").MinifyOptions & { sourceMap: import("terser").SourceMapOptions | undefined } & { compress: import("terser").CompressOptions } & ({ output: import("terser").FormatOptions & { beautify: boolean } } | { format: import("terser").FormatOptions & { beautify: boolean } })} built terser options
   */
  const buildTerserOptions = (terserOptions = {}) => (
  // Need deep copy objects to avoid https://github.com/terser/terser/issues/366
  {
    ...terserOptions,
    compress: typeof terserOptions.compress === "boolean" ? terserOptions.compress ? {} : false : {
      ...terserOptions.compress
    },
    // ecma: terserOptions.ecma,
    // ie8: terserOptions.ie8,
    // keep_classnames: terserOptions.keep_classnames,
    // keep_fnames: terserOptions.keep_fnames,
    mangle:
    // eslint-disable-next-line no-eq-null, eqeqeq
    terserOptions.mangle == null ? true : typeof terserOptions.mangle === "boolean" ? terserOptions.mangle : {
      ...terserOptions.mangle
    },
    // module: terserOptions.module,
    // nameCache: { ...terserOptions.toplevel },
    // the `output` option is deprecated
    ...(terserOptions.format ? {
      format: {
        beautify: false,
        ...terserOptions.format
      }
    } : {
      output: {
        beautify: false,
        ...terserOptions.output
      }
    }),
    parse: {
      ...terserOptions.parse
    },
    // safari10: terserOptions.safari10,
    // Ignoring sourceMap from options
    sourceMap: undefined
    // toplevel: terserOptions.toplevel
  });
  let minify;
  try {
    ({
      minify
    } = require("terser"));
  } catch (err) {
    return {
      errors: [(/** @type {Error} */err)]
    };
  }

  // Copy `terser` options
  const terserOptions = buildTerserOptions(minimizerOptions);

  // Let terser generate a SourceMap
  if (sourceMap) {
    terserOptions.sourceMap = {
      asObject: true
    };
  }

  /** @type {ExtractedComments} */
  const extractedComments = [];
  if (terserOptions.output) {
    terserOptions.output.comments = buildComments(terserOptions, extractedComments);
  } else if (terserOptions.format) {
    terserOptions.format.comments = buildComments(terserOptions, extractedComments);
  }
  if (terserOptions.compress) {
    // More optimizations
    if (typeof terserOptions.compress.ecma === "undefined") {
      terserOptions.compress.ecma = terserOptions.ecma;
    }

    // https://github.com/webpack/webpack/issues/16135
    if (terserOptions.ecma === 5 && typeof terserOptions.compress.arrows === "undefined") {
      terserOptions.compress.arrows = false;
    }
  }
  const [[filename, code]] = Object.entries(input);
  const result = await minify({
    [filename]: code
  }, terserOptions);
  return {
    code: (/** @type {string} * */result.code),
    map: result.map ? (/** @type {RawSourceMap} * */result.map) : undefined,
    extractedComments
  };
}

/**
 * @returns {string | undefined} the minimizer version
 */
terserMinify.getMinimizerVersion = () => {
  let packageJson;
  try {
    packageJson = require("terser/package.json");
  } catch (_err) {
    // Ignore
  }
  return packageJson && packageJson.version;
};

/**
 * @returns {boolean | undefined} true if worker thread is supported, false otherwise
 */
terserMinify.supportsWorkerThreads = () => true;

/* istanbul ignore next */
/**
 * @param {Input} input input
 * @param {RawSourceMap=} sourceMap source map
 * @param {CustomOptions=} minimizerOptions options
 * @param {ExtractCommentsOptions=} extractComments extract comments option
 * @returns {Promise<MinimizedResult>} minimized result
 */
async function uglifyJsMinify(input, sourceMap, minimizerOptions, extractComments) {
  // eslint-disable-next-line jsdoc/no-restricted-syntax
  /**
   * @param {unknown} value value
   * @returns {value is object} true when value is object or function
   */
  const isObject = value => {
    const type = typeof value;

    // eslint-disable-next-line no-eq-null, eqeqeq
    return value != null && (type === "object" || type === "function");
  };

  /**
   * @param {import("uglify-js").MinifyOptions & { sourceMap: boolean | import("uglify-js").SourceMapOptions | undefined } & { output: import("uglify-js").OutputOptions & { beautify: boolean } }} uglifyJsOptions uglify-js options
   * @param {ExtractedComments} extractedComments extracted comments
   * @returns {ExtractCommentsFunction} extract comments function
   */
  const buildComments = (uglifyJsOptions, extractedComments) => {
    /** @type {{ [index: string]: ExtractCommentsCondition }} */
    const condition = {};
    const {
      comments
    } = uglifyJsOptions.output;
    condition.preserve = typeof comments !== "undefined" ? comments : false;
    if (typeof extractComments === "boolean" && extractComments) {
      condition.extract = "some";
    } else if (typeof extractComments === "string" || extractComments instanceof RegExp) {
      condition.extract = extractComments;
    } else if (typeof extractComments === "function") {
      condition.extract = extractComments;
    } else if (extractComments && isObject(extractComments)) {
      condition.extract = typeof extractComments.condition === "boolean" && extractComments.condition ? "some" : typeof extractComments.condition !== "undefined" ? extractComments.condition : "some";
    } else {
      // No extract
      // Preserve using "commentsOpts" or "some"
      condition.preserve = typeof comments !== "undefined" ? comments : "some";
      condition.extract = false;
    }

    // Ensure that both conditions are functions
    for (const key of ["preserve", "extract"]) {
      /** @type {undefined | string} */
      let regexStr;
      /** @type {undefined | RegExp} */
      let regex;
      switch (typeof condition[key]) {
        case "boolean":
          condition[key] = condition[key] ? () => true : () => false;
          break;
        case "function":
          break;
        case "string":
          if (condition[key] === "all") {
            condition[key] = () => true;
            break;
          }
          if (condition[key] === "some") {
            condition[key] = /** @type {ExtractCommentsFunction} */
            (astNode, comment) => (comment.type === "comment2" || comment.type === "comment1") && /@preserve|@lic|@cc_on|^\**!/i.test(comment.value);
            break;
          }
          regexStr = /** @type {string} */condition[key];
          condition[key] = /** @type {ExtractCommentsFunction} */
          (astNode, comment) => new RegExp(/** @type {string} */regexStr).test(comment.value);
          break;
        default:
          regex = /** @type {RegExp} */condition[key];
          condition[key] = /** @type {ExtractCommentsFunction} */
          (astNode, comment) => /** @type {RegExp} */regex.test(comment.value);
      }
    }

    // Redefine the comments function to extract and preserve
    // comments according to the two conditions
    return (astNode, comment) => {
      if (/** @type {{ extract: ExtractCommentsFunction }} */
      condition.extract(astNode, comment)) {
        const commentText = comment.type === "comment2" ? `/*${comment.value}*/` : `//${comment.value}`;

        // Don't include duplicate comments
        if (!extractedComments.includes(commentText)) {
          extractedComments.push(commentText);
        }
      }
      return /** @type {{ preserve: ExtractCommentsFunction }} */condition.preserve(astNode, comment);
    };
  };

  /**
   * @param {PredefinedOptions<import("uglify-js").MinifyOptions> & import("uglify-js").MinifyOptions=} uglifyJsOptions uglify-js options
   * @returns {import("uglify-js").MinifyOptions & { sourceMap: boolean | import("uglify-js").SourceMapOptions | undefined } & { output: import("uglify-js").OutputOptions & { beautify: boolean } }} uglify-js options
   */
  const buildUglifyJsOptions = (uglifyJsOptions = {}) => {
    if (typeof uglifyJsOptions.ecma !== "undefined") {
      delete uglifyJsOptions.ecma;
    }
    if (typeof uglifyJsOptions.module !== "undefined") {
      delete uglifyJsOptions.module;
    }

    // Need deep copy objects to avoid https://github.com/terser/terser/issues/366
    return {
      ...uglifyJsOptions,
      // warnings: uglifyJsOptions.warnings,
      parse: {
        ...uglifyJsOptions.parse
      },
      compress: typeof uglifyJsOptions.compress === "boolean" ? uglifyJsOptions.compress : {
        ...uglifyJsOptions.compress
      },
      mangle:
      // eslint-disable-next-line no-eq-null, eqeqeq
      uglifyJsOptions.mangle == null ? true : typeof uglifyJsOptions.mangle === "boolean" ? uglifyJsOptions.mangle : {
        ...uglifyJsOptions.mangle
      },
      output: {
        beautify: false,
        ...uglifyJsOptions.output
      },
      // Ignoring sourceMap from options

      sourceMap: undefined
      // toplevel: uglifyJsOptions.toplevel
      // nameCache: { ...uglifyJsOptions.toplevel },
      // ie8: uglifyJsOptions.ie8,
      // keep_fnames: uglifyJsOptions.keep_fnames,
    };
  };
  let minify;
  try {
    ({
      minify
    } = require("uglify-js"));
  } catch (err) {
    return {
      errors: [(/** @type {Error} */err)]
    };
  }

  // Copy `uglify-js` options
  const uglifyJsOptions = buildUglifyJsOptions(minimizerOptions);

  // Let terser generate a SourceMap
  if (sourceMap) {
    uglifyJsOptions.sourceMap = true;
  }

  /** @type {ExtractedComments} */
  const extractedComments = [];

  // @ts-expect-error wrong types in uglify-js
  uglifyJsOptions.output.comments = buildComments(uglifyJsOptions, extractedComments);
  const [[filename, code]] = Object.entries(input);
  const result = await minify({
    [filename]: code
  }, uglifyJsOptions);
  return {
    code: result.code,
    map: result.map ? JSON.parse(result.map) : undefined,
    errors: result.error ? [result.error] : [],
    warnings: result.warnings || [],
    extractedComments
  };
}

/**
 * @returns {string | undefined} the minimizer version
 */
uglifyJsMinify.getMinimizerVersion = () => {
  let packageJson;
  try {
    packageJson = require("uglify-js/package.json");
  } catch (_err) {
    // Ignore
  }
  return packageJson && packageJson.version;
};

/**
 * @returns {boolean | undefined} true if worker thread is supported, false otherwise
 */
uglifyJsMinify.supportsWorkerThreads = () => true;

/* istanbul ignore next */
/**
 * @param {Input} input input
 * @param {RawSourceMap=} sourceMap source map
 * @param {CustomOptions=} minimizerOptions options
 * @returns {Promise<MinimizedResult>} minimized result
 */
async function swcMinify(input, sourceMap, minimizerOptions) {
  /**
   * @param {PredefinedOptions<import("@swc/core").JsMinifyOptions> & import("@swc/core").JsMinifyOptions=} swcOptions swc options
   * @returns {import("@swc/core").JsMinifyOptions & { sourceMap: undefined | boolean } & { compress: import("@swc/core").TerserCompressOptions }} built swc options
   */
  const buildSwcOptions = (swcOptions = {}) => (
  // Need deep copy objects to avoid https://github.com/terser/terser/issues/366
  {
    ...swcOptions,
    compress: typeof swcOptions.compress === "boolean" ? swcOptions.compress ? {} : false : {
      ...swcOptions.compress
    },
    mangle:
    // eslint-disable-next-line no-eq-null, eqeqeq
    swcOptions.mangle == null ? true : typeof swcOptions.mangle === "boolean" ? swcOptions.mangle : {
      ...swcOptions.mangle
    },
    // ecma: swcOptions.ecma,
    // keep_classnames: swcOptions.keep_classnames,
    // keep_fnames: swcOptions.keep_fnames,
    // module: swcOptions.module,
    // safari10: swcOptions.safari10,
    // toplevel: swcOptions.toplevel

    sourceMap: undefined
  });
  let swc;
  try {
    swc = require("@swc/core");
  } catch (err) {
    return {
      errors: [(/** @type {Error} */err)]
    };
  }

  // Copy `swc` options
  const swcOptions = buildSwcOptions(minimizerOptions);

  // Let `swc` generate a SourceMap
  if (sourceMap) {
    swcOptions.sourceMap = true;
  }
  if (swcOptions.compress) {
    // More optimizations
    if (typeof swcOptions.compress.ecma === "undefined") {
      swcOptions.compress.ecma = swcOptions.ecma;
    }

    // https://github.com/webpack/webpack/issues/16135
    if (swcOptions.ecma === 5 && typeof swcOptions.compress.arrows === "undefined") {
      swcOptions.compress.arrows = false;
    }
  }
  const [[filename, code]] = Object.entries(input);
  const result = await swc.minify(code, swcOptions);
  let map;
  if (result.map) {
    map = JSON.parse(result.map);

    // TODO workaround for swc because `filename` is not preset as in `swc` signature as for `terser`
    map.sources = [filename];
    delete map.sourcesContent;
  }
  return {
    code: result.code,
    map
  };
}

/**
 * @returns {string | undefined} the minimizer version
 */
swcMinify.getMinimizerVersion = () => {
  let packageJson;
  try {
    packageJson = require("@swc/core/package.json");
  } catch (_err) {
    // Ignore
  }
  return packageJson && packageJson.version;
};

/**
 * @returns {boolean | undefined} true if worker thread is supported, false otherwise
 */
swcMinify.supportsWorkerThreads = () => false;

/* istanbul ignore next */
/**
 * @param {Input} input input
 * @param {RawSourceMap=} sourceMap source map
 * @param {CustomOptions=} minimizerOptions options
 * @returns {Promise<MinimizedResult>} minimized result
 */
async function esbuildMinify(input, sourceMap, minimizerOptions) {
  /**
   * @param {PredefinedOptions<import("esbuild").TransformOptions> & import("esbuild").TransformOptions=} esbuildOptions esbuild options
   * @returns {import("esbuild").TransformOptions} built esbuild options
   */
  const buildEsbuildOptions = (esbuildOptions = {}) => {
    delete esbuildOptions.ecma;
    if (esbuildOptions.module) {
      esbuildOptions.format = "esm";
    }
    delete esbuildOptions.module;

    // Need deep copy objects to avoid https://github.com/terser/terser/issues/366
    return {
      minify: true,
      legalComments: "inline",
      ...esbuildOptions,
      sourcemap: false
    };
  };
  let esbuild;
  try {
    esbuild = require("esbuild");
  } catch (err) {
    return {
      errors: [(/** @type {Error} */err)]
    };
  }

  // Copy `esbuild` options
  const esbuildOptions = buildEsbuildOptions(minimizerOptions);

  // Let `esbuild` generate a SourceMap
  if (sourceMap) {
    esbuildOptions.sourcemap = true;
    esbuildOptions.sourcesContent = false;
  }
  const [[filename, code]] = Object.entries(input);
  esbuildOptions.sourcefile = filename;
  const result = await esbuild.transform(code, esbuildOptions);
  return {
    code: result.code,
    map: result.map ? JSON.parse(result.map) : undefined,
    warnings: result.warnings.length > 0 ? result.warnings.map(item => {
      const plugin = item.pluginName ? `\nPlugin Name: ${item.pluginName}` : "";
      const location = item.location ? `\n\n${item.location.file}:${item.location.line}:${item.location.column}:\n  ${item.location.line} | ${item.location.lineText}\n\nSuggestion: ${item.location.suggestion}` : "";
      const notes = item.notes.length > 0 ? `\n\nNotes:\n${item.notes.map(note => `${note.location ? `[${note.location.file}:${note.location.line}:${note.location.column}] ` : ""}${note.text}${note.location ? `\nSuggestion: ${note.location.suggestion}` : ""}${note.location ? `\nLine text:\n${note.location.lineText}\n` : ""}`).join("\n")}` : "";
      return `${item.text} [${item.id}]${plugin}${location}${item.detail ? `\nDetails:\n${item.detail}` : ""}${notes}`;
    }) : []
  };
}

/**
 * @returns {string | undefined} the minimizer version
 */
esbuildMinify.getMinimizerVersion = () => {
  let packageJson;
  try {
    packageJson = require("esbuild/package.json");
  } catch (_err) {
    // Ignore
  }
  return packageJson && packageJson.version;
};

/**
 * @returns {boolean | undefined} true if worker thread is supported, false otherwise
 */
esbuildMinify.supportsWorkerThreads = () => false;

/* istanbul ignore next */
/**
 * @param {Input} input input
 * @param {RawSourceMap=} sourceMap source map
 * @param {CustomOptions=} minimizerOptions options
 * @returns {Promise<MinimizedResult>} minimized result
 */
async function jsonMinify(input, sourceMap, minimizerOptions) {
  const options = /** @type {{ replacer?: Parameters<typeof JSON.stringify>[1], space?: Parameters<typeof JSON.stringify>[2] }} */
  minimizerOptions;
  const [[, code]] = Object.entries(input);
  const result = JSON.stringify(JSON.parse(code), options.replacer, options.space);
  return {
    code: result
  };
}
jsonMinify.getMinimizerVersion = () => "1.0.0";
jsonMinify.supportsWorker = () => false;
jsonMinify.supportsWorkerThreads = () => false;

/**
 * @template T
 * @typedef {() => T} FunctionReturning
 */

/**
 * @template T
 * @param {FunctionReturning<T>} fn memorized function
 * @returns {FunctionReturning<T>} new function
 */
function memoize(fn) {
  let cache = false;
  /** @type {T} */
  let result;
  return () => {
    if (cache) {
      return result;
    }
    result = fn();
    cache = true;
    // Allow to clean up memory for fn
    // and all dependent resources
    /** @type {FunctionReturning<T> | undefined} */
    fn = undefined;
    return /** @type {T} */result;
  };
}
module.exports = {
  esbuildMinify,
  jsonMinify,
  memoize,
  swcMinify,
  terserMinify,
  throttleAll,
  uglifyJsMinify
};