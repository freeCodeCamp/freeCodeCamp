"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const __1 = require("..");
const codegen_1 = require("../codegen");
const ref_error_1 = require("../ref_error");
const names_1 = require("../names");
const code_1 = require("../../vocabularies/code");
const ref_1 = require("../../vocabularies/jtd/ref");
const type_1 = require("../../vocabularies/jtd/type");
const parseJson_1 = require("../../runtime/parseJson");
const util_1 = require("../util");
const timestamp_1 = require("../../runtime/timestamp");
const genParse = {
    elements: parseElements,
    values: parseValues,
    discriminator: parseDiscriminator,
    properties: parseProperties,
    optionalProperties: parseProperties,
    enum: parseEnum,
    type: parseType,
    ref: parseRef,
};
function compileParser(sch, definitions) {
    const _sch = __1.getCompilingSchema.call(this, sch);
    if (_sch)
        return _sch;
    const { es5, lines } = this.opts.code;
    const { ownProperties } = this.opts;
    const gen = new codegen_1.CodeGen(this.scope, { es5, lines, ownProperties });
    const parseName = gen.scopeName("parse");
    const cxt = {
        self: this,
        gen,
        schema: sch.schema,
        schemaEnv: sch,
        definitions,
        data: names_1.default.data,
        parseName,
        char: gen.name("c"),
    };
    let sourceCode;
    try {
        this._compilations.add(sch);
        sch.parseName = parseName;
        parserFunction(cxt);
        gen.optimize(this.opts.code.optimize);
        const parseFuncCode = gen.toString();
        sourceCode = `${gen.scopeRefs(names_1.default.scope)}return ${parseFuncCode}`;
        const makeParse = new Function(`${names_1.default.scope}`, sourceCode);
        const parse = makeParse(this.scope.get());
        this.scope.value(parseName, { ref: parse });
        sch.parse = parse;
    }
    catch (e) {
        if (sourceCode)
            this.logger.error("Error compiling parser, function code:", sourceCode);
        delete sch.parse;
        delete sch.parseName;
        throw e;
    }
    finally {
        this._compilations.delete(sch);
    }
    return sch;
}
exports.default = compileParser;
const undef = (0, codegen_1._) `undefined`;
function parserFunction(cxt) {
    const { gen, parseName, char } = cxt;
    gen.func(parseName, (0, codegen_1._) `${names_1.default.json}, ${names_1.default.jsonPos}, ${names_1.default.jsonPart}`, false, () => {
        gen.let(names_1.default.data);
        gen.let(char);
        gen.assign((0, codegen_1._) `${parseName}.message`, undef);
        gen.assign((0, codegen_1._) `${parseName}.position`, undef);
        gen.assign(names_1.default.jsonPos, (0, codegen_1._) `${names_1.default.jsonPos} || 0`);
        gen.const(names_1.default.jsonLen, (0, codegen_1._) `${names_1.default.json}.length`);
        parseCode(cxt);
        skipWhitespace(cxt);
        gen.if(names_1.default.jsonPart, () => {
            gen.assign((0, codegen_1._) `${parseName}.position`, names_1.default.jsonPos);
            gen.return(names_1.default.data);
        });
        gen.if((0, codegen_1._) `${names_1.default.jsonPos} === ${names_1.default.jsonLen}`, () => gen.return(names_1.default.data));
        jsonSyntaxError(cxt);
    });
}
function parseCode(cxt) {
    let form;
    for (const key of types_1.jtdForms) {
        if (key in cxt.schema) {
            form = key;
            break;
        }
    }
    if (form)
        parseNullable(cxt, genParse[form]);
    else
        parseEmpty(cxt);
}
const parseBoolean = parseBooleanToken(true, parseBooleanToken(false, jsonSyntaxError));
function parseNullable(cxt, parseForm) {
    const { gen, schema, data } = cxt;
    if (!schema.nullable)
        return parseForm(cxt);
    tryParseToken(cxt, "null", parseForm, () => gen.assign(data, null));
}
function parseElements(cxt) {
    const { gen, schema, data } = cxt;
    parseToken(cxt, "[");
    const ix = gen.let("i", 0);
    gen.assign(data, (0, codegen_1._) `[]`);
    parseItems(cxt, "]", () => {
        const el = gen.let("el");
        parseCode({ ...cxt, schema: schema.elements, data: el });
        gen.assign((0, codegen_1._) `${data}[${ix}++]`, el);
    });
}
function parseValues(cxt) {
    const { gen, schema, data } = cxt;
    parseToken(cxt, "{");
    gen.assign(data, (0, codegen_1._) `{}`);
    parseItems(cxt, "}", () => parseKeyValue(cxt, schema.values));
}
function parseItems(cxt, endToken, block) {
    tryParseItems(cxt, endToken, block);
    parseToken(cxt, endToken);
}
function tryParseItems(cxt, endToken, block) {
    const { gen } = cxt;
    gen.for((0, codegen_1._) `;${names_1.default.jsonPos}<${names_1.default.jsonLen} && ${jsonSlice(1)}!==${endToken};`, () => {
        block();
        tryParseToken(cxt, ",", () => gen.break(), hasItem);
    });
    function hasItem() {
        tryParseToken(cxt, endToken, () => { }, jsonSyntaxError);
    }
}
function parseKeyValue(cxt, schema) {
    const { gen } = cxt;
    const key = gen.let("key");
    parseString({ ...cxt, data: key });
    parseToken(cxt, ":");
    parsePropertyValue(cxt, key, schema);
}
function parseDiscriminator(cxt) {
    const { gen, data, schema } = cxt;
    const { discriminator, mapping } = schema;
    parseToken(cxt, "{");
    gen.assign(data, (0, codegen_1._) `{}`);
    const startPos = gen.const("pos", names_1.default.jsonPos);
    const value = gen.let("value");
    const tag = gen.let("tag");
    tryParseItems(cxt, "}", () => {
        const key = gen.let("key");
        parseString({ ...cxt, data: key });
        parseToken(cxt, ":");
        gen.if((0, codegen_1._) `${key} === ${discriminator}`, () => {
            parseString({ ...cxt, data: tag });
            gen.assign((0, codegen_1._) `${data}[${key}]`, tag);
            gen.break();
        }, () => parseEmpty({ ...cxt, data: value }) // can be discarded/skipped
        );
    });
    gen.assign(names_1.default.jsonPos, startPos);
    gen.if((0, codegen_1._) `${tag} === undefined`);
    parsingError(cxt, (0, codegen_1.str) `discriminator tag not found`);
    for (const tagValue in mapping) {
        gen.elseIf((0, codegen_1._) `${tag} === ${tagValue}`);
        parseSchemaProperties({ ...cxt, schema: mapping[tagValue] }, discriminator);
    }
    gen.else();
    parsingError(cxt, (0, codegen_1.str) `discriminator value not in schema`);
    gen.endIf();
}
function parseProperties(cxt) {
    const { gen, data } = cxt;
    parseToken(cxt, "{");
    gen.assign(data, (0, codegen_1._) `{}`);
    parseSchemaProperties(cxt);
}
function parseSchemaProperties(cxt, discriminator) {
    const { gen, schema, data } = cxt;
    const { properties, optionalProperties, additionalProperties } = schema;
    parseItems(cxt, "}", () => {
        const key = gen.let("key");
        parseString({ ...cxt, data: key });
        parseToken(cxt, ":");
        gen.if(false);
        parseDefinedProperty(cxt, key, properties);
        parseDefinedProperty(cxt, key, optionalProperties);
        if (discriminator) {
            gen.elseIf((0, codegen_1._) `${key} === ${discriminator}`);
            const tag = gen.let("tag");
            parseString({ ...cxt, data: tag }); // can be discarded, it is already assigned
        }
        gen.else();
        if (additionalProperties) {
            parseEmpty({ ...cxt, data: (0, codegen_1._) `${data}[${key}]` });
        }
        else {
            parsingError(cxt, (0, codegen_1.str) `property ${key} not allowed`);
        }
        gen.endIf();
    });
    if (properties) {
        const hasProp = (0, code_1.hasPropFunc)(gen);
        const allProps = (0, codegen_1.and)(...Object.keys(properties).map((p) => (0, codegen_1._) `${hasProp}.call(${data}, ${p})`));
        gen.if((0, codegen_1.not)(allProps), () => parsingError(cxt, (0, codegen_1.str) `missing required properties`));
    }
}
function parseDefinedProperty(cxt, key, schemas = {}) {
    const { gen } = cxt;
    for (const prop in schemas) {
        gen.elseIf((0, codegen_1._) `${key} === ${prop}`);
        parsePropertyValue(cxt, key, schemas[prop]);
    }
}
function parsePropertyValue(cxt, key, schema) {
    parseCode({ ...cxt, schema, data: (0, codegen_1._) `${cxt.data}[${key}]` });
}
function parseType(cxt) {
    const { gen, schema, data, self } = cxt;
    switch (schema.type) {
        case "boolean":
            parseBoolean(cxt);
            break;
        case "string":
            parseString(cxt);
            break;
        case "timestamp": {
            parseString(cxt);
            const vts = (0, util_1.useFunc)(gen, timestamp_1.default);
            const { allowDate, parseDate } = self.opts;
            const notValid = allowDate ? (0, codegen_1._) `!${vts}(${data}, true)` : (0, codegen_1._) `!${vts}(${data})`;
            const fail = parseDate
                ? (0, codegen_1.or)(notValid, (0, codegen_1._) `(${data} = new Date(${data}), false)`, (0, codegen_1._) `isNaN(${data}.valueOf())`)
                : notValid;
            gen.if(fail, () => parsingError(cxt, (0, codegen_1.str) `invalid timestamp`));
            break;
        }
        case "float32":
        case "float64":
            parseNumber(cxt);
            break;
        default: {
            const t = schema.type;
            if (!self.opts.int32range && (t === "int32" || t === "uint32")) {
                parseNumber(cxt, 16); // 2 ** 53 - max safe integer
                if (t === "uint32") {
                    gen.if((0, codegen_1._) `${data} < 0`, () => parsingError(cxt, (0, codegen_1.str) `integer out of range`));
                }
            }
            else {
                const [min, max, maxDigits] = type_1.intRange[t];
                parseNumber(cxt, maxDigits);
                gen.if((0, codegen_1._) `${data} < ${min} || ${data} > ${max}`, () => parsingError(cxt, (0, codegen_1.str) `integer out of range`));
            }
        }
    }
}
function parseString(cxt) {
    parseToken(cxt, '"');
    parseWith(cxt, parseJson_1.parseJsonString);
}
function parseEnum(cxt) {
    const { gen, data, schema } = cxt;
    const enumSch = schema.enum;
    parseToken(cxt, '"');
    // TODO loopEnum
    gen.if(false);
    for (const value of enumSch) {
        const valueStr = JSON.stringify(value).slice(1); // remove starting quote
        gen.elseIf((0, codegen_1._) `${jsonSlice(valueStr.length)} === ${valueStr}`);
        gen.assign(data, (0, codegen_1.str) `${value}`);
        gen.add(names_1.default.jsonPos, valueStr.length);
    }
    gen.else();
    jsonSyntaxError(cxt);
    gen.endIf();
}
function parseNumber(cxt, maxDigits) {
    const { gen } = cxt;
    skipWhitespace(cxt);
    gen.if((0, codegen_1._) `"-0123456789".indexOf(${jsonSlice(1)}) < 0`, () => jsonSyntaxError(cxt), () => parseWith(cxt, parseJson_1.parseJsonNumber, maxDigits));
}
function parseBooleanToken(bool, fail) {
    return (cxt) => {
        const { gen, data } = cxt;
        tryParseToken(cxt, `${bool}`, () => fail(cxt), () => gen.assign(data, bool));
    };
}
function parseRef(cxt) {
    const { gen, self, definitions, schema, schemaEnv } = cxt;
    const { ref } = schema;
    const refSchema = definitions[ref];
    if (!refSchema)
        throw new ref_error_1.default(self.opts.uriResolver, "", ref, `No definition ${ref}`);
    if (!(0, ref_1.hasRef)(refSchema))
        return parseCode({ ...cxt, schema: refSchema });
    const { root } = schemaEnv;
    const sch = compileParser.call(self, new __1.SchemaEnv({ schema: refSchema, root }), definitions);
    partialParse(cxt, getParser(gen, sch), true);
}
function getParser(gen, sch) {
    return sch.parse
        ? gen.scopeValue("parse", { ref: sch.parse })
        : (0, codegen_1._) `${gen.scopeValue("wrapper", { ref: sch })}.parse`;
}
function parseEmpty(cxt) {
    parseWith(cxt, parseJson_1.parseJson);
}
function parseWith(cxt, parseFunc, args) {
    partialParse(cxt, (0, util_1.useFunc)(cxt.gen, parseFunc), args);
}
function partialParse(cxt, parseFunc, args) {
    const { gen, data } = cxt;
    gen.assign(data, (0, codegen_1._) `${parseFunc}(${names_1.default.json}, ${names_1.default.jsonPos}${args ? (0, codegen_1._) `, ${args}` : codegen_1.nil})`);
    gen.assign(names_1.default.jsonPos, (0, codegen_1._) `${parseFunc}.position`);
    gen.if((0, codegen_1._) `${data} === undefined`, () => parsingError(cxt, (0, codegen_1._) `${parseFunc}.message`));
}
function parseToken(cxt, tok) {
    tryParseToken(cxt, tok, jsonSyntaxError);
}
function tryParseToken(cxt, tok, fail, success) {
    const { gen } = cxt;
    const n = tok.length;
    skipWhitespace(cxt);
    gen.if((0, codegen_1._) `${jsonSlice(n)} === ${tok}`, () => {
        gen.add(names_1.default.jsonPos, n);
        success === null || success === void 0 ? void 0 : success(cxt);
    }, () => fail(cxt));
}
function skipWhitespace({ gen, char: c }) {
    gen.code((0, codegen_1._) `while((${c}=${names_1.default.json}[${names_1.default.jsonPos}],${c}===" "||${c}==="\\n"||${c}==="\\r"||${c}==="\\t"))${names_1.default.jsonPos}++;`);
}
function jsonSlice(len) {
    return len === 1
        ? (0, codegen_1._) `${names_1.default.json}[${names_1.default.jsonPos}]`
        : (0, codegen_1._) `${names_1.default.json}.slice(${names_1.default.jsonPos}, ${names_1.default.jsonPos}+${len})`;
}
function jsonSyntaxError(cxt) {
    parsingError(cxt, (0, codegen_1._) `"unexpected token " + ${names_1.default.json}[${names_1.default.jsonPos}]`);
}
function parsingError({ gen, parseName }, msg) {
    gen.assign((0, codegen_1._) `${parseName}.message`, msg);
    gen.assign((0, codegen_1._) `${parseName}.position`, names_1.default.jsonPos);
    gen.return(undef);
}
//# sourceMappingURL=parse.js.map