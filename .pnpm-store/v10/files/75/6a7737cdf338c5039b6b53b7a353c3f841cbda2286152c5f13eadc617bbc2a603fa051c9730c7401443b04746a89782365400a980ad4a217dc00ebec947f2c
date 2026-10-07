import { type Document } from './bson';
import { MongoAPIError } from './error';

/** @public */
export const ExplainVerbosity = Object.freeze({
  queryPlanner: 'queryPlanner',
  queryPlannerExtended: 'queryPlannerExtended',
  executionStats: 'executionStats',
  allPlansExecution: 'allPlansExecution'
} as const);

/** @public */
export type ExplainVerbosity = string;

/**
 * For backwards compatibility, true is interpreted as "allPlansExecution"
 * and false as "queryPlanner".
 * @public
 */
export type ExplainVerbosityLike = ExplainVerbosity | boolean;

/** @public */
export interface ExplainCommandOptions {
  /** The explain verbosity for the command. */
  verbosity: ExplainVerbosity;
  /** The maxTimeMS setting for the command. */
  maxTimeMS?: number;
}

/**
 * @public
 *
 * When set, this configures an explain command.  Valid values are boolean (for legacy compatibility,
 * see {@link ExplainVerbosityLike}), a string containing the explain verbosity, or an object containing the verbosity and
 * an optional maxTimeMS.
 *
 * Examples of valid usage:
 *
 * ```typescript
 * collection.find({ name: 'john doe' }, { explain: true });
 * collection.find({ name: 'john doe' }, { explain: false });
 * collection.find({ name: 'john doe' }, { explain: 'queryPlanner' });
 * collection.find({ name: 'john doe' }, { explain: { verbosity: 'queryPlanner' } });
 * ```
 *
 * maxTimeMS can be configured to limit the amount of time the server
 * spends executing an explain by providing an object:
 *
 * ```typescript
 * // limits the `explain` command to no more than 2 seconds
 * collection.find({ name: 'john doe' }, {
 *   explain:  {
 *    verbosity: 'queryPlanner',
 *    maxTimeMS: 2000
 *  }
 * });
 * ```
 */
export interface ExplainOptions {
  /** Specifies the verbosity mode for the explain output. */
  explain?: ExplainVerbosityLike | ExplainCommandOptions;
}

/** @internal */
export class Explain {
  readonly verbosity: ExplainVerbosity;
  readonly maxTimeMS?: number;

  private constructor(verbosity: ExplainVerbosityLike, maxTimeMS?: number) {
    if (typeof verbosity === 'boolean') {
      this.verbosity = verbosity
        ? ExplainVerbosity.allPlansExecution
        : ExplainVerbosity.queryPlanner;
    } else {
      this.verbosity = verbosity;
    }

    this.maxTimeMS = maxTimeMS;
  }

  static fromOptions({ explain }: ExplainOptions = {}): Explain | undefined {
    if (explain == null) return;

    if (typeof explain === 'boolean' || typeof explain === 'string') {
      return new Explain(explain);
    }

    const { verbosity, maxTimeMS } = explain;
    return new Explain(verbosity, maxTimeMS);
  }
}

export function validateExplainTimeoutOptions(options: Document, explain?: Explain) {
  const { maxTimeMS, timeoutMS } = options;
  if (timeoutMS != null && (maxTimeMS != null || explain?.maxTimeMS != null)) {
    throw new MongoAPIError('Cannot use maxTimeMS with timeoutMS for explain commands.');
  }
}

/**
 * Applies an explain to a given command.
 * @internal
 *
 * @param command - the command on which to apply the explain
 * @param options - the options containing the explain verbosity
 */
export function decorateWithExplain(
  command: Document,
  explain: Explain
): {
  explain: Document;
  verbosity: ExplainVerbosity;
  maxTimeMS?: number;
} {
  type ExplainCommand = ReturnType<typeof decorateWithExplain>;
  const { verbosity, maxTimeMS } = explain;
  const baseCommand: ExplainCommand = { explain: command, verbosity };

  if (typeof maxTimeMS === 'number') {
    baseCommand.maxTimeMS = maxTimeMS;
  }

  return baseCommand;
}
