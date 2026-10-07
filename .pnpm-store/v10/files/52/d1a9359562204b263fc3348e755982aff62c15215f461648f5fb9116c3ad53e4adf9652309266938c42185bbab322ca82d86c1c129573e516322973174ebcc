// @flow

export default function createDependencyLocation(
  start: interface {
    line: number,
    column: number,
  },
  specifier: string,
  lineOffset: number = 0,
  columnOffset: number = 0,
  // Imports are usually wrapped in quotes
  importWrapperLength: number = 2,
): {|
  end: {|column: number, line: number|},
  filePath: string,
  start: {|column: number, line: number|},
|} {
  return {
    filePath: specifier,
    start: {
      line: start.line + lineOffset,
      column: start.column + columnOffset,
    },
    end: {
      line: start.line + lineOffset,
      column:
        start.column +
        specifier.length -
        1 +
        importWrapperLength +
        columnOffset,
    },
  };
}
