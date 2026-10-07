import { $ZodRegistry, globalRegistry } from "./registries.js";
import { getEnumValues } from "./util.js";
export class JSONSchemaGenerator {
    constructor(params) {
        this.counter = 0;
        this.metadataRegistry = params?.metadata ?? globalRegistry;
        this.target = params?.target ?? "draft-2020-12";
        this.unrepresentable = params?.unrepresentable ?? "throw";
        this.override = params?.override ?? (() => { });
        this.io = params?.io ?? "output";
        this.seen = new Map();
    }
    process(schema, _params = { path: [], schemaPath: [] }) {
        var _a;
        const def = schema._zod.def;
        const formatMap = {
            guid: "uuid",
            url: "uri",
            datetime: "date-time",
            json_string: "json-string",
            regex: "", // do not set
        };
        // check for schema in seens
        const seen = this.seen.get(schema);
        if (seen) {
            seen.count++;
            // check if cycle
            const isCycle = _params.schemaPath.includes(schema);
            if (isCycle) {
                seen.cycle = _params.path;
            }
            return seen.schema;
        }
        // initialize
        const result = { schema: {}, count: 1, cycle: undefined, path: _params.path };
        this.seen.set(schema, result);
        // custom method overrides default behavior
        const overrideSchema = schema._zod.toJSONSchema?.();
        if (overrideSchema) {
            result.schema = overrideSchema;
        }
        else {
            const params = {
                ..._params,
                schemaPath: [..._params.schemaPath, schema],
                path: _params.path,
            };
            const parent = schema._zod.parent;
            if (parent) {
                // schema was cloned from another schema
                result.ref = parent;
                this.process(parent, params);
                this.seen.get(parent).isParent = true;
            }
            else {
                const _json = result.schema;
                switch (def.type) {
                    case "string": {
                        const json = _json;
                        json.type = "string";
                        const { minimum, maximum, format, patterns, contentEncoding } = schema._zod
                            .bag;
                        if (typeof minimum === "number")
                            json.minLength = minimum;
                        if (typeof maximum === "number")
                            json.maxLength = maximum;
                        // custom pattern overrides format
                        if (format) {
                            json.format = formatMap[format] ?? format;
                            if (json.format === "")
                                delete json.format; // empty format is not valid
                        }
                        if (contentEncoding)
                            json.contentEncoding = contentEncoding;
                        if (patterns && patterns.size > 0) {
                            const regexes = [...patterns];
                            if (regexes.length === 1)
                                json.pattern = regexes[0].source;
                            else if (regexes.length > 1) {
                                result.schema.allOf = [
                                    ...regexes.map((regex) => ({
                                        ...(this.target === "draft-7" ? { type: "string" } : {}),
                                        pattern: regex.source,
                                    })),
                                ];
                            }
                        }
                        break;
                    }
                    case "number": {
                        const json = _json;
                        const { minimum, maximum, format, multipleOf, exclusiveMaximum, exclusiveMinimum } = schema._zod.bag;
                        if (typeof format === "string" && format.includes("int"))
                            json.type = "integer";
                        else
                            json.type = "number";
                        if (typeof exclusiveMinimum === "number")
                            json.exclusiveMinimum = exclusiveMinimum;
                        if (typeof minimum === "number") {
                            json.minimum = minimum;
                            if (typeof exclusiveMinimum === "number") {
                                if (exclusiveMinimum >= minimum)
                                    delete json.minimum;
                                else
                                    delete json.exclusiveMinimum;
                            }
                        }
                        if (typeof exclusiveMaximum === "number")
                            json.exclusiveMaximum = exclusiveMaximum;
                        if (typeof maximum === "number") {
                            json.maximum = maximum;
                            if (typeof exclusiveMaximum === "number") {
                                if (exclusiveMaximum <= maximum)
                                    delete json.maximum;
                                else
                                    delete json.exclusiveMaximum;
                            }
                        }
                        if (typeof multipleOf === "number")
                            json.multipleOf = multipleOf;
                        break;
                    }
                    case "boolean": {
                        const json = _json;
                        json.type = "boolean";
                        break;
                    }
                    case "bigint": {
                        if (this.unrepresentable === "throw") {
                            throw new Error("BigInt cannot be represented in JSON Schema");
                        }
                        break;
                    }
                    case "symbol": {
                        if (this.unrepresentable === "throw") {
                            throw new Error("Symbols cannot be represented in JSON Schema");
                        }
                        break;
                    }
                    case "null": {
                        _json.type = "null";
                        break;
                    }
                    case "any": {
                        break;
                    }
                    case "unknown": {
                        break;
                    }
                    case "undefined": {
                        if (this.unrepresentable === "throw") {
                            throw new Error("Undefined cannot be represented in JSON Schema");
                        }
                        break;
                    }
                    case "void": {
                        if (this.unrepresentable === "throw") {
                            throw new Error("Void cannot be represented in JSON Schema");
                        }
                        break;
                    }
                    case "never": {
                        _json.not = {};
                        break;
                    }
                    case "date": {
                        if (this.unrepresentable === "throw") {
                            throw new Error("Date cannot be represented in JSON Schema");
                        }
                        break;
                    }
                    case "array": {
                        const json = _json;
                        const { minimum, maximum } = schema._zod.bag;
                        if (typeof minimum === "number")
                            json.minItems = minimum;
                        if (typeof maximum === "number")
                            json.maxItems = maximum;
                        json.type = "array";
                        json.items = this.process(def.element, { ...params, path: [...params.path, "items"] });
                        break;
                    }
                    case "object": {
                        const json = _json;
                        json.type = "object";
                        json.properties = {};
                        const shape = def.shape; // params.shapeCache.get(schema)!;
                        for (const key in shape) {
                            json.properties[key] = this.process(shape[key], {
                                ...params,
                                path: [...params.path, "properties", key],
                            });
                        }
                        // required keys
                        const allKeys = new Set(Object.keys(shape));
                        // const optionalKeys = new Set(def.optional);
                        const requiredKeys = new Set([...allKeys].filter((key) => {
                            const v = def.shape[key]._zod;
                            if (this.io === "input") {
                                return v.optin === undefined;
                            }
                            else {
                                return v.optout === undefined;
                            }
                        }));
                        if (requiredKeys.size > 0) {
                            json.required = Array.from(requiredKeys);
                        }
                        // catchall
                        if (def.catchall?._zod.def.type === "never") {
                            // strict
                            json.additionalProperties = false;
                        }
                        else if (!def.catchall) {
                            // regular
                            if (this.io === "output")
                                json.additionalProperties = false;
                        }
                        else if (def.catchall) {
                            json.additionalProperties = this.process(def.catchall, {
                                ...params,
                                path: [...params.path, "additionalProperties"],
                            });
                        }
                        break;
                    }
                    case "union": {
                        const json = _json;
                        json.anyOf = def.options.map((x, i) => this.process(x, {
                            ...params,
                            path: [...params.path, "anyOf", i],
                        }));
                        break;
                    }
                    case "intersection": {
                        const json = _json;
                        const a = this.process(def.left, {
                            ...params,
                            path: [...params.path, "allOf", 0],
                        });
                        const b = this.process(def.right, {
                            ...params,
                            path: [...params.path, "allOf", 1],
                        });
                        const isSimpleIntersection = (val) => "allOf" in val && Object.keys(val).length === 1;
                        const allOf = [
                            ...(isSimpleIntersection(a) ? a.allOf : [a]),
                            ...(isSimpleIntersection(b) ? b.allOf : [b]),
                        ];
                        json.allOf = allOf;
                        break;
                    }
                    case "tuple": {
                        const json = _json;
                        json.type = "array";
                        const prefixItems = def.items.map((x, i) => this.process(x, { ...params, path: [...params.path, "prefixItems", i] }));
                        if (this.target === "draft-2020-12") {
                            json.prefixItems = prefixItems;
                        }
                        else {
                            json.items = prefixItems;
                        }
                        if (def.rest) {
                            const rest = this.process(def.rest, {
                                ...params,
                                path: [...params.path, "items"],
                            });
                            if (this.target === "draft-2020-12") {
                                json.items = rest;
                            }
                            else {
                                json.additionalItems = rest;
                            }
                        }
                        // additionalItems
                        if (def.rest) {
                            json.items = this.process(def.rest, {
                                ...params,
                                path: [...params.path, "items"],
                            });
                        }
                        // length
                        const { minimum, maximum } = schema._zod.bag;
                        if (typeof minimum === "number")
                            json.minItems = minimum;
                        if (typeof maximum === "number")
                            json.maxItems = maximum;
                        break;
                    }
                    case "record": {
                        const json = _json;
                        json.type = "object";
                        json.propertyNames = this.process(def.keyType, { ...params, path: [...params.path, "propertyNames"] });
                        json.additionalProperties = this.process(def.valueType, {
                            ...params,
                            path: [...params.path, "additionalProperties"],
                        });
                        break;
                    }
                    case "map": {
                        if (this.unrepresentable === "throw") {
                            throw new Error("Map cannot be represented in JSON Schema");
                        }
                        break;
                    }
                    case "set": {
                        if (this.unrepresentable === "throw") {
                            throw new Error("Set cannot be represented in JSON Schema");
                        }
                        break;
                    }
                    case "enum": {
                        const json = _json;
                        const values = getEnumValues(def.entries);
                        // Number enums can have both string and number values
                        if (values.every((v) => typeof v === "number"))
                            json.type = "number";
                        if (values.every((v) => typeof v === "string"))
                            json.type = "string";
                        json.enum = values;
                        break;
                    }
                    case "literal": {
                        const json = _json;
                        const vals = [];
                        for (const val of def.values) {
                            if (val === undefined) {
                                if (this.unrepresentable === "throw") {
                                    throw new Error("Literal `undefined` cannot be represented in JSON Schema");
                                }
                                else {
                                    // do not add to vals
                                }
                            }
                            else if (typeof val === "bigint") {
                                if (this.unrepresentable === "throw") {
                                    throw new Error("BigInt literals cannot be represented in JSON Schema");
                                }
                                else {
                                    vals.push(Number(val));
                                }
                            }
                            else {
                                vals.push(val);
                            }
                        }
                        if (vals.length === 0) {
                            // do nothing (an undefined literal was stripped)
                        }
                        else if (vals.length === 1) {
                            const val = vals[0];
                            json.type = val === null ? "null" : typeof val;
                            json.const = val;
                        }
                        else {
                            if (vals.every((v) => typeof v === "number"))
                                json.type = "number";
                            if (vals.every((v) => typeof v === "string"))
                                json.type = "string";
                            if (vals.every((v) => typeof v === "boolean"))
                                json.type = "string";
                            if (vals.every((v) => v === null))
                                json.type = "null";
                            json.enum = vals;
                        }
                        break;
                    }
                    case "file": {
                        const json = _json;
                        const file = {
                            type: "string",
                            format: "binary",
                            contentEncoding: "binary",
                        };
                        const { minimum, maximum, mime } = schema._zod.bag;
                        if (minimum !== undefined)
                            file.minLength = minimum;
                        if (maximum !== undefined)
                            file.maxLength = maximum;
                        if (mime) {
                            if (mime.length === 1) {
                                file.contentMediaType = mime[0];
                                Object.assign(json, file);
                            }
                            else {
                                json.anyOf = mime.map((m) => {
                                    const mFile = { ...file, contentMediaType: m };
                                    return mFile;
                                });
                            }
                        }
                        else {
                            Object.assign(json, file);
                        }
                        // if (this.unrepresentable === "throw") {
                        //   throw new Error("File cannot be represented in JSON Schema");
                        // }
                        break;
                    }
                    case "transform": {
                        if (this.unrepresentable === "throw") {
                            throw new Error("Transforms cannot be represented in JSON Schema");
                        }
                        break;
                    }
                    case "nullable": {
                        const inner = this.process(def.innerType, params);
                        _json.anyOf = [inner, { type: "null" }];
                        break;
                    }
                    case "nonoptional": {
                        this.process(def.innerType, params);
                        result.ref = def.innerType;
                        break;
                    }
                    case "success": {
                        const json = _json;
                        json.type = "boolean";
                        break;
                    }
                    case "default": {
                        this.process(def.innerType, params);
                        result.ref = def.innerType;
                        _json.default = JSON.parse(JSON.stringify(def.defaultValue));
                        break;
                    }
                    case "prefault": {
                        this.process(def.innerType, params);
                        result.ref = def.innerType;
                        if (this.io === "input")
                            _json._prefault = JSON.parse(JSON.stringify(def.defaultValue));
                        break;
                    }
                    case "catch": {
                        // use conditionals
                        this.process(def.innerType, params);
                        result.ref = def.innerType;
                        let catchValue;
                        try {
                            catchValue = def.catchValue(undefined);
                        }
                        catch {
                            throw new Error("Dynamic catch values are not supported in JSON Schema");
                        }
                        _json.default = catchValue;
                        break;
                    }
                    case "nan": {
                        if (this.unrepresentable === "throw") {
                            throw new Error("NaN cannot be represented in JSON Schema");
                        }
                        break;
                    }
                    case "template_literal": {
                        const json = _json;
                        const pattern = schema._zod.pattern;
                        if (!pattern)
                            throw new Error("Pattern not found in template literal");
                        json.type = "string";
                        json.pattern = pattern.source;
                        break;
                    }
                    case "pipe": {
                        const innerType = this.io === "input" ? (def.in._zod.def.type === "transform" ? def.out : def.in) : def.out;
                        this.process(innerType, params);
                        result.ref = innerType;
                        break;
                    }
                    case "readonly": {
                        this.process(def.innerType, params);
                        result.ref = def.innerType;
                        _json.readOnly = true;
                        break;
                    }
                    // passthrough types
                    case "promise": {
                        this.process(def.innerType, params);
                        result.ref = def.innerType;
                        break;
                    }
                    case "optional": {
                        this.process(def.innerType, params);
                        result.ref = def.innerType;
                        break;
                    }
                    case "lazy": {
                        const innerType = schema._zod.innerType;
                        this.process(innerType, params);
                        result.ref = innerType;
                        break;
                    }
                    case "custom": {
                        if (this.unrepresentable === "throw") {
                            throw new Error("Custom types cannot be represented in JSON Schema");
                        }
                        break;
                    }
                    default: {
                        def;
                    }
                }
            }
        }
        // metadata
        const meta = this.metadataRegistry.get(schema);
        if (meta)
            Object.assign(result.schema, meta);
        if (this.io === "input" && isTransforming(schema)) {
            // examples/defaults only apply to output type of pipe
            delete result.schema.examples;
            delete result.schema.default;
        }
        // set prefault as default
        if (this.io === "input" && result.schema._prefault)
            (_a = result.schema).default ?? (_a.default = result.schema._prefault);
        delete result.schema._prefault;
        // pulling fresh from this.seen in case it was overwritten
        const _result = this.seen.get(schema);
        return _result.schema;
    }
    emit(schema, _params) {
        const params = {
            cycles: _params?.cycles ?? "ref",
            reused: _params?.reused ?? "inline",
            // unrepresentable: _params?.unrepresentable ?? "throw",
            // uri: _params?.uri ?? ((id) => `${id}`),
            external: _params?.external ?? undefined,
        };
        // iterate over seen map;
        const root = this.seen.get(schema);
        if (!root)
            throw new Error("Unprocessed schema. This is a bug in Zod.");
        // initialize result with root schema fields
        // Object.assign(result, seen.cached);
        // returns a ref to the schema
        // defId will be empty if the ref points to an external schema (or #)
        const makeURI = (entry) => {
            // comparing the seen objects because sometimes
            // multiple schemas map to the same seen object.
            // e.g. lazy
            // external is configured
            const defsSegment = this.target === "draft-2020-12" ? "$defs" : "definitions";
            if (params.external) {
                const externalId = params.external.registry.get(entry[0])?.id; // ?? "__shared";// `__schema${this.counter++}`;
                // check if schema is in the external registry
                const uriGenerator = params.external.uri ?? ((id) => id);
                if (externalId) {
                    return { ref: uriGenerator(externalId) };
                }
                // otherwise, add to __shared
                const id = entry[1].defId ?? entry[1].schema.id ?? `schema${this.counter++}`;
                entry[1].defId = id; // set defId so it will be reused if needed
                return { defId: id, ref: `${uriGenerator("__shared")}#/${defsSegment}/${id}` };
            }
            if (entry[1] === root) {
                return { ref: "#" };
            }
            // self-contained schema
            const uriPrefix = `#`;
            const defUriPrefix = `${uriPrefix}/${defsSegment}/`;
            const defId = entry[1].schema.id ?? `__schema${this.counter++}`;
            return { defId, ref: defUriPrefix + defId };
        };
        // stored cached version in `def` property
        // remove all properties, set $ref
        const extractToDef = (entry) => {
            // if the schema is already a reference, do not extract it
            if (entry[1].schema.$ref) {
                return;
            }
            const seen = entry[1];
            const { ref, defId } = makeURI(entry);
            seen.def = { ...seen.schema };
            // defId won't be set if the schema is a reference to an external schema
            if (defId)
                seen.defId = defId;
            // wipe away all properties except $ref
            const schema = seen.schema;
            for (const key in schema) {
                delete schema[key];
            }
            schema.$ref = ref;
        };
        // throw on cycles
        // break cycles
        if (params.cycles === "throw") {
            for (const entry of this.seen.entries()) {
                const seen = entry[1];
                if (seen.cycle) {
                    throw new Error("Cycle detected: " +
                        `#/${seen.cycle?.join("/")}/<root>` +
                        '\n\nSet the `cycles` parameter to `"ref"` to resolve cyclical schemas with defs.');
                }
            }
        }
        // extract schemas into $defs
        for (const entry of this.seen.entries()) {
            const seen = entry[1];
            // convert root schema to # $ref
            if (schema === entry[0]) {
                extractToDef(entry); // this has special handling for the root schema
                continue;
            }
            // extract schemas that are in the external registry
            if (params.external) {
                const ext = params.external.registry.get(entry[0])?.id;
                if (schema !== entry[0] && ext) {
                    extractToDef(entry);
                    continue;
                }
            }
            // extract schemas with `id` meta
            const id = this.metadataRegistry.get(entry[0])?.id;
            if (id) {
                extractToDef(entry);
                continue;
            }
            // break cycles
            if (seen.cycle) {
                // any
                extractToDef(entry);
                continue;
            }
            // extract reused schemas
            if (seen.count > 1) {
                if (params.reused === "ref") {
                    extractToDef(entry);
                    // biome-ignore lint:
                    continue;
                }
            }
        }
        // flatten _refs
        const flattenRef = (zodSchema, params) => {
            const seen = this.seen.get(zodSchema);
            const schema = seen.def ?? seen.schema;
            const _cached = { ...schema };
            // already seen
            if (seen.ref === null) {
                return;
            }
            // flatten ref if defined
            const ref = seen.ref;
            seen.ref = null; // prevent recursion
            if (ref) {
                flattenRef(ref, params);
                // merge referenced schema into current
                const refSchema = this.seen.get(ref).schema;
                if (refSchema.$ref && params.target === "draft-7") {
                    schema.allOf = schema.allOf ?? [];
                    schema.allOf.push(refSchema);
                }
                else {
                    Object.assign(schema, refSchema);
                    Object.assign(schema, _cached); // prevent overwriting any fields in the original schema
                }
            }
            // execute overrides
            if (!seen.isParent)
                this.override({
                    zodSchema: zodSchema,
                    jsonSchema: schema,
                    path: seen.path ?? [],
                });
        };
        for (const entry of [...this.seen.entries()].reverse()) {
            flattenRef(entry[0], { target: this.target });
        }
        const result = {};
        if (this.target === "draft-2020-12") {
            result.$schema = "https://json-schema.org/draft/2020-12/schema";
        }
        else if (this.target === "draft-7") {
            result.$schema = "http://json-schema.org/draft-07/schema#";
        }
        else {
            console.warn(`Invalid target: ${this.target}`);
        }
        if (params.external?.uri) {
            const id = params.external.registry.get(schema)?.id;
            if (!id)
                throw new Error("Schema is missing an `id` property");
            result.$id = params.external.uri(id);
        }
        Object.assign(result, root.def);
        // build defs object
        const defs = params.external?.defs ?? {};
        for (const entry of this.seen.entries()) {
            const seen = entry[1];
            if (seen.def && seen.defId) {
                defs[seen.defId] = seen.def;
            }
        }
        // set definitions in result
        if (params.external) {
        }
        else {
            if (Object.keys(defs).length > 0) {
                if (this.target === "draft-2020-12") {
                    result.$defs = defs;
                }
                else {
                    result.definitions = defs;
                }
            }
        }
        try {
            // this "finalizes" this schema and ensures all cycles are removed
            // each call to .emit() is functionally independent
            // though the seen map is shared
            return JSON.parse(JSON.stringify(result));
        }
        catch (_err) {
            throw new Error("Error converting schema to JSON.");
        }
    }
}
export function toJSONSchema(input, _params) {
    if (input instanceof $ZodRegistry) {
        const gen = new JSONSchemaGenerator(_params);
        const defs = {};
        for (const entry of input._idmap.entries()) {
            const [_, schema] = entry;
            gen.process(schema);
        }
        const schemas = {};
        const external = {
            registry: input,
            uri: _params?.uri,
            defs,
        };
        for (const entry of input._idmap.entries()) {
            const [key, schema] = entry;
            schemas[key] = gen.emit(schema, {
                ..._params,
                external,
            });
        }
        if (Object.keys(defs).length > 0) {
            const defsSegment = gen.target === "draft-2020-12" ? "$defs" : "definitions";
            schemas.__shared = {
                [defsSegment]: defs,
            };
        }
        return { schemas };
    }
    const gen = new JSONSchemaGenerator(_params);
    gen.process(input);
    return gen.emit(input, _params);
}
function isTransforming(_schema, _ctx) {
    const ctx = _ctx ?? { seen: new Set() };
    if (ctx.seen.has(_schema))
        return false;
    ctx.seen.add(_schema);
    const schema = _schema;
    const def = schema._zod.def;
    switch (def.type) {
        case "string":
        case "number":
        case "bigint":
        case "boolean":
        case "date":
        case "symbol":
        case "undefined":
        case "null":
        case "any":
        case "unknown":
        case "never":
        case "void":
        case "literal":
        case "enum":
        case "nan":
        case "file":
        case "template_literal":
            return false;
        case "array": {
            return isTransforming(def.element, ctx);
        }
        case "object": {
            for (const key in def.shape) {
                if (isTransforming(def.shape[key], ctx))
                    return true;
            }
            return false;
        }
        case "union": {
            for (const option of def.options) {
                if (isTransforming(option, ctx))
                    return true;
            }
            return false;
        }
        case "intersection": {
            return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
        }
        case "tuple": {
            for (const item of def.items) {
                if (isTransforming(item, ctx))
                    return true;
            }
            if (def.rest && isTransforming(def.rest, ctx))
                return true;
            return false;
        }
        case "record": {
            return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
        }
        case "map": {
            return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
        }
        case "set": {
            return isTransforming(def.valueType, ctx);
        }
        // inner types
        case "promise":
        case "optional":
        case "nonoptional":
        case "nullable":
        case "readonly":
            return isTransforming(def.innerType, ctx);
        case "lazy":
            return isTransforming(def.getter(), ctx);
        case "default": {
            return isTransforming(def.innerType, ctx);
        }
        case "prefault": {
            return isTransforming(def.innerType, ctx);
        }
        case "custom": {
            return false;
        }
        case "transform": {
            return true;
        }
        case "pipe": {
            return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
        }
        case "success": {
            return false;
        }
        case "catch": {
            return false;
        }
        default:
            def;
    }
    throw new Error(`Unknown schema type: ${def.type}`);
}
