/**
 * Parses inline style to object.
 *
 * @example
 *
 * ```ts
 * import parse from 'style-to-object';
 * parse('line-height: 42;'); // { 'line-height': '42' }
 * ```
 */
export default function StyleToObject(
  style: string,
  iterator?: Iterator
): { [name: string]: string } | null;

interface Position {
  start: {
    line: number;
    column: number;
  };
  end: {
    line: number;
    column: number;
  };
  source?: string;
}

export interface Declaration {
  type: 'declaration';
  property: string;
  value: string;
  position: Position;
}

export interface Comment {
  type: 'comment';
  comment: string;
  position: Position;
}

type Iterator = (
  property: string,
  value: string,
  declaration: Declaration | Comment
) => void;
