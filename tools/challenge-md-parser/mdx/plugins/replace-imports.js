const path = require('path');
const { read } = require('to-vfile');
const find = require('unist-util-find');
const modifyChildren = require('unist-util-modify-children');
const remark = require('remark');
const remove = require('unist-util-remove');
const visit = require('unist-util-visit');

const { editableRegionMarker } = require('./add-seed');
const tableAndStrikeThrough = require('./table-and-strikethrough');

async function parse(file) {
  return await remark()
    .use(tableAndStrikeThrough)
    .parse(file);
}

function plugin() {
  return transformer;

  function transformer(tree, file, next) {
    // TODO: find them all, not just the first
    const importedFiles = find(tree, { type: 'leafDirective', name: 'import' });
    if (!file) {
      next('replace-imports must be passed a file');
      return;
    }
    if (!importedFiles) {
      next();
      return;
    }
    const { from, component } = importedFiles.attributes;

    const location = path.resolve(file.dirname, from);
    read(location)
      .then(parse)
      .then(importedFile => {
        function modifier(node, index, parent) {
          const { type, name, attributes } = node;
          const target = attributes ? attributes.component : null;
          if (
            type === 'leafDirective' &&
            name === 'use' &&
            target === component
          ) {
            if (!validateImports(importedFile))
              throw Error(
                'Importing files containing ' +
                  editableRegionMarker +
                  's is not supported.'
              );

            parent.children.splice(index, 1, ...importedFile.children);
          }
        }

        const modify = modifyChildren(modifier);
        modify(tree);
      })
      // We're not interested in the results of importing, we just want to
      // modify the tree and pass that new tree to follow plugins - as a result,
      // we can't just use .then(next), as it would pass the array into next.
      // Also, we remove the import statements here.
      .then(() => {
        remove(tree, { type: 'leafDirective', name: 'import' });
        next();
      })
      .catch(next);
  }
}

function validateImports(fileTree) {
  let valid = true;

  function visitor({ value }) {
    if (value && value.includes(editableRegionMarker)) {
      valid = false;
      return visit.EXIT;
    } else {
      return visit.CONTINUE;
    }
  }

  visit(fileTree, visitor);
  return valid;
}

module.exports = plugin;
