// @ts-check

import { addError, ellipsify } from "../helpers/helpers.cjs";
import { getReferenceLinkImageData } from "./cache.mjs";

const linkReferenceDefinitionRe = /^ {0,3}\[([^\]]*[^\\])\]:/;

/** @type {import("markdownlint").Rule} */
export default {
  "names": [ "MD053", "link-image-reference-definitions" ],
  "description": "Link and image reference definitions should be needed",
  "tags": [ "images", "links" ],
  "parser": "none",
  "function": function MD053(params, onError) {
    const ignored = new Set(params.config.ignored_definitions || [ "//" ]);
    const lines = params.lines;
    const { references, shortcuts, definitions, duplicateDefinitions } =
      getReferenceLinkImageData();
    const singleLineDefinition = (/** @type {string} */ line) => (
      line.replace(linkReferenceDefinitionRe, "").trim().length > 0
    );
    const deleteFixInfo = {
      "deleteCount": -1
    };
    // Look for unused link references (unreferenced by any link/image)
    for (const definition of definitions.entries()) {
      const [ label, [ lineIndex ] ] = definition;
      if (
        !ignored.has(label) &&
        !references.has(label) &&
        !shortcuts.has(label)
      ) {
        const line = lines[lineIndex];
        addError(
          onError,
          lineIndex + 1,
          `Unused link or image reference definition: "${label}"`,
          ellipsify(line),
          [ 1, line.length ],
          singleLineDefinition(line) ? deleteFixInfo : undefined
        );
      }
    }
    // Look for duplicate link references (defined more than once)
    for (const duplicateDefinition of duplicateDefinitions) {
      const [ label, lineIndex ] = duplicateDefinition;
      if (!ignored.has(label)) {
        const line = lines[lineIndex];
        addError(
          onError,
          lineIndex + 1,
          `Duplicate link or image reference definition: "${label}"`,
          ellipsify(line),
          [ 1, line.length ],
          singleLineDefinition(line) ? deleteFixInfo : undefined
        );
      }
    }
  }
};
