import { Options } from './index';
/**
 * Install the once-per-machine trusted root CA. We'll use this CA to sign
 * per-app certs.
 */
export default function installCertificateAuthority(options?: Options): Promise<void>;
export declare function withCertificateAuthorityCredentials(cb: ({ caKeyPath, caCertPath }: {
    caKeyPath: string;
    caCertPath: string;
}) => Promise<void> | void): Promise<void>;
/**
 * Smoothly migrate the certificate storage from v1.0.x to >= v1.1.0.
 * In v1.1.0 there are new options for retrieving the CA cert directly,
 * to help third-party Node apps trust the root CA.
 *
 * If a v1.0.x cert already exists, then devcert has written it with
 * platform.writeProtectedFile(), so an unprivileged readFile cannot access it.
 * Pre-detect and remedy this; it should only happen once per installation.
 */
export declare function ensureCACertReadable(options?: Options): Promise<void>;
/**
 * Remove as much of the devcert files and state as we can. This is necessary
 * when generating a new root certificate, and should be available to API
 * consumers as well.
 *
 * Not all of it will be removable. If certutil is not installed, we'll leave
 * Firefox alone. We try to remove files with maximum permissions, and if that
 * fails, we'll silently fail.
 *
 * It's also possible that the command to untrust will not work, and we'll
 * silently fail that as well; with no existing certificates anymore, the
 * security exposure there is minimal.
 */
export declare function uninstall(): Promise<void>;
