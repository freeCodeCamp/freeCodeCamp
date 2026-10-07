
import type { RelevantSortConnectorParams, RelevantSortWidgetDescription } from '../../connectors/relevant-sort/connectRelevantSort';
import type { WidgetFactory, Template } from '../../types';
export type RelevantSortCSSClasses = Partial<{
    root: string;
    text: string;
    button: string;
}>;
export type RelevantSortTemplates = Partial<{
    text: Template<{
        isRelevantSorted: boolean;
    }>;
    button: Template<{
        isRelevantSorted: boolean;
    }>;
}>;
export type RelevantSortWidgetParams = {
    container: string | HTMLElement;
    cssClasses?: RelevantSortCSSClasses;
    templates?: RelevantSortTemplates;
};
export type RelevantSortWidget = WidgetFactory<RelevantSortWidgetDescription & {
    $$widgetType: 'ais.relevantSort';
}, RelevantSortConnectorParams, RelevantSortWidgetParams>;
declare const relevantSort: RelevantSortWidget;
export default relevantSort;
