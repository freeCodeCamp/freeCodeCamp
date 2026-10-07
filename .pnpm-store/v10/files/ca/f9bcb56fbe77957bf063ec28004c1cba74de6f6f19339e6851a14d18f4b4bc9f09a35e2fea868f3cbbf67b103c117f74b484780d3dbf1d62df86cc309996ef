"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScalarTypeComposer = void 0;
const graphql_1 = require("./graphql");
const is_1 = require("./utils/is");
const SchemaComposer_1 = require("./SchemaComposer");
const ListComposer_1 = require("./ListComposer");
const NonNullComposer_1 = require("./NonNullComposer");
const typeHelpers_1 = require("./utils/typeHelpers");
const misc_1 = require("./utils/misc");
const graphqlVersion_1 = require("./utils/graphqlVersion");
const schemaPrinter_1 = require("./utils/schemaPrinter");
const definitionNode_1 = require("./utils/definitionNode");
class ScalarTypeComposer {
    constructor(graphqlType, schemaComposer) {
        if (!(schemaComposer instanceof SchemaComposer_1.SchemaComposer)) {
            throw new Error('You must provide SchemaComposer instance as a second argument for `new ScalarTypeComposer(GraphQLScalarType, SchemaComposer)`');
        }
        if (!(graphqlType instanceof graphql_1.GraphQLScalarType)) {
            throw new Error('ScalarTypeComposer accept only GraphQLScalarType in constructor');
        }
        this.schemaComposer = schemaComposer;
        this._gqType = graphqlType;
        this.schemaComposer.set(graphqlType, this);
        this.schemaComposer.set(graphqlType.name, this);
        let serialize;
        let parseValue;
        let parseLiteral;
        if (graphqlVersion_1.graphqlVersion >= 14) {
            serialize = this._gqType.serialize;
            parseValue = this._gqType.parseValue;
            parseLiteral = this._gqType.parseLiteral;
        }
        else {
            serialize = this._gqType._scalarConfig.serialize;
            parseValue = this._gqType._scalarConfig.parseValue;
            parseLiteral = this._gqType._scalarConfig.parseLiteral;
        }
        this.setSerialize(serialize);
        this.setParseValue(parseValue);
        this.setParseLiteral(parseLiteral);
        if (this._gqType.specifiedByUrl) {
            this.setDirectiveByName('specifiedBy', { url: this._gqType.specifiedByUrl });
        }
        if (this._gqType.specifiedByURL) {
            this.setDirectiveByName('specifiedBy', { url: this._gqType.specifiedByURL });
        }
        if (!this._gqType.astNode) {
            this._gqType.astNode = (0, definitionNode_1.getScalarTypeDefinitionNode)(this);
        }
        this._gqcIsModified = false;
    }
    static create(typeDef, schemaComposer) {
        if (!(schemaComposer instanceof SchemaComposer_1.SchemaComposer)) {
            throw new Error('You must provide SchemaComposer instance as a second argument for `ScalarTypeComposer.create(typeDef, schemaComposer)`');
        }
        if (schemaComposer.hasInstance(typeDef, ScalarTypeComposer)) {
            return schemaComposer.getSTC(typeDef);
        }
        const stc = this.createTemp(typeDef, schemaComposer);
        schemaComposer.add(stc);
        return stc;
    }
    static createTemp(typeDef, schemaComposer) {
        const sc = schemaComposer || new SchemaComposer_1.SchemaComposer();
        let STC;
        if ((0, is_1.isString)(typeDef)) {
            const typeName = typeDef;
            if ((0, typeHelpers_1.isTypeNameString)(typeName)) {
                STC = new ScalarTypeComposer(new graphql_1.GraphQLScalarType({
                    name: typeName,
                    serialize: () => { },
                }), sc);
            }
            else {
                STC = sc.typeMapper.convertSDLTypeDefinition(typeName);
                if (!(STC instanceof ScalarTypeComposer)) {
                    throw new Error('You should provide correct GraphQLScalarType type definition. Eg. `scalar UInt`');
                }
            }
        }
        else if (typeDef instanceof graphql_1.GraphQLScalarType) {
            STC = new ScalarTypeComposer(typeDef, sc);
        }
        else if ((0, is_1.isObject)(typeDef)) {
            const type = new graphql_1.GraphQLScalarType(Object.assign({}, typeDef));
            STC = new ScalarTypeComposer(type, sc);
            STC.setExtensions(typeDef.extensions);
            if (Array.isArray(typeDef === null || typeDef === void 0 ? void 0 : typeDef.directives)) {
                STC.setDirectives(typeDef.directives);
            }
        }
        else {
            throw new Error(`You should provide GraphQLScalarTypeConfig or string with scalar name or SDL. Provided:\n${(0, misc_1.inspect)(typeDef)}`);
        }
        return STC;
    }
    setSerialize(fn) {
        this._gqcSerialize = fn;
        this._gqcIsModified = true;
        return this;
    }
    getSerialize() {
        return this._gqcSerialize;
    }
    setParseValue(fn) {
        this._gqcParseValue = fn || ((value) => value);
        this._gqcIsModified = true;
        return this;
    }
    getParseValue() {
        return this._gqcParseValue;
    }
    setParseLiteral(fn) {
        this._gqcParseLiteral = fn || graphql_1.valueFromASTUntyped;
        this._gqcIsModified = true;
        return this;
    }
    getParseLiteral() {
        return this._gqcParseLiteral;
    }
    getType() {
        if (this._gqcIsModified) {
            this._gqcIsModified = false;
            this._gqType.astNode = (0, definitionNode_1.getScalarTypeDefinitionNode)(this);
            if (graphqlVersion_1.graphqlVersion >= 14) {
                this._gqType.specifiedByUrl = this.getSpecifiedByUrl();
                this._gqType.specifiedByURL = this.getSpecifiedByUrl();
                this._gqType.serialize = this._gqcSerialize;
                this._gqType.parseValue = this._gqcParseValue;
                this._gqType.parseLiteral = this._gqcParseLiteral;
            }
            else {
                this._gqType._scalarConfig = Object.assign(Object.assign({}, this._gqType._scalarConfig), { serialize: this._gqcSerialize, parseValue: this._gqcParseValue, parseLiteral: this._gqcParseLiteral });
            }
        }
        return this._gqType;
    }
    getTypePlural() {
        return new ListComposer_1.ListComposer(this);
    }
    getTypeNonNull() {
        return new NonNullComposer_1.NonNullComposer(this);
    }
    get List() {
        return new ListComposer_1.ListComposer(this);
    }
    get NonNull() {
        return new NonNullComposer_1.NonNullComposer(this);
    }
    getTypeName() {
        return this._gqType.name;
    }
    setTypeName(name) {
        this._gqType.name = name;
        this._gqcIsModified = true;
        this.schemaComposer.add(this);
        return this;
    }
    getDescription() {
        return this._gqType.description || '';
    }
    setDescription(description) {
        this._gqType.description = description;
        this._gqcIsModified = true;
        return this;
    }
    getSpecifiedByUrl() {
        var _a;
        return (_a = this.getDirectiveByName('specifiedBy')) === null || _a === void 0 ? void 0 : _a.url;
    }
    setSpecifiedByUrl(url) {
        this.setDirectiveByName('specifiedBy', { url });
        return this;
    }
    clone(newTypeNameOrTC) {
        if (!newTypeNameOrTC) {
            throw new Error('You should provide newTypeName:string for ScalarTypeComposer.clone()');
        }
        const cloned = newTypeNameOrTC instanceof ScalarTypeComposer
            ? newTypeNameOrTC
            : ScalarTypeComposer.create(newTypeNameOrTC, this.schemaComposer);
        cloned._gqcSerialize = this._gqcSerialize;
        cloned._gqcParseValue = this._gqcParseValue;
        cloned._gqcParseLiteral = this._gqcParseLiteral;
        cloned._gqcExtensions = Object.assign({}, this._gqcExtensions);
        cloned.setDescription(this.getDescription());
        cloned.setDirectives(this.getDirectives());
        return cloned;
    }
    cloneTo(anotherSchemaComposer, cloneMap = new Map()) {
        if (!anotherSchemaComposer) {
            throw new Error('You should provide SchemaComposer for ObjectTypeComposer.cloneTo()');
        }
        if (cloneMap.has(this))
            return cloneMap.get(this);
        cloneMap.set(this, this);
        if (!anotherSchemaComposer.has(this.getTypeName())) {
            anotherSchemaComposer.add(this);
        }
        return this;
    }
    merge(type) {
        let tc;
        if (type instanceof graphql_1.GraphQLScalarType) {
            tc = ScalarTypeComposer.createTemp(type, this.schemaComposer);
        }
        else if (type instanceof ScalarTypeComposer) {
            tc = type;
        }
        if (tc) {
            this.setSerialize(tc.getSerialize());
            this.setParseValue(tc.getParseValue());
            this.setParseLiteral(tc.getParseLiteral());
        }
        else {
            throw new Error(`Cannot merge ${(0, misc_1.inspect)(type)} with ScalarType(${this.getTypeName()}). Provided type should be GraphQLScalarType or ScalarTypeComposer.`);
        }
        return this;
    }
    getExtensions() {
        if (!this._gqcExtensions) {
            return {};
        }
        else {
            return this._gqcExtensions;
        }
    }
    setExtensions(extensions) {
        this._gqcExtensions = extensions || undefined;
        this._gqcIsModified = true;
        return this;
    }
    extendExtensions(extensions) {
        const current = this.getExtensions();
        this.setExtensions(Object.assign(Object.assign({}, current), extensions));
        return this;
    }
    clearExtensions() {
        this.setExtensions({});
        return this;
    }
    getExtension(extensionName) {
        const extensions = this.getExtensions();
        return extensions[extensionName];
    }
    hasExtension(extensionName) {
        const extensions = this.getExtensions();
        return extensionName in extensions;
    }
    setExtension(extensionName, value) {
        this.extendExtensions({
            [extensionName]: value,
        });
        return this;
    }
    removeExtension(extensionName) {
        const extensions = Object.assign({}, this.getExtensions());
        delete extensions[extensionName];
        this.setExtensions(extensions);
        return this;
    }
    getDirectives() {
        return this._gqcDirectives || [];
    }
    setDirectives(directives) {
        this._gqcDirectives = directives;
        this._gqcIsModified = true;
        return this;
    }
    getDirectiveNames() {
        return this.getDirectives().map((d) => d.name);
    }
    getDirectiveByName(directiveName) {
        const directive = this.getDirectives().find((d) => d.name === directiveName);
        if (!directive)
            return undefined;
        return directive.args;
    }
    setDirectiveByName(directiveName, args) {
        const directives = this.getDirectives();
        const idx = directives.findIndex((d) => d.name === directiveName);
        if (idx >= 0) {
            directives[idx].args = args;
        }
        else {
            directives.push({ name: directiveName, args });
        }
        this.setDirectives(directives);
        return this;
    }
    getDirectiveById(idx) {
        const directive = this.getDirectives()[idx];
        if (!directive)
            return undefined;
        return directive.args;
    }
    toSDL(opts) {
        return (0, schemaPrinter_1.printScalar)(this.getType(), opts);
    }
}
exports.ScalarTypeComposer = ScalarTypeComposer;
//# sourceMappingURL=ScalarTypeComposer.js.map