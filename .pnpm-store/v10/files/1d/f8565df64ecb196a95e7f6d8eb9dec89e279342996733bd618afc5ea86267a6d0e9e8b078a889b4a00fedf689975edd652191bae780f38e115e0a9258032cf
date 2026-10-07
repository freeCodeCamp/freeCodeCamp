const path = require('path');
const url = require('url');

const forward = x => x;

const formattedImport = async (file, esmDecorator = forward) => {
  if (path.isAbsolute(file)) {
    try {
      return await exports.doImport(esmDecorator(url.pathToFileURL(file)));
    } catch (err) {
      // This is a hack created because ESM in Node.js (at least in Node v15.5.1) does not emit
      // the location of the syntax error in the error thrown.
      // This is problematic because the user can't see what file has the problem,
      // so we add the file location to the error.
      // TODO: remove once Node.js fixes the problem.
      if (
        err instanceof SyntaxError &&
        err.message &&
        err.stack &&
        !err.stack.includes(file)
      ) {
        const newErrorWithFilename = new SyntaxError(err.message);
        newErrorWithFilename.stack = err.stack.replace(
          /^SyntaxError/,
          `SyntaxError[ @${file} ]`
        );
        throw newErrorWithFilename;
      }
      throw err;
    }
  }
  return exports.doImport(esmDecorator(file));
};

exports.doImport = async file => import(file);

exports.requireOrImport = async (file, esmDecorator) => {
  if (path.extname(file) === '.mjs') {
    return formattedImport(file, esmDecorator);
  }
  try {
    return dealWithExports(await formattedImport(file, esmDecorator));
  } catch (err) {
    if (
      err.code === 'ERR_MODULE_NOT_FOUND' ||
      err.code === 'ERR_UNKNOWN_FILE_EXTENSION' ||
      err.code === 'ERR_UNSUPPORTED_DIR_IMPORT'
    ) {
      try {
        // Importing a file usually works, but the resolution of `import` is the ESM
        // resolution algorithm, and not the CJS resolution algorithm. We may have
        // failed because we tried the ESM resolution, so we try to `require` it.
        return require(file);
      } catch (requireErr) {
        if (
          requireErr.code === 'ERR_REQUIRE_ESM' ||
          (requireErr instanceof SyntaxError &&
            requireErr
              .toString()
              .includes('Cannot use import statement outside a module'))
        ) {
          // ERR_REQUIRE_ESM happens when the test file is a JS file, but via type:module is actually ESM,
          // AND has an import to a file that doesn't exist.
          // This throws an `ERR_MODULE_NOT_FOUND` error above,
          // and when we try to `require` it here, it throws an `ERR_REQUIRE_ESM`.
          // What we want to do is throw the original error (the `ERR_MODULE_NOT_FOUND`),
          // and not the `ERR_REQUIRE_ESM` error, which is a red herring.
          //
          // SyntaxError happens when in an edge case: when we're using an ESM loader that loads
          // a `test.ts` file (i.e. unrecognized extension), and that file includes an unknown
          // import (which throws an ERR_MODULE_NOT_FOUND). `require`-ing it will throw the
          // syntax error, because we cannot require a file that has `import`-s.
          throw err;
        } else {
          throw requireErr;
        }
      }
    } else {
      throw err;
    }
  }
};

function dealWithExports(module) {
  if (module.default) {
    return module.default;
  } else {
    return {...module, default: undefined};
  }
}

exports.loadFilesAsync = async (
  files,
  preLoadFunc,
  postLoadFunc,
  esmDecorator
) => {
  for (const file of files) {
    preLoadFunc(file);
    const result = await exports.requireOrImport(
      path.resolve(file),
      esmDecorator
    );
    postLoadFunc(file, result);
  }
};
