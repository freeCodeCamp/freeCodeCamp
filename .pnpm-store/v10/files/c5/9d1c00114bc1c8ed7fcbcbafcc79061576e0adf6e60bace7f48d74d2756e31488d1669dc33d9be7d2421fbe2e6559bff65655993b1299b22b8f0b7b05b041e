import * as readline from 'node:readline';
import { AsyncResource } from 'node:async_hooks';
import MuteStream from 'mute-stream';
import { onExit as onSignalExit } from 'signal-exit';
import ScreenManager from "./screen-manager.js";
import { PromisePolyfill } from "./promise-polyfill.js";
import { withHooks, effectScheduler } from "./hook-engine.js";
import { AbortPromptError, CancelPromptError, ExitPromptError } from "./errors.js";
import path from 'node:path';
// Capture the real setImmediate at module load time so it works even when test
// frameworks mock timers with vi.useFakeTimers() or similar.
const nativeSetImmediate = globalThis.setImmediate;
function getCallSites() {
    // oxlint-disable-next-line typescript/unbound-method
    const _prepareStackTrace = Error.prepareStackTrace;
    let result = [];
    try {
        Error.prepareStackTrace = (_, callSites) => {
            const callSitesWithoutCurrent = callSites.slice(1);
            result = callSitesWithoutCurrent;
            return callSitesWithoutCurrent;
        };
        // oxlint-disable-next-line no-unused-expressions
        new Error().stack;
    }
    catch {
        // An error will occur if the Node flag --frozen-intrinsics is used.
        // https://nodejs.org/api/cli.html#--frozen-intrinsics
        return result;
    }
    Error.prepareStackTrace = _prepareStackTrace;
    return result;
}
export function createPrompt(view) {
    const callSites = getCallSites();
    const prompt = (config, context = {}) => {
        // Default `input` to stdin
        const { input = process.stdin, signal } = context;
        const cleanups = new Set();
        // Add mute capabilities to the output
        const output = new MuteStream();
        output.pipe(context.output ?? process.stdout);
        // oxlint-disable-next-line typescript/no-unsafe-type-assertion
        const rl = readline.createInterface({
            terminal: true,
            input,
            output,
        });
        // Mute the output after readline has initialized so readline can perform
        // any terminal setup writes (e.g. Windows Console API initialization)
        // before suppressing output. ScreenManager will unmute/mute around each
        // render call as needed.
        output.mute();
        const screen = new ScreenManager(rl);
        const { promise, resolve, reject } = PromisePolyfill.withResolver();
        const cancel = () => reject(new CancelPromptError());
        if (signal) {
            const abort = () => reject(new AbortPromptError({ cause: signal.reason }));
            if (signal.aborted) {
                abort();
                return Object.assign(promise, { cancel });
            }
            signal.addEventListener('abort', abort);
            cleanups.add(() => signal.removeEventListener('abort', abort));
        }
        cleanups.add(onSignalExit((code, signal) => {
            reject(new ExitPromptError(`User force closed the prompt with ${code} ${signal}`));
        }));
        // SIGINT must be explicitly handled by the prompt so the ExitPromptError can be handled.
        // Otherwise, the prompt will stop and in some scenarios never resolve.
        // Ref issue #1741
        const sigint = () => reject(new ExitPromptError(`User force closed the prompt with SIGINT`));
        rl.on('SIGINT', sigint);
        cleanups.add(() => rl.removeListener('SIGINT', sigint));
        return withHooks(rl, (cycle) => {
            // The close event triggers immediately when the user press ctrl+c. SignalExit on the other hand
            // triggers after the process is done (which happens after timeouts are done triggering.)
            // We triggers the hooks cleanup phase on rl `close` so active timeouts can be cleared.
            const hooksCleanup = AsyncResource.bind(() => effectScheduler.clearAll());
            rl.on('close', hooksCleanup);
            cleanups.add(() => rl.removeListener('close', hooksCleanup));
            const startCycle = () => {
                // Re-renders only happen when the state change; but the readline cursor could
                // change position and that also requires a re-render (and a manual one because
                // we mute the streams). We set the listener after the initial workLoop to avoid
                // a double render if render triggered by a state change sets the cursor to the
                // right position.
                const checkCursorPos = () => screen.checkCursorPos();
                rl.input.on('keypress', checkCursorPos);
                cleanups.add(() => rl.input.removeListener('keypress', checkCursorPos));
                let pendingDone = null;
                cycle(() => {
                    let effectsSettled = false;
                    try {
                        const nextView = view(config, (value) => {
                            if (effectsSettled) {
                                // After the cycle completes (async validation path), the "done"
                                // render already flushed via setStatus → handleChange, so resolve
                                // immediately.
                                resolve(value);
                            }
                            else {
                                pendingDone = { value };
                            }
                        });
                        // Typescript won't allow this, but not all users rely on typescript.
                        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                        if (nextView === undefined) {
                            let callerFilename = callSites[1]?.getFileName();
                            if (callerFilename && !callerFilename.startsWith('file://')) {
                                callerFilename = path.resolve(callerFilename);
                            }
                            throw new Error(`Prompt functions must return a string.\n    at ${callerFilename}`);
                        }
                        const [content, bottomContent] = typeof nextView === 'string' ? [nextView] : nextView;
                        screen.render(content, bottomContent);
                        effectScheduler.run();
                    }
                    catch (error) {
                        reject(error);
                    }
                    effectsSettled = true;
                    if (pendingDone !== null) {
                        const { value } = pendingDone;
                        pendingDone = null;
                        resolve(value);
                    }
                });
            };
            // Proper Readable streams (like process.stdin) may have OS-level buffered
            // data that arrives in the poll phase when readline resumes the stream.
            // Deferring the first render by one setImmediate tick (check phase, after
            // poll) lets that stale data flow through readline harmlessly—no keypress
            // handlers are registered yet and the output is muted, so the stale
            // keystrokes are silently discarded.
            // Old-style streams (like MuteStream) have no such buffering, so the
            // render cycle starts immediately.
            //
            // @see https://github.com/SBoudrias/Inquirer.js/issues/1303
            if ('readableFlowing' in input) {
                nativeSetImmediate(startCycle);
            }
            else {
                startCycle();
            }
            return Object.assign(promise
                .then((answer) => {
                effectScheduler.clearAll();
                return answer;
            }, (error) => {
                effectScheduler.clearAll();
                throw error;
            })
                // Wait for the promise to settle, then cleanup.
                .finally(() => {
                cleanups.forEach((cleanup) => cleanup());
                screen.done({ clearContent: Boolean(context.clearPromptOnDone) });
                output.end();
            })
                // Once cleanup is done, let the expose promise resolve/reject to the internal one.
                .then(() => promise), { cancel });
        });
    };
    return prompt;
}
