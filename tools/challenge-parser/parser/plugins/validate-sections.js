const { findAll } = require('./utils/find-all');
const { isMarker } = require('./utils/get-section');

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
    const allMarkers = findAll(tree, isMarker);

    const invalidMarkerNames = [];
    const invalidHeadingLevels = [];
    const nonHeadingMarkersAsHeadings = [];

    const errors = [];

    for (const markerNode of allMarkers) {
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
