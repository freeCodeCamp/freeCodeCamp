import path from 'path';
import { existsSync as exists, readFileSync as read, writeFileSync as writeFile } from 'fs';
import createDebug from 'debug';
import { addCertificateToNSSCertDB, assertNotTouchingFiles, openCertificateInFirefox, closeFirefox, removeCertificateFromNSSCertDB } from './shared';
import { run, sudoAppend, commandExists } from '../utils';
import { Options } from '../index';
import UI from '../user-interface';
import { Platform } from '.';

const debug = createDebug('devcert:platforms:linux');

export default class LinuxPlatform implements Platform {

  private FIREFOX_NSS_DIR = path.join(process.env.HOME, '.mozilla/firefox/*');
  private CHROME_NSS_DIR = path.join(process.env.HOME, '.pki/nssdb');
  private FIREFOX_BIN_PATH = '/usr/bin/firefox';
  private CHROME_BIN_PATH = '/usr/bin/google-chrome';

  private HOST_FILE_PATH = '/etc/hosts';

  /**
   * Linux is surprisingly difficult. There seems to be multiple system-wide
   * repositories for certs, so we copy ours to each. However, Firefox does it's
   * usual separate trust store. Plus Chrome relies on the NSS tooling (like
   * Firefox), but uses the user's NSS database, unlike Firefox (which uses a
   * separate Mozilla one). And since Chrome doesn't prompt the user with a GUI
   * flow when opening certs, if we can't use certutil to install our certificate
   * into the user's NSS database, we're out of luck.
   */
  async addToTrustStores(certificatePath: string, options: Options = {}): Promise<void> {

    debug('Adding devcert root CA to Linux system-wide trust stores');
    // run(`sudo cp ${ certificatePath } /etc/ssl/certs/devcert.crt`);
    run('sudo', ['cp', certificatePath, '/usr/local/share/ca-certificates/devcert.crt']);
    // run(`sudo bash -c "cat ${ certificatePath } >> /etc/ssl/certs/ca-certificates.crt"`);
    run('sudo', ['update-ca-certificates']);

    if (this.isFirefoxInstalled()) {
      // Firefox
      debug('Firefox install detected: adding devcert root CA to Firefox-specific trust stores ...');
      if (!commandExists('certutil')) {
        if (options.skipCertutilInstall) {
          debug('NSS tooling is not already installed, and `skipCertutil` is true, so falling back to manual certificate install for Firefox');
          openCertificateInFirefox(this.FIREFOX_BIN_PATH, certificatePath);
        } else {
          debug('NSS tooling is not already installed. Trying to install NSS tooling now with `apt install`');
          run('sudo',  ['apt', 'install', 'libnss3-tools']);
          debug('Installing certificate into Firefox trust stores using NSS tooling');
          await closeFirefox();
          await addCertificateToNSSCertDB(this.FIREFOX_NSS_DIR, certificatePath, 'certutil');
        }
      }
    } else {
      debug('Firefox does not appear to be installed, skipping Firefox-specific steps...');
    }

    if (this.isChromeInstalled()) {
      debug('Chrome install detected: adding devcert root CA to Chrome trust store ...');
      if (!commandExists('certutil')) {
        UI.warnChromeOnLinuxWithoutCertutil();
      } else {
        await closeFirefox();
        await addCertificateToNSSCertDB(this.CHROME_NSS_DIR, certificatePath, 'certutil');
      }
    } else {
      debug('Chrome does not appear to be installed, skipping Chrome-specific steps...');
    }
  }
  
  async removeFromTrustStores(certificatePath: string) {
    try {
      run('sudo', ['rm', '/usr/local/share/ca-certificates/devcert.crt']);
      run('sudo', ['update-ca-certificates']);
    } catch (e) {
      debug(`failed to remove ${ certificatePath } from /usr/local/share/ca-certificates, continuing. ${ e.toString() }`);
    }
    if (commandExists('certutil')) {
      if (this.isFirefoxInstalled()) {
        await removeCertificateFromNSSCertDB(this.FIREFOX_NSS_DIR, certificatePath, 'certutil');
      }
      if (this.isChromeInstalled()) {
        await removeCertificateFromNSSCertDB(this.CHROME_NSS_DIR, certificatePath, 'certutil');
      }
    }
  }

  async addDomainToHostFileIfMissing(domain: string) {
    const trimDomain = domain.trim().replace(/[\s;]/g,'')
    let hostsFileContents = read(this.HOST_FILE_PATH, 'utf8');
    if (!hostsFileContents.includes(trimDomain)) {
      sudoAppend(this.HOST_FILE_PATH, `127.0.0.1 ${trimDomain}\n`);
    }
  }

  async deleteProtectedFiles(filepath: string) {
    assertNotTouchingFiles(filepath, 'delete');
    run('sudo', ['rm', '-rf', filepath]);
  }

  async readProtectedFile(filepath: string) {
    assertNotTouchingFiles(filepath, 'read');
    return (await run('sudo', ['cat', filepath])).toString().trim();
  }

  async writeProtectedFile(filepath: string, contents: string) {
    assertNotTouchingFiles(filepath, 'write');
    if (exists(filepath)) {
      await run('sudo', ['rm', filepath]);
    }
    writeFile(filepath, contents);
    await run('sudo', ['chown', '0', filepath]);
    await run('sudo', ['chmod', '600', filepath]);
  }

  private isFirefoxInstalled() {
    return exists(this.FIREFOX_BIN_PATH);
  }

  private isChromeInstalled() {
    return exists(this.CHROME_BIN_PATH);
  }

}
