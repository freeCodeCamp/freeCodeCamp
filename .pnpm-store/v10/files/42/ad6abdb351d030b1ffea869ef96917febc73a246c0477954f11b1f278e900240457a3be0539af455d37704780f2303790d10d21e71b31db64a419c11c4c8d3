export declare enum Focus {
    /** Focus the first non-disabled item. */
    First = 0,
    /** Focus the previous non-disabled item. */
    Previous = 1,
    /** Focus the next non-disabled item. */
    Next = 2,
    /** Focus the last non-disabled item. */
    Last = 3,
    /** Focus a specific item based on the `id` of the item. */
    Specific = 4,
    /** Focus no items at all. */
    Nothing = 5
}
export declare function calculateActiveIndex<TItem>(action: {
    focus: Focus.Specific;
    id: string;
} | {
    focus: Exclude<Focus, Focus.Specific>;
}, resolvers: {
    resolveItems(): TItem[];
    resolveActiveIndex(): number | null;
    resolveId(item: TItem, index: number, items: TItem[]): string;
    resolveDisabled(item: TItem, index: number, items: TItem[]): boolean;
}): number | null;
