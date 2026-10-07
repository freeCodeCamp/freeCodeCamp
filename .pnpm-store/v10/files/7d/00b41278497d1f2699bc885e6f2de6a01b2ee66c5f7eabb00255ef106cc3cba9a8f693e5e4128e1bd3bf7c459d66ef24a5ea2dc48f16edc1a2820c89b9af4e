import { assign, slice } from './util';
import { createVNode } from './create-element';

/**
 * Clones the given VNode, optionally adding attributes/props and replacing its
 * children.
 * @param {VNode} vnode The virtual DOM element to clone
 * @param {object} props Attributes/props to add when cloning
 * @param {Array<ComponentChildren>} rest Any additional arguments will be used
 * as replacement children.
 * @returns {VNode}
 */
export function cloneElement(vnode, props, children) {
	let normalizedProps = assign({}, vnode.props),
		key,
		ref,
		i;

	let defaultProps;

	if (vnode.type && vnode.type.defaultProps) {
		defaultProps = vnode.type.defaultProps;
	}

	for (i in props) {
		if (i == 'key') key = props[i];
		else if (i == 'ref') ref = props[i];
		else if (props[i] === undefined && defaultProps !== undefined) {
			normalizedProps[i] = defaultProps[i];
		} else {
			normalizedProps[i] = props[i];
		}
	}

	if (arguments.length > 2) {
		normalizedProps.children =
			arguments.length > 3 ? slice.call(arguments, 2) : children;
	}

	return createVNode(
		vnode.type,
		normalizedProps,
		key || vnode.key,
		ref || vnode.ref,
		null
	);
}
