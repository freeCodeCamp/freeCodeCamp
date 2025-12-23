const { findAll } = require('./utils/find-all');
const { isMarker } = require('./utils/get-section');
const visit = require('unist-util-visit');

const VALID_MARKERS = [
  // Level 1
  '# --after-all--',
  '# --after-each--',
  '# --assignment--',
  '# --before-all--',
  '# --before-each--',
  '# --description--',
  '# --explanation--',
  '# --fillInTheBlank--',
  '# --hints--',
  '# --instructions--',
  '# --interactive--',
  '# --notes--',
  '# --questions--',
  '# --quizzes--',
  '# --scene--',
  '# --seed--',
  '# --solutions--',
  '# --transcript--',

  // Level 2
  '## --answers--',
  '## --blanks--',
  '## --quiz--',
  '## --seed-contents--',
  '## --sentence--',
  '## --text--',
  '## --video-solution--',
  // TODO: Remove these two markers when https://github.com/freeCodeCamp/freeCodeCamp/issues/57107 is resolved
  '## --after-user-code--',
  '## --before-user-code--',

  // Level 3
  '### --audio-id--',
  '### --feedback--',
  '### --question--',

  // Level 4
  '#### --answer--',
  '#### --distractors--',
  '#### --text--'
];

// Special markers that should not be used as headings
const NON_HEADING_MARKERS = ['--fcc-editable-region--'];

const FCC_EDITABLE_REGION = '--fcc-editable-region--';
const SOLUTIONS_HEADER = '--solutions--';

function findEditableRegionMarkersInAST(tree) {
  const markers = [];

  // Look for standalone text nodes (original behavior)
  visit(tree, 'text', node => {
    if (node.value && node.value.trim() === FCC_EDITABLE_REGION) {
      markers.push(node);
    }
  });

  // Also look inside code blocks
  visit(tree, 'code', node => {
    if (node.value && node.value.includes(FCC_EDITABLE_REGION)) {
      const lines = node.value.split('\n');
      lines.forEach(line => {
        if (line.trim() === FCC_EDITABLE_REGION) {
          markers.push({ value: line.trim() });
        }
      });
    }
  });

  return markers;
}

function validateSections() {
  function transformer(tree) {
    const allMarkers = findAll(tree, isMarker);
    const allEditableMarkers = findEditableRegionMarkersInAST(tree);
    const isWorkshop = allEditableMarkers.length > 0;

    const invalidMarkerNames = [];
    const invalidHeadingLevels = [];
    const nonHeadingMarkersAsHeadings = [];

    const errors = [];

    for (let i = 0; i < allMarkers.length; i++) {
      const markerNode = allMarkers[i];
      const markerValue = markerNode.children[0].value;
      const headingLevel = markerNode.depth;
      const fullMarker = '#'.repeat(headingLevel) + ' ' + markerValue;

      if (NON_HEADING_MARKERS.includes(markerValue)) {
        nonHeadingMarkersAsHeadings.push(fullMarker);
        continue;
      }

      if (!VALID_MARKERS.includes(fullMarker)) {
        const markerExistsAtAnyLevel = VALID_MARKERS.some(validMarker =>
          validMarker.endsWith(markerValue)
        );

        if (markerExistsAtAnyLevel) {
          const validLevels = VALID_MARKERS.filter(validMarker =>
            validMarker.endsWith(markerValue)
          ).map(validMarker => validMarker.split(' ')[0]); // Extract the # symbols

          invalidHeadingLevels.push({
            fullMarker,
            markerValue,
            validLevels
          });
        } else {
          invalidMarkerNames.push(markerValue);
        }
      }

      if (markerValue === SOLUTIONS_HEADER && i !== allMarkers.length - 1) {
        errors.push(
          `Validation error: "${SOLUTIONS_HEADER}" header appears before the last step. The "${SOLUTIONS_HEADER}" header must only appear in the final step.`
        );
      } else if (
        isWorkshop &&
        markerValue !== SOLUTIONS_HEADER &&
        i === allMarkers.length - 1
      ) {
        errors.push(
          `Validation error: Expected the final step to be the "${SOLUTIONS_HEADER}" section, but found "${markerValue}" instead.`
        );
      }
    }

    if (isWorkshop && allEditableMarkers.length !== 2) {
      errors.push(
        `Validation error: expected exactly 2 occurrences of "${FCC_EDITABLE_REGION}" but found ${allEditableMarkers.length}.`
      );
    }

    if (invalidMarkerNames.length > 0) {
      errors.push(
        `Invalid marker names: ${invalidMarkerNames.map(m => `"${m}"`).join(', ')}.`
      );
    }

    if (nonHeadingMarkersAsHeadings.length > 0) {
      errors.push(
        `Non-heading markers should not be used as headings: ${nonHeadingMarkersAsHeadings.map(m => `"${m}"`).join(', ')}.`
      );
    }

    if (invalidHeadingLevels.length > 0) {
      const levelErrors = invalidHeadingLevels.map(
        ({ fullMarker, markerValue, validLevels }) => {
          const validText =
            validLevels.length === 1
              ? `${validLevels[0]} ${markerValue}`
              : validLevels
                  .map(level => `${level} ${markerValue}`)
                  .join(' or ');
          return `"${fullMarker}" should be "${validText}"`;
        }
      );

      errors.push(`Invalid heading levels: ${levelErrors.join(', ')}.`);
    }

    if (errors.length > 0) {
      throw new Error(errors.join('\n'));
    }
  }

  return transformer;
}

module.exports = validateSections;
module.exports.VALID_MARKERS = VALID_MARKERS;
module.exports.NON_HEADING_MARKERS = NON_HEADING_MARKERS;
module.exports.SOLUTIONS_HEADER = SOLUTIONS_HEADER;
