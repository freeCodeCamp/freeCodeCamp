'use strict';

const error = require('./error.cjs');
const names = require('../utils/names.cjs');
const genericConst = require('./generic-const.cjs');
const generic = require('./generic.cjs');
const units = require('./units.cjs');
const prepareTokens = require('./prepare-tokens.cjs');
const matchGraph = require('./match-graph.cjs');
const match = require('./match.cjs');
const trace = require('./trace.cjs');
const search = require('./search.cjs');
const structure = require('./structure.cjs');
const parse = require('../definition-syntax/parse.cjs');
const generate = require('../definition-syntax/generate.cjs');
const walk = require('../definition-syntax/walk.cjs');

function dumpMapSyntax(map, compact, syntaxAsAst) {
    const result = {};

    for (const name in map) {
        if (map[name].syntax) {
            result[name] = syntaxAsAst
                ? map[name].syntax
                : generate.generate(map[name].syntax, { compact });
        }
    }

    return result;
}

function dumpAtruleMapSyntax(map, compact, syntaxAsAst) {
    const result = {};

    for (const [name, atrule] of Object.entries(map)) {
        result[name] = {
            prelude: atrule.prelude && (
                syntaxAsAst
                    ? atrule.prelude.syntax
                    : generate.generate(atrule.prelude.syntax, { compact })
            ),
            descriptors: atrule.descriptors && dumpMapSyntax(atrule.descriptors, compact, syntaxAsAst)
        };
    }

    return result;
}

function valueHasVar(tokens) {
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i].value.toLowerCase() === 'var(') {
            return true;
        }
    }

    return false;
}

function syntaxHasTopLevelCommaMultiplier(syntax) {
    const singleTerm = syntax.terms[0];

    return (
        syntax.explicit === false &&
        syntax.terms.length === 1 &&
        singleTerm.type === 'Multiplier' &&
        singleTerm.comma === true
    );
}

function buildMatchResult(matched, error, iterations) {
    return {
        matched,
        iterations,
        error,
        ...trace
    };
}

function matchSyntax(lexer, syntax, value, useCssWideKeywords) {
    const tokens = prepareTokens(value, lexer.syntax);
    let result;

    if (valueHasVar(tokens)) {
        return buildMatchResult(null, new Error('Matching for a tree with var() is not supported'));
    }

    if (useCssWideKeywords) {
        result = match.matchAsTree(tokens, lexer.cssWideKeywordsSyntax, lexer);
    }

    if (!useCssWideKeywords || !result.match) {
        result = match.matchAsTree(tokens, syntax.match, lexer);
        if (!result.match) {
            return buildMatchResult(
                null,
                new error.SyntaxMatchError(result.reason, syntax.syntax, value, result),
                result.iterations
            );
        }
    }

    return buildMatchResult(result.match, null, result.iterations);
}

class Lexer {
    constructor(config, syntax, structure$1) {
        this.cssWideKeywords = genericConst.cssWideKeywords;
        this.syntax = syntax;
        this.generic = false;
        this.units = { ...units };
        this.atrules = Object.create(null);
        this.properties = Object.create(null);
        this.types = Object.create(null);
        this.structure = structure$1 || structure.getStructureFromConfig(config);

        if (config) {
            if (config.cssWideKeywords) {
                this.cssWideKeywords = config.cssWideKeywords;
            }

            if (config.units) {
                for (const group of Object.keys(units)) {
                    if (Array.isArray(config.units[group])) {
                        this.units[group] = config.units[group];
                    }
                }
            }

            if (config.types) {
                for (const [name, type] of Object.entries(config.types)) {
                    this.addType_(name, type);
                }
            }

            if (config.generic) {
                this.generic = true;
                for (const [name, value] of Object.entries(generic.createGenericTypes(this.units))) {
                    this.addType_(name, value);
                }
            }

            if (config.atrules) {
                for (const [name, atrule] of Object.entries(config.atrules)) {
                    this.addAtrule_(name, atrule);
                }
            }

            if (config.properties) {
                for (const [name, property] of Object.entries(config.properties)) {
                    this.addProperty_(name, property);
                }
            }
        }

        this.cssWideKeywordsSyntax = matchGraph.buildMatchGraph(this.cssWideKeywords.join(' |  '));
    }

    checkStructure(ast) {
        function collectWarning(node, message) {
            warns.push({ node, message });
        }

        const structure = this.structure;
        const warns = [];

        this.syntax.walk(ast, function(node) {
            if (structure.hasOwnProperty(node.type)) {
                structure[node.type].check(node, collectWarning);
            } else {
                collectWarning(node, 'Unknown node type `' + node.type + '`');
            }
        });

        return warns.length ? warns : false;
    }

    createDescriptor(syntax, type, name, parent = null) {
        const ref = {
            type,
            name
        };
        const descriptor = {
            type,
            name,
            parent,
            serializable: typeof syntax === 'string' || (syntax && typeof syntax.type === 'string'),
            syntax: null,
            match: null,
            matchRef: null // used for properties when a syntax referenced as <'property'> in other syntax definitions
        };

        if (typeof syntax === 'function') {
            descriptor.match = matchGraph.buildMatchGraph(syntax, ref);
        } else {
            if (typeof syntax === 'string') {
                // lazy parsing on first access
                Object.defineProperty(descriptor, 'syntax', {
                    get() {
                        Object.defineProperty(descriptor, 'syntax', {
                            value: parse.parse(syntax)
                        });

                        return descriptor.syntax;
                    }
                });
            } else {
                descriptor.syntax = syntax;
            }

            // lazy graph build on first access
            Object.defineProperty(descriptor, 'match', {
                get() {
                    Object.defineProperty(descriptor, 'match', {
                        value: matchGraph.buildMatchGraph(descriptor.syntax, ref)
                    });

                    return descriptor.match;
                }
            });

            if (type === 'Property') {
                Object.defineProperty(descriptor, 'matchRef', {
                    get() {
                        const syntax = descriptor.syntax;
                        const value = syntaxHasTopLevelCommaMultiplier(syntax)
                            ? matchGraph.buildMatchGraph({
                                ...syntax,
                                terms: [syntax.terms[0].term]
                            }, ref)
                            : null;

                        Object.defineProperty(descriptor, 'matchRef', {
                            value
                        });

                        return value;
                    }
                });
            }
        }

        return descriptor;
    }
    addAtrule_(name, syntax) {
        if (!syntax) {
            return;
        }

        this.atrules[name] = {
            type: 'Atrule',
            name: name,
            prelude: syntax.prelude ? this.createDescriptor(syntax.prelude, 'AtrulePrelude', name) : null,
            descriptors: syntax.descriptors
                ? Object.keys(syntax.descriptors).reduce(
                    (map, descName) => {
                        map[descName] = this.createDescriptor(syntax.descriptors[descName], 'AtruleDescriptor', descName, name);
                        return map;
                    },
                    Object.create(null)
                )
                : null
        };
    }
    addProperty_(name, syntax) {
        if (!syntax) {
            return;
        }

        this.properties[name] = this.createDescriptor(syntax, 'Property', name);
    }
    addType_(name, syntax) {
        if (!syntax) {
            return;
        }

        this.types[name] = this.createDescriptor(syntax, 'Type', name);
    }

    checkAtruleName(atruleName) {
        if (!this.getAtrule(atruleName)) {
            return new error.SyntaxReferenceError('Unknown at-rule', '@' + atruleName);
        }
    }
    checkAtrulePrelude(atruleName, prelude) {
        const error = this.checkAtruleName(atruleName);

        if (error) {
            return error;
        }

        const atrule = this.getAtrule(atruleName);

        if (!atrule.prelude && prelude) {
            return new SyntaxError('At-rule `@' + atruleName + '` should not contain a prelude');
        }

        if (atrule.prelude && !prelude) {
            if (!matchSyntax(this, atrule.prelude, '', false).matched) {
                return new SyntaxError('At-rule `@' + atruleName + '` should contain a prelude');
            }
        }
    }
    checkAtruleDescriptorName(atruleName, descriptorName) {
        const error$1 = this.checkAtruleName(atruleName);

        if (error$1) {
            return error$1;
        }

        const atrule = this.getAtrule(atruleName);
        const descriptor = names.keyword(descriptorName);

        if (!atrule.descriptors) {
            return new SyntaxError('At-rule `@' + atruleName + '` has no known descriptors');
        }

        if (!atrule.descriptors[descriptor.name] &&
            !atrule.descriptors[descriptor.basename]) {
            return new error.SyntaxReferenceError('Unknown at-rule descriptor', descriptorName);
        }
    }
    checkPropertyName(propertyName) {
        if (!this.getProperty(propertyName)) {
            return new error.SyntaxReferenceError('Unknown property', propertyName);
        }
    }

    matchAtrulePrelude(atruleName, prelude) {
        const error = this.checkAtrulePrelude(atruleName, prelude);

        if (error) {
            return buildMatchResult(null, error);
        }

        const atrule = this.getAtrule(atruleName);

        if (!atrule.prelude) {
            return buildMatchResult(null, null);
        }

        return matchSyntax(this, atrule.prelude, prelude || '', false);
    }
    matchAtruleDescriptor(atruleName, descriptorName, value) {
        const error = this.checkAtruleDescriptorName(atruleName, descriptorName);

        if (error) {
            return buildMatchResult(null, error);
        }

        const atrule = this.getAtrule(atruleName);
        const descriptor = names.keyword(descriptorName);

        return matchSyntax(this, atrule.descriptors[descriptor.name] || atrule.descriptors[descriptor.basename], value, false);
    }
    matchDeclaration(node) {
        if (node.type !== 'Declaration') {
            return buildMatchResult(null, new Error('Not a Declaration node'));
        }

        return this.matchProperty(node.property, node.value);
    }
    matchProperty(propertyName, value) {
        // don't match syntax for a custom property at the moment
        if (names.property(propertyName).custom) {
            return buildMatchResult(null, new Error('Lexer matching doesn\'t applicable for custom properties'));
        }

        const error = this.checkPropertyName(propertyName);

        if (error) {
            return buildMatchResult(null, error);
        }

        return matchSyntax(this, this.getProperty(propertyName), value, true);
    }
    matchType(typeName, value) {
        const typeSyntax = this.getType(typeName);

        if (!typeSyntax) {
            return buildMatchResult(null, new error.SyntaxReferenceError('Unknown type', typeName));
        }

        return matchSyntax(this, typeSyntax, value, false);
    }
    match(syntax, value) {
        if (typeof syntax !== 'string' && (!syntax || !syntax.type)) {
            return buildMatchResult(null, new error.SyntaxReferenceError('Bad syntax'));
        }

        if (typeof syntax === 'string' || !syntax.match) {
            syntax = this.createDescriptor(syntax, 'Type', 'anonymous');
        }

        return matchSyntax(this, syntax, value, false);
    }

    findValueFragments(propertyName, value, type, name) {
        return search.matchFragments(this, value, this.matchProperty(propertyName, value), type, name);
    }
    findDeclarationValueFragments(declaration, type, name) {
        return search.matchFragments(this, declaration.value, this.matchDeclaration(declaration), type, name);
    }
    findAllFragments(ast, type, name) {
        const result = [];

        this.syntax.walk(ast, {
            visit: 'Declaration',
            enter: (declaration) => {
                result.push.apply(result, this.findDeclarationValueFragments(declaration, type, name));
            }
        });

        return result;
    }

    getAtrule(atruleName, fallbackBasename = true) {
        const atrule = names.keyword(atruleName);
        const atruleEntry = atrule.vendor && fallbackBasename
            ? this.atrules[atrule.name] || this.atrules[atrule.basename]
            : this.atrules[atrule.name];

        return atruleEntry || null;
    }
    getAtrulePrelude(atruleName, fallbackBasename = true) {
        const atrule = this.getAtrule(atruleName, fallbackBasename);

        return atrule && atrule.prelude || null;
    }
    getAtruleDescriptor(atruleName, name) {
        return this.atrules.hasOwnProperty(atruleName) && this.atrules.declarators
            ? this.atrules[atruleName].declarators[name] || null
            : null;
    }
    getProperty(propertyName, fallbackBasename = true) {
        const property = names.property(propertyName);
        const propertyEntry = property.vendor && fallbackBasename
            ? this.properties[property.name] || this.properties[property.basename]
            : this.properties[property.name];

        return propertyEntry || null;
    }
    getType(name) {
        return hasOwnProperty.call(this.types, name) ? this.types[name] : null;
    }

    validate() {
        function syntaxRef(name, isType) {
            return isType ? `<${name}>` : `<'${name}'>`;
        }

        function validate(syntax, name, broken, descriptor) {
            if (broken.has(name)) {
                return broken.get(name);
            }

            broken.set(name, false);
            if (descriptor.syntax !== null) {
                walk.walk(descriptor.syntax, function(node) {
                    if (node.type !== 'Type' && node.type !== 'Property') {
                        return;
                    }

                    const map = node.type === 'Type' ? syntax.types : syntax.properties;
                    const brokenMap = node.type === 'Type' ? brokenTypes : brokenProperties;

                    if (!hasOwnProperty.call(map, node.name)) {
                        errors.push(`${syntaxRef(name, broken === brokenTypes)} used missed syntax definition ${syntaxRef(node.name, node.type === 'Type')}`);
                        broken.set(name, true);
                    } else if (validate(syntax, node.name, brokenMap, map[node.name])) {
                        errors.push(`${syntaxRef(name, broken === brokenTypes)} used broken syntax definition ${syntaxRef(node.name, node.type === 'Type')}`);
                        broken.set(name, true);
                    }
                }, this);
            }
        }

        const errors = [];
        let brokenTypes = new Map();
        let brokenProperties = new Map();

        for (const key in this.types) {
            validate(this, key, brokenTypes, this.types[key]);
        }

        for (const key in this.properties) {
            validate(this, key, brokenProperties, this.properties[key]);
        }

        const brokenTypesArray = [...brokenTypes.keys()].filter(name => brokenTypes.get(name));
        const brokenPropertiesArray = [...brokenProperties.keys()].filter(name => brokenProperties.get(name));

        if (brokenTypesArray.length || brokenPropertiesArray.length) {
            return {
                errors,
                types: brokenTypesArray,
                properties: brokenPropertiesArray
            };
        }

        return null;
    }
    dump(syntaxAsAst, pretty) {
        return {
            generic: this.generic,
            cssWideKeywords: this.cssWideKeywords,
            units: this.units,
            types: dumpMapSyntax(this.types, !pretty, syntaxAsAst),
            properties: dumpMapSyntax(this.properties, !pretty, syntaxAsAst),
            atrules: dumpAtruleMapSyntax(this.atrules, !pretty, syntaxAsAst)
        };
    }
    toString() {
        return JSON.stringify(this.dump());
    }
}

exports.Lexer = Lexer;
