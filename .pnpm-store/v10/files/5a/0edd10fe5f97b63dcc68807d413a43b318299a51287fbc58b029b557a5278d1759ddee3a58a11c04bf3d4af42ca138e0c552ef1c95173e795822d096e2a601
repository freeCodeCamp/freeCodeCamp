// @flow
import path from 'path';
import url from 'url';

export default function relativeUrl(from: string, to: string): string {
  return url.format(url.parse(path.relative(from, to)));
}
