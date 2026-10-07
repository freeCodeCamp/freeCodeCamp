import { type Instance } from '../../setup';
import { pointerKey, PointerPosition } from './shared';
/**
 * This object is the single "virtual" mouse that might be controlled by multiple different pointer devices.
 */
export declare class Mouse {
    position: PointerPosition;
    private readonly buttons;
    private selecting?;
    private buttonDownTarget;
    private readonly clickCount;
    move(instance: Instance, position: PointerPosition, 
    /** Whether `preventDefault()` has been called on the `pointerdown` event */
    isPrevented: boolean): {
        leave: () => void;
        enter: () => void;
        move: () => void;
    } | undefined;
    down(instance: Instance, keyDef: pointerKey, 
    /** Whether `preventDefault()` has been called on the `pointerdown` event */
    isPrevented: boolean): void;
    up(instance: Instance, keyDef: pointerKey, 
    /** Whether `preventDefault()` has been called on the `pointerdown` event */
    isPrevented: boolean): void;
    resetClickCount(): void;
    private getEventInit;
    private getTarget;
    private startSelecting;
    private modifySelecting;
    private endSelecting;
}
