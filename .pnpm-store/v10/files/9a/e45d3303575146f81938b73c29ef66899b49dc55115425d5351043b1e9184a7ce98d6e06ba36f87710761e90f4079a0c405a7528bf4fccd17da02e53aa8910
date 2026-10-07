"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandsIterable = void 0;
const symbols_1 = require("../../symbols");
class CommandsIterable {
    constructor(commands, metadataForReplay) {
        this.commands = commands;
        this.metadataForReplay = metadataForReplay;
    }
    [Symbol.iterator]() {
        return this.commands[Symbol.iterator]();
    }
    [symbols_1.cloneMethod]() {
        return new CommandsIterable(this.commands.map((c) => c.clone()), this.metadataForReplay);
    }
    toString() {
        const serializedCommands = this.commands
            .filter((c) => c.hasRan)
            .map((c) => c.toString())
            .join(',');
        const metadata = this.metadataForReplay();
        return metadata.length !== 0 ? `${serializedCommands} /*${metadata}*/` : serializedCommands;
    }
}
exports.CommandsIterable = CommandsIterable;
