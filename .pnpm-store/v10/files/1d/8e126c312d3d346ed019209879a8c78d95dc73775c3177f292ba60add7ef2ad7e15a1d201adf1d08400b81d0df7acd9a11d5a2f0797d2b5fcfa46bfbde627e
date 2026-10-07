'use strict';

var tslib = require('tslib');
require('source-map-support/register');
var chai = require('chai');
var graphql = require('graphql');

var docCache = new Map();
var fragmentSourceMap = new Map();
var printFragmentWarnings = true;
var experimentalFragmentVariables = false;
function normalize(string) {
    return string.replace(/[\s,]+/g, ' ').trim();
}
function cacheKeyFromLoc(loc) {
    return normalize(loc.source.body.substring(loc.start, loc.end));
}
function processFragments(ast) {
    var seenKeys = new Set();
    var definitions = [];
    ast.definitions.forEach(function (fragmentDefinition) {
        if (fragmentDefinition.kind === 'FragmentDefinition') {
            var fragmentName = fragmentDefinition.name.value;
            var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);
            var sourceKeySet = fragmentSourceMap.get(fragmentName);
            if (sourceKeySet && !sourceKeySet.has(sourceKey)) {
                if (printFragmentWarnings) {
                    console.warn("Warning: fragment with name " + fragmentName + " already exists.\n"
                        + "graphql-tag enforces all fragment names across your application to be unique; read more about\n"
                        + "this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
                }
            }
            else if (!sourceKeySet) {
                fragmentSourceMap.set(fragmentName, sourceKeySet = new Set);
            }
            sourceKeySet.add(sourceKey);
            if (!seenKeys.has(sourceKey)) {
                seenKeys.add(sourceKey);
                definitions.push(fragmentDefinition);
            }
        }
        else {
            definitions.push(fragmentDefinition);
        }
    });
    return tslib.__assign(tslib.__assign({}, ast), { definitions: definitions });
}
function stripLoc(doc) {
    var workSet = new Set(doc.definitions);
    workSet.forEach(function (node) {
        if (node.loc)
            delete node.loc;
        Object.keys(node).forEach(function (key) {
            var value = node[key];
            if (value && typeof value === 'object') {
                workSet.add(value);
            }
        });
    });
    var loc = doc.loc;
    if (loc) {
        delete loc.startToken;
        delete loc.endToken;
    }
    return doc;
}
function parseDocument(source) {
    var cacheKey = normalize(source);
    if (!docCache.has(cacheKey)) {
        var parsed = graphql.parse(source, {
            experimentalFragmentVariables: experimentalFragmentVariables,
            allowLegacyFragmentVariables: experimentalFragmentVariables
        });
        if (!parsed || parsed.kind !== 'Document') {
            throw new Error('Not a valid GraphQL document.');
        }
        docCache.set(cacheKey, stripLoc(processFragments(parsed)));
    }
    return docCache.get(cacheKey);
}
function gql(literals) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (typeof literals === 'string') {
        literals = [literals];
    }
    var result = literals[0];
    args.forEach(function (arg, i) {
        if (arg && arg.kind === 'Document') {
            result += arg.loc.source.body;
        }
        else {
            result += arg;
        }
        result += literals[i + 1];
    });
    return parseDocument(result);
}
function resetCaches() {
    docCache.clear();
    fragmentSourceMap.clear();
}
function disableFragmentWarnings() {
    printFragmentWarnings = false;
}
function enableExperimentalFragmentVariables() {
    experimentalFragmentVariables = true;
}
function disableExperimentalFragmentVariables() {
    experimentalFragmentVariables = false;
}
var extras = {
    gql: gql,
    resetCaches: resetCaches,
    disableFragmentWarnings: disableFragmentWarnings,
    enableExperimentalFragmentVariables: enableExperimentalFragmentVariables,
    disableExperimentalFragmentVariables: disableExperimentalFragmentVariables
};
(function (gql_1) {
    gql_1.gql = extras.gql, gql_1.resetCaches = extras.resetCaches, gql_1.disableFragmentWarnings = extras.disableFragmentWarnings, gql_1.enableExperimentalFragmentVariables = extras.enableExperimentalFragmentVariables, gql_1.disableExperimentalFragmentVariables = extras.disableExperimentalFragmentVariables;
})(gql || (gql = {}));
gql["default"] = gql;
var gql$1 = gql;

var loader = require('../loader');
describe('gql', function () {
    it('parses queries', function () {
        chai.assert.equal(gql$1(templateObject_1 || (templateObject_1 = tslib.__makeTemplateObject(["{ testQuery }"], ["{ testQuery }"]))).kind, 'Document');
    });
    it('parses queries when called as a function', function () {
        chai.assert.equal(gql$1('{ testQuery }').kind, 'Document');
    });
    it('parses queries with weird substitutions', function () {
        var obj = Object.create(null);
        chai.assert.equal(gql$1(templateObject_2 || (templateObject_2 = tslib.__makeTemplateObject(["{ field(input: \"", "\") }"], ["{ field(input: \"", "\") }"])), obj.missing).kind, 'Document');
        chai.assert.equal(gql$1(templateObject_3 || (templateObject_3 = tslib.__makeTemplateObject(["{ field(input: \"", "\") }"], ["{ field(input: \"", "\") }"])), null).kind, 'Document');
        chai.assert.equal(gql$1(templateObject_4 || (templateObject_4 = tslib.__makeTemplateObject(["{ field(input: \"", "\") }"], ["{ field(input: \"", "\") }"])), 0).kind, 'Document');
    });
    it('allows interpolation of documents generated by the webpack loader', function () {
        var sameFragment = "fragment SomeFragmentName on SomeType { someField }";
        var jsSource = loader.call({ cacheable: function () { } }, sameFragment);
        var module = { exports: Object.create(null) };
        Function("module", jsSource)(module);
        var document = gql$1(templateObject_5 || (templateObject_5 = tslib.__makeTemplateObject(["query { ...SomeFragmentName } ", ""], ["query { ...SomeFragmentName } ", ""])), module.exports);
        chai.assert.equal(document.kind, 'Document');
        chai.assert.equal(document.definitions.length, 2);
        chai.assert.equal(document.definitions[0].kind, 'OperationDefinition');
        chai.assert.equal(document.definitions[1].kind, 'FragmentDefinition');
    });
    it('parses queries through webpack loader', function () {
        var jsSource = loader.call({ cacheable: function () { } }, '{ testQuery }');
        var module = { exports: Object.create(null) };
        Function("module", jsSource)(module);
        chai.assert.equal(module.exports.kind, 'Document');
    });
    it('parses single query through webpack loader', function () {
        var jsSource = loader.call({ cacheable: function () { } }, "\n      query Q1 { testQuery }\n    ");
        var module = { exports: Object.create(null) };
        Function("module", jsSource)(module);
        chai.assert.equal(module.exports.kind, 'Document');
        chai.assert.exists(module.exports.Q1);
        chai.assert.equal(module.exports.Q1.kind, 'Document');
        chai.assert.equal(module.exports.Q1.definitions.length, 1);
    });
    it('parses single query and exports as default', function () {
        var jsSource = loader.call({ cacheable: function () { } }, "\n      query Q1 { testQuery }\n    ");
        var module = { exports: Object.create(null) };
        Function("module", jsSource)(module);
        chai.assert.deepEqual(module.exports.definitions, module.exports.Q1.definitions);
    });
    it('parses multiple queries through webpack loader', function () {
        var jsSource = loader.call({ cacheable: function () { } }, "\n      query Q1 { testQuery }\n      query Q2 { testQuery2 }\n    ");
        var module = { exports: Object.create(null) };
        Function("module", jsSource)(module);
        chai.assert.exists(module.exports.Q1);
        chai.assert.exists(module.exports.Q2);
        chai.assert.equal(module.exports.Q1.kind, 'Document');
        chai.assert.equal(module.exports.Q2.kind, 'Document');
        chai.assert.equal(module.exports.Q1.definitions.length, 1);
        chai.assert.equal(module.exports.Q2.definitions.length, 1);
    });
    it('parses fragments with variable definitions', function () {
        gql$1.enableExperimentalFragmentVariables();
        var parsed = gql$1(templateObject_6 || (templateObject_6 = tslib.__makeTemplateObject(["fragment A ($arg: String!) on Type { testQuery }"], ["fragment A ($arg: String!) on Type { testQuery }"])));
        chai.assert.equal(parsed.kind, 'Document');
        chai.assert.exists(parsed.definitions[0].variableDefinitions);
        gql$1.disableExperimentalFragmentVariables();
    });
    it('does not nest queries needlessly in named exports', function () {
        var jsSource = loader.call({ cacheable: function () { } }, "\n      query Q1 { testQuery }\n      query Q2 { testQuery2 }\n      query Q3 { test Query3 }\n    ");
        var module = { exports: Object.create(null) };
        Function("module", jsSource)(module);
        chai.assert.notExists(module.exports.Q2.Q1);
        chai.assert.notExists(module.exports.Q3.Q1);
        chai.assert.notExists(module.exports.Q3.Q2);
    });
    it('tracks fragment dependencies from multiple queries through webpack loader', function () {
        var jsSource = loader.call({ cacheable: function () { } }, "\n      fragment F1 on F { testQuery }\n      fragment F2 on F { testQuery2 }\n      fragment F3 on F { testQuery3 }\n      query Q1 { ...F1 }\n      query Q2 { ...F2 }\n      query Q3 {\n        ...F1\n        ...F2\n      }\n    ");
        var module = { exports: Object.create(null) };
        Function("module", jsSource)(module);
        chai.assert.exists(module.exports.Q1);
        chai.assert.exists(module.exports.Q2);
        chai.assert.exists(module.exports.Q3);
        var Q1 = module.exports.Q1.definitions;
        var Q2 = module.exports.Q2.definitions;
        var Q3 = module.exports.Q3.definitions;
        chai.assert.equal(Q1.length, 2);
        chai.assert.equal(Q1[0].name.value, 'Q1');
        chai.assert.equal(Q1[1].name.value, 'F1');
        chai.assert.equal(Q2.length, 2);
        chai.assert.equal(Q2[0].name.value, 'Q2');
        chai.assert.equal(Q2[1].name.value, 'F2');
        chai.assert.equal(Q3.length, 3);
        chai.assert.equal(Q3[0].name.value, 'Q3');
        chai.assert.equal(Q3[1].name.value, 'F1');
        chai.assert.equal(Q3[2].name.value, 'F2');
        var F1 = module.exports.F1.definitions;
        var F2 = module.exports.F2.definitions;
        var F3 = module.exports.F3.definitions;
        chai.assert.equal(F1.length, 1);
        chai.assert.equal(F1[0].name.value, 'F1');
        chai.assert.equal(F2.length, 1);
        chai.assert.equal(F2[0].name.value, 'F2');
        chai.assert.equal(F3.length, 1);
        chai.assert.equal(F3[0].name.value, 'F3');
    });
    it('tracks fragment dependencies across nested fragments', function () {
        var jsSource = loader.call({ cacheable: function () { } }, "\n      fragment F11 on F { testQuery }\n      fragment F22 on F {\n        ...F11\n        testQuery2\n      }\n      fragment F33 on F {\n        ...F22\n        testQuery3\n      }\n\n      query Q1 {\n        ...F33\n      }\n\n      query Q2 {\n        id\n      }\n    ");
        var module = { exports: Object.create(null) };
        Function("module", jsSource)(module);
        chai.assert.exists(module.exports.Q1);
        chai.assert.exists(module.exports.Q2);
        var Q1 = module.exports.Q1.definitions;
        var Q2 = module.exports.Q2.definitions;
        chai.assert.equal(Q1.length, 4);
        chai.assert.equal(Q1[0].name.value, 'Q1');
        chai.assert.equal(Q1[1].name.value, 'F33');
        chai.assert.equal(Q1[2].name.value, 'F22');
        chai.assert.equal(Q1[3].name.value, 'F11');
        chai.assert.equal(Q2.length, 1);
        var F11 = module.exports.F11.definitions;
        var F22 = module.exports.F22.definitions;
        var F33 = module.exports.F33.definitions;
        chai.assert.equal(F11.length, 1);
        chai.assert.equal(F11[0].name.value, 'F11');
        chai.assert.equal(F22.length, 2);
        chai.assert.equal(F22[0].name.value, 'F22');
        chai.assert.equal(F22[1].name.value, 'F11');
        chai.assert.equal(F33.length, 3);
        chai.assert.equal(F33[0].name.value, 'F33');
        chai.assert.equal(F33[1].name.value, 'F22');
        chai.assert.equal(F33[2].name.value, 'F11');
    });
    it('correctly imports other files through the webpack loader', function () {
        var query = "#import \"./fragment_definition.graphql\"\n      query {\n        author {\n          ...authorDetails\n        }\n      }";
        var jsSource = loader.call({ cacheable: function () { } }, query);
        var module = { exports: Object.create(null) };
        var require = function (path) {
            chai.assert.equal(path, './fragment_definition.graphql');
            return gql$1(templateObject_7 || (templateObject_7 = tslib.__makeTemplateObject(["\n        fragment authorDetails on Author {\n          firstName\n          lastName\n        }"], ["\n        fragment authorDetails on Author {\n          firstName\n          lastName\n        }"])));
        };
        Function("module,require", jsSource)(module, require);
        chai.assert.equal(module.exports.kind, 'Document');
        var definitions = module.exports.definitions;
        chai.assert.equal(definitions.length, 2);
        chai.assert.equal(definitions[0].kind, 'OperationDefinition');
        chai.assert.equal(definitions[1].kind, 'FragmentDefinition');
    });
    it('tracks fragment dependencies across fragments loaded via the webpack loader', function () {
        var query = "#import \"./fragment_definition.graphql\"\n      fragment F111 on F {\n        ...F222\n      }\n\n      query Q1 {\n        ...F111\n      }\n\n      query Q2 {\n        a\n      }\n      ";
        var jsSource = loader.call({ cacheable: function () { } }, query);
        var module = { exports: Object.create(null) };
        var require = function (path) {
            chai.assert.equal(path, './fragment_definition.graphql');
            return gql$1(templateObject_8 || (templateObject_8 = tslib.__makeTemplateObject(["\n        fragment F222 on F {\n          f1\n          f2\n        }"], ["\n        fragment F222 on F {\n          f1\n          f2\n        }"])));
        };
        Function("module,require", jsSource)(module, require);
        chai.assert.exists(module.exports.Q1);
        chai.assert.exists(module.exports.Q2);
        var Q1 = module.exports.Q1.definitions;
        var Q2 = module.exports.Q2.definitions;
        chai.assert.equal(Q1.length, 3);
        chai.assert.equal(Q1[0].name.value, 'Q1');
        chai.assert.equal(Q1[1].name.value, 'F111');
        chai.assert.equal(Q1[2].name.value, 'F222');
        chai.assert.equal(Q2.length, 1);
    });
    it('does not complain when presented with normal comments', function (done) {
        chai.assert.doesNotThrow(function () {
            var query = "#normal comment\n        query {\n          author {\n            ...authorDetails\n          }\n        }";
            var jsSource = loader.call({ cacheable: function () { } }, query);
            var module = { exports: Object.create(null) };
            Function("module", jsSource)(module);
            chai.assert.equal(module.exports.kind, 'Document');
            done();
        });
    });
    it('returns the same object for the same query', function () {
        chai.assert.isTrue(gql$1(templateObject_9 || (templateObject_9 = tslib.__makeTemplateObject(["{ sameQuery }"], ["{ sameQuery }"]))) === gql$1(templateObject_10 || (templateObject_10 = tslib.__makeTemplateObject(["{ sameQuery }"], ["{ sameQuery }"]))));
    });
    it('returns the same object for the same query, even with whitespace differences', function () {
        chai.assert.isTrue(gql$1(templateObject_11 || (templateObject_11 = tslib.__makeTemplateObject(["{ sameQuery }"], ["{ sameQuery }"]))) === gql$1(templateObject_12 || (templateObject_12 = tslib.__makeTemplateObject(["  { sameQuery,   }"], ["  { sameQuery,   }"]))));
    });
    var fragmentAst = gql$1(templateObject_13 || (templateObject_13 = tslib.__makeTemplateObject(["\n  fragment UserFragment on User {\n    firstName\n    lastName\n  }\n"], ["\n  fragment UserFragment on User {\n    firstName\n    lastName\n  }\n"])));
    it('returns the same object for the same fragment', function () {
        chai.assert.isTrue(gql$1(templateObject_14 || (templateObject_14 = tslib.__makeTemplateObject(["fragment same on Same { sameQuery }"], ["fragment same on Same { sameQuery }"]))) === gql$1(templateObject_15 || (templateObject_15 = tslib.__makeTemplateObject(["fragment same on Same { sameQuery }"], ["fragment same on Same { sameQuery }"]))));
    });
    it('returns the same object for the same document with substitution', function () {
        chai.assert.isTrue(gql$1(templateObject_16 || (templateObject_16 = tslib.__makeTemplateObject(["{ ...UserFragment } ", ""], ["{ ...UserFragment } ", ""])), fragmentAst) === gql$1(templateObject_17 || (templateObject_17 = tslib.__makeTemplateObject(["{ ...UserFragment } ", ""], ["{ ...UserFragment } ", ""])), fragmentAst));
    });
    it('can reference a fragment that references as fragment', function () {
        var secondFragmentAst = gql$1(templateObject_18 || (templateObject_18 = tslib.__makeTemplateObject(["\n      fragment SecondUserFragment on User {\n        ...UserFragment\n      }\n      ", "\n    "], ["\n      fragment SecondUserFragment on User {\n        ...UserFragment\n      }\n      ", "\n    "])), fragmentAst);
        var ast = gql$1(templateObject_19 || (templateObject_19 = tslib.__makeTemplateObject(["\n      {\n        user(id: 5) {\n          ...SecondUserFragment\n        }\n      }\n      ", "\n    "], ["\n      {\n        user(id: 5) {\n          ...SecondUserFragment\n        }\n      }\n      ", "\n    "])), secondFragmentAst);
        chai.assert.deepEqual(ast, gql$1(templateObject_20 || (templateObject_20 = tslib.__makeTemplateObject(["\n      {\n        user(id: 5) {\n          ...SecondUserFragment\n        }\n      }\n      fragment SecondUserFragment on User {\n        ...UserFragment\n      }\n      fragment UserFragment on User {\n        firstName\n        lastName\n      }\n    "], ["\n      {\n        user(id: 5) {\n          ...SecondUserFragment\n        }\n      }\n      fragment SecondUserFragment on User {\n        ...UserFragment\n      }\n      fragment UserFragment on User {\n        firstName\n        lastName\n      }\n    "]))));
    });
    describe('fragment warnings', function () {
        var warnings = [];
        var oldConsoleWarn = console.warn;
        beforeEach(function () {
            gql$1.resetCaches();
            warnings = [];
            console.warn = function (w) { return warnings.push(w); };
        });
        afterEach(function () {
            console.warn = oldConsoleWarn;
        });
        it('warns if you use the same fragment name for different fragments', function () {
            var frag1 = gql$1(templateObject_21 || (templateObject_21 = tslib.__makeTemplateObject(["fragment TestSame on Bar { fieldOne }"], ["fragment TestSame on Bar { fieldOne }"])));
            var frag2 = gql$1(templateObject_22 || (templateObject_22 = tslib.__makeTemplateObject(["fragment TestSame on Bar { fieldTwo }"], ["fragment TestSame on Bar { fieldTwo }"])));
            chai.assert.isFalse(frag1 === frag2);
            chai.assert.equal(warnings.length, 1);
        });
        it('does not warn if you use the same fragment name for the same fragment', function () {
            var frag1 = gql$1(templateObject_23 || (templateObject_23 = tslib.__makeTemplateObject(["fragment TestDifferent on Bar { fieldOne }"], ["fragment TestDifferent on Bar { fieldOne }"])));
            var frag2 = gql$1(templateObject_24 || (templateObject_24 = tslib.__makeTemplateObject(["fragment TestDifferent on Bar { fieldOne }"], ["fragment TestDifferent on Bar { fieldOne }"])));
            chai.assert.isTrue(frag1 === frag2);
            chai.assert.equal(warnings.length, 0);
        });
        it('does not warn if you use the same embedded fragment in two different queries', function () {
            var frag1 = gql$1(templateObject_25 || (templateObject_25 = tslib.__makeTemplateObject(["fragment TestEmbedded on Bar { field }"], ["fragment TestEmbedded on Bar { field }"])));
            var query1 = gql$1(templateObject_26 || (templateObject_26 = tslib.__makeTemplateObject(["{ bar { fieldOne ...TestEmbedded } } ", ""], ["{ bar { fieldOne ...TestEmbedded } } ", ""])), frag1);
            var query2 = gql$1(templateObject_27 || (templateObject_27 = tslib.__makeTemplateObject(["{ bar { fieldTwo ...TestEmbedded } } ", ""], ["{ bar { fieldTwo ...TestEmbedded } } ", ""])), frag1);
            chai.assert.isFalse(query1 === query2);
            chai.assert.equal(warnings.length, 0);
        });
        it('does not warn if you use the same fragment name for embedded and non-embedded fragments', function () {
            var frag1 = gql$1(templateObject_28 || (templateObject_28 = tslib.__makeTemplateObject(["fragment TestEmbeddedTwo on Bar { field }"], ["fragment TestEmbeddedTwo on Bar { field }"])));
            gql$1(templateObject_29 || (templateObject_29 = tslib.__makeTemplateObject(["{ bar { ...TestEmbedded } } ", ""], ["{ bar { ...TestEmbedded } } ", ""])), frag1);
            gql$1(templateObject_30 || (templateObject_30 = tslib.__makeTemplateObject(["{ bar { ...TestEmbedded } } fragment TestEmbeddedTwo on Bar { field }"], ["{ bar { ...TestEmbedded } } fragment TestEmbeddedTwo on Bar { field }"])));
            chai.assert.equal(warnings.length, 0);
        });
    });
    describe('unique fragments', function () {
        beforeEach(function () {
            gql$1.resetCaches();
        });
        it('strips duplicate fragments from the document', function () {
            var frag1 = gql$1(templateObject_31 || (templateObject_31 = tslib.__makeTemplateObject(["fragment TestDuplicate on Bar { field }"], ["fragment TestDuplicate on Bar { field }"])));
            var query1 = gql$1(templateObject_32 || (templateObject_32 = tslib.__makeTemplateObject(["{ bar { fieldOne ...TestDuplicate } } ", " ", ""], ["{ bar { fieldOne ...TestDuplicate } } ", " ", ""])), frag1, frag1);
            var query2 = gql$1(templateObject_33 || (templateObject_33 = tslib.__makeTemplateObject(["{ bar { fieldOne ...TestDuplicate } } ", ""], ["{ bar { fieldOne ...TestDuplicate } } ", ""])), frag1);
            chai.assert.equal(query1.definitions.length, 2);
            chai.assert.equal(query1.definitions[1].kind, 'FragmentDefinition');
            chai.assert.deepEqual(query1.definitions, query2.definitions);
        });
        it('ignores duplicate fragments from second-level imports when using the webpack loader', function () {
            var load = function (require, query) {
                var jsSource = loader.call({ cacheable: function () { } }, query);
                var module = { exports: Object.create(null) };
                Function("require,module", jsSource)(require, module);
                return module.exports;
            };
            var test_require = function (path) {
                switch (path) {
                    case './friends.graphql':
                        return load(test_require, [
                            '#import "./person.graphql"',
                            'fragment friends on Hero { friends { ...person } }',
                        ].join('\n'));
                    case './enemies.graphql':
                        return load(test_require, [
                            '#import "./person.graphql"',
                            'fragment enemies on Hero { enemies { ...person } }',
                        ].join('\n'));
                    case './person.graphql':
                        return load(test_require, 'fragment person on Person { name }\n');
                    default:
                        return null;
                }
            };
            var result = load(test_require, [
                '#import "./friends.graphql"',
                '#import "./enemies.graphql"',
                'query { hero { ...friends ...enemies } }',
            ].join('\n'));
            chai.assert.equal(result.kind, 'Document');
            chai.assert.equal(result.definitions.length, 4, 'after deduplication, only 4 fragments should remain');
            chai.assert.equal(result.definitions[0].kind, 'OperationDefinition');
            var fragments = result.definitions.slice(1);
            chai.assert(fragments.every(function (fragment) { return fragment.kind === 'FragmentDefinition'; }));
            chai.assert(fragments.some(function (fragment) { return fragment.name.value === 'friends'; }));
            chai.assert(fragments.some(function (fragment) { return fragment.name.value === 'enemies'; }));
            chai.assert(fragments.some(function (fragment) { return fragment.name.value === 'person'; }));
        });
    });
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32, templateObject_33;
//# sourceMappingURL=tests.cjs.js.map
