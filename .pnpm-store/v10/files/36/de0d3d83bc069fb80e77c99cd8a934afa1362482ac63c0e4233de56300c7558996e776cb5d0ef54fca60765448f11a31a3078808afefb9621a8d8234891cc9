import * as preact from '../src';

export function createRoot(container: preact.ContainerNode): {
	render(children: preact.ComponentChild): void;
	unmount(): void;
};

export function hydrateRoot(
	container: preact.ContainerNode,
	children: preact.ComponentChild
): typeof createRoot;
