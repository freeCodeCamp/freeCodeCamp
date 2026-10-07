import * as internal from "./internal/schedule.js";
/**
 * @since 2.0.0
 * @category Symbols
 */
export const ScheduleTypeId = internal.ScheduleTypeId;
/**
 * @since 2.0.0
 * @category Symbols
 */
export const ScheduleDriverTypeId = internal.ScheduleDriverTypeId;
/**
 * Creates a new schedule with a custom state and step function.
 *
 * **Details**
 *
 * This function constructs a `Schedule` by defining its initial state and a
 * step function, which determines how the schedule progresses over time. The
 * step function is called on each iteration with the current time, an input
 * value, and the schedule's current state. It returns the next state, an output
 * value, and a decision on whether the schedule should continue or stop.
 *
 * This function is useful for creating custom scheduling logic that goes beyond
 * predefined schedules like fixed intervals or exponential backoff. It allows
 * full control over how the schedule behaves at each step.
 *
 * @since 2.0.0
 * @category Constructors
 */
export const makeWithState = internal.makeWithState;
/**
 * Checks whether a given value is a `Schedule`.
 *
 * @since 2.0.0
 * @category Guards
 */
export const isSchedule = internal.isSchedule;
/**
 * Adds a delay to every interval in a schedule.
 *
 * **Details**
 *
 * This function modifies a given schedule by applying an additional delay to
 * every interval it defines. The delay is determined by the provided function,
 * which takes the schedule's output and returns a delay duration.
 *
 * @see {@link addDelayEffect} If you need to compute the delay using an effectful function.
 *
 * @since 2.0.0
 * @category Timing & Delay
 */
export const addDelay = internal.addDelay;
/**
 * Adds an effectfully computed delay to every interval in a schedule.
 *
 * **Details**
 *
 * This function modifies a given schedule by applying an additional delay to
 * each interval, where the delay is determined by an effectful function. The
 * function takes the schedule’s output and returns an effect that produces a
 * delay duration.
 *
 * @see {@link addDelay} If you need to compute the delay using a pure function.
 *
 * @since 2.0.0
 * @category Timing & Delay
 */
export const addDelayEffect = internal.addDelayEffect;
/**
 * Runs two schedules sequentially, merging their outputs.
 *
 * **Details**
 *
 * This function executes two schedules one after the other. The first schedule
 * runs to completion, and then the second schedule begins execution. Unlike
 * {@link andThenEither}, this function merges the outputs instead of wrapping
 * them in `Either`, allowing both schedules to contribute their results
 * directly.
 *
 * This is useful when a workflow consists of two phases where the second phase
 * should start only after the first one has fully completed.
 *
 * @see {@link andThenEither} If you need to keep track of which schedule
 * produced each result.
 *
 * @since 2.0.0
 * @category Sequential Composition
 */
export const andThen = internal.andThen;
/**
 * Runs two schedules sequentially, collecting results in an `Either`.
 *
 * **Details**
 *
 * This function combines two schedules in sequence. The first schedule runs to
 * completion, and then the second schedule starts and runs to completion as
 * well. The outputs of both schedules are collected into an `Either` structure:
 * - `Either.Left` contains the output of the second schedule.
 * - `Either.Right` contains the output of the first schedule.
 *
 * This is useful when you need to switch from one schedule to another after the
 * first one finishes, while still keeping track of which schedule produced each
 * result.
 *
 * @see {@link andThen} If you need to merge the outputs of both schedules.
 *
 * @since 2.0.0
 * @category Sequential Composition
 */
export const andThenEither = internal.andThenEither;
/**
 * Transforms a schedule to always produce a constant output.
 *
 * **Details**
 *
 * This function modifies a given schedule so that instead of returning its
 * computed outputs, it always returns a constant value.
 *
 * This is useful when you need a schedule for timing but don’t care about its
 * actual output, or when you want to standardize results across different
 * scheduling strategies.
 *
 * @since 2.0.0
 * @category Mapping
 */
export const as = internal.as;
/**
 * Transforms a schedule to always return `void` instead of its output.
 *
 * **Details**
 *
 * This function modifies a given schedule so that it no longer returns
 * meaningful output—each execution produces `void`. This is useful when the
 * schedule is used only for timing purposes and the actual output of the
 * schedule is irrelevant.
 *
 * The schedule still determines when executions should occur, but the results
 * are discarded.
 *
 * @since 2.0.0
 * @category Mapping
 */
export const asVoid = internal.asVoid;
// TODO(4.0): rename to `zip`?
/**
 * Combines two schedules, preserving both their inputs and outputs.
 *
 * **Details**
 *
 * This function merges two schedules so that both their input types and output
 * types are retained. When executed, the resulting schedule will take inputs
 * from both original schedules and produce a tuple containing both outputs.
 *
 * It recurs if either schedule wants to continue, using the shorter delay.
 *
 * This is useful when you want to track multiple schedules simultaneously,
 * ensuring that both receive the same inputs and produce combined results.
 *
 * @since 2.0.0
 * @category Zipping
 */
export const bothInOut = internal.bothInOut;
/**
 * Filters schedule executions based on a custom condition.
 *
 * **Details**
 *
 * This function modifies a schedule by applying a custom test function to each
 * input-output pair. The test function determines whether the schedule should
 * continue or stop. If the function returns `true`, the schedule proceeds as
 * usual; if it returns `false`, the schedule terminates.
 *
 * This is useful for conditional retries, custom stop conditions, or
 * dynamically controlling execution based on observed inputs and outputs.
 *
 * @see {@link checkEffect} If you need to use an effectful test function.
 *
 * @since 2.0.0
 * @category Recurrence Conditions
 */
export const check = internal.check;
/**
 * Conditionally filters schedule executions using an effectful function.
 *
 * **Details**
 *
 * This function modifies a schedule by applying a custom effectful test
 * function to each input-output pair. The test function determines whether the
 * schedule should continue (`true`) or stop (`false`).
 *
 * This is useful when the decision to continue depends on external factors such
 * as database lookups, API calls, or other asynchronous computations.
 *
 * @see {@link check} If you need to use a pure test function.
 *
 * @since 2.0.0
 * @category Recurrence Conditions
 */
export const checkEffect = internal.checkEffect;
/**
 * A schedule that collects all inputs into a `Chunk`.
 *
 * **Details**
 *
 * This function creates a schedule that never terminates and continuously
 * collects every input it receives into a `Chunk`. Each time the schedule runs,
 * it appends the new input to the collected list.
 *
 * This is useful when you need to track all received inputs over time, such as
 * logging user actions, recording retry attempts, or accumulating data for
 * later processing.
 *
 * @see {@link collectAllOutputs} If you need to collect outputs instead of
 * inputs.
 *
 * @since 2.0.0
 * @category Collecting
 */
export const collectAllInputs = internal.collectAllInputs;
/**
 * Collects all outputs of a schedule into a `Chunk`.
 *
 * **Details**
 *
 * This function modifies a given schedule so that instead of returning
 * individual outputs, it accumulates them into a `Chunk`. The schedule
 * continues to run, appending each output to the collected list.
 *
 * This is useful when you need to track all results over time, such as logging
 * outputs, aggregating data, or keeping a history of previous values.
 *
 * @see {@link collectAllInputs} If you need to collect inputs instead of
 * outputs.
 *
 * @since 2.0.0
 * @category Collecting
 */
export const collectAllOutputs = internal.collectAllOutputs;
/**
 * Collects all inputs into a `Chunk` until a condition fails.
 *
 * **Details**
 *
 * This function creates a schedule that continuously collects inputs into a
 * `Chunk` until the given predicate function `f` evaluates to `false`. Once the
 * condition fails, the schedule stops.
 *
 * @since 2.0.0
 * @category Collecting
 */
export const collectUntil = internal.collectUntil;
/**
 * Collects all inputs into a `Chunk` until an effectful condition fails.
 *
 * **Details**
 *
 * This function creates a schedule that continuously collects inputs into a
 * `Chunk` until the given effectful predicate `f` returns `false`. The
 * predicate runs as an effect, meaning it can involve asynchronous computations
 * like API calls, database lookups, or randomness.
 *
 * @since 2.0.0
 * @category Collecting
 */
export const collectUntilEffect = internal.collectUntilEffect;
/**
 * Collects all inputs into a `Chunk` while a condition holds.
 *
 * **Details**
 *
 * This function creates a schedule that continuously collects inputs into a
 * `Chunk` while the given predicate function `f` evaluates to `true`. As soon
 * as the condition fails, the schedule stops.
 *
 * @since 2.0.0
 * @category Collecting
 */
export const collectWhile = internal.collectWhile;
/**
 * Collects all inputs into a `Chunk` while an effectful condition holds.
 *
 * **Details**
 *
 * This function creates a schedule that continuously collects inputs into a
 * `Chunk` while the given effectful predicate `f` returns `true`. The predicate
 * returns an effect, meaning it can depend on external state, such as database
 * queries, API responses, or real-time user conditions.
 *
 * As soon as the effectful condition returns `false`, the schedule stops. This
 * is useful for dynamically controlled data collection, where stopping depends
 * on an external or asynchronous factor.
 *
 * @since 2.0.0
 * @category Collecting
 */
export const collectWhileEffect = internal.collectWhileEffect;
/**
 * Chains two schedules, passing the output of the first as the input to the
 * second, while selecting the shorter delay between them.
 *
 * **Details**
 *
 * This function composes two schedules so that the output of the first schedule
 * becomes the input of the second schedule. The first schedule executes first,
 * and once it produces a result, the second schedule receives that result and
 * continues execution based on it.
 *
 * This is useful for building complex scheduling workflows where one schedule's
 * behavior determines how the next schedule behaves.
 *
 * @since 2.0.0
 * @category Composition
 */
export const compose = internal.compose;
/**
 * Transforms the input type of a schedule.
 *
 * **Details**
 *
 * This function modifies a given schedule by applying a transformation function
 * to its inputs. Instead of directly receiving values of type `In`, the
 * schedule will now accept values of type `In2`, which are converted to `In`
 * using the provided mapping function `f`.
 *
 * This is useful when you have a schedule that expects a specific input type
 * but you need to adapt it to work with a different type.
 *
 * @see {@link mapInputEffect} If you need to use an effectful transformation function.
 *
 * @since 2.0.0
 * @category Mapping
 */
export const mapInput = internal.mapInput;
/**
 * Transforms the input type of a schedule using an effectful function.
 *
 * **Details**
 *
 * This function modifies a schedule by applying an effectful transformation to
 * its inputs. Instead of directly receiving values of type `In`, the schedule
 * will now accept values of type `In2`, which are converted to `In` via an
 * effectful function `f`.
 *
 * This is useful when the input transformation involves external dependencies,
 * such as API calls, database lookups, or other asynchronous computations.
 *
 * @see {@link mapInput} If you need to use a pure transformation function.
 *
 * @since 2.0.0
 * @category Mapping
 */
export const mapInputEffect = internal.mapInputEffect;
/**
 * Transforms the required context of a schedule.
 *
 * **Details**
 *
 * This function modifies a schedule by mapping its required context (`R`) into
 * a new context (`R0`) using the provided function `f`.
 *
 * This is useful when you need to adapt a schedule to work with a different
 * dependency environment without changing its core logic.
 *
 * @since 2.0.0
 * @category Mapping
 */
export const mapInputContext = internal.mapInputContext;
/**
 * A schedule that recurs indefinitely, counting the number of recurrences.
 *
 * **Details**
 *
 * This schedule never stops and simply counts how many times it has executed.
 * Each recurrence increases the count, starting from `0`.
 *
 * This is useful when tracking the number of attempts in retry policies,
 * measuring execution loops, or implementing infinite polling scenarios.
 *
 * @since 2.0.0
 * @category Constructors
 */
export const count = internal.count;
/**
 * Creates a schedule that recurs based on a cron expression.
 *
 * **Details**
 *
 * This schedule automatically executes at intervals defined by a cron
 * expression. It triggers at the beginning of each matched interval and
 * produces timestamps representing the start and end of the cron window.
 *
 * The cron `expression` is validated lazily, meaning errors may only be
 * detected when the schedule is executed.
 *
 * @since 2.0.0
 * @category Cron
 */
export const cron = internal.cron;
/**
 * Cron-like schedule that recurs at a specific second of each minute.
 *
 * **Details**
 *
 * This schedule triggers at the specified `second` of each minute,
 * starting at zero nanoseconds. It produces a count of executions
 * (0, 1, 2, ...). The `second` parameter is validated lazily, meaning
 * invalid values will only be caught at runtime.
 *
 * @since 2.0.0
 * @category Cron
 */
export const secondOfMinute = internal.secondOfMinute;
/**
 * Creates a schedule that recurs every specified minute of each hour.
 *
 * **Details**
 *
 * This schedule triggers once per hour at the specified `minute`, starting
 * exactly at `minute:00` (zero seconds). The schedule produces a count of
 * executions (`0, 1, 2, ...`), representing how many times it has run.
 *
 * The `minute` parameter must be between `0` and `59`. It is validated lazily,
 * meaning an invalid value will cause errors only when the schedule is
 * executed.
 *
 * @since 2.0.0
 * @category Cron
 */
export const minuteOfHour = internal.minuteOfHour;
/**
 * Creates a schedule that recurs at a specific hour of each day.
 *
 * **Details**
 *
 * This schedule triggers once per day at the specified `hour`, starting at zero
 * minutes of that hour. The schedule produces a count of executions (`0, 1, 2,
 * ...`), indicating how many times it has been triggered.
 *
 * The `hour` parameter must be between `0` (midnight) and `23` (11 PM). It is
 * validated lazily, meaning an invalid value will cause errors only when the
 * schedule is executed.
 *
 * This is useful for scheduling daily recurring tasks at a fixed time, such as
 * running batch jobs or refreshing data.
 *
 * @since 2.0.0
 * @category Cron
 */
export const hourOfDay = internal.hourOfDay;
/**
 * Creates a schedule that recurs on a specific day of the month.
 *
 * **Details**
 *
 * This schedule triggers at midnight on the specified day of each month. It
 * will not execute in months that have fewer days than the given day. For
 * example, if the schedule is set to run on the 31st, it will not execute in
 * months with only 30 days.
 *
 * The schedule produces a count of executions, starting at 0 and incrementing
 * with each recurrence.
 *
 * The `day` parameter is validated lazily, meaning errors may only be detected
 * when the schedule is executed.
 *
 * @since 2.0.0
 * @category Cron
 */
export const dayOfMonth = internal.dayOfMonth;
/**
 * Creates a schedule that recurs on a specific day of the week.
 *
 * **Details**
 *
 * This schedule triggers at midnight on the specified day of the week. The
 * `day` parameter follows the standard convention where `Monday = 1` and
 * `Sunday = 7`. The schedule produces a count of executions, starting at 0 and
 * incrementing with each recurrence.
 *
 * The `day` parameter is validated lazily, meaning errors may only be detected
 * when the schedule is executed.
 *
 * @since 2.0.0
 * @category Cron
 */
export const dayOfWeek = internal.dayOfWeek;
/**
 * Modifies a schedule by adding a computed delay before each execution.
 *
 * **Details**
 *
 * This function adjusts an existing schedule by applying a transformation to
 * its delays. Instead of using the default interval, each delay is modified
 * using the provided function `f`, which takes the current delay and returns a
 * new delay.
 *
 * This is useful for dynamically adjusting wait times between executions, such
 * as introducing jitter, exponential backoff, or custom delay logic.
 *
 * @see {@link delayedEffect} If you need to compute the delay using an effectful function.
 *
 * @since 2.0.0
 * @category Timing & Delay
 */
export const delayed = internal.delayed;
/**
 * Modifies a schedule by adding an effectfully computed delay before each
 * execution.
 *
 * **Details**
 *
 * This function adjusts an existing schedule by introducing a delay that is
 * computed via an effect. Instead of using a fixed delay, each interval is
 * dynamically adjusted based on an effectful function `f`, which takes the
 * current delay and returns a new delay wrapped in an `Effect`.
 *
 * This is useful for adaptive scheduling where delays depend on external
 * factors, such as API calls, database queries, or dynamic system conditions.
 *
 * @see {@link delayed} If you need to compute the delay using a pure function.
 *
 * @since 2.0.0
 * @category Timing & Delay
 */
export const delayedEffect = internal.delayedEffect;
/**
 * Uses the delays produced by a schedule to further delay its intervals.
 *
 * **Details**
 *
 * This function modifies a schedule by using its own output delays to control
 * its execution timing. Instead of executing immediately at each interval, the
 * schedule will be delayed by the duration it produces.
 *
 * @since 2.0.0
 * @category Timing & Delay
 */
export const delayedSchedule = internal.delayedSchedule;
/**
 * Transforms a schedule to output the delay between each occurrence.
 *
 * **Details**
 *
 * This function modifies an existing schedule so that instead of producing its
 * original output, it now returns the delay between each scheduled execution.
 *
 * @since 2.0.0
 * @category Monitoring
 */
export const delays = internal.delays;
/**
 * Transforms both the input and output of a schedule.
 *
 * **Details**
 *
 * This function modifies an existing schedule by applying a transformation to
 * both its input values and its output values. The provided transformation
 * functions `onInput` and `onOutput` allow you to map the schedule to work with
 * a different input type while modifying its outputs as well.
 *
 * @see {@link mapBothEffect} If you need to use effectful transformation functions.
 *
 * @since 2.0.0
 * @category Mapping
 */
export const mapBoth = internal.mapBoth;
/**
 * Transforms both the input and output of a schedule using effectful
 * computations.
 *
 * **Details**
 *
 * This function modifies an existing schedule by applying effectful
 * transformations to both its input values and its output values. The provided
 * effectful functions `onInput` and `onOutput` allow you to transform inputs
 * and outputs using computations that may involve additional logic, resource
 * access, or side effects.
 *
 * @see {@link mapBoth} If you need to use pure transformation functions.
 *
 * @since 2.0.0
 * @category Mapping
 */
export const mapBothEffect = internal.mapBothEffect;
/**
 * Creates a driver to manually control the execution of a schedule.
 *
 * **Details**
 *
 * This function returns a `ScheduleDriver`, which allows stepping through a
 * schedule manually while handling delays and sleeping appropriately. A driver
 * is useful when you need fine-grained control over how a schedule progresses,
 * rather than relying on automatic execution.
 *
 * The returned driver exposes methods for retrieving the current state,
 * executing the next step, and resetting the schedule when needed.
 *
 * @since 2.0.0
 * @category getter
 */
export const driver = internal.driver;
// TODO(4.0): remove?
/**
 * Alias of {@link fromDelay}.
 *
 * @since 2.0.0
 * @category Constructors
 */
export const duration = internal.duration;
// TODO(4.0): remove?
/**
 * Alias of {@link union}.
 *
 * @since 2.0.0
 * @category Alternatives
 */
export const either = internal.either;
// TODO(4.0): remove?
/**
 * Alias of {@link unionWith}.
 *
 * @since 2.0.0
 * @category Alternatives
 */
export const eitherWith = internal.eitherWith;
/**
 * Creates a schedule that tracks the total elapsed duration since it started.
 *
 * **Details**
 *
 * This schedule executes continuously and returns the total time that has
 * passed since the first execution. The duration keeps increasing with each
 * step, providing a way to measure elapsed time.
 *
 * This is useful for tracking execution time, monitoring delays, or
 * implementing logic based on how long a process has been running.
 *
 * @since 2.0.0
 * @category Constructors
 */
export const elapsed = internal.elapsed;
/**
 * Attaches a finalizer to a schedule that runs when the schedule completes.
 *
 * **Details**
 *
 * This function returns a new schedule that executes a given finalizer when the
 * schedule reaches completion. Unlike `Effect.ensuring`, this method does not
 * guarantee the finalizer will run in all cases. If the schedule never
 * initializes or is not driven to completion, the finalizer may not execute.
 * However, if the schedule decides not to continue, the finalizer will be
 * invoked.
 *
 * This is useful for cleaning up resources, logging, or executing other side
 * effects when a schedule completes.
 *
 * @since 2.0.0
 * @category Finalization
 */
export const ensuring = internal.ensuring;
/**
 * Creates a schedule that recurs indefinitely with exponentially increasing
 * delays.
 *
 * **Details**
 *
 * This schedule starts with an initial delay of `base` and increases the delay
 * exponentially on each repetition using the formula `base * factor^n`, where
 * `n` is the number of times the schedule has executed so far. If no `factor`
 * is provided, it defaults to `2`, causing the delay to double after each
 * execution.
 *
 * @since 2.0.0
 * @category Constructors
 */
export const exponential = internal.exponential;
/**
 * Creates a schedule that recurs indefinitely with Fibonacci-based increasing
 * delays.
 *
 * **Details**
 *
 * This schedule starts with an initial delay of `one` and increases subsequent
 * delays by summing the two previous delays, following the Fibonacci sequence.
 * The delay pattern follows: `one, one, one + one, (one + one) + one, ...`,
 * resulting in `1s, 1s, 2s, 3s, 5s, 8s, 13s, ...` if `one = 1s`.
 *
 * This is useful for progressive backoff strategies, where delays grow
 * naturally over time without increasing as aggressively as an exponential
 * schedule.
 *
 * @since 2.0.0
 * @category Constructors
 */
export const fibonacci = internal.fibonacci;
/**
 * Creates a schedule that recurs at a fixed interval.
 *
 * **Details**
 *
 * This schedule executes at regular, evenly spaced intervals, returning the
 * number of times it has run so far. If the action being executed takes longer
 * than the interval, the next execution will happen immediately to prevent
 * "pile-ups," ensuring that the schedule remains consistent without overlapping
 * executions.
 *
 * ```text
 * |-----interval-----|-----interval-----|-----interval-----|
 * |---------action--------||action|-----|action|-----------|
 * ```
 *
 * @see {@link spaced} If you need to run from the end of the last execution.
 *
 * @since 2.0.0
 * @category Constructors
 */
export const fixed = internal.fixed;
/**
 * Creates a schedule that recurs indefinitely, producing a count of
 * repetitions.
 *
 * **Details**
 *
 * This schedule runs indefinitely, returning an increasing count of executions
 * (`0, 1, 2, 3, ...`). Each step increments the count by one, allowing tracking
 * of how many times it has executed.
 *
 * @since 2.0.0
 * @category Constructors
 */
export const forever = internal.forever;
/**
 * Creates a schedule that recurs once after a specified duration.
 *
 * **Details**
 *
 * This schedule executes a single time after waiting for the given duration.
 * Once it has executed, it does not repeat.
 *
 * @see {@link fromDelays} If you need to create a schedule with multiple delays.
 *
 * @since 2.0.0
 * @category Constructors
 */
export const fromDelay = internal.fromDelay;
/**
 * Creates a schedule that recurs once for each specified duration, applying the
 * given delays sequentially.
 *
 * **Details**
 *
 * This schedule executes multiple times, each time waiting for the
 * corresponding duration from the provided list of delays. The first execution
 * waits for `delay`, the next for the second value in `delays`, and so on. Once
 * all delays have been used, the schedule stops executing.
 *
 * This is useful for defining a custom delay sequence that does not follow a
 * fixed pattern like exponential or Fibonacci backoff.
 *
 * @since 2.0.0
 * @category Constructors
 */
export const fromDelays = internal.fromDelays;
/**
 * Creates a schedule that always recurs, transforming input values using the
 * specified function.
 *
 * **Details**
 *
 * This schedule continuously executes and applies the given function `f` to
 * each input value, producing a transformed output. The schedule itself does
 * not control delays or stopping conditions; it simply transforms the input
 * values as they are processed.
 *
 * This is useful when defining schedules that map inputs to outputs, allowing
 * dynamic transformations of incoming data.
 *
 * @since 2.0.0
 * @category Constructors
 */
export const fromFunction = internal.fromFunction;
/**
 * Creates a schedule that always recurs, passing inputs directly as outputs.
 *
 * **Details**
 *
 * This schedule runs indefinitely, returning each input value as its output
 * without modification. It effectively acts as a pass-through that simply
 * echoes its input values at each step.
 *
 * @since 2.0.0
 * @category Constructors
 */
export const identity = internal.identity;
/**
 * Transforms a schedule to pass through its inputs as outputs.
 *
 * **Details**
 *
 * This function modifies an existing schedule so that it returns its input
 * values instead of its original output values. The schedule's timing remains
 * unchanged, but its outputs are replaced with whatever inputs it receives.
 *
 * @since 2.0.0
 */
export const passthrough = internal.passthrough;
/**
 * Combines two schedules, continuing only if both schedules want to continue,
 * using the longer delay.
 *
 * **Details**
 *
 * This function takes two schedules and creates a new schedule that only
 * continues execution if both schedules allow it. The interval between
 * recurrences is determined by the longer delay between the two schedules.
 *
 * The output of the resulting schedule is a tuple containing the outputs of
 * both schedules. The input type is the intersection of both schedules' input
 * types.
 *
 * This is useful when coordinating multiple scheduling conditions where
 * execution should proceed only when both schedules permit it.
 *
 * @see {@link intersectWith} If you need to use a custom merge function.
 *
 * @since 2.0.0
 * @category Composition
 */
export const intersect = internal.intersect;
/**
 * Combines two schedules, continuing only if both want to continue, merging
 * intervals using a custom function.
 *
 * **Details**
 *
 * This function takes two schedules and creates a new schedule that only
 * continues execution if both schedules allow it. Instead of automatically
 * using the longer delay (like {@link intersect}), this function applies a
 * user-provided merge function `f` to determine the next interval between
 * executions.
 *
 * The output of the resulting schedule is a tuple containing the outputs of
 * both schedules, and the input type is the intersection of both schedules'
 * input types.
 *
 * @since 2.0.0
 * @category Composition
 */
export const intersectWith = internal.intersectWith;
/**
 * Returns a new schedule that randomly adjusts the interval size within a
 * range.
 *
 * **Details**
 *
 * This function modifies a schedule so that its delay between executions is
 * randomly varied within a range. By default, the delay is adjusted between
 * `80%` (`0.8 * interval`) and `120%` (`1.2 * interval`) of the original
 * interval size.
 *
 * This is useful for adding randomness to repeated executions, reducing
 * contention in distributed systems, and avoiding synchronized execution
 * patterns that can cause bottlenecks.
 *
 * @see {@link jitteredWith} If you need to specify custom min/max values.
 *
 * @since 2.0.0
 * @category Timing & Delay
 */
export const jittered = internal.jittered;
/**
 * Returns a new schedule that randomly adjusts the interval size within a
 * user-defined range.
 *
 * **Details**
 *
 * This function modifies a schedule so that its delay between executions is
 * randomly varied within a specified range. Instead of using the default `0.8 -
 * 1.2` range like {@link jittered}, this function allows customizing the `min`
 * and `max` multipliers.
 *
 * The delay for each step will be adjusted within `min * original_interval` and
 * `max * original_interval`. If `min` and `max` are not provided, the defaults
 * are `0.8` and `1.2`, respectively.
 *
 * This is useful for introducing randomness into scheduling behavior while
 * having precise control over the jitter range.
 *
 * @since 2.0.0
 * @category Timing & Delay
 */
export const jitteredWith = internal.jitteredWith;
/**
 * Creates a schedule that recurs indefinitely, increasing the delay linearly.
 *
 * **Details**
 *
 * This schedule starts with an initial delay of `base` and increases the delay
 * on each recurrence in a linear fashion, following the formula:
 *
 * `delay = base * n`
 *
 * where `n` is the number of times the schedule has executed so far. This
 * results in increasing intervals between executions.
 *
 * This is useful for implementing linear backoff strategies where the wait time
 * between retries increases at a steady rate.
 *
 * @since 2.0.0
 * @category Constructors
 */
export const linear = internal.linear;
/**
 * Returns a new schedule that transforms its output using the specified
 * function.
 *
 * **Details**
 *
 * This function modifies an existing schedule so that its outputs are
 * transformed by the provided function `f`. The timing and recurrence behavior
 * of the schedule remain unchanged, but the values it produces are mapped to
 * new values.
 *
 * This is useful when composing schedules where you need to adjust the output
 * format or apply additional processing.
 *
 * @see {@link mapEffect} If you need to use an effectful transformation
 * function.
 *
 * @since 2.0.0
 * @category Mapping
 */
export const map = internal.map;
/**
 * Returns a new schedule that applies an effectful transformation to its
 * output.
 *
 * **Details**
 *
 * This function modifies an existing schedule by applying an effectful function
 * `f` to its output values. The timing and recurrence behavior of the schedule
 * remain unchanged, but each output is mapped to a new value within an
 * `Effect`.
 *
 * This is useful when you need to perform side effects or asynchronous
 * transformations before passing the output forward.
 *
 * @see {@link map} If you need to use a pure transformation function.
 *
 * @since 2.0.0
 * @category Mapping
 */
export const mapEffect = internal.mapEffect;
/**
 * Returns a new schedule that modifies the delay between executions using a
 * custom function.
 *
 * **Details**
 *
 * This function transforms an existing schedule by applying `f` to modify the
 * delay before each execution. The function receives both the schedule's output
 * (`out`) and the originally computed delay (`duration`), and returns a new
 * adjusted delay.
 *
 * @see {@link modifyDelayEffect} If you need to use an effectful function.
 *
 * @since 2.0.0
 * @category Timing & Delay
 */
export const modifyDelay = internal.modifyDelay;
/**
 * Returns a new schedule that modifies the delay before execution using an
 * effectful function.
 *
 * **Details**
 *
 * This function takes an existing schedule and applies an effectful function
 * `f` to dynamically adjust the delay before each execution. The function
 * receives both the schedule's output (`out`) and the originally computed delay
 * (`duration`), returning a new adjusted delay wrapped in an `Effect`.
 *
 * @see {@link modifyDelay} If you need to use a pure function.
 *
 * @since 2.0.0
 * @category Timing & Delay
 */
export const modifyDelayEffect = internal.modifyDelayEffect;
/**
 * Returns a new schedule that executes an effect every time the schedule makes
 * a decision.
 *
 * **Details**
 *
 * This function enhances an existing schedule by running an effectful function
 * `f` whenever a scheduling decision is made. The function receives the current
 * schedule output (`out`) and the decision (`ScheduleDecision`), allowing
 * additional logic to be executed, such as logging, monitoring, or side
 * effects.
 *
 * @since 2.0.0
 */
export const onDecision = internal.onDecision;
/**
 * A schedule that executes only once and then stops.
 *
 * **Details**
 *
 * This schedule triggers a single execution and then terminates. It does not
 * repeat or apply any additional logic.
 *
 * @since 2.0.0
 * @category Constructors
 */
export const once = internal.once;
/**
 * Returns a new schedule with a provided context, eliminating the need for
 * external dependencies.
 *
 * **Details**
 *
 * This function supplies a required `context` to a schedule, allowing it to run
 * without requiring external dependencies. After calling this function, the
 * schedule can be used freely without needing to pass a context at execution
 * time.
 *
 * This is useful when working with schedules that rely on contextual
 * information, such as logging services, database connections, or configuration
 * settings.
 *
 * @since 2.0.0
 * @category Context
 */
export const provideContext = internal.provideContext;
/**
 * Returns a new schedule with a single required service provided, eliminating
 * the need for external dependencies.
 *
 * **Details**
 *
 * This function supplies a single service dependency to a schedule, allowing it
 * to run without requiring that service externally. If a schedule depends on
 * multiple services, consider using `provideContext` instead.
 *
 * This is useful when working with schedules that require a specific service,
 * such as logging, metrics, or configuration retrieval.
 *
 * @since 2.0.0
 * @category Context
 */
export const provideService = internal.provideService;
/**
 * A schedule that recurs until the given predicate evaluates to true.
 *
 * **Details**
 *
 * This schedule will continue executing as long as the provided predicate `f`
 * returns `false` for the input value. Once `f` evaluates to `true`, the
 * schedule stops recurring.
 *
 * This is useful for defining schedules that should stop when a certain
 * condition is met, such as detecting a success state, reaching a threshold, or
 * avoiding unnecessary retries.
 *
 * @see {@link recurUntilEffect} If you need to use an effectful predicate.
 *
 * @since 2.0.0
 * @category Recurrence Conditions
 */
export const recurUntil = internal.recurUntil;
/**
 * A schedule that recurs until the given effectful predicate evaluates to true.
 *
 * **Details**
 *
 * This schedule continues executing as long as the provided effectful predicate
 * `f` returns `false`. Once `f` evaluates to `true`, the schedule stops
 * recurring. Unlike {@link recurUntil}, this function allows the stopping
 * condition to be computed asynchronously or based on external dependencies.
 *
 * This is useful when the stopping condition depends on an effectful
 * computation, such as checking a database, making an API call, or retrieving
 * system state dynamically.
 *
 * @see {@link recurUntil} If you need to use a pure predicate.
 *
 * @since 2.0.0
 * @category Recurrence Conditions
 */
export const recurUntilEffect = internal.recurUntilEffect;
/**
 * A schedule that recurs until the input value matches a partial function, then
 * maps the value.
 *
 * **Details**
 *
 * This schedule continues executing until the provided partial function `pf`
 * returns `Some(value)`. At that point, it stops and maps the resulting value
 * to an `Option<B>`. If `pf` returns `None`, the schedule continues.
 *
 * This is useful when defining schedules that should stop once a certain
 * condition is met and transform the final value before completion.
 *
 * @since 2.0.0
 * @category Recurrence Conditions
 */
export const recurUntilOption = internal.recurUntilOption;
/**
 * A schedule that recurs until the specified duration has elapsed.
 *
 * **Details**
 *
 * This schedule continues executing for the given `duration`, after which it
 * stops. The schedule outputs the elapsed time on each recurrence.
 *
 * This is useful for limiting the duration of retries, enforcing time-based
 * constraints, or ensuring that an operation does not run indefinitely.
 *
 * @since 2.0.0
 * @category Recurrence Conditions
 */
export const recurUpTo = internal.recurUpTo;
/**
 * A schedule that recurs as long as the given predicate evaluates to true.
 *
 * **Details*
 *
 * This schedule continues executing as long as the provided predicate `f`
 * returns `true` for the input value. Once `f` evaluates to `false`, the
 * schedule stops recurring.
 *
 * @see {@link recurWhileEffect} If you need to use an effectful predicate.
 *
 * @since 2.0.0
 * @category Recurrence Conditions
 */
export const recurWhile = internal.recurWhile;
/**
 * A schedule that recurs as long as the given effectful predicate evaluates to
 * true.
 *
 * **Details**
 *
 * This schedule continues executing as long as the provided effectful predicate
 * `f` returns `true`. Once `f` evaluates to `false`, the schedule stops
 * recurring. Unlike {@link recurWhile}, this function allows the condition to
 * be computed dynamically using an effectful computation.
 *
 * @see {@link recurWhile} If you need to use a pure predicate.
 *
 * @since 2.0.0
 * @category Recurrence Conditions
 */
export const recurWhileEffect = internal.recurWhileEffect;
/**
 * A schedule that recurs a fixed number of times before terminating.
 *
 * **Details**
 *
 * This schedule will continue executing until it has been stepped `n` times,
 * after which it will stop. The output of the schedule is the current count of
 * recurrences.
 *
 * @category Constructors
 * @since 2.0.0
 */
export const recurs = internal.recurs;
/**
 * Returns a new schedule that folds over the outputs of this one.
 *
 * **Details**
 *
 * This schedule transforms the output by accumulating values over time using a
 * reducer function `f`. It starts with an initial value `zero` and updates it
 * each time the schedule produces an output.
 *
 * This is useful for tracking statistics, aggregating results, or summarizing
 * data across multiple executions.
 *
 * @see {@link reduceEffect} If you need to use an effectful reducer function.
 *
 * @since 2.0.0
 * @category Reducing
 */
export const reduce = internal.reduce;
/**
 * Returns a new schedule that effectfully folds over the outputs of this one.
 *
 * **Details**
 *
 * This schedule accumulates outputs over time using an effectful reducer
 * function `f`. It starts with an initial value `zero` and updates it
 * asynchronously or based on external dependencies.
 *
 * This is useful for asynchronous state tracking, logging, external metrics
 * aggregation, or any scenario where accumulation needs to involve an effectful
 * computation.
 *
 * @see {@link reduce} If you need to use a pure reducer function.
 *
 * @since 2.0.0
 * @category Reducing
 */
export const reduceEffect = internal.reduceEffect;
// TODO(4.0): remove?
/**
 * Alias of {@link forever}.
 *
 * @since 2.0.0
 * @category Constructors
 */
export const repeatForever = internal.forever;
/**
 * Returns a new schedule that outputs the number of repetitions of this one.
 *
 * **Details**
 *
 * This schedule tracks how many times the given schedule has executed and
 * outputs the count instead of the original values. The first execution starts
 * at `0`, and the count increases with each recurrence.
 *
 * @since 2.0.0
 * @category Monitoring
 */
export const repetitions = internal.repetitions;
/**
 * Returns a new schedule that automatically resets to its initial state after a
 * period of inactivity defined by `duration`.
 *
 * **Details**
 *
 * This function modifies a schedule so that if no inputs are received for the
 * specified `duration`, the schedule resets as if it were new.
 *
 * @see {@link resetWhen} If you need to reset based on output values.
 *
 * @since 2.0.0
 * @category State Management
 */
export const resetAfter = internal.resetAfter;
/**
 * Resets the schedule when the specified predicate on the schedule output
 * evaluates to `true`.
 *
 * **Details**
 *
 * This function modifies a schedule so that it resets to its initial state
 * whenever the provided predicate `f` returns `true` for an output value.
 *
 * @see {@link resetAfter} If you need to reset based on inactivity.
 *
 * @since 2.0.0
 * @category State Management
 */
export const resetWhen = internal.resetWhen;
/**
 * Runs a schedule using the provided inputs and collects all outputs.
 *
 * **Details**
 *
 * This function executes a given schedule with a sequence of input values and
 * accumulates all outputs into a `Chunk`. The schedule starts execution at the
 * specified `now` timestamp and proceeds according to its defined behavior.
 *
 * This is useful for batch processing, simulating execution, or testing
 * schedules with predefined input sequences.
 *
 * @since 2.0.0
 * @category Execution
 */
export const run = internal.run;
/**
 * Returns a schedule that recurs continuously, with each repetition
 * spaced by the specified `duration` from the last run.
 *
 * **Details**
 *
 * This schedule ensures that executions occur at a fixed interval,
 * maintaining a consistent delay between repetitions. The delay starts
 * from the end of the last execution, not from the schedule start time.
 *
 * @see {@link fixed} If you need to run at a fixed interval from the start.
 *
 * @since 2.0.0
 * @category Constructors
 */
export const spaced = internal.spaced;
/**
 * A schedule that does not recur and stops immediately.
 *
 * @since 2.0.0
 * @category Constructors
 */
export const stop = internal.stop;
/**
 * Returns a schedule that recurs indefinitely, always producing the specified
 * constant value.
 *
 * @since 2.0.0
 * @category Constructors
 */
export const succeed = internal.succeed;
/**
 * Returns a schedule that recurs indefinitely, evaluating the given function to
 * produce a constant value.
 *
 * @category Constructors
 * @since 2.0.0
 */
export const sync = internal.sync;
/**
 * Returns a new schedule that runs the given effectful function for each input
 * before continuing execution.
 *
 * **Details**
 *
 * This function allows side effects to be performed on each input processed by
 * the schedule. It does not modify the schedule’s behavior but ensures that the
 * provided function `f` runs before each step.
 *
 * @since 2.0.0
 * @category Tapping
 */
export const tapInput = internal.tapInput;
/**
 * Returns a new schedule that runs the given effectful function for each output
 * before continuing execution.
 *
 * **Details**
 *
 * This function allows side effects to be performed on each output produced by
 * the schedule. It does not modify the schedule’s behavior but ensures that the
 * provided function `f` runs after each step.
 *
 * @since 2.0.0
 * @category Tapping
 */
export const tapOutput = internal.tapOutput;
/**
 * Creates a schedule that repeatedly applies a function to transform a state
 * value, producing a sequence of values.
 *
 * **Details**
 *
 * This function starts with an `initial` value and applies `f` recursively to
 * generate the next state at each step. The schedule continues indefinitely,
 * producing a stream of values by unfolding the state over time.
 *
 * @since 2.0.0
 * @category Constructors
 */
export const unfold = internal.unfold;
/**
 * Combines two schedules, continuing execution as long as at least one of them
 * allows it, using the shorter delay.
 *
 * **Details**
 *
 * This function combines two schedules into a single schedule that executes in
 * parallel. If either schedule allows continuation, the merged schedule
 * continues. When both schedules produce delays, the schedule selects the
 * shorter delay to determine the next step.
 *
 * The output of the new schedule is a tuple containing the outputs of both
 * schedules. The input type is the intersection of both schedules' input types.
 *
 * This is useful for scenarios where multiple scheduling conditions should be
 * considered, ensuring execution proceeds if at least one schedule permits it.
 *
 * @see {@link unionWith} If you need to use a custom merge function.
 *
 * @since 2.0.0
 * @category Composition
 */
export const union = internal.union;
/**
 * Combines two schedules, continuing execution as long as at least one of them
 * wants to continue, merging their intervals using a custom merge function.
 *
 * **Details**
 *
 * This function allows you to combine two schedules while defining how their
 * intervals should be merged. Unlike {@link union}, which simply selects the
 * shorter delay, this function lets you specify a custom merging strategy for
 * the schedules’ intervals.
 *
 * The merged schedule continues execution as long as at least one of the input
 * schedules allows it. The next interval is determined by applying the provided
 * merge function to the intervals of both schedules.
 *
 * The output of the resulting schedule is a tuple containing the outputs of
 * both schedules. The input type is the intersection of both schedules' input
 * types.
 *
 * @see {@link union} If you need to use the shorter delay.
 *
 * @since 2.0.0
 * @category Composition
 */
export const unionWith = internal.unionWith;
/**
 * Returns a new schedule that stops execution when the given predicate on the
 * input evaluates to `true`.
 *
 * **Details**
 *
 * This function modifies an existing schedule so that it continues executing
 * only while the provided predicate returns `false` for incoming inputs. Once
 * an input satisfies the condition, the schedule terminates immediately.
 *
 * @see {@link untilInputEffect} If you need to use an effectful predicate.
 *
 * @since 2.0.0
 * @category Recurrence Conditions
 */
export const untilInput = internal.untilInput;
/**
 * Returns a new schedule that stops execution when the given effectful
 * predicate on the input evaluates to `true`.
 *
 * **Details**
 *
 * This function modifies an existing schedule so that it continues executing
 * only while the provided effectful predicate returns `false` for incoming
 * inputs. The predicate is an `Effect`, meaning it can involve asynchronous
 * computations or dependency-based logic.
 *
 * @see {@link untilInput} If you need to use a pure predicate.
 *
 * @since 2.0.0
 * @category Recurrence Conditions
 */
export const untilInputEffect = internal.untilInputEffect;
/**
 * Returns a new schedule that stops execution when the given predicate on the
 * output evaluates to `true`.
 *
 * **Details**
 *
 * This function modifies an existing schedule so that it only continues
 * executing while the given predicate returns false for its output values. Once
 * the predicate evaluates to `true`, execution stops.
 *
 * The output of the resulting schedule remains the same, but its duration is
 * now constrained by a stopping condition based on its own output.
 *
 * @see {@link untilOutputEffect} If you need to use an effectful predicate.
 *
 * @since 2.0.0
 * @category Recurrence Conditions
 */
export const untilOutput = internal.untilOutput;
/**
 * Returns a new schedule that stops execution when the given effectful
 * predicate on the output evaluates to `true`.
 *
 * **Details**
 *
 * This function modifies an existing schedule so that it only continues
 * executing while the provided effectful predicate returns `false` for its
 * output values. Once the predicate returns `true`, execution stops.
 *
 * @see {@link untilOutput} If you need to use a pure predicate.
 *
 * @since 2.0.0
 * @category Recurrence Conditions
 */
export const untilOutputEffect = internal.untilOutputEffect;
/**
 * Returns a new schedule that limits execution to a fixed duration.
 *
 * **Details**
 *
 * This function modifies an existing schedule to stop execution after a
 * specified duration has passed. The schedule continues as normal until the
 * duration is reached, at which point it stops automatically.
 *
 * @since 2.0.0
 * @category Recurrence Conditions
 */
export const upTo = internal.upTo;
/**
 * Returns a new schedule that continues execution as long as the given
 * predicate on the input is true.
 *
 * **Details**
 *
 * This function modifies an existing schedule so that it only continues
 * execution while a specified predicate holds true for its input. If the
 * predicate evaluates to `false` at any step, the schedule stops.
 *
 * @see {@link whileInputEffect} If you need to use an effectful predicate.
 *
 * @since 2.0.0
 * @category Recurrence Conditions
 */
export const whileInput = internal.whileInput;
/**
 * Returns a new schedule that continues execution for as long as the given
 * effectful predicate on the input evaluates to `true`.
 *
 * **Details**
 *
 * This function modifies an existing schedule so that it only continues
 * execution while an effectful predicate holds true for its input. If the
 * predicate evaluates to `false` at any step, the schedule stops.
 *
 * @see {@link whileInput} If you need to use a pure predicate.
 *
 * @since 2.0.0
 * @category Recurrence Conditions
 */
export const whileInputEffect = internal.whileInputEffect;
/**
 * Returns a new schedule that continues execution for as long as the given
 * predicate on the output evaluates to `true`.
 *
 * **Details**
 *
 * This function modifies an existing schedule so that it only continues
 * execution while a provided condition holds true for its output. If the
 * predicate returns `false`, the schedule stops.
 *
 * @see {@link whileOutputEffect} If you need to use an effectful predicate.
 *
 * @since 2.0.0
 * @category Recurrence Conditions
 */
export const whileOutput = internal.whileOutput;
/**
 * Returns a new schedule that continues execution for as long as the given
 * effectful predicate on the output evaluates to `true`.
 *
 * **Details**
 *
 * This function modifies an existing schedule so that it only continues
 * execution while an effectful condition holds true for its output. If the
 * effectful predicate returns `false`, the schedule stops.
 *
 * @see {@link whileOutput} If you need to use a pure predicate.
 *
 * @since 2.0.0
 * @category Recurrence Conditions
 */
export const whileOutputEffect = internal.whileOutputEffect;
/**
 * Creates a schedule that divides time into fixed `interval`-long windows,
 * triggering execution at the start of each new window.
 *
 * **Details**
 *
 * This function produces a schedule that waits until the next time window
 * boundary before executing. Each window spans a fixed duration specified by
 * `interval`. If an action completes midway through a window, the schedule
 * waits until the next full window starts before proceeding.
 *
 * For example, `windowed(Duration.seconds(10))` would produce a schedule as
 * follows:
 *
 * ```text
 *      10s        10s        10s       10s
 * |----------|----------|----------|----------|
 * |action------|sleep---|act|-sleep|action----|
 * ```
 *
 * @since 2.0.0
 * @category Constructors
 */
export const windowed = internal.windowed;
/**
 * The same as {@link intersect} but ignores the right output.
 *
 * @since 2.0.0
 * @category Composition
 */
export const zipLeft = internal.zipLeft;
/**
 * The same as {@link intersect} but ignores the left output.
 *
 * @since 2.0.0
 * @category Composition
 */
export const zipRight = internal.zipRight;
/**
 * Equivalent to {@link intersect} followed by {@link map}.
 *
 * @since 2.0.0
 * @category Composition
 */
export const zipWith = internal.zipWith;
/**
 * @since 3.15.0
 * @category models
 */
export const CurrentIterationMetadata = internal.CurrentIterationMetadata;
//# sourceMappingURL=Schedule.js.map