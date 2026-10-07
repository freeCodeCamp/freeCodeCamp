import { estimateTypedAttributesSizeInBytes } from '../../attributes.js';

function estimateSerializedSpanSizeInBytes(span) {
  let weight = 156;
  weight += span.name.length * 2;
  weight += estimateTypedAttributesSizeInBytes(span.attributes);
  if (span.links && span.links.length > 0) {
    const firstLink = span.links[0];
    const attributes = firstLink?.attributes;
    const linkWeight = 100 + (attributes ? estimateTypedAttributesSizeInBytes(attributes) : 0);
    weight += linkWeight * span.links.length;
  }
  return weight;
}

export { estimateSerializedSpanSizeInBytes };
//# sourceMappingURL=estimateSize.js.map
