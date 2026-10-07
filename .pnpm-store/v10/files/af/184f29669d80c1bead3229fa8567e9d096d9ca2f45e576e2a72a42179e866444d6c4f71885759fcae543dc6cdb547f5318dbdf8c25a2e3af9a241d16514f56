import { Pattern } from '../types';
/**
 * Designed to work only with simple paths: `dir\\file`.
 */
export declare function unixify(filepath: string): string;
export declare function makeAbsolute(cwd: string, filepath: string): string;
export declare function removeLeadingDotSegment(entry: string): string;
export declare const escape: typeof escapeWindowsPath;
export declare function escapeWindowsPath(pattern: Pattern): Pattern;
export declare function escapePosixPath(pattern: Pattern): Pattern;
export declare const convertPathToPattern: typeof convertWindowsPathToPattern;
export declare function convertWindowsPathToPattern(filepath: string): Pattern;
export declare function convertPosixPathToPattern(filepath: string): Pattern;
