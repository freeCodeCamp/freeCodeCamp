import { inspect } from '../jsutils/inspect.mjs';
import { invariant } from '../jsutils/invariant.mjs';
import { keyMap } from '../jsutils/keyMap.mjs';
import { print } from '../language/printer.mjs';
import {
  isEnumType,
  isInputObjectType,
  isInterfaceType,
  isListType,
  isNamedType,
  isNonNullType,
  isObjectType,
  isRequiredArgument,
  isRequiredInputField,
  isScalarType,
  isUnionType,
} from '../type/definition.mjs';
import { isSpecifiedScalarType } from '../type/scalars.mjs';
import { astFromValue } from './astFromValue.mjs';
import { sortValueNode } from './sortValueNode.mjs';
var BreakingChangeType;

(function (BreakingChangeType) {
  BreakingChangeType['TYPE_REMOVED'] = 'TYPE_REMOVED';
  BreakingChangeType['TYPE_CHANGED_KIND'] = 'TYPE_CHANGED_KIND';
  BreakingChangeType['TYPE_REMOVED_FROM_UNION'] = 'TYPE_REMOVED_FROM_UNION';
  BreakingChangeType['VALUE_REMOVED_FROM_ENUM'] = 'VALUE_REMOVED_FROM_ENUM';
  BreakingChangeType['REQUIRED_INPUT_FIELD_ADDED'] =
    'REQUIRED_INPUT_FIELD_ADDED';
  BreakingChangeType['IMPLEMENTED_INTERFACE_REMOVED'] =
    'IMPLEMENTED_INTERFACE_REMOVED';
  BreakingChangeType['FIELD_REMOVED'] = 'FIELD_REMOVED';
  BreakingChangeType['FIELD_CHANGED_KIND'] = 'FIELD_CHANGED_KIND';
  BreakingChangeType['REQUIRED_ARG_ADDED'] = 'REQUIRED_ARG_ADDED';
  BreakingChangeType['ARG_REMOVED'] = 'ARG_REMOVED';
  BreakingChangeType['ARG_CHANGED_KIND'] = 'ARG_CHANGED_KIND';
  BreakingChangeType['DIRECTIVE_REMOVED'] = 'DIRECTIVE_REMOVED';
  BreakingChangeType['DIRECTIVE_ARG_REMOVED'] = 'DIRECTIVE_ARG_REMOVED';
  BreakingChangeType['REQUIRED_DIRECTIVE_ARG_ADDED'] =
    'REQUIRED_DIRECTIVE_ARG_ADDED';
  BreakingChangeType['DIRECTIVE_REPEATABLE_REMOVED'] =
    'DIRECTIVE_REPEATABLE_REMOVED';
  BreakingChangeType['DIRECTIVE_LOCATION_REMOVED'] =
    'DIRECTIVE_LOCATION_REMOVED';
})(BreakingChangeType || (BreakingChangeType = {}));

export { BreakingChangeType };
var DangerousChangeType;

(function (DangerousChangeType) {
  DangerousChangeType['VALUE_ADDED_TO_ENUM'] = 'VALUE_ADDED_TO_ENUM';
  DangerousChangeType['TYPE_ADDED_TO_UNION'] = 'TYPE_ADDED_TO_UNION';
  DangerousChangeType['OPTIONAL_INPUT_FIELD_ADDED'] =
    'OPTIONAL_INPUT_FIELD_ADDED';
  DangerousChangeType['OPTIONAL_ARG_ADDED'] = 'OPTIONAL_ARG_ADDED';
  DangerousChangeType['IMPLEMENTED_INTERFACE_ADDED'] =
    'IMPLEMENTED_INTERFACE_ADDED';
  DangerousChangeType['ARG_DEFAULT_VALUE_CHANGE'] = 'ARG_DEFAULT_VALUE_CHANGE';
})(DangerousChangeType || (DangerousChangeType = {}));

export { DangerousChangeType };

/**
 * Given two schemas, returns an Array containing descriptions of all the types
 * of breaking changes covered by the other functions down below.
 */
export function findBreakingChanges(oldSchema, newSchema) {
  // @ts-expect-error
  return findSchemaChanges(oldSchema, newSchema).filter(
    (change) => change.type in BreakingChangeType,
  );
}
/**
 * Given two schemas, returns an Array containing descriptions of all the types
 * of potentially dangerous changes covered by the other functions down below.
 */

export function findDangerousChanges(oldSchema, newSchema) {
  // @ts-expect-error
  return findSchemaChanges(oldSchema, newSchema).filter(
    (change) => change.type in DangerousChangeType,
  );
}

function findSchemaChanges(oldSchema, newSchema) {
  return [
    ...findTypeChanges(oldSchema, newSchema),
    ...findDirectiveChanges(oldSchema, newSchema),
  ];
}

function findDirectiveChanges(oldSchema, newSchema) {
  const schemaChanges = [];
  const directivesDiff = diff(
    oldSchema.getDirectives(),
    newSchema.getDirectives(),
  );

  for (const oldDirective of directivesDiff.removed) {
    schemaChanges.push({
      type: BreakingChangeType.DIRECTIVE_REMOVED,
      description: `${oldDirective.name} was removed.`,
    });
  }

  for (const [oldDirective, newDirective] of directivesDiff.persisted) {
    const argsDiff = diff(oldDirective.args, newDirective.args);

    for (const newArg of argsDiff.added) {
      if (isRequiredArgument(newArg)) {
        schemaChanges.push({
          type: BreakingChangeType.REQUIRED_DIRECTIVE_ARG_ADDED,
          description: `A required arg ${newArg.name} on directive ${oldDirective.name} was added.`,
        });
      }
    }

    for (const oldArg of argsDiff.removed) {
      schemaChanges.push({
        type: BreakingChangeType.DIRECTIVE_ARG_REMOVED,
        description: `${oldArg.name} was removed from ${oldDirective.name}.`,
      });
    }

    if (oldDirective.isRepeatable && !newDirective.isRepeatable) {
      schemaChanges.push({
        type: BreakingChangeType.DIRECTIVE_REPEATABLE_REMOVED,
        description: `Repeatable flag was removed from ${oldDirective.name}.`,
      });
    }

    for (const location of oldDirective.locations) {
      if (!newDirective.locations.includes(location)) {
        schemaChanges.push({
          type: BreakingChangeType.DIRECTIVE_LOCATION_REMOVED,
          description: `${location} was removed from ${oldDirective.name}.`,
        });
      }
    }
  }

  return schemaChanges;
}

function findTypeChanges(oldSchema, newSchema) {
  const schemaChanges = [];
  const typesDiff = diff(
    Object.values(oldSchema.getTypeMap()),
    Object.values(newSchema.getTypeMap()),
  );

  for (const oldType of typesDiff.removed) {
    schemaChanges.push({
      type: BreakingChangeType.TYPE_REMOVED,
      description: isSpecifiedScalarType(oldType)
        ? `Standard scalar ${oldType.name} was removed because it is not referenced anymore.`
        : `${oldType.name} was removed.`,
    });
  }

  for (const [oldType, newType] of typesDiff.persisted) {
    if (isEnumType(oldType) && isEnumType(newType)) {
      schemaChanges.push(...findEnumTypeChanges(oldType, newType));
    } else if (isUnionType(oldType) && isUnionType(newType)) {
      schemaChanges.push(...findUnionTypeChanges(oldType, newType));
    } else if (isInputObjectType(oldType) && isInputObjectType(newType)) {
      schemaChanges.push(...findInputObjectTypeChanges(oldType, newType));
    } else if (isObjectType(oldType) && isObjectType(newType)) {
      schemaChanges.push(
        ...findFieldChanges(oldType, newType),
        ...findImplementedInterfacesChanges(oldType, newType),
      );
    } else if (isInterfaceType(oldType) && isInterfaceType(newType)) {
      schemaChanges.push(
        ...findFieldChanges(oldType, newType),
        ...findImplementedInterfacesChanges(oldType, newType),
      );
    } else if (oldType.constructor !== newType.constructor) {
      schemaChanges.push({
        type: BreakingChangeType.TYPE_CHANGED_KIND,
        description:
          `${oldType.name} changed from ` +
          `${typeKindName(oldType)} to ${typeKindName(newType)}.`,
      });
    }
  }

  return schemaChanges;
}

function findInputObjectTypeChanges(oldType, newType) {
  const schemaChanges = [];
  const fieldsDiff = diff(
    Object.values(oldType.getFields()),
    Object.values(newType.getFields()),
  );

  for (const newField of fieldsDiff.added) {
    if (isRequiredInputField(newField)) {
      schemaChanges.push({
        type: BreakingChangeType.REQUIRED_INPUT_FIELD_ADDED,
        description: `A required field ${newField.name} on input type ${oldType.name} was added.`,
      });
    } else {
      schemaChanges.push({
        type: DangerousChangeType.OPTIONAL_INPUT_FIELD_ADDED,
        description: `An optional field ${newField.name} on input type ${oldType.name} was added.`,
      });
    }
  }

  for (const oldField of fieldsDiff.removed) {
    schemaChanges.push({
      type: BreakingChangeType.FIELD_REMOVED,
      description: `${oldType.name}.${oldField.name} was removed.`,
    });
  }

  for (const [oldField, newField] of fieldsDiff.persisted) {
    const isSafe = isChangeSafeForInputObjectFieldOrFieldArg(
      oldField.type,
      newField.type,
    );

    if (!isSafe) {
      schemaChanges.push({
        type: BreakingChangeType.FIELD_CHANGED_KIND,
        description:
          `${oldType.name}.${oldField.name} changed type from ` +
          `${String(oldField.type)} to ${String(newField.type)}.`,
      });
    }
  }

  return schemaChanges;
}

function findUnionTypeChanges(oldType, newType) {
  const schemaChanges = [];
  const possibleTypesDiff = diff(oldType.getTypes(), newType.getTypes());

  for (const newPossibleType of possibleTypesDiff.added) {
    schemaChanges.push({
      type: DangerousChangeType.TYPE_ADDED_TO_UNION,
      description: `${newPossibleType.name} was added to union type ${oldType.name}.`,
    });
  }

  for (const oldPossibleType of possibleTypesDiff.removed) {
    schemaChanges.push({
      type: BreakingChangeType.TYPE_REMOVED_FROM_UNION,
      description: `${oldPossibleType.name} was removed from union type ${oldType.name}.`,
    });
  }

  return schemaChanges;
}

function findEnumTypeChanges(oldType, newType) {
  const schemaChanges = [];
  const valuesDiff = diff(oldType.getValues(), newType.getValues());

  for (const newValue of valuesDiff.added) {
    schemaChanges.push({
      type: DangerousChangeType.VALUE_ADDED_TO_ENUM,
      description: `${newValue.name} was added to enum type ${oldType.name}.`,
    });
  }

  for (const oldValue of valuesDiff.removed) {
    schemaChanges.push({
      type: BreakingChangeType.VALUE_REMOVED_FROM_ENUM,
      description: `${oldValue.name} was removed from enum type ${oldType.name}.`,
    });
  }

  return schemaChanges;
}

function findImplementedInterfacesChanges(oldType, newType) {
  const schemaChanges = [];
  const interfacesDiff = diff(oldType.getInterfaces(), newType.getInterfaces());

  for (const newInterface of interfacesDiff.added) {
    schemaChanges.push({
      type: DangerousChangeType.IMPLEMENTED_INTERFACE_ADDED,
      description: `${newInterface.name} added to interfaces implemented by ${oldType.name}.`,
    });
  }

  for (const oldInterface of interfacesDiff.removed) {
    schemaChanges.push({
      type: BreakingChangeType.IMPLEMENTED_INTERFACE_REMOVED,
      description: `${oldType.name} no longer implements interface ${oldInterface.name}.`,
    });
  }

  return schemaChanges;
}

function findFieldChanges(oldType, newType) {
  const schemaChanges = [];
  const fieldsDiff = diff(
    Object.values(oldType.getFields()),
    Object.values(newType.getFields()),
  );

  for (const oldField of fieldsDiff.removed) {
    schemaChanges.push({
      type: BreakingChangeType.FIELD_REMOVED,
      description: `${oldType.name}.${oldField.name} was removed.`,
    });
  }

  for (const [oldField, newField] of fieldsDiff.persisted) {
    schemaChanges.push(...findArgChanges(oldType, oldField, newField));
    const isSafe = isChangeSafeForObjectOrInterfaceField(
      oldField.type,
      newField.type,
    );

    if (!isSafe) {
      schemaChanges.push({
        type: BreakingChangeType.FIELD_CHANGED_KIND,
        description:
          `${oldType.name}.${oldField.name} changed type from ` +
          `${String(oldField.type)} to ${String(newField.type)}.`,
      });
    }
  }

  return schemaChanges;
}

function findArgChanges(oldType, oldField, newField) {
  const schemaChanges = [];
  const argsDiff = diff(oldField.args, newField.args);

  for (const oldArg of argsDiff.removed) {
    schemaChanges.push({
      type: BreakingChangeType.ARG_REMOVED,
      description: `${oldType.name}.${oldField.name} arg ${oldArg.name} was removed.`,
    });
  }

  for (const [oldArg, newArg] of argsDiff.persisted) {
    const isSafe = isChangeSafeForInputObjectFieldOrFieldArg(
      oldArg.type,
      newArg.type,
    );

    if (!isSafe) {
      schemaChanges.push({
        type: BreakingChangeType.ARG_CHANGED_KIND,
        description:
          `${oldType.name}.${oldField.name} arg ${oldArg.name} has changed type from ` +
          `${String(oldArg.type)} to ${String(newArg.type)}.`,
      });
    } else if (oldArg.defaultValue !== undefined) {
      if (newArg.defaultValue === undefined) {
        schemaChanges.push({
          type: DangerousChangeType.ARG_DEFAULT_VALUE_CHANGE,
          description: `${oldType.name}.${oldField.name} arg ${oldArg.name} defaultValue was removed.`,
        });
      } else {
        // Since we looking only for client's observable changes we should
        // compare default values in the same representation as they are
        // represented inside introspection.
        const oldValueStr = stringifyValue(oldArg.defaultValue, oldArg.type);
        const newValueStr = stringifyValue(newArg.defaultValue, newArg.type);

        if (oldValueStr !== newValueStr) {
          schemaChanges.push({
            type: DangerousChangeType.ARG_DEFAULT_VALUE_CHANGE,
            description: `${oldType.name}.${oldField.name} arg ${oldArg.name} has changed defaultValue from ${oldValueStr} to ${newValueStr}.`,
          });
        }
      }
    }
  }

  for (const newArg of argsDiff.added) {
    if (isRequiredArgument(newArg)) {
      schemaChanges.push({
        type: BreakingChangeType.REQUIRED_ARG_ADDED,
        description: `A required arg ${newArg.name} on ${oldType.name}.${oldField.name} was added.`,
      });
    } else {
      schemaChanges.push({
        type: DangerousChangeType.OPTIONAL_ARG_ADDED,
        description: `An optional arg ${newArg.name} on ${oldType.name}.${oldField.name} was added.`,
      });
    }
  }

  return schemaChanges;
}

function isChangeSafeForObjectOrInterfaceField(oldType, newType) {
  if (isListType(oldType)) {
    return (
      // if they're both lists, make sure the underlying types are compatible
      (isListType(newType) &&
        isChangeSafeForObjectOrInterfaceField(
          oldType.ofType,
          newType.ofType,
        )) || // moving from nullable to non-null of the same underlying type is safe
      (isNonNullType(newType) &&
        isChangeSafeForObjectOrInterfaceField(oldType, newType.ofType))
    );
  }

  if (isNonNullType(oldType)) {
    // if they're both non-null, make sure the underlying types are compatible
    return (
      isNonNullType(newType) &&
      isChangeSafeForObjectOrInterfaceField(oldType.ofType, newType.ofType)
    );
  }

  return (
    // if they're both named types, see if their names are equivalent
    (isNamedType(newType) && oldType.name === newType.name) || // moving from nullable to non-null of the same underlying type is safe
    (isNonNullType(newType) &&
      isChangeSafeForObjectOrInterfaceField(oldType, newType.ofType))
  );
}

function isChangeSafeForInputObjectFieldOrFieldArg(oldType, newType) {
  if (isListType(oldType)) {
    // if they're both lists, make sure the underlying types are compatible
    return (
      isListType(newType) &&
      isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType.ofType)
    );
  }

  if (isNonNullType(oldType)) {
    return (
      // if they're both non-null, make sure the underlying types are
      // compatible
      (isNonNullType(newType) &&
        isChangeSafeForInputObjectFieldOrFieldArg(
          oldType.ofType,
          newType.ofType,
        )) || // moving from non-null to nullable of the same underlying type is safe
      (!isNonNullType(newType) &&
        isChangeSafeForInputObjectFieldOrFieldArg(oldType.ofType, newType))
    );
  } // if they're both named types, see if their names are equivalent

  return isNamedType(newType) && oldType.name === newType.name;
}

function typeKindName(type) {
  if (isScalarType(type)) {
    return 'a Scalar type';
  }

  if (isObjectType(type)) {
    return 'an Object type';
  }

  if (isInterfaceType(type)) {
    return 'an Interface type';
  }

  if (isUnionType(type)) {
    return 'a Union type';
  }

  if (isEnumType(type)) {
    return 'an Enum type';
  }

  if (isInputObjectType(type)) {
    return 'an Input type';
  }
  /* c8 ignore next 3 */
  // Not reachable, all possible types have been considered.

  false || invariant(false, 'Unexpected type: ' + inspect(type));
}

function stringifyValue(value, type) {
  const ast = astFromValue(value, type);
  ast != null || invariant(false);
  return print(sortValueNode(ast));
}

function diff(oldArray, newArray) {
  const added = [];
  const removed = [];
  const persisted = [];
  const oldMap = keyMap(oldArray, ({ name }) => name);
  const newMap = keyMap(newArray, ({ name }) => name);

  for (const oldItem of oldArray) {
    const newItem = newMap[oldItem.name];

    if (newItem === undefined) {
      removed.push(oldItem);
    } else {
      persisted.push([oldItem, newItem]);
    }
  }

  for (const newItem of newArray) {
    if (oldMap[newItem.name] === undefined) {
      added.push(newItem);
    }
  }

  return {
    added,
    persisted,
    removed,
  };
}
