import React from 'react';
import type { PartialKeys } from '../types';
import type { ReverseHighlightProps as ReverseHighlightUiComponentProps } from '../ui/ReverseHighlight';
import type { BaseHit, Hit } from 'instantsearch.js';
export type ReverseHighlightProps<THit extends Hit<BaseHit>> = {
    hit: THit;
    attribute: keyof THit | string[];
} & PartialKeys<Omit<ReverseHighlightUiComponentProps, 'parts'>, 'highlightedTagName' | 'nonHighlightedTagName' | 'separator'>;
export declare function ReverseHighlight<THit extends Hit<BaseHit>>({ hit, attribute, highlightedTagName, nonHighlightedTagName, separator, ...props }: ReverseHighlightProps<THit>): React.JSX.Element;
