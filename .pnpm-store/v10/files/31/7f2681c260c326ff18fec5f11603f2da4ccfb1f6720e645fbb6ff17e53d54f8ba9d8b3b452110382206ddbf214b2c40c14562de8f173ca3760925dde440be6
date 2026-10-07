import { Options } from '../index';
import { Platform } from '.';
export default class LinuxPlatform implements Platform {
    private FIREFOX_NSS_DIR;
    private CHROME_NSS_DIR;
    private FIREFOX_BIN_PATH;
    private CHROME_BIN_PATH;
    private HOST_FILE_PATH;
    /**
     * Linux is surprisingly difficult. There seems to be multiple system-wide
     * repositories for certs, so we copy ours to each. However, Firefox does it's
     * usual separate trust store. Plus Chrome relies on the NSS tooling (like
     * Firefox), but uses the user's NSS database, unlike Firefox (which uses a
     * separate Mozilla one). And since Chrome doesn't prompt the user with a GUI
     * flow when opening certs, if we can't use certutil to install our certificate
     * into the user's NSS database, we're out of luck.
     */
    addToTrustStores(certificatePath: string, options?: Options): Promise<void>;
    removeFromTrustStores(certificatePath: string): Promise<void>;
    addDomainToHostFileIfMissing(domain: string): Promise<void>;
    deleteProtectedFiles(filepath: string): Promise<void>;
    readProtectedFile(filepath: string): Promise<string>;
    writeProtectedFile(filepath: string, contents: string): Promise<void>;
    private isFirefoxInstalled;
    private isChromeInstalled;
}
