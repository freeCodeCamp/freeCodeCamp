
import type { AnswersConnectorParams, AnswersWidgetDescription } from '../../connectors/answers/connectAnswers';
import type { WidgetFactory, Template, Hit } from '../../types';
export type AnswersTemplates = Partial<{
    /**
     * Template to use for the header. This template will receive an object containing `hits` and `isLoading`.
     */
    header: Template<{
        hits: Hit[];
        isLoading: boolean;
    }>;
    /**
     * Template to use for the loader.
     */
    loader: Template;
    /**
     * Template to use for each result. This template will receive an object containing a single record.
     */
    item: Template<Hit>;
}>;
export type AnswersCSSClasses = Partial<{
    /**
     * CSS class to add to the root element of the widget.
     */
    root: string | string[];
    /**
     * CSS class to add to the wrapping element when no results.
     */
    emptyRoot: string | string[];
    /**
     * CSS classes to add to the header.
     */
    header: string | string[];
    /**
     * CSS classes to add to the loader.
     */
    loader: string | string[];
    /**
     * CSS class to add to the list of results.
     */
    list: string | string[];
    /**
     * CSS class to add to each result.
     */
    item: string | string[];
}>;
export type AnswersWidgetParams = {
    /**
     * CSS Selector or HTMLElement to insert the widget.
     */
    container: string | HTMLElement;
    /**
     * The templates to use for the widget.
     */
    templates?: AnswersTemplates;
    /**
     * The CSS classes to override.
     */
    cssClasses?: AnswersCSSClasses;
};
export type AnswersWidget = WidgetFactory<AnswersWidgetDescription & {
    $$widgetType: 'ais.answers';
}, AnswersConnectorParams, AnswersWidgetParams>;
declare const _default: AnswersWidget;
export default _default;
