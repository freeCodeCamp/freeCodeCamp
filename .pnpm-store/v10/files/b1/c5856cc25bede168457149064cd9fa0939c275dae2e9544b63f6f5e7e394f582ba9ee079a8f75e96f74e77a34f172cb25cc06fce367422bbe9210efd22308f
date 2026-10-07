declare const TrackChanges: unique symbol;
declare global {
    interface Window {
        REACT_VERSION?: number;
    }
    interface Element {
        [TrackChanges]?: {
            previousValue?: string;
            tracked?: string[];
            nextValue?: string;
        };
    }
}
export declare function startTrackValue(element: HTMLInputElement | HTMLTextAreaElement): void;
export declare function trackOrSetValue(element: HTMLInputElement | HTMLTextAreaElement, v: string): void;
export declare function commitValueAfterInput(element: HTMLInputElement | HTMLTextAreaElement, cursorOffset: number): void;
export {};
