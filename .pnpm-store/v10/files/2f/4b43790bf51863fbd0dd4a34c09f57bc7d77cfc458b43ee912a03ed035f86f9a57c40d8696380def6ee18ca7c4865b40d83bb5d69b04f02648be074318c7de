export interface ISiteMetadata {
    sitePath: string;
    name?: string;
    pid?: number;
    lastRun?: number;
}
export declare function getInternalSiteMetadata(sitePath: string): Promise<ISiteMetadata | null>;
export declare function updateInternalSiteMetadata(metadata: ISiteMetadata, merge?: boolean): Promise<void>;
export { updateInternalSiteMetadata as updateSiteMetadata };
export declare function addFieldToMinimalSiteMetadata({ root }: {
    root: string;
}, { name, value }: {
    name: string;
    value: string;
}): Promise<void>;
