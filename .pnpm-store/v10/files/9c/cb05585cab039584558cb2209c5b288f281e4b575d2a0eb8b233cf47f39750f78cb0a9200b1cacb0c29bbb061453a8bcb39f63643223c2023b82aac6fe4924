
import { h } from 'preact';
import type { ToggleRefinementRenderState, ToggleRefinementValue } from '../../connectors/toggle-refinement/connectToggleRefinement';
import type { PreparedTemplateProps } from '../../lib/templating';
import type { ComponentCSSClasses } from '../../types';
import type { ToggleRefinementTemplates, ToggleRefinementCSSClasses } from '../../widgets/toggle-refinement/toggle-refinement';
export type ToggleRefinementComponentCSSClasses = ComponentCSSClasses<ToggleRefinementCSSClasses>;
export type ToggleRefinementComponentTemplates = Required<ToggleRefinementTemplates>;
export type ToggleRefinementProps = {
    currentRefinement: ToggleRefinementValue;
    refine: ToggleRefinementRenderState['refine'];
    cssClasses: ToggleRefinementComponentCSSClasses;
    templateProps: PreparedTemplateProps<ToggleRefinementComponentTemplates>;
};
declare const ToggleRefinement: ({ currentRefinement, refine, cssClasses, templateProps, }: ToggleRefinementProps) => h.JSX.Element;
export default ToggleRefinement;
