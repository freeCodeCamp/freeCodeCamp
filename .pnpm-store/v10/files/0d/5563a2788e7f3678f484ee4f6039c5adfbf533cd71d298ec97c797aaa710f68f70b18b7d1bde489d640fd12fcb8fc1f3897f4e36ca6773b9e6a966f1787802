var path = require('path');

var endsInBabelJs = /\.babel\.[jt]s(x)$/;

var mjsStub = path.join(__dirname, 'mjs-stub');

function ignoreNonBabelAndNodeModules(file) {
  return !endsInBabelJs.test(file) &&
    path.relative(process.cwd(), file).split(path.sep).indexOf('node_modules') >= 0;
}

var extensions = {
  '.babel.js': [
    {
      module: '@babel/register',
      register: function(hook) {
        hook({
          extensions: '.js',
          rootMode: 'upward-optional',
          ignore: [ignoreNonBabelAndNodeModules],
        });
      },
    },
    {
      module: 'babel-register',
      register: function(hook) {
        hook({
          extensions: '.js',
          ignore: ignoreNonBabelAndNodeModules,
        });
      },
    },
    {
      module: 'babel-core/register',
      register: function(hook) {
        hook({
          extensions: '.js',
          ignore: ignoreNonBabelAndNodeModules,
        });
      },
    },
    {
      module: 'babel/register',
      register: function(hook) {
        hook({
          extensions: '.js',
          ignore: ignoreNonBabelAndNodeModules,
        });
      },
    },
  ],
  '.babel.ts': [
    {
      module: '@babel/register',
      register: function(hook) {
        hook({
          extensions: '.ts',
          rootMode: 'upward-optional',
          ignore: [ignoreNonBabelAndNodeModules],
        });
      },
    },
  ],
  '.buble.js': 'buble/register',
  '.cirru': 'cirru-script/lib/register',
  '.cjsx': 'node-cjsx/register',
  '.co': 'coco',
  '.coffee': ['coffeescript/register', 'coffee-script/register', 'coffeescript', 'coffee-script'],
  '.coffee.md': ['coffeescript/register', 'coffee-script/register', 'coffeescript', 'coffee-script'],
  '.csv': 'require-csv',
  '.eg': 'earlgrey/register',
  '.esm.js': {
    module: 'esm',
    register: function(hook) {
      // register on .js extension due to https://github.com/joyent/node/blob/v0.12.0/lib/module.js#L353
      // which only captures the final extension (.babel.js -> .js)
      var esmLoader = hook(module);
      require.extensions['.js'] = esmLoader('module')._extensions['.js'];
    },
  },
  '.iced': ['iced-coffee-script/register', 'iced-coffee-script'],
  '.iced.md': 'iced-coffee-script/register',
  '.ini': 'require-ini',
  '.js': null,
  '.json': null,
  '.json5': ['json5/lib/register', 'json5/lib/require'],
  '.jsx': [
    {
      module: '@babel/register',
      register: function(hook) {
        hook({
          extensions: '.jsx',
          rootMode: 'upward-optional',
          ignore: [ignoreNonBabelAndNodeModules],
        });
      },
    },
    {
      module: 'babel-register',
      register: function(hook) {
        hook({
          extensions: '.jsx',
          ignore: ignoreNonBabelAndNodeModules,
        });
      },
    },
    {
      module: 'babel-core/register',
      register: function(hook) {
        hook({
          extensions: '.jsx',
          ignore: ignoreNonBabelAndNodeModules,
        });
      },
    },
    {
      module: 'babel/register',
      register: function(hook) {
        hook({
          extensions: '.jsx',
          ignore: ignoreNonBabelAndNodeModules,
        });
      },
    },
    {
      module: 'node-jsx',
      register: function(hook) {
        hook.install({ extension: '.jsx', harmony: true });
      },
    },
  ],
  '.litcoffee': ['coffeescript/register', 'coffee-script/register', 'coffeescript', 'coffee-script'],
  '.liticed': 'iced-coffee-script/register',
  '.ls': ['livescript', 'LiveScript'],
  '.mjs': mjsStub,
  '.node': null,
  '.toml': {
    module: 'toml-require',
    register: function(hook) {
      hook.install();
    },
  },
  '.ts': [
    'ts-node/register',
    'typescript-node/register',
    'typescript-register',
    'typescript-require',
    'sucrase/register/ts',
    {
      module: '@babel/register',
      register: function(hook) {
        hook({
          extensions: '.ts',
          rootMode: 'upward-optional',
          ignore: [ignoreNonBabelAndNodeModules],
        });
      },
    },
  ],
  '.tsx': [
    'ts-node/register',
    'typescript-node/register',
    'sucrase/register',
    {
      module: '@babel/register',
      register: function(hook) {
        hook({
          extensions: '.tsx',
          rootMode: 'upward-optional',
          ignore: [ignoreNonBabelAndNodeModules],
        });
      },
    },
  ],
  '.wisp': 'wisp/engine/node',
  '.xml': 'require-xml',
  '.yaml': 'require-yaml',
  '.yml': 'require-yaml',
};

var jsVariantExtensions = [
  '.js',
  '.babel.js',
  '.babel.ts',
  '.buble.js',
  '.cirru',
  '.cjsx',
  '.co',
  '.coffee',
  '.coffee.md',
  '.eg',
  '.esm.js',
  '.iced',
  '.iced.md',
  '.jsx',
  '.litcoffee',
  '.liticed',
  '.ls',
  '.mjs',
  '.ts',
  '.tsx',
  '.wisp',
];

module.exports = {
  extensions: extensions,
  jsVariants: jsVariantExtensions.reduce(function(result, ext) {
    result[ext] = extensions[ext];
    return result;
  }, {}),
};
