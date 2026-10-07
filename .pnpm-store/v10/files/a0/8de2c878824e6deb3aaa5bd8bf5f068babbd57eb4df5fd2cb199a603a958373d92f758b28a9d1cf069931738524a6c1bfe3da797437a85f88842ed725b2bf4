declare namespace _exports {
	export { TreeNode };
}
declare function _exports<T>(
	plan: Map<string, T[] | T>,
	limit: number,
): Map<string, Map<T, string>>;
export = _exports;
type TreeNode<T> = {
	/**
	 * target
	 */
	target: string;
	/**
	 * parent
	 */
	parent: TreeNode<T>;
	/**
	 * children
	 */
	children: TreeNode<T>[];
	/**
	 * number of entries
	 */
	entries: number;
	/**
	 * true when active, otherwise false
	 */
	active: boolean;
	/**
	 * value
	 */
	value: T[] | T | undefined;
};
