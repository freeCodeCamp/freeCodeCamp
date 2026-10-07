var prepare = require('./prepare/index');
var mergeAtrule = require('./1-mergeAtrule');
var initialMergeRuleset = require('./2-initialMergeRuleset');
var disjoinRuleset = require('./3-disjoinRuleset');
var restructShorthand = require('./4-restructShorthand');
var restructBlock = require('./6-restructBlock');
var mergeRuleset = require('./7-mergeRuleset');
var restructRuleset = require('./8-restructRuleset');

module.exports = function(ast, options) {
    // prepare ast for restructing
    var indexer = prepare(ast, options);
    options.logger('prepare', ast);

    mergeAtrule(ast, options);
    options.logger('mergeAtrule', ast);

    initialMergeRuleset(ast);
    options.logger('initialMergeRuleset', ast);

    disjoinRuleset(ast);
    options.logger('disjoinRuleset', ast);

    restructShorthand(ast, indexer);
    options.logger('restructShorthand', ast);

    restructBlock(ast);
    options.logger('restructBlock', ast);

    mergeRuleset(ast);
    options.logger('mergeRuleset', ast);

    restructRuleset(ast);
    options.logger('restructRuleset', ast);
};
