// @flow strict-local
import ThrowableDiagnostic, {
  generateJSONCodeHighlights,
  escapeMarkdown,
  encodeJSONKeyComponent,
} from '@parcel/diagnostic';
import type {Mapping} from '@mischnic/json-sourcemap';
import nullthrows from 'nullthrows';
// flowlint-next-line untyped-import:off
import levenshtein from 'fastest-levenshtein';

export type SchemaEntity =
  | SchemaObject
  | SchemaArray
  | SchemaBoolean
  | SchemaString
  | SchemaNumber
  | SchemaEnum
  | SchemaOneOf
  | SchemaAllOf
  | SchemaNot
  | SchemaAny;
export type SchemaArray = {|
  type: 'array',
  items?: SchemaEntity,
  __type?: string,
|};
export type SchemaBoolean = {|
  type: 'boolean',
  __type?: string,
|};
export type SchemaOneOf = {|
  oneOf: Array<SchemaEntity>,
|};
export type SchemaAllOf = {|
  allOf: Array<SchemaEntity>,
|};
export type SchemaNot = {|
  not: SchemaEntity,
  __message: string,
|};
export type SchemaString = {|
  type: 'string',
  enum?: Array<string>,
  __validate?: (val: string) => ?string,
  __type?: string,
|};
export type SchemaNumber = {|
  type: 'number',
  enum?: Array<number>,
  __type?: string,
|};
export type SchemaEnum = {|
  enum: Array<mixed>,
|};
export type SchemaObject = {|
  type: 'object',
  properties: {[string]: SchemaEntity, ...},
  additionalProperties?: boolean | SchemaEntity,
  required?: Array<string>,
  __forbiddenProperties?: Array<string>,
  __type?: string,
|};
export type SchemaAny = {||};
export type SchemaError =
  | {|
      type: 'type',
      expectedTypes: Array<string>,
      dataType: ?'key' | 'value',

      dataPath: string,
      ancestors: Array<SchemaEntity>,
      prettyType?: string,
    |}
  | {|
      type: 'enum',
      expectedValues: Array<mixed>,
      dataType: 'key' | 'value',
      actualValue: mixed,

      dataPath: string,
      ancestors: Array<SchemaEntity>,
      prettyType?: string,
    |}
  | {|
      type: 'forbidden-prop',
      prop: string,
      expectedProps: Array<string>,
      actualProps: Array<string>,
      dataType: 'key',

      dataPath: string,
      ancestors: Array<SchemaEntity>,
      prettyType?: string,
    |}
  | {|
      type: 'missing-prop',
      prop: string,
      expectedProps: Array<string>,
      actualProps: Array<string>,
      dataType: 'key' | 'value',

      dataPath: string,
      ancestors: Array<SchemaEntity>,
      prettyType?: string,
    |}
  | {|
      type: 'other',
      actualValue: mixed,
      dataType: ?'key' | 'value',
      message?: string,
      dataPath: string,
      ancestors: Array<SchemaEntity>,
    |};

function validateSchema(schema: SchemaEntity, data: mixed): Array<SchemaError> {
  function walk(
    schemaAncestors,
    dataNode,
    dataPath,
  ): ?SchemaError | Array<SchemaError> {
    let [schemaNode] = schemaAncestors;

    if (schemaNode.type) {
      let type = Array.isArray(dataNode) ? 'array' : typeof dataNode;
      if (schemaNode.type !== type) {
        return {
          type: 'type',
          dataType: 'value',
          dataPath,
          expectedTypes: [schemaNode.type],
          ancestors: schemaAncestors,
          prettyType: schemaNode.__type,
        };
      } else {
        switch (schemaNode.type) {
          case 'array': {
            if (schemaNode.items) {
              let results: Array<SchemaError | Array<SchemaError>> = [];
              // $FlowFixMe type was already checked
              for (let i = 0; i < dataNode.length; i++) {
                let result = walk(
                  [schemaNode.items].concat(schemaAncestors),
                  // $FlowFixMe type was already checked
                  dataNode[i],
                  dataPath + '/' + i,
                );
                if (result) results.push(result);
              }
              if (results.length)
                return results.reduce((acc, v) => acc.concat(v), []);
            }
            break;
          }
          case 'string': {
            // $FlowFixMe type was already checked
            let value: string = dataNode;
            if (schemaNode.enum) {
              if (!schemaNode.enum.includes(value)) {
                return {
                  type: 'enum',
                  dataType: 'value',
                  dataPath,
                  expectedValues: schemaNode.enum,
                  actualValue: value,
                  ancestors: schemaAncestors,
                };
              }
            } else if (schemaNode.__validate) {
              let validationError = schemaNode.__validate(value);
              if (typeof validationError == 'string') {
                return {
                  type: 'other',
                  dataType: 'value',
                  dataPath,
                  message: validationError,
                  actualValue: value,
                  ancestors: schemaAncestors,
                };
              }
            }
            break;
          }
          case 'number': {
            // $FlowFixMe type was already checked
            let value: number = dataNode;
            if (schemaNode.enum) {
              if (!schemaNode.enum.includes(value)) {
                return {
                  type: 'enum',
                  dataType: 'value',
                  dataPath,
                  expectedValues: schemaNode.enum,
                  actualValue: value,
                  ancestors: schemaAncestors,
                };
              }
            }
            break;
          }
          case 'object': {
            let results: Array<Array<SchemaError> | SchemaError> = [];
            let invalidProps;
            if (schemaNode.__forbiddenProperties) {
              // $FlowFixMe type was already checked
              let keys = Object.keys(dataNode);
              invalidProps = schemaNode.__forbiddenProperties.filter(val =>
                keys.includes(val),
              );
              results.push(
                ...invalidProps.map(
                  k =>
                    ({
                      type: 'forbidden-prop',
                      dataPath: dataPath + '/' + encodeJSONKeyComponent(k),
                      dataType: 'key',
                      prop: k,
                      expectedProps: Object.keys(schemaNode.properties),
                      actualProps: keys,
                      ancestors: schemaAncestors,
                    }: SchemaError),
                ),
              );
            }
            if (schemaNode.required) {
              // $FlowFixMe type was already checked
              let keys = Object.keys(dataNode);
              let missingKeys = schemaNode.required.filter(
                val => !keys.includes(val),
              );
              results.push(
                ...missingKeys.map(
                  k =>
                    ({
                      type: 'missing-prop',
                      dataPath,
                      dataType: 'value',
                      prop: k,
                      expectedProps: schemaNode.required,
                      actualProps: keys,
                      ancestors: schemaAncestors,
                    }: SchemaError),
                ),
              );
            }
            if (schemaNode.properties) {
              let {additionalProperties = true} = schemaNode;
              // $FlowFixMe type was already checked
              for (let k in dataNode) {
                if (invalidProps && invalidProps.includes(k)) {
                  // Don't check type on forbidden props
                  continue;
                } else if (k in schemaNode.properties) {
                  let result = walk(
                    [schemaNode.properties[k]].concat(schemaAncestors),
                    // $FlowFixMe type was already checked
                    dataNode[k],
                    dataPath + '/' + encodeJSONKeyComponent(k),
                  );
                  if (result) results.push(result);
                } else {
                  if (typeof additionalProperties === 'boolean') {
                    if (!additionalProperties) {
                      results.push({
                        type: 'enum',
                        dataType: 'key',
                        dataPath: dataPath + '/' + encodeJSONKeyComponent(k),
                        expectedValues: Object.keys(
                          schemaNode.properties,
                        ).filter(
                          // $FlowFixMe type was already checked
                          p => !(p in dataNode),
                        ),
                        actualValue: k,
                        ancestors: schemaAncestors,
                        prettyType: schemaNode.__type,
                      });
                    }
                  } else {
                    let result = walk(
                      [additionalProperties].concat(schemaAncestors),
                      // $FlowFixMe type was already checked
                      dataNode[k],
                      dataPath + '/' + encodeJSONKeyComponent(k),
                    );
                    if (result) results.push(result);
                  }
                }
              }
            }
            if (results.length)
              return results.reduce((acc, v) => acc.concat(v), []);
            break;
          }
          case 'boolean':
            // NOOP, type was checked already
            break;
          default:
            throw new Error(`Unimplemented schema type ${type}?`);
        }
      }
    } else {
      if (schemaNode.enum && !schemaNode.enum.includes(dataNode)) {
        return {
          type: 'enum',
          dataType: 'value',
          dataPath: dataPath,
          expectedValues: schemaNode.enum,
          actualValue: schemaNode,
          ancestors: schemaAncestors,
        };
      }

      if (schemaNode.oneOf || schemaNode.allOf) {
        let list = schemaNode.oneOf || schemaNode.allOf;
        let results: Array<SchemaError | Array<SchemaError>> = [];
        for (let f of list) {
          let result = walk([f].concat(schemaAncestors), dataNode, dataPath);
          if (result) results.push(result);
        }
        if (
          schemaNode.oneOf
            ? results.length == schemaNode.oneOf.length
            : results.length > 0
        ) {
          // return the result with more values / longer key
          results.sort((a, b) =>
            Array.isArray(a) || Array.isArray(b)
              ? Array.isArray(a) && !Array.isArray(b)
                ? -1
                : !Array.isArray(a) && Array.isArray(b)
                ? 1
                : Array.isArray(a) && Array.isArray(b)
                ? b.length - a.length
                : 0
              : b.dataPath.length - a.dataPath.length,
          );
          return results[0];
        }
      } else if (schemaNode.not) {
        let result = walk(
          [schemaNode.not].concat(schemaAncestors),
          dataNode,
          dataPath,
        );
        if (!result || result.length == 0) {
          return {
            type: 'other',
            dataPath,
            dataType: null,
            message: schemaNode.__message,
            actualValue: dataNode,
            ancestors: schemaAncestors,
          };
        }
      }
    }

    return undefined;
  }

  let result = walk([schema], data, '');
  return Array.isArray(result) ? result : result ? [result] : [];
}
export default validateSchema;

export function fuzzySearch(
  expectedValues: Array<string>,
  actualValue: string,
): Array<string> {
  let result = expectedValues
    .map(exp => [exp, levenshtein.distance(exp, actualValue)])
    .filter(
      // Remove if more than half of the string would need to be changed
      ([, d]) => d * 2 < actualValue.length,
    );
  result.sort(([, a], [, b]) => a - b);
  return result.map(([v]) => v);
}

validateSchema.diagnostic = function (
  schema: SchemaEntity,
  data: {|
    ...
      | {|
          source?: ?string,
          data?: mixed,
        |}
      | {|
          source: string,
          map: {|
            data: mixed,
            pointers: {|[key: string]: Mapping|},
          |},
        |},
    filePath?: ?string,
    prependKey?: ?string,
  |},
  origin: string,
  message: string,
): void {
  if (
    'source' in data &&
    'data' in data &&
    typeof data.source !== 'string' &&
    !data
  ) {
    throw new Error(
      'At least one of data.source and data.data must be defined!',
    );
  }
  let object = data.map
    ? data.map.data
    : // $FlowFixMe we can assume it's a JSON object
      data.data ?? JSON.parse(data.source);
  let errors = validateSchema(schema, object);
  if (errors.length) {
    let keys = errors.map(e => {
      let message;
      if (e.type === 'enum') {
        let {actualValue} = e;
        let expectedValues = e.expectedValues.map(String);
        let likely =
          actualValue != null
            ? fuzzySearch(expectedValues, String(actualValue))
            : [];

        if (likely.length > 0) {
          message = `Did you mean ${likely
            .map(v => JSON.stringify(v))
            .join(', ')}?`;
        } else if (expectedValues.length > 0) {
          message = `Possible values: ${expectedValues
            .map(v => JSON.stringify(v))
            .join(', ')}`;
        } else {
          message = 'Unexpected value';
        }
      } else if (e.type === 'forbidden-prop') {
        let {prop, expectedProps, actualProps} = e;
        let likely = fuzzySearch(expectedProps, prop).filter(
          v => !actualProps.includes(v),
        );
        if (likely.length > 0) {
          message = `Did you mean ${likely
            .map(v => JSON.stringify(v))
            .join(', ')}?`;
        } else {
          message = 'Unexpected property';
        }
      } else if (e.type === 'missing-prop') {
        let {prop, actualProps} = e;
        let likely = fuzzySearch(actualProps, prop);
        if (likely.length > 0) {
          message = `Did you mean ${JSON.stringify(prop)}?`;
          e.dataPath += '/' + likely[0];
          e.dataType = 'key';
        } else {
          message = `Missing property ${prop}`;
        }
      } else if (e.type === 'type') {
        if (e.prettyType != null) {
          message = `Expected ${e.prettyType}`;
        } else {
          message = `Expected type ${e.expectedTypes.join(', ')}`;
        }
      } else {
        message = e.message;
      }
      return {key: e.dataPath, type: e.dataType, message};
    });
    let map, code;
    if (data.map) {
      map = data.map;
      code = data.source;
    } else {
      // $FlowFixMe we can assume that data is valid JSON
      map = data.source ?? JSON.stringify(nullthrows(data.data), 0, '\t');
      code = map;
    }
    let codeFrames = [
      {
        filePath: data.filePath ?? undefined,
        language: 'json',
        code,
        codeHighlights: generateJSONCodeHighlights(
          map,
          keys.map(({key, type, message}) => ({
            key: (data.prependKey ?? '') + key,
            type: type,
            message: message != null ? escapeMarkdown(message) : message,
          })),
        ),
      },
    ];

    throw new ThrowableDiagnostic({
      diagnostic: {
        message: message,
        origin,
        codeFrames,
      },
    });
  }
};
