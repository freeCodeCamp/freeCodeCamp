const { render, hydrate, unmountComponentAtNode } = require('preact/compat');

function createRoot(container) {
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

exports.createRoot = createRoot;

exports.hydrateRoot = function (container, children) {
	hydrate(children, container);
	return createRoot(container);
};
