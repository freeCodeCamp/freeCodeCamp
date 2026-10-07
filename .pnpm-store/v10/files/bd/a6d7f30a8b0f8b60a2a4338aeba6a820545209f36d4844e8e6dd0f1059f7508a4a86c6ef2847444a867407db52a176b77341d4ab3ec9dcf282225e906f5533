import { type TProperties, type TSchema } from '../../type/index.mjs';
export interface PipelineFunction {
    (context: TProperties, schema: TSchema, value: unknown): unknown;
}
export interface PipelineInterface {
    (schema: TSchema, value: unknown): unknown;
    (context: TProperties, schema: TSchema, value: unknown): unknown;
}
/** Creates a value processing pipeline. */
export declare function Pipeline(pipeline: PipelineFunction[]): PipelineInterface;
