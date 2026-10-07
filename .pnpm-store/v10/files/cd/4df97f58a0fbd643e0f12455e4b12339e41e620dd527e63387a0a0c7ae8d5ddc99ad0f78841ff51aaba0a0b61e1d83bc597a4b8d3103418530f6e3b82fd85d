"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
const crypto_1 = __importDefault(require("crypto"));
const fs_1 = require("fs");
const shared_1 = require("./shared");
const utils_1 = require("../utils");
const user_interface_1 = __importDefault(require("../user-interface"));
const debug = (0, debug_1.default)('devcert:platforms:windows');
let encryptionKey;
class WindowsPlatform {
    constructor() {
        this.HOST_FILE_PATH = 'C:\\Windows\\System32\\Drivers\\etc\\hosts';
    }
    /**
     * Windows is at least simple. Like macOS, most applications will delegate to
     * the system trust store, which is updated with the confusingly named
     * `certutil` exe (not the same as the NSS/Mozilla certutil). Firefox does it's
     * own thing as usual, and getting a copy of NSS certutil onto the Windows
     * machine to try updating the Firefox store is basically a nightmare, so we
     * don't even try it - we just bail out to the GUI.
     */
    async addToTrustStores(certificatePath, options = {}) {
        // IE, Chrome, system utils
        debug('adding devcert root to Windows OS trust store');
        try {
            (0, utils_1.run)('certutil', ['-addstore', '-user', 'root', certificatePath]);
        }
        catch (e) {
            e.output.map((buffer) => {
                if (buffer) {
                    console.log(buffer.toString());
                }
            });
        }
        debug('adding devcert root to Firefox trust store');
        // Firefox (don't even try NSS certutil, no easy install for Windows)
        try {
            await (0, shared_1.openCertificateInFirefox)('start firefox', certificatePath);
        }
        catch (_a) {
            debug('Error opening Firefox, most likely Firefox is not installed');
        }
    }
    async removeFromTrustStores(certificatePath) {
        debug('removing devcert root from Windows OS trust store');
        try {
            console.warn('Removing old certificates from trust stores. You may be prompted to grant permission for this. It\'s safe to delete old devcert certificates.');
            (0, utils_1.run)('certutil', ['-delstore', '-user', 'root', 'devcert']);
        }
        catch (e) {
            debug(`failed to remove ${certificatePath} from Windows OS trust store, continuing. ${e.toString()}`);
        }
    }
    async addDomainToHostFileIfMissing(domain) {
        let hostsFileContents = (0, fs_1.readFileSync)(this.HOST_FILE_PATH, 'utf8');
        if (!hostsFileContents.includes(domain)) {
            await (0, utils_1.sudo)(`echo 127.0.0.1  ${domain} >> ${this.HOST_FILE_PATH}`);
        }
    }
    async deleteProtectedFiles(filepath) {
        (0, shared_1.assertNotTouchingFiles)(filepath, 'delete');
        (0, fs_1.rmSync)(filepath, { force: true, recursive: true });
    }
    async readProtectedFile(filepath) {
        (0, shared_1.assertNotTouchingFiles)(filepath, 'read');
        if (!encryptionKey) {
            encryptionKey = await user_interface_1.default.getWindowsEncryptionPassword();
        }
        // Try to decrypt the file
        try {
            return this.decrypt((0, fs_1.readFileSync)(filepath, 'utf8'), encryptionKey);
        }
        catch (e) {
            // If it's a bad password, clear the cached copy and retry
            if (e.message.indexOf('bad decrypt') >= -1) {
                encryptionKey = null;
                return await this.readProtectedFile(filepath);
            }
            throw e;
        }
    }
    async writeProtectedFile(filepath, contents) {
        (0, shared_1.assertNotTouchingFiles)(filepath, 'write');
        if (!encryptionKey) {
            encryptionKey = await user_interface_1.default.getWindowsEncryptionPassword();
        }
        let encryptedContents = this.encrypt(contents, encryptionKey);
        (0, fs_1.writeFileSync)(filepath, encryptedContents);
    }
    encrypt(text, key) {
        let cipher = crypto_1.default.createCipher('aes256', Buffer.from(key));
        return cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
    }
    decrypt(encrypted, key) {
        let decipher = crypto_1.default.createDecipher('aes256', Buffer.from(key));
        return decipher.update(encrypted, 'hex', 'utf8') + decipher.final('utf8');
    }
}
exports.default = WindowsPlatform;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luMzIuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbInBsYXRmb3Jtcy93aW4zMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtEQUFnQztBQUNoQyxvREFBNEI7QUFDNUIsMkJBQWdGO0FBRWhGLHFDQUE0RTtBQUU1RSxvQ0FBcUM7QUFDckMsdUVBQW1DO0FBRW5DLE1BQU0sS0FBSyxHQUFHLElBQUEsZUFBVyxFQUFDLDJCQUEyQixDQUFDLENBQUM7QUFFdkQsSUFBSSxhQUFxQixDQUFDO0FBRTFCLE1BQXFCLGVBQWU7SUFBcEM7UUFFVSxtQkFBYyxHQUFHLDRDQUE0QyxDQUFDO0lBMEZ4RSxDQUFDO0lBeEZDOzs7Ozs7O09BT0c7SUFDSCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsZUFBdUIsRUFBRSxVQUFtQixFQUFFO1FBQ25FLDJCQUEyQjtRQUMzQixLQUFLLENBQUMsK0NBQStDLENBQUMsQ0FBQTtRQUN0RCxJQUFJLENBQUM7WUFDSCxJQUFBLFdBQUcsRUFBQyxVQUFVLEVBQUUsQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQ25FLENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1gsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFjLEVBQUUsRUFBRTtnQkFDOUIsSUFBSSxNQUFNLEVBQUUsQ0FBQztvQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUNqQyxDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0QsS0FBSyxDQUFDLDRDQUE0QyxDQUFDLENBQUE7UUFDbkQscUVBQXFFO1FBQ3JFLElBQUksQ0FBQztZQUNILE1BQU0sSUFBQSxpQ0FBd0IsRUFBQyxlQUFlLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDbkUsQ0FBQztRQUFDLFdBQU0sQ0FBQztZQUNQLEtB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QUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFTyxPQUFPLENBQUMsU0FBaUIsRUFBRSxHQUFXO1FBQzVDLElBQUksUUFBUSxHQUFHLGdCQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakUsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1RSxDQUFDO0NBRUY7QUE1RkQsa0NBNEZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZURlYnVnIGZyb20gJ2RlYnVnJztcbmltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJztcbmltcG9ydCB7IHJtU3luYyBhcyBybSwgd3JpdGVGaWxlU3luYyBhcyB3cml0ZSwgcmVhZEZpbGVTeW5jIGFzIHJlYWQgfSBmcm9tICdmcyc7XG5pbXBvcnQgeyBPcHRpb25zIH0gZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IHsgYXNzZXJ0Tm90VG91Y2hpbmdGaWxlcywgb3BlbkNlcnRpZmljYXRlSW5GaXJlZm94IH0gZnJvbSAnLi9zaGFyZWQnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICcuJztcbmltcG9ydCB7IHJ1biwgc3VkbyB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBVSSBmcm9tICcuLi91c2VyLWludGVyZmFjZSc7XG5cbmNvbnN0IGRlYnVnID0gY3JlYXRlRGVidWcoJ2RldmNlcnQ6cGxhdGZvcm1zOndpbmRvd3MnKTtcblxubGV0IGVuY3J5cHRpb25LZXk6IHN0cmluZztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2luZG93c1BsYXRmb3JtIGltcGxlbWVudHMgUGxhdGZvcm0ge1xuXG4gIHByaXZhdGUgSE9TVF9GSUxFX1BBVEggPSAnQzpcXFxcV2luZG93c1xcXFxTeXN0ZW0zMlxcXFxEcml2ZXJzXFxcXGV0Y1xcXFxob3N0cyc7XG5cbiAgLyoqXG4gICAqIFdpbmRvd3MgaXMgYXQgbGVhc3Qgc2ltcGxlLiBMaWtlIG1hY09TLCBtb3N0IGFwcGxpY2F0aW9ucyB3aWxsIGRlbGVnYXRlIHRvXG4gICAqIHRoZSBzeXN0ZW0gdHJ1c3Qgc3RvcmUsIHdoaWNoIGlzIHVwZGF0ZWQgd2l0aCB0aGUgY29uZnVzaW5nbHkgbmFtZWRcbiAgICogYGNlcnR1dGlsYCBleGUgKG5vdCB0aGUgc2FtZSBhcyB0aGUgTlNTL01vemlsbGEgY2VydHV0aWwpLiBGaXJlZm94IGRvZXMgaXQnc1xuICAgKiBvd24gdGhpbmcgYXMgdXN1YWwsIGFuZCBnZXR0aW5nIGEgY29weSBvZiBOU1MgY2VydHV0aWwgb250byB0aGUgV2luZG93c1xuICAgKiBtYWNoaW5lIHRvIHRyeSB1cGRhdGluZyB0aGUgRmlyZWZveCBzdG9yZSBpcyBiYXNpY2FsbHkgYSBuaWdodG1hcmUsIHNvIHdlXG4gICAqIGRvbid0IGV2ZW4gdHJ5IGl0IC0gd2UganVzdCBiYWlsIG91dCB0byB0aGUgR1VJLlxuICAgKi9cbiAgYXN5bmMgYWRkVG9UcnVzdFN0b3JlcyhjZXJ0aWZpY2F0ZVBhdGg6IHN0cmluZywgb3B0aW9uczogT3B0aW9ucyA9IHt9KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gSUUsIENocm9tZSwgc3lzdGVtIHV0aWxzXG4gICAgZGVidWcoJ2FkZGluZyBkZXZjZXJ0IHJvb3QgdG8gV2luZG93cyBPUyB0cnVzdCBzdG9yZScpXG4gICAgdHJ5IHtcbiAgICAgIHJ1bignY2VydHV0aWwnLCBbJy1hZGRzdG9yZScsICctdXNlcicsICdyb290JywgY2VydGlmaWNhdGVQYXRoXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZS5vdXRwdXQubWFwKChidWZmZXI6IEJ1ZmZlcikgPT4ge1xuICAgICAgICBpZiAoYnVmZmVyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coYnVmZmVyLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgZGVidWcoJ2FkZGluZyBkZXZjZXJ0IHJvb3QgdG8gRmlyZWZveCB0cnVzdCBzdG9yZScpXG4gICAgLy8gRmlyZWZveCAoZG9uJ3QgZXZlbiB0cnkgTlNTIGNlcnR1dGlsLCBubyBlYXN5IGluc3RhbGwgZm9yIFdpbmRvd3MpXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IG9wZW5DZXJ0aWZpY2F0ZUluRmlyZWZveCgnc3RhcnQgZmlyZWZveCcsIGNlcnRpZmljYXRlUGF0aCk7XG4gICAgfSBjYXRjaCB7XG4gICAgICBkZWJ1ZygnRXJyb3Igb3BlbmluZyBGaXJlZm94LCBtb3N0IGxpa2VseSBGaXJlZm94IGlzIG5vdCBpbnN0YWxsZWQnKTtcbiAgICB9XG4gIH1cbiAgXG4gIGFzeW5jIHJlbW92ZUZyb21UcnVzdFN0b3JlcyhjZXJ0aWZpY2F0ZVBhdGg6IHN0cmluZykge1xuICAgIGRlYnVnKCdyZW1vdmluZyBkZXZjZXJ0IHJvb3QgZnJvbSBXaW5kb3dzIE9TIHRydXN0IHN0b3JlJyk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnNvbGUud2FybignUmVtb3Zpbmcgb2xkIGNlcnRpZmljYXRlcyBmcm9tIHRydXN0IHN0b3Jlcy4gWW91IG1heSBiZSBwcm9tcHRlZCB0byBncmFudCBwZXJtaXNzaW9uIGZvciB0aGlzLiBJdFxcJ3Mgc2FmZSB0byBkZWxldGUgb2xkIGRldmNlcnQgY2VydGlmaWNhdGVzLicpO1xuICAgICAgcnVuKCdjZXJ0dXRpbCcsIFsnLWRlbHN0b3JlJywgJy11c2VyJywgJ3Jvb3QnLCAnZGV2Y2VydCddKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBkZWJ1ZyhgZmFpbGVkIHRvIHJlbW92ZSAkeyBjZXJ0aWZpY2F0ZVBhdGggfSBmcm9tIFdpbmRvd3MgT1MgdHJ1c3Qgc3RvcmUsIGNvbnRpbnVpbmcuICR7IGUudG9TdHJpbmcoKSB9YClcbiAgICB9XG4gIH1cblxuICBhc3luYyBhZGREb21haW5Ub0hvc3RGaWxlSWZNaXNzaW5nKGRvbWFpbjogc3RyaW5nKSB7XG4gICAgbGV0IGhvc3RzRmlsZUNvbnRlbnRzID0gcmVhZCh0aGlzLkhPU1RfRklMRV9QQVRILCAndXRmOCcpO1xuICAgIGlmICghaG9zdHNGaWxlQ29udGVudHMuaW5jbHVkZXMoZG9tYWluKSkge1xuICAgICAgYXdhaXQgc3VkbyhgZWNobyAxMjcuMC4wLjEgICR7IGRvbWFpbiB9ID4+ICR7IHRoaXMuSE9TVF9GSUxFX1BBVEggfWApO1xuICAgIH1cbiAgfVxuICBcbiAgYXN5bmMgZGVsZXRlUHJvdGVjdGVkRmlsZXMoZmlsZXBhdGg6IHN0cmluZykge1xuICAgIGFzc2VydE5vdFRvdWNoaW5nRmlsZXMoZmlsZXBhdGgsICdkZWxldGUnKTtcbiAgICBybShmaWxlcGF0aCwgeyBmb3JjZTogdHJ1ZSwgcmVjdXJzaXZlOiB0cnVlIH0pO1xuICB9XG5cbiAgYXN5bmMgcmVhZFByb3RlY3RlZEZpbGUoZmlsZXBhdGg6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgYXNzZXJ0Tm90VG91Y2hpbmdGaWxlcyhmaWxlcGF0aCwgJ3JlYWQnKTtcbiAgICBpZiAoIWVuY3J5cHRpb25LZXkpIHtcbiAgICAgIGVuY3J5cHRpb25LZXkgPSBhd2FpdCBVSS5nZXRXaW5kb3dzRW5jcnlwdGlvblBhc3N3b3JkKCk7XG4gICAgfVxuICAgIC8vIFRyeSB0byBkZWNyeXB0IHRoZSBmaWxlXG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB0aGlzLmRlY3J5cHQocmVhZChmaWxlcGF0aCwgJ3V0ZjgnKSwgZW5jcnlwdGlvbktleSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gSWYgaXQncyBhIGJhZCBwYXNzd29yZCwgY2xlYXIgdGhlIGNhY2hlZCBjb3B5IGFuZCByZXRyeVxuICAgICAgaWYgKGUubWVzc2FnZS5pbmRleE9mKCdiYWQgZGVjcnlwdCcpID49IC0xKSB7XG4gICAgICAgIGVuY3J5cHRpb25LZXkgPSBudWxsO1xuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5yZWFkUHJvdGVjdGVkRmlsZShmaWxlcGF0aCk7XG4gICAgICB9XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHdyaXRlUHJvdGVjdGVkRmlsZShmaWxlcGF0aDogc3RyaW5nLCBjb250ZW50czogc3RyaW5nKSB7XG4gICAgYXNzZXJ0Tm90VG91Y2hpbmdGaWxlcyhmaWxlcGF0aCwgJ3dyaXRlJyk7XG4gICAgaWYgKCFlbmNyeXB0aW9uS2V5KSB7XG4gICAgICBlbmNyeXB0aW9uS2V5ID0gYXdhaXQgVUkuZ2V0V2luZG93c0VuY3J5cHRpb25QYXNzd29yZCgpO1xuICAgIH1cbiAgICBsZXQgZW5jcnlwdGVkQ29udGVudHMgPSB0aGlzLmVuY3J5cHQoY29udGVudHMsIGVuY3J5cHRpb25LZXkpO1xuICAgIHdyaXRlKGZpbGVwYXRoLCBlbmNyeXB0ZWRDb250ZW50cyk7XG4gIH1cblxuICBwcml2YXRlIGVuY3J5cHQodGV4dDogc3RyaW5nLCBrZXk6IHN0cmluZykge1xuICAgIGxldCBjaXBoZXIgPSBjcnlwdG8uY3JlYXRlQ2lwaGVyKCdhZXMyNTYnLCBCdWZmZXIuZnJvbShrZXkpKTtcbiAgICByZXR1cm4gY2lwaGVyLnVwZGF0ZSh0ZXh0LCAndXRmOCcsICdoZXgnKSArIGNpcGhlci5maW5hbCgnaGV4Jyk7XG4gIH1cblxuICBwcml2YXRlIGRlY3J5cHQoZW5jcnlwdGVkOiBzdHJpbmcsIGtleTogc3RyaW5nKSB7XG4gICAgbGV0IGRlY2lwaGVyID0gY3J5cHRvLmNyZWF0ZURlY2lwaGVyKCdhZXMyNTYnLCBCdWZmZXIuZnJvbShrZXkpKTtcbiAgICByZXR1cm4gZGVjaXBoZXIudXBkYXRlKGVuY3J5cHRlZCwgJ2hleCcsICd1dGY4JykgKyBkZWNpcGhlci5maW5hbCgndXRmOCcpO1xuICB9XG5cbn1cbiJdfQ==