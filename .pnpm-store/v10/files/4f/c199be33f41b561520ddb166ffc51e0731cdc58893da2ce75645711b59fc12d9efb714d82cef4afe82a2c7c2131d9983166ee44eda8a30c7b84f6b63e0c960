export interface TMappingType {
    input: string;
    output: string;
}
export type TApplyMapping<Mapping extends TMappingType, Value extends string> = ((Mapping & {
    input: Value;
})['output']);
export type TMappingFunc = (input: string) => string;
export declare function ApplyMapping(mapping: TMappingFunc, value: string): string;
