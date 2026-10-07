import { PointerCoords } from '../../event';
import { MouseButton } from './buttons';
export interface pointerKey {
    /** Name of the pointer key */
    name: string;
    /** Type of the pointer device */
    pointerType: 'mouse' | 'pen' | 'touch';
    /** Type of button */
    button?: MouseButton;
}
export interface PointerPosition {
    target?: Element;
    coords?: PointerCoords;
    caret?: CaretPosition;
}
export interface CaretPosition {
    node?: Node;
    offset?: number;
}
export declare function isDifferentPointerPosition(positionA: PointerPosition, positionB: PointerPosition): boolean;
