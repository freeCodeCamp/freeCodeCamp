function isContentMedia(part) {
  if (!part || typeof part !== "object") return false;
  return isContentMediaSource(part) || hasInlineData(part) || hasImageUrl(part) || hasInputAudio(part) || hasFileData(part) || hasMediaTypeData(part) || hasVercelFileData(part) || hasVercelImageData(part) || hasBlobOrBase64Type(part) || hasB64Json(part) || hasImageGenerationResult(part) || hasDataUri(part);
}
function hasImageUrl(part) {
  if (!("image_url" in part)) return false;
  if (typeof part.image_url === "string") return part.image_url.startsWith("data:");
  return hasNestedImageUrl(part);
}
function hasNestedImageUrl(part) {
  return "image_url" in part && !!part.image_url && typeof part.image_url === "object" && "url" in part.image_url && typeof part.image_url.url === "string" && part.image_url.url.startsWith("data:");
}
function isContentMediaSource(part) {
  return "type" in part && typeof part.type === "string" && "source" in part && isContentMedia(part.source);
}
function hasInlineData(part) {
  return "inlineData" in part && !!part.inlineData && typeof part.inlineData === "object" && "data" in part.inlineData && typeof part.inlineData.data === "string";
}
function hasInputAudio(part) {
  return "type" in part && part.type === "input_audio" && "input_audio" in part && !!part.input_audio && typeof part.input_audio === "object" && "data" in part.input_audio && typeof part.input_audio.data === "string";
}
function hasFileData(part) {
  return "type" in part && part.type === "file" && "file" in part && !!part.file && typeof part.file === "object" && "file_data" in part.file && typeof part.file.file_data === "string";
}
function hasMediaTypeData(part) {
  return "media_type" in part && typeof part.media_type === "string" && "data" in part;
}
function hasVercelFileData(part) {
  return "type" in part && part.type === "file" && "mediaType" in part && typeof part.mediaType === "string" && "data" in part && typeof part.data === "string" && // Only strip base64/binary data, not HTTP/HTTPS URLs which should be preserved as references
  !part.data.startsWith("http://") && !part.data.startsWith("https://");
}
function hasVercelImageData(part) {
  return "type" in part && part.type === "image" && "image" in part && typeof part.image === "string" && // Only strip base64/data URIs, not HTTP/HTTPS URLs which should be preserved as references
  !part.image.startsWith("http://") && !part.image.startsWith("https://");
}
function hasBlobOrBase64Type(part) {
  return "type" in part && (part.type === "blob" || part.type === "base64");
}
function hasB64Json(part) {
  return "b64_json" in part;
}
function hasImageGenerationResult(part) {
  return "type" in part && "result" in part && part.type === "image_generation";
}
function hasDataUri(part) {
  return "uri" in part && typeof part.uri === "string" && part.uri.startsWith("data:");
}
const REMOVED_STRING = "[Blob substitute]";
const MEDIA_FIELDS = ["image_url", "data", "content", "b64_json", "result", "uri", "image"];
function stripInlineMediaFromSingleMessage(part) {
  const strip = { ...part };
  if (isContentMedia(strip.source)) {
    strip.source = stripInlineMediaFromSingleMessage(strip.source);
  }
  if (hasInlineData(part)) {
    strip.inlineData = { ...part.inlineData, data: REMOVED_STRING };
  }
  if (hasNestedImageUrl(part)) {
    strip.image_url = { ...part.image_url, url: REMOVED_STRING };
  }
  if (hasInputAudio(part)) {
    strip.input_audio = { ...part.input_audio, data: REMOVED_STRING };
  }
  if (hasFileData(part)) {
    strip.file = { ...part.file, file_data: REMOVED_STRING };
  }
  for (const field of MEDIA_FIELDS) {
    if (typeof strip[field] === "string") strip[field] = REMOVED_STRING;
  }
  return strip;
}

export { isContentMedia, stripInlineMediaFromSingleMessage };
//# sourceMappingURL=mediaStripping.js.map
