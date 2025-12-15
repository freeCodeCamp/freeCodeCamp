const { findAll } = require('./utils/find-all');
const { isMarker } = require('./utils/get-section');

const FCC_EDITABLE_REGION = '--fcc-editable-region--';
const SOLITIONS_HEADER = '--solutions--';

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
        `Validation error: expected exactly 2 occurrences of --fcc-editable-region-- but found ${allEditableMarkers.length}.`
      );
    }

    // 2) Ensure solutions header only in last step.
    for (let i = 0; i < allMarkers.length; i++) {
      const markerText = allMarkers[i].children[0].value;
      if (markerText === SOLITIONS_HEADER && i !== allMarkers.length - 1) {
        throw new Error(
          `Validation error: "Solutions" header appears before the last step. The Solutions header must only appear in the final step.`
        );
      } else if (
        markerText !== SOLITIONS_HEADER &&
        i === allMarkers.length - 1
      ) {
        throw new Error(
          `Validation error: Last step must be the "Solutions" header. Found "${markerText}" instead.`
        );
      }
    }

    return;
  };
}

module.exports = validateWorkshop;
