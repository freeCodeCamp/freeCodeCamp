"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = remove;

/* eslint-disable no-param-reassign */
function isInside(scope, regex) {
  if (!scope.hub.file.opts) {
    return true;
  }

  var filename = scope.hub.file.opts.filename;

  if (!filename) {
    return true;
  }

  if (!regex) {
    return false;
  }

  return regex.test(filename);
} // Remove a specific path.


function remove(path, globalOptions, options) {
  var visitedKey = globalOptions.visitedKey,
      unsafeWrapTemplate = globalOptions.unsafeWrapTemplate,
      wrapTemplate = globalOptions.wrapTemplate,
      mode = globalOptions.mode,
      ignoreFilenames = globalOptions.ignoreFilenames,
      types = globalOptions.types;

  if (ignoreFilenames && isInside(path.scope, ignoreFilenames)) {
    return;
  } // Prevent infinity loop.


  if (path.node[visitedKey]) {
    return;
  }

  path.node[visitedKey] = true;

  if (mode === 'remove') {
    // remove() crash in some conditions.
    if (path.parentPath.type === 'ConditionalExpression') {
      path.replaceWith(types.unaryExpression('void', types.numericLiteral(0)));
    } else {
      path.remove();
    }

    return;
  }

  if (mode === 'wrap' || mode === 'unsafe-wrap') {
    switch (options.type) {
      // This is legacy, we do not optimize it.
      case 'createClass':
        break;
      // Inspired from babel-plugin-transform-class-properties.

      case 'class static':
        {
          var ref;
          var pathClassDeclaration = options.pathClassDeclaration;

          if (!pathClassDeclaration.isClassExpression() && pathClassDeclaration.node.id) {
            ref = pathClassDeclaration.node.id;
          } else {
            // Class without name not supported
            return;
          }

          var node = types.expressionStatement(types.assignmentExpression('=', types.memberExpression(ref, path.node.key), path.node.value)); // We need to append the node at the parent level in this case.

          if (pathClassDeclaration.parentPath.isExportDeclaration()) {
            pathClassDeclaration = pathClassDeclaration.parentPath;
          }

          pathClassDeclaration.insertAfter(node);
          path.remove();
          break;
        }

      case 'assign':
        if (mode === 'unsafe-wrap') {
          path.replaceWith(unsafeWrapTemplate({
            NODE: path.node
          }));
        } else {
          path.replaceWith(wrapTemplate({
            LEFT: path.node.left,
            RIGHT: path.node.right
          }));
        }

        path.node[visitedKey] = true;
        break;

      case 'declarator':
        path.replaceWith(wrapTemplate({
          LEFT: path.node.id,
          RIGHT: path.node.init
        }, {
          as: 'variableDeclarator'
        }));
        path.node[visitedKey] = true;
        break;

      default:
        break;
    }

    return;
  }

  throw new Error("transform-react-remove-prop-type: unsupported mode ".concat(mode, "."));
}