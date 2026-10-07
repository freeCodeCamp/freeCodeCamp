"use strict";

exports.__esModule = true;
exports.stitchSliceForAPage = stitchSliceForAPage;
var path = _interopRequireWildcard(require("path"));
var fs = _interopRequireWildcard(require("fs-extra"));
var _pageHtml = require("gatsby-core-utils/page-html");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ensureExpectedType(maybeType) {
  if (maybeType === `start` || maybeType === `end`) {
    return maybeType;
  } else {
    throw new Error(`Unexpected type: ${maybeType}. Expected "start" or "end"`);
  }
}
async function stitchSlices(htmlString, publicDir) {
  let previousStart = undefined;
  let processedHTML = ``;
  let cursor = 0;
  async function getSliceContent(sliceHtmlName) {
    return fs.readFile(path.join(publicDir, `_gatsby`, `slices`, `${sliceHtmlName}.html`), `utf-8`);
  }
  for (const match of htmlString.matchAll(/(<slice-(?<startOrEndElementOpenening>start|end)\s[^>]*id="(?<idElement>[^"]+)"[^>]*><\/slice-(?<startOrEndElementClosing>[^>]+)>|<!-- slice-(?<startOrEndComment>start|end) id="(?<idComment>[^"]+)" -->)/g)) {
    if (!match.groups) {
      throw new Error(`Invariant: [stitching slices] Capturing groups should be defined`);
    }
    if (typeof match.index !== `number`) {
      throw new Error(`Invariant: [stitching slices] There is no location of a match when stitching slices`);
    }
    if (match.groups.startOrEndElementOpenening && match.groups.startOrEndElementOpenening !== match.groups.startOrEndElementClosing) {
      throw new Error(`Invariant: [stitching slices] start and end tags should be the same. Got: Start: ${match.groups.startOrEndElementOpenening} End: ${match.groups.startOrEndElementClosing}`);
    }
    const meta = {
      index: match.index,
      end: match.index + match[0].length,
      ...(match.groups.startOrEndElementOpenening ? {
        syntax: `element`,
        // can discard this field
        id: match.groups.idElement,
        type: ensureExpectedType(match.groups.startOrEndElementOpenening)
      } : {
        syntax: `comment`,
        // can discard this field
        id: match.groups.idComment,
        type: ensureExpectedType(match.groups.startOrEndComment)
      })
    };
    if (meta.type === `start`) {
      if (previousStart) {
        // if we are already in a slice, we will replace everything until the outer slice end
        // so we just ignore those
        continue;
      }
      const newCursor = meta.end;
      processedHTML += htmlString.substring(cursor, meta.index) + `<!-- slice-start id="${meta.id}" -->`;
      cursor = newCursor;
      previousStart = meta;
    } else if (meta.type === `end`) {
      if (!previousStart) {
        throw new Error(`Invariant: [stitching slices] There was no start tag, but close tag was found`);
      }
      if (previousStart.id !== meta.id) {
        // it's possible to have nested slices - we want to handle just the most outer slice
        // as stitching it in will recursively handle nested slices as well
        continue;
      }
      processedHTML += `${await stitchSlices(await getSliceContent(meta.id), publicDir)}<!-- slice-end id="${meta.id}" -->`;
      cursor = meta.end;
      previousStart = undefined;
    }
  }
  if (previousStart) {
    throw new Error(`Invariant: [stitching slices] There was start tag, but no close tag was found`);
  }

  // get rest of the html
  processedHTML += htmlString.substring(cursor);
  return processedHTML;
}
async function stitchSliceForAPage({
  pagePath,
  publicDir
}) {
  const htmlFilePath = (0, _pageHtml.generateHtmlPath)(publicDir, pagePath);
  const html = await fs.readFile(htmlFilePath, `utf-8`);
  const processedHTML = await stitchSlices(html, publicDir);
  if (html !== processedHTML) {
    await fs.writeFile(htmlFilePath, processedHTML);
  }
}
//# sourceMappingURL=stitching.js.map