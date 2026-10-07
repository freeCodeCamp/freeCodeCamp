import { type PointerCoords } from '../event';
import { type Instance } from '../setup';
import { type pointerKey } from '../system/pointer';
type PointerActionInput = string | ({
    keys: string;
} & PointerActionPosition) | PointerAction;
export type PointerInput = PointerActionInput | Array<PointerActionInput>;
type PointerAction = PointerPressAction | PointerMoveAction;
type PointerActionPosition = {
    target?: Element;
    coords?: PointerCoords;
    node?: Node;
    /**
     * If `node` is set, this is the DOM offset.
     * Otherwise this is the `textContent`/`value` offset on the `target`.
     */
    offset?: number;
};
interface PointerPressAction extends PointerActionPosition {
    keyDef: pointerKey;
    releasePrevious: boolean;
    releaseSelf: boolean;
}
interface PointerMoveAction extends PointerActionPosition {
    pointerName?: string;
}
export declare function pointer(this: Instance, input: PointerInput): Promise<void>;
export {};
