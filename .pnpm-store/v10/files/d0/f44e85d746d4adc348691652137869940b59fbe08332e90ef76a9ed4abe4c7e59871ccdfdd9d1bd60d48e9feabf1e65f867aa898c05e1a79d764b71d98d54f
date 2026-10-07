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
