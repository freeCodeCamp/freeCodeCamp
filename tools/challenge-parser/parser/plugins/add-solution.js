const { isEmpty } = require('lodash');
const { root } = require('mdast-builder');
const visitChildren = require('unist-util-visit-children');

const { editableRegionMarker, isWorkshop } = require('./add-seed');
const { getSection } = require('./utils/get-section');
const { getFileVisitor } = require('./utils/get-file-visitor');
const { splitOnThematicBreak } = require('./utils/split-on-thematic-break');

function validateMarkers({ value }) {
  const lines = value.split('\n');
  if (lines.some(line => line.match(RegExp(editableRegionMarker))))
    throw Error(
      '--fcc-editable-region-- should only appear in the --seed-contents--\n' +
        'section, not in --solutions--'
    );
}

function createPlugin() {
  return function transformer(tree, file) {
    const solutionArrays = splitOnThematicBreak(
      getSection(tree, `--solutions--`)
    );
    const solutions = [];

    solutionArrays.forEach(nodes => {
      const solution = {};
      const solutionTree = root(nodes);
      const visitForContents = visitChildren(
        getFileVisitor(solution, 'contents', validateMarkers)
      );

      visitForContents(solutionTree);
      if (!isEmpty(solution)) solutions.push(Object.values(solution));
    });

    if (isWorkshop(file)) {
      const seedSection = getSection(tree, `--seed--`);
      const seedContents = getSection(root(seedSection), `--seed-contents--`);
      let totalMarkers = 0;
      const seedTree = root(seedContents);
      seedTree.children.forEach(node => {
        if (node.value) {
          const lines = node.value.split('\n');
          lines.forEach(line => {
            if (line.trim() === '--fcc-editable-region--') totalMarkers++;
          });
        }
      });
      if (totalMarkers > 0 && totalMarkers !== 2) {
        throw Error(
          `Workshop challenge ${file.path} must have exactly 2 editable region markers`
        );
      }
    }
    file.data = {
      ...file.data,
      solutions: solutions
    };
  };
}

module.exports = createPlugin;
