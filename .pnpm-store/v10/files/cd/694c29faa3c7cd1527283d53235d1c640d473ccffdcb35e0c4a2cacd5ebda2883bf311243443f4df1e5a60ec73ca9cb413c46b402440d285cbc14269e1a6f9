export declare function assertType<Type>(_value: Type): void;
export declare namespace assertType {
  type Equal<T, U> =
    Exclude<T, U> extends never
      ? Exclude<U, T> extends never
        ? true
        : false
      : false;
}
export declare function resetDefaultOptions(): void;
export declare function generateOffset(originalDate: Date): string;
export declare function fakeDate(date: number | Date): {
  fakeNow: (date: number | Date) => void;
};
