import type { GatsbyFunctionBodyParserCommonMiddlewareConfig, GatsbyFunctionBodyParserUrlencodedConfig } from "gatsby";
export interface IGatsbyBodyParserConfigProcessed {
    json: GatsbyFunctionBodyParserCommonMiddlewareConfig;
    raw: GatsbyFunctionBodyParserCommonMiddlewareConfig;
    text: GatsbyFunctionBodyParserCommonMiddlewareConfig;
    urlencoded: GatsbyFunctionBodyParserUrlencodedConfig;
}
export interface IGatsbyFunctionConfigProcessed {
    bodyParser: IGatsbyBodyParserConfigProcessed;
}
export interface IAPIFunctionWarning {
    property: string | null;
    original: any;
    expectedType: string;
    replacedWith: any;
}
export declare function createConfig(userConfig: unknown): {
    config: IGatsbyFunctionConfigProcessed;
    warnings: Array<IAPIFunctionWarning>;
};
