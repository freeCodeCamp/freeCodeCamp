// @ts-check

import { addErrorContext, nextLinesRe } from "../helpers/helpers.cjs";
import { getDescendantsByType } from "../helpers/micromark-helpers.cjs";
import { getReferenceLinkImageData, filterByTypesCached } from "./cache.mjs";

const backslashEscapeRe = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g;
const removeBackslashEscapes = (/** @type {string} **/ text) => text.replace(backslashEscapeRe, "$1");
const autolinkDisallowedRe = /[ <>]/;
const autolinkAble = (/** @type {string} */ destination) => {
  try {
    // eslint-disable-next-line no-new
    new URL(destination);
  } catch {
    // Not an absolute URL
    return false;
  }
  return !autolinkDisallowedRe.test(destination);
};

/** @type {import("markdownlint").Rule} */
export default {
  "names": [ "MD054", "link-image-style" ],
  "description": "Link and image style",
  "tags": [ "images", "links" ],
  "parser": "micromark",
  "function": (params, onError) => {
    const config = params.config;
    const autolink = (config.autolink === undefined) || !!config.autolink;
    const inline = (config.inline === undefined) || !!config.inline;
    const full = (config.full === undefined) || !!config.full;
    const collapsed = (config.collapsed === undefined) || !!config.collapsed;
    const shortcut = (config.shortcut === undefined) || !!config.shortcut;
    const urlInline = (config.url_inline === undefined) || !!config.url_inline;
    if (autolink && inline && full && collapsed && shortcut && urlInline) {
      // Everything allowed, nothing to check
      return;
    }
    const { definitions } = getReferenceLinkImageData();
    const links = filterByTypesCached([ "autolink", "image", "link" ]);
    for (const link of links) {
      let label = null;
      let destination = null;
      const {
        endColumn, endLine, startColumn, startLine, text, type
      } = link;
      const image = (type === "image");
      let isError = false;
      if (type === "autolink") {
        // link kind is an autolink
        destination = getDescendantsByType(link, [ [ "autolinkEmail", "autolinkProtocol" ] ])[0]?.text;
        label = destination;
        isError = !autolink && Boolean(destination);
      } else {
        // link type is "image" or "link"
        label = getDescendantsByType(link, [ "label", "labelText" ])[0].text;
        destination =
          getDescendantsByType(link, [ "resource", "resourceDestination", [ "resourceDestinationLiteral", "resourceDestinationRaw" ], "resourceDestinationString" ])[0]?.text;
        if (destination) {
          // link kind is an inline link
          const title = getDescendantsByType(link, [ "resource", "resourceTitle", "resourceTitleString" ])[0]?.text;
          isError = !inline || (
            !urlInline &&
            autolink &&
            !image &&
            !title &&
            (label === destination) &&
            autolinkAble(destination)
          );
        } else {
          // link kind is a full/collapsed/shortcut reference link
          const isShortcut = getDescendantsByType(link, [ "reference" ]).length === 0;
          const referenceString = getDescendantsByType(link, [ "reference", "referenceString" ])[0]?.text;
          const isCollapsed = (referenceString === undefined);
          const definition = definitions.get(referenceString || label);
          destination = (definition && definition[1]) || "";
          isError = Boolean(
            destination &&
            (isShortcut ? !shortcut : (isCollapsed ? !collapsed : !full))
          );
        }
      }
      if (isError) {
        let range = undefined;
        let fixInfo = undefined;
        if (startLine === endLine) {
          range = [ startColumn, endColumn - startColumn ];
          let insertText = null;
          const canInline = (inline && label);
          const canAutolink = (autolink && !image && autolinkAble(destination));
          if (canInline && (urlInline || !canAutolink)) {
            // Most useful form
            const prefix = (image ? "!" : "");
            // @ts-ignore
            const escapedLabel = label.replace(/[[\]]/g, "\\$&");
            const escapedDestination = destination.replace(/[()]/g, "\\$&");
            insertText = `${prefix}[${escapedLabel}](${escapedDestination})`;
          } else if (canAutolink) {
            // Simplest form
            insertText = `<${removeBackslashEscapes(destination)}>`;
          }
          if (insertText) {
            fixInfo = {
              "editColumn": range[0],
              insertText,
              "deleteCount": range[1]
            };
          }
        }
        addErrorContext(
          onError,
          startLine,
          text.replace(nextLinesRe, ""),
          undefined,
          undefined,
          range,
          fixInfo
        );
      }
    }
  }
};
