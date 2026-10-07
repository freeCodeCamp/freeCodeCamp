declare const patched: unique symbol;
declare global {
    interface HTMLElement {
        readonly [patched]?: Pick<HTMLElement, 'focus' | 'blur'>;
    }
}
export declare function patchFocus(HTMLElement: typeof globalThis['HTMLElement']): void;
export declare function restoreFocus(HTMLElement: typeof globalThis['HTMLElement']): void;
export {};
