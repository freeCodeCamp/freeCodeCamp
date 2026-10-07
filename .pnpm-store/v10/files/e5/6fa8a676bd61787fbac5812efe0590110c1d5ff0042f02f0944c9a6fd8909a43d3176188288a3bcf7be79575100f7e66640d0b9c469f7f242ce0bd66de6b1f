"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uninstall = void 0;
exports.certificateFor = certificateFor;
exports.hasCertificateFor = hasCertificateFor;
exports.configuredDomains = configuredDomains;
exports.removeDomain = removeDomain;
const fs_1 = require("fs");
const debug_1 = __importDefault(require("debug"));
const constants_1 = require("./constants");
const platforms_1 = __importDefault(require("./platforms"));
const utils_1 = require("./utils");
const certificate_authority_1 = __importStar(require("./certificate-authority"));
Object.defineProperty(exports, "uninstall", { enumerable: true, get: function () { return certificate_authority_1.uninstall; } });
const certificates_1 = __importDefault(require("./certificates"));
const user_interface_1 = __importDefault(require("./user-interface"));
const debug = (0, debug_1.default)('devcert');
/**
 * Request an SSL certificate for the given app name signed by the devcert root
 * certificate authority. If devcert has previously generated a certificate for
 * that app name on this machine, it will reuse that certificate.
 *
 * If this is the first time devcert is being run on this machine, it will
 * generate and attempt to install a root certificate authority.
 *
 * Returns a promise that resolves with { key, cert }, where `key` and `cert`
 * are Buffers with the contents of the certificate private key and certificate
 * file, respectively
 *
 * If `options.getCaBuffer` is true, return value will include the ca certificate data
 * as { ca: Buffer }
 *
 * If `options.getCaPath` is true, return value will include the ca certificate path
 * as { caPath: string }
 */
async function certificateFor(domain, options = {}) {
    if (constants_1.VALID_IP.test(domain)) {
        throw new Error('IP addresses are not supported currently');
    }
    if (!constants_1.VALID_DOMAIN.test(domain)) {
        throw new Error(`"${domain}" is not a valid domain name.`);
    }
    debug(`Certificate requested for ${domain}. Skipping certutil install: ${Boolean(options.skipCertutilInstall)}. Skipping hosts file: ${Boolean(options.skipHostsFile)}`);
    if (options.ui) {
        Object.assign(user_interface_1.default, options.ui);
    }
    if (!constants_1.isMac && !constants_1.isLinux && !constants_1.isWindows) {
        throw new Error(`Platform not supported: "${process.platform}"`);
    }
    if (!(0, utils_1.commandExists)('openssl')) {
        throw new Error('OpenSSL not found: OpenSSL is required to generate SSL certificates - make sure it is installed and available in your PATH');
    }
    let domainKeyPath = (0, constants_1.pathForDomain)(domain, `private-key.key`);
    let domainCertPath = (0, constants_1.pathForDomain)(domain, `certificate.crt`);
    if (!(0, fs_1.existsSync)(constants_1.rootCAKeyPath)) {
        debug('Root CA is not installed yet, so it must be our first run. Installing root CA ...');
        await (0, certificate_authority_1.default)(options);
    }
    else if (options.getCaBuffer || options.getCaPath) {
        debug('Root CA is not readable, but it probably is because an earlier version of devcert locked it. Trying to fix...');
        await (0, certificate_authority_1.ensureCACertReadable)(options);
    }
    if (!(0, fs_1.existsSync)((0, constants_1.pathForDomain)(domain, `certificate.crt`))) {
        debug(`Can't find certificate file for ${domain}, so it must be the first request for ${domain}. Generating and caching ...`);
        await (0, certificates_1.default)(domain);
    }
    if (!options.skipHostsFile) {
        await platforms_1.default.addDomainToHostFileIfMissing(domain);
    }
    debug(`Returning domain certificate`);
    const ret = {
        key: (0, fs_1.readFileSync)(domainKeyPath),
        cert: (0, fs_1.readFileSync)(domainCertPath)
    };
    if (options.getCaBuffer)
        ret.ca = (0, fs_1.readFileSync)(constants_1.rootCACertPath);
    if (options.getCaPath)
        ret.caPath = constants_1.rootCACertPath;
    return ret;
}
function hasCertificateFor(domain) {
    return (0, fs_1.existsSync)((0, constants_1.pathForDomain)(domain, `certificate.crt`));
}
function configuredDomains() {
    return (0, fs_1.readdirSync)(constants_1.domainsDir);
}
function removeDomain(domain) {
    return (0, fs_1.rmSync)((0, constants_1.pathForDomain)(domain), { force: true, recursive: true });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUVBLHdDQW1EQztBQUVELDhDQUVDO0FBRUQsOENBRUM7QUFFRCxvQ0FFQztBQWxJRCwyQkFBMEc7QUFDMUcsa0RBQWdDO0FBQ2hDLDJDQVVxQjtBQUNyQiw0REFBMEM7QUFDMUMsbUNBQXdDO0FBQ3hDLGlGQUF1RztBQUc5RiwwRkFIbUQsaUNBQVMsT0FHbkQ7QUFGbEIsa0VBQXVEO0FBQ3ZELHNFQUFxRDtBQUdyRCxNQUFNLEtBQUssR0FBRyxJQUFBLGVBQVcsRUFBQyxTQUFTLENBQUMsQ0FBQztBQTZCckM7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJHO0FBQ0ksS0FBSyxVQUFVLGNBQWMsQ0FBb0IsTUFBYyxFQUFFLFVBQWEsRUFBTztJQUMxRixJQUFJLG9CQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDMUIsTUFBTSxJQUFJLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFDRCxJQUFJLENBQUMsd0JBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUMvQixNQUFNLElBQUksS0FBSyxDQUFDLElBQUksTUFBTSwrQkFBK0IsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFDRCxLQUFLLENBQUMsNkJBQThCLE1BQU8sZ0NBQWlDLE9BQU8sQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUUsMEJBQTJCLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRS9LLElBQUksT0FBTyxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ2YsTUFBTSxDQUFDLE1BQU0sQ0FBQyx3QkFBRSxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsSUFBSSxDQUFDLGlCQUFLLElBQUksQ0FBQyxtQkFBTyxJQUFJLENBQUMscUJBQVMsRUFBRSxDQUFDO1FBQ3JDLE1BQU0sSUFBSSxLQUFLLENBQUMsNEJBQTZCLE9BQU8sQ0FBQyxRQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxJQUFJLENBQUMsSUFBQSxxQkFBYSxFQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7UUFDOUIsTUFBTSxJQUFJLEtBQUssQ0FBQyw0SEFBNEgsQ0FBQyxDQUFDO0lBQ2hKLENBQUM7SUFFRCxJQUFJLGFBQWEsR0FBRyxJQUFBLHlCQUFhLEVBQUMsTUFBTSxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFDN0QsSUFBSSxjQUFjLEdBQUcsSUFBQSx5QkFBYSxFQUFDLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBRTlELElBQUksQ0FBQyxJQUFBLGVBQU0sRUFBQyx5QkFBYSxDQUFDLEVBQUUsQ0FBQztRQUMzQixLQUFLLENBQUMsbUZBQW1GLENBQUMsQ0FBQztRQUMzRixNQUFNLElBQUEsK0JBQTJCLEVBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0MsQ0FBQztTQUFNLElBQUksT0FBTyxDQUFDLFdBQVcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDcEQsS0FBSyxDQUFDLCtHQUErRyxDQUFDLENBQUM7UUFDdkgsTUFBTSxJQUFBLDRDQUFvQixFQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxJQUFJLENBQUMsSUFBQSxlQUFNLEVBQUMsSUFBQSx5QkFBYSxFQUFDLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN0RCxLQUFLLENBQUMsbUNBQW9DLE1BQU8seUNBQTBDLE1BQU8sOEJBQThCLENBQUMsQ0FBQztRQUNsSSxNQUFNLElBQUEsc0JBQXlCLEVBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDM0IsTUFBTSxtQkFBZSxDQUFDLDRCQUE0QixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQztJQUV0QyxNQUFNLEdBQUcsR0FBRztRQUNWLEdBQUcsRUFBRSxJQUFBLGlCQUFRLEVBQUMsYUFBYSxDQUFDO1FBQzVCLElBQUksRUFBRSxJQUFBLGlCQUFRLEVBQUMsY0FBYyxDQUFDO0tBQ2IsQ0FBQztJQUNwQixJQUFJLE9BQU8sQ0FBQyxXQUFXO1FBQUcsR0FBaUIsQ0FBQyxFQUFFLEdBQUcsSUFBQSxpQkFBUSxFQUFDLDBCQUFjLENBQUMsQ0FBQztJQUMxRSxJQUFJLE9BQU8sQ0FBQyxTQUFTO1FBQUcsR0FBZSxDQUFDLE1BQU0sR0FBRywwQkFBYyxDQUFDO0lBRWhFLE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQUVELFNBQWdCLGlCQUFpQixDQUFDLE1BQWM7SUFDOUMsT0FBTyxJQUFBLGVBQU0sRUFBQyxJQUFBLHlCQUFhLEVBQUMsTUFBTSxFQUFFLGlCQUFpQixDQUFDLENBQUMsQ0FBQztBQUMxRCxDQUFDO0FBRUQsU0FBZ0IsaUJBQWlCO0lBQy9CLE9BQU8sSUFBQSxnQkFBTyxFQUFDLHNCQUFVLENBQUMsQ0FBQztBQUM3QixDQUFDO0FBRUQsU0FBZ0IsWUFBWSxDQUFDLE1BQWM7SUFDekMsT0FBTyxJQUFBLFdBQUUsRUFBQyxJQUFBLHlCQUFhLEVBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3JFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBybVN5bmMgYXMgcm0sIHJlYWRGaWxlU3luYyBhcyByZWFkRmlsZSwgcmVhZGRpclN5bmMgYXMgcmVhZGRpciwgZXhpc3RzU3luYyBhcyBleGlzdHMgfSBmcm9tICdmcyc7XG5pbXBvcnQgY3JlYXRlRGVidWcgZnJvbSAnZGVidWcnO1xuaW1wb3J0IHtcbiAgaXNNYWMsXG4gIGlzTGludXgsXG4gIGlzV2luZG93cyxcbiAgcGF0aEZvckRvbWFpbixcbiAgZG9tYWluc0RpcixcbiAgcm9vdENBS2V5UGF0aCxcbiAgcm9vdENBQ2VydFBhdGgsXG4gIFZBTElEX0RPTUFJTixcbiAgVkFMSURfSVBcbn0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IGN1cnJlbnRQbGF0Zm9ybSBmcm9tICcuL3BsYXRmb3Jtcyc7XG5pbXBvcnQgeyBjb21tYW5kRXhpc3RzIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgaW5zdGFsbENlcnRpZmljYXRlQXV0aG9yaXR5LCB7IGVuc3VyZUNBQ2VydFJlYWRhYmxlLCB1bmluc3RhbGwgfSBmcm9tICcuL2NlcnRpZmljYXRlLWF1dGhvcml0eSc7XG5pbXBvcnQgZ2VuZXJhdGVEb21haW5DZXJ0aWZpY2F0ZSBmcm9tICcuL2NlcnRpZmljYXRlcyc7XG5pbXBvcnQgVUksIHsgVXNlckludGVyZmFjZSB9IGZyb20gJy4vdXNlci1pbnRlcmZhY2UnO1xuZXhwb3J0IHsgdW5pbnN0YWxsIH07XG5cbmNvbnN0IGRlYnVnID0gY3JlYXRlRGVidWcoJ2RldmNlcnQnKTtcblxuZXhwb3J0IGludGVyZmFjZSBPcHRpb25zIC8qIGV4dGVuZHMgUGFydGlhbDxJQ2FCdWZmZXJPcHRzICYgSUNhUGF0aE9wdHM+ICAqL3tcbiAgLyoqIFJldHVybiB0aGUgQ0EgY2VydGlmaWNhdGUgZGF0YT8gKi9cbiAgZ2V0Q2FCdWZmZXI/OiBib29sZWFuO1xuICAvKiogUmV0dXJuIHRoZSBwYXRoIHRvIHRoZSBDQSBjZXJ0aWZpY2F0ZT8gKi9cbiAgZ2V0Q2FQYXRoPzogYm9vbGVhbjtcbiAgLyoqIElmIGBjZXJ0dXRpbGAgaXMgbm90IGluc3RhbGxlZCBhbHJlYWR5IChmb3IgdXBkYXRpbmcgbnNzIGRhdGFiYXNlczsgZS5nLiBmaXJlZm94KSwgZG8gbm90IGF0dGVtcHQgdG8gaW5zdGFsbCBpdCAqL1xuICBza2lwQ2VydHV0aWxJbnN0YWxsPzogYm9vbGVhbixcbiAgLyoqIERvIG5vdCB1cGRhdGUgeW91ciBzeXN0ZW1zIGhvc3QgZmlsZSB3aXRoIHRoZSBkb21haW4gbmFtZSBvZiB0aGUgY2VydGlmaWNhdGUgKi9cbiAgc2tpcEhvc3RzRmlsZT86IGJvb2xlYW4sXG4gIC8qKiBVc2VyIGludGVyZmFjZSBob29rcyAqL1xuICB1aT86IFVzZXJJbnRlcmZhY2Vcbn1cblxuaW50ZXJmYWNlIElDYUJ1ZmZlciB7XG4gIGNhOiBCdWZmZXI7XG59XG5pbnRlcmZhY2UgSUNhUGF0aCB7XG4gIGNhUGF0aDogc3RyaW5nO1xufVxuaW50ZXJmYWNlIElEb21haW5EYXRhIHtcbiAga2V5OiBCdWZmZXI7XG4gIGNlcnQ6IEJ1ZmZlcjtcbn1cbnR5cGUgSVJldHVybkNhPE8gZXh0ZW5kcyBPcHRpb25zPiA9IE9bJ2dldENhQnVmZmVyJ10gZXh0ZW5kcyB0cnVlID8gSUNhQnVmZmVyIDogZmFsc2U7XG50eXBlIElSZXR1cm5DYVBhdGg8TyBleHRlbmRzIE9wdGlvbnM+ID0gT1snZ2V0Q2FQYXRoJ10gZXh0ZW5kcyB0cnVlID8gSUNhUGF0aCA6IGZhbHNlO1xudHlwZSBJUmV0dXJuRGF0YTxPIGV4dGVuZHMgT3B0aW9ucyA9IHt9PiA9IChJRG9tYWluRGF0YSkgJiAoSVJldHVybkNhPE8+KSAmIChJUmV0dXJuQ2FQYXRoPE8+KTtcblxuLyoqXG4gKiBSZXF1ZXN0IGFuIFNTTCBjZXJ0aWZpY2F0ZSBmb3IgdGhlIGdpdmVuIGFwcCBuYW1lIHNpZ25lZCBieSB0aGUgZGV2Y2VydCByb290XG4gKiBjZXJ0aWZpY2F0ZSBhdXRob3JpdHkuIElmIGRldmNlcnQgaGFzIHByZXZpb3VzbHkgZ2VuZXJhdGVkIGEgY2VydGlmaWNhdGUgZm9yXG4gKiB0aGF0IGFwcCBuYW1lIG9uIHRoaXMgbWFjaGluZSwgaXQgd2lsbCByZXVzZSB0aGF0IGNlcnRpZmljYXRlLlxuICpcbiAqIElmIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgZGV2Y2VydCBpcyBiZWluZyBydW4gb24gdGhpcyBtYWNoaW5lLCBpdCB3aWxsXG4gKiBnZW5lcmF0ZSBhbmQgYXR0ZW1wdCB0byBpbnN0YWxsIGEgcm9vdCBjZXJ0aWZpY2F0ZSBhdXRob3JpdHkuXG4gKlxuICogUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHsga2V5LCBjZXJ0IH0sIHdoZXJlIGBrZXlgIGFuZCBgY2VydGBcbiAqIGFyZSBCdWZmZXJzIHdpdGggdGhlIGNvbnRlbnRzIG9mIHRoZSBjZXJ0aWZpY2F0ZSBwcml2YXRlIGtleSBhbmQgY2VydGlmaWNhdGVcbiAqIGZpbGUsIHJlc3BlY3RpdmVseVxuICogXG4gKiBJZiBgb3B0aW9ucy5nZXRDYUJ1ZmZlcmAgaXMgdHJ1ZSwgcmV0dXJuIHZhbHVlIHdpbGwgaW5jbHVkZSB0aGUgY2EgY2VydGlmaWNhdGUgZGF0YVxuICogYXMgeyBjYTogQnVmZmVyIH1cbiAqIFxuICogSWYgYG9wdGlvbnMuZ2V0Q2FQYXRoYCBpcyB0cnVlLCByZXR1cm4gdmFsdWUgd2lsbCBpbmNsdWRlIHRoZSBjYSBjZXJ0aWZpY2F0ZSBwYXRoXG4gKiBhcyB7IGNhUGF0aDogc3RyaW5nIH1cbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNlcnRpZmljYXRlRm9yPE8gZXh0ZW5kcyBPcHRpb25zPihkb21haW46IHN0cmluZywgb3B0aW9uczogTyA9IHt9IGFzIE8pOiBQcm9taXNlPElSZXR1cm5EYXRhPE8+PiB7XG4gIGlmIChWQUxJRF9JUC50ZXN0KGRvbWFpbikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0lQIGFkZHJlc3NlcyBhcmUgbm90IHN1cHBvcnRlZCBjdXJyZW50bHknKTtcbiAgfVxuICBpZiAoIVZBTElEX0RPTUFJTi50ZXN0KGRvbWFpbikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFwiJHtkb21haW59XCIgaXMgbm90IGEgdmFsaWQgZG9tYWluIG5hbWUuYCk7XG4gIH1cbiAgZGVidWcoYENlcnRpZmljYXRlIHJlcXVlc3RlZCBmb3IgJHsgZG9tYWluIH0uIFNraXBwaW5nIGNlcnR1dGlsIGluc3RhbGw6ICR7IEJvb2xlYW4ob3B0aW9ucy5za2lwQ2VydHV0aWxJbnN0YWxsKSB9LiBTa2lwcGluZyBob3N0cyBmaWxlOiAkeyBCb29sZWFuKG9wdGlvbnMuc2tpcEhvc3RzRmlsZSkgfWApO1xuXG4gIGlmIChvcHRpb25zLnVpKSB7XG4gICAgT2JqZWN0LmFzc2lnbihVSSwgb3B0aW9ucy51aSk7XG4gIH1cblxuICBpZiAoIWlzTWFjICYmICFpc0xpbnV4ICYmICFpc1dpbmRvd3MpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFBsYXRmb3JtIG5vdCBzdXBwb3J0ZWQ6IFwiJHsgcHJvY2Vzcy5wbGF0Zm9ybSB9XCJgKTtcbiAgfVxuXG4gIGlmICghY29tbWFuZEV4aXN0cygnb3BlbnNzbCcpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdPcGVuU1NMIG5vdCBmb3VuZDogT3BlblNTTCBpcyByZXF1aXJlZCB0byBnZW5lcmF0ZSBTU0wgY2VydGlmaWNhdGVzIC0gbWFrZSBzdXJlIGl0IGlzIGluc3RhbGxlZCBhbmQgYXZhaWxhYmxlIGluIHlvdXIgUEFUSCcpO1xuICB9XG5cbiAgbGV0IGRvbWFpbktleVBhdGggPSBwYXRoRm9yRG9tYWluKGRvbWFpbiwgYHByaXZhdGUta2V5LmtleWApO1xuICBsZXQgZG9tYWluQ2VydFBhdGggPSBwYXRoRm9yRG9tYWluKGRvbWFpbiwgYGNlcnRpZmljYXRlLmNydGApO1xuXG4gIGlmICghZXhpc3RzKHJvb3RDQUtleVBhdGgpKSB7XG4gICAgZGVidWcoJ1Jvb3QgQ0EgaXMgbm90IGluc3RhbGxlZCB5ZXQsIHNvIGl0IG11c3QgYmUgb3VyIGZpcnN0IHJ1bi4gSW5zdGFsbGluZyByb290IENBIC4uLicpO1xuICAgIGF3YWl0IGluc3RhbGxDZXJ0aWZpY2F0ZUF1dGhvcml0eShvcHRpb25zKTtcbiAgfSBlbHNlIGlmIChvcHRpb25zLmdldENhQnVmZmVyIHx8IG9wdGlvbnMuZ2V0Q2FQYXRoKSB7XG4gICAgZGVidWcoJ1Jvb3QgQ0EgaXMgbm90IHJlYWRhYmxlLCBidXQgaXQgcHJvYmFibHkgaXMgYmVjYXVzZSBhbiBlYXJsaWVyIHZlcnNpb24gb2YgZGV2Y2VydCBsb2NrZWQgaXQuIFRyeWluZyB0byBmaXguLi4nKTtcbiAgICBhd2FpdCBlbnN1cmVDQUNlcnRSZWFkYWJsZShvcHRpb25zKTtcbiAgfVxuXG4gIGlmICghZXhpc3RzKHBhdGhGb3JEb21haW4oZG9tYWluLCBgY2VydGlmaWNhdGUuY3J0YCkpKSB7XG4gICAgZGVidWcoYENhbid0IGZpbmQgY2VydGlmaWNhdGUgZmlsZSBmb3IgJHsgZG9tYWluIH0sIHNvIGl0IG11c3QgYmUgdGhlIGZpcnN0IHJlcXVlc3QgZm9yICR7IGRvbWFpbiB9LiBHZW5lcmF0aW5nIGFuZCBjYWNoaW5nIC4uLmApO1xuICAgIGF3YWl0IGdlbmVyYXRlRG9tYWluQ2VydGlmaWNhdGUoZG9tYWluKTtcbiAgfVxuXG4gIGlmICghb3B0aW9ucy5za2lwSG9zdHNGaWxlKSB7XG4gICAgYXdhaXQgY3VycmVudFBsYXRmb3JtLmFkZERvbWFpblRvSG9zdEZpbGVJZk1pc3NpbmcoZG9tYWluKTtcbiAgfVxuXG4gIGRlYnVnKGBSZXR1cm5pbmcgZG9tYWluIGNlcnRpZmljYXRlYCk7XG5cbiAgY29uc3QgcmV0ID0ge1xuICAgIGtleTogcmVhZEZpbGUoZG9tYWluS2V5UGF0aCksXG4gICAgY2VydDogcmVhZEZpbGUoZG9tYWluQ2VydFBhdGgpXG4gIH0gYXMgSVJldHVybkRhdGE8Tz47XG4gIGlmIChvcHRpb25zLmdldENhQnVmZmVyKSAocmV0IGFzIElDYUJ1ZmZlcikuY2EgPSByZWFkRmlsZShyb290Q0FDZXJ0UGF0aCk7XG4gIGlmIChvcHRpb25zLmdldENhUGF0aCkgKHJldCBhcyBJQ2FQYXRoKS5jYVBhdGggPSByb290Q0FDZXJ0UGF0aDtcblxuICByZXR1cm4gcmV0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQ2VydGlmaWNhdGVGb3IoZG9tYWluOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGV4aXN0cyhwYXRoRm9yRG9tYWluKGRvbWFpbiwgYGNlcnRpZmljYXRlLmNydGApKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZWREb21haW5zKCkge1xuICByZXR1cm4gcmVhZGRpcihkb21haW5zRGlyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZURvbWFpbihkb21haW46IHN0cmluZykge1xuICByZXR1cm4gcm0ocGF0aEZvckRvbWFpbihkb21haW4pLCB7IGZvcmNlOiB0cnVlLCByZWN1cnNpdmU6IHRydWUgfSk7XG59XG4iXX0=