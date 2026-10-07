declare const fakeFiles: unique symbol;
declare global {
    interface HTMLInputElement {
        [fakeFiles]?: {
            restore: () => void;
        };
    }
}
export declare function setFiles(el: HTMLInputElement & {
    type: 'file';
}, files: FileList): void;
export {};
