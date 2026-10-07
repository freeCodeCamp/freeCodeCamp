/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

// flowlint ambiguous-object-type:error

'use strict';

const FlattenTransform = require('../../transforms/FlattenTransform');
const IRVisitor = require('../../core/IRVisitor');
const MaskTransform = require('../../transforms/MaskTransform');
const MatchTransform = require('../../transforms/MatchTransform');
const Profiler = require('../../core/GraphQLCompilerProfiler');
const RefetchableFragmentTransform = require('../../transforms/RefetchableFragmentTransform');
const RelayDirectiveTransform = require('../../transforms/RelayDirectiveTransform');
const RequiredFieldTransform = require('../../transforms/RequiredFieldTransform');

const generateAbstractTypeRefinementKey = require('../../util/generateAbstractTypeRefinementKey');
const partitionArray = require('../../util/partitionArray');

const {
  anyTypeAlias,
  declareExportOpaqueType,
  exactObjectTypeAnnotation,
  exportType,
  exportTypes,
  importTypes,
  inexactObjectTypeAnnotation,
  intersectionTypeAnnotation,
  lineComments,
  readOnlyArrayOfType,
  readOnlyObjectTypeProperty,
  unionTypeAnnotation,
} = require('./RelayFlowBabelFactories');
const {
  transformInputType,
  transformScalarType,
} = require('./RelayFlowTypeTransformers');

import type {IRTransform} from '../../core/CompilerContext';
import type {
  Fragment,
  Root,
  Directive,
  Metadata,
  ModuleImport,
  Selection as IRSelection,
} from '../../core/IR';
import type {NodeVisitor} from '../../core/IRVisitor';
import type {Schema, TypeID, EnumTypeID} from '../../core/Schema';
import type {RequiredDirectiveMetadata} from '../../transforms/RequiredFieldTransform';
import type {TypeGeneratorOptions} from '../RelayLanguagePluginInterface';

const babelGenerator = require('@babel/generator').default;
const t = require('@babel/types');
const invariant = require('invariant');
const nullthrows = require('nullthrows');

export type State = {|
  ...TypeGeneratorOptions,
  +generatedFragments: Set<string>,
  +generatedInputObjectTypes: {[name: string]: TypeID | 'pending', ...},
  +usedEnums: {[name: string]: EnumTypeID, ...},
  +usedFragments: Set<string>,
  +matchFields: Map<string, mixed>,
  +runtimeImports: Set<string>,
|};

function generate(
  schema: Schema,
  node: Root | Fragment,
  options: TypeGeneratorOptions,
): string {
  const ast = IRVisitor.visit(node, createVisitor(schema, options));
  return babelGenerator(ast).code;
}

type Selection = {|
  +key: string,
  +schemaName?: string,
  +value?: any,
  +nodeType?: TypeID,
  +conditional?: boolean,
  +concreteType?: string,
  +ref?: string,
  +nodeSelections?: ?SelectionMap,
  +kind?: string,
  +documentName?: string,
|};

type SelectionMap = Map<string, Selection>;

function makeProp(
  schema: Schema,
  {key, schemaName, value, conditional, nodeType, nodeSelections}: Selection,
  state: State,
  unmasked: boolean,
  concreteType?: string,
) {
  if (schemaName === '__typename' && concreteType) {
    value = t.stringLiteralTypeAnnotation(concreteType);
  } else if (nodeType) {
    value = transformScalarType(
      schema,
      nodeType,
      state,
      selectionsToBabel(
        schema,
        [Array.from(nullthrows(nodeSelections).values())],
        state,
        unmasked,
      ),
    );
  }
  const typeProperty = readOnlyObjectTypeProperty(key, value);
  if (conditional) {
    typeProperty.optional = true;
  }
  return typeProperty;
}

const isTypenameSelection = selection => selection.schemaName === '__typename';
const hasTypenameSelection = selections => selections.some(isTypenameSelection);
const onlySelectsTypename = selections => selections.every(isTypenameSelection);

function selectionsToBabel(
  schema: Schema,
  selections: $ReadOnlyArray<$ReadOnlyArray<Selection>>,
  state: State,
  unmasked: boolean,
  fragmentTypeName?: string,
) {
  const baseFields = new Map();
  const byConcreteType = {};
  flattenArray(selections).forEach(selection => {
    const {concreteType} = selection;
    if (concreteType) {
      byConcreteType[concreteType] = byConcreteType[concreteType] ?? [];
      byConcreteType[concreteType].push(selection);
    } else {
      const previousSel = baseFields.get(selection.key);

      baseFields.set(
        selection.key,
        previousSel ? mergeSelection(selection, previousSel) : selection,
      );
    }
  });

  const types = [];

  if (
    Object.keys(byConcreteType).length > 0 &&
    onlySelectsTypename(Array.from(baseFields.values())) &&
    (hasTypenameSelection(Array.from(baseFields.values())) ||
      Object.keys(byConcreteType).every(type =>
        hasTypenameSelection(byConcreteType[type]),
      ))
  ) {
    const typenameAliases = new Set();
    for (const concreteType in byConcreteType) {
      types.push(
        groupRefs([
          ...Array.from(baseFields.values()),
          ...byConcreteType[concreteType],
        ]).map(selection => {
          if (selection.schemaName === '__typename') {
            typenameAliases.add(selection.key);
          }
          return makeProp(schema, selection, state, unmasked, concreteType);
        }),
      );
    }
    // It might be some other type then the listed concrete types. Ideally, we
    // would set the type to diff(string, set of listed concrete types), but
    // this doesn't exist in Flow at the time.
    types.push(
      Array.from(typenameAliases).map(typenameAlias => {
        const otherProp = readOnlyObjectTypeProperty(
          typenameAlias,
          t.stringLiteralTypeAnnotation('%other'),
        );
        otherProp.leadingComments = lineComments(
          "This will never be '%other', but we need some",
          'value in case none of the concrete values match.',
        );
        return otherProp;
      }),
    );
  } else {
    let selectionMap = selectionsToMap(Array.from(baseFields.values()));
    for (const concreteType in byConcreteType) {
      selectionMap = mergeSelections(
        selectionMap,
        selectionsToMap(
          byConcreteType[concreteType].map(sel => ({
            ...sel,
            conditional: true,
          })),
        ),
      );
    }
    const selectionMapValues = groupRefs(
      Array.from(selectionMap.values()),
    ).map(sel =>
      isTypenameSelection(sel) && sel.concreteType
        ? makeProp(
            schema,
            {...sel, conditional: false},
            state,
            unmasked,
            sel.concreteType,
          )
        : makeProp(schema, sel, state, unmasked),
    );
    types.push(selectionMapValues);
  }

  return unionTypeAnnotation(
    types.map(props => {
      if (fragmentTypeName) {
        props.push(
          readOnlyObjectTypeProperty(
            '$refType',
            t.genericTypeAnnotation(t.identifier(fragmentTypeName)),
          ),
        );
      }
      return unmasked
        ? inexactObjectTypeAnnotation(props)
        : exactObjectTypeAnnotation(props);
    }),
  );
}

function mergeSelection(
  a: ?Selection,
  b: Selection,
  shouldSetConditional: boolean = true,
): Selection {
  if (!a) {
    if (shouldSetConditional) {
      return {
        ...b,
        conditional: true,
      };
    }
    return b;
  }
  return {
    ...a,
    nodeSelections: a.nodeSelections
      ? mergeSelections(
          a.nodeSelections,
          nullthrows(b.nodeSelections),
          shouldSetConditional,
        )
      : null,
    conditional: a.conditional && b.conditional,
  };
}

function mergeSelections(
  a: SelectionMap,
  b: SelectionMap,
  shouldSetConditional: boolean = true,
): SelectionMap {
  const merged = new Map();
  for (const [key, value] of a.entries()) {
    merged.set(key, value);
  }
  for (const [key, value] of b.entries()) {
    merged.set(key, mergeSelection(a.get(key), value, shouldSetConditional));
  }
  return merged;
}

function isPlural(node: Fragment): boolean {
  return Boolean(node.metadata && node.metadata.plural);
}

function createVisitor(
  schema: Schema,
  options: TypeGeneratorOptions,
): NodeVisitor {
  const state = {
    customScalars: options.customScalars,
    enumsHasteModule: options.enumsHasteModule,
    generatedFragments: new Set(),
    generatedInputObjectTypes: {},
    optionalInputFields: options.optionalInputFields,
    usedEnums: {},
    usedFragments: new Set(),
    useHaste: options.useHaste,
    useSingleArtifactDirectory: options.useSingleArtifactDirectory,
    noFutureProofEnums: options.noFutureProofEnums,
    matchFields: new Map(),
    runtimeImports: new Set(),
  };
  return {
    leave: {
      Root(node: Root) {
        const inputVariablesType = generateInputVariablesType(
          schema,
          node,
          state,
        );
        const inputObjectTypes = generateInputObjectTypes(state);

        let responseTypeDefinition = selectionsToBabel(
          schema,
          /* $FlowFixMe: selections have already been transformed */
          (node.selections: $ReadOnlyArray<$ReadOnlyArray<Selection>>),
          state,
          false,
        );

        if (node.metadata?.childrenCanBubbleNull === true) {
          responseTypeDefinition = t.nullableTypeAnnotation(
            responseTypeDefinition,
          );
        }

        const responseType = exportType(
          `${node.name}Response`,
          responseTypeDefinition,
        );

        const operationTypes = [
          t.objectTypeProperty(
            t.identifier('variables'),
            t.genericTypeAnnotation(t.identifier(`${node.name}Variables`)),
          ),
          t.objectTypeProperty(
            t.identifier('response'),
            t.genericTypeAnnotation(t.identifier(`${node.name}Response`)),
          ),
        ];

        // Generate raw response type
        let rawResponseType;
        const {normalizationIR} = options;
        if (
          normalizationIR &&
          node.directives.some(d => d.name === DIRECTIVE_NAME)
        ) {
          rawResponseType = IRVisitor.visit(
            normalizationIR,
            createRawResponseTypeVisitor(schema, state),
          );
        }
        const refetchableFragmentName = getRefetchableQueryParentFragmentName(
          state,
          node.metadata,
        );
        if (refetchableFragmentName != null) {
          state.runtimeImports.add('FragmentReference');
        }
        const babelNodes = [];
        if (state.runtimeImports.size) {
          babelNodes.push(
            importTypes(
              Array.from(state.runtimeImports).sort(),
              'relay-runtime',
            ),
          );
        }
        babelNodes.push(
          ...(refetchableFragmentName
            ? generateFragmentRefsForRefetchable(refetchableFragmentName)
            : getFragmentImports(state)),
          ...getEnumDefinitions(schema, state),
          ...inputObjectTypes,
          inputVariablesType,
          responseType,
        );

        if (rawResponseType) {
          for (const [key, ast] of state.matchFields) {
            babelNodes.push(exportType(key, ast));
          }
          operationTypes.push(
            t.objectTypeProperty(
              t.identifier('rawResponse'),
              t.genericTypeAnnotation(t.identifier(`${node.name}RawResponse`)),
            ),
          );
          babelNodes.push(rawResponseType);
        }

        babelNodes.push(
          exportType(node.name, exactObjectTypeAnnotation(operationTypes)),
        );

        // $FlowFixMe[incompatible-call]
        return t.program(babelNodes);
      },
      Fragment(node) {
        let selections = flattenArray(
          // $FlowFixMe[incompatible-cast] : selections have already been transformed
          (node.selections: $ReadOnlyArray<$ReadOnlyArray<Selection>>),
        );
        const numConecreteSelections = selections.filter(s => s.concreteType)
          .length;
        selections = selections.map(selection => {
          if (
            numConecreteSelections <= 1 &&
            isTypenameSelection(selection) &&
            !schema.isAbstractType(node.type)
          ) {
            return [
              {
                ...selection,
                concreteType: schema.getTypeString(node.type),
              },
            ];
          }
          return [selection];
        });
        state.generatedFragments.add(node.name);
        const fragmentTypes = getFragmentTypes(
          node.name,
          getRefetchableQueryPath(state, node.directives),
        );

        const refTypeName = getRefTypeName(node.name);
        const refTypeDataProperty = readOnlyObjectTypeProperty(
          '$data',
          t.genericTypeAnnotation(t.identifier(`${node.name}$data`)),
        );
        refTypeDataProperty.optional = true;
        const refTypeFragmentRefProperty = readOnlyObjectTypeProperty(
          '$fragmentRefs',
          t.genericTypeAnnotation(
            t.identifier(getOldFragmentTypeName(node.name)),
          ),
        );
        const isPluralFragment = isPlural(node);
        const refType = inexactObjectTypeAnnotation([
          refTypeDataProperty,
          refTypeFragmentRefProperty,
        ]);

        const dataTypeName = getDataTypeName(node.name);
        const dataType = t.genericTypeAnnotation(t.identifier(node.name));

        const unmasked = node.metadata != null && node.metadata.mask === false;
        const baseType = selectionsToBabel(
          schema,
          selections,
          state,
          unmasked,
          unmasked ? undefined : getOldFragmentTypeName(node.name),
        );
        let type = isPluralFragment ? readOnlyArrayOfType(baseType) : baseType;

        if (node.metadata?.childrenCanBubbleNull === true) {
          type = t.nullableTypeAnnotation(type);
        }

        state.runtimeImports.add('FragmentReference');

        return t.program([
          ...getFragmentImports(state),
          ...getEnumDefinitions(schema, state),
          importTypes(Array.from(state.runtimeImports).sort(), 'relay-runtime'),
          ...fragmentTypes,
          exportType(node.name, type),
          exportType(dataTypeName, dataType),
          exportType(
            refTypeName,
            isPluralFragment ? readOnlyArrayOfType(refType) : refType,
          ),
        ]);
      },
      InlineFragment(node) {
        return flattenArray(
          // $FlowFixMe[incompatible-cast] : selections have already been transformed
          (node.selections: $ReadOnlyArray<$ReadOnlyArray<Selection>>),
        ).map(typeSelection => {
          return schema.isAbstractType(node.typeCondition)
            ? {
                ...typeSelection,
                conditional: true,
              }
            : {
                ...typeSelection,
                concreteType: schema.getTypeString(node.typeCondition),
              };
        });
      },
      Condition(node) {
        return flattenArray(
          // $FlowFixMe[incompatible-cast] : selections have already been transformed
          (node.selections: $ReadOnlyArray<$ReadOnlyArray<Selection>>),
        ).map(selection => {
          return {
            ...selection,
            conditional: true,
          };
        });
      },
      ScalarField(node) {
        return visitScalarField(schema, node, state);
      },
      LinkedField(node) {
        return visitLinkedField(schema, node);
      },
      ModuleImport(node) {
        return [
          {
            key: '__fragmentPropName',
            conditional: true,
            value: transformScalarType(
              schema,
              schema.expectStringType(),
              state,
            ),
          },
          {
            key: '__module_component',
            conditional: true,
            value: transformScalarType(
              schema,
              schema.expectStringType(),
              state,
            ),
          },
          {
            key: '__fragments_' + node.name,
            ref: node.name,
          },
        ];
      },
      FragmentSpread(node) {
        state.usedFragments.add(node.name);
        return [
          {
            key: '__fragments_' + node.name,
            ref: node.name,
          },
        ];
      },
    },
  };
}

function visitNodeWithSelectionsOnly(node) {
  return flattenArray(
    // $FlowFixMe[incompatible-cast] : selections have already been transformed
    (node.selections: $ReadOnlyArray<$ReadOnlyArray<Selection>>),
  );
}

function visitScalarField(schema: Schema, node, state: State) {
  const requiredMetadata: ?RequiredDirectiveMetadata = (node.metadata
    ?.required: $FlowFixMe);
  const nodeType =
    requiredMetadata != null ? schema.getNonNullType(node.type) : node.type;
  return [
    {
      key: node.alias,
      schemaName: node.name,
      value: transformScalarType(schema, nodeType, state),
    },
  ];
}

function getLinkedFieldNodeType(schema: Schema, node) {
  const requiredMetadata: ?RequiredDirectiveMetadata = (node.metadata
    ?.required: $FlowFixMe);

  if (requiredMetadata != null) {
    return schema.getNonNullType(node.type);
  }
  if (node.metadata?.childrenCanBubbleNull === true) {
    if (schema.isList(node.type)) {
      // In a plural field, nulls bubble up to the item, resulting in a list of nullable items.
      return schema.mapListItemType(node.type, inner =>
        schema.getNullableType(inner),
      );
    } else if (schema.isNonNull(node.type)) {
      const nullable = schema.getNullableType(node.type);
      if (schema.isList(nullable)) {
        return schema.getNonNullType(
          schema.mapListItemType(nullable, inner =>
            schema.getNullableType(inner),
          ),
        );
      }
      return nullable;
    }
    return node.type;
  }
  return node.type;
}

function visitLinkedField(schema: Schema, node) {
  return [
    {
      key: node.alias,
      schemaName: node.name,
      nodeType: getLinkedFieldNodeType(schema, node),
      nodeSelections: selectionsToMap(
        flattenArray(
          // $FlowFixMe[incompatible-cast] : selections have already been transformed
          (node.selections: $ReadOnlyArray<$ReadOnlyArray<Selection>>),
        ),
        /*
         * append concreteType to key so overlapping fields with different
         * concreteTypes don't get overwritten by each other
         */
        true,
      ),
    },
  ];
}

function makeRawResponseProp(
  schema: Schema,
  {
    key,
    schemaName,
    value,
    conditional,
    nodeType,
    nodeSelections,
    kind,
  }: Selection,
  state: State,
  concreteType: ?string,
) {
  if (kind === 'ModuleImport') {
    return t.objectTypeSpreadProperty(
      t.genericTypeAnnotation(t.identifier(key)),
    );
  }
  if (schemaName === '__typename' && concreteType) {
    value = t.stringLiteralTypeAnnotation(concreteType);
  } else if (nodeType) {
    value = transformScalarType(
      schema,
      nodeType,
      state,
      selectionsToRawResponseBabel(
        schema,
        [Array.from(nullthrows(nodeSelections).values())],
        state,
        schema.isAbstractType(nodeType) || schema.isWrapper(nodeType)
          ? null
          : schema.getTypeString(nodeType),
      ),
    );
  }
  const typeProperty = readOnlyObjectTypeProperty(key, value);
  if (conditional) {
    typeProperty.optional = true;
  }
  return typeProperty;
}

// Trasform the codegen IR selections into Babel flow types
function selectionsToRawResponseBabel(
  schema: Schema,
  selections: $ReadOnlyArray<$ReadOnlyArray<Selection>>,
  state: State,
  nodeTypeName: ?string,
) {
  const baseFields = [];
  const byConcreteType = {};

  flattenArray(selections).forEach(selection => {
    const {concreteType} = selection;
    if (concreteType) {
      byConcreteType[concreteType] = byConcreteType[concreteType] ?? [];
      byConcreteType[concreteType].push(selection);
    } else {
      baseFields.push(selection);
    }
  });

  const types = [];
  if (Object.keys(byConcreteType).length) {
    const baseFieldsMap = selectionsToMap(baseFields);
    for (const concreteType in byConcreteType) {
      const mergedSeletions = Array.from(
        mergeSelections(
          baseFieldsMap,
          selectionsToMap(byConcreteType[concreteType]),
          false,
        ).values(),
      );
      types.push(
        exactObjectTypeAnnotation(
          mergedSeletions.map(selection =>
            makeRawResponseProp(schema, selection, state, concreteType),
          ),
        ),
      );
      appendLocal3DPayload(types, mergedSeletions, schema, state, concreteType);
    }
  }
  if (baseFields.length > 0) {
    types.push(
      exactObjectTypeAnnotation(
        baseFields.map(selection =>
          makeRawResponseProp(schema, selection, state, nodeTypeName),
        ),
      ),
    );
    appendLocal3DPayload(types, baseFields, schema, state, nodeTypeName);
  }
  return unionTypeAnnotation(types);
}

function appendLocal3DPayload(
  types: Array<mixed>,
  selections: $ReadOnlyArray<Selection>,
  schema: Schema,
  state: State,
  currentType: ?string,
): void {
  const moduleImport = selections.find(sel => sel.kind === 'ModuleImport');
  if (moduleImport) {
    // Generate an extra opaque type for client 3D fields
    state.runtimeImports.add('Local3DPayload');
    types.push(
      t.genericTypeAnnotation(
        t.identifier('Local3DPayload'),
        t.typeParameterInstantiation([
          t.stringLiteralTypeAnnotation(nullthrows(moduleImport.documentName)),
          exactObjectTypeAnnotation(
            selections
              .filter(sel => sel.schemaName !== 'js')
              .map(selection =>
                makeRawResponseProp(schema, selection, state, currentType),
              ),
          ),
        ]),
      ),
    );
  }
}

// Visitor for generating raw response type
function createRawResponseTypeVisitor(schema: Schema, state: State) {
  return {
    leave: {
      Root(node) {
        return exportType(
          `${node.name}RawResponse`,
          selectionsToRawResponseBabel(
            schema,
            // $FlowFixMe[incompatible-cast] : selections have already been transformed
            (node.selections: $ReadOnlyArray<$ReadOnlyArray<Selection>>),
            state,
            null,
          ),
        );
      },
      InlineFragment(node) {
        const typeCondition = node.typeCondition;
        return flattenArray(
          // $FlowFixMe[incompatible-cast] : selections have already been transformed
          (node.selections: $ReadOnlyArray<$ReadOnlyArray<Selection>>),
        ).map(typeSelection => {
          return schema.isAbstractType(typeCondition)
            ? typeSelection
            : {
                ...typeSelection,
                concreteType: schema.getTypeString(typeCondition),
              };
        });
      },
      ScalarField(node) {
        return visitScalarField(schema, node, state);
      },
      ClientExtension(node) {
        return flattenArray(
          // $FlowFixMe[incompatible-cast] : selections have already been transformed
          (node.selections: $ReadOnlyArray<$ReadOnlyArray<Selection>>),
        ).map(sel => ({
          ...sel,
          conditional: true,
        }));
      },
      LinkedField(node) {
        return visitLinkedField(schema, node);
      },
      Condition: visitNodeWithSelectionsOnly,
      Defer: visitNodeWithSelectionsOnly,
      Stream: visitNodeWithSelectionsOnly,
      ModuleImport(node) {
        return visitRawResposneModuleImport(schema, node, state);
      },
      FragmentSpread(node) {
        invariant(
          false,
          'A fragment spread is found when traversing the AST, ' +
            'make sure you are passing the codegen IR',
        );
      },
    },
  };
}

// Dedupe the generated type of module selections to reduce file size
function visitRawResposneModuleImport(
  schema: Schema,
  node: ModuleImport,
  state: State,
): $ReadOnlyArray<Selection> {
  const {selections, name: key} = node;
  const moduleSelections = selections
    .filter(
      // $FlowFixMe[prop-missing] selections have already been transformed
      sel => sel.length && sel[0].schemaName === 'js',
    )
    .map(arr => arr[0]);
  if (!state.matchFields.has(key)) {
    const ast = selectionsToRawResponseBabel(
      schema,
      // $FlowFixMe[incompatible-cast] : selections have already been transformed
      (node.selections: $ReadOnlyArray<$ReadOnlyArray<Selection>>).filter(
        sel => sel.length > 1 || sel[0].schemaName !== 'js',
      ),
      state,
      null,
    );
    state.matchFields.set(key, ast);
  }
  return [
    ...moduleSelections,
    {
      key,
      kind: 'ModuleImport',
      documentName: node.key,
    },
  ];
}

function selectionsToMap(
  selections: $ReadOnlyArray<Selection>,
  appendType?: boolean,
): SelectionMap {
  const map = new Map();
  selections.forEach(selection => {
    const key =
      appendType && selection.concreteType
        ? `${selection.key}::${selection.concreteType}`
        : selection.key;
    const previousSel = map.get(key);
    map.set(
      key,
      previousSel ? mergeSelection(previousSel, selection) : selection,
    );
  });
  return map;
}

function flattenArray(
  arrayOfArrays: $ReadOnlyArray<$ReadOnlyArray<Selection>>,
): $ReadOnlyArray<Selection> {
  const result = [];
  arrayOfArrays.forEach(array => {
    result.push(...array);
  });
  return result;
}

function generateInputObjectTypes(state: State) {
  return Object.keys(state.generatedInputObjectTypes).map(typeIdentifier => {
    const inputObjectType = state.generatedInputObjectTypes[typeIdentifier];
    invariant(
      typeof inputObjectType !== 'string',
      'RelayCompilerFlowGenerator: Expected input object type to have been' +
        ' defined before calling `generateInputObjectTypes`',
    );
    return exportType(typeIdentifier, inputObjectType);
  });
}

function generateInputVariablesType(schema: Schema, node: Root, state: State) {
  return exportType(
    `${node.name}Variables`,
    exactObjectTypeAnnotation(
      node.argumentDefinitions.map(arg => {
        const property = t.objectTypeProperty(
          t.identifier(arg.name),
          transformInputType(schema, arg.type, state),
        );
        if (!schema.isNonNull(arg.type)) {
          property.optional = true;
        }
        return property;
      }),
    ),
  );
}

function groupRefs(props): $ReadOnlyArray<Selection> {
  const result = [];
  const refs = [];
  props.forEach(prop => {
    if (prop.ref) {
      refs.push(prop.ref);
    } else {
      result.push(prop);
    }
  });
  if (refs.length > 0) {
    const value = intersectionTypeAnnotation(
      refs.map(ref =>
        t.genericTypeAnnotation(t.identifier(getOldFragmentTypeName(ref))),
      ),
    );
    result.push({
      key: '$fragmentRefs',
      conditional: false,
      value,
    });
  }
  return result;
}

function getFragmentImports(state: State) {
  const imports = [];
  if (state.usedFragments.size > 0) {
    const usedFragments = Array.from(state.usedFragments).sort();
    for (const usedFragment of usedFragments) {
      const fragmentTypeName = getOldFragmentTypeName(usedFragment);
      if (!state.generatedFragments.has(usedFragment)) {
        if (state.useHaste) {
          // TODO(T22653277) support non-haste environments when importing
          // fragments
          imports.push(
            importTypes([fragmentTypeName], usedFragment + '.graphql'),
          );
        } else if (state.useSingleArtifactDirectory) {
          imports.push(
            importTypes([fragmentTypeName], './' + usedFragment + '.graphql'),
          );
        } else {
          imports.push(anyTypeAlias(fragmentTypeName));
        }
      }
    }
  }
  return imports;
}

function getEnumDefinitions(
  schema: Schema,
  {enumsHasteModule, usedEnums, noFutureProofEnums}: State,
) {
  const enumNames = Object.keys(usedEnums).sort();
  if (enumNames.length === 0) {
    return [];
  }
  if (typeof enumsHasteModule === 'string') {
    return [importTypes(enumNames, enumsHasteModule)];
  }
  if (typeof enumsHasteModule === 'function') {
    return enumNames.map(enumName =>
      importTypes([enumName], enumsHasteModule(enumName)),
    );
  }
  return enumNames.map(name => {
    const values = [].concat(schema.getEnumValues(usedEnums[name]));
    values.sort();
    if (!noFutureProofEnums) {
      values.push('%future added value');
    }
    return exportType(
      name,
      t.unionTypeAnnotation(
        values.map(value => t.stringLiteralTypeAnnotation(value)),
      ),
    );
  });
}

// If it's a @refetchable fragment, we generate the $fragmentRef in generated
// query, and import it in the fragment to avoid circular dependencies
function getRefetchableQueryParentFragmentName(
  state: State,
  metadata: Metadata,
): ?string {
  if (
    !metadata?.isRefetchableQuery ||
    (!state.useHaste && !state.useSingleArtifactDirectory)
  ) {
    return null;
  }
  const derivedFrom = metadata?.derivedFrom;
  if (derivedFrom != null && typeof derivedFrom === 'string') {
    return derivedFrom;
  }
  return null;
}

function getRefetchableQueryPath(
  state: State,
  directives: $ReadOnlyArray<Directive>,
): ?string {
  let refetchableQuery: ?string;
  if (!state.useHaste && !state.useSingleArtifactDirectory) {
    return;
  }
  const refetchableArgs = directives.find(d => d.name === 'refetchable')?.args;
  if (!refetchableArgs) {
    return;
  }
  const argument = refetchableArgs.find(
    arg => arg.kind === 'Argument' && arg.name === 'queryName',
  );
  if (
    argument &&
    argument.value &&
    argument.value.kind === 'Literal' &&
    typeof argument.value.value === 'string'
  ) {
    refetchableQuery = argument.value.value;
    if (!state.useHaste) {
      refetchableQuery = './' + refetchableQuery;
    }
    refetchableQuery += '.graphql';
  }
  return refetchableQuery;
}

function generateFragmentRefsForRefetchable(name: string) {
  const oldFragmentTypeName = getOldFragmentTypeName(name);
  const newFragmentTypeName = getNewFragmentTypeName(name);
  return [
    declareExportOpaqueType(oldFragmentTypeName, 'FragmentReference'),
    declareExportOpaqueType(newFragmentTypeName, oldFragmentTypeName),
  ];
}

function getFragmentTypes(name: string, refetchableQueryPath: ?string) {
  const oldFragmentTypeName = getOldFragmentTypeName(name);
  const newFragmentTypeName = getNewFragmentTypeName(name);
  if (refetchableQueryPath) {
    return [
      importTypes(
        [oldFragmentTypeName, newFragmentTypeName],
        refetchableQueryPath,
      ),
      exportTypes([oldFragmentTypeName, newFragmentTypeName]),
    ];
  }
  return [
    declareExportOpaqueType(oldFragmentTypeName, 'FragmentReference'),
    declareExportOpaqueType(newFragmentTypeName, oldFragmentTypeName),
  ];
}

function getOldFragmentTypeName(name: string) {
  return `${name}$ref`;
}

function getNewFragmentTypeName(name: string) {
  return `${name}$fragmentType`;
}

function getRefTypeName(name: string): string {
  return `${name}$key`;
}

function getDataTypeName(name: string): string {
  return `${name}$data`;
}

const FLOW_TRANSFORMS: $ReadOnlyArray<IRTransform> = [
  RelayDirectiveTransform.transform,
  MaskTransform.transform,
  MatchTransform.transform,
  RequiredFieldTransform.transform,
  FlattenTransform.transformWithOptions({}),
  RefetchableFragmentTransform.transform,
];

const DIRECTIVE_NAME = 'raw_response_type';

module.exports = {
  generate: (Profiler.instrument(generate, 'RelayFlowGenerator.generate'): (
    schema: Schema,
    node: Root | Fragment,
    options: TypeGeneratorOptions,
  ) => string),
  transforms: FLOW_TRANSFORMS,
  SCHEMA_EXTENSION: `directive @${DIRECTIVE_NAME} on QUERY | MUTATION | SUBSCRIPTION`,
};
