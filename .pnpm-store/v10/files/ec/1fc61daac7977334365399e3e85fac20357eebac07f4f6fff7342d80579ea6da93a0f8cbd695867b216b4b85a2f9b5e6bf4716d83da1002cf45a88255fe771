type TTakeOne<Input extends string> = (Input extends `${infer Left extends string}${infer Right extends string}` ? [Left, Right] : []);
type TIsInputMatchSentinal<End extends string[], Input extends string> = (End extends [infer Left extends string, ...infer Right extends string[]] ? Input extends `${Left}${string}` ? true : TIsInputMatchSentinal<Right, Input> : false);
/** Match Input until but not including End. No match if End not found. */
export type TUntil<End extends string[], Input extends string, Result extends string = ''> = (TTakeOne<Input> extends [infer One extends string, infer Rest extends string] ? TIsInputMatchSentinal<End, Input> extends true ? [Result, Input] : TUntil<End, Rest, `${Result}${One}`> : []);
/** Match Input until but not including End. No match if End not found. */
export declare function Until<End extends string[], Input extends string>(end: [...End], input: Input, result?: string): TUntil<End, Input>;
export {};
