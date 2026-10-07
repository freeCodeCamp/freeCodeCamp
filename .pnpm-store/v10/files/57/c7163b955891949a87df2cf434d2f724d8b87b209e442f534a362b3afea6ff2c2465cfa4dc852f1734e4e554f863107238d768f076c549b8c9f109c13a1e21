import { Extends, Equal } from 'typescript-compare';
export declare type IsFinite<Tuple extends any[], Finite, Infinite> = {
    empty: Finite;
    nonEmpty: ((..._: Tuple) => any) extends ((_: infer First, ..._1: infer Rest) => any) ? IsFinite<Rest, Finite, Infinite> : never;
    infinite: Infinite;
}[Tuple extends [] ? 'empty' : Tuple extends (infer Element)[] ? Element[] extends Tuple ? 'infinite' : 'nonEmpty' : never];
export declare type SplitInfiniteTuple<Tuple extends any[]> = _SplitInfiniteTuple<Tuple> extends [infer Finite, infer Infinite] ? Finite extends any[] ? [Reverse<Finite>, Infinite] : never : never;
export declare type _SplitInfiniteTuple<Tuple extends any[], Holder extends any[] = []> = {
    matched: [Holder, Tuple];
    unmatched: ((..._: Tuple) => any) extends ((_: infer First, ..._1: infer Rest) => any) ? _SplitInfiniteTuple<Rest, Prepend<Holder, First>> : never;
    finite: [Tuple, []];
}[Tuple extends (infer Element)[] ? Element[] extends Tuple ? 'matched' : 'unmatched' : never];
export declare type First<Tuple extends any[], Default = never> = Tuple extends [any, ...any[]] ? Tuple[0] : Default;
export declare type Last<Tuple extends any[], Default = never> = {
    empty: Default;
    single: Tuple extends [infer SoleElement] ? SoleElement : never;
    multi: ((..._: Tuple) => any) extends ((_: any, ..._1: infer Next) => any) ? Last<Next> : Default;
    infinite: Tuple extends (infer Element)[] ? Element : never;
}[Tuple extends [] ? 'empty' : Tuple extends [any] ? 'single' : Tuple extends (infer Element)[] ? Element[] extends Tuple ? 'infinite' : 'multi' : never];
export declare type Tail<Tuple extends any[]> = ((...args: Tuple) => any) extends ((_: any, ..._1: infer Rest) => any) ? Rest : never;
export declare type FirstIndexEqual<Type, Tuple extends any[], NotFound = never, Count extends any[] = []> = {
    empty: NotFound;
    nonEmpty: ((..._: Tuple) => any) extends ((_: infer First, ..._1: infer Rest) => any) ? Equal<First, Type> extends true ? Count['length'] : FirstIndexEqual<Type, Rest, NotFound, Prepend<Count, any>> : never;
    infinite: SplitInfiniteTuple<Tuple> extends [infer Finite, infer Infinite] ? Finite extends any[] ? FirstIndexEqual<Type, Finite, Infinite extends Type[] ? Type[] extends Infinite ? Finite['length'] : NotFound : NotFound> : never : never;
}[Tuple extends [] ? 'empty' : IsFinite<Tuple, 'nonEmpty', 'infinite'>];
export declare type FirstIndexSubset<Type, Tuple extends any[], NotFound = never, Count extends any[] = []> = {
    empty: NotFound;
    nonEmpty: ((..._: Tuple) => any) extends ((_: infer First, ..._1: infer Rest) => any) ? Extends<First, Type> extends true ? Count['length'] : FirstIndexSubset<Type, Rest, NotFound, Prepend<Count, any>> : never;
    infinite: SplitInfiniteTuple<Tuple> extends [infer Finite, infer Infinite] ? Finite extends any[] ? FirstIndexSubset<Type, Finite, Infinite extends Type[] ? Finite['length'] : NotFound> : never : never;
}[Tuple extends [] ? 'empty' : IsFinite<Tuple, 'nonEmpty', 'infinite'>];
export declare type FirstIndexSuperset<Type, Tuple extends any[], NotFound = never, Count extends any[] = []> = {
    empty: NotFound;
    nonEmpty: ((..._: Tuple) => any) extends ((_: infer First, ..._1: infer Rest) => any) ? Extends<Type, First> extends true ? Count['length'] : FirstIndexSuperset<Type, Rest, NotFound, Prepend<Count, any>> : never;
    infinite: SplitInfiniteTuple<Tuple> extends [infer Finite, infer Infinite] ? Finite extends any[] ? FirstIndexSuperset<Type, Finite, Extends<Type[], Infinite> extends true ? Finite['length'] : NotFound> : never : never;
}[Tuple extends [] ? 'empty' : IsFinite<Tuple, 'nonEmpty', 'infinite'>];
export declare type LastIndexEqual<Type, Tuple extends any[], NotFound = never> = _LastIndexFirst<_AllIndexesEqual<Type, Tuple>, NotFound>;
export declare type LastIndexSubset<Type, Tuple extends any[], NotFound = never> = _LastIndexFirst<_AllIndexesSubset<Type, Tuple>, NotFound>;
export declare type LastIndexSuperset<Type, Tuple extends any[], NotFound = never> = _LastIndexFirst<_AllIndexesSuperset<Type, Tuple>, NotFound>;
export declare type _LastIndexFirst<Tuple extends any[], NotFound> = IsFinite<Tuple, First<Tuple, NotFound>, SplitInfiniteTuple<Tuple> extends [any, infer Infinite] ? Infinite extends (infer X) ? X : never : never>;
export declare type _IndexesNormalize<Indexes extends any[]> = IsFinite<Indexes, Indexes extends any[] ? Reverse<Indexes> : never, SplitInfiniteTuple<Indexes> extends [infer Finite, infer Infinite] ? Finite extends any[] ? ((..._: Finite) => any) extends ((..._: infer Alt) => any) ? Infinite extends any[] ? Concat<Reverse<Alt>, Infinite> : never : never : never : never>;
export declare type _AllIndexesEqual<Type, Tuple extends any[], Holder extends any[] = [], Count extends any[] = []> = {
    empty: Holder;
    nonEmpty: ((..._: Tuple) => any) extends ((_: infer First, ..._1: infer Rest) => any) ? Rest extends any[] ? _AllIndexesEqual<Type, Rest, Equal<First, Type> extends true ? Prepend<Holder, Count['length']> : Holder, Prepend<Count, any>> : never : never;
    infinite: SplitInfiniteTuple<Tuple> extends [infer Finite, infer Infinite] ? Finite extends any[] ? Infinite extends (infer Last)[] ? _AllIndexesEqual<Type, Finite, Equal<Last, Type> extends true ? Finite['length'][] : []> : never : never : never;
}[Tuple extends [] ? 'empty' : IsFinite<Tuple, 'nonEmpty', 'infinite'>];
export declare type _AllIndexesSubset<Type, Tuple extends any[], Holder extends any[] = [], Count extends any[] = []> = {
    empty: Holder;
    nonEmpty: ((..._: Tuple) => any) extends ((_: infer First, ..._1: infer Rest) => any) ? Rest extends any[] ? _AllIndexesSubset<Type, Rest, Extends<First, Type> extends true ? Prepend<Holder, Count['length']> : Holder, Prepend<Count, any>> : never : never;
    infinite: SplitInfiniteTuple<Tuple> extends [infer Finite, infer Infinite] ? Finite extends any[] ? Infinite extends (infer Last)[] ? _AllIndexesSubset<Type, Finite, Extends<Last, Type> extends true ? Finite['length'][] : []> : never : never : never;
}[Tuple extends [] ? 'empty' : IsFinite<Tuple, 'nonEmpty', 'infinite'>];
export declare type _AllIndexesSuperset<Type, Tuple extends any[], Holder extends any[] = [], Count extends any[] = []> = {
    empty: Holder;
    nonEmpty: ((..._: Tuple) => any) extends ((_: infer First, ..._1: infer Rest) => any) ? Rest extends any[] ? _AllIndexesSuperset<Type, Rest, Type extends First ? Prepend<Holder, Count['length']> : Holder, Prepend<Count, any>> : never : never;
    infinite: SplitInfiniteTuple<Tuple> extends [infer Finite, infer Infinite] ? Finite extends any[] ? Infinite extends (infer Last)[] ? _AllIndexesSuperset<Type, Finite, Type extends Last ? Finite['length'][] : []> : never : never : never;
}[Tuple extends [] ? 'empty' : IsFinite<Tuple, 'nonEmpty', 'infinite'>];
export declare type Prepend<Tuple extends any[], Addend> = ((_: Addend, ..._1: Tuple) => any) extends ((..._: infer Result) => any) ? Result : never;
export declare type Reverse<Tuple extends any[], Prefix extends any[] = []> = {
    empty: Prefix;
    nonEmpty: ((..._: Tuple) => any) extends ((_: infer First, ..._1: infer Next) => any) ? Reverse<Next, Prepend<Prefix, First>> : never;
    infinite: {
        ERROR: 'Cannot reverse an infinite tuple';
        CODENAME: 'InfiniteTuple';
    };
}[Tuple extends [any, ...any[]] ? IsFinite<Tuple, 'nonEmpty', 'infinite'> : 'empty'];
export declare type Concat<Left extends any[], Right extends any[]> = {
    emptyLeft: Right;
    singleLeft: Left extends [infer SoleElement] ? Prepend<Right, SoleElement> : never;
    multiLeft: ((..._: Reverse<Left>) => any) extends ((_: infer LeftLast, ..._1: infer ReversedLeftRest) => any) ? Concat<Reverse<ReversedLeftRest>, Prepend<Right, LeftLast>> : never;
    infiniteLeft: {
        ERROR: 'Left is not finite';
        CODENAME: 'InfiniteLeft' & 'Infinite';
    };
}[Left extends [] ? 'emptyLeft' : Left extends [any] ? 'singleLeft' : IsFinite<Left, 'multiLeft', 'infiniteLeft'>];
export declare type Repeat<Type, Count extends number, Holder extends any[] = []> = Count extends never ? never : number extends Count ? Type[] : {
    fit: Holder;
    unfit: Repeat<Type, Count, Prepend<Holder, Type>>;
    union: Count extends Holder['length'] | infer Rest ? Rest extends number ? Repeat<Type, Holder['length']> | Repeat<Type, Rest> : never : never;
}[Holder['length'] extends Count ? Count extends Holder['length'] ? 'fit' : 'union' : 'unfit'];
export declare type ConcatMultiple<TupleSet extends any[][]> = {
    empty: [];
    nonEmpty: ((..._: Reverse<TupleSet>) => any) extends ((_: infer Last, ..._1: infer ReversedRest) => any) ? Last extends any[] ? ReversedRest extends any[][] ? Concat<ConcatMultiple<Reverse<ReversedRest>>, Last> : never : never : never;
    infinite: {
        ERROR: 'TupleSet is not finite';
        CODENAME: 'InfiniteTupleSet' & 'Infinite';
    };
}[TupleSet extends [] ? 'empty' : IsFinite<TupleSet, 'nonEmpty', 'infinite'>];
export declare type SliceStartQuantity<Tuple extends any[], Start extends number, Quantity extends number, Holder extends any[] = [], Count extends any[] = []> = {
    before: SliceStartQuantity<Tail<Tuple>, Start, Quantity, Holder, Prepend<Count, Count['length']>>;
    start: ((...args: Tuple) => any) extends ((_: infer First, ..._1: infer Rest) => any) ? SliceStartQuantity<Rest, Start, Quantity, Prepend<Holder, First>, Count> : never;
    end: Reverse<Holder>;
}[Tuple extends [] ? 'end' : Quantity extends Holder['length'] ? 'end' : Start extends Count['length'] ? 'start' : 'before'];
export declare type SingleTupleSet<Types extends any[], Holder extends [any][] = []> = {
    empty: Holder;
    nonEmpty: ((..._: Reverse<Types>) => any) extends ((_: infer Last, ..._1: infer ReversedRest) => any) ? SingleTupleSet<Reverse<ReversedRest>, Prepend<Holder, [Last]>> : never;
    infinite: SplitInfiniteTuple<Types> extends [infer Finite, infer Infinite] ? Finite extends any[] ? Infinite extends Array<infer RepeatedElement> ? SingleTupleSet<Finite, [RepeatedElement][]> : never : never : never;
}[Types extends [] ? 'empty' : IsFinite<Types, 'nonEmpty', 'infinite'>];
export declare type FillTuple<Tuple extends any[], Replacement, Holder extends any[] = []> = {
    empty: Holder;
    nonEmpty: ((...a: Tuple) => any) extends ((a: infer First, ...b: infer Rest) => any) ? FillTuple<Rest, Replacement, Prepend<Holder, Replacement>> : never;
    infinite: Replacement[];
}[Tuple extends [] ? 'empty' : IsFinite<Tuple, 'nonEmpty', 'infinite'>];
export declare type CompareLength<Left extends any[], Right extends any[]> = {
    fitBoth: 'equal';
    fitLeft: 'shorterLeft';
    fitRight: 'shorterRight';
    unfit: ((..._: Left) => any) extends ((_: any, ..._1: infer LeftRest) => any) ? ((..._: Right) => any) extends ((_: any, ..._1: infer RightRest) => any) ? CompareLength<LeftRest, RightRest> : never : never;
}[Left['length'] extends Right['length'] ? 'fitBoth' : Left extends [] ? 'fitLeft' : Right extends [] ? 'fitRight' : 'unfit'];
export declare type SortTwoTuple<Left extends any[], Right extends any[], WhenEqual = [Left, Right]> = {
    equal: WhenEqual;
    shorterLeft: [Left, Right];
    shorterRight: [Right, Left];
}[CompareLength<Left, Right>];
export declare type ShortestTuple<TupleSet extends any[][], Shortest = any[]> = {
    empty: Shortest;
    nonEmpty: ((..._: TupleSet) => any) extends ((_: infer Head, ..._1: infer Tail) => any) ? Tail extends any[] ? Shortest extends any[] ? Head extends any[] ? Tail extends Head[] ? SortTwoTuple<Shortest, Head>[0] : ShortestTuple<Tail, SortTwoTuple<Shortest, Head>[0]> : never : never : never : never;
}[TupleSet extends [] ? 'empty' : 'nonEmpty'];
export declare type LongestTuple<TupleSet extends any[][], Longest = []> = {
    empty: Longest;
    nonEmpty: ((..._: TupleSet) => any) extends ((_: infer Head, ..._1: infer Tail) => any) ? Tail extends any[] ? Longest extends any[] ? Head extends any[] ? Tail extends Head[] ? SortTwoTuple<Longest, Head>[1] : LongestTuple<Tail, SortTwoTuple<Longest, Head>[1]> : never : never : never : never;
}[TupleSet extends [] ? 'empty' : 'nonEmpty'];
