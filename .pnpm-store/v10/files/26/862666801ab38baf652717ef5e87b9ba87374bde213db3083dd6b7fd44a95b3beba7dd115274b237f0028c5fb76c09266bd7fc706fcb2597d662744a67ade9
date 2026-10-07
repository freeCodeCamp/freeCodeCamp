"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = require("fs");
const debug_1 = __importDefault(require("debug"));
const shared_1 = require("./shared");
const utils_1 = require("../utils");
const user_interface_1 = __importDefault(require("../user-interface"));
const debug = (0, debug_1.default)('devcert:platforms:linux');
class LinuxPlatform {
    constructor() {
        this.FIREFOX_NSS_DIR = path_1.default.join(process.env.HOME, '.mozilla/firefox/*');
        this.CHROME_NSS_DIR = path_1.default.join(process.env.HOME, '.pki/nssdb');
        this.FIREFOX_BIN_PATH = '/usr/bin/firefox';
        this.CHROME_BIN_PATH = '/usr/bin/google-chrome';
        this.HOST_FILE_PATH = '/etc/hosts';
    }
    /**
     * Linux is surprisingly difficult. There seems to be multiple system-wide
     * repositories for certs, so we copy ours to each. However, Firefox does it's
     * usual separate trust store. Plus Chrome relies on the NSS tooling (like
     * Firefox), but uses the user's NSS database, unlike Firefox (which uses a
     * separate Mozilla one). And since Chrome doesn't prompt the user with a GUI
     * flow when opening certs, if we can't use certutil to install our certificate
     * into the user's NSS database, we're out of luck.
     */
    async addToTrustStores(certificatePath, options = {}) {
        debug('Adding devcert root CA to Linux system-wide trust stores');
        // run(`sudo cp ${ certificatePath } /etc/ssl/certs/devcert.crt`);
        (0, utils_1.run)('sudo', ['cp', certificatePath, '/usr/local/share/ca-certificates/devcert.crt']);
        // run(`sudo bash -c "cat ${ certificatePath } >> /etc/ssl/certs/ca-certificates.crt"`);
        (0, utils_1.run)('sudo', ['update-ca-certificates']);
        if (this.isFirefoxInstalled()) {
            // Firefox
            debug('Firefox install detected: adding devcert root CA to Firefox-specific trust stores ...');
            if (!(0, utils_1.commandExists)('certutil')) {
                if (options.skipCertutilInstall) {
                    debug('NSS tooling is not already installed, and `skipCertutil` is true, so falling back to manual certificate install for Firefox');
                    (0, shared_1.openCertificateInFirefox)(this.FIREFOX_BIN_PATH, certificatePath);
                }
                else {
                    debug('NSS tooling is not already installed. Trying to install NSS tooling now with `apt install`');
                    (0, utils_1.run)('sudo', ['apt', 'install', 'libnss3-tools']);
                    debug('Installing certificate into Firefox trust stores using NSS tooling');
                    await (0, shared_1.closeFirefox)();
                    await (0, shared_1.addCertificateToNSSCertDB)(this.FIREFOX_NSS_DIR, certificatePath, 'certutil');
                }
            }
        }
        else {
            debug('Firefox does not appear to be installed, skipping Firefox-specific steps...');
        }
        if (this.isChromeInstalled()) {
            debug('Chrome install detected: adding devcert root CA to Chrome trust store ...');
            if (!(0, utils_1.commandExists)('certutil')) {
                user_interface_1.default.warnChromeOnLinuxWithoutCertutil();
            }
            else {
                await (0, shared_1.closeFirefox)();
                await (0, shared_1.addCertificateToNSSCertDB)(this.CHROME_NSS_DIR, certificatePath, 'certutil');
            }
        }
        else {
            debug('Chrome does not appear to be installed, skipping Chrome-specific steps...');
        }
    }
    async removeFromTrustStores(certificatePath) {
        try {
            (0, utils_1.run)('sudo', ['rm', '/usr/local/share/ca-certificates/devcert.crt']);
            (0, utils_1.run)('sudo', ['update-ca-certificates']);
        }
        catch (e) {
            debug(`failed to remove ${certificatePath} from /usr/local/share/ca-certificates, continuing. ${e.toString()}`);
        }
        if ((0, utils_1.commandExists)('certutil')) {
            if (this.isFirefoxInstalled()) {
                await (0, shared_1.removeCertificateFromNSSCertDB)(this.FIREFOX_NSS_DIR, certificatePath, 'certutil');
            }
            if (this.isChromeInstalled()) {
                await (0, shared_1.removeCertificateFromNSSCertDB)(this.CHROME_NSS_DIR, certificatePath, 'certutil');
            }
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
        return (0, fs_1.existsSync)(this.FIREFOX_BIN_PATH);
    }
    isChromeInstalled() {
        return (0, fs_1.existsSync)(this.CHROME_BIN_PATH);
    }
}
exports.default = LinuxPlatform;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGludXguanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbInBsYXRmb3Jtcy9saW51eC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGdEQUF3QjtBQUN4QiwyQkFBNEY7QUFDNUYsa0RBQWdDO0FBQ2hDLHFDQUFxSjtBQUNySixvQ0FBMEQ7QUFFMUQsdUVBQW1DO0FBR25DLE1BQU0sS0FBSyxHQUFHLElBQUEsZUFBVyxFQUFDLHlCQUF5QixDQUFDLENBQUM7QUFFckQsTUFBcUIsYUFBYTtJQUFsQztRQUVVLG9CQUFlLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3BFLG1CQUFjLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQztRQUMzRCxxQkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQztRQUN0QyxvQkFBZSxHQUFHLHdCQUF3QixDQUFDO1FBRTNDLG1CQUFjLEdBQUcsWUFBWSxDQUFDO0lBd0d4QyxDQUFDO0lBdEdDOzs7Ozs7OztPQVFHO0lBQ0gsS0FBSyxDQUFDLGdCQUFnQixDQUFDLGVBQXVCLEVBQUUsVUFBbUIsRUFBRTtRQUVuRSxLQUFLLENBQUMsMERBQTBELENBQUMsQ0FBQztRQUNsRSxrRUFBa0U7UUFDbEUsSUFBQSxXQUFHLEVBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSw4Q0FBOEMsQ0FBQyxDQUFDLENBQUM7UUFDckYsd0ZBQXdGO1FBQ3hGLElBQUEsV0FBRyxFQUFDLE1BQU0sRUFBRSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztRQUV4QyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLENBQUM7WUFDOUIsVUFBVTtZQUNWLEtBQUssQ0FBQyx1RkFBdUYsQ0FBQyxDQUFDO1lBQy9GLElBQUksQ0FBQyxJQUFBLHFCQUFh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LGdCQUFnQixDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVPLGlCQUFpQjtRQUN2QixPQUFPLElBQUEsZUFBTSxFQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN0QyxDQUFDO0NBRUY7QUEvR0QsZ0NBK0dDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBleGlzdHNTeW5jIGFzIGV4aXN0cywgcmVhZEZpbGVTeW5jIGFzIHJlYWQsIHdyaXRlRmlsZVN5bmMgYXMgd3JpdGVGaWxlIH0gZnJvbSAnZnMnO1xuaW1wb3J0IGNyZWF0ZURlYnVnIGZyb20gJ2RlYnVnJztcbmltcG9ydCB7IGFkZENlcnRpZmljYXRlVG9OU1NDZXJ0REIsIGFzc2VydE5vdFRvdWNoaW5nRmlsZXMsIG9wZW5DZXJ0aWZpY2F0ZUluRmlyZWZveCwgY2xvc2VGaXJlZm94LCByZW1vdmVDZXJ0aWZpY2F0ZUZyb21OU1NDZXJ0REIgfSBmcm9tICcuL3NoYXJlZCc7XG5pbXBvcnQgeyBydW4sIHN1ZG9BcHBlbmQsIGNvbW1hbmRFeGlzdHMgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBPcHRpb25zIH0gZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IFVJIGZyb20gJy4uL3VzZXItaW50ZXJmYWNlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLic7XG5cbmNvbnN0IGRlYnVnID0gY3JlYXRlRGVidWcoJ2RldmNlcnQ6cGxhdGZvcm1zOmxpbnV4Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbnV4UGxhdGZvcm0gaW1wbGVtZW50cyBQbGF0Zm9ybSB7XG5cbiAgcHJpdmF0ZSBGSVJFRk9YX05TU19ESVIgPSBwYXRoLmpvaW4ocHJvY2Vzcy5lbnYuSE9NRSwgJy5tb3ppbGxhL2ZpcmVmb3gvKicpO1xuICBwcml2YXRlIENIUk9NRV9OU1NfRElSID0gcGF0aC5qb2luKHByb2Nlc3MuZW52LkhPTUUsICcucGtpL25zc2RiJyk7XG4gIHByaXZhdGUgRklSRUZPWF9CSU5fUEFUSCA9ICcvdXNyL2Jpbi9maXJlZm94JztcbiAgcHJpdmF0ZSBDSFJPTUVfQklOX1BBVEggPSAnL3Vzci9iaW4vZ29vZ2xlLWNocm9tZSc7XG5cbiAgcHJpdmF0ZSBIT1NUX0ZJTEVfUEFUSCA9ICcvZXRjL2hvc3RzJztcblxuICAvKipcbiAgICogTGludXggaXMgc3VycHJpc2luZ2x5IGRpZmZpY3VsdC4gVGhlcmUgc2VlbXMgdG8gYmUgbXVsdGlwbGUgc3lzdGVtLXdpZGVcbiAgICogcmVwb3NpdG9yaWVzIGZvciBjZXJ0cywgc28gd2UgY29weSBvdXJzIHRvIGVhY2guIEhvd2V2ZXIsIEZpcmVmb3ggZG9lcyBpdCdzXG4gICAqIHVzdWFsIHNlcGFyYXRlIHRydXN0IHN0b3JlLiBQbHVzIENocm9tZSByZWxpZXMgb24gdGhlIE5TUyB0b29saW5nIChsaWtlXG4gICAqIEZpcmVmb3gpLCBidXQgdXNlcyB0aGUgdXNlcidzIE5TUyBkYXRhYmFzZSwgdW5saWtlIEZpcmVmb3ggKHdoaWNoIHVzZXMgYVxuICAgKiBzZXBhcmF0ZSBNb3ppbGxhIG9uZSkuIEFuZCBzaW5jZSBDaHJvbWUgZG9lc24ndCBwcm9tcHQgdGhlIHVzZXIgd2l0aCBhIEdVSVxuICAgKiBmbG93IHdoZW4gb3BlbmluZyBjZXJ0cywgaWYgd2UgY2FuJ3QgdXNlIGNlcnR1dGlsIHRvIGluc3RhbGwgb3VyIGNlcnRpZmljYXRlXG4gICAqIGludG8gdGhlIHVzZXIncyBOU1MgZGF0YWJhc2UsIHdlJ3JlIG91dCBvZiBsdWNrLlxuICAgKi9cbiAgYXN5bmMgYWRkVG9UcnVzdFN0b3JlcyhjZXJ0aWZpY2F0ZVBhdGg6IHN0cmluZywgb3B0aW9uczogT3B0aW9ucyA9IHt9KTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICBkZWJ1ZygnQWRkaW5nIGRldmNlcnQgcm9vdCBDQSB0byBMaW51eCBzeXN0ZW0td2lkZSB0cnVzdCBzdG9yZXMnKTtcbiAgICAvLyBydW4oYHN1ZG8gY3AgJHsgY2VydGlmaWNhdGVQYXRoIH0gL2V0Yy9zc2wvY2VydHMvZGV2Y2VydC5jcnRgKTtcbiAgICBydW4oJ3N1ZG8nLCBbJ2NwJywgY2VydGlmaWNhdGVQYXRoLCAnL3Vzci9sb2NhbC9zaGFyZS9jYS1jZXJ0aWZpY2F0ZXMvZGV2Y2VydC5jcnQnXSk7XG4gICAgLy8gcnVuKGBzdWRvIGJhc2ggLWMgXCJjYXQgJHsgY2VydGlmaWNhdGVQYXRoIH0gPj4gL2V0Yy9zc2wvY2VydHMvY2EtY2VydGlmaWNhdGVzLmNydFwiYCk7XG4gICAgcnVuKCdzdWRvJywgWyd1cGRhdGUtY2EtY2VydGlmaWNhdGVzJ10pO1xuXG4gICAgaWYgKHRoaXMuaXNGaXJlZm94SW5zdGFsbGVkKCkpIHtcbiAgICAgIC8vIEZpcmVmb3hcbiAgICAgIGRlYnVnKCdGaXJlZm94IGluc3RhbGwgZGV0ZWN0ZWQ6IGFkZGluZyBkZXZjZXJ0IHJvb3QgQ0EgdG8gRmlyZWZveC1zcGVjaWZpYyB0cnVzdCBzdG9yZXMgLi4uJyk7XG4gICAgICBpZiAoIWNvbW1hbmRFeGlzdHMoJ2NlcnR1dGlsJykpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuc2tpcENlcnR1dGlsSW5zdGFsbCkge1xuICAgICAgICAgIGRlYnVnKCdOU1MgdG9vbGluZyBpcyBub3QgYWxyZWFkeSBpbnN0YWxsZWQsIGFuZCBgc2tpcENlcnR1dGlsYCBpcyB0cnVlLCBzbyBmYWxsaW5nIGJhY2sgdG8gbWFudWFsIGNlcnRpZmljYXRlIGluc3RhbGwgZm9yIEZpcmVmb3gnKTtcbiAgICAgICAgICBvcGVuQ2VydGlmaWNhdGVJbkZpcmVmb3godGhpcy5GSVJFRk9YX0JJTl9QQVRILCBjZXJ0aWZpY2F0ZVBhdGgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlYnVnKCdOU1MgdG9vbGluZyBpcyBub3QgYWxyZWFkeSBpbnN0YWxsZWQuIFRyeWluZyB0byBpbnN0YWxsIE5TUyB0b29saW5nIG5vdyB3aXRoIGBhcHQgaW5zdGFsbGAnKTtcbiAgICAgICAgICBydW4oJ3N1ZG8nLCAgWydhcHQnLCAnaW5zdGFsbCcsICdsaWJuc3MzLXRvb2xzJ10pO1xuICAgICAgICAgIGRlYnVnKCdJbnN0YWxsaW5nIGNlcnRpZmljYXRlIGludG8gRmlyZWZveCB0cnVzdCBzdG9yZXMgdXNpbmcgTlNTIHRvb2xpbmcnKTtcbiAgICAgICAgICBhd2FpdCBjbG9zZUZpcmVmb3goKTtcbiAgICAgICAgICBhd2FpdCBhZGRDZXJ0aWZpY2F0ZVRvTlNTQ2VydERCKHRoaXMuRklSRUZPWF9OU1NfRElSLCBjZXJ0aWZpY2F0ZVBhdGgsICdjZXJ0dXRpbCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlYnVnKCdGaXJlZm94IGRvZXMgbm90IGFwcGVhciB0byBiZSBpbnN0YWxsZWQsIHNraXBwaW5nIEZpcmVmb3gtc3BlY2lmaWMgc3RlcHMuLi4nKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0Nocm9tZUluc3RhbGxlZCgpKSB7XG4gICAgICBkZWJ1ZygnQ2hyb21lIGluc3RhbGwgZGV0ZWN0ZWQ6IGFkZGluZyBkZXZjZXJ0IHJvb3QgQ0EgdG8gQ2hyb21lIHRydXN0IHN0b3JlIC4uLicpO1xuICAgICAgaWYgKCFjb21tYW5kRXhpc3RzKCdjZXJ0dXRpbCcpKSB7XG4gICAgICAgIFVJLndhcm5DaHJvbWVPbkxpbnV4V2l0aG91dENlcnR1dGlsKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhd2FpdCBjbG9zZUZpcmVmb3goKTtcbiAgICAgICAgYXdhaXQgYWRkQ2VydGlmaWNhdGVUb05TU0NlcnREQih0aGlzLkNIUk9NRV9OU1NfRElSLCBjZXJ0aWZpY2F0ZVBhdGgsICdjZXJ0dXRpbCcpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkZWJ1ZygnQ2hyb21lIGRvZXMgbm90IGFwcGVhciB0byBiZSBpbnN0YWxsZWQsIHNraXBwaW5nIENocm9tZS1zcGVjaWZpYyBzdGVwcy4uLicpO1xuICAgIH1cbiAgfVxuICBcbiAgYXN5bmMgcmVtb3ZlRnJvbVRydXN0U3RvcmVzKGNlcnRpZmljYXRlUGF0aDogc3RyaW5nKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJ1bignc3VkbycsIFsncm0nLCAnL3Vzci9sb2NhbC9zaGFyZS9jYS1jZXJ0aWZpY2F0ZXMvZGV2Y2VydC5jcnQnXSk7XG4gICAgICBydW4oJ3N1ZG8nLCBbJ3VwZGF0ZS1jYS1jZXJ0aWZpY2F0ZXMnXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZGVidWcoYGZhaWxlZCB0byByZW1vdmUgJHsgY2VydGlmaWNhdGVQYXRoIH0gZnJvbSAvdXNyL2xvY2FsL3NoYXJlL2NhLWNlcnRpZmljYXRlcywgY29udGludWluZy4gJHsgZS50b1N0cmluZygpIH1gKTtcbiAgICB9XG4gICAgaWYgKGNvbW1hbmRFeGlzdHMoJ2NlcnR1dGlsJykpIHtcbiAgICAgIGlmICh0aGlzLmlzRmlyZWZveEluc3RhbGxlZCgpKSB7XG4gICAgICAgIGF3YWl0IHJlbW92ZUNlcnRpZmljYXRlRnJvbU5TU0NlcnREQih0aGlzLkZJUkVGT1hfTlNTX0RJUiwgY2VydGlmaWNhdGVQYXRoLCAnY2VydHV0aWwnKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmlzQ2hyb21lSW5zdGFsbGVkKCkpIHtcbiAgICAgICAgYXdhaXQgcmVtb3ZlQ2VydGlmaWNhdGVGcm9tTlNTQ2VydERCKHRoaXMuQ0hST01FX05TU19ESVIsIGNlcnRpZmljYXRlUGF0aCwgJ2NlcnR1dGlsJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgYWRkRG9tYWluVG9Ib3N0RmlsZUlmTWlzc2luZyhkb21haW46IHN0cmluZykge1xuICAgIGNvbnN0IHRyaW1Eb21haW4gPSBkb21haW4udHJpbSgpLnJlcGxhY2UoL1tcXHM7XS9nLCcnKVxuICAgIGxldCBob3N0c0ZpbGVDb250ZW50cyA9IHJlYWQodGhpcy5IT1NUX0ZJTEVfUEFUSCwgJ3V0ZjgnKTtcbiAgICBpZiAoIWhvc3RzRmlsZUNvbnRlbnRzLmluY2x1ZGVzKHRyaW1Eb21haW4pKSB7XG4gICAgICBzdWRvQXBwZW5kKHRoaXMuSE9TVF9GSUxFX1BBVEgsIGAxMjcuMC4wLjEgJHt0cmltRG9tYWlufVxcbmApO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGRlbGV0ZVByb3RlY3RlZEZpbGVzKGZpbGVwYXRoOiBzdHJpbmcpIHtcbiAgICBhc3NlcnROb3RUb3VjaGluZ0ZpbGVzKGZpbGVwYXRoLCAnZGVsZXRlJyk7XG4gICAgcnVuKCdzdWRvJywgWydybScsICctcmYnLCBmaWxlcGF0aF0pO1xuICB9XG5cbiAgYXN5bmMgcmVhZFByb3RlY3RlZEZpbGUoZmlsZXBhdGg6IHN0cmluZykge1xuICAgIGFzc2VydE5vdFRvdWNoaW5nRmlsZXMoZmlsZXBhdGgsICdyZWFkJyk7XG4gICAgcmV0dXJuIChhd2FpdCBydW4oJ3N1ZG8nLCBbJ2NhdCcsIGZpbGVwYXRoXSkpLnRvU3RyaW5nKCkudHJpbSgpO1xuICB9XG5cbiAgYXN5bmMgd3JpdGVQcm90ZWN0ZWRGaWxlKGZpbGVwYXRoOiBzdHJpbmcsIGNvbnRlbnRzOiBzdHJpbmcpIHtcbiAgICBhc3NlcnROb3RUb3VjaGluZ0ZpbGVzKGZpbGVwYXRoLCAnd3JpdGUnKTtcbiAgICBpZiAoZXhpc3RzKGZpbGVwYXRoKSkge1xuICAgICAgYXdhaXQgcnVuKCdzdWRvJywgWydybScsIGZpbGVwYXRoXSk7XG4gICAgfVxuICAgIHdyaXRlRmlsZShmaWxlcGF0aCwgY29udGVudHMpO1xuICAgIGF3YWl0IHJ1bignc3VkbycsIFsnY2hvd24nLCAnMCcsIGZpbGVwYXRoXSk7XG4gICAgYXdhaXQgcnVuKCdzdWRvJywgWydjaG1vZCcsICc2MDAnLCBmaWxlcGF0aF0pO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0ZpcmVmb3hJbnN0YWxsZWQoKSB7XG4gICAgcmV0dXJuIGV4aXN0cyh0aGlzLkZJUkVGT1hfQklOX1BBVEgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0Nocm9tZUluc3RhbGxlZCgpIHtcbiAgICByZXR1cm4gZXhpc3RzKHRoaXMuQ0hST01FX0JJTl9QQVRIKTtcbiAgfVxuXG59XG4iXX0=