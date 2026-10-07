declare function traverse(
  schema: traverse.SchemaObject,
  opts: traverse.Options,
  cb?: traverse.Callback
): void;

declare function traverse(
  schema: traverse.SchemaObject,
  cb: traverse.Callback
): void;

declare namespace traverse {
  interface SchemaObject {
    $id?: string;
    $schema?: string;
    [x: string]: any;
  }

  type Callback = (
    schema: SchemaObject,
    jsonPtr: string,
    rootSchema: SchemaObject,
    parentJsonPtr?: string,
    parentKeyword?: string,
    parentSchema?: SchemaObject,
    keyIndex?: string | number
  ) => void;

  interface Options {
    allKeys?: boolean;
    cb?:
      | Callback
      | {
          pre?: Callback;
          post?: Callback;
        };
  }
}

export = traverse;
