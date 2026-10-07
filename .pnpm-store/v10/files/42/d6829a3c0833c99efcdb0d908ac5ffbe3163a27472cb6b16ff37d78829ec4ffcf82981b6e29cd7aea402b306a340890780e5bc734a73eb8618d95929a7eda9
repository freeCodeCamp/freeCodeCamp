/**
 * This interface describes Node.js process that is potentially able to communicate over IPC channel
 */
interface ProcessLike {
    pid?: string | number;
    send?: (message: any, sendHandle?: any, options?: any, callback?: (error: any) => void) => boolean;
    on: (event: any, listener: any) => any;
    off: (event: any, listener?: any) => any;
    connected?: boolean;
    disconnect?: () => void;
}
export { ProcessLike };
