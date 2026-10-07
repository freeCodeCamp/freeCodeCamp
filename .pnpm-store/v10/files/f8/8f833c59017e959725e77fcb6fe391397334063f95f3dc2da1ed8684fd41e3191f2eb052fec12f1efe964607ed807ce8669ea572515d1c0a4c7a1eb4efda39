import { scheduleCommands } from './commands/ScheduledCommand.js';
const genericModelRun = (s, cmds, initialValue, runCmd, then) => {
    return s.then((o) => {
        const { model, real } = o;
        let state = initialValue;
        for (const c of cmds) {
            state = then(state, () => {
                return runCmd(c, model, real);
            });
        }
        return state;
    });
};
const internalModelRun = (s, cmds) => {
    const then = (_p, c) => c();
    const setupProducer = {
        then: (fun) => {
            fun(s());
            return undefined;
        },
    };
    const runSync = (cmd, m, r) => {
        if (cmd.check(m))
            cmd.run(m, r);
        return undefined;
    };
    return genericModelRun(setupProducer, cmds, undefined, runSync, then);
};
const isAsyncSetup = (s) => {
    return typeof s.then === 'function';
};
const internalAsyncModelRun = async (s, cmds, defaultPromise = Promise.resolve()) => {
    const then = (p, c) => p.then(c);
    const setupProducer = {
        then: (fun) => {
            const out = s();
            if (isAsyncSetup(out))
                return out.then(fun);
            else
                return fun(out);
        },
    };
    const runAsync = async (cmd, m, r) => {
        if (await cmd.check(m))
            await cmd.run(m, r);
    };
    return await genericModelRun(setupProducer, cmds, defaultPromise, runAsync, then);
};
export function modelRun(s, cmds) {
    internalModelRun(s, cmds);
}
export async function asyncModelRun(s, cmds) {
    await internalAsyncModelRun(s, cmds);
}
export async function scheduledModelRun(scheduler, s, cmds) {
    const scheduledCommands = scheduleCommands(scheduler, cmds);
    const out = internalAsyncModelRun(s, scheduledCommands, scheduler.schedule(Promise.resolve(), 'startModel'));
    await scheduler.waitFor(out);
    await scheduler.waitAll();
}
