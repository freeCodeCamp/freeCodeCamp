// @flow strict-local

export default function countLines(
  string: string,
  startIndex: number = 0,
): number {
  let lines = 1;
  for (let i = startIndex; i < string.length; i++) {
    if (string.charAt(i) === '\n') {
      lines++;
    }
  }

  return lines;
}
