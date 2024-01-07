export function getLines(contents: string, range?: number[]): string {
  if (!range) {
    return '';
  }

  const lines = contents.split('\n');
  const editableLines =
    range[1] <= range[0] ? [] : lines.slice(range[0], range[1] - 1);
  return editableLines.join('\n');
}
