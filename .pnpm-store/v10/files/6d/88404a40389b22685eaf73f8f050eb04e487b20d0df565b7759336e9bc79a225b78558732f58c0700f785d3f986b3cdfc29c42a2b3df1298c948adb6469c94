/**
 * This is a fork of Rheostat for Preact X.
 *
 * @see https://github.com/airbnb/rheostat
 */

import { h, Component } from 'preact';
import type { ComponentChildren, ComponentType, JSX } from 'preact';
type BoundingBox = {
    height: number;
    left: number;
    top: number;
    width: number;
};
declare function Button(props: JSX.IntrinsicElements['button']): h.JSX.Element;
type Style = {
    position?: 'absolute';
    top?: number | string;
    left?: number | string;
    height?: string;
    width?: string;
};
export type PitProps = {
    children: number | string;
    style: Style;
};
export type HandleProps = {
    'aria-valuemax'?: number;
    'aria-valuemin'?: number;
    'aria-valuenow'?: number;
    'aria-disabled': boolean;
    'data-handle-key': number;
    className: 'rheostat-handle';
    key: string;
    onClick: (e: MouseEvent) => void;
    onKeyDown?: (e: KeyboardEvent) => void;
    onMouseDown?: (e: MouseEvent) => void;
    onTouchStart?: (e: TouchEvent) => void;
    role: 'slider';
    style: JSX.HTMLAttributes['style'];
    tabIndex: number;
};
type Bounds = [min: number, max: number];
type PublicState = {
    max?: number;
    min?: number;
    values: Bounds;
};
type Props = {
    children?: ComponentChildren;
    className?: string;
    disabled?: boolean;
    handle?: ComponentType<HandleProps>;
    max?: number;
    min?: number;
    onClick?: () => void;
    onChange?: (state: PublicState) => void;
    onKeyPress?: () => void;
    onSliderDragEnd?: () => void;
    onSliderDragMove?: () => void;
    onSliderDragStart?: () => void;
    onValuesUpdated?: (state: PublicState) => void;
    orientation?: 'horizontal' | 'vertical';
    pitComponent?: ComponentType<PitProps>;
    pitPoints?: number[];
    progressBar?: ComponentType<JSX.HTMLAttributes>;
    snap?: boolean;
    snapPoints?: number[];
    values?: Bounds;
};
type State = {
    className: string;
    handlePos: Bounds;
    handleDimensions: number;
    mousePos: {
        x: number;
        y: number;
    } | null;
    sliderBox: Partial<BoundingBox>;
    slidingIndex: number | null;
    values: Bounds;
};
declare class Rheostat extends Component<Props, State> {
    static defaultProps: {
        className: string;
        children: null;
        disabled: boolean;
        handle: typeof Button;
        max: number;
        min: number;
        onClick: null;
        onChange: null;
        onKeyPress: null;
        onSliderDragEnd: null;
        onSliderDragMove: null;
        onSliderDragStart: null;
        onValuesUpdated: null;
        orientation: string;
        pitComponent: null;
        pitPoints: never[];
        progressBar: string;
        snap: boolean;
        snapPoints: never[];
        values: number[];
    };
    x: number[];
    state: State;
    private rheostat;
    componentWillReceiveProps: (nextProps: Required<Props>) => void;
    private getPublicState;
    private getSliderBoundingBox;
    private getProgressStyle;
    private getMinValue;
    private getMaxValue;
    private getHandleDimensions;
    private getClosestSnapPoint;
    private getSnapPosition;
    private getNextPositionForKey;
    private getNextState;
    private getClosestHandle;
    private setStartSlide;
    private startMouseSlide;
    private startTouchSlide;
    private handleMouseSlide;
    private handleTouchSlide;
    private handleSlide;
    private endSlide;
    private handleClick;
    private handleKeydown;
    private validatePosition;
    private validateValues;
    canMove: (idx: number, proposedPosition: number) => boolean;
    fireChangeEvent: () => void;
    slideTo: (idx: number, proposedPosition: number, onAfterSet?: () => void) => void;
    updateNewValues: (nextProps: Required<Props>) => void;
    render: () => h.JSX.Element;
}
export default Rheostat;
