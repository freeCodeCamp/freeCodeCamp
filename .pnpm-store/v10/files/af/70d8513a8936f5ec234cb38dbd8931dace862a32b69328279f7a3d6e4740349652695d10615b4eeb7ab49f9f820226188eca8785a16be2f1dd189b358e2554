
import { h } from 'preact';
import type { ReverseHighlightProps as ReverseHighlightUiComponentProps } from '../../components/ReverseHighlight/ReverseHighlight';
import type { BaseHit, Hit, PartialKeys } from '../../types';
export type ReverseHighlightProps<THit extends Hit<BaseHit>> = {
    hit: THit;
    attribute: keyof THit | string[];
    cssClasses?: ReverseHighlightUiComponentProps['classNames'];
} & PartialKeys<Omit<ReverseHighlightUiComponentProps, 'parts' | 'classNames'>, 'highlightedTagName' | 'nonHighlightedTagName' | 'separator'>;
export declare function ReverseHighlight<THit extends Hit<BaseHit>>({ hit, attribute, cssClasses, ...props }: ReverseHighlightProps<THit>): h.JSX.Element;
