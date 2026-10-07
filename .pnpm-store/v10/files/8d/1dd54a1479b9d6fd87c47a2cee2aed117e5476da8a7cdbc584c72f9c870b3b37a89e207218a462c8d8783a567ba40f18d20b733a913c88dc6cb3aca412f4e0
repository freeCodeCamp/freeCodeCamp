import type { Protocol } from 'devtools-protocol';
import { type BrowsingContext } from '../../../protocol/protocol.js';
import { Deferred } from '../../../utils/Deferred.js';
import { type LoggerFn } from '../../../utils/log.js';
import type { EventManager } from '../session/EventManager.js';
export declare const enum NavigationEventName {
    FragmentNavigated = "browsingContext.fragmentNavigated",
    NavigationAborted = "browsingContext.navigationAborted",
    NavigationFailed = "browsingContext.navigationFailed",
    Load = "browsingContext.load"
}
export declare class NavigationResult {
    readonly eventName: NavigationEventName;
    readonly message?: string;
    constructor(eventName: NavigationEventName, message?: string);
}
export declare class NavigationState {
    #private;
    readonly navigationId: `${string}-${string}-${string}-${string}-${string}`;
    url: string;
    loaderId?: string;
    committed: Deferred<void>;
    isFragmentNavigation?: boolean;
    get finished(): Promise<NavigationResult>;
    constructor(url: string, browsingContextId: string, isInitial: boolean, eventManager: EventManager);
    navigationInfo(): BrowsingContext.NavigationInfo;
    start(): void;
    frameNavigated(): void;
    fragmentNavigated(): void;
    load(): void;
    fail(message: string): void;
}
/**
 * Keeps track of navigations. Details: http://go/webdriver:bidi-navigation
 */
export declare class NavigationTracker {
    #private;
    constructor(url: string, browsingContextId: string, eventManager: EventManager, logger?: LoggerFn);
    /**
     * Returns current started ongoing navigation. It can be either a started pending
     * navigation, or one is already navigated.
     */
    get currentNavigationId(): `${string}-${string}-${string}-${string}-${string}`;
    /**
     * Flags if the current navigation relates to the initial to `about:blank` navigation.
     */
    get isInitialNavigation(): boolean;
    /**
     * Url of the last navigated navigation.
     */
    get url(): string;
    /**
     * Creates a pending navigation e.g. when navigation command is called. Required to
     * provide navigation id before the actual navigation is started. It will be used when
     * navigation started. Can be aborted, failed, fragment navigated, or became a current
     * navigation.
     */
    createPendingNavigation(url: string, canBeInitialNavigation?: boolean): NavigationState;
    dispose(): void;
    onTargetInfoChanged(url: string): void;
    /**
     * @param {string} unreachableUrl indicated the navigation is actually failed.
     */
    frameNavigated(url: string, loaderId: string, unreachableUrl?: string): void;
    navigatedWithinDocument(url: string, navigationType: Protocol.Page.NavigatedWithinDocumentEvent['navigationType']): void;
    /**
     * Required to mark navigation as fully complete.
     * TODO: navigation should be complete when it became the current one on
     * `Page.frameNavigated` or on navigating command finished with a new loader Id.
     */
    loadPageEvent(loaderId: string): void;
    /**
     * Fail navigation due to navigation command failed.
     */
    failNavigation(navigation: NavigationState, errorText: string): void;
    /**
     * Updates the navigation's `loaderId` and sets it as current one, if it is a
     * cross-document navigation.
     */
    navigationCommandFinished(navigation: NavigationState, loaderId?: string): void;
    frameStartedNavigating(url: string, loaderId: string, navigationType: string): void;
    /**
     * If there is a navigation with the loaderId equals to the network request id, it means
     * that the navigation failed.
     */
    networkLoadingFailed(loaderId: string, errorText: string): void;
}
