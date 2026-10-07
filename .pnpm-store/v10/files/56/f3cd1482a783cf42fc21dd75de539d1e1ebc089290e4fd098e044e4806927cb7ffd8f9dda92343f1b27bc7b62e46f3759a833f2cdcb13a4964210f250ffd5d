/**
 * @fileoverview Common propTypes detection functionality.
 */

'use strict';

const flatMap = require('array.prototype.flatmap');

const annotations = require('./annotations');
const propsUtil = require('./props');
const variableUtil = require('./variable');
const testFlowVersion = require('./version').testFlowVersion;
const propWrapperUtil = require('./propWrapper');
const astUtil = require('./ast');
const isFirstLetterCapitalized = require('./isFirstLetterCapitalized');
const eslintUtil = require('./eslint');

const getFirstTokens = eslintUtil.getFirstTokens;
const getScope = eslintUtil.getScope;
const getSourceCode = eslintUtil.getSourceCode;
const getText = eslintUtil.getText;

/**
 * Check if node is function type.
 * @param {ASTNode} node
 * @returns {boolean}
 */
function isFunctionType(node) {
  if (!node) return false;
  const nodeType = node.type;
  return nodeType === 'FunctionDeclaration'
    || nodeType === 'FunctionExpression'
    || nodeType === 'ArrowFunctionExpression';
}

/**
 * Checks if we are declaring a props as a generic type in a flow-annotated class.
 *
 * @param {ASTNode} node  the AST node being checked.
 * @returns {boolean} True if the node is a class with generic prop types, false if not.
 */
function isSuperTypeParameterPropsDeclaration(node) {
  if (node && (node.type === 'ClassDeclaration' || node.type === 'ClassExpression')) {
    const parameters = propsUtil.getSuperTypeArguments(node);
    if (parameters && parameters.params.length > 0) {
      return true;
    }
  }
  return false;
}

/**
 * Iterates through a properties node, like a customized forEach.
 * @param {Object} context Array of properties to iterate.
 * @param {Object[]} properties Array of properties to iterate.
 * @param {Function} fn Function to call on each property, receives property key
    and property value. (key, value) => void
  * @param {Function} [handleSpreadFn] Function to call on each ObjectTypeSpreadProperty, receives the
    argument
 */
function iterateProperties(context, properties, fn, handleSpreadFn) {
  if (properties && properties.length && typeof fn === 'function') {
    for (let i = 0, j = properties.length; i < j; i++) {
      const node = properties[i];
      const key = astUtil.getKeyValue(context, node);

      if (node.type === 'ObjectTypeSpreadProperty' && typeof handleSpreadFn === 'function') {
        handleSpreadFn(node.argument);
      }

      const value = node.value;
      fn(key, value, node);
    }
  }
}

/**
 * Checks if a node is inside a class body.
 *
 * @param {ASTNode} node the AST node being checked.
 * @returns {boolean} True if the node has a ClassBody ancestor, false if not.
 */
function isInsideClassBody(node) {
  let parent = node.parent;
  while (parent) {
    if (parent.type === 'ClassBody') {
      return true;
    }
    parent = parent.parent;
  }
  return false;
}

function startWithCapitalizedLetter(node) {
  return (
    node.parent.type === 'VariableDeclarator'
    && !isFirstLetterCapitalized(node.parent.id.name)
  );
}

module.exports = function propTypesInstructions(context, components, utils) {
  // Used to track the type annotations in scope.
  // Necessary because babel's scopes do not track type annotations.
  let stack = null;

  const classExpressions = [];
  const defaults = { customValidators: [] };
  const configuration = Object.assign({}, defaults, context.options[0] || {});
  const customValidators = configuration.customValidators;
  const allowedGenericTypes = new Set(['ComponentProps', 'ComponentPropsWithRef', 'ComponentPropsWithoutRef', 'forwardRef', 'ForwardRefRenderFunction', 'VFC', 'VoidFunctionComponent', 'PropsWithChildren', 'SFC', 'StatelessComponent', 'FunctionComponent', 'FC']);
  const genericTypeParamIndexWherePropsArePresent = {
    ComponentProps: 0,
    ComponentPropsWithRef: 0,
    ComponentPropsWithoutRef: 0,
    ForwardRefRenderFunction: 1,
    forwardRef: 1,
    VoidFunctionComponent: 0,
    VFC: 0,
    PropsWithChildren: 0,
    SFC: 0,
    StatelessComponent: 0,
    FunctionComponent: 0,
    FC: 0,
  };
  const genericReactTypesImport = new Set();
  // import { FC as X } from 'react' -> localToImportedMap = { x: FC }
  const localToImportedMap = {};

  /**
   * Returns the full scope.
   * @returns {Object} The whole scope.
   */
  function typeScope() {
    return stack[stack.length - 1];
  }

  /**
   * Gets a node from the scope.
   * @param {string} key The name of the identifier to access.
   * @returns {ASTNode} The ASTNode associated with the given identifier.
   */
  function getInTypeScope(key) {
    return stack[stack.length - 1][key];
  }

  /**
   * Sets the new value in the scope.
   * @param {string} key The name of the identifier to access
   * @param {ASTNode} value The new value for the identifier.
   * @returns {ASTNode} The ASTNode associated with the given identifier.
   */
  function setInTypeScope(key, value) {
    stack[stack.length - 1][key] = value;
    return value;
  }

  /**
   * Checks if prop should be validated by plugin-react-proptypes
   * @param {string} validator Name of validator to check.
   * @returns {boolean} True if validator should be checked by custom validator.
   */
  function hasCustomValidator(validator) {
    return customValidators.indexOf(validator) !== -1;
  }

  /* eslint-disable no-use-before-define */
  /** @type {TypeDeclarationBuilders} */
  const typeDeclarationBuilders = {
    GenericTypeAnnotation(annotation, parentName, seen) {
      if (getInTypeScope(annotation.id.name)) {
        return buildTypeAnnotationDeclarationTypes(getInTypeScope(annotation.id.name), parentName, seen);
      }
      return {};
    },

    ObjectTypeAnnotation(annotation, parentName, seen) {
      let containsUnresolvedObjectTypeSpread = false;
      let containsSpread = false;
      const containsIndexers = !!annotation.indexers && annotation.indexers.length > 0;
      const shapeTypeDefinition = {
        type: 'shape',
        children: {},
      };
      iterateProperties(
        context,
        annotation.properties,
        (childKey, childValue, propNode) => {
          const fullName = [parentName, childKey].join('.');
          if (childKey || childValue) {
            const types = buildTypeAnnotationDeclarationTypes(childValue, fullName, seen);
            types.fullName = fullName;
            types.name = childKey;
            types.node = propNode;
            types.isRequired = !childValue.optional;
            shapeTypeDefinition.children[childKey] = types;
          }
        },
        (spreadNode) => {
          const key = astUtil.getKeyValue(context, spreadNode);
          const types = buildTypeAnnotationDeclarationTypes(spreadNode, key, seen);
          if (!types.children) {
            containsUnresolvedObjectTypeSpread = true;
          } else {
            Object.assign(shapeTypeDefinition, types.children);
          }
          containsSpread = true;
        }
      );

      // Mark if this shape has spread or an indexer. We will know to consider all props from this shape as having propTypes,
      // but still have the ability to detect unused children of this shape.
      shapeTypeDefinition.containsUnresolvedSpread = containsUnresolvedObjectTypeSpread;
      shapeTypeDefinition.containsIndexers = containsIndexers;
      // Deprecated: containsSpread is not used anymore in the codebase, ensure to keep API backward compatibility
      shapeTypeDefinition.containsSpread = containsSpread;

      return shapeTypeDefinition;
    },

    UnionTypeAnnotation(annotation, parentName, seen) {
      /** @type {UnionTypeDefinition} */
      const unionTypeDefinition = {
        type: 'union',
        children: annotation.types.map((type) => buildTypeAnnotationDeclarationTypes(type, parentName, seen)),
      };
      if (unionTypeDefinition.children.length === 0) {
        // no complex type found, simply accept everything
        return {};
      }
      return unionTypeDefinition;
    },

    ArrayTypeAnnotation(annotation, parentName, seen) {
      const fullName = [parentName, '*'].join('.');
      const child = buildTypeAnnotationDeclarationTypes(annotation.elementType, fullName, seen);
      child.fullName = fullName;
      child.name = '__ANY_KEY__';
      child.node = annotation;
      return {
        type: 'object',
        children: {
          __ANY_KEY__: child,
        },
      };
    },
  };
  /* eslint-enable no-use-before-define */

  /**
   * Resolve the type annotation for a given node.
   * Flow annotations are sometimes wrapped in outer `TypeAnnotation`
   * and `NullableTypeAnnotation` nodes which obscure the annotation we're
   * interested in.
   * This method also resolves type aliases where possible.
   *
   * @param {ASTNode} node The annotation or a node containing the type annotation.
   * @returns {ASTNode} The resolved type annotation for the node.
   */
  function resolveTypeAnnotation(node) {
    let annotation = (node.left && node.left.typeAnnotation) || node.typeAnnotation || node;
    while (annotation && (annotation.type === 'TypeAnnotation' || annotation.type === 'NullableTypeAnnotation')) {
      annotation = annotation.typeAnnotation;
    }
    if (annotation.type === 'GenericTypeAnnotation' && getInTypeScope(annotation.id.name)) {
      return getInTypeScope(annotation.id.name);
    }
    return annotation;
  }

  /**
   * Creates the representation of the React props type annotation for the component.
   * The representation is used to verify nested used properties.
   * @param {ASTNode} annotation Type annotation for the props class property.
   * @param {string} parentName
   * @param {Set<ASTNode>} [seen]
   * @return {Object} The representation of the declaration, empty object means
   *    the property is declared without the need for further analysis.
   */
  function buildTypeAnnotationDeclarationTypes(annotation, parentName, seen) {
    if (typeof seen === 'undefined') {
      // Keeps track of annotations we've already seen to
      // prevent problems with recursive types.
      seen = new Set();
    }
    if (seen.has(annotation)) {
      // This must be a recursive type annotation, so just accept anything.
      return {};
    }
    seen.add(annotation);

    if (annotation.type in typeDeclarationBuilders) {
      return typeDeclarationBuilders[annotation.type](annotation, parentName, seen);
    }
    return {};
  }

  /**
   * Marks all props found inside ObjectTypeAnnotation as declared.
   *
   * Modifies the declaredProperties object
   * @param {ASTNode} propTypes
   * @param {Object} declaredPropTypes
   * @returns {boolean} True if propTypes should be ignored (e.g. when a type can't be resolved, when it is imported)
   */
  function declarePropTypesForObjectTypeAnnotation(propTypes, declaredPropTypes) {
    let ignorePropsValidation = false;

    iterateProperties(context, propTypes.properties, (key, value, propNode) => {
      if (!value) {
        ignorePropsValidation = ignorePropsValidation || propNode.type !== 'ObjectTypeSpreadProperty';
        return;
      }

      const types = buildTypeAnnotationDeclarationTypes(value, key);
      types.fullName = key;
      types.name = key;
      types.node = propNode;
      types.isRequired = !propNode.optional;
      declaredPropTypes[key] = types;
    }, (spreadNode) => {
      const key = astUtil.getKeyValue(context, spreadNode);
      const spreadAnnotation = getInTypeScope(key);
      if (!spreadAnnotation) {
        ignorePropsValidation = true;
      } else {
        const spreadIgnoreValidation = declarePropTypesForObjectTypeAnnotation(spreadAnnotation, declaredPropTypes);
        ignorePropsValidation = ignorePropsValidation || spreadIgnoreValidation;
      }
    });

    return ignorePropsValidation;
  }

  /**
   * Marks all props found inside IntersectionTypeAnnotation as declared.
   * Since InterSectionTypeAnnotations can be nested, this handles recursively.
   *
   * Modifies the declaredPropTypes object
   * @param {ASTNode} propTypes
   * @param {Object} declaredPropTypes
   * @returns {boolean} True if propTypes should be ignored (e.g. when a type can't be resolved, when it is imported)
   */
  function declarePropTypesForIntersectionTypeAnnotation(propTypes, declaredPropTypes) {
    return propTypes.types.some((annotation) => {
      if (annotation.type === 'ObjectTypeAnnotation') {
        return declarePropTypesForObjectTypeAnnotation(annotation, declaredPropTypes);
      }

      if (annotation.type === 'UnionTypeAnnotation') {
        return true;
      }

      // Type can't be resolved
      if (!annotation.id) {
        return true;
      }

      const typeNode = getInTypeScope(annotation.id.name);

      if (!typeNode) {
        return true;
      }
      if (typeNode.type === 'IntersectionTypeAnnotation') {
        return declarePropTypesForIntersectionTypeAnnotation(typeNode, declaredPropTypes);
      }

      return declarePropTypesForObjectTypeAnnotation(typeNode, declaredPropTypes);
    });
  }

  /**
   * Resolve node of type Identifier when building declaration types.
   * @param {ASTNode} node
   * @param {ASTNode} rootNode
   * @param {Function} callback called with the resolved value only if resolved.
   */
  function resolveValueForIdentifierNode(node, rootNode, callback) {
    if (
      rootNode
      && node
      && node.type === 'Identifier'
    ) {
      const scope = getScope(context, rootNode);
      const identVariable = scope.variableScope.variables.find(
        (variable) => variable.name === node.name
      );
      if (identVariable) {
        const definition = identVariable.defs[identVariable.defs.length - 1];
        callback(definition.node.init);
      }
    }
  }

  /**
   * Creates the representation of the React propTypes for the component.
   * The representation is used to verify nested used properties.
   * @param {ASTNode} value Node of the PropTypes for the desired property
   * @param {string} parentName
   * @param {ASTNode} rootNode
   * @return {Object} The representation of the declaration, empty object means
   *    the property is declared without the need for further analysis.
   */
  function buildReactDeclarationTypes(value, parentName, rootNode) {
    if (
      value
      && value.callee
      && value.callee.object
      && hasCustomValidator(value.callee.object.name)
    ) {
      return {};
    }

    let identNodeResolved = false;
    // Resolve identifier node for cases where isRequired is set in
    // the variable declaration or not at all.
    // const variableType = PropTypes.shape({ foo: ... }).isRequired
    // propTypes = {
    //   example: variableType
    // }
    // --------
    // const variableType = PropTypes.shape({ foo: ... })
    // propTypes = {
    //   example: variableType
    // }
    resolveValueForIdentifierNode(value, rootNode, (newValue) => {
      identNodeResolved = true;
      value = newValue;
    });

    if (
      value
      && value.type === 'MemberExpression'
      && value.property
      && value.property.name === 'isRequired'
    ) {
      value = value.object;
    }

    // Resolve identifier node for cases where isRequired is set in
    // the prop types.
    // const variableType = PropTypes.shape({ foo: ... })
    // propTypes = {
    //   example: variableType.isRequired
    // }
    if (!identNodeResolved) {
      resolveValueForIdentifierNode(value, rootNode, (newValue) => {
        value = newValue;
      });
    }

    // Verify PropTypes that are functions
    if (
      astUtil.isCallExpression(value)
      && value.callee
      && value.callee.property
      && value.callee.property.name
      && value.arguments
      && value.arguments.length > 0
    ) {
      const callName = value.callee.property.name;
      const argument = value.arguments[0];
      switch (callName) {
        case 'shape':
        case 'exact': {
          if (argument.type !== 'ObjectExpression') {
            // Invalid proptype or cannot analyse statically
            return {};
          }
          const shapeTypeDefinition = {
            type: callName,
            children: {},
          };
          iterateProperties(context, argument.properties, (childKey, childValue, propNode) => {
            if (childValue) { // skip spread propTypes
              const fullName = [parentName, childKey].join('.');
              const types = buildReactDeclarationTypes(childValue, fullName, rootNode);
              types.fullName = fullName;
              types.name = childKey;
              types.node = propNode;
              shapeTypeDefinition.children[childKey] = types;
            }
          });
          return shapeTypeDefinition;
        }
        case 'arrayOf':
        case 'objectOf': {
          const fullName = [parentName, '*'].join('.');
          const child = buildReactDeclarationTypes(argument, fullName, rootNode);
          child.fullName = fullName;
          child.name = '__ANY_KEY__';
          child.node = argument;
          return {
            type: 'object',
            children: {
              __ANY_KEY__: child,
            },
          };
        }
        case 'oneOfType': {
          if (
            !argument.elements
            || argument.elements.length === 0
          ) {
            // Invalid proptype or cannot analyse statically
            return {};
          }

          /** @type {UnionTypeDefinition} */
          const unionTypeDefinition = {
            type: 'union',
            children: argument.elements.map((element) => buildReactDeclarationTypes(element, parentName, rootNode)),
          };
          if (unionTypeDefinition.children.length === 0) {
            // no complex type found, simply accept everything
            return {};
          }
          return unionTypeDefinition;
        }
        default:
          return {};
      }
    }
    // Unknown property or accepts everything (any, object, ...)
    return {};
  }

  function isValidReactGenericTypeAnnotation(annotation) {
    if (annotation.typeName) {
      if (annotation.typeName.name) { // if FC<Props>
        const typeName = annotation.typeName.name;
        if (!genericReactTypesImport.has(typeName)) {
          return false;
        }
      } else if (annotation.typeName.right.name) { // if React.FC<Props>
        const right = annotation.typeName.right.name;
        const left = annotation.typeName.left.name;

        if (!genericReactTypesImport.has(left) || !allowedGenericTypes.has(right)) {
          return false;
        }
      }
    }
    return true;
  }

  /**
   * Returns the left most typeName of a node, e.g: FC<Props>, React.FC<Props>
   * The representation is used to verify nested used properties.
   * @param {ASTNode} node
   * @return {string | undefined}
   */
  function getLeftMostTypeName(node) {
    if (node.name) return node.name;
    if (node.left) return getLeftMostTypeName(node.left);
  }

  function getRightMostTypeName(node) {
    if (node.name) return node.name;
    if (node.right) return getRightMostTypeName(node.right);
  }

  /**
   * Returns true if the node is either a interface or type alias declaration
   * @param {ASTNode} node
   * @return {boolean}
   */
  function filterInterfaceOrTypeAlias(node) {
    return (
      astUtil.isTSInterfaceDeclaration(node) || astUtil.isTSTypeAliasDeclaration(node)
    );
  }

  /**
   * Returns true if the interface or type alias declaration node name matches the type-name str
   * @param {ASTNode} node
   * @param {string} typeName
   * @return {boolean}
   */
  function filterInterfaceOrAliasByName(node, typeName) {
    return (
      node.id
      && node.id.name === typeName
    ) || (
      node.declaration
      && node.declaration.id
      && node.declaration.id.name === typeName
    );
  }

  class DeclarePropTypesForTSTypeAnnotation {
    constructor(propTypes, declaredPropTypes, rootNode) {
      this.propTypes = propTypes;
      this.declaredPropTypes = declaredPropTypes;
      this.foundDeclaredPropertiesList = [];
      this.referenceNameMap = new Set();
      this.sourceCode = getSourceCode(context);
      this.shouldIgnorePropTypes = false;
      this.rootNode = rootNode;
      this.visitTSNode(this.propTypes);
      this.endAndStructDeclaredPropTypes();
    }

    /**
     * The node will be distribute to different function.
     * @param {ASTNode} node
     */
    visitTSNode(node) {
      if (!node) return;
      if (astUtil.isTSTypeAnnotation(node)) {
        const typeAnnotation = node.typeAnnotation;
        this.visitTSNode(typeAnnotation);
      } else if (astUtil.isTSTypeReference(node)) {
        this.searchDeclarationByName(node);
      } else if (astUtil.isTSInterfaceHeritage(node)) {
        this.searchDeclarationByName(node);
      } else if (astUtil.isTSTypeLiteral(node)) {
        // Check node is an object literal
        if (Array.isArray(node.members)) {
          this.foundDeclaredPropertiesList = this.foundDeclaredPropertiesList.concat(node.members);
        }
      } else if (astUtil.isTSIntersectionType(node)) {
        this.convertIntersectionTypeToPropTypes(node);
      } else if (astUtil.isTSParenthesizedType(node)) {
        const typeAnnotation = node.typeAnnotation;
        this.visitTSNode(typeAnnotation);
      } else if (astUtil.isTSTypeParameterInstantiation(node)) {
        if (Array.isArray(node.params)) {
          node.params.forEach((x) => this.visitTSNode(x));
        }
      } else {
        this.shouldIgnorePropTypes = true;
      }
    }

    /**
     * Search TSInterfaceDeclaration or TSTypeAliasDeclaration,
     * by using TSTypeReference and TSInterfaceHeritage name.
     * @param {ASTNode} node
     */
    searchDeclarationByName(node) {
      let typeName;
      if (astUtil.isTSTypeReference(node)) {
        typeName = node.typeName.name;
        const leftMostName = getLeftMostTypeName(node.typeName);
        const shouldTraverseTypeParams = genericReactTypesImport.has(leftMostName);
        const nodeTypeArguments = propsUtil.getTypeArguments(node);
        if (shouldTraverseTypeParams && nodeTypeArguments && nodeTypeArguments.length !== 0) {
          // All react Generic types are derived from:
          // type PropsWithChildren<P> = P & { children?: ReactNode | undefined }
          // So we should construct an optional children prop
          this.shouldSpecifyOptionalChildrenProps = true;

          const rightMostName = getRightMostTypeName(node.typeName);
          if (
            leftMostName === 'React'
            && (
              rightMostName === 'HTMLAttributes'
              || rightMostName === 'HTMLElement'
              || rightMostName === 'HTMLProps'
            )
          ) {
            this.shouldSpecifyClassNameProp = true;
          }

          const importedName = localToImportedMap[rightMostName];
          const idx = genericTypeParamIndexWherePropsArePresent[
            leftMostName !== rightMostName ? rightMostName : importedName
          ];
          const nextNode = nodeTypeArguments.params[idx];
          this.visitTSNode(nextNode);
          return;
        }
      } else if (astUtil.isTSInterfaceHeritage(node)) {
        if (!node.expression && node.id) {
          typeName = node.id.name;
        } else {
          typeName = node.expression.name;
        }
      }
      if (!typeName) {
        this.shouldIgnorePropTypes = true;
        return;
      }
      if (typeName === 'ReturnType') {
        this.convertReturnTypeToPropTypes(node, this.rootNode);
        return;
      }
      // Prevent recursive inheritance will cause maximum callstack.
      if (this.referenceNameMap.has(typeName)) {
        this.shouldIgnorePropTypes = true;
        return;
      }
      // Add typeName to Set and consider it as traversed.
      this.referenceNameMap.add(typeName);

      /**
       * From line 577 to line 581, and line 588 to line 590 are trying to handle typescript-eslint-parser
       * Need to be deprecated after remove typescript-eslint-parser support.
       */
      const candidateTypes = this.sourceCode.ast.body.filter((item) => astUtil.isTSTypeDeclaration(item));

      const declarations = flatMap(
        candidateTypes,
        (type) => (
          type.declarations
          || (
            type.declaration
            && type.declaration.declarations
          )
          || type.declaration
        )
      );

      // we tried to find either an interface or a type with the TypeReference name
      const typeDeclaration = declarations.filter((dec) => dec.id.name === typeName);

      const interfaceDeclarations = this.sourceCode.ast.body
        .filter(filterInterfaceOrTypeAlias)
        .filter((item) => filterInterfaceOrAliasByName(item, typeName))
        .map((item) => (item.declaration || item));

      if (typeDeclaration.length !== 0) {
        typeDeclaration.map((t) => t.init || t.typeAnnotation).forEach(this.visitTSNode, this);
      } else if (interfaceDeclarations.length !== 0) {
        interfaceDeclarations.forEach(this.traverseDeclaredInterfaceOrTypeAlias, this);
      } else {
        this.shouldIgnorePropTypes = true;
      }
    }

    /**
     * Traverse TSInterfaceDeclaration and TSTypeAliasDeclaration
     * which retrieve from function searchDeclarationByName;
     * @param {ASTNode} node
     */
    traverseDeclaredInterfaceOrTypeAlias(node) {
      if (astUtil.isTSInterfaceDeclaration(node)) {
        // Handle TSInterfaceDeclaration interface Props { name: string, id: number}, should put in properties list directly;
        this.foundDeclaredPropertiesList = this.foundDeclaredPropertiesList.concat(node.body.body);
      }
      // Handle TSTypeAliasDeclaration type Props = {name:string}
      if (astUtil.isTSTypeAliasDeclaration(node)) {
        const typeAnnotation = node.typeAnnotation;
        this.visitTSNode(typeAnnotation);
      }
      if (Array.isArray(node.extends)) {
        node.extends.forEach((x) => this.visitTSNode(x));
        // This line is trying to handle typescript-eslint-parser
        // typescript-eslint-parser extension is name as heritage
      } else if (Array.isArray(node.heritage)) {
        node.heritage.forEach((x) => this.visitTSNode(x));
      }
    }

    convertIntersectionTypeToPropTypes(node) {
      if (!node) return;
      if (Array.isArray(node.types)) {
        node.types.forEach((x) => this.visitTSNode(x));
      } else {
        this.shouldIgnorePropTypes = true;
      }
    }

    convertReturnTypeToPropTypes(node, rootNode) {
      // ReturnType<T> should always have one parameter
      const nodeTypeArguments = propsUtil.getTypeArguments(node);
      if (nodeTypeArguments) {
        if (nodeTypeArguments.params.length === 1) {
          let returnType = nodeTypeArguments.params[0];
          // This line is trying to handle typescript-eslint-parser
          // typescript-eslint-parser TSTypeQuery is wrapped by TSTypeReference
          if (astUtil.isTSTypeReference(returnType)) {
            returnType = returnType.typeName;
          }
          // Handle ReturnType<typeof mapStateToProps>
          if (astUtil.isTSTypeQuery(returnType)) {
            const returnTypeFunction = flatMap(this.sourceCode.ast.body
              .filter((item) => item.type === 'VariableDeclaration'
                && item.declarations.find((dec) => dec.id.name === returnType.exprName.name)
              ), (type) => type.declarations).map((dec) => dec.init);

            if (Array.isArray(returnTypeFunction)) {
              if (returnTypeFunction.length === 0) {
                // Cannot find identifier in current scope. It might be an exported type.
                this.shouldIgnorePropTypes = true;
                return;
              }
              returnTypeFunction.forEach((func) => {
                if (isFunctionType(func)) {
                  let res = func.body;
                  if (res.type === 'BlockStatement') {
                    res = astUtil.findReturnStatement(func);
                    if (res) {
                      res = res.argument;
                    }
                  }
                  switch (res.type) {
                    case 'ObjectExpression':
                      iterateProperties(context, res.properties, (key, value, propNode) => {
                        if (propNode && astUtil.isCallExpression(propNode.argument)) {
                          const propNodeTypeArguments = propsUtil.getTypeArguments(propNode.argument);
                          if (propNodeTypeArguments) {
                            this.visitTSNode(propNodeTypeArguments);
                          } else {
                            // Ignore this CallExpression return value since it doesn't have any typeParameters to let us know it's types.
                            this.shouldIgnorePropTypes = true;
                            return;
                          }
                        }
                        if (!value) {
                          this.shouldIgnorePropTypes = true;
                          return;
                        }
                        const types = buildReactDeclarationTypes(value, key, rootNode);
                        types.fullName = key;
                        types.name = key;
                        types.node = propNode;
                        types.isRequired = propsUtil.isRequiredPropType(value);
                        this.declaredPropTypes[key] = types;
                      });
                      break;
                    case 'CallExpression':
                      if (propsUtil.getTypeArguments(res)) {
                        this.visitTSNode(propsUtil.getTypeArguments(res));
                      } else {
                        // Ignore this CallExpression return value since it doesn't have any typeParameters to let us know it's types.
                        this.shouldIgnorePropTypes = true;
                      }
                      break;
                    default:
                  }
                }
              });
              return;
            }
          }
          // Handle ReturnType<()=>returnType>
          if (astUtil.isTSFunctionType(returnType)) {
            if (astUtil.isTSTypeAnnotation(returnType.returnType)) {
              this.visitTSNode(returnType.returnType);
              return;
            }
            // This line is trying to handle typescript-eslint-parser
            // typescript-eslint-parser TSFunction name returnType as typeAnnotation
            if (astUtil.isTSTypeAnnotation(returnType.typeAnnotation)) {
              this.visitTSNode(returnType.typeAnnotation);
              return;
            }
          }
        }
      }
      this.shouldIgnorePropTypes = true;
    }

    endAndStructDeclaredPropTypes() {
      if (this.shouldSpecifyOptionalChildrenProps) {
        this.declaredPropTypes.children = {
          fullName: 'children',
          name: 'children',
          isRequired: false,
        };
      }
      if (this.shouldSpecifyClassNameProp) {
        this.declaredPropTypes.className = {
          fullName: 'className',
          name: 'className',
          isRequired: false,
        };
      }

      this.foundDeclaredPropertiesList.forEach((tsInterfaceBody) => {
        if (tsInterfaceBody && (tsInterfaceBody.type === 'TSPropertySignature' || tsInterfaceBody.type === 'TSMethodSignature')) {
          let accessor = 'name';
          if (tsInterfaceBody.key.type === 'Literal') {
            if (typeof tsInterfaceBody.key.value === 'number') {
              accessor = 'raw';
            } else {
              accessor = 'value';
            }
          }
          this.declaredPropTypes[tsInterfaceBody.key[accessor]] = {
            fullName: tsInterfaceBody.key[accessor],
            name: tsInterfaceBody.key[accessor],
            node: tsInterfaceBody,
            isRequired: !tsInterfaceBody.optional,
          };
        }
      });
    }
  }

  /**
   * Mark a prop type as declared
   * @param {ASTNode} node The AST node being checked.
   * @param {ASTNode} propTypes The AST node containing the proptypes
   * @param {ASTNode} rootNode
   */
  function markPropTypesAsDeclared(node, propTypes, rootNode) {
    let componentNode = node;
    while (componentNode && !components.get(componentNode)) {
      componentNode = componentNode.parent;
    }
    const component = components.get(componentNode);
    let declaredPropTypes = (component && component.declaredPropTypes) || {};
    let ignorePropsValidation = (component && component.ignorePropsValidation) || false;
    switch (propTypes && propTypes.type) {
      case 'ObjectTypeAnnotation':
        ignorePropsValidation = declarePropTypesForObjectTypeAnnotation(propTypes, declaredPropTypes);
        break;
      case 'ObjectExpression':
        iterateProperties(context, propTypes.properties, (key, value, propNode) => {
          if (!value) {
            ignorePropsValidation = true;
            return;
          }
          const types = buildReactDeclarationTypes(value, key, rootNode);
          types.fullName = key;
          types.name = key;
          types.node = propNode;
          types.isRequired = propsUtil.isRequiredPropType(value);
          declaredPropTypes[key] = types;
        });
        break;
      case 'MemberExpression': {
        let curDeclaredPropTypes = declaredPropTypes;
        // Walk the list of properties, until we reach the assignment
        // ie: ClassX.propTypes.a.b.c = ...
        while (
          propTypes
          && propTypes.parent
          && propTypes.parent.type !== 'AssignmentExpression'
          && propTypes.property
          && curDeclaredPropTypes
        ) {
          const propName = propTypes.property.name;
          if (propName in curDeclaredPropTypes) {
            curDeclaredPropTypes = curDeclaredPropTypes[propName].children;
            propTypes = propTypes.parent;
          } else {
            // This will crash at runtime because we haven't seen this key before
            // stop this and do not declare it
            propTypes = null;
          }
        }
        if (propTypes && propTypes.parent && propTypes.property) {
          if (!(propTypes === propTypes.parent.left && propTypes.parent.left.object)) {
            ignorePropsValidation = true;
            break;
          }
          const parentProp = getText(context, propTypes.parent.left.object).replace(/^.*\.propTypes\./, '');
          const types = buildReactDeclarationTypes(
            propTypes.parent.right,
            parentProp,
            rootNode
          );

          types.name = propTypes.property.name;
          types.fullName = [parentProp, propTypes.property.name].join('.');
          types.node = propTypes.parent;
          types.isRequired = propsUtil.isRequiredPropType(propTypes.parent.right);
          curDeclaredPropTypes[propTypes.property.name] = types;
        } else {
          let isUsedInPropTypes = false;
          let n = propTypes;
          while (n) {
            if (((n.type === 'AssignmentExpression') && propsUtil.isPropTypesDeclaration(n.left))
              || ((n.type === 'ClassProperty' || n.type === 'PropertyDefinition' || n.type === 'Property') && propsUtil.isPropTypesDeclaration(n))) {
              // Found a propType used inside of another propType. This is not considered usage, we'll still validate
              // this component.
              isUsedInPropTypes = true;
              break;
            }
            n = n.parent;
          }
          if (!isUsedInPropTypes) {
            ignorePropsValidation = true;
          }
        }
        break;
      }
      case 'Identifier': {
        const firstMatchingVariable = variableUtil.getVariableFromContext(context, node, propTypes.name);
        if (firstMatchingVariable) {
          const defInScope = firstMatchingVariable.defs[firstMatchingVariable.defs.length - 1];
          markPropTypesAsDeclared(node, defInScope.node && defInScope.node.init, rootNode);
          return;
        }
        ignorePropsValidation = true;
        break;
      }
      case 'CallExpression': {
        if (
          propWrapperUtil.isPropWrapperFunction(
            context,
            getText(context, propTypes.callee)
          )
          && propTypes.arguments && propTypes.arguments[0]
        ) {
          markPropTypesAsDeclared(node, propTypes.arguments[0], rootNode);
          return;
        }
        break;
      }
      case 'IntersectionTypeAnnotation':
        ignorePropsValidation = declarePropTypesForIntersectionTypeAnnotation(propTypes, declaredPropTypes);
        break;
      case 'GenericTypeAnnotation':
        if (propTypes.id.name === '$ReadOnly') {
          const propTypeArguments = propsUtil.getTypeArguments(propTypes);
          ignorePropsValidation = declarePropTypesForObjectTypeAnnotation(
            propTypeArguments.params[0],
            declaredPropTypes
          );
        } else {
          ignorePropsValidation = true;
        }
        break;
      case 'TSTypeReference':
      case 'TSTypeAnnotation': {
        const tsTypeAnnotation = new DeclarePropTypesForTSTypeAnnotation(propTypes, declaredPropTypes, rootNode);
        ignorePropsValidation = tsTypeAnnotation.shouldIgnorePropTypes;
        declaredPropTypes = tsTypeAnnotation.declaredPropTypes;
      }
        break;
      case null:
        break;
      default:
        ignorePropsValidation = true;
        break;
    }

    components.set(node, {
      declaredPropTypes,
      ignorePropsValidation,
    });
  }

  /**
   * @param {ASTNode} node We expect either an ArrowFunctionExpression,
   *   FunctionDeclaration, or FunctionExpression
   * @param {ASTNode} rootNode
   */
  function markAnnotatedFunctionArgumentsAsDeclared(node, rootNode) {
    if (!node.params || !node.params.length) {
      return;
    }

    let propTypesArguments = null;
    if (node.parent) {
      propTypesArguments = propsUtil.getTypeArguments(node.parent);
    }

    if (
      node.parent
      && node.parent.callee
      && propTypesArguments
      && propTypesArguments.params
      && (
        node.parent.callee.name === 'forwardRef' || (
          node.parent.callee.object
          && node.parent.callee.property
          && node.parent.callee.object.name === 'React'
          && node.parent.callee.property.name === 'forwardRef'
        )
      )
    ) {
      const declaredPropTypes = {};
      const obj = new DeclarePropTypesForTSTypeAnnotation(propTypesArguments.params[1], declaredPropTypes, rootNode);
      components.set(node, {
        declaredPropTypes: obj.declaredPropTypes,
        ignorePropsValidation: obj.shouldIgnorePropTypes,
      });
      return;
    }

    const siblingIdentifier = node.parent && node.parent.id;
    const siblingHasTypeAnnotation = siblingIdentifier && siblingIdentifier.typeAnnotation;
    const isNodeAnnotated = annotations.isAnnotatedFunctionPropsDeclaration(node, context);

    if (!isNodeAnnotated && !siblingHasTypeAnnotation) {
      return;
    }

    // https://github.com/jsx-eslint/eslint-plugin-react/issues/2784
    if (isInsideClassBody(node) && !astUtil.isFunction(node)) {
      return;
    }

    // Should ignore function that not return JSXElement
    if (!utils.isReturningJSXOrNull(node) || startWithCapitalizedLetter(node)) {
      return;
    }

    if (isNodeAnnotated) {
      const param = node.params[0];
      if (param.typeAnnotation && param.typeAnnotation.typeAnnotation && param.typeAnnotation.typeAnnotation.type === 'UnionTypeAnnotation') {
        param.typeAnnotation.typeAnnotation.types.forEach((annotation) => {
          if (annotation.type === 'GenericTypeAnnotation') {
            markPropTypesAsDeclared(node, resolveTypeAnnotation(annotation), rootNode);
          } else {
            markPropTypesAsDeclared(node, annotation, rootNode);
          }
        });
      } else {
        markPropTypesAsDeclared(node, resolveTypeAnnotation(param), rootNode);
      }
    } else {
      // implements what's discussed here: https://github.com/jsx-eslint/eslint-plugin-react/issues/2777#issuecomment-683944481
      const annotation = siblingIdentifier.typeAnnotation.typeAnnotation;

      if (
        annotation
        && annotation.type !== 'TSTypeReference'
        && propsUtil.getTypeArguments(annotation) == null
      ) {
        return;
      }

      if (!isValidReactGenericTypeAnnotation(annotation)) return;

      markPropTypesAsDeclared(node, resolveTypeAnnotation(siblingIdentifier), rootNode);
    }
  }

  /**
   * Resolve the type annotation for a given class declaration node.
   *
   * @param {ASTNode} node The annotation or a node containing the type annotation.
   * @returns {ASTNode} The resolved type annotation for the node.
   */
  function resolveSuperParameterPropsType(node) {
    let propsParameterPosition;
    const parameters = propsUtil.getSuperTypeArguments(node);

    try {
      // Flow <=0.52 had 3 required TypedParameters of which the second one is the Props.
      // Flow >=0.53 has 2 optional TypedParameters of which the first one is the Props.
      propsParameterPosition = testFlowVersion(context, '>= 0.53.0') ? 0 : 1;
    } catch (e) {
      // In case there is no flow version defined, we can safely assume that when there are 3 Props we are dealing with version <= 0.52
      propsParameterPosition = parameters.params.length <= 2 ? 0 : 1;
    }

    let annotation = parameters.params[propsParameterPosition];
    while (annotation && (annotation.type === 'TypeAnnotation' || annotation.type === 'NullableTypeAnnotation')) {
      annotation = annotation.typeAnnotation;
    }

    if (annotation && annotation.type === 'GenericTypeAnnotation' && getInTypeScope(annotation.id.name)) {
      return getInTypeScope(annotation.id.name);
    }
    return annotation;
  }

  /**
   * Checks if we are declaring a `props` class property with a flow type annotation.
   * @param {ASTNode} node The AST node being checked.
   * @returns {boolean} True if the node is a type annotated props declaration, false if not.
   */
  function isAnnotatedClassPropsDeclaration(node) {
    if (node && (node.type === 'ClassProperty' || node.type === 'PropertyDefinition')) {
      const tokens = getFirstTokens(context, node, 2);
      if (
        node.typeAnnotation && (
          tokens[0].value === 'props'
          || (tokens[1] && tokens[1].value === 'props')
        )
      ) {
        return true;
      }
    }
    return false;
  }

  return {
    ClassExpression(node) {
      // TypeParameterDeclaration need to be added to typeScope in order to handle ClassExpressions.
      // This visitor is executed before TypeParameterDeclaration are scoped, therefore we postpone
      // processing class expressions until when the program exists.
      classExpressions.push(node);
    },

    ClassDeclaration(node) {
      if (isSuperTypeParameterPropsDeclaration(node)) {
        markPropTypesAsDeclared(node, resolveSuperParameterPropsType(node), node);
      }
    },

    'ClassProperty, PropertyDefinition'(node) {
      if (isAnnotatedClassPropsDeclaration(node)) {
        markPropTypesAsDeclared(node, resolveTypeAnnotation(node), node);
      } else if (propsUtil.isPropTypesDeclaration(node)) {
        markPropTypesAsDeclared(node, node.value, node);
      }
    },

    ObjectExpression(node) {
      // Search for the proptypes declaration
      node.properties.forEach((property) => {
        if (!propsUtil.isPropTypesDeclaration(property)) {
          return;
        }
        markPropTypesAsDeclared(node, property.value, node);
      });
    },

    FunctionExpression(node) {
      if (node.parent.type !== 'MethodDefinition') {
        markAnnotatedFunctionArgumentsAsDeclared(node, node);
      }
    },

    ImportDeclaration(node) {
      // parse `import ... from 'react`
      if (node.source.value === 'react') {
        node.specifiers.forEach((specifier) => {
          if (
            // handles import * as X from 'react'
            specifier.type === 'ImportNamespaceSpecifier'
            // handles import React from 'react'
            || specifier.type === 'ImportDefaultSpecifier'
          ) {
            genericReactTypesImport.add(specifier.local.name);
          }

          // handles import { FC } from 'react' or import { FC as X } from 'react'
          if (specifier.type === 'ImportSpecifier' && allowedGenericTypes.has(specifier.imported.name)) {
            genericReactTypesImport.add(specifier.local.name);
            localToImportedMap[specifier.local.name] = specifier.imported.name;
          }
        });
      }
    },

    FunctionDeclaration: markAnnotatedFunctionArgumentsAsDeclared,

    ArrowFunctionExpression: markAnnotatedFunctionArgumentsAsDeclared,

    MemberExpression(node) {
      if (propsUtil.isPropTypesDeclaration(node)) {
        const component = utils.getRelatedComponent(node);
        if (!component) {
          return;
        }
        try {
          markPropTypesAsDeclared(component.node, node.parent.right || node.parent, node);
        } catch (e) {
          if (e.constructor !== RangeError) { throw e; }
        }
      }
    },

    MethodDefinition(node) {
      if (!node.static || node.kind !== 'get' || !propsUtil.isPropTypesDeclaration(node)) {
        return;
      }

      let i = node.value.body.body.length - 1;
      for (; i >= 0; i--) {
        if (node.value.body.body[i].type === 'ReturnStatement') {
          break;
        }
      }

      if (i >= 0) {
        markPropTypesAsDeclared(node, node.value.body.body[i].argument, node);
      }
    },

    TypeAlias(node) {
      setInTypeScope(node.id.name, node.right);
    },

    TypeParameterDeclaration(node) {
      const identifier = node.params[0];

      if (identifier.typeAnnotation) {
        setInTypeScope(identifier.name, identifier.typeAnnotation.typeAnnotation);
      }
    },

    Program() {
      stack = [{}];
    },

    BlockStatement() {
      stack.push(Object.create(typeScope()));
    },

    'BlockStatement:exit'() {
      stack.pop();
    },

    'Program:exit'() {
      classExpressions.forEach((node) => {
        if (isSuperTypeParameterPropsDeclaration(node)) {
          markPropTypesAsDeclared(node, resolveSuperParameterPropsType(node), node);
        }
      });
    },
  };
};
