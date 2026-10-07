
import type { QueryRuleCustomDataComponentTemplates } from '../../components/QueryRuleCustomData/QueryRuleCustomData';
import type { QueryRulesConnectorParams, QueryRulesWidgetDescription } from '../../connectors/query-rules/connectQueryRules';
import type { WidgetFactory, Template } from '../../types';
export type QueryRuleCustomDataCSSClasses = Partial<{
    root: string | string[];
}>;
export type QueryRuleCustomDataTemplates = Partial<{
    default: Template<{
        items: any[];
    }>;
}>;
export type QueryRuleCustomDataWidgetParams = {
    container: string | HTMLElement;
    cssClasses?: QueryRuleCustomDataCSSClasses;
    templates?: QueryRuleCustomDataTemplates;
};
export type QueryRuleCustomDataWidget = WidgetFactory<QueryRulesWidgetDescription & {
    $$widgetType: 'ais.queryRuleCustomData';
}, QueryRulesConnectorParams, QueryRuleCustomDataWidgetParams>;
export declare const defaultTemplates: QueryRuleCustomDataComponentTemplates;
declare const queryRuleCustomData: QueryRuleCustomDataWidget;
export default queryRuleCustomData;
