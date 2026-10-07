import { IPageInput as ICreatePageInput } from "../redux/actions/public";
import { ICreateSliceInput } from "../redux/actions/restricted";
interface IErrorMeta {
    id: string;
    context: Record<string, unknown>;
}
interface IErrorIdMap {
    noPath: string;
    notAbsolute: string;
    doesNotExist: string;
    empty: string;
    noDefaultExport: string;
}
export declare function validateComponent(args: {
    input: ICreatePageInput | ICreateSliceInput;
    pluginName: string;
    errorIdMap: IErrorIdMap;
}): {
    error?: IErrorMeta;
    panicOnBuild?: boolean;
};
export declare function clearValidationCache(): void;
export {};
