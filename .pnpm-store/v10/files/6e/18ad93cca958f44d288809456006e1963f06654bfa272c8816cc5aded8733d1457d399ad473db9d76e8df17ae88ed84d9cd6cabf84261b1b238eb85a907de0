import type { InstantSearchServerState } from '../components/InstantSearchSSRProvider';
import type { ReactNode } from 'react';
export type RenderToString = (element: JSX.Element) => unknown;
export type GetServerStateOptions = {
    renderToString: RenderToString;
};
/**
 * Returns the InstantSearch server state from a component.
 */
export declare function getServerState(children: ReactNode, { renderToString }: GetServerStateOptions): Promise<InstantSearchServerState>;
