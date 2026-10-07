type Promisable<T> = T | Promise<T>;

declare namespace escalade {
	export type Callback = (
		directory: string,
		files: string[],
	) => Promisable<string | false | void>;
}

declare function escalade(
	directory: string,
	callback: escalade.Callback,
): Promise<string | void>;

export = escalade;
