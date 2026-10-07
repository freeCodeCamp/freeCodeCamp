import mimeDB from "mime-db";

const extensionMap = new Map<string, string>();
const entries = Object.entries(mimeDB);
for (const [mimetype, entry] of entries) {
  const extensions = entry.extensions;
  if (extensions?.length) {
    for (const ext of extensions) {
      extensionMap.set(ext, mimetype);
    }
  }
}

export const EXTENSIONS_MAP = extensionMap;
