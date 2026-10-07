import { Arbitrary } from '../../check/arbitrary/definition/Arbitrary.js';
import { Value } from '../../check/arbitrary/definition/Value.js';
import { CommandsIterable } from '../../check/model/commands/CommandsIterable.js';
import { CommandWrapper } from '../../check/model/commands/CommandWrapper.js';
import { ReplayPath } from '../../check/model/ReplayPath.js';
import { makeLazy } from '../../stream/LazyIterableIterator.js';
import { Stream } from '../../stream/Stream.js';
import { oneof } from '../oneof.js';
import { restrictedIntegerArbitraryBuilder } from './builders/RestrictedIntegerArbitraryBuilder.js';
export class CommandsArbitrary extends Arbitrary {
    constructor(commandArbs, maxGeneratedCommands, maxCommands, sourceReplayPath, disableReplayLog) {
        super();
        this.sourceReplayPath = sourceReplayPath;
        this.disableReplayLog = disableReplayLog;
        this.oneCommandArb = oneof(...commandArbs).map((c) => new CommandWrapper(c));
        this.lengthArb = restrictedIntegerArbitraryBuilder(0, maxGeneratedCommands, maxCommands);
        this.replayPath = [];
        this.replayPathPosition = 0;
    }
    metadataForReplay() {
        return this.disableReplayLog ? '' : `replayPath=${JSON.stringify(ReplayPath.stringify(this.replayPath))}`;
    }
    buildValueFor(items, shrunkOnce) {
        const commands = items.map((item) => item.value_);
        const context = { shrunkOnce, items };
        return new Value(new CommandsIterable(commands, () => this.metadataForReplay()), context);
    }
    generate(mrng) {
        const size = this.lengthArb.generate(mrng, undefined);
        const sizeValue = size.value;
        const items = Array(sizeValue);
        for (let idx = 0; idx !== sizeValue; ++idx) {
            const item = this.oneCommandArb.generate(mrng, undefined);
            items[idx] = item;
        }
        this.replayPathPosition = 0;
        return this.buildValueFor(items, false);
    }
    canShrinkWithoutContext(value) {
        return false;
    }
    filterOnExecution(itemsRaw) {
        const items = [];
        for (const c of itemsRaw) {
            if (c.value_.hasRan) {
                this.replayPath.push(true);
                items.push(c);
            }
            else
                this.replayPath.push(false);
        }
        return items;
    }
    filterOnReplay(itemsRaw) {
        return itemsRaw.filter((c, idx) => {
            const state = this.replayPath[this.replayPathPosition + idx];
            if (state === undefined)
                throw new Error(`Too short replayPath`);
            if (!state && c.value_.hasRan)
                throw new Error(`Mismatch between replayPath and real execution`);
            return state;
        });
    }
    filterForShrinkImpl(itemsRaw) {
        if (this.replayPathPosition === 0) {
            this.replayPath = this.sourceReplayPath !== null ? ReplayPath.parse(this.sourceReplayPath) : [];
        }
        const items = this.replayPathPosition < this.replayPath.length
            ? this.filterOnReplay(itemsRaw)
            : this.filterOnExecution(itemsRaw);
        this.replayPathPosition += itemsRaw.length;
        return items;
    }
    shrink(_value, context) {
        if (context === undefined) {
            return Stream.nil();
        }
        const safeContext = context;
        const shrunkOnce = safeContext.shrunkOnce;
        const itemsRaw = safeContext.items;
        const items = this.filterForShrinkImpl(itemsRaw);
        if (items.length === 0) {
            return Stream.nil();
        }
        const rootShrink = shrunkOnce
            ? Stream.nil()
            : new Stream([[]][Symbol.iterator]());
        const nextShrinks = [];
        for (let numToKeep = 0; numToKeep !== items.length; ++numToKeep) {
            nextShrinks.push(makeLazy(() => {
                const fixedStart = items.slice(0, numToKeep);
                return this.lengthArb
                    .shrink(items.length - 1 - numToKeep, undefined)
                    .map((l) => fixedStart.concat(items.slice(items.length - (l.value + 1))));
            }));
        }
        for (let itemAt = 0; itemAt !== items.length; ++itemAt) {
            nextShrinks.push(makeLazy(() => this.oneCommandArb
                .shrink(items[itemAt].value_, items[itemAt].context)
                .map((v) => items.slice(0, itemAt).concat([v], items.slice(itemAt + 1)))));
        }
        return rootShrink.join(...nextShrinks).map((shrinkables) => {
            return this.buildValueFor(shrinkables.map((c) => new Value(c.value_.clone(), c.context)), true);
        });
    }
}
