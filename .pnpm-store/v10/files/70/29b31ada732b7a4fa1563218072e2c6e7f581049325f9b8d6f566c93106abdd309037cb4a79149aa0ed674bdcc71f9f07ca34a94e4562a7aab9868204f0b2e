type AutocompletePrimitiveBaseType<T> =
  T extends string ? string :
    T extends number ? number :
      T extends boolean ? boolean :
        never

export type Autocomplete<T> = T | (AutocompletePrimitiveBaseType<T> & Record<never, never>)
