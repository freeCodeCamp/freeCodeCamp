function getAllAcceptedMimeTypes(acceptHeader) {
  if (acceptHeader == null) {
    return [];
  }
  const accepted = [];
  for (const part of acceptHeader.split(",")) {
    const [type, ...params] = part.split(";").map((v) => v.trim());
    let quality = 1;
    let parameterCount = 0;
    for (const param of params) {
      const [key, value] = param.split("=").map((v) => v.trim());
      if (key === "q") {
        quality = Number(value);
      } else {
        parameterCount++;
      }
    }
    if (quality === 0) {
      continue;
    }
    const [mediaType, mediaSubtype] = type.split("/");
    const specificity = mediaType === "*" ? 0 : mediaSubtype === "*" ? 1 : 2;
    accepted.push({ type, quality, specificity, parameterCount });
  }
  if (!accepted.length) {
    return [];
  }
  return accepted.sort((left, right) => {
    if (right.quality !== left.quality) {
      return right.quality - left.quality;
    }
    if (right.specificity !== left.specificity) {
      return right.specificity - left.specificity;
    }
    return right.parameterCount - left.parameterCount;
  }).map((entry) => entry.type);
}
export {
  getAllAcceptedMimeTypes
};
//# sourceMappingURL=getAllAcceptedMimeTypes.mjs.map