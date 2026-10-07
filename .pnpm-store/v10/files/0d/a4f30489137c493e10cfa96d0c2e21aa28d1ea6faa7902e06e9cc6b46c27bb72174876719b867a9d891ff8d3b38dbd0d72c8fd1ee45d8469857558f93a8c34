export {};

import { URL } from "node:url";

declare global {
    interface ImportMeta {
        dirname: string;
        filename: string;
        main: boolean;
        url: string;
        resolve(specifier: string, parent?: string | URL): string;
    }
}
