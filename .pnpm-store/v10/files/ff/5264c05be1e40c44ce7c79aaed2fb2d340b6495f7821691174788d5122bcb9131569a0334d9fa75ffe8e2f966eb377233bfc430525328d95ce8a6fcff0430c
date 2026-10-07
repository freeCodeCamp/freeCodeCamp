"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.validate = validate;
var _module = _interopRequireDefault(require("module"));
var path = _interopRequireWildcard(require("path"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// @ts-ignore TS doesn't like accessing `_load`
const originalModuleLoad = _module.default._load;
class EngineValidationError extends Error {
  constructor({
    request,
    relativeToRoot,
    parent
  }) {
    super(`Generated engines use disallowed import "${request}". Only allowed imports are to Node.js builtin modules or engines internals.`);
    this.request = request;
    this.relativeToRoot = relativeToRoot;
    this.parentPath = parent.filename;
  }
}
async function validate(directory) {
  // intercept module loading and validate no unexpected imports are happening
  // @ts-ignore TS doesn't like accessing `_load`
  _module.default._load = (request, parent, isMain) => {
    // Allow all node builtins
    if (_module.default.builtinModules.includes(request)) {
      return originalModuleLoad(request, parent, isMain);
    }

    // Allow imports to modules in engines directory.
    // For example: importing ".cache/page-ssr/routes/render-page" from
    // page-ssr engine should be allowed as it is part of engine.
    const allowedPrefixes = [path.join(`.cache`, `query-engine`), path.join(`.cache`, `page-ssr`)];
    const localRequire = _module.default.createRequire(parent.filename);
    const absPath = localRequire.resolve(request);
    const relativeToRoot = path.relative(directory, absPath);
    for (const allowedPrefix of allowedPrefixes) {
      if (relativeToRoot.startsWith(allowedPrefix)) {
        return originalModuleLoad(request, parent, isMain);
      }
    }

    // We throw on anything that is not allowed
    // Runtime might have try/catch for it and continue to work
    // (for example`msgpackr` have fallback if native `msgpack-extract` can't be loaded)
    // and we don't fail validation in those cases because error we throw will be handled.
    // We do want to fail validation if there is no fallback
    throw new EngineValidationError({
      request,
      relativeToRoot,
      parent
    });
  };

  // workaround for gatsby-worker issue:
  // gatsby-worker gets bundled in engines and it will auto-init "child" module
  // if GATSBY_WORKER_MODULE_PATH env var is set. To prevent this we just unset
  // env var so it's falsy.
  process.env.GATSBY_WORKER_MODULE_PATH = ``;

  // import engines, initiate them, if there is any error thrown it will be handled in parent process
  const {
    GraphQLEngine
  } = require(path.join(directory, `.cache`, `query-engine`));
  require(path.join(directory, `.cache`, `page-ssr`));
  const graphqlEngine = new GraphQLEngine({
    dbPath: path.join(directory, `.cache`, `data`, `datastore`)
  });
  await graphqlEngine.ready();
}
//# sourceMappingURL=child.js.map