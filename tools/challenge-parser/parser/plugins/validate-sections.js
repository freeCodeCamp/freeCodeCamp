const { findAll } = require('./utils/find-all');
const { isMarker } = require('./utils/get-section');

const VALID_MARKERS = [
  // Level 1
  '# --assignment--',
  '# --before-all--',
  '# --description--',
  '# --explanation--',
  '# --fillInTheBlank--',
  '# --hints--',
  '# --instructions--',
  '# --notes--',
  '# --questions--',
  '# --quizzes--',
  '# --scene--',
  '# --seed--',
  '# --solutions--',
  '# --transcript--',

  // Level 2
  '## --after-user-code--',
  '## --answers--',
  '## --before-user-code--',
  '## --blanks--',
  '## --quiz--',
  '## --seed-contents--',
  '## --sentence--',
  '## --text--',
  '## --video-solution--',

  // Level 3
  '### --feedback--',
  '### --question--',

  // Level 4
  '#### --answer--',
  '#### --distractors--',
  '#### --text--'
];

// Special markers that should not be used as headings
const NON_HEADING_MARKERS = ['--fcc-editable-region--'];

function validateSections() {
  function transformer(tree) {
    // Find all heading nodes that look like section markers
    const allMarkers = findAll(tree, isMarker);
    const invalidMarkerNames = [];
    const invalidHeadingLevels = [];
    const nonHeadingMarkersInHeadings = [];

    for (const markerNode of allMarkers) {
      const markerValue = markerNode.children[0].value;
      const headingLevel = markerNode.depth;
      const fullMarker = '#'.repeat(headingLevel) + ' ' + markerValue;

      // Check if this is a non-heading marker used as heading (not allowed)
      if (NON_HEADING_MARKERS.includes(markerValue)) {
        nonHeadingMarkersInHeadings.push(fullMarker);
        continue;
      }

      // Check if this exact combination is valid
      if (!VALID_MARKERS.includes(fullMarker)) {
        // Check if the marker name exists at any level
        const markerExistsAtAnyLevel = VALID_MARKERS.some(vm =>
          vm.endsWith(' ' + markerValue)
        );

        if (markerExistsAtAnyLevel) {
          // Valid marker name but wrong heading level
          const validLevels = VALID_MARKERS.filter(vm =>
            vm.endsWith(' ' + markerValue)
          ).map(vm => vm.split(' ')[0]); // Extract the # symbols

          invalidHeadingLevels.push({
            fullMarker,
            markerValue,
            validLevels
          });
        } else {
          // Invalid marker name
          invalidMarkerNames.push(markerValue);
        }
      }
    }

    const errors = [];

    if (invalidMarkerNames.length > 0) {
      errors.push(
        `Invalid marker names: ${invalidMarkerNames.map(m => `"${m}"`).join(', ')}.`
      );
    }

    if (nonHeadingMarkersInHeadings.length > 0) {
      errors.push(
        `Non-heading markers should not be used as headings: ${nonHeadingMarkersInHeadings.map(m => `"${m}"`).join(', ')}.`
      );
    }

    if (invalidHeadingLevels.length > 0) {
      const levelErrors = invalidHeadingLevels.map(
        ({ fullMarker, markerValue, validLevels }) => {
          const validText =
            validLevels.length === 1
              ? validLevels[0]
              : validLevels.join(' or ');
          return `"${fullMarker}" should be "${validText} ${markerValue}"`;
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
