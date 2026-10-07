"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _loaderUtils = _interopRequireDefault(require("loader-utils"));

var _schemaUtils = require("schema-utils");

var _isEqualLocals = _interopRequireDefault(require("./runtime/isEqualLocals"));

var _options = _interopRequireDefault(require("./options.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const loaderApi = () => {};

loaderApi.pitch = function loader(request) {
  const options = _loaderUtils.default.getOptions(this);

  (0, _schemaUtils.validate)(_options.default, options, {
    name: 'Style Loader',
    baseDataPath: 'options'
  });
  const insert = typeof options.insert === 'undefined' ? '"head"' : typeof options.insert === 'string' ? JSON.stringify(options.insert) : options.insert.toString();
  const injectType = options.injectType || 'styleTag';
  const esModule = typeof options.esModule !== 'undefined' ? options.esModule : true;
  const namedExport = esModule && options.modules && options.modules.namedExport;
  const runtimeOptions = {
    injectType: options.injectType,
    attributes: options.attributes,
    insert: options.insert,
    base: options.base
  };

  switch (injectType) {
    case 'linkTag':
      {
        const hmrCode = this.hot ? `
if (module.hot) {
  module.hot.accept(
    ${_loaderUtils.default.stringifyRequest(this, `!!${request}`)},
    function() {
     ${esModule ? 'update(content);' : `content = require(${_loaderUtils.default.stringifyRequest(this, `!!${request}`)});

           content = content.__esModule ? content.default : content;

           update(content);`}
    }
  );

  module.hot.dispose(function() {
    update();
  });
}` : '';
        return `${esModule ? `import api from ${_loaderUtils.default.stringifyRequest(this, `!${_path.default.join(__dirname, 'runtime/injectStylesIntoLinkTag.js')}`)};
            import content from ${_loaderUtils.default.stringifyRequest(this, `!!${request}`)};` : `var api = require(${_loaderUtils.default.stringifyRequest(this, `!${_path.default.join(__dirname, 'runtime/injectStylesIntoLinkTag.js')}`)});
            var content = require(${_loaderUtils.default.stringifyRequest(this, `!!${request}`)});

            content = content.__esModule ? content.default : content;`}

var options = ${JSON.stringify(runtimeOptions)};

options.insert = ${insert};

var update = api(content, options);

${hmrCode}

${esModule ? 'export default {}' : ''}`;
      }

    case 'lazyStyleTag':
    case 'lazySingletonStyleTag':
      {
        const isSingleton = injectType === 'lazySingletonStyleTag';
        const hmrCode = this.hot ? `
if (module.hot) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = ${_isEqualLocals.default.toString()};
    var oldLocals = ${namedExport ? 'locals' : 'content.locals'};

    module.hot.accept(
      ${_loaderUtils.default.stringifyRequest(this, `!!${request}`)},
      function () {
        ${esModule ? `if (!isEqualLocals(oldLocals, ${namedExport ? 'locals' : 'content.locals'}, ${namedExport})) {
                module.hot.invalidate();

                return;
              }

              oldLocals = ${namedExport ? 'locals' : 'content.locals'};

              if (update && refs > 0) {
                update(content);
              }` : `content = require(${_loaderUtils.default.stringifyRequest(this, `!!${request}`)});

              content = content.__esModule ? content.default : content;

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              if (update && refs > 0) {
                update(content);
              }`}
      }
    )
  }

  module.hot.dispose(function() {
    if (update) {
      update();
    }
  });
}` : '';
        return `${esModule ? `import api from ${_loaderUtils.default.stringifyRequest(this, `!${_path.default.join(__dirname, 'runtime/injectStylesIntoStyleTag.js')}`)};
            import content${namedExport ? ', * as locals' : ''} from ${_loaderUtils.default.stringifyRequest(this, `!!${request}`)};` : `var api = require(${_loaderUtils.default.stringifyRequest(this, `!${_path.default.join(__dirname, 'runtime/injectStylesIntoStyleTag.js')}`)});
            var content = require(${_loaderUtils.default.stringifyRequest(this, `!!${request}`)});

            content = content.__esModule ? content.default : content;`}

var refs = 0;
var update;
var options = ${JSON.stringify(runtimeOptions)};

options.insert = ${insert};
options.singleton = ${isSingleton};

var exported = {};

${namedExport ? '' : 'exported.locals = content.locals || {};'}
exported.use = function() {
  if (!(refs++)) {
    update = api(content, options);
  }

  return exported;
};
exported.unuse = function() {
  if (refs > 0 && !--refs) {
    update();
    update = null;
  }
};

${hmrCode}

${esModule ? `${namedExport ? `export * from ${_loaderUtils.default.stringifyRequest(this, `!!${request}`)};` : ''};
       export default exported;` : 'module.exports = exported;'}
`;
      }

    case 'styleTag':
    case 'singletonStyleTag':
    default:
      {
        const isSingleton = injectType === 'singletonStyleTag';
        const hmrCode = this.hot ? `
if (module.hot) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = ${_isEqualLocals.default.toString()};
    var oldLocals = ${namedExport ? 'locals' : 'content.locals'};

    module.hot.accept(
      ${_loaderUtils.default.stringifyRequest(this, `!!${request}`)},
      function () {
        ${esModule ? `if (!isEqualLocals(oldLocals, ${namedExport ? 'locals' : 'content.locals'}, ${namedExport})) {
                module.hot.invalidate();

                return;
              }

              oldLocals = ${namedExport ? 'locals' : 'content.locals'};

              update(content);` : `content = require(${_loaderUtils.default.stringifyRequest(this, `!!${request}`)});

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);`}
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}` : '';
        return `${esModule ? `import api from ${_loaderUtils.default.stringifyRequest(this, `!${_path.default.join(__dirname, 'runtime/injectStylesIntoStyleTag.js')}`)};
            import content${namedExport ? ', * as locals' : ''} from ${_loaderUtils.default.stringifyRequest(this, `!!${request}`)};` : `var api = require(${_loaderUtils.default.stringifyRequest(this, `!${_path.default.join(__dirname, 'runtime/injectStylesIntoStyleTag.js')}`)});
            var content = require(${_loaderUtils.default.stringifyRequest(this, `!!${request}`)});

            content = content.__esModule ? content.default : content;`}

var options = ${JSON.stringify(runtimeOptions)};

options.insert = ${insert};
options.singleton = ${isSingleton};

var update = api(content, options);

${hmrCode}

${esModule ? namedExport ? `export * from ${_loaderUtils.default.stringifyRequest(this, `!!${request}`)};` : 'export default content.locals || {};' : 'module.exports = content.locals || {};'}`;
      }
  }
};

var _default = loaderApi;
exports.default = _default;