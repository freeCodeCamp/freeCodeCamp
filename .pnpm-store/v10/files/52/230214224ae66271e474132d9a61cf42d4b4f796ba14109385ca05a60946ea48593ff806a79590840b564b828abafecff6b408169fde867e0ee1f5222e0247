import { Options } from '../index';
import { Platform } from '.';
export default class MacOSPlatform implements Platform {
    private FIREFOX_BUNDLE_PATH;
    private FIREFOX_BIN_PATH;
    private FIREFOX_NSS_DIR;
    private HOST_FILE_PATH;
    /**
     * macOS is pretty simple - just add the certificate to the system keychain,
     * and most applications will delegate to that for determining trusted
     * certificates. Firefox, of course, does it's own thing. We can try to
     * automatically install the cert with Firefox if we can use certutil via the
     * `nss` Homebrew package, otherwise we go manual with user-facing prompts.
     */
    addToTrustStores(certificatePath: string, options?: Options): Promise<void>;
    removeFromTrustStores(certificatePath: string): Promise<void>;
    addDomainToHostFileIfMissing(domain: string): Promise<void>;
    deleteProtectedFiles(filepath: string): Promise<void>;
    readProtectedFile(filepath: string): Promise<string>;
    writeProtectedFile(filepath: string, contents: string): Promise<void>;
    private isFirefoxInstalled;
    private isNSSInstalled;
}
