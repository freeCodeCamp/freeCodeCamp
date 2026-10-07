"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateProperties = exports.error = void 0;
const code_1 = require("../code");
const util_1 = require("../../compile/util");
const codegen_1 = require("../../compile/codegen");
const metadata_1 = require("./metadata");
const nullable_1 = require("./nullable");
const error_1 = require("./error");
var PropError;
(function (PropError) {
    PropError["Additional"] = "additional";
    PropError["Missing"] = "missing";
})(PropError || (PropError = {}));
exports.error = {
    message: (cxt) => {
        const { params } = cxt;
        return params.propError
            ? params.propError === PropError.Additional
                ? "must NOT have additional properties"
                : `must have property '${params.missingProperty}'`
            : (0, error_1.typeErrorMessage)(cxt, "object");
    },
    params: (cxt) => {
        const { params } = cxt;
        return params.propError
            ? params.propError === PropError.Additional
                ? (0, codegen_1._) `{error: ${params.propError}, additionalProperty: ${params.additionalProperty}}`
                : (0, codegen_1._) `{error: ${params.propError}, missingProperty: ${params.missingProperty}}`
            : (0, error_1.typeErrorParams)(cxt, "object");
    },
};
const def = {
    keyword: "properties",
    schemaType: "object",
    error: exports.error,
    code: validateProperties,
};
// const error: KeywordErrorDefinition = {
//   message: "should NOT have additional properties",
//   params: ({params}) => _`{additionalProperty: ${params.additionalProperty}}`,
// }
function validateProperties(cxt) {
    (0, metadata_1.checkMetadata)(cxt);
    const { gen, data, parentSchema, it } = cxt;
    const { additionalProperties, nullable } = parentSchema;
    if (it.jtdDiscriminator && nullable)
        throw new Error("JTD: nullable inside discriminator mapping");
    if (commonProperties()) {
        throw new Error("JTD: properties and optionalProperties have common members");
    }
    const [allProps, properties] = schemaProperties("properties");
    const [allOptProps, optProperties] = schemaProperties("optionalProperties");
    if (properties.length === 0 && optProperties.length === 0 && additionalProperties) {
        return;
    }
    const [valid, cond] = it.jtdDiscriminator === undefined
        ? (0, nullable_1.checkNullableObject)(cxt, data)
        : [gen.let("valid", false), true];
    gen.if(cond, () => gen.assign(valid, true).block(() => {
        validateProps(properties, "properties", true);
        validateProps(optProperties, "optionalProperties");
        if (!additionalProperties)
            validateAdditional();
    }));
    cxt.pass(valid);
    function commonProperties() {
        const props = parentSchema.properties;
        const optProps = parentSchema.optionalProperties;
        if (!(props && optProps))
            return false;
        for (const p in props) {
            if (Object.prototype.hasOwnProperty.call(optProps, p))
                return true;
        }
        return false;
    }
    function schemaProperties(keyword) {
        const schema = parentSchema[keyword];
        const allPs = schema ? (0, code_1.allSchemaProperties)(schema) : [];
        if (it.jtdDiscriminator && allPs.some((p) => p === it.jtdDiscriminator)) {
            throw new Error(`JTD: discriminator tag used in ${keyword}`);
        }
        const ps = allPs.filter((p) => !(0, util_1.alwaysValidSchema)(it, schema[p]));
        return [allPs, ps];
    }
    function validateProps(props, keyword, required) {
        const _valid = gen.var("valid");
        for (const prop of props) {
            gen.if((0, code_1.propertyInData)(gen, data, prop, it.opts.ownProperties), () => applyPropertySchema(prop, keyword, _valid), () => missingProperty(prop));
            cxt.ok(_valid);
        }
        function missingProperty(prop) {
            if (required) {
                gen.assign(_valid, false);
                cxt.error(false, { propError: PropError.Missing, missingProperty: prop }, { schemaPath: prop });
            }
            else {
                gen.assign(_valid, true);
            }
        }
    }
    function applyPropertySchema(prop, keyword, _valid) {
        cxt.subschema({
            keyword,
            schemaProp: prop,
            dataProp: prop,
        }, _valid);
    }
    function validateAdditional() {
        gen.forIn("key", data, (key) => {
            const addProp = isAdditional(key, allProps, "properties", it.jtdDiscriminator);
            const addOptProp = isAdditional(key, allOptProps, "optionalProperties");
            const extra = addProp === true ? addOptProp : addOptProp === true ? addProp : (0, codegen_1.and)(addProp, addOptProp);
            gen.if(extra, () => {
                if (it.opts.removeAdditional) {
                    gen.code((0, codegen_1._) `delete ${data}[${key}]`);
                }
                else {
                    cxt.error(false, { propError: PropError.Additional, additionalProperty: key }, { instancePath: key, parentSchema: true });
                    if (!it.opts.allErrors)
                        gen.break();
                }
            });
        });
    }
    function isAdditional(key, props, keyword, jtdDiscriminator) {
        let additional;
        if (props.length > 8) {
            // TODO maybe an option instead of hard-coded 8?
            const propsSchema = (0, util_1.schemaRefOrVal)(it, parentSchema[keyword], keyword);
            additional = (0, codegen_1.not)((0, code_1.isOwnProperty)(gen, propsSchema, key));
            if (jtdDiscriminator !== undefined) {
                additional = (0, codegen_1.and)(additional, (0, codegen_1._) `${key} !== ${jtdDiscriminator}`);
            }
        }
        else if (props.length || jtdDiscriminator !== undefined) {
            const ps = jtdDiscriminator === undefined ? props : [jtdDiscriminator].concat(props);
            additional = (0, codegen_1.and)(...ps.map((p) => (0, codegen_1._) `${key} !== ${p}`));
        }
        else {
            additional = true;
        }
        return additional;
    }
}
exports.validateProperties = validateProperties;
exports.default = def;
//# sourceMappingURL=properties.js.map