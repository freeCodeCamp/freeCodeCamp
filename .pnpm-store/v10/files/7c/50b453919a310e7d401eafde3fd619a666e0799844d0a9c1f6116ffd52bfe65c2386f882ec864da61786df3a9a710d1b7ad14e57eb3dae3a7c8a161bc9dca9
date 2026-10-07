import React from 'react';
import type { PartialKeys } from '../types';
import type { SnippetProps as SnippetUiComponentProps } from '../ui/Snippet';
import type { BaseHit, Hit } from 'instantsearch.js';
export type SnippetProps<THit extends Hit<BaseHit>> = {
    hit: THit;
    attribute: keyof THit | string[];
} & PartialKeys<Omit<SnippetUiComponentProps, 'parts'>, 'highlightedTagName' | 'nonHighlightedTagName' | 'separator'>;
export declare function Snippet<THit extends Hit<BaseHit>>({ hit, attribute, highlightedTagName, nonHighlightedTagName, separator, ...props }: SnippetProps<THit>): React.JSX.Element;
