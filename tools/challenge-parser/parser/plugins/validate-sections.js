const { findAll } = require('./utils/find-all');
const { isMarker } = require('./utils/get-section');

function validateSections() {
  function transformer(tree) {
    const validMarkers = [
      '--after-user-code--',
      '--answer--',
      '--answers--',
      '--assignment--',
      '--before-all--',
      '--before-user-code--',
      '--blanks--',
      '--description--',
      '--distractors--',
      '--explanation--',
      '--fcc-editable-region--',
      '--feedback--',
      '--fillInTheBlank--',
      '--hints--',
      '--instructions--',
      '--notes--',
      '--question--',
      '--questions--',
      '--quiz--',
      '--quizzes--',
      '--scene--',
      '--seed--',
      '--seed-contents--',
      '--sentence--',
      '--solutions--',
      '--text--',
      '--transcript--',
      '--video-solution--'
    ];

    // Find all heading nodes that look like section markers
    const allMarkers = findAll(tree, isMarker);
    const invalidMarkers = [];

    for (const markerNode of allMarkers) {
      const markerValue = markerNode.children[0].value;

      // Check if it's a valid marker
      if (!validMarkers.includes(markerValue)) {
        invalidMarkers.push(markerValue);
      }
    }

    // If any invalid markers were found, throw an error with all of them
    if (invalidMarkers.length > 0) {
      throw new Error(
        `Invalid section markers: ${invalidMarkers.map(m => `"${m}"`).join(', ')}.`
      );
    }
  }

  return transformer;
}

module.exports = validateSections;
