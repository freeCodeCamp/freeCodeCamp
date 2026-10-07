/**
 * Find the closest error boundary to a thrown error and call it
 * @param {object} error The thrown value
 * @param {VNode} vnode The vnode that threw the error that was caught (except
 * for unmounting when this parameter is the highest parent that was being
 * unmounted)
 * @param {VNode} [oldVNode]
 * @param {ErrorInfo} [errorInfo]
 */
export function _catchError(error, vnode, oldVNode, errorInfo) {
	/** @type {Component} */
	let component,
		/** @type {ComponentType} */
		ctor,
		/** @type {boolean} */
		handled;

	for (; (vnode = vnode._parent); ) {
		if ((component = vnode._component) && !component._processingException) {
			try {
				ctor = component.constructor;

				if (ctor && ctor.getDerivedStateFromError != null) {
					component.setState(ctor.getDerivedStateFromError(error));
					handled = component._dirty;
				}

				if (component.componentDidCatch != null) {
					component.componentDidCatch(error, errorInfo || {});
					handled = component._dirty;
				}

				// This is an error boundary. Mark it as having bailed out, and whether it was mid-hydration.
				if (handled) {
					return (component._pendingError = component);
				}
			} catch (e) {
				error = e;
			}
		}
	}

	throw error;
}
