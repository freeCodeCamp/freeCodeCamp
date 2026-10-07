import { generateImageUrl } from "../utils/url-generator";
import type { Actions, Store } from "gatsby";
export declare function shouldDispatchLocalFileServiceJob(): boolean;
export declare function shouldDispatchLocalImageServiceJob(): boolean;
export declare function dispatchLocalFileServiceJob({ url, filename, mimeType, contentDigest, }: {
    url: string;
    filename: string;
    mimeType: string;
    contentDigest: string;
}, actions: Actions, store?: Store): void;
export declare function dispatchLocalImageServiceJob({ url, filename, mimeType, contentDigest, }: {
    url: string;
    filename: string;
    mimeType: string;
    contentDigest: string;
}, imageArgs: Parameters<typeof generateImageUrl>[1], actions: Actions, store?: Store): void;
