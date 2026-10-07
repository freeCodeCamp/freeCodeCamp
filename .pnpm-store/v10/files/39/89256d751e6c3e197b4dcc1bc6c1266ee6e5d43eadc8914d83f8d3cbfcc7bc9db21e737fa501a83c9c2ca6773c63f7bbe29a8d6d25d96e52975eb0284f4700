interface ConvertOptions {
    cap?: boolean;
    curry?: boolean;
    fixed?: boolean;
    immutable?: boolean;
    rearg?: boolean;
}

interface Convert {
    (func: object, options?: ConvertOptions): any;
    (name: string, func: (...args: any[]) => any, options?: ConvertOptions): any;
}

declare const convert: Convert;
export = convert;
