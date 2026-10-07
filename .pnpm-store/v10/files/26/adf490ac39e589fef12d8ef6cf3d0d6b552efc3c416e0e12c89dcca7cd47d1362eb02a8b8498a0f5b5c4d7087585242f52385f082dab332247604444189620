import type { Actions, Store } from "gatsby";
import type { IRemoteFileNode, IGraphQLFieldConfigDefinition, ImageFit, ImageFormat, ImageCropFocus, WidthOrHeight } from "../types";
import type { getRemoteFileEnums } from "./get-remote-file-enums";
interface IResizeArgs {
    fit: ImageFit;
    format: ImageFormat;
    cropFocus: Array<ImageCropFocus>;
    quality: number;
    aspectRatio: number;
}
export declare function resizeResolver(source: IRemoteFileNode, args: Partial<IResizeArgs> & WidthOrHeight, actions: Actions, store?: Store): Promise<{
    width: number;
    height: number;
    src: string;
} | null>;
export declare function generateResizeFieldConfig(enums: ReturnType<typeof getRemoteFileEnums>, actions: Actions, store?: Store): IGraphQLFieldConfigDefinition<IRemoteFileNode, ReturnType<typeof resizeResolver>, IResizeArgs & WidthOrHeight>;
export {};
