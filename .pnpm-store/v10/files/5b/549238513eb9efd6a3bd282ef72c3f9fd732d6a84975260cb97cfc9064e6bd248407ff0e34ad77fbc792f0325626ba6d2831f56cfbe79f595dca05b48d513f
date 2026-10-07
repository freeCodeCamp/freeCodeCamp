# @mischnic/json-sourcemap

Generate positions for values in JSON and JSON5 strings.

Inspired by and mostly API-compatible with https://github.com/epoberezkin/json-source-map.

## Usage

```ts
type Position = {
  line: number;
  column: number;
  pos: number;
};

type Mapping =
  | {
      value: Position;
      valueEnd: Position;
    }
  | {
      value: Position;
      valueEnd: Position;
      key?: Position;
      keyEnd?: Position;
    };

export function parse(
  json: string,
  reviver?: (key: any, value: any) => any,
  options?: {
    tabWidth?: number;
    dialect?: "JSON5" | "JSON";
  }
): {
  data: any;
  pointers: Record<string, Mapping>;
};
```

The default `tabWidth` is 4.

The `valueEnd` and `keyEnd` positions are exclusive. `line`, `column` and `pos` are 0-based.
