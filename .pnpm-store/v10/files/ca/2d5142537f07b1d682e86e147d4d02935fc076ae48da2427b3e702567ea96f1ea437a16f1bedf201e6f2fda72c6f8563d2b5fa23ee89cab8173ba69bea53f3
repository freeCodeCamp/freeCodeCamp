// @ts-check

import { addErrorContext } from "../helpers/helpers.cjs";
import { getDescendantsByType } from "../helpers/micromark-helpers.cjs";
import { getReferenceLinkImageData, filterByTypesCached } from "./cache.mjs";

/** @typedef {import("markdownlint").MicromarkToken} MicromarkToken */

/** @type {import("markdownlint").Rule} */
export default {
  "names": [ "MD042", "no-empty-links" ],
  "description": "No empty links",
  "tags": [ "links" ],
  "parser": "micromark",
  "function": function MD042(params, onError) {
    const { definitions } = getReferenceLinkImageData();
    const isReferenceDefinitionHash = (/** @type {MicromarkToken} */ token) => {
      const definition = definitions.get(token.text.trim());
      return Boolean(definition && (definition[1] === "#"));
    };
    const links = filterByTypesCached([ "link" ]);
    for (const link of links) {
      const labelText = getDescendantsByType(link, [ "label", "labelText" ]);
      const reference = getDescendantsByType(link, [ "reference" ]);
      const resource = getDescendantsByType(link, [ "resource" ]);
      const referenceString = getDescendantsByType(reference, [ "referenceString" ]);
      const resourceDestinationString = getDescendantsByType(resource, [ "resourceDestination", [ "resourceDestinationLiteral", "resourceDestinationRaw" ], "resourceDestinationString" ]);
      const hasLabelText = labelText.length > 0;
      const hasReference = reference.length > 0;
      const hasResource = resource.length > 0;
      const hasReferenceString = referenceString.length > 0;
      const hasResourceDestinationString = resourceDestinationString.length > 0;
      let error = false;
      if (
        hasLabelText &&
        ((!hasReference && !hasResource) || (hasReference && !hasReferenceString))
      ) {
        error = isReferenceDefinitionHash(labelText[0]);
      } else if (hasReferenceString && !hasResourceDestinationString) {
        error = isReferenceDefinitionHash(referenceString[0]);
      } else if (!hasReferenceString && hasResourceDestinationString) {
        error = (resourceDestinationString[0].text.trim() === "#");
      } else if (!hasReferenceString && !hasResourceDestinationString) {
        error = true;
      }
      if (error) {
        addErrorContext(
          onError,
          link.startLine,
          link.text,
          undefined,
          undefined,
          [ link.startColumn, link.endColumn - link.startColumn ]
        );
      }
    }
  }
};
