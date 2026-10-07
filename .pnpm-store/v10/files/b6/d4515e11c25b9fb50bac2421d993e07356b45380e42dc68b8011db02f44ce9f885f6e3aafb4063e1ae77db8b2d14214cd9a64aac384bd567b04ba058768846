"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commands = commands;
const CommandsArbitrary_1 = require("./_internals/CommandsArbitrary");
const MaxLengthFromMinLength_1 = require("./_internals/helpers/MaxLengthFromMinLength");
function commands(commandArbs, constraints = {}) {
    const { size, maxCommands = MaxLengthFromMinLength_1.MaxLengthUpperBound, disableReplayLog = false, replayPath = null } = constraints;
    const specifiedMaxCommands = constraints.maxCommands !== undefined;
    const maxGeneratedCommands = (0, MaxLengthFromMinLength_1.maxGeneratedLengthFromSizeForArbitrary)(size, 0, maxCommands, specifiedMaxCommands);
    return new CommandsArbitrary_1.CommandsArbitrary(commandArbs, maxGeneratedCommands, maxCommands, replayPath, disableReplayLog);
}
