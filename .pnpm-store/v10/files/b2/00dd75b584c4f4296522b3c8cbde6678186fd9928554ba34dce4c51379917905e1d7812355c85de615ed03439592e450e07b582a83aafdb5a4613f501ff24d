export declare type If<Boolean extends boolean, WhenTrue, WhenFalse> = Boolean extends true ? WhenTrue : WhenFalse;
export declare type Not<X extends boolean> = X extends true ? false : true;
export declare type And<A extends boolean, B extends boolean> = LogicalTable<A, B, true, false, false, false>;
export declare type Or<A extends boolean, B extends boolean> = LogicalTable<A, B, true, true, true, false>;
export declare type Xor<A extends boolean, B extends boolean> = LogicalTable<A, B, false, true, true, false>;
declare type LogicalTable<A extends boolean, B extends boolean, AB, AnB, nAB, nAnB> = A extends true ? B extends true ? AB : AnB : B extends true ? nAB : nAnB;
export {};
