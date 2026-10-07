import { System } from '..';
import { Instance } from '../../setup';
import { pointerKey, PointerPosition } from './shared';
export type { pointerKey, PointerPosition } from './shared';
export declare class PointerHost {
    readonly system: System;
    constructor(system: System);
    private readonly mouse;
    private readonly buttons;
    private readonly devices;
    private readonly pointers;
    isKeyPressed(keyDef: pointerKey): boolean;
    press(instance: Instance, keyDef: pointerKey, position: PointerPosition): Promise<void>;
    move(instance: Instance, pointerName: string, position: PointerPosition): Promise<void>;
    release(instance: Instance, keyDef: pointerKey, position: PointerPosition): Promise<void>;
    getPointerName(keyDef: pointerKey): string;
    getPreviousPosition(pointerName: string): PointerPosition | undefined;
    resetClickCount(): void;
    getMouseTarget(instance: Instance): Element;
    setMousePosition(position: PointerPosition): void;
}
