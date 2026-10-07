declare module 'clean-set' {
  function cleanSet<A>(
    source: A,
    keys: string | string[],
    update: <B>(value: B) => B
  ): A;
  function cleanSet<A>(source: A, keys: string | string[], update: any): A;
  /**
   * Update a value in a deeply nested object and clone each node touched
   * @param source The object to be updated
   * @param location The dot notation or array key path to the property you wish to update
   * @param update Either a function that will receive the current value and return a new value OR the new value for the node
   * @returns The new object
   */
  export default cleanSet;
}
