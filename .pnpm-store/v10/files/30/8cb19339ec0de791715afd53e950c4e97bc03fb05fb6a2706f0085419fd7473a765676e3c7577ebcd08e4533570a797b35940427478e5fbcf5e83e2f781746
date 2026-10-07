// source of inspiration: https://github.com/sindresorhus/require-fool-webpack
var requireFoolWebpack = eval(
    'typeof require !== \'undefined\' ' +
    '? require ' +
    ': function (module) { throw new Error(\'Module " + module + " not found.\') }'
);

module.exports = requireFoolWebpack;
