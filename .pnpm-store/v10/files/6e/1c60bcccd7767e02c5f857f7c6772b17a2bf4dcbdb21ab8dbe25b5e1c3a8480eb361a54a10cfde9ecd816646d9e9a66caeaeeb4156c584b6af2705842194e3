type XBuildTuple<Size extends number, Tuple extends unknown[] = []> = (Tuple['length'] extends Size ? Tuple : XBuildTuple<Size, [...Tuple, unknown]>);
export type XLessThan<Left extends number, Right extends number> = Left extends Right ? false : XBuildTuple<Left> extends [...XBuildTuple<Right>, ...infer _Rest] ? false : true;
export type XLessThanEqual<Left extends number, Right extends number> = (Left extends Right ? true : XLessThan<Left, Right>);
export type XGreaterThan<Left extends number, Right extends number> = (XLessThan<Right, Left>);
export type XGreaterThanEqual<Left extends number, Right extends number> = (XLessThanEqual<Right, Left>);
export {};
