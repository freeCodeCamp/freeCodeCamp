import createDebug from 'debug';
import crypto from 'crypto';
import { rmSync as rm, writeFileSync as write, readFileSync as read } from 'fs';
import { Options } from '../index';
import { assertNotTouchingFiles, openCertificateInFirefox } from './shared';
import { Platform } from '.';
import { run, sudo } from '../utils';
import UI from '../user-interface';

const debug = createDebug('devcert:platforms:windows');

let encryptionKey: string;

export default class WindowsPlatform implements Platform {

  private HOST_FILE_PATH = 'C:\\Windows\\System32\\Drivers\\etc\\hosts';

  /**
   * Windows is at least simple. Like macOS, most applications will delegate to
   * the system trust store, which is updated with the confusingly named
   * `certutil` exe (not the same as the NSS/Mozilla certutil). Firefox does it's
   * own thing as usual, and getting a copy of NSS certutil onto the Windows
   * machine to try updating the Firefox store is basically a nightmare, so we
   * don't even try it - we just bail out to the GUI.
   */
  async addToTrustStores(certificatePath: string, options: Options = {}): Promise<void> {
    // IE, Chrome, system utils
    debug('adding devcert root to Windows OS trust store')
    try {
      run('certutil', ['-addstore', '-user', 'root', certificatePath]);
    } catch (e) {
      e.output.map((buffer: Buffer) => {
        if (buffer) {
          console.log(buffer.toString());
        }
      });
    }
    debug('adding devcert root to Firefox trust store')
    // Firefox (don't even try NSS certutil, no easy install for Windows)
    try {
      await openCertificateInFirefox('start firefox', certificatePath);
    } catch {
      debug('Error opening Firefox, most likely Firefox is not installed');
    }
  }
  
  async removeFromTrustStores(certificatePath: string) {
    debug('removing devcert root from Windows OS trust store');
    try {
      console.warn('Removing old certificates from trust stores. You may be prompted to grant permission for this. It\'s safe to delete old devcert certificates.');
      run('certutil', ['-delstore', '-user', 'root', 'devcert']);
    } catch (e) {
      debug(`failed to remove ${ certificatePath } from Windows OS trust store, continuing. ${ e.toString() }`)
    }
  }

  async addDomainToHostFileIfMissing(domain: string) {
    let hostsFileContents = read(this.HOST_FILE_PATH, 'utf8');
    if (!hostsFileContents.includes(domain)) {
      await sudo(`echo 127.0.0.1  ${ domain } >> ${ this.HOST_FILE_PATH }`);
    }
  }
  
  async deleteProtectedFiles(filepath: string) {
    assertNotTouchingFiles(filepath, 'delete');
    rm(filepath, { force: true, recursive: true });
  }

  async readProtectedFile(filepath: string): Promise<string> {
    assertNotTouchingFiles(filepath, 'read');
    if (!encryptionKey) {
      encryptionKey = await UI.getWindowsEncryptionPassword();
    }
    // Try to decrypt the file
    try {
      return this.decrypt(read(filepath, 'utf8'), encryptionKey);
    } catch (e) {
      // If it's a bad password, clear the cached copy and retry
      if (e.message.indexOf('bad decrypt') >= -1) {
        encryptionKey = null;
        return await this.readProtectedFile(filepath);
      }
      throw e;
    }
  }

  async writeProtectedFile(filepath: string, contents: string) {
    assertNotTouchingFiles(filepath, 'write');
    if (!encryptionKey) {
      encryptionKey = await UI.getWindowsEncryptionPassword();
    }
    let encryptedContents = this.encrypt(contents, encryptionKey);
    write(filepath, encryptedContents);
  }

  private encrypt(text: string, key: string) {
    let cipher = crypto.createCipher('aes256', Buffer.from(key));
    return cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
  }

  private decrypt(encrypted: string, key: string) {
    let decipher = crypto.createDecipher('aes256', Buffer.from(key));
    return decipher.update(encrypted, 'hex', 'utf8') + decipher.final('utf8');
  }

}
