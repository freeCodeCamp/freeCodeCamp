import * as _radix_ui_react_context from '@radix-ui/react-context';
import React from 'react';
import { Slot } from '@radix-ui/react-slot';

type SlotProps$1 = React.ComponentPropsWithoutRef<typeof Slot>;
interface CollectionProps$1 extends SlotProps$1 {
    scope: any;
}
declare function createCollection$1<ItemElement extends HTMLElement, ItemData = {}>(name: string): readonly [{
    readonly Provider: React.FC<{
        children?: React.ReactNode;
        scope: any;
    }>;
    readonly Slot: React.ForwardRefExoticComponent<CollectionProps$1 & React.RefAttributes<HTMLElement>>;
    readonly ItemSlot: React.ForwardRefExoticComponent<React.PropsWithoutRef<ItemData & {
        children: React.ReactNode;
        scope: any;
    }> & React.RefAttributes<ItemElement>>;
}, (scope: any) => () => ({
    ref: React.RefObject<ItemElement | null>;
} & ItemData)[], _radix_ui_react_context.CreateScope];

declare class OrderedDict<K, V> extends Map<K, V> {
    #private;
    constructor(iterable?: Iterable<readonly [K, V]> | null | undefined);
    set(key: K, value: V): this;
    insert(index: number, key: K, value: V): this;
    with(index: number, key: K, value: V): OrderedDict<K, V>;
    before(key: K): [K, V] | undefined;
    /**
     * Sets a new key-value pair at the position before the given key.
     */
    setBefore(key: K, newKey: K, value: V): this;
    after(key: K): [K, V] | undefined;
    /**
     * Sets a new key-value pair at the position after the given key.
     */
    setAfter(key: K, newKey: K, value: V): this;
    first(): [K, V] | undefined;
    last(): [K, V] | undefined;
    clear(): void;
    delete(key: K): boolean;
    deleteAt(index: number): boolean;
    at(index: number): V | undefined;
    entryAt(index: number): [K, V] | undefined;
    indexOf(key: K): number;
    keyAt(index: number): K | undefined;
    from(key: K, offset: number): V | undefined;
    keyFrom(key: K, offset: number): K | undefined;
    find(predicate: (entry: [K, V], index: number, dictionary: OrderedDict<K, V>) => boolean, thisArg?: any): [K, V] | undefined;
    findIndex(predicate: (entry: [K, V], index: number, dictionary: OrderedDict<K, V>) => boolean, thisArg?: any): number;
    filter<KK extends K, VV extends V>(predicate: (entry: [K, V], index: number, dict: OrderedDict<K, V>) => entry is [KK, VV], thisArg?: any): OrderedDict<KK, VV>;
    filter(predicate: (entry: [K, V], index: number, dictionary: OrderedDict<K, V>) => unknown, thisArg?: any): OrderedDict<K, V>;
    map<U>(callbackfn: (entry: [K, V], index: number, dictionary: OrderedDict<K, V>) => U, thisArg?: any): OrderedDict<K, U>;
    reduce(callbackfn: (previousValue: [K, V], currentEntry: [K, V], currentIndex: number, dictionary: OrderedDict<K, V>) => [K, V]): [K, V];
    reduce(callbackfn: (previousValue: [K, V], currentEntry: [K, V], currentIndex: number, dictionary: OrderedDict<K, V>) => [K, V], initialValue: [K, V]): [K, V];
    reduce<U>(callbackfn: (previousValue: U, currentEntry: [K, V], currentIndex: number, dictionary: OrderedDict<K, V>) => U, initialValue: U): U;
    reduceRight(callbackfn: (previousValue: [K, V], currentEntry: [K, V], currentIndex: number, dictionary: OrderedDict<K, V>) => [K, V]): [K, V];
    reduceRight(callbackfn: (previousValue: [K, V], currentEntry: [K, V], currentIndex: number, dictionary: OrderedDict<K, V>) => [K, V], initialValue: [K, V]): [K, V];
    reduceRight<U>(callbackfn: (previousValue: [K, V], currentValue: U, currentIndex: number, dictionary: OrderedDict<K, V>) => U, initialValue: U): U;
    toSorted(compareFn?: (a: [K, V], b: [K, V]) => number): OrderedDict<K, V>;
    toReversed(): OrderedDict<K, V>;
    toSpliced(start: number, deleteCount?: number): OrderedDict<K, V>;
    toSpliced(start: number, deleteCount: number, ...items: [K, V][]): OrderedDict<K, V>;
    slice(start?: number, end?: number): OrderedDict<K, V>;
    every(predicate: (entry: [K, V], index: number, dictionary: OrderedDict<K, V>) => unknown, thisArg?: any): boolean;
    some(predicate: (entry: [K, V], index: number, dictionary: OrderedDict<K, V>) => unknown, thisArg?: any): boolean;
}

type SlotProps = React.ComponentPropsWithoutRef<typeof Slot>;
interface CollectionProps extends SlotProps {
    scope: any;
}
interface BaseItemData {
    id?: string;
}
type ItemDataWithElement<ItemData extends BaseItemData, ItemElement extends HTMLElement> = ItemData & {
    element: ItemElement;
};
type ItemMap<ItemElement extends HTMLElement, ItemData extends BaseItemData> = OrderedDict<ItemElement, ItemDataWithElement<ItemData, ItemElement>>;
declare function createCollection<ItemElement extends HTMLElement, ItemData extends BaseItemData = BaseItemData>(name: string): readonly [{
    readonly Provider: React.FC<{
        children?: React.ReactNode;
        scope: any;
        state?: [ItemMap: ItemMap<ItemElement, ItemData>, SetItemMap: React.Dispatch<React.SetStateAction<ItemMap<ItemElement, ItemData>>>];
    }>;
    readonly Slot: React.ForwardRefExoticComponent<CollectionProps & React.RefAttributes<HTMLElement>>;
    readonly ItemSlot: React.ForwardRefExoticComponent<React.PropsWithoutRef<ItemData & {
        children: React.ReactNode;
        scope: any;
    }> & React.RefAttributes<ItemElement>>;
}, {
    createCollectionScope: _radix_ui_react_context.CreateScope;
    useCollection: (scope: any) => ItemMap<ItemElement, ItemData>;
    useInitCollection: () => [ItemMap<ItemElement, ItemData>, React.Dispatch<React.SetStateAction<ItemMap<ItemElement, ItemData>>>];
}];

export { type CollectionProps$1 as CollectionProps, createCollection$1 as createCollection, type CollectionProps$1 as unstable_CollectionProps, createCollection as unstable_createCollection };
