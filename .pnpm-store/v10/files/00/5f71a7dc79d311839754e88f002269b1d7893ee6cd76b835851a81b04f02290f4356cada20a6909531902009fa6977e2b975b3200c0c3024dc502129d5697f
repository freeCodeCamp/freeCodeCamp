import { SchemaComposer, Extensions } from "graphql-compose";
import { GraphQLDirective } from "graphql";
export interface ISchemaPrintConfig {
    path?: string;
    include?: {
        types: Array<string>;
        plugins: Array<string>;
    };
    exclude?: {
        types: Array<string>;
        plugins: Array<string>;
    };
    withFieldTypes?: boolean;
    rewrite?: boolean;
}
export declare const printDirectives: (extensions: Extensions, directives: Array<GraphQLDirective>) => string;
export declare const printTypeDefinitions: ({ config, schemaComposer, }: {
    config: ISchemaPrintConfig;
    schemaComposer: SchemaComposer;
}) => Promise<void>;
