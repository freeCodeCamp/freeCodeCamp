import { createElement, render } from 'preact';

/**
 * @param {import('../../src/index').RenderableProps<{ context: any }>} props
 */
function ContextProvider(props) {
	this.getChildContext = () => props.context;
	return props.children;
}

/**
 * Portal component
 * @this {import('./internal').Component}
 * @param {object | null | undefined} props
 *
 * TODO: use createRoot() instead of fake root
 */
function Portal(props) {
	const _this = this;
	let container = props._container;

	_this.componentWillUnmount = function () {
		render(null, _this._temp);
		_this._temp = null;
		_this._container = null;
	};

	// When we change container we should clear our old container and
	// indicate a new mount.
	if (_this._container && _this._container !== container) {
		_this.componentWillUnmount();
	}

	if (!_this._temp) {
		_this._container = container;

		// Create a fake DOM parent node that manages a subset of `container`'s children:
		_this._temp = {
			nodeType: 1,
			parentNode: container,
			childNodes: [],
			contains: () => true,
			appendChild(child) {
				this.childNodes.push(child);
				_this._container.appendChild(child);
			},
			insertBefore(child, before) {
				this.childNodes.push(child);
				_this._container.appendChild(child);
			},
			removeChild(child) {
				this.childNodes.splice(this.childNodes.indexOf(child) >>> 1, 1);
				_this._container.removeChild(child);
			}
		};
	}

	// Render our wrapping element into temp.
	render(
		createElement(ContextProvider, { context: _this.context }, props._vnode),
		_this._temp
	);
}

/**
 * Create a `Portal` to continue rendering the vnode tree at a different DOM node
 * @param {import('./internal').VNode} vnode The vnode to render
 * @param {import('./internal').PreactElement} container The DOM node to continue rendering in to.
 */
export function createPortal(vnode, container) {
	const el = createElement(Portal, { _vnode: vnode, _container: container });
	el.containerInfo = container;
	return el;
}
