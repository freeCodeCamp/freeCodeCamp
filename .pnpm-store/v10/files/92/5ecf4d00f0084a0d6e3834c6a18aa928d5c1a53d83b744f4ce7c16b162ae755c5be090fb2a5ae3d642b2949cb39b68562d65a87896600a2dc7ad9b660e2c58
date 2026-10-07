import type { Highlight, ReverseHighlight, ReverseSnippet, Snippet } from '../helpers/components';
import type { BuiltInBindEventForHits, CustomBindEventForHits, SendEventForHits } from '../lib/utils';
import type { html } from 'htm/preact';
import type { VNode } from 'preact';
export type Template<TTemplateData = void> = string | ((data: TTemplateData, params: TemplateParams) => VNode | VNode[] | string | null);
export type TemplateParams = {
    html: typeof html;
    components: {
        Highlight: typeof Highlight;
        ReverseHighlight: typeof ReverseHighlight;
        Snippet: typeof Snippet;
        ReverseSnippet: typeof ReverseSnippet;
    };
    sendEvent?: SendEventForHits;
};
interface TemplateWithBindEventParams extends TemplateParams {
    /** @deprecated use sendEvent instead */
    (...args: Parameters<BuiltInBindEventForHits>): ReturnType<BuiltInBindEventForHits>;
    /** @deprecated use sendEvent instead */
    (...args: Parameters<CustomBindEventForHits>): ReturnType<CustomBindEventForHits>;
    sendEvent: SendEventForHits;
}
export type TemplateWithBindEvent<TTemplateData = void> = string | ((data: TTemplateData, params: TemplateWithBindEventParams) => VNode | VNode[] | string);
export type Templates = {
    [key: string]: Template<any> | TemplateWithBindEvent<any> | Templates | undefined;
};
export type HoganHelpers<TKeys extends string = string> = Record<TKeys, (text: string, render: (value: string) => string) => string>;
export {};
