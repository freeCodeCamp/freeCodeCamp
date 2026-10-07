import { StringReader, StringWriter } from './strings';
import { comma, decodeInteger, encodeInteger, hasMoreVlq, semicolon } from './vlq';

const EMPTY: any[] = [];

type Line = number;
type Column = number;
type Kind = number;
type Name = number;
type Var = number;
type SourcesIndex = number;
type ScopesIndex = number;

type Mix<A, B, O> = (A & O) | (B & O);

export type OriginalScope = Mix<
  [Line, Column, Line, Column, Kind],
  [Line, Column, Line, Column, Kind, Name],
  { vars: Var[] }
>;

export type GeneratedRange = Mix<
  [Line, Column, Line, Column],
  [Line, Column, Line, Column, SourcesIndex, ScopesIndex],
  {
    callsite: CallSite | null;
    bindings: Binding[];
    isScope: boolean;
  }
>;
export type CallSite = [SourcesIndex, Line, Column];
type Binding = BindingExpressionRange[];
export type BindingExpressionRange = [Name] | [Name, Line, Column];

export function decodeOriginalScopes(input: string): OriginalScope[] {
  const { length } = input;
  const reader = new StringReader(input);
  const scopes: OriginalScope[] = [];
  const stack: OriginalScope[] = [];
  let line = 0;

  for (; reader.pos < length; reader.pos++) {
    line = decodeInteger(reader, line);
    const column = decodeInteger(reader, 0);

    if (!hasMoreVlq(reader, length)) {
      const last = stack.pop()!;
      last[2] = line;
      last[3] = column;
      continue;
    }

    const kind = decodeInteger(reader, 0);
    const fields = decodeInteger(reader, 0);
    const hasName = fields & 0b0001;

    const scope: OriginalScope = (
      hasName ? [line, column, 0, 0, kind, decodeInteger(reader, 0)] : [line, column, 0, 0, kind]
    ) as OriginalScope;

    let vars: Var[] = EMPTY;
    if (hasMoreVlq(reader, length)) {
      vars = [];
      do {
        const varsIndex = decodeInteger(reader, 0);
        vars.push(varsIndex);
      } while (hasMoreVlq(reader, length));
    }
    scope.vars = vars;

    scopes.push(scope);
    stack.push(scope);
  }

  return scopes;
}

export function encodeOriginalScopes(scopes: OriginalScope[]): string {
  const writer = new StringWriter();

  for (let i = 0; i < scopes.length; ) {
    i = _encodeOriginalScopes(scopes, i, writer, [0]);
  }

  return writer.flush();
}

function _encodeOriginalScopes(
  scopes: OriginalScope[],
  index: number,
  writer: StringWriter,
  state: [
    number, // GenColumn
  ],
): number {
  const scope = scopes[index];
  const { 0: startLine, 1: startColumn, 2: endLine, 3: endColumn, 4: kind, vars } = scope;

  if (index > 0) writer.write(comma);

  state[0] = encodeInteger(writer, startLine, state[0]);
  encodeInteger(writer, startColumn, 0);
  encodeInteger(writer, kind, 0);

  const fields = scope.length === 6 ? 0b0001 : 0;
  encodeInteger(writer, fields, 0);
  if (scope.length === 6) encodeInteger(writer, scope[5], 0);

  for (const v of vars) {
    encodeInteger(writer, v, 0);
  }

  for (index++; index < scopes.length; ) {
    const next = scopes[index];
    const { 0: l, 1: c } = next;
    if (l > endLine || (l === endLine && c >= endColumn)) {
      break;
    }
    index = _encodeOriginalScopes(scopes, index, writer, state);
  }

  writer.write(comma);
  state[0] = encodeInteger(writer, endLine, state[0]);
  encodeInteger(writer, endColumn, 0);

  return index;
}

export function decodeGeneratedRanges(input: string): GeneratedRange[] {
  const { length } = input;
  const reader = new StringReader(input);
  const ranges: GeneratedRange[] = [];
  const stack: GeneratedRange[] = [];

  let genLine = 0;
  let definitionSourcesIndex = 0;
  let definitionScopeIndex = 0;
  let callsiteSourcesIndex = 0;
  let callsiteLine = 0;
  let callsiteColumn = 0;
  let bindingLine = 0;
  let bindingColumn = 0;

  do {
    const semi = reader.indexOf(';');
    let genColumn = 0;

    for (; reader.pos < semi; reader.pos++) {
      genColumn = decodeInteger(reader, genColumn);

      if (!hasMoreVlq(reader, semi)) {
        const last = stack.pop()!;
        last[2] = genLine;
        last[3] = genColumn;
        continue;
      }

      const fields = decodeInteger(reader, 0);
      const hasDefinition = fields & 0b0001;
      const hasCallsite = fields & 0b0010;
      const hasScope = fields & 0b0100;

      let callsite: CallSite | null = null;
      let bindings: Binding[] = EMPTY;
      let range: GeneratedRange;
      if (hasDefinition) {
        const defSourcesIndex = decodeInteger(reader, definitionSourcesIndex);
        definitionScopeIndex = decodeInteger(
          reader,
          definitionSourcesIndex === defSourcesIndex ? definitionScopeIndex : 0,
        );

        definitionSourcesIndex = defSourcesIndex;
        range = [genLine, genColumn, 0, 0, defSourcesIndex, definitionScopeIndex] as GeneratedRange;
      } else {
        range = [genLine, genColumn, 0, 0] as GeneratedRange;
      }

      range.isScope = !!hasScope;

      if (hasCallsite) {
        const prevCsi = callsiteSourcesIndex;
        const prevLine = callsiteLine;
        callsiteSourcesIndex = decodeInteger(reader, callsiteSourcesIndex);
        const sameSource = prevCsi === callsiteSourcesIndex;
        callsiteLine = decodeInteger(reader, sameSource ? callsiteLine : 0);
        callsiteColumn = decodeInteger(
          reader,
          sameSource && prevLine === callsiteLine ? callsiteColumn : 0,
        );

        callsite = [callsiteSourcesIndex, callsiteLine, callsiteColumn];
      }
      range.callsite = callsite;

      if (hasMoreVlq(reader, semi)) {
        bindings = [];
        do {
          bindingLine = genLine;
          bindingColumn = genColumn;
          const expressionsCount = decodeInteger(reader, 0);
          let expressionRanges: BindingExpressionRange[];
          if (expressionsCount < -1) {
            expressionRanges = [[decodeInteger(reader, 0)]];
            for (let i = -1; i > expressionsCount; i--) {
              const prevBl = bindingLine;
              bindingLine = decodeInteger(reader, bindingLine);
              bindingColumn = decodeInteger(reader, bindingLine === prevBl ? bindingColumn : 0);
              const expression = decodeInteger(reader, 0);
              expressionRanges.push([expression, bindingLine, bindingColumn]);
            }
          } else {
            expressionRanges = [[expressionsCount]];
          }
          bindings.push(expressionRanges);
        } while (hasMoreVlq(reader, semi));
      }
      range.bindings = bindings;

      ranges.push(range);
      stack.push(range);
    }

    genLine++;
    reader.pos = semi + 1;
  } while (reader.pos < length);

  return ranges;
}

export function encodeGeneratedRanges(ranges: GeneratedRange[]): string {
  if (ranges.length === 0) return '';

  const writer = new StringWriter();

  for (let i = 0; i < ranges.length; ) {
    i = _encodeGeneratedRanges(ranges, i, writer, [0, 0, 0, 0, 0, 0, 0]);
  }

  return writer.flush();
}

function _encodeGeneratedRanges(
  ranges: GeneratedRange[],
  index: number,
  writer: StringWriter,
  state: [
    number, // GenLine
    number, // GenColumn
    number, // DefSourcesIndex
    number, // DefScopesIndex
    number, // CallSourcesIndex
    number, // CallLine
    number, // CallColumn
  ],
): number {
  const range = ranges[index];
  const {
    0: startLine,
    1: startColumn,
    2: endLine,
    3: endColumn,
    isScope,
    callsite,
    bindings,
  } = range;

  if (state[0] < startLine) {
    catchupLine(writer, state[0], startLine);
    state[0] = startLine;
    state[1] = 0;
  } else if (index > 0) {
    writer.write(comma);
  }

  state[1] = encodeInteger(writer, range[1], state[1]);

  const fields =
    (range.length === 6 ? 0b0001 : 0) | (callsite ? 0b0010 : 0) | (isScope ? 0b0100 : 0);
  encodeInteger(writer, fields, 0);

  if (range.length === 6) {
    const { 4: sourcesIndex, 5: scopesIndex } = range;
    if (sourcesIndex !== state[2]) {
      state[3] = 0;
    }
    state[2] = encodeInteger(writer, sourcesIndex, state[2]);
    state[3] = encodeInteger(writer, scopesIndex, state[3]);
  }

  if (callsite) {
    const { 0: sourcesIndex, 1: callLine, 2: callColumn } = range.callsite!;
    if (sourcesIndex !== state[4]) {
      state[5] = 0;
      state[6] = 0;
    } else if (callLine !== state[5]) {
      state[6] = 0;
    }
    state[4] = encodeInteger(writer, sourcesIndex, state[4]);
    state[5] = encodeInteger(writer, callLine, state[5]);
    state[6] = encodeInteger(writer, callColumn, state[6]);
  }

  if (bindings) {
    for (const binding of bindings) {
      if (binding.length > 1) encodeInteger(writer, -binding.length, 0);
      const expression = binding[0][0];
      encodeInteger(writer, expression, 0);
      let bindingStartLine = startLine;
      let bindingStartColumn = startColumn;
      for (let i = 1; i < binding.length; i++) {
        const expRange = binding[i];
        bindingStartLine = encodeInteger(writer, expRange[1]!, bindingStartLine);
        bindingStartColumn = encodeInteger(writer, expRange[2]!, bindingStartColumn);
        encodeInteger(writer, expRange[0]!, 0);
      }
    }
  }

  for (index++; index < ranges.length; ) {
    const next = ranges[index];
    const { 0: l, 1: c } = next;
    if (l > endLine || (l === endLine && c >= endColumn)) {
      break;
    }
    index = _encodeGeneratedRanges(ranges, index, writer, state);
  }

  if (state[0] < endLine) {
    catchupLine(writer, state[0], endLine);
    state[0] = endLine;
    state[1] = 0;
  } else {
    writer.write(comma);
  }
  state[1] = encodeInteger(writer, endColumn, state[1]);

  return index;
}

function catchupLine(writer: StringWriter, lastLine: number, line: number) {
  do {
    writer.write(semicolon);
  } while (++lastLine < line);
}
