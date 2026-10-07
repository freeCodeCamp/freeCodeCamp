import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import connectDynamicWidgets from 'instantsearch.js/es/connectors/dynamic-widgets/connectDynamicWidgets.js';
import { useConnector } from '../hooks/useConnector.js';

function useDynamicWidgets(props, additionalWidgetProperties) {
    return useConnector(connectDynamicWidgets, _(_$1({}, props), {
        // We don't rely on InstantSearch.js for rendering widgets because React
        // directly manipulates the children.
        widgets: []
    }), additionalWidgetProperties);
}

export { useDynamicWidgets };
