import type { XSchema } from '../types/schema.mjs';
import type { XPointerGet } from '../pointer/pointer_get.mjs';
import type { XStaticSchema } from './schema.mjs';
type XCyclicCheck<Stack extends unknown[], MaxLength extends number, Buffer extends unknown[] = []> = (Stack extends [infer Left, ...infer Right] ? Buffer['length'] extends MaxLength ? false : XCyclicCheck<Right, MaxLength, [...Buffer, Left]> : true);
type XCyclicGuard<Stack extends unknown[], Ref extends string> = (Ref extends Stack[number] ? XCyclicCheck<Stack, 2> : true);
type XNormal<Pointer extends string, Result extends string = (Pointer extends `#${infer Rest extends string}` ? Rest : Pointer)> = Result;
export type XStaticRef<Stack extends string[], Root extends XSchema, Ref extends string, Normal extends string = XNormal<Ref>, Target extends unknown = XPointerGet<Root, Normal>, Schema extends XSchema = Target extends XSchema ? Target : {}, Result extends unknown = (XCyclicGuard<Stack, Ref> extends true ? XStaticSchema<[...Stack, Ref], Root, Schema> : any)> = Result;
export {};
