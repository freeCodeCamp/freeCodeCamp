"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedulerImplem = void 0;
const TextEscaper_1 = require("../helpers/TextEscaper");
const symbols_1 = require("../../../check/symbols");
const stringify_1 = require("../../../utils/stringify");
const defaultSchedulerAct = (f) => f();
class SchedulerImplem {
    constructor(act, taskSelector) {
        this.act = act;
        this.taskSelector = taskSelector;
        this.lastTaskId = 0;
        this.sourceTaskSelector = taskSelector.clone();
        this.scheduledTasks = [];
        this.triggeredTasks = [];
        this.scheduledWatchers = [];
    }
    static buildLog(reportItem) {
        return `[task\${${reportItem.taskId}}] ${reportItem.label.length !== 0 ? `${reportItem.schedulingType}::${reportItem.label}` : reportItem.schedulingType} ${reportItem.status}${reportItem.outputValue !== undefined ? ` with value ${(0, TextEscaper_1.escapeForTemplateString)(reportItem.outputValue)}` : ''}`;
    }
    log(schedulingType, taskId, label, metadata, status, data) {
        this.triggeredTasks.push({
            status,
            schedulingType,
            taskId,
            label,
            metadata,
            outputValue: data !== undefined ? (0, stringify_1.stringify)(data) : undefined,
        });
    }
    scheduleInternal(schedulingType, label, task, metadata, customAct, thenTaskToBeAwaited) {
        let trigger = null;
        const taskId = ++this.lastTaskId;
        const scheduledPromise = new Promise((resolve, reject) => {
            trigger = () => {
                (thenTaskToBeAwaited ? task.then(() => thenTaskToBeAwaited()) : task).then((data) => {
                    this.log(schedulingType, taskId, label, metadata, 'resolved', data);
                    return resolve(data);
                }, (err) => {
                    this.log(schedulingType, taskId, label, metadata, 'rejected', err);
                    return reject(err);
                });
            };
        });
        this.scheduledTasks.push({
            original: task,
            scheduled: scheduledPromise,
            trigger: trigger,
            schedulingType,
            taskId,
            label,
            metadata,
            customAct,
        });
        if (this.scheduledWatchers.length !== 0) {
            this.scheduledWatchers[0]();
        }
        return scheduledPromise;
    }
    schedule(task, label, metadata, customAct) {
        return this.scheduleInternal('promise', label || '', task, metadata, customAct || defaultSchedulerAct);
    }
    scheduleFunction(asyncFunction, customAct) {
        return (...args) => this.scheduleInternal('function', `${asyncFunction.name}(${args.map(stringify_1.stringify).join(',')})`, asyncFunction(...args), undefined, customAct || defaultSchedulerAct);
    }
    scheduleSequence(sequenceBuilders, customAct) {
        const status = { done: false, faulty: false };
        const dummyResolvedPromise = { then: (f) => f() };
        let resolveSequenceTask = () => { };
        const sequenceTask = new Promise((resolve) => (resolveSequenceTask = resolve));
        sequenceBuilders
            .reduce((previouslyScheduled, item) => {
            const [builder, label, metadata] = typeof item === 'function' ? [item, item.name, undefined] : [item.builder, item.label, item.metadata];
            return previouslyScheduled.then(() => {
                const scheduled = this.scheduleInternal('sequence', label, dummyResolvedPromise, metadata, customAct || defaultSchedulerAct, () => builder());
                scheduled.catch(() => {
                    status.faulty = true;
                    resolveSequenceTask();
                });
                return scheduled;
            });
        }, dummyResolvedPromise)
            .then(() => {
            status.done = true;
            resolveSequenceTask();
        }, () => {
        });
        return Object.assign(status, {
            task: Promise.resolve(sequenceTask).then(() => {
                return { done: status.done, faulty: status.faulty };
            }),
        });
    }
    count() {
        return this.scheduledTasks.length;
    }
    internalWaitOne() {
        if (this.scheduledTasks.length === 0) {
            throw new Error('No task scheduled');
        }
        const taskIndex = this.taskSelector.nextTaskIndex(this.scheduledTasks);
        const [scheduledTask] = this.scheduledTasks.splice(taskIndex, 1);
        return scheduledTask.customAct(async () => {
            scheduledTask.trigger();
            try {
                await scheduledTask.scheduled;
            }
            catch (_err) {
            }
        });
    }
    async waitOne(customAct) {
        const waitAct = customAct || defaultSchedulerAct;
        await this.act(() => waitAct(async () => await this.internalWaitOne()));
    }
    async waitAll(customAct) {
        while (this.scheduledTasks.length > 0) {
            await this.waitOne(customAct);
        }
    }
    async waitFor(unscheduledTask, customAct) {
        let taskResolved = false;
        let awaiterPromise = null;
        const awaiter = async () => {
            while (!taskResolved && this.scheduledTasks.length > 0) {
                await this.waitOne(customAct);
            }
            awaiterPromise = null;
        };
        const handleNotified = () => {
            if (awaiterPromise !== null) {
                return;
            }
            awaiterPromise = Promise.resolve().then(awaiter);
        };
        const clearAndReplaceWatcher = () => {
            const handleNotifiedIndex = this.scheduledWatchers.indexOf(handleNotified);
            if (handleNotifiedIndex !== -1) {
                this.scheduledWatchers.splice(handleNotifiedIndex, 1);
            }
            if (handleNotifiedIndex === 0 && this.scheduledWatchers.length !== 0) {
                this.scheduledWatchers[0]();
            }
        };
        const rewrappedTask = unscheduledTask.then((ret) => {
            taskResolved = true;
            if (awaiterPromise === null) {
                clearAndReplaceWatcher();
                return ret;
            }
            return awaiterPromise.then(() => {
                clearAndReplaceWatcher();
                return ret;
            });
        }, (err) => {
            taskResolved = true;
            if (awaiterPromise === null) {
                clearAndReplaceWatcher();
                throw err;
            }
            return awaiterPromise.then(() => {
                clearAndReplaceWatcher();
                throw err;
            });
        });
        if (this.scheduledTasks.length > 0 && this.scheduledWatchers.length === 0) {
            handleNotified();
        }
        this.scheduledWatchers.push(handleNotified);
        return rewrappedTask;
    }
    report() {
        return [
            ...this.triggeredTasks,
            ...this.scheduledTasks.map((t) => ({
                status: 'pending',
                schedulingType: t.schedulingType,
                taskId: t.taskId,
                label: t.label,
                metadata: t.metadata,
            })),
        ];
    }
    toString() {
        return ('schedulerFor()`\n' +
            this.report()
                .map(SchedulerImplem.buildLog)
                .map((log) => `-> ${log}`)
                .join('\n') +
            '`');
    }
    [symbols_1.cloneMethod]() {
        return new SchedulerImplem(this.act, this.sourceTaskSelector);
    }
}
exports.SchedulerImplem = SchedulerImplem;
