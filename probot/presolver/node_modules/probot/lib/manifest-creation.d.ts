export declare class ManifestCreation {
    readonly pkg: any;
    createWebhookChannel(): Promise<void>;
    getManifest(pkg: any, baseUrl: any): string;
    createAppFromCode(code: any): Promise<any>;
    private updateEnv;
    readonly createAppUrl: string;
}
