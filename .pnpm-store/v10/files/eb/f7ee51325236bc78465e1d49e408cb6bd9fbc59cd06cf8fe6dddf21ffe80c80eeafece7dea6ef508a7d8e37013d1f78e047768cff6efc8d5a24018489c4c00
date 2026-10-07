
import { h, Component } from 'preact';
import type { PreparedTemplateProps } from '../../lib/templating';
import type { BindEventForHits, SendEventForHits } from '../../lib/utils';
import type { Templates } from '../../types';
import type { JSX } from 'preact';
declare const defaultProps: {
    data: {};
    rootTagName: string;
    useCustomCompileOptions: {};
    templates: {};
    templatesConfig: {};
};
export type TemplateProps = {
    data?: Record<string, any>;
    rootProps?: Record<string, any>;
    rootTagName: keyof JSX.IntrinsicElements | 'fragment';
    templateKey: string;
    bindEvent?: BindEventForHits;
    sendEvent?: SendEventForHits;
} & PreparedTemplateProps<Templates> & Readonly<typeof defaultProps>;
declare class Template extends Component<TemplateProps> {
    static readonly defaultProps: {
        data: {};
        rootTagName: string;
        useCustomCompileOptions: {};
        templates: {};
        templatesConfig: {};
    };
    shouldComponentUpdate(nextProps: TemplateProps): boolean;
    render(): h.JSX.Element | null;
}
export default Template;
