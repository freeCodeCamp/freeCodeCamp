# Installation
> `npm install --save @types/statuses`

# Summary
This package contains type definitions for statuses (https://github.com/jshttp/statuses).

# Details
Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/statuses.
## [index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/statuses/index.d.ts)
````ts
type NumericAscii = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "0";
type NonNumericAscii<S> = S extends `${NumericAscii}` ? never : any;

type IsNumericString<S extends string> = S extends `${number}` ? any : never;

type IsNonNumericString<S extends string> = S extends `${NonNumericAscii<S>}${infer _}` ? any : never;

export = status;

declare const status: status;

interface status {
    (code: number): string;
    <S extends string>(code: S): status.Result<S>;

    codes: number[];
    code: { [msg: string]: number | undefined };
    empty: { [code: number]: boolean | undefined };
    message: { [code: number]: string | undefined };
    redirect: { [code: number]: boolean | undefined };
    retry: { [code: number]: boolean | undefined };
}

declare namespace status {
    type Result<S extends string> = S extends IsNumericString<S> ? string
        : S extends IsNonNumericString<S> ? number
        : string | number;
}

````

### Additional Details
 * Last updated: Sat, 07 Jun 2025 02:15:25 GMT
 * Dependencies: none

# Credits
These definitions were written by [Tanguy Krotoff](https://github.com/tkrotoff), [BendingBender](https://github.com/BendingBender), and [Sebastian Beltran](https://github.com/bjohansebas).
