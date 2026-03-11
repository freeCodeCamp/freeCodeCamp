const { isEmpty } = require('lodash');
const { root } = require('mdast-builder');
const visitChildren = require('unist-util-visit-children');
const fs = require('fs');
const path = require('path');
const jsYaml = require('js-yaml');

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
  const dir = path.dirname(file.path);
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

  if (files.length <= 1) return true;

  let currentStep = -1;
  let maxStep = -1;

  for (const f of files) {
    const filePath = path.join(dir, f);
    const content = fs.readFileSync(filePath, 'utf8');
    const frontmatterMatch = content.match(/^---([\s\S]*?)---/);
    if (frontmatterMatch) {
      try {
        const data = jsYaml.safeLoad(frontmatterMatch[1]);
        if (data && data.title) {
          const stepMatch = data.title.match(/Step (\d+)/i);
          if (stepMatch) {
            const stepNum = parseInt(stepMatch[1], 10);
            if (filePath === file.path) currentStep = stepNum;
            if (stepNum > maxStep) maxStep = stepNum;
          }
        }
      } catch {
        // ignore
      }
    }
  }

  if (currentStep !== -1 && maxStep !== -1) {
    return currentStep === maxStep;
  }

  return true;
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

    if (isWorkshop(file) && solutions.length > 0) {
      if (!isLastStep(file)) {
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
