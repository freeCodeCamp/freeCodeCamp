Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

function contentUnionToMessages(content, role = "user") {
  if (typeof content === "string") {
    return [{ role, content }];
  }
  if (Array.isArray(content)) {
    return content.flatMap((content2) => contentUnionToMessages(content2, role));
  }
  if (typeof content !== "object" || !content) return [];
  if ("role" in content && typeof content.role === "string") {
    return [content];
  }
  if ("parts" in content) {
    return [{ ...content, role }];
  }
  return [{ role, content }];
}

exports.contentUnionToMessages = contentUnionToMessages;
//# sourceMappingURL=utils.js.map
