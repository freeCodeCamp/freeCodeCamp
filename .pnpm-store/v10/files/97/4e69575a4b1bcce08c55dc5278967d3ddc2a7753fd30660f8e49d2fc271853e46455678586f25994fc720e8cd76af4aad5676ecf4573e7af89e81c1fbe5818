import { type Process } from '@puppeteer/browsers';
import { MapperServerCdpConnection } from './MapperCdpConnection.js';
import type { SimpleTransport } from './SimpleTransport.js';
export interface ChromeOptions {
    chromeArgs: string[];
    chromeBinary?: string;
}
/**
 * BrowserProcess is responsible for running the browser and BiDi Mapper within
 * it.
 * 1. Launch Chromium (using Puppeteer for now).
 * 2. Get `BiDi-CDP` mapper JS binaries using `MapperReader`.
 * 3. Run `BiDi-CDP` mapper in launched browser using `MapperRunner`.
 * 4. Bind `BiDi-CDP` mapper to the `BiDi server` to forward messages from BiDi
 * Mapper to the client.
 */
export declare class BrowserInstance {
    #private;
    static run(chromeOptions: ChromeOptions, verbose: boolean): Promise<BrowserInstance>;
    constructor(mapperCdpConnection: MapperServerCdpConnection, browserProcess: Process);
    close(): Promise<void>;
    bidiSession(): SimpleTransport;
}
