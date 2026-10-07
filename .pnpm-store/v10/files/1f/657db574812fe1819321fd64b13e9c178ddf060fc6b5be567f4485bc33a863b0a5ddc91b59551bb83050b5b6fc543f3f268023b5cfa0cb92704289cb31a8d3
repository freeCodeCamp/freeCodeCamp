
import { h } from 'preact';
import type { ComponentCSSClasses, Hit } from '../../types';
import type { AnswersCSSClasses, AnswersTemplates } from '../../widgets/answers/answers';
export type AnswersComponentCSSClasses = ComponentCSSClasses<AnswersCSSClasses>;
export type AnswersComponentTemplates = Required<AnswersTemplates>;
export type AnswersProps = {
    hits: Hit[];
    isLoading: boolean;
    cssClasses: AnswersComponentCSSClasses;
    templateProps: {
        [key: string]: any;
        templates: AnswersComponentTemplates;
    };
};
declare const Answers: ({ hits, isLoading, cssClasses, templateProps, }: AnswersProps) => h.JSX.Element;
export default Answers;
