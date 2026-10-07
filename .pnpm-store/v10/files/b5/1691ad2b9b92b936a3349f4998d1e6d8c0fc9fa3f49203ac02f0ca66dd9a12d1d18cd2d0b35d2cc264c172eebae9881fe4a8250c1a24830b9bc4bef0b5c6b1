
import { h } from 'preact';
import type { ComponentCSSClasses } from '../../types';
import type { RelevantSortCSSClasses, RelevantSortTemplates } from '../../widgets/relevant-sort/relevant-sort';
export type RelevantSortComponentCSSClasses = ComponentCSSClasses<RelevantSortCSSClasses>;
export type RelevantSortComponentTemplates = Required<RelevantSortTemplates>;
type RelevantSortProps = {
    cssClasses: RelevantSortComponentCSSClasses;
    templates: RelevantSortComponentTemplates;
    isRelevantSorted: boolean;
    isVirtualReplica: boolean;
    refine: (relevancyStrictness: number | undefined) => void;
};
declare const RelevantSort: ({ cssClasses, templates, isRelevantSorted, isVirtualReplica, refine, }: RelevantSortProps) => h.JSX.Element | null;
export default RelevantSort;
