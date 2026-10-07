import { type Document } from '../bson';
import { type ExplainCommandOptions, type ExplainVerbosityLike } from '../explain';
import { AbstractCursor } from './abstract_cursor';

/**
 * @public
 *
 * A base class for any cursors that have `explain()` methods.
 */
export abstract class ExplainableCursor<TSchema> extends AbstractCursor<TSchema> {
  /** Execute the explain for the cursor */
  abstract explain(): Promise<Document>;
  abstract explain(verbosity: ExplainVerbosityLike | ExplainCommandOptions): Promise<Document>;
  abstract explain(options: { timeoutMS?: number }): Promise<Document>;
  abstract explain(
    verbosity: ExplainVerbosityLike | ExplainCommandOptions,
    options: { timeoutMS?: number }
  ): Promise<Document>;
  abstract explain(
    verbosity?: ExplainVerbosityLike | ExplainCommandOptions | { timeoutMS?: number },
    options?: { timeoutMS?: number }
  ): Promise<Document>;

  protected resolveExplainTimeoutOptions(
    verbosity?: ExplainVerbosityLike | ExplainCommandOptions | { timeoutMS?: number },
    options?: { timeoutMS?: number }
  ): { timeout?: { timeoutMS?: number }; explain?: ExplainVerbosityLike | ExplainCommandOptions } {
    let explain: ExplainVerbosityLike | ExplainCommandOptions | undefined;
    let timeout: { timeoutMS?: number } | undefined;

    if (verbosity == null && options == null) {
      explain = undefined;
      timeout = undefined;
    } else if (verbosity != null && options == null) {
      explain =
        typeof verbosity !== 'object'
          ? verbosity
          : 'verbosity' in verbosity
            ? verbosity
            : undefined;

      timeout = typeof verbosity === 'object' && 'timeoutMS' in verbosity ? verbosity : undefined;
    } else {
      // @ts-expect-error TS isn't smart enough to determine that if both options are provided, the first is explain options
      explain = verbosity;
      timeout = options;
    }

    return { timeout, explain };
  }
}
