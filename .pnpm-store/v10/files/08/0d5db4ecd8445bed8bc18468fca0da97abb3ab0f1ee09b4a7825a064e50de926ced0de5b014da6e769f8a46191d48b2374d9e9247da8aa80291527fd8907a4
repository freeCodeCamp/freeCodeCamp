
import { h, Component } from 'preact';
import type { Range, RangeBoundaries } from '../../connectors/range/connectRange';
import type { ComponentCSSClasses } from '../../types';
import type { RangeInputCSSClasses, RangeInputTemplates } from '../../widgets/range-input/range-input';
export type RangeInputComponentCSSClasses = ComponentCSSClasses<RangeInputCSSClasses>;
export type RangeInputComponentTemplates = Required<RangeInputTemplates>;
export type RangeInputProps = {
    min?: number;
    max?: number;
    step: number;
    values: Partial<Range>;
    cssClasses: RangeInputComponentCSSClasses;
    templateProps: {
        templates: RangeInputComponentTemplates;
    };
    refine: (rangeValue: RangeBoundaries) => void;
};
declare class RangeInput extends Component<RangeInputProps, {
    min?: string;
    max?: string;
}> {
    state: {
        min: string | undefined;
        max: string | undefined;
    };
    componentWillReceiveProps(nextProps: RangeInputProps): void;
    private onInput;
    private onSubmit;
    render(): h.JSX.Element;
}
export default RangeInput;
