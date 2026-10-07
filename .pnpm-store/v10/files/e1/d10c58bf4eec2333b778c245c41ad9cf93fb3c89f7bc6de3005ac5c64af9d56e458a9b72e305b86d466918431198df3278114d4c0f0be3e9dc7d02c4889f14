import type { MessageSender } from '../messages';
export interface PreviewEvents {
    'preview/get/info': [
        {
            port?: number;
            sourceShellId?: string;
        },
        PreviewInfo
    ];
}
export declare type PreviewInfo = {
    url: string;
    sourceShellId: string;
    port: number;
};
export declare class PreviewApi {
    private readonly channel;
    constructor(channel: MessageSender);
    private waitFor;
    getByShellId(sourceShellId: string, timeout?: number): Promise<PreviewInfo>;
    waitForPort(port: number, timeout?: number): Promise<PreviewInfo>;
}
