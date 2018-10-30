/**
 * @fileoverview Prevent definitions of unused prop types
 * @author Evgueni Naverniouk
 */
'use strict';

// As for exceptions for props.children or props.className (and alike) look at
// https://github.com/yannickcr/eslint-plugin-react/issues/7

var has = require('has');
var assign = require('object.assign');
var Components = require('../util/Components');
var variable = require('../util/variable');
var annotations = require('../util/annotations');

// ------------------------------------------------------------------------------
// Constants
// ------------------------------------------------------------------------------

var DIRECT_PROPS_REGEX = /^props\s*(\.|\[)/;

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Prevent definitions of unused prop types',
      category: 'Best Practices',
      recommended: false
    },

    schema: [{
      type: 'object',
      properties: {
        customValidators: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        skipShapeProps: {
          type: 'boolean'
        }
      },
      additionalProperties: false
    }]
  },

  create: Components.detect(function(context, components, utils) {

    var defaults = {skipShapeProps: true};
    var sourceCode = context.getSourceCode();
    var configuration = assign({}, defaults, context.options[0] || {});
    var skipShapeProps = configuration.skipShapeProps;
    var customValidators = configuration.customValidators || [];
    // Used to track the type annotations in scope.
    // Necessary because babel's scopes do not track type annotations.
    var stack = null;

    var UNUSED_MESSAGE = '\'{{name}}\' PropType is defined but prop is never used';

    /**
     * Helper for accessing the current scope in the stack.
     * @param {string} key The name of the identifier to access. If omitted, returns the full scope.
     * @param {ASTNode} value If provided sets the new value for the identifier.
     * @returns {Object|ASTNode} Either the whole scope or the ASTNode associated with the given identifier.
     */
    function typeScope(key, value) {
      if (arguments.length === 0) {
        return stack[stack.length - 1];
      } else if (arguments.length === 1) {
        return stack[stack.length - 1][key];
      }
      stack[stack.length - 1][key] = value;
      return value;
    }

    /**
     * Checks if we are using a prop
     * @param {ASTNode} node The AST node being checked.
     * @returns {Boolean} True if we are using a prop, false if not.
     */
    function isPropTypesUsage(node) {
      var isClassUsage = (
        (utils.getParentES6Component() || utils.getParentES5Component()) &&
        node.object.type === 'ThisExpression' && node.property.name === 'props'
      );
      var isStatelessFunctionUsage = node.object.name === 'props';
      return isClassUsage || isStatelessFunctionUsage;
    }

    /**
     * Checks if we are declaring a `props` class property with a flow type annotation.
     * @param {ASTNode} node The AST node being checked.
     * @returns {Boolean} True if the node is a type annotated props declaration, false if not.
     */
    function isAnnotatedClassPropsDeclaration(node) {
      if (node && node.type === 'ClassProperty') {
        var tokens = context.getFirstTokens(node, 2);
        if (
          node.typeAnnotation && (
            tokens[0].value === 'props' ||
            (tokens[1] && tokens[1].value === 'props')
          )
        ) {
          return true;
        }
      }
      return false;
    }

    /**
     * Checks if we are declaring a prop
     * @param {ASTNode} node The AST node being checked.
     * @returns {Boolean} True if we are declaring a prop, false if not.
     */
    function isPropTypesDeclaration(node) {

      // Special case for class properties
      // (babel-eslint does not expose property name so we have to rely on tokens)
      if (node && node.type === 'ClassProperty') {
        var tokens = context.getFirstTokens(node, 2);
        if (
          tokens[0].value === 'propTypes' ||
          (tokens[1] && tokens[1].value === 'propTypes')
        ) {
          return true;
        }
        return false;
      }

      return Boolean(
        node &&
        node.name === 'propTypes'
      );

    }

    /**
     * Checks if prop should be validated by plugin-react-proptypes
     * @param {String} validator Name of validator to check.
     * @returns {Boolean} True if validator should be checked by custom validator.
     */
    function hasCustomValidator(validator) {
      return customValidators.indexOf(validator) !== -1;
    }

    /**
     * Checks if the component must be validated
     * @param {Object} component The component to process
     * @returns {Boolean} True if the component must be validated, false if not.
     */
    function mustBeValidated(component) {
      return Boolean(
        component &&
        component.usedPropTypes &&
        !component.ignorePropsValidation
      );
    }

    /**
     * Returns true if the given node is a React Component lifecycle method
     * @param {ASTNode} node The AST node being checked.
     * @return {Boolean} True if the node is a lifecycle method
     */
    function isNodeALifeCycleMethod(node) {
      var nodeKeyName = (node.key || {}).name;
      return (
        node.kind === 'constructor' ||
        nodeKeyName === 'componentWillReceiveProps' ||
        nodeKeyName === 'shouldComponentUpdate' ||
        nodeKeyName === 'componentWillUpdate' ||
        nodeKeyName === 'componentDidUpdate'
      );
    }

    /**
     * Returns true if the given node is inside a React Component lifecycle
     * method.
     * @param {ASTNode} node The AST node being checked.
     * @return {Boolean} True if the node is inside a lifecycle method
     */
    function isInLifeCycleMethod(node) {
      if (node.type === 'MethodDefinition' && isNodeALifeCycleMethod(node)) {
        return true;
      }

      if (node.parent) {
        return isInLifeCycleMethod(node.parent);
      }

      return false;
    }

    /**
     * Checks if a prop init name matches common naming patterns
     * @param {ASTNode} node The AST node being checked.
     * @returns {Boolean} True if the prop name matches
     */
    function isPropAttributeName (node) {
      return (
        node.init.name === 'props' ||
        node.init.name === 'nextProps' ||
        node.init.name === 'prevProps'
      );
    }

    /**
     * Checks if a prop is used
     * @param {ASTNode} node The AST node being checked.
     * @param {Object} prop Declared prop object
     * @returns {Boolean} True if the prop is used, false if not.
     */
    function isPropUsed(node, prop) {
      for (var i = 0, l = node.usedPropTypes.length; i < l; i++) {
        var usedProp = node.usedPropTypes[i];
        if (
          prop.type === 'shape' ||
          prop.name === '__ANY_KEY__' ||
          usedProp.name === prop.name
        ) {
          return true;
        }
      }

      return false;
    }

    /**
     * Checks if the prop has spread operator.
     * @param {ASTNode} node The AST node being marked.
     * @returns {Boolean} True if the prop has spread operator, false if not.
     */
    function hasSpreadOperator(node) {
      var tokens = sourceCode.getTokens(node);
      return tokens.length && tokens[0].value === '...';
    }

    /**
     * Retrieve the name of a key node
     * @param {ASTNode} node The AST node with the key.
     * @return {string} the name of the key
     */
    function getKeyValue(node) {
      if (node.type === 'ObjectTypeProperty') {
        var tokens = context.getFirstTokens(node, 1);
        return tokens[0].value;
      }
      var key = node.key || node.argument;
      return key.type === 'Identifier' ? key.name : key.value;
    }

    /**
     * Iterates through a properties node, like a customized forEach.
     * @param {Object[]} properties Array of properties to iterate.
     * @param {Function} fn Function to call on each property, receives property key
        and property value. (key, value) => void
     */
    function iterateProperties(properties, fn) {
      if (properties.length && typeof fn === 'function') {
        for (var i = 0, j = properties.length; i < j; i++) {
          var node = properties[i];
          var key = getKeyValue(node);

          var value = node.value;
          fn(key, value);
        }
      }
    }

    /**
     * Creates the representation of the React propTypes for the component.
     * The representation is used to verify nested used properties.
     * @param {ASTNode} value Node of the React.PropTypes for the desired property
     * @param {String} parentName Name of the parent prop node.
     * @return {Object|Boolean} The representation of the declaration, true means
     *    the property is declared without the need for further analysis.
     */
    function buildReactDeclarationTypes(value, parentName) {
      if (
        value &&
        value.callee &&
        value.callee.object &&
        hasCustomValidator(value.callee.object.name)
      ) {
        return true;
      }

      if (
        value &&
        value.type === 'MemberExpression' &&
        value.property &&
        value.property.name &&
        value.property.name === 'isRequired'
      ) {
        value = value.object;
      }

      // Verify React.PropTypes that are functions
      if (
        value &&
        value.type === 'CallExpression' &&
        value.callee &&
        value.callee.property &&
        value.callee.property.name &&
        value.arguments &&
        value.arguments.length > 0
      ) {
        var callName = value.callee.property.name;
        var argument = value.arguments[0];
        switch (callName) {
          case 'shape':
            if (skipShapeProps) {
              return true;
            }

            if (argument.type !== 'ObjectExpression') {
              // Invalid proptype or cannot analyse statically
              return true;
            }
            var shapeTypeDefinition = {
              type: 'shape',
              children: []
            };
            iterateProperties(argument.properties, function(childKey, childValue) {
              var fullName = [parentName, childKey].join('.');
              var types = buildReactDeclarationTypes(childValue, fullName);
              if (types === true) {
                types = {};
              }
              types.fullName = fullName;
              types.name = childKey;
              types.node = childValue;
              shapeTypeDefinition.children.push(types);
            });
            return shapeTypeDefinition;
          case 'arrayOf':
          case 'objectOf':
            var fullName = [parentName, '*'].join('.');
            var child = buildReactDeclarationTypes(argument, fullName);
            if (child === true) {
              child = {};
            }
            child.fullName = fullName;
            child.name = '__ANY_KEY__';
            child.node = argument;
            return {
              type: 'object',
              children: [child]
            };
          case 'oneOfType':
            if (
              !argument.elements ||
              !argument.elements.length
            ) {
              // Invalid proptype or cannot analyse statically
              return true;
            }
            var unionTypeDefinition = {
              type: 'union',
              children: []
            };
            for (var i = 0, j = argument.elements.length; i < j; i++) {
              var type = buildReactDeclarationTypes(argument.elements[i], parentName);
              // keep only complex type
              if (type !== true) {
                if (type.children === true) {
                  // every child is accepted for one type, abort type analysis
                  unionTypeDefinition.children = true;
                  return unionTypeDefinition;
                }
              }

              unionTypeDefinition.children.push(type);
            }
            if (unionTypeDefinition.length === 0) {
              // no complex type found, simply accept everything
              return true;
            }
            return unionTypeDefinition;
          case 'instanceOf':
            return {
              type: 'instance',
              // Accept all children because we can't know what type they are
              children: true
            };
          case 'oneOf':
          default:
            return true;
        }
      }
      // Unknown property or accepts everything (any, object, ...)
      return true;
    }

    /**
     * Creates the representation of the React props type annotation for the component.
     * The representation is used to verify nested used properties.
     * @param {ASTNode} annotation Type annotation for the props class property.
     * @param {String} parentName Name of the parent prop node.
     * @return {Object|Boolean} The representation of the declaration, true means
     *    the property is declared without the need for further analysis.
     */
    function buildTypeAnnotationDeclarationTypes(annotation, parentName) {
      switch (annotation.type) {
        case 'GenericTypeAnnotation':
          if (typeScope(annotation.id.name)) {
            return buildTypeAnnotationDeclarationTypes(typeScope(annotation.id.name), parentName);
          }
          return true;
        case 'ObjectTypeAnnotation':
          var shapeTypeDefinition = {
            type: 'shape',
            children: []
          };
          iterateProperties(annotation.properties, function(childKey, childValue) {
            var fullName = [parentName, childKey].join('.');
            var types = buildTypeAnnotationDeclarationTypes(childValue, fullName);
            if (types === true) {
              types = {};
            }
            types.fullName = fullName;
            types.name = childKey;
            types.node = childValue;
            shapeTypeDefinition.children.push(types);
          });
          return shapeTypeDefinition;
        case 'UnionTypeAnnotation':
          var unionTypeDefinition = {
            type: 'union',
            children: []
          };
          for (var i = 0, j = annotation.types.length; i < j; i++) {
            var type = buildTypeAnnotationDeclarationTypes(annotation.types[i], parentName);
            // keep only complex type
            if (type !== true) {
              if (type.children === true) {
                // every child is accepted for one type, abort type analysis
                unionTypeDefinition.children = true;
                return unionTypeDefinition;
              }
            }

            unionTypeDefinition.children.push(type);
          }
          if (unionTypeDefinition.children.length === 0) {
            // no complex type found, simply accept everything
            return true;
          }
          return unionTypeDefinition;
        case 'ArrayTypeAnnotation':
          var fullName = [parentName, '*'].join('.');
          var child = buildTypeAnnotationDeclarationTypes(annotation.elementType, fullName);
          if (child === true) {
            child = {};
          }
          child.fullName = fullName;
          child.name = '__ANY_KEY__';
          child.node = annotation;
          return {
            type: 'object',
            children: [child]
          };
        default:
          // Unknown or accepts everything.
          return true;
      }
    }

    /**
     * Check if we are in a class constructor
     * @return {boolean} true if we are in a class constructor, false if not
     */
    function inConstructor() {
      var scope = context.getScope();
      while (scope) {
        if (scope.block && scope.block.parent && scope.block.parent.kind === 'constructor') {
          return true;
        }
        scope = scope.upper;
      }
      return false;
    }

    /**
     * Retrieve the name of a property node
     * @param {ASTNode} node The AST node with the property.
     * @return {string} the name of the property or undefined if not found
     */
    function getPropertyName(node) {
      var isDirectProp = DIRECT_PROPS_REGEX.test(sourceCode.getText(node));
      var isInClassComponent = utils.getParentES6Component() || utils.getParentES5Component();
      var isNotInConstructor = !inConstructor(node);
      if (isDirectProp && isInClassComponent && isNotInConstructor) {
        return void 0;
      }
      if (!isDirectProp) {
        node = node.parent;
      }
      var property = node.property;
      if (property) {
        switch (property.type) {
          case 'Identifier':
            if (node.computed) {
              return '__COMPUTED_PROP__';
            }
            return property.name;
          case 'MemberExpression':
            return void 0;
          case 'Literal':
            // Accept computed properties that are literal strings
            if (typeof property.value === 'string') {
              return property.value;
            }
            // falls through
          default:
            if (node.computed) {
              return '__COMPUTED_PROP__';
            }
            break;
        }
      }
      return void 0;
    }

    /**
     * Mark a prop type as used
     * @param {ASTNode} node The AST node being marked.
     */
    function markPropTypesAsUsed(node, parentNames) {
      parentNames = parentNames || [];
      var type;
      var name;
      var allNames;
      var properties;
      switch (node.type) {
        case 'MemberExpression':
          name = getPropertyName(node);
          if (name) {
            allNames = parentNames.concat(name);
            if (node.parent.type === 'MemberExpression') {
              markPropTypesAsUsed(node.parent, allNames);
            }
            // Do not mark computed props as used.
            type = name !== '__COMPUTED_PROP__' ? 'direct' : null;
          } else if (
            node.parent.id &&
            node.parent.id.properties &&
            node.parent.id.properties.length &&
            getKeyValue(node.parent.id.properties[0])
          ) {
            type = 'destructuring';
            properties = node.parent.id.properties;
          }
          break;
        case 'ArrowFunctionExpression':
        case 'FunctionDeclaration':
        case 'FunctionExpression':
          type = 'destructuring';
          properties = node.params[0].properties;
          break;
        case 'VariableDeclarator':
          for (var i = 0, j = node.id.properties.length; i < j; i++) {
            // let {props: {firstname}} = this
            var thisDestructuring = (
              node.id.properties[i].key && (
                (node.id.properties[i].key.name === 'props' || node.id.properties[i].key.value === 'props') &&
                node.id.properties[i].value.type === 'ObjectPattern'
              )
            );
            // let {firstname} = props
            var genericDestructuring = isPropAttributeName(node) && (
                utils.getParentStatelessComponent() ||
                isInLifeCycleMethod(node)
            );

            if (thisDestructuring) {
              properties = node.id.properties[i].value.properties;
            } else if (genericDestructuring) {
              properties = node.id.properties;
            } else {
              continue;
            }
            type = 'destructuring';
            break;
          }
          break;
        default:
          throw new Error(node.type + ' ASTNodes are not handled by markPropTypesAsUsed');
      }

      var component = components.get(utils.getParentComponent());
      var usedPropTypes = component && component.usedPropTypes || [];
      var ignorePropsValidation = component && component.ignorePropsValidation || false;

      switch (type) {
        case 'direct':
          // Ignore Object methods
          if (Object.prototype[name]) {
            break;
          }

          usedPropTypes.push({
            name: name,
            allNames: allNames
          });
          break;
        case 'destructuring':
          for (var k = 0, l = (properties || []).length; k < l; k++) {
            if (hasSpreadOperator(properties[k]) || properties[k].computed) {
              ignorePropsValidation = true;
              break;
            }
            var propName = getKeyValue(properties[k]);

            var currentNode = node;
            allNames = [];
            while (currentNode.property && currentNode.property.name !== 'props') {
              allNames.unshift(currentNode.property.name);
              currentNode = currentNode.object;
            }
            allNames.push(propName);

            if (propName) {
              usedPropTypes.push({
                allNames: allNames,
                name: propName
              });
            }
          }
          break;
        default:
          break;
      }

      components.set(node, {
        usedPropTypes: usedPropTypes,
        ignorePropsValidation: ignorePropsValidation
      });
    }

    /**
     * Mark a prop type as declared
     * @param {ASTNode} node The AST node being checked.
     * @param {propTypes} node The AST node containing the proptypes
     */
    function markPropTypesAsDeclared(node, propTypes) {
      var component = components.get(node);
      var declaredPropTypes = component && component.declaredPropTypes || [];
      var ignorePropsValidation = component && component.ignorePropsValidation || false;

      switch (propTypes && propTypes.type) {
        case 'ObjectTypeAnnotation':
          iterateProperties(propTypes.properties, function(key, value) {
            var types = buildTypeAnnotationDeclarationTypes(value, key);
            if (types === true) {
              types = {};
            }
            types.fullName = key;
            types.name = key;
            types.node = value;
            declaredPropTypes.push(types);
          });
          break;
        case 'ObjectExpression':
          iterateProperties(propTypes.properties, function(key, value) {
            if (!value) {
              ignorePropsValidation = true;
              return;
            }
            var types = buildReactDeclarationTypes(value, key);
            if (types === true) {
              types = {};
            }
            types.fullName = key;
            types.name = key;
            types.node = value;
            declaredPropTypes.push(types);
          });
          break;
        case 'MemberExpression':
          break;
        case 'Identifier':
          var variablesInScope = variable.variablesInScope(context);
          for (var i = 0, j = variablesInScope.length; i < j; i++) {
            if (variablesInScope[i].name !== propTypes.name) {
              continue;
            }
            var defInScope = variablesInScope[i].defs[variablesInScope[i].defs.length - 1];
            markPropTypesAsDeclared(node, defInScope.node && defInScope.node.init);
            return;
          }
          ignorePropsValidation = true;
          break;
        case null:
          break;
        default:
          ignorePropsValidation = true;
          break;
      }

      components.set(node, {
        declaredPropTypes: declaredPropTypes,
        ignorePropsValidation: ignorePropsValidation
      });
    }

    /**
     * Used to recursively loop through each declared prop type
     * @param {Object} component The component to process
     * @param {Array} props List of props to validate
     */
    function reportUnusedPropType (component, props) {
      // Skip props that check instances
      if (props === true) {
        return;
      }

      (props || []).forEach(function (prop) {
        // Skip props that check instances
        if (prop === true) {
          return;
        }

        if (prop.node && !isPropUsed(component, prop)) {
          context.report(
            prop.node,
              UNUSED_MESSAGE, {
                name: prop.fullName
              }
          );
        }

        if (prop.children) {
          reportUnusedPropType(component, prop.children);
        }
      });
    }

    /**
     * Reports unused proptypes for a given component
     * @param {Object} component The component to process
     */
    function reportUnusedPropTypes(component) {
      reportUnusedPropType(component, component.declaredPropTypes);
    }

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
      var annotation = node.typeAnnotation || node;
      while (annotation && (annotation.type === 'TypeAnnotation' || annotation.type === 'NullableTypeAnnotation')) {
        annotation = annotation.typeAnnotation;
      }
      if (annotation.type === 'GenericTypeAnnotation' && typeScope(annotation.id.name)) {
        return typeScope(annotation.id.name);
      }
      return annotation;
    }

    /**
     * @param {ASTNode} node We expect either an ArrowFunctionExpression,
     *   FunctionDeclaration, or FunctionExpression
     */
    function markDestructuredFunctionArgumentsAsUsed(node) {
      var destructuring = node.params && node.params[0] && node.params[0].type === 'ObjectPattern';
      if (destructuring && components.get(node)) {
        markPropTypesAsUsed(node);
      }
    }

    /**
     * @param {ASTNode} node We expect either an ArrowFunctionExpression,
     *   FunctionDeclaration, or FunctionExpression
     */
    function markAnnotatedFunctionArgumentsAsDeclared(node) {
      if (!node.params || !node.params.length || !annotations.isAnnotatedFunctionPropsDeclaration(node, context)) {
        return;
      }
      markPropTypesAsDeclared(node, resolveTypeAnnotation(node.params[0]));
    }

    /**
     * @param {ASTNode} node We expect either an ArrowFunctionExpression,
     *   FunctionDeclaration, or FunctionExpression
     */
    function handleStatelessComponent(node) {
      markDestructuredFunctionArgumentsAsUsed(node);
      markAnnotatedFunctionArgumentsAsDeclared(node);
    }

    // --------------------------------------------------------------------------
    // Public
    // --------------------------------------------------------------------------

    return {
      ClassProperty: function(node) {
        if (isAnnotatedClassPropsDeclaration(node)) {
          markPropTypesAsDeclared(node, resolveTypeAnnotation(node));
        } else if (isPropTypesDeclaration(node)) {
          markPropTypesAsDeclared(node, node.value);
        }
      },

      VariableDeclarator: function(node) {
        var destructuring = node.init && node.id && node.id.type === 'ObjectPattern';
        // let {props: {firstname}} = this
        var thisDestructuring = destructuring && node.init.type === 'ThisExpression';
        // let {firstname} = props
        var statelessDestructuring = destructuring && isPropAttributeName(node) && (
            utils.getParentStatelessComponent() ||
            isInLifeCycleMethod(node)
        );

        if (!thisDestructuring && !statelessDestructuring) {
          return;
        }
        markPropTypesAsUsed(node);
      },

      FunctionDeclaration: handleStatelessComponent,

      ArrowFunctionExpression: handleStatelessComponent,

      FunctionExpression: handleStatelessComponent,

      MemberExpression: function(node) {
        var type;
        if (isPropTypesUsage(node)) {
          type = 'usage';
        } else if (isPropTypesDeclaration(node.property)) {
          type = 'declaration';
        }

        switch (type) {
          case 'usage':
            markPropTypesAsUsed(node);
            break;
          case 'declaration':
            var component = utils.getRelatedComponent(node);
            if (!component) {
              return;
            }
            markPropTypesAsDeclared(component.node, node.parent.right || node.parent);
            break;
          default:
            break;
        }
      },

      MethodDefinition: function(node) {
        if (!isPropTypesDeclaration(node.key)) {
          return;
        }

        var i = node.value.body.body.length - 1;
        for (; i >= 0; i--) {
          if (node.value.body.body[i].type === 'ReturnStatement') {
            break;
          }
        }

        if (i >= 0) {
          markPropTypesAsDeclared(node, node.value.body.body[i].argument);
        }
      },

      ObjectPattern: function(node) {
        // If the object pattern is a destructured props object in a lifecycle
        // method -- mark it for used props.
        if (isNodeALifeCycleMethod(node.parent.parent)) {
          node.properties.forEach(function(property, i) {
            if (i === 0) {
              markPropTypesAsUsed(node.parent);
            }
          });
        }
      },

      ObjectExpression: function(node) {
        // Search for the proptypes declaration
        node.properties.forEach(function(property) {
          if (!isPropTypesDeclaration(property.key)) {
            return;
          }
          markPropTypesAsDeclared(node, property.value);
        });
      },

      TypeAlias: function(node) {
        typeScope(node.id.name, node.right);
      },

      Program: function() {
        stack = [{}];
      },

      BlockStatement: function () {
        stack.push(Object.create(typeScope()));
      },

      'BlockStatement:exit': function () {
        stack.pop();
      },

      'Program:exit': function() {
        stack = null;
        var list = components.list();
        // Report undeclared proptypes for all classes
        for (var component in list) {
          if (!has(list, component) || !mustBeValidated(list[component])) {
            continue;
          }
          reportUnusedPropTypes(list[component]);
        }
      }
    };
  })
};
