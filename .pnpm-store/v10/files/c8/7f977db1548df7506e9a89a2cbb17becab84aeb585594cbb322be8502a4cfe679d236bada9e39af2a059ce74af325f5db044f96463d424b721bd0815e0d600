import { Compiler } from 'webpack';
interface FilesChange {
    changedFiles?: string[];
    deletedFiles?: string[];
}
declare function getFilesChange(compiler: Compiler): FilesChange;
declare function updateFilesChange(compiler: Compiler, change: FilesChange): void;
declare function clearFilesChange(compiler: Compiler): void;
/**
 * Computes aggregated files change based on the subsequent files changes.
 *
 * @param changes List of subsequent files changes
 * @returns Files change that represents all subsequent changes as a one event
 */
declare function aggregateFilesChanges(changes: FilesChange[]): FilesChange;
export { FilesChange, getFilesChange, updateFilesChange, clearFilesChange, aggregateFilesChanges };
