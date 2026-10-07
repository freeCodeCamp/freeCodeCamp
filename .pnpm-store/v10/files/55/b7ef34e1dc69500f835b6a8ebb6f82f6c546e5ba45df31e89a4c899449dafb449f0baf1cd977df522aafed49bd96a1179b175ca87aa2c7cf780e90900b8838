declare module "node:test/reporters" {
    import { Transform, TransformOptions } from "node:stream";
    import { EventData } from "node:test";
    type TestEvent =
        | { type: "test:coverage"; data: EventData.TestCoverage }
        | { type: "test:complete"; data: EventData.TestComplete }
        | { type: "test:dequeue"; data: EventData.TestDequeue }
        | { type: "test:diagnostic"; data: EventData.TestDiagnostic }
        | { type: "test:enqueue"; data: EventData.TestEnqueue }
        | { type: "test:fail"; data: EventData.TestFail }
        | { type: "test:pass"; data: EventData.TestPass }
        | { type: "test:plan"; data: EventData.TestPlan }
        | { type: "test:start"; data: EventData.TestStart }
        | { type: "test:stderr"; data: EventData.TestStderr }
        | { type: "test:stdout"; data: EventData.TestStdout }
        | { type: "test:summary"; data: EventData.TestSummary }
        | { type: "test:watch:drained"; data: undefined }
        | { type: "test:watch:restarted"; data: undefined };
    interface ReporterConstructorWrapper<T extends new(...args: any[]) => Transform> {
        new(...args: ConstructorParameters<T>): InstanceType<T>;
        (...args: ConstructorParameters<T>): InstanceType<T>;
    }
    /**
     * The `dot` reporter outputs the test results in a compact format,
     * where each passing test is represented by a `.`,
     * and each failing test is represented by a `X`.
     * @since v20.0.0
     */
    function dot(source: AsyncIterable<TestEvent>): NodeJS.AsyncIterator<string>;
    /**
     * The `tap` reporter outputs the test results in the [TAP](https://testanything.org/) format.
     * @since v20.0.0
     */
    function tap(source: AsyncIterable<TestEvent>): NodeJS.AsyncIterator<string>;
    class SpecReporter extends Transform {
        constructor();
    }
    /**
     * The `spec` reporter outputs the test results in a human-readable format.
     * @since v20.0.0
     */
    const spec: ReporterConstructorWrapper<typeof SpecReporter>;
    /**
     * The `junit` reporter outputs test results in a jUnit XML format.
     * @since v21.0.0
     */
    function junit(source: AsyncIterable<TestEvent>): NodeJS.AsyncIterator<string>;
    class LcovReporter extends Transform {
        constructor(options?: Omit<TransformOptions, "writableObjectMode">);
    }
    /**
     * The `lcov` reporter outputs test coverage when used with the
     * [`--experimental-test-coverage`](https://nodejs.org/docs/latest-v25.x/api/cli.html#--experimental-test-coverage) flag.
     * @since v22.0.0
     */
    const lcov: ReporterConstructorWrapper<typeof LcovReporter>;
    export { dot, junit, lcov, spec, tap, TestEvent };
}
