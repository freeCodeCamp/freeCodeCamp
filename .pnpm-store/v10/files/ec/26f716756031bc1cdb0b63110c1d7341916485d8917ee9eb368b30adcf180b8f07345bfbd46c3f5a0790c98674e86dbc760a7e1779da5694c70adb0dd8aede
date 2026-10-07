import index from 'instantsearch.js/es/widgets/index/index.js';
import { useMemo } from 'react';
import { useForceUpdate } from './useForceUpdate.js';
import { useIndexContext } from './useIndexContext.js';
import { useInstantSearchServerContext } from './useInstantSearchServerContext.js';
import { useInstantSearchSSRContext } from './useInstantSearchSSRContext.js';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect.js';
import { useStableValue } from './useStableValue.js';
import { useWidget } from './useWidget.js';

function useIndex(props) {
    var serverContext = useInstantSearchServerContext();
    var ssrContext = useInstantSearchSSRContext();
    var initialResults = ssrContext === null || ssrContext === void 0 ? void 0 : ssrContext.initialResults;
    var parentIndex = useIndexContext();
    var stableProps = useStableValue(props);
    var indexWidget = useMemo(function() {
        return index(stableProps);
    }, [
        stableProps
    ]);
    var helper = indexWidget.getHelper();
    var forceUpdate = useForceUpdate();
    useIsomorphicLayoutEffect(function() {
        forceUpdate();
    }, [
        helper,
        forceUpdate
    ]);
    useWidget({
        widget: indexWidget,
        parentIndex: parentIndex,
        props: stableProps,
        shouldSsr: Boolean(serverContext || initialResults),
        skipSuspense: true
    });
    return indexWidget;
}

export { useIndex };
