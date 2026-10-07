// @ts-check

import { addErrorContext, addErrorDetailIf } from "../helpers/helpers.cjs";
import { getHeadingLevel, getHeadingText } from "../helpers/micromark-helpers.cjs";
import { filterByTypesCached } from "./cache.mjs";

/** @type {import("markdownlint").Rule} */
export default {
  "names": [ "MD043", "required-headings" ],
  "description": "Required heading structure",
  "tags": [ "headings" ],
  "parser": "micromark",
  "function": function MD043(params, onError) {
    const requiredHeadings = params.config.headings;
    if (!Array.isArray(requiredHeadings)) {
      // Nothing to check; avoid doing any work
      return;
    }
    const matchCase = params.config.match_case || false;
    let i = 0;
    let matchAny = false;
    let hasError = false;
    let anyHeadings = false;
    const getExpected = () => String(requiredHeadings[i++] || "[None]");
    const handleCase = (/** @type {string} */ str) => (matchCase ? str : str.toLowerCase());
    for (const heading of filterByTypesCached([ "atxHeading", "setextHeading" ])) {
      if (!hasError) {
        const headingText = getHeadingText(heading);
        const headingLevel = getHeadingLevel(heading);
        anyHeadings = true;
        const actual = `${"".padEnd(headingLevel, "#")} ${headingText}`;
        const expected = getExpected();
        if (expected === "*") {
          const nextExpected = getExpected();
          if (handleCase(nextExpected) !== handleCase(actual)) {
            matchAny = true;
            i--;
          }
        } else if (expected === "+") {
          matchAny = true;
        } else if (expected === "?") {
          // Allow current, match next
        } else if (handleCase(expected) === handleCase(actual)) {
          matchAny = false;
        } else if (matchAny) {
          i--;
        } else {
          addErrorDetailIf(
            onError,
            heading.startLine,
            expected,
            actual
          );
          hasError = true;
        }
      }
    }
    const extraHeadings = requiredHeadings.length - i;
    if (
      !hasError &&
      ((extraHeadings > 1) ||
        ((extraHeadings === 1) && (requiredHeadings[i] !== "*"))) &&
      (anyHeadings || !requiredHeadings.every((heading) => heading === "*"))
    ) {
      addErrorContext(
        onError,
        params.lines.length,
        requiredHeadings[i]
      );
    }
  }
};
