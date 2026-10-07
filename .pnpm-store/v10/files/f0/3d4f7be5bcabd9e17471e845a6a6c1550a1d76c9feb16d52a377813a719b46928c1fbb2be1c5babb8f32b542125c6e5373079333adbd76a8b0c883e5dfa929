declare function findNearestPackageData(basedir: string): {
	type?: "module" | "commonjs";
};
declare function getCachedData<T>(cache: Map<string, T>, basedir: string, originalBasedir: string): NonNullable<T> | undefined;
declare function setCacheData<T>(cache: Map<string, T>, data: T, basedir: string, originalBasedir: string): void;

export { findNearestPackageData, getCachedData, setCacheData };
