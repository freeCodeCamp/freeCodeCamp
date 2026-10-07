import {
	Component as PreactComponent,
	VNode as PreactVNode,
	FunctionComponent as PreactFunctionComponent,
	PreactElement
} from '../../src/internal';
import { SuspenseProps } from './suspense';

export { ComponentChildren } from '../..';

export { PreactElement };

export interface Component<P = {}, S = {}> extends PreactComponent<P, S> {
	isReactComponent?: object;
	isPureReactComponent?: true;
	_patchedLifecycles?: true;

	// Suspense internal properties
	_childDidSuspend?(error: Promise<void>, suspendingVNode: VNode): void;
	_suspended: (vnode: VNode) => (unsuspend: () => void) => void;
	_onResolve?(): void;

	// Portal internal properties
	_temp: any;
	_container: PreactElement;
}

export interface FunctionComponent<P = {}> extends PreactFunctionComponent<P> {
	shouldComponentUpdate?(nextProps: Readonly<P>): boolean;
	_forwarded?: boolean;
	_patchedLifecycles?: true;
}

export interface VNode<T = any> extends PreactVNode<T> {
	$$typeof?: symbol | string;
	preactCompatNormalized?: boolean;
}

export interface SuspenseState {
	_suspended?: null | VNode<any>;
}

export interface SuspenseComponent
	extends PreactComponent<SuspenseProps, SuspenseState> {
	_pendingSuspensionCount: number;
	_suspenders: Component[];
	_detachOnNextRender: null | VNode<any>;
}
