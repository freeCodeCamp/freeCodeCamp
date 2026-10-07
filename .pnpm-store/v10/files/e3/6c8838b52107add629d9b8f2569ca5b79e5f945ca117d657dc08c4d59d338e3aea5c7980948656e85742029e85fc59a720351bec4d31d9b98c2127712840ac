import { type pointerKey } from './shared';
export declare class Buttons {
    private readonly pressed;
    getButtons(): number;
    down(keyDef: pointerKey): number | undefined;
    up(keyDef: pointerKey): number | undefined;
}
export declare const MouseButton: {
    readonly primary: 0;
    readonly secondary: 1;
    readonly auxiliary: 2;
    readonly back: 3;
    readonly X1: 3;
    readonly forward: 4;
    readonly X2: 4;
};
export type MouseButton = keyof typeof MouseButton | number;
export declare function getMouseButtonId(button?: MouseButton): number;
export declare const MouseButtonFlip: {
    readonly 1: 2;
    readonly 2: 1;
};
export declare function getMouseEventButton(button?: MouseButton): number;
