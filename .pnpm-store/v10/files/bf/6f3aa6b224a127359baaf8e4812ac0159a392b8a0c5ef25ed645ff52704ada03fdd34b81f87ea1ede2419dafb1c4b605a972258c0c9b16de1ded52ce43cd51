interface UnhandledRequestPrint {
    warning: () => void;
    error: () => void;
}
type UnhandledRequestCallback = (request: Request, print: UnhandledRequestPrint) => void;
type UnhandledRequestStrategy = 'bypass' | 'warn' | 'error' | UnhandledRequestCallback;
declare function onUnhandledRequest(request: Request, strategy?: UnhandledRequestStrategy): Promise<void>;

export { type UnhandledRequestCallback, type UnhandledRequestPrint, type UnhandledRequestStrategy, onUnhandledRequest };
