const { isEmpty } = require('lodash');
const { root } = require('mdast-builder');
const visitChildren = require('unist-util-visit-children');
const fs = require('fs');
const path = require('path');

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

function isLastStep(file) {
  const challengeDir = path.dirname(file.path);
  const blockName = path.basename(challengeDir);

  let current = challengeDir;
  let blockJsonPath = null;

  for (let i = 0; i < 10; i++) {
    current = path.dirname(current);
    const candidate = path.join(
      current,
      'structure',
      'blocks',
      `${blockName}.json`
    );
    if (fs.existsSync(candidate)) {
      blockJsonPath = candidate;
      break;
    }
  }

  if (!blockJsonPath) return true;

  try {
    const blockData = JSON.parse(fs.readFileSync(blockJsonPath, 'utf8'));

    // Upcoming blocks may still contain transitional content that does not yet
    // follow this invariant.
    if (blockData.isUpcomingChange) {
      return true;
    }

    const challengeOrder = blockData.challengeOrder;

    if (!Array.isArray(challengeOrder) || challengeOrder.length === 0) {
      return true;
    }

    const currentId = path.basename(file.path, '.md');
    const lastId = challengeOrder[challengeOrder.length - 1].id;

    return currentId === lastId;
  } catch {
    return true;
  }
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
      if (solutions.length > 0 && !isLastStep(file)) {
        throw Error(
          `Workshop challenge ${file.path} has solutions but is not the last step.`
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
