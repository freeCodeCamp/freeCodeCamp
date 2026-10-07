/**
 * Used to cache a stats object for the virtual file.
 * Extracted from the `mock-fs` package.
 *
 * @author Tim Schaub http://tschaub.net/
 * @author `webpack-virtual-modules` Contributors
 * @link https://github.com/tschaub/mock-fs/blob/master/lib/binding.js
 * @link https://github.com/tschaub/mock-fs/blob/master/license.md
 */
import constants from 'constants';

export class VirtualStats {
  /**
   * Create a new stats object.
   *
   * @param config Stats properties.
   */
  public constructor(config) {
    for (const key in config) {
      if (!Object.prototype.hasOwnProperty.call(config, key)) {
        continue;
      }
      this[key] = config[key];
    }
  }

  /**
   * Check if mode indicates property.
   */
  private _checkModeProperty(property): boolean {
    return ((this as any).mode & constants.S_IFMT) === property;
  }

  public isDirectory(): boolean {
    return this._checkModeProperty(constants.S_IFDIR);
  }

  public isFile(): boolean {
    return this._checkModeProperty(constants.S_IFREG);
  }

  public isBlockDevice(): boolean {
    return this._checkModeProperty(constants.S_IFBLK);
  }

  public isCharacterDevice(): boolean {
    return this._checkModeProperty(constants.S_IFCHR);
  }

  public isSymbolicLink(): boolean {
    return this._checkModeProperty(constants.S_IFLNK);
  }

  public isFIFO(): boolean {
    return this._checkModeProperty(constants.S_IFIFO);
  }

  public isSocket(): boolean {
    return this._checkModeProperty(constants.S_IFSOCK);
  }
}
