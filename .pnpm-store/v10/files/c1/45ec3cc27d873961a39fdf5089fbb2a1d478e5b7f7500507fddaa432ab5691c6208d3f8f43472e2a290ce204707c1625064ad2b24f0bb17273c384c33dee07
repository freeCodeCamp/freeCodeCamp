import type { Document } from './bson';
import { BSONValue } from './bson_value';
import type { EJSONOptions } from './extended_json';
import type { ObjectId } from './objectid';
import { type InspectFn, defaultInspect } from './parser/utils';

/** @public */
export interface DBRefLike {
  $ref: string;
  $id: ObjectId;
  $db?: string;
}

/** @internal */
export function isDBRefLike(value: unknown): value is DBRefLike {
  return (
    value != null &&
    typeof value === 'object' &&
    '$id' in value &&
    value.$id != null &&
    '$ref' in value &&
    typeof value.$ref === 'string' &&
    // If '$db' is defined it MUST be a string, otherwise it should be absent
    (!('$db' in value) || ('$db' in value && typeof value.$db === 'string'))
  );
}

/**
 * A class representation of the BSON DBRef type.
 * @public
 * @category BSONType
 */
export class DBRef extends BSONValue {
  get _bsontype(): 'DBRef' {
    return 'DBRef';
  }

  collection!: string;
  oid!: ObjectId;
  db?: string;
  fields!: Document;

  /**
   * @param collection - the collection name.
   * @param oid - the reference ObjectId.
   * @param db - optional db name, if omitted the reference is local to the current db.
   */
  constructor(collection: string, oid: ObjectId, db?: string, fields?: Document) {
    super();
    // check if namespace has been provided
    const parts = collection.split('.');
    if (parts.length === 2) {
      db = parts.shift();
      collection = parts.shift()!;
    }

    this.collection = collection;
    this.oid = oid;
    this.db = db;
    this.fields = fields || {};
  }

  // Property provided for compatibility with the 1.x parser
  // the 1.x parser used a "namespace" property, while 4.x uses "collection"

  /** @internal */
  get namespace(): string {
    return this.collection;
  }

  set namespace(value: string) {
    this.collection = value;
  }

  toJSON(): DBRefLike & Document {
    const o = Object.assign(
      {
        $ref: this.collection,
        $id: this.oid
      },
      this.fields
    );

    if (this.db != null) o.$db = this.db;
    return o;
  }

  /** @internal */
  toExtendedJSON(options?: EJSONOptions): DBRefLike {
    options = options || {};
    let o: DBRefLike = {
      $ref: this.collection,
      $id: this.oid
    };

    if (options.legacy) {
      return o;
    }

    if (this.db) o.$db = this.db;
    o = Object.assign(o, this.fields);
    return o;
  }

  /** @internal */
  static fromExtendedJSON(doc: DBRefLike): DBRef {
    const copy = Object.assign({}, doc) as Partial<DBRefLike>;
    delete copy.$ref;
    delete copy.$id;
    delete copy.$db;
    return new DBRef(doc.$ref, doc.$id, doc.$db, copy);
  }

  inspect(depth?: number, options?: unknown, inspect?: InspectFn): string {
    inspect ??= defaultInspect;

    const args = [
      inspect(this.namespace, options),
      inspect(this.oid, options),
      ...(this.db ? [inspect(this.db, options)] : []),
      ...(Object.keys(this.fields).length > 0 ? [inspect(this.fields, options)] : [])
    ];

    args[1] = inspect === defaultInspect ? `new ObjectId(${args[1]})` : args[1];

    return `new DBRef(${args.join(', ')})`;
  }
}
