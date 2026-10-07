type Channel = "FAST_REFRESH";
type Event = [
    Channel,
    {
        action: string;
        payload?: any;
    }
];
declare global {
    interface Window {
        _gatsbyEvents: Array<Event> | {
            push: (event: Event) => void;
        };
    }
}
export declare function clearCompileError(): void;
export declare function clearRuntimeErrors(dismissOverlay: boolean): void;
export declare function showCompileError(message: any): void;
export declare function showRuntimeErrors(errors: any): void;
export declare function isWebpackCompileError(error: any): boolean;
export declare function handleRuntimeError(error: any): void;
export {};
