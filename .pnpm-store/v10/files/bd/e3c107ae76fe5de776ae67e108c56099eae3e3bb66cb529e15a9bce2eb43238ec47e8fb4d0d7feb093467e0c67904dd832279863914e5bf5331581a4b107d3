import { IGatsbyState, ActionsUnion } from "../types";
export declare const schemaCustomizationReducer: (state: {
    composer: import("graphql-compose").SchemaComposer<any> | null;
    context: Record<string, any>;
    fieldExtensions: GraphQLFieldExtensionDefinition;
    printConfig: {
        path?: string | undefined;
        include?: {
            types?: string[] | undefined;
            plugins?: string[] | undefined;
        } | undefined;
        exclude?: {
            types?: string[] | undefined;
            plugins?: string[] | undefined;
        } | undefined;
        withFieldTypes?: boolean | undefined;
    } | null;
    thirdPartySchemas: import("graphql").GraphQLSchema[];
    types: (string | {
        typeOrTypeDef: import("graphql").DocumentNode;
        plugin: import("../types").IGatsbyPlugin;
    })[];
} | undefined, action: ActionsUnion) => IGatsbyState["schemaCustomization"];
