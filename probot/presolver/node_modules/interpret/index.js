const extensions = {
  '.babel.js': [
    {
      module: '@babel/register',
      register: function (module) {
        module({
          // register on .js extension due to https://github.com/joyent/node/blob/v0.12.0/lib/module.js#L353
          // which only captures the final extension (.babel.js -> .js)
          extensions: '.js'
        });
      }
    },
    {
      module: 'babel-register',
      register: function (module) {
        module({
          // register on .js extension due to https://github.com/joyent/node/blob/v0.12.0/lib/module.js#L353
          // which only captures the final extension (.babel.js -> .js)
          extensions: '.js'
        });
      }
    },
    {
      module: 'babel-core/register',
      register: function (module) {
        module({
          extensions: '.js'
        });
      }
    },
    {
      module: 'babel/register',
      register: function (module) {
        module({
          extensions: '.js'
        });
      }
    }
  ],
  '.buble.js': 'buble/register',
  '.cirru': 'cirru-script/lib/register',
  '.cjsx': 'node-cjsx/register',
  '.co': 'coco',
  '.coffee': ['coffeescript/register', 'coffee-script/register', 'coffeescript', 'coffee-script'],
  '.coffee.md': ['coffeescript/register', 'coffee-script/register', 'coffeescript', 'coffee-script'],
  '.csv': 'require-csv',
  '.eg': 'earlgrey/register',
  '.iced': ['iced-coffee-script/register', 'iced-coffee-script'],
  '.iced.md': 'iced-coffee-script/register',
  '.ini': 'require-ini',
  '.js': null,
  '.json': null,
  '.json5': 'json5/lib/require',
  '.jsx': [
    {
      module: '@babel/register',
      register: function (module) {
        module({
          extensions: '.jsx'
        });
      }
    },
    {
      module: 'babel-register',
      register: function (module) {
        module({
          extensions: '.jsx'
        });
      }
    },
    {
      module: 'babel-core/register',
      register: function (module) {
        module({
          extensions: '.jsx'
        });
      }
    },
    {
      module: 'babel/register',
      register: function (module) {
        module({
          extensions: '.jsx'
        });
      },
    },
    {
      module: 'node-jsx',
      register: function (module) {
        module.install({
          extension: '.jsx',
          harmony: true
        });
      }
    }
  ],
  '.litcoffee': ['coffeescript/register', 'coffee-script/register', 'coffeescript', 'coffee-script'],
  '.liticed': 'iced-coffee-script/register',
  '.ls': ['livescript', 'LiveScript'],
  '.node': null,
  '.toml': {
    module: 'toml-require',
    register: function (module) {
      module.install();
    }
  },
  '.ts': ['ts-node/register', 'typescript-node/register', 'typescript-register', 'typescript-require'],
  '.tsx': ['ts-node/register', 'typescript-node/register'],
  '.wisp': 'wisp/engine/node',
  '.xml': 'require-xml',
  '.yaml': 'require-yaml',
  '.yml': 'require-yaml'
};

const jsVariantExtensions = [
  '.js',
  '.babel.js',
  '.buble.js',
  '.cirru',
  '.cjsx',
  '.co',
  '.coffee',
  '.coffee.md',
  '.eg',
  '.iced',
  '.iced.md',
  '.jsx',
  '.litcoffee',
  '.liticed',
  '.ls',
  '.ts',
  '.wisp'
];

module.exports = {
  extensions: extensions,
  jsVariants: jsVariantExtensions.reduce(function (result, ext) {
    result[ext] = extensions[ext];
    return result;
  }, {})
};
