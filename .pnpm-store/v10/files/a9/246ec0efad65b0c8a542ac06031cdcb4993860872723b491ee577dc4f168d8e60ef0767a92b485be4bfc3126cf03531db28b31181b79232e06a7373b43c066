/**
 * Processes queue that might have been set before
 * the script was actually loaded and reassigns
 * class over globalObject variable to execute commands
 * instead of putting them to the queue.
 */
import { getFunctionalInterface } from "./_getFunctionalInterface";
import type AlgoliaAnalytics from "./insights";

export function processQueue(this: AlgoliaAnalytics, globalObject: any): void {
  // Set pointer which allows renaming of the script
  const pointer = globalObject.AlgoliaAnalyticsObject as string;

  if (pointer) {
    const _aa = getFunctionalInterface(this);

    // `aa` is the user facing function, which is defined in the install snippet.
    //  - before library is initialized  `aa` fills a queue
    //  - after library is initialized  `aa` calls `_aa`
    const aa = globalObject[pointer];
    aa.queue = aa.queue || [];

    const queue: IArguments[] = aa.queue;

    // Loop queue and execute functions in the queue
    queue.forEach((args: IArguments) => {
      const [functionName, ...functionArguments] = [].slice.call(args);
      _aa(functionName as any, ...(functionArguments as any));
    });

    /* eslint-disable no-warning-comments */
    // FIXME: Reassigning the pointer is a bad idea (cf: https://github.com/algolia/search-insights.js/issues/127)
    //   to remove this without any breaking change, we redefine the Array.prototype.push method on the queue array.
    //   for next major version, use a custom method instead of push.
    /* eslint-enable */
    // @ts-expect-error (otherwise typescript won't let you change the signature)
    queue.push = (args: IArguments): number => {
      const [functionName, ...functionArguments] = [].slice.call(args);
      _aa(functionName as any, ...(functionArguments as any));
    };
  }
}
