import { waitForResults, getInitialResults } from 'instantsearch.js/es/lib/server.js';
import { resetWidgetId, walkIndex } from 'instantsearch.js/es/lib/utils/index.js';
import React__default from 'react';
import { InstantSearchServerContext } from '../components/InstantSearchServerContext.js';
import { InstantSearchSSRProvider } from '../components/InstantSearchSSRProvider.js';

/**
 * Returns the InstantSearch server state from a component.
 */ function getServerState(children, param) {
    var renderToString = param.renderToString;
    var searchRef = {
        current: undefined
    };
    resetWidgetId();
    var createNotifyServer = function createNotifyServer() {
        var hasBeenNotified = false;
        var notifyServer = function notifyServer(param) {
            var search = param.search;
            if (hasBeenNotified) {
                throw new Error('getServerState should be called with a single InstantSearchSSRProvider and a single InstantSearch component.');
            }
            hasBeenNotified = true;
            searchRef.current = search;
        };
        return notifyServer;
    };
    return execute({
        children: children,
        renderToString: renderToString,
        searchRef: searchRef,
        notifyServer: createNotifyServer()
    }).then(function(serverState) {
        var shouldRefetch = false;
        // <DynamicWidgets> requires another query to retrieve the dynamic widgets
        // to render.
        walkIndex(searchRef.current.mainIndex, function(index) {
            shouldRefetch = shouldRefetch || index.getWidgets().some(function(widget) {
                return widget.$$type === 'ais.dynamicWidgets';
            });
        });
        if (shouldRefetch) {
            resetWidgetId();
            return execute({
                children: /*#__PURE__*/ React__default.createElement(InstantSearchSSRProvider, serverState, children),
                renderToString: renderToString,
                searchRef: searchRef,
                notifyServer: createNotifyServer(),
                skipRecommend: true
            });
        }
        return serverState;
    });
}
function execute(param) {
    var children = param.children, renderToString = param.renderToString, notifyServer = param.notifyServer, searchRef = param.searchRef, skipRecommend = param.skipRecommend;
    return Promise.resolve().then(function() {
        renderToString(/*#__PURE__*/ React__default.createElement(InstantSearchServerContext.Provider, {
            value: {
                notifyServer: notifyServer
            }
        }, children));
    }).then(function() {
        return(// We wait for the component to mount so that `notifyServer()` is called.
        new Promise(function(resolve) {
            return setTimeout(resolve, 0);
        }));
    }).then(function() {
        // If `notifyServer()` is not called by then, it means that <InstantSearch>
        // wasn't within the `children`.
        // We decide to go with a strict behavior in that case; throwing. If users have
        // some routes that don't mount the <InstantSearch> component, they would need
        // to try/catch the `getServerState()` call.
        // If this behavior turns out to be too strict for many users, we can decide
        // to warn instead of throwing.
        if (!searchRef.current) {
            throw new Error("Unable to retrieve InstantSearch's server state in `getServerState()`. Did you mount the <InstantSearch> component?");
        }
        return waitForResults(searchRef.current, skipRecommend);
    }).then(function(requestParamsList) {
        return {
            initialResults: getInitialResults(searchRef.current.mainIndex, requestParamsList)
        };
    });
}

export { getServerState };
