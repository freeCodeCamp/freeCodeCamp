"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const __1 = require("..");
const codegen_1 = require("../codegen");
const ref_error_1 = require("../ref_error");
const names_1 = require("../names");
const code_1 = require("../../vocabularies/code");
const ref_1 = require("../../vocabularies/jtd/ref");
const util_1 = require("../util");
const quote_1 = require("../../runtime/quote");
const genSerialize = {
    elements: serializeElements,
    values: serializeValues,
    discriminator: serializeDiscriminator,
    properties: serializeProperties,
    optionalProperties: serializeProperties,
    enum: serializeString,
    type: serializeType,
    ref: serializeRef,
};
function compileSerializer(sch, definitions) {
    const _sch = __1.getCompilingSchema.call(this, sch);
    if (_sch)
        return _sch;
    const { es5, lines } = this.opts.code;
    const { ownProperties } = this.opts;
    const gen = new codegen_1.CodeGen(this.scope, { es5, lines, ownProperties });
    const serializeName = gen.scopeName("serialize");
    const cxt = {
        self: this,
        gen,
        schema: sch.schema,
        schemaEnv: sch,
        definitions,
        data: names_1.default.data,
    };
    let sourceCode;
    try {
        this._compilations.add(sch);
        sch.serializeName = serializeName;
        gen.func(serializeName, names_1.default.data, false, () => {
            gen.let(names_1.default.json, (0, codegen_1.str) ``);
            serializeCode(cxt);
            gen.return(names_1.default.json);
        });
        gen.optimize(this.opts.code.optimize);
        const serializeFuncCode = gen.toString();
        sourceCode = `${gen.scopeRefs(names_1.default.scope)}return ${serializeFuncCode}`;
        const makeSerialize = new Function(`${names_1.default.scope}`, sourceCode);
        const serialize = makeSerialize(this.scope.get());
        this.scope.value(serializeName, { ref: serialize });
        sch.serialize = serialize;
    }
    catch (e) {
        if (sourceCode)
            this.logger.error("Error compiling serializer, function code:", sourceCode);
        delete sch.serialize;
        delete sch.serializeName;
        throw e;
    }
    finally {
        this._compilations.delete(sch);
    }
    return sch;
}
exports.default = compileSerializer;
function serializeCode(cxt) {
    let form;
    for (const key of types_1.jtdForms) {
        if (key in cxt.schema) {
            form = key;
            break;
        }
    }
    serializeNullable(cxt, form ? genSerialize[form] : serializeEmpty);
}
function serializeNullable(cxt, serializeForm) {
    const { gen, schema, data } = cxt;
    if (!schema.nullable)
        return serializeForm(cxt);
    gen.if((0, codegen_1._) `${data} === undefined || ${data} === null`, () => gen.add(names_1.default.json, (0, codegen_1._) `"null"`), () => serializeForm(cxt));
}
function serializeElements(cxt) {
    const { gen, schema, data } = cxt;
    gen.add(names_1.default.json, (0, codegen_1.str) `[`);
    const first = gen.let("first", true);
    gen.forOf("el", data, (el) => {
        addComma(cxt, first);
        serializeCode({ ...cxt, schema: schema.elements, data: el });
    });
    gen.add(names_1.default.json, (0, codegen_1.str) `]`);
}
function serializeValues(cxt) {
    const { gen, schema, data } = cxt;
    gen.add(names_1.default.json, (0, codegen_1.str) `{`);
    const first = gen.let("first", true);
    gen.forIn("key", data, (key) => serializeKeyValue(cxt, key, schema.values, first));
    gen.add(names_1.default.json, (0, codegen_1.str) `}`);
}
function serializeKeyValue(cxt, key, schema, first) {
    const { gen, data } = cxt;
    addComma(cxt, first);
    serializeString({ ...cxt, data: key });
    gen.add(names_1.default.json, (0, codegen_1.str) `:`);
    const value = gen.const("value", (0, codegen_1._) `${data}${(0, codegen_1.getProperty)(key)}`);
    serializeCode({ ...cxt, schema, data: value });
}
function serializeDiscriminator(cxt) {
    const { gen, schema, data } = cxt;
    const { discriminator } = schema;
    gen.add(names_1.default.json, (0, codegen_1.str) `{${JSON.stringify(discriminator)}:`);
    const tag = gen.const("tag", (0, codegen_1._) `${data}${(0, codegen_1.getProperty)(discriminator)}`);
    serializeString({ ...cxt, data: tag });
    gen.if(false);
    for (const tagValue in schema.mapping) {
        gen.elseIf((0, codegen_1._) `${tag} === ${tagValue}`);
        const sch = schema.mapping[tagValue];
        serializeSchemaProperties({ ...cxt, schema: sch }, discriminator);
    }
    gen.endIf();
    gen.add(names_1.default.json, (0, codegen_1.str) `}`);
}
function serializeProperties(cxt) {
    const { gen } = cxt;
    gen.add(names_1.default.json, (0, codegen_1.str) `{`);
    serializeSchemaProperties(cxt);
    gen.add(names_1.default.json, (0, codegen_1.str) `}`);
}
function serializeSchemaProperties(cxt, discriminator) {
    const { gen, schema, data } = cxt;
    const { properties, optionalProperties } = schema;
    const props = keys(properties);
    const optProps = keys(optionalProperties);
    const allProps = allProperties(props.concat(optProps));
    let first = !discriminator;
    let firstProp;
    for (const key of props) {
        if (first)
            first = false;
        else
            gen.add(names_1.default.json, (0, codegen_1.str) `,`);
        serializeProperty(key, properties[key], keyValue(key));
    }
    if (first)
        firstProp = gen.let("first", true);
    for (const key of optProps) {
        const value = keyValue(key);
        gen.if((0, codegen_1.and)((0, codegen_1._) `${value} !== undefined`, (0, code_1.isOwnProperty)(gen, data, key)), () => {
            addComma(cxt, firstProp);
            serializeProperty(key, optionalProperties[key], value);
        });
    }
    if (schema.additionalProperties) {
        gen.forIn("key", data, (key) => gen.if(isAdditional(key, allProps), () => serializeKeyValue(cxt, key, {}, firstProp)));
    }
    function keys(ps) {
        return ps ? Object.keys(ps) : [];
    }
    function allProperties(ps) {
        if (discriminator)
            ps.push(discriminator);
        if (new Set(ps).size !== ps.length) {
            throw new Error("JTD: properties/optionalProperties/disciminator overlap");
        }
        return ps;
    }
    function keyValue(key) {
        return gen.const("value", (0, codegen_1._) `${data}${(0, codegen_1.getProperty)(key)}`);
    }
    function serializeProperty(key, propSchema, value) {
        gen.add(names_1.default.json, (0, codegen_1.str) `${JSON.stringify(key)}:`);
        serializeCode({ ...cxt, schema: propSchema, data: value });
    }
    function isAdditional(key, ps) {
        return ps.length ? (0, codegen_1.and)(...ps.map((p) => (0, codegen_1._) `${key} !== ${p}`)) : true;
    }
}
function serializeType(cxt) {
    const { gen, schema, data } = cxt;
    switch (schema.type) {
        case "boolean":
            gen.add(names_1.default.json, (0, codegen_1._) `${data} ? "true" : "false"`);
            break;
        case "string":
            serializeString(cxt);
            break;
        case "timestamp":
            gen.if((0, codegen_1._) `${data} instanceof Date`, () => gen.add(names_1.default.json, (0, codegen_1._) `'"' + ${data}.toISOString() + '"'`), () => serializeString(cxt));
            break;
        default:
            serializeNumber(cxt);
    }
}
function serializeString({ gen, data }) {
    gen.add(names_1.default.json, (0, codegen_1._) `${(0, util_1.useFunc)(gen, quote_1.default)}(${data})`);
}
function serializeNumber({ gen, data, self }) {
    const condition = (0, codegen_1._) `${data} === Infinity || ${data} === -Infinity || ${data} !== ${data}`;
    if (self.opts.specialNumbers === undefined || self.opts.specialNumbers === "fast") {
        gen.add(names_1.default.json, (0, codegen_1._) `"" + ${data}`);
    }
    else {
        // specialNumbers === "null"
        gen.if(condition, () => gen.add(names_1.default.json, (0, codegen_1._) `null`), () => gen.add(names_1.default.json, (0, codegen_1._) `"" + ${data}`));
    }
}
function serializeRef(cxt) {
    const { gen, self, data, definitions, schema, schemaEnv } = cxt;
    const { ref } = schema;
    const refSchema = definitions[ref];
    if (!refSchema)
        throw new ref_error_1.default(self.opts.uriResolver, "", ref, `No definition ${ref}`);
    if (!(0, ref_1.hasRef)(refSchema))
        return serializeCode({ ...cxt, schema: refSchema });
    const { root } = schemaEnv;
    const sch = compileSerializer.call(self, new __1.SchemaEnv({ schema: refSchema, root }), definitions);
    gen.add(names_1.default.json, (0, codegen_1._) `${getSerialize(gen, sch)}(${data})`);
}
function getSerialize(gen, sch) {
    return sch.serialize
        ? gen.scopeValue("serialize", { ref: sch.serialize })
        : (0, codegen_1._) `${gen.scopeValue("wrapper", { ref: sch })}.serialize`;
}
function serializeEmpty({ gen, data }) {
    gen.add(names_1.default.json, (0, codegen_1._) `JSON.stringify(${data})`);
}
function addComma({ gen }, first) {
    if (first) {
        gen.if(first, () => gen.assign(first, false), () => gen.add(names_1.default.json, (0, codegen_1.str) `,`));
    }
    else {
        gen.add(names_1.default.json, (0, codegen_1.str) `,`);
    }
}
//# sourceMappingURL=serialize.js.map