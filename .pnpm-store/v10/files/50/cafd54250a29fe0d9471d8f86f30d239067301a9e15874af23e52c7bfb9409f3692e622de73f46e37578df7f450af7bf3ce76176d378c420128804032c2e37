import type { Baggage, BaggageEntry } from '../types';
export declare class BaggageImpl implements Baggage {
    private _entries;
    constructor(entries?: Map<string, BaggageEntry>);
    getEntry(key: string): BaggageEntry | undefined;
    getAllEntries(): [string, BaggageEntry][];
    setEntry(key: string, entry: BaggageEntry): BaggageImpl;
    removeEntry(key: string): BaggageImpl;
    removeEntries(...keys: string[]): BaggageImpl;
    clear(): BaggageImpl;
}
//# sourceMappingURL=baggage-impl.d.ts.map