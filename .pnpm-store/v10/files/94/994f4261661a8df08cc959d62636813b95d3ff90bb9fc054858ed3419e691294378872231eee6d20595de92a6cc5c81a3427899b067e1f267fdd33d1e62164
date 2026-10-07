//#region src/lens-list.d.ts
type Values<M> = M[keyof M & string];
declare class LensList<ValueMap extends Record<string, any>> {
  #private;
  constructor();
  get [Symbol.iterator](): any;
  entries(): MapIterator<[string, Values<ValueMap>[]]>;
  /**
   * Return an order-sensitive list of values by the given key.
   */
  get<K extends keyof ValueMap & string>(key: K): Array<ValueMap[K]>;
  /**
   * Return an order-sensitive list of all values.
   */
  getAll(): Array<Values<ValueMap>>;
  /**
   * Append a new value to the given key.
   */
  append<K extends keyof ValueMap & string>(key: K, value: ValueMap[K]): void;
  /**
   * Prepend a new value to the given key.
   */
  prepend<K extends keyof ValueMap & string>(key: K, value: ValueMap[K]): void;
  /**
   * Delete the value belonging to the given key.
   */
  delete<K extends keyof ValueMap & string>(key: K, value: ValueMap[K]): void;
  /**
   * Delete all values belogning to the given key.
   */
  deleteAll<K extends keyof ValueMap & string>(key: K): void;
  get size(): number;
  clear(): void;
}
//#endregion
export { LensList };
//# sourceMappingURL=lens-list.d.mts.map