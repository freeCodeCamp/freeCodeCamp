import type { Document } from '../bson';
import { MongoAPIError } from '../error';
import {
  Explain,
  type ExplainCommandOptions,
  type ExplainVerbosityLike,
  validateExplainTimeoutOptions
} from '../explain';
import type { MongoClient } from '../mongo_client';
import { type Abortable } from '../mongo_types';
import { AggregateOperation, type AggregateOptions } from '../operations/aggregate';
import { executeOperation } from '../operations/execute_operation';
import type { ClientSession } from '../sessions';
import type { Sort } from '../sort';
import { mergeOptions, type MongoDBNamespace } from '../utils';
import {
  type AbstractCursorOptions,
  CursorTimeoutMode,
  type InitialCursorResponse
} from './abstract_cursor';
import { ExplainableCursor } from './explainable_cursor';

/** @public */
export interface AggregationCursorOptions extends AbstractCursorOptions, AggregateOptions {}

/**
 * The **AggregationCursor** class is an internal class that embodies an aggregation cursor on MongoDB
 * allowing for iteration over the results returned from the underlying query. It supports
 * one by one document iteration, conversion to an array or can be iterated as a Node 4.X
 * or higher stream
 * @public
 */
export class AggregationCursor<TSchema = any> extends ExplainableCursor<TSchema> {
  public readonly pipeline: Document[];
  /** @internal */
  private aggregateOptions: AggregateOptions & Abortable;

  /** @internal */
  constructor(
    client: MongoClient,
    namespace: MongoDBNamespace,
    pipeline: Document[] = [],
    options: AggregateOptions & Abortable = {}
  ) {
    super(client, namespace, options);

    this.pipeline = pipeline;
    this.aggregateOptions = options;

    const lastStage: Document | undefined = this.pipeline[this.pipeline.length - 1];

    if (
      this.cursorOptions.timeoutMS != null &&
      this.cursorOptions.timeoutMode === CursorTimeoutMode.ITERATION &&
      (lastStage?.$merge != null || lastStage?.$out != null)
    )
      throw new MongoAPIError('Cannot use $out or $merge stage with ITERATION timeoutMode');
  }

  clone(): AggregationCursor<TSchema> {
    const clonedOptions = mergeOptions({}, this.aggregateOptions);
    delete clonedOptions.session;
    return new AggregationCursor(this.client, this.namespace, this.pipeline, {
      ...clonedOptions
    });
  }

  override map<T>(transform: (doc: TSchema) => T): AggregationCursor<T> {
    return super.map(transform) as AggregationCursor<T>;
  }

  /** @internal */
  async _initialize(session: ClientSession): Promise<InitialCursorResponse> {
    const options = {
      ...this.aggregateOptions,
      ...this.cursorOptions,
      session,
      signal: this.signal
    };
    if (options.explain) {
      try {
        validateExplainTimeoutOptions(options, Explain.fromOptions(options));
      } catch {
        throw new MongoAPIError(
          'timeoutMS cannot be used with explain when explain is specified in aggregateOptions'
        );
      }
    }

    const aggregateOperation = new AggregateOperation(this.namespace, this.pipeline, options);

    const response = await executeOperation(this.client, aggregateOperation, this.timeoutContext);

    return { server: aggregateOperation.server, session, response };
  }

  /** Execute the explain for the cursor */
  async explain(): Promise<Document>;
  async explain(verbosity: ExplainVerbosityLike | ExplainCommandOptions): Promise<Document>;
  async explain(options: { timeoutMS?: number }): Promise<Document>;
  async explain(
    verbosity: ExplainVerbosityLike | ExplainCommandOptions,
    options: { timeoutMS?: number }
  ): Promise<Document>;
  async explain(
    verbosity?: ExplainVerbosityLike | ExplainCommandOptions | { timeoutMS?: number },
    options?: { timeoutMS?: number }
  ): Promise<Document> {
    const { explain, timeout } = this.resolveExplainTimeoutOptions(verbosity, options);
    return (
      await executeOperation(
        this.client,
        new AggregateOperation(this.namespace, this.pipeline, {
          ...this.aggregateOptions, // NOTE: order matters here, we may need to refine this
          ...this.cursorOptions,
          ...timeout,
          explain: explain ?? true
        })
      )
    ).shift(this.deserializationOptions);
  }

  /** Add a stage to the aggregation pipeline
   * @example
   * ```
   * const documents = await users.aggregate().addStage({ $match: { name: /Mike/ } }).toArray();
   * ```
   * @example
   * ```
   * const documents = await users.aggregate()
   *   .addStage<{ name: string }>({ $project: { name: true } })
   *   .toArray(); // type of documents is { name: string }[]
   * ```
   */
  addStage(stage: Document): this;
  addStage<T = Document>(stage: Document): AggregationCursor<T>;
  addStage<T = Document>(stage: Document): AggregationCursor<T> {
    this.throwIfInitialized();
    if (
      this.cursorOptions.timeoutMS != null &&
      this.cursorOptions.timeoutMode === CursorTimeoutMode.ITERATION &&
      (stage.$out != null || stage.$merge != null)
    ) {
      throw new MongoAPIError('Cannot use $out or $merge stage with ITERATION timeoutMode');
    }
    this.pipeline.push(stage);
    return this as unknown as AggregationCursor<T>;
  }

  /** Add a group stage to the aggregation pipeline */
  group<T = TSchema>($group: Document): AggregationCursor<T>;
  group($group: Document): this {
    return this.addStage({ $group });
  }

  /** Add a limit stage to the aggregation pipeline */
  limit($limit: number): this {
    return this.addStage({ $limit });
  }

  /** Add a match stage to the aggregation pipeline */
  match($match: Document): this {
    return this.addStage({ $match });
  }

  /** Add an out stage to the aggregation pipeline */
  out($out: { db: string; coll: string } | string): this {
    return this.addStage({ $out });
  }

  /**
   * Add a project stage to the aggregation pipeline
   *
   * @remarks
   * In order to strictly type this function you must provide an interface
   * that represents the effect of your projection on the result documents.
   *
   * By default chaining a projection to your cursor changes the returned type to the generic {@link Document} type.
   * You should specify a parameterized type to have assertions on your final results.
   *
   * @example
   * ```typescript
   * // Best way
   * const docs: AggregationCursor<{ a: number }> = cursor.project<{ a: number }>({ _id: 0, a: true });
   * // Flexible way
   * const docs: AggregationCursor<Document> = cursor.project({ _id: 0, a: true });
   * ```
   *
   * @remarks
   * In order to strictly type this function you must provide an interface
   * that represents the effect of your projection on the result documents.
   *
   * **Note for Typescript Users:** adding a transform changes the return type of the iteration of this cursor,
   * it **does not** return a new instance of a cursor. This means when calling project,
   * you should always assign the result to a new variable in order to get a correctly typed cursor variable.
   * Take note of the following example:
   *
   * @example
   * ```typescript
   * const cursor: AggregationCursor<{ a: number; b: string }> = coll.aggregate([]);
   * const projectCursor = cursor.project<{ a: number }>({ _id: 0, a: true });
   * const aPropOnlyArray: {a: number}[] = await projectCursor.toArray();
   *
   * // or always use chaining and save the final cursor
   *
   * const cursor = coll.aggregate().project<{ a: string }>({
   *   _id: 0,
   *   a: { $convert: { input: '$a', to: 'string' }
   * }});
   * ```
   */
  project<T extends Document = Document>($project: Document): AggregationCursor<T> {
    return this.addStage<T>({ $project });
  }

  /** Add a lookup stage to the aggregation pipeline */
  lookup($lookup: Document): this {
    return this.addStage({ $lookup });
  }

  /** Add a redact stage to the aggregation pipeline */
  redact($redact: Document): this {
    return this.addStage({ $redact });
  }

  /** Add a skip stage to the aggregation pipeline */
  skip($skip: number): this {
    return this.addStage({ $skip });
  }

  /** Add a sort stage to the aggregation pipeline */
  sort($sort: Sort): this {
    return this.addStage({ $sort });
  }

  /** Add a unwind stage to the aggregation pipeline */
  unwind($unwind: Document | string): this {
    return this.addStage({ $unwind });
  }

  /** Add a geoNear stage to the aggregation pipeline */
  geoNear($geoNear: Document): this {
    return this.addStage({ $geoNear });
  }
}
