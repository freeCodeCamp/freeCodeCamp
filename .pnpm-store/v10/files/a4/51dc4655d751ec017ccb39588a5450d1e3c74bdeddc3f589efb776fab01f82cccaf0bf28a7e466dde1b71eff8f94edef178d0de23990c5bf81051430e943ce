import { uninstall } from './certificate-authority';
import { UserInterface } from './user-interface';
export { uninstall };
export interface Options {
    /** Return the CA certificate data? */
    getCaBuffer?: boolean;
    /** Return the path to the CA certificate? */
    getCaPath?: boolean;
    /** If `certutil` is not installed already (for updating nss databases; e.g. firefox), do not attempt to install it */
    skipCertutilInstall?: boolean;
    /** Do not update your systems host file with the domain name of the certificate */
    skipHostsFile?: boolean;
    /** User interface hooks */
    ui?: UserInterface;
}
interface ICaBuffer {
    ca: Buffer;
}
interface ICaPath {
    caPath: string;
}
interface IDomainData {
    key: Buffer;
    cert: Buffer;
}
type IReturnCa<O extends Options> = O['getCaBuffer'] extends true ? ICaBuffer : false;
type IReturnCaPath<O extends Options> = O['getCaPath'] extends true ? ICaPath : false;
type IReturnData<O extends Options = {}> = (IDomainData) & (IReturnCa<O>) & (IReturnCaPath<O>);
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
export declare function certificateFor<O extends Options>(domain: string, options?: O): Promise<IReturnData<O>>;
export declare function hasCertificateFor(domain: string): boolean;
export declare function configuredDomains(): string[];
export declare function removeDomain(domain: string): void;
