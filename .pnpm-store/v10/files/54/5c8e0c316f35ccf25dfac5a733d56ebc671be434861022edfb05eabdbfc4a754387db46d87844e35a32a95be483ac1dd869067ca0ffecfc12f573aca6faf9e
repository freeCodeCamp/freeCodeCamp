import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import connectConfigure from '../../connectors/configure/connectConfigure.js';
import { noop } from '../../lib/utils/noop.js';

var configure = function configure(widgetParams) {
    // This is a renderless widget that falls back to the connector's
    // noop render and unmount functions.
    var makeWidget = connectConfigure(noop);
    return _(_$1({}, makeWidget({
        searchParameters: widgetParams
    })), {
        $$widgetType: 'ais.configure'
    });
};

export { configure as default };
