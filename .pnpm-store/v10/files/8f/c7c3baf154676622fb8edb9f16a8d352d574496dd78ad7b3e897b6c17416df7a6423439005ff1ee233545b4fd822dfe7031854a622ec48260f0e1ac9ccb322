export = LinkResolver;
declare class LinkResolver {
	/** @type {Map<string, readonly string[]>} */
	cache: Map<string, readonly string[]>;
	/**
	 * @param {string} file path to file or directory
	 * @returns {readonly string[]} array of file and all symlinks contributed in the resolving process (first item is the resolved file)
	 */
	resolve(file: string): readonly string[];
}
