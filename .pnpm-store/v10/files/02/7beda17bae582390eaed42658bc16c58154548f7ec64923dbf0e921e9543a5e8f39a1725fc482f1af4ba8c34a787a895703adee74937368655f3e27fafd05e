import qs from 'qs';
import type { Router, UiState } from '../../types';
type CreateURL<TRouteState> = (args: {
    qsModule: typeof qs;
    routeState: TRouteState;
    location: Location;
}) => string;
type ParseURL<TRouteState> = (args: {
    qsModule: typeof qs;
    location: Location;
}) => TRouteState;
export type BrowserHistoryArgs<TRouteState> = {
    windowTitle?: (routeState: TRouteState) => string;
    writeDelay: number;
    createURL: CreateURL<TRouteState>;
    parseURL: ParseURL<TRouteState>;
    getLocation: () => Location;
    start?: (onUpdate: () => void) => void;
    dispose?: () => void;
    push?: (url: string) => void;
    /**
     * Whether the URL should be cleaned up when the router is disposed.
     * This can be useful when closing a modal containing InstantSearch, to
     * remove active refinements from the URL.
     * @default true
     */
    cleanUrlOnDispose?: boolean;
};
declare class BrowserHistory<TRouteState> implements Router<TRouteState> {
    $$type: string;
    /**
     * Transforms a UI state into a title for the page.
     */
    private readonly windowTitle?;
    /**
     * Time in milliseconds before performing a write in the history.
     * It prevents from adding too many entries in the history and
     * makes the back button more usable.
     *
     * @default 400
     */
    private readonly writeDelay;
    /**
     * Creates a full URL based on the route state.
     * The storage adaptor maps all syncable keys to the query string of the URL.
     */
    private readonly _createURL;
    /**
     * Parses the URL into a route state.
     * It should be symmetrical to `createURL`.
     */
    private readonly parseURL;
    /**
     * Returns the location to store in the history.
     * @default () => window.location
     */
    private readonly getLocation;
    private writeTimer?;
    private _onPopState?;
    /**
     * Indicates if last action was back/forward in the browser.
     */
    private inPopState;
    /**
     * Indicates whether the history router is disposed or not.
     */
    protected isDisposed: boolean;
    /**
     * Indicates the window.history.length before the last call to
     * window.history.pushState (called in `write`).
     * It allows to determine if a `pushState` has been triggered elsewhere,
     * and thus to prevent the `write` method from calling `pushState`.
     */
    private latestAcknowledgedHistory;
    private _start?;
    private _dispose?;
    private _push?;
    private _cleanUrlOnDispose;
    /**
     * Initializes a new storage provider that syncs the search state to the URL
     * using web APIs (`window.location.pushState` and `onpopstate` event).
     */
    constructor({ windowTitle, writeDelay, createURL, parseURL, getLocation, start, dispose, push, cleanUrlOnDispose, }: BrowserHistoryArgs<TRouteState>);
    /**
     * Reads the URL and returns a syncable UI search state.
     */
    read(): TRouteState;
    /**
     * Pushes a search state into the URL.
     */
    write(routeState: TRouteState): void;
    /**
     * Sets a callback on the `onpopstate` event of the history API of the current page.
     * It enables the URL sync to keep track of the changes.
     */
    onUpdate(callback: (routeState: TRouteState) => void): void;
    /**
     * Creates a complete URL from a given syncable UI state.
     *
     * It always generates the full URL, not a relative one.
     * This allows to handle cases like using a <base href>.
     * See: https://github.com/algolia/instantsearch/issues/790
     */
    createURL(routeState: TRouteState): string;
    /**
     * Removes the event listener and cleans up the URL.
     */
    dispose(): void;
    start(): void;
    private shouldWrite;
}
export default function historyRouter<TRouteState = UiState>({ createURL, parseURL, writeDelay, windowTitle, getLocation, start, dispose, push, cleanUrlOnDispose, }?: Partial<BrowserHistoryArgs<TRouteState>>): BrowserHistory<TRouteState>;
export {};
