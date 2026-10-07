import { _ as _$1 } from '@swc/helpers/esm/_object_spread.js';
import { _ } from '@swc/helpers/esm/_object_spread_props.js';
import connectQueryRules from '../../connectors/query-rules/connectQueryRules.js';
import { createDocumentationMessageGenerator } from '../../lib/utils/documentation.js';
import { noop } from '../../lib/utils/noop.js';

var withUsage = createDocumentationMessageGenerator({
    name: 'query-rule-context'
});
var queryRuleContext = function queryRuleContext() {
    var widgetParams = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!widgetParams.trackedFilters) {
        throw new Error(withUsage('The `trackedFilters` option is required.'));
    }
    return _(_$1({}, connectQueryRules(noop)(widgetParams)), {
        $$widgetType: 'ais.queryRuleContext'
    });
};

export { queryRuleContext as default };
