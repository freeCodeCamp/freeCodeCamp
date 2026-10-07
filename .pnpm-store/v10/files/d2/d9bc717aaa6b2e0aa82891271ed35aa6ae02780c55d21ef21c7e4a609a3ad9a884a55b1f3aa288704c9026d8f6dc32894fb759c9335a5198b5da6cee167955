import { CommandsArbitrary } from './_internals/CommandsArbitrary.js';
import { maxGeneratedLengthFromSizeForArbitrary, MaxLengthUpperBound, } from './_internals/helpers/MaxLengthFromMinLength.js';
function commands(commandArbs, constraints = {}) {
    const { size, maxCommands = MaxLengthUpperBound, disableReplayLog = false, replayPath = null } = constraints;
    const specifiedMaxCommands = constraints.maxCommands !== undefined;
    const maxGeneratedCommands = maxGeneratedLengthFromSizeForArbitrary(size, 0, maxCommands, specifiedMaxCommands);
    return new CommandsArbitrary(commandArbs, maxGeneratedCommands, maxCommands, replayPath, disableReplayLog);
}
export { commands };
