
import { h } from 'preact';
import type { ClearRefinementsRenderState } from '../../connectors/clear-refinements/connectClearRefinements';
import type { PreparedTemplateProps } from '../../lib/templating';
import type { ComponentCSSClasses } from '../../types';
import type { ClearRefinementsCSSClasses, ClearRefinementsTemplates } from '../../widgets/clear-refinements/clear-refinements';
export type ClearRefinementsComponentCSSClasses = ComponentCSSClasses<ClearRefinementsCSSClasses>;
export type ClearRefinementsComponentTemplates = Required<ClearRefinementsTemplates>;
export type ClearRefinementsProps = {
    refine: ClearRefinementsRenderState['refine'];
    cssClasses: ClearRefinementsComponentCSSClasses;
    hasRefinements: ClearRefinementsRenderState['hasRefinements'];
    templateProps: PreparedTemplateProps<ClearRefinementsComponentTemplates>;
};
declare const ClearRefinements: ({ hasRefinements, refine, cssClasses, templateProps, }: ClearRefinementsProps) => h.JSX.Element;
export default ClearRefinements;
