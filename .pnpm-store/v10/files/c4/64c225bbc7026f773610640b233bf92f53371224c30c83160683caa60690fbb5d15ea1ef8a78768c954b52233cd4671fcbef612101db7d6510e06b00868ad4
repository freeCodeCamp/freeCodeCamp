"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregationCursor = void 0;
const error_1 = require("../error");
const explain_1 = require("../explain");
const aggregate_1 = require("../operations/aggregate");
const execute_operation_1 = require("../operations/execute_operation");
const utils_1 = require("../utils");
const abstract_cursor_1 = require("./abstract_cursor");
const explainable_cursor_1 = require("./explainable_cursor");
/**
 * The **AggregationCursor** class is an internal class that embodies an aggregation cursor on MongoDB
 * allowing for iteration over the results returned from the underlying query. It supports
 * one by one document iteration, conversion to an array or can be iterated as a Node 4.X
 * or higher stream
 * @public
 */
class AggregationCursor extends explainable_cursor_1.ExplainableCursor {
    /** @internal */
    constructor(client, namespace, pipeline = [], options = {}) {
        super(client, namespace, options);
        this.pipeline = pipeline;
        this.aggregateOptions = options;
        const lastStage = this.pipeline[this.pipeline.length - 1];
        if (this.cursorOptions.timeoutMS != null &&
            this.cursorOptions.timeoutMode === abstract_cursor_1.CursorTimeoutMode.ITERATION &&
            (lastStage?.$merge != null || lastStage?.$out != null))
            throw new error_1.MongoAPIError('Cannot use $out or $merge stage with ITERATION timeoutMode');
    }
    clone() {
        const clonedOptions = (0, utils_1.mergeOptions)({}, this.aggregateOptions);
        delete clonedOptions.session;
        return new AggregationCursor(this.client, this.namespace, this.pipeline, {
            ...clonedOptions
        });
    }
    map(transform) {
        return super.map(transform);
    }
    /** @internal */
    async _initialize(session) {
        const options = {
            ...this.aggregateOptions,
            ...this.cursorOptions,
            session,
            signal: this.signal
        };
        if (options.explain) {
            try {
                (0, explain_1.validateExplainTimeoutOptions)(options, explain_1.Explain.fromOptions(options));
            }
            catch {
                throw new error_1.MongoAPIError('timeoutMS cannot be used with explain when explain is specified in aggregateOptions');
            }
        }
        const aggregateOperation = new aggregate_1.AggregateOperation(this.namespace, this.pipeline, options);
        const response = await (0, execute_operation_1.executeOperation)(this.client, aggregateOperation, this.timeoutContext);
        return { server: aggregateOperation.server, session, response };
    }
    async explain(verbosity, options) {
        const { explain, timeout } = this.resolveExplainTimeoutOptions(verbosity, options);
        return (await (0, execute_operation_1.executeOperation)(this.client, new aggregate_1.AggregateOperation(this.namespace, this.pipeline, {
            ...this.aggregateOptions, // NOTE: order matters here, we may need to refine this
            ...this.cursorOptions,
            ...timeout,
            explain: explain ?? true
        }))).shift(this.deserializationOptions);
    }
    addStage(stage) {
        this.throwIfInitialized();
        if (this.cursorOptions.timeoutMS != null &&
            this.cursorOptions.timeoutMode === abstract_cursor_1.CursorTimeoutMode.ITERATION &&
            (stage.$out != null || stage.$merge != null)) {
            throw new error_1.MongoAPIError('Cannot use $out or $merge stage with ITERATION timeoutMode');
        }
        this.pipeline.push(stage);
        return this;
    }
    group($group) {
        return this.addStage({ $group });
    }
    /** Add a limit stage to the aggregation pipeline */
    limit($limit) {
        return this.addStage({ $limit });
    }
    /** Add a match stage to the aggregation pipeline */
    match($match) {
        return this.addStage({ $match });
    }
    /** Add an out stage to the aggregation pipeline */
    out($out) {
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
    project($project) {
        return this.addStage({ $project });
    }
    /** Add a lookup stage to the aggregation pipeline */
    lookup($lookup) {
        return this.addStage({ $lookup });
    }
    /** Add a redact stage to the aggregation pipeline */
    redact($redact) {
        return this.addStage({ $redact });
    }
    /** Add a skip stage to the aggregation pipeline */
    skip($skip) {
        return this.addStage({ $skip });
    }
    /** Add a sort stage to the aggregation pipeline */
    sort($sort) {
        return this.addStage({ $sort });
    }
    /** Add a unwind stage to the aggregation pipeline */
    unwind($unwind) {
        return this.addStage({ $unwind });
    }
    /** Add a geoNear stage to the aggregation pipeline */
    geoNear($geoNear) {
        return this.addStage({ $geoNear });
    }
}
exports.AggregationCursor = AggregationCursor;
//# sourceMappingURL=aggregation_cursor.js.map