import type { CdpClient } from '../../../cdp/CdpClient.js';
import type { Storage } from '../../../protocol/protocol.js';
import type { LoggerFn } from '../../../utils/log.js';
import type { BrowsingContextStorage } from '../context/BrowsingContextStorage.js';
/**
 * Responsible for handling the `storage` module.
 */
export declare class StorageProcessor {
    #private;
    constructor(browserCdpClient: CdpClient, browsingContextStorage: BrowsingContextStorage, logger: LoggerFn | undefined);
    deleteCookies(params: Storage.DeleteCookiesParameters): Promise<Storage.DeleteCookiesResult>;
    getCookies(params: Storage.GetCookiesParameters): Promise<Storage.GetCookiesResult>;
    setCookie(params: Storage.SetCookieParameters): Promise<Storage.SetCookieResult>;
}
