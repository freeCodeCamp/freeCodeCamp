declare const UIValue: unique symbol;
declare const UISelection: unique symbol;
declare const InitialValue: unique symbol;
declare global {
    interface Element {
        [UIValue]?: string;
        [InitialValue]?: string;
        [UISelection]?: UISelection;
    }
}
interface UISelection {
    anchorOffset: number;
    focusOffset: number;
}
export type UIValueString = string & {
    [UIValue]: true;
};
export type UISelectionStart = number & {
    [UISelection]: true;
};
export declare function isUIValue(value: string | UIValueString): value is UIValueString;
export declare function isUISelectionStart(start: number | UISelectionStart | null): start is UISelectionStart;
export declare function setUIValue(element: HTMLInputElement | HTMLTextAreaElement, value: string): void;
export declare function getUIValue(element: HTMLInputElement | HTMLTextAreaElement): string;
/** Flag the IDL value as clean. This does not change the value. */
export declare function setUIValueClean(element: HTMLInputElement | HTMLTextAreaElement): void;
export declare function clearInitialValue(element: HTMLInputElement | HTMLTextAreaElement): void;
export declare function getInitialValue(element: HTMLInputElement | HTMLTextAreaElement): string | undefined;
export declare function setUISelectionRaw(element: HTMLInputElement | HTMLTextAreaElement, selection: UISelection): void;
export declare function setUISelection(element: HTMLInputElement | HTMLTextAreaElement, { focusOffset: focusOffsetParam, anchorOffset: anchorOffsetParam, }: {
    anchorOffset?: number;
    focusOffset: number;
}, mode?: 'replace' | 'modify'): void;
export type UISelectionRange = UISelection & {
    startOffset: number;
    endOffset: number;
};
export declare function getUISelection(element: HTMLInputElement | HTMLTextAreaElement): UISelectionRange;
export declare function hasUISelection(element: HTMLInputElement | HTMLTextAreaElement): boolean;
/** Flag the IDL selection as clean. This does not change the selection. */
export declare function setUISelectionClean(element: HTMLInputElement | HTMLTextAreaElement): void;
export {};
