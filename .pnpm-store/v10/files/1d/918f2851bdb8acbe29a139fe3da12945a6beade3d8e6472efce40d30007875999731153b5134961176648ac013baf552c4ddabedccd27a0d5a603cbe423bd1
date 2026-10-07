import React from 'react';
import type { PartialKeys } from '../types';
import type { HighlightProps as HighlightUiComponentProps } from '../ui/Highlight';
import type { BaseHit, Hit } from 'instantsearch.js';
export type HighlightProps<THit extends Hit<BaseHit>> = {
    hit: THit;
    attribute: keyof THit | string[];
} & PartialKeys<Omit<HighlightUiComponentProps, 'parts'>, 'highlightedTagName' | 'nonHighlightedTagName' | 'separator'>;
export declare function Highlight<THit extends Hit<BaseHit>>({ hit, attribute, highlightedTagName, nonHighlightedTagName, separator, ...props }: HighlightProps<THit>): React.JSX.Element;
