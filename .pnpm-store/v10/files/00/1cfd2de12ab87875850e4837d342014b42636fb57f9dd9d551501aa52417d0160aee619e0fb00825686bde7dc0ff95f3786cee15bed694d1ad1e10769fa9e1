import { type ExecaChildProcess } from 'execa';
import type { FSJetpack } from 'fs-jetpack/types';
import { type MockInstance } from 'vitest';
/**
 * Base test context.
 */
export type BaseContext = {
    tmpDir: string;
    fs: FSJetpack;
    mocked: {
        cwd: string;
    };
    /**
     * Set up the temporary directory based on the contents of some fixture.
     */
    fixture: (name: string) => void;
    /**
     * Spawn the Prisma cli using the temporary directory as the CWD.
     *
     * @remarks
     *
     * For this to work the source must be built
     */
    cli: (...input: string[]) => ExecaChildProcess<string>;
    printDir(dir: string, extensions: string[]): void;
    /**
     * JavaScript-friendly implementation of the `tree` command. It skips the `node_modules` directory.
     * @param itemPath The path to start the tree from, defaults to the root of the temporary directory
     * @param indent How much to indent each level of the tree, defaults to ''
     * @returns String representation of the directory tree
     */
    tree: (itemPath?: string, indent?: string) => void;
};
/**
 * Create test context to use in tests. Provides the following:
 *
 * - A temporary directory
 * - an fs-jetpack instance bound to the temporary directory
 * - Mocked process.cwd via Node process.chdir
 * - Fixture loader for bootstrapping the temporary directory with content
 */
export declare const vitestContext: {
    new: (ctx?: BaseContext) => {
        add<NewContext>(contextContributor: ContextContributor<BaseContext, NewContext>): {
            add<NewContext_1>(contextContributor: ContextContributor<BaseContext & NewContext, NewContext_1>): {
                add<NewContext_2>(contextContributor: ContextContributor<BaseContext & NewContext & NewContext_1, NewContext_2>): {
                    add<NewContext_3>(contextContributor: ContextContributor<BaseContext & NewContext & NewContext_1 & NewContext_2, NewContext_3>): {
                        add<NewContext_4>(contextContributor: ContextContributor<BaseContext & NewContext & NewContext_1 & NewContext_2 & NewContext_3, NewContext_4>): {
                            add<NewContext_5>(contextContributor: ContextContributor<BaseContext & NewContext & NewContext_1 & NewContext_2 & NewContext_3 & NewContext_4, NewContext_5>): {
                                add<NewContext_6>(contextContributor: ContextContributor<BaseContext & NewContext & NewContext_1 & NewContext_2 & NewContext_3 & NewContext_4 & NewContext_5, NewContext_6>): {
                                    add<NewContext_7>(contextContributor: ContextContributor<BaseContext & NewContext & NewContext_1 & NewContext_2 & NewContext_3 & NewContext_4 & NewContext_5 & NewContext_6, NewContext_7>): {
                                        add<NewContext_8>(contextContributor: ContextContributor<BaseContext & NewContext & NewContext_1 & NewContext_2 & NewContext_3 & NewContext_4 & NewContext_5 & NewContext_6 & NewContext_7, NewContext_8>): {
                                            add<NewContext_9>(contextContributor: ContextContributor<BaseContext & NewContext & NewContext_1 & NewContext_2 & NewContext_3 & NewContext_4 & NewContext_5 & NewContext_6 & NewContext_7 & NewContext_8, NewContext_9>): {
                                                add<NewContext_10>(contextContributor: ContextContributor<BaseContext & NewContext & NewContext_1 & NewContext_2 & NewContext_3 & NewContext_4 & NewContext_5 & NewContext_6 & NewContext_7 & NewContext_8 & NewContext_9, NewContext_10>): any;
                                                assemble(): BaseContext & NewContext & NewContext_1 & NewContext_2 & NewContext_3 & NewContext_4 & NewContext_5 & NewContext_6 & NewContext_7 & NewContext_8 & NewContext_9;
                                            };
                                            assemble(): BaseContext & NewContext & NewContext_1 & NewContext_2 & NewContext_3 & NewContext_4 & NewContext_5 & NewContext_6 & NewContext_7 & NewContext_8;
                                        };
                                        assemble(): BaseContext & NewContext & NewContext_1 & NewContext_2 & NewContext_3 & NewContext_4 & NewContext_5 & NewContext_6 & NewContext_7;
                                    };
                                    assemble(): BaseContext & NewContext & NewContext_1 & NewContext_2 & NewContext_3 & NewContext_4 & NewContext_5 & NewContext_6;
                                };
                                assemble(): BaseContext & NewContext & NewContext_1 & NewContext_2 & NewContext_3 & NewContext_4 & NewContext_5;
                            };
                            assemble(): BaseContext & NewContext & NewContext_1 & NewContext_2 & NewContext_3 & NewContext_4;
                        };
                        assemble(): BaseContext & NewContext & NewContext_1 & NewContext_2 & NewContext_3;
                    };
                    assemble(): BaseContext & NewContext & NewContext_1 & NewContext_2;
                };
                assemble(): BaseContext & NewContext & NewContext_1;
            };
            assemble(): BaseContext & NewContext;
        };
        assemble(): BaseContext;
    };
};
/**
 * A function that provides additional test context.
 */
type ContextContributor<Context, NewContext> = (ctx: Context) => Context & NewContext;
/**
 * Test context contributor. Mocks console.error with a Vitest spy before each test.
 */
type ConsoleContext = {
    mocked: {
        'console.error': MockInstance<typeof console.error>;
        'console.log': MockInstance<typeof console.log>;
        'console.info': MockInstance<typeof console.info>;
        'console.warn': MockInstance<typeof console.warn>;
    };
};
export declare const vitestConsoleContext: <Ctx extends BaseContext>() => (c: Ctx) => Ctx & ConsoleContext;
/**
 * Test context contributor. Mocks process.std(out|err).write with a Vitest spy before each test.
 */
type ProcessContext = {
    mocked: {
        'process.stderr.write': MockInstance<typeof process.stderr.write>;
        'process.stdout.write': MockInstance<typeof process.stdout.write>;
    };
    normalizedCapturedStdout: () => string;
    normalizedCapturedStderr: () => string;
    clearCapturedStdout: () => void;
    clearCapturedStderr: () => void;
};
type NormalizationRule = [RegExp | string, string];
export type ProcessContextSettings = {
    normalizationRules: NormalizationRule[];
};
export declare const vitestStdoutContext: <Ctx extends BaseContext>({ normalizationRules }?: ProcessContextSettings) => (c: Ctx) => Ctx & ProcessContext;
/**
 * Test context contributor. Mocks process.exit with a spy and records the exit code.
 */
type ProcessExitContext = {
    mocked: {
        'process.exit': MockInstance<typeof process.exit>;
    };
    recordedExitCode: () => number;
};
export declare const vitestProcessExitContext: <C extends BaseContext>() => (c: C) => C & ProcessExitContext;
export declare const processExitContext: <C extends BaseContext>() => (c: C) => C & ProcessExitContext;
export {};
