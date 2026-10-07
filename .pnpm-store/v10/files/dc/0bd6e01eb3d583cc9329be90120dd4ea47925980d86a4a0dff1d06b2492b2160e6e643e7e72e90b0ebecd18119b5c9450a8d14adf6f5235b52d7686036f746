import { render, hydrate, unmountComponentAtNode } from 'preact/compat';

export function createRoot(container) {
	return {
		// eslint-disable-next-line
		render: function (children) {
			render(children, container);
		},
		// eslint-disable-next-line
		unmount: function () {
			unmountComponentAtNode(container);
		}
	};
}

export function hydrateRoot(container, children) {
	hydrate(children, container);
	return createRoot(container);
}

export default {
	createRoot,
	hydrateRoot
};
