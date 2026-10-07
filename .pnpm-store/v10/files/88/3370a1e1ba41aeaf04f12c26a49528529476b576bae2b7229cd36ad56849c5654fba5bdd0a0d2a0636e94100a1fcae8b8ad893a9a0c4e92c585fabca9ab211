"use strict";

exports.__esModule = true;
exports.getSSRChunkHashes = getSSRChunkHashes;
function getHashes(chunkGroup, compilation, hashes = [], visitedChunkGroups = new Set()) {
  if (visitedChunkGroups.has(chunkGroup)) {
    return hashes;
  }
  visitedChunkGroups.add(chunkGroup);
  for (const chunk of chunkGroup.chunks) {
    if (!chunk.hash) {
      throw new Error(`Invariant: [generating template hashes] Chunk doesn't have hash`);
    }
    hashes.push(chunk.hash);
  }
  for (const childChunkGroup of chunkGroup.childrenIterable) {
    const isNotImportedByAsyncRequires = childChunkGroup.origins.every(origin => !origin.module || !origin.module.identifier().includes(`async-requires`));
    if (isNotImportedByAsyncRequires) {
      getHashes(childChunkGroup, compilation, hashes, visitedChunkGroups);
    }
  }
  return hashes;
}
function getSSRChunkHashes({
  stats,
  components
}) {
  const templateHashes = {};
  const componentChunkNameToTemplatePath = {};
  let renderPageHash = ``;
  components.forEach(component => {
    componentChunkNameToTemplatePath[component.componentChunkName] = component.componentPath;
  });
  for (const chunkGroup of stats.compilation.chunkGroups) {
    if (chunkGroup.name) {
      const concenatedChunksByName = getHashes(chunkGroup, stats.compilation).join(`--`);
      if (chunkGroup.name !== `render-page`) {
        const templatePath = componentChunkNameToTemplatePath[chunkGroup.name];
        if (!templatePath) {
          // additional chunk group can be created by lazy imports
          // we handle them by handling children chunk groups on top level ones
          continue;
        }
        templateHashes[templatePath] = concenatedChunksByName;
      } else {
        renderPageHash = concenatedChunksByName;
      }
    }
  }
  return {
    templateHashes,
    renderPageHash
  };
}
//# sourceMappingURL=get-ssr-chunk-hashes.js.map