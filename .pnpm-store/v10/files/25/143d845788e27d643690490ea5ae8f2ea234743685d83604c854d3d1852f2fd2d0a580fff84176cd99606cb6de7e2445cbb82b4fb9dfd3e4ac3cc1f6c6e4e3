import resolveUri from '@jridgewell/resolve-uri';
import stripFilename from './strip-filename';

type Resolve = (source: string | null) => string;
export default function resolver(
  mapUrl: string | null | undefined,
  sourceRoot: string | undefined,
): Resolve {
  const from = stripFilename(mapUrl);
  // The sourceRoot is always treated as a directory, if it's not empty.
  // https://github.com/mozilla/source-map/blob/8cb3ee57/lib/util.js#L327
  // https://github.com/chromium/chromium/blob/da4adbb3/third_party/blink/renderer/devtools/front_end/sdk/SourceMap.js#L400-L401
  const prefix = sourceRoot ? sourceRoot + '/' : '';

  return (source) => resolveUri(prefix + (source || ''), from);
}
