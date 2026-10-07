/**
 * @since 3.10.0
 */
import * as Arr from "./Array.js";
import * as errors_ from "./internal/schema/errors.js";
import * as schemaId_ from "./internal/schema/schemaId.js";
import * as Option from "./Option.js";
import * as ParseResult from "./ParseResult.js";
import * as Predicate from "./Predicate.js";
import * as Record from "./Record.js";
import * as AST from "./SchemaAST.js";
/**
 * Generates a JSON Schema from a schema.
 *
 * **Options**
 *
 * - `target`: The target JSON Schema version. Possible values are:
 *   - `"jsonSchema7"`: JSON Schema draft-07 (default behavior).
 *   - `"jsonSchema2019-09"`: JSON Schema draft-2019-09.
 *   - `"jsonSchema2020-12"`: JSON Schema draft-2020-12.
 *   - `"openApi3.1"`: OpenAPI 3.1.
 *
 * @category encoding
 * @since 3.10.0
 */
export const make = (schema, options) => {
  const definitions = {};
  const target = options?.target ?? "jsonSchema7";
  const ast = AST.isTransformation(schema.ast) && isParseJsonTransformation(schema.ast.from)
  // Special case top level `parseJson` transformations
  ? schema.ast.to : schema.ast;
  const jsonSchema = fromAST(ast, {
    definitions,
    target
  });
  const out = {
    $schema: getMetaSchemaUri(target),
    $defs: {},
    ...jsonSchema
  };
  if (Record.isEmptyRecord(definitions)) {
    delete out.$defs;
  } else {
    out.$defs = definitions;
  }
  return out;
};
/** @internal */
export function getMetaSchemaUri(target) {
  switch (target) {
    case "jsonSchema7":
      return "http://json-schema.org/draft-07/schema#";
    case "jsonSchema2019-09":
      return "https://json-schema.org/draft/2019-09/schema";
    case "jsonSchema2020-12":
    case "openApi3.1":
      return "https://json-schema.org/draft/2020-12/schema";
  }
}
/**
 * Returns a JSON Schema with additional options and definitions.
 *
 * **Warning**
 *
 * This function is experimental and subject to change.
 *
 * **Options**
 *
 * - `definitions`: A record of definitions that are included in the schema.
 * - `definitionPath`: The path to the definitions within the schema (defaults
 *   to "#/$defs/").
 * - `target`: Which spec to target. Possible values are:
 *   - `'jsonSchema7'`: JSON Schema draft-07 (default behavior).
 *   - `'jsonSchema2019-09'`: JSON Schema draft-2019-09.
 *   - `'openApi3.1'`: OpenAPI 3.1.
 * - `topLevelReferenceStrategy`: Controls the handling of the top-level
 *   reference. Possible values are:
 *   - `"keep"`: Keep the top-level reference (default behavior).
 *   - `"skip"`: Skip the top-level reference.
 * - `additionalPropertiesStrategy`: Controls the handling of additional properties. Possible values are:
 *   - `"strict"`: Disallow additional properties (default behavior).
 *   - `"allow"`: Allow additional properties.
 *
 * @category encoding
 * @since 3.11.5
 * @experimental
 */
export const fromAST = (ast, options) => {
  const definitionPath = options.definitionPath ?? "#/$defs/";
  const getRef = id => definitionPath + id;
  const target = options.target ?? "jsonSchema7";
  const topLevelReferenceStrategy = options.topLevelReferenceStrategy ?? "keep";
  const additionalPropertiesStrategy = options.additionalPropertiesStrategy ?? "strict";
  return go(ast, options.definitions, "handle-identifier", [], {
    getRef,
    target,
    topLevelReferenceStrategy,
    additionalPropertiesStrategy
  }, "handle-annotation", "handle-errors");
};
const constNever = {
  $id: "/schemas/never",
  not: {}
};
const constAny = {
  $id: "/schemas/any"
};
const constUnknown = {
  $id: "/schemas/unknown"
};
const constVoid = {
  $id: "/schemas/void"
};
const constObject = {
  $id: "/schemas/object",
  "anyOf": [{
    "type": "object"
  }, {
    "type": "array"
  }]
};
const constEmptyStruct = {
  $id: "/schemas/%7B%7D",
  "anyOf": [{
    "type": "object"
  }, {
    "type": "array"
  }]
};
function getRawDescription(annotated) {
  if (annotated !== undefined) return Option.getOrUndefined(AST.getDescriptionAnnotation(annotated));
}
function getRawTitle(annotated) {
  if (annotated !== undefined) return Option.getOrUndefined(AST.getTitleAnnotation(annotated));
}
function getRawDefault(annotated) {
  if (annotated !== undefined) return AST.getDefaultAnnotation(annotated);
  return Option.none();
}
function encodeDefault(ast, def) {
  const getOption = ParseResult.getOption(ast, false);
  return getOption(def);
}
function getRawExamples(annotated) {
  if (annotated !== undefined) return Option.getOrUndefined(AST.getExamplesAnnotation(annotated));
}
function encodeExamples(ast, examples) {
  const getOption = ParseResult.getOption(ast, false);
  const out = Arr.filterMap(examples, e => getOption(e).pipe(Option.filter(isJsonValue)));
  return out.length > 0 ? out : undefined;
}
function filterBuiltIn(ast, annotation, key) {
  if (annotation !== undefined) {
    switch (ast._tag) {
      case "StringKeyword":
        return annotation !== AST.stringKeyword.annotations[key] ? annotation : undefined;
      case "NumberKeyword":
        return annotation !== AST.numberKeyword.annotations[key] ? annotation : undefined;
      case "BooleanKeyword":
        return annotation !== AST.booleanKeyword.annotations[key] ? annotation : undefined;
    }
  }
  return annotation;
}
function isJsonValue(value, visited = new Set()) {
  if (value === null || typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return true;
  }
  if (Array.isArray(value) || typeof value === "object") {
    // Check for cyclic references
    if (visited.has(value)) {
      return false;
    }
    visited.add(value);
    try {
      if (Array.isArray(value)) {
        return value.every(item => isJsonValue(item, visited));
      }
      // Exclude non-plain objects (Date, RegExp, etc.) by checking constructor
      const proto = Object.getPrototypeOf(value);
      if (proto !== null && proto !== Object.prototype) {
        return false;
      }
      // JSON only allows string keys, so exclude objects with Symbol keys
      if (Object.getOwnPropertySymbols(value).length > 0) {
        return false;
      }
      // Check all values are JSON values
      return Object.values(value).every(v => isJsonValue(v, visited));
    } finally {
      visited.delete(value);
    }
  }
  return false;
}
function pruneJsonSchemaAnnotations(ast, description, title, def, examples) {
  const out = {};
  if (description !== undefined) out.description = description;
  if (title !== undefined) out.title = title;
  if (Option.isSome(def)) {
    const o = encodeDefault(ast, def.value);
    if (Option.isSome(o) && isJsonValue(o.value)) {
      out.default = o.value;
    }
  }
  if (examples !== undefined) {
    const encodedExamples = encodeExamples(ast, examples);
    if (encodedExamples !== undefined) {
      out.examples = encodedExamples;
    }
  }
  if (Object.keys(out).length === 0) {
    return undefined;
  }
  return out;
}
function getContextJsonSchemaAnnotations(ast, annotated) {
  return pruneJsonSchemaAnnotations(ast, getRawDescription(annotated), getRawTitle(annotated), getRawDefault(annotated), getRawExamples(annotated));
}
function getJsonSchemaAnnotations(ast) {
  return pruneJsonSchemaAnnotations(ast, filterBuiltIn(ast, getRawDescription(ast), AST.DescriptionAnnotationId), filterBuiltIn(ast, getRawTitle(ast), AST.TitleAnnotationId), getRawDefault(ast), getRawExamples(ast));
}
function mergeJsonSchemaAnnotations(jsonSchema, jsonSchemaAnnotations) {
  if (jsonSchemaAnnotations) {
    if ("$ref" in jsonSchema) {
      return {
        allOf: [jsonSchema],
        ...jsonSchemaAnnotations
      };
    }
    return {
      ...jsonSchema,
      ...jsonSchemaAnnotations
    };
  }
  return jsonSchema;
}
const pruneUndefined = ast => {
  if (Option.isNone(AST.getJSONSchemaAnnotation(ast))) {
    return AST.pruneUndefined(ast, pruneUndefined, ast => pruneUndefined(ast.from));
  }
};
const isParseJsonTransformation = ast => ast.annotations[AST.SchemaIdAnnotationId] === AST.ParseJsonSchemaId;
const isOverrideAnnotation = (ast, jsonSchema) => {
  if (AST.isRefinement(ast)) {
    const schemaId = ast.annotations[AST.SchemaIdAnnotationId];
    if (schemaId === schemaId_.IntSchemaId) {
      return "type" in jsonSchema && jsonSchema.type !== "integer";
    }
  }
  return "type" in jsonSchema || "oneOf" in jsonSchema || "anyOf" in jsonSchema || "$ref" in jsonSchema;
};
const mergeRefinements = (from, jsonSchema, ast) => {
  const out = {
    ...from,
    ...getJsonSchemaAnnotations(ast),
    ...jsonSchema
  };
  out.allOf ??= [];
  const handle = (name, filter) => {
    if (name in jsonSchema && name in from) {
      out.allOf.unshift({
        [name]: from[name]
      });
      out.allOf = out.allOf.filter(filter);
    }
  };
  handle("minLength", i => i.minLength > jsonSchema.minLength);
  handle("maxLength", i => i.maxLength < jsonSchema.maxLength);
  handle("pattern", i => i.pattern !== jsonSchema.pattern);
  handle("minItems", i => i.minItems > jsonSchema.minItems);
  handle("maxItems", i => i.maxItems < jsonSchema.maxItems);
  handle("minimum", i => i.minimum > jsonSchema.minimum);
  handle("maximum", i => i.maximum < jsonSchema.maximum);
  handle("exclusiveMinimum", i => i.exclusiveMinimum > jsonSchema.exclusiveMinimum);
  handle("exclusiveMaximum", i => i.exclusiveMaximum < jsonSchema.exclusiveMaximum);
  handle("multipleOf", i => i.multipleOf !== jsonSchema.multipleOf);
  if (out.allOf.length === 0) {
    delete out.allOf;
  }
  return out;
};
function isContentSchemaSupported(options) {
  switch (options.target) {
    case "jsonSchema7":
      return false;
    case "jsonSchema2019-09":
    case "jsonSchema2020-12":
    case "openApi3.1":
      return true;
  }
}
function getAdditionalProperties(options) {
  switch (options.additionalPropertiesStrategy) {
    case "allow":
      return true;
    case "strict":
      return false;
  }
}
function addASTAnnotations(jsonSchema, ast) {
  return addAnnotations(jsonSchema, getJsonSchemaAnnotations(ast));
}
function addAnnotations(jsonSchema, annotations) {
  if (annotations === undefined || Object.keys(annotations).length === 0) {
    return jsonSchema;
  }
  if ("$ref" in jsonSchema) {
    return {
      allOf: [jsonSchema],
      ...annotations
    };
  }
  return {
    ...jsonSchema,
    ...annotations
  };
}
function getIdentifierAnnotation(ast) {
  const identifier = Option.getOrUndefined(AST.getJSONIdentifier(ast));
  if (identifier === undefined) {
    if (AST.isSuspend(ast)) {
      return getIdentifierAnnotation(ast.f());
    }
    if (AST.isTransformation(ast) && AST.isTypeLiteral(ast.from) && AST.isDeclaration(ast.to)) {
      const to = ast.to;
      const surrogate = AST.getSurrogateAnnotation(to);
      if (Option.isSome(surrogate)) {
        return getIdentifierAnnotation(to);
      }
    }
  }
  return identifier;
}
function go(ast, $defs, identifier, path, options, annotation, errors) {
  if (identifier === "handle-identifier" && (options.topLevelReferenceStrategy !== "skip" || AST.isSuspend(ast))) {
    const id = getIdentifierAnnotation(ast);
    if (id !== undefined) {
      const escapedId = id.replace(/~/ig, "~0").replace(/\//ig, "~1");
      const out = {
        $ref: options.getRef(escapedId)
      };
      if (!Record.has($defs, id)) {
        $defs[id] = out;
        $defs[id] = go(ast, $defs, "ignore-identifier", path, options, "handle-annotation", errors);
      }
      return out;
    }
  }
  if (annotation === "handle-annotation") {
    const hook = AST.getJSONSchemaAnnotation(ast);
    if (Option.isSome(hook)) {
      const handler = hook.value;
      if (isOverrideAnnotation(ast, handler)) {
        switch (ast._tag) {
          case "Declaration":
            return addASTAnnotations(handler, ast);
          default:
            return handler;
        }
      } else {
        switch (ast._tag) {
          case "Refinement":
            {
              const t = AST.getTransformationFrom(ast);
              if (t === undefined) {
                return mergeRefinements(go(ast.from, $defs, identifier, path, options, "handle-annotation", errors), handler, ast);
              } else {
                return go(t, $defs, identifier, path, options, "handle-annotation", errors);
              }
            }
          default:
            return {
              ...go(ast, $defs, identifier, path, options, "ignore-annotation", errors),
              ...handler
            };
        }
      }
    }
  }
  const surrogate = AST.getSurrogateAnnotation(ast);
  if (Option.isSome(surrogate)) {
    return go(surrogate.value, $defs, identifier, path, options, "handle-annotation", errors);
  }
  switch (ast._tag) {
    // Unsupported
    case "Declaration":
    case "UndefinedKeyword":
    case "BigIntKeyword":
    case "UniqueSymbol":
    case "SymbolKeyword":
      {
        if (errors === "ignore-errors") return addASTAnnotations(constAny, ast);
        throw new Error(errors_.getJSONSchemaMissingAnnotationErrorMessage(path, ast));
      }
    case "Suspend":
      {
        if (identifier === "handle-identifier") {
          if (errors === "ignore-errors") return addASTAnnotations(constAny, ast);
          throw new Error(errors_.getJSONSchemaMissingIdentifierAnnotationErrorMessage(path, ast));
        }
        return go(ast.f(), $defs, "ignore-identifier", path, options, "handle-annotation", errors);
      }
    // Primitives
    case "NeverKeyword":
      return addASTAnnotations(constNever, ast);
    case "VoidKeyword":
      return addASTAnnotations(constVoid, ast);
    case "UnknownKeyword":
      return addASTAnnotations(constUnknown, ast);
    case "AnyKeyword":
      return addASTAnnotations(constAny, ast);
    case "ObjectKeyword":
      return addASTAnnotations(constObject, ast);
    case "StringKeyword":
      return addASTAnnotations({
        type: "string"
      }, ast);
    case "NumberKeyword":
      return addASTAnnotations({
        type: "number"
      }, ast);
    case "BooleanKeyword":
      return addASTAnnotations({
        type: "boolean"
      }, ast);
    case "Literal":
      {
        const literal = ast.literal;
        if (literal === null) {
          return addASTAnnotations({
            type: "null"
          }, ast);
        } else if (Predicate.isString(literal)) {
          return addASTAnnotations({
            type: "string",
            enum: [literal]
          }, ast);
        } else if (Predicate.isNumber(literal)) {
          return addASTAnnotations({
            type: "number",
            enum: [literal]
          }, ast);
        } else if (Predicate.isBoolean(literal)) {
          return addASTAnnotations({
            type: "boolean",
            enum: [literal]
          }, ast);
        }
        if (errors === "ignore-errors") return addASTAnnotations(constAny, ast);
        throw new Error(errors_.getJSONSchemaMissingAnnotationErrorMessage(path, ast));
      }
    case "Enums":
      {
        const anyOf = ast.enums.map(e => {
          const type = Predicate.isNumber(e[1]) ? "number" : "string";
          return {
            type,
            title: e[0],
            enum: [e[1]]
          };
        });
        return anyOf.length >= 1 ? addASTAnnotations({
          $comment: "/schemas/enums",
          anyOf
        }, ast) : addASTAnnotations(constNever, ast);
      }
    case "TupleType":
      {
        const elements = ast.elements.map((e, i) => mergeJsonSchemaAnnotations(go(e.type, $defs, "handle-identifier", path.concat(i), options, "handle-annotation", errors), getContextJsonSchemaAnnotations(e.type, e)));
        const rest = ast.rest.map(type => mergeJsonSchemaAnnotations(go(type.type, $defs, "handle-identifier", path, options, "handle-annotation", errors), getContextJsonSchemaAnnotations(type.type, type)));
        const output = {
          type: "array"
        };
        // ---------------------------------------------
        // handle elements
        // ---------------------------------------------
        const len = ast.elements.length;
        if (len > 0) {
          output.minItems = len - ast.elements.filter(element => element.isOptional).length;
          if (options.target === "jsonSchema7") {
            output.items = elements;
          } else {
            output.prefixItems = elements;
          }
        }
        // ---------------------------------------------
        // handle rest element
        // ---------------------------------------------
        const restLength = rest.length;
        if (restLength > 0) {
          const head = rest[0];
          const isHomogeneous = restLength === 1 && ast.elements.every(e => e.type === ast.rest[0].type);
          if (isHomogeneous) {
            if (options.target === "jsonSchema7") {
              output.items = head;
            } else {
              output.items = head;
              delete output.prefixItems;
            }
          } else {
            if (options.target === "jsonSchema7") {
              output.additionalItems = head;
            } else {
              output.items = head;
            }
          }
          // ---------------------------------------------
          // handle post rest elements
          // ---------------------------------------------
          if (restLength > 1) {
            if (errors === "ignore-errors") return addASTAnnotations(constAny, ast);
            throw new Error(errors_.getJSONSchemaUnsupportedPostRestElementsErrorMessage(path));
          }
        } else {
          if (len > 0) {
            if (options.target === "jsonSchema7") {
              output.additionalItems = false;
            } else {
              output.items = false;
            }
          } else {
            output.maxItems = 0;
          }
        }
        return addASTAnnotations(output, ast);
      }
    case "TypeLiteral":
      {
        if (ast.propertySignatures.length === 0 && ast.indexSignatures.length === 0) {
          return addASTAnnotations(constEmptyStruct, ast);
        }
        const output = {
          type: "object",
          required: [],
          properties: {},
          additionalProperties: getAdditionalProperties(options)
        };
        let patternProperties = undefined;
        let propertyNames = undefined;
        for (const is of ast.indexSignatures) {
          const pruned = pruneUndefined(is.type) ?? is.type;
          const parameter = is.parameter;
          switch (parameter._tag) {
            case "StringKeyword":
              {
                output.additionalProperties = go(pruned, $defs, "handle-identifier", path, options, "handle-annotation", errors);
                break;
              }
            case "TemplateLiteral":
              {
                patternProperties = go(pruned, $defs, "handle-identifier", path, options, "handle-annotation", errors);
                propertyNames = {
                  type: "string",
                  pattern: AST.getTemplateLiteralRegExp(parameter).source
                };
                break;
              }
            case "Refinement":
              {
                patternProperties = go(pruned, $defs, "handle-identifier", path, options, "handle-annotation", errors);
                propertyNames = go(parameter, $defs, "handle-identifier", path, options, "handle-annotation", errors);
                break;
              }
            case "SymbolKeyword":
              {
                const indexSignaturePath = path.concat("[symbol]");
                output.additionalProperties = go(pruned, $defs, "handle-identifier", indexSignaturePath, options, "handle-annotation", errors);
                propertyNames = go(parameter, $defs, "handle-identifier", indexSignaturePath, options, "handle-annotation", errors);
                break;
              }
          }
        }
        // ---------------------------------------------
        // handle property signatures
        // ---------------------------------------------
        for (let i = 0; i < ast.propertySignatures.length; i++) {
          const ps = ast.propertySignatures[i];
          const name = ps.name;
          if (Predicate.isString(name)) {
            const pruned = pruneUndefined(ps.type);
            const type = pruned ?? ps.type;
            output.properties[name] = mergeJsonSchemaAnnotations(go(type, $defs, "handle-identifier", path.concat(ps.name), options, "handle-annotation", errors), getContextJsonSchemaAnnotations(type, ps));
            // ---------------------------------------------
            // handle optional property signatures
            // ---------------------------------------------
            if (!ps.isOptional && pruned === undefined) {
              output.required.push(name);
            }
          } else {
            if (errors === "ignore-errors") return addASTAnnotations(constAny, ast);
            throw new Error(errors_.getJSONSchemaUnsupportedKeyErrorMessage(name, path));
          }
        }
        // ---------------------------------------------
        // handle index signatures
        // ---------------------------------------------
        if (patternProperties !== undefined) {
          delete output.additionalProperties;
          output.patternProperties = {
            "": patternProperties
          };
        }
        if (propertyNames !== undefined) {
          output.propertyNames = propertyNames;
        }
        return addASTAnnotations(output, ast);
      }
    case "Union":
      {
        const members = ast.types.map(t => go(t, $defs, "handle-identifier", path, options, "handle-annotation", errors));
        const anyOf = compactUnion(members);
        switch (anyOf.length) {
          case 0:
            return constNever;
          case 1:
            return addASTAnnotations(anyOf[0], ast);
          default:
            return addASTAnnotations({
              anyOf
            }, ast);
        }
      }
    case "Refinement":
      return go(ast.from, $defs, identifier, path, options, "handle-annotation", errors);
    case "TemplateLiteral":
      {
        const regex = AST.getTemplateLiteralRegExp(ast);
        return addASTAnnotations({
          type: "string",
          title: String(ast),
          description: "a template literal",
          pattern: regex.source
        }, ast);
      }
    case "Transformation":
      {
        if (isParseJsonTransformation(ast.from)) {
          const out = {
            "type": "string",
            "contentMediaType": "application/json"
          };
          if (isContentSchemaSupported(options)) {
            out["contentSchema"] = go(ast.to, $defs, identifier, path, options, "handle-annotation", errors);
          }
          return out;
        }
        const from = go(ast.from, $defs, identifier, path, options, "handle-annotation", errors);
        if (ast.transformation._tag === "TypeLiteralTransformation" && isJsonSchema7Object(from)) {
          const to = go(ast.to, {}, "ignore-identifier", path, options, "handle-annotation", "ignore-errors");
          if (isJsonSchema7Object(to)) {
            for (const t of ast.transformation.propertySignatureTransformations) {
              const toKey = t.to;
              const fromKey = t.from;
              if (Predicate.isString(toKey) && Predicate.isString(fromKey)) {
                const toProperty = to.properties[toKey];
                if (Predicate.isRecord(toProperty)) {
                  const fromProperty = from.properties[fromKey];
                  if (Predicate.isRecord(fromProperty)) {
                    const annotations = {};
                    if (Predicate.isString(toProperty.title)) annotations.title = toProperty.title;
                    if (Predicate.isString(toProperty.description)) annotations.description = toProperty.description;
                    if (Array.isArray(toProperty.examples)) annotations.examples = toProperty.examples;
                    if (Object.hasOwn(toProperty, "default") && toProperty.default !== undefined) {
                      annotations.default = toProperty.default;
                    }
                    from.properties[fromKey] = addAnnotations(fromProperty, annotations);
                  }
                }
              }
            }
          }
        }
        return addASTAnnotations(from, ast);
      }
  }
}
function isJsonSchema7Object(jsonSchema) {
  return Predicate.isRecord(jsonSchema) && jsonSchema.type === "object" && Predicate.isRecord(jsonSchema.properties);
}
function isNeverWithoutCustomAnnotations(jsonSchema) {
  return jsonSchema === constNever || Predicate.hasProperty(jsonSchema, "$id") && jsonSchema.$id === constNever.$id && Object.keys(jsonSchema).length === 3 && jsonSchema.title === AST.neverKeyword.annotations[AST.TitleAnnotationId];
}
function isAny(jsonSchema) {
  return "$id" in jsonSchema && jsonSchema.$id === constAny.$id;
}
function isUnknown(jsonSchema) {
  return "$id" in jsonSchema && jsonSchema.$id === constUnknown.$id;
}
function isVoid(jsonSchema) {
  return "$id" in jsonSchema && jsonSchema.$id === constVoid.$id;
}
function isCompactableLiteral(jsonSchema) {
  return Predicate.hasProperty(jsonSchema, "enum") && "type" in jsonSchema && Object.keys(jsonSchema).length === 2;
}
function compactUnion(members) {
  const out = [];
  for (const m of members) {
    if (isNeverWithoutCustomAnnotations(m)) continue;
    if (isAny(m) || isUnknown(m) || isVoid(m)) return [m];
    if (isCompactableLiteral(m) && out.length > 0) {
      const last = out[out.length - 1];
      if (isCompactableLiteral(last) && last.type === m.type) {
        out[out.length - 1] = {
          type: last.type,
          enum: [...last.enum, ...m.enum]
        };
        continue;
      }
    }
    out.push(m);
  }
  return out;
}
//# sourceMappingURL=JSONSchema.js.map