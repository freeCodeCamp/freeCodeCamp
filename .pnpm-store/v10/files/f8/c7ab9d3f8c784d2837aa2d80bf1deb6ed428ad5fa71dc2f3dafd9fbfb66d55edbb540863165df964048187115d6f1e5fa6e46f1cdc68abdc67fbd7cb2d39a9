export type Options = {
	/**
	* The CWD for the operation.
	* @default "." (process.cwd)
	*/
	cwd?: string;
	/**
	* The last directory to traverse.
	*
	* > [NOTE]
	* > This directory is INCLUSIVE.
	*
	* @default "/"
	*/
	last?: string;
};
/**
* Get all parent directories of {@link base}.
* Stops after {@link Options['last']} is processed.
*
* @returns An array of absolute paths of all parent directories.
*/
export declare function up(base: string, options?: Options): string[];
