declare namespace PidTree {
  export interface Options {
    /**
     * Include the provided PID in the list. Ignored if -1 is passed as PID.
     * @default false
     */
    root?: boolean;
  }

  export interface AdvancedResult {
    /**
     * PID of the parent.
     */
    ppid: number;
    /**
     * PID
     */
    pid: number;
  }

  export type Result = number;
}

/**
 * Get the list of children pids of the given pid.
 * @param  pid A PID. If -1 will return all the pids.
 * @param  callback Called when the list is ready.
 */
declare function pidtree(
  pid: string | number,
  callback: (error: Error | undefined, result: PidTree.Result[]) => void
): void;

/**
 * Get the list of children pids of the given pid.
 * @param  pid A PID. If -1 will return all the pids.
 * @param  options Options object.
 * @param  callback Called when the list is ready.
 */
declare function pidtree(
  pid: string | number,
  options: PidTree.Options,
  callback: (error: Error | undefined, result: PidTree.Result[]) => void
): void;

/**
 * Get the list of children pids of the given pid.
 * @param  pid A PID. If -1 will return all the pids.
 * @param  options Options object.
 * @param  callback Called when the list is ready.
 */
declare function pidtree(
  pid: string | number,
  options: PidTree.Options & {advanced: true},
  callback: (error: Error | undefined, result: PidTree.AdvancedResult[]) => void
): void;

/**
 * Get the list of children pids of the given pid.
 * @param  pid A PID. If -1 will return all the pids.
 * @param  [options] Optional options object.
 * @returns A promise containing the list.
 */
declare function pidtree(
  pid: string | number,
  options?: PidTree.Options
): Promise<PidTree.Result[]>;

/**
 * Get the list of children pids of the given pid.
 * @param  pid A PID. If -1 will return all the pids.
 * @param  options Options object.
 * @returns A promise containing the list.
 */
declare function pidtree(
  pid: string | number,
  options: PidTree.Options & {advanced: true}
): Promise<PidTree.AdvancedResult[]>;

export = pidtree;
