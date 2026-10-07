Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const attributes = require('../../attributes.js');

function estimateSerializedSpanSizeInBytes(span) {
  let weight = 156;
  weight += span.name.length * 2;
  weight += attributes.estimateTypedAttributesSizeInBytes(span.attributes);
  if (span.links && span.links.length > 0) {
    const firstLink = span.links[0];
    const attributes$1 = firstLink?.attributes;
    const linkWeight = 100 + (attributes$1 ? attributes.estimateTypedAttributesSizeInBytes(attributes$1) : 0);
    weight += linkWeight * span.links.length;
  }
  return weight;
}

exports.estimateSerializedSpanSizeInBytes = estimateSerializedSpanSizeInBytes;
//# sourceMappingURL=estimateSize.js.map
