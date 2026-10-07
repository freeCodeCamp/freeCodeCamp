"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const debug_1 = __importDefault(require("debug"));
const utils_1 = require("../utils");
const shared_1 = require("./shared");
const debug = (0, debug_1.default)('devcert:platforms:macos');
const getCertUtilPath = () => path_1.default.join((0, utils_1.run)('brew', ['--prefix', 'nss']).toString().trim(), 'bin', 'certutil');
class MacOSPlatform {
    constructor() {
        this.FIREFOX_BUNDLE_PATH = '/Applications/Firefox.app';
        this.FIREFOX_BIN_PATH = path_1.default.join(this.FIREFOX_BUNDLE_PATH, 'Contents/MacOS/firefox');
        this.FIREFOX_NSS_DIR = path_1.default.join(process.env.HOME, 'Library/Application Support/Firefox/Profiles/*');
        this.HOST_FILE_PATH = '/etc/hosts';
    }
    /**
     * macOS is pretty simple - just add the certificate to the system keychain,
     * and most applications will delegate to that for determining trusted
     * certificates. Firefox, of course, does it's own thing. We can try to
     * automatically install the cert with Firefox if we can use certutil via the
     * `nss` Homebrew package, otherwise we go manual with user-facing prompts.
     */
    async addToTrustStores(certificatePath, options = {}) {
        // Chrome, Safari, system utils
        debug('Adding devcert root CA to macOS system keychain');
        (0, utils_1.run)('sudo', [
            'security',
            'add-trusted-cert',
            '-d',
            '-r',
            'trustRoot',
            '-k',
            '/Library/Keychains/System.keychain',
            '-p',
            'ssl',
            '-p',
            'basic',
            certificatePath
        ]);
        if (this.isFirefoxInstalled()) {
            // Try to use certutil to install the cert automatically
            debug('Firefox install detected. Adding devcert root CA to Firefox trust store');
            if (!this.isNSSInstalled()) {
                if (!options.skipCertutilInstall) {
                    if ((0, utils_1.commandExists)('brew')) {
                        debug(`certutil is not already installed, but Homebrew is detected. Trying to install certutil via Homebrew...`);
                        try {
                            (0, utils_1.run)('brew', ['install', 'nss'], { stdio: 'ignore' });
                        }
                        catch (e) {
                            debug(`brew install nss failed`);
                        }
                    }
                    else {
                        debug(`Homebrew didn't work, so we can't try to install certutil. Falling back to manual certificate install`);
                        return await (0, shared_1.openCertificateInFirefox)(this.FIREFOX_BIN_PATH, certificatePath);
                    }
                }
                else {
                    debug(`certutil is not already installed, and skipCertutilInstall is true, so we have to fall back to a manual install`);
                    return await (0, shared_1.openCertificateInFirefox)(this.FIREFOX_BIN_PATH, certificatePath);
                }
            }
            await (0, shared_1.closeFirefox)();
            await (0, shared_1.addCertificateToNSSCertDB)(this.FIREFOX_NSS_DIR, certificatePath, getCertUtilPath());
        }
        else {
            debug('Firefox does not appear to be installed, skipping Firefox-specific steps...');
        }
    }
    async removeFromTrustStores(certificatePath) {
        debug('Removing devcert root CA from macOS system keychain');
        try {
            (0, utils_1.run)('sudo', [
                'security',
                'remove-trusted-cert',
                '-d',
                certificatePath
            ], {
                stdio: 'ignore'
            });
        }
        catch (e) {
            debug(`failed to remove ${certificatePath} from macOS cert store, continuing. ${e.toString()}`);
        }
        if (this.isFirefoxInstalled() && this.isNSSInstalled()) {
            debug('Firefox install and certutil install detected. Trying to remove root CA from Firefox NSS databases');
            await (0, shared_1.removeCertificateFromNSSCertDB)(this.FIREFOX_NSS_DIR, certificatePath, getCertUtilPath());
        }
    }
    async addDomainToHostFileIfMissing(domain) {
        const trimDomain = domain.trim().replace(/[\s;]/g, '');
        let hostsFileContents = (0, fs_1.readFileSync)(this.HOST_FILE_PATH, 'utf8');
        if (!hostsFileContents.includes(trimDomain)) {
            (0, utils_1.sudoAppend)(this.HOST_FILE_PATH, `127.0.0.1 ${trimDomain}\n`);
        }
    }
    async deleteProtectedFiles(filepath) {
        (0, shared_1.assertNotTouchingFiles)(filepath, 'delete');
        (0, utils_1.run)('sudo', ['rm', '-rf', filepath]);
    }
    async readProtectedFile(filepath) {
        (0, shared_1.assertNotTouchingFiles)(filepath, 'read');
        return (await (0, utils_1.run)('sudo', ['cat', filepath])).toString().trim();
    }
    async writeProtectedFile(filepath, contents) {
        (0, shared_1.assertNotTouchingFiles)(filepath, 'write');
        if ((0, fs_1.existsSync)(filepath)) {
            await (0, utils_1.run)('sudo', ['rm', filepath]);
        }
        (0, fs_1.writeFileSync)(filepath, contents);
        await (0, utils_1.run)('sudo', ['chown', '0', filepath]);
        await (0, utils_1.run)('sudo', ['chmod', '600', filepath]);
    }
    isFirefoxInstalled() {
        return (0, fs_1.existsSync)(this.FIREFOX_BUNDLE_PATH);
    }
    isNSSInstalled() {
        try {
            return (0, utils_1.run)('brew', ['list', '-1']).toString().includes('\nnss\n');
        }
        catch (e) {
            return false;
        }
    }
}
exports.default = MacOSPlatform;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFyd2luLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJwbGF0Zm9ybXMvZGFyd2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsZ0RBQXdCO0FBQ3hCLDJCQUE0RjtBQUM1RixrREFBZ0M7QUFDaEMsb0NBQTBEO0FBRTFELHFDQUFxSjtBQUdySixNQUFNLEtBQUssR0FBRyxJQUFBLGVBQVcsRUFBQyx5QkFBeUIsQ0FBQyxDQUFDO0FBRXJELE1BQU0sZUFBZSxHQUFHLEdBQUcsRUFBRSxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsSUFBQSxXQUFHLEVBQUMsTUFBTSxFQUFFLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBRS9HLE1BQXFCLGFBQWE7SUFBbEM7UUFFVSx3QkFBbUIsR0FBRywyQkFBMkIsQ0FBQztRQUNsRCxxQkFBZ0IsR0FBRyxjQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2pGLG9CQUFlLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxnREFBZ0QsQ0FBQyxDQUFDO1FBRWhHLG1CQUFjLEdBQUcsWUFBWSxDQUFDO0lBb0h4QyxDQUFDO0lBbEhDOzs7Ozs7T0FNRztJQUNILEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxlQUF1QixFQUFFLFVBQW1CLEVBQUU7UUFFbkUsK0JBQStCO1FBQy9CLEtBQUssQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO1FBQ3pELElBQUEsV0FBRyxFQUFDLE1BQU0sRUFBRTtZQUNWLFVBQVU7WUFDVixrQkFBa0I7WUFDbEIsSUFBSTtZQUNKLElBQUk7WUFDSixXQUFXO1lBQ1gsSUFBSTtZQUNKLG9DQUFvQztZQUNwQyxJQUFJO1lBQ0osS0FBSztZQUNMLElBQUk7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QyxDQUFDO0lBRU8sY0FBYztRQUNwQixJQUFJLENBQUM7WUFDSCxPQUFPLElBQUEsV0FBRyxFQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwRSxDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNYLE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQztJQUNILENBQUM7Q0FFRjtBQTFIRCxnQ0EwSEM7QUFBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyB3cml0ZUZpbGVTeW5jIGFzIHdyaXRlRmlsZSwgZXhpc3RzU3luYyBhcyBleGlzdHMsIHJlYWRGaWxlU3luYyBhcyByZWFkIH0gZnJvbSAnZnMnO1xuaW1wb3J0IGNyZWF0ZURlYnVnIGZyb20gJ2RlYnVnJztcbmltcG9ydCB7IHJ1biwgc3Vkb0FwcGVuZCwgY29tbWFuZEV4aXN0cyB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IE9wdGlvbnMgfSBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQgeyBhZGRDZXJ0aWZpY2F0ZVRvTlNTQ2VydERCLCBhc3NlcnROb3RUb3VjaGluZ0ZpbGVzLCBvcGVuQ2VydGlmaWNhdGVJbkZpcmVmb3gsIGNsb3NlRmlyZWZveCwgcmVtb3ZlQ2VydGlmaWNhdGVGcm9tTlNTQ2VydERCIH0gZnJvbSAnLi9zaGFyZWQnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuJztcblxuY29uc3QgZGVidWcgPSBjcmVhdGVEZWJ1ZygnZGV2Y2VydDpwbGF0Zm9ybXM6bWFjb3MnKTtcblxuY29uc3QgZ2V0Q2VydFV0aWxQYXRoID0gKCkgPT4gcGF0aC5qb2luKHJ1bignYnJldycsIFsnLS1wcmVmaXgnLCAnbnNzJ10pLnRvU3RyaW5nKCkudHJpbSgpLCAnYmluJywgJ2NlcnR1dGlsJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hY09TUGxhdGZvcm0gaW1wbGVtZW50cyBQbGF0Zm9ybSB7XG5cbiAgcHJpdmF0ZSBGSVJFRk9YX0JVTkRMRV9QQVRIID0gJy9BcHBsaWNhdGlvbnMvRmlyZWZveC5hcHAnO1xuICBwcml2YXRlIEZJUkVGT1hfQklOX1BBVEggPSBwYXRoLmpvaW4odGhpcy5GSVJFRk9YX0JVTkRMRV9QQVRILCAnQ29udGVudHMvTWFjT1MvZmlyZWZveCcpO1xuICBwcml2YXRlIEZJUkVGT1hfTlNTX0RJUiA9IHBhdGguam9pbihwcm9jZXNzLmVudi5IT01FLCAnTGlicmFyeS9BcHBsaWNhdGlvbiBTdXBwb3J0L0ZpcmVmb3gvUHJvZmlsZXMvKicpO1xuXG4gIHByaXZhdGUgSE9TVF9GSUxFX1BBVEggPSAnL2V0Yy9ob3N0cyc7XG5cbiAgLyoqXG4gICAqIG1hY09TIGlzIHByZXR0eSBzaW1wbGUgLSBqdXN0IGFkZCB0aGUgY2VydGlmaWNhdGUgdG8gdGhlIHN5c3RlbSBrZXljaGFpbixcbiAgICogYW5kIG1vc3QgYXBwbGljYXRpb25zIHdpbGwgZGVsZWdhdGUgdG8gdGhhdCBmb3IgZGV0ZXJtaW5pbmcgdHJ1c3RlZFxuICAgKiBjZXJ0aWZpY2F0ZXMuIEZpcmVmb3gsIG9mIGNvdXJzZSwgZG9lcyBpdCdzIG93biB0aGluZy4gV2UgY2FuIHRyeSB0b1xuICAgKiBhdXRvbWF0aWNhbGx5IGluc3RhbGwgdGhlIGNlcnQgd2l0aCBGaXJlZm94IGlmIHdlIGNhbiB1c2UgY2VydHV0aWwgdmlhIHRoZVxuICAgKiBgbnNzYCBIb21lYnJldyBwYWNrYWdlLCBvdGhlcndpc2Ugd2UgZ28gbWFudWFsIHdpdGggdXNlci1mYWNpbmcgcHJvbXB0cy5cbiAgICovXG4gIGFzeW5jIGFkZFRvVHJ1c3RTdG9yZXMoY2VydGlmaWNhdGVQYXRoOiBzdHJpbmcsIG9wdGlvbnM6IE9wdGlvbnMgPSB7fSk6IFByb21pc2U8dm9pZD4ge1xuXG4gICAgLy8gQ2hyb21lLCBTYWZhcmksIHN5c3RlbSB1dGlsc1xuICAgIGRlYnVnKCdBZGRpbmcgZGV2Y2VydCByb290IENBIHRvIG1hY09TIHN5c3RlbSBrZXljaGFpbicpO1xuICAgIHJ1bignc3VkbycsIFtcbiAgICAgICdzZWN1cml0eScsXG4gICAgICAnYWRkLXRydXN0ZWQtY2VydCcsXG4gICAgICAnLWQnLFxuICAgICAgJy1yJyxcbiAgICAgICd0cnVzdFJvb3QnLFxuICAgICAgJy1rJyxcbiAgICAgICcvTGlicmFyeS9LZXljaGFpbnMvU3lzdGVtLmtleWNoYWluJyxcbiAgICAgICctcCcsXG4gICAgICAnc3NsJyxcbiAgICAgICctcCcsXG4gICAgICAnYmFzaWMnLFxuICAgICAgY2VydGlmaWNhdGVQYXRoXG4gICAgXSk7XG5cbiAgICBpZiAodGhpcy5pc0ZpcmVmb3hJbnN0YWxsZWQoKSkge1xuICAgICAgLy8gVHJ5IHRvIHVzZSBjZXJ0dXRpbCB0byBpbnN0YWxsIHRoZSBjZXJ0IGF1dG9tYXRpY2FsbHlcbiAgICAgIGRlYnVnKCdGaXJlZm94IGluc3RhbGwgZGV0ZWN0ZWQuIEFkZGluZyBkZXZjZXJ0IHJvb3QgQ0EgdG8gRmlyZWZveCB0cnVzdCBzdG9yZScpO1xuICAgICAgaWYgKCF0aGlzLmlzTlNTSW5zdGFsbGVkKCkpIHtcbiAgICAgICAgaWYgKCFvcHRpb25zLnNraXBDZXJ0dXRpbEluc3RhbGwpIHtcbiAgICAgICAgICBpZiAoY29tbWFuZEV4aXN0cygnYnJldycpKSB7XG4gICAgICAgICAgICBkZWJ1ZyhgY2VydHV0aWwgaXMgbm90IGFscmVhZHkgaW5zdGFsbGVkLCBidXQgSG9tZWJyZXcgaXMgZGV0ZWN0ZWQuIFRyeWluZyB0byBpbnN0YWxsIGNlcnR1dGlsIHZpYSBIb21lYnJldy4uLmApO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgcnVuKCdicmV3JywgWydpbnN0YWxsJywgJ25zcyddLCB7IHN0ZGlvOiAnaWdub3JlJyB9KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgZGVidWcoYGJyZXcgaW5zdGFsbCBuc3MgZmFpbGVkYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlYnVnKGBIb21lYnJldyBkaWRuJ3Qgd29yaywgc28gd2UgY2FuJ3QgdHJ5IHRvIGluc3RhbGwgY2VydHV0aWwuIEZhbGxpbmcgYmFjayB0byBtYW51YWwgY2VydGlmaWNhdGUgaW5zdGFsbGApO1xuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IG9wZW5DZXJ0aWZpY2F0ZUluRmlyZWZveCh0aGlzLkZJUkVGT1hfQklOX1BBVEgsIGNlcnRpZmljYXRlUGF0aCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlYnVnKGBjZXJ0dXRpbCBpcyBub3QgYWxyZWFkeSBpbnN0YWxsZWQsIGFuZCBza2lwQ2VydHV0aWxJbnN0YWxsIGlzIHRydWUsIHNvIHdlIGhhdmUgdG8gZmFsbCBiYWNrIHRvIGEgbWFudWFsIGluc3RhbGxgKVxuICAgICAgICAgIHJldHVybiBhd2FpdCBvcGVuQ2VydGlmaWNhdGVJbkZpcmVmb3godGhpcy5GSVJFRk9YX0JJTl9QQVRILCBjZXJ0aWZpY2F0ZVBhdGgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhd2FpdCBjbG9zZUZpcmVmb3goKTtcbiAgICAgIGF3YWl0IGFkZENlcnRpZmljYXRlVG9OU1NDZXJ0REIodGhpcy5GSVJFRk9YX05TU19ESVIsIGNlcnRpZmljYXRlUGF0aCwgZ2V0Q2VydFV0aWxQYXRoKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1ZygnRmlyZWZveCBkb2VzIG5vdCBhcHBlYXIgdG8gYmUgaW5zdGFsbGVkLCBza2lwcGluZyBGaXJlZm94LXNwZWNpZmljIHN0ZXBzLi4uJyk7XG4gICAgfVxuICB9XG4gIFxuICBhc3luYyByZW1vdmVGcm9tVHJ1c3RTdG9yZXMoY2VydGlmaWNhdGVQYXRoOiBzdHJpbmcpIHtcbiAgICBkZWJ1ZygnUmVtb3ZpbmcgZGV2Y2VydCByb290IENBIGZyb20gbWFjT1Mgc3lzdGVtIGtleWNoYWluJyk7XG4gICAgdHJ5IHtcbiAgICAgIHJ1bignc3VkbycsIFtcbiAgICAgICAgJ3NlY3VyaXR5JyxcbiAgICAgICAgJ3JlbW92ZS10cnVzdGVkLWNlcnQnLFxuICAgICAgICAnLWQnLFxuICAgICAgICBjZXJ0aWZpY2F0ZVBhdGhcbiAgICAgIF0sIHtcbiAgICAgICAgc3RkaW86ICdpZ25vcmUnXG4gICAgICB9KTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIGRlYnVnKGBmYWlsZWQgdG8gcmVtb3ZlICR7IGNlcnRpZmljYXRlUGF0aCB9IGZyb20gbWFjT1MgY2VydCBzdG9yZSwgY29udGludWluZy4gJHsgZS50b1N0cmluZygpIH1gKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNGaXJlZm94SW5zdGFsbGVkKCkgJiYgdGhpcy5pc05TU0luc3RhbGxlZCgpKSB7XG4gICAgICBkZWJ1ZygnRmlyZWZveCBpbnN0YWxsIGFuZCBjZXJ0dXRpbCBpbnN0YWxsIGRldGVjdGVkLiBUcnlpbmcgdG8gcmVtb3ZlIHJvb3QgQ0EgZnJvbSBGaXJlZm94IE5TUyBkYXRhYmFzZXMnKTtcbiAgICAgIGF3YWl0IHJlbW92ZUNlcnRpZmljYXRlRnJvbU5TU0NlcnREQih0aGlzLkZJUkVGT1hfTlNTX0RJUiwgY2VydGlmaWNhdGVQYXRoLCBnZXRDZXJ0VXRpbFBhdGgoKSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgYWRkRG9tYWluVG9Ib3N0RmlsZUlmTWlzc2luZyhkb21haW46IHN0cmluZykge1xuICAgIGNvbnN0IHRyaW1Eb21haW4gPSBkb21haW4udHJpbSgpLnJlcGxhY2UoL1tcXHM7XS9nLCcnKVxuICAgIGxldCBob3N0c0ZpbGVDb250ZW50cyA9IHJlYWQodGhpcy5IT1NUX0ZJTEVfUEFUSCwgJ3V0ZjgnKTtcbiAgICBpZiAoIWhvc3RzRmlsZUNvbnRlbnRzLmluY2x1ZGVzKHRyaW1Eb21haW4pKSB7XG4gICAgICBzdWRvQXBwZW5kKHRoaXMuSE9TVF9GSUxFX1BBVEgsIGAxMjcuMC4wLjEgJHt0cmltRG9tYWlufVxcbmApO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGRlbGV0ZVByb3RlY3RlZEZpbGVzKGZpbGVwYXRoOiBzdHJpbmcpIHtcbiAgICBhc3NlcnROb3RUb3VjaGluZ0ZpbGVzKGZpbGVwYXRoLCAnZGVsZXRlJyk7XG4gICAgcnVuKCdzdWRvJywgWydybScsICctcmYnLCBmaWxlcGF0aF0pO1xuICB9XG5cbiAgYXN5bmMgcmVhZFByb3RlY3RlZEZpbGUoZmlsZXBhdGg6IHN0cmluZykge1xuICAgIGFzc2VydE5vdFRvdWNoaW5nRmlsZXMoZmlsZXBhdGgsICdyZWFkJyk7XG4gICAgcmV0dXJuIChhd2FpdCBydW4oJ3N1ZG8nLCBbJ2NhdCcsIGZpbGVwYXRoXSkpLnRvU3RyaW5nKCkudHJpbSgpO1xuICB9XG5cbiAgYXN5bmMgd3JpdGVQcm90ZWN0ZWRGaWxlKGZpbGVwYXRoOiBzdHJpbmcsIGNvbnRlbnRzOiBzdHJpbmcpIHtcbiAgICBhc3NlcnROb3RUb3VjaGluZ0ZpbGVzKGZpbGVwYXRoLCAnd3JpdGUnKTtcbiAgICBpZiAoZXhpc3RzKGZpbGVwYXRoKSkge1xuICAgICAgYXdhaXQgcnVuKCdzdWRvJywgWydybScsIGZpbGVwYXRoXSk7XG4gICAgfVxuICAgIHdyaXRlRmlsZShmaWxlcGF0aCwgY29udGVudHMpO1xuICAgIGF3YWl0IHJ1bignc3VkbycsIFsnY2hvd24nLCAnMCcsIGZpbGVwYXRoXSk7XG4gICAgYXdhaXQgcnVuKCdzdWRvJywgWydjaG1vZCcsICc2MDAnLCBmaWxlcGF0aF0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0ZpcmVmb3hJbnN0YWxsZWQoKSB7XG4gICAgcmV0dXJuIGV4aXN0cyh0aGlzLkZJUkVGT1hfQlVORExFX1BBVEgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpc05TU0luc3RhbGxlZCgpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHJ1bignYnJldycsIFsnbGlzdCcsICctMSddKS50b1N0cmluZygpLmluY2x1ZGVzKCdcXG5uc3NcXG4nKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbn07XG4iXX0=