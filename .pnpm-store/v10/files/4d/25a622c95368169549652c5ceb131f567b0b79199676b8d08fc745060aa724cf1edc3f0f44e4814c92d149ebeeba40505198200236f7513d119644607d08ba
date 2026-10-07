"use strict";

exports.__esModule = true;
exports.generatePageTree = generatePageTree;
exports.generateSliceTree = generateSliceTree;
function generatePageTree(collections, LIMIT = 8) {
  const SSGIterator = collections.SSG.values();
  const DSGIterator = collections.DSG.values();
  const SSRIterator = collections.SSR.values();
  const FNIterator = collections.FN.values();
  const SSGPages = generateLineUntilLimit(SSGIterator, ` `, LIMIT / 4, collections.SSG.size);
  const DSGPages = generateLineUntilLimit(DSGIterator, `D`, LIMIT / 4, collections.DSG.size);
  const SSRPages = generateLineUntilLimit(SSRIterator, `∞`, LIMIT / 4, collections.SSR.size);
  const FNPages = generateLineUntilLimit(FNIterator, `λ`, LIMIT / 4, collections.FN.size);
  return SSGPages.concat(DSGPages).concat(SSRPages).concat(FNPages);
}
function generateSliceTree(slices, LIMIT = 8) {
  const slicesIterator = slices.values();
  return generateLineUntilLimit(slicesIterator, ` `, LIMIT / 4, slices.size);
}
function generateLineUntilLimit(iterator, symbol, limit, max) {
  const output = [];
  for (let item = iterator.next(); !item.done && output.length < limit; item = iterator.next()) {
    output.push({
      text: item.value,
      symbol
    });
  }
  if (output.length < max) {
    output[output.length - 1].text = `...${max - output.length + 1} more pages available`;
  }
  return output;
}