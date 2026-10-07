type TEscape0<Index extends string> = Index extends `${infer Left}~0${infer Right}` ? `${Left}~${TEscape<Right>}` : Index;
type TEscape1<Index extends string> = Index extends `${infer Left}~1${infer Right}` ? `${Left}/${TEscape<Right>}` : Index;
type TEscape<Index extends string, Escaped0 extends string = TEscape0<Index>, Escaped1 extends string = TEscape1<Escaped0>> = Escaped1;
type IndicesReduce<Pointer extends string, Result extends string[] = []> = (Pointer extends `${infer Left extends string}/${infer Right extends string}` ? Left extends '' ? IndicesReduce<Right, Result> : IndicesReduce<Right, [...Result, TEscape<Left>]> : [...Result, TEscape<Pointer>]);
type TIndices<Pointer extends string, Result extends string[] = Pointer extends '' ? [] : IndicesReduce<Pointer>> = Result;
type TResolve<Value extends unknown, Indices extends string[]> = (Indices extends [infer Left extends string, ...infer Right extends string[]] ? Left extends keyof Value ? TResolve<Value[Left], Right> : undefined : Value);
/** Type Level RFC 6901 Json Pointer Resolver */
export type XPointerGet<Value extends unknown, Pointer extends string, Indices extends string[] = TIndices<Pointer>, Result extends unknown = TResolve<Value, Indices>> = Result;
export {};
