import { SchedulerImplem } from '../implementations/SchedulerImplem.js';
function buildNextTaskIndex(ordering) {
    let numTasks = 0;
    return {
        clone: () => buildNextTaskIndex(ordering),
        nextTaskIndex: (scheduledTasks) => {
            if (ordering.length <= numTasks) {
                throw new Error(`Invalid schedulerFor defined: too many tasks have been scheduled`);
            }
            const taskIndex = scheduledTasks.findIndex((t) => t.taskId === ordering[numTasks]);
            if (taskIndex === -1) {
                throw new Error(`Invalid schedulerFor defined: unable to find next task`);
            }
            ++numTasks;
            return taskIndex;
        },
    };
}
export function buildSchedulerFor(act, ordering) {
    return new SchedulerImplem(act, buildNextTaskIndex(ordering));
}
