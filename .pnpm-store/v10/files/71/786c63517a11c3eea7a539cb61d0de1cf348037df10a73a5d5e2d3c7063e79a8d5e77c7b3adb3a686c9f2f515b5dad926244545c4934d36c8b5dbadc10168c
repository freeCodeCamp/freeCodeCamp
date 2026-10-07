
import { html } from 'htm/preact';
import { h } from 'preact';
import type { CarouselProps as CarouselUiProps, VNode } from 'instantsearch-ui-components';
type Template<TData = Record<string, unknown>> = (params: {
    html: typeof html;
} & TData) => VNode | VNode[] | null;
type CreateCarouselTemplateProps<TObject extends Record<string, unknown>> = {
    templates?: Partial<{
        previous: Exclude<Template, string>;
        next: Exclude<Template, string>;
        header: Exclude<Template<{
            canScrollLeft: boolean;
            canScrollRight: boolean;
            scrollLeft: () => void;
            scrollRight: () => void;
        }>, string>;
    }>;
    cssClasses?: Partial<CarouselUiProps<TObject>['classNames']>;
    showNavigation?: boolean;
};
type CarouselTemplateProps<TObject extends Record<string, unknown>> = Pick<CarouselUiProps<TObject>, 'items'> & {
    templates: {
        item?: CarouselUiProps<TObject>['itemComponent'];
    };
    cssClasses?: Partial<CarouselUiProps<TObject>['classNames']>;
} & {
    sendEvent?: CarouselUiProps<TObject>['sendEvent'];
};
export declare function carousel<TObject extends Record<string, unknown>>({ cssClasses, templates, showNavigation, }?: CreateCarouselTemplateProps<TObject>): ({ items, templates: widgetTemplates, cssClasses: widgetCssClasses, sendEvent, }: CarouselTemplateProps<TObject>) => h.JSX.Element;
export {};
