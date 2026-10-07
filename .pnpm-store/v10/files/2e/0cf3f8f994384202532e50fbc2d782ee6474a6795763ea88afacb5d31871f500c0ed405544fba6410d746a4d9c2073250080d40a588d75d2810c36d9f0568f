"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduleCommands = exports.ScheduledCommand = void 0;
class ScheduledCommand {
    constructor(s, cmd) {
        this.s = s;
        this.cmd = cmd;
    }
    async check(m) {
        let error = null;
        let checkPassed = false;
        const status = await this.s.scheduleSequence([
            {
                label: `check@${this.cmd.toString()}`,
                builder: async () => {
                    try {
                        checkPassed = await Promise.resolve(this.cmd.check(m));
                    }
                    catch (err) {
                        error = err;
                        throw err;
                    }
                },
            },
        ]).task;
        if (status.faulty) {
            throw error;
        }
        return checkPassed;
    }
    async run(m, r) {
        let error = null;
        const status = await this.s.scheduleSequence([
            {
                label: `run@${this.cmd.toString()}`,
                builder: async () => {
                    try {
                        await this.cmd.run(m, r);
                    }
                    catch (err) {
                        error = err;
                        throw err;
                    }
                },
            },
        ]).task;
        if (status.faulty) {
            throw error;
        }
    }
}
exports.ScheduledCommand = ScheduledCommand;
const scheduleCommands = function* (s, cmds) {
    for (const cmd of cmds) {
        yield new ScheduledCommand(s, cmd);
    }
};
exports.scheduleCommands = scheduleCommands;
