"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.constructPageDataString = constructPageDataString;
exports.getPagePathFromPageDataPath = getPagePathFromPageDataPath;
exports.reverseFixedPagePath = reverseFixedPagePath;
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
function traverseSlicesUsedByTemplates(pagePath, componentPath, overrideSlices, slicesUsedByTemplates, slices, formattedSlices = {}, handledSlices = new Set()) {
  if (handledSlices.has(componentPath)) {
    return null;
  } else {
    handledSlices.add(componentPath);
  }
  const slicesUsedByComponent = slicesUsedByTemplates.get(componentPath);
  if (!slicesUsedByComponent) {
    return null;
  }
  for (const [sliceSlot, sliceConf] of Object.entries(slicesUsedByComponent)) {
    let concreteSliceForSliceSlot = sliceSlot;
    if (overrideSlices && overrideSlices[sliceSlot]) {
      concreteSliceForSliceSlot = overrideSlices[sliceSlot];
    }
    const slice = slices.get(concreteSliceForSliceSlot);
    if (!slice) {
      if (sliceConf.allowEmpty) {
        continue;
      } else {
        const message = `Could not find slice "${concreteSliceForSliceSlot}" used by page "${pagePath}". ` + `Please check your createPages in your gatsby-node to verify this ` + `is the correct name or set allowEmpty to true.`;
        _reporter.default.panicOnBuild(new Error(message));
        continue;
      }
    }
    formattedSlices[sliceSlot] = concreteSliceForSliceSlot;

    // recursively repeat for found slice to find all nested slices
    traverseSlicesUsedByTemplates(pagePath, slice.componentPath, overrideSlices, slicesUsedByTemplates, slices, formattedSlices, handledSlices);
  }
  return formattedSlices;
}
function constructPageDataString({
  componentChunkName,
  componentPath,
  matchPath,
  path: pagePath,
  staticQueryHashes,
  manifestId,
  slices: overrideSlices
}, result, slicesUsedByTemplates, slices) {
  let body = `{` + `"componentChunkName":"${componentChunkName}",` + (pagePath ? `"path":${JSON.stringify(pagePath)},` : ``) + `"result":${result},` + `"staticQueryHashes":${JSON.stringify(staticQueryHashes)}`;
  if ("5" === `5` && process.env.GATSBY_SLICES) {
    const formattedSlices = traverseSlicesUsedByTemplates(pagePath, componentPath, overrideSlices, slicesUsedByTemplates, slices);
    if (formattedSlices) {
      body += `,"slicesMap":${JSON.stringify(formattedSlices)}`;
    }
  }
  if (matchPath) {
    body += `,"matchPath":"${matchPath}"`;
  }
  if (manifestId) {
    body += `,"manifestId":"${manifestId}"`;
  }
  body += `}`;
  return body;
}
function reverseFixedPagePath(pageDataRequestPath) {
  return pageDataRequestPath === `index` ? `/` : pageDataRequestPath;
}
function getPagePathFromPageDataPath(pageDataPath) {
  const matches = pageDataPath.matchAll(/^\/?page-data\/(.+)\/page-data.json$/gm);
  for (const [, requestedPagePath] of matches) {
    return reverseFixedPagePath(requestedPagePath);
  }
  return null;
}
//# sourceMappingURL=page-data-helpers.js.map