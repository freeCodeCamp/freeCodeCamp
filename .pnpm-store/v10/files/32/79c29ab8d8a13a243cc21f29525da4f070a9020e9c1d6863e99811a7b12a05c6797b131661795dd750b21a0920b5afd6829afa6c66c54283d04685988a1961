import { Options } from '../index';
import { Platform } from '.';
export default class WindowsPlatform implements Platform {
    private HOST_FILE_PATH;
    /**
     * Windows is at least simple. Like macOS, most applications will delegate to
     * the system trust store, which is updated with the confusingly named
     * `certutil` exe (not the same as the NSS/Mozilla certutil). Firefox does it's
     * own thing as usual, and getting a copy of NSS certutil onto the Windows
     * machine to try updating the Firefox store is basically a nightmare, so we
     * don't even try it - we just bail out to the GUI.
     */
    addToTrustStores(certificatePath: string, options?: Options): Promise<void>;
    removeFromTrustStores(certificatePath: string): Promise<void>;
    addDomainToHostFileIfMissing(domain: string): Promise<void>;
    deleteProtectedFiles(filepath: string): Promise<void>;
    readProtectedFile(filepath: string): Promise<string>;
    writeProtectedFile(filepath: string, contents: string): Promise<void>;
    private encrypt;
    private decrypt;
}
