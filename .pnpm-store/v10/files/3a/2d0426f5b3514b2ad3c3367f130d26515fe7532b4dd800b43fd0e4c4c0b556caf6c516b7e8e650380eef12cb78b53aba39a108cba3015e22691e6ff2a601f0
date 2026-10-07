export type EnsureFunction = (...args: any[]) => any;
export interface EnsureBaseOptions {
	name?: string;
	errorMessage?: string;
	errorCode?: number;
	Error?: ErrorConstructor;
}

export interface EnsureIsOptional {
	isOptional: boolean;
}

export interface EnsureDefault<T> {
	default: T;
}

type EnsureOptions = EnsureBaseOptions & { isOptional?: boolean } & { default?: any };

type ValidationDatum = [argumentName: string, inputValue: any, ensureFunction: EnsureFunction, options?: object];
type ValidationDatumList = ValidationDatum[];

declare function ensure<T>(...args: [...ValidationDatumList, EnsureOptions]): T;
declare function ensure<T>(...args: [...ValidationDatumList]): T;
export default ensure;
