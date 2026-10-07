import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_to_consumable_array.js';
import InstantSearch, { INSTANTSEARCH_FUTURE_DEFAULTS } from 'instantsearch.js/es/lib/InstantSearch.js';
import { useRef, useCallback, version } from 'react';
import { useSyncExternalStore } from 'use-sync-external-store/shim/index.js';
import version$1 from '../version.js';
import { dequal } from './dequal.js';
import { useForceUpdate } from './useForceUpdate.js';
import { useInstantSearchServerContext } from './useInstantSearchServerContext.js';
import { useInstantSearchSSRContext } from './useInstantSearchSSRContext.js';
import { useRSCContext } from './useRSCContext.js';

var defaultUserAgents = [
    "react (".concat(version, ")"),
    "react-instantsearch (".concat(version$1, ")"),
    "react-instantsearch-core (".concat(version$1, ")")
];
var serverUserAgent = "react-instantsearch-server (".concat(version$1, ")");
var nextUserAgent = function nextUserAgent(nextVersion) {
    return nextVersion ? "next.js (".concat(nextVersion, ")") : null;
};
function useInstantSearchApi(props) {
    var forceUpdate = useForceUpdate();
    var serverContext = useInstantSearchServerContext();
    var serverState = useInstantSearchSSRContext();
    var waitForResultsRef = useRSCContext().waitForResultsRef;
    var initialResults = serverState === null || serverState === void 0 ? void 0 : serverState.initialResults;
    var prevPropsRef = useRef(props);
    var shouldRenderAtOnce = serverContext || initialResults || waitForResultsRef;
    var searchRef = useRef(null);
    // As we need to render on mount with SSR, using the local ref above in `StrictMode` will
    // create and start two instances of InstantSearch. To avoid this, we instead discard it and use
    // an upward ref from `InstantSearchSSRContext` as it has already been mounted a second time at this point.
    if (serverState === null || serverState === void 0 ? void 0 : serverState.ssrSearchRef) {
        searchRef = serverState.ssrSearchRef;
    }
    if (searchRef.current === null) {
        // We don't use the `instantsearch()` function because it comes with other
        // top-level APIs that we don't need.
        // See https://github.com/algolia/instantsearch/blob/5b529f43d8acc680f85837eaaa41f7fd03a3f833/src/index.es.ts#L63-L86
        var search = new InstantSearch(props);
        search._schedule = function _schedule(cb) {
            search._schedule.queue.push(cb);
            clearTimeout(search._schedule.timer);
            search._schedule.timer = setTimeout(function() {
                search._schedule.queue.forEach(function(callback) {
                    callback();
                });
                search._schedule.queue = [];
            }, 0);
        };
        search._schedule.queue = [];
        if (shouldRenderAtOnce) {
            // InstantSearch.js has a private Initial Results API that lets us inject
            // results on the search instance.
            // On the server, we default the initial results to an empty object so that
            // InstantSearch.js doesn't schedule a search that isn't used, leading to
            // an additional network request. (This is equivalent to monkey-patching
            // `scheduleSearch` to a noop.)
            search._initialResults = initialResults || {};
            // We don't rely on the `defer` to reset the schedule search, but will call
            // `search._resetScheduleSearch()` manually in the effect after children
            // mount in `InstantSearch`.
            search._manuallyResetScheduleSearch = true;
        }
        addAlgoliaAgents(props.searchClient, _(defaultUserAgents).concat([
            serverContext && serverUserAgent,
            nextUserAgent(getNextVersion())
        ]));
        // On the server, we start the search early to compute the search parameters.
        // On SSR, we start the search early to directly catch up with the lifecycle
        // and render.
        if (shouldRenderAtOnce) {
            search.start();
        }
        if (serverContext) {
            // We notify `getServerState()` of the InstantSearch internals to retrieve
            // the server state and pass it to the render on SSR.
            serverContext.notifyServer({
                search: search
            });
        }
        warnNextRouter(props.routing);
        searchRef.current = search;
    }
    {
        var search1 = searchRef.current;
        var prevProps = prevPropsRef.current;
        if (prevProps.indexName !== props.indexName) {
            search1.helper.setIndex(props.indexName || '').search();
            prevPropsRef.current = props;
        }
        if (prevProps.searchClient !== props.searchClient) {
            addAlgoliaAgents(props.searchClient, _(defaultUserAgents).concat([
                serverContext && serverUserAgent
            ]));
            search1.mainHelper.setClient(props.searchClient).search();
            prevPropsRef.current = props;
        }
        if (prevProps.onStateChange !== props.onStateChange) {
            search1.onStateChange = props.onStateChange;
            prevPropsRef.current = props;
        }
        if (prevProps.searchFunction !== props.searchFunction) {
            // Updating the `searchFunction` to `undefined` is not supported by
            // InstantSearch.js, so it will throw an error.
            // This is a fair behavior until we add an update API in InstantSearch.js.
            search1._searchFunction = props.searchFunction;
            prevPropsRef.current = props;
        }
        if (prevProps.stalledSearchDelay !== props.stalledSearchDelay) {
            var _props_stalledSearchDelay;
            // The default `stalledSearchDelay` in InstantSearch.js is 200ms.
            // We need to reset it when it's undefined to get back to the original value.
            search1._stalledSearchDelay = (_props_stalledSearchDelay = props.stalledSearchDelay) !== null && _props_stalledSearchDelay !== void 0 ? _props_stalledSearchDelay : 200;
            prevPropsRef.current = props;
        }
        if (!dequal(prevProps.future, props.future)) {
            search1.future = _$1({}, INSTANTSEARCH_FUTURE_DEFAULTS, props.future);
            prevPropsRef.current = props;
        }
    // Updating the `routing` prop is not supported because InstantSearch.js
    // doesn't let us change it. This might not be a problem though, because `routing`
    // shouldn't need to be dynamic.
    // If we find scenarios where `routing` needs to change, we can always expose
    // it privately on the InstantSearch instance. Another way would be to
    // manually inject the routing middleware in this library, and not rely
    // on the provided `routing` prop.
    }
    var cleanupTimerRef = useRef(null);
    var store = useSyncExternalStore(useCallback(function() {
        var search = searchRef.current;
        // Scenario 1: the component mounts.
        if (cleanupTimerRef.current === null) {
            // On SSR, the instance is already started so we don't start it again.
            if (!search.started) {
                search.start();
                forceUpdate();
            }
        } else {
            // We cancel the previous cleanup function because we don't want to
            // dispose the search during an update.
            clearTimeout(cleanupTimerRef.current);
            search._preventWidgetCleanup = false;
        }
        return function() {
            if (serverState === null || serverState === void 0 ? void 0 : serverState.ssrSearchRef) {
                return;
            }
            function cleanup() {
                search.dispose();
            }
            clearTimeout(search._schedule.timer);
            // We clean up only when the component that uses this subscription unmounts,
            // but not when it updates, because it would dispose the instance, which
            // would remove all the widgets and break routing.
            // Executing the cleanup function in a `setTimeout()` lets us cancel it
            // in the next effect.
            // (There might be better ways to do this.)
            cleanupTimerRef.current = setTimeout(cleanup);
            // We need to prevent the `useWidget` cleanup function so that widgets
            // are not removed before the instance is disposed, triggering
            // an unwanted search request.
            search._preventWidgetCleanup = true;
        };
    }, [
        forceUpdate,
        serverState
    ]), function() {
        return searchRef.current;
    }, function() {
        return searchRef.current;
    });
    return store;
}
function addAlgoliaAgents(searchClient, userAgents) {
    if (typeof searchClient.addAlgoliaAgent !== 'function') {
        return;
    }
    userAgents.filter(Boolean).forEach(function(userAgent) {
        searchClient.addAlgoliaAgent(userAgent);
    });
}
function warnNextRouter(routing) {
}
/**
 * Gets the version of Next.js if it is available in the `window` object,
 * otherwise it returns the NEXT_RUNTIME environment variable (in SSR),
 * which is either `nodejs` or `edge`.
 */ function getNextVersion() {
    var _window_next, _process_env;
    return typeof window !== 'undefined' && ((_window_next = window.next) === null || _window_next === void 0 ? void 0 : _window_next.version) || (typeof process !== 'undefined' ? (_process_env = process.env) === null || _process_env === void 0 ? void 0 : _process_env.NEXT_RUNTIME : undefined);
}

export { useInstantSearchApi };
