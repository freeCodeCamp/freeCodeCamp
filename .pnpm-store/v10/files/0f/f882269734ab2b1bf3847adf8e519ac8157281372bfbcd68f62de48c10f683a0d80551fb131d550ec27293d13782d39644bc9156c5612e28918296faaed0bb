export type TFormatCheckFunction = (value: string) => boolean;
/** Clears all entries */
export declare function Clear(): void;
/** Returns format entries in this registry */
export declare function Entries(): [string, TFormatCheckFunction][];
/** Sets a format */
export declare function Set(format: string, check: TFormatCheckFunction): void;
/** Returns true if the registry has this format */
export declare function Has(format: string): boolean;
/** Gets a format or undefined if not exists */
export declare function Get(format: string): TFormatCheckFunction | undefined;
/** Tests a value against a format, if the format is not registered, true */
export declare function Test(format: string, value: string): boolean;
/** Resets all formats to defaults */
export declare function Reset(): void;
