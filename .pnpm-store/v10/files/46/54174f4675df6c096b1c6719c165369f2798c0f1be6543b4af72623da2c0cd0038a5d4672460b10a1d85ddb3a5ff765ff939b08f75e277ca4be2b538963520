import { Link } from './node';
import { TEncodingExtended, TDataOut } from './encoding';
/**
 * A directory entry, like `fs.Dirent`.
 */
export declare class Dirent {
    static build(link: Link, encoding: TEncodingExtended | undefined): Dirent;
    name: TDataOut;
    private mode;
    private _checkModeProperty;
    isDirectory(): boolean;
    isFile(): boolean;
    isBlockDevice(): boolean;
    isCharacterDevice(): boolean;
    isSymbolicLink(): boolean;
    isFIFO(): boolean;
    isSocket(): boolean;
}
export default Dirent;
