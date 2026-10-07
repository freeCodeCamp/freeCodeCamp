import { Component, PreactElement, VNode, Options } from '../../src/internal';

export { Component, PreactElement, VNode, Options };

export interface DevtoolsInjectOptions {
	/** 1 = DEV, 0 = production */
	bundleType: 1 | 0;
	/** The devtools enable different features for different versions of react */
	version: string;
	/** Informative string, currently unused in the devtools  */
	rendererPackageName: string;
	/** Find the root dom node of a vnode */
	findHostInstanceByFiber(vnode: VNode): HTMLElement | null;
	/** Find the closest vnode given a dom node */
	findFiberByHostInstance(instance: HTMLElement): VNode | null;
}

export interface DevtoolsUpdater {
	setState(objOrFn: any): void;
	forceUpdate(): void;
	setInState(path: Array<string | number>, value: any): void;
	setInProps(path: Array<string | number>, value: any): void;
	setInContext(): void;
}

export type NodeType = 'Composite' | 'Native' | 'Wrapper' | 'Text';

export interface DevtoolData {
	nodeType: NodeType;
	// Component type
	type: any;
	name: string;
	ref: any;
	key: string | number;
	updater: DevtoolsUpdater | null;
	text: string | number | null;
	state: any;
	props: any;
	children: VNode[] | string | number | null;
	publicInstance: PreactElement | Text | Component;
	memoizedInteractions: any[];

	actualDuration: number;
	actualStartTime: number;
	treeBaseDuration: number;
}

export type EventType =
	| 'unmount'
	| 'rootCommitted'
	| 'root'
	| 'mount'
	| 'update'
	| 'updateProfileTimes';

export interface DevtoolsEvent {
	data?: DevtoolData;
	internalInstance: VNode;
	renderer: string;
	type: EventType;
}

export interface DevtoolsHook {
	_renderers: Record<string, any>;
	_roots: Set<VNode>;
	on(ev: string, listener: () => void): void;
	emit(ev: string, data?: object): void;
	helpers: Record<string, any>;
	getFiberRoots(rendererId: string): Set<any>;
	inject(config: DevtoolsInjectOptions): string;
	onCommitFiberRoot(rendererId: string, root: VNode): void;
	onCommitFiberUnmount(rendererId: string, vnode: VNode): void;
}

export interface DevtoolsWindow extends Window {
	/**
	 * If the devtools extension is installed it will inject this object into
	 * the dom. This hook handles all communications between preact and the
	 * devtools panel.
	 */
	__REACT_DEVTOOLS_GLOBAL_HOOK__?: DevtoolsHook;
}
