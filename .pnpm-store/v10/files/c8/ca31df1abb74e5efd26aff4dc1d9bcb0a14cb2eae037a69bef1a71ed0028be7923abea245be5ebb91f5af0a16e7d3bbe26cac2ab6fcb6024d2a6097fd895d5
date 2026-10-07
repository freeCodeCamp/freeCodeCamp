import { ObjectSchema } from "./joi";
import { IPluginInfoOptions } from "./types";
interface IOptions {
    validateExternalRules?: boolean;
    returnWarnings?: boolean;
}
interface IValidateAsyncResult {
    value: IPluginInfoOptions;
    warning: {
        message: string;
        details: Array<{
            message: string;
            path: Array<string>;
            type: string;
            context: Array<Record<string, unknown>>;
        }>;
    };
}
export declare function validateOptionsSchema(pluginSchema: ObjectSchema, pluginOptions: IPluginInfoOptions, options?: IOptions): Promise<IValidateAsyncResult>;
export {};
