export as namespace stable;
export = stable;

type Comparator<T> = ((a : T, b : T)=>boolean) | ((a: T, b : T)=>number);

declare function stable<T>(array : T[], comparator? : Comparator<T>) : T[];
declare namespace stable {
    export function inplace<T>(array: T[], comparator? : Comparator<T>) : T[];
}
