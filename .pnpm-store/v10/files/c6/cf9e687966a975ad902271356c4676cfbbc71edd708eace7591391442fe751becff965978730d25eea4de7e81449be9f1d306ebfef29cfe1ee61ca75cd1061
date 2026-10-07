import type { AsyncCommand } from './command/AsyncCommand.js';
import type { Command } from './command/Command.js';
import type { Scheduler } from '../../arbitrary/scheduler.js';
/**
 * Synchronous definition of model and real
 * @remarks Since 2.2.0
 * @public
 */
export type ModelRunSetup<Model, Real> = () => {
    model: Model;
    real: Real;
};
/**
 * Asynchronous definition of model and real
 * @remarks Since 2.2.0
 * @public
 */
export type ModelRunAsyncSetup<Model, Real> = () => Promise<{
    model: Model;
    real: Real;
}>;
/**
 * Run synchronous commands over a `Model` and the `Real` system
 *
 * Throw in case of inconsistency
 *
 * @param s - Initial state provider
 * @param cmds - Synchronous commands to be executed
 *
 * @remarks Since 1.5.0
 * @public
 */
export declare function modelRun<Model extends object, Real, InitialModel extends Model>(s: ModelRunSetup<InitialModel, Real>, cmds: Iterable<Command<Model, Real>>): void;
/**
 * Run asynchronous commands over a `Model` and the `Real` system
 *
 * Throw in case of inconsistency
 *
 * @param s - Initial state provider
 * @param cmds - Asynchronous commands to be executed
 *
 * @remarks Since 1.5.0
 * @public
 */
export declare function asyncModelRun<Model extends object, Real, CheckAsync extends boolean, InitialModel extends Model>(s: ModelRunSetup<InitialModel, Real> | ModelRunAsyncSetup<InitialModel, Real>, cmds: Iterable<AsyncCommand<Model, Real, CheckAsync>>): Promise<void>;
/**
 * Run asynchronous and scheduled commands over a `Model` and the `Real` system
 *
 * Throw in case of inconsistency
 *
 * @param scheduler - Scheduler
 * @param s - Initial state provider
 * @param cmds - Asynchronous commands to be executed
 *
 * @remarks Since 1.24.0
 * @public
 */
export declare function scheduledModelRun<Model extends object, Real, CheckAsync extends boolean, InitialModel extends Model>(scheduler: Scheduler, s: ModelRunSetup<InitialModel, Real> | ModelRunAsyncSetup<InitialModel, Real>, cmds: Iterable<AsyncCommand<Model, Real, CheckAsync>>): Promise<void>;
