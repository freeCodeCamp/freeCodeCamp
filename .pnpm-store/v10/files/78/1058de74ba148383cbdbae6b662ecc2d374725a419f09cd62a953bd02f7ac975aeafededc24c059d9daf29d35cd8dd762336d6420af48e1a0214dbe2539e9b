import type { Connector, TransformItems, WidgetRenderState } from '../../types';
type TrackedFilterRefinement = string | number | boolean;
export type ParamTrackedFilters = {
    [facetName: string]: (facetValues: TrackedFilterRefinement[]) => TrackedFilterRefinement[];
};
export type ParamTransformRuleContexts = (ruleContexts: string[]) => string[];
export type QueryRulesConnectorParams = {
    trackedFilters?: ParamTrackedFilters;
    transformRuleContexts?: ParamTransformRuleContexts;
    transformItems?: TransformItems<any>;
};
export type QueryRulesRenderState = {
    items: any[];
};
export type QueryRulesWidgetDescription = {
    $$type: 'ais.queryRules';
    renderState: QueryRulesRenderState;
    indexRenderState: {
        queryRules: WidgetRenderState<QueryRulesRenderState, QueryRulesConnectorParams>;
    };
};
export type QueryRulesConnector = Connector<QueryRulesWidgetDescription, QueryRulesConnectorParams>;
declare const connectQueryRules: QueryRulesConnector;
export default connectQueryRules;
