import { type Instance } from '../../setup';
import { PointerPosition } from './shared';
import { Buttons, MouseButton } from './buttons';
type PointerInit = {
    pointerId: number;
    pointerType: string;
    isPrimary: boolean;
};
export declare class Pointer {
    constructor({ pointerId, pointerType, isPrimary }: PointerInit, buttons: Buttons);
    readonly pointerId: number;
    readonly pointerType: string;
    readonly isPrimary: boolean;
    readonly buttons: Buttons;
    isMultitouch: boolean;
    isCancelled: boolean;
    isDown: boolean;
    isPrevented: boolean;
    position: PointerPosition;
    init(instance: Instance): this;
    move(instance: Instance, position: PointerPosition): {
        leave: () => void;
        enter: () => void;
        move: () => void;
    } | undefined;
    down(instance: Instance, button?: MouseButton): void;
    up(instance: Instance, button?: MouseButton): void;
    release(instance: Instance): void;
    private getTarget;
    private getEventInit;
}
export {};
