const { findAll } = require('./utils/find-all');
const { isMarker } = require('./utils/get-section');

const FCC_EDITABLE_REGION = '--fcc-editable-region--';
const SOLUTIONS_HEADER = '--solutions--';

const isEditableMarker = node => {
  if (node.children && node.children[0]) {
    const child = node.children[0];
    return child.type === 'text' && child.value === FCC_EDITABLE_REGION;
  }
  return false;
};

function validateWorkshop() {
  return function transformer(tree) {
    const allMarkers = findAll(tree, isMarker);
    const allEditableMarkers = findAll(tree, isEditableMarker);
    const isWorkshop = allEditableMarkers.length > 0;

    // Quick heuristic: only run when editable-region marker exists
    if (!isWorkshop) {
      return;
    }

    // 1) Count --fcc-editable-region-- occurrences
    if (allEditableMarkers.length !== 2) {
      throw new Error(
        `Validation error: expected exactly 2 occurrences of "${FCC_EDITABLE_REGION}" but found ${allEditableMarkers.length}.`
      );
    }

    // 2) Ensure solutions header only in last step.
    for (let i = 0; i < allMarkers.length; i++) {
      const markerText = allMarkers[i].children[0].value;
      if (markerText === SOLUTIONS_HEADER && i !== allMarkers.length - 1) {
        throw new Error(
          `Validation error: “${SOLUTIONS_HEADER}” header appears before the last step. The “${SOLUTIONS_HEADER}” header must only appear in the final step.`
        );
      } else if (
        markerText !== SOLUTIONS_HEADER &&
        i === allMarkers.length - 1
      ) {
        throw new Error(
          `Validation error: Expected the final step to be the “${SOLUTIONS_HEADER}” section, but found “${markerText}” instead.`
        );
      }
    }

    return;
  };
}

module.exports = validateWorkshop;
