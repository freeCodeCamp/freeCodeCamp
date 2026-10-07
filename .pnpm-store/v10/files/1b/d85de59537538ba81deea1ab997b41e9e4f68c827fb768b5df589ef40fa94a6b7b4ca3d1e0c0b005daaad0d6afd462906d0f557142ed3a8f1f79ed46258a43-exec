// @flow
import getFunctionName from './getFunctionName';

export default function serializeTakePattern(pattern: TakePattern): string {
  if (Array.isArray(pattern)) {
    return `[${pattern.join(', ')}]`;
  }

  if (typeof pattern === 'function') {
    return `[Function: ${getFunctionName(pattern)}]`;
  }

  return pattern;
}
