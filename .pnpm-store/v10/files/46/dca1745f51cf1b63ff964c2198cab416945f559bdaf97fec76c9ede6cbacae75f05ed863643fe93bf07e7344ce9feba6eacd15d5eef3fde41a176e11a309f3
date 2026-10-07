"use strict";

const minify = async options => {
  const minifyFns = typeof options.minify === 'function' ? [options.minify] : options.minify;
  const result = {
    code: options.input,
    map: options.inputSourceMap,
    warnings: []
  };

  for (let i = 0; i <= minifyFns.length - 1; i++) {
    const minifyFn = minifyFns[i];
    const minifyOptions = Array.isArray(options.minifyOptions) ? options.minifyOptions[i] : options.minifyOptions; // eslint-disable-next-line no-await-in-loop

    const minifyResult = await minifyFn({
      [options.name]: result.code
    }, result.map, minifyOptions);
    result.code = minifyResult.code;
    result.map = minifyResult.map;
    result.warnings = result.warnings.concat(minifyResult.warnings || []);
  }

  if (result.warnings.length > 0) {
    result.warnings = result.warnings.map(warning => warning.toString());
  }

  return result;
};

async function transform(options) {
  // 'use strict' => this === undefined (Clean Scope)
  // Safer for possible security issues, albeit not critical at all here
  // eslint-disable-next-line no-new-func, no-param-reassign
  const evaluatedOptions = new Function('exports', 'require', 'module', '__filename', '__dirname', `'use strict'\nreturn ${options}`)(exports, require, module, __filename, __dirname);
  const result = await minify(evaluatedOptions);

  if (result.error) {
    throw result.error;
  } else {
    return result;
  }
}

module.exports.minify = minify;
module.exports.transform = transform;